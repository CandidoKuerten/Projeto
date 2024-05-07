const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach(radio => {
  radio.addEventListener('change', function() {
    const slides = document.querySelectorAll('.imagem');
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    const slideIndex = this.id.slice(-1) -1;
    slides[slideIndex].classList.add('active');
  });
});

const legenda = document.querySelectorAll('h1');
radios.forEach(radio => {
  radio.addEventListener('change', function() {
    const legendas = document.querySelectorAll('h1');
    legendas.forEach(slide => {
      slide.classList.add('imagem');
    });
    const legendasIndex = this.id.slice(-1) -1;
    legendas[legendasIndex].classList.remove('imagem');
  });
});

radios.forEach(radio => {
  radio.addEventListener('change', function(){
    const entrada = document.querySelectorAll('.botao')
    entrada.forEach((entrada, index) => {
      setTimeout(() => {
        if (index == this.id.slice(-1) - 1) {
          entrada.setAttribute('checked', 'checked');
        } else {
          entrada.removeAttribute('checked');
        }
      }, index * 1000);
    });
  });
});
      





























