// window.addEventListener("gamestarted", ev => console.log("gamestarted"))
// window.addEventListener("letter", ev => console.log("letter"))
// window.addEventListener("correctletter", ev => console.log("correctletter"))
// window.addEventListener("wrongletter", ev => console.log("wrongletter"))
// window.addEventListener("word", ev => console.log("word"))
// window.addEventListener("correctword", ev => console.log("correctword"))
// window.addEventListener("wrongword", ev => console.log("wrongword"))
// window.addEventListener("endgame", ev => console.log("endgame"))

const score = document.querySelector("main div.score")
const correctTypedWords = document.createElement("span")
let couterCorrectTypedWords = 0
score.append(correctTypedWords)
window.addEventListener("correctword", ev => {
  couterCorrectTypedWords++
  correctTypedWords.innerText = couterCorrectTypedWords + " palavras corretas"
})

const audio = new Audio("plugins/musiga.mp3")

const eventsInteract = [
    "click",
    "keydown",
    "scroll",
]

function firstPlay() {
    eventsInteract.forEach(evName => window.removeEventListener(evName, firstPlay))
    console.log("asdasd")
    audio.play()
}

eventsInteract.forEach(evName => window.addEventListener(evName, firstPlay))