// Light interactivity for mockups
document.addEventListener('DOMContentLoaded', () => {
  // Toggle radio cards
  document.querySelectorAll('.radio-card').forEach(card => {
    card.addEventListener('click', () => {
      const group = card.dataset.group;
      if (group) {
        document.querySelectorAll(`.radio-card[data-group="${group}"]`).forEach(c => c.classList.remove('checked'));
      }
      card.classList.add('checked');
    });
  });

  // Region map hover -> show tooltip
  const tooltip = document.getElementById('region-tooltip');
  document.querySelectorAll('[data-region]').forEach(el => {
    el.addEventListener('mouseenter', e => {
      if (!tooltip) return;
      tooltip.style.display = 'block';
      tooltip.innerHTML = `<strong>${el.dataset.region}</strong><br>${el.dataset.jobs || 0} open positions<br>${el.dataset.agencies || 0} agencies hiring`;
    });
    el.addEventListener('mousemove', e => {
      if (!tooltip) return;
      tooltip.style.left = (e.pageX + 14) + 'px';
      tooltip.style.top  = (e.pageY + 14) + 'px';
    });
    el.addEventListener('mouseleave', () => { if (tooltip) tooltip.style.display='none'; });
    el.addEventListener('click', () => {
      window.location.href = '02-jobs.html';
    });
  });

  // Generic accordion
  document.querySelectorAll('.accordion-trigger').forEach(t => {
    t.addEventListener('click', () => {
      const panel = t.nextElementSibling;
      if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });
  });

  initMobileNav();
  initTableScroll();
});

// --- Mobile nav hamburger ---
function menuSvg() {
  return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
}
function closeSvg() {
  return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
}

function initMobileNav() {
  document.querySelectorAll('nav').forEach(nav => {
    const container = nav.querySelector('.container');
    if (!container) return;

    // Find the nav links container: direct child div with 3+ anchor children
    const linksDiv = Array.from(container.children).find(el =>
      el.tagName === 'DIV' && el.querySelectorAll(':scope > a').length >= 3
    );
    // Candidate pages use .primary-nav
    const primaryNav = nav.querySelector('.primary-nav');
    const target = linksDiv || primaryNav;
    if (!target) return;

    if (linksDiv) target.classList.add('nav-links-mobile');

    const btn = document.createElement('button');
    btn.className = 'hamburger-btn';
    btn.setAttribute('aria-label', 'Toggle menu');
    btn.innerHTML = menuSvg();
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = target.classList.toggle('open');
      btn.innerHTML = isOpen ? closeSvg() : menuSvg();
    });
    container.appendChild(btn);
  });

  // Close menu on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-links-mobile.open, .primary-nav.open').forEach(el => {
      el.classList.remove('open');
      const btn = el.closest('nav') && el.closest('nav').querySelector('.hamburger-btn');
      if (btn) btn.innerHTML = menuSvg();
    });
  });
}

// --- Auto-wrap data tables for horizontal scroll ---
function initTableScroll() {
  document.querySelectorAll('table.data').forEach(table => {
    if (table.closest('.table-wrap')) return;
    const wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
    table.style.border = 'none';
    table.style.borderRadius = '0';
    // If parent card has overflow:hidden, switch to overflow-x:auto so scroll works
    const parent = wrap.parentElement;
    if (parent && (parent.style.overflow === 'hidden' || parent.style.overflowX === 'hidden')) {
      parent.style.overflow = 'visible';
      parent.style.overflowX = 'auto';
    }
  });
}
