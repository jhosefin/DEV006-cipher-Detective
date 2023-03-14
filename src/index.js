import cipher from './cipher.js';

console.log(cipher);

/* En este espacio traigo el mensaje y le agrego el evento keyup para cuando el ususario escriba su mensaje 
    sea colocado en mayusculas */
document.getElementById("message").addEventListener("keyup", function() {
this.value = this.value.toUpperCase();
}, true);

document.getElementById("cifrar").addEventListener("click", function() {
  const string = document.getElementById("message").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById("message2").value = cipher.encode(offset, string)
},true);

document.getElementById("descifrar").addEventListener("click", function(){
  const string = document.getElementById("message").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById("message2").value = cipher.decode(offset, string)
},true);