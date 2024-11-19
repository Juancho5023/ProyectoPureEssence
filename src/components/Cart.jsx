import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="cart-container">
            <button className="cart-button">🛒 Carrito</button>
            <div className="cart-dropdown">
                <h2>Carrito de Compras</h2>
                {cartItems.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div>
                                    <p>{item.name}</p>
                                    <p>${item.price.toFixed(2)}</p>
                                </div>
                                <button className="remove-button" onClick={() => removeFromCart(index)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="cart-total">
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    );
}

export default Cart;
