var elem = document.querySelector(".ani");
var chotu = document.querySelector(".chotu");
elem.addEventListener("mouseenter", function () {
  console.log("entry");
  gsap.to(chotu, {
    scale: 1,
    opacity: 1,
  });
});
elem.addEventListener("mouseleave", function () {
  console.log("exit");
  gsap.to(chotu, {
    scale: 0,
    opacity: 0,
  });
});
elem.addEventListener("mousemove", function (dets) {
  gsap.to(chotu, {
    x: dets.x - 50,
    y: dets.y - 60,
  });
});
