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
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
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
});

/**
 * Responsive Navigation
 *
 * Could be extended for mobile menu toggle
 * Single Responsibility: Navigation-specific functionality
 */
function initializeNavigation() {
  // Future enhancement: Mobile menu toggle
  // Could add hamburger menu for mobile devices
}

// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeNavigation);
} else {
  initializeNavigation();
}
