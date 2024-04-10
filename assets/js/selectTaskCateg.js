let buttons = document.getElementByClass('btn--categ'); 
button.addEventListener('click', function(){
    if (this.getAttribute("data-type")==="submit"){
        checkAnswer();
    }else{
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
    }
})