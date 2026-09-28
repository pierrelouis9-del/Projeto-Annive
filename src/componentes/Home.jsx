import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';

function Home() {

    const navigate = useNavigate();

    return (
        <main>

            <div className="salu">

                <h2>Bienvenida a tu regalo ❤️</h2>

                <p>
                    Hoy, 1 de octubre, es un día especial para ti...
                    y para mí también, mi corazón.
                </p>

                <p>
                    Fue el día en que el mundo ganó a una persona que,
                    de alguna manera, terminó convirtiéndose en alguien
                    muy especial para mí.
                </p>

                <p>
                    Una persona que consigue traerme alegría
                    de una forma u otra.
                </p>

                <p>
                    Tal vez todavía no tengamos tantas historias que contar,
                    pero tenemos algo que me gusta aún más:
                    la posibilidad de crear muchas de ellas juntos.
                </p>

                <p>
                    Y por eso, deseo que este nuevo año de vida
                    te traiga muchas alegrías, logros y momentos felices.
                    Que sigas siendo esa persona maravillosa que eres,
                    que sigas creciendo y convirtiéndote en una persona
                    aún mejor, más brillante y capaz de iluminar la vida
                    de todos los que te rodean.
                </p>

                <p>
                    <strong>
                        Con todo mi corazón, te deseo un feliz cumpleaños,
                        mi Delicia. ❤️
                    </strong>
                </p>

                <p>
                    Así que preparé este pequeño regalo para ti.
                    No es perfecto, pero cada detalle fue hecho pensando en ti. ❤️
                </p>
                <p>
                    Com todo o meu coração, te desejo um feliz aniversário,
                    minha Delicia. ❤️
                </p>

                <div className="assinatura">
                    Com todo o meu coração,<br/>
                        <strong>Juvensky ❤️</strong>
                </div>

            </div>

            <div className="conteudo">

                <h3>
                    Ahora, si estás lista...
                    todavía hay algo más esperándote.
                </h3>

                <button onClick={() => navigate('/Conteudo')}>
                    Descubrir
                </button>

            </div>

        </main>
    );
}

export default Home;