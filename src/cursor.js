/**
 * Custom Cursor Follower Module
 */
export function initCursor() {
  // Disable custom cursor on mobile or touch-only devices
  if (window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

  // Create cursor elements dynamically
  const cursorDot = document.createElement('div');
  const cursorOutline = document.createElement('div');
  
  cursorDot.className = 'custom-cursor-dot';
  cursorOutline.className = 'custom-cursor-outline';
  
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);

  let mouseX = -100;
  let mouseY = -100;
  let outlineX = -100;
  let outlineY = -100;

  // Track mouse moves
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Dot moves immediately with the cursor
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  // Smooth outline follow with linear interpolation (lerp)
  function animateOutline() {
    const lerpSpeed = 0.15;
    outlineX += (mouseX - outlineX) * lerpSpeed;
    outlineY += (mouseY - outlineY) * lerpSpeed;
    
    cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
    
    requestAnimationFrame(animateOutline);
  }
  requestAnimationFrame(animateOutline);

  // Delegate mouseenter/mouseleave hover states for interactive elements
  document.addEventListener('mouseover', (e) => {
    const interactive = e.target.closest('a, button, select, input, textarea, .project-card, .category-tab, [tabindex="0"]');
    if (interactive) {
      cursorOutline.classList.add('hovering');
      cursorDot.classList.add('hovering');
    } else {
      cursorOutline.classList.remove('hovering');
      cursorDot.classList.remove('hovering');
    }
  });

  // Hide cursor when leaving window viewport
  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '1';
  });
}
