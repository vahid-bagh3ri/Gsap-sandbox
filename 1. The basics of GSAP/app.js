const img1 = document.querySelector(".img1");

gsap.from(img1, {
  autoAlpha: 0,
  y: -100,
  rotation: 90,
  ease: "bounce.out",
  duration: 2,
  delay: 0.5,
  repeatDelay: 0.2,
  repeat: -1,
  yoyo: true,
});
