const likeButtonEl = document.querySelector(".post__respond--like");
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

function handleLike(event) {
  // Since the original html articles were cleared out, we have to
  // listen for the event on the parent element
  if (
    event.target.closest(".post__img") ||
    event.target.closest(".post__respond--like")
  ) {
    console.log("double clicked!");
    const likesSpan = event.target.closest(".post").querySelector(".numLikes");
    likesSpan.textContent = parseInt(likesSpan.textContent) + 1;

    // swap out the heart outline for a filled-in heart
    const heartEl = event.target
      .closest(".post")
      .querySelector(".post__respond--like-img");
    heartEl.classList.add("hidden");
    const filledHeartEl = event.target
      .closest(".post")
      .querySelector(".post__respond--liked-img");
    filledHeartEl.classList.remove("hidden");
  }
}

//listen for the event on the parent element
articlesEl.addEventListener("dblclick", handleLike);

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
                  src="./images/icon-heart.png"
                  alt="heart outline."
                />
                <img
                  class="post__respond--liked-img hidden"
                  src="./images/heartIcon.png"
                  alt="heart outline."
                />
              </button>
              <button class="post__respond--comment">
                <img
                  class="post__respond--comment-img"
                  src="./images/icon-comment.png"
                  alt="Comment icon."
                />
              </button>
              <button class="post__respond--dm">
                <img
                  class="post__respond--dm-img"
                  src="./images/icon-dm.png"
                  alt="Direct Message"
                />
              </button>
            </div>
            <div class="post__feedback">
              <p class="post__feedback--likes embolden">
                <span class="numLikes">${posts[i].likes}</span> likes
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
