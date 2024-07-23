/*
	O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

	- objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe "modo-escuro" no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1: pegar no JS o elemento HTML correspondente ao botão de troca de tema */
        const botaoAlterarTema = document.getElementById('botao-alterar-tema');

        /* - passo 2: dar um jeito de pegar no JS o elemento HTML corresponde ao body */
        const body = document.querySelector("body")

        /* - passo 3: dar um jeito de identificar o clique do usuário no botão de troca de tema */
        botaoAlterarTema.addEventListener("click", () => {

        /*- passo 6: verificar se o body já tem a classe modo-escuro */

        const modoEscuroAtivado = body.classList.contains("modo-escuro")

        if (modoEscuroAtivado){
            /* - passo 7: remover a classe modo-escuro do body */
            body.classList.remove("modo-escuro");


        /*passo 8:  trocar a imagem do botão de alterar tema pra sol */

            const imagemBotaoTrocarLuaSol = document.querySelector(".imagem-botao");

            imagemBotaoTrocarLuaSol.src = "./src/imagens/sun.png";

        }else{

            /* - passo 4: adicionar a classe "modo-escuro" no body*/
            body.classList.add("modo-escuro");

            /* - passo 5: mudar a imagem pra lua */
            const imagemBotaoTrocarSolLua = document.querySelector(".imagem-botao");

            imagemBotaoTrocarSolLua.src = "./src/imagens/moon.png";
        }});

            
