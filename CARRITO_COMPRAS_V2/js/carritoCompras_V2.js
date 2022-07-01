// PAULA ALEJANDRA MONCADA CASTIBLANCO
// SARA KATHERIN FUYA CACERES
// VALENTINA AMAYA MENDEZ
// JUAN JOSE SANCHEZ BENITEZ
// FICHA: 2470980

//importamos el archivo json y lo almacenamos en la varianle datosArchivo
import datosArchivo from './datos.json' assert { type: 'json' };
// Clase que gestiona cada uno de los productos que se tienen para la venta
class ProductoTienda {
     //atributos
     #codigoProducto;
     #nombreProducto;
     #inventarioProducto;
     #precioProducto;

     constructor(){
          //inicializamos los atributos
          this.#codigoProducto = '';
          this.#nombreProducto = '';
          this.#inventarioProducto = 0;
          this.#precioProducto = 0.0;

     }

     //Metodos getter y setter para los atributos
     get getCodigoProducto() {
          return this.#codigoProducto;
     }

     set setCodigoProducto(value) {
          this.#codigoProducto = value;
     }

     get getNombreProducto() {
          return this.#nombreProducto;
     }

     set setNombreProducto(value) {
          this.#nombreProducto = value;
     }

     get getInventarioProducto() {
          return this.#inventarioProducto;
     }

     set setInventarioProducto(value) {
          this.#inventarioProducto = value;
     }

     get getPrecioProducto() {
          return this.#precioProducto;
     }

     set setPrecioProducto(value) {
          this.#precioProducto = value;
     }

}
//Clase que gestiona los productos que se tienen para la venta en la tienda
class GestionarProductosTienda {

     #cargaProductos;

     constructor(){

          this.#cargaProductos = [];

     }
     
     //metodo que nos retorna el arreglo de objetos
     getDatosProductosCargados() {
          return this.#cargaProductos;
     }

     cargaManualProducto(){

          let dato = "";

          //Le damos la opcion al vendedor de vender mas productos
          while (confirm('¿Desea digitar un nuevo producto?')){

               let sw = true;
               let producto = new ProductoTienda();

               //solicitamso el código del producto
               do{
                    dato = this.datosProducto("Digite Codigo del Producto ==> ", "numerico");

               } while (this.verificarCodigoProducto(dato));

               //pasamos el código del producto a mayuscula
               producto.setCodigoProducto = dato.toUpperCase();

               //solicitanos el nombre del producto
               do{
                    dato = this.datosProducto("Digite Nombre del Producto ==> " , "texto");
               } while (this.verificarNombreProducto(dato.toUpperCase()));

               //pasamos el nombre del producto a mayusculas
               producto.setNombreProducto = dato.toUpperCase();
               
               //solicitamos la cantidad de productos que vamos a vender (only numeric)
               producto.setInventarioProducto = Number(this.datosProducto("Digite Inventario del Producto ==> ","numerico"));
               //solicitamos el precio de los productos (only numeric)
               producto.setPrecioProducto = Number(this.datosProducto("Digite Precio del Producto ==> ","numerico"));
               
               //enviamos los datos de los porductos al arreglo 
               this.#cargaProductos.push(producto);
     

          }
     }
// se crea un metodo para hacer todo lo que sea validacion y captura de pructos vendedor
     cargaArchivoProductos(){
          
          let i=0;

          if (datosArchivo.length > 0){
          
               datosArchivo.forEach(objeto => {

                    i++;
                    //validamos los datos y le agregamos los metodos a los pototipos por defecto
                    let producto = new ProductoTienda();
                    producto.setCodigoProducto = objeto.codigoProducto.toUpperCase();
                    producto.setNombreProducto = objeto.nombreProducto.toUpperCase();
                    producto.setInventarioProducto = objeto.inventarioProducto;
                    producto.setPrecioProducto = objeto.precioProducto; 
                    
                    this.#cargaProductos.push(producto);
     
               });  

          };
          //mostramos la cantidad de productos que hay a la venta
          console.log("Total de productos cargados ==> " + i);

     }

     almacenaProductos(datosClase){
          //console.log(datosClase);
          localStorage.setItem("productosTienda",JSON.stringify(datosClase));
          let datosJson = localStorage.getItem("productosTienda");
          //console.log(JSON.parse(datosJson));
     }

     //se hace metodo para la validacion de datos
     datosProducto(mensaje,tipo){
          let valor = "";
        
          if(tipo==="numerico")valor=validacionNumero(mensaje)
          if(tipo=== "texto")valor= validacionNombre(mensaje)
          return valor;
     }
     // se hace un metodo para hcer la verificacion de datos y se hace un try por si llega a ver errores

     verificarCodigoProducto(codigo){

          let sw = false;
          let BreakException = {};

          if (this.#cargaProductos.length > 0){

               try {
                    this.#cargaProductos.forEach(objeto => {
                         if (objeto.getCodigoProducto === codigo){
                              sw = true;
                              throw BreakException;
                         };
                    });
               } catch (e) {
                    if (e !== BreakException) throw e;
               };

          } else{
               sw = false;
          }
          return sw;
     }
     //se verifica el nombre del producto que no este escrito dos veces y tambien se compara con un try catch
     
     verificarNombreProducto(nombre){

          let sw = false;
          let BreakException = {};

          if (this.#cargaProductos.length > 0){
               try {
                    this.#cargaProductos.forEach(objeto => {
                         if (objeto.getNombreProducto === nombre){
                              sw = true;
                              throw BreakException;
                         };
                    })
               } catch (e) {
                    if ( e !== BreakException) throw e;
               };
          } else{
               sw = false;
          }
          return sw;
     }

     //mostramos un listado de los productos que hay disponibles
     mostrarProductos(datosProductos){
          let i=0;
          console.log ("   PRODUCTOS DISPONIBLES - TIENDA ONLINE"   );
          console.log ("| CODIGO | PRODUCTO | INVENTARIO | P.V.P. |");

          datosProductos.forEach(producto => {
               console.log("|   " + producto.getCodigoProducto + "   | " + producto.getNombreProducto + " |      " +
               producto.getInventarioProducto + "     | " + (producto.getPrecioProducto).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " | ");
          });
          console.log(" ");          
     }

}
//validamos el nombre del producto, del vendedor y del cliente (solo se pueden digitar letras)
function validacionNombre(texto) {

     do {
       let nombre = prompt(texto);
   
       if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
         return nombre;
     } while (true);
   }
//validamos el numero de productos en venta, el precio y la cantidad que va a comprar el cliente (solo se pueden digitar numeros)
function validacionNumero(texto) {
   
     do {
       let nombre = prompt(texto);
   
       if (nombre !== "" && nombre !== ' ' &&  !(!/^[0-9]*$/g.test(nombre)))
         return nombre;
     } while (true);
   }
   
//clase que gestiona cada uno de los productos que el cliente tiene en el carrito de compras
class CompraProductoTienda {
     
     #clienteCompra;
     #productoCompra;
     #cantidadCompra;
     #precioCompra;

     //metodo constructor
     constructor() {

          this.#clienteCompra = '';
          this.#productoCompra = '';
          this.#cantidadCompra = 0;
          this.#precioCompra = 0.0;

     }

     //metodo que nos retorna el total de la compra
     calculaValorCompra() {
          return this.#cantidadCompra * this.#precioCompra;
     }

     //solicitamso un mensaje y lo retornamos 
     datosCompra(mensaje){
          let valor = prompt(mensaje);
          return valor;
     }

     //Solicitamos los datos de los productos que deseamos comprar (el código)
     datoCodigoProducto(datosProductos){

          let sw = true;
          let BreakException = {};
          let valor = "";
          do {
               
                    valor = prompt("Digite Codigo Producto ==> ");
               
               
               try {
                    datosProductos.forEach((objeto, index) => {
                         if (objeto.getCodigoProducto === valor && objeto.getInventarioProducto >0){
                              this.setCantidadCompra = objeto.getInventarioProducto;
                              this.setPrecioCompra = objeto.getPrecioProducto;
                              valor = objeto.getNombreProducto;
                              sw = false;
                              throw BreakException;
                         };
                    });
               } catch (e) {
                    if (e !== BreakException) throw e;
               };
               if (sw){
                    console.log("Codigo no existe. ¡Verifique!");
               }
          } while (sw);

          return valor;
     }

