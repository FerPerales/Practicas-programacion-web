window.onload = function(){
	document.getElementById("enviar").onclick = validar;
	
	function cambiarEstadoError(element, value){		
		document.getElementById(element).style.visibility=value;			
	}	

	function validar (){
		
		var form = document.login;
		var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var regexNick = /([a-zA-Z]\w*){6,}/;
		var regexPass = /([a-zA-Z]\w*){8,}/;
		var esValido = true;
		
		//Validación de nombre de usuario
		if(!regexNick.test(form.nick.value)){	
			form.nick.focus();
			esValido = false;        			
			cambiarEstadoError("error_nick",'visible');
	    }else{
	        cambiarEstadoError("error_nick",'hidden');	        		
	    }		
			
		//Validación de email	
		if (!regexEmail.test(form.mail.value)){
		   	form.mail.focus();
		   	esValido = false;
			cambiarEstadoError("error_mail",'visible');
		}else{
			cambiarEstadoError("error_mail",'hidden');
		}
		
		
		//Validacion contraseña
		if (!regexPass.test(form.password.value)){		
		   	form.password.focus();	
		   	esValido = false;
			cambiarEstadoError("error_pass",'visible');
		}else{			
			cambiarEstadoError("error_pass",'hidden');
		}
			
		//Validar confirmacion
		if (form.password.value != form.confirmacion.value){			
			form.confirmacion.focus();
			esValido = false;		
			cambiarEstadoError("error_confirmacion",'visible');
		}else{			
			cambiarEstadoError("error_confirmacion",'hidden');
		}
			
		if(esValido){
			form.enviarFormulario.click();
		}else{
			//Nada
		}
			  
	}
}
