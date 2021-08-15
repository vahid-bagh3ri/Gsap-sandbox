const img1 = document.querySelector(".img1");

document.querySelector(".btn").addEventListener("click", () => {
  gsap.from(img1, {
    autoAlpha: 0,
    rotation: 45,
    scale: 0.5,
    x: 100,
    y: -100,
    duration: 2,
  });
});
