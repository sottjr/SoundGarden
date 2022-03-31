const ID_ATUAL = window.location.href.split('=')[1];
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/events";
let inName = document.querySelector("#nome");
let inLinkImg = document.querySelector("#banner");
let inAtracoes = document.querySelector("#atracoes");
let inDescription = document.querySelector("#descricao");
let inDate = document.querySelector("#data");
let inLotacao = document.querySelector("#lotacao");
let btSend = document.querySelector("#btSend");
let form = document.querySelector("form");





let receive = async () => {
    const answer = await fetch(`${BASE_URL}/${ID_ATUAL}`,
        {
            method: "GET",
        })

  //EXTRAINDO O JSON
  const contentAnswer = await answer.json()

//atribuindo os dados da respota nos inputs do html
inName.value = contentAnswer.name
inLinkImg.value = contentAnswer.poster
inAtracoes.value = contentAnswer.attractions
inDescription.value = contentAnswer.description
//new Date(inDate.value).toISOString()
inDate.value = contentAnswer.scheduled.split("").slice(0,16).join("")
inLotacao.value = parseInt(contentAnswer.number_tickets)

}
receive();

form.onsubmit = async (evento) => {
evento.preventDefault();

bodyInfo = {

    name: inName.value,
    poster: inLinkImg.value,
    attractions: inAtracoes.value.split(','),
    description: inDescription.value,
    scheduled: new Date(inDate.value).toISOString(),
    number_tickets: inLotacao.value,

}
const options = {
    method: 'PUT',
    body: JSON.stringify(bodyInfo),
    headers:{
        "Content-Type": "application/json",
        },
        redirect: "follow",
};

const attObject = await fetch(`${BASE_URL}/${ID_ATUAL}`, options)

if (attObject.status != 200) {
    return alert("Opa, deu algo errado... Verifique seus dados corretamente")

}

alert("Dados alterados!")
return window.location.href = 'admin.html'
}