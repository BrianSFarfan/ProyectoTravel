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


    function irArriba() {
        window.addEventListener('scroll', () => {
            var scroll = document.documentElement.scrollTop;

            var botonArriba = document.getElementById('botonArriba')

            if (scroll > 300) {
                botonArriba.style.right = 20 + 'px';
            } else {
                botonArriba.style.right = -100 + 'px';
            }
        })
    }
    irArriba();

    if (y > 200) {
        document.getElementById("NavCompleto").className = "navFixedDark";
    } else {
        document.getElementById("NavCompleto").className = "";
    }
};