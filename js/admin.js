const table = document.querySelector("table");
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"


const formataData = (data) => {
    let d = data.split('');
    let dd = d.slice(8,10).join('') + '/' + d.slice(5,7).join('') + '/' + d.slice(0,4).join('');
    let dt = d.slice(11,16).join('')
    return `${dd} ${dt}`
};


let listEvents = async () => {

    //Requisição
    const answer = await fetch(`${BASE_URL}/events`, { method: "GET", redirect: 'follow' })

    //extraindo json
    const contentAnswer = await answer.json()
    // console.log(contentAnswer)
    contentAnswer.forEach((item, index) => {
        table.innerHTML +=
            `
        <tr>
                                <th scope="row">${index + 1}</th>
                                <td id="remove">${formataData(item.scheduled)}</td>
                                <td>${item.name}</td>
                                <td id="remove">${item.attractions}</td>
                                <td>
                                    <a href="reservas.html?id=${item._id}" class="btn btn-dark w-100">ver reserva</a>
                                    <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary w-100">editar</a>
                                    <a href="excluir-evento.html?id=${item._id}" class="btn btn-danger w-100">excluir</a>
                                </td>
                            </tr>
        
        `
    });


};

listEvents();
