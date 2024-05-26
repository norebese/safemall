import { React, useState, useEffect } from 'react';
import styles from './search.module.css';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import MainService from '../service/main';

export default function Search() {
    const [result, setResult] = useState([null]); 
    const { id } = useParams();

    const [showContent1, setShowContent1] = useState(true); 
    const [showContent2, setShowContent2] = useState(); 
    const [showContent3, setShowContent3] = useState(); 
    const handleClick1 = () => {
        setShowContent1(true); 
        setShowContent2(false);
        setShowContent3(false);
    };
    const handleClick2 = () => {
        setShowContent1(false); 
        setShowContent2(true);
        setShowContent3(false);
    };

    const handleClick3 = () => {
        setShowContent1(false); 
        setShowContent2(false);
        setShowContent3(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchSearchDetail = async () => {
          try {
            const maintService = new MainService();
            const fetchedData = await maintService.getSearchResultDetail(id);
            setResult(fetchedData);
            console.log(fetchedData)
          } catch (error) {
            console.error('Error fetching Report list:', error);
          }
        };
    
        fetchSearchDetail();
      }, []); 


    return(
        <>
        <div className={styles.container}>
            <div className={styles.title}>
                <form action="#">
                    <div className={styles.search} >
                    <input disabled='true' value={result.domainName} type="text" placeholder="상호명 또는 URL 입력"/>&emsp;
                    <button type="submit">🔍</button>
                    </div>
                </form>
            </div>

            <div className={styles.score}>
                <span className={styles.number}>{result.scoreTotal} / 10</span>
                <hr></hr>
                <span>평점</span>
            </div>
        
            <div className={styles.date}>
                <span>{result.dateMonitoring}</span>
            </div>

            <div className={styles.info}>
                <div className={styles.tab}>
                    <button className={styles.menu1} onClick={handleClick1}>
                    쇼핑몰 정보 </button>
                    <button className={styles.menu2} onClick={handleClick2}>점수기준</button>
                    <button className={styles.menu3} onClick={handleClick3}>상세지표</button>
                </div>

                <div className={styles.pointer} style={{display: 'none'}}>
                <div className={styles.pointer1}>▾</div><div id="pointer2">▾</div><div className={styles.pointer3}>▾
                </div>
                </div>
            
                <div className={styles.content1}
                style={{ display: showContent1? 'block' : 'none'}}>
                    <table>
                        <tr>
                            <td className={styles.col}>쇼핑몰명</td>
                            <td className={styles.row}>{result.shopNameKor}</td>
                        </tr>
                        <tr>
                            <td className={styles.col}>도메인명</td>
                            <td className={styles.row}>{result.domainName}</td>
                        </tr>
                        <tr>
                            <td className={styles.col}>최초신고일자</td>
                            <td className={styles.row}>{result.dateInit}</td>
                        </tr>

                        <tr>
                            <td className={styles.col}>영업형태</td>
                            <td className={styles.row}> {result.businessType}</td>
                        </tr>

                        <tr>
                            <td className={styles.col}>취급품목</td>
                            <td className={styles.row}>{result.mainItems}</td>
                        </tr>

                        <tr>
                            <td className= {`${styles.lb} ${styles.col}`}>업소상태</td>
                            <td className= {`${styles.rb} ${styles.row}`}>{result.businessState}</td>
                        </tr>
                    </table>
                </div>

                <div className={styles.content2}
                style={{ display: showContent2 ? 'block' : 'none' }}>
                    <table>
                        <tr>
                            <td className={styles.col}>사업자정보표시</td>
                            <td className={styles.row}>{result.scoreBusinessInfo}</td>
                        </tr>
                        <tr>
                            <td className={styles.col}>청약철회</td>
                            <td className={styles.row}>{result.scoreSW}</td>
                        </tr>
                        <tr>
                            <td className={styles.col}>결제방법</td>
                            <td className={styles.row}>{result.scorePayment}</td>
                        </tr>
                        <tr>
                            <td className={styles.col}>이용약관평가</td>
                            <td className={styles.row}>{result.scoreTermUse}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.lb} ${styles.col}`}>개인정보보안</td>
                            <td className={`${styles.rb} ${styles.row}`}>{result.scorePIS}</td>
                        </tr>
                    </table>
                </div>

                <div className={styles.content3}
                style={{ display: showContent3 ? 'block' : 'none' }}>
                <table>
                    <tr>
                        <td className={styles.col}>사이트개설년도</td>
                        <td className={styles.row}>{result.dateSiteOpen}</td>
                    </tr>
                    <tr>
                        <td className={styles.col}>청약철회가능여부</td>
                        <td className={styles.row}>{result.possibleSW}</td>
                    </tr>

                    <tr>
                        <td className={styles.col}>결제방법</td>
                        <td className={styles.row}>{result.detailPayment}</td>
                    </tr>

                    <tr>
                        <td className={styles.col}>이용약관준수도</td>
                        <td className={styles.row}>{result.detailTermUse}</td>
                    </tr>

                    <tr>
                        <td className={styles.col}>개인정보취급방침</td>
                        <td className={styles.row}>{result.detailPIS}</td>
                    </tr>

                    <tr>
                        <td className={styles.col}>회원탈퇴방법</td>
                        <td className={styles.row}>{result.detailWithdrawal}</td>
                    </tr>

                    <tr>
                        <td className={`${styles.lb} ${styles.col}`}>구매안전서비스</td>
                        <td className={`${styles.rb} ${styles.row}`}>{result.PSS}</td>
                    </tr>
                </table>
                </div>
            </div>
            </div>
        </>
    )
};
