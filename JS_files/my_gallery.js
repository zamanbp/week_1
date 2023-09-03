const feedbackForm = document.getElementById('feedbackForm');
const submissionMessage = document.getElementById('submissionMessage');

feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    submissionMessage.textContent = 'Please fill out all fields.';
    return;
  }

  if (!isValidEmail(email)) {
    submissionMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate form submission success
  Swal.fire({
    icon: 'success',
    title: 'Feedback submitted successfully!',
    showConfirmButton: false,
    timer: 1500
  });

  submissionMessage.textContent = '';
  feedbackForm.reset();
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}