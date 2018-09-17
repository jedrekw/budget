var SettingsPage = (function () {

    function SettingsPage() {

        SettingsPage.prototype.getRandomInteger = function(min, max) {
            return parseInt(Math.random() * (max - min) + min);
        };

        getRandomString = function (length) {
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

        SettingsPage.prototype.convertCurrencyToNumber = function(currency){
            // console.log(currency);
            currency=toString(currency);
            console.log(currency);
            var numb = currency.replace(/\D/g, '');
            // var numb = currency.replace(/\./g, '');
            // console.log(numb);
            // numb = numb.replace(/,/g, '');
            // console.log(numb);
            // numb = numb.replace(/$/g, '');
            // console.log(numb);
            numb=parseInt(numb);
            console.log(numb);
            return numb;
        };

        SettingsPage.prototype.getValue = function(locator){
            locator.getAttribute('value').then(function (text) {
                var txt= toString(text);
                return txt;
            });
        };

        SettingsPage.prototype.getTextowo = function(element, callback) {
            element.getText().then (function(text){
                callback(text);
            });
        };

return SettingsPage;
})();

module.exports = SettingsPage;
