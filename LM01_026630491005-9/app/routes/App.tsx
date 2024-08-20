import React from 'react';
import Header from './Header';
import Menu from './menu';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PetHomePage from './PetHomePage';
import MyPetForm from './MyPetForm';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Menu />
            <main>
                <Routes>
                    <Route path="/" element={<PetHomePage />} />
                    <Route path="/pet-home" element={<PetHomePage />} />
                    <Route path="/my-pet-form" element={<MyPetForm />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
