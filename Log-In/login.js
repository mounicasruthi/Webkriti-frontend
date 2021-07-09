const body = document.querySelector("body");

const apiUrl = "https://connectup-backend.herokuapp.com";
// const apiUrl = "http://localhost:8000";

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const signInForm = document.querySelector(".login-form");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const logInEmail = document.querySelector(".login-email");
  const logInPassword = document.querySelector(".login-password");

  const email = logInEmail.value;
  const password = logInPassword.value;

  if (email === "") {
    alert("Email is mandatory");
    return;
  }

  if (password === "") {
    alert("Password is mandatory");
    return;
  }

  fetch(`${apiUrl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/profile/profile.html";
      } else {
        alert("Please log in again");
      }
    })
    .catch((err) => {
      alert("There was an error in log in, please retry");
  
    });
});
