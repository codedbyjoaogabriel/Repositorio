const viewer=document.getElementById("viewer")
const frame=document.getElementById("frame")

function openViewer(url){

frame.src=url

viewer.style.display="block"

document.body.style.overflow="hidden"

}

document.getElementById("close").onclick=()=>{

viewer.style.display="none"

frame.src=""

document.body.style.overflow="auto"

}

window.addEventListener("keydown",e=>{

if(e.key==="Escape"){

viewer.style.display="none"

}

})
