var score=0;
var count=0;
var corr=document.querySelectorAll(".right");
var wro=document.querySelectorAll(".wrong");
for(var i = 0; i < corr.length; i++){
	corr[i].addEventListener("click",function(){
        this.classList.toggle("win");
    });
};
for(var i = 0; i < wro.length; i++){
    wro[i].addEventListener("click",function(){
        this.classList.toggle("loose");
    });
};

var submit=document.getElementById("submit");
var yourScore=document.getElementById("score");
submit.addEventListener("click",function(){
    var correct=document.querySelectorAll(".win");
    var wrong=document.querySelectorAll(".loose");
    score=correct.length;
    yourScore.textContent=score;
    //alert("score:"+score);

    for(var i = 0; i < correct.length; i++){
            correct[i].classList.add("greens");
    };
    for(var i = 0; i < wrong.length; i++){
            wrong[i].classList.add("reds");
        
    };
})
