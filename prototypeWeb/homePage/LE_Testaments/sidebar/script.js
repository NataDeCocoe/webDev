document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggler = document.querySelector('.sidebar-toggler');
  const menuToggler = document.querySelector('.menu-toggler');

  // Select all navigation items except those in footer
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
  const homeItem = document.querySelector('.nav-item.home');
  const logoutItem = document.querySelector('.sidebar-footer .nav-item');


  // Toggle sidebar collapse/expand

  sidebar.classList.add('collapsed');


  sidebarToggler.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed'); // Must toggle correctly
  });

  // Mobile menu toggle
  menuToggler.addEventListener('click', function() {
    sidebar.classList.toggle('menu-active');
    const menuIcon = this.querySelector('span');
    menuIcon.textContent = sidebar.classList.contains('menu-active') ? 'close' : 'menu';
  });

  // Handle navigation item clicks
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Prevent default only if it's a link
      if (e.target.tagName === 'A') {
        e.preventDefault();
      }

      // Remove active class from all navigation items
      navItems.forEach(i => i.classList.remove('active'));
      // Add active class to clicked item
      this.classList.add('active');

      // Close mobile menu if on mobile
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('menu-active');
        menuToggler.querySelector('span').textContent = 'menu';
      }
    });
  });

  // Handle logout click
  if (logoutItem) {
    logoutItem.addEventListener('click', function(e) {
      e.preventDefault();
      // Ensure logout never gets active class
      this.classList.remove('active');

      // Your logout logic would go here
      console.log('Logout clicked');

      // Close mobile menu if needed
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('menu-active');
        menuToggler.querySelector('span').textContent = 'menu';
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (window.innerWidth > 768) return;
    if (!sidebar.contains(e.target) && !menuToggler.contains(e.target)) {
      sidebar.classList.remove('menu-active');
      menuToggler.querySelector('span').textContent = 'menu';
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('menu-active');
      menuToggler.querySelector('span').textContent = 'menu';
    }
  });
});