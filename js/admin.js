const table = document.querySelector("table");
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"

let listEvents = async () => {

    //Requisição
    const answer = await fetch(`${BASE_URL}/events`, {method: "GET", redirect: 'follow'})

    //extraindo json
    const contentAnswer = await answer.json()
// console.log(contentAnswer)
    contentAnswer.forEach((item,index) => {
        table.innerHTML+= 
        `
        <tr>
                                <th scope="row">${index+4}</th>
                                <td id="remove">${item.scheduled}</td>
                                <td>${item.name}</td>
                                <td id="remove">${item.attractions}</td>
                                <td>
                                    <a href="reservas.html?id=${item._id}" class="btn btn-dark">ver reservas</a>
                                    <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary">editar</a>
                                    <a href="excluir-evento.html?id=${item._id}" class="btn btn-danger">excluir</a>
                                </td>
                            </tr>
        
        `
    });
    

};

listEvents();
