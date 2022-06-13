function time(){
    hoje = new Date();
    hora = hoje.getHours();
    min = hoje.getMinutes();
    sec = hoje.getSeconds();

    document.getElementById('resultado').innerHTML = hora+":"+min+":"+sec;
    setTimeout('time()',500);
}