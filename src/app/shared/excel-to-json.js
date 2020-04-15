'use strict';
const excelToJson = require('convert-excel-to-json');
 
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
        else {
            result.projets[p-1].data[d]['url-preprod'] = "";
        }

        if (temp.Sheet1[i]['url-prod'] != undefined) {
            result.projets[p-1].data[d]['url-prod'] = temp.Sheet1[i]['url-prod'];
        }
        else {
            result.projets[p-1].data[d]['url-prod'] = "";
        }

        if (temp.Sheet1[i]['description'] != undefined) {
            result.projets[p-1].data[d]['description'] = temp.Sheet1[i]['description'];
        }
        else {
            result.projets[p-1].data[d]['description'] = "";
        }

        if (temp.Sheet1[i]['remark'] != undefined) {
            result.projets[p-1].data[d]['remark'] = temp.Sheet1[i]['remark'];
        }
        else {
            result.projets[p-1].data[d]['remark'] = "";
        }
        d++;
    }
    i++;
}
if (temp.Sheet1[i-1].projet != undefined) {
    result.projets[p-1].data = [];
    result.projets[p-1].data[d] = {};
    result.projets[p-1].data[d]['url-preprod'] = "";
    result.projets[p-1].data[d]['url-prod'] = "";
    result.projets[p-1].data[d]['description'] = "";
    result.projets[p-1].data[d]['remark'] = "";
}
let donnees = JSON.stringify(result);
const fs = require('fs');
fs.writeFileSync('./src/assets/webservices.json', donnees);
console.log('Conversion effectuée');