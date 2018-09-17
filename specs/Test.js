// var SettingsPage = require("./../settings");
// var settings = new SettingsPage();
var TablePage = require("./../pages/TablePage");
var table_page = new TablePage();
var protractor = require("protractor");
// var jasmine = require("jasmine-node");
var browser = protractor.browser;
var EC = protractor.ExpectedConditions;
var number = "89,276.120";
var workingBalanceField = element(By.xpath('//*[@id="root"]/main/section/div/div/div[5]/div/div[1]'));
var totalInflowField = element(By.xpath('//*[@id="root"]/main/section/div/div/div[1]/div/div[1]'));
var totalOutflowField = element(By.xpath('//*[@id="root"]/main/section/div/div/div[3]/div/div[1]'));
var workingBalancevalue = ""
var prices = [];


    describe('Bugdet - ', function() {
        beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
            browser.get("/budget");
            // browser.driver.wait(EC.presenceOf(dashboard.userAccountButton), 10000);
            // console.log(typeof(table_page.getPriceValuesFromList));
        });

        // it('check working balance regex pattern - should succeed', function(){
        //     var workingBalancevalue = workingBalanceField.getText();
        //     expect(workingBalancevalue).toMatch("\d{0,3}?,?\d{0,3}?\.?\d{0,3}?");
        // });

        // it('total inflow and outlow should sum up to working balance - should succeed', function(){
        //     settings.getValue(workingBalanceField, workingBalancevalue);
        //     console.log(workingBalancevalue(text));
            // var totalInflowvalue = settings.getValue(totalInflowField);
            // var totalOutflowvalue = settings.getValue(totalOutflowField);
            // var workingBalanceConverted = settings.convertCurrencyToNumber(workingBalancevalue);
            // var totalInflowConverted = settings.convertCurrencyToNumber(totalInflowvalue);
            // var totalOutflowConverted = settings.convertCurrencyToNumber(totalOutflowvalue);
            // console.log(workingBalanceConverted);
            // var totalInflowAndOutflow = totalInflowConverted+totalOutflowConverted;
            // console.log(totalInflowAndOutflow);
            // expect(totalInflowAndOutflow).toEqual(workingBalanceConverted);
            // expect(settings.convertCurrencyToNumber(workingBalanceField.getText())).toEqual("1")
        // });

        // it('regex2', function(){
        //     table_page.matchPriceRegex(table_page.workingBalanceField);
        // });


        it('should get values from list', function(){
            table_page.getPriceValuesFromList();
        //   for (number = 1; number < 100; number++) {
        //     var locator = '//*[@id="root"]/main/section/table/tbody/tr[' + number + ']/td[3]/div[2]';
        //     browser.findElement(By.xpath(locator)).then(function (err) {
        //       prices[number] = element(By.xpath(locator)).getText();
        //       console.log(prices[number])
        //     }, function (err) {
        //       if (err) {
        //         break
        //       }
        //     })
        //   }
        });



    });
