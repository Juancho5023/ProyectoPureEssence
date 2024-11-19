import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import './UserProfile.css';

function UserProfile({ user }) {
    const [profileOpen, setProfileOpen] = useState(false);

    const toggleProfile = () => {
        setProfileOpen(!profileOpen);
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            alert('Sesión cerrada');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="user-profile">
            <button className="profile-button" onClick={toggleProfile}>
                {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="profile-photo" />
                ) : (
                    <span className="profile-initial">{user.email[0].toUpperCase()}</span>
                )}
            </button>
            {profileOpen && (
                <div className="profile-dropdown">
                    <p>Hola, {user.displayName || user.email}</p>
                    <button className="sign-out-button" onClick={handleSignOut}>Cerrar Sesión</button>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
