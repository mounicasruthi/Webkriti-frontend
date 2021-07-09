const createButton = document.querySelector(".submit-button");
const createPostButton = document.querySelector(".createbtn");
const homeButton = document.querySelector(".home");
const profileButton = document.querySelector(".profile");
const logout = document.querySelector(".logOut");
const form = document.querySelector("form");

const apiUrl = "https://connectup-backend.herokuapp.com";

// const apiUrl = "http://localhost:8000";

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const textInput = document.querySelector(".text-content");
  const fileInput = document.querySelector(".image-content-input");
  const formData = new FormData();
  formData.append("content" ,textInput.value);
  formData.append("image" ,fileInput.files[0]);
  fetch(`${apiUrl}/posts/create`, { 
    method: "POST",
    headers: {
      authorization: token,
    },
    body: formData
    
  })
  .then(res => res.json())
  .then(data => {})
  .catch(err => {});
})





function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
