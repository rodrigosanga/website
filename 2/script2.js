let correctas = [1, 2, 3, 3, 1, 2, 3, 1, 3, 2];

let opcion_elegida = [];

let cantidades_correctas =0;

function respuesta(num_pregunta, seleccionada){
	opcion_elegida[num_pregunta] = seleccionada.value;
	id="p" + num_pregunta;

	labels = document.getElementById(id).childNodes;
	labels[3].style.backgroundColor = 'White';
	labels[5].style.backgroundColor = 'White';
	labels[7].style.backgroundColor = 'White';

	seleccionada.parentNode.style.backgroundColor ="#cec0fc";
}

function corregir(){
	cantidades_correctas = 0;
	for(i=0; i < correctas.length; i++){
		if (correctas[i]==opcion_elegida[i]) {
			cantidades_correctas++;
		}
	}
	document.getElementById("Resultado").innerHTML = cantidades_correctas;
}