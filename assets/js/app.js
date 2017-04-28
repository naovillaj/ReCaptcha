 function reCaptcha(){
   var letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   var numeros = ["1","2","3","4","5","6","7","8","9","0"];
   var i;
   for (i=0;i<6;i++){
     var a = letras[Math.floor(Math.random() * letras.length)];
     var b = numeros[Math.floor(Math.random() * numeros.length)];
     var c = letras[Math.floor(Math.random() * letras.length)];
     var d = numeros[Math.floor(Math.random() * numeros.length)];
     var e = letras[Math.floor(Math.random() * letras.length)];
     var f = numeros[Math.floor(Math.random() * numeros.length)];
     var g = letras[Math.floor(Math.random() * letras.length)];
    }
  var codigoReCaptcha = a + b + c + d + e + f + g;
  console.log(codigoReCaptcha);
  document.getElementById("inputReCaptcha").value = codigoReCaptcha;
}

document.getElementById("body").addEventListener("load", reCaptcha);
document.getElementById("load").addEventListener("click", reCaptcha);

function ValidCaptcha(){
    var codigo1 = removeSpaces(document.getElementById("inputReCaptcha").value);
    var codigo2 = removeSpaces(document.getElementById("codigoIngresado").value);
    if (codigo1 === codigo2){
      alert("Validado!");
      return true;
    }
    else{       
      alert("Los códigos no son iguales"); 
      return false;
    }
}

document.getElementById("check").addEventListener("click", ValidCaptcha);

function removeSpaces(string){
  return string.split(' ').join('');
}
