function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


// Odkaz na sekci "O mně"
document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
  e.preventDefault();
  var headerHeight = 80; // Výška headeru
  var additionalOffset = 20; // Další posun nahoru
  var targetSection = document.getElementById('about');
  var targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - additionalOffset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});

// Odkaz na sekci "Zkušenosti"
document.querySelector('a[href="#experience"]').addEventListener('click', function (e) {
  e.preventDefault();
  var headerHeight = 80; // Výška headeru
  var additionalOffset = 20; // Další posun nahoru
  var targetSection = document.getElementById('experience');
  var targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - additionalOffset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});

// Odkaz na sekci "Projekty"
document.querySelector('a[href="#projects"]').addEventListener('click', function (e) {
  e.preventDefault();
  var headerHeight = 80; // Výška headeru
  var additionalOffset = 20; // Další posun nahoru
  var targetSection = document.getElementById('projects');
  var targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - additionalOffset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});

// Odkaz na sekci "Kontakt"
document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
  e.preventDefault();
  var headerHeight = 80; // Výška headeru
  var additionalOffset = 20; // Další posun nahoru
  var targetSection = document.getElementById('contact');
  var targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - additionalOffset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});

// Odkaz na sekci "Certifikáty"
document.querySelector('a[href="#certificates"]').addEventListener('click', function (e) {
  e.preventDefault();
  var headerHeight = 80; // Výška headeru
  var additionalOffset = 20; // Další posun nahoru
  var targetSection = document.getElementById('certificates');
  var targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - additionalOffset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});

function toggleMenu() {
  var menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('open');
}
