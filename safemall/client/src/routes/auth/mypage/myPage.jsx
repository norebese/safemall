import React, {useState, useEffect} from 'react';
import styles from './myPage.module.css';
import MypageService from '../../../service/myPage';
import { Link } from 'react-router-dom';

export default function MyPage(){
    const [postlist, setPostlist] = useState([]);
    const [nickname, setNickname ] = useState('익명');
    const [date, setDate] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const mypageService = new MypageService();
            const fetchedData = await mypageService.getMypageList();
            setNickname(fetchedData.nickname);
            setDate([fetchedData.createdAt.split('T')[0], fetchedData.updatedAt.split('T')[0]])
            // const myPageList = await mypageService.getPostList(fetchedData.contentsId);
            setPostlist(fetchedData.contentsId)
        };
        fetchData();
    }, []); // 빈 배열을 두 번째 인수로 전달하여 컴포넌트가 마운트될 때 한 번만 실행
    console.log(postlist)
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
            {postlist.map((post) => (
                <div className={styles.mypageRow}>
                    <Link to={`/board/${post.boardType.toLowerCase()}/${post.postNo}`} key={post.postNo}>
                        <span>{post.boardTypeKor}</span>
                        <span>{post.Title}</span>
                        <span>{post.createdAt.split('T')[0]}</span>
                    </Link>
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