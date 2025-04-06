const buttons=document.querySelectorAll(".button");
console.log(buttons);
const body=document.querySelector("body");
const cname=document.querySelector(".clrname");

buttons.forEach( (button)=>{
  console.log(button.id);
  button.addEventListener("click",function(e){
    console.log(e.target.id);
    const clr=e.target.id;
    if(e.target.id==clr){
      body.style.backgroundColor=`${clr}`;
      cname.innerHTML=`${clr}`;
    }


  })
})