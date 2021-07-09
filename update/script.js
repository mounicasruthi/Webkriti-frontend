const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId");
const updateButton = document.querySelector(".submit-button");
const deleteButton = document.querySelector(".delete");
const homeButton = document.querySelector(".home");
const createPostButton = document.querySelector(".create");
const profileButton = document.querySelector(".profile");
const logout = document.querySelector(".logOut");

// const apiUrl = "https://connectup-backend.herokuapp.com";
const apiUrl = "http://localhost:8000";

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
  const content = document.querySelector(".text-content").value;
  // const image = document.querySelector(".image-content-input").value;

  if (token) {
    fetch(`${apiUrl}/posts/update/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ content }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/profile/profile.html";
        }
      })
      .catch((err) => {
        alert("Could not update post. Please try again.");
        console.log(err);
      });
  }
});

deleteButton.addEventListener("click", () => {
  if (token) {
    fetch(`${apiUrl}/delete/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/profile/profile.html";
        }
      })
      .catch((err) => {
        alert("Could not delete post. Please try again.");
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
