// Selecting Form Elements
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const signupBtn = document.getElementById("signupBtn");
const form = document.getElementById("signupForm");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

// Validation Regex Patterns
const usernameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Format phone number as (xxx) xxx-xxxx
const formatPhoneNumber = (input) => {
    let numbers = input.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (numbers.length > 10) numbers = numbers.slice(0, 10); // Limit to 10 digits

    let formattedNumber = numbers;
    if (numbers.length >= 4) formattedNumber = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    if (numbers.length >= 7) formattedNumber = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;

    input.value = formattedNumber;
};

// Enforce formatting while typing
phoneInput.addEventListener("input", () => formatPhoneNumber(phoneInput));

// Prevent pasting non-numeric values into phone number input
phoneInput.addEventListener("paste", (e) => {
    const pastedData = e.clipboardData.getData("text");
    if (!/^\d+$/.test(pastedData.replace(/\D/g, ""))) {
        e.preventDefault();
    }
});

// SVG Icons for Open/Closed Eye
const openEyeSVG = `<svg width="24" height="24" fill="gray" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C7 5 2 9 2 12C2 15 7 19 12 19C17 19 22 15 22 12C22 9 17 5 12 5ZM12 17C9 17 6 14 6 12C6 10 9 7 12 7C15 7 18 10 18 12C18 14 15 17 12 17ZM12 9C10.5 9 9 10.5 9 12C9 13.5 10.5 15 12 15C13.5 15 15 13.5 15 12C15 10.5 13.5 9 12 9Z"/></svg>`;
const closedEyeSVG = `<svg width="24" height="24" fill="gray" xmlns="http://www.w3.org/2000/svg"><path d="M3 12C3 12 6 5 12 5C18 5 21 12 21 12C21 12 18 19 12 19C6 19 3 12 3 12Z" stroke="gray" stroke-width="2"/><line x1="2" y1="2" x2="22" y2="22" stroke="gray" stroke-width="2"/></svg>`;

// Toggle Password Visibility
const toggleVisibility = (input, button) => {
    if (input.type === "password") {
        input.type = "text";
        button.innerHTML = closedEyeSVG;
    } else {
        input.type = "password";
        button.innerHTML = openEyeSVG;
    }
};

togglePassword.innerHTML = openEyeSVG; 
toggleConfirmPassword.innerHTML = openEyeSVG; 

togglePassword.addEventListener("click", () => toggleVisibility(passwordInput, togglePassword));
toggleConfirmPassword.addEventListener("click", () => toggleVisibility(confirmPasswordInput, toggleConfirmPassword));

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
const usernameGuidance = createGuidance(usernameInput, "Only letters are allowed (A-Z, a-z).");
const emailGuidance = createGuidance(emailInput, "Must be a valid email (e.g., name@example.com).");
const passwordGuidance = createGuidance(passwordInput, "At least 8 characters, 1 number, 1 uppercase, 1 special character.");
const confirmPasswordGuidance = createGuidance(confirmPasswordInput, "Passwords must match.");

// Validate Single Field with Guidance
const validateField = (input, regex, guidance) => {
    input.addEventListener("input", () => {
        if (input.value.trim() === "") {
            input.classList.remove("is-invalid");
            guidance.style.display = "none";
        } else if (!regex.test(input.value.trim())) {
            input.classList.add("is-invalid");
            guidance.style.display = "block";
        } else {
            input.classList.remove("is-invalid");
            guidance.style.display = "none";
        }
        checkFormValidity();
    });
};

// Validate Confirm Password Separately
const validateConfirmPassword = () => {
    confirmPasswordInput.addEventListener("input", () => {
        if (confirmPasswordInput.value.trim() === "") {
            confirmPasswordInput.classList.remove("is-invalid");
            confirmPasswordGuidance.style.display = "none";
        } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
            confirmPasswordInput.classList.add("is-invalid");
            confirmPasswordGuidance.style.display = "block";
        } else {
            confirmPasswordInput.classList.remove("is-invalid");
            confirmPasswordGuidance.style.display = "none";
        }
        checkFormValidity();
    });
};

// Run Validation Functions
validateField(usernameInput, usernameRegex, usernameGuidance);
validateField(emailInput, emailRegex, emailGuidance);
validateField(passwordInput, passwordRegex, passwordGuidance);
validateConfirmPassword();

// Check Form Validity for Submit Button
const checkFormValidity = () => {
    const isValid = 
        usernameRegex.test(usernameInput.value.trim()) &&
        emailRegex.test(emailInput.value.trim()) &&
        passwordRegex.test(passwordInput.value.trim()) &&
        confirmPasswordInput.value.trim() === passwordInput.value.trim() &&
        phoneInput.value.length === 14; // Ensures phone format is (XXX) XXX-XXXX

    signupBtn.disabled = !isValid;
};

// Prevent Form Submission if Invalid
form.addEventListener("submit", (e) => {
    if (signupBtn.disabled) {
        e.preventDefault();
    }
});
