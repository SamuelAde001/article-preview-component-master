const sharebtn = document.querySelector ('.shareicon');
const sharebox = document.querySelector ('.sharebox');
const smallsharebx = document.querySelector ('.smallsharebx');

sharebtn.addEventListener ('click', function () {
  this.classList.toggle ('active');
  sharebox.classList.toggle ('active');
  smallsharebx.classList.toggle ('active');
});
