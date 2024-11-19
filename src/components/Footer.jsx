import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer id="footer">
            <div className="contact-info">
                <h2>Contáctanos</h2>
                <p>Email: <a href="mailto:info@pureessence.com">info@pureessence.com</a></p>
                <p>Teléfono: <a href="tel:+123456789">+1 234 567 89</a></p>
                <p>Dirección: 123 Calle Principal, Ciudad, País</p>
            </div>
            <div className="social-media">
                <h3>Síguenos</h3>
                <a href="https://www.facebook.com/pureessence" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/pureessence" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.twitter.com/pureessence" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </footer>
    );
}

export default Footer;
