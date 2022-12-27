/* function mostrarSobreMi(){
    document.getElementByClassName("aboutMe").style.display="block";
    document.getElementByClassName("encabezado").style.display="none";
    mostrarSobreMi()
    } */
    document.getElementById("yo").addEventListener("click", (e) => {
        document.getElementById("encabezado").style.display="none";
        document.getElementById("sobreMi").style.display="block";
    });
    document.getElementById("proyectos").addEventListener("click", (e) => {
        document.getElementById("sobreMi").style.display="none";
        document.getElementById("encabezado").style.display="none";
        document.getElementById("detalle").style.display="block";
    });
    document.getElementById("contactame").addEventListener("click", (e) => {
        e.preventDefault()
        document.getElementById("encabezado").style.display="none";
        document.getElementById("sobreMi").style.display="none";
        document.getElementById("detalle").style.display="none";
        document.getElementById("contacto").style.display="block";
    });