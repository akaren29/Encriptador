let textIngresado = document.getElementById('textoIngresado');
let msjEncriptado = document.getElementById('msjEncriptado');
let textEncriptado = document.querySelector('#msjEncriptado');


function encriptar(){
    let encryptTxt = textIngresado.value;
    let exception = /[A-Z!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    
    if(encryptTxt.match(exception)){
       alert('No puedes ingresar mayusculas o caracteres especiales.')
        textIngresado.value = '';
    }else{
        let resultEncrypt = '';    
         
        for(let i=0; i < encryptTxt.length; i++){
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
            }
                msjEncriptado.value = resultEncrypt;
        }
        textIngresado.value= '';
    }    

}

function copiar(){
 let mensaje = textEncriptado.value;  
   navigator.clipboard.writeText(mensaje)
        .then(() => {
        console.log("Texto copiado")
    })
        .catch(err => {
        console.log('Sucedio un error', err);
    })
    
    textEncriptado.value= '';
}

function desencriptar(){
    let obtenerMensaje = textIngresado.value;
    console.log(obtenerMensaje);
    let desencriptarMensaje = '';

    desencriptarMensaje += obtenerMensaje.replace(/enter/g,'e').replace(/ai/g, 'a').
        replace(/imes/g,'i').replace(/ober/g,'o',/ufat/,'u');
   

    msjEncriptado.value= desencriptarMensaje;
}


let btnEncriptar = document.querySelector('#btnEncriptar')
btnEncriptar.onclick= encriptar;

let btnCopiar = document.querySelector('#btnCopiar')
btnCopiar.onclick = copiar;

let btnDesencriptar = document.querySelector('#btnDesencriptar')
btnDesencriptar.onclick = desencriptar;

