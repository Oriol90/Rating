$(document).ready(function() {

    var flama1 = document.getElementById("foc1");
    var flama2 = document.getElementById("foc2");
    var flama3 = document.getElementById("foc3");
    var flama4 = document.getElementById("foc4");
    var flama5 = document.getElementById("foc5");
    var rate = document.getElementById("rate");
    var spanFocs = document.getElementById("spanFocs");
    var clicat = false;
    var container = document.getElementById("container");
    var gris = "rgb(200, 200, 167)";

    function despintar(){
        if(!clicat){
            flama4.style.color = gris;
            flama5.style.color = gris;
            flama3.style.color = gris;
            flama2.style.color = gris;
            flama1.style.color = gris;
        }
    }

    flama1.addEventListener('click', e => {
        flama1.style.color = "red";
        flama2.style.color = gris;
        flama3.style.color = gris;
        flama4.style.color = gris;
        flama5.style.color = gris;
        clicat = true;
    });

    flama2.addEventListener('click', e => {
        flama1.style.color = "red";
        flama2.style.color = "red";
        flama3.style.color = gris;
        flama4.style.color = gris;
        flama5.style.color = gris;
        clicat = true;
    });
    
    flama3.addEventListener('click', e => {
        flama1.style.color = "red";
        flama2.style.color = "red";
        flama3.style.color = "red";
        flama4.style.color = gris;
        flama5.style.color = gris;
        clicat = true;
    });
    
    flama4.addEventListener('click', e => {
        flama1.style.color = "red";
        flama2.style.color = "red";
        flama3.style.color = "red";
        flama4.style.color = "red";
        flama5.style.color = gris;
        clicat = true;
    });
    
    flama5.addEventListener('click', e => {
        flama1.style.color = "red";
        flama2.style.color = "red";
        flama3.style.color = "red";
        flama4.style.color = "red";
        flama5.style.color = "red";
        clicat = true;
    });

    flama1.addEventListener('mouseenter', e => {
        if(!clicat){
            flama1.style.color = "red";
        }
    });

    flama2.addEventListener('mouseenter', e => {
        if(!clicat){
            flama1.style.color = "red";
            flama2.style.color = "red";
        }
    });

    flama3.addEventListener('mouseenter', e => {
        if(!clicat){
            flama1.style.color = "red";
            flama2.style.color = "red";
            flama3.style.color = "red";
        }
    });

    flama4.addEventListener('mouseenter', e => {
        if(!clicat){
            flama1.style.color = "red";
            flama2.style.color = "red";
            flama3.style.color = "red";
            flama4.style.color = "red";
        }
        
    });

    flama5.addEventListener('mouseenter', e => {
        if(!clicat){
            flama1.style.color = "red";
            flama2.style.color = "red";
            flama3.style.color = "red";
            flama4.style.color = "red";
            flama5.style.color = "red";
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
            despintar();
        }
    });

});

