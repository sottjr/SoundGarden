const body = document.querySelector('body');
const divEventos = document.querySelector('#todosEventos');
divEventos.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const resposta = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const conteudoResposta = await resposta.json();

    const { _id, name, attractions, scheduled, description } = await conteudoResposta;

<<<<<<< HEAD
    for (let i = 0; i < 1000; i++) {
        const finalDate = new Date(conteudoResposta[i].scheduled);
=======
    for (let i = 0; i < 100; i++) {
>>>>>>> c0325725d26eb3d7187c6eb4abce301be40c857b
        divEventos.innerHTML += `
            <article class="d=flex flex-column evento card p-5 m-3 w-50">
            
            <h3 id="nomeData">
<<<<<<< HEAD
                    ${conteudoResposta[i].name} <hr> Data:  ${conteudoResposta[i].scheduled}
=======
                    ${conteudoResposta[i].name} - ${finalDate.getDate()}/${finalDate.getMonth() + 1}/${finalDate.getFullYear()}
>>>>>>> d6d35bdbe5edec208354bea7cec3182d80a40e12
                </h3>
                <h4 id="atracoes">
                    ${conteudoResposta[i].attractions}
                </h6>
                <p id="descricao">
                    ${conteudoResposta[i].description}
                </p>
<<<<<<< HEAD
                
                <button type="button" id="btn" id="bottomClick" data-id="${conteudoResposta[i]._id}" class="hover btn justify-content-around btn-primary bg-dark border-dark" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            reservar ingresso
                        </button>
=======
                <p id="eventoId" style="display:none;">${conteudoResposta[i]._id}</p>
                <a href="#?id=${conteudoResposta[i]._id}" id="botao-reservar" event-id="${conteudoResposta[i]._id}" class="btn justify-content-around open btn-primary bg-dark border-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Reservar</a>

>>>>>>> d6d35bdbe5edec208354bea7cec3182d80a40e12
            </article>
        `;

    click()
    }
}



// {/* <a href="#?id=${conteudoResposta[i]._id}" eve id="botao"  class="btn justify-content-around open btn-primary bg-dark border-dark" data-bs-toggle="modal"
//                             data-bs-target="#exampleModal">
//                             reservar ingresso
//                         </a> */}

//cadastro
// var createButton = document.querySelector("#bottomClick")
// var dataId = createButton.getAttribute("data-id");
// console.log(dataId);

const nameUser = document.querySelector('#validationCustom01');
const ticketsUser = document.querySelector("#validationCustom04");
const emailUser = document.querySelector("#validationCustom05");
const form = document.querySelector("form")
const botaoAbrirModal = document.querySelectorAll("#botao-reservar")
const send = document.querySelector("#btSend");



function click(){
botaoAbrirModal.forEach(botao => {
    botao.addEventListener("mousedown", (e) => {
        form.setAttribute("event-id", e.target.getAttribute("event-id"));
        click2()
    })
})}



function click2() {
form.onsubmit = async event => {
    event.preventDefault();
    try {
        const newBooking = {
            owner_name: nameUser.value,
            owner_email: emailUser.value,
            number_tickets: parseInt(ticketsUser.value),
            event_id: send.getAttribute('data-id'),
        };
        const options = {
            method: "POST",
            body: JSON.stringify(newBooking),
            headers: {
                "Content-Type": "application/json",
            },
        };
        await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings`, options);
        console.log(newBooking);
        console.log(data-id);
        alert('Event tickets booked successfully!')
    } catch (error) {
        console.log(error);
        alert('Error!!!');
    };
};}
