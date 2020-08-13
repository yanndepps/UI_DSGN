let width = document.getElementById('width');
let onResize = function() {
  width.innerText = document.body.clientWidth;
  width.classList.add('display-width');
  setTimeout(() => {
    width.classList.remove('display-width');
  }, 2000)
}
window.addEventListener('resize', onResize);
