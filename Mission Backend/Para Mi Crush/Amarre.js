/* Amarre JS */

function moverPosicionRandom(obj) {
    obj.style.position = 'absolute';    // Para que obj pueda moverse libremente por cualquier parte

    obj.style.top = Math.random() * (window.innerHeight - obj.offsetHeight) + 'px';
    // Se resta para que no se salga de la pantalla
    // window.innerHeight es el alto de la ventana del navegador
    // obj.offsetHeight es la altura del objeto incluyendo padding y border

    obj.style.left = Math.random() * (window.innerWidth - obj.offsetWidth) + 'px';
};

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSeczo = document.getElementsByClassName("modo_seczo")[0];  // Solo tenemos 1 elemento

btnNo.addEventListener('mouseenter', function(obj) {
    moverPosicionRandom(obj.target);  // e.target es el elemento que ha disparado el evento
});

btnSi.addEventListener('click', function(obj) {
    alert('Sabía que dirías que SÍ. Casemonos ya y tengamos hijos. TE AMO!!!! ❤️');

    divModoSeczo.style.display = 'block';
    const cancion = new Audio('img/img_modo_hot.mp3');
    cancion.play();
});
