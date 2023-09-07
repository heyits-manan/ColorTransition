let rectangle = document.querySelector("#rectangle");

rectangle.addEventListener("mousemove", (details) => {
  let rectangleLocation = rectangle.getBoundingClientRect();
  let xCoOrdinate = details.clientX - rectangleLocation.left;

  if (xCoOrdinate < rectangleLocation.width / 2) {
    let redcolor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      xCoOrdinate
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
  } else {
    let bluecolor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      xCoOrdinate
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease: Power4,
    });
  }
});

rectangle.addEventListener("mouseleave", () => {
  gsap.to(rectangle, {
    backgroundColor: `rgb(255,255,255)`,
    ease: Power4,
  });
});
