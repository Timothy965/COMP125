//Copyright Timothy Issac Thomas, 301229888

function validateName() {
    var nameInput1 = document.getElementById("fname");
    var nameInput2 = document.getElementById("lname");
    // copy valid username value to profile object
    profile.firstname = nameInput1.value;
    profile.lastname = nameInput2.value;

    document.getElementById("profileFname").innerHTML = profile.firstname;
    document.getElementById("profileLname").innerHTML = profile.lastname;
    // make profile section and username section visible
    document.getElementById("profile").style.display = "block";
    document.getElementById("fnameSection").style.display = "block";
    document.getElementById("profile").style.display = "block";
    document.getElementById("lnameSection").style.display = "block";
}

// validate address
function validateAddress() {
    var addInput = document.getElementById("address");
    // copy valid username value to profile object
    profile.address = addInput.value;
    // copy profile.username value to profile section
    document.getElementById("profileAddress").innerHTML = profile.address;
    // make profile section and username section visible
    document.getElementById("profile").style.display = "block";
    document.getElementById("addressSection").style.display = "block";
}

// validate city
function validateCity() {
    var cityInput = document.getElementById("city");
    profile.city = cityInput.value;
    document.getElementById("profileCity").innerHTML = profile.city;
    document.getElementById("profile").style.display = "block";
    document.getElementById("citySection").style.display = "block";
}


//validate age
function validateAge() {
    var ageInput = document.getElementById("age");
    profile.age = ageInput.value;
    document.getElementById("profileAge").innerHTML = profile.age;
    document.getElementById("age").style.display = "block";
    document.getElementById("ageSection").style.display = "block";
}

//validate postal code
function validatePostalCode() {
    var postalInput = document.getElementById("pcode");
    var errorDiv = document.getElementById("pcodeError");
    profile.pcode = postalInput.value;
    document.getElementById("profilePostalCode").innerHTML = profile.pcode;
    document.getElementById("pcode").style.display = "block";
    document.getElementById("postalCodeSection").style.display = "block";
    try {
        if (/^[a-zA-z][0-9][a-zA-z][\s-]?[0-9][a-zA-z][0-9]$/.test(postalInput.value) === false) {
            throw "Postal code must be A0A0A0 format"
        }
        postalInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        // change input style
        postalInput.style.background = "rgb(255,233,233)";
    }
}

//validate Province
function validateProvince() {
    var provInput = document.getElementById("province");
    profile.province = provInput.value;
    document.getElementById("profileProvince").innerHTML = profile.province;
    document.getElementById("province").style.display = "block";
    document.getElementById("provinceSection").style.display = "block";
}

// validate entered password
function validatePassword() {
    var pw1Input = document.getElementById("pass1");
    var pw2Input = document.getElementById("pass2");
    var errorDiv = document.getElementById("passwordError");
    try {
        // replace with conditional expression
        if (/.{6,}/.test(pw1Input.value) === false) {
            throw "Password must be at least 6 characters";
        } else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
            throw "Passwords must match";
        } else if (/[A-Z]/.test(pw1Input.value) === false) {
            throw "Password must contain at least one uppercase letter";
        } else if (/\d/.test(pw1Input.value) === false) {
            throw "Password must contain at least one number";
        }

        // remove any password error styling and message
        pw1Input.style.background = "";
        pw2Input.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        // copy valid password to profile object
        profile.password = pw1Input.value;

    }
    catch (msg) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        // change input style
        pw1Input.style.background = "rgb(255,233,233)";
        pw2Input.style.background = "rgb(255,233,233)";
    }
}

// validate entered email
function validateEmail() {
    var emailInput = document.getElementById("emailbox");
    var errorDiv = document.getElementById("emailError");
    try {
        // replace with conditional expression
        if (emailInput.value.search("@") === -1 ||
            emailInput.value.lastIndexOf(".") === -1) {
            throw "Please provide a valid e-mail address";
        }

        // remove any email error styling and message
        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // convert email address to lowercase
        // replace with code to convert email address to lowercase
        emailInput.value = emailInput.value.toLowerCase();

        // copy valid email value to profile object
        profile.email = emailInput.value;
        // copy profile.email value to profile section
        document.getElementById("profileEmail").innerHTML = profile.email;
        // make profile section and email section visible
        document.getElementById("profile").style.display = "block";
        document.getElementById("emailSection").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        // change input style
        emailInput.style.background = "rgb(255,233,233)";
    }
}

function setUpPages() {
    validateName();
    validateAddress();
    validateCity();
    validateAge();
    validateProvince()
    validatePostalCode();
    validatePassword();
    validateEmail();
    errorMessage();
}


function errorMessage() {
    var nameInput1 = document.getElementById("fname");
    var nameInput2 = document.getElementById("lname");
    var addInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var postalInput = document.getElementById("pcode");
    var provInput = document.getElementById("province");
    var ageInput = document.getElementById("age");
    var pw1Input = document.getElementById("pass1");
    var pw2Input = document.getElementById("pass2");
    var emailInput = document.getElementById("emailbox");
    if (nameInput1.value === "") {
        alert('First name must be filled out')
    }
    else if (nameInput2.value === "") {
        alert('Last name must be filled out')
    }
    else if (addInput.value === "") {
        alert('Address is required')
    }
    else if (cityInput.value === "") {
        alert('City is required')
    }
    else if (postalInput.value === "") {
        alert('Postal code is required')
    }
    else if (provInput.value === "") {
        alert('Province is required')
    }
    else if (ageInput.value === "") {
        alert('Age must be filled out')
    }
    else if (ageInput.value < 18) {
        alert('Age should be at least 18')
    }

    else if (pw1Input.value === "") {
        alert('Password is required')
    }
    else if (pw2Input.value === "") {
        alert('Password is required')
    }
    else if (emailInput.value === "") {
        alert('E-mail is required')
    }
    else {
        alert("Thanks for the registration, your customer record is created successfully!")
    }
}

