// hide login page when clicked on create page link

const link = document.querySelector("a#create-account-link");

function hideForm() {
  const signinForm = document.querySelector("div#form");
  const signup = document.querySelector("div.sign-up");
  signinForm.style.display = "none";
  signup.style.display = "block";
}
link.addEventListener("click".hideForm);
