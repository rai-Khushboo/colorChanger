// Import stylesheets
import './style.css';

//geenrate a random number
const randomColor=function(){
  const hex="0123456789ABCDEF"
  let color='#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]

  }
  return color;
};
//to generate rando values
// console.log(Math.random()*16);//here if we dn't want to incude zero then add one to this statement.
// console.log(Math.floor(Math.random()*16));
// console.log(randomColor());

let intervalId;
// taking reference of start and stop buttonconst
const startChangingColor=function(){
  //method
  if(!intervalId)/*if intervalId is null then*/{
    intervalId=setInterval(changeBgcolor,1000);
  }
  // intervalId=setInterval(changeBgcolor,1000);

  function changeBgcolor(){
    document.body.style.backgroundColor=randomColor();

  }
  //isse color to change ho rha but not contiuously nhi to voh krne ke liye isko ek method me daalna hoga
  // document.body.style.backgroundColor=randomColor();
};
const stopChangingColor=function(){
  clearInterval(intervalId);
  intervalId=null;//isse krne ke baad on clicking start again color changing begins .
};

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)

