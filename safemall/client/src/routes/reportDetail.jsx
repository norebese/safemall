import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReportService from '../service/report';
import { useNavigate } from 'react-router-dom';
import styles from "./reportDetail.module.css";
import { AuthContext } from '../context/authContext';

function ReportDetail() {
  const navigate = useNavigate();
  const { isLoggedIn, nickname } = useContext(AuthContext);
  const [report, setReport] = useState([null]); 
  const { no } = useParams(); // URL에서 no 파라미터 가져오기

  const handleDelete = async (e) => {
    e.preventDefault();
    // try {
      const reportService = new ReportService();
      const response = await reportService.deleteReport(no);
        alert('삭제되었습니다.'); 
        navigate('/board/report'); 
    // } catch (error) {
    //   console.error('Error submitting report:', error);
    // }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchReportDetail = async () => {
      try {
        const reportService = new ReportService();
        const fetchedData = await reportService.getReportDetail(no);
        console.log(fetchedData)
        setReport(fetchedData);
      } catch (error) {
        console.error('Error fetching Report list:', error);
      }
    };

    fetchReportDetail();
  }, []); 

  return (
    <div>
      <div className={styles.reportheader}>
        <div>제보 게시판</div>
      </div>
      <div className={styles.innercontainer}>
        <div className={styles.maintitle}>{report.Title}</div>
        <div className={styles.dateinfo}>
          <span id={styles.date}>{report.createdAt}</span>
          <span id={styles.writer}>작성자: {report.Author}</span>
          <span id={styles.viewCount}>조회수: {report.View}</span>
        </div>
        <div className={styles.bodycontent}>
          <div className={styles.contenttitle}>쇼핑몰 명</div>
          <div className={styles.contentcontent}>{report.shopName}</div>
        </div>
        <div className={styles.bodycontent}>
          <div className={styles.contenttitle}>도메인 주소</div>
          <div className={styles.contentcontent}>{report.domainName}</div>
        </div>
        <div className={styles.bodycontent}>
          <div className={styles.contenttitle}>사업자 명</div>
          <div className={styles.contentcontent}>{report.company}</div>
        </div>
        <div className={styles.bodycontent}>
          <div className={styles.contenttitle}>기타사항</div>
          <div className={styles.contentcontent}>{report.Other}</div>
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
        <div className={styles.buttonarea}>
          <button className={styles.button} onClick={() => navigate('/board/report')}>목록</button>
        </div>
        {isLoggedIn && nickname === report.Author && (
          <div className={styles.buttonarea}>
              <button className={styles.button} onClick={() => navigate(`/board/report/edit/${no}`)}>수정하기</button>
              <button className={styles.button} onClick={handleDelete}>삭제하기</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportDetail;
