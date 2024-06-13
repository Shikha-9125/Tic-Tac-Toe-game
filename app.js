let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turn0=true; //playerX and playerY
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
 const resetgame=()=>{
        turn0=true;
        enableboxes();
        msgcontainer.classList.add("hide");
 }
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("boxes was clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}
 const showwinner=(winner)=>{
    msg.innerText= `congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
 }
const checkWinner=()=>{
    for( let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if( pos1val != "" && pos2val != "" , pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};
   newgamebtn.addEventListener("click",resetgame);
   resetbtn.addEventListener("click",resetgame);