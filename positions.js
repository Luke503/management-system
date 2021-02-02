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
    formData["positionID"] = document.getElementById("positionID").value;
    formData["positionName"] = document.getElementById("positionName").value;
    formData["positionRank"] = document.getElementById("positionRank").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("positionsList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.positionID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.positionName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.positionRank;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("positionID").value = "";
    document.getElementById("positionName").value = "";
    document.getElementById("positionRank").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("positionID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("positionName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("positionRank").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.positionID;
    selectedRow.cells[1].innerHTML = formData.positionName;
    selectedRow.cells[2].innerHTML = formData.positionRank;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("positionsList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("positionID").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}