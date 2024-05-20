import React, { useState, useEffect } from 'react';
import MainService from '../service/main';
import './mainPage.css'

function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [skipCount, setSkipCount] = useState(0);

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
    setSkipCount(prev => prev + 3);
    console.log('더보기 버튼 클릭 - 호출');
  };

  useEffect(() => {
    const fetchWarnList = async () => {
      try {
        const maintService = new MainService();
        const fetchedData = await maintService.getWarnList(skipCount);
        setCards(fetchedData);
      } catch (error) {
        console.error('Error fetching Report list:', error);
      }
    };
    fetchWarnList();
  }, [skipCount]); //여기에 들어가야 skipCount값이 변하면 새로운 값 로드됨

  return (
    <div id="container">
      <div id="title">
        <h1><img src="./cart.svg" alt="" /><br /> SAFE MALL.</h1>
      </div>
      <form onSubmit={handleSearchSubmit}>
        <div id="search">
          <input
            type="text"
            placeholder="상호명 또는 URL 입력"
            value={searchQuery}
            onChange={handleInputChange}
          />&emsp;
          <button type="submit">🔍</button>
        </div>
      </form>

      <div id="site">
        <span className="list">🚨 피해 다발 사이트</span>
        <span className="count">( 총 접수건 / 미처리건 )</span>
      </div>

    {!cards ? (
        <div className='noData'>
            <p>등록된 사이트 없음.</p>
        </div>
    ) : (
        cards.map(card => (
            <div key={card._id} className="listcard">
            <span>{card.shopName}</span><span>( {card.Totalreport}/{card.Unprocess} )</span><br />
            <span className="detail">{card.MainItems}</span>
            </div>
        ))
    )}

      <div id="more">
        <button type="button" onClick={handleLoadMore}>더보기▾</button>
      </div>
      <div className='bottom'>

      </div>
    </div>
  );
}

export default MainPage;
