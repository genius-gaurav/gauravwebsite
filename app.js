/**
 * Airbnb-Style Portfolio Web Application Logic
 * Gaurav Yadav Portfolio - app.js
 */

// ==========================================
// 1. Projects Data Store
// ==========================================
const PROJECTS_DATA = {
  1: {
    id: 1,
    title: "Website Design for Amurot",
    location: "Bilaspur, Chhattisgarh",
    rating: "4.5",
    reviewsCount: "Bhaskar & 1 other review",
    role: "Website Design Intern",
    company: "amurot.com",
    duration: "Jan 2026 - Present",
    bannerSvg: `
      <svg viewBox="0 0 400 225" style="width: 100%; height: 100%; display: block;">
        <rect width="100%" height="100%" fill="#ffffff"/>
        <circle cx="200" cy="112" r="70" fill="none" stroke="#ff385c" stroke-width="4"/>
        <path d="M150 112h100M200 62v100" stroke="#ff385c" stroke-width="4" stroke-linecap="round"/>
        <text x="200" y="118" text-anchor="middle" font-size="14" fill="#222222" font-family="'Inter', sans-serif" font-weight="bold">AMUROT.COM</text>
        <rect x="20" y="20" width="360" height="185" rx="10" fill="none" stroke="#dddddd" stroke-width="2"/>
      </svg>
    `,
    badge: "Class Representative Choice",
    description: "During my internship at amurot.com, I focused on high-fidelity user interface design and prototyping. My responsibilities included rewriting structural layouts for clean visual presentation, optimizing responsiveness across mobile viewports, and building smooth interaction transitions. Collaborating directly with engineering teams, we ensured a pixel-perfect execution of modern design rules.",
    features: [
      { title: "UI/UX Optimization", desc: "Collaborated on redrawing user flows and user journey steps." },
      { title: "Mobile-First Design", desc: "Implemented flexible layouts scaling down cleanly to 320px." },
      { title: "Visual Assets Integration", desc: "Redesigned icons, SVG banners, and brand color maps." }
    ],
    techStack: ["HTML", "CSS", "Vanilla JS", "UI Design System", "Figma Prototyping"],
    liveUrl: "https://amurot.com"
  },
  2: {
    id: 2,
    title: "Customizable Portfolio Systems",
    location: "Remote Project",
    rating: "4.8",
    reviewsCount: "Peer Review",
    role: "Lead Frontend Engineer",
    company: "Personal Project",
    duration: "2026",
    bannerSvg: `
      <svg viewBox="0 0 400 225" style="width: 100%; height: 100%; display: block;">
        <rect width="100%" height="100%" fill="#ffffff"/>
        <polygon points="200,40 320,180 80,180" fill="none" stroke="#222222" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="200" cy="120" r="30" fill="#ff385c"/>
        <text x="200" y="205" text-anchor="middle" font-size="12" fill="#666666" font-family="'Inter', sans-serif" font-weight="500">React & Tailwind dashboard</text>
        <rect x="20" y="20" width="360" height="185" rx="10" fill="none" stroke="#dddddd" stroke-width="2"/>
      </svg>
    `,
    badge: "Guest Favorite",
    description: "A highly customizable dashboard project designed to let developers create responsive profiles dynamically. It features a component-based layout builder, customizable color tokens corresponding to Tailwind classes, and optimized rendering configurations to prevent DOM rebuild lagging. Built to demonstrate advanced state synchronization in complex frontend applications.",
    features: [
      { title: "Dynamic Component Builder", desc: "Allows drag-and-drop structural updates in real-time." },
      { title: "Design System Customizer", desc: "Adjusts colors, rounded borders, and margins dynamically." },
      { title: "State Persistence", desc: "Leverages localStorage and state sync hooks for instant loading." }
    ],
    techStack: ["React.js", "Tailwind CSS", "State Management", "Local Storage", "Vite"],
    liveUrl: "https://github.com/genius-gaurav"
  },
  3: {
    id: 3,
    title: "DBMS Schema Optimizer",
    location: "Bilaspur Academic",
    rating: "4.7",
    reviewsCount: "Class Project Review",
    role: "Database Architect",
    company: "DBMS Course Lab",
    duration: "2025",
    bannerSvg: `
      <svg viewBox="0 0 400 225" style="width: 100%; height: 100%; display: block;">
        <rect width="100%" height="100%" fill="#ffffff"/>
        <rect x="100" y="45" width="200" height="35" rx="6" fill="none" stroke="#222222" stroke-width="4"/>
        <rect x="100" y="95" width="200" height="35" rx="6" fill="none" stroke="#222222" stroke-width="4"/>
        <rect x="100" y="145" width="200" height="35" rx="6" fill="none" stroke="#222222" stroke-width="4"/>
        <line x1="150" y1="45" x2="150" y2="180" stroke="#ff385c" stroke-width="2"/>
        <text x="200" y="205" text-anchor="middle" font-size="12" fill="#666666" font-family="'Inter', sans-serif" font-weight="500">Relational Database Schemas</text>
        <rect x="20" y="20" width="360" height="185" rx="10" fill="none" stroke="#dddddd" stroke-width="2"/>
      </svg>
    `,
    badge: "Database Masterpiece",
    description: "Developed to automate the validation of relational database tables. This schema parser reads database files, identifies normalization violations (1NF, 2NF, 3NF, BCNF), and outputs SQL queries to refactor the database into a cleaner schema. Additionally, it highlights index optimization recommendations based on mock select queries.",
    features: [
      { title: "Normalization Checker", desc: "Verifies relational tables for Boyce-Codd & Third Normal forms." },
      { title: "Query Indexing Analyzer", desc: "Suggests indexes for heavily queried foreign key columns." },
      { title: "SQL Generation Script", desc: "Outputs clean refactoring scripts dynamically." }
    ],
    techStack: ["SQL", "Relational DBMS", "Python Parser", "Database Normalization", "Query Tuning"],
    liveUrl: "https://github.com/genius-gaurav"
  },
  4: {
    id: 4,
    title: "CLI Automation Tools & Systems",
    location: "Bilaspur Systems Lab",
    rating: "4.9",
    reviewsCount: "Bhaskar & Peer Review",
    role: "Systems Programmer",
    company: "Systems Lab",
    duration: "2025",
    bannerSvg: `
      <svg viewBox="0 0 400 225" style="width: 100%; height: 100%; display: block;">
        <rect width="100%" height="100%" fill="#ffffff"/>
        <path d="M60 40h280v120H60z" fill="none" stroke="#222222" stroke-width="4"/>
        <text x="90" y="90" font-size="16" fill="#ff385c" font-family="monospace" font-weight="bold">&gt;_ system_run</text>
        <text x="90" y="115" font-size="12" fill="#222222" font-family="monospace">Analyzing process outputs...</text>
        <text x="200" y="205" text-anchor="middle" font-size="12" fill="#666666" font-family="'Inter', sans-serif" font-weight="500">C++ Multi-threaded script crawler</text>
        <rect x="20" y="20" width="360" height="185" rx="10" fill="none" stroke="#dddddd" stroke-width="2"/>
      </svg>
    `,
    badge: "Highly Performant",
    description: "A suite of automation utilities designed for system-level logging and directory synchronization. Written in C++ for maximum throughput, the multi-threaded crawler scans directory structures, reports duplicate files, and performs search-regex matches across millions of log lines. Python scripts are wrapped over the binaries to support daily cron runs.",
    features: [
      { title: "Multi-threaded Parsing", desc: "Leverages C++ thread pools for parallel log parsing." },
      { title: "File Deduplication Algorithm", desc: "Uses fast hash computation to flag duplicate assets." },
      { title: "Automation Wrapper", desc: "Integrates with system scheduler daemons for automated execution." }
    ],
    techStack: ["C++", "C Language", "Python Wrappers", "Multi-threading", "CLI Architecture"],
    liveUrl: "https://github.com/genius-gaurav"
  }
};

