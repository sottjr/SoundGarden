//cadastro-evento.html

var inName = document.querySelector("#nome");
var inAtracoes = document.querySelector("#atracoes");
var inDescripition = document.querySelector("#descricao");
var inDate = document.querySelector("#data");
var inLotacao = document.querySelector("#lotacao");
var inLinkImg = document.querySelector("#poster")
var btSend = document.querySelector("#btSend");
var form = document.querySelector("form")

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
    return window.location.href = 'admin.html'

}