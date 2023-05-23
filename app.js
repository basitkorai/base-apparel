const form = document.querySelector(".content__form");
const enteredEmail = document.querySelector("#email");
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
  if (!regex.test(enteredEmail.value)) {
    e.preventDefault();
    enteredEmail.closest(".form-group").classList.add("alert");
  }
});

enteredEmail.addEventListener("input", () =>
  enteredEmail.closest(".form-group").classList.remove("alert")
);
