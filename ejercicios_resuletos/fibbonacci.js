//0 1 1 2 3 5 8 13…….fibo(k-2) fibo(k-1) fibo(k)


//fibonacci recursivo
function fibo(n){
 
    if(n <= 2){

        return 1;
    }
    else {

        return fibo(n-1)+fibo(n-2);
    }

}

function fibo_iterativo(n){

    //se rellena los primeros 2 espacios con 1 ya que asi funciona la serie fibonacci
    let f = [1,1];

    //empieza en dos ya que F0 y F1 hay un 1
    let i = 2;

    //n es el balor de fibo que quieres obtener
    while(i < n){

        //la posicion actual (vacia) es rellenada con la suma de la posicion anterior con la de 2 anteriores
        f[i] = f[i-1] + f[i-2]; 
        i++;
    }

    console.log(f);

}



//imprime el resultado final de la serie fibbonacci que quieres obtener
console.log(fibo(5))


//llama a fibo_iterativo y dentro tiene el console.log
fibo_iterativo(5);

 