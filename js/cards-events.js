const body = document.querySelector('body');
const divEventos = document.querySelector('#eventos-index');
divEventos.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const resposta = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const conteudoResposta = await resposta.json();

    // const { _id, name, attractions, scheduled, description } = await conteudoResposta;

    for (let i = 0; i < 3; i++) {
        divEventos.innerHTML += `
       
        <article  class="bg-dark text-light bg-gradient evento card d-flex justify-content-between align-content-center p-5 m-3" style="min-height: 500px; border-radius:20px;">
        <div>    
        <h2 id="nomeData">${conteudoResposta[i].name}</h2><hr>
            <h6 id="atracoes" class="">${conteudoResposta[i].attractions}</h6>
            <p id="descricao" style="text-overflow: ellipsis;">${conteudoResposta[i].description}</p>
            </div>  
               <button type="button" class="hover btn btn-primary bg-light text-dark border-dark" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                reservar ingresso
            </button>
        </article>
        `;
    };}