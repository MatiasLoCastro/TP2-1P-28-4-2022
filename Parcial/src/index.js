import { aRecibos, funciones } from "./service/recibos.js";
import fs from 'fs'

const comienzoDelCodigo = (texto) => console.log(texto)
//setTimeout(()=> comienzoDelCodigo("7 segundos"),7000);

console.log(funciones.clientesConLetraR())
console.log(funciones.aumentarPorcentaje(0.3))

let textoDeArchivo = 'Nuevo Texto'
let path = 'archivo.txt'

fs.writeFile(path, textoDeArchivo, (err) => {
    if (err) throw err;

    console.log("Archivo guardado correctamente");
});