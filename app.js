// Character limit (like Twitter/X)
const MAX_CHARS = 280;

// Get DOM elements
const textarea = document.querySelector("textarea");
const enteredChars = document.getElementById("entered-chars");
const remainedChars = document.getElementById("remained-chars");

// Initialize counts
enteredChars.textContent = "0";
remainedChars.textContent = MAX_CHARS;

// Listen for typing
textarea.addEventListener("input", () => {
    const typedLength = textarea.value.length;

    // Update values
    enteredChars.textContent = typedLength;
    remainedChars.textContent = MAX_CHARS - typedLength;

    // Change color of the border and remaining text counter if over the limit
    if (typedLength > MAX_CHARS) {
        textarea.style.borderColor = "red";
        remainedChars.style.color = "red";
    } else {
        textarea.style.borderColor = "hotpink";
        remainedChars.style.color = "hotpink";
    }
});
