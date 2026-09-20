import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Acceuil.css';



function Acceuil() {
    const navigate = useNavigate();

    return(
        <main className="acceuil">
            <div className="text">
                <h2>Oi, Amorcita</h2>
                <p> <i> Preparei este site para você como  um presente para você!</i></p>
                <p><i> Espero que você goste!</i></p>
                <strong>||</strong>
                <strong>||</strong>
                <strong>\/</strong>
                <button onClick={() => navigate('/Tempo')}>Começar</button>
            </div>
        </main>
    );
}

export default Acceuil;