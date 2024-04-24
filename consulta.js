const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const tabelaCadastro = document.getElementById('tabelaCadastro');

const pessoas = pegaPessoasCadastradas();
for(const pessoa of pessoas) {
    mostraPessoa(pessoa);
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
        <span>${cadastros.usuario}</span>
        <span>${cadastros.senha}</span>
    `;
    tabelaCadastro.append(paragrafo);
}