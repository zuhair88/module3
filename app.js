//import getdata from "./sqlconnect.js";
//{
  //"name": "My extension",
 // ...
 // "permissions": [
 //   "https://www.google.com/"
 // ],
//  ...
//}
  

const x = document.querySelector("input");

var c;
var d;
var data;
var f;
var g;
let ni = 0;
x.addEventListener("change", () => {
    const fr = new FileReader();

    fr.onloadend = e => {
        let r = fr.result;
        console.log(r);
        var myArr = r.split(/\r\n|\n/);
       


        for (var i = 1; i < myArr.length - 1; i++) {
            var conte = myArr[i].split(',');
            const nam = conte[0];
            let sku = conte[7];
            let a;
            let b;
         
            $(document).ready(function () {
                $.ajax({
                    type: "GET",
                    url: "database.csv",
                    dataType: "text",
                    success: function (data) { processData(data); }
                });
            });

            function processData(allText) {
                var allTextLines = allText.split(/\r\n|\n/);
                ni++;
                for (var j = 1; j < allTextLines.length - 1; j++) {
                   
                    data = allTextLines[j].split(',');

                    a = data[0];
                    b = data[1];
                    let aa = a.toLowerCase();
                    let aname = nam.toLowerCase();
                    let bb = b.toLowerCase();
                    let bsku = sku.toLowerCase();
                   
                var lines = [];
             
                if (aa == aname) {
                    a = data[0];
                    b = data[1];
                    c = data[2];
                    d = data[3];
                   
                    var table = document.getElementById("csvRoot");
                    var row = table.insertRow(-1);

                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);

                    cell1.innerHTML = ni;
                    cell2.innerHTML = nam;
                    cell3.innerHTML = c;
                    cell4.innerHTML = d;
                    cell5.innerHTML = "";
                    cell6.innerHTML = "";
                   
                    if (bb == bsku) {
                        alert("xde");
                        //b = data[1];
                        //a = data[0];
                        //b = data[1];
                        // c = data[2];
                        // d = data[3];
                        //alert(d);
                        //console.log(d)
                        //paid
                       
                    } else {
                        //unpaid
                        //c = data[2];
                        //b = data[1];
                        //c = data[2];
                        //d = "UNPAID";
                    }
                   

                } else {
                                  
                    d = "UNPAID";
              
                }
               
                }
                   }
         }
     }

    fr.readAsText(x.files[0]);
   
})



