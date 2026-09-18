import React, { useState, useEffect } from 'react'


function Home(){
    
    return(
        <main>
            <title>Presente</title>
            <div className="salu">
                <h2>Bem vindo ao site presente</h2>
                <p>Por favor, leia bem antes de clicar. Aqui é so para se dirigir para o contedudo principal</p>
            </div>
            <div className="conteudo">
                <h3>Clique no botão em baixo para ir no conteúdo principal</h3>
                <button onClick={() => {}}>Clique aqui</button>
            </div>
        </main>
    );
}