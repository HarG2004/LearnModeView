const bridgeButton = document.getElementById("open-bridge");
const bridgeCard = document.getElementById("knowledge-bridge");
const hintButton = document.getElementById("show-hint");
const hintPanel = document.getElementById("hint-panel");
const feedbackPanel = document.getElementById("feedback-panel");
const optionButtons = Array.from(document.querySelectorAll(".option-button"));

const feedbackMessages = {
  correct:
    "Correct. Active Arm PEs = 2, active GPU PEs = 3 x 4 x 0.75 = 9, and active NPU PEs = 8 x 0.50 = 4. Total = 15.",
  wrong:
    "Not quite. Split the work into three parts: Arm cores, GPU PEs, and NPU PEs. Then add 2 + 9 + 4."
};

if (bridgeButton && bridgeCard) {
  bridgeButton.addEventListener("click", () => {
    bridgeCard.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (hintButton && hintPanel) {
  hintButton.addEventListener("click", () => {
    const isOpen = !hintPanel.hidden;
    hintPanel.hidden = isOpen;
    hintButton.setAttribute("aria-expanded", String(!isOpen));
    hintButton.classList.toggle("is-open", !isOpen);
  });
}

optionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isCorrect = button.dataset.correct === "true";

    optionButtons.forEach((option) => {
      option.classList.remove("is-selected", "is-correct", "is-wrong");
    });

    button.classList.add("is-selected", isCorrect ? "is-correct" : "is-wrong");

    feedbackPanel.classList.remove("is-correct", "is-wrong");
    feedbackPanel.classList.add(isCorrect ? "is-correct" : "is-wrong");
    feedbackPanel.textContent = isCorrect ? feedbackMessages.correct : feedbackMessages.wrong;
  });
});
