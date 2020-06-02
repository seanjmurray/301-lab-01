/* 9 colors 9 divs 2 arrays */
let divs = ['a','b','c','d','e','f','g','h','i'];
let colors = ['red','blue','yellow','green','orange','cornflowerblue','salmon','aqua','palegreen'];
let arr = [];
const sequence = () => {
  arr = [];
  let i = 0;
  while(i<9){
    let x = Math.floor(Math.random()*9)
    while(arr.includes(x)){
      x =  Math.floor(Math.random()*9);
    }
    arr.push(x);
    i++;
  }
  return arr;
}
$(window).resize(()=>{
  
if(window.innerWidth >750){
  sequence()
  for(let i = 0;i<divs.length;i++){
    $(`#${divs[i]}`).css('background-color',colors[arr[i]]);
    console.log('here')
  }
  }else if(749 >= window.innerWidth > 500){
    sequence()
    for(let i = 0;i<divs.length;i++){
      $(`#${divs[i]}`).css('background-color',colors[arr[i]]);
    }
    }else{
      sequence()
      for(let i = 0;i<divs.length;i++){
        $(`#${divs[i]}`).css('background-color',colors[arr[i]]);
  }
}
});

