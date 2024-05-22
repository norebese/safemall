import React, { useState, useEffect } from 'react';
import MainService from '../service/main';
import styles from "./mainPage.module.css";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // 여기서 검색을 실행하거나 필요한 로직을 수행합니다.
    console.log('검색어:', searchQuery);
    // 예시로 콘솔에 검색어를 출력하고 나중에 실제 검색 기능을 추가할 수 있습니다.
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLoadMore = () => {
    setCount(prev => prev + 3);
  };

  const getWarnList = async () => {
    try {
      const maintService = new MainService();
      const fetchedData = await maintService.getWarnList(count);
      setCards(fetchedData);
      // console.log(fetchedData.length)
      if (fetchedData.length % 3 !== 0) { //가져온 데이터가 3의 배수가 아니면 "더보기" 버튼을 숨김.
        setShowMoreButton(false);
      }
    } catch (error) {
      console.error('Error fetching Report list:', error);
    }
  };

  useEffect(() => {
    getWarnList();
  }, [count]); //count값이 변하면 새로운 값 로드됨

  return (
    <div id={styles.container}>
      <div id={styles.title}>
      
        <h1><img src={process.env.PUBLIC_URL + '/cart.svg'} width = '300px'/><br /> SAFE MALL.</h1>
      </div>
      <form onSubmit={handleSearchSubmit}>
        <div id={styles.search}>
          <input
            type="text"
            placeholder="상호명 또는 URL 입력"
            value={searchQuery}
            onChange={handleInputChange}
          />&emsp;
          <button type="submit">🔍</button>
        </div>
      </form>

      <div id={styles.site}>
        <span className={styles.list}>🚨 피해 다발 사이트</span>
        <span className={styles.count}>( 총 접수건 / 미처리건 )</span>
      </div>

    {!cards ? (
        <div className={styles.noData}>
            <p>등록된 사이트 없음.</p>
        </div>
    ) : (
        cards.map(card => (
            <div key={card._id} className={styles.listcard}>
            <span>{card.shopName}</span><span>( {card.Totalreport}/{card.Unprocess} )</span><br />
            <span className={styles.detail}>{card.MainItems}</span>
            </div>
        ))
    )}

      {showMoreButton && (
        <div id={styles.more}>
          <button type="button" onClick={handleLoadMore}>더보기▾</button>
        </div>
      )}
      <div className={styles.bottom}>

      </div>
    </div>
  );
}

export default MainPage;
