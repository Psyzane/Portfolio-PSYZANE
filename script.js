// FUNKY BUTTON ANIMATION
document.querySelectorAll(".funky_btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
        // Use clientX/clientY relative to the viewport
        const rect = btn.getBoundingClientRect();
        // Calculate coordinates relative to the button's top-left corner
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Set custom properties for pseudo-elements
        btn.style.setProperty("--x-pos", `${x}px`);
        btn.style.setProperty("--y-pos", `${y}px`);
    });

    btn.addEventListener("mouseleave", () => {
        // Reset the properties after the animation
        setTimeout(() => {
            btn.style.setProperty("--x-pos", "-10px");
            btn.style.setProperty("--y-pos", "-10px");
        }, 550);
    });
});

// PROJECTS SECTION
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY;
    let projectsElement = this.document.querySelector(".projects")

    if (!projectsElement){return;}
    if (currentScroll > lastScrollTop) {
        // Scrolling down, allow animation
        projectsElement.style.setProperty("--animation-play-state", "running");
    } else {
        // Scrolling up, keep it paused
        projectsElement.style.setProperty("--animation-play-state", "paused")
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});

// FORM SECTION
document.getElementById("form__btn").addEventListener("click", () => {
    let Ele = document.getElementById("form__btn");
    
    setTimeout(() => {
        Ele.classList.add("hold");
    },200);

    setTimeout(() => {
        Ele.classList.remove("hold");
    },2000);

});