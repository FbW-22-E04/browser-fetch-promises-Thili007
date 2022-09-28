// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

new Promise(() =>
  setTimeout(() => {
    document.querySelector(".modal").style.display = "block";
  }, 6000)
);

document
  .querySelector(".close")
  .addEventListener(
    "click",
    () => (document.querySelector(".modal").style.display = "none")
  );
