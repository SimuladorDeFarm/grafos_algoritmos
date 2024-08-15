

/* durante la clase el profe nos pidio que hagamos un algoritmo
    iterativo para obtener el factorial de un numero, pero resulta
    que los metodos convencionales son poco precisos hasta cierto
    numero de caracterres, por lo que debemos implementar una tecnica.
    debemos hacer que todos los valores de factorial se almacenen como 
    numeros < 1, 1 = 0.1, 15 = 0.15 y asi. pero al mostrarlos
    debemos mostralos como normalmente se verian
*/


/* 
    La logica del algoritmo es que un numero factorial N! es igual a 
    N! = N(i) * N(i-1), osea que el factorial de 4 es igual a 4 multiplicado
    por el factorial anterior que es 6, osea 4 * 6 = 24. y el factorial de 
    5 es 5 multiplicado por el factorial anterior el cual ya calculamos y es 24,
    quedando 5 * 24 = 120

    entonces cada factorial va guardandose para poder ser usado en el calculo del 
    siguiente factorial, estos valores de cada factorial los guardaremos en un
    arreglo
*/
function factorial(){

    let factor = 22; //factorial que quieres obtener
    let i = 1;//i tendra dos propositos, será el indice del arreglo y tambien 
    //será el  numero a multiplicar para el factorial ya que justamente estos dos coinciden
    let f = [1];//array f que guarda todos los valores de los factoriales

    while(i <= factor){  // i = 1 irá creciendo hasta ser <= que el valor del factor que queremos

        //la posicion actual de Fi sera el producto de i con  la posision anterior de Fi
        f[i] = i * f[i-1];
        i++;

    }

    console.log(f) //imprimir vector F
}


/* La diferencia con el codigo anterio es que este convertira todos los
valores de factorial en desimales, y para ser mostrados los volvera a mostrar como reales,,
    
        1 = 0.1  
        2 = 0.2  
        6 = 0.6 
        24 = 0.24

esto se logra dividiendo por 10 cada vez que n >= 1, y cada vez que se dividida,
aumentamos en 1 nuestro exponente para asi cuando queramos el numero origial
multipliquemos por * 10^poterncia


        1 = 0.1     * 10^potenica ; potrencia = 1
        2 = 0.2     * 10^potenica ; potrencia = 1
        6 = 0.6     * 10^potenica ; potrencia = 1
        24 = 0.24   * 10^potenica ; potrencia = 2
*/

//funcion que guarda los factorial como numeros decimales
function factorial_decimales(){

    let factor = 22; //factorial que quieres obtener
    let i = 1; //i tendra dos propositos, será el indice del arreglo y tambien 
    //será el  numero a multiplicar para el factorial ya que justamente estos dos coinciden
    let f = [0.1]; //array f que guarda todos los valores de los factoriales
    let potencia = 1; //variable que guarda la potencia por la que se debera elevar 10

    while(i <= factor){

        f[i] = i * f[i-1]; //obtener valor de factorial y guardarlo
        
        if(f[i] >= 1){ //preguntados si el el valor de factorial es >= 1
            f[i] = f[i]/10; //dividimos por 10 si es asi
            potencia++; //valor del expontente aumenta

        }
        //imprimimos el valor de cada factorial por * 10^potencia para obtener el numero original
        //Math.pow es para hacer potencias, (10, potencia) = 10 ^potencia
        console.log(f[i]*(Math.pow(10, potencia))); 
        
        
        i++;//aumentamos i para calcular el siguiente numero de factorial
    }

}


factorial_decimales();
factorial();
