const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"
const ID_ATUAL = window.location.href.split('=')[1];
console.log(ID_ATUAL)

var table = document.querySelector("table");
var nameEvent = document.querySelector("#eventName");




var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


//puxar os dados do evento

let datesEvent = async () => {
const answerEvent = await fetch(`${BASE_URL}/events/${ID_ATUAL}`, { method: "GET", redirect: "follow" });
console.log(answerEvent);
const returnEvents = await answerEvent.json();

nameEvent.innerHTML = returnEvents.name;
maxTickets.innerHTML = returnEvents.number_tickets;
}

datesEvent()

//reservas
let reserved = async () => {
const answerReserved = await fetch(`${BASE_URL}/bookings/event/${ID_ATUAL}`,requestOptions);
const asnwerJson = await answerReserved.json();
// console.log(answerReserved);
console.log(asnwerJson);


    asnwerJson.forEach((item,index) => {
        

        table.innerHTML += `
               <tr>
                                   <th scope="row">${index + 1}</th>
                                   <td>${item.owner_name}</td>
                                   <td id="remove">${item.owner_email}</td>
                                   <td id="remove">${item.number_tickets}</td>
                                    
                               </tr>
        
        
        
               `

                        
    });    
 }
reserved();
