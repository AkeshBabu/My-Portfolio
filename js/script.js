// Navbar
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      new bootstrap.Collapse(navbar).toggle();
    }
  });
});

// Tooltip
document.addEventListener('DOMContentLoaded', function() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// Modal
document.addEventListener('DOMContentLoaded', function() {
  var projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(function(card) {
    card.addEventListener('click', function(event) {
      if (!event.target.closest('button') && !event.target.closest('a')) {
        var button = card.querySelector('.btn-secondary');
        if (button) {
          button.click();
        }
      }
    });
  });
});

// Scroll Spy and Active Link Highlighting
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 50) {
        current = section.getAttribute('id');
      }
    });

    navLi.forEach(li => {
      li.classList.remove('active');
      if (li.getAttribute('href').includes(current)) {
        li.classList.add('active');
      }
    });
  });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Capture form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send('service_5jvk7ns', 'template_kmx9r4e', {
    from_name: name,
    from_email: email,
    message: message
  }).then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert('Thank you for your message!');
  }, function(error) {
    console.log('FAILED...', error);
    alert('Sorry, there was an error sending your message. Please try again later.');
  });

  // Reset form fields
  document.getElementById('contact-form').reset();
});
