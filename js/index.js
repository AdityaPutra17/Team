document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', reveal);
  
    function reveal() {
      var reveals = document.querySelectorAll('.scroll-animation');
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;
  
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('show');
        }
      }
    }
  
    reveal(); // Memanggil fungsi saat halaman dimuat untuk menunjukkan elemen yang sudah muncul saat pertama kali load
  });
  