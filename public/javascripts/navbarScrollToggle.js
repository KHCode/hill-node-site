window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
      document.querySelector('.navbar__display').style.display = 'none';
    } else {
      document.querySelector('.navbar__display').style.display = 'initial';
    }
}