// type: 'error' || 'success'
import { executeIn } from './utils';
const hideAlert = () => {
  // Select alert
  const el = document.querySelector('.alert');
  // Hide it, if alert exists
  if (el) {
    el.parentElement.removeChild(el);
  }
};

export const showAlert = (type, msg) => {
  // Hide previous alert if it existed at that point
  hideAlert();
  // Make a new alert for our response
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  executeIn(5, hideAlert);
};
