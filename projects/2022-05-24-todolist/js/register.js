const register = document.querySelector("#register");
const notification = document.querySelector(".notification");
const notificationClose = document.querySelector(".notification-close");

register.addEventListener("click", () => {
  notification.classList.add("reveal");
  notification.classList.add("show");
  setTimeout(() => {
    setTimeout(() => {
      notification.classList.remove("reveal");
    }, 1000);
    notification.classList.remove("show");
  }, 2000);
});

notificationClose.addEventListener("click", () => {
  notification.classList.remove("reveal");
  notification.classList.remove("show");
});
