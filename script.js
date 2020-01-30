$(document).ready(function() {

    var flama1 = document.getElementById("foc1");
    var flama2 = document.getElementById("foc2");
    var flama3 = document.getElementById("foc3");
    var flama4 = document.getElementById("foc4");
    var flama5 = document.getElementById("foc5");
    var spanFocs = document.getElementById("spanFocs");
    var clicat = false;
    var gris = "rgb(200, 200, 167)";

    function despintar(x){
        if(!clicat){
            var cont = 5;
            while(cont != x){
                document.getElementById("foc" + cont).style.color = gris;
                cont = cont-1;
            }
        }
    }

    function pintar (x){
        if(!clicat){
            var cont = 0;
            while(cont != x){
                cont = cont+1;
                document.getElementById("foc" + cont).style.color = "red";
            }
        }
    }

    window.addEventListener('click', e => {
        if(!spanFocs.contains(e.target)){
            clicat = false;
            despintar(0);
        }
    });

    flama1.addEventListener('click', e => {
        clicat = false;
        pintar(1);
        despintar(1);
        clicat = true;
    });

    flama2.addEventListener('click', e => {
        clicat = false;
        pintar(2);
        despintar(2);
        clicat = true;
    });
    
    flama3.addEventListener('click', e => {
        clicat = false;
        pintar(3);
        despintar(3);
        clicat = true;
    });
    
    flama4.addEventListener('click', e => {
        clicat = false;
        pintar(4);
        despintar(4);
        clicat = true;
    });
    
    flama5.addEventListener('click', e => {
        clicat = false;
        pintar(5);
        clicat = true;
    });

    flama1.addEventListener('mouseenter', e => {
        if(!clicat){
            pintar(1);
        }
    });

    flama2.addEventListener('mouseenter', e => {
        if(!clicat){
            pintar(2);
        }
    });

    flama3.addEventListener('mouseenter', e => {
        if(!clicat){
            pintar(3);
        }
    });

    flama4.addEventListener('mouseenter', e => {
        if(!clicat){
            pintar(4);
        }
        
    });

    flama5.addEventListener('mouseenter', e => {
        if(!clicat){
            pintar(5);
        }
    });

    flama1.addEventListener('mouseleave', e => {
        if(!clicat){
            flama1.style.color = gris;
        }
    });

    flama2.addEventListener('mouseleave', e => {
        if(!clicat){
            flama2.style.color = gris;
        }
    });

    flama3.addEventListener('mouseleave', e => {
        if(!clicat){
            flama3.style.color = gris;
        }
    });

    flama4.addEventListener('mouseleave', e => {
        if(!clicat){
            flama4.style.color = gris;
        }
    });

    flama5.addEventListener('mouseleave', e => {
        if(!clicat){
            flama5.style.color = gris;
        }
    });

    spanFocs.addEventListener('mouseleave', e => {
        if(!clicat){
            despintar(0);
        }
    });

});

