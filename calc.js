describe('Demo Calculator test', function() {
    it ('Should Open URL and wait 2 ms'), function(){
    browser.sleep(2000);
    browser.get('http://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys('2');
    browser.sleep(2000);
    }
 });