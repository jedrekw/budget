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

    }

return SettingsPage;
})();

module.exports = SettingsPage;
