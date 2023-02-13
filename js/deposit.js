// step 1: add event listener to the deposit button

// step 2: get the deposit amount from the deposit input field
// Always remember for input field use .value to get value from an input field

//step 3: get the current deposit total amount
//for non-input (element other than input, textarea) use innerText to get the text.
// extra step: clear the deposit field

//step 4: convert string to number type

// step 5: get current balance total

// step 6: add deposit amount to balance and calculate current total balance
//-----------------------

//step 1
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step 2
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  //step 4
  const newDepositAmount = parseFloat(newDepositAmountString);

  //clearing the withdraw field
  depositField.value = "";

  // validation, if user give empty or letter input
  if (isNaN(newDepositAmount)) {
    alert("Please Provide A Valid Number");
    return;
  }
  //step 3
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  //step 4
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  //step 5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //step 6
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
});
