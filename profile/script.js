window.onload = choosePfp;


const pfp = new Array("/assets/images/cat.png","/assets/images/lion.png", "/assets/images/owl.png");

function choosePfp() {
     const randomNum = Math.floor(Math.random() * pfp.length);
     document.getElementById("pfpImg").src = pfp[randomNum];
}


const container = document.querySelector(".container");
const createPostButton = document.querySelector(".create");
const editPostButton = document.querySelector(".edit");
const homeButton = document.querySelector(".home");
const profileButton = document.querySelector(".profile");
const logout = document.querySelector(".logOut");

const apiUrl = "https://connectup-backend.herokuapp.com";
// const apiUrl = "http://localhost:8000";

const token = localStorage.getItem("jwt");

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

let cardData = [];

createPostButton.addEventListener("click", () => {
  location.href = "/create/create.html";
});

editPostButton.addEventListener("click", () => {
  location.href = "/update/update.html";
});

homeButton.addEventListener("click", () => {
  location.href = "/feed/feed.html";
});

profileButton.addEventListener("click", () => {
  location.href = "/profile/profile.html";
});

const createPosts = array => {
  container.innerHTML = "";

  array.forEach(cardObj => {
    

    if(image) {
      const { content, image } = cardObj;
    const id = cardObj.postId;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;
    
    const insideHtml = `<div class="card-header"><div class="left-section"><span class="dot"></span><div class="name">{username}</div></div><div class="right-section"><div class="like">{like-count}
    </div><div class="icon"><img src="../assets/svg/likebutton.svg"></div> </div></div><div class="card-body"><p class="card-caption">${content}</p><img class="post-img" src="${image}" alt="postImg"/></div>`; //add username and like-count
    }
    else {
      const { content } = cardObj;
    const id = cardObj.postId;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;
      const insideHtml = `<div class="card-header"><div class="left-section"><span class="dot"></span><div class="name">{username}</div></div><div class="right-section"><div class="like">{like-count}
    </div><div class="icon"><img src="../assets/svg/likebutton.svg"></div> </div></div><div class="card-body"><p class="card-caption">${content}</p></div>`; //add username and like-count
    }

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
      .then(res => res.json())
      .then(data => {
        cardData = data.data;
        createPosts(data.data);
      })
      .catch(err => {
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

