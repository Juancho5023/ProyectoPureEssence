import React from 'react';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './GoogleLogin.css';

function GoogleLogin() {
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            alert(`Bienvenido ${user.displayName}`);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <button className="google-login-btn" onClick={handleGoogleLogin}>
            Iniciar Sesión con Google
        </button>
    );
}

export default GoogleLogin;
