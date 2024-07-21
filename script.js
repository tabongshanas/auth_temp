function selectSignupTab() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("tabButtonLogin").classList.remove("active");
    document.getElementById("tabButtonSignup").classList.add("active");
}

function selectLoginTab() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("tabButtonLogin").classList.add("active");
    document.getElementById("tabButtonSignup").classList.remove("active");
}


function toggleForm(formType) {
    switch (formType) {
        case 'login':
            selectLoginTab();
        break;
        
        case 'signup':
            selectSignupTab();
        break;
    }
}



// Function to display an error message for a specific field
function displayErrorMessage(fieldId, message) {
    let errorDiv = document.getElementById(fieldId + "-error");
    if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.id = fieldId + "-error";
        errorDiv.className = "error-message";
        const inputField = document.getElementById(fieldId);
        inputField.parentNode.insertBefore(errorDiv , inputField.nextSibling);
    }

    errorDiv.textContent = message;
    
}

    
// Function to clear an error message for a specific field
function clearErrorMessage(fieldId) {
    const errorDiv = document.getElementById(fieldId + "-error");
    if (errorDiv) {
    
    errorDiv.parentNode.removeChild(errorDiv);
    
    }
}


// Function to handle the login process
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    
    // exchanging the displayErrorMessage with displayErrorMessage within the if else
    let hasError = false;
    displayErrorMessage("signupFirstName", "Please fill in your first name.");
   
    if (username) { 
        clearErrorMessage("loginUsername");
        hasError = true;
    }
    else {
        displayErrorMessage("loginUsername", "Please fill in your user name.");
    }



    if (password) { 
        clearErrorMessage("loginPassword");
        hasError = true;
    }
    else {
        displayErrorMessage("loginPassword", "Please fill in your password.");
    }
    
    // change the ! from hasError (replacing the hasError with password & username)
    if (password && username) {
        alert(`Login Successful!\n\nUsername: ${username}`);
    }
}



// function to handle signup
function signup() {
    const firstName = document.getElementById("signupFirstName").value;
    const lastName = document.getElementById("signupLastName").value;
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    let hasError = false;

    // first name error functionnality
    if (firstName) { 
        clearErrorMessage("signupFirstName");
        hasError = true;
    }
    else {
        displayErrorMessage("signupFirstName", "Please fill in your first name.");
    }


    // last name error functionnality 
    if (lastName) {  
        clearErrorMessage("signupLastName");
        hasError = true;
    }
    else {
        displayErrorMessage("signupLastName", "Please fill in your last name.");
    }


    // user name error functionnality 
    if (username) {  
        clearErrorMessage("signupUsername");
        hasError = true;
    }
    else {
        displayErrorMessage("signupUsername", "Please fill in your user name.");
    }


    // user name error functionnality 
    if (password) {  
        clearErrorMessage("signupPassword");
        hasError = true;
    }
    else {
        displayErrorMessage("signupPassword", "Please fill in your password.");
    }


    // confirm password error functionnality 
    if (confirmPassword) {  
        clearErrorMessage("signupConfirmPassword");
        hasError = true;
    } 
    else {
        displayErrorMessage("signupConfirmPassword", "Please fill in your confirm password.");
    }

    // did not use an if-else statement (book say use if-else statement)
    if (password !== confirmPassword) {
        displayErrorMessage("signupConfirmPassword", "Passwords do not match.");
    }
}
    