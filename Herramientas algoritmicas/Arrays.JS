
function arreglos(array1, array2) {

    let array1,array2 = []

    for (let i=0; i<array1.length; i++){
        array1.push(array1[i]+ array2[i])
    }

    return array1
}

const array1 = [2, 3, 2];
const array2 = [2, 3, 2]



console.log(arreglos(array1,array2))
