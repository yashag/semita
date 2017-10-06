const path = require('path');
const fs = require('fs');
const fse = require("fs-extra");

function addMappingScript(funcMap) {
    const orgChartScript = document.createElement("script");
    orgChartScript.innerHTML = visualizeFunctionsMapping(funcMap);
    document.body.appendChild(orgChartScript);
}


function visualizeFunctionsMapping(data) {
    return `
    var sourceData = ${JSON.stringify(data)};

    var oc = $('#chart-container').orgchart({
        data: sourceData,
        nodeTitle: 'title',
        nodeContent: 'content',
        parentNodeSymbol: 'fa-th-large',
        pan: true,
        zoom: true
    });

    oc.$chartContainer.on('touchmove', function(event) {
        event.preventDefault();
    });
    `;
}

function createReportEnvironment(templatePath, reportPath) {
    return fse.copy(templatePath, reportPath).catch(err => {
        console.error("An error ocurred while trying to create the report environment. Details: ", err);
    });
}

function writeReport(content, reportPath) {
    const reportFullPath = path.format({
        dir: reportPath,
        name: 'index',
        ext: '.html'
    });

    fs.writeFile(reportFullPath, content, error => {
        if (error) console.error("An error ocurred while trying to write the report. Details: ", error);
    });
}

module.exports = {
    addMappingScript,
    createReportEnvironment,
    writeReport
};