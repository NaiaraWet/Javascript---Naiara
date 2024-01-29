const carrito = [""];
const productos =["Crema Hidratante face - 12500", "Contorno de ojos hidratante beauty - 10000", "Serum beauty niacinamida - 14000", "Serum Hydra Vitamina C - 15000", "Serum Skin Pure - 12500", "Crema Hidratante Anti-age - 25000", "Crema Hidratante Skin de Día - 27500", "Crema Hidratante Skin de Noche - 27500", "Crema Skin Gold Hidratante - 35000", "Contorno de ojos Skin Gold Hidratante - 28500"];

bienvenido();

function bienvenido() {
  console.log("Bienvenidas a Skin, para cuidar y amar tu piel");
  console.log("Nuestro catalogo de cremas, serums, contornos son los siguientes: ");

  mostrarCatalogo();

 const comprar = prompt("Desea comprar algun articulo de cuidado para tu piel? si/no");

  if(comprar==="si") {
    let skinproduNro = prompt("Que crema, serum o contorno desea comprar? Ingrese el numero de la lista mostrada");
    comprarSkin(skinproduNro);
  } else {
    mostrarMensaje("Que tengas un muy buen dia!");
    }
}


function mostrarCatalogo() {
    for(let i=0; i<productos.length; i++) {
      console.log("-------------------");
      console.log(i + " - " + productos[i]);
    }
}

function comprarSkin(producto) {
  for(let i=0; i<productos.length; i++) {
    if(producto == i) {
      let precio = productos[i].slice(-6);
      let valor = parseInt(precio);
      if(valor >= 60000 ) {
        precio = aplicarDescuento(valor);
        console.log("-------------------")
        alert("Genial, se te ha aplicado un descuento de $" + precio + " por tu compra, Gracias Te esperamos en la proxima compra!");
      } else {
        alert("Felicitaciones, ha comprado una excelente " + productos[i] + " que la disfrutes y cuides tu piel como se lo merece!");
      }
    }
  } 
}
function aplicarDescuento(precio) {
  precio = precio / 15;
  return precio;
}