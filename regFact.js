function regFact(storedReg){
    var regList = storedReg || {};
    var error = ''
    var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i

    function newObj(){
        var myKeys = Object.keys(regList)
    }

    function myError(){
        return error
    }

    function stored(regs){
        error = ''
        var reg2 = regs.toUpperCase().trim()
        var myTest = regex.test(reg2);
        if(reg2.length > 0 && reg2.length <= 10 && myTest == false){
            if(reg2.startsWith('CA ') || reg2.startsWith('CY ') || reg2.startsWith('CL ')){
              if (regList[reg2] === undefined){
                regList[reg2] = 0;
              }
              else{
                  error = 'Already Been Added'
              }
            }
            else{
                error = 'Registration Number Not From Given Locations'
            }
        }
        else{
            error = 'Not A Valid Registration Number'
        }
    }
    

    function theReg(first){
        var theRegs = Object.keys(regList)
        var myObj = {}
        for(var i = 0;i<theRegs.length;i++){
            if(theRegs[i].startsWith(first)){
                myObj[theRegs[i]] =0 ;
            }
        } //console.log (myObj)
        return (myObj)
        //console.log(myObj)
    }


    function show(){
        var str = regList
        return str
    }
    return {
        input: stored,
        error: myError,
        towns: theReg,
        obj: newObj,
        output: show,  
    }
}

