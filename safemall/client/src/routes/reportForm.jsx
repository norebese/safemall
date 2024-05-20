import React, { useState } from 'react';
import ReportService from '../service/report';
import { useNavigate } from 'react-router-dom';

function ReportForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Title: '',
    ShopName: '',
    Domain: '',
    Owner: '',
    Etc: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reportService = new ReportService();
      await reportService.submitReport(formData);
      // 제출 성공 시 사용자에게 알림 또는 리다이렉션 등 추가 작업 수행
      alert('제출되었습니다.');
      navigate('/report');
    } catch (error) {
      console.error('Error submitting report:', error);
      // 오류 처리 로직 추가 가능
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header">
        <div>제보하기</div>
      </div>
      <div className="form-body">
        <div className="body-container">
          <label htmlFor="Title" className="form-label">제목
            <span className="required">(필수)</span>
          </label>
          <input
            type="text"
            id="Title"
            name="Title"
            className="form-input"
            placeholder="제목을 입력해 주세요"
            value={formData.Title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="body-container">
          <label htmlFor="ShopName" className="form-label">쇼핑몰 명</label>
          <input
            type="text"
            id="ShopName"
            name="ShopName"
            className="form-input"
            placeholder="쇼핑몰 명을 입력해 주세요"
            value={formData.ShopName}
            onChange={handleChange}
          />
        </div>
        <div className="body-container">
          <label htmlFor="Domain" className="form-label">도메인 주소
            <span className="required">(필수)</span>
          </label>
          <input
            type="text"
            id="Domain"
            name="Domain"
            className="form-input"
            placeholder="도메인 주소를 입력해 주세요"
            value={formData.Domain}
            onChange={handleChange}
            required
          />
        </div>
        <div className="body-container">
          <label htmlFor="Owner" className="form-label">사업자 명</label>
          <input
            type="text"
            id="Owner"
            name="Owner"
            className="form-input"
            placeholder="사업자 명을 입력해 주세요"
            value={formData.Owner}
            onChange={handleChange}
          />
        </div>
        <div className="body-container">
          <label htmlFor="Etc" className="form-label">기타사항</label>
          <textarea
            name="Etc"
            id="Etc"
            className="form-input"
            cols="30"
            rows="10"
            placeholder="기타 사항을 입력해 주세요"
            value={formData.Etc}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="form-actions">
        <button type="submit" className="form-button">제출</button>
      </div>
    </form>
  );
}

export default ReportForm;
