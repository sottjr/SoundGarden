const body = document.querySelector('body');
const divEventos = document.querySelector('#todosEventos');
divEventos.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const resposta = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const conteudoResposta = await resposta.json();

    const { _id, name, attractions, scheduled, description } = await conteudoResposta;

    const formataData = (data) => {
        let d = data.split('');
        let dd = d.slice(8, 10).join('') + '/' + d.slice(5, 7).join('') + '/' + d.slice(0, 4).join('');
        let dt = d.slice(11, 16).join('')
        return `${dd}`
    };

    for (let i = 0; i < 50; i++) {
        const finalDate = formataData(conteudoResposta[i].scheduled)
        divEventos.innerHTML += `
            <article class="d=flex flex-column evento card p-5 m-3 w-50">
            
            <h3 id="nomeData">
                    ${conteudoResposta[i].name} - ${finalDate}
                </h3>
                <h4 style="margin-top: 50px" id="atracoes">
                    ${conteudoResposta[i].attractions}
                </h4>
                <p id="descricao">
                    ${conteudoResposta[i].description}
                </p>
                <p id="pSalvador"></p>
        
                <button data-bs-whatever="${conteudoResposta[i]._id}" data-id="${conteudoResposta[i]._id}" id="botao-reservar" event-id="${conteudoResposta[i]._id}" class="hover btn justify-content-around open btn-primary bg-dark border-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Reservar</button>

            </article>
        `;

    }
}


var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    let recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    const nameUser = document.querySelector('#validationCustom01');
    const ticketsUser = document.querySelector("#validationCustom04");
    const emailUser = document.querySelector("#validationCustom05");
    const form = document.querySelector("form")
    // const send = document.querySelector("#btSend");

    form.onsubmit = async (evento) => {
        evento.preventDefault();
        try {
            const newBooking = {
                owner_name: nameUser.value,
                owner_email: emailUser.value,
                number_tickets: ticketsUser.value,
                event_id: recipient,
            };
            const options = {
                method: "POST",
                body: JSON.stringify(newBooking),
                headers: {
                    "Content-Type": "application/json",
                },
        };
        const resposta1 = await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings`, options);
                            const conteudoResposta1 = await resposta1.json();
                            console.log(newBooking);
                            console.log(resposta1);
                            console.log(conteudoResposta1);
                            alert('Ingressos para eventos reservados com sucesso!')
                            return window.location.href = "eventos.html"
    } catch (erro) {
        alert('Erro ao cadastrar, verifique os campos digitados!')
    }
    }
})



















// const nameUser = document.querySelector('#validationCustom01');
// const ticketsUser = document.querySelector("#validationCustom04");
// const emailUser = document.querySelector("#validationCustom05");
// const form = document.querySelector("form")

// const idButton = document.querySelectorAll("#botao-reservar")
// const send = document.querySelector("#btSend");

// const reserveSeuIn = document.querySelector("#modal-title")

// idButton.forEach(element => {
//     element.addEventListener("click", async () => {
//         send.setAttribute("data-bs-whatever", element.getAttribute("data-bs-whatever"));

//         const response2 = await fetch (`https://xp41-soundgarden-api.herokuapp.com/bookings`)
//     })
// })