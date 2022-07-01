// PAULA ALEJANDRA MONCADA CASTIBLANCO
// SARA KATHERIN FUYA CACERES
// VALENTINA AMAYA MENDEZ
// JUAN JOSE SANCHEZ BENITEZ
// FICHA: 2470980

//18/06/2022
//carrito con objetos

//Se hace un do while para comenzar hacer un clico
do{
  nombre=validacionTexto("Dijite su nombre")
 
  //se define un objeto la cual se crean variables y se definen   
     let produc={
       P:"pantalon",
       C:"camisas",
       M:"medias",
     };  
     //Me muestra todas las variables del objeto       
      
      //se hace un do while para comenzar a funcionar el programa
     do{
      //aca con la variable letraCliente se esta guardando todo lo de digite la letra del producto
      letraCliente=prompt("digite la letra del producto a comprar")
      //En la variable letraMay se esta convirtiendo toda las letras en mayuscula con touppercase
       letraMay=letraCliente. toUpperCase ()
       //se define esta como funcion de que me devuelva falso o verdadero
     esta = false
     /*nos comienza a recorrer el objeto de la linea diez con en for declarando una variable llamada key
     y el in produc es que en ese objeto vamos a buscar */
     for(let key in produc){
      //hacemos un if para convertir todo a mayuscula
       if (key == letraMay){
        //esta le estamos dando valor verdadero para que salga del if y el for
         esta = true}
     }
     //se hace el while para ver si todo lo que hay en la variable esta no se cumple no lo velva a repetir
     }while (esta==false) 
     //nos imprime esta 
     alert(esta)
     //creamos variable canti y todo lo que Digite la cantidad del producto a comprar se va a guardar en esta variable
     canti=prompt("Digite la cantidad del producto a comprar")
     //la imprimimos
     alert(canti)
     //damos validacion de datos y nos dice si en cantidad hay vacios o valores nulos porfavor repita el ciclo
   while (canti == null || /\D/.test(canti) || canti== "") {
    //si no digita algo que sea valido la devolvemos hacer el while
    canti = prompt("Entre un número valido");
};
     
/*se crea un switch para que comienze a reccorer linea por linea y nos haga el proceso
 de  hacernos la multiplicacion y imprimirnos la factura con el brak nos salimos de cada sw*/
     switch(letraMay){
     case 'C':
     alert("El producto seleccionado es camisa con un costo por unidad de 20000")
     cam=20000*canti
     alert("un buen dia "+nombre+" "+"Su total a pagar es de " + cam + " pesos" );
     break;
     case 'P':
     alert("El producto seleccionado es pantalon con un costo por unidad de 50000")
     pan=50000*canti
     alert("un buen dia "+nombre+" "+"Su total a pagar es de " + pan + " pesos" );
     break;
     case 'M':
     alert("El producto seleccionado es medias con un costo por unidad de 5000")
     med=5000*canti
     alert("un buen dia "+nombre+" "+"Su total a pagar es de " + med + " pesos" );
     break;
     default:
     console.log("El valor digitado es incorrecto")
     };
  
     //creamos una variable rep y le damos un confirm que nos va a decir si o no queremos volver a la tienda
     rep = confirm("Desea volver a la tienda ");
     
     //si nada de los anterior es estrictamente igual a lo pedido se quede en el do hasta que digite datos verdaderos
     }while(rep===true)

// se crea una funcion de validacion tecto que todo sea texto lo que se digita 
     function validacionTexto(texto) {

  do {
    let nombre = prompt(texto);

    if (nombre !== "" && nombre !==' '&& !(!/^[a-zA-Z ]*$/g.test(nombre)))
      return nombre;
  } while (true);
}