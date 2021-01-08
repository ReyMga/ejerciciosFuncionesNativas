/*
removerVocales(str)
Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todas sus vocales removidas

removerVocales('javascript') // 'jvscrpt'
removerVocales('ada lovelace') // 'd lvlc'
*/

const removerVocales = (str)=>{
    let resultado = str.replace(/[aeiou]/g, '')
    return resultado
}