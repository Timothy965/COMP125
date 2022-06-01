//Created by Timothy Issac Thomas


var ROW_LIMIT = 15;
var COLUMN_LIMIT = 15;

window.addEventListener('load', drawTable, false);

function redrawTable() {
    var redrawForm = document.getElementById("redrawForm");
    var tableRawField = document.getElementById("rows");
    var tableColumnField = document.getElementById("columns")
    if (redrawForm.checkValidity()) {
        ROW_LIMIT = isNaN(parseInt(tableRawField.value)) ? 0 : parseInt(tableRawField.value);
        COLUMN_LIMIT = isNaN(parseInt(tableColumnField.value)) ? 0 : parseInt(tableColumnField.value);
        drawTable();
        document.getElementById("validationResult").innerHTML = "";
        document.getElementById('tablePanel').scrollIntoView();
    }
    else {
        document.getElementById("validationResult").innerHTML = "We need both number of raws and columns to draw the table";
    }
}
function drawTable() {
    var myTable = "";
    for (var i = 1; i <= ROW_LIMIT; i++) {
        myTable += '<tr>';
        for (var j = 1; j <= COLUMN_LIMIT; j++) {
            myTable +=
                '<td> ' +
                ' <p>' + i + ", " + j + '</p> ' +
                '</td>';
        }
        myTable += '</tr>'
    }
    document.getElementById("myTable").innerHTML = myTable;
}
