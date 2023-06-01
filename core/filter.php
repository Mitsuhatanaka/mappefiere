<?php 
    require 'connection.php'; 
    function filter(){

    $categoria=$_POST['categoria'];
    $periodo=$_POST['periodo'];
    $regione=$_POST['regione'];
    $citta=$_POST['citta'];
    
    $connessione=connect();

    $sql = "SELECT name_conference 
            FROM `fiere` 
            WHERE type=\"$categoria\"
            AND date=\"$periodo\"  
            AND  regione =\"$regione\" 
            AND city=\"$citta\";";

    $result=$connessione->query($sql);
    if ($result->num_rows > 0) {
        $connessione->close();
        return $result;
    } else {
        $connessione->close();
        return "0 results";
    }
}
    // while($row = $result->fetch_assoc()) {
    //     echo $row['name_conference'];
    //    }
?>