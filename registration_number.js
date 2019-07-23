var resetBtn = document.querySelector('.resetBtn')
var regUpdate = document.querySelector('.regUpdate')
var regFinal = document.querySelector('.regFinal')
var list = document.querySelector('.list')
var storedReg = JSON.parse(localStorage.getItem('regs2'));
var regList = {};
var myCiti = [];

//var factoryReg = regFact()



function add() {
  var ul = document.getElementById('listitems');
  var li = document.createElement('li');
  var regs = document.getElementById('item').value;
  var regs2 = regs.toUpperCase();
  document.getElementById('item').value = "";

//factoryReg.adds()
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
//     else if (regs2.startsWith("CY")){
//       if (regList[regs2] === undefined){
//         regList[regs2] = 0;
//       li.appendChild(document.createTextNode(regs2));
//       ul.appendChild(li);
//       bellville.push(regs2);
//       localStorage.setItem('regs2',JSON.stringify(bellville))
//       return;
//       }
// }
//     else if (regs2.startsWith("CL")){
//       if (regList[regs2] === undefined){
//         regList[regs2] = 0;
//       li.appendChild(document.createTextNode(regs2));
//       ul.appendChild(li);
//       Stellenbosch.push(regs2);
//       localStorage.setItem('regs2',JSON.stringify(Stellenbosch))
//       console.log(localStorage)
//       return;
// }
//     }
// else{
//     alert('Enter a correct registration from given towns!!')
// }

}

