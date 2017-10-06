const chai = require('chai');
chai.use(require('chai-fs'));
const expect = chai.expect;
const rimraf = require('rimraf');

const data = require('./data.json');
const semita = require('..');

describe("Semita", () => {

    describe("map data", () => {

        it("create a report directory with default options", done => {
            const reportPath = "./semita-report";
            semita(data);
    
            setTimeout(() => {
                expect(reportPath).to.be.a.path();
                expect(reportPath).to.have.basename("semita-report");
                expect(reportPath).to.be.a.directory().with.subDirs(['assets', 'js', 'styles', 'fonts']);

                expect(reportPath + "/assets/images").to.be.a.directory().with.files.that.include.members(['semita-background.png', 'favicon.png']);
                expect(reportPath + "/fonts").to.be.a.directory().with.files.that.include.members(['fontawesome-webfont.woff2']);
                expect(reportPath + "/js").to.be.a.directory().with.files.that.include.members(['jquery.min.js', 'jquery.orgchart.min.js']);
                expect(reportPath + "/styles").to.be.a.directory().with.files.that.include.members(['font-awesome.min.css', 'jquery.orgchart.min.css']);
                expect(reportPath + "/index.html").to.be.a.file();
                done();
            }, 1000);
        });

        it("create a report directory with special options", done => {
            const reportPath = "./special/semita-special-report";
            semita(data, {
                reportTitle: 'Special Report',
                reportDir: 'special',
                reportName:  'semita-special-report'
            });
    
            setTimeout(() => {
                expect(reportPath).to.be.a.path();
                expect(reportPath).to.have.basename("semita-special-report");
                expect(reportPath).to.be.a.directory().with.subDirs(['assets', 'js', 'styles', 'fonts']);

                expect(reportPath + "/assets/images").to.be.a.directory().with.files.that.include.members(['semita-background.png', 'favicon.png']);
                expect(reportPath + "/fonts").to.be.a.directory().with.files.that.include.members(['fontawesome-webfont.woff2']);
                expect(reportPath + "/js").to.be.a.directory().with.files.that.include.members(['jquery.min.js', 'jquery.orgchart.min.js']);
                expect(reportPath + "/styles").to.be.a.directory().with.files.that.include.members(['font-awesome.min.css', 'jquery.orgchart.min.css']);
                expect(reportPath + "/index.html").to.be.a.file();
                done();
            }, 1000);
        });
    });

    after(() => {
        rimraf('./special', error => {
            console.error("An error ocurred while trying to delete the test folder. Details: ", error);
        });
    });

});