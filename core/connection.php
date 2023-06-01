<?php 
function connect(){
    $host = "localhost";
    $user = "root";
    $password="";
    $database = "progetto_fiera";

    $connessione = new mysqli($host,$user,$password,$database);

    if($connessione === false){
        die("Errore di connesione:" . $connessione->connect_error);
    }else{
        return $connessione;
    }
}


?>