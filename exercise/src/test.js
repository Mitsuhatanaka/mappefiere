
// async function returnStand(){
//    var n_stand;
//    const res = await fetch('http://127.0.0.1:8000/allstand/q=n_stand=145')
//    n_stand= await res.json()
//    //console.log(n_stand[145]['name_stand'])
   
//    return n_stand
// }

async function changeInfo(selectedObject){
   var url = 'http://127.0.0.1:8000/allstand/q=n_stand='+selectedObject.name+'';
   var data;
   const res = await fetch(url)
   data= await res.json()
   
   var input = selectedObject.name

   var name_stand = data[input]['name_stand'];
   var number_stand = data[input]['n_stand'];
   var category_stand = data[input]['category'];
   var n_pav_stand = data[input]['n_pavilion']; 
   var descr_stand = data[input]['description'];
   var website_stand = data[input]['website'];

   document.getElementById("name").innerHTML =name_stand;
   document.getElementById("1").innerHTML ='Numero Stand';
   document.getElementById("1_a").innerHTML =number_stand;

   document.getElementById("2").innerHTML ='Categoria';
   document.getElementById("2_a").innerHTML =category_stand;

   document.getElementById("3").innerHTML ='Numero Padiglione';
   document.getElementById("3_a").innerHTML =n_pav_stand;

   document.getElementById("4").innerHTML ='Sito Web';
   document.getElementById("4_a").innerHTML = '<a href="'+website_stand+' " target="_blank">'+website_stand+'</a>';

   document.getElementById("5_a").innerHTML =descr_stand;
}