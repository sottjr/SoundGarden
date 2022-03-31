


var reservar = (id, nome, data, atracoes) =>{
    modal.style.display = "block";
    nomeEvento.innerHTML = nome;
    dataEvento.innerHTML = data;
    atracoesEvento.innerHTML = atracoes;
    idEvento = id;
}





//listar
var Listar = async () => {
    const resposta = await fetch(BASE_URL, { method: "GET" });
    const resJson = await resposta.json();
    resJson.forEach((item,index) => {
      if(index<4){
        card.innerHTML += `<article class="cards_index evento card p-5 m-3">
        <h2 id="evento${index+1}">${item.name} - ${item.scheduled}</h2>
        <h4>${item.attractions}</h4>
        <p class="p_card_index">${item.description}</p>
        <button onclick ="reservar('${item._id}','${item.name}','${item.scheduled}','${item.attractions}')" class="btn btn-primary botao-reservar">
          reservar ingresso
        </button>
      </article>`;    
      }
    });
   
  imgBanner1();
  };
  Listar();


//form
form.onsubmit = async (e)=>{
    e.preventDefault();
    
    let dataraw = {
      "owner_name": nome.value,
      "owner_email": email.value,
      "number_tickets": qtde.value,
      "event_id": idEvento
    }
   
    
    const option = {
        method: 'POST',
        body: JSON.stringify(dataraw),
        headers:{
          "Content-Type": "application/json",
        },
        redirect: 'follow'
    }
    
    const resposta = await fetch(BASE_FAZER_RESERVA, option);
  
    
    if(resposta.status != '201'){
        return alert('Ocorreu um erro. Verifique se todos os dados estão corretos!')
    }
  
    alert('Evento cadastrado!')
    // return window.location.href = 'admin.html'
    
  }