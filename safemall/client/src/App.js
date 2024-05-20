import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreventionList from './components/PreventionList';
import PreventionForm from './components/PreventionForm';
import PreventionDetail from './components/PreventionDetail';

function App() {
  return (
    <Router>
      <div>
        <h1>Prevention Board</h1>
        <Routes>
          <Route exact path="/" element={<PreventionList />} />
          <Route path="/create" element={<PreventionForm />} />
          <Route path="/edit/:id" element={<PreventionForm />} />
          <Route path="/prevention/:id" element={<PreventionDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

