function checkPassword() {
    var password = document.getElementById("password").value;
 
    // Replace "your_password" with the actual password you want to use
    if (password === "your_password") {
        document.getElementById("gallery").style.display = "block";
    } else {
        alert("Incorrect password. Try again.");
    }
}
