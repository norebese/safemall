import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReportService from '../service/report';
import { useNavigate } from 'react-router-dom';
import styles from "./reportDetail.module.css";

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
      <div className={styles.reportheader}>
        <div>제보 게시판</div>
      </div>
      <div className={styles.innercontainer}>
        <div className={styles.maintitle}>{report.Title}</div>
        <div className={styles.dateinfo}>
          <span id={styles.date}>{report.Date}</span>
          <span id={styles.writer}>작성자: {report.Writer}</span>
          <span id={styles.viewCount}>조회수: {report.View}</span>
        </div>
        <div className={styles.bodycontent}>
          <div className={styles.contenttitle}>쇼핑몰 명</div>
          <div className={styles.contentcontent}>{report.ShopName}</div>
        </div>
        <div className={styles.bodycontent}>
          <div className={styles.contenttitle}>도메인 주소</div>
          <div className={styles.contentcontent}>{report.Domain}</div>
        </div>
        <div className={styles.bodycontent}>
          <div className={styles.contenttitle}>사업자 명</div>
          <div className={styles.contentcontent}>{report.Owner}</div>
        </div>
        <div className={styles.bodycontent}>
          <div className={styles.contenttitle}>기타사항</div>
          <div className={styles.contentcontent}>{report.Etc}</div>
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
          <button className={styles.button} onClick={() => navigate('/report')}>목록</button>
        </div>
      </div>
    </div>
  );
}

export default ReportDetail;
