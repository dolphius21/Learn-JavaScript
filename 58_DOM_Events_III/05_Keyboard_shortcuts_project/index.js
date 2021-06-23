// TODO open modal on 'n' when it's closed and close it on 'Escape' when it's open
import { toggleModal } from './attendees.js';

document.addEventListener('keyup', (e) => {
  e.key === 'n' && !modal.classList.contains('show') && toggleModal();
  e.key === 'Escape' && toggleModal();
});
