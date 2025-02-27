// This runs in a separate thread
self.onmessage = function(event) {
    var crease = true;
    var count1 = 20;
    document.body.style.transition = "background 20000s ease-in-out";
    function animate() {
        if (crease) {
          document.querySelector(
            "body"
          ).style.background = `linear-gradient(${(count1 += 0.5)}deg, #1087aa2e, #b4a10f36, white, white, white, #85d0e629, white, white, #e4939314, white, white, #81e44b4a, white, white, #ff8b8b45, #6da7ff40) no-repeat no-repeat`;
        } else {
          document.querySelector(
            "body"
          ).style.background = `linear-gradient(${(count1 -= 0.5)}deg, #1087aa2e, #b4a10f36, white, white, white, #85d0e629, white, white, #e4939314, white, white, #81e44b4a, white, white, #ff8b8b45, #6da7ff40) no-repeat no-repeat`;
        }
        if (count1 === 20) {
          crease = true;
        } else if (count1 === 80) {
          crease = false;
        }
        requestAnimationFrame(animate);
      }
  
      requestAnimationFrame(animate);
    self.postMessage(event);
};