     //solicitamos los datos de los productos que deseamos comprar (número de unidades)
     datoCantidadProducto (datosProductos){

          let sw = true;
          let valor = "";
          let BreakException = {};
          
          do {
              

                    valor = validacionNumero("Digite Número de unidades ==>");
              
               
               

               if (valor <= this.getCantidadCompra){
                    this.setCantidadCompra = valor;
                    try {
                         datosProductos.forEach((objeto, index) => {
                              if (objeto.getNombreProducto === this.getProductoCompra){
                                   objeto.setInventarioProducto = objeto.getInventarioProducto - this.getCantidadCompra;
                                   throw BreakException;
                              };
                         });
                    } catch (e) {
                         if (e !== BreakException) throw e;
                    };
     
                    sw = false;
               }else{
                    console.log ("Cantidad digitada excede las existencias. ¡Verifique!");
               };
          } while (sw);

          return valor;
     }

     //Metodos getter y setter para los atributos del cliente
     get getClienteCompra() {
          return this.#clienteCompra;
     }

     set setClienteCompra(value) {
          this.#clienteCompra = value;
     }

     get getProductoCompra() {
          return this.#productoCompra;
     }

     set setProductoCompra(value) {
          this.#productoCompra = value;
     }

     get getCantidadCompra() {
          return this.#cantidadCompra;
     }

     set setCantidadCompra(value) {
          this.#cantidadCompra = value;
     }

     get getPrecioCompra() {
          return this.#precioCompra;
     }

     set setPrecioCompra(value) {
          this.#precioCompra = value;
     }

}

//clase donde se van a guardar los productos que compra el cliente 
class CarritoCompra{
      
     #productosCarrito;

     constructor(){

          this.#productosCarrito = [];

     }

//metodo para guardar los productos que compra el cliente
     nuevoProducto(nombre, datosProductos){

          let producto = new CompraProductoTienda();

          producto.setClienteCompra = nombre;
          producto.setProductoCompra = producto.datoCodigoProducto(datosProductos);
          producto.setCantidadCompra = producto.datoCantidadProducto(datosProductos);
          
          this.#productosCarrito.push(producto);
     }

     //se imprime la factura del cliente para mostrarle que va a llevar y cuanto es el precio
     mostrarCompra(carrito){

          let i=0;
          let compra = 0;

          console.log ("                 FACTURA DE VENTA - TIENDA ONLINE"               );
          console.log ("|       PRODUCTO     |   CANTIDAD  |   P.V.P.   |   SUBTOTAL   |");

          carrito.forEach(objeto => {
               compra += objeto.calculaValorCompra();
               console.log("|      " + objeto.getProductoCompra + "      |       " + objeto.getCantidadCompra + "     | " +
               objeto.getPrecioCompra.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "  |  " + (objeto.calculaValorCompra()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "   | ");
          });
          console.log("");  
          console.log("Valor Total de la Factura ==> ", (compra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));     
          console.log("¡Gracias por su compra!");
     }

     //metodo get para retornar el arreglo de objetos
     get carritoCompra(){
          return this.#productosCarrito;
     }

     //metodo get para retornar la longitud del arreglo de objetos
     get numeroProductos(){
          return this.#productosCarrito.length;
     }
}

//solicitamos el nolmbre del cliente y lo validamos
function setNombreCliente(){
     let nombre = validacionNombre('Nombre del Cliente');
     nombre = nombre.toUpperCase();
     return nombre;
}

//se definen variables para que lo inicialize
let sw = true;
let respuesta = true;
let nombre = '';
//se trae una clase referenciandolo productosTienda

let productosTienda = new GestionarProductosTienda();

productosTienda.cargaArchivoProductos();

productosTienda.cargaManualProducto();


productosTienda.almacenaProductos(productosTienda.getDatosProductosCargados());

let canasta = new CarritoCompra();

//while "¿Existe un nuevo Cliente?" en caso de true, se repite todo el procedimiento 
while (confirm('¿Existe un nuevo Cliente?')){

     do{
          nombre = setNombreCliente();
         if (nombre === ""){
               sw = true;          
          } else {
               sw = false;
          };
     } while (sw);  

     
     do{
          productosTienda.mostrarProductos(productosTienda.getDatosProductosCargados());
          canasta.nuevoProducto(nombre, productosTienda.getDatosProductosCargados());

     } while (confirm('¿Desea un nuevo producto?'));

     //imprimimos la cantidad de productos
     console.log(canasta.numeroProductos);
     //Imprimimos los productos
     console.log(canasta.carritoCompra);
     //Imprimimos el nombre del cliente 
     console.log('Nombre del Cliente ==> ' + canasta.carritoCompra[0].getClienteCompra);
     canasta.mostrarCompra(canasta.carritoCompra);
}