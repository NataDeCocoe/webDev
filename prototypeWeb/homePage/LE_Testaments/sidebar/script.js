document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggler = document.querySelector('.sidebar-toggler');
  const menuToggler = document.querySelector('.menu-toggler');
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
  const logoutItem = document.querySelector('.sidebar-footer .nav-item');

  // 1. Force collapsed state on load
  sidebar.classList.add('collapsed'); // Default: collapsed

  // 2. Toggle collapsed state on button click
  sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });

  // 3. Mobile menu toggle (unchanged)
  menuToggler.addEventListener('click', () => {
    sidebar.classList.toggle('menu-active');
    menuToggler.querySelector('span').textContent =
        sidebar.classList.contains('menu-active') ? 'close' : 'menu';
  });

  // 4. Handle nav item clicks (unchanged)
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') e.preventDefault();
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('menu-active');
        menuToggler.querySelector('span').textContent = 'menu';
      }
    });
  });

  // 5. Handle logout (unchanged)
  if (logoutItem) {
    logoutItem.addEventListener('click', (e) => {
      e.preventDefault();
      logoutItem.classList.remove('active');
      console.log('Logout clicked');
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('menu-active');
        menuToggler.querySelector('span').textContent = 'menu';
      }
    });
  }
});

