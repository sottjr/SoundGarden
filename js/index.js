//página home
//nome
//email
//quantidade
//evento

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputIngressos = document.querySelector("#evento");
const inputQtd = document.querySelector("#quantidade");
const inputData = document.querySelector("#data");
const btSend = document.querySelector("#btSend");
const form = document.querySelector("form")

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

form.onsubmit = async (evento) => {
    evento.preventDefault();

    const newObject = {
        owner_name: inputNome.value,
        owner_email: inputEmail.value,
        number_tickets: inputQtd.value,
    };

    const options = {
        method: 'POST',
        body: raw,
        headers: {
            "content-type": "application/json"
        },
        redirect: "follow",
    };
    const answer = await fetch(`${BASE_URL}/bookings`, options)
    const contentAnswer = await answer.json();
    return window.location.href = 'admin.html'

}