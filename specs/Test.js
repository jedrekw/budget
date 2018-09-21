var SettingsPage = require("./../settings");
var settings = new SettingsPage();
var TablePage = require("./../pages/TablePage");
var table_page = new TablePage();
var protractor = require("protractor");
var browser = protractor.browser;
var EC = protractor.ExpectedConditions;


    describe('Bugdet - ', function() {
        beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
            browser.get("/budget");
            browser.driver.wait(EC.presenceOf(table_page.categoryDropdown), 10000);
        });

        it('should add a new request - should succeed', function(){
            table_page.SelectRandomCategory();
            table_page.InputDescription();
            table_page.InputValue();
            table_page.AddRequest();
            var AddedValueConverted=settings.convertStringToCurrency(table_page.valueValue);
            var source = browser.driver.getPageSource();
            expect(source).toContain(table_page.descriptionValue);
            expect(source).toContain(AddedValueConverted);
        });

        it('total inflow and outlow should sum up to working balance - should succeed', function(){
            var workingBalancevalue = settings.getValueAndConvert(table_page.workingBalanceField);
            var totalInflowvalue = settings.getValueAndConvert(table_page.totalInflowField);
            var totalOutflowvalue = settings.getValueAndConvert(table_page.totalOutflowField);
            protractor.promise.all([totalInflowvalue, totalOutflowvalue, workingBalancevalue]).then(function (values) {
                expect((values[0]) - (values[1])).toEqual(values[2]);
            });
        });

        it('check working balance regex pattern - should fail', function(){
            expect(table_page.workingBalanceField.getText()).toMatch("f\d{0,3}?,?\d{0,3}?\.?\d{0,3}?");
        });


    });
