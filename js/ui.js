// Theme functions
function openThemeDialog() {
  const dialog = document.getElementById('theme-dialog');
  if (!dialog) return;
  dialog.classList.remove('hidden');
  dialog.classList.add('show');
}

function closeThemeDialog() {
  const dialog = document.getElementById('theme-dialog');
  if (!dialog) return;
  dialog.classList.remove('show');
  dialog.classList.add('hidden');
}

let currentTheme = localStorage.getItem('siteTheme') || 'classic';
const simpleThemes = ['light', 'dark'];

function setTheme(themeName) {
  const stylesheet = document.getElementById('theme-stylesheet');

  if (simpleThemes.includes(themeName)) {
    document.documentElement.setAttribute('data-theme', themeName);
    if (stylesheet) stylesheet.disabled = true;
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (stylesheet) {
      stylesheet.disabled = false;
      stylesheet.href = `themes/${themeName}.css`;
    }
  }

  localStorage.setItem('siteTheme', themeName);
  currentTheme = themeName;
}

setTheme(currentTheme);

// Expose theme dialog functions globally so inline HTML handlers work
window.openThemeDialog = openThemeDialog;
window.closeThemeDialog = closeThemeDialog;

// Helper function for jump menu visibility
function checkJumpMenuVisibility() {
  const jumpMenu = document.getElementById('jumpMenu');
  const content = document.querySelector('fieldset, main, section, .main-content'); // adjust as needed
  if (!jumpMenu || !content) return;

  const spaceLeft = content.getBoundingClientRect().left;
  if (spaceLeft < 300) {
    jumpMenu.classList.add('collapsed');
  } else {
    jumpMenu.classList.remove('collapsed');
  }
}

// Main UI initializer: called when DOM is ready
function initUI() {
  // --- Tab Toggle ---
  console.log('Initializing Tab Toggle');

  const jumpMenu = document.getElementById('jumpMenu'); // get once here

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;

      // Toggle active tab classes
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Toggle active tab content
      document.querySelectorAll('.tab-section').forEach(section => {
        section.classList.toggle('active', section.dataset.tabContent === tabName);
      });

      // Scroll into view
      const targetTab = document.querySelector(`[data-tab-content="${tabName}"]`);
      if (targetTab) targetTab.scrollIntoView({ behavior: 'smooth' });

      // Show/hide jump menu depending on tab
      if (jumpMenu) {
        if (tabName === 'character-sheet') {
          jumpMenu.classList.remove('hidden');
        } else {
          jumpMenu.classList.add('hidden');
        }
      }
    });
  });

    document.getElementById('editClasses2')?.addEventListener('click', () => {
    const targetTab = 'classes';
    const tabButton = document.querySelector(`.tab-btn[data-tab="${targetTab}"]`);
    if (tabButton) tabButton.click(); // trigger the normal tab logic
  });

  // ✅ Initial state on load
  const activeSection = document.querySelector('.tab-section.active');
  if (activeSection && jumpMenu) {
    const tabContent = activeSection.dataset.tabContent;
    if (tabContent === 'character-sheet') {
      jumpMenu.classList.remove('hidden');
    } else {
      jumpMenu.classList.add('hidden');
    }
  }

  // --- Menu Collapse ---
  console.log('Initializing Menu Collapse');
  const toggleBtn = document.getElementById('menuToggle');
  const menu = document.getElementById('jumpMenu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      console.log('Menu toggle clicked, toggling .collapsed');
      menu.classList.toggle('collapsed');
    });
  } else {
    console.warn('Menu toggle or menu element missing!');
  }

  const handleResize = () => {
    if (window.innerWidth < 800) {
      menu.classList.add('collapsed');
    } else {
      menu.classList.remove('collapsed');
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);

  // --- Jump Menu Visibility ---
  console.log('Initializing Jump Menu Visibility');
  checkJumpMenuVisibility();
  window.addEventListener('resize', checkJumpMenuVisibility);

  // --- Dropdown Toggle + Custom Dropdown --- 
console.log('Initializing Dropdown Toggle + Custom Dropdown');
document.addEventListener('click', (event) => {
  const toggleButton = event.target.closest('.dropdown-toggle');
  const isToggle = !!toggleButton;
  const openDropdowns = document.querySelectorAll('.dropdown.show');

  openDropdowns.forEach(drop => {
    const clickedInside = drop.contains(event.target);
    const isTogglingThis = isToggle && drop.id === toggleButton?.dataset.dropdown;
    if (!isTogglingThis && !clickedInside) {
      drop.classList.remove('show');
    }
  });

  if (isToggle) {
    const targetId = toggleButton.dataset.dropdown;
    const targetMenu = document.getElementById(targetId);
    if (targetMenu) targetMenu.classList.toggle('show');
  }

  // Close custom dropdown if clicked outside
  const customDropdown = document.getElementById('customDropdown');
  if (customDropdown && !customDropdown.contains(event.target)) {
    customDropdown.classList.remove('open');
  }
});
  
  // --- Expanding Textareas ---
  console.log('Initializing Expanding Textareas');
  document.querySelectorAll('.expanding-textarea').forEach(textarea => {
    const adjustHeight = (el) => {
      el.style.height = '0em'; // Reset
      el.style.height = `${el.scrollHeight}px`; // Resize
    };
    textarea.addEventListener('input', () => adjustHeight(textarea));
    adjustHeight(textarea);
  });

const popupOverlay = document.getElementById('popupOverlay');

// Open popup when any edit button is clicked
document.querySelectorAll('.editPopupBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.popupTarget;
    const popup = document.getElementById(targetId);

    popup.classList.remove('hidden');
    popupOverlay.classList.remove('hidden');

    // Store currently open popup for closing later
    popupOverlay.dataset.activePopup = targetId;
  });
});

// Close popup when close button is clicked
document.querySelectorAll('.closePopup').forEach(closeBtn => {
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault(); // ✅ Stop default behavior (like jumping)

    const popupId = popupOverlay.dataset.activePopup;
    document.getElementById(popupId).classList.add('hidden');
    popupOverlay.classList.add('hidden');
  });
});

// Close popup when overlay is clicked
popupOverlay.addEventListener('click', () => {
  const popupId = popupOverlay.dataset.activePopup;
  if (popupId) {
    document.getElementById(popupId).classList.add('hidden');
    popupOverlay.classList.add('hidden');
  }
});


}

