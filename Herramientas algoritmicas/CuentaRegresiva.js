//6. Crear una función que haga la cuenta regresiva y que tome como
// parámetro numeroInicial recuerde utilizar en este caso el metodo push()

function CuentaRegresiva(numeroInicial){ 

    const CuentaRegresiva = []


    for(let i = numeroInicial; i > 0; i--){
        CuentaRegresiva.push(i)
    }


    return CuentaRegresiva;

    
}

const numeroinicial = 50


console.log(CuentaRegresiva(numeroInicial))








   

  