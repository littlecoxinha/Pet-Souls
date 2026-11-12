
function abrirMenu() {
    document.getElementById('menu').classList.toggle('aberto');
}


function buscarPet() {
    const status = document.getElementById('status');
    const foto = document.getElementById('fotoPet');

    status.innerText = 'Invocando...';
    foto.style.display = 'none';

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(dados) {
            foto.src = dados.message;
            foto.style.display = 'inline-block';
            status.innerText = 'Pet invocado com sucesso!';
        })
        .catch(function(erro) {
            status.innerText = 'seu pet nao foi invocado.';
        });
}
