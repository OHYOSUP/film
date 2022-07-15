const icon = document.querySelectorAll('#icon>div');
const watchLogo = document.getElementById('watchaLogo');

console.log(icon);

// for(let i = 0; i< icon.length; i++){
//   icon[i].addEventListener('click', ()=>{
//     location.href = 'https://www.youtube.com/watch?v=5Wk2hPuQgbM'
//   })
// }


  watchLogo.addEventListener('click', ()=>{
    location.href = 'https://watcha.com/'
  })
