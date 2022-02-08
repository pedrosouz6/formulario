/* Variaveis globais*/
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cep = document.getElementById("cep");
const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");
const bairro = document.getElementById("bairro");
const endereco = document.getElementById("endereco");
const complemento = document.getElementById("complemento");
const submit = document.querySelector("#div-enviar input");
const small = document.querySelectorAll("small");

//validacoes
const erroNome = document.getElementById("erro--nome");
const erroEmail = document.getElementById("erro--email");
const erroCep = document.getElementById("erro--cep");
const erroEstado = document.getElementById("erro--estado");
const erroCidade = document.getElementById("erro--cidade");
const erroBairro = document.getElementById("erro--bairro");
const erroEndereco = document.getElementById("erro--endereco");
const erroComplemento = document.getElementById("erro--complemento");

submit.addEventListener("click", (e)=>{  
    e.preventDefault();

    
    //Validações
    //Nome
    if(!nome.value || nome.value.length < 3){
        erroNome.style.visibility = "visible";
        
    } else {
        erroNome.style.visibility = "hidden";

    }

    //Email
    if(!email.value || email.value.length < 3){
        erroEmail.style.visibility = "visible";
        
    } else {
        erroEmail.style.visibility = "hidden";

    }

    //Cep
    if(!cep.value || cep.value.length !== 8){
        erroCep.style.visibility = "visible";
        
    } else {
        erroCep.style.visibility = "hidden";

    }

    //Estado
    if(!estado.value || estado.value.length < 2){
        erroEstado.style.visibility = "visible";
        
    } else {
        erroEstado.style.visibility = "hidden";

    }

    //Ciade
    if(!cidade.value || cidade.value.length < 2){
        erroCidade.style.visibility = "visible";
        
    } else {
        erroCidade.style.visibility = "hidden";

    }

    //Bairro
    if(!bairro.value || bairro.value.length < 2){
        erroBairro.style.visibility = "visible";
        
    } else {
        erroBairro.style.visibility = "hidden";
    }

    //Endereço
    if(!endereco.value || endereco.value.length < 2){
        erroEndereco.style.visibility = "visible";
        
    } else {
        erroEndereco.style.visibility = "hidden";
    }
})
    
/*Evento que vai chamar a função ConexaoAPI*/
cep.addEventListener("blur", ConexaoAPI);

/*Conectando com a APi*/
async function ConexaoAPI(){
    if(cep.value){
        const url = `https://viacep.com.br/ws/${cep.value}/json/`;
        const acessaUrl = await fetch(url);
        const json = await acessaUrl.json();
        if(json.hasOwnProperty("erro")){
            erroCep.style.visibility = "visible"
        } else {
            PreencharCampos(json);
        }
    }
}

/*Função que vai preencher os campos com dados*/
function PreencharCampos(json){
    console.log(json)
    estado.value = json.uf;
    bairro.value = json.bairro;
    cidade.value = json.localidade;ons
    endereco.value = json.logradouro;
    complemento.value = json.complemento;
}