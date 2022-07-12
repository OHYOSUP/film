const root = document.getElementById('root');
const id = document.getElementById('id');
const password = document.getElementById('password');
const btn = document.getElementById('btn');


id.style.display = 'flex'
id.style.flexDirection = 'column'
id.style.outline = 'none'



password.style.display = 'flex'
password.style.flexDirection = 'column'

const email = 'qweqwe';
const pass = '123123';

  
    btn.addEventListener('click', ()=>{
      if(id.value === email && password.value === pass){
          alert('환영합니다');
        location.href = 'http://127.0.0.1:5500/5.%20mainPage/mainpage-test.html'
      }else{
        alert('아이디 또는 패스워드가 틀렸습니다');
      }
    })
  

  









