const img1 = document.querySelector(".img1");

gsap.to(img1, {
  x: 100,
  duration: 1,
  repeat: 1,
  onComplete: () => console.log("COMPLETE"),
  onStart: () => console.log("START"),
  onUpdate: () => console.log("UPDATE"),
  onRepeat: () => console.log("REPEAT"),
});
