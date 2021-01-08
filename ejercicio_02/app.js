const esUltimoCaracter = (palabra, caracter) =>{

    let posicionDelUltimoCaracter = palabra.length - 1;
    let ultimoCaracter = palabra.charAt(posicionDelUltimoCaracter);
    return ultimoCaracter === caracter;
}


//const esUltimoCaracter = (palabra, caracter) =>palabra.endsWith(caracter);
