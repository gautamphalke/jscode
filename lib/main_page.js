var Page = require('./base_page');

//click time-tracker needs async function to handle overlapping element
Page.prototype.clickPlayBtn = async function(){
    await this.waitForOverlappingElement('loadingOverlay');
    await this.find('#tt-header-button-1020-btnWrap').click();
    //var e = this.find('#ext-comp-1015-inputEl').getText()=='No timestamp running...'
    //console.log('*-'+ e +'-*')
    if(await this.find('#ext-comp-1015-inputEl').getText()=='No timestamp running...'){
        return 1;
    }else{
        return 0;
    }
 }

Page.prototype.clickLogoutBtn = function(){
    return this.find('#tt-header-button-1025-btnIconEl').click();
}

module.exports = Page;
