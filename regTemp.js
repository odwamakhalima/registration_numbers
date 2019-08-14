var addBtn2 = document.querySelector('.addBtn2')
var reBtn2 = document.querySelector('.reBtn2')
var regUpdate = document.querySelector('.regUpdate2')
var regFinal = document.querySelector('.regFinal2')
var myText2 = document.querySelector('.myText2')
var myReg = document.querySelector('.myReg2')
var storedregs2 = JSON.parse(localStorage.getItem('regsTemp'));
var dropDown2 = document.querySelector(".myReg2")
var regList2 = document.querySelector("#listitems2")
var theError2 = document.querySelector('.error2')

var userDataElem = document.querySelector("#regNumbers2");
var templateSource = document.querySelector(".userTemplate2").innerHTML;
var userTemplate = Handlebars.compile(templateSource);

var factoryReg2 = regFact(storedregs2)



function clearError() {
	setTimeout(function () {
		theError2.innerHTML = "";
	}, 2000);
}
addBtn2.addEventListener('click', function() {
  dropDown2.value = ''
  factoryReg2.input(myText2.value)
  localStorage.setItem('regs',JSON.stringify(factoryReg2.output()))
  var loc = Object.keys(factoryReg2.output())
  regList2.innerHTML = ''
  theError2.innerHTML = factoryReg2.error()
  clearError()
  for(var j = 0;j<loc.length;j++){
    add2(loc[j])
   
  }
})


function add2(reg2) {
  var li = document.createElement('li');
  var lol = document.createTextNode(reg2)
  li.appendChild(lol)
  var myLol = document.getElementById('listitems2').appendChild(li)
}

dropDown2.onchange = function(){
  var regDrop = dropDown2.value
  var regtown = Object.keys(factoryReg2.towns(regDrop));
  regList2.innerHTML = ""
  for (var i=0; i<regtown.length; i++){
    add2(regtown[i])
  }
}

window.onload = function(){
  var show = Object.keys(factoryReg2.output());
  regList2.innerHTML = ''
  for(var y = 0;y<show.length;y++){
    add2(show[y])
  }
}

reBtn2.addEventListener('click', function() {
  localStorage.clear()
  location.reload()
})