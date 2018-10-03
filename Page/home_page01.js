require ('../page/home_page02.js');

var home_page01 = function () {

    this.enterFieldValue = function (value) {
        element(by.model('person.name')).sendKeys(value);
    };

    this.getDynamicText = function () {
        return element(by.binding('person.name')).getText();
    };

    this.clickContinue = function (){
        element(by.buttonText('CONTINUE')).click();
        return require('./home_page02');
    };

};
module.exports = new home_page01();