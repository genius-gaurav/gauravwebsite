import { showCustomConfirm } from './dialog.js';

export const PROJECTS_DATA = {
  1: {
    id: 1,
    title: "Website Design for Amurot",
    location: "Bilaspur, Chhattisgarh",
    rating: "4.5",
    reviewsCount: "Bhaskar & 1 other review",
    role: "Website Design Intern",
    company: "amurot.com",
    duration: "Jan 2026 - Present",
    imageUrl: "assets/project_amurot.png",
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
    imageUrl: "assets/project_dashboard.png",
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
    imageUrl: "assets/project_database.png",
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
    imageUrl: "assets/project_cli.png",
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

let favoritesCount = 0;

export function initProjects() {
  const projectCards = document.querySelectorAll('.project-card');
  const modalOverlay = document.getElementById('project-detail-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalContentArea = document.getElementById('modal-content-area');
  const heartButtons = document.querySelectorAll('.btn-heart-wishlist');
  const profileDropdownTrigger = document.getElementById('profile-dropdown-trigger');
  const headerHireLink = document.getElementById('btn-header-hire');

  // Open modal on project card click
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const data = PROJECTS_DATA[projectId];
      if (data) {
        openProjectModal(data, modalOverlay, modalContentArea);
      }
    });
  });

  // Heart wishlist save triggers
  heartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Stop opening the modal
      btn.classList.toggle('active');
      
      const svg = btn.querySelector('svg');
      if (btn.classList.contains('active')) {
        favoritesCount++;
        svg.style.transform = 'scale(1.3)';
        setTimeout(() => {
          svg.style.transform = 'scale(1)';
        }, 200);
      } else {
        favoritesCount--;
      }

      updateAvatarDisplay();
    });
  });

  function updateAvatarDisplay() {
    const avatar = document.querySelector('.avatar-circle');
    if (favoritesCount > 0) {
      avatar.innerHTML = `<span style="color:var(--color-primary);font-weight:700;">♥${favoritesCount}</span>`;
      avatar.style.backgroundColor = 'var(--color-surface-soft)';
      avatar.style.border = '1px solid var(--color-primary)';
    } else {
      avatar.innerHTML = `<img src="assets/avatar_gaurav.png" alt="Gaurav Yadav" style="width:100%;height:100%;object-fit:cover;">`;
      avatar.style.backgroundColor = 'var(--color-muted)';
      avatar.style.border = 'none';
    }
  }

  // Initial avatar load
  updateAvatarDisplay();

  // Close Modal functions
  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // Header quick actions
  if (profileDropdownTrigger) {
    profileDropdownTrigger.addEventListener('click', () => {
      showCustomConfirm({
        title: "Send Email",
        message: "Would you like to send an email to Gaurav Yadav directly?",
        confirmText: "Send Email",
        cancelText: "Cancel",
        onConfirm: () => {
          window.location.href = "mailto:gaurav86y@gmail.com?subject=Inquiry%20from%20Portfolio";
        }
      });
    });
  }

  if (headerHireLink) {
    headerHireLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = "mailto:gaurav86y@gmail.com?subject=Job%20Offer%20for%20Gaurav";
    });
  }
}

function openProjectModal(data, modalOverlay, modalContentArea) {
  modalContentArea.innerHTML = `
    <!-- Header Title Section -->
    <div class="modal-header-section">
      <h2 class="modal-title">${data.title}</h2>
      <div class="modal-subtitle-strip">
        <span class="modal-rating-pill">
          <i data-lucide="star" style="width:14px; height:14px; fill:var(--color-ink); display:inline-block; vertical-align:middle; margin-right:4px;"></i>
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
          <img src="${data.imageUrl}" alt="${data.title}" style="width:100%; height:100%; object-fit:cover; display:block;">
        </div>

        <div class="listing-author-strip">
          <div>
            <h3 class="author-title">Project hosted by Gaurav Yadav</h3>
            <p class="author-subtitle">${data.role} at ${data.company}</p>
          </div>
          <div class="author-avatar">
            <img src="assets/avatar_gaurav.png" alt="Gaurav Yadav" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">
          </div>
        </div>

        <!-- Highlights Row list -->
        <div class="features-section">
          ${data.features.map(f => `
            <div class="feature-row">
              <div class="feature-icon-container">
                <i data-lucide="check" style="width:16px;height:16px;"></i>
              </div>
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
                <i data-lucide="info" style="width:16px;height:16px;margin-right:8px;color:var(--color-muted);"></i>
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
              <i data-lucide="star" style="width:14px;height:14px;fill:var(--color-ink);display:inline-block;margin-right:4px;"></i>
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
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const msg = document.getElementById('contact-msg').value;
      const date = document.getElementById('contact-date').value;

      const emailSubject = encodeURIComponent(`Meeting Inquiry: ${data.title}`);
      const emailBody = encodeURIComponent(
        `Hi Gaurav,\n\nMy name is ${name}.\nI am inquiring about your project "${data.title}" on ${date}.\n\nMessage Details:\n${msg}\n\nBest regards,\n${name}`
      );

      window.location.href = `mailto:gaurav86y@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    });
  }

  // Open modal window and lock scroll
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Import and run Lucide compiler for modal elements
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
