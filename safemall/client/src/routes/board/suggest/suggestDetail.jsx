import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SuggestService from '../../../service/suggest';
import styles from './suggestDetail.module.css';

function SuggestDetail() {
  const navigate = useNavigate();
  const [suggest, setSuggest] = useState([]); //null로 하면 typeError 남
  const { id } = useParams(); // URL에서 id 파라미터 가져오기

  useEffect(() => {
    const fetchSuggestDetail = async () => {
      try {
        const suggestService = new SuggestService();
        const fetchedData = await suggestService.getSuggestDetail(id);
        setSuggest(fetchedData);
      } catch (error) {
        console.error('Error fetching Report list:', error);
      }
    };

    fetchSuggestDetail();
  }, [id]); // id가 변경될 때마다 useEffect 다시 실행

  return (
    <>
    <div>
      <div className={styles.reportheader}>
        <div>건의사항 게시판</div>
      </div>
      <div className={styles.innercontainer}>
        <div className={styles.maintitle}>{suggest.Title}</div>
        <div className={styles.dateinfo}>
          <span id="date">{suggest.Date}</span>
          <span id="writer">작성자: {suggest.Writer}</span>
          <span id="viewCount">조회수: {suggest.View}</span>
        </div>
        <div className={styles.bodycontent}>
          <div className={styles.contenttitle}>제목</div>
          <div className={styles.contentcontent}>{suggest.Title}</div>
        </div>
        <div className={styles.bodycontent}>
          <div className={styles.contenttitle}>내용</div>
          <div className={styles.contentcontent}>{suggest.Content}</div>
        </div>
        <div className={styles.buttonarea}>
          <button className={styles.button} onClick={() => navigate('/suggest')}>목록</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default SuggestDetail;