/**
 * Custom Confirmation Dialog Box Component (Airbnb Style)
 */
export function showCustomConfirm({ 
  title, 
  message, 
  confirmText = "Confirm", 
  cancelText = "Cancel", 
  onConfirm 
}) {
  // Create overlay container
  const dialogOverlay = document.createElement('div');
  dialogOverlay.className = 'custom-dialog-overlay';
  
  dialogOverlay.innerHTML = `
    <div class="custom-dialog-box animate-dialog-in">
      <button class="custom-dialog-close" aria-label="Close dialog">✕</button>
      <div class="custom-dialog-header">
        <h3 class="custom-dialog-title">${title}</h3>
      </div>
      <div class="custom-dialog-body">
        <p>${message}</p>
      </div>
      <div class="custom-dialog-actions">
        <button class="btn btn-secondary btn-dialog-cancel">${cancelText}</button>
        <button class="btn btn-primary btn-dialog-confirm">${confirmText}</button>
      </div>
    </div>
  `;

  document.body.appendChild(dialogOverlay);
  document.body.style.overflow = 'hidden'; // Prevent background scrolling

  const closeBtn = dialogOverlay.querySelector('.custom-dialog-close');
  const cancelBtn = dialogOverlay.querySelector('.btn-dialog-cancel');
  const confirmBtn = dialogOverlay.querySelector('.btn-dialog-confirm');

  function dismissDialog() {
    const dialogBox = dialogOverlay.querySelector('.custom-dialog-box');
    if (dialogBox) {
      dialogBox.classList.remove('animate-dialog-in');
      dialogBox.classList.add('animate-dialog-out');
    }
    dialogOverlay.style.opacity = '0';
    
    setTimeout(() => {
      dialogOverlay.remove();
      // Only restore scroll if there are no other open modals or overlays
      if (!document.querySelector('.modal-overlay.open') && !document.querySelector('.custom-dialog-overlay')) {
        document.body.style.overflow = '';
      }
    }, 200);
  }

  // Bind close events
  closeBtn.addEventListener('click', dismissDialog);
  cancelBtn.addEventListener('click', dismissDialog);
  
  confirmBtn.addEventListener('click', () => {
    dismissDialog();
    if (onConfirm) onConfirm();
  });

  // Close on backdrop click
  dialogOverlay.addEventListener('click', (e) => {
    if (e.target === dialogOverlay) {
      dismissDialog();
    }
  });

  // Close on Escape key
  const keyHandler = (e) => {
    if (e.key === 'Escape') {
      dismissDialog();
      document.removeEventListener('keydown', keyHandler);
    }
  };
  document.addEventListener('keydown', keyHandler);
}
