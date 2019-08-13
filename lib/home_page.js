var Page = require('./base_page');

Page.prototype.inputAccount = function(account){
    this.write('#account',account);
}

Page.prototype.inputUsername = function(username){
    this.write('#userName',username);
}

Page.prototype.inputPassword = function(password){
    this.write('#userPass',password);
}

Page.prototype.clickLoginBtn = function(){
    return this.find('#login > table > tbody > tr:nth-child(4) > td > input.LoginSubmitForm').click();
    
}

module.exports = Page;