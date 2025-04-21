import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TroubleshooterProvider } from './context/TroubleshooterContext';
import GlobalStyles from './styles/GlobalStyles';
import TroubleshooterPage from './pages/TroubleshooterPage';
import AdminPanel from './components/admin/AdminPanel';

function App() {
  return (
    <TroubleshooterProvider>
      <GlobalStyles />
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<TroubleshooterPage />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </TroubleshooterProvider>
  );
}

export default App;
