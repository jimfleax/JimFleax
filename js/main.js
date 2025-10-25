// Reetabrata Bhandari (c) 2025
((page) => {
  document.addEventListener("DOMContentLoaded", (e) => {
    let angle = 20;
let increasing = true;
setInterval(()=>{
  if (increasing) {
    angle += 0.5;
  } else {
    angle -= 0.5;
  }
  if (angle >= 80) increasing = false;
  if (angle <= 20) increasing = true;
  document.body.style.background = `linear-gradient(${angle}deg, 
    #1087aa2e, #b4a10f36, white, white, white, 
    #85d0e629, white, white, #e4939314, white, white, 
    #81e44b4a, white, white, #ff8b8b45, #6da7ff40)`;
}, 40);

    let keybindingEnabled = JSON.parse(
      localStorage.getItem("keybindings") ||
        (localStorage.setItem("keybindings", false), "false")
    );

    window.addEventListener("storage", (event) => {
      if (event.key === "keybindings") {
        keybindingEnabled = JSON.parse(event.newValue);
      }
    });
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, arguments);
      if (key === "keybindings") {
        keybindingEnabled = JSON.parse(value);
        window.dispatchEvent(
          new CustomEvent("keybindings-updated", { detail: keybindingEnabled })
        );
      }
    };
    page(1);
    document.querySelector("#pages").addEventListener("click", (e) => {
      if (e.target.tagName === "SPAN") {
        page([...e.target.parentNode.children].indexOf(e.target) + 1);
      }
    });

    document.querySelectorAll("#nav > svg").forEach((a, b) => {
      a.addEventListener("click", function () {
        page(b + 1);
      });
    });
    window.addEventListener("load", () => {
      document.querySelector("html").classList.remove("loading");
    });
    document.addEventListener("keydown", function (event) {
      if (keybindingEnabled && event) {
        var index = 0;
        document.querySelectorAll("#nav > svg").forEach((a, b) => {
          !a.classList.contains("active") || (index = b + 1);
        });
        if (event.key === "ArrowRight") {
          index < 4 ? index++ : (index = 1);
          page(index);
        } else if (event.key === "ArrowLeft") {
          index > 1 ? index-- : (index = 4);
          page(index);
        }
      }
      if (event.altKey && event.key === "k") {
        keybindingEnabled
          ? localStorage.setItem("keybindings", false)
          : localStorage.setItem("keybindings", true);
      }
    });

    document.querySelector("#keybindings").onclick = function () {
      var a = document.createElement("div");
      var b = document.createElement("div");
      b.id = "backdrop";
      a.id = "keyinfo";
      a.innerHTML = `<div id="keyinfo-header"><span>Keybindings</span><div id="keybinding-toggle"><label class="switch"> <input type="checkbox" ${
        keybindingEnabled ? 'checked=""' : ""
      }> <span class="slider round"></span> </label></div></div> <div id="key-shortcuts"> <div id="key-item"><span id="shortcutName">Navigate forward through pages</span><div id="shortcutContent"><div id="key">ctrl</div> + <div id="key">&gt;</div></div></div> <div id="key-item"><span id="shortcutName">Navigate backward through pages</span><div id="shortcutContent"><div id="key">ctrl</div> + <div id="key">&lt;</div></div></div> <div id="key-item"><span id="shortcutName">Turn keybindings on/off</span><div id="shortcutContent"><div id="key">alt</div> + <div id="key">k</div></div></div> </div>`;
      a.style.top = this.offsetTop + 80 + "px";
      document.body.append(a);
      document.body.append(b);
      a.style.left =
        this.offsetLeft - a.getBoundingClientRect().width / 2 + 25 + "px";
      document.querySelector("#backdrop").onclick = () => {
        a.remove();
        b.remove();
      };
      document.body.addEventListener("change", (e) => {
        if (e.target.matches(".switch > input")) {
          localStorage.setItem("keybindings", e.target.checked);
        }
      });
    };
  });
})((no = 1) => {
  document.querySelectorAll("#pages > span").forEach((a) => {
    a.classList.toggle("active", false);
  });
  document.querySelectorAll("#nav > svg").forEach((a) => {
    a.classList.toggle("active", false);
  });
  document
    .querySelector("#pages > span:nth-child(" + no + ")")
    .classList.toggle("active");
  document
    .querySelector("body > #nav > svg:nth-child(" + no + ")")
    .classList.toggle("active");
  document.querySelector("#app").scrollTop = 0;
  if (no === 1) {
    document.querySelector(
      "#container"
    ).innerHTML = `<div id="left"> <div id="profilepic" title="Yesss this is my facee!! 🥰"><div></div></div> </div> <div id="right"> <h1>Reetabrata Bhandari</h1> <span>Hello! I'm a self-taught computer programmer based in India. I love to cook delicious webpages, blending sleek design with robust backend. I am constantly learning newer recipies to add to my programming toolkit!</span> <div id="homebuttons"> <div onclick="window.open('https://github.com/jimfleax?tab=repositories', 'blank')"><span>View repos</span></div> <div onclick="window.open('mailto:reetabrata.bhandari@gmail.com')"><span>Mail me</span></div> </div> </div>`;
  } else if (no === 2) {
    document.querySelector(
      "#container"
    ).innerHTML = `<div id="left"><h2>About</h2><span><div>Hi there! I'm Reetabrata Bhandari—better known as Jim Fleax! 👋 I’m passionate about exploring computer languages and crafting innovative apps and websites. My goal is to create sleek, delicious interfaces that seamlessly blend with powerful logic and robust backends, resulting in responsive apps designed to make life simpler and more enjoyable. 👨‍💻✨</div><div><br></div><div>Beyond coding, I find joy in losing myself in fiction 📚️, vibing along my playlist 🎵, and watching good movies 🎬️. I thrive on learning, embracing every opportunity to dive deeper into the fascinating world of computer science. 🚀</div><div><br></div><div>Here, you’ll find a showcase of the apps I’ve built along my web development journey. Got feedback or spotted a bug? Don’t hesitate to share—I’m always eager to improve and grow!</div><div><br></div><div>Thanks for stopping by! ❤️</div></span> </div> <div id="right"> <h3>MERN Stack</h3> <div class="progress"> <div class="progress-bar" style="width: 90%;"> </div> </div> <h3>Python</h3> <div class="progress"> <div class="progress-bar" style="width: 80%;"> </div> </div> <h3>C Language</h3> <div class="progress"> <div class="progress-bar" style="width: 70%;"> </div> </div> <h3>Web3 & Blockchain</h3> <div class="progress"> <div class="progress-bar" style="width: 60%;"> </div> </div> </div>`;
  } else if (no === 3) {
    document.querySelector(
      "#container"
    ).innerHTML = `<div id="left"><h2>Projects</h2><span style=" margin-block: 50px; line-height: 26px; font-size: 18px; "><p>Throughout my web development journey, I have believed that hands-on experience and practice are the best ways to learn programming. 💻 I have been building various small websites, learning more from each one and improving on the next! 🚀</p> <p>Here are some of the web apps I have built. These are not my best work; they are just some projects I have worked on to enhance my web development skills. 🌟 Feel free to suggest improvements and provide feedback! ✉️ Check out the Contact page to reach out to me! 😊</p></span> </div> <div id="right"> <div id="appIcon" onclick="window.open('http://cosmicmath.vercel.app', 'blank')"> <img src="/media/cosmicmath.webp" style=" width: 4em; height: 4em; " loading="lazy"> <span>CosmicMath</span> </div> <div id="appIcon" onclick="window.open('http://reflecting.onrender.com', 'blank')"> <img src="/media/reflect.webp" style=" width: 4em; height: 4em; " loading="lazy"> <span>Reflect</span> </div> <div id="appIcon" onclick="window.open('http://flashers.onrender.com', 'blank')"> <img src="/media/flashers.webp" style=" width: 3.8em; height: 3.3em; " loading="lazy"> <span>Flashers</span> </div> <div id="appIcon" onclick="window.open('http://poetica.onrender.com', 'blank')"> <img src="/media/poetica.webp" style=" width: 3.8em; height: 3.3em; " loading="lazy"> <span>Poetica</span> </div> </div>`;
  } else if (no === 4) {
    document.querySelector(
      "#container"
    ).innerHTML = `<div style=" width: 100%; "><h2 style=" text-align: center; margin: 20px auto 0px auto; ">Contact</h2><span style="" id="contact"><span>Need me? I’m just a click away (or a slightly delayed response).</span><div id="locate"><svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 32 32" xml:space="preserve"><path class="feather_een" d="M16,1C9.925,1,5,5.925,5,12c0,6.494,5.727,12.988,8.916,16.101c1.159,1.131,3.009,1.131,4.167,0 C21.273,24.988,27,18.494,27,12C27,5.925,22.075,1,16,1z M17.392,27.373c-0.775,0.758-2.008,0.758-2.783,0 C11.523,24.353,6,18.096,6,12C6,6.486,10.486,2,16,2s10,4.486,10,10C26,18.096,20.477,24.353,17.392,27.373z M16,6 c-3.314,0-6,2.686-6,6s2.686,6,6,6s6-2.686,6-6S19.314,6,16,6z M16,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S18.757,17,16,17z"></path> </svg><span style=" color: #00000075; ">Birbhum, Bengal, India - 731101</span></div><br><br><span style="font-size: 14px;font-weight: 300;color: #000000b3;display: block;margin-bottom: 10px;text-align: center;">Socials</span> <div style=" display: flex; margin: auto; width: fit-content; filter: drop-shadow(0px 0px 4px #33418e4d); "> <svg onclick="window.open('https://github.com/jimfleax/')" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" viewBox="-143 145 512 512" xml:space="preserve" style="margin: 10px;background: linear-gradient(45deg, #000000, #000524, #3447b0);border-radius: 50%;fill: #ffffff;"> <g> <path d="M224.5,351.2c0.9-20.1-1.8-39.6-8.6-58.6c-0.9-2.4-2-3.3-4.5-2.6c-5.6,1.7-11.4,3-16.9,5c-15.2,5.5-29.1,13.5-42.6,22.2   c-1.4,0.9-3.5,1.5-5.2,1.2c-22.1-3.9-44.3-3.7-66.5-0.3c-2.2,0.3-5-0.2-6.8-1.3c-15.7-10.2-31.7-20.2-50-25   c-15.1-4-12-4.8-16.3,8.9c-5.1,16.4-7.1,33.4-6,50.6c0.1,1.2-0.8,2.7-1.6,3.8c-6.6,7.9-11.7,16.6-14.8,26.4c-6,19-4.8,38.2-1,57.3   c7.5,37.5,32.8,63.8,70.2,70.3c19.3,3.4,39.2,3.7,57.3,5.2c20.2-1.5,38.9-1.6,57.1-4.5c31.8-5.1,55.8-22,67.8-52.7   c4.2-10.7,6.5-22.4,7.9-33.8c3.1-25.2-1.2-48.8-18.4-68.7C225,353.8,224.5,352.4,224.5,351.2z M208.1,459.1   c-3.3,15.6-12.4,26.3-27.6,31.8c-14.7,5.4-29.9,7.6-45.4,8.6c-7.5,0.5-15,0.1-22.5,0.1c-20.2,0.4-40.4-0.4-59.9-6.2   c-24.5-7.3-35.5-21.9-36.2-47.5c-0.3-9.1,0.7-17.9,5-26.1c8.5-16.5,23.2-22.3,40.6-22.6c9.5-0.1,19.1,0.7,28.7,1.6   c20.1,1.8,40-0.1,60-1.2c8.8-0.5,17.8-0.7,26.4,0.8c18.5,3.2,32.5,21.6,32.8,42.3C210,446.8,209.3,453.1,208.1,459.1z"> </path> <path d="M56.1,424.8c-5.5,5.7-7.4,12.9-7.7,19.3c0,9.6,2.8,17.3,7.7,22.3c6.8,6.9,16.1,6.7,22.6-0.3c9.8-10.6,9.7-30.5,0-41   C72.2,418,62.7,417.9,56.1,424.8z"> </path> <path d="M148.2,424c-11.2,10.3-11.2,33,0,43.2c6.5,5.9,15.3,5.6,21.4-0.7c5.6-5.8,7.6-13.1,7.8-21c-0.2-7.9-2.2-15.1-7.9-20.9   C163.4,418.3,154.6,418.1,148.2,424z"> </path> </g> </svg> <svg onclick="window.open('https://www.reddit.com/u/jimfleax/')" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" viewBox="-143 145 512 512" xml:space="preserve" style="margin: 10px;background: linear-gradient(45deg, #000000, #330000, #ff0000);border-radius: 50%;fill: #fff;stroke: #fff;stroke-width: 5px;"> <g> <path d="M187.3,367.9c-1.4,0.9-2.3,0.8-3.6,0c-15.1-8.8-31.4-14.2-48.5-17.1c-5.8-1-11.6-1.6-17.6-2.3c4.8-13.6,9.5-27.1,14.3-40.7   c11.1,2.6,22,5.4,32.9,7.7c2.9,0.6,4,1.8,4.7,4.8c2.9,13.6,16,22.4,30.2,20.7c13-1.5,23.4-13.3,23.5-26.6   c0.1-12.3-7.8-23.1-19.5-26.6c-11.8-3.5-24.1,1.1-30.8,11.5c-1,1.5-1.8,1.7-3.5,1.3c-9.1-2.3-18.2-4.4-27.4-6.6   c-6.7-1.6-13.4-3.2-20.2-4.8c-0.4,1-0.7,1.8-1,2.6c-6.4,18.2-12.8,36.4-19.2,54.6c-0.5,1.5-1.2,2.2-2.9,2.2   c-3.2,0.1-6.3,0.3-9.5,0.6c-21,2.1-41.1,7.7-59.5,18.3c-1.6,0.9-2.7,1-4.3-0.1c-15.4-9.9-36.1-5.1-45.3,10.7   c-2.3,4-3.3,8.7-4.9,13.1c0,2.6,0,5.1,0,7.7c0.8,2.8,1.5,5.8,2.5,8.5c1.9,5.1,5.2,9.2,9.3,12.7c0.7,0.6,1.4,1.7,1.3,2.4   c-1.6,15.7,2.9,29.5,12.2,42c10.5,14.3,24.6,24,40.6,31.2c23.9,10.7,49.1,14.6,75.2,13.1c22.7-1.3,44.3-6.6,64.4-17.6   c14.7-8.1,27.2-18.5,35.8-33.2c6.3-10.8,9-22.4,7.9-34.9c-0.1-0.7,0.1-1.8,0.6-2.2c6.9-5.5,11.1-12.6,12.5-21.4   c0-0.2,0.2-0.5,0.3-0.7c0-2.7,0-5.5,0-8.2c-0.2-0.4-0.4-0.7-0.5-1.1C233.1,366.1,207.3,354.9,187.3,367.9z M195.9,302.4   c6.4,0,11.5,5.1,11.5,11.6c0,6.4-5.1,11.6-11.5,11.7c-6.4,0-11.8-5.3-11.7-11.7C184.2,307.5,189.5,302.3,195.9,302.4z M-6.1,404   c-4-6-3.5-14.2,1.1-19.7s12.2-7.7,18.4-5.1C5.3,386.2-1.4,394.3-6.1,404z M198.5,457.4c-9.3,11.8-21.6,19.5-35.2,25.3   c-18.2,7.7-37.3,10.9-59.6,10.9c-21.2-0.2-44-4.7-65.1-16.2c-9.9-5.4-18.7-12.3-25.4-21.6C0.3,438,0.8,417.3,14.5,400.2   c9.4-11.7,21.6-19.5,35.3-25.2c22-9.1,44.9-12.1,68.5-10.4c19.9,1.4,38.9,6.2,56.4,16c9.7,5.4,18.4,12.2,25,21.3   C212.6,419.6,212.2,440,198.5,457.4z M219.6,404c-2.9-4.4-5.6-9-8.9-13.1c-3.2-4.1-7-7.8-10.7-11.8c6.3-2.6,14.1-0.3,18.7,5.6   C223.2,390.3,223.5,398.5,219.6,404z"> </path> <path d="M140.6,455.1c-3.5,2.4-7.1,4.8-11,6.4c-11.8,4.6-24.1,5.1-36.6,2.8c-7-1.3-13.7-3.6-19.2-8.5c-3.8-3.4-8.6-3.5-11.6-0.1   c-3.1,3.4-2.9,8.3,1,11.6c3.3,2.7,6.8,5.2,10.6,7.1c10.2,5.2,21.2,6.8,32.6,7.4c6.7-0.9,13.4-1.5,20-2.9   c9.2-1.9,17.7-5.6,24.8-12.1c3.3-3.1,3.5-7.8,0.6-11C148.8,452.6,144.2,452.6,140.6,455.1z"> </path> <path d="M146.4,393.8c-12.2-0.3-22,9.1-22.2,21.1c-0.2,11.5,9.3,21.3,20.7,21.5c12.1,0.2,21.7-9,22-21   C167.1,403.9,157.8,394.1,146.4,393.8z"> </path> <path d="M91.3,415.5c0.1-11.7-9.3-21.5-20.8-21.6c-12-0.2-21.6,9.1-21.8,21.1c-0.2,11.6,9.1,21.3,20.6,21.5   C81.3,436.7,91.2,427.3,91.3,415.5z"> </path> </g> </svg> <svg onclick="window.open('https://dribbble.com/jimfleax')" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" viewBox="-143 145 512 512" xml:space="preserve" style="margin: 10px;background: linear-gradient(45deg, #000000, #0b2e00, #009637);border-radius: 50%;fill: #fff;stroke: #fff;stroke-width: 5px;"> <g> <path d="M230.9,351.1c-3.2-7.6-7.2-14.9-11.8-21.7c-4.6-6.8-9.8-13.1-15.6-18.9c-5.8-5.8-12.2-11.1-18.9-15.6   c-6.8-4.6-14.2-8.6-21.7-11.8c-7.7-3.3-15.8-5.8-24.1-7.5c-8.4-1.7-17.1-2.6-25.8-2.6s-17.4,0.9-25.8,2.6c-8.2,1.7-16.3,4.2-24,7.5   c-7.6,3.2-14.9,7.2-21.7,11.8c-6.8,4.6-13.1,9.8-18.9,15.6c-5.8,5.8-11,12.2-15.6,18.9c-4.6,6.8-8.6,14.1-11.8,21.7   c-3.3,7.7-5.8,15.8-7.5,24.1c-1.7,8.4-2.6,17.1-2.6,25.8s0.9,17.4,2.6,25.8c1.7,8.2,4.2,16.3,7.5,24c3.2,7.6,7.2,14.9,11.8,21.8   c4.6,6.8,9.8,13.1,15.6,18.9s12.2,11,18.9,15.6c6.8,4.6,14.2,8.6,21.7,11.8c7.7,3.3,15.8,5.8,24,7.5c8.4,1.7,17.1,2.6,25.8,2.6   s17.3-0.9,25.8-2.6c8.2-1.7,16.3-4.2,24.1-7.5c7.6-3.2,14.9-7.2,21.7-11.8c6.8-4.6,13.1-9.8,18.9-15.6s11-12.2,15.6-18.9   c4.6-6.8,8.6-14.2,11.8-21.8c3.3-7.7,5.8-15.8,7.5-24c1.7-8.4,2.6-17.1,2.6-25.8c0-8.7-0.9-17.4-2.6-25.8   C236.7,367,234.2,358.9,230.9,351.1z M113,291.7c27.7,0,52.9,10.3,72.2,27.3c-0.3,0.4-15.8,24.1-57.1,39.6   c-18.7-34.3-39.2-61.6-40.9-63.8C95.5,292.8,104.1,291.7,113,291.7z M86.8,294.8C86.8,294.8,86.8,294.8,86.8,294.8   C86.7,294.8,86.8,294.8,86.8,294.8z M66.4,302.1c1.5,1.9,21.7,29.4,40.6,63C54.5,379,9,378.5,6.1,378.4   C13.1,344.6,35.9,316.5,66.4,302.1z M31.7,474C31.7,474,31.7,474,31.7,474c-17.4-19.3-28-44.9-28-73c0-1.2,0.1-2.3,0.1-3.4   c1.9,0,55.9,1.3,112.2-15.6c3.1,6.1,6.1,12.4,8.9,18.6c-1.4,0.4-2.9,0.8-4.3,1.3C61.6,421,31.7,474,31.7,474z M113,510.3   c-25.5,0-48.8-8.7-67.3-23.3c0.1,0.1,0.1,0.1,0.1,0.1s21-45.7,85.8-68.3c0.2-0.1,0.5-0.2,0.7-0.2c15.4,40,21.7,73.4,23.3,83   C142.6,507.2,128.1,510.3,113,510.3z M174.1,491.7c-1.1-6.6-6.9-38.7-21.3-78.1c35.3-5.6,65.9,4,68.1,4.8   C216.1,448.8,198.6,475.1,174.1,491.7z M146.2,396.3c-0.8-1.9-1.6-3.7-2.4-5.6c-2.3-5.4-4.7-10.6-7.3-15.9   c43.2-17.6,60.7-43,60.9-43.3c15.3,18.7,24.6,42.5,24.9,68.4C220.7,399.6,183.7,391.6,146.2,396.3z"> </path> </g> </svg> </div> <br> <br> <div id="mail" onclick="window.open('mailto:reetabrata.bhandari@gmail.com')"> <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24"> <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="#ffffff"></path> </svg><span>Mail <b>reetabrata.bhandari@gmail.com</b></span> </div> <br> </span> </div>`;
  }
});
