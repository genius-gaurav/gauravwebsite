/**
 * Filters and Navigation Scroll Sync Controller
 */
export function initFilters() {
  const headerTabs = document.querySelectorAll('.product-tab');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const searchFilterBtn = document.getElementById('search-filter-btn');

  const focusSelect = document.getElementById('filter-category');
  const timelineSelect = document.getElementById('filter-year');
  const techSelect = document.getElementById('filter-tech');

  let isScrolling = false;

  // 1. Top Navigation Scroll-to-Section Click Handlers
  headerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      headerTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const sectionId = tab.getAttribute('data-section');
      let targetSection;

      if (sectionId === 'projects') {
        targetSection = document.getElementById('projects-section');
      } else if (sectionId === 'experience') {
        targetSection = document.getElementById('experience-section-wrap');
      } else if (sectionId === 'about') {
        targetSection = document.getElementById('hero');
      }

      if (targetSection) {
        isScrolling = true;
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Resume scroll sync highlight after smooth scroll finishes
        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    });
  });

  // 2. Navigation Scroll Sync Highlighting Bug Fix
  window.addEventListener('scroll', () => {
    if (isScrolling) return;

    const scrollPos = window.scrollY + 150; // offset header height

    const heroSec = document.getElementById('hero');
    const projectsSec = document.getElementById('projects-section');
    const expSec = document.getElementById('experience-section-wrap');

    if (!heroSec || !projectsSec || !expSec) return;

    if (scrollPos >= expSec.offsetTop) {
      setActiveNavTab('experience');
    } else if (scrollPos >= projectsSec.offsetTop) {
      setActiveNavTab('projects');
    } else {
      setActiveNavTab('about');
    }
  });

  function setActiveNavTab(section) {
    headerTabs.forEach(tab => {
      if (tab.getAttribute('data-section') === section) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  // 3. Search and Dropdown Filter Functionality
  function filterProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.getElementById('projects-grid');
    if (!focusSelect || !timelineSelect || !techSelect || !projectsGrid) return;

    const activeFocus = focusSelect.value;
    const activeTimeline = timelineSelect.value;
    const activeTech = techSelect.value;

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardYear = card.getAttribute('data-year');
      const cardTech = card.getAttribute('data-tech');

      const matchCategory = (activeFocus === 'all' || cardCategory === activeFocus);
      const matchYear = (activeTimeline === 'all' || cardYear === activeTimeline);
      const matchTech = (activeTech === 'all' || cardTech === activeTech);

      if (matchCategory && matchYear && matchTech) {
        card.style.display = 'flex';
        card.classList.remove('hidden-by-filter');
      } else {
        card.style.display = 'none';
        card.classList.add('hidden-by-filter');
      }
    });

    // Handle Empty Results
    const visibleCards = Array.from(projectCards).filter(c => c.style.display !== 'none');
    const noProjectsMsg = document.getElementById('no-projects-msg');
    
    if (visibleCards.length === 0) {
      if (!noProjectsMsg) {
        const msg = document.createElement('div');
        msg.id = 'no-projects-msg';
        msg.style.gridColumn = '1 / -1';
        msg.style.padding = '48px';
        msg.style.textAlign = 'center';
        msg.style.color = 'var(--color-muted)';
        msg.innerHTML = `
          <h3 class="txt-title-md" style="margin-bottom: var(--space-sm);">No projects found matching the filter</h3>
          <p class="txt-body-sm">Try resetting your search pill parameters.</p>
          <button class="btn btn-secondary" style="margin-top: var(--space-base);" id="btn-reset-filters">Reset Filters</button>
        `;
        projectsGrid.appendChild(msg);

        // Bind reset listener dynamically
        const resetBtn = document.getElementById('btn-reset-filters');
        if (resetBtn) {
          resetBtn.addEventListener('click', resetAllFilters);
        }
      }
    } else if (noProjectsMsg) {
      noProjectsMsg.remove();
    }
  }

  // Global Filter Reset helper
  function resetAllFilters() {
    if (focusSelect) focusSelect.value = 'all';
    if (timelineSelect) timelineSelect.value = 'all';
    if (techSelect) techSelect.value = 'all';

    categoryTabs.forEach(t => t.classList.remove('active'));
    const allTab = document.querySelector('[data-skill="all"]');
    if (allTab) allTab.classList.add('active');

    filterProjects();
  }

  // Bind dropdown change events
  if (searchFilterBtn) searchFilterBtn.addEventListener('click', filterProjects);
  if (focusSelect) focusSelect.addEventListener('change', filterProjects);
  if (timelineSelect) timelineSelect.addEventListener('change', filterProjects);
  if (techSelect) techSelect.addEventListener('change', filterProjects);

  // 4. Category Skill Tab Selection Sync
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const skillId = tab.getAttribute('data-skill');
      
      // Sync with main search selects
      if (skillId === 'all') {
        focusSelect.value = 'all';
        techSelect.value = 'all';
      } else if (skillId === 'web-design') {
        focusSelect.value = 'web-design';
        techSelect.value = 'all';
      } else if (skillId === 'react') {
        focusSelect.value = 'frontend';
        techSelect.value = 'react';
      } else if (skillId === 'dbms') {
        focusSelect.value = 'dbms';
        techSelect.value = 'sql';
      } else if (skillId === 'python') {
        focusSelect.value = 'all';
        techSelect.value = 'python';
      } else if (skillId === 'cpp') {
        focusSelect.value = 'systems';
        techSelect.value = 'cpp';
      }

      filterProjects();
    });
  });
}
