const hamburgerMenu = document.querySelector("#hamburger-menu");
const header = document.querySelector("header");

const favourite = document.querySelector("#favourite");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("open-menu");
});

favourite.addEventListener("click", () => {
  if (favourite.textContent === "🤍") {
    favourite.textContent = "❤️";
  } else {
    favourite.textContent = "🤍";
  }
});
