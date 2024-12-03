function verificarEnter(event) {
    // Verifica se a tecla pressionada é Enter (código 13)
    if (event.key === "Enter") {
        // Impede o comportamento padrão do Enter (como envio de formulários)
        event.preventDefault();
        // Simula o clique no botão
        document.getElementById("send").click();
    }
}

function validarEmail() {
    // Obtém o valor do campo de email
    var email = document.getElementById("email").value;
    var button = document.getElementById("send");
    // Habilita ou desabilita o botão dependendo se o email tem pelo menos 2 caracteres
    button.disabled = email.length < 2; // Desabilita o botão se o email tiver menos de 2 caracteres
}