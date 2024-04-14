const BotaoMaisProjetos = document.querySelector(".btn-mostrar-projetos");
ProjetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

BotaoMaisProjetos.addEventListener("click", () => {
    ProjetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo")
    });
    BotaoMaisProjetos.classList.add("remover")
});
