let mascotas = [];
let dueños = [];
function mostrarMenu() {
  let opcion;

  do {
    opcion = prompt(
      "Seleccione la opción que desee:\n" +
      "1. Registrar un nuevo dueño\n"+
      "2. Registrar una nueva mascota\n" +
      "3. Listar todas las mascotas\n" +
      "4. Buscar una mascota por nombre\n" +
      "5. Actualizar el estado de salud de una mascota\n" +
      "6. Eliminar una mascota por nombre\n" +
      "7. Ver mascota de un dueño\n"+
      "8. Salir del programa\n" 
    
    );

    switch (opcion) {
        case "1":
        registrarDueño();
        break;
        case "2":
        registrarMascota();
        break;
      case "3":
        listarMascotas();
        break;
      case "4":
        buscarMascota();
        break;
      case "5":
        actualizarSalud();
        break;
      case "6":
        eliminarMascota();
        break;
        case "7":
        verMascota();
        break;
      case "8":
        console.log("¡Hasta luego!");
        break;
      default:
        console.log("Opción no válida. Intente de nuevo.");
    }
  } while (opcion !== "8");
}


function registrarDueño() {
    let nombre = prompt("Ingrese su nombre:");
    let cedula = prompt("Ingrese su número de cédula:");
    let telefono = prompt("Ingrese su número de teléfono:");
    let email = prompt("Ingrese su correo electrónico:");   
  
    dueños.push({ nombre, cedula, telefono, email });
    console.log("Has sido registrado con éxito.");
  }




function registrarMascota() {
  let nombre = prompt("Ingrese el nombre de su mascota:");
  let especie = prompt("Ingrese la especie de su mascota (perro, gato, etc.):");
  let edad = prompt("Ingrese la edad de su mascota:");
  let peso = prompt("Ingrese el peso de su mascota(en Kilogramos):");
  let salud = prompt("Ingrese el estado de salud de su mascota:");

  mascotas.push({ nombre, especie, edad, peso, salud });
  console.log("Mascota registrada con éxito.");
}

function listarMascotas() {
  if (mascotas.length === 0) {
    console.log("No hay mascotas registradas.");
    return;
  }

  let lista = "Mascotas registradas:\n";
  mascotas.forEach((m, i) => {
    lista += `${i + 1}. Nombre: ${m.nombre}, Especie: ${m.especie}, Edad: ${m.edad},Peso: ${m.peso}, Salud: ${m.salud}\n`;
  });

  console.log(lista);
}

function buscarMascota() {
  let nombreBuscar = prompt("Ingrese el nombre de la mascota a buscar:");
  let mascota = mascotas.find(m => m.nombre.toLowerCase() === nombreBuscar.toLowerCase());

  if (mascota) {
    console.log(`Mascota encontrada:\nNombre: ${mascota.nombre}\nEspecie: ${mascota.especie}\nEdad:${mascota.edad}\nPeso:${mascota.peso}\nSalud: ${mascota.salud}`);
  } else {
    console.log("Mascota no encontrada.");
  }
}

function actualizarSalud() {
  let nombreActualizar = prompt("Ingrese el nombre de la mascota a actualizar:");
  let mascota = mascotas.find(m => m.nombre.toLowerCase() === nombreActualizar.toLowerCase());

  if (mascota) {
    let nuevaSalud = prompt("Ingrese el nuevo estado de salud:");
    mascota.salud = nuevaSalud;
    console.log("Estado de salud actualizado con éxito.");
  } else {
    console.log("Mascota no encontrada.");
  }
}

function eliminarMascota() {
  let nombreEliminar = prompt("Ingrese el nombre de la mascota a eliminar:");
  let index = mascotas.findIndex(m => m.nombre.toLowerCase() === nombreEliminar.toLowerCase());

  if (index !== -1) {
    mascotas.splice(index, 1);
    console.log("Mascota eliminada con éxito.");
  } else {
    console.log("Mascota no encontrada.");
  }
}

function verMascota() {
    let cedulaVer = prompt("Ingrese su número de cédula para buscar su mascota:");
    let mascota = mascotas.find(m => m.cedula.toLowerCase() === cedulaVer.toLowerCase());
  
    if (mascota) {
      console.log(`Mascota encontrada:\nNombre: ${mascota.nombre}\nEspecie: ${mascota.especie}\nEdad:${mascota.edad}\nPeso:${mascota.peso}\nSalud: ${mascota.salud}`);
    } else {
      console.log("Mascota no encontrada.");
    }
  }

mostrarMenu();