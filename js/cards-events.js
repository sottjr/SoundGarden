const body = document.querySelector('body');
const divEventos = document.querySelector('#eventos-index');
divEventos.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const resposta = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const conteudoResposta = await resposta.json();

    // const { _id, name, attractions, scheduled, description } = await conteudoResposta;
    const formataData = (data) => {
        let d = data.split('');
        let dd = d.slice(8, 10).join('') + '/' + d.slice(5, 7).join('') + '/' + d.slice(0, 4).join('');
        let dt = d.slice(11, 16).join('')
        return `${dd}`
    };

    for (let i = 0; i < 3; i++) {
        const finalDate = formataData(conteudoResposta[i].scheduled)
        divEventos.innerHTML += `
       
        <article  class="bg-dark text-light bg-gradient evento card d-flex justify-content-between align-content-center p-5 m-3" style="min-height: 500px; border-radius:20px;">
        <div>    
        <h2 id="nomeData">${conteudoResposta[i].name} - ${finalDate}</h2><hr>
            <h5 id="atracoes" class="">${conteudoResposta[i].attractions}</h5>
            <p id="descricao" style="text-overflow: ellipsis;">${conteudoResposta[i].description}</p>
            </div>  
               <button type="button" data-bs-whatever="${conteudoResposta[i]._id}" class="hover btn btn-primary bg-light text-dark border-dark" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                reservar ingresso
            </button>
        </article>
        `;
    };}

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
                                alert('Ingressos para o evento reservados com sucesso!')
                                return window.location.href = "index.html"
        } catch (erro) {
            alert('Erro ao cadastrar, verifique os campos digitados!')
        }
        }
    })
    
