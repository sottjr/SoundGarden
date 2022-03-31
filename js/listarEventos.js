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
        let dd = d.slice(8,10).join('') + '/' + d.slice(5,7).join('') + '/' + d.slice(0,4).join('');
        let dt = d.slice(11,16).join('')
        return `${dd}`
    };

    for (let i = 0; i < 100; i++) {
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
        
                <p id="eventoId" style="display:none;">${conteudoResposta[i]._id}</p>
                <a href="#?id=${conteudoResposta[i]._id}" onclick="click(this)" id="botao-reservar" event-id="${conteudoResposta[i]._id}" class="hover btn justify-content-around open btn-primary bg-dark border-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Reservar</a>

            </article>
        `;

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
const form1 = document.querySelector("form")
const botaoAbrirModal = document.querySelectorAll("#botao-reservar")
const send = document.querySelector("#btSend");
const pagrafoSalvadorDaPatria = document.querySelector("#pagrafoSalvadorDaPatria")
const reserveSeuIn = document.querySelector("#exampleModalLabel")



// function click(){
// botaoAbrirModal.forEach(botao => {
//     botao.addEventListener("mousedown", (e) => {
//         form.setAttribute("event-id", e.target.getAttribute("event-id"));
//         click2()
//     })
// })}

function click(AQUI) {
    const vaiReceberId = AQUI.getAttribute("event-id"); 
    reserveSeuIn.setAttribute("event-id", vaiReceberId);

//     botaoAbrirModal.forEach((botao) => {
//         botao.addEventListener(mousedown, (e) => {
//             form1.setAttribute("event-id", e.target.getAttribute("event-id"));
//         })

//     })
}



    const formModal = document.querySelectorAll("form");
    formModal.forEach((form1) => {
        form1.onsubmit = async (evento) => {
            evento.preventDefault();
            try {
                const newBooking = {
                                owner_name: nameUser.value,
                                owner_email: emailUser.value,
                                number_tickets: parseInt(ticketsUser.value),
                                // event_id: form1.getAttribute('data-id'),
                                event_id: pagrafoSalvadorDaPatria.value,
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
                            alert('Event tickets booked successfully!') 
            } catch (erro) {
                alert("erro")
            }
        } 
    })

    // form1.onsubmit = async event => {
    //     event.preventDefault();
    //     try {
    //         const newBooking = {
    //             owner_name: nameUser.value,
    //             owner_email: emailUser.value,
    //             number_tickets: parseInt(ticketsUser.value),
    //             event_id: send.getAttribute('data-id'),
    //         };
    //         const options = {
    //             method: "POST",
    //             body: JSON.stringify(newBooking),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         };
    //         await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings`, options);
    //         console.log(newBooking);
    //         console.log(data - id);
    //         alert('Event tickets booked successfully!')
    //     } catch (error) {
    //         console.log(error);
    //         alert('Error!!!!');
    //     };
    // };

