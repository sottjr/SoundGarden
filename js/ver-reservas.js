const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/bookings"
const ID_ATUAL = window.location.href.split('=')[1];

//Reserva por IdEvento: https://xp41-soundgarden-api.herokuapp.com/bookings/event/6243c4f344be9a585dfd5c07

let fullInfos = document.querySelector(".full")
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let listEvents = async () => {

    const asnwer = await fetch(`${BASE_URL}/event/${ID_ATUAL}`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    })

   
}

listEvents()