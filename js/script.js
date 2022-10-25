let imgAll = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'] 

let conBtn = document.querySelector('.container-btns'); 

let div1 = document.createElement('div');

let div2 = document.createElement('div');

div1.className= ' btn top';

div2.className= ' btn down';

conBtn.append(div1,div2);

let btnTop = div1;

let btnDo = div2;

btnTop.innerHTML= `<i class="fa-solid fa-chevron-up"></i>`;

btnDo.innerHTML= `<i class="fa-solid fa-chevron-down">`;


// ------------ creati bottoni 

let c = 0;   

let conImg = document.querySelector('.img-all');

for(let i = 0; i < imgAll.length; i++){
  
  conImg.innerHTML += `<img class="pic"src="img/${imgAll[i]}" alt="">`
};

let pic = document.getElementsByClassName('pic');   



btnDo.addEventListener('click', next)
btnTop.addEventListener('click', prev)
let clock;
//---------------------------------------------- 



clock = setInterval(next, 1000);


conImg.addEventListener('mouseover', function(){

clearInterval(clock)

}) 


conImg.addEventListener('mouseout', function(){

clock = setInterval(next, 1000);

 }) 
  


//----------------------------------------------------
pic[c].classList.add('active') 

 function next(){

  pic[c].classList.remove('active')
  c++
  if(c === pic.length){
  
    c = 0;

  }

  pic[c].classList.add('active')


 }

 function prev(){

  pic[c].classList.remove('active')
  c--

  if(c < 0){
    c = pic.length -1
  }

  pic[c].classList.add('active')

  btnDo.classList.remove('dnone')

  
 
}
