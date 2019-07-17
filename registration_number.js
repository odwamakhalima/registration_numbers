var resetBtn = document.querySelector('.resetBtn')
var regUpdate = document.querySelector('.regUpdate')
var regFinal = document.querySelector('.regFinal')
var list = document.querySelector('.list')
var storedReg = JSON.parse(localStorage.getItem('regs2'));
var capeTown = [];
var bellville = [];
var Stellenbosch = [];
var all = [];
var regList = {};


function regCapeTown (){
  document.getElementById("cape").innerHTML = capeTown;
}
function regBellville(){
  document.getElementById("bell").innerHTML = bellville;
}
function regStellenbosch(){
  document.getElementById("Stell").innerHTML = Stellenbosch;
}

  


function add() {
  var ul = document.getElementById('listitems');
  var li = document.createElement('div');
  var regs = document.getElementById('item').value;
  var regs2 = regs.toUpperCase();
  document.getElementById('item').value = "";

    if (regs2.startsWith("CA")){
      if (regList[regs2] === undefined){
        regList[regs2] = 0;
      li.appendChild(document.createTextNode(regs2));
      ul.appendChild(li);
      capeTown.push(regs2);
      localStorage.setItem('regs2',JSON.stringify(regList))
      }
}
    else if (regs2.startsWith("CY")){
      if (regList[regs2] === undefined){
        regList[regs2] = 0;
      li.appendChild(document.createTextNode(regs2));
      ul.appendChild(li);
      bellville.push(regs2);
      localStorage.setItem('regs2',JSON.stringify(regList))
      return;
      }
}
    else if (regs2.startsWith("CL")){
      if (regList[regs2] === undefined){
        regList[regs2] = 0;
      li.appendChild(document.createTextNode(regs2));
      ul.appendChild(li);
      Stellenbosch.push(regs2);
      localStorage.setItem('regs2',JSON.stringify(regList))
      return;
}
    }
else{
    alert('Enter a correct registration from given towns!!')
}

}

