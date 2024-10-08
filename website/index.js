window.addEventListener("scroll", function () {
  const hero = document.getElementById("hero");
  const scrollPosition = window.scrollY;

  // Adjust the background color based on the scroll position
  const headerHeight = hero.offsetHeight;
  const scrollFraction = Math.min(scrollPosition / headerHeight, 1);

  document.body.style.backgroundImage = `linear-gradient(
    to right,
    rgba(255, 236, 210, ${1 - scrollFraction * 0.6}) 0%,
    rgba(252, 182, 159, ${1 - scrollFraction * 0.6}) 100%,
    rgba(255, 255, 255, ${scrollFraction * 0.6}) 100%
  )`;
  hero.style.opacity = Math.max(1 - scrollFraction * 1.2, 0);
});

document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-card");
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing after animation is triggered
      }
    });
  }, observerOptions);

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("expanded");
          observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
      });
    },
    { threshold: 0.1 }
  ); // Adjust the threshold as needed

  cards.forEach((card) => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all badge elements
  const badges = document.querySelectorAll(".badge-animate");

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'show' class when element is in view
          entry.target.classList.add("show");
          // Optional: Stop observing after the animation has been triggered
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Set the threshold to 0.1 so the animation triggers when 10% of the element is visible
      threshold: 0.1,
    }
  );

  // Observe each badge element
  badges.forEach((badge) => {
    observer.observe(badge);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://ql7clnksoqep7jixmf6ontlkxu0kyhnu.lambda-url.ap-southeast-1.on.aws/"
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "visitor-count"
      ).innerText = `This website has been visited ${data} times 🎉`;
    })
    .catch((error) => {
      document.getElementById("visitor-count").innerText =
        "Error loading visitor count";
      console.error("Error fetching visitor count:", error);
    });
});