// ==========================================
// 2. DOM Elements Selection
// ==========================================
const headerTabs = document.querySelectorAll('.product-tab');
const categoryTabs = document.querySelectorAll('.category-tab');
const projectCards = document.querySelectorAll('.project-card');
const projectsGrid = document.getElementById('projects-grid');
const searchFilterBtn = document.getElementById('search-filter-btn');

// Dropdowns
const focusSelect = document.getElementById('filter-category');
const timelineSelect = document.getElementById('filter-year');
const techSelect = document.getElementById('filter-tech');

// Modal Elements
const modalOverlay = document.getElementById('project-detail-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalContentArea = document.getElementById('modal-content-area');

// Profile Trigger
const profileDropdownTrigger = document.getElementById('profile-dropdown-trigger');

// ==========================================
// 3. Navigation product tabs scrolling logic
// ==========================================
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
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Sync nav tab highlights on scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 120;
  
  const projectsSec = document.getElementById('projects-section');
  const expSec = document.getElementById('experience-section-wrap');
  const heroSec = document.getElementById('hero');

  if (scrollPos >= expSec.offsetTop && scrollPos < expSec.offsetTop + expSec.offsetHeight) {
    setActiveNavTab('experience');
  } else if (scrollPos >= expSec.offsetTop + expSec.offsetHeight) {
    setActiveNavTab('about');
  } else {
    setActiveNavTab('projects');
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

// ==========================================
// 4. Interactive Filtering / Search Bar Logic
// ==========================================
function filterProjects() {
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
    } else {
      card.style.display = 'none';
    }
  });

  // Check if any visible projects
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
        <button class="btn btn-secondary" style="margin-top: var(--space-base);" onclick="resetAllFilters()">Reset Filters</button>
      `;
      projectsGrid.appendChild(msg);
    }
  } else if (noProjectsMsg) {
    noProjectsMsg.remove();
  }
}

// Global Filter Reset helper
window.resetAllFilters = function() {
  focusSelect.value = 'all';
  timelineSelect.value = 'all';
  techSelect.value = 'all';
  categoryTabs.forEach(t => t.classList.remove('active'));
  document.querySelector('[data-skill="all"]').classList.add('active');
  filterProjects();
};

searchFilterBtn.addEventListener('click', filterProjects);
focusSelect.addEventListener('change', filterProjects);
timelineSelect.addEventListener('change', filterProjects);
techSelect.addEventListener('change', filterProjects);

// ==========================================
// 5. Category Strip Clicks (Skill filtering)
// ==========================================
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

// ==========================================
// 6. Interactive State: Heart Save button
// ==========================================
const heartButtons = document.querySelectorAll('.btn-heart-wishlist');
let favoritesCount = 0;

heartButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop opening the modal
    
    btn.classList.toggle('active');
    
    if (btn.classList.contains('active')) {
      favoritesCount++;
      // Bounce animation on active
      const svg = btn.querySelector('svg');
      svg.style.transform = 'scale(1.3)';
      setTimeout(() => {
        svg.style.transform = 'scale(1)';
      }, 200);
    } else {
      favoritesCount--;
    }

    // Dynamic updates in the profile dropdown avatar
    const avatar = document.querySelector('.avatar-circle');
    if (favoritesCount > 0) {
      avatar.innerHTML = `<span style="color:var(--color-primary);font-weight:700;">♥${favoritesCount}</span>`;
      avatar.style.backgroundColor = 'var(--color-surface-soft)';
      avatar.style.border = '1px solid var(--color-primary)';
    } else {
      avatar.innerHTML = 'GY';
      avatar.style.backgroundColor = 'var(--color-muted)';
      avatar.style.border = 'none';
    }
  });
});

// ==========================================
// 7. Modal Display Detail Views (Listing details)
// ==========================================
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project-id');
    const data = PROJECTS_DATA[projectId];
    if (data) {
      openProjectModal(data);
    }
  });
});

function openProjectModal(data) {
  // Construct Modal Body Structure
  modalContentArea.innerHTML = `
    <!-- Header Title Section -->
    <div class="modal-header-section">
      <h2 class="modal-title">${data.title}</h2>
      <div class="modal-subtitle-strip">
        <span class="modal-rating-pill">
          <svg viewBox="0 0 32 32" style="width:14px; height:14px; fill:var(--color-ink);"><path d="M16 2l4.87 9.87L31 13.37l-7.62 7.42L25.18 31 16 25.87 6.82 31l1.8-10.21L1 13.37l10.13-1.5L16 2z"/></svg>
          <strong>${data.rating}</strong>
        </span>
        <span>·</span>
        <span class="modal-meta-link">${data.reviewsCount}</span>
        <span>·</span>
        <span>${data.location}</span>
      </div>
    </div>

    <!-- 2-Column Listing layout -->
    <div class="modal-grid-layout">
      
      <!-- Left description area -->
      <div class="modal-left-content">
        <div class="modal-media-banner">
          ${data.bannerSvg}
        </div>

        <div class="listing-author-strip">
          <div>
            <h3 class="author-title">Project hosted by Gaurav Yadav</h3>
            <p class="author-subtitle">${data.role} at ${data.company}</p>
          </div>
          <div class="author-avatar">GY</div>
        </div>

        <!-- Highlights Row list -->
        <div class="features-section">
          ${data.features.map(f => `
            <div class="feature-row">
              <div class="feature-icon-container">✓</div>
              <div class="feature-text-block">
                <h4 class="feature-title">${f.title}</h4>
                <p class="feature-desc">${f.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Description Paragraph -->
        <div class="listing-description">
          <p>${data.description}</p>
        </div>

        <!-- Tech Stack Amenities Grid -->
        <div class="amenities-section">
          <h3 class="txt-title-md">What this project offers</h3>
          <div class="amenity-grid">
            ${data.techStack.map(tech => `
              <div class="amenity-item">
                <span class="amenity-icon">▪</span>
                <span>${tech}</span>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Right sticky reservation contact card -->
      <div class="modal-right-sidebar">
        <div class="sticky-reservation-card">
          <div class="res-header">
            <div class="res-price">
              Inquire <span>/ details</span>
            </div>
            <div class="res-rating-summary">
              <svg viewBox="0 0 32 32" style="width:14px; height:14px; fill:var(--color-ink);"><path d="M16 2l4.87 9.87L31 13.37l-7.62 7.42L25.18 31 16 25.87 6.82 31l1.8-10.21L1 13.37l10.13-1.5L16 2z"/></svg>
              <span>${data.rating}</span>
            </div>
          </div>

          <!-- Interactive Contact Form -->
          <form id="reservation-form">
            <div class="res-inputs-block">
              <div class="res-input-row">
                <div class="res-field">
                  <label for="contact-name">Your Name</label>
                  <input type="text" id="contact-name" placeholder="Gaurav Yadav" required>
                </div>
                <div class="res-field">
                  <label for="contact-date">Inquiry Date</label>
                  <input type="date" id="contact-date" required>
                </div>
              </div>
              <div class="res-field" style="border-top: 1px solid var(--color-border-strong)">
                <label for="contact-msg">Message</label>
                <textarea id="contact-msg" placeholder="Let's build a customized project together..." required></textarea>
              </div>
            </div>

            <button type="submit" class="btn btn-primary res-submit-btn">Reserve a Meeting</button>
          </form>

          <p class="res-sub-text">You won't be charged yet</p>

          <div class="res-charge-list">
            <div class="res-charge-row">
              <span>Website Design Experience</span>
              <span>1 Internship</span>
            </div>
            <div class="res-charge-row">
              <span>Leadership Rating</span>
              <span>Class Rep</span>
            </div>
            <div class="res-charge-row total-row">
              <span>Total Rating Score</span>
              <span>4.5 / 5.0</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  `;

  // Pre-fill date with today's date
  const dateInput = document.getElementById('contact-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
  }

  // Bind Form Submission
  const resForm = document.getElementById('reservation-form');
  resForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const msg = document.getElementById('contact-msg').value;
    const date = document.getElementById('contact-date').value;

    const emailSubject = encodeURIComponent(`Meeting Inquiry: ${data.title}`);
    const emailBody = encodeURIComponent(
      `Hi Gaurav,\n\nMy name is ${name}. I am inquiring about your project "${data.title}" on ${date}.\n\nMessage Details:\n${msg}\n\nBest regards,\n${name}`
    );

    // Open email client
    window.location.href = `mailto:gaurav86y@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  });

  // Open modal window
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // Lock background scrolling
}

// Close Modal
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

// Close on clicking overlay background
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
    closeModal();
  }
});

// ==========================================
// 8. General Interactions & Toast Notification
// ==========================================
// Pre-fill profile menu clicks with a quick contact prompt
profileDropdownTrigger.addEventListener('click', () => {
  const confirmMsg = confirm("Would you like to send an email to Gaurav Yadav directly?");
  if (confirmMsg) {
    window.location.href = "mailto:gaurav86y@gmail.com?subject=Inquiry%20from%20Portfolio";
  }
});

const headerHireLink = document.getElementById('btn-header-hire');
headerHireLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = "mailto:gaurav86y@gmail.com?subject=Job%20Offer%20for%20Gaurav";
});
