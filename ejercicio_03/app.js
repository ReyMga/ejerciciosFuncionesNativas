/*
esContraseniaValida(contrasenia)
Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

esValida('contraseniaMuySegura') // true
esValida('abc123') // false
*/

const esContraseniaValida = (contrasenia) =>contrasenia.length<=8;

