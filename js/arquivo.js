function gerarSenha() {
    var insenha = document.getElementById('InSenha')
    var outerro = document.getElementById('Outerro')

    //pega o valor da caixa de texto
    var senha = insenha.value

   

   //declara o vetor para armazenamento de erros
    var erros = []

    if(senha.length < 8 || senha.length > 15) {
        erros.push("Deve conter entre 8 a 15 letras")
    } else if(!senha.match(/[a-z]/g)) {
        erros.push("Deve conter letras minusculas ( 1 no minimo)")
    } else if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1 )  {
        erros.push("Deve conter letras maiusculas(no minimo 2)")
    } else if(!senha.match(/[0-9]/g)) {
      erros.push("Deve conter numeros (No minimo 1 numero)")
    } else if(!senha.match(/[\W|_]/g)) {
        erros.push("Deve conter no minimo 1 caractere")
    }

    if(erros.length == 0) {
        outerro.textContent = `Perfeito! Senha valida.`
    } else {
        outerro.textContent = `Erro... a senha ${erros}`
    }
 

}
var btsenha = document.getElementById('btsenha')
btsenha.addEventListener('click', gerarSenha)

function gerarEmail() {

var inEmail = document.getElementById('inEmail')
var outResultado = document.getElementById('Outemail')


var email = inEmail.value



if(email == "" || email.indexOf(" ") == -1) {
    alert("[ERRO]... Porfavor digite o seu nome corretamente")
    inEmail.value = ""
    inEmail.focus()
    return
}



var Partes = email.split(" ")
var Email = ""
var tam = Partes.length



for(var a = 0; a < tam - 1; a++){
    Email += Partes[a].charAt(0)
}

Email += Partes[tam - 1] + "@empresa.com.br"


outResultado.textContent = `E-mail: ${Email.toLowerCase()}`


}
var btemail = document.getElementById('btemail')
btemail.addEventListener('click', gerarEmail)