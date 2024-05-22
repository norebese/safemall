import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReportService from '../service/report';
import styles from "./reportList.module.css";

function ReportList() {
  const [reportList, setReportList] = useState([]); 
  //초기에 reportList가 비어있어서 조건부 렌더링이 "등록된 제보가 없습니다." 메시지를 먼저 보여줘 깜빡임 현상 발생
  const [loading, setLoading] = useState(true); // 로딩 상태 추가하면 데이터가 로드된 후에 실제 데이터를 표시해 해결가능
  const [lastId, setLastId] = useState(0);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const fetchReportList = async () => {
    try {
      const reportService = new ReportService();
      const fetchedData = await reportService.getReportList(lastId);
      setReportList(fetchedData);
      if (fetchedData.length > 0) {
        setLastId(fetchedData[fetchedData.length - 1]._id);
      }
      if (fetchedData.length % 5 !== 0) { //가져온 데이터가 3의 배수가 아니면 "더보기" 버튼을 숨김.
        setShowMoreButton(false);
      }
      setLoading(false); // 데이터 로드 완료 후 로딩 상태 변경
    } catch (error) {
      console.error('Error fetching Report list:', error);
      setLoading(false); // 에러 발생 시에도 로딩 상태 변경
    }
  };

  const handleLoadMore = async () => {
    if (lastId) {
      try {
        const reportService = new ReportService();
        const fetchedData = await reportService.getReportList(lastId); // 페이징 처리
        if (fetchedData.length > 0) {
          setReportList([...reportList, ...fetchedData]);
          setLastId(fetchedData[fetchedData.length - 1]._id);
        }
        if (fetchedData.length % 5 !== 0) { //가져온 데이터가 3의 배수가 아니면 "더보기" 버튼을 숨김.
          setShowMoreButton(false);
        }
      } catch (error) {
        console.error('Error fetching more Report list:', error);
      }
    }
  };

  useEffect(() => {
    fetchReportList();
  }, []);

  // 로딩 중에는 로딩 상태를 보여줌
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.content}>
      <header class={styles.appheader}>
          <h1>제보 게시판</h1>
          <div class={styles.searchbar}>
              <input type="search" placeholder="검색"></input>
              <button className={styles.submit} type="submit">&#128269;</button>
              <Link to="/report/create" className={`${styles.btn} ${styles.createbtn}`}>작성하기</Link>
          </div>
        </header>
      {reportList.length === 0 ? (
        <div className={styles.noData}>
          <p>등록된 제보가 없습니다.</p>
          <Link to="/report/create" className={styles.writebutton}>작성하기</Link>
        </div>
      ) : (
        <>
          <div class={styles.notices}>
            <div class={styles.noticeheader}>
                <span>No</span>
                <span>제목</span>
                <span>작성일</span>
                <span>작성자</span>
            </div>
              {reportList.map((report) => (
                <Link className={styles.noticeitem} to={`/report/${report._id}`}>
                  <span>no</span>
                  <span>{report.Title}</span>
                  <span>{report.Date}</span>
                  <span>{report.Writer}</span>
                </Link>
              ))}
          </div>
          {showMoreButton && (
            <div class={styles.loadmore}>
              <button type="button" onClick={handleLoadMore}>더보기▼</button>
            </div>
          )}
        </>
      )}
    </div>
  );
  
}

export default ReportList;
