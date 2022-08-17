document.getElementById("withdraw-btn").addEventListener("click", function () {
    var withdrawAmount = Number(document.getElementById("withdraw-amount").value);
    var balanceAmount = Number(document.getElementById("balance-amount").innerText);
    var withdrawBlance = Number(document.getElementById("withdraw-blance").innerText);
    if (withdrawAmount > balanceAmount) {
        alert("opps your withdrw  amount is more then from your main blance ")
    }
    else {
        var newBlance = balanceAmount - withdrawAmount;
        document.getElementById("balance-amount").innerText = newBlance;
        withdrawBlance += withdrawAmount;
        document.getElementById("withdraw-blance").innerText = withdrawBlance;
    }
    document.getElementById("withdraw-amount").value = "";
});
document.getElementById("deposit-btn").addEventListener("click", function () {
    var depositAmount = Number(document.getElementById("deposit-amount").value);
    var balanceAmount = Number(document.getElementById("balance-amount").innerText);
    document.getElementById("balance-amount").innerText = balanceAmount + depositAmount;
    var depositBlance = Number(document.getElementById("deposit-blance").innerText);
    document.getElementById("deposit-blance").innerText = depositBlance + depositAmount;
    document.getElementById("deposit-amount").value = "";
})