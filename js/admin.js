const table = document.querySelector("table");
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"

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
                                <td id="remove">${item.scheduled}</td>
                                <td>${item.name}</td>
                                <td id="remove">${item.attractions}</td>
                                <td>
<<<<<<< HEAD
                                    <a href="reserva.html?id=${item._id}" class="btn btn-dark w-100">ver reserva</a>
=======
<<<<<<< HEAD
                                    <a href="ver-reserva.html?id=${item._id}" class="btn btn-dark">ver reservas</a>
                                    <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary">editar</a>
                                    <a href="excluir-evento.html?id=${item._id}" class="btn btn-danger">excluir</a>
=======
                                    <a href="reservas.html?id=${item._id}" class="btn btn-dark w-100">ver reservas</a>
>>>>>>> a8f2cf370c99ba449152b318b27ff4af49e210f2
                                    <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary w-100">editar</a>
                                    <a href="excluir-evento.html?id=${item._id}" class="btn btn-danger w-100">excluir</a>
>>>>>>> 7f9dc779b690f78fa2b00393d92a9f4bb1c8d885
                                </td>
                            </tr>
        
        `
    });


};

listEvents();
