'use strict';

let obj = {
    firstName: "Bao",
    lastName: "Tran",
    score: 100
}

let fs = require('fs'),
    jsonData = JSON.stringify(obj)

fs.writeFile("./JSON/a.json", jsonData, function(err) {
    if (err) {
        console.log(err)
    }
})