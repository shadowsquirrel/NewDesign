var quotes = [

    'Who wishes to fight must first count the cost.',

    'Know yourself and you will win all battles.',

    'So in war, the way is to avoid what is strong, and strike at what is weak.',

    'Appear weak when you are strong, and strong when you are weak.',

    'One may know how to conquer without being able to do it.',

    'Attack is the secret of defense; defense is the planning of an attack.',

    'Great results, can be achieved with small forces.',

    'Ponder and deliberate before you make a move.',

    'Every battle is won before it is ever fought.',

    'The opportunity of defeating the enemy is provided by the enemy himself.'

]

// lasts 3 seconds
var sunTzuIntro = function() {

    $('.speechBubble').css({'transition':'0s',
    'opacity':'0'});
    $('.someQuote').css({'font-size':'27px'});
    $('.someQuote').html('Welcome back to the minigame!');

    setTimeout(()=>{
        $('.sunTzuWrap, .speechBubble').css({'transition':'1s',
        'opacity':'1'});
    }, 1000)

    setTimeout(()=>{
        $('.someQuote').css({'transition':'0.5s',
        'opacity':'0'});
    }, 5000)

    setTimeout(()=>{
        $('.someQuote').html('Sun-Tzu-Bot wishes you good fortune in your journey.');
    }, 6100)

    setTimeout(()=>{
        $('.someQuote').css({'transition':'1s',
        'opacity':'1'});
    }, 6200)

    setTimeout(()=>{
        $('.someQuote').css({'transition':'0.5s',
        'opacity':'0'});
    }, 10000)

    setTimeout(()=>{
        $('.someQuote').html('Farewell for now...');
    }, 11100)

    setTimeout(()=>{
        $('.someQuote').css({'transition':'1s',
        'opacity':'1'});
    }, 11200)

    setTimeout(()=>{
        $('.sunTzuWrap').css({'transition':'1s',
        'opacity':'0'});
    }, 15200)

}

var sunTzuLongIntro = function() {

    $('.speechBubble').css({'transition':'0s',
    'opacity':'0'});
    $('.someQuote').css({'font-size':'27px'});
    $('.someQuote').html('Welcome to the minigame!');

    setTimeout(()=>{
        $('.sunTzuWrap, .speechBubble').css({'transition':'1s',
        'opacity':'1'});
    }, 1000)

    setTimeout(()=>{
        $('.someQuote').css({'transition':'0.5s',
        'opacity':'0'});
    }, 4000)

    setTimeout(()=>{
        $('.someQuote').html('I am Sun-Tzu-Bot.');
    }, 4600)

    setTimeout(()=>{
        $('.someQuote').css({'transition':'1s',
        'opacity':'1'});
    }, 4700)

    setTimeout(()=>{
        $('.someQuote').css({'transition':'0.5s',
        'opacity':'0'});
    }, 8700)

    setTimeout(()=>{
        $('.someQuote').html('I will accompany you in your minigame journey.');
    }, 9200)

    setTimeout(()=>{
        $('.someQuote').css({'transition':'1s',
        'opacity':'1'});
    }, 9300)

    setTimeout(()=>{
        $('.someQuote').css({'transition':'0.5s',
        'opacity':'0'});
    }, 13300)

    setTimeout(()=>{
        $('.someQuote').html('Good luck and farewell for now...');
    }, 13900)

    setTimeout(()=>{
        $('.someQuote').css({'transition':'1s',
        'opacity':'1'});
    }, 14000)

    setTimeout(()=>{
        $('.sunTzuWrap').css({'transition':'1s',
        'opacity':'0'});
    }, 19000)

}

var sunTzuRemember = function() {

    $('.someQuote').css({'transition':'0.5s',
    'opacity':'0'});

    setTimeout(()=>{

        $('.someQuote').css({'font-size':'27px'});
        $('.someQuote').html('While you play the minigame, remember this');

    }, 500)

    setTimeout(()=>{

        $('.someQuote').css({'transition':'1s',
        'opacity':'1'});

    }, 550)

}

var sunTzuAdvice = function() {

    $('.someQuote').css({'transition':'1s',
    'opacity':'0'});

    setTimeout(()=>{

        $('.someQuote').css({'font-size':'24px'});

        var quoteIndex = Math.floor(Math.random()*10);

        var myQuote = quotes[quoteIndex];

        $('.someQuote').html(myQuote);

    }, 1100)

    setTimeout(()=>{

        $('.someQuote').css({'transition':'2s',
        'opacity':'1'});

    }, 2000)

}


var sunTzuTalk = function() {

    sunTzuRemember();

    setTimeout(()=>{

        sunTzuAdvice();

    }, 4000)

}
