timedown("September 20, 2023 17:00:25",'demo');
timedown("September 4, 2023 17:00:25",'demo1');
timedown("August 20, 2021 17:00:25",'demo2');
timedown("May 20, 2022 17:00:25",'demo3');
timedown("May 20, 2022 17:00:25",'demo4');
timedown("May 20, 2023 17:00:25",'demo5');
function timedown(ti,id){

var countDownDate = new Date(ti).getTime();


var processo = setInterval(function() {

    
    var now = new Date().getTime();
    
    
    var distancia = countDownDate - now;
    
    
    var days = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distancia % (1000 * 60)) / 1000);
    
    
    document.getElementById(id).innerHTML = (days!=0 ? days + "d ⠀" : '') + (hours!= 0 ? hours + "h ⠀" : '')
    + (minutes != 0 ? minutes + "m ⠀" : '') + seconds + "s ⠀";
    
    
    if (distancia < 0) {
        clearInterval(processo);
        document.getElementById("demo").innerHTML = "Terminado";
        document.getElementById("demo1").innerHTML = "Terminado";
        document.getElementById("demo2").innerHTML = "Terminado";
        document.getElementById("demo3").innerHTML = "Terminado";
        document.getElementById("demo4").innerHTML = "Terminado";
        document.getElementById("demo5").innerHTML = "Terminado";
    }

}, 1000);
}