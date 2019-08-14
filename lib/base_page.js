var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


    var Page = function(browser) {   
        
        console.log("BROWSER="+browser);
        
        if (browser == 'chrome'){
            this.driver = new webdriver.Builder().forBrowser('chrome').build();
        }
        if (browser == 'firefox'){
            this.driver = new webdriver.Builder().forBrowser('firefox').build();
        }
        
        var driver = this.driver;

        this.visit = function(url){
            return driver.get(url);
        }

        this.quit = function(){
            return driver.quit();  
        }

        this.find = function(el){
            driver.wait(until.elementLocated(By.css(el)), 100000);
            return driver.findElement(By.css(el));
                       
        }

        this.write = function(el,txt){
            return this.find(el).sendKeys(txt);
        }

        this.wait = function(time){
            return driver.sleep(time);
        }

        this.waitForOverlappingElement = function(el){
            var el1 = driver.wait(until.elementLocated(By.id(el)), 200000);
            return driver.wait(until.elementIsNotVisible(el1), 200000);
            
        }
        
    }

    module.exports = Page;
    
