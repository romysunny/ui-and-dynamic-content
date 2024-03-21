function addItem() {
  var input = document.getElementById("itemInput");
  var value = input.value.trim();
  var errorMessage = document.getElementById("errorMessage");
  if (value === "") {
    errorMessage.textContent = "Nothing entered!";
    return;
  }
  errorMessage.textContent = "";

  var itemList = document.getElementById("itemList");
  var li = document.createElement("li");
  li.textContent = value;
  li.style.color = "black"; // Set text color to black

  var crossIcon = document.createElement("i");
  crossIcon.className = "fas fa-times-circle"; // Font Awesome cross icon
  crossIcon.style.marginLeft = "200px"; // Add some spacing between text and icon
  crossIcon.style.cursor = "pointer"; // Change cursor on hover
  crossIcon.onclick = function () {
    itemList.removeChild(li); // Remove the item when icon is clicked
  };
  li.appendChild(crossIcon);
  itemList.appendChild(li);

  input.value = "";
}
