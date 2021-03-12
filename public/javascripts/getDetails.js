// module.exports.getDetails = function () {
//   let card = document.querySelector('.portfolio-card');

//   let body = document.querySelector('.portfolio-card__body');
  
//   console.log(body);

//   card.onclick = () => {
//     // card.classList.toggle('show-details');
//     body.classList.toggle('reveal');
//     console.log(body);
//   }
// }

// function getDetails() {
  let cards = document.querySelectorAll('.portfolio-card').forEach((card) => {

    card.onclick = () => {
      // card.classList.toggle('show-details');
      let body = card.querySelector('.portfolio-card__body');
      console.log(body);
      body.classList.toggle('reveal');
    }
  });
  
  


// }