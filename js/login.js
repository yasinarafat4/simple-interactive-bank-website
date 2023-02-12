// step-1: add click event handler with the submit button

// step-2: get the email address inside the email input field
// Always remember to use .value to get text from an input field
// 2.1: set id on the html element
// 2.2: get the element
// 2.3: get the value from the element

// step-3: get the password inside the password input field

//DANGER: DO NOT VERIFY email and password ON THE CLIENT SIDE
// step-4: verify email and password
//---------------------------------------------------------

// step-1
document.getElementById("btn-submit").addEventListener("click", function () {
  // step-2
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   console.log(email);

  // step-3
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  //   console.log(password);

  // step-4
  if (email === "mdyahasib@gmail.com" && password === "1122") {
    console.log("Valid User");
  } else {
    console.log("Invalid User");
  }
});
