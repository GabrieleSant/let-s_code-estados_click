const div_bandeiras = document.getElementById("bandeiras");
const div_text = document.getElementById("text");

async function carregarDados(){
    // Guarda as informações do db
    const response = await fetch("./db/estados.json");
    const data = await response.json();
    const estados = data.estados; 

    return estados;
}

async function carregarText(info){
    // dados.map(dado => { 
        div_text.innerHTML = '';
        let nome = document.createElement('h3');
        nome.textContent = info.nome;
        div_text.appendChild(nome);

        let descricao = document.createElement('p');
        descricao.textContent = info.descricao;
        div_text.appendChild(descricao);

}

async function Dados(){
    // Pega as informações guardadas na função carregarDados()
    const mostrarInfo = await carregarDados();
    
    mostrarInfo.map(info => {
        let nome = document.createElement("h3");
        nome.textContent = info.nome;
        div_bandeiras.appendChild(nome);

        let bandeira = document.createElement("img");
        bandeira.setAttribute("src", info.bandeira_url)
        bandeira.setAttribute("width", "100px");
        bandeira.addEventListener("click", () => carregarText(info))
        div_bandeiras.appendChild(bandeira)
    })
}
carregarDados();
Dados();

// }

// async function carregarDados(){
//     const response = await fetch("./db/estados.json");
//     const data = await response.json();
//     const estados = data.estados;
    
//     estados.map((estado) => {
//         let h3 = document.createElement("h3");
//         h3.textContent = estado.nome;
    
//         let bandeira = document.createElement("img");
//         bandeira.setAttribute("src", estado.bandeira_url);
//         bandeira.setAttribute("width", "100px");
//         bandeira.addEventListener("click", () => carregarText());
        
//         div_bandeiras.appendChild(h3);
//         div_bandeiras.appendChild(bandeira);
//     });
// }

// carregarDados();
