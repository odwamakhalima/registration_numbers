var resetBtn = document.querySelector('.resetBtn')
var regUpdate = document.querySelector('.regUpdate')
var regFinal = document.querySelector('.regFinal')
var list = document.querySelector('.list')
var storedReg = JSON.parse(localStorage.getItem('regs2'));
var regList = {};
var myCiti = [];
var regex = /[!@#$%^&*();,.?"^$:^+=${'}`''"\[.*?\]|<>]/gi

//var factoryReg = regFact()

function add() {
  var ul = document.getElementById('listitems');
  var li = document.createElement('li');
  var regs = document.getElementById('item').value;
  var regs2 = regs.toUpperCase();
  document.getElementById('item').value = "";
  var myTest = regex.test(regs2);

  if(regs2.length > 0 && myTest == false){
      if (regList[regs2] === undefined){
        regList[regs2] = 0;
      li.appendChild(document.createTextNode(regs2));
      ul.appendChild(li);
     myCiti.push(regs2);
     var newCape = myCiti.filter(function(regs2){
      if(regs2.startsWith('CA')){
        return true
      }
     })
     var newBell = myCiti.filter(function(regs2){
      if(regs2.startsWith('CY')){
        return true
      }
     }) 
     var newStell = myCiti.filter(function(regs2){
      if(regs2.startsWith('CL')){
        return true
      }
     }) 
     document.getElementById("cape").innerHTML = newCape;
     document.getElementById("bell").innerHTML = newBell;
     document.getElementById("Stell").innerHTML = newStell;
     }
    }
}

