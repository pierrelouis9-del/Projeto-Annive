import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';

function Home() {

    const navigate = useNavigate();

    return (
        <main>
            <div className="salu">
                <h2>Bem-vinda ao seu presentes ❤️</h2>

                <p>
                    Hoje, 1º de outubro, é um dia especial para você...
                    e para mim mi coração.
                </p>

                <p>
                    Foi o dia em que o mundo ganhou uma pessoa que,
                    de alguma forma, acabou se tornando especial para mim.
                </p>

                <p>
                    Talvez ainda não tenhamos tantas histórias para contar,
                    mas temos algo que eu gosto ainda mais:
                    a possibilidade de criar muitas delas juntos.
                </p>

                <p>
                    Então preparei esse pequeno presente para você.
                    Não é perfeito, mas cada detalhe foi feito pensando em você. ❤️
                </p>
            </div>

            <div className="conteudo">
                <h3>
                    Agora, se você estiver pronta...
                    tem mais uma coisa esperando por você.
                </h3>

                <button onClick={() => navigate('/Conteudo')}>
                    Descobrir
                </button>
            </div>
        </main>
    );
}

export default Home;