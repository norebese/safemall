import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReportService from '../service/report';
import { useNavigate } from 'react-router-dom';

function ReportDetail() {
  const navigate = useNavigate();
  const [report, setReport] = useState([]); //null로 하면 typeError 남
  const { id } = useParams(); // URL에서 id 파라미터 가져오기

  useEffect(() => {
    const fetchReportDetail = async () => {
      try {
        const reportService = new ReportService();
        const fetchedData = await reportService.getReportDetail(id);
        setReport(fetchedData);
      } catch (error) {
        console.error('Error fetching Report list:', error);
      }
    };

    fetchReportDetail();
  }, [id]); // id가 변경될 때마다 useEffect 다시 실행

  return (
    <div>
      <div className="report-header">
        <div>제보 게시판</div>
      </div>
      <div className="inner-container">
        <div className="main-title">{report.Title}</div>
        <div className="date-info">
          <span id="date">{report.Date}</span>
          <span id="writer">작성자: {report.Writer}</span>
          <span id="viewCount">조회수: {report.View}</span>
        </div>
        <div className="body-content">
          <div className="content-title">쇼핑몰 명</div>
          <div className="content-content">{report.ShopName}</div>
        </div>
        <div className="body-content">
          <div className="content-title">도메인 주소</div>
          <div className="content-content">{report.Domain}</div>
        </div>
        <div className="body-content">
          <div className="content-title">사업자 명</div>
          <div className="content-content">{report.Owner}</div>
        </div>
        <div className="body-content">
          <div className="content-title">기타사항</div>
          <div className="content-content">{report.Etc}</div>
        </div>
        {/* <div id="answer-container">
          <div id="title-section">
            <div id="answer-title">관리자 답변:</div>
            <div id="answer-date">{report.answerDate}</div>
          </div>
          <div id="answer" className="content-content">
            {report.adminAnswer}
          </div>
        </div> */}
        <div className="button-area">
          <button className="button" onClick={() => navigate('/report')}>목록</button>
        </div>
      </div>
    </div>
  );
}

export default ReportDetail;
