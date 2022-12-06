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
};

