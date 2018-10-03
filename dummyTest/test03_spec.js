describe('Adopt an animal on the zoo site', function () {
    beforeEach(function () {
        browser.get('http://www.thetestroom.com/jswebapp/');
    });
    afterEach(function () {
        console.log('after method executed');
    });
    it('should be correct url', function () {
        expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
    });
    describe('should generate correct text', function () {
        var TextMessage
        beforeEach(function () {
            TextMessage = 'Subscribe to my channel for more videos'
        });
        it('should check the correct text', function () {
            element(by.model('person.name')).sendKeys(TextMessage);
            element(by.binding('person.name')).getText().then(function (text) {
                expect(text).toEqual('Subscribe to my channel for more videos');
            });
        });

    });
    describe('should check the wright numbers of items in drop down', function () {
        var lenghtofItems;
        beforeEach(function () {
            lenghtofItems = 4;
        });
        it('should check the number of items', function () {
            element(by.buttonText('CONTINUE')).click();
            element(by.model('animal')).$('[value="1"]').click();
            element.all(by.css('.ng-pristine option')).then(function (items) {
                expect(items.length).toBe[lenghtofItems];
                expect(items[1].getText()).toBe('George the Turtle');
            });
            element(by.buttonText('CONTINUE')).click();
        });

    });
    it('should check user is on the thank you page', function () {

        element(by.buttonText('CONTINUE')).click();
        element(by.buttonText('CONTINUE')).click();
        expect(browser.getCurrentUrl()).toContain('confirm');

    });




});