let gameSequence=[];

let userSequence=[];

let gameStarted=false;

let level=0;

let h2=document.querySelector('h2');

let h3=document.querySelector('h3');

let score=0;

let index=-1;

let flashArrayColor=['red','yellow','purple','goldenrod'];

document.addEventListener('keypress',function(){
    if(gameStarted===false){
        gameStarted=true;
        console.log('game started');    // level 1 : start game and flast the button
        levelUp();
    }
})

function levelUp(){
    level++;
    index=-1;
    userSequence=[];
    h2.innerText=`Level ${level}`;

    let randomIndex=Math.floor(Math.random()*4);
    let color=flashArrayColor[randomIndex];
    let colorButton=document.querySelector(`.${color}`);
    flashButton(colorButton);
    gameSequence.push(color);

    if(level>score){
        score=level;
        h3.innerText=`Highest Score ${score}`;
    }

}

function flashButton(btn){

    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)

}


function userFlashButton(btn){

    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250)
   

}

function colorButtonClicked(){
    console.log('button clicked')
    userFlashButton(this)
    let userColor=this.getAttribute('id');
    userSequence.push(userColor);
    index++;
    Check(index);

}

function Check(i){

    if(userSequence[i]==gameSequence[i]){
        if(i==level-1){
            setTimeout(levelUp,1000);
        }
        else{
        
        }

    }else{
        stopGame();
    }
    
    
}

function stopGame(){
    h2.innerHTML=`GAME OVER !! your score is <b>${level-1}</b> <br> press any key to start`
    console.log('game stop')
    
    resetGame();
    document.querySelector('body').style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector('body').style.backgroundColor="white";
    },100)

}

function resetGame(){
    gameStarted=false;
    level=0;
    index=-1;
    gameSequence=[];
    userSequence=[];

}

let btn=document.querySelectorAll('.btn');
for(let b of btn){
    b.addEventListener('click',colorButtonClicked)
}





