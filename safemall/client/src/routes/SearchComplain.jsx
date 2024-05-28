import React, { useState, useEffect } from 'react';
import styles from './search.module.css';
import { useParams } from 'react-router-dom';

export default function SearchComplain() {
    const [result, setResult] = useState({
        shopNameKor: '',
        MainItems: [],
        domainName: '',
        Totalreport: 0,
        Unprocess: 0,
        mainDamageContent: []
    });
    const { id } = useParams();
    const [showContent1, setShowContent1] = useState(true); 
    const [showContent2, setShowContent2] = useState(false); 
    const [showContent3, setShowContent3] = useState(false); 

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
        const fetchData = async () => {
            try {
                // Fetch the JSON file from the public directory
                const response = await fetch('/data/shopsComplaintsData.json');
                const data = await response.json();
                
                // Assuming data is an array of objects and you need to find the one with the matching id
                const found = data.find(item => item.id === parseInt(id));
                setResult(found);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleClick = () => {
        const url = result.domainName.startsWith('http') ? result.domainName : `http://${result.domainName}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <form action="#">
                        <div className={styles.search}>
                            <input disabled={true} value={result.shopNameKor || ''} type="text" />&emsp;
                            <button onClick={handleClick} type="submit" id={styles.linkBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                </svg>
                                바로가기
                            </button>
                        </div>
                    </form>
                </div>

                <div className={styles.info}>
                    <div className={styles.tab}>
                        <button className={styles.menu1} onClick={handleClick1}>쇼핑몰 정보</button>
                        <button className={styles.menu2} onClick={handleClick2}>접수 현황</button>
                        <button className={styles.menu3} onClick={handleClick3}>주요 피해 내용</button>
                    </div>

                    <div className={styles.pointer} style={{ display: 'none' }}>
                        <div className={styles.pointer1}>▾</div>
                        <div id="pointer2">▾</div>
                        <div className={styles.pointer3}>▾</div>
                    </div>

                    <div className={styles.content1} style={{ display: showContent1 ? 'block' : 'none' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.col}>쇼핑몰명</td>
                                    <td className={styles.row}>{result.shopNameKor}</td>
                                </tr>
                                <tr>
                                    <td className={styles.col}>도메인명</td>
                                    <td className={styles.row}>
                                        <a href={result.domainName.startsWith('http') ? result.domainName : `http://${result.domainName}`} target="_blank" rel="noopener noreferrer">
                                            {result.domainName}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.col}>취급품목</td>
                                    <td className={styles.row}>{result.MainItems.join(', ')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.content2} style={{ display: showContent2 ? 'block' : 'none' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.col}>총 접수건</td>
                                    <td className={styles.row}>{result.Totalreport}</td>
                                </tr>
                                <tr>
                                    <td className={styles.col}>미처리건</td>
                                    <td className={styles.row}>{result.Unprocess}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.content3} style={{ display: showContent3 ? 'block' : 'none' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.col}>주요 피해 내용</td>
                                    <td className={styles.row}>{result.mainDamageContent.join(', ')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
