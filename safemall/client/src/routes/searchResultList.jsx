import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styles from './searchResultList.module.css';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
    const location = useLocation();
    const searchResults = location.state?.searchResults || [];

    return (
        <div className={styles.row}>
            {searchResults.map(shop => (
                <div key={searchResults._id} className="col-md-4 mb-4" id={styles.width}>
                    <Link to={`/search/detail/${shop._id}`} className="text-decoration-none">
                        <Card className="h-100">
                            <div className="row g-0">
                                <div className="col-md-8" id={styles.arange}>
                                    <Card.Body>
                                        <Card.Title>{shop.shopNameKor}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{shop.domainName}</Card.Subtitle>
                                    </Card.Body>
                                    <div className={styles.status}>
                                        <Card.Text>{shop.businessState}</Card.Text>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SearchResult;
