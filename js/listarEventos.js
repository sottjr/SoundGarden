const body = document.querySelector('body');
const divEventos = document.querySelector('#todosEventos');
divEventos.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const resposta = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const conteudoResposta = await resposta.json();

    const { _id, name, attractions, scheduled, description } = await conteudoResposta;

    for (let i = 0; i < 100; i++) {
        divEventos.innerHTML += `
            <article class="d=flex flex-column evento card p-5 m-3 w-50">
            
            <h3 id="nomeData">
                    ${conteudoResposta[i].name} <hr> Data:  ${conteudoResposta[i].scheduled}
                </h3>
                <h4 id="atracoes">
                    ${conteudoResposta[i].attractions}
                </h6>
                <p id="descricao">
                    ${conteudoResposta[i].description}
                </p>
                
                <button type="button" id="btn" id="bottomClick" data-id="${conteudoResposta[i]._id}" class="hover btn justify-content-around btn-primary bg-dark border-dark" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            reservar ingresso
                        </button>
            </article>
        `;


    }
}


//cadastro
// var createButton = document.querySelector("#bottomClick")
// var dataId = createButton.getAttribute("data-id");
// console.log(dataId);

var inName = document.querySelector("#name");
var inTickets= document.querySelector("#tickets");
var inEmail = document.querySelector("#validationCustom05");
var btSend = document.querySelector("#btSend");
var form = document.querySelector("form")




form.onsubmit = async (evento) => {
    evento.preventDefault();

    const NewObject = {
        owner_name: inputNome.value,
        owner_email: inputEmail.value,
        number_tickets: inputIngresso.value,
        event_id: idAtual

    }


}
