const root = document.getElementById('root');
// console.log(root);
root.style.width = '100vw'
root.style.height = '100vh'
root.style.overflowY = 'hidden'
root.style.display = 'flex'
root.style.justifyContent = 'center'
root.style.alignItems = 'center'

root.innerHTML = `
<div class = 'screen'>
  <ul>
    <li>김가가</li>
    <li>박나나</li>
    <li>최다다</li>
    <li>윤라라</li>
    <li>이마마</li>
    <li>남궁바바</li>
  </ul>
</div>
`
const container = document.querySelector('ul');
const item = document.querySelectorAll('ul>li');
const screen = document.querySelector('#root>div');

screen.style.width = '40vw'
screen.style.height = '15vh'
screen.style.border = '1px solid red'
screen.style.overflow = 'hidden'
screen.style.position = 'relative'
screen.style.display = 'flex'
screen.style.justifyContent = 'center'
screen.style.alignItems = 'flex-start'

container.style.width = '40vw'
container.style.height = '80vh'
// container.style.border = '1px solid red'
container.style.display = 'flex'
container.style.flexDirection = 'column'
// container.style.justifyContent = 'space-around'
container.style.alignItems = 'center'
container.style.position = 'absolute'
// container.style.top = '-57vh'


const items = Array.from(item);

console.log(screen);

for(let i = 0; i < item.length; i++){
  items[i].style.listStyleType = 'none';
  items[i].style.color = '#fff';
  items[i].style.width = '30vw';
  items[i].style.height = '10vh';
  items[i].style.display = 'flex'
  items[i].style.marginTop = '2vh'
  items[i].style.justifyContent = 'center'
  items[i].style.alignItems = 'center'
  items[i].style.backgroundColor = '#222'
}

let itemtHeight = items[0].offsetHeight
// console.log(itemtHeight);
let slideCount = item.length
let itemtMargin = 2


let currentIndex = 0

// console.log(currentPos);

root.addEventListener('wheel', (e)=>{
  if(e.deltaY < 0){
  if(currentIndex < slideCount-1){
    // console.log(e);
    const offset = itemtHeight*(currentIndex)
    container.style.top = `${offset}px`
    container.style.transition = '0.5s'
    
    console.log(offset);
    currentIndex++;
    }
    if(currentIndex === slideCount-1){
    
      const lastChild = items[items.length-1].cloneNode()
      items.appen(lastChild);

      container.style.top = `0px`;
      container.style.transition = '0.5s'
      currentIndex = -1;
    }
    currentIndex += 1;
  }

  if(e.deltaY > 0){
    const offset = itemtHeight*(currentIndex)
    container.style.top = `${offset}px`
    container.style.transition = '0.5s'
    console.log(offset);

    currentIndex--;
  }
})


