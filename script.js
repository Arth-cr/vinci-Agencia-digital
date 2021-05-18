function initFAQnav() {

  const faqTitulos = document.querySelectorAll('.js-side-nav dt')
  const appearClass = 'appear';
  
  if(faqTitulos.length) {
    
    faqTitulos[0].classList.add(appearClass)
    faqTitulos[0].nextElementSibling.classList.add(appearClass)
    
    function appearInfo() {
      this.classList.toggle(appearClass);
      this.nextElementSibling.classList.toggle(appearClass)
    }
    
    faqTitulos.forEach((item) =>{
      item.addEventListener('click', appearInfo)
    })
  } 
} initFAQnav();
