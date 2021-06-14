const select = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener("click", () => {
  select.classList.toggle("active")
  input.focus()
})
