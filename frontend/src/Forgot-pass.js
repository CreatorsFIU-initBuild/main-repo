// Selecting Elements
const emailInput = document.getElementById("email");
const resetBtn = document.getElementById("resetBtn");
const form = document.getElementById("forgotPasswordForm");
const successAlert = document.getElementById("successAlert");
const emailGuidance = document.getElementById("emailGuidance");

// Email Validation Regex
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

// Function to Validate Email
const validateEmail = () => {
    const emailValue = emailInput.value.trim().toLowerCase();
    emailInput.value = emailValue; // Convert to lowercase automatically

    if (emailRegex.test(emailValue)) {
        emailInput.classList.remove("is-invalid");
        emailGuidance.classList.add("d-none");
        resetBtn.disabled = false; // Enable button
    } else {
        emailInput.classList.add("is-invalid");
        emailGuidance.classList.remove("d-none");
        resetBtn.disabled = true; // Disable button
    }
};

// Validate Email on Input
emailInput.addEventListener("input", validateEmail);

// Handle Form Submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!resetBtn.disabled) {
        // Show Success Alert
        successAlert.classList.remove("d-none");

        // Hide alert & redirect after 3 seconds
        setTimeout(() => {
            successAlert.classList.add("d-none");
            window.location.href = "login.html";
        }, 3000);
    }
});
