import cipher from './cipher.js';

/* En este espacio traigo el mensaje y le agrego el evento keyup para cuando el ususario escriba su mensaje 
    sea colocado en mayusculas */
const EventUppercase = document.getElementById("message");
EventUppercase.addEventListener("keyup", function() {
  this.value = this.value.toUpperCase();
}, true);

const ClickEncode = document.getElementById("cifrar");
ClickEncode.addEventListener("click", function() {
  const string = document.getElementById("message").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById("message2").value = cipher.encode(offset, string)
},true);

const ClickDecode = document.getElementById("descifrar");
ClickDecode.addEventListener("click", function(){
  const string = document.getElementById("message").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById("message2").value = cipher.decode(offset, string)
},true);
/* Recomendaciones */
/* Guaradar en variables los getElementById */