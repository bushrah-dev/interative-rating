const container = document.querySelector(".container")
const thank = document.querySelector(".thank")
const submitBtn = document.getElementById("submit-rating")
const rateAgain = document.getElementById("rate-again")
const ratings = document.querySelectorAll(".btn")
const normalRating = document.getElementById("rating")

submitBtn.addEventListener("click", () => {
  container.style.display = "none"
  thank.classList.remove("hidden")

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        normalRating.innerHTML = rating.innerHTML
    })
  })
})

rateAgain.addEventListener("click", () => {
  container.style.display = "block"
  thank.classList.add("hidden")
})