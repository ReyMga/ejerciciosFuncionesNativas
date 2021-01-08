/*
capitalizar(str)
Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula

capitalizar('lovelace') // 'Lovelace'
capitalizar('había una vez...') // 'Había una vez...'
*/


const capitalizar = (str) =>{
    return str[0].toUpperCase() + str.slice(1);
}
