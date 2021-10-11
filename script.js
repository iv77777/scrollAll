







const btnOff = document.querySelector('.scroll-off');
const btnOn = document.querySelector('.scroll-on');
const body = document.body;

function disableScroll(){
  let pagePosition = window.scrollY;
  body.classList.add('disable-scroll');

  // добавляем к боди дата атрибут с текущой позицей страницы
  body.dataset.position = pagePosition;
  // Возращаем body обратно на текущею позицею
  body.style.top = -pagePosition + 'px';
}

function enableScroll(){
  // получаем значения дата атрибута
  let pagePosition = parseInt(body.dataset.position, 10);
  // 
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  window.scroll({top: pagePosition, left:0});
  body.removeAttribute('data-position');
}

btnOff.addEventListener('click', (e) =>{
  disableScroll();
  e.currentTarget.style.pointerEvents = 'none';
  btnOn.style.pointerEvents = 'auto';
 
  btnOff.classList.add('scroll-off--active');
  btnOn.classList.remove('scroll-on--active');
  btnOff.innerText = 'Скролл отключен';
  btnOn.innerText = 'Включить скролл';
});

btnOn.addEventListener('click', (e) =>{
  enableScroll();
  e.currentTarget.style.pointerEvents = 'none';
  btnOff.style.pointerEvents = 'auto';

  btnOn.classList.add('scroll-on--active');
  btnOff.classList.remove('scroll-off--active');

  btnOff.innerText = 'Отключить скролл';
  btnOn.innerText = 'Скролл включен';
});