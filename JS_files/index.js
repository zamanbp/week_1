document.getElementById("login-button").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "user" && password === "password") {
        errorMessage.textContent = "";
        window.location.href = "home.html";
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});