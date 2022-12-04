window.onscroll = function() {
    var y = window.scrollY;
    document.getElementById('y').innerText = y;

    if (y > 50) {
        if (window.matchMedia("(min-width: 380px)").matches) {
            document.getElementById("botoNav").className = "checkbtn ";
        } else {
            document.getElementById("botoNav").className = "checkbtn botonArriba";
        }
    } else {
        document.getElementById("botoNav").className = "checkbtn";
    }
};