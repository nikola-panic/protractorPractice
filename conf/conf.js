exports.config = {
    seleniumServerJar: './driver/selenium-server-standalone-3.12.0.jar',
    chromeDriver: './driver/chromedriver.exe',
    framework: 'jasmine2',
    // Time out for all scripts
    allScriptsTimeout: 999999999,
    getPageTimeout: 999999999,
    // e2e tests location
    specs: ['../test/testskout01_spec.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--disable-web-security',
                '--start-maximized'],
        }
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        require('protractor-uisref-locator')(protractor);
        var request = require('request');
        protractor.request = request;
        protractor.vpEnableDebug = false;
        var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
        jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
                // change the destionation of storing screenshots
                dest: './reports/screenshoots',
                filename: 'testReport.html'
            })
        );
    },
    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 999999999
    }
};