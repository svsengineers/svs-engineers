// ============================
// SVS Engineers Website Script
// ============================

// Sticky Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 60) {
        navbar.style.background = "#0A2C5A";
        navbar.style.padding = "10px 0";
    } else {
        navbar.style.background = "rgba(10,44,90,.95)";
        navbar.style.padding = "15px 0";
    }
});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fadeUp");

        }

    });

});

document.querySelectorAll("section").forEach((section) => {

    observer.observe(section);

});

// Scroll to Top Button

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "topBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.right = "25px";
scrollBtn.style.bottom = "95px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#1E88E5";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "24px";
scrollBtn.style.display = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Highlight Active Menu

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// Console Message

console.log("SVS Engineers Website Loaded Successfully");