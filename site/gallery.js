const gallery = document.querySelector('#photo-gallery');
const controls = document.querySelector('.gallery-controls');
if (gallery && controls) {
 controls.hidden = false;
 const move = direction => {
  const slide = gallery.querySelector('.gallery-slide');
  const width = slide.getBoundingClientRect().width + 24;
  gallery.scrollBy({left: direction * width, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
 };
 document.querySelector('#gallery-prev').addEventListener('click', () => move(-1));
 document.querySelector('#gallery-next').addEventListener('click', () => move(1));
 gallery.addEventListener('keydown', event => {
  if (event.target !== gallery) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);}
 });
 const update = () => {
  document.querySelector('#gallery-prev').disabled = gallery.scrollLeft < 2;
  document.querySelector('#gallery-next').disabled = gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 2;
 };
 gallery.addEventListener('scroll', update, {passive:true});
 window.addEventListener('resize', update);
 update();
}
