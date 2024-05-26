import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SuggestService from '../../../service/suggest';
import styles from "./suggestList.module.css";

function SuggestList() {
  const [suggestList, setSuggestList] = useState([]); 
  const [loading, setLoading] = useState(true); // 로딩 상태 추가하면 데이터가 로드된 후에 실제 데이터를 표시해 해결가능
  const [lastId, setLastId] = useState(null);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const fetchSuggestList = async () => {
    try {
      const suggestService = new SuggestService();
      const fetchedData = await suggestService.getSuggestList(lastId);
      setSuggestList(fetchedData);
      if (fetchedData.length > 0) {
        setLastId(fetchedData[fetchedData.length - 1]._id);
      }
      if (fetchedData.length % 5 !== 0) { //가져온 데이터가 3의 배수가 아니면 "더보기" 버튼을 숨김.
        setShowMoreButton(false);
      }
      setLoading(false); // 데이터 로드 완료 후 로딩 상태 변경
    } catch (error) {
      console.error('Error fetching Suggest list:', error);
      setLoading(false); // 에러 발생 시에도 로딩 상태 변경
    }
  };

  const handleLoadMore = async () => {
    if (lastId) {
      try {
        const suggestService = new SuggestService();
        const fetchedData = await suggestService.getSuggestList(lastId); // 페이징 처리
        if (fetchedData.length > 0) {
          setSuggestList([...suggestList, ...fetchedData]);
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
    fetchSuggestList();
  }, []);

  // 로딩 중에는 로딩 상태를 보여줌
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.content}>
      <header className={styles.appheader}>
          <h1>건의사항</h1>
          <div className={styles.searchbar}>
              <input type="search" placeholder="검색"></input>
              <button className={styles.submit} type="submit">&#128269;</button>
          </div>
          <div className={styles.createBtnArea}>
            <Link to="/suggest/create" className={`${styles.btn} ${styles.createbtn}`}>작성하기</Link>
          </div>
        </header>
          <div className={styles.notices}>
            <div className={styles.noticeheader}>
                <span>No</span>
                <span>제목</span>
                <span>작성일</span>
                <span>작성자</span>
                <span>처리여부</span>
            </div>
            {suggestList.length === 0 ? (
              <div className={styles.noData}>
                <p>등록된 건의사항 없습니다.</p>
              </div>
            ) : (
              <>
              {suggestList.map((suggest) => (
                <Link className={styles.noticeitem} to={`/suggest/${suggest._id}`}>
                  <span>no</span>
                  <span>{suggest.Title}</span>
                  <span>{suggest.Date}</span>
                  <span>{suggest.Writer}</span>
                </Link>
              ))}
          {showMoreButton && (
            <div className={styles.loadmore}>
              <button type="button" onClick={handleLoadMore}>더보기▼</button>
            </div>
          )}
        </>
      )}
      </div>
    </div>
  );
  
}

export default SuggestList;
