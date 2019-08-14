var Page = require('../lib/index');
var assert = require ('assert');
var page;


describe('TimeTac Test', function(){
    
    jest.setTimeout(150000);

    beforeEach(function(){
        page = new Page.homepage('chrome');
        page.visit('https://go.timetac.com');
    });

    afterEach(function(){
        page.quit();
    });
    
    it('Should start-timer', async function(){
        
        page.inputAccount('myinc2');
        page.inputUsername('manager');
        page.inputPassword('jmtjdu');
        page.clickLoginBtn();
        var a = await page.clickPlayBtn();
        expect(a).toBe('false');
    });

});