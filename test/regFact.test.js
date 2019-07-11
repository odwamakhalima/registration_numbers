describe('regFact',function(){
    it('it should ignore the special characters and numbers',function(){
        var factoryreg = regFact()
        factoryreg.add('CA 1238')   
        assert.deepEqual(factoryreg.result(), 'CA 1238');
    })
})