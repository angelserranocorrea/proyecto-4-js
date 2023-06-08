
    // const nombre = document.querySelector("#nombre");
    const nombreVisitante = document.querySelector("#nombre");
    const apellidos = document.querySelector("#apellidos");
    const movil = document.querySelector("#movil");
    const correo = document.querySelector("#correo");
    const fecha_llegada = document.querySelector("#fecha_llegada");
    const fecha_salida = document.querySelector("#fecha_salida");
    const visitantes = document.querySelector("#visitantes");

    const elementosFormulario = document.querySelectorAll('INPUT');

    
    // console.log(nombre);
    // console.log(apellidos);
    // console.log(movil);
    // console.log(correo);
    // console.log(fecha_llegada);
    // console.log(fecha_salida);
    // console.log(visitantes);

   //console.log (elementosFormulario);

    let datos = {
        nombre: " ",
        apellidos: " ",
        movil: 0,
        correo: " ",
        fecha_llegada: " ",
        fecha_salida: " ",
        visitantes: 0

    }


    

     nombreVisitante.addEventListener('input', leerTexto);
     apellidos.addEventListener('input', leerTexto);
     movil.addEventListener('input', leerTexto);
     correo.addEventListener("input", leerTexto);
     fecha_llegada.addEventListener("input", leerTexto);
     fecha_salida.addEventListener("input", leerTexto);
     visitantes.addEventListener("input", leerTexto);
     

    

    formulario.addEventListener('submit', function(e)
    {

        let formulario = document.querySelector("#formulario");
        e.preventDefault();
        const {nombre, apellidos, movil, correo, fecha_llegada, fecha_salida, visitantes} = datos;
        
        if (nombre =='' || apellidos ==''|| movil== 0 || correo == '' || fecha_llegada =='' || fecha_salida == '' || visitantes== 0)       {
            mostrarError("Todos los campos son obligatorios");
            return;
        }
        sendData();

        mostrarEnviado ("Enviado Correctamente");
        formulario.reset();
        datos.nombre="";
        datos.apellidos="";
        datos.movil="";
        datos.correo="";
        datos.fecha_llegada="";
        datos.fecha_salida="";
        datos.visitantes="";

    }
    )
    function sendData(){
        let tabla=document.querySelector("#main-table");
        let newRow=tabla.insertRow(1);
        let newCellName=newRow.insertCell(0);
        let newcellAp=newRow.insertCell(1);
        let newCellPhon=newRow.insertCell(2);
        let newCellMail=newRow.insertCell(3);
        let newCellDateIn=newRow.insertCell(4);
        let newCellDateOut=newRow.insertCell(5);
        let newCellVisitor=newRow.insertCell(6);
        let newCellBoton=newRow.insertCell(7);




        // let nombre=document.createElement("p");
        // let tuNombre=datos.nombre;
        // let tuNombre = document.createTextNode(datos.nombre.toString);
        // nombre.textContent = tuNombre;
        // nombre.appendChild(nombrePrueba);
        // newCellName.appendChild(nombre);
        
        let nombre = datos.nombre;
        let nombreNodo =document.createTextNode(nombre);
        newCellName.appendChild(nombreNodo);

        let apellidosAp=datos.apellidos;
        let apellidosNodo = document.createTextNode(apellidosAp);
        newcellAp.appendChild(apellidosNodo);

        let movilphon=datos.movil;
        let movilNodo=document.createTextNode(movilphon);
        newCellPhon.appendChild(movilNodo);

        let email=datos.correo;
        let correoNodo=document.createTextNode(email);
        newCellMail.appendChild(correoNodo);

        let dateIn=datos.fecha_llegada; 
        let fecha_llegadaNodo=document.createTextNode(dateIn);
        newCellDateIn.appendChild(fecha_llegadaNodo);

        let dateOut=datos.fecha_salida;
        let fecha_salidaNodo=document.createTextNode(dateOut);
        newCellDateOut.appendChild(fecha_salidaNodo);

        let visitors=datos.visitantes;
        let visitantesNodo=document.createTextNode(visitors);
        newCellVisitor.appendChild(visitantesNodo);     
        
        let botonBorrar=document.createElement("button")
        botonBorrar.textContent="X"
        newCellBoton.appendChild(botonBorrar);
        botonBorrar.addEventListener("click",erase);

        let editar=document.createElement("botonEditar");
        editar.textContent="editar"
        newCellBoton.appendChild(editar);
        editar.addEventListener("click",edit)

        function erase(){
            botonBorrar.closest("tr").remove();
            }

        function edit(){

            
            //PLAN DE TRABAJO:

            //OBTENER LA FILA A EDITAR
            let filaSeleccionada = botonBorrar.closest("tr");

            //OBTENER LOS DATOS A EDITAR EN UNA VARIABL
            let celdasLista = filaSeleccionada.querySelectorAll("td");

            let nombreCelda = celdasLista[0].innerText;
            //y así para cada campo

            nombreVisitante.value = nombreCelda;
            //y así para cada campo
            
            let apellidosCelda=celdasLista[1].innerText;
            apellidos.value = apellidosCelda;

            let movilCelda = celdasLista[2].innerText;
            movil.value = movilCelda;
            
            let correoCelda=celdasLista[3].innerText;
            correo.value = correoCelda;

            let fecha_llegadaCelda=celdasLista[4].innerText;
            fecha_llegada.value=fecha_llegadaCelda;

            let fecha_salidaCelda=celdasLista[5].innerText;
            fecha_salida.value = fecha_salidaCelda;

            let visitantesCelda = celdasLista[6].innerText;
            visitantes.value = visitantesCelda;

            filaSeleccionada.remove();

            //no hace falta partir de document.
            //podés partir de cualquier elemento HTML
            //getElementById()
            //getElementByClassName()
            //getElementByTagName()
            //querySelector()
            //querySelectorAll()

            //PASAR ESOS DATOS AL FORMULARIO, AL VALOR DE LOS INPUTS

            //BORRAR ESE REGISTRO

            //RESUMEN FUNCIONAL: EL USUARIO PUEDE CORREGIR REGISTROS SIN TENER QUE RE INGRESAR TODOS LOS CAMPOS
        }    

        
        
        







        // Supongamos que tienes una constante llamada 'datos' que contiene los datos del formulario
// const nombre = datos.nombre;

// Obtén una referencia al elemento de la tabla donde deseas agregar el contenido del nombre
// const newCellName = document.getElementById('id-de-tu-elemento-de-tabla');

// Crea un nodo de texto con el contenido del nombre
// const nodoDeTexto = document.createTextNode(nombre);

// Agrega el nodo de texto al elemento de la tabla
// newCellName.appendChild(nodoDeTexto);

        

    }
   function leerTexto (e)
   {

        datos[e.target.id] = e.target.value;
        console.log (datos);

   }

   function mostrarError (mensaje)
   {
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add("error");
        formulario.appendChild (error);
        console.log (error);

   }

   function mostrarEnviado (mensaje)
   {

        const correcto = document.createElement('P');
        correcto.textContent = mensaje;
        correcto.classList.add("correcto");
        formulario.appendChild (correcto);
        console.log (correcto);

   }     
        
        
        







      

        

   