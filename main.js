/*variables generales*/

const SelectedQty = "Por favor, indica la cantidad";

let products = [
    {id: 1, name: "Remera Monkey Space", price: 300, stock: 300},
    {id: 2, name: "Remera Monkey Mango", price: 300, stock: 400},
    {id: 3, name: "Remera Monkey Bart", price: 400, stock: 500},
    {id: 4, name: "Remera Monkey Papas", price: 400, stock: 400},
    {id: 5, name: "Remera Monkey Gato", price: 600, stock: 300},
];


let cart = 0;

let resp = "S";


/*Función para verificar el stock del producto*/
const isStock = (quantity,stock) =>{
    if(quantity > stock){
        alert(`No tenemos suficiente stock, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
}

/*Función carrito de compras*/
const addToCart = (option, quantity) => {
    const found = products.find(product=>product.id === option)
    if(isStock(quantity, found.stock)){
        cart += (quantity * found.price);
        products[option-1].stock -= quantity;
        alert(`${found.name} fue agregado a la cuenta`);
    }
}

/*función menú + id productos*/
const showMenu = () =>{
    let menu = "Escoge un Producto: \n";
    products.forEach((product)=>{
        menu += product.id + "- " + product.name + "\n";
    });
    menu += (products.length + 1) + "- Salir" ;
    let test = parseInt(prompt(menu));
    return test;
};

/*index menu*/
alert('Bienvenido a Monkey Argentina®')

do{

    let option = showMenu();
    if(option === products.length + 1) break;
    let qty = parseInt(prompt(SelectedQty))

    addToCart(option, qty);

    resp = prompt("¿Desea agregar mas productos? SI/NO");

}while(resp === "SI" || resp === "si");

if(cart > 0){
    alert(`El monto a abonar es de $${cart}`);
}

let finalizarCompra = prompt ("¿Desea confirmar la compra?");


if ((finalizarCompra == "si") || (finalizarCompra == "SI")) {
    alert ("FELICITACIONES! su compra ha sido confirmada");
    alert ("¡Gracias por elegirnos!")
    }
else {
    alert ("Su compra ha sido cancelada");
    alert("¡Esperamos que vuelvas pronto!")
}


/*Función para agregar los productos al index*/
for (const product of products) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h1> ID: ${product.id}</h1>
                            <p>  Producto: ${product.name}</p>
                            <b> $ ${product.price}</b>`;
    document.body.appendChild(contenedor);
}

/*Función para agregar el domicilio de envío al index*/
let elemento = document.createElement("h1");
elemento.innerHTML = prompt ("Ingrese su direccion de envío por favor");
document.body.appendChild(elemento);

