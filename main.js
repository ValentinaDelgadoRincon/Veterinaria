let mascotas = [];
let dueños = [];
function mostrarMenu() {
  let opcion = prompt(
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
        registrarDueño(mostrarMenu);
        break;
        case "2":
        registrarMascota(mostrarMenu);
        break;
      case "3":
        listarMascotas(mostrarMenu);
        
        break;
      case "4":
        buscarMascota(mostrarMenu);
        
        break;
      case "5":
        actualizarSalud();
        mostrarMenu();
        break;
      case "6":
        eliminarMascota();
        mostrarMenu();
        break;
        case "7":
        verMascota();
        mostrarMenu();
        break;
      case "8":
        console.log("¡Hasta luego!");
        break;
      default:
        console.log("Opción no válida. Intente de nuevo.");
        mostrarMenu();
    }
  } 



function registrarDueño(callback = () => {}) {

    let nombre = prompt("Ingrese su nombre:");
    let cedula = prompt("Ingrese su número de cédula:");
    let telefono = prompt("Ingrese su número de teléfono:");
    let email = prompt("Ingrese su correo electrónico:");   
  
    setTimeout(function () {
    dueños.push({ nombre, cedula, telefono, email });
    console.log("Has sido registrado correctamente.");
    callback();
    },1500);
}



function registrarMascota(callback = () => {}) {
  let cedulaDueño = prompt("Ingrese la cédula del dueño:");
  let dueñoEncontrado = dueños.find(d => d.cedula === cedulaDueño);

  if (!dueñoEncontrado) {
    console.log("No se encontró un dueño con esa cédula.");
    return;
  }

  let nombre = prompt("Ingrese el nombre de su mascota:");
  let especie = prompt("Ingrese la especie de su mascota (perro, gato, etc.):");
  let edad = prompt("Ingrese la edad de su mascota:");
  let peso = prompt("Ingrese el peso de su mascota (en kilogramos):");
  let salud = prompt("Ingrese el estado de salud de su mascota:");

  setTimeout(function () {
  mascotas.push({ nombre, especie, edad, peso, salud, cedula: cedulaDueño });
  console.log("Mascota registrada con éxito.");
  callback();
  }, 2000);
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
  return new Promise (function (resolve, reject){
    setTimeout (function () { 
      let nombreBuscar = prompt("Ingrese el nombre de la mascota a buscar:");
      resolve (nombreBuscar);
    }, 1500)
  });
}
 
  let mascota = mascotas.find(m => m.nombre.toLowerCase() === nombreBuscar.toLowerCase());

  
  if (mascota) {
    console.log(`Mascota encontrada:\nNombre: ${mascota.nombre}\nEspecie: ${mascota.especie}\nEdad:${mascota.edad}\nPeso:${mascota.peso}\nSalud: ${mascota.salud}`);
  } else {
    console.log("Mascota no encontrada.");
  }






  const esperarEstado = () => {
    console.log('entrando a esperarEstado');
    
    return new Promise((resolve, reject) => {
      console.log('esperando 2 segundos para actualizar el estado de salud');
      setTimeout(() => {

        let nuevaSalud = prompt("Ingrese el nuevo estado de salud:");
        console.log('Estado de salud actualizado a:', nuevaSalud);
        resolve(nuevaSalud);
      }, 2000);
    })
  }


 
function esperarEstado() {
  return new Promise(resolve => {
    setTimeout(() => {
      
      resolve("Saludable");
    }, 1000); 
  });
}

async function actualizarSalud() { 
  let nombreActualizar = prompt("Ingrese el nombre de la mascota a actualizar:");
  let mascota = mascotas.find(m => m.nombre.toLowerCase() === nombreActualizar.toLowerCase());
  console.log(mascota);
  console.log('ejecutando actualizarSalud');

  if (mascota != null) {
    console.log(`Estado actual de salud: ${mascota.salud}`);
    
    const nuevaSalud = await esperarEstado(); 
    mascota.salud = nuevaSalud;
    console.log("Estado de salud actualizado con éxito.");
  } else {
    console.log("Mascota no encontrada.");
  }
}






function eliminarMascota() {
  return new Promise((resolve, reject) => {
    let nombreEliminar = prompt("Ingrese el nombre de la mascota a eliminar:");
    let index = mascotas.findIndex(m => m.nombre.toLowerCase() === nombreEliminar.toLowerCase());

    setTimeout(() => {
      if (index !== -1) {
        mascotas.splice(index, 1);
        resolve("Mascota eliminada con éxito.");
      } else {
        reject("Mascota no encontrada.");
      }
    }, 2000);
  });
}

eliminarMascota()
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error));


  function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function verMascota() {
    let cedulaVer = prompt("Ingrese su número de cédula para buscar su mascota:");
    await esperar(2000);
  
    let mascotasDueño = mascotas.filter(m => m.cedula === cedulaVer);
  
    if (mascotasDueño.length > 0) {
      console.log(`Mascotas registradas para la cédula ${cedulaVer}:`);
      mascotasDueño.forEach((m, i) => {
        console.log(
          `${i + 1}. Nombre: ${m.nombre}, Especie: ${m.especie}, Edad: ${m.edad}, Peso: ${m.peso}, Salud: ${m.salud}`
        );
      });
    } else {
      console.log("No se encontraron mascotas para esa cédula.");
    }
  }
  


mostrarMenu();