var SettingsPage = require("./../settings");
var settings = new SettingsPage();
var TablePage = require("./../pages/TablePage");
var table_page = new TablePage();
var protractor = require("protractor");
// var jasmine = require("jasmine-node");
var browser = protractor.browser;
var EC = protractor.ExpectedConditions;
var number = 0;
var prices = [];


    describe('Login', function() {
        beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            browser.get("/budget");
            // browser.driver.wait(EC.presenceOf(dashboard.userAccountButton), 10000);
            // console.log(typeof(table_page.getPriceValuesFromList));
        });

        it('regex', function(){
            expect(number.toMatch("/d{0-3}?,?/d{0-3}?/.?/d{0-3}?"));
        });

        it('regex2', function(){
            table_page.matchPriceRegex(table_page.workingBalanceField)
        });


        // it('should get values from list', function(){
        //     TablePage.getPriceValuesFromList();
          // for (number = 1; number < 100; number++) {
          //   var locator = '//*[@id="root"]/main/section/table/tbody/tr[' + number + ']/td[3]/div[2]';
          //   browser.findElement(By.xpath(locator)).then(function (err) {
          //     prices[number] = element(By.xpath(locator)).getText();
          //     console.log(prices[number])
          //   }, function (err) {
          //     if (err) {
          //       break
          //     }
          //   })
          // }
        // });



    });
