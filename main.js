const form = document.getElementById('frmTeste');

function confere(a,b){
    return (a>b) ? true : false;
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    const msgError = "O Valor de \"A\" deve ser maior que o de \"B\", por favor corrija";
    const msgOK = "Os valores fornecidos estão Ok, Obrigado";

    if (confere(document.getElementById('txtA').value,document.getElementById('txtB').value)){
        document.getElementById('feedback').innerHTML = msgOK;
        document.getElementById('feedback').classList.add('msgOk');
        document.getElementById('txtA').value = '';
        document.getElementById('txtB').value = '';
    } else{
        document.getElementById('feedback').innerHTML = msgError;
        document.getElementById('feedback').classList.add('msgError');
        
        document.getElementById('feedback').classList.remove('msgOk');
        /* usado para quando o usuário acerta, se ele tentar novamente
        de forma que B > A a tarja fica verde, dessa forma eu removi o
        style OK do paragrafo */
    }
})