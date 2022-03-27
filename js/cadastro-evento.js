//cadastro-evento.html

const inName = document.querySelector("#nome");
const inAtracoes = document.querySelector("#atracoes");
const inDescripition = document.querySelector("#descricao");
const inDate = document.querySelector("#data");
const inLotacao = document.querySelector("#lotacao");
const inLinkImg = document.querySelector("#poster")
const btSend = document.querySelector("#btSend");
const form = document.querySelector("form")

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";


form.onsubmit = async (evento) => {
    evento.preventDefault();

    const newObject = {
        name: inName.value,
        poster: inLinkImg.value,
        attractions: inAtracoes.value.split(','),
        description: inDescripition.value,
        scheduled: new Date(inDate.value).toISOString(),
        number_tickets: inLotacao.value,
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(newObject),
        headers: {
            "content-type": "application/json"
        },
        redirect: "follow",
    };

    //montar o fetch
    const answer = await fetch(`${BASE_URL}/events`, options)
    const contentAnswer = await answer.json();
    console.log(contentAnswer)

    alert("Evento cadastrado")

}