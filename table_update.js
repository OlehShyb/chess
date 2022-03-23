var table = document.getElementById("table"),rIndex;

for(var i = 1; i < table.rows.length; i++){
    table.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        console.log(rIndex);

        document.getElementById("first_name_field").value = this.cells[1].innerHTML;
        document.getElementById("last_name_field").value = this.cells[2].innerHTML;
        document.getElementById("email_field").value = this.cells[3].innerHTML;
        document.getElementById("phone_field").value = this.cells[4].innerHTML;
        document.getElementById("instagram_field").value = this.cells[5].innerHTML;
        document.getElementById("country_field").value = this.cells[6].innerHTML;
    }
}

function editRow(){
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("first_name_field").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("last_name_field").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("email_field").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("phone_field").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("instagram_field").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("country_field").value;
}

function editTableDisplay(){
    document.querySelector('.editTable').setAttribute('style', 'display: block;')
}