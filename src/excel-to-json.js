'use strict';
const excelToJson = require('../node_modules/convert-excel-to-json');
 
const temp = excelToJson({
    sourceFile: './src/assets/webservices.xlsx',
    header: {
        rows: 3
    },
    columnToKey: {
        B: "projet",
        C: "url-preprod",
        D: "url-prod",
        E: "description",
        F: "remark"
    }
});

let result = {};
let i = 0;
let p = 0;
let d = 0;

result.projets = [];

while (i < temp.Sheet1.length) {
    if (temp.Sheet1[i].projet != undefined) {
        result.projets[p] = {};
        result.projets[p].projet = temp.Sheet1[i].projet;
        d = 0;
        p++;
    }
    else {
        if (d == 0) {
            result.projets[p-1].data = [];
        }
        result.projets[p-1].data[d] = {};
        if (temp.Sheet1[i]['url-preprod'] != undefined) {
            result.projets[p-1].data[d]['url-preprod'] = temp.Sheet1[i]['url-preprod'];
        }
        if (temp.Sheet1[i]['url-prod'] != undefined) {
            result.projets[p-1].data[d]['url-prod'] = temp.Sheet1[i]['url-prod'];
        }
        if (temp.Sheet1[i]['description'] != undefined) {
            result.projets[p-1].data[d]['description'] = temp.Sheet1[i]['description'];
        }
        if (temp.Sheet1[i]['remark'] != undefined) {
            result.projets[p-1].data[d]['remark'] = temp.Sheet1[i]['remark'];
        }
        d++;
    }
    i++;
}

let donnees = JSON.stringify(result);
const fs = require('fs');
fs.writeFileSync('./src/assets/webservices.json', donnees);
console.log('Conversion effectuée');