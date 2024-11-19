import React, { useEffect } from 'react';
import './Shop.css';

function Shop({ addToCart }) {
    useEffect(() => {
        const products = document.querySelectorAll('.product');

        const handleMouseEnter = (event) => {
            event.currentTarget.style.transform = 'translateY(-10px)';
            event.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        };

        const handleMouseLeave = (event) => {
            event.currentTarget.style.transform = 'translateY(0)';
            event.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        };

        products.forEach((product) => {
            product.addEventListener('mouseenter', handleMouseEnter);
            product.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            products.forEach((product) => {
                product.removeEventListener('mouseenter', handleMouseEnter);
                product.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const products = [
        {
            name: 'Camiseta PureEssence',
            image: '/CamisetaPE.webp',
            price: 25.00,
        },
        {
            name: 'Pantalón PureEssence',
            image: '/PantalonPE.webp',
            price: 40.00,
        },
        {
            name: 'Pañoleta PureEssence',
            image: '/PañoletaPE.webp',
            price: 15.00,
        },
        {
            name: 'Gorra PureEssence',
            image: '/GorraPE.webp',
            price: 20.00,
        }
    ];

    return (
        <section className="shop">
            {products.map((product, index) => (
                <div key={index} className="product">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>${product.price.toFixed(2)}</p>
                    <button className="btn" onClick={() => addToCart(product)}>Añadir al Carrito</button>
                </div>
            ))}
        </section>
    );
}

export default Shop;
