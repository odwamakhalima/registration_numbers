var resetBtn = document.querySelector('.resetBtn')
var regUpdate = document.querySelector('.regUpdate')
var regFinal = document.querySelector('.regFinal')
var list = document.querySelector('.list')
var err = document.querySelector('.error')
var result = ''
var regList = {};
var myCiti = [];
var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_''"\[.*?\]|<>]/gi

//var factoryReg = regFact()

function add() {
  var ul = document.getElementById('listitems');
  var li = document.createElement('li');
  var regs = document.getElementById('item').value;
  var regs2 = regs.toUpperCase();
  var storedReg = JSON.parse(localStorage.getItem(regs2));
  document.getElementById('item').value = "";
  var myTest = regex.test(regs2);

  if(regs2.length > 0 && myTest == false){
    if(regs2.startsWith('CA') || regs2.startsWith('CY') || regs2.startsWith('CL')){
      if (regList[regs2] === undefined){
        regList[regs2] = 0;
      li.appendChild(document.createTextNode(regs2));
      ul.appendChild(li);
     myCiti.push(regs2);
     console.log(myCiti)
      }
 
     var newCape = myCiti.filter(function(regs2){
      if(regs2.startsWith('CA')){
        return true
      }
      localStorage.setItem('regs2',JSON.stringify(myCiti))
     })
     var newBell = myCiti.filter(function(regs2){
      if(regs2.startsWith('CY')){
        return true
      }
      localStorage.setItem('regs2',JSON.stringify(myCiti))
     }) 
     var newStell = myCiti.filter(function(regs2){
      if(regs2.startsWith('CL')){
        return true
      }
      localStorage.setItem('regs2',JSON.stringify(myCiti))
     })
     document.getElementById("cape").innerHTML = newCape;
     document.getElementById("bell").innerHTML = newBell;
     document.getElementById("Stell").innerHTML = newStell;
     }
     else{
      result = 'Enter a correct registration'
      err.innerHTML = result 
    }
    }
    else{
      result = 'Enter a correct registration' 
      err.innerHTML = result
    }
  console.log(localStorage)
}

