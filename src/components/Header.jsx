import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import './Header.css';
import UserProfile from './UserProfile';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (!document.querySelector('.menu-toggle').contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <header>
            <h1>
                <Link to="/" className="title-link">PureEssence</Link>
            </h1>
            <nav className="menu">
                <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/menu.png" alt="Menú" className="menu-icon" />
                    <div className="menu-icon-close">&times;</div>
                </button>
                <div className={`menu-items ${menuOpen ? 'show' : ''}`}>
                    <Link to="/shop">Tienda</Link>
                    {!user && <Link to="/login">Iniciar Sesión</Link>}
                    {!user && <Link to="/register">Crear Cuenta</Link>}
                    <a href="#footer">Contactos</a>
                </div>
            </nav>
            {user && <UserProfile user={user} />}
        </header>
    );
}

export default Header;
