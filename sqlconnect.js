//import app from "./app.js";
//define(function (require) {
//var requirejs = require('requirejs');
//requirejs.config({
//    //Pass the top-level main.js/index.js require
//    //function to requirejs so that node modules
//    //are loaded relative to the top-level JS file.
//    nodeRequire: require
//});
    //var mysql = require('mysql');
//});

var mysql = require('mysql');
//const { mysql } = require('mysql');


var con = mysql.createConnection({
    
    host: "110.4.45.26",
    user: "melakaki_melakamos",
    password: "Melaka2@2@",
    database: "melakaki_MOS"
});
//alert("ada");
//import { nam, sku } from './app.js';
//alert(nam);
//alert(sku);

con.connect(function (err) {
    
    //if (err) throw err;
    con.query("SELECT NAME, PRODUCT, STATUS FROM MODULE", function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
        var table = document.getElementById("csvRoot");

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = "NEW CELL1";
        cell2.innerHTML = "NEW CELL2";
        cell3.innerHTML = "NEW CELL1";
        cell4.innerHTML = "NEW CELL2";
        cell5.innerHTML = "";
        cell6.innerHTML = "";
    });
    });

