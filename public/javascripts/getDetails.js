let cards = document.querySelectorAll('.portfolio-card').forEach((card) => {
  let infoButton = card.querySelector('.more-info');
  infoButton.onclick = () => {
    let body = card.querySelector('.portfolio-card__body');
    console.log(body);
    body.classList.add('reveal');
    let closeButton = card.querySelector('.body__close');
    closeButton.onclick = () => {
      let body = card.querySelector('.portfolio-card__body');
      body.classList.remove('reveal');
    }
  }
});
  
  


