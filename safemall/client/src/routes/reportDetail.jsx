import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReportService from '../service/report';
import { useNavigate } from 'react-router-dom';
import styles from "./reportDetail.module.css";
import { AuthContext } from '../context/authContext';

function ReportDetail() {
  const navigate = useNavigate();
  const { isLoggedIn, nickname } = useContext(AuthContext);
  const [report, setReport] = useState([null]); //null로 하면 typeError 남
  const { id } = useParams(); // URL에서 id 파라미터 가져오기

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const reportService = new ReportService();
      const response = await reportService.deleteReport(id);
      if (response.status === 200) {
        alert('삭제되었습니다.'); 
        navigate('/report'); 
      } else {
        console.error('삭제 실패:', response.statusText);
        alert('삭제를 실패했습니다. 잠시 후 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, []); // id가 변경될 때마다 useEffect 다시 실행

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
        {isLoggedIn && nickname === report.Writer && (
          <div className={styles.buttonarea}>
              <button className={styles.button} onClick={() => navigate(`/report/edit/${id}`)}>수정하기</button>
              <button className={styles.button} onClick={handleDelete}>삭제하기</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportDetail;
