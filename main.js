// main.js
document.addEventListener("DOMContentLoaded", function () {
  // Menu burger
  const menuIcon = document.getElementById("menuIcon");
  const navbar = document.getElementById("navbar");
  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  }

  // Carousel
  const slides = document.querySelectorAll("#must .carousel-slide");
  const prevBtn = document.querySelector("#must .carousel-btn.prev");
  const nextBtn = document.querySelector("#must .carousel-btn.next");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  if (prevBtn && nextBtn && slides.length) {
    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  }

  // Animation Intersection Observer
  const options = { root: null, threshold: 0.5 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__zoomIn");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document
    .querySelectorAll(".animate__animated")
    .forEach((el) => observer.observe(el));

  const zoomBoxes = document.querySelectorAll(
    ".section3 .box.zoom-in-on-scroll"
  );
  const zoomObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  zoomBoxes.forEach((box) => zoomObserver.observe(box));
});

// main.js
document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.querySelector(".google-reviews");
  if (!iframe) return;

  iframe.addEventListener("error", function () {
    iframe.style.display = "none";
    const errorDiv = document.createElement("div");
    errorDiv.innerHTML = `
      <p>
        Le contenu des avis clients n'a pas pu être chargé. Veuillez réessayer plus tard.
      </p>
    `;
    iframe.parentNode.appendChild(errorDiv);
  });
});
