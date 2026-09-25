import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './tempo.css';

function Tempo() {
    const navigate = useNavigate();
    const targetDate = new Date('2026-10-01T00:00:00');

    const [estArrive, setEstArrive] = useState(false);
    const [tempsRestant, setTempsRestant] = useState({
        jours: 0,
        heures: 0,
        minutes: 0,
        secondes: 0,
    });

    useEffect(() => {
        const mefiemps = () => {
            const maintenant = new Date();
            const difference = targetDate.getTime() - maintenant.getTime();

            if (difference <= 0) {
                setEstArrive(true);
            } else {
                const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
                const heures = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const secondes = Math.floor((difference / 1000) % 60);

                setTempsRestant({ jours, heures, minutes, secondes });
            }
        };

        mefiemps();

        const intervalle = setInterval(mefiemps, 1000);

        return () => clearInterval(intervalle);
    }, []);

    if (estArrive) {
        return (
            <main className="container1">
                <div className="card">
                    <span className="emoji-title">🎉🎉🎉</span>
                    <h1>FELIZ ANIVERSÁRIO!</h1>
                    <br />
                    <h3>Que tu 17º año sea el más maravilloso para ti, mi amor.</h3>
                    <br />
                    <h3> Que te traiga alegría, crecimiento, prosperidad, más amor bajo la protección de Dios</h3>
                    
                    <p>Clica no botão em baixo para para descobrer mais</p>
                    <button onClick={() => navigate("/Home")}>
                        Ir para home
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="container2">
            <div className="card">
                <h1>Contagem regressiva para 1 Outubro</h1>
                <div className="timer-box">
                    <span>{tempsRestant.jours}j </span>
                    <span>{tempsRestant.heures}h </span>
                    <span>{tempsRestant.minutes}m </span>
                    <span>{tempsRestant.secondes}s</span>
                </div>
                <p>Por favor, aguarde um pouco mi corazón...</p>
                <br/>
                <div className="corazon">❤️</div>
            </div>
            
        </main>
    );
}

export default Tempo;