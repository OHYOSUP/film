const root = document.getElementById('root');
const film = document.querySelectorAll('#film>div');

console.log(film)
console.log(root)

for(let i = 0; i < film.length; i++){
  film[i].addEventListener('mouseover', ()=>{
    film[i].style.width = '27vw'
    film[i].style.transition = '0.2s'
  })

  film[i].addEventListener('mouseout', ()=>{
    film[i].style.width = '25vw'
    film[i].style.transition = '0.2s'
  })

  film[i].addEventListener('click', ()=>{
    location.href = 'http://127.0.0.1:5500/7.%20filmPage/filmPage.html'
  })
}

