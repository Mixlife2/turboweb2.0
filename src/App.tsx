import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import HPfreelancer from './pages/HPfreelancer';
import HPbussiness from './pages/HPbussiness';
import LoginPage from './pages/Loginpage';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState('');

    const handleLogin = (type: string) => {
        setIsLoggedIn(true);
        setUserType(type);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserType('');
    };

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                    <Route
                        path="/HPfreelancer"
                        element={isLoggedIn && userType === 'freelancer' ? <HPfreelancer title="Freelancer Title" description="Freelancer Description" /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/HPbussiness"
                        element={isLoggedIn && userType === 'business' ? <HPbussiness title="Business Title" description="Business Description" /> : <Navigate to="/login" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
