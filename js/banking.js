
// Banking
document.getElementById('deposit-btn').addEventListener('click',function(){
    // get the deposited amount
    const depositInput = document.getElementById('user-deposit');
    const newDepositAmountText =depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)
    // console.log(depositAmount)

    const depositTotal = document.getElementById('deposit-total')
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText)
    const newDepositTotal = previousDepositTotal+newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal

    // clear the innerText
    depositInput.value = '';
})
// get withdraw amount 
document.getElementById('withdraw-btn').addEventListener('click',function(){

    // get the deposited amount
    const withdrawInput = document.getElementById('user-withdraw');
    const newWithdrawAmountText =withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText)
    // console.log(depositAmount)

    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText)
    const newWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText =balanceTotal.innerText;
    const previousBalanceTotal= parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the inner text
    withdrawInput.value= ''
})