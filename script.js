function openModal() {
  document.getElementById('mailModal').style.display = 'block';
}
function closeModal() {
  document.getElementById('mailModal').style.display = 'none';
}
window.onclick = function(e) {
  if (e.target === document.getElementById('mailModal')) closeModal();
};
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Message envoyé !");
  closeModal();
});
