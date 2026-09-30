import React from "react";
import './conteudo.css';


function Conteudo() {
    return (
        <main className="container">
            <h1>Conteudo principal</h1>
            <section className="mensagens">
                <div className="txt3">
                    <div className="animation3"></div>
                    <div className="conteudo">
                        <p>Texto da mensagem 3</p>
                    </div>
                </div>
                <div className="txt2">
                    <div className="animation2"></div>
                    <div className="conteudo">
                        <p>Texto da mensagem 2</p>
                    </div>
                </div>
                <div className="txt1">
                    <div className="animation1"></div>
                    <div className="conteudo">
                        <p>Texto da mensagem 1</p>
                    </div>
                </div>
            </section>
            <section className="foto">
                <div className="foto1"><img src="src\IMG\IMG-20260929-WA0002.jpg" alt="" /></div>
                <div className="foto2"><img src="src\IMG\file_00000000dcd4820e9339dad76581f006.png" alt="" /></div>
                <div className="foto3"><img src="src\IMG\file_00000000d09c820eab49b1488c345787.png" alt="" /></div>
            </section>
        </main>
    );
}

export default Conteudo;