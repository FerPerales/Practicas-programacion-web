<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
	<script src="js/jquery-1.8.2.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/smoothScroll.js"></script>
	
	<title></title>
</head>
<body data-spy="scroll" data-target="#navbar">
	<?php
	include 'header.php';
	?>
	
	<div class="container-fluid">
		<div class="row">
			<?php
				include 'navbar.php';
			?>
		
			<div class="span9">
				<h2 id="concat" >Concatenación de cadenas</h2>
				<p>PHP tiene una operación especial que puede ser usada para "pegar" o más apropiadamente dicho, concatenar dos o más cadenas que es el operador '.' </p>	
		<pre>
			$cadenaHola = 'Hola';
			$cadenaMundo = ' mundo';
			$cadenaFinal = $cadenaHola . $cadenaMundo;
			echo "El resultado de la concatenacion es $cadenaFinal";</pre>
						
			<?php
				$cadenaHola = 'Hola';
				$cadenaMundo = ' mundo';
				$cadenaFinal = $cadenaHola . $cadenaMundo;
				echo "<code>El resultado de la concatenacion es $cadenaFinal </code>";
			?>
				<hr/>
				<p>También se puede usar el operador '.=' como si se tratara de +=</p>
			
		<pre>
			$cadenaHola = 'Hola';
			$cadenaHola .= ' mundo';
			echo "El resultado de la concatenacion con '.=' es $cadenaFinal;</pre>
			<?php
				$cadenaHola = 'Hola';
				$cadenaHola .= ' mundo';
				echo "<code>El resultado de la concatenacion con '.=' es $cadenaFinal</code>";	
			?>
				<hr/>
				
				
				<h2 id="bits">Operadores a nivel de bits</h2>			
				<p>Los operadores a nivel de bits permiten manipular la información a nivel binario. Estos operadoreas están diseñados para trabajar con enteros por lo que, estos operadores tratarán de convertir los operandos a enteros antes de ejecutarse.</p>
				
				<h3 id="not">Operador Not binario</h3>			
				<p>El operador más simple es el '~' o not binario invierte los valores individuales de un entero</p>
		<pre>
			$x = 0;
			echo "El numero $x negado es ";
			echo ~$x;</pre>
			<?php	
				$x = 0;
				echo "<code>El numero $x negado es "; 
				echo ~$x;
				echo "</code>";
			?>
				<hr/>
				<h3 id="binarios">Operadores binarios a nivel de bits</h3>
				
				<p>
					Existen otros operadores de manejo de bits que son:
				</p>
				<table class="table table-striped table-bordered">
					<tbody>
					<tr>
						<td> &amp; </td>
						<td> Operador AND </td>
						<td>El resultado de la operacion será el 1 si ambos bits son 1 o 0 en caso contrario</td>
					</tr>
					<tr>
						<td> | </td>
						<td> Operador OR </td>
						<td>El resultado de la operacion será 1 si alguno de los bits es 1 o 0 en caso contrario</td>
					</tr>
					<tr>
						<td> ^ </td>
						<td> Operador XOR </td>
						<td>El resultado de la operacion será 1 sí y sólo sí uno de los bits es 1</td>
					</tr>
					</tbody>
				</table>
				<hr/>
				<h3 id="corrimiento">Operadores de corrimiento</h3>
				<p>Existen operadores de corrimiento de bits como '&gt;&gt;' y '&lt;&lt;' que recorren los bits hacia la derecha o hacia la izquierda </p>
				
		<pre>
			$x = 1;
			$x = $x << 1;
			echo 'El valor de X ahora es '.$x;		
			$x = $x  << 1;
			echo 'El valor de X ahora es '.$x;
			$x = $x  << 1;
			echo 'El valor de X ahora es '.$x;
			$x = $x  << 1;
			echo 'El valor de X ahora es '.$x;
						
			$x = $x >> 1;
			echo 'El valor de X ahora es '.$x;		
			$x = $x  >> 1;
			echo 'El valor de X ahora es '.$x;
			$x = $x  >> 1;
			echo 'El valor de X ahora es '.$x;
			$x = $x  >> 1;
			echo 'El valor de X ahora es '.$x;</pre>
			<?php
				$x = 1;
				$x = $x << 1;
				echo "<code>El valor de X ahora es ".$x."</code><br/>";
				$x = $x  << 1;
				echo "<code>El valor de X ahora es ".$x."</code><br/>";
				$x = $x  << 1;
				echo "<code>El valor de X ahora es ".$x."</code><br/>";
				$x = $x  << 1;
				echo "<code>El valor de X ahora es ".$x."</code><br/><br/>";		
				$x = $x >> 1;
				echo "<code>El valor de X ahora es ".$x."</code><br/>";
				$x = $x  >> 1;
				echo "<code>El valor de X ahora es ".$x."</code><br/>";
				$x = $x  >> 1;
				echo "<code>El valor de X ahora es ".$x."</code><br/>";
				$x = $x  >> 1;
				echo "<code>El valor de X ahora es ".$x."</code><br/>";
			?>
				<hr/>
				
		</div><!-- end span9 -->
		</div><!-- end row-->
		<?php
			include 'footer.php';
		?>
	</div><!-- end container-fluid-->
</body>	
</html>