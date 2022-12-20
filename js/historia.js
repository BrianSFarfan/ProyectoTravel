function mostoFias() {
    document.getElementById('af').style.display = 'block';
    document.getElementById('bf').style.display = 'none';
    document.getElementById('ds').style.display = 'none';
    document.getElementById('al').style.display = 'none';
}

function mostoBri() {
    document.getElementById('bf').style.display = 'block';
    document.getElementById('af').style.display = 'none';
    document.getElementById('ds').style.display = 'none';
    document.getElementById('al').style.display = 'none';
}

function mostoSol() {
    document.getElementById('ds').style.display = 'block';
    document.getElementById('af').style.display = 'none';
    document.getElementById('bf').style.display = 'none';
    document.getElementById('al').style.display = 'none';
}

function mostoAle() {
    document.getElementById('al').style.display = 'block';
    document.getElementById('af').style.display = 'none';
    document.getElementById('bf').style.display = 'none';
    document.getElementById('ds').style.display = 'none';
}


/*----------------activacion de botones-----------------------*/



function activarButtFias() {
    /*FIASCHE*/
    document.getElementById('imgFias').style.boxShadow = '0px 0px 10px var(--btnPort)';
    document.getElementById('imgFias').style.opacity = '1';
    document.getElementById('imgFias').style.backgroundColor = 'var(--btnPort)';
    /*BRIAN*/
    document.getElementById('imgBri').style.opacity = '0.4';
    document.getElementById('imgBri').style.boxShadow = 'none';
    document.getElementById('imgBri').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
    /*SOLER*/
    document.getElementById('imgSol').style.opacity = '0.4';
    document.getElementById('imgSol').style.boxShadow = 'none';
    document.getElementById('imgSol').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
    /*ALEJANDRO*/
    document.getElementById('imgAle').style.opacity = '0.4';
    document.getElementById('imgAle').style.boxShadow = 'none';
    document.getElementById('imgAle').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
}


function activarButtBri() {
    /*BRIAN*/
    document.getElementById('imgBri').style.boxShadow = '0px 0px 10px var(--btnPort)';
    document.getElementById('imgBri').style.opacity = '1';
    document.getElementById('imgBri').style.backgroundColor = 'var(--btnPort)';
    /*SOLER*/
    document.getElementById('imgSol').style.opacity = '0.4';
    document.getElementById('imgSol').style.boxShadow = 'none';
    document.getElementById('imgSol').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
    /*FIASCHE*/
    document.getElementById('imgFias').style.opacity = '0.4';
    document.getElementById('imgFias').style.boxShadow = 'none';
    document.getElementById('imgFias').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
    /*ALEJANDRO*/
    document.getElementById('imgAle').style.opacity = '0.4';
    document.getElementById('imgAle').style.boxShadow = 'none';
    document.getElementById('imgAle').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
}


function activarButtSol() {
    /*SOLER*/
    document.getElementById('imgSol').style.boxShadow = '0px 0px 10px var(--btnPort)';
    document.getElementById('imgSol').style.opacity = '1';
    document.getElementById('imgSol').style.backgroundColor = 'var(--btnPort)';
    /*BRIAN*/
    document.getElementById('imgBri').style.opacity = '0.4';
    document.getElementById('imgBri').style.boxShadow = 'none';
    document.getElementById('imgBri').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
    /*FIASCHE*/
    document.getElementById('imgFias').style.opacity = '0.4';
    document.getElementById('imgFias').style.boxShadow = 'none';
    document.getElementById('imgFias').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
    /*ALEJANDRO*/
    document.getElementById('imgAle').style.opacity = '0.4';
    document.getElementById('imgAle').style.boxShadow = 'none';
    document.getElementById('imgAle').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
}

function activarButtAle() {
    /*ALEJANDRO*/
    document.getElementById('imgAle').style.boxShadow = '0px 0px 10px var(--btnPort)';
    document.getElementById('imgAle').style.opacity = '1';
    document.getElementById('imgAle').style.backgroundColor = 'var(--btnPort)';
    /*BRIAN*/
    document.getElementById('imgBri').style.opacity = '0.4';
    document.getElementById('imgBri').style.boxShadow = 'none';
    document.getElementById('imgBri').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
    /*FIASCHE*/
    document.getElementById('imgFias').style.opacity = '0.4';
    document.getElementById('imgFias').style.boxShadow = 'none';
    document.getElementById('imgFias').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
    /*SOLER*/
    document.getElementById('imgSol').style.opacity = '0.4';
    document.getElementById('imgSol').style.boxShadow = 'none';
    document.getElementById('imgSol').style.backgroundColor = 'rgba(34, 34, 34, 0.973)';
}


/*-----------------ANIACIONES-----------------------*/