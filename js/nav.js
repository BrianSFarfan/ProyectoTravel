window.onscroll = function() {
    var y = window.scrollY;
    if (y > 50) {
        if (window.matchMedia("(min-width: 380px)").matches) {
            document.getElementById("botoNav").className = "checkbtn ";
        } else {
            document.getElementById("botoNav").className = "checkbtn botonArriba";
        }
    } else {
        document.getElementById("botoNav").className = "checkbtn";
    }

    if (y > 200) {
        document.getElementById("NavCompleto").className = "navFixedDark";
        document.getElementById("botonArriba").className = "btnHaciaArriba";
    } else {
        document.getElementById("NavCompleto").className = "";
        document.getElementById("botonArriba").className = "btnHaciaArriba btnA-Desactivado";
    }
};