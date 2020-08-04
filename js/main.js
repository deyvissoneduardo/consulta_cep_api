function getDadosEnderecoPorCEP(cep) {
    /** monta url da api **/
    let url = 'https://viacep.com.br/ws/' + cep.replace(/[^0-9]+/g,'') + '/json/unicode'
    xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', url)
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            /** recebe o responseText da requisição **/
            let dadosJSONText = xmlHttp.responseText
            /** transforma esse texto puro em um objeto json **/
            let dadosJSONObject = JSON.parse(dadosJSONText)
            console.log(dadosJSONObject)

            /** carrega response dados do endereco **/
            document.getElementById('endereco').value = dadosJSONObject.logradouro
            document.getElementById('bairro').value = dadosJSONObject.bairro
            document.getElementById('cidade').value = dadosJSONObject.localidade
            document.getElementById('uf').value = dadosJSONObject.uf
        }
    }
    xmlHttp.send()
}

function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}