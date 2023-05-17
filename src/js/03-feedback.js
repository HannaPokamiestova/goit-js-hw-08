import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.js-feedback-form');

let formData = {};

feedbackForm.addEventListener('input', throttle(saveFeedbackFormState, 500));

function getFeedbackFormState() {
  const data = localStorage.getItem(FEEDBACK_FORM_STATE_KEY);

  if (!data) {
    return {};
  }

  try {
    return JSON.parse(data);
  } catch {
    console.error('Invalid JSON');
  }
}

function saveFeedbackFormState(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(FEEDBACK_FORM_STATE_KEY, JSON.stringify(formData));
}

function loadFeedbackFormState() {
  formData = getFeedbackFormState();

  if (!formData) {
    return;
  }

  Object.entries(formData).forEach(item => {
    let key = item[0];
    let value = item[1];
    feedbackForm.elements[key].value = value;
  });
}

loadFeedbackFormState();

feedbackForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  console.log(formData);
  formData = {};

  localStorage.removeItem(FEEDBACK_FORM_STATE_KEY);
  event.target.reset();
}
