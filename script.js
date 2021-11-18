
function ajax() {
    var xhttp = new XMLHttpRequest();
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
            tblCustomers.deleteRow(i);
        }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var todo = response.shopList;

            for (var i = 0; i < todo.length; i++) {
               
                var row = table.insertRow(i + 1);

                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);


                // Add some text to the new cells:
                cell1.innerHTML = todo[i].serialno;
                cell2.innerHTML = todo[i].itemname;
                cell3.innerHTML = todo[i].Quantity;
                cell4.innerHTML = todo[i].Unit;
                cell5.innerHTML = todo[i].Department;
                cell6.innerHTML = todo[i].Notes;
            }


        }
    }
    xhttp.open("GET", "details.json", true);
    xhttp.send();
}
