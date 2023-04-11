// hide signin page when clicked on create page link
let signinForm = document.querySelector("div.signin-form");
let signup = document.querySelector(".sign-up");

function hideLoginForm(event) {
  event.preventDefault();
  signinForm.style.display = "none";
  signup.style.display = "block";
}
let createLink = document.querySelector("a#create-account-link");
createLink.addEventListener("click", hideLoginForm);

// hide signup page when clicked on login link

function hideSecondForm(event) {
  event.preventDefault();
  signinForm.style.display = "block";
  signup.style.display = "none";
}
let loginLink = document.querySelector("a.additional-link");
loginLink.addEventListener("click", hideSecondForm);
