function mostrartela(request, response){
    response.render('produto');
}

function adicionarproduto (request, response) {
    console.log ('entrou na função adicionar produto')
    //console.log(request);
    response.redirect("/produto")
}


module.exports = {
    mostrartela,
    adicionarproduto
}