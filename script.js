
//function para seleccionar
function seleccionar(link){
    var opciones= document.querySelectorAll('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    link.className="seleccionado";

    // hacemos desaparecer el menu una vez que seleccione una opcion
    var x=document.getElementById("nav");
    x.className=""

}


//muestra menu responsive
function responsiveMenu(){
    var x=document.getElementById("nav");
    if (x.className===""){
        x.className="responsive";
    }else{
        x.className=""
    }
}


// detecto el scrolling para aplicar la animació 
