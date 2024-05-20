import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReportService from '../service/report';

function ReportList() {
  const [reportList, setReportList] = useState([]);

  useEffect(() => {
    const fetchReportList = async () => {
      try {
        const reportService = new ReportService();
        const fetchedData = await reportService.getReportList();
        setReportList(fetchedData);
      } catch (error) {
        console.error('Error fetching Report list:', error);
      }
    };

    fetchReportList();
  }, []);

  if (reportList.length === 0) {
    return (<div className='noData'><p>등록된 제보가 없습니다.</p>
        <Link to="/report/create" className="write-button">작성하기</Link>
        </div>
    );
  }

  return (
    <div className="report-list-container">
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
    </div>
  );
}

export default ReportList;
