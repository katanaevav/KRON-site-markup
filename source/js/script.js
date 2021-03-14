const car = document.querySelector(".loading__car");
const withCar = document.querySelector(".loading__with-car");

  this.onclick = null; // только первый клик сработает

  let times = 1;

  function go() {
    if (times % 2) {
      car.classList.remove('back');
      car.style.marginLeft = (withCar.clientWidth - 40 - car.clientWidth) + 'px';
    } else {
      car.classList.add('back');
      car.style.marginLeft = 40 + 'px';
    }

  }

  go();

  car.addEventListener('transitionend', function() {
    times++;
    go();
  });
