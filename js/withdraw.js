// Same steps going for withdraw
//--------------------------
//step 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step 2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  //step 4
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  //step 3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  //step 4
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  withdrawTotalElement.innerText = currentWithdrawTotal;

  //step 5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //step 6
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  //clearing the withdraw field
  withdrawField.value = "";
});
