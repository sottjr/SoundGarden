    const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"
    const ID_ATUAL = window.location.href.split('=')[1]

    var inName = document.querySelector("#name");
    var inEmail = document.querySelector("#email");
    var tickets = document.querySelector("#tickets");
    var form = document.querySelector('#form')

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

    let resposta = async () => {

        const resposta1 = await fetch (`${BASE_URL}/bookings/${ID_ATUAL}`)
        const respostaJson = await resposta1.json()
        inName.value = respostaJson.owner_name
        inEmail.value = respostaJson.owner_email
        tickets.value = respostaJson.number_tickets

    }

    resposta()

form.onsubmit = async (evento) => {
    evento.preventDefault();
    

const requisicao = await fetch(`${BASE_URL}/bookings/${ID_ATUAL}`, requestOptions)
console.log(requisicao)

if (requisicao.status != 204) {
    return alert("Opa, deu algo errado... Tente novamente!")

}

alert("Reserva excluída!")
return window.location.href = 'admin.html'
}



    //window.history.go(-1); // volta para a página anterior, igual back()