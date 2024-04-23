const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const tabelaCadastro = document.getElementById('tabelaCadastro');

const pessoas = pegaPessoasCadastradas();
for(const pessoa of pessoas) {
    mostraPessoa(pessoa);
}

function salvar() {
    const pessoa = {};
    pessoa.nome = nomeInput.value;
    pessoa.email = emailInput.value;
    const pessoasCadastradas = pegaPessoasCadastradas();
    pessoasCadastradas.push(pessoa);
    localStorage.setItem('pessoasCadastro', JSON.stringify(pessoasCadastradas));
    mostraPessoa(pessoa);
    return false;
}

function pegaPessoasCadastradas() {
    let pessoasLocalStorage = JSON.parse(localStorage.getItem("pessoasCadastro"));
    if (!pessoasLocalStorage) {
        pessoasLocalStorage = [];
    }
    return pessoasLocalStorage;
}

function mostraPessoa(cadastros) {
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML += `
        <span>${cadastros.nome}</span>
        <span>${cadastros.email}</span>
    `;
    tabelaCadastro.append(paragrafo);
}