<?php

	$cantidad = $_GET["cantidad"];
	$numero = $_GET["numero"];	
	echo "Enviaste {$cantidad}  y numero = {$numero}";
	
	for ($i=0; $i < $cantidad; $i++) {
		echo 	'<table border="1">
	    		<caption>Tabla del ',$i,'</caption>'; 
		for ($j=0; $j < $numero; $j++) {
			echo '<tr>
					<td>',$i, ' x ',$j,'</td>
					<td>',$i*$j,'</td'; 

				
		}
	}
	
	
?>

