let options = {
  threshold: [0, 0.25, 0.5, 0.75, 1],
};

const intersectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log('demo box 進到 viewport了！');
  } else {
    console.log('demo box 離開 viewport了！');
  }
}, options);

intersectionObserver.observe(document.querySelector('.demo-box'));
