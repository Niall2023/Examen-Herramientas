  // 1. Crear una función que obtenga número mayor de una matriz 4x4 y que
//tome como parámetro matriz
  
  
  function numeroMayor(matriz){
        let numeroMayor = matriz[0][0]
        for(let i = 0; i<matriz.length; i++){
        for(let j = 0; j<matriz[i].length; j++){
            if(matriz[i][j]>numeroMayor){
                numeroMayor = matriz[i][j]
            }
        }
    
        return numeroMayor;
    }}
    
    const matriz = [
        [0,0,17,6],
        [9,5,2,10],
        [4,25,6,8],
        [19,7,5,8],
    ]
    
    const resultado = numeroMayor(matriz)
    
    console.log(resultado);


    