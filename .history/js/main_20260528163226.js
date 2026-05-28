/**
 * Primetech Website - Main JavaScript
 *
 * Principles Applied:
 * - Single Responsibility: Each function has one purpose
 * - DRY: No code duplication
 * - Clean Code: Clear function names and comments
 *
 * Functions:
 * - handleFormSubmit: Handle contact form submission
 * - initializeSmoothScroll: Handle smooth scrolling for anchor links
 * - initializeBackToTop: Handle back to top button functionality
 */

/**
 * Handle Contact Form Submission
 *
 * @param {Event} event - The form submission event
 *
 * Single Responsibility: Only handles form submission
 * Clean Code: Clear function name and purpose
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  const originalStyle = submitButton.style.background;

  // Update button state
  submitButton.textContent = "// Mensagem Enviada ✓";
  submitButton.style.background = "linear-gradient(135deg, #065f46, #059669)";
  submitButton.disabled = true;

  // Reset form after delay
  const resetDelay = 3500;
  setTimeout(() => {
    submitButton.textContent = originalText;
    submitButton.style.background = originalStyle;
    submitButton.disabled = false;
    form.reset();
  }, resetDelay);
}

/**
 * Smooth Scroll Behavior
 *
 * Enhances user experience with smooth scrolling to sections
 * Single Responsibility: Only handles smooth scrolling
 */
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only prevent default if target exists
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/**
 * Back to Top Button Functionality
 *
 * Shows/hides button and scrolls to top
 * Single Responsibility: Only handles back-to-top behavior
 */
function initializeBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");

  if (!backToTopBtn) return;

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Scroll to top when clicked
  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/**
 * Responsive Navigation Mobile Menu
 *
 * Toggles mobile menu and closes on link click
 * Single Responsibility: Mobile menu management
 */
function initializeMobileMenu() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (!navToggle || !navLinks) return;

  // Toggle menu on hamburger click
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("mobile-open");
  });

  // Close menu on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("mobile-open");
    });
  });
}

/**
 * Responsive Navigation
 *
 * Could be extended for mobile menu toggle
 * Single Responsibility: Navigation-specific functionality
 */
function initializeNavigation() {
  initializeMobileMenu();
}

/**
 * Initialize All Interactions
 *
 * Runs when DOM is fully loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  initializeSmoothScroll();
  initializeBackToTop();
  initializeNavigation();
});

// Fallback initialization if DOM is already loaded
if (document.readyState !== "loading") {
  initializeSmoothScroll();
  initializeBackToTop();
  initializeNavigation();
}
