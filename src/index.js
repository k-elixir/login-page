// hide signin page when clicked on create page link

function hideForm() {
  let signinForm = document.querySelector("div#form");
  let signup = document.querySelector(".sign-up");
  signinForm.style.display = "none";
  signup.style.display = "block";
}
let link = document.querySelector("a#create-account-link");
link.addEventListener("click", hideForm);
