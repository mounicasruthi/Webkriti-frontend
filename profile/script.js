const container = document.querySelector(".container");
// const container2 = document.querySelector(".container2");
const createPostButton = document.querySelector(".create");
const homeButton = document.querySelector(".home");
const profileButton = document.querySelector(".profile");
const logout = document.querySelector(".logOut");
const updatePostButton = document.querySelector(".updateicon");
const username = document.querySelector(".name");

const apiUrl = "https://connectup-backend.herokuapp.com";
// const apiUrl = "http://localhost:8000";

const token = localStorage.getItem("jwt");

let user = {};

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

// document.getElementById("pfpImg").src = `https://robohash.org/1`;

let cardData = [];

createPostButton.addEventListener("click", () => {
  location.href = "/create/create.html";
});

updatePostButton.addEventListener("click", () => {
  location.href = "/update/update.html";
});

homeButton.addEventListener("click", () => {
  location.href = "/feed/feed.html";
});

profileButton.addEventListener("click", () => {
  location.href = "/profile/profile.html";
});

const userProfile = array => {
  container2.innerHTML = "";

  array.forEach(cardObj => {
    const { name } = cardObj;

    const email = cardObj.email;

    const card = document.createElement("div");

    // document.getElementById("pfpImg").src = `https://robohash.org/${email}`;

    const insideHtml = `<div class="profilePic"><img id="pfpImg" src="https://robohash.org/${email}" alt="" /></div> <div class="card2">
    <div class="name">${name}</div>
  </div>`;

    card.innerHTML = insideHtml;

    // container2.appendChild(card);
  });
};

const createPosts = array => {
  container.innerHTML = "";

  array.forEach(cardObj => {
    const { name, content, image } = cardObj;

    const id = cardObj.postId;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insideHtml = `<div class="card-header"><div class="left-section">
      <img class="pfpp" src="https://robohash.org/${id}" alt="" />
    <div class="name">${name}</div></div><div class="right-section"><div class="like">{like-count}
    </div><div class="icon"><img src="../assets/svg/likebutton.svg"></div> <div class="updateicon"><img src="../assets/svg/updatebutton.svg"></div> </div></div><div class="card-body"><p class="card-caption">${content}</p><img class="post-img" src="${image}" alt="" style={ { display: image ? 'block' : 'none' } }  /></div>`; //add username and like-count; div before card body
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
        userProfile(data.data);
      })
      .catch(err => {
        alert("Error Fetching data");
        console.log(err);
      });
    fetch(`${apiUrl}/auth/getuser`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        user = data;
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
