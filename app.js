// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let nombres = document.getElementById("amigo").value;

  if (nombres == "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  // Si el nombre ya existe en el array, mostrar un mensaje de alerta si no, agregarlo al array y mostrar la lista de amigos.
  if (amigos.includes(nombres)) {
    alert("El nombre ya existe");
    return;
  } else {
    amigos.push(nombres);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
  }
}

function mostrarAmigos() {
  limpiarLista();
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
  console.log(amigos);
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  } else {
    limpiarLista();
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById(
      "resultado"
    ).innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    console.log(amigoSorteado);
  }
}

function limpiarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
}
