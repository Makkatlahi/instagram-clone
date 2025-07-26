// const likeButtonEl = document.querySelector(".post__respond--like");
const likeButtonEl = document.getElementById("heartIcon");
const numLikesEl = document.querySelector("#numLikes");
const articlesEl = document.querySelector(".articles");

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function renderPost() {
  articlesEl.innerHTML = "";
  let articles = "";
  for (let i = 0; i < posts.length; i++) {
    articles += `
        <article class="container">
          <section class="profile">
            <img
              class="profile__avatar"
              src="${posts[i].avatar}"
              alt="${posts[i].name}"
            />
            <div class="profile__info">
              <h2 class="profile__info--name">${posts[i].name}</h2>
              <p class="profile__info--location">${posts[i].location}</p>
            </div>
          </section>
          <section class="post">
            <img
              class="post__img"
              src="${posts[i].post}"
              alt="${posts[i].name}"
            />
            <div class="post__respond">
              <button class="post__respond--like">
                <img
                  class="post__respond--like-img"
                  id="heartIcon"
                  src="./images/icon-heart.png"
                  alt="heart outline."
                />
                <img
                  class="hidden"
                  id="heartIconLiked"
                  src="./images/heartIcon.png"
                  alt="heart outline."
                />
              </button>
              <button class="post__respond--comment">
                <img
                  id="commentIcon"
                  src="./images/icon-comment.png"
                  alt="Comment icon."
                />
              </button>
              <button class="post__respond--dm">
                <img
                  id="messageIcon"
                  src="./images/icon-dm.png"
                  alt="Direct Message"
                />
              </button>
            </div>
            <div class="post__feedback">
              <p class="post__feedback--likes embolden">
                <span id="numLikes">${posts[i].likes}</span> likes
              </p>
              <p class="post__feedback--comments">
                <span class="embolden">${posts[i].username}</span> ${posts[i].comment}
              </p>
            </div>
          </section>
        </article>
`;
  }
  articlesEl.innerHTML = articles;
}

renderPost();
