// Function to create floating "Yes" buttons that pop up continuously
function generateFloatingYesButtons() {
  const heartsContainer = document.getElementById("hearts");

  if (!heartsContainer) {
      console.error('Container #hearts not found!');
      return;
  }

  const buttonInterval = 10; // Generate a new "Yes" button every 50ms
  const intervalId = setInterval(() => {
      const yesButton = document.createElement("button");
      yesButton.classList.add("option");
      yesButton.innerHTML = "Yes";
      yesButton.style.position = "absolute";
      yesButton.style.left = `${Math.random() * window.innerWidth}px`;
      yesButton.style.top = `${Math.random() * window.innerHeight}px`;
      yesButton.style.zIndex = 1000;
      yesButton.style.padding = "10px 20px";
      yesButton.style.backgroundColor = "#ff4081";
      yesButton.style.border = "1px solid #ddd";
      yesButton.style.borderRadius = "5px";
      yesButton.style.cursor = "pointer";

      // Make the "Yes" button clickable
      yesButton.addEventListener("click", function () {
          event.stopPropagation();
          event.preventDefault();
          clearInterval(intervalId); // Stop generating "Yes" buttons
          heartsContainer.innerHTML = ''; // Clear all the "Yes" buttons

          // Show the second question (Will you be my Valentine?)
          document.getElementById("message-container").style.display = "block";
          document.getElementById("valentine-question").style.display = "block";
          document.getElementById("valentine-yes").style.display = "inline-block";
          document.getElementById("valentine-no").style.display = "inline-block";
      });

      heartsContainer.appendChild(yesButton);
  }, buttonInterval);
}

// Handle the Yes and No button clicks for "Do you love me?"
document.addEventListener("DOMContentLoaded", () => {
  // Yes button click event for "Do you love me?"
  document.getElementById("yes").addEventListener("click", () => {
      // Hide the initial question and buttons
      document.getElementById("question").style.display = "none";
      document.getElementById("yes").style.display = "none";
      document.getElementById("no").style.display = "none";

      // Show the second question (Will you be my Valentine?)
      document.getElementById("message-container").style.display = "block";
      document.getElementById("valentine-question").style.display = "block";
      document.getElementById("valentine-yes").style.display = "inline-block";
      document.getElementById("valentine-no").style.display = "inline-block";
  });

  // No button click event for "Do you love me?"
  document.getElementById("no").addEventListener("click", () => {
      // Hide the initial question and buttons
      document.getElementById("question").style.display = "none";
      document.getElementById("yes").style.display = "none";
      document.getElementById("no").style.display = "none";

      // Start generating floating "Yes" buttons continuously
      generateFloatingYesButtons();
  });

  // Valentine Yes button click event
  document.getElementById("valentine-yes").addEventListener("click", () => {
      // Hide the second question and buttons
      document.getElementById("valentine-question").style.display = "none";
      document.getElementById("valentine-yes").style.display = "none";
      document.getElementById("valentine-no").style.display = "none";

      // Show the final love message
      document.getElementById("final-message").style.display = "block";
document.getElementById("final-message").innerHTML = 
  "I love you so much, you are everything to me. I'm sorry for the times I don’t fully understand you and make you feel unsafe, but you mean the world to me. I value you deeply and cherish every moment with you.<br> Please show me your beautiful smile and send me your love with a heart 💖";
  });

  // Valentine No button click event
  document.getElementById("valentine-no").addEventListener("click", () => {
      // Hide the second question and buttons
      document.getElementById("valentine-question").style.display = "none";
      document.getElementById("valentine-yes").style.display = "none";
      document.getElementById("valentine-no").style.display = "none";

      // Start generating floating "Yes" buttons continuously for the next page
      generateFloatingYesButtons();
  });
});
