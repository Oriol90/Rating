$(document).ready(function() {

    var spanFocs = document.getElementById("spanFocs");
    var flames = document.getElementsByClassName("foc");
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

    for(i=0; i<flames.length; i++){

        flames[i].addEventListener('click', e => {
            clicat = false;
            e = e || window.event;
            var target = e.target || e.srcElement,
            x = target.id.charAt(3);
            pintar(x);
            despintar(x);
            clicat = true;
        });

        flames[i].addEventListener('mouseenter', e => {
            if(!clicat){
                e = e || window.event;
                var target = e.target || e.srcElement,
                x = target.id.charAt(3);
                pintar(x);
            }
        });

        flames[i].addEventListener('mouseleave', e => {
            if(!clicat){
                e = e || window.event;
                var target = e.target || e.srcElement
                target.style.color = gris;
            }
        });
    }

    spanFocs.addEventListener('mouseleave', e => {
        if(!clicat){
            despintar(0);
        }
    });

});

