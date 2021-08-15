const img1 = document.querySelector(".img1");

document.querySelector(".btn").addEventListener("click", () => {
  gsap.fromTo(
    img1,
    {
      autoAlpha: 0,
    },
    {autoAlpha: 1, duration: 2}
  );
});
