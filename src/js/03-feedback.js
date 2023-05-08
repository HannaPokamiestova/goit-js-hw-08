import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".js-feedback-form");
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

emailInput.addEventListener("input", saveFeddbackFormState);
messageInput.addEventListener("input", saveFeddbackFormState);

function saveFeddbackFormState() {
  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify({
      email: emailInput.value,
      message: messageInput.value,
    })
  );
}

function loadFeedbackFormState() {
  const feedbackFormState = JSON.parse(
    localStorage.getItem("feedback-form-state")
  );
  if (!feedbackFormState) {
    return;
  }
  emailInput.value = feedbackFormState.email;
  messageInput.value = feedbackFormState.message;
}
loadFeedbackFormState();

feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  localStorage.removeItem("feedback-form-state");
  feedbackForm.reset();
});
