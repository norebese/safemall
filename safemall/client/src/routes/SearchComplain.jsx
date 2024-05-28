import React, { useState, useEffect } from 'react';
import styles from './search.module.css';
import { useParams } from 'react-router-dom';

export default function SearchComplain() {
    const [result, setResult] = useState(null);
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
                const response = await fetch('/data/shopsComplaintsData.json');
                const data = await response.json();
                console.log('Fetched data:', data); // 데이터 확인
                const found = data.find(item => item.no === parseInt(id));
                console.log('Found item:', found); // 검색 결과 확인
                setResult(found);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [id]);
    

    if (!result) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className={styles.body1}>
                <div className={styles.left}>
                    <div className={styles.table1} onClick={handleClick1}>쇼핑몰 정보</div>
                    <div className={styles.table1} onClick={handleClick2}>접수현황</div>
                    <div className={styles.table1} onClick={handleClick3}>주요피해</div>
                </div>

                <div className={styles.right}>
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
