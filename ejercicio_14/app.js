/*
obtenerExtension(archivo)
Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo

obtenerExtension('imagen.png') // 'png'
obtenerExtension('index.html') // 'html'
obtenerExtension('notas.txt') // 'txt'
*/

const obtenerExtension = (archivo)=>{
    let archivoExtension=archivo.split (".");
    let resultadoArchivo=archivoExtension[1];
    return resultadoArchivo;
}