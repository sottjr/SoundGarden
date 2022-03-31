const inName = document.querySelector('#nome');
const inBanner = document.querySelector('#banner');
const inAtracoes = document.querySelector("#atracoes");
const inDescripition = document.querySelector("#descricao");
const inDate = document.querySelector("#data");
const inLotacao = document.querySelector("#lotacao");
const button = document.querySelector('#btDelete');
const ID_ATUAL = window.location.href.split('=')[1]
const form = document.querySelector('#form')
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";


let resposta = async () => {

    const resposta1 = await fetch(`${BASE_URL}/events/${ID_ATUAL}`)
    const respostaJson = await resposta1.json()
    inName.value = respostaJson.name
    inBanner.value = respostaJson.poster
    inAtracoes.value = respostaJson.attractions
    inDescripition.value = respostaJson.description
    inDate.value = respostaJson.scheduled.split("").slice(0,16).join("")
    inLotacao.value = respostaJson.number_tickets


}

resposta()

 form.onsubmit = async (evento) => {
    evento.preventDefault();
    const options = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        redirect: "follow",
    }


    const answer = await fetch(`${BASE_URL}/events/${ID_ATUAL}`, options)

    alert("Evento Deletado")

    return window.location.href = "admin.html"
    
};


