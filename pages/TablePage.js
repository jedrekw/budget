var SettingsPage = require("./../settings");
var settings = new SettingsPage();
var protractor =require("protractor");

var TablePage = (function () {

    function TablePage() {
        this.workingBalanceField = element(By.xpath('//*[@id="root"]/main/section/div/div/div[5]/div/div[1]'));
        this.totalInflowField = element(By.xpath('//*[@id="root"]/main/section/div/div/div[1]/div/div[1]'));
        this.totalOutflowField = element(By.xpath('//*[@id="root"]/main/section/div/div/div[3]/div/div[1]'));
        this.categoryDropdown = element(By.name("categoryId"));
        this.categoryOption = settings.getRandomInteger(1,17);
        this.descriptionField = element(By.name("description"));
        this.descriptionValue = settings.getRandomString(10);
        this.valueField = element(By.name("value"));
        this.valueValue = settings.getRandomInteger(100000,500000);
        this.AddButton = element(By.xpath("//button[@type='submit']"));
    }

    TablePage.prototype.SelectRandomCategory = function () {
        settings.selectByOprion(this.categoryDropdown, this.categoryOption);
    };


    TablePage.prototype.InputDescription = function () {
        settings.clearFieldAndSendKeys(this.descriptionField, this.descriptionValue);
    };

    TablePage.prototype.InputValue = function () {
        settings.clearFieldAndSendKeys(this.valueField, this.valueValue);
    };

    TablePage.prototype.AddRequest = function () {
        this.AddButton.click();
    };

    return TablePage;
})();

module.exports = TablePage;
