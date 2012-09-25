window.onload = function(){
	document.getElementById("enviar").onclick = validar;	

	function validar () {
		
		var form = document.login;
		var isValid;
		var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(form.nick.value.length == 0){
			alert("Nombre de usuario vac&iacute;o");
			form.nick.focus();
			isValid = false
		}else if (!regexEmail.test(form.mail.value)){
			alert("Formato de correo no v&aacute;lido");
			form.mail.focus();
			isValid = false
		}else if (form.password.value.length == 0){
			alert("No puedes dejar el campo de contrase&ntilde;a vac&iacute;o");
			form.password.focus();	
			isValid = false
		}else if (form.password.value != form.confirmacion.value){
			alert("Las contrase&ntilde;as no coinciden");
			form.confirmacion.focus();
			isValid = false
		}else{
			isValid = true;
		}	  
		return isValid;
	}
}
