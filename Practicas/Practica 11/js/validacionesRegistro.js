window.onload = function(){
	
	document.getElementById("enviar").onclick = validar;
	
	function validar(){
		var form = document.registro;
		if(form.razonMiembro.checked == false &&
			form.razonGustaria.checked == false &&
			form.razonInvitacion.checked == false &&
			form.razonReferido.checked == false){		
				alert("Debes seleccionar al menos una opción para inscribirte");				
		}else if(form.password.value.length == 0){
			alert("No puedes dejar el campo de contraseña vacío");
		}else if(form.nombre.value.length == 0){
			alert("No puedes dejar el campo de nombre vacío");
			
		}else if(form.direccion.value.length == 0){
			alert("No puedes dejar el campo de dirección vacío");
		}else if(form.telefono.value.length == 0){
			alert("No puedes dejar el campo de teléfono vacío");			
		}else if(form.datepicker.value.length == 0){
			alert("No puedes dejar el campo de fecha vacío");
		}else{
			form.submit();
		}
	}
	
}
