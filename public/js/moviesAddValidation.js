window.addEventListener("load", function(){
    let titulo = document.querySelector("#titulo");
    let formulario = document.querySelector('form');
    
    formulario.addEventListener('submit', function(evento) {

    

    
    let nombre = document.querySelector("#titulo")
    let calificacion = document.querySelector('#calificacion')
    let premios = document.querySelector("#premios")
    let duracion = document.querySelector("#duracion")
    let fecha = document.querySelector("#fecha-de-creacion")

    let genero = document.querySelector("#genero")


    let errores = []
    if(nombre.value == ""){
        nombre.classList.add("is-invalid")
        errores.push("El titulo está vacio")
    } else {
        nombre.classList.add("is-valid")
    }
    if(calificacion.value == ""){
        calificacion.classList.add("is-invalid")
        errores.push("la calificación está vacía")
        
    } else {
        calificacion.classList.add("is-valid")
    }
    if(calificacion.value < 0 || calificacion.value > 10 || calificacion.value == ""){
        calificacion.classList.add("is-invalid")
        errores.push("la calificación tiene que ser un numero entre 0 y 10")
    } else {
        calificacion.classList.add("is-valid")
    }
    if(fecha.value == ""){
        fecha.classList.add("is-invalid")
        errores.push("La fecha está vacia")
    } else {
        fecha.classList.add("is-valid")
    }
    if(premios.value == ""){
        premios.classList.add("is-invalid")
        errores.push("los premios estan vacios")
    } else {
        premios.classList.add("is-valid")
    }

    if(premios.value < 0 || premios.value > 10 || premios.value == "" ){
        premios.classList.add("is-invalid")
        errores.push("los premios tienen que ser un numero entre 0 y 10")
    } else {
        premios.classList.add("is-valid")
    }

    
    if(duracion.value == ""){
        duracion.classList.add("is-invalid")
        errores.push("La duracion está vacia")
    } 
    if(duracion.value < 60 || duracion.value > 360){
        duracion.classList.add("is-invalid")
        errores.push("La duracion tiene que ser entre 60 y 360 minutos")
    } else {
        duracion.classList.add("is-valid")
    }
    if(genero.value == ""){
        genero.classList.add("is-invalid")
        errores.push("El genero está vacio")
    } else {
        genero.classList.add("is-valid")
    }



    if(errores.length > 0) {
        evento.preventDefault();
        let ulErrores = document.querySelector("div.is-invalid ul");
        ulErrores.innerHTML = "";
        for (let i = 0; i < errores.length; i++) {
            
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
            
        }
    }

    alert("La película se guardó satisfactoriamente")
    

    
    })
    });

    