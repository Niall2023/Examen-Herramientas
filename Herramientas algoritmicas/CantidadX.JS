// 4. Crear una función que obtenga la cantidad de x elemento de una matriz

function Cantidad(matriz, Cantidad){
    matriz[0][0]

    let cont = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] == Cantidad) {
                cont++               
            };
        }
        
    } return cont
   
}

const matriz = [
    [4, 5 ,6, 8],
    [2, 3, 4, 5,],
    [1, 2, 1, 4],
    [2, 2, 5, 7,]
];

const Cantidad = 2  

console.log(Cantidad(matriz,Cantidad))
