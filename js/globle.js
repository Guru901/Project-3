Shery.mouseFollower();

Shery.imageMasker(".hvr-img", {
  mouseFollower: true,
  text: "Buy Now",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  zoom: 1.5,
});

Shery.makeMagnet(".mgn", {
  duration: 1,
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
