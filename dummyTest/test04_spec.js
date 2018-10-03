describe('testing the JavaScript zoo site', function () {
    beforeEach(function () {
        browser.get('http://www.thetestroom.com/jswebapp/');
    });
    it('should test by using CSS Expression', function () {
        //css tag
        element(by.css('input')).sendKeys('text test');
        //css class
        element(by.css('.ng-binding')).getText().then(function (text) {
            console.log(text);
        });
        //css id
        element(by.css('#continue_button')).click();
        //css chaining
        element(by.css('button#continue_button')).click();
        //css child nodes
        element(by.css('table td a')).getText(function (text) {
            console.log(text);
        //css attributes
        element(by.css('[id="title"]')).getText(function (text) {
            console.log(text);
        });
        });
    });
});