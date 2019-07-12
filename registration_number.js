var addBtn = document.querySelector('.addBtn')
var allBtn = document.querySelector('.allBtn')
var cptBtn = document.querySelector('.cptBtn')
var blBtn = document.querySelector('.blBtn')
var plBtn = document.querySelector('.plBtn')
var resetBtn = document.querySelector('.resetBtn')

var regUpdate = document.querySelector('.regUpdate')
var regFinal = document.querySelector('.regFinal')
var list = document.querySelector('.list')
var regNames = ''
var storedReg = JSON.parse(localStorage.getItem('regNames'));
var allReg = storedReg || {};
var ol = Object.keys(allReg);
var reg = document.querySelector('.dropdown')

//var factoryreg = regFact();

function add(){
//factoryreg.add()
    regNames = regUpdate.value
    var node = document.createElement("LI");
    var textnode = document.createTextNode(regNames);
        if(typeof(Storage) !== "undefined") {
            if ((localStorage.ol)){
            }
            if(regNames.startsWith('CA') || regNames.startsWith('CL') || regNames.startsWith('CJ') && regNames.length > 0){
    localStorage.setItem('regNames',JSON.stringify(allReg))
    node.appendChild(textnode);
    
   }
}
}
function all(){
    if (allReg[regNames] === undefined){
        allReg[regNames] = 0;
    var node = document.createElement("div");
    var textnode = document.createTextNode(regNames);
            if(regNames.startsWith('CA') || regNames.startsWith('CL') || regNames.startsWith('CJ') && regNames.length > 0){
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
            }
}
}
function cpt(evt){

        if(evt.textContent == "Button1"){
            console.log(ol.filter(word => word.startsWith('CA')))
        }



    if (allReg[regNames] === undefined){
        allReg[regNames] = 0;
    var node = document.createElement("div");
    var textnode = document.createTextNode(regNames);


            if(regNames.startsWith('CA') && regNames.length > 0){
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
   
            }  
}
}

function bl(){
    if (allReg[regNames] === undefined){
        allReg[regNames] = 0;
    var node = document.createElement("div");
    var textnode = document.createTextNode(regNames);
            if(regNames.startsWith('CL') && regNames.length > 0){
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    
            }
}
}

function pl(){
    if (allReg[regNames] === undefined){
        allReg[regNames] = 0;
    var node = document.createElement("div");
    var textnode = document.createTextNode(regNames);


            if(regNames.startsWith('CJ') && regNames.length > 0){
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    
            }
}
}


function clearClick(){
    localStorage.clear();
    location.reload()
    document.getElementById ("myList").innerHTML
  }
  resetBtn.addEventListener('click', clearClick)

addBtn.addEventListener('click',add)
allBtn.addEventListener('click',all)
cptBtn.addEventListener('click',cpt)
blBtn.addEventListener('click',bl)
plBtn.addEventListener('click',pl)
resetBtn.addEventListener('click',clearClick)
