const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId");
const updateButton = document.querySelector(".submit-button");
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
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const textInput = document.querySelector(".text-content");
    const fileInput = document.querySelector(".image-content-input");
    const formData = new FormData();
    formData.append("content" ,textInput.value);
    formData.append("image" ,fileInput.files[0]);
    fetch(`${apiUrl}/posts/update/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: formData
      
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then((data) => {
      if (data.message) {
        location.href = "/profile/profile.html";
      }
    })
    .catch((err) => {
      alert("Could not update post. Please try again.");
      console.log(err);
    });
  })
  

// updateButton.addEventListener("click", () => {
//   const content = document.querySelector(".post-content").value;
//   const image = document.querySelector(".post-image").value;

//   if (token) {
//     fetch(`${apiUrl}/posts/update/${postId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: token,
//       },
//       body: JSON.stringify({ content, image }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.message) {
//           location.href = "/profile/profile.html";
//         }
//       })
//       .catch((err) => {
//         alert("Could not update post. Please try again.");
//         console.log(err);
//       });
//   }
// });

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  