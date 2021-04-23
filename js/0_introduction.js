



///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////


var title = {
    update: {},
    global: {},
}

title.global.mySpeed = 5;

title.update.text = function(myString) {

    $('#mainmainTitle').html(myString);

}

title.update.textColor = function(index, direction, extraStep) {

    extraStep = extraStep === undefined ? 1 : extraStep;
    // console.log(index);

    if(title.global.mySpeed != -1) {

        var increasing;

        increasing = direction;

        if(!increasing && index <= 40) {
            increasing = true;
        }

        if(increasing && index > 250) {
            increasing = false;
        }

        var myString;
        myString = 'rgb(' + index + ',' + index + ',' + index +')';

        // console.log(myString);

        $('.welcomeTitle').css({'color': myString});

        if(increasing) {

            // console.log(extraStep);
            var myNewIndex = index + (1 * extraStep);
            // console.log(myNewIndex);

            setTimeout(()=>title.update.textColor(myNewIndex, increasing, extraStep), title.global.mySpeed);

        } else {

            // setTimeout(()=>title.update.textColor(index - 1, increasing), title.global.mySpeed);

        }

    }

}

title.update.size = function(show) {

    if(show) {

        $('.welcomeTitle').css({'transition':'0.01s', 'display':'flex', 'margin-bottom': '-35px'});
        setTimeout(()=>{$('.welcomeTitle').css({'transition':'0.75s', 'transform':'scaleY(1)', 'height':'115px', 'margin-bottom': '20px'}), 15})


    } else {

        $('.welcomeTitle').css({'transition':'1s', 'transform':'scaleY(0)', 'height':'0', 'margin-bottom': '-35px'});
        setTimeout(()=>{$('.welcomeTitle').css({'display':'none'});}, 1000);

    }

}

title.update.closeOpen = function(state, myString, index, extraStep) {

    if(state === 0) {

        $('.welcomeTitle').css({'transition':'0.75s', 'transform':'scaleY(0)', 'height':'0', 'margin-bottom': '-35px'});
        setTimeout(()=>{
            title.update.closeOpen(1, myString, index, extraStep)
        }, 700)

    }

    if(state === 1) {

        title.update.text(myString);
        title.update.textColor(index, true, extraStep);
        setTimeout(()=>{
            $('.welcomeTitle').css({'transition':'0.75s', 'transform':'scaleY(1)', 'height':'115px', 'margin-bottom': '20px'})
        }, 50)

    }

}

title.show = function() {

    title.update.size(true);
    title.update.textColor(0, true);

}

title.hide = function() {

    title.update.size(false);

}

/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////

var box = {

    set: {},
    show: {},
    hide: {},
    global: {},
    button: {},
    slider: {},
    adjust: {},

}

var tutorial = {}

box.global.previousKey = undefined;
box.global.currentKey = undefined;
box.global.transformedBoxes = [];

box.global.keys = [];

box.global.nextBoxToShow = undefined;

box.global.symmetricHeteroTreatment = false;
box.global.asymmetricHeteroTreatment = false;
box.global.homoTreatment = true;


box.set.wrapHeight = function(id) {

    var key = id.split('-')[1];

    box.global.keys.push(key);

    box.global.currentKey = box.global.keys[box.global.keys.length - 1];

    if(box.global.keys.length === 1) {

        box.global.previousKey = box.global.keys[box.global.keys.length - 1];

    } else {

        box.global.previousKey = box.global.keys[box.global.keys.length - 2];

    }

    id = '#' + id;
    var height = $(id).height();
    console.log('height: ' + height);
    if(height === undefined) {
        height = '0px';
    } else {
        height = height + 'px';
    }

    // console.log('we are inside wrapHeight');
    console.log(height);

    var boxbox = '#boxbox-' + key;

    // console.log(key);
    console.log(boxbox);

    $(boxbox).css({'height' : height});

    if(box.global.previousKey != box.global.currentKey) {

        console.log('do we get in here somehow?');

        var prevBoxbox = '#boxbox-' + box.global.previousKey;
        $(prevBoxbox).css({'height' : '0'});

    }

    if(box.global.keys.length > 2) {

        box.global.keys = box.global.keys.slice(Math.max(box.global.keys.length - 2, 1));

    }

    // console.log(box.global.keys);

}

box.set.wrapHeight2 = function(id) {

    var key = id.split('-')[1];

    box.global.keys.push(key);

    box.global.currentKey = box.global.keys[box.global.keys.length - 1];

    if(box.global.keys.length === 1) {

        box.global.previousKey = box.global.keys[box.global.keys.length - 1];

    } else {

        box.global.previousKey = box.global.keys[box.global.keys.length - 2];

    }

    id = '#' + id;
    var height = $(id).height();
    console.log('height: ' + height);
    if(height === undefined) {
        height = '0px';
    } else {
        height = height + 'px';
    }

    // console.log('we are inside wrapHeight');
    console.log(height);

    var boxbox = '#boxbox-' + key;

    // console.log(key);
    console.log(boxbox);

    $(boxbox).css({'height' : height, 'margin-top':'20px', 'margin-bottom':'20px'});

    if(box.global.previousKey != box.global.currentKey) {

        console.log('do we get in here somehow?');

        var prevBoxbox = '#boxbox-' + box.global.previousKey;
        $(prevBoxbox).css({'height' : '0'});

    }

    if(box.global.keys.length > 2) {

        box.global.keys = box.global.keys.slice(Math.max(box.global.keys.length - 2, 1));

    }

    // console.log(box.global.keys);

}

box.move = function(id) {

    var myDiv = '#boxwrap-' + id.split('-')[1] + '-' + id.split('-')[2];

    // console.log(myDiv);

    var myPlace = '#boxbox-' + id.split('-')[1];

    // console.log(myPlace);

    $(myDiv).appendTo(myPlace);

}

box.store = function(id) {

    var myDiv = '#boxwrap-' + id.split('-')[1] + '-' + id.split('-')[2];

    $(myDiv).appendTo('.reviewBox');

}

// need to be used before the transition is made as it is added to the end of the div
box.addSpace = function(id) {

    var key = id.split('-')[1];



    var myBox = '#boxbox-' + key;

    console.log('space is being added to ' + myBox);

    $('<br>').appendTo(myBox);

}

box.show = function(id, addSpaceAbove) {

    var id1, id2, id3;

    // console.log('asdasdasdasda: ' + id);

    id1 = id.split(':')[0];

    id2 = id.split(':')[1];

    if(id2 != undefined) {
        id3 = id1.split('box-')[1];
    }

    console.log('id: ' + id);
    console.log('id1: ' + id1);
    console.log('id2: ' + id2);
    console.log('id3: ' + id3);


    if(id2 === 'wait') {

        // if this is not undefined then showresult that is called by the wheel
        // will also activate showing the new box
        // and as it shows it, it should make the below global undefined again
        box.global.nextBoxToShow = id3;

    } else {

        if(addSpaceAbove) {

            box.addSpace(id);

        }

        box.global.nextBoxToShow = undefined;

        box.move(id);
        // console.log('calling wrapHeight');
        box.set.wrapHeight(id);

        id = '#' + id;

        $(id).css({'transform':'scale(1)'});

        // ADD MOVE IFRAME TO THIS DIV METHOD HERE


    }

}

box.show2 = function(id, addSpaceAbove) {

    var id1, id2, id3;

    // console.log('asdasdasdasda: ' + id);

    id1 = id.split(':')[0];

    id2 = id.split(':')[1];

    if(id2 != undefined) {
        id3 = id1.split('box-')[1];
    }

    console.log('id: ' + id);
    console.log('id1: ' + id1);
    console.log('id2: ' + id2);
    console.log('id3: ' + id3);


    if(id2 === 'wait') {

        // if this is not undefined then showresult that is called by the wheel
        // will also activate showing the new box
        // and as it shows it, it should make the below global undefined again
        box.global.nextBoxToShow = id3;

    } else {

        if(addSpaceAbove) {

            box.addSpace(id);

        }

        box.global.nextBoxToShow = undefined;

        box.move(id);
        // console.log('calling wrapHeight');
        box.set.wrapHeight2(id);

        id = '#' + id;

        $(id).css({'transform':'scale(1)'});

        // ADD MOVE IFRAME TO THIS DIV METHOD HERE


    }

}

box.transform = function(idCore, id) {

    var cT, cTCA;

    box.global.transformedBoxes.push(id);
    // console.log(box.global.transformedBoxes);

    box.button.hide(idCore);

    $(id).css({'position':'relative', 'background':'transparent', 'border-width':'0px', 'box-shadow':'0px 0px black', 'margin-top':'-30px'});
    cT = $(id).children('div:first');

    // console.log(cT);
    $(cT).css({'font-size':'20px'});
    cTCA = $(id).children('div:first').children();

    // console.log(cTCA);
    for(var f = 0; f < cTCA.length; f++) {

        $(cTCA[f]).css({'margin-bottom':'-5px'});

    }

    box.global.transformedBoxesStorage = box.global.transformedBoxes;

}

box.transform2 = function(idCore, id , marginTop) {

    var cT, cTCA;

    box.global.transformedBoxes.push(id);
    // console.log(box.global.transformedBoxes);

    // console.log(marginTop);

    mt = marginTop + 'px';

    box.button.hide(idCore);


    $(id).css({'transition':'0.15s', 'border-width':'0px', 'box-shadow':'0px 0px 0px 0px black'});

    setTimeout(()=>{

        $(id).css({'transition':'0.25s', 'background':'transparent', 'border-width':'0px', 'box-shadow':'0px 0px 0px 0px black'});

        setTimeout(()=>{
            // $(id).css({'transition':'1s', 'position':'relative', 'margin-top':mt});
            $(id).css({'transition':'1s', 'margin-top':mt});
        }, 150)

    },150)

    cT = $(id).children('div:first');

    // console.log(cT);
    $(cT).css({'font-size':'20px'});
    cTCA = $(id).children('div:first').children();

    // console.log(cTCA);
    for(var f = 0; f < cTCA.length; f++) {

        $(cTCA[f]).css({'margin-bottom':'-5px'});

    }

    box.global.transformedBoxesStorage = box.global.transformedBoxes;

}

box.global.transformedKey = undefined;

box.flush = function() {

    if(box.global.transformedBoxes.length > 0) {

        box.global.transformedKey = (box.global.transformedBoxes[0]).split('-')[1];

        var id, cT, cTCA;

        id = box.global.transformedBoxes.pop();

        $(id).css({'transition':'1s', 'transform':'scale(0)', 'margin-bottom':'-200px'});
        setTimeout(()=>{

            $(id).css({'transition':'0.5s', 'transition-delay':'2s',
            'position':'absolute', 'background':'rgb(255, 254, 172)',
            'border-width':'4px', 'box-shadow':'0px 2px 5px 1px black',
            'margin-top':'0px',  'margin-bottom':'0px'});

        }, 2000)


        // text div of the div in question
        cT = $(id).children('div:first');
        $(cT).css({'transition':'1s', 'font-size':'25px'});

        // subtext divs of the text div of the div in question
        cTCA = $(id).children('div:first').children();
        for(var f = 0; f < cTCA.length; f++) {

            $(cTCA[f]).css({'transition':'1s', 'margin-bottom':'1rem'});

        }

        // show the button again

        setTimeout(()=>{

            $($($(id).children()[1]).children()).css({'transform':'scale(1)'});

        }, 2000)



        setTimeout(()=>box.flush(), 100);

    } else {

        console.log(box.global.transformedKey);
        var boxWrap = '#boxbox-' + box.global.transformedKey;
        console.log(boxWrap);

        $($(boxWrap).children()).remove('br')
    }


}

box.hide = function(id, transform, moveToReviewBox) {

    var idCore = id.split('box-')[1];

    id = '#' + id;

    if(transform === 1) {

        box.transform(idCore, id);

    } else if(transform === 0) {

        $(id).css({'transform':'scale(0)'});

    } else {

        // console.log('asdaslkdjalskdjalksjdlaksjdlaksdjalksdja');
        box.transform2(idCore, id, transform);

    }

    if(moveToReviewBox) {

        setTimeout(()=>{
            box.store(id);
            $(id).css({'transform':'scale(1)'});
        }, 850);

    }

}

//box.transition('A-1', 'A-2:wait', 1, 1, 0)

box.transition = function(id1, id2, transform, addSpaceBetween, hideButton, delay) {

    delay = delay === undefined ? 750 : delay;

    if(hideButton) {

        box.button.hide(id2);

    }

    id1 = 'box-' + id1;
    id2 = 'box-' + id2;

    box.hide(id1, transform);
    setTimeout(()=>{
        box.show(id2, addSpaceBetween);
    }, delay);

}


// transition2 calls show2 which calls wrapheight2 everything is the same except wrapheight2
// in wrapheight2 everything is the same except boxbox margin top and bottom are reset to 20 20
// we are going to use this when we are making the info box dissapear between contest hs calculator sections
// and we additionally need to also make the boxbox mt and mb 0 0. So when we show a new infobox we need
// to reset the mt and mb to 20 20 and to to that we are using transition2 that is the only difference
// a super lazy short copy past solution
box.transition2 = function(id1, id2, transform, addSpaceBetween, hideButton, delay) {

    delay = delay === undefined ? 750 : delay;

    if(hideButton) {

        box.button.hide(id2);

    }

    id1 = 'box-' + id1;
    id2 = 'box-' + id2;

    box.hide(id1, transform);
    setTimeout(()=>{
        box.show2(id2, addSpaceBetween);
    }, delay);

}


box.button.hide = function(id) {

    id = '#btn-' + id;

    $(id).css({'transform':'scale(0) rotate(1turn)'});

}

box.button.show = function(id) {

    id = '#btn-' + id;

    $(id).css({'transform':'scale(1) rotate(0turn)'});

}

box.global.stopWiggle = true;

box.button.point = function() {
    $('.buttonIndicator').css({'transition':'1s', 'opacity':'1'});
    box.global.stopWiggle = false;
    box.button.wiggle(1);
}

box.button.wiggle = function(state) {
    if(!box.global.stopWiggle) {
        if(state === 0) {
            $('.buttonIndicator').css({'transition':'0.8s', 'top':'-70px'});
            setTimeout(()=>box.button.wiggle(1), 700)
        }
        if(state === 1) {
            $('.buttonIndicator').css({'transition':'1s', 'top':'-60px'});
            setTimeout(()=>box.button.wiggle(0), 700)
        }
    } else {
        $('.buttonIndicator').css({'transition':'1s', 'opacity':'0', 'transform':'scale(0)'});
    }
}

box.slider.point = function() {

    $('.buttonIndicator2').css({'transition':'1s', 'opacity':'1'});
    box.global.stopWiggle = false;
    box.slider.wiggle(1);

}

box.slider.wiggle = function(state) {

    if(!box.global.stopWiggle) {
        if(state === 0) {
            $('.buttonIndicator2').css({'transition':'0.7s', 'left':'220px'});
            setTimeout(()=>box.slider.wiggle(1), 700)
        }
        if(state === 1) {
            $('.buttonIndicator2').css({'transition':'0.7s', 'left':'230px'});
            setTimeout(()=>box.slider.wiggle(0), 700)
        }
    } else {
        $('.buttonIndicator2').css({'transition':'0.3s', 'opacity':'0', 'transform':'scale(0)'});
    }

}

//-------------------------------------------------------------------------//
//-------- TREATMENT SETUP FOR MAP AND ICON SORTING AND INFO BOXES --------//
//-------------------------------------------------------------------------//

tutorial.fixLeftGroupToHetero = true;

box.set.treatment = function(sH, aH, rollOn) {

    rollOn === undefined ? false : rollOn;

    box.global.symmetricHeteroTreatment = sH;
    box.global.asymmetricHeteroTreatment = aH;

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        icon.globalVariable.bothHomo = true;
        icon.globalVariable.bothHetero = false;

        map.globalVariable.ourSideIsHetero = false;
        map.globalVariable.theirSideIsHetero = false;

        calculator.globalVariable.ourFollowersAreHetero = false;
        calculator.globalVariable.theirFollowersAreHetero = false;

        calculator.globalVariable.IG_ourFollowersAreHetero = false;
        calculator.globalVariable.IG_theirFollowersAreHetero = false;

    } else if (box.global.symmetricHeteroTreatment) {

        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = true;

        map.globalVariable.ourSideIsHetero = true;
        map.globalVariable.theirSideIsHetero = true;

        calculator.globalVariable.ourFollowersAreHetero = true;
        calculator.globalVariable.theirFollowersAreHetero = true;

        calculator.globalVariable.IG_ourFollowersAreHetero = true;
        calculator.globalVariable.IG_theirFollowersAreHetero = true;

    } else if (box.global.asymmetricHeteroTreatment) {

        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = false;

        if(!tutorial.fixLeftGroupToHetero) {

            if(Math.random() > 0.5) {

                $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});

                // our side is homo
                $('.equalityAdjustment1').css({'margin-top':'12px'});
                $('.equalityAdjustment2').css({'margin-top':'0px'});
                $('.treatmentInfoBoxLeftHomo, .treatmentInfoBoxRightHetero').css({'display':'flex'})
                $('.treatmentInfoBoxLeftHetero, .treatmentInfoBoxRightHomo').css({'display':'none'})
                map.globalVariable.ourSideIsHetero = false;
                map.globalVariable.theirSideIsHetero = true;

                calculator.globalVariable.ourFollowersAreHetero = false;
                calculator.globalVariable.theirFollowersAreHetero = true;

                calculator.globalVariable.IG_ourFollowersAreHetero = false;
                calculator.globalVariable.IG_theirFollowersAreHetero = true;

            } else {

                $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});

                // our side is hetero
                $('.equalityAdjustment2').css({'margin-top':'12px'});
                $('.equalityAdjustment1').css({'margin-top':'0px'});
                $('.treatmentInfoBoxLeftHomo, .treatmentInfoBoxRightHetero').css({'display':'none'})
                $('.treatmentInfoBoxLeftHetero, .treatmentInfoBoxRightHomo').css({'display':'flex'})
                map.globalVariable.ourSideIsHetero = true;
                map.globalVariable.theirSideIsHetero = false;

                calculator.globalVariable.ourFollowersAreHetero = true;
                calculator.globalVariable.theirFollowersAreHetero = false;

                calculator.globalVariable.IG_ourFollowersAreHetero = true;
                calculator.globalVariable.IG_theirFollowersAreHetero = false;

            }

        } else {

            $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});

            // our side is hetero
            $('.equalityAdjustment2').css({'margin-top':'12px'});
            $('.equalityAdjustment1').css({'margin-top':'0px'});
            $('.treatmentInfoBoxLeftHomo, .treatmentInfoBoxRightHetero').css({'display':'none'})
            $('.treatmentInfoBoxLeftHetero, .treatmentInfoBoxRightHomo').css({'display':'flex'})
            map.globalVariable.ourSideIsHetero = true;
            map.globalVariable.theirSideIsHetero = false;

            calculator.globalVariable.ourFollowersAreHetero = true;
            calculator.globalVariable.theirFollowersAreHetero = false;

            calculator.globalVariable.IG_ourFollowersAreHetero = true;
            calculator.globalVariable.IG_theirFollowersAreHetero = false;

        }

    }


    map.treatment();
    calculator.icons.adjustForTreatment();
    calculator.icons.IG_adjustForTreatment();

    if(rollOn){
        calculator.roll.reset();
        calculator.roll.IG_reset();
    }


}

