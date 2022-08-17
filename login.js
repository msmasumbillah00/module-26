document.getElementById("login-btn").addEventListener("click", function () {
    var emailId = document.getElementById("npt-email").value;
    var emailPass = document.getElementById("npt-password").value;
    if (emailId == "msmasumbillah0000@gmail.com" && emailPass == "MASUMSApna") {
        document.getElementById("login-btn").href = "main-account.html"
    }
    else {
        alert("opps there is no account")
    }
})