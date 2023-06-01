<?php 
// require 'C:\xampp\htdocs\mappefiere\core\filter.php';
// $result=filter();
function set_var_stand(){
        $input = '145';
        $input = str_replace(" ","%20",$input);
        $url = "http://127.0.0.1:8000/allstand/q=n_stand='$input'";
        $json = file_get_contents($url);
        $data = json_decode($json, true);

        $name = $data[$input]['name_stand'];
        $number = $data[$input]['n_stand'];
        $category = $data[$input]['category'];
        $description = $data[$input]['description'];
        $n_pav = $data[$input]['n_pavilion'];    
        $website = $data[$input]['website'];
        return [$name,$number,$category,$n_pav,$description,$website];
}

function set_var_fiere(){
        $input = "Nerd Show";
        // $GLOBALS['result']->fetch_assoc()['name_conference'];
        $input = str_replace(" ","%20",$input);
        $url = "http://127.0.0.1:8000/allfiere/q=name_conference='$input'";
        $json = file_get_contents($url);
        $data = json_decode($json, true);
        $input = 'Nerd Show';

        $name_conference = $data[$input]['name_conference'];
        $regione = $data[$input]['regione'];
        $city = $data[$input]['city'];
        $address = $data[$input]['address'];
        $date = $data[$input]['date'];
        $website = $data[$input]['website'];
        return [$name_conference,$regione,$city,$address,$date,$website];
}

function set_var_pad(){
        $input = '21';
        $input = str_replace(" ","%20",$input);
        $url = "http://127.0.0.1:8000/allpavilion/q=n_pavilion='$input'";
        $json = file_get_contents($url);
        $data = json_decode($json, true);

        $n_pavilion = $data[$input]['n_pavilion'];
        $name_conference = $data[$input]['name_conference'];
        return[$n_pavilion,$name_conference];
}

?>