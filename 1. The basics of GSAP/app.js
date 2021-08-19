const TL = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power4.out",
  },
  // repeat: -1, // infinite loop
  // yoyo: true,
  // paused: true,
  // onComplete: () => console.log("complete"),
  // onStart: () => console.log("start"),
});

TL.from(".img1", {autoAlpha: 0, y: -50});
TL.from(".img2", {autoAlpha: 0, y: -50}, "-=0.75"); // relative to it's parent
TL.from(".img3", {autoAlpha: 0, y: -50}, 3); // absolute
TL.from("h1", {autoAlpha: 0, y: -50}, "<"); // cascade simultaneously with it's parent
TL.from("p", {autoAlpha: 0, y: -50, ease: "power4.out"}, ">"); // default behavior cascade after his parent

// setTimeout(() => {
//   TL.play();
// }, 1500);

setTimeout(() => {
  TL.restart();
}, 7000);
