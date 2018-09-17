exports.config = {
    seleniumServerJar: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.14.0.jar',
    specs: ['./specs/*.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['no-sandbox']
        }},
    // baseUrl: "http://localhost:8000",
        baseUrl: "https://budget.modus.app/budget",
    onPrepare: function() {
        jasmine.getEnv().addReporter(prettyReporter);
    }
};

var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;

var prettyReporter = new PrettyReporter(
    {
        path: 'results'
});
