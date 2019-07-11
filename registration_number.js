
var addBtn = document.querySelector('.addBtn')
var showBtn = document.querySelector('.showBtn')
var regUpdate = document.querySelector('.regUpdate')
var regFinal = document.querySelector('.regFinal')
var regNames = ''
var storedReg = JSON.parse(localStorage.getItem('regNames'));
var allReg = storedReg || {};


var factoryreg = regFact();

function add(){
factoryreg.add()
    regNames = regUpdate.value
    var node = document.createElement("LI");
    var textnode = document.createTextNode(regNames);


        if(typeof(Storage) !== "undefined") {
            if(regNames.startsWith('CA') || regNames.startsWith('CL') || regNames.startsWith('CJ')){
    localStorage.setItem('regNames',JSON.stringify(allReg))
    node.appendChild(textnode);


     }
      
   }
}


function show(){
    if (allReg[regNames] === undefined){
        allReg[regNames] = 0;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(regNames);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
}
showBtn.addEventListener('click',show)
addBtn.addEventListener('click',add)