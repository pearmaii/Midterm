import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pet-home">Pet Home</Link></li>
                <li><Link to="/my-pet-form">My Pet Form</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
