// Modal
var modal = document.getElementById("detalhesModal");

//  Botão que abre o modal
var btn = document.getElementById("detalhesBtn");

// O elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal 
btn.onclick = function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    modal.style.display = "block";
}

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha-o
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
