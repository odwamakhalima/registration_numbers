var addBtn = document.querySelector('.addBtn')
var reBtn = document.querySelector('.reBtn')
var regUpdate = document.querySelector('.regUpdate')
var regFinal = document.querySelector('.regFinal')
var list = document.querySelector('.list')
var myText = document.querySelector('.myText')
var myReg = document.querySelector('.myReg')
var storedRegs = JSON.parse(localStorage.getItem('regs'));
var dropDown = document.querySelector(".myReg")
var reglist = document.querySelector("#listitems")
var theError = document.querySelector('.error')

var factoryReg = regFact(storedRegs)

addBtn.addEventListener('click', function() {
  dropDown.value = ''
  factoryReg.input(myText.value)
  localStorage.setItem('regs',JSON.stringify(factoryReg.output()))
  var loc = Object.keys(factoryReg.output())
  reglist.innerHTML = ''
  theError.innerHTML = factoryReg.error()
  for(var j = 0;j<loc.length;j++){
    add(loc[j])
   
  }
})


function add(reg2) {
  var li = document.createElement('li');
  var lol = document.createTextNode(reg2)
  li.appendChild(lol)
  var myLol = document.getElementById('listitems').appendChild(li)

}

dropDown.onchange = function(){
  var regDrop = dropDown.value
  var regtown = Object.keys(factoryReg.towns(regDrop));
  reglist.innerHTML = ""
  for (var i=0; i<regtown.length; i++){
    add(regtown[i])
  }
}

window.onload = function(){
  var show = Object.keys(factoryReg.output());
  reglist.innerHTML = ''
  for(var y = 0;y<show.length;y++){
    add(show[y])
  }
}

reBtn.addEventListener('click', function() {
  localStorage.clear()
  location.reload()
})