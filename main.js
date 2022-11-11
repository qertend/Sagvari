let tankDropdownToggle = false;

function tankDropdown() {
    if (tankDropdownToggle) {
        tankDropdownToggle = false;
        for (i of document.getElementsByClassName("tankDropdownLink")) {
            i.style.display = "none";

        }
    }
    else {
        tankDropdownToggle = true;
        for (i of document.getElementsByClassName("tankDropdownLink")) {
            i.style.display = "block";
        }
        }
}