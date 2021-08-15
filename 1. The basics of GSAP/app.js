const img1 = document.querySelector(".img1");

gsap.from("img", {
  autoAlpha: 0,
  y: -100,
  ease: "power4",
  duration: 2,
  delay: 0.8,
  stagger: (index) => {
    console.log(index);
  },
  // stagger: {
  //   each: 0.5,
  //   from: "end",
  // },
});
