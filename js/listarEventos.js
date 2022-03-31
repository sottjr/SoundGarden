const body = document.querySelector('body');
const divEventos = document.querySelector('#todosEventos');
divEventos.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const resposta = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const conteudoResposta = await resposta.json();

    const { _id, name, attractions, scheduled, description } = await conteudoResposta;

    for (let i = 1; i < 1000; i++) {
        divEventos.innerHTML += `
            <article class="evento card p-5 m-3">
                <h2 id="nomeData">
                    ${conteudoResposta[i].name} - ${conteudoResposta[i].scheduled}
                </h2>
                <h4 id="atracoes">
                    ${conteudoResposta[i].attractions}
                </h4>
                <p id="descricao">
                    ${conteudoResposta[i].description}
                </p>
                <button type="button"  data-id="${conteudoResposta[i]._id}" class="btn btn-primary bg-dark border-dark" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            reservar ingresso
                        </button>
            </article>
        `;
    }}