const body = document.querySelector("body");
const logInsignUpButton = document.querySelector(".log-in-sign-up");

window.addEventListener("load", () => {
  body.classList.add("visible");

  const token = localStorage.getItem("jwt");

  if (token) {
    location.href = "/feed/feed.html";
  }
});

logInsignUpButton.addEventListener("click", () => {
  location.href = "/Sign-Up/signup.html";
  location.href = "/Log-In/login.html";
});
