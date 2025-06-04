// Year auto update
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
});

// Dynamic word changer in hero section
document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "Competitive",
    "Good",
    "Relaxed",
    "Skilled",
    "Hard-working",
    "Good-looking",
    "Motivated",
    "Lazy",
    "New-born",
    "Newbie",
    "Full-stack",
    "Focused",
    "Dedicated",
    "Proficient",
    "All",
  ];
  const dynamicWordElement = document.getElementById("dynamicWord");
  let currentWordIndex = 0;

  if (dynamicWordElement) {
    setInterval(() => {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      dynamicWordElement.textContent = words[currentWordIndex];
    }, 1000);
  }
});

// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeToggleFooter = document.getElementById("darkModeToggleFooter");
  const body = document.body;

  // Check for saved dark mode preference or default to light mode
  const savedDarkMode = localStorage.getItem("darkMode");
  const isDarkMode = savedDarkMode === "true";

  // Apply initial dark mode state
  if (isDarkMode) {
    body.classList.add("dark");
    updateToggleIcons(true);
  }

  // Function to toggle dark mode
  function toggleDarkMode() {
    const isCurrentlyDark = body.classList.contains("dark");

    if (isCurrentlyDark) {
      body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      updateToggleIcons(false);
    } else {
      body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      updateToggleIcons(true);
    }
  }

  // Function to update toggle button icons
  function updateToggleIcons(isDark) {
    const toggles = [darkModeToggle, darkModeToggleFooter];

    toggles.forEach((toggle) => {
      if (toggle) {
        const svg = toggle.querySelector("svg");
        if (svg) {
          if (isDark) {
            // Sun icon
            svg.innerHTML = `
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
              </path>
            `;
          } else {
            // Moon icon
            svg.innerHTML = `
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
              </path>
            `;
          }
        }
      }
    });
  }

  // Add event listeners to toggle buttons
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
  }

  if (darkModeToggleFooter) {
    darkModeToggleFooter.addEventListener("click", toggleDarkMode);
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Update active navigation on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-purple-600");
    link.classList.add("text-gray-500");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.remove("text-gray-500");
      link.classList.add("text-purple-600");
    }
  });
});

// Simple testimonial slider
let currentTestimonial = 0;
const testimonials = [
  {
    text: "This project is clean and easy to use. I am very happy with it. I would definitely recommend it to anyone looking for a good Tailwind CSS project. It's focused on responsibility and efficiency, utilizing the latest technologies to deliver high-quality results.",
    author: "mrKevler",
    position: "Developer",
    image: "https://cataas.com/cat/funny?width=48&height=48",
  },
  {
    text: "This project is fully responsible, with a strong style ethic. It contains clean conventions and HTML, CSS and JavaScript technology. It's a quick learner for everyone who wants to improve their skills.",
    author: "Jane Doe",
    position: "Senior Developer",
    image: "https://cataas.com/cat/cute?width=48&height=48&id=1",
  },
  {
    text: "Amazing project for learning Tailwind CSS! The body is well-structured and comments are helpful. I've improved my CSS skills significantly since learning with this project.",
    author: "John Smith",
    position: "Frontend Developer",
    image: "https://cataas.com/cat/playful?width=48&height=48&id=2",
  },
  {
    text: "The best place to practice programming with modern CSS framework. Highly recommend for anyone looking to advance their skills.",
    author: "Amanda Nowak Wilson",
    position: "UI Designer",
    image: "https://cataas.com/cat/orange?width=48&height=48&id=3",
  },
];

function initTestimonialSlider() {
  const testimonialText = document.querySelector("blockquote");
  const testimonialAuthor = document.getElementById("testimonial-author");
  const testimonialPosition = document.getElementById("testimonial-position");
  const testimonialImage = document.querySelector('img[alt="Profile"]');
  const dots = document.querySelectorAll(".w-3.h-3.rounded-full");

  if (!testimonialText || !testimonialAuthor || !testimonialPosition) return;

  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    testimonialText.textContent = `"${testimonial.text}"`;
    testimonialAuthor.textContent = testimonial.author;
    testimonialPosition.textContent = testimonial.position;

    if (testimonialImage) {
      testimonialImage.src = testimonial.image;
      testimonialImage.alt = testimonial.author;
    }

    // Update dots
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove("bg-gray-300");
        dot.classList.add("bg-purple-600");
      } else {
        dot.classList.remove("bg-purple-600");
        dot.classList.add("bg-gray-300");
      }
    });
  }

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentTestimonial = index;
      updateTestimonial(currentTestimonial);
    });
  });

  // Auto-rotate testimonials every 5 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
  }, 5000);
}

// Initialize testimonial slider when DOM is loaded
document.addEventListener("DOMContentLoaded", initTestimonialSlider);

// Form validation and submission
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Form validation
      const inputs = form.querySelectorAll(
        "input[required], textarea[required]"
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("border-red-500");
        } else {
          input.classList.remove("border-red-500");
        }
      });

      if (isValid) {
        // Fake :) Form submission
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

        setTimeout(() => {
          alert("Thank you! Your form has been submitted successfully.");
          form.reset();
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }, 1500);
      } else {
        alert("Please fill in all required fields.");
      }
    });
  });
});

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
}
