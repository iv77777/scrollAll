// isMobile определяет с какого устройства зашел пользователь
// вызываем в нужном месте isMobile.any() и если вернуло true, то человек пришел с мобильного устройства
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

// Пример кода в использувани
if (isMobile.any()) {
  // console.log("пользуватиль зашел с мобильного устройства");

  // тегу body добавляем касс '_touch'
  document.body.classList.add('_touch');
} else {
  // console.log("пользуватиль зашел с ПК устройства");

  // тегу body добавляем касс '_pc'
  document.body.classList.add('_pc');
}