const aRecibos = [
    { id: 1, numero: '00000002', importe: 1000, cliente: 'R00001' },
    { id: 2, numero: '00000003', importe: 3000, cliente: 'C00002' },
    { id: 3, numero: '00000004', importe: 2000, cliente: 'R00002' },
    { id: 4, numero: '00000005', importe: 8000, cliente: 'C00001' },
]


console.log("Recorrer e imprimir en terminal con forEach, mostrando cliente e importe:")
aRecibos.forEach(recibo => {
    console.log("Cliente: " + recibo.cliente + "Importe: $" + recibo.importe)
});

console.log("Ordenar por importe utilizando sort:")

function ordenarRecibosPorImporteDescendente(){
     return aRecibos.sort((r1, r2) => r2.importe - r1.importe)
}

console.log(ordenarRecibosPorImporteDescendente())

const clienteConR = [];
const recibosConAumento = [];

const funciones = {

    clientesConLetraR(){
        console.log("Nuevo Array con clientes que empiezan con la letra 'R' usando filter")
        clienteConR.push(aRecibos.filter(recibo => recibo.cliente.charAt(0) == 'R'))
        return clienteConR;
    },
    aumentarPorcentaje(porcentaje){
        for( let i = 0; i < aRecibos.length; i++){
            aRecibos[i].importe += (aRecibos[i].importe * porcentaje)
            recibosConAumento.push(aRecibos)
        }
        console.log("Recibos con aumento:")
        return aRecibos;
    }

}


export {aRecibos, funciones}


