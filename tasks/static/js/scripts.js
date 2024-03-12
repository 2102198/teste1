/*Máscara para o RG > somente n°s e pontuação*/
var rg = document.getElementById('irg');        /*id do rg atribuida a var rg*/

rg.addEventListener("input",() => {
    //remover caracteres e limitar em 11 digitos
    var limparvalor3 = rg.value.replace(/\D/g, "").substring(0,9); //subst. valor que não são numeros por vazio

    //dividir a string em arrays para poder pontuar
    var numerosarray3 = limparvalor3.split("");

    //criar a variável para receber o n° formatado
    var numeroformatado3 = "";

    //if para acessar quando a qtdade de n°s é maior que 0
    //array para os 2 primeiros digitos
    //array para do 0° ao 2° > sem alteração
    if(numerosarray3.length > 0){
        numeroformatado3 += `${numerosarray3.slice(0,2).join("")}`;
    }

    //array para do 2° para o 3° > possui um ponto
    if(numerosarray3.length > 2){
        numeroformatado3 += `.${numerosarray3.slice(2,5).join("")}`;
    }

    //array para do 5° para o 6° > possui um ponto
    if(numerosarray3.length > 5){
        numeroformatado3 += `.${numerosarray3.slice(5,8).join("")}`;
    }

    //array para o digito verificador > entre o 8 e 9 algarismo
    if(numerosarray3.length > 8){
        numeroformatado3 += `-${numerosarray3.slice(8,9).join("")}`;
    }

    //enviar o n°formatado para o campo
    rg.value = numeroformatado3;
});/*FIM - Mascára para o RG*/

/*Máscara para o CPF > somente n°s e pontuação*/
var cpf = document.getElementById('icpf');        /* id do cpf atribuida a var cpf */

cpf.addEventListener("input",() => {
    //remover caracteres e limitar em 11 digitos
    var limparvalor4 = cpf.value.replace(/\D/g, "").substring(0,11); //subst. valor que não são numeros por vazio

    //dividir a string em arrays para poder pontuar
    var numerosarray4 = limparvalor4.split("");

    //criar a variável para receber o n° formatado
    var numeroformatado4 = "";

    //if para acessar quando a qtdade de n°s é maior que 0
    //array para os 3 primeiros digitos
    //array para do 0° ao 3° > sem alteração
    if(numerosarray4.length > 0){
        numeroformatado4 += `${numerosarray4.slice(0,3).join("")}`;
    }

    //array para do 3° para o 6° > possui um ponto
    if(numerosarray4.length > 3){
        numeroformatado4 += `.${numerosarray4.slice(3,6).join("")}`;
    }

    //array para do 6° para o 9° > possui um ponto
    if(numerosarray4.length > 6){
        numeroformatado4 += `.${numerosarray4.slice(6,9).join("")}`;
    }

    //array para o digito verificador > entre o 9 e 11 algarismo
    if(numerosarray4.length > 9){
        numeroformatado4 += `-${numerosarray4.slice(9,11).join("")}`;
    }

    //enviar o n°formatado para o campo
    cpf.value = numeroformatado4;
});/*FIM - Mascára para o CPF*/


/*Máscara para o telefone - considerado um telefone fixo*/
var telefone = document.getElementById('itelefone');        /*id do telefone atribuida a var telefone*/

telefone.addEventListener("input",() => {
    //remover caracteres e limitar em 11 digitos
    var limparvalor2 = telefone.value.replace(/\D/g, "").substring(0,10); //subst. valor que não são numeros por vazio

    //dividir a string em arrays para poder pontuar
    var numerosarray2 = limparvalor2.split("");

    //criar a variável para receber o n° formatado
    var numeroformatado2 = "";

    //if para acessar quando a qtdade de n°s é maior que 0
    //array para o ddd
    if(numerosarray2.length > 0){
        numeroformatado2 += `(${numerosarray2.slice(0,2).join("")})`; 
    }

    //array para os 5 primeiros n°s
    if(numerosarray2.length > 2){
        numeroformatado2 += ` ${numerosarray2.slice(2,6).join("")}`;
    }

    //array para os 4 últimos n°s
    if(numerosarray2.length > 6){
        numeroformatado2 += `-${numerosarray2.slice(6,10).join("")}`;
    }

    //enviar o n°formatado para o campo
    telefone.value = numeroformatado2;
});/*FIM - Mascára para o telefone*/



/*Máscara para o celular > Inserir o ddd e traço*/
var celular = document.getElementById('icelular');        /*id do celular atribuida a var celular*/

celular.addEventListener("input",() => {
    //remover caracteres e limitar em 11 digitos
    var limparvalor = celular.value.replace(/\D/g, "").substring(0,11); //subst. valor que não são numeros por vazio

    //dividir a string em arrays para poder pontuar
    var numerosarray = limparvalor.split("");

    //criar a variável para receber o n° formatado
    var numeroformatado = "";

    //if para acessar quando a qtdade de n°s é maior que 0
    //array para o ddd
    if(numerosarray.length > 0){
        numeroformatado += `(${numerosarray.slice(0,2).join("")})`; 
    }

    //array para os 5 primeiros n°s
    if(numerosarray.length > 2){
        numeroformatado += ` ${numerosarray.slice(2,7).join("")}`;
    }

    //array para os 4 últimos n°s
    if(numerosarray.length > 7){
        numeroformatado += `-${numerosarray.slice(7,11).join("")}`;
    }

    //enviar o n°formatado para o campo
    celular.value = numeroformatado;
});/*FIM - Mascára para o celular*/

/*Máscara para o celular de recado*/
var celularrec = document.getElementById('iicelular');        /*id do celular atribuido a var celular*/

celularrec.addEventListener("input",() => {
    //remover caracteres e limitar em 11 digitos
    var limparvalor1 = celularrec.value.replace(/\D/g, "").substring(0,11); //subst. valor que não são numeros por vazio

    //dividir a string em arrays para poder pontuar
    var numerosarray1 = limparvalor1.split("");

    //criar a variável para receber o n° formatado
    var numeroformatado1 = "";

    //if para acessar quando a qtdade de n°s é maior que 0
    //array para o ddd
    if(numerosarray1.length > 0){
        numeroformatado1 += `(${numerosarray1.slice(0,2).join("")})`; 
    }

    //array para os 5 primeiros n°s
    if(numerosarray1.length > 2){
        numeroformatado1 += ` ${numerosarray1.slice(2,7).join("")}`;
    }

    //array para os 4 últimos n°s
    if(numerosarray1.length > 7){
        numeroformatado1 += `-${numerosarray1.slice(7,11).join("")}`;
    }

    //enviar o n°formatado para o campo
    celularrec.value = numeroformatado1;
});/*FIM - Máscara para o celular de recado*/


/*API ViaCEP > Localiza dados de endereço pelo CEP*/
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
}; /*FIM código API ViaCEP*/