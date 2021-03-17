// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector(".form__message");

//     messageElement.textContent = message;
//     messageElement.classList.remove("form__message--success", "form__message--error");
//     messageElement.classList.add(`form__message--${type}`);
// }

// function setInputError(inputElement, message) {
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
// }

// function clearInputError(inputElement) {
//     inputElement.classList.remove("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
// }

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", function () {
        // debugger;
        // e.preventDefault();

        // var username = document.getElementById("signupUsername").value;
        // var password = document.getElementById("signupPassword").value;

        // if (username === "admin" && password === "123") {
        //     console.log("Success");
        //     window.location.href = "/home.html";
        //     // document.location.href="./home.html";

        // }
        // else {
        //     console.log("Error");
        setFormMessage(loginForm, "error", "Invalid username/password combination");
        // }

    });

    // function validate(){
    //     var username = document.getElementById("signupUsername").value;
    //     var password = document.getElementById("signupPassword").value;

    //     if ( signupUsername.value == "admin" && signupPassword.value == "123"){
    //     alert ("Login successfully");
    //     window.location = "./home.html"; // Redirecting to other page.
    //     // return false;
    //     }
    //     else{
    //         setFormMessage(loginForm, "error", "Invalid username/password combination");
    //     }
    // }

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            // if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
            //     setInputError(inputElement, "Username must be at least 10 characters in length");
            // }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });

});

function ValidateUser() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;

    if (signupUsername.value == "admin" && signupPassword.value == "123") {
        window.location = "./home.html"; // Redirecting to other page.
        // return false;
    }
    else {
        alert("Login error");
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    }
}