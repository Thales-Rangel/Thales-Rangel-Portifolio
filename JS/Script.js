function mostrarMais(id, idPontos, leiaMais){
    if(leiaMais.innerHTML === "Leia Menos"){
        document.getElementById(idPontos).style.display = "inline";
        document.getElementById(id).style.display = "none";
        leiaMais.innerHTML = "Leia Mais";

        return;
    }

    document.getElementById(idPontos).style.display = "none";
    document.getElementById(id).style.display = "inline";
    leiaMais.innerHTML = "Leia Menos";
}