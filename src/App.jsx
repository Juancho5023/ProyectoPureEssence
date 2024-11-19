import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import Header from './components/Header';
import Slider from './components/Slider';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import './styles/App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    setCartItems(userDoc.data().cart);
                }
            } else {
                setUser(null);
                setCartItems([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const addToCart = async (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        if (user) {
            await setDoc(doc(db, 'users', user.uid), { cart: updatedCart }, { merge: true });
        }
    };

    const removeFromCart = async (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        if (user) {
            await setDoc(doc(db, 'users', user.uid), { cart: updatedCart }, { merge: true });
        }
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
                <Routes>
                    <Route path="/" element={<><Slider /><Login /></>} />
                    <Route path="/shop" element={<Shop addToCart={addToCart} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
