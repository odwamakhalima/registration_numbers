describe('regFact',function(){
    it('it should ignore the special characters and numbers',function(){
        var factoryreg = regFact()
        assert.deepEqual(factoryreg.adds('CA 1238'), ['CA 1238']);
    })
    it('it should ignore the special characters and numbers',function(){
        var factoryreg = regFact()
        assert.deepEqual(factoryreg.adds('CL 1238'), ['CL 1238']);
    })
    it('it should ignore the special characters and numbers',function(){
        var factoryreg = regFact()
        assert.deepEqual(factoryreg.adds('CY 1238'), ['CY 1238']);
    })
    
})