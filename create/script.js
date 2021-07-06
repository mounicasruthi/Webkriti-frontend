const createButton = document.querySelector(".post-button");
const createPostButton = document.querySelector(".create");
const homeButton = document.querySelector(".home");
const profileButton = document.querySelector(".profile");


const apiUrl = "https://connectup-backend.herokuapp.com/";

const token = localStorage.getItem("jwt");

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
  const content = document.querySelector(".post-content").value;
  const image = document.querySelector(".post-image").value;

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
          location.href = "/profile/profile.html";
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
