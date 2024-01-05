
// Crear un "diccionario" utilizando un objeto
const platos = [
  { indice: 0, nombre: "Plato paceño", precio: 10 },
  { indice: 1, nombre: "Silpancho", precio: 8 },
  { indice: 2, nombre: "Majadito", precio: 8 },
  { indice: 3, nombre: "Escabeche de torcaza", precio: 20 },
  { indice: 4, nombre: "Keperi", precio: 10 },
  { indice: 5, nombre: "Charquekan", precio: 10 },
  { indice: 6, nombre: "Aji de Pataskha", precio: 10 },
  { indice: 7, nombre: "Fritanga", precio: 15 },
  { indice: 8, nombre: "Saice", precio: 12 }
];

// tabla nuevaaaaaaaaaaaaa

const tablaGuardada = [];

function agregarPlatoGuardado(nombre, cantidad, precio ) {
  const platoExistente = tablaGuardada.find(plato => plato.nombre === nombre);
  if (platoExistente) {
    platoExistente.cantidad += cantidad;
    platoExistente.precio += precio;
    
  } else {
    tablaGuardada.push({ nombre, cantidad, precio});
  }
}

function devolverPlatoGuardado(nombre, cantidad, precio ) {
  const platoExistente = tablaGuardada.find(plato => plato.nombre === nombre);
  if (platoExistente) {
    if (platoExistente.cantidad > 0)
    {
    platoExistente.cantidad -=  cantidad;
    platoExistente.precio -= precio;

    }
    else
    {
      alert("Alto alli caiman")
    }
    
  } 
}


const slider_content = document.querySelectorAll('.slider_content')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let index = 0;
let compras=0;
let valor=0;
let totalPagar=0;
const platoEncontrado=0;
let cantidad =0;
//const mount = () => slider_content[index].classList.add('active')
function LPZ (dato)
{
  unmount();
  index = dato;
  mount();
}
function CBBA (dato)
{
  unmount();
  index = dato;
  mount();
  
}
function SCZ (dato)
{
  unmount();
  index = dato;
  mount();
}
function ORU (dato)
{
  unmount();
  index = dato;
  mount();
}
function PSI (dato)
{
  unmount();
  index = dato;
  mount();
}
function TJA (dato)
{
  unmount();
  index = dato;
  mount();
}
function BNI (dato)
{
  unmount();
  index = dato;
  mount();
}
function PND (dato)
{
  unmount();
  index = dato;
  mount();
}
function CHQ (dato)
{
  unmount();
  index = dato;
  mount();
}


function mount() {
    slider_content[index].classList.add('active');  
    document.getElementById("precio").value = 0;

  }

function unmount()
{
    slider_content[index].classList.remove('active'); 
    document.getElementById("precio").value = 0;
}

  next.addEventListener('click', function() { 
    unmount();
  

    if (index >= slider_content.length - 1) {
      index = 0;
    } else {
      index++;
    }
    //document.getElementById("precio").value = platos.find(plato => plato.indice === index).precio;
    
    
    mount();
  });
  
  prev.addEventListener('click', function() {
    unmount();
    //document.getElementById("precio").value = platos.find(plato => plato.indice === index).precio;
    if (index <= 0) {
      index = slider_content.length-1;
      
    } else {
      
      index--;
    }
    mount();

  });
  

mount()
function comprar_plato() {
    //valor = platos.find(plato => plato.indice === index).indice;
     
   // document.getElementById("Total_pagar").value = valor; 
   cantidad=1;
    const platoEncontrado = platos.find(plato => plato.indice === index);

    if (platoEncontrado) {
          const nombrePlato = platoEncontrado.nombre;
          const precioPlato = platoEncontrado.precio;
          
          // Agregar el plato a la tabla guardada
      agregarPlatoGuardado(nombrePlato,cantidad, precioPlato);
         
      // Mostrar la suma en el input
       totalPagar=tablaGuardada.reduce((total, plato) => total + plato.precio, 0);
       document.getElementById("Total_pagar").value = totalPagar;
       document.getElementById("precio").value = tablaGuardada.find(plato => plato.nombre === nombrePlato).cantidad;
        }
  
       
        console.log(tablaGuardada);

  
}

function devolver_plato() {
 
      try {
        const platoEncontrado = platos.find(plato => plato.indice === index);
        const nombrePlato = platoEncontrado.nombre;
        const precioPlato = platoEncontrado.precio;
        cantidad=1;
        const platoExistente = tablaGuardada.find(plato => plato.nombre === nombrePlato); 

        if (platoExistente.cantidad > 0)
        {
        platoExistente.cantidad -=  cantidad;
        platoExistente.precio -= precioPlato;
        }
        else
        {
          alert("Alto!!!")
        }
      
      totalPagar=tablaGuardada.reduce((total, plato) => total + plato.precio, 0);
      document.getElementById("Total_pagar").value = totalPagar;
      document.getElementById("precio").value = tablaGuardada.find(plato => plato.nombre === nombrePlato).cantidad;
  

        
      } catch  {
        // Manejo de la excepción
        alert("Ha ocurrido un error:");
      }
      console.log(tablaGuardada);

}

/*
window.onload = function() {
    // Asignar el valor de la variable al campo de entrada
    document.getElementById("precio").value = slider_content.length-1;
}
*/
function existePersona(idBuscado) {
  return personas.find(persona => persona.id === idBuscado) !== undefined;
}

function abrirVentanaEmergente() {
  
  const tablaJSON = JSON.stringify(tablaGuardada);
  const ventanaEmergente = window.open('datos.php', '_blank', 'width=400,height=400');

  ventanaEmergente.onload = function() {
    ventanaEmergente.mostrarTabla(tablaJSON,totalPagar);
  };
}