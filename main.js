let nav = document.querySelectorAll("nav ul a")

nav.forEach((a)=>{
  a.addEventListener("click", ()=>{
nav.forEach((link)=>{
  link.classList.remove("active")
})
a.classList.add("active")
  })
})