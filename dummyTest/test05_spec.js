describe('To test animal adoption site', function () {
    beforeEach(function () {
        browser.get('http://www.thetestroom.com/jswebapp/');
    });
    it('enter some text in text box', function () {
        element(by.model('person.name')).sendKeys('Nikola Panic');
        var dynamicText = element(by.binding('person.name')).getText();
        expect(dynamicText).toBe('Nikola Panic');
        element(by.name('button')).click();
        element(by.model('animal')).$('[value="3"]').click();
        element.all(by.css('.ng-pristine option')).then(function (items) {
            expect(items[3].getText()).toBe('Nemo the Fish');
        });
        element(by.css('button#continue_button')).click();
        expect(browser.getCurrentUrl()).toContain('confirm');
    });
});