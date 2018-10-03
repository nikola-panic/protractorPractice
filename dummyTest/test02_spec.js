describe('Adopt an animal on the zoo site', function () {
    it('should be correct url', function () {
        browser.get('http://www.thetestroom.com/jswebapp/');
        expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
    });
    it('should generate text correct', function () {

        browser.get('http://www.thetestroom.com/jswebapp/');
        var TextMessage = 'Subscribe to my channel for more videos'
        element(by.model('person.name')).sendKeys(TextMessage);
        element(by.binding('person.name')).getText().then(function (text) {
            expect(text).toEqual('Subscribe to my channel for more videos');
        });

    });
    it('should check the wright numbers of items in drop down', function () {

        browser.get('http://www.thetestroom.com/jswebapp/');
        element(by.buttonText('CONTINUE')).click();
        element(by.model('animal')).$('[value="1"]').click();
        element.all(by.css('.ng-pristine option')).then(function (items) {
            expect(items.length).toBe[4];
            expect(items[1].getText()).toBe('George the Turtle');
        });
        element(by.buttonText('CONTINUE')).click();

    });
    it('should check user is on the thank you page', function () {

        browser.get('http://www.thetestroom.com/jswebapp/');
        element(by.buttonText('CONTINUE')).click();
        element(by.buttonText('CONTINUE')).click();
        expect(browser.getCurrentUrl()).toContain('confirm');

    });




});