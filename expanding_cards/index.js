const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActionclasses()
    panel.classList.add("active")
  })
})

function removeActionclasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}
