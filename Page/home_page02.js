require('../page/home_page03.js');

var home_page02 = function () {

    this.selectAnimal = function (index) {
        element(by.model('animal')).$('[value="' + index + '"]').click();
    };

    this.clickContinue = function () {
        element(by.buttonText('CONTINUE')).click();
        return require('./home_page03');
    };
};
module.exports = new home_page02();