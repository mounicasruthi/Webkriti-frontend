const body = document.querySelector("body");

const apiUrl = "https://connectup-backend.herokuapp.com/";

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const signUpForm = document.querySelector(".signup-form");

signUpForm.addEventListener("submit", event => {
  event.preventDefault();

  const email = document.querySelector(".signup-email").value;
  const name = document.querySelector(".signup-name").value;
  const password = document.querySelector(".signup-password").value;
  const confPassword = document.querySelector(".signup-confpassword").value;

  // function validateEmail(inputText) {
  //   var mailformat =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (!inputText.value.match(mailformat)) {
  //     alert("You have entered an invalid email address!");
  //     document.signupForm.emailField.focus();
  //     return;
  //   }
  // }

  var mailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(mailFormat)) {
    alert("Please enter a valid email address");
    return;
  }

  if (name === "") {
    alert("Please enter a valid name");
    return;
  }

  if (password !== confPassword) {
    alert("The passwords don't match");
    return;
  }

  fetch(`${apiUrl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(res => res.json())
    .then(data => {
      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/feed/feed.html";
      } else {
        alert("Please sign up again");
      }
    })
    .catch(err => {
      alert("There was an error in sign up, please retry");
      console.log(err);
    });
});
