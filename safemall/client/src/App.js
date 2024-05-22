import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReportList from './routes/reportList';
import ReportForm from './routes/reportForm';
import ReportDetail from './routes/reportDetail';
import MainPage from './routes/mainPage';
import PreventionList from './routes/PreventionList';
import PreventionForm from './routes/PreventionForm';
import PreventionDetail from './routes/PreventionDetail';
import LoginPage from './routes/loginPage';
import ReportEditForm from './routes/reportEditForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/report" element={<ReportList/>}/>
      <Route path="/report/create" element={<ReportForm/>}/>
      <Route path="/report/:id" element={<ReportDetail />} />
      <Route path="/report/edit/:id" element={<ReportEditForm/>} />
      <Route path="/prevent" element={<PreventionList />} />
      <Route path="/prevent/create" element={<PreventionForm />} />
      <Route path="/prevent/edit/:id" element={<PreventionForm />} />
      <Route path="/prevent/prevention/:id" element={<PreventionDetail />} />
    </Routes>
  );
}

export default App;
