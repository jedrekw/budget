// var SettingsPage = require("./../settings");
// var settings = new SettingsPage();
var protractor =
    require("protractor");
var browser = protractor.browser;
var EC = protractor.ExpectedConditions;
var number = 0;
var prices = [];

var TablePage = (function () {

    function TablePage() {
        this.workingBalanceField = element(By.xpath('//*[@id="root"]/main/section/div/div/div[5]/div/div[1]'));
    }

    TablePage.prototype.matchPriceRegex = function (locator) {
        this.text = locator.getText();
        expect(this.text).toMatch("\d{0,3}?,?\d{0,3}?\.?\d{0,3}?");
    };

    TablePage.prototype.getPriceValuesFromList = function () {
      for (number = 1; number < 100; number++) {
        var locator = '//*[@id="root"]/main/section/table/tbody/tr[' + number + ']/td[3]/div[2]';
        browser.findElement(By.xpath(locator)).then(function (err) {
          prices[number] = element(By.xpath(locator)).getText();
          console.log(prices[number])
        }, function (err) {
          if (err) {
            break;
          }
        })
      }
    };

    return TablePage;
})();

module.exports = TablePage;
