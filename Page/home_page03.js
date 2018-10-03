var home_page03 = function () {

    this.getTitle = function () {
        return element(by.css('h1')).getText();
    };
};
module.exports = new home_page03();