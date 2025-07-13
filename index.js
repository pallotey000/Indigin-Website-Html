
/* 2nd carousel*/
   var myCarousel = document.querySelector('#demo');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000,
    ride: 'carousel'
  });

  //acceptance
   document.querySelectorAll('.value-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = '#f0f0f0';
      item.style.transform = 'scale(1.05)';
      item.style.transition = 'all 0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = '';
      item.style.transform = 'scale(1)';
    });
  });
