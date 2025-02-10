// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let nombres = document.getElementById("amigo").value;

  if (nombres == "") {
    alert("Inserte algun nombre");
    return;
  }
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
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  } else {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById(  "resultado"   ).innerHTML = `El amigo sorteado es ${amigoSorteado}`;
  }
}
