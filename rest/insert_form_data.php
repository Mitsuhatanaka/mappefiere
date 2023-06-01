<?php     


$conn = mysqli_connect("localhost","root","","form");


$categoria=$_POST['categoria'];
$periodo=$_POST['periodo'];
$regione=$_POST['regione'];
$citta=$_POST['citta'];

$query = "INSERT INTO 
        ajax_form(categoria,periodo,regione,citta) 
        VALUES 
        ('$categoria',
        '$periodo',
        '$regione'
        ,$citta)";

$result = mysqli_query($conn,$query);

?>