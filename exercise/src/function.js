
function hamburger(){
    // document.getElementById("model").classList.toggle("show");
    if (document.getElementById("mySidebar").style.display == "block"){
        document.getElementById("body").style.backgroundColor = "#f5f5f5"
        console.log("into hamb")
        document.getElementById("mySidebar").style.display="none";
        document.getElementById("reset").style.display="inline";
        document.getElementById("footer").style.display="flex";
        document.getElementById("model").style.display="flex";
        
    }else{
        document.getElementById("mySidebar").style.display="block";
        document.getElementById("body").style.backgroundColor = "#4541f1"
        document.getElementById("reset").style.display="none";
        document.getElementById("footer").style.display="none";
        document.getElementById("model").style.display="none";
        console.log(document.getElementById("model").style.display);
    }

}
function hiddenFrame(){
    document.getElementById("model").style.display="none";
    // document.getElementById("reset").style.display="none";
}

function showHome(){
    document.getElementById("mySidebar").style.display="none";

    document.getElementById("side_info").style.display="block";

    document.getElementById("result").style.display="none";

    document.getElementById("footer").style.display="block";

    document.getElementById("model").style.display="block";
    console.log(document.getElementById("model").style.display+'');
}

function activeSearchBtn(){
    let categoria= document.getElementById("categoria").value;
    let periodo = document.getElementById("periodo").value;
    let regione = document.getElementById("regione").value;
    let citta= document.getElementById("citta").value;

    if (categoria && periodo && regione && citta !=''){
        document.getElementById("search").disab
    }
}

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function activeSearchBtn() {
    let categoria = document.getElementById("categoria").value;
    let periodo = document.getElementById("periodo").value;
    let regione = document.getElementById("regione").value;
    let citta = document.getElementById("citta").value;

    if (categoria && periodo && regione && citta != '') {
        document.getElementById("search").disabled = false;
    }
}

var counter = 0;
function setCounter(){
    counter = 0
    let sideBarBtn = document.getElementById("resultBtn")
    sideBarBtn.innerHTML = ''
}

/*1 - chiamata quando si prema cerca*/

async function formPost(){

    /* crea e prende gli elementi dell'html in cui mettere i dati */
    let categoria = document.getElementById("categoria").value;
    let periodo = document.getElementById("periodo").value;
    let regione = document.getElementById("regione").value;
    let citta = document.getElementById("citta").value;
    let btn =document.createElement('button') 
    btn.setAttribute("class", "animate__tada")
    let risultati = document.createElement('p')
    risultati.setAttribute("id", "hrRisultati")
    risultati.innerText = "Risultati"
    
    regione = regione.replace(" ","%20")
    periodo = periodo.replace(" ","%20")
    regione = regione.replace(" ","%20")
    citta = citta.replace(" ","%20")

    /* fai una query cercando i dati del form */
    var result = await resultForm(categoria,periodo,regione,citta)
    .then((data)=>{return data})
    
    /* data è un array di nomi di fiere */

    let mySidebar = document.getElementById("resultBtn")
    if (counter == 0) {
        mySidebar.appendChild(risultati)

        if(result[0] == "No results"){
            btn.innerText = result[0]
            mySidebar.appendChild(btn)
        } else {
                
            for (let i = 0; i < result.length; i++) {
                /* restituisce la città */
                let fieraData = await getFieraData(result[i])
                btn.innerHTML = result[i] + " - " + "<strong>" + fieraData + "</strong>"
                btn.addEventListener("click", (e)=>{
                    changeInfoConf(e)
                })
                mySidebar.appendChild(btn)
            }
        }

    }

    window.scrollTo(0, document.body.scrollHeight);

    counter++
}

/*2*/
async function resultForm(categoria,periodo,regione,citta){

    /* returna un json con i riusltati del form */
    var url = 'http://127.0.0.1:8000/allfiere/q=type='+categoria+'/'+periodo+'/'+regione+'/'+citta+'';
    var data;
    const res = await fetch(url)
    data= await res.json()

    var result = []

    /* se il json è vuoro append "no results", altrimenti looppa dentro al json e return array con i nomi */
    if(Object.keys(data).length === 0){
        result.push('No results')
    }else{
        for (let i = 0; i < Object.keys(data).length; i++) {
            result.push(data[i]['name_conference']);
        } 
    }

    /* return un array di nomi di fiere */
    return result
}

/*3*/
/* dato il nome di una fiera, returna la città */
async function getFieraData(input){
    input = input.replace(" ","%20")
    
    var url = 'http://127.0.0.1:8000/allfiere/q=name_conference='+input+'';
    var data;
    const res = await fetch(url)
    data= await res.json()


    input = input.replace("%20"," ")

    var name_conference = data[input]['name_conference'];
    var regione = data[input]['regione'];
    var city = data[input]['city'];
    var address = data[input]['address']; 
    var date = data[input]['date'];
    var website = data[input]['website'];

    return city
}

/*4*/
/*Modifica l'html sidebar*/
async function changeInfoConf(event){
    var input = event.target.innerText.replace(" ","%20")
    if (input.replace("%20", "") != "No results") {
  
        hamburger()
        document.getElementById("hamburger").style.display="inline";
        
        var url = 'http://127.0.0.1:8000/allfiere/q=name_conference='+input+'';
        var data;
        const res = await fetch(url)
        data= await res.json()
        
        
        input = input.replace("%20"," ")
        
        var name_conference = data[input]['name_conference'];
        var regione = data[input]['regione'];
        var city = data[input]['city'];
        var address = data[input]['address']; 
        var date = data[input]['date'];
        var website = data[input]['website'];
        
        document.getElementById("name").innerHTML =name_conference;
        document.getElementById("1").innerHTML ='Città';
        document.getElementById("1_a").innerHTML ='<strong>'+city+'</strong>';
 
        document.getElementById("2").innerHTML ='Indirizzo';
        document.getElementById("2_a").innerHTML ='<strong>'+address+'</strong>';
        
        document.getElementById("3").innerHTML ='Periodo';
        document.getElementById("3_a").innerHTML ='<strong>'+date+'</strong>';
        
        document.getElementById("4").innerHTML ='Sito Web';
        document.getElementById("4_a").innerHTML = '<a href="'+website+' " target="_blank">'+'<strong>'+website+'</strong>'+'</a>';
    }

}