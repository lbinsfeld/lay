const botoes = document.querySelectorAll(".botao");
for(let i=0; i<botoes.length; j++){
    botoes[i].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[j].classList. add ("ativo");
    }
}
