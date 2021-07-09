const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId");
const updateButton = document.querySelector(".submit-button");
const updatePostButton = document.querySelector(".createbtn");
const homeButton = document.querySelector(".home");
const profileButton = document.querySelector(".profile");
const logout = document.querySelector(".logOut");

const apiUrl = "https://connectup-backend.herokuapp.com";

const token = localStorage.getItem("jwt");

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

createPostButton.addEventListener("click", () => {
  location.href = "/create/create.html";
});

homeButton.addEventListener("click", () => {
  location.href = "/feed/feed.html";
});

profileButton.addEventListener("click", () => {
  location.href = "/profile/profile.html";
});

updateButton.addEventListener("click", () => {
  const content = document.querySelector(".post-content").value;
  const image = document.querySelector(".post-image").value;

  if (token) {
    fetch(`${apiUrl}/note/update/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ content, image }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/pages/dashboard/dashboard.html";
        }
      })
      .catch((err) => {
        alert("Could not edit note. Please try again.");
        console.log(err);
      });
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
