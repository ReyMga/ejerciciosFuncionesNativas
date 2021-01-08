/*
sonIguales(a, b)
Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.

sonIguales('javascript', 'JavaScript') // true
sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // true
sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // false
*/

const sonIguales = (a, b) => a.toLowerCase()==b.toLowerCase();
