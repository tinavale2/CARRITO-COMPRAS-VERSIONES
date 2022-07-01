// PAULA ALEJANDRA MONCADA CASTIBLANCO
// SARA KATHERIN FUYA CACERES
// VALENTINA AMAYA MENDEZ
// JUAN JOSE SANCHEZ BENITEZ
// FICHA: 2470980
//Crea clase Almacen
class Almacen {
    #nombreVendedor
    #nombreProducto
    #precioProducto
    #cantidadProducto
  // el metodo constructor sirve para crear e inicializar un objeto creado a partir de una clase
    constructor() {
      this.#nombreVendedor = "";
      this.#nombreProducto = "";
      this.#precioProducto = 0;
      this.#cantidadProducto = 0;
    }
  
    //capturamos el nombre del vendedor
    capturaDato(mensaje) {
      let valor = prompt(mensaje);
      return valor;
    }
  
    //se hace un get para vendedor
    get getNombreVendedor() {
      return this.#nombreVendedor;
    }
  
    //se hace un set para vendedor
    set setNombreVendedor(value) {
      this.#nombreVendedor = value;
    }
  
    //se hace un get para producto
    get getNombreProducto() {
      return this.#nombreProducto;
    }
  
    //se hace un set para producto
    set setNombreProducto(value) {
      this.#nombreProducto = value;
    }
  
    //se hace un get para precio del producto
    get getPrecioProducto() {
      return this.#precioProducto;
    }
  
    //Se hace un set para la cantidad del producto
    set setPrecioProducto(value) {
      this.#precioProducto = value;
    }
  
    //Se hace un get para la cantidad del producto
    get getCantidadProducto() {
      return this.#cantidadProducto;
    }
  
    //Se hace un set para la cantidad del producto
    set setCantidadProducto(value) {
      this.#cantidadProducto = value;
    }
  
  }
  
  // Se crea la clase productos
  
  class productosVender {
    #productos = [];
    constructor() {
      this.#productos = [];
    }
    //metodo get que luego nos retornara el arreglo de objetos
    get bodega() {
      return this.#productos
    }
  
    nuevoProducto() {
      let producto = new Almacen();
      producto.setNombreVendedor = nombre;
      producto.setNombreProducto = validacionNombre('Digite el nombre del producto')
      producto.setCantidadProducto = validacionNumero('Digite numero de unidades ');
      producto.setPrecioProducto = validacionNumero('Digite precio de la unidad ');
  
      this.#productos.push(producto);
      return producto;
    };
  
  }
  let nombre = ""
  let swicht = true;
  //Capura nombre del vendedor
  function capturaNombreVendedor() {
    do {
      //almacenamos el nombre del vendedor en la variable nombre
      let nombre = prompt('Nombre del vendedor');
      //validamos que en el nombre del vendedor solamente se puedan digitar letras
      if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
        return nombre;
    } while (swicht);
  }
  
  //creamos una funcion para validar el tipo de caracter, en este caso tipo texto
  function validacionNombre(texto) {
  
    do {
      let nombre = prompt(texto);
  
      if (nombre !== "" && nombre !== ' ' && !(!/^[a-zA-Z ]*$/g.test(nombre)))
        return nombre;
    } while (true);
  }
  //creamos una funcion para validar el tipo de caracter, en este caso tipo numero
  function validacionNumero(texto) {
  
    do {
      let nombre = prompt(texto);
  
      if (nombre !== "" && !(!/^[0-9]*$/g.test(nombre)))
        return nombre;
    } while (true);
  }
  // se guarda la funcion en la variable nombre
  //nombre = capturaNombreVendedor();
  nombre = validacionNombre('Nombre del vendedor');
  
  //validacion del nombre producto a vender
  
  
  //Variables adicionales para nombre del vendedor
  
  let resultado = true;
  
  
  
  //Se crean bucles do while para registrar los productos
  let stack = new productosVender;
  do {
  
    //bucle do while para el nombre del vendedor
  
  
    //La nueva variable stack captura los atributops de la clase Productos
  
  
    //Se crea un bucle para saber si desea agragar o no un nuevo producto
    do {
      stack.nuevoProducto(nombre);
      respuesta = confirm('¿Desea agregar un nuevo producto?');
    } while (respuesta);
    console.log("")
    console.log('Nombre del Vendedor ' + stack.bodega[0].getNombreVendedor);
  
    let i = 0;
    let vender = 0;
  
    //se hace la funcion flecha para que me recorra el arreglo y me lo muestre todo al final
  
    stack.bodega.forEach(producto => {
      i++;
      console.log(i + ". " + producto.getNombreProducto + " " + producto.getCantidadProducto + " " + producto.getPrecioProducto)
  
    });
  
  } while (respuesta)
  
  
  
  //-------------------Cliente----------------------
  
  //se hace la clase cliente
  class Cliente {
    //se hacen los atributos
    #nombreCliente
    #nomProCliente
    #cantidadCliente
    #precioCliente
  
    //Se crea el constructor para inicializar los atributos
    constructor() {
      this.#nombreCliente = "";
      this.#nomProCliente = "";
      this.#cantidadCliente = 0;
      this.#precioCliente = 0; 
    }
  
    //se hace un get para el nombre del cliente
    get getNombreCliente() {
      return this.#nombreCliente;
    }
  
    //se hace un set para el nombre del cliente
    set setNombreCliente(value) {
      this.#nombreCliente = value;
    }
  
    //se hace un get para el nombre del producto del cliente
    get getNomProCliente() {
      return this.#nomProCliente;
    }
  
    //se hace un set para el nombre del producto del cliente
    set setNomProCliente(value) {
      this.#nomProCliente = value;
    }
  
    //se hace un get para la cantidad del producto 
    get getCantidadCliente() {
      return this.#cantidadCliente;
    }
  
    //se hace un set para la cantidad del producto
    set setCantidadCliente(value) {
      this.#cantidadCliente = value;
    }
    get getPrecioProductoClient() {
      return this.#precioCliente;
    }
    set setPrecioProductoClient(value) {
      this.#precioCliente = value;
    }
  
  
  }
  
  //se hace la clase cliente producto para  array
  class Clienteproduc {
    //se define un array
    #productoCliente = [];
  
    //se inicializa el array
    constructor() {
      this.#productoCliente = [];
    }
  
    //se hace el get al bodega  cliente la cual sirve pegar todo en la palabra  encargo
    get bodegaCliente() {
      return this.#productoCliente
    }
  
    //metodo para crear la comparación entre lo que digita el cliente con lo del vendedor
    arregloCliente() {
      do {
        let encargo = new Cliente;
        encargo.setNombreCliente = nombreCli;
        do {
        //
        let bandera=true;
        encargo.setNomProCliente = capturaNombreProducto()
        //for para recorrer el arreglo e ir comparando cada objeto
        for(let producto of stack.bodega ){
          //Validacion de datos (el nombre del producto que quiere el usuario debe ser igual al que establece el vendedor)
          if (encargo.getNomProCliente === producto.getNombreProducto) {
            //
            encargo.setCantidadCliente = capturaCantidadCliente();
            //Validacion de la cantidad disponible con la que quiere comprar el cliente
            if (encargo.getCantidadCliente <= producto.getCantidadProducto) {
              //
              encargo.setPrecioProductoClient = encargo.getCantidadCliente * producto.getPrecioProducto
              //            
              producto.setCantidadProducto= producto.getCantidadProducto - encargo.getCantidadCliente 
  
              //enviamos el arreglo del cliente a encargo
              this.#productoCliente.push(encargo);
              
              bandera=false
              sw = false
              break
            }
              //si el cliente quiere comprar mas productos de los que hay en bodega nos muestra que no hay tantos productos
            else {
              console.log('Supera la cantidad de productos en bodega')
              bandera=false
              break
            }
    
          } else {
            let bandera=true;
              
          } 
        }
          //bandera = true, por ende el true es para identificar que no hay un producto 
          
        if(bandera){
          console.log("Este producto no esta disponible")
        }
      
      } while (sw)
        //preguntamos si el cliente quiere comprar mas productos
      respuesta = confirm("¿Desea comprar otro producto?")
      if(respuesta){
        sw=true
      } 
      //en caso de que el cliente desee comprar mas productos, se repite el proceso
    } while (respuesta);
      
    };
  
  }
  
  let nombreCli = "";
  let sw = true;
  //Captura nombre del cleinte
  function capturaNombreCliente() {
    do {
      //almacenamos el nombre del cliente
      let nombreCli = prompt('Nombre del Cliente');
      //generamos la validacion de datos (en el nombre solamente se digitan letras)
      if (nombreCli !== "" && !(!/^[a-zA-Z ]*$/g.test(nombreCli)))
        return nombreCli;
    } while (sw);
  }
  
  nombreCli = capturaNombreCliente();
  
  //capturar nombre del producto
  function capturaNombreProducto() {
    let nProducto = prompt('Nombre del producto')
    return nProducto
  }
  
  
  
  
  //captura cantidad de productos que quiere comprar el cliente
  function capturaCantidadCliente() {
    let nCProducto = prompt('Digite la cantidad del producto a llevar')
    return Number(nCProducto)
  
  }
  
  
  
  //multiplicacion para obtener el precio total 
  function multiplicacionCantidad(producto, clienteCanProduc,nomProducCliente) {
    let cCliente = clienteCanProduc * producto.getPrecioProducto
    return cCliente;
  
  }
  
  
  
  
  //imprimimos la factura
  let compras = new Clienteproduc
  compras.arregloCliente(nombreCli)
  //imprimimos el nombre del cliente
  console.log("cliente ",compras.bodegaCliente[0].getNombreCliente)
  
  console.log('|    Producto    |    Cantidad    |    Total    |')
  //variable para obtener el total a pagar
  let suma=0
  //forEach para recorrer el arreglo y funcion flecha para obtener los objetos y acceder a ellos
  compras.bodegaCliente.forEach(key => {
    //imprimimos la factura            
    console.log( "|    ",key.getNomProCliente,"    |    ", 
    key.getCantidadCliente,"    |    ",
    key.getPrecioProductoClient,"    ")
  
    //variable suma para generar el total a pagar
    suma=suma+key.getPrecioProductoClient
    
  });
  //imprimimos el valor total 
  console.log("total pagado:", suma)
  //agradecemos al cliente por ser un crack y haber comprado en nuestra tienda
  console.log("¡¡Gracias por su compra!!")