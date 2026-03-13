 document.addEventListener("DOMContentLoaded", function () {
      // ─── Refs ───
      var counterEl        = document.getElementById('counter');
      var resetBtn         = document.getElementById('reset');
      var menuContainer    = document.getElementById('menu-container');
      var buttonsContainer = document.getElementById('buttons-container');
      var sidebarOverlay   = document.getElementById('sidebar-overlay');
      var welcomeHint      = document.getElementById('welcome-hint');

      var sections = {
        'sebha-button':        'sebha-sentences',
        'dua-button':          'dua-sentences',
        'daily-duas-button':   'daily-duas-sentences',
        'ayat-elkorsi-button': 'ayat-elkorsi-sentences',
        'death-button':        'death-sentences',
        'arafa-1-button':      'arafa-1-sentences',
        'arafa-2-button':      'arafa-2-sentences',
      };

      var count = 0;
      var allSectionIds = Object.values(sections);
      var allButtons    = Object.keys(sections);

      // ─── Counter logic ───
      document.addEventListener("click", function (e) {
        var t = e.target;
        // Exclude menu, sidebar, reset, and buttons
        if (
          t.classList.contains("button") ||
          t.closest("#menu-container") ||
          t.closest("#buttons-container") ||
          t.closest(".counter-section")
        ) return;

        count++;
        counterEl.innerText = count;

        // Bump animation
        counterEl.classList.remove('bump');
        void counterEl.offsetWidth; // reflow
        counterEl.classList.add('bump');
        setTimeout(function () { counterEl.classList.remove('bump'); }, 150);

        // Ripple effect
        var ripple = document.createElement('div');
        ripple.className = 'tap-ripple';
        var size = 80;
        ripple.style.cssText = [
          'width:'  + size + 'px',
          'height:' + size + 'px',
          'left:'   + (e.clientX - size / 2) + 'px',
          'top:'    + (e.clientY - size / 2)  + 'px',
        ].join(';');
        document.body.appendChild(ripple);
        setTimeout(function () { ripple.remove(); }, 700);
      });

      // ─── Reset ───
      resetBtn.addEventListener("click", function () {
        count = 0;
        counterEl.innerText = count;
        counterEl.classList.remove('bump');
        void counterEl.offsetWidth;
        counterEl.classList.add('bump');
        setTimeout(function () { counterEl.classList.remove('bump'); }, 150);
      });

      // ─── Sidebar toggle ───
      var isOpen = false;

      function openSidebar() {
        isOpen = true;
        buttonsContainer.classList.add('nav-open');
        sidebarOverlay.classList.add('visible');
        menuContainer.classList.add('nav-open');
        menuContainer.setAttribute('aria-label', 'إغلاق القائمة');
      }
      function closeSidebar() {
        isOpen = false;
        buttonsContainer.classList.remove('nav-open');
        sidebarOverlay.classList.remove('visible');
        menuContainer.classList.remove('nav-open');
        menuContainer.setAttribute('aria-label', 'فتح القائمة');
      }
      menuContainer.addEventListener("click", function (e) {
        e.stopPropagation();
        isOpen ? closeSidebar() : openSidebar();
      });
      sidebarOverlay.addEventListener("click", closeSidebar);

      // Close on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && isOpen) closeSidebar();
      });

      // ─── Section buttons ───
      allButtons.forEach(function (btnId) {
        var btn     = document.getElementById(btnId);
        var targetId = sections[btnId];

        btn.addEventListener("click", function () {
          // Hide welcome
          welcomeHint.classList.add('hidden');

          // Hide all sections
          allSectionIds.forEach(function (id) {
            document.getElementById(id).classList.add('hidden');
          });

          // Show target
          var target = document.getElementById(targetId);
          target.classList.remove('hidden');

          // Re-trigger animation
          target.style.animation = 'none';
          void target.offsetWidth;
          target.style.animation = '';

          // Active state on button
          allButtons.forEach(function (id) {
            document.getElementById(id).classList.remove('active');
          });
          btn.classList.add('active');

          closeSidebar();
        });
      });
    });