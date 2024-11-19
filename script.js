let nome_dest = "";
let end_dest = "";
let cid_dest = "";
let uf_dest = "";
let cep_dest = "";
let doc_dest = "";

let conteudo = [];
let quantidade = [];
let valor = [];

function get_Values() {

    nome_dest = document.getElementById('nome_dest').value;
    end_dest = document.getElementById('end_dest').value;
    cid_dest = document.getElementById('cid_dest').value;
    uf_dest = document.getElementById('uf_dest').value;
    cep_dest = document.getElementById('cep_dest').value;
    doc_dest = document.getElementById('doc_dest').value;

    let count = 1;
    while (count <= 8) {  // Mude de < 5 para <= 8
        let conteudoInput = document.getElementById(`conteudo_${count}`);
        let quantidadeInput = document.getElementById(`quantidade_${count}`);
        let valorInput = document.getElementById(`valor_${count}`);

        // Verifique se os elementos existem antes de tentar acessar o valor
        if (conteudoInput && quantidadeInput && valorInput) {
            conteudo.push(conteudoInput.value);
            quantidade.push(quantidadeInput.value);
            valor.push(valorInput.value);
        } else {
            console.warn(`Elementos não encontrados para o índice ${count}`);
        }

        count++; // Incrementando o contador
    }

    console.log("Nome:", nome_dest);
    console.log("Endereço:", end_dest);
    console.log("Cidade:", cid_dest);
    console.log("UF:", uf_dest);
    console.log("CEP:", cep_dest);
    console.log("Documento:", doc_dest);
    console.log("Conteúdo:", conteudo);
    console.log("Quantidade:", quantidade);
    console.log("Valor:", valor);

    // Redireciona para a nova página
    window.location.href = "dec-content.html";
    tableInsert();

}

function tableInsert() {
    // Preenchendo a tabela com os dados
    let tabelaBody = document.getElementById('tabela').getElementsByTagName('tbody')[0];

    // Limpa a tabela antes de adicionar novos dados
    tabelaBody.innerHTML = '';

    for (let i = 0; i < conteudo.length; i++) {
        // Cria uma nova linha
        let newRow = tabelaBody.insertRow();

        // Cria as células e as preenche
        let idCell = newRow.insertCell(0); // Célula para o ID
        let conteudoCell = newRow.insertCell(1);
        let quantidadeCell = newRow.insertCell(2);
        let valorCell = newRow.insertCell(3);

        // Preenche as células
        idCell.textContent = i + 1; // O ID será o índice + 1
        conteudoCell.textContent = conteudo[i];
        quantidadeCell.textContent = quantidade[i];
        valorCell.textContent = valor[i];
    }
}

