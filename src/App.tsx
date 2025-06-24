import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<AuthPage formType="login" />} />

        <Route path="/signup" element={<AuthPage formType="signup" />} />
      </Routes>
    </Router>
  );
}

export default App
