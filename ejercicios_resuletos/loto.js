

/* 
Problema del LOTO : ¿Cuántas tarjetas hay que jugar para acertar el Loto?

Es coger 6 números entre 1 y 41 sin repetición 

De 41 números debo tomar 6 ===> 41!/(6!* (41-6)!)

Combinatoria de n sobre K è  n!/(k! (n-k)!)


    k = 6
    n = 41
*/

//iterativo

/* para resolver este problema usaremos la funcion anterior
 de factorial, con los factoriales ya calculados solo tendremos que
 resolver la ecuacion de n!/(k! (n-k)!)
 */


/*tomamos la misma funcion factorial de los ejercicios anteriores
pero le agregamos que reciva un vector v como parametro, para asi tener
el mismo vector de factorial en la funcion loto
*/
function factorial(v, n){

    let factor = n; //factorial que quieres obtener
    let i = 1;//i tendra dos propositos, será el indice del arreglo y tambien 
    //será el  numero a multiplicar para el factorial ya que justamente estos dos coinciden
    let f = v//array f que guarda todos los valores de los factoriales

    while(i <= factor){  // i = 1 irá creciendo hasta ser <= que el valor del factor que queremos

        //la posicion actual de Fi sera el producto de i con  la posision anterior de Fi
        f[i] = i * f[i-1];
        i++;

    }

    console.log(f) //imprimir vector F
}

function loto(){

    //definimos vector en esta funcion
    let f = [1]
    
    //definimos el rango de numeros
    let k = 6
    let n = 41
    
    //calcula el factorial del numero del numero maximo
    //los vectores se pasan como referencia asique el vector
    //modificado en factorial() tambien estara modificado en esta funcion
    factorial(f,n);
    
    //variable que almacenara el numero de tarjetas que hay que comprar
    let tarjetas;

    //aplicamos ecuacion de n!/(k! (n-k)!)
    tarjetas = f[n]/(f[k] *f[(n-k)]);

    //imprimir resultado
    console.log(tarjetas);
}


loto();
