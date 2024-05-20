import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReportService from '../service/report';

function ReportList() {
  const [reportList, setReportList] = useState([]); 
  //초기에 reportList가 비어있어서 조건부 렌더링이 "등록된 제보가 없습니다." 메시지를 먼저 보여줘 깜빡임 현상 발생
  const [loading, setLoading] = useState(true); // 로딩 상태 추가하면 데이터가 로드된 후에 실제 데이터를 표시해 해결가능

  useEffect(() => {
    const fetchReportList = async () => {
      try {
        const reportService = new ReportService();
        const fetchedData = await reportService.getReportList();
        setReportList(fetchedData);
        setLoading(false); // 데이터 로드 완료 후 로딩 상태 변경
      } catch (error) {
        console.error('Error fetching Report list:', error);
        setLoading(false); // 에러 발생 시에도 로딩 상태 변경
      }
    };

    fetchReportList();
  }, []);

  // 로딩 중에는 로딩 상태를 보여줌
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="report-list-container">
      {reportList.length === 0 ? (
        <div className='noData'>
          <p>등록된 제보가 없습니다.</p>
          <Link to="/report/create" className="write-button">작성하기</Link>
        </div>
      ) : (
        <>
          <h1>게시판</h1>
          <ul className="report-list">
            {reportList.map(report => (
              <li key={report._id}>
                <Link to={`/report/${report._id}`} className="report-link">
                  <div className="report-item">
                    <h2 className="report-title">{report.Title}</h2>
                    <p className="report-info">{report.Writer} | {report.Date}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/report/create" className="write-button">작성하기</Link>
        </>
      )}
    </div>
  );
  
}

export default ReportList;
