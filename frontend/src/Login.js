// Selecting Form Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const form = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");

// Validation Regex Patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;
const passwordRegex = /^.{8,}$/; // At least 8 characters

// Create guidance messages dynamically
const createGuidance = (input, message) => {
    let guidance = document.createElement("div");
    guidance.className = "guidance-text text-success";
    guidance.innerText = message;
    guidance.style.display = "none";
    input.insertAdjacentElement("afterend", guidance);
    return guidance;
};

// Add Guidance Messages
const emailGuidance = createGuidance(emailInput, "Must be a valid email (e.g., name@example.com).");
const passwordGuidance = createGuidance(passwordInput, "Password must be at least 8 characters long.");

// Toggle Password Visibility
const toggleVisibility = (input, button) => {
    input.type = input.type === "password" ? "text" : "password";
};

// Add Event Listener for Password Toggle
togglePassword.addEventListener("click", () => toggleVisibility(passwordInput, togglePassword));

// Validate Single Field with Guidance
const validateField = (input, regex, guidance) => {
    input.addEventListener("input", () => {
        if (!regex.test(input.value.trim())) {
            input.classList.add("is-invalid");
            guidance.style.display = "block";
        } else {
            input.classList.remove("is-invalid");
            guidance.style.display = "none";
        }
        checkFormValidity();
    });
};

// Run Validation Functions
validateField(emailInput, emailRegex, emailGuidance);
validateField(passwordInput, passwordRegex, passwordGuidance);

// Enable Button on Valid Input
const checkFormValidity = () => {
    loginBtn.disabled = !(emailRegex.test(emailInput.value.trim()) && passwordRegex.test(passwordInput.value.trim()));
};
