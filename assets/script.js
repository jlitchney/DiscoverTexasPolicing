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
});
