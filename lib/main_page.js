var Page = require('./base_page');


//clickPlayBtn needs async function to handle overlapping element
Page.prototype.clickPlayBtn = async function(){
    await this.waitForOverlappingElement('loadingOverlay');
    await this.find('#tt-header-button-1020').click();
    
    await this.wait(5000);
    //check if the stop button in enabled
    var elm = await this.find('#tt-header-button-1016');
    return elm.getAttribute('aria-disabled').then(function (text) {
        return text;
    }); 
};

Page.prototype.clickLogoutBtn = function(){
    return this.find('#tt-header-button-1025-btnIconEl').click();
}

module.exports = Page; 
            
       
 

 

