window.addEventListener('scroll', function(){
  let value = window.scrollY;
  document.getElementById('Koiportada').style.top = -24 + (value *0.05)  +'vw';
  document.getElementById('KoiBG').style.top = (value *0.05)/4 + 'vw';
});