const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");
const img = document.getElementById('bookmark');

// Ensure these heights match the CSS sidebar height values
let collapsedSidebarHeight = "56px"; // Height in mobile view (collapsed)
let fullSidebarHeight = "calc(100vh - 32px)"; // Height in larger screen


img.addEventListener('click', function (){
  img.src = 'img/bookmark2.png';

})
// Toggle sidebar's collapsed state
sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

// Update sidebar height and menu toggle text
const toggleMenu = (isMenuActive) => {
  sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
  menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
}

// Toggle menu-active class and adjust height
menuToggler.addEventListener("click", () => {
  toggleMenu(sidebar.classList.toggle("menu-active"));
});

// (Optional code): Adjust sidebar height on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    sidebar.style.height = fullSidebarHeight;
  } else {
    sidebar.classList.remove("collapsed");
    sidebar.style.height = "auto";
    toggleMenu(sidebar.classList.contains("menu-active"));
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the logout link in sidebar - using querySelector to find the link with logout icon
  const logoutLink = document.querySelector('.nav-item .nav-link');

  // Get logout confirmation dialog
  const logoutDialog = document.getElementById('logout');

  // Add click event to logout link
  if (logoutLink) {
    logoutLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      logoutDialog.classList.remove('hidden');
      logoutDialog.classList.add('show');
    });
  }

  // Cancel button closes the dialog
  const cancelBtn = document.getElementById('Bcancel');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
      logoutDialog.classList.add('hidden');
      logoutDialog.classList.remove('show');
    });
  }

  // Confirm button redirects
  const confirmBtn = document.getElementById('Bconfirm');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const categoryItems = document.querySelectorAll('.category-item');

  // Set 'All' as active by default if no category is active
  if (!document.querySelector('.category-item.active')) {
    categoryItems[0]?.classList.add('active');
  }

  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      // Only update if clicked item isn't already active
      if (!this.classList.contains('active')) {
        categoryItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        // Optional: Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 200);
      }
    });
  });
});
// JavaScript solution
const notifHeight = document.querySelector('.notif').offsetHeight;
document.querySelector('.overlapNotif').style.height = `${notifHeight}px`;