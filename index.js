var color = ['red','green', 'yellow', 'blue'];
var gamePattern = [];
var userPattern = [];
var level = 0;

$('#start').click(function(){
    titleStart();
    setTimeout(function(){
        generatPattern()}, 4000);
})

$('.btn').click(function(){
    var userColorPick = $(this).attr('id');
    userPattern.push(userColorPick);
    sound(userColorPick);
    buttonAnimation(userColorPick);
    checkPatern(userPattern.length-1);
})

function titleStart(){
    $('h1').text('Game Start 3');
    setTimeout(function(){
        $('h1').text('Game Start 2');
    },1000);
    setTimeout(function(){
        $('h1').text('Game Start 1');
    },2000);
    setTimeout(function(){
        $('h1').text('Go!');
    },3000);

}

function sound(color){
    var audio = new Audio('./sounds/'+color+'.mp3');
    audio.play();
}

function buttonAnimation(color){
    $('#'+color).addClass('pressed');
    setTimeout(function(){
        $('#'+color).removeClass('pressed');    
    }, 100);
}

function generatPattern(){
    userPattern = [];
    level++;
    $('h1').text('Level '+level);
    var random = Math.floor(Math.random()* 4);
    var randomColor = color[random];
    gamePattern.push(randomColor);
    setTimeout(function(){
        buttonAnimation(randomColor);
        sound(randomColor);
    },800);
}

function checkPatern(index){
    if(gamePattern[index] !== userPattern[index]){
        gamePattern = [];
        userPattern = [];
        level = 0;
        gameOver();
    }
    else if(gamePattern.length === userPattern.length){
        setTimeout(function(){
            generatPattern();
        },1000);
    }
}

function gameOver(){
    $('h1').text('Game Over, press Start!');
    $('body').addClass('game-over');
    setTimeout(function(){
        $('body').removeClass('game-over');
    },500)
    sound('wrong');
}