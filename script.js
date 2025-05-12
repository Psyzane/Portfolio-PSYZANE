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

// document.querySelectorAll(".funky_btn").forEach((btn) => {
//     btn.addEventListener("mouseover", (e) => {
//         const x = (e.pageX - btn.offsetLeft);
//         const y = (e.pageY - btn.offsetTop);

//         console.log(btn.offsetLeft)
//         console.log(e.pageX)

//         btn.style.setProperty("--y-pos", y + "px");
//         btn.style.setProperty("--x-pos", x + "px");
//     });
//     btn.addEventListener("mouseout", (e) => {

//         setTimeout(()=>{
//             const x = -10 ;
//             const y = -10;

//             btn.style.setProperty("--y-pos", y + "px");
//             btn.style.setProperty("--x-pos", x + "px");
//         },550)
        
//     })
// });
