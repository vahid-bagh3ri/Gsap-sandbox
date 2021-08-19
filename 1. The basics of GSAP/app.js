const TL = gsap.timeline();

TL.from(".img1", {autoAlpha: 0, y: -50, duration: 1});
TL.from(".img2", {autoAlpha: 0, y: -50, duration: 1}, "-=0.75"); // relative to it's parent
TL.from(".img3", {autoAlpha: 0, y: -50, duration: 1}, 3); // absolute
TL.from("h1", {autoAlpha: 0, y: -50, duration: 1}, "<"); // cascade simultaneously with it's parent
TL.from("p", {autoAlpha: 0, y: -50, duration: 1}, ">"); // default behavior cascade after his parent
