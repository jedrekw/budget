var SettingsPage = (function () {

    function SettingsPage() {
    }

        SettingsPage.prototype.getRandomInteger = function (min, max) {
            return parseInt(Math.random() * (max - min) + min);
        };

        SettingsPage.prototype.getRandomString = function (length) {
            var string = '';
            var varters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; //Include numbers if you want
            for (i = 0; i < length; i++) {
                string += varters.charAt(Math.floor(Math.random() * varters.length));
            }
            return string;
        };

        SettingsPage.prototype.clearFieldAndSendKeys = function (field, value) {
            field.clear().then(function () {
                field.sendKeys(value);
            });
        };


        SettingsPage.prototype.getDropdownOptions = function(dropdown) {
            return dropdown.all(by.tagName('option'));
        };

        SettingsPage.prototype.selectByOprion = function(dropdown, value) {
            return dropdown.all(by.css('option[value="' + value + '"]')).click();
        };

        SettingsPage.prototype.selectByPartialText = function(dropdown, text) {
            return dropdown.all(by.cssContainingText('option', text)).click();
        };

        SettingsPage.prototype.selectByText = function(dropdown, text) {
            return dropdown.all(by.xpath('option[.="' + text + '"]')).click();
        };

        SettingsPage.prototype.getValueAndConvert = function (locator) {
            return locator.getText().then(function (text) {
                numb = text.replace(/,/g, '');
                numb = numb.replace(/\$/g, '');
                numb= numb.replace(/\./g, '');
                numb = parseInt(numb);
                console.log(numb);
                return numb
             });
            };
        SettingsPage.prototype.convertStringToCurrency = function (str) {
            str=str.toString();
            if (str.length <= 3){
                return str+".00";
            }
            else if ((str.length <= 6) && (str.length>=4)){
                return str.slice(0, -3)+","+ str.slice(-3)+".00";
            }
            else if (str.length>=7){
                return str.slice(0, -6)+","+str.slice(-6, -3)+","+ str.slice(-3)+".00";
            }
        };

        return SettingsPage;
    })();
module.exports = SettingsPage;
