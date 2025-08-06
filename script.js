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
<script>
  const indicator = document.getElementById('scrollIndicator');

  function toggleIndicator() {
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;
    indicator.style.display = atBottom ? 'none' : 'block';
  }

  window.addEventListener('scroll', toggleIndicator);
  window.addEventListener('resize', toggleIndicator);
  toggleIndicator();
</script>
