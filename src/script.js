function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openDemoModal(title, videoSrc) {
    const modal = document.getElementById("demo-modal");
    const video = document.getElementById("demo-video");
    const modalTitle = document.getElementById("demo-modal-title");

    modalTitle.textContent = title;
    video.src = videoSrc;
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    video.currentTime = 0;
    video.play();
}

function closeDemoModal() {
    const modal = document.getElementById("demo-modal");
    const video = document.getElementById("demo-video");
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    video.pause();
    video.removeAttribute("src");
    video.load();
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeDemoModal();
    }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".floating-nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});




