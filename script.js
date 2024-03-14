function venhaConhecer() {
    let botão = document.getElementById('texto-cafeteria');
    botão.scrollIntoView({ behavior: "auto" });
}

function faleConosco() {
    let botão2 = document.getElementById('entrar-em-contato');
    botão2.scrollIntoView({ behavior: "auto" });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("text-button-form").addEventListener("click", function(event) {
        event.preventDefault(); // Evitar o comportamento padrão do botão (recarregar a página)
        enviarMensagem();
    });
});


function enviarMensagem() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    
    
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${mensagem}`);

    limpar();

}

function limpar() {
    document.getElementById("nome").innerHTML = '';
    document.getElementById("email").innerHTML = '';
    document.getElementById("mensagem").innerHTML = '';

}