box.adjust.forWinnerAndTreatmentNoTokenIcons = function() {

    if(map.winnerLeaderIndex === 1) {
        // show white icons (right side/their side)
        $('.blackGroup1').css({'display':'none'});
        $('.whiteGroup1').css({'display':'flex'});

        $('.noTokenLeftHomo, .noTokenRightHomo, .noTokenLeftHetero, .noTokenRightHetero').css({'display':'none'});

        if(map.globalVariable.theirSideIsHetero) {
            $('.noTokenRightHetero').css({'display':'flex'});
        } else {
            $('.noTokenRightHomo').css({'display':'flex'});
        }

    }

    if(map.winnerLeaderIndex === 2) {
        // show black icons (left side/ourside)
        $('.blackGroup1').css({'display':'flex'});
        $('.whiteGroup1').css({'display':'none'});

        $('.noTokenLeftHomo, .noTokenRightHomo, .noTokenLeftHetero, .noTokenRightHetero').css({'display':'none'});

        if(map.globalVariable.ourSideIsHetero) {
            $('.noTokenLeftHetero').css({'display':'flex'});
        } else {
            $('.noTokenLeftHomo').css({'display':'flex'});
        }

    }

}


//-------------------------------------------------------------------------//
//------------------------- DEBUG INITIATION ------------------------------//
//-------------------------------------------------------------------------//

var debug = {
    start: {}
}

//----------------------------------------------------------------------------//
//----------------------------- INTRODUCTION ---------------------------------//
//----------------------------------------------------------------------------//

debug.start.I = function() {

    title.update.text('WELCOME TO THE EXPERIMENT');
    title.update.size(true);
    title.update.textColor(-6000, false, 50);

    $('#boxbox-I').css({'display':'block'});

    setTimeout(()=>{
        box.show('box-I-1');
    },1500);

}


debug.start.I();




//----------------------------------------------------------------------------//
//----------------------------- INTRODUCTION ---------------------------------//
//----------------------------------------------------------------------------//


$('#btn-I-1').click(function() {

    box.transition('I-1', 'I-2', 0, 0, 1);
    title.update.textColor(-6000, false, 50);
    setTimeout(()=>box.button.show('I-2'), 2000);

});

$('#btn-I-2').click(function() {

    box.transition('I-2', 'I-3', 0, 0, 1);
    title.update.textColor(-6000, false, 50);
    setTimeout(()=>box.button.show('I-3'), 2000);

});

$('#btn-I-3').click(function() {

    box.transition('I-3', 'I-4', 1, 1, 1);
    title.update.textColor(-6000, false, 50);
    setTimeout(()=>box.button.show('I-4'), 2000);

});

$('#btn-I-4').click(function() {

    box.transition('I-4', 'I-5', 1, 1, 1);
    title.update.textColor(-6000, false, 50);
    setTimeout(()=>{
        box.button.show('I-5');
        box.button.point();
    }, 2000);

});

$('#btn-I-5').click(function() {

    box.global.stopWiggle = true;

    box.transition('I-5', 'I-6', 1, 1, 1);
    title.update.textColor(-6000, false, 50);
    setTimeout(()=>{
        box.button.show('I-6');
        box.button.point();
    }, 2000);

});

$('#btn-I-6').click(function() {

    // close the box
    box.transition('I-6', '', 0, 0, 1);

    // close the former ghost boxes
    setTimeout(()=>{
        box.flush();
        title.hide();
    }, 100);

    // close the introduction info box container
    $('#boxbox-I').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-I').css({'display':'none'});
    }, 300);

    // Transition to the overview
    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('GAME BASICS');
        title.update.size(true);
        title.update.textColor(-6000, false, 50);

        title.update.size(true);

    }, 1500)

    setTimeout(()=>{
        // show new title and a segue info box
        box.transition('', 'B-0', 0, 0, 1);
    }, 1650)

    setTimeout(()=>box.button.show('B-0'), 3000);

});
