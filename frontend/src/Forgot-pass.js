// Selecting Form Elements
const emailInput = document.getElementById("email");
const resetBtn = document.getElementById("resetBtn");
const form = document.getElementById("forgotPasswordForm");
const successAlert = document.getElementById("successAlert");

// Validation Regex for Email (Lowercase, No Caps, Proper Format)
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

// Create Guidance Message
const createGuidance = (input, message) => {
    let guidance = document.createElement("div");
    guidance.className = "guidance-text text-success";
    guidance.innerText = message;
    guidance.style.display = "none";
    input.insertAdjacentElement("afterend", guidance);
    return guidance;
};

// Add Guidance Message
const emailGuidance = createGuidance(emailInput, "Must be a valid email (e.g., name@example.com).");

// Enable Button Only if Email is Valid
const validateEmail = () => {
    emailInput.addEventListener("input", () => {
        const value = emailInput.value.trim().toLowerCase();
        emailInput.value = value; // Convert to lowercase automatically

        if (emailRegex.test(value)) {
            emailInput.classList.remove("is-invalid");
            emailGuidance.style.display = "none";
            resetBtn.disabled = false; // ✅ Enable button when email is valid
        } else {
            emailInput.classList.add("is-invalid");
            emailGuidance.style.display = "block";
            resetBtn.disabled = true; // ❌ Keep button disabled
        }
    });
};

// Handle Form Submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!resetBtn.disabled) {
        successAlert.classList.remove("d-none"); // Show success alert

        setTimeout(() => {
            window.location.href = "login.html"; // Redirect to login after 3 sec
        }, 3000);
    }
});

// Run Validation
validateEmail();
