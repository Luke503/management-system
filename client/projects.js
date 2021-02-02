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
    formData["projectId"] = document.getElementById("projectId").value;
    formData["projectName"] = document.getElementById("projectName").value;
    formData["taskId"] = document.getElementById("taskId").value;
    formData["employeeId"] = document.getElementById("employeeId").value;
    formData["assignedTask"] = document.getElementById("assignedTask").value;
    formData["assignedTo"] = document.getElementById("assignedTo").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("projectList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.projectId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.projectName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.taskId;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.employeeId;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.assignedTask;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.assignedTo;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("projectId").value = "";
    document.getElementById("projectName").value = "";
    document.getElementById("taskId").value = "";
    document.getElementById("employeeId").value = "";
    document.getElementById("assignedTask").value = "";
    document.getElementById("assignedTo").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("projectId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("projectName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("taskId").value = selectedRow.cells[2].innerHTML;
    document.getElementById("employeeId").value = selectedRow.cells[3].innerHTML;
    document.getElementById("assignedTask").value = selectedRow.cells[4].innerHTML;
    document.getElementById("assignedTo").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.projectId;
    selectedRow.cells[1].innerHTML = formData.projectName;
    selectedRow.cells[2].innerHTML = formData.taskId;
    selectedRow.cells[3].innerHTML = formData.employeeId;
    selectedRow.cells[4].innerHTML = formData.assignedTask;
    selectedRow.cells[5].innerHTML = formData.assignedTo;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("projectList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("projectId").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}