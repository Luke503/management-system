var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["employeeId"] = document.getElementById("employeeId").value;
    formData["fName"] = document.getElementById("fName").value;
    formData["lName"] = document.getElementById("lName").value;
    formData["bDate"] = document.getElementById("bDate").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.employeeId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.bDate;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("employeeId").value = "";
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("bDate").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("employeeId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("bDate").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.employeeId;
    selectedRow.cells[1].innerHTML = formData.fName;
    selectedRow.cells[2].innerHTML = formData.lName;
    selectedRow.cells[3].innerHTML = formData.bDate;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("employeeId").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}