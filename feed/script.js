const container = document.querySelector(".container");
const createPostButton = document.querySelector(".create");
const homeButton = document.querySelector(".home");
const profileButton = document.querySelector(".profile");
const logout = document.querySelector(".logOut");
const likeButton = document.querySelector(".like");

const apiUrl = "https://connectup-backend.herokuapp.com";
// const apiUrl = "http://localhost:8000";

const token = localStorage.getItem("jwt");

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

likeButton.addEventListener("click", () => {
  if (token) {
    fetch(`${apiUrl}/posts/likes/:postId`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({
        userId, postId
      })
    })
      .then((res) => res.json())
      .then((data) => {
       
      })
      .catch((err) => {
        alert("Error updating like count");
        console.log(err);
      });
  }
});

let cardData = [];

createPostButton.addEventListener("click", () => {
  location.href = "/create/create.html";
});

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
    console.log(cardObj);

    const id = cardObj.postId;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insideHtml = `<div class="card-header"><div class="left-section">
      <img
    class="pfpp"
    src="https://robohash.org/${id}"
    alt=""
  />
    <div class="name">${name}</div></div><div class="right-section"><div class="like">${likes}
    </div><div class="icon"><img src="../assets/svg/likebutton.svg"></div> </div></div><div class="card-body"><p class="card-caption">${content}</p><img class="post-img" src="${image}" alt="" style={ { display: image ? 'block' : 'none' } }  /></div>`; //add username and like-count
    card.innerHTML = insideHtml;

    container.appendChild(card);
  });
};

const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");

  if (token) {
    fetch(`${apiUrl}/posts/getallposts`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        cardData = data.data;
        createPosts(data.data);
      })
      .catch((err) => {
        alert("Error fetching data");
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
