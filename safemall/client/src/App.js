import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReportList from './routes/reportList';
import ReportForm from './routes/reportForm';
import ReportDetail from './routes/reportDetail';
import MainPage from './routes/mainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/report" element={<ReportList/>}/>
      <Route path="/report/create" element={<ReportForm/>}/>
      <Route path="/report/:id" element={<ReportDetail />} />
    </Routes>
  );
}

export default App;
