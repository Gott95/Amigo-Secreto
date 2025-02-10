// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo () {
     let nombres = document.getElementById('amigo').value;

     if (nombres == '') {
        alert('Inserte algun nombre')


     } else {

        amigos.push(nombres);

        document.getElementById('amigo').value = '';

        document.getElementById('listaAmigos').innerHTML = 'amigos';

        console.log(amigos);
     }

}
