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
// --- Code effet soudure ---
function weldingEffect(el, callback) {
  el.classList.add('flash');
  setTimeout(() => el.classList.remove('flash'), 500);

  const rect = el.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;

  for (let i = 0; i < 25; i++) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    spark.style.left = startX + 'px';
    spark.style.top = startY + 'px';

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 120 + 30;
    const tx = Math.cos(angle) * distance + 'px';
    const ty = Math.sin(angle) * distance + 'px';
    spark.style.setProperty('--tx', tx);
    spark.style.setProperty('--ty', ty);

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 600);
  }

  const audio = new Audio('https://www.soundjay.com/electric/electric-zap-02.mp3');
  audio.play();

  setTimeout(() => {
    if (callback) callback();
  }, 500);
}

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');

    weldingEffect(link, () => {
      if (href && href !== '#') {
        if (link.getAttribute('target') === '_blank') {
          window.open(href, '_blank');
        } else {
          window.location.href = href;
        }
      }
    });
  });
});
</script>
