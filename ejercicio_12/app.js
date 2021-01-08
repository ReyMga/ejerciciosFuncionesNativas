/*
espaciarCaracteres(str)
Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todos sus caracteres separados por un espacio

espaciarCaracteres('javascript') // 'j a v a s c r i p t'
espaciarCaracteres('ada lovelace') // 'a d a l o v e l a c e'
*/

const espaciarCaracteres = (str) =>{
    let espacioPalabra="";
    // Quito los espacios a la palabra o frase que ingresa en la funcion. 
    let sinEspacios = str.replaceAll(' ', '');
    // Recorro la palabra o frase hasta su fin
    for(let i=0; i < sinEspacios.length; i++)
    {
        //Agrego un espacio entre cada caracter
        espacioPalabra=espacioPalabra + sinEspacios[i] + ' ';
    }
    return espacioPalabra;
}

