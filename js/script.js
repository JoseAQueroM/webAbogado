(function() {
  const header = document.querySelector('header');
  const logo = document.querySelector('.img-Navbar');
  const threshold = 20; // px de desplazamiento para activar el cambio

  function setLogo(isScrolled) {
    if (!logo) return;
    // Rutas relativas según tu estructura
    logo.src = isScrolled ? './img/logo.png' : './img/logo-blanco.png';
  }

  function onScroll() {
    const isScrolled = window.scrollY > threshold;
    if (isScrolled) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    setLogo(isScrolled);
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('load', onScroll);
  onScroll(); // ejecutar una vez al cargar
})();