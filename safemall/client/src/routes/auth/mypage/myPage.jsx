import React, {useState, useEffect} from 'react';
import styles from './myPage.module.css';
import MypageService from '../../../service/myPage';

export default function MyPage(){
    const [myPageList, setMypageList] = useState([]);
    const [nickname, setNickname ] = useState('익명');
    const [date, setDate] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const mypageService = new MypageService();
            const fetchedData = await mypageService.getMypageList();
            setNickname(fetchedData.nickname);
            setDate([fetchedData.createdAt.split('T')[0], fetchedData.updatedAt.split('T')[0]])
            // const myPageList = await mypageService.getPostList(fetchedData.contentsId);
            setMypageList(fetchedData.contentsId)
        };
        fetchData();
    }, []); // 빈 배열을 두 번째 인수로 전달하여 컴포넌트가 마운트될 때 한 번만 실행


    return(
    <>
        <div className={styles.container}>
        <div className={styles.nickname}>{nickname}</div>
        <div>{date[0]} ( {date[1]} )</div>
        <div className={styles.recent}>최근 작성글</div>

        <div className={styles.title}>
            <span>게시판명</span><span>제목</span><span>작성일</span>
        </div>
    
        <div className={styles.mypageitem}>
            {myPageList.map((mypage) => (
                <div className={styles.mypageRow}>
                    <span>{mypage.boardtype}</span>
                    <span>{mypage.Title}</span>
                    <span>{mypage.createdAt.split('T')[0]}</span>
                </div>
            ))}
        </div>

        <div className={styles.button}>
        <button>회원정보 수정</button>
        <button>회원탈퇴</button>
        </div>
    </div>
    </>
    )
}