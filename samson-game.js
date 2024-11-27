let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","blue"];
let start=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
    console.log("Game Start");
    start=true;
    levelup();
    }
});
function buttonflash(btn)
{
    btn.classList.add("flash")
    setTimeout(function()
{
    btn.classList.remove("flash")
},540
);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function()
{
    btn.classList.remove("userflash");
},458);
}
function checkans(idx){
  

    if(userseq[idx]==gameseq[idx])
    {
       if(userseq.length==gameseq.length)
       {
       setTimeout(levelup,1000);
       }
    }
    else{
        h2.innerText="Game is over!";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";   
        },150);
        reset();
    }
}

function levelup(){
    userseq=[];
level++;
h2.innerText=`level${level}`;
let randind=Math.floor(Math.random()*3);
let rndcolor=btns[randind];
let rndbtn=document.querySelector(`.${rndcolor}`);
// console.log(randind);
// console.log(rndcolor);
// console.log(rndbtn);
  gameseq.push(rndcolor);
  console.log(gameseq);
  
buttonflash(rndbtn);
}
function buttonpress(){
  let btn =this;
  console.log(btn);
  userflash(btn);
  usercolor =btn.getAttribute("id");
  userseq.push(usercolor);
  console.log(userseq);
checkans(userseq.length-1);
}
let  allbtns=document.querySelectorAll(".btn");
for(bt of allbtns)
{
    bt.addEventListener("click",buttonpress);
}
function reset(){
    userseq=[];
    gameseq=[];
    level=0;
    start=false;
    // let h=document.createElement("h2");
    h2.innerHTML=`Game over! <br> your score is ${level}<br>  press any key to restart game `;
    // h.appendChild("h2");
}
