import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Slider.css';

function Slider() {
    const navigate = useNavigate();

    const redirectToShop = () => {
        navigate('/shop');
    };

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slide" style={{ backgroundImage: "url('/PE.png')" }}>
                    <div className="text-boxes">
                        <div className="text-box">
                            <h2>¡Nuevos Productos!</h2>
                            <h3>Descúbrelos</h3>
                            <p>Nueva colección de verano</p>
                            <button className="btn" onClick={redirectToShop}>Ver más</button>
                        </div>
                        <div className="text-box">
                            <h2>Nueva Pañoleta</h2>
                            <h3>Precio insuperable</h3>
                            <p>Con los mejores materiales y calidad</p>
                            <button className="btn" onClick={redirectToShop}>Ver más</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
