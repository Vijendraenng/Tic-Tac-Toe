let winnerElement=document.querySelector(`.winner`);
let resultElement=document.querySelector(`.result`);
let new_gameElement =document.querySelector(`.new_game`);
let btnElement=document.querySelectorAll(`.btn`);
let resetElement= document.querySelector(`.reset`);

let turnO=true;

const winPattern=[
    [0,1,2], 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
  ]

let count=0;

  const reset=()=>{
    turnO=true;
    enablebtn();
    resultElement.classList.add(`hide`)
  }

resetElement.addEventListener(`click`,reset)
new_gameElement.addEventListener(`click`,reset)

  
const showWinner=(winner)=>{
    winnerElement.innerText=`Winner is ${winner}`
    resultElement.classList.remove(`hide`)
}


let disabledbtn=()=>{
for(box of btnElement){
    box.disabled=true
}}
let enablebtn=()=>{
for(box of btnElement){
    box.disabled=false;
    box.innerText=``;
    count=0;
}

}
btnElement.forEach(box => {
    box.addEventListener(`click`,()=>{
        count++
        if (turnO) {
            box.innerText=`O`;
            turnO= false;

        }else{
            box.innerText=`X`;
            turnO= true;
        }
        
        box.disabled=true;
        checkWinner();
    })
});
const  checkWinner=()=>{
    for(let pattern of winPattern){
       
        let val1= btnElement[pattern[0]].innerText;
        let val2= btnElement[pattern[1]].innerText;
        let val3= btnElement[pattern[2]].innerText;
        
        if (val1!=``&&val2!=``&&val3!=``) {
            if(val1===val2&&val2===val3){
                
               showWinner(val1)
               disabledbtn()
            }else if(count==9){
                console.log(`earaah`)
                winnerElement.innerText=`Game is Draw`
                resultElement.classList.remove(`hide`)
            }
            
        }
    }
}



   