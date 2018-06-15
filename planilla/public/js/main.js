
$(document).ready(function(){

	$.ajax({
		method: "GET",
	    url: "http://localhost:3000/paises",
	    dataType: "json",
	}).done(function(data) {
	    data.paises.forEach(function(e) {
	        let option = `<option value="${e.nombre}">${e.nombre}</option>`
	        $("#idComboBox").append(option);
	    });
	});

});


var infoVotantes = {};
var Votantes = [];
var datos = localStorage.getItem('Votantes');

document.getElementById('enviar').addEventListener("click", resultados);

function cargarTodo(){
	resultados();
	cargarResultados();

}

function resultados(){

 	//var paises = $("#pais").val();
	//console.log(paises);
    var lenguajes = $("input:checked[name='lenguaje']").val();
    console.log(lenguajes);
    var sistOp = $("input:checked[name='SO']").val();
    console.log(sistOp);
    var editores = $("input:checked[name='editor']").val();
    console.log(editores);
    var navegadores = $("input:checked[name='navegador']").val();
    console.log(navegadores);

    //guardamos la info

    infoVotantes = {lenguaje: lenguajes, sistema: sistOp, editor: editores, navegador: navegadores}
	console.log(infoVotantes);

	if (datos==null) {
		Votantes = [];
	}else{
		Votantes = JSON.parse(datos).Votantes;
	}
	console.log(datos);
	Votantes.push(infoVotantes);

	let guardando = {'Votantes': Votantes, 'total': Votantes.length}
	console.log(guardando);

	let info = JSON.stringify(guardando);

	localStorage.setItem('Votantes', info);

	console.log(Votantes);

	cargarResultados();

}

function cargarResultados(){
	$(function(){
		for (var i = 0; i < Votantes.length; i++) {
			//let votosEntrantes = `<li> ${Votantes[i].lenguaje} ${Votantes[i].sistema} ${Votantes[i].editor} ${Votantes[i].navegador} </li>`
			let votosEntrantes = `<tr>
									<td>${Votantes[i].lenguaje}</td>
									<td>${Votantes[i].sistema}</td>
									<td>${Votantes[i].editor}</td>
									<td>${Votantes[i].navegador}</td>
								</tr>`
			$("#resultados").append(votosEntrantes);
		}
	});

}
