const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const cnf = document.getElementById("cnf");

// SHOW ERROR
const showError = (input, msg) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = msg;
};

//SHOW SUCCESS
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

//CHECK REQUIRED
const checkRequired = (arr) => {
  arr.map((input) => {
    if (input.value.trim() === "") {
      showError(input, `${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
};
//
//CHECK EMAIL VALID
const checkValidMail = (input) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(input).toLowerCase());
};

///CHECK LENGTH
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${input.id} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

//CHECK PASSMATCH
const checkPassMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "password does not match");
  }
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, pass, cnf]);
  checkValidMail(email);
  checkLength(username, 3, 25);
  checkLength(pass, 6, 15);
  checkPassMatch(pass, cnf);
});
