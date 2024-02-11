let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")


const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random() * 3);
    return options[randidx];
};
const drawGame=()=>{
msg.innerText="Game was Draw. Play again.";
msg.style.backgroundColor="#081b31";
};
const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`You lose! ${compChoice} beats Your ${userchoice}`;
       
        msg.style.backgroundColor="red";

    }
};

const playGame=(userchoice)=>{
    console.log("user choice",userchoice);
    //generate computer choice=> modular way of programming
    const compChoice=genComputerChoice();
    console.log("comp choice:",compChoice);
    if(userchoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors,paper
            userwin=compChoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //rock,scissors
            userwin=compChoice==="scissors"?false:true;
        }else{
            //rock,paper
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});