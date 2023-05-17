<?php include 'rest/setvar.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Document</title>
</head>
<body>
<?php
    ////// FIERE //////
    $name_conference = set_var_fiere()[0];
    $regione = set_var_fiere()[1];
    $city = set_var_fiere()[2];
    $address = set_var_fiere()[3];
    $date = set_var_fiere()[4];
    $website = set_var_fiere()[5];

    ////// PAD //////
    $n_pavilion = set_var_pad()[0];
    $name_conference_pad = set_var_pad()[1];

    ////// STAND /////        
    $name_stand = set_var_stand()[0];
    $number_stand = set_var_stand()[1];
    $category_stand = set_var_stand()[2];
    $n_pav_stand = set_var_stand()[3];
    $descr_stand = set_var_stand()[4];
    $website_stand = set_var_stand()[5];
    ?>

<!-- Sidebar -->
<div class="w3-sidebar w3-bar-block" style="display:none" id="mySidebar">
  <button onclick="w3_close()" class="menu" style="text-align: center;"> &times;</button>
  
  <div class="raw">
    <br>
    <div class="col">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
      <path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"></path>
      </svg>
      <input id="search" type="text" placeholder="Search..." />
    </div>
    <br>
    <select id="categoria">
      <option disabled selected>CATEGORIA</option>
      <option value="Cibo">Cibo</option>
      <option value="Fumetti">Fumetti</option>
      <option value="Games">Games</option>
    </select>
    
    <select id="periodo">
      <option disabled selected>PERIODO</option>
      <option value="Gennaio">Gennaio</option>
      <option value="Febbraio">Febbraio</option>
      <option value="Marzo">Marzo</option>
    </select> 
    
    <select id="regione">
      <option disabled selected>REGIONE</option>
      <option value="Lazio">Lazio</option>
      <option value="Toscana">Toscana</option>
      <option value="Campania">Campania</option>
    </select>

    <select id="città">
      <option disabled selected>CITTA'</option>
      <option value="Bologna">Bologna</option>
      <option value="Lucca">Lucca</option>
      <option value="Roma">Roma</option>
    </select> 
  </div>
</div>

<!-- Page Content -->
  <button class="hamburger" onclick="w3_open()" >☰</button>

<aside>
  <section>
    <br>
    <div class="row" id=row>
      <article class="article2">
        <h3 id="name_fiera"><?php echo $name_conference ?></h3>
        <h4>Informazioni generali:</h4>
        <div class="row">
          <div class="col">
            <p>Città:</p>
            <p id="city"><?php echo $city ?></p>
            <p>Via:</p>
            <p id="address"><?php echo $address ?></p>
          </div>
          <div class="col">
            <p>Periodo:</p>
            <p id="date"><?php echo $date ?></p>
            <p>Sito:</p>
            <p id="website"><?php echo $website ?></p>
          </div>
        </div>  
      </article>
    </div>
    <br>
  </section>
</aside>     
</body>
</html> 

</body>
</html>