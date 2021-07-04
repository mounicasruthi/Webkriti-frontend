const container = document.querySelector(".container");
const logout = document.querySelector(".logout");

const apiUrl = "";

const token = localStorage.getItem("jwt");

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

let cardData = [];

createNoteButton.addEventListener("click", () => {
  location.href = "/create/create.html";
});

const create = (array) => {
  cardContainer.innerHTML = "";

  array.forEach((cardObj) => {
    const { content, image } = cardObj;
    const id = cardObj.postId;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insideHtml = `<div class="card-header"><div class="left-section"><span class="dot"></span><div class="name">${username}</div></div><div class="right-section"><div class="like">${like-count}</div><div class="icon"><img src="../assets/svg/likebutton.svg"></div> </div></div><div class="card-body"><p class="card-caption">${content}</p><img class="post-img" src="../assets/images/postImg.png" alt="postImg"/></div>`

    card.innerHTML = insideHtml;

    cardContainer.appendChild(card);
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
        cardData = data.data;
        createNotes(data.data);
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