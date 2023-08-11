const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("currentUser", loginForm.email.value.trim());
  location.href = "./main.html";
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("currentUser", registerForm.username.value.trim());
  location.href = "./main.html";
});
