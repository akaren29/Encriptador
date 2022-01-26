let textIngresado = document.getElementById('textoIngresado');
let msjEncriptado = document.getElementById('msjEncriptado');

function encriptar(){
    let encryptTxt = textIngresado.value;
    let exception = /[A-Z!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
        if(encryptTxt.match(exception)){
            alert('No puedes ingresar mayusculas o caracteres especiales.')
         }
    
    let resultEncrypt = "";    
         
    for(let i=0; i <= encryptTxt.length; i++){
        if(encryptTxt[i] === 'e'){
            resultEncrypt  += 'enter';
        }else if(encryptTxt[i] === 'i'){
            resultEncrypt += 'imes';
        }else if(encryptTxt[i] === 'a'){
            resultEncrypt += 'ai';
        }else if(encryptTxt[i] === 'o'){
            resultEncrypt += 'ober';
        }else if(encryptTxt[i] === 'u'){
            resultEncrypt += 'ufat';
        }else{
            resultEncrypt += encryptTxt[i]
            console.log(resultEncrypt);
        }
        msjEncriptado.value = resultEncrypt;
    }
        textIngresado.value= '';
}

let btnEncriptar = document.querySelector('#btnEncriptar')
btnEncriptar.onclick= encriptar;
