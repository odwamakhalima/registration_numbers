describe('regFact',function(){

    it('it should all the reg numbers',function(){
        var factoryReg = regFact()
        
        factoryReg.input('CA 87')
        factoryReg.input('CL 123')
        assert.deepEqual(factoryReg.output(), { 'CA 87': 0, 'CL 123': 0 });
    })

    it('it should all the reg numbers and make change lower cases to upper cases',function(){
        var factoryReg = regFact()
        
        factoryReg.input('cy 87')
        factoryReg.input('cl 123')
        assert.deepEqual(factoryReg.output(), { 'CY 87': 0, 'CL 123': 0 });
    })

    it('it should return an error message if there are special characters or empty string ',function(){
        var factoryReg = regFact()
        
        factoryReg.input('')
        factoryReg.input('123*&$bv')
        assert.deepEqual(factoryReg.error(), 'Not A Valid Registration Number');
    })
    it('it should return an error message if the input doesnt start with CA,CY or CL ',function(){
        var factoryReg = regFact()
        
        factoryReg.input('CP 874')
        factoryReg.input('CK 123')
        assert.deepEqual(factoryReg.error(), 'Registration Number Not From Given Locations');
    })
    it('it should return an object for each town ',function(){
        var factoryReg = regFact()
        
        factoryReg.input('CA 874')
        factoryReg.input('CL 874')
        factoryReg.input('CY 874')
        assert.deepEqual(factoryReg.towns('CA'), { 'CA 874': 0 });
        assert.deepEqual(factoryReg.towns('CL'), { 'CL 874': 0 });
        assert.deepEqual(factoryReg.towns('CY'), { 'CY 874': 0 });
    })
    it('it should return an object for all the towns if didnt specify which town i want ',function(){
        var factoryReg = regFact()
        
        factoryReg.input('CA 874')
        factoryReg.input('CL 874')
        factoryReg.input('CY 874')
        assert.deepEqual(factoryReg.towns(''), { 'CA 874': 0, 'CL 874':0,'CY 874':0 });

    })
    
})