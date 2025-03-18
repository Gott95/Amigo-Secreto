// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");

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
    document.getElementById("container-count").style.display = "block";
  }
  mostrarAmigos();
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
  } else {
    lista.display = "none";
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById(
      "resultado"
    ).innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    amigos = amigos.filter(amigo => amigo !== amigoSorteado);
    document.getElementById("count").innerHTML = amigos.length
    mostrarAmigos();
  }
  

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
  limpiarLista();
}
