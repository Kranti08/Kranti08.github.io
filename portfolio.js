const dialog = document.getElementById('case-dialog');
const content = document.getElementById('case-content');
document.querySelectorAll('[data-case]').forEach(button => {
 button.addEventListener('click', () => {
  content.replaceChildren(document.getElementById(`case-${button.dataset.case}`).content.cloneNode(true));
  dialog.showModal(); dialog.scrollTop = 0; document.body.classList.add('modal-open');
 });
});
document.getElementById('close-case').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => {
 if(event.target !== dialog) return;
 const r = dialog.getBoundingClientRect();
 if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
});
