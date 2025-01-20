((page) => {
    document.addEventListener("DOMContentLoaded", (e) => {
        let increasing = true;
        let angle = 10;
        const body = document.querySelector("body");

        setInterval(() => {
            const gradient = `linear-gradient(${angle}deg, #1087aa2e, #b4a10f36, white, white, white, #85d0e629, white, white, #e4939314, white, white, #81e44b4a, white, white, #ff8b8b45, #6da7ff40)`;
            body.style.background = gradient;
            if (increasing) {
                angle += 2;
            } else {
                angle -= 2;
            }
            if (angle === 10) {
                increasing = true;
            } else if (angle === 80) {
                increasing = false;
            }
        }, 200);

        page(1);
        const pageSpans = document.querySelectorAll("#pages > span");
        const navSvgs = document.querySelectorAll("#nav > svg");

        pageSpans.forEach((span, index) => {
            span.addEventListener("click", () => page(index + 1));
        });

        navSvgs.forEach((svg, index) => {
            svg.addEventListener("click", () => page(index + 1));
        });
    });
})((no = 1) => {
    document.querySelectorAll("#pages > span").forEach((span) => {
        span.classList.remove("active");
    });
    document.querySelectorAll("#nav > svg").forEach((svg) => {
        svg.classList.remove("active");
    });
    document.querySelector(`#pages > span:nth-child(${no})`).classList.add("active");
    document.querySelector(`body > #nav > svg:nth-child(${no})`).classList.add("active");

    const container = document.querySelector("#container");
    if (no === 1) {
        container.innerHTML = `<div id="left"> <div id="profilepic"><div></div></div> </div> <div id="right"> <h1>Reetabrata Bhandari</h1> <span>Hello! I'm a self-taught computer programmer with a passion for web development and open-source projects. Welcome to my personal website!</span> </div>`;
    } else if (no === 2) {
        container.innerHTML = `<div id="left"><h2>About</h2><span><div>Hi there! I'm Reetabrata Bhandari—better known as Jim Fleax! 👋 I’m passionate about exploring creative solutions in the world of technology. Let’s dive into my journey and achievements.</div></span></div>`;
    } else if (no === 3) {
        container.innerHTML = `<div id="left"><h2>Projects</h2><span style=" margin-block: 50px; line-height: 26px; font-size: 18px; "><p>Throughout my web development journey, I have worked on numerous projects that showcase my skills and creativity. Feel free to explore and reach out if you have any questions!</p></span></div>`;
    } else if (no === 4) {
        container.innerHTML = `<div style=" width: 100%; "><h2 style=" text-align: center; margin: 20px auto 0px auto; ">Contact</h2><span style="" id="contact"><span>Need more information or want to work together? Feel free to contact me through the provided channels. I look forward to hearing from you!</span></div>`;
    }
});
