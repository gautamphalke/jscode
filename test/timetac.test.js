var Page = require('../lib/index');
var assert = require ('assert');
var page;


describe('TimeTac Test', function(){
    
    jest.setTimeout(100000);

    beforeEach(function(){
        page = new Page.homepage();
        page.visit('https://go.timetac.com');
    });

    afterEach(function(){
        page.quit();
    });
    
    it('test start-timer', async function(){
        
        page.inputAccount('myinc');
        page.inputUsername('manager');
        page.inputPassword('ipemah');
        page.clickLoginBtn();
                   
        var a = await page.clickPlayBtn();
        await page.clickLogoutBtn();
        //console.log('*-'+ a +'-*');
        //if(a==0){
            //assert(a,'Timer failed to start');
        //}
        expect(a).toBe(1);
        return;

    });

});