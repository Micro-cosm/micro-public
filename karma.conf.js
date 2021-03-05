// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function ( config ) {

    config.set ({
		autoWatch:			false,
		basePath:			'',
		browsers:			[ 'ChromeHeadlessNoSandbox' ],
		client:				{ clearContext: false },
		colors:				true,
		customLaunchers:	{
			ChromeHeadlessNoSandbox: {
				base:	'ChromiumHeadless',
				flags:	[
					'--no-sandbox',
					'--single-process',
					'--disable-setuid-sandbox',
					'--disable-gpu',
				]
			}
		},
        frameworks: [ 'jasmine', '@angular-devkit/build-angular' ],
		logLevel:	config.LOG_DEBUG,
        plugins: 	[
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('@angular-devkit/build-angular/plugins/karma')
        ],
		port:					9876,
		reporters:				[ 'progress' ],
		restartOnFileChange:	true,
        singleRun:				true
    })
};


// reporters:	[ 'progress', 'kjhtml' ],
//	require('karma-coverage-istanbul-reporter'),
//	logLevel: config.LOG_INFO,
//	browsers: [ 'Chrome' ],
/*
coverageIstanbulReporter: {
	dir: require ( 'path' ).join ( __dirname, './coverage/ng-unit-test' ),
	reports: [ 'html', 'lcovonly', 'text-summary' ],
	fixWebpackSourcePaths: true
},
 */
