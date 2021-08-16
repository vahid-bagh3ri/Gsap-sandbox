const img1 = document.querySelector(".img1");

gsap.to(".btn", {
  delay: 0.8,
  duration: 0.4,
  stagger: 0.2,
  x: "random([20,50,80,-90,-50])",
  // x: "random(-100,100,10)",
});
