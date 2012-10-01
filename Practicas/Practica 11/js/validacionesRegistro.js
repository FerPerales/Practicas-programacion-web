window.onload = function(){
	
	document.getElementById("enviar").onclick = validar;
	
	function cambiarEstadoError(element, value){		
		document.getElementById(element).style.visibility=value;		
	}	
	
	function validar(){
		var form = document.registro;
		if(form.razonMiembro.checked == false &&
			form.razonGustaria.checked == false &&
			form.razonInvitacion.checked == false &&
			form.razonReferido.checked == false){		
				cambiarEstadoError("error_razones", "visible");			
		}else{
				cambiarEstadoError("error_razones", "hidden");		
		} 
		
		if(form.password.value.length == 0){
			cambiarEstadoError("error_password", "visible");			
		}else{
			cambiarEstadoError("error_password", "hidden");		
		} 
		
		if(form.nombre.value.length == 0){
			cambiarEstadoError("error_nombre", "visible");			
		}else{
			cambiarEstadoError("error_nombre", "hidden");		
		} 
		
		if(form.direccion.value.length == 0){
			cambiarEstadoError("error_direccion", "visible");			
		}else{
			cambiarEstadoError("error_direccion", "hidden");		
		} 
		
		if(form.telefono.value.length == 0){
			cambiarEstadoError("error_telefono", "visible");			
		}else{
			cambiarEstadoError("error_telefono", "hidden");		
		} 
		
		if(form.datepicker.value.length == 0){
			cambiarEstadoError("error_nacimiento", "visible");			
		}else{
			cambiarEstadoError("error_nacimiento", "hidden");		
		} 
	}
	
}
