let btn = document.getElementById('cta-btn'); 
let overlay = document.getElementById('overlay'); /* to access* */
btn.addEventListener('click',()=> {
  overlay.style.display = 'grid';
  overlay.classList.add('animate-overlay'); //this adds the effect assocaited to animation-overlay
  document.getElementById("myForm").reset();
  setTimeout(()=>{
    overlay.classList.remove('animate-overlay');
    overlay.style.display = 'none';
  },3000);
});

