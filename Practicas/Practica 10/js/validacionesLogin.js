window.onload = function(){
	document.getElementById("enviar").onclick = validar;	

	function validar () {
		
		var form = document.login;
		var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		if(form.nick.value.length == 0){
			alert("Nombre de usuario vacío");
			form.nick.focus();
		}else if (!regexEmail.test(form.mail.value)){
			alert("Formato de correo no válido");
			form.mail.focus();
		}else if (form.password.value.length == 0){
			alert("No puedes dejar el campo de contraseña vacío");
			form.password.focus();	
		}else if (form.password.value != form.confirmacion.value){
			alert("Las contraseñas no coinciden");
			form.confirmacion.focus();
		}else{
			form.submit();
		}	  
	}
}
