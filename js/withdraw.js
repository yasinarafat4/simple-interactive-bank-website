// Same steps going for withdraw
//--------------------------
//step 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step 2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  //step 4
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //clearing the withdraw field
  withdrawField.value = "";

  // validation, if user give empty or letter input
  if (isNaN(newWithdrawAmount)) {
    alert("Please Provide A Valid Number");
    return;
  }
  //step 3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  //step 4.1
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //step 5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // validation, if user give amount more than balance
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baap Er Bank e Ato Taka Nai");
    return;
  }

  //step 4.2 (because of return)
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //step 6
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
});
