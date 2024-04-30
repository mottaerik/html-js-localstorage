const nomeInput = document.getElementById('nome');
const dataNascimentoInput = document.getElementById('dataNascimento');
const cpfInput = document.getElementById('cpf');
const emailInput = document.getElementById('email');
const generoInput = document.getElementById('genero');
const fotoPerfilInput = document.getElementById('fotoPerfil');
const tabelaCadastro = document.getElementById('tabelaCadastro');

const pessoas = pegaPessoasCadastradas();
for(const pessoa of pessoas) {
    mostraPessoa(pessoa);
}

function salvar() {
    const pessoa = {};
    pessoa.nome = nomeInput.value;
    pessoa.dataNascimento = dataNascimentoInput.value;
    pessoa.cpf = cpfInput.value;
    pessoa.email = emailInput.value;
    pessoa.genero = generoInput.value;
    pessoa.fotoPerfil = fotoPerfilInput.value;

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
        <span>${cadastros.dataNascimento}</span>
        <span>${cadastros.cpf}</span>
        <span>${cadastros.email}</span>
        <span>${cadastros.genero}</span>
    `;
    tabelaCadastro.append(paragrafo);
}