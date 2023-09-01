//2. Crear función que identifique por medio de false o true si una matriz es
//cuadrada y que tome como parámetro matriz

function MatrizCuadrada(matriz){
    let Matriz = Matriz.length
 for(let i=0; i< Matriz;  i++){
        if(matriz[i].length!== Matriz){

         return false}
    }


    return true
} 
 // ----------------------------------------------

const matriz1 = [ 
    [1, 4, 5, 8],
    [36, 23, 19, 10],
    [16, 55]
    
]
const matriz2=[
    [7,8,10],
    [7,4,7],
    [2,2,4]
]



console.log(matriz1)

console.log(MatrizCuadrada(matriz1)) 

console.log(MatrizCuadrada(matriz2)) 

    
// 2
    