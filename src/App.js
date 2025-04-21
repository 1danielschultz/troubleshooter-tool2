import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { TroubleshooterProvider } from './context/TroubleshooterContext';
import GlobalStyles from './styles/GlobalStyles';
import TroubleshooterPage from './pages/TroubleshooterPage';
import AdminPanel from './components/admin/AdminPanel';

function App() {
  return (
    <TroubleshooterProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<TroubleshooterPage />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </Router>
    </TroubleshooterProvider>
  );
}

export default App;
