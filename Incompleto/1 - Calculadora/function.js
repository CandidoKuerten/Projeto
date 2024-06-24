let numero = 0 , valores = 0

function salvar(){
    numero = document.getElementById("entrada").value
}

function calcular(){
    let operacao = ''
    numero = document.getElementById("entrada").value
    valores = 15
    switch(operacao){
        case '+':

        break
        case '-':

        break
        case '/':

        break
        case '*':

        break
    }
    document.getElementById("numero").innerHTML = `<p>${numero}</p>`
    document.getElementById("operacao").innerHTML = `<p>${valores}</p>`

}
function limpar(){
    numero = 0
    document.getElementById("numero").innerHTML = `<p>${numero}</p>`
}