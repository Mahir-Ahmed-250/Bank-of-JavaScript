// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    //    get the amount deposited

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // update deposit

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText
    const depositAmount = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount)
    depositTotal.innerText = depositAmount

    // update balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText) + parseFloat(newDepositAmount)
    balanceTotal.innerText = newBalanceTotal
    // clear deposit field

    depositInput.value = ""

})

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {

    // get the amount withdraw

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;
    // update withdraw

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText
    const withdrawAmount = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount)
    withdrawTotal.innerText = withdrawAmount

    // update balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText) - parseFloat(newWithdrawAmount)
    balanceTotal.innerText = newBalanceTotal
    // clear deposit field

    withdrawInput.value = ""

})