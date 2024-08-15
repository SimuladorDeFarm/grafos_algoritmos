

/* 3.- Control de entrada(evaluación formativa): 

 Hacer un algoritmo recursivo que busque la notas de un estudiante, para esto se sabe que:

a.	Hay 3 lista (rut, notas, código de la asignatura)
b.	Las lista están ordenadas por rut de mayor a menor


### explicacion

voy a crear 3 listas con vectores, cada una almacena uno de los siguientes datos_

rut, notas, asignatura

cada persona, nota y asignatura se relacionan por la poscion, la posicion 0 
es oara tal persona, la 1 es para otra y asi...

    let rut  = [juan,pablo, tomas,pedro,moises];
    let notas = [2,4,7,2,6];
    let asig = ["lenguaje","matematicas","artes","matematicas","ingles"];

    juan tiene un 2 en lenguaje
    pablo tiene un 4 en mate
    tomas tiene un 7 artes
    pedro tiene un 2 en mate
    moises tiene un 6 en ingles


voy a mandar el vector rut a una funcion que busque el rut deseado de forma recursiva
*/

//recive vector rut, b esla persona a buscar e i es la posicion, empieza en 0,
// y lo mando desde la funcion original porque no puede ser inicializado en la 
//funcion recursiva ya que al volver a ejecutarse esta regresara siempre el i 
//al numero en que fue inicialziado
function studiante(rut, b, i){

    //si el contenido de rut es igual al rut buscado retorna la posicion de este
    if(rut[i] == b){
        return i;
    }
    else{

        //solo se modifica la posicion i del arreglo ya que hay que recorrerlo
        return studiante(rut, b, i+1 );
    }

}


function main(){

    let rut  = [1,2,3,4,5];
    let notas = [2,4,7,2,6];
    let asig = ["lenguaje","matematicas","artes","matematicas","ingles"];
    let i = 0;
    let b = 2;

    i = studiante(rut, b, 0); //retorna la posicion del rut buscado que es la misma que los otros datos

    console.log("rut: ",rut[i])
    console.log("nota: ",notas[i])
    console.log("asignatura: ",asig[i])
    console.log("poscion: ", i);

    return 0;
}

main();