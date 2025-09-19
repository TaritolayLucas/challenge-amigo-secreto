// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
Fucionalidades:

Agregar nombres:
Los usuarios escribirán el nombre de un amigo en un campo de texto y 
lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada:
Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista:
Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio:
Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista 
y se mostrará en la página.

*/
let amigos = [];

function agregarAmigo(){
    //utilizo el getElementById que es un atributo del input, por eso agrego 'amigo' y el value para capturar el valor
    let name = document.getElementById('amigo').value;
    // al definir la expresion regular regex, obligo a que el valor ingresado sean solo letras mayusculas y minusculas 
    let regex = /^[a-zA-Z]+$/;

    // si hay un espacio en blanco , salta el alerta para que el usuario ingrese un nombre de vuelta
    if(name == ""){ 
        alert('Por favor, ingrese un nombre valido');
        //cada vez que le aviso al usuario que tiene que ingresar un nuevo nombre, tengo que limpiar la caja para el nuevo ingreso
        limpiarCaja();
        return;
    //si hay valores numericos o letras con acentos, le pide al usuario que ingrese un valor de vuelta.
    } else if (!regex.test(name)){ 
        alert('Por favor, ingrese un nombre valido');
        //cada vez que le aviso al usuario que tiene que ingresar un nuevo nombre, tengo que limpiar la caja para el nuevo ingreso
        limpiarCaja();
        return;
    }
    // Si llega a pasar las validaciones, utilizamos el metodo push para agregar los nombres a la lista.
    amigos.push(name);
    limpiarCaja();
    agregarAmigos(); // con esat funcion lo que hago es que se muestren por pantalla las lista de nombres de los participantes
    //console.log(amigos);
}

function limpiarCaja(){ // con el document.getElementById lo que hago es invocar a la caja donde se ingresan los nombres de los participantes y la seteo con el valor VACIO
    document.getElementById('amigo').value='';
}

function agregarAmigos(){//con esta funcion lo que hago primero es invocar a la lista ('listaAmigos')
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    // luego recorro el array para ir agregando a la lista cada nombre que el usuario va ingresando
    for(let i=0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){// para sortear primero verifico que el array tenga ingresado nombres para validarlo
    //lista.innerHTML = "";
    if (amigos.length===0) {
        alert("Por favor, ingrese un nombre valido para jugar!")
    }else {// luego invoco a la lista 'resultado' y la limpio
        let listaFinal = document.getElementById('resultado');
        listaFinal.innerHTML = '';
        // luego invoco a la lista anterior de los participantes ingresados y la seteo a vacio
        //para que cuando haya un ganador solo se muestre el cartel del ganador
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
        // genero un numero aleatorio con la funcion math floor y random
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        listaFinal.textContent = "El amigo secreto sorteado es: " + amigos[numeroAleatorio];
    }
}






