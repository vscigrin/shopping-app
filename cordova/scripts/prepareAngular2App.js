const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function (context) {
    console.log('Building Angular Application into "./www" directory.');
    console.log('context.opts.platforms = ' + JSON.stringify(context.opts.platforms));

    const basePath = context.opts.projectRoot;
    const baseWWW = basePath + '/www';
    var productionBuild = false;
    var buildStr = "";

    const paramsPath = basePath + '/../src/app/app-constants.ts'
    var contents = fs.readFileSync(paramsPath, 'utf8');

    if (contents.indexOf('BUILD_FOR_RELEASE: boolean = false') >= 0) {
        console.log("*** BUILDING DEBUG VERSION ***");
        productionBuild = false;
    }
    else {
        console.log("*** BUILDING RELEASE VERSION ***");
        productionBuild = true;
    }

    if (productionBuild) {
        buildStr = "ng build --prod --output-path cordova/www/ --base-href .";
    }
    else {
        buildStr = "ng build --output-path cordova/www/ --base-href .";
    }

    console.log('Angular build started...');
    console.log(execSync(
        buildStr, {
        maxBuffer: 1024 * 1024,
        cwd: basePath + '/..'
    }).toString('utf8'));
    console.log('Angular build finished...');
};