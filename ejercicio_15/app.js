/*
esPuenteSeguro(puente)
Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar

esPuenteSeguro('### ##') // false
esPuenteSeguro('##### ####') // false
esPuenteSeguro('########') // true
*/

const esPuenteSeguro = (puente)=>{
 let archivoExtension=puente.split (" ");
 return !(archivoExtension.length > 1);
}


