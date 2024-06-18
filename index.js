
let arr = ["stone" , "paper", "scissor"];
const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor"); 
let reset = document.getElementById("reset");
let chose = document.getElementById("label");
let userswin = 0;
let compswin = 0;

stone.addEventListener("click" , function(){
    document.getElementById("userswin").textContent = "userswin " + userswin;
    document.getElementById("compswin").textContent = "compswin " + compswin;
    let randomnum = Math.floor(Math.random() * 3);
    if(randomnum == 0){
       chose.textContent = "Comp chose " + arr[randomnum];
       results.textContent = "Its a Draw";
    }else if(randomnum == 1){
        compswin++;
        chose.textContent = "Comp chose " + arr[randomnum] ;
        results.textContent = "Comp Wins";
        
    }else{
        userswin++;
        chose.textContent = "Comp chose " + arr[randomnum] ;
        results.textContent = "User Wins";
        
    }
});
paper.addEventListener("click" , function(){
    document.getElementById("userswin").textContent = "userswin " + userswin;
    document.getElementById("compswin").textContent = "compswin " + compswin;
    let randomnum = Math.floor(Math.random() * 3);
    if(randomnum == 0){
        userswin++;
       chose.textContent = "Comp chose " + arr[randomnum];
       results.textContent = "User Wins";
       
    }else if(randomnum == 1){
        chose.textContent = "Comp chose " + arr[randomnum] ;
        results.textContent = "Its a Draw";
    }else{
        compswin++;
        chose.textContent = "Comp chose " + arr[randomnum] ;
        results.textContent = "Comp Wins";
        
    }
});
scissor.addEventListener("click" , function(){
    document.getElementById("userswin").textContent = "userswin " + userswin;
    document.getElementById("compswin").textContent = "compswin " + compswin;
    let randomnum = Math.floor(Math.random() * 3);
    if(randomnum == 0){
        compswin++;
       chose.textContent = "Comp chose " + arr[randomnum];
       results.textContent = "Comp Wins";
       
    }else if(randomnum == 1){
        userswin++;
        chose.textContent = "Comp chose " + arr[randomnum] ;
        results.textContent = "User Wins";
        
    }else{
        chose.textContent = "Comp chose " + arr[randomnum] ;
        results.textContent = "Its a Draw";
    }
});
reset.addEventListener("click" , function(){
    compswin = 0;
    userswin = 0;
    document.getElementById("userswin").textContent = "userswin " + userswin;
    document.getElementById("compswin").textContent = "compswin " + compswin;

});