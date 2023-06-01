
function hamburger(){
    // document.getElementById("model").classList.toggle("show");
    if (document.getElementById("mySidebar").style.display == "block"){
        document.getElementById("body").style.backgroundColor = "#f5f5f5"
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

async function resultForm(categoria,periodo,regione,citta){

    var url = 'http://127.0.0.1:8000/allfiere/q=type='+categoria+'/'+periodo+'/'+regione+'/'+citta+'';
    var data;
    const res = await fetch(url)
    data= await res.json()

    var result = []
    if(Object.keys(data).length === 0){
            result.push('No results')
    }else{
        for (let i = 0; i < Object.keys(data).length; i++) {
            result.push(data[i]['name_conference']);
        } 
    }
    return result
}

async function changeInfoConf(event){
    var input = event.target.innerText.replace(" ","%20")
    if (input.replace("%20"," ") != 'No results') {
        
        hamburger()
        
        var url = 'http://127.0.0.1:8000/allfiere/q=name_conference='+input+'';
        var data;
        const res = await fetch(url)
        data= await res.json()


        input = input.replace("%20"," ")

        var name_conference = data[input]['name_conference'];
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

var counter = 0;
function setCounter(){
    counter = 0
    let sideBarBtn = document.getElementById("resultBtn")
    sideBarBtn.innerHTML = ''
}

async function formPost(){
    let categoria = document.getElementById("categoria").value;
    let periodo = document.getElementById("periodo").value;
    let regione = document.getElementById("regione").value;
    let citta = document.getElementById("citta").value;
    let btn =document.createElement('button') 
    
    regione = regione.replace(" ","%20")
    periodo = periodo.replace(" ","%20")
    regione = regione.replace(" ","%20")
    citta = citta.replace(" ","%20")

    var result = await resultForm(categoria,periodo,regione,citta)
    .then((data)=>{return data})
    if (counter == 0) {

        for (let i = 0; i < result.length; i++) {
            btn.innerText = result[i]
            btn.addEventListener("click", (e)=>{
                changeInfoConf(e)
            })
            let mySidebar = document.getElementById("resultBtn")
            mySidebar.appendChild(btn)
        }
    }

    counter++
}

