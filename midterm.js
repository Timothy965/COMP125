
function validateForm() {
    var x = document.forms["frm1"]["fname"].value;
    if (x == "" || x == null) {
        alert("Please enter your First Name");
        input.setCustomValidity('Please fill out this field');
        return false;
    }
}

function validateForm() {
    var x = document.forms["frm1"]["lname"].value;
    if (x == "" || x == null) {
        alert("Please enter your Last Name ");
        input.setCustomValidity('Please fill out this field');
        return false;
    }
}

function validateForm() {
    var x = document.forms["frm1"]["street"].value;
    if (x == "" || x == null) {
        alert("Street Address is Required");
        input.setCustomValidity('Please fill out this field');
        return false;
    }
}


function myFunction() {
    document.getElementById("frm1").submit();

    document.getElementById("prvnce").selectedIndex = "-1";

    const inpObj = document.getElementById("phone");
    if (!inpObj.checkValidity()) {
        document.getElementById("phone").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("phone").innerHTML = "Accepted";
    }
}

       


function disable() {
    document.getElementById("mySelect").disabled = true;
}
function enable() {
    document.getElementById("mySelect").disabled = false;
}

function FillDelivery(f) {

    if (f.sameadr.checked == true) {

        f.fname.value = f.fname2.value;
        f.lname.value = f.lname2.value;
        f.street.value = f.street2.value;
        f.city.value = f.city2.value;
        f.prvnce.value = f.prvnce2.value;
        f.zip.value = f.zip2.value;
        f.phone.value = f.phone2.value;

    }

}