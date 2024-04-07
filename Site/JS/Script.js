const form = document.getElementById('contract-form');
const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const whatsapp = document.querySelector('#whats');
const descricao = document.querySelector('#description');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(nome.value.trim() === ""){
        alert("O nome está vazio");
        return;
    }

    if(email.value.trim() === "" || isEmailValid(email.value)){
        alert("O email está vazio");
        return;
    }

//    form.subimit();
});

function isEmailValid(email){

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}