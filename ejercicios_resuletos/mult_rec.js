
/*
funcion recurrente que multiplique dos numeros
 
¿que es una multiplicacion?
una multplicacion es sumar el mismo numero n veces

    a * 4 = a + a + a + a => se suma 4 veces a  

entonces podemos decir que una suma es la siguiente serie (n es subindice):

    a * n = ... an-3 + an-2 + an-1 + an 

al ya tener la serie podemos hacer facilmente la fucion reucursiva
siendo esta

    a + funcion(a, b-1)

empezamos sumando "a" ya que tenemos que tener un punto de inicio
y a esta le sumamos funcion(a, b-1), "a" no cambia ya que estamos sumando
"a" b veces, el que va cambiando es la "b"  ya que este es nuestro contador
de cuantas veces se a sumado "a", por eso "b" va disminuyendo con cada llamada
de la funcion, funcionaria de la siguiente manera:

    a*b = 3*3

    3 + funcion(3, 3-1); b = 3
    3 + funcion(3, 2-1); b = 2
    return 3; b = 1 como b ya es 1 ya no puede seguir sumando, es nuestra condicion
    limite que rompe el ciclo
*/

function mult_rec( a, b){

    if(b == 1){ //condicion limite que rompe el ciclo
        return a;
    }
    else{

        return  a + mult_rec(a, b-1) 
    }


}

console.log(mult_rec(5,5)) //escogemos los numeros que deseamos multiplicar