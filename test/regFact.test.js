describe('regFact',function(){

    it('it should return an error message',function(){
        var factoryReg = regFact()
        
        factoryReg.input('CA 87')
        factoryReg.input('CL 123')
        assert.deepEqual(factoryReg.output(), { 'CA 87': 0, 'CL 123': 0 });
    })

})