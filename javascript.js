function lines() {
    let sizeW = Math.random() * 12;
    let e = document.createElement('div');
    let duration = Math.random() * 3;
    e.setAttribute('class', 'circle');
    document.body.appendChild(e);
    e.style.width = 2 + sizeW + 'px';
    e.style.bottom = '0px';
    e.style.left = Math.random() * innerWidth + 'px';
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(function() {
        document.body.removeChild(e);
    }, 5000);
}

setInterval(function() {
    lines();
}, 20);





function openHamburgerMenu(show) {
    var menu = document.querySelector('.hamburgerMenu');
    if (show) {
      menu.classList.add('show');
    } else {
      menu.classList.remove('show');
    }
  }