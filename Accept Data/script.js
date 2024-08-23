function onAdd() {
  let code = document.getElementById("code").value;
  let title = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  if (code != "" && title != "" && price != "") {
    const tableBody = document.querySelector("#myTable");
    const newRow = document.createElement("tr");

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");

    // Set the cell values

    cell1.textContent = code;
    cell2.textContent = title;
    cell3.textContent = price;

    // Append the cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
    clearFields();
  } else {
    alert("Enter all the fields");
  }
}

function clearFields() {
  document.getElementById("code").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
}
