// Dark Mode (saved)
const toggleBtn = document.getElementById("themeToggle");

function applyTheme(imageName, iconClass) {
  document.body.style.backgroundImage = `url(${imageName})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
  toggleBtn.innerHTML = `<i class="${iconClass}"></i>`;
}
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "bg1") {
  applyTheme("89781.jpg", "fa-solid fa-sun");
} else {
  applyTheme("rm118-ken-12.jpg", "fa-solid fa-moon");
}

toggleBtn.addEventListener("click", () => {

  if (localStorage.getItem("theme") === "bg1") {
    localStorage.setItem("theme", "bg2");
       document.querySelectorAll(".logo h2, .logo p, .nav a , .hero-text h1,.hero-text h3,.hero-text p,.section h2,.section p,.footer pre").forEach(ele=>{
        ele.style.color="#0d1b2a";
       })
    applyTheme("rm118-ken-12.jpg", "fa-solid fa-moon");
  } else {
    localStorage.setItem("theme", "bg1");
    document.querySelectorAll(".logo h2, .logo p, .nav a , .hero-text h1,.hero-text h3,.hero-text p,.section h2,.section p,.footer pre").forEach(ele=>{
      ele.style.color="white";
    }) 
    applyTheme("89781.jpg", "fa-solid fa-sun");
  }

});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const feedback = {
    name:this[0].value,
    email:this[1].value,
    message:this[2].value,
    date:new Date().toLocaleString()
  };

  let data = JSON.parse(localStorage.getItem("feedback")) || [];
  data.push(feedback);
  localStorage.setItem("feedback", JSON.stringify(data));

  alert("Feedback Saved Successfully ");
  this.reset();
});