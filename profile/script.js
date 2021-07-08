const container = document.querySelector(".container");
const createPostButton = document.querySelector(".create");
const homeButton = document.querySelector(".home");
const profileButton = document.querySelector(".profile");
const logout = document.querySelector(".logOut");
//  const editPostButton = document.querySelector(".edit");


const apiUrl = "https://connectup-backend.herokuapp.com";
// const apiUrl = "http://localhost:8000";

const token = localStorage.getItem("jwt");

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

document.getElementById("pfpImg").src = `https://robohash.org/1`;

let cardData = [];

createPostButton.addEventListener("click", () => {
  location.href = "/create/create.html";
});

// editPostButton.addEventListener("click", () => {
//   location.href = "/update/update.html";
// });

homeButton.addEventListener("click", () => {
  location.href = "/feed/feed.html";
});

profileButton.addEventListener("click", () => {
  location.href = "/profile/profile.html";
});




const createPosts = (array) => {
  container.innerHTML = "";

  
  
  array.forEach((cardObj) => {

   

    const { name, content, image, likes } = cardObj;
          
      const id = cardObj.postId;

      const card = document.createElement("div");
      card.classList.add("card");
      card.id = id;

      const insideHtml = `<div class="card-header"><div class="left-section">
      <img class="pfpp" src="https://robohash.org/${id}" alt="" />
    <div class="name">${name}</div></div><div class="right-section"><div class="like">${likes}
    </div><div class="icon"><img src="../assets/svg/likebutton.svg"></div><img class="edit" src="../assets/svg/editbutton.svg" alt="editButton"/></div></div><div class="card-body"><p class="card-caption">${content}</p><img class="post-img" src="${image}" alt="" style={ { display: image ? 'block' : 'none' } }  /></div>`; //add username and like-count; div before card body
      card.innerHTML = insideHtml;

      container.appendChild(card);
    
    
  });
};



const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
  if (token) {
    fetch(`${apiUrl}/posts/getposts`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        cardData = data.data;
        createPosts(data.data);
      })
      .catch((err) => {
        alert("Error Fetching data");
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
