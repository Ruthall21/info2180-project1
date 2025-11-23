/* Add your JavaScript to this file */
// scripts.js - Newsletter form behaviour for INFO2180 Project 1

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.newsletter form');
  const emailInput = document.querySelector('#email');
  const messageDiv = document.querySelector('.newsletter .message');

  if (!form || !emailInput || !messageDiv) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Simple validation: must contain "@" and "."
    if (!email || !email.includes('@') || !email.includes('.')) {
      messageDiv.textContent = 'Please enter a valid email address (e.g. name@example.com).';
      messageDiv.classList.remove('success');
      messageDiv.classList.add('error');
      emailInput.focus();
      return;
    }

    // Success message
    messageDiv.textContent = `Thank you! Your email address "${email}" has been added to our mailing list!`;
    messageDiv.classList.remove('error');
    messageDiv.classList.add('success');

    // optional: clear input
    emailInput.value = '';

    // Simulate small visual effect (keep simple)
    messageDiv.style.opacity = '0';
    setTimeout(() => {
      messageDiv.style.transition = 'opacity 320ms ease-in';
      messageDiv.style.opacity = '1';
    }, 10);
  });
});
