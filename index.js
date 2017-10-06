const path = require('path');
const { JSDOM } = require("jsdom");

const customizeReport = require('./lib/customize-report');
const reportWriter = require('./lib/report-writer');

module.exports = function (data, options = {
    reportTitle: 'Semita Report',
    reportDir: __dirname, 
    reportName:  'semita-report'
}) {
    let templatePath = path.resolve(__dirname, 'report-template');
    let reportPath =  path.resolve(options.reportDir, options.reportName);

    JSDOM.fromFile(templatePath + '\\' + 'index.html', {runScripts: "outside-only"}).then(dom => {
        global.window = dom.window;
        global.document = dom.window.document;
        global.window.$ = require('jquery');
        require('./node_modules/orgchart/src/js/jquery.orgchart'); // loads orgchart into jquery

        document.title = options.reportTitle;
        customizeReport.colorizeBranches(data);

        reportWriter.addMappingScript(data);
        reportWriter.createReportEnvironment(templatePath, reportPath).then(() => {
            reportWriter.writeReport(dom.serialize(), reportPath);
        });
    });

};