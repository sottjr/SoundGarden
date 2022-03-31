var inName = document.querySelector("#name");
var inEmail = document.querySelector("#email");
var selEvent = document.querySelector("#nameEvent");
var inTickets = document.querySelector("#qtdIngressos");
var options = document.querySelector("#options")

var name = inName.value;
var email = inEmail.value;
var nameEvent = selEvent.options[selEvent.selectedIndex].value;
var tickets = inTickets.value;

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/"

let listNameEvents = async () => {
//requisicao
const answer = await fetch(BASE_URL, { method: "GET", redirect: 'follow' })

//extraindo json
    const contentAnswer = await answer.json()
contentAnswer.forEach((item, index) => {
option.innerHTML += `
<option selected value="">${index, item.name}</option>
`    
})}

// form.onsubmit = async (evento) => {

//     evento.preventDefault();
//     const NewObject = {
//     owner_name:inName.value,
//     owner_email: inEmail.value,
//     number_tickets,
//     event_id,
// }


// }
