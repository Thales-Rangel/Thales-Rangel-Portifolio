const form = document.getElementById('contract-form');
const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const whatsapp = document.querySelector('#whats');
const descricao = document.querySelector('#description');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (nome.value.trim() === "") {
        alert("O nome está vazio");
        return;
    }

    if (email.value.trim() === "" || !isEmailValid(email)) {
        alert("Email inválido");
        return;
    }

    alert("Enviado");
    //    form.subimit();
});

function isEmailValid(email) {
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);

    if ((usuario.length >= 1) && (dominio.length >= 3) &&
        (usuario.search("@") == -1) && (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true;
    } else {
        return false;
    }
}