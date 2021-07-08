const createButton = document.querySelector(".submit-button");
const createPostButton = document.querySelector(".createbtn");
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


createButton.addEventListener("click", () => {
  const content = document.querySelector(".text-content").value;
  const image = document.querySelector(".image-content-input").value;

  if (token) {
    fetch(`${apiUrl}/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ content, image }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/feed/feed.html";
        }
      })
      .catch((err) => {
        alert("Could not post. Retry.");
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
