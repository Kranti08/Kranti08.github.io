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

const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.getElementById('primary-nav');
function closeMenu(){primaryNav.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));primaryNav.classList.toggle('is-open',open);});
primaryNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && menuToggle.getAttribute('aria-expanded')==='true'){closeMenu();menuToggle.focus();}});
const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;primaryNav.querySelectorAll('a').forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});});},{rootMargin:'-15% 0px -60% 0px'});
primaryNav.querySelectorAll('a').forEach(link=>{const section=document.querySelector(link.hash);if(section)sectionObserver.observe(section);});
