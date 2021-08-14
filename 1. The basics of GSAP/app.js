const img1 = document.querySelector(".img1");

const index = 1;

gsap.to(`.img1${index}`, {
  x: 100,
  y: 100,
  rotation: "45deg",
  backgroundColor: "red",
  duration: 2,
});
