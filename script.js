const meuMenu = document.querySelector(".menu");
const botaoMenu = document.querySelector(".icone-menu");
const fechado = document.querySelector(".fechado");
const aberto = document.querySelector(".aberto");


botaoMenu.addEventListener("click", () => {
    const visibilidade = meuMenu.getAttribute("data-visible");

    if (visibilidade === "false") {
        meuMenu.setAttribute("data-visible", true);
        botaoMenu.setAttribute("aria-expanded", true);
        aberto.style.display = "none";
        fechado.style.display = "block";
    } else if (visibilidade === "true") {
        meuMenu.setAttribute("data-visible", false);
        botaoMenu.setAttribute("aria-expanded", false);
        aberto.style.display = "block";
        fechado.style.display = "none";
    }
});

document.addEventListener('click', function foraDoMenu(event) {
    const menu = document.querySelector(".menu, .icone-menu");

    if (!menu.contains(event.target)) {
        meuMenu.setAttribute("data-visible", false);
        botaoMenu.setAttribute("aria-expanded", false);
        aberto.style.display = "block";
        fechado.style.display = "none";
    }
});