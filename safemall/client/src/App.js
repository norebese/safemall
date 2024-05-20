import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReportList from './routes/reportList';
import ReportForm from './routes/reportForm';
import ReportDetail from './routes/reportDetail';

function App() {
  return (
    <Routes>
      <Route path="/report" element={<ReportList/>}/>
      <Route path="/report/create" element={<ReportForm/>}/>
      <Route path="/report/:id" element={<ReportDetail />} />
    </Routes>
  );
}

export default App;
