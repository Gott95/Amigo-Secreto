// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");
let modal = document.getElementById("myDialog");


function agregarAmigo() {
  let nombres = document.getElementById("amigo").value;

  if (nombres == "") {
    alert("Por favor, inserte un nombre.");
    return;
  } 
  if (amigos.includes(nombres)) {
    alert("El nombre ya existe");
    return;
  } else {
    amigos.push(nombres);
    document.getElementById(
      "resultado"
    ).innerHTML = "";
    document.getElementById("amigo").value = "";
    mostrarAmigos();
    document.getElementById("count").innerHTML = amigos.length;
    document.getElementById("container-count").style.visibility = "visible";
  }
}

function mostrarAmigos() {
  limpiarLista();
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
  console.log(amigos);
}

function mostrarLista() {  

  if (lista.style.display === "block") {
    lista.style.display = "none"; 
  } else {
    lista.style.display = "block"; 
  }
 
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }

  // Actualiza el valor de usuario dinámicamente
  let usuario = document.getElementById("usuario").value;

  // Verifica si el usuario está vacío
  if (!usuario) {
    alert("Por favor, ingresa un nombre antes de sortear.");
    return;
    

  }
  

  // Selecciona un amigo al azar
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  // Verifica que el amigo sorteado no sea el usuario
  if (amigoSorteado === usuario) {
    alert("No puedes ser tu propio amigo secreto. Intenta nuevamente.");
    return;
  }

  // Oculta la lista (si es necesario)
  lista.style.display = "none";

  // Muestra el resultado del sorteo
  document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;

  // Elimina el amigo sorteado de la lista
  amigos = amigos.filter(amigo => amigo !== amigoSorteado);

  // Actualiza el contador y la lista de amigos
  document.getElementById("count").innerHTML = amigos.length;
  mostrarAmigos();
}

function limpiarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
}

function reiniciar() {
  lista.style.display = "none";
  amigos = [];
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("count").innerHTML = "";
  document.getElementById("container-count").style.display = "none";
  document.getElementById("usuario").value = "";
  limpiarLista();
}

function usuario() {
  let usuario = document.getElementById("usuario").value;
  console.log(usuario);
  return usuario;
}




