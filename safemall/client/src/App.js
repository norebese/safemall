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
import NoticeList from './routes/noticeList';
import NoticeForm from './routes/noticeForm';
import NoticeDetail from './routes/noticeDetail';
import SuggestList from './routes/suggestList';
import SuggestForm from './routes/suggestForm';
import SuggestDetail from './routes/suggestDetail';

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
      <Route path="/notice" element={<NoticeList />} />
      <Route path="/notice/create" element={<NoticeForm />} />
      <Route path="/notice/detail" element={<NoticeDetail />} />
      <Route path="/suggest" element={<SuggestList />} />
      <Route path="/notice/create" element={<SuggestForm />} />
      <Route path="/notice/detail" element={<SuggestDetail />} />
    </Routes>
  );
}

export default App;
