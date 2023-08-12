// if already logged in, redirect to home page
if (localStorage.getItem("currentUser")) {
  location.href = "./main.html";
}

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

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = registerForm.username.value.trim();
  let email = registerForm.email.value.trim();
  let password = registerForm.password.value;

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (username.length < 6) {
    alert("Username must be at least 6 characters");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters");
  } else if (!password.match(lowerCaseLetter)) {
    alert("Password must  contain a lowercase letter");
  } else if (!password.match(upperCaseLetter)) {
    alert("Password must  contain a uppercase letter");
  } else if (!password.match(numbers)) {
    alert("Password must  contain a number or special character");
  } else {
    if (localStorage.getItem("users")) {
      let users = JSON.parse(localStorage.getItem("users"));

      users.push({
        email,
        password,
        username,
      });

      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            email,
            password,
            username,
          },
        ])
      );
    }
    container.classList.remove("right-panel-active");
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!localStorage.getItem("users")) {
    alert("No user found");
  } else {
    let users = JSON.parse(localStorage.getItem("users"));

    let email = loginForm.email;
    let password = loginForm.password;

    let existingUser = users.find(
      (index) =>
        index.email === email.value.trim() &&
        index.password === password.value.trim()
    );

    if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser));

      location.href = "./main.html";
    } else {
      alert("Email or password is incorrect");
    }
  }
});
