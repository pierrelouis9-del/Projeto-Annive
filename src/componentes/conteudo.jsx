import React from "react";

function Conteudo() {
    return (
        <main className="container">
            <h1>Conteudo principal</h1>
            <section className="mensagens">
                <div className="txt1">
                    <div className="animation1"></div>
                    <div className="conteudo"></div>
                </div>
                <div className="txt2">
                    <div className="animation2"></div>
                    <div className="conteudo"></div>
                </div>
                <div className="txt3">
                    <div className="animation3"></div>
                    <div className="conteudo"></div>
                </div>
            </section>
            <section className="foto">
                <div className="foto1"></div>
                <div className="foto2"></div>
                <div className="foto3"></div>
            </section>
        </main>
    );
}

export default Conteudo;