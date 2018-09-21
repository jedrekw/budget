Depndencies:

Nodejs

use "npm install" in base folder to install from json package

then run "webdriver-manager update" to update the webdrivers

to run tests type "protractor config.js"

Test plan draft:

1.  Check if all the fields on the page and column headers load in the right place and with right value
2.  Add some values in the new inflow/outflow fields and check if new request is added correctly
3.  Add some inflow and outflow and check if the working balance is calculated correctly
4.  Check if we add an income and an outcome in the same category they are summed up correctly in the reports section
5.  Check that if we add an income the summed value of inflow changes correctly
6.  Check that if we add an outcome the summed value of outflow changes correctly
7.  Check if the total inflow and total outflow values sum up to the working balance value
8.  Check that if we add incomes/outcomes in a new category it is shown on reports tab
9.  Check that one category name doesn't show two times on reports tab
10.  Check that the values in the summed fields match the regex pattern: "\d{0,3}?,?\d{0,3}?\.?\d{0,3}?"

Description:

The tests written are No. 2, 7 and 10

Test No. 9 fails because there is a "f" char at the beginning of regex, if you remove it it will pass

The report is in the "results" folder in file "report.html"

Tests are in specs folder

Page objects are in pages folder

Additional functions are in settings.js

Configuration is in the config.js

In config.js you can change the "baseUrl" if you want to run tests on localhost

Enhancements: 
1. no income categories
2. Unable to edit/delete incomes/outcomes



