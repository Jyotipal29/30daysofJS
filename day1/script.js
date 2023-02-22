const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfPass = document.getElementById("cnf");
//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

//check required filed
function checkRequired(inputArr) {
  inputArr.map((input) => {
    if (input.value.trim() === "") {
      showError(input, ` ${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

//check password match
function checkPassMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `password does not match`);
  }
}
//event listners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   if (username.value === "") {
  //     showError(username, "username is required");
  //   } else {
  //     showSuccess(username);
  //   }
  //   if (email.value === "") {
  //     showError(email, "email is required");
  //   } else if (!isValidEmail(email.value)) {
  //     showError(email, "email is not valid");
  //   } else {
  //     showSuccess(email);
  //   }
  //   if (password.value === "") {
  //     showError(password, "password is required");
  //   } else {
  //     showSuccess(password);
  //   }
  //   if (cnfPass.value === "") {
  //     showError(cnfPass, "confirm password is required");
  //   } else {
  //     showSuccess(cnfPass);
  //   }

  checkRequired([username, email, password, cnfPass]);
  checkLength(username, 3, 20);
  checkLength(password, 6, 15);
  checkPassMatch(password, cnfPass);
});
