const form = document.querySelector('.feedback-form');
const formInputEmail = document.querySelector('input[type="email"]');
const formTextArea = document.querySelector('textarea');
const localStorageKey = 'feedback-form-state';

window.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  if (savedData.email) formInputEmail.value = savedData.email;
  if (savedData.message) formTextArea.value = savedData.message;
});

form.addEventListener('input', () => {
  const formData = {
    email: formInputEmail.value.trim(),
    message: formTextArea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = formInputEmail.value.trim();
  const message = formTextArea.value.trim();

  if (!email || !message) {
    alert('Formda boş alanlar var! Lütfen tüm alanları doldurun.');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(localStorageKey);
  form.reset();
});
