document
.getElementById("search")
.addEventListener("input",e=>{

const term=e.target.value.toLowerCase()

document.querySelectorAll(".card")
.forEach(card=>{

const text=card.innerText.toLowerCase()

card.style.display=
text.includes(term)
? "block"
: "none"

})

})
