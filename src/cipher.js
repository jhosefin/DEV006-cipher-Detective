const cipher = {
  // ...
  encode(offset, string) { 
    if(typeof string !== "string" || string === "" || typeof offset !== "number") {
      throw new TypeError();
    }
    while(offset > 26){
      offset -=26;
    }
    /*     if(offset > 26){
      offset = offset -26;
    } */
    let stringEncode = "";
    for(let i=0; i< string.length; i++){  
      /* Convirtiendo el mensaje en un valor ASCII y aplicando el valor */
      const codeAscii = string.charCodeAt(i);
      let codeCifrado = codeAscii + offset;

      //Condición para que cuando sea mayor a 90 el numero ascii se le reste 26 y asi se mantiene en el alfabeto de mayusculas
      if(codeCifrado > 90){
        codeCifrado -= 26;
      }
      // Convertir el nuevo valor ASCII en un carácter y agregarlo al mensaje cifrado
      const caracterCifrado = String.fromCharCode(codeCifrado);
      stringEncode += caracterCifrado;

    }

    return  stringEncode;
  },

  decode(offset, string){
    if(typeof string !== "string" || string === "" || typeof offset !== "number") {
      throw new TypeError();
    }
    /*     if(offset > 26){
      offset = offset -26;
    } */
    while(offset > 26){
      offset -=26;
    }

    let stringDescifrado = "";
    for (let i = 0; i < string.length; i++) {
      // Convertir el carácter cifrado en un valor ASCII y aplicar la clave inversa
      const codigoAscii = string.charCodeAt(i);
      let codigoDescifrado = codigoAscii - offset;
      //Condición para que cuando sea menor a 65 el numero ascii se le sume 26 y asi se mantiene en el alfabeto de mayusculas
      if(codigoDescifrado < 65){
        codigoDescifrado += 26;
      }
      // Convertir el nuevo valor ASCII en un carácter y agregarlo al mensaje descifrado
      const caracterDescifrado = String.fromCharCode(codigoDescifrado);
      stringDescifrado += caracterDescifrado;
    }
    return stringDescifrado;
  }
};

export default cipher;