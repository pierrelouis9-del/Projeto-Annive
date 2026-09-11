import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Home from "./Home"

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
            <><div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>🎉 Conteúdo Desbloqueado!</h1>
                <p>Seja bem-vindo à próxima etapa.</p>
                navigate ("/Home")
            </div></>
        );
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Compte à rebours avant le 1er Octobre</h1>
            <div style={{ fontSize: '2rem', margin: '20px 0' }}>
                <span>{tempsRestant.jours}j </span>
                <span>{tempsRestant.heures}h </span>
                <span>{tempsRestant.minutes}m </span>
                <span>{tempsRestant.secondes}s</span>
            </div>
            <p>Veuillez patienter pour débloquer la suite...</p>
        </div>
    );
}
export default Tempo;