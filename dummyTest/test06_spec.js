var util = require('util');

describe('to test an animal adoption flow', function () {

    beforeEach(function () {
        browser.get('http://www.thetestroom.com/jswebapp/');
    });

    xit('should be able to adopt an animal', function () {
        element(by.model('person.name')).sendKeys('I will subscribe');
        var dynamicText = element(by.binding('person.name')).getText();
        expect(dynamicText).toBe('I will subscribe');
        element(by.buttonText('CONTINUE')).click();

        element(by.model('animal')).$('[value="2"]').click();
        element(by.buttonText('CONTINUE')).click();

        var thankYouText = element(by.css('h1')).getText();
        expect(thankYouText).toBe('Thank you');
    });

    var home_page01 = require('../page/home_page01');

    it('should be able to adopt an animal by page objects', function () {
        home_page01.enterFieldValue('I will subscribe');
        var getHomePageText = home_page01.getDynamicText();
        expect(getHomePageText).toBe('I will subscribe');
        var home_page02 = home_page01.clickContinue();

        home_page02.selectAnimal(2);
        var home_page03 = home_page02.clickContinue();

        expect(home_page03.getTitle()).toBe('Thank you');
    });

});