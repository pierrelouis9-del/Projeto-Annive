import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <main>
            <div className="salu">
                <h2>Bem vindo ao site presente</h2>
                <p>Por favor, leia bem antes de clicar. Aqui é so para se dirigir para o contedudo principal </p>

            </div>
            <div className="conteudo">
                <h3>Clique no botão em baixo para ir no conteúdo principal</h3>
                <button onClick={() => navigate('/Conteudo')}>Clique aqui</button>
            </div>
        </main>
    );
}

export default Home;