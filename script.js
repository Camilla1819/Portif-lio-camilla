<<<<<<< HEAD
/* TEMA (MODO ESCURO) */
document.addEventListener("DOMContentLoaded", function () {

    let botaoTema = document.getElementById("temaBtn");

    if (botaoTema) {
        botaoTema.addEventListener("click", alternartema);
    }

    let temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
    }
});

/* botão alternar tema */
function alternartema() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
}

/* FORMULÁRIO DE CONTATO */
let form = document.getElementById("formcontato");
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;

        /* verifica campos vazios */
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        /* validação de email */
        let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValido.test(email)) {
            alert("Digite um e-mail válido! Ex: usuario@dominio.com");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();

    });
}

/* MOSTRAR / ESCONDER SOBRE */
function mostrarSobre() {
    let secao = document.getElementById("sobre");

    if (secao.style.display === "none") {
        secao.style.display = "block";
    } else {
        secao.style.display = "none";
    }
=======
/* TEMA (MODO ESCURO) */
document.addEventListener("DOMContentLoaded", function () {

    let botaoTema = document.getElementById("temaBtn");

    if (botaoTema) {
        botaoTema.addEventListener("click", alternartema);
    }

    let temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
    }
});

/* botão alternar tema */
function alternartema() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
}

/* FORMULÁRIO DE CONTATO */
let form = document.getElementById("formcontato");
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;

        /* verifica campos vazios */
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        /* validação de email */
        let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValido.test(email)) {
            alert("Digite um e-mail válido! Ex: usuario@dominio.com");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();

    });
}

/* MOSTRAR / ESCONDER SOBRE */
function mostrarSobre() {
    let secao = document.getElementById("sobre");

    if (secao.style.display === "none") {
        secao.style.display = "block";
    } else {
        secao.style.display = "none";
    }
>>>>>>> 2969cfa72f9c488677c5499c23507c456d88c0ac
}