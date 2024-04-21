import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HPfreelancer from './pages/HPfreelancer';
import HPbussiness from './pages/HPbussiness';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/HPfreelancer" element={<HPfreelancer title="Título de Freelancer" description="Descripción de Freelancer" />} />
                    <Route path="/HPbussiness" element={<HPbussiness title="Título de Bussiness" description="Descripción de Bussiness"/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
