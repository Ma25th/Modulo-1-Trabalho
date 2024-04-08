document.addEventListener('DOMContentLoaded', () => {
    const formularioEvento = document.getElementById('formEvento');
    formularioEvento.addEventListener('submit', validarFormulario);
});
function validarFormulario(evento) {
    evento.preventDefault();
    const nomeEvento = document.getElementById('nomeevento').value;
    const sobreEvento = document.getElementById('sobreevento').value;
    const Data_Hora = document.getElementById('datahora').value;
    const Local_Evento = document.getElementById('local').value;
    const Preco = document.getElementById('preco').value;
    const Quantidade_ingresso = document.getElementById('quantity').value;
    const id = document.getElementById('id').value;
    const dadosDoEvento = { nomeEvento, sobreEvento,id,  Data_Hora, Local_Evento, Preco, Quantidade_ingresso };
    cadastrarEvento(dadosDoEvento);
}
function cadastrarEvento(eventoData) {
    fetch('http://localhost:3000/cadastroevento', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventoData)
    }).then(resposta => {
        if (!resposta.ok) throw new Error(`HTTP erro! status: ${resposta.status}`);
        return resposta.json();
    }).then(eventoData=> {
        mostrarMensagem('Evento cadastrado com sucesso!', true);
    }).catch(erro => {
        mostrarMensagem(`Erro ao cadastrar evento: ${erro}`, false);
    });
}
function mostrarMensagem(mensagem, sucesso) {
    const divMensagem = document.getElementById('mensagem');
    if (divMensagem) { 
        divMensagem.innerHTML = `<div class="alert alert-${sucesso ? 'success' : 'danger'}" role="alert">${mensagem}</div>`;
        setTimeout(() => { divMensagem.innerHTML = ''; }, 5000);
    } else {
        console.error('Elemento para exibir a mensagem não foi encontrado');
    }
}