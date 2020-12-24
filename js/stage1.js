////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////


var icon = {

    tool:
    {
        set:{}
    },
    set: {},
    display: {},
    values: {},
    stage1: {},
    reset: {},
    globalVariable: {},

};

icon.globalVariable.playerIndex = undefined //0,1,2,3,4,5
icon.stage1.sortedArray = undefined //to be assigned by logic

icon.globalVariable.ourFollowersAreHetero = undefined;
icon.globalVariable.theirFollowersAreHetero  = undefined;

icon.globalVariable.bothHomo = undefined;
icon.globalVariable.bothHetero = undefined;

icon.globalVariable.isPracticeRound = undefined;

icon.tool.shuffle = function(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;

};

// Need to set the treatment
// homo treatment: bothHomo = 1; bothHetero = 0
// both hetero treatment: bothHomo = 0; bothHetero = 1
// Asymmetric treatment: bothHomo = 0; bothHetero = 0 and
// the below function will randomly decide which side is hetero.
icon.set.treatment = function() {

    icon.globalVariable.ourFollowersAreHetero = 0;
    icon.globalVariable.theirFollowersAreHetero = 0;

    if(Math.random() > 0.5) {
        icon.globalVariable.ourFollowersAreHetero = 1;
    } else {
        icon.globalVariable.theirFollowersAreHetero = 1;
    }

    if(icon.globalVariable.bothHomo) {
        icon.globalVariable.ourFollowersAreHetero = 0;
        icon.globalVariable.theirFollowersAreHetero = 0;
    }

    if(icon.globalVariable.bothHetero) {
        icon.globalVariable.ourFollowersAreHetero = 1;
        icon.globalVariable.theirFollowersAreHetero = 1;
    }

}

// after setting the treatment display the according icons constelation
icon.display.treatment = function() {

    $('.homoA, .heteroA, .homoB, .heteroB').css({'transform':'scale(0)'});

    if(icon.globalVariable.ourFollowersAreHetero) {
        $('.heteroA').css({'transform':'scale(1)'});
    } else {
        $('.homoA').css({'transform':'scale(1)'});
    }

    if(icon.globalVariable.theirFollowersAreHetero) {
        $('.heteroB').css({'transform':'scale(1)'});
    } else {
        $('.homoB').css({'transform':'scale(1)'});
    }

}

// array is defined inside icon.set.stage1 by the role array internally defined
// this array is something like [0,1,0, 0,0,1] where 1 is leader and 0's are followers
icon.tool.set.strongWeak = function(array) {

    var s, w, l;

    // create two true false array of length two
    var a1 = [1,0];
    var a2 = [1,0];

    // combine them
    var a3 = a1.concat(a2);

    // console.log('weakstrong sorted array: ' + a3);
    // console.log('myrole array: ' + array);

    for(var i = 0; i < array.length; i++) {

        // there was an issue with the follower icon hidden behind the leader
        // icon slightly being seen as the follower icons are a bit fat.
        // To overcome that this below fix is applied in here
        if(array[i]) {
            l = '.a' + (i + 1) + '1';
            $(l).css({'transform':'scale(0)'});
        }

        // console.log('inside for loop checking myrole array element: ' + array[i]);
        // then whenever we see in myrole array a zero bring this array
        // as whenever we see in myrole array a zero it means we are dealing with
        // a follower
        if(!array[i]) {

            // console.log('the role is follower');

            s = '.strong' + (i + 1);
            w = '.weak' + (i + 1);

            // console.log('strong string of this follower: ' + s);
            // console.log('weak string of this follower: ' + w);

            $(s).css({'display':'none'});
            $(w).css({'display':'none'});

            // console.log('displaying the weakstrong array inside the for loop: ' + a3);
            // console.log('weakstrong array specific to this follower: ' + a3[0]);

            // if true make the follower strong
            if(a3[0]) {
                // console.log('this follower is strong');
                $(s).css({'display':'flex'});
            } else {
                // console.log('this follower is weak');
                // if false make the follower weak
                $(w).css({'display':'flex'});
            }

            // console.log('finishing the procedure for one step of the loop');

            // shift the array
            a3.shift();

            // console.log('strongweak array after the shift: ' + a3);

        }

    }

}

// REDUNDANT CODE BUT STILL BEING USED TO AVOID ADDITIONAL CSS ACTION
icon.tool.matchIcon = function(array) {

    for(var i = 0; i < array.length; i++) {
        var myID = 'a' + (i + 1);
        var temp = document.getElementById(myID);
        temp.innerHTML = array[i];
    }

}

icon.tool.set.myRole = function(array) {

    // set everything to invisible
    $('.p0, .a10, .a11, .a20, .a21, .a30, .a31, .a40, .a41, .a50, .a51, .a60, .a61').css({'z-index':'0'});

    for(var i = 0; i < array.length; i++) {

        var myRole = array[i] ? 0 : 1;
        // array is true or false match that to the class tag a1x a2x a3x etc...
        var myClass = '.a' + (i + 1) + myRole;
        // all icons are initially at z-index 0
        $(myClass).css({'z-index':'1'});

        //--- crown setup ----//
        // we also have the crown icon for every icon cr1, cr2, cr3, etc...
        var myRoleClass = '.cr' + (i + 1);
        // if leader i.e. if array[i] true then show crown
        var myRole2 = array[i] ? '1' : '0';
        $(myRoleClass).css({'opacity': myRole2});

    }
}

//------------------------------------//
//--- TO BE REPLACED BY LOGIC CODE ---//
//------------------------------------//
// temporary method for now until this code is merged with logic !!!
icon.stage1.generateSortedArray = function() {

    icon.stage1.sortedArray = icon.tool.shuffle([0,1,2,3,4,5]);
    console.log('sorted array: ' + icon.stage1.sortedArray);

}
//------------------------------------//
//------------------------------------//
//------------------------------------//

// FOR THE TIME BEING RANDOMLY ASSIGN A VALUE FOR PLAYERINDEX
icon.globalVariable.playerIndex = Math.floor(Math.random()*6);

// Do this as the first thing
icon.stage1.rearrangeGroupOrder = function() {

    var firstHalf, secondHalf, myList, myNewList;

    var myIndex = icon.stage1.sortedArray.indexOf(icon.globalVariable.playerIndex);

    myList = icon.stage1.sortedArray;

    // if you are in the second group make the second group the first group
    if(myIndex > 2) {

        firstHalf = myList.splice(0, 3);
        secondHalf = myList.splice(-3);

        myNewList = secondHalf.concat(firstHalf);
        icon.stage1.sortedArray = myNewList;

    }

}

icon.set.me = function() {

    var me = icon.globalVariable.playerIndex;

    var s = '.mememe' + (me + 1);
    var k = '.sub' + (me + 1);

    $(k).css({'opacity':'0'});
    $(s).css({'opacity':'1'});


    var me2 = icon.stage1.sortedArray.indexOf(me);

    var l = '.objective' + (me2 + 1);
    var m = '.subjective' + (me2 + 1);

    $(l).css({'display':'none'});
    $(m).css({'display':'flex'});

}

icon.reset.stage1 = function() {

    $('.objective1,  .objective2, .objective3').css({'display':'flex'});
    $('.subjective1,  .subjective2, .subjective3').css({'display':'none'});

}

icon.set.stage1 = function() {

    icon.globalVariable.isPracticeRound = true;

    icon.reset.stage1();

    var roles;

    // generate the shuffled array -> THIS WILL BE TAKEN OUT AFTER LOGIC INTEGRATION
    icon.stage1.generateSortedArray();
    icon.stage1.rearrangeGroupOrder();

    // roles will always be determined by the order in the shuffled array
    roles = [true,false,false, true,false,false]

    // match icon matches the sorted number array with the numbers underneat the icons
    // UNNECESSARY BUT WE WILL KEEP IT AS IT PROVIDES SOME SPACE THAT I DONT WANT TO DEAL WITHIN CSS
    icon.tool.matchIcon(icon.stage1.sortedArray);

    icon.tool.set.myRole(roles);

    icon.globalVariable.bothHomo = 0;
    icon.globalVariable.bothHetero = 0;
    icon.set.treatment();
    icon.display.treatment();
    icon.tool.set.strongWeak(roles);

    icon.set.me();

    // hide  all the images of the sorted icons
    $('.imgwrap2').css({'opacity':'0'});
    // initially show the 6 yellow icons and replay button etc.
    $('.playerBracketImage, .playerRandomSortImage, .wrap1, .imgwrap1').css({'opacity':'1'});
    $('.replayButton').css({'opacity':'0', 'z-index':'-1'});
    $('.hidder').css({'z-index':'2'});


    console.log('player index: ' + icon.globalVariable.playerIndex);
    console.log('rearrangement of groups: ' + icon.stage1.sortedArray);
    console.log('our group is hetero: ' + icon.globalVariable.ourFollowersAreHetero);
    console.log('their group is hetero: ' + icon.globalVariable.theirFollowersAreHetero);

}

icon.stage1.animateSort = function() {

    var a = icon.tool.shuffle([0,1,2,3,4,5]);

    console.log('shuffled order: ' + a);

    var me = icon.globalVariable.playerIndex;

    console.log('player index: ' + me);

    var myIndex = a.indexOf(me);

    a.splice(myIndex, 1);

    console.log('subject taken out of the list: ' +  a);


    icon.stage1.showHide(a[0]);
    setTimeout(()=>icon.stage1.showHide(a[1]), 750);
    setTimeout(()=>icon.stage1.showHide(a[2]), 1500);
    setTimeout(()=>icon.stage1.showHide(a[3]), 2250);
    setTimeout(()=>icon.stage1.showHide(a[4]), 3000);
    setTimeout(()=>icon.stage1.showHide(me), 3750);
    setTimeout(()=>{
        icon.stage1.hideShowButtons();
        $('.wrap2').css({'transition':'1s',  'transition-delay':'0.5s', 'margin-top':'-550px'});
    }, 4500);
    setTimeout(()=>{
        icon.stage1.text();
    }, 5250)


}

icon.stage1.text = function() {

    $('#box-C-2').css({'transition':'0.5s', 'transform':'scale(1)'});
    $('#boxbox-C').css({'opacity':'1'});

    var text1, text2, text3;

    var myIndex = icon.stage1.sortedArray.indexOf(icon.globalVariable.playerIndex);


    if(icon.globalVariable.ourFollowersAreHetero) {

        if(myIndex === 0) {

            text1 = 'You are the <strong>Leader</strong> of your group.';

            if(icon.globalVariable.theirFollowersAreHetero) {

                text2 = 'Notice that in both groups, one follower is strong and the other follower is weak.';

            } else {

                text2 = 'Notice that your followers have unequal power while the opposing group\'s followers have equal power.';

            }

        }

        if(myIndex === 1) {

            text1 = 'You are the <strong>strong follower</strong> of your group.';

            if(icon.globalVariable.theirFollowersAreHetero) {

                text2 = 'Notice that in both groups, one follower is strong and the other follower is weak.';

            } else {

                text2 = 'Notice that while you and the other follower in your group have different power levels, in the opposing group, followers have equal power';

            }

        }

        if(myIndex === 2) {

            text1 = 'You are the <strong>weak follower</strong> of your group.';

            if(icon.globalVariable.theirFollowersAreHetero) {

                text2 = 'Notice that in both groups, one follower is strong and the other follower is weak.';

            } else {

                text2 = 'Notice that while you and the other follower in your group have different power levels, in the opposing group, followers have equal power';

            }

        }

    }

    if(!icon.globalVariable.ourFollowersAreHetero) {

        if(myIndex === 0) {

            text1 = 'You are the <strong>Leader</strong> of your group.';

            if(icon.globalVariable.theirFollowersAreHetero) {

                text2 = 'Notice that while your followers have equal power, the opposing group\'s followers differ in their power levels.';

            }

        }

        if(myIndex === 1) {

            text1 = 'You are the <strong>follower</strong> of your group.';

            if(icon.globalVariable.theirFollowersAreHetero) {

                text2 = 'Notice that while you and the other follower in your group have equal power, the opposing group\'s followers differ in their power levels.';

            }

        }

        if(myIndex === 2) {

            text1 = 'You are the <strong>follower</strong> of your group.';

            if(icon.globalVariable.theirFollowersAreHetero) {

                text2 = 'Notice that while you and the other follower in your group have equal power, the opposing group\'s followers differ in their power levels.';

            }

        }

    }

    if(!icon.globalVariable.isPracticeRound || icon.globalVariable.bothHomo) {
        text2 = '';
        $('.text').css({'font-size':'35px'});

    }

    text3 = 'Please click OK to proceed to the Out-Group Contest 1.'

    $('#text1').html(text1);
    $('#text2').html(text2);
    $('#text3').html(text3);


}

icon.stage1.showHide = function(index) {

    var myString1, myString2, myNewIndex;

    var newArray = icon.stage1.sortedArray;

    myString1 = '.initialIwIndex' + (index + 1);
    $(myString1).css({'opacity':'0'});

    myNewIndex = newArray.indexOf(index);
    myString2 = '.iwIndex' + (myNewIndex + 1);
    $(myString2).css({'opacity':'1'})

}

icon.stage1.hideShowButtons = function() {

    $('.playerBracketImage, .playerRandomSortImage, .wrap1').css({'opacity':'0'});
    $('.replayButton').css({'opacity':'1', 'z-index':'2'});
    $('.hidder').css({'z-index':'-1'});

}


$('#stage1RandomButton').click(function() {

    wiggleArrowActive = false;
    $('.pointerArrow').css({'transition':'0.2s', 'opacity':'0'});
    $('.playerRandomSortImage2').css({'transition':'0.3s', 'transform':'scale(0) rotateY(2turn)'});

    setTimeout(()=>{
        $('.wrap2').css({'opacity':'1'});
        $('#boxwrap-A-2').css({'transition':'0.5', 'transform':'scale(0)'});
    },300)

    setTimeout(()=>icon.stage1.animateSort(), 1500);

})


$('#replayButton').click(function() {

    icon.set.stage1();
    $('#boxbox-C').css({'opacity':'0'});
    $('.wrap2').css({'transition':'1s',  'transition-delay':'0s', 'margin-top':'-333px'});
    $('.playerRandomSortImage2').css({'transition':'0.3s', 'transform':'scale(1) rotateY(0turn)'});

})

$('#btn-C-2').click(function() {

    icon.set.stage1();
    $('#boxbox-C').css({'opacity':'0'});
    $('.wrap2').css({'transition':'1s',  'transition-delay':'0s', 'margin-top':'-333px'});
    $('.playerRandomSortImage2').css({'transition':'0.3s', 'transform':'scale(1) rotateY(0turn)'});

});


icon.display.stage1 = function(show) {

    var display = show ? 'flex' : 'none';

    $('.s1Icon').css({'display' : display});

}

//-------------------------------------------//


icon.set.stage1();
icon.display.stage1(true);


//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//

var box = {

    set: {},
    show: {},
    hide: {},
    global: {},
    button: {},

}

box.global.previousKey = undefined;
box.global.currentKey = undefined;

box.global.keys = [];


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
    height = height + 'px';

    var boxbox = '#boxbox-' + key;

    $(boxbox).css({'height' : height});

    if(box.global.previousKey != box.global.currentKey) {

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

    console.log(myDiv);

    var myPlace = '#boxbox-' + id.split('-')[1];

    console.log(myPlace);

    $(myDiv).appendTo(myPlace);

}

box.store = function(id) {

    var myDiv = '#boxwrap-' + id.split('-')[1] + '-' + id.split('-')[2];

    $(myDiv).appendTo('.reviewBox');

}

box.show = function(id) {

    box.move(id);

    box.set.wrapHeight(id);

    id = '#' + id;

    $(id).css({'transform':'scale(1)'});

    // ADD MOVE IFRAME TO THIS DIV METHOD HERE

}

box.hide = function(id, moveToReviewBox) {

    id = '#' + id;
    $(id).css({'transform':'scale(0)'});

    if(moveToReviewBox) {

        setTimeout(()=>{
            box.store(id);
            $(id).css({'transform':'scale(1)'});
        }, 850);

    }

}

box.transition = function(id1, id2, hideButton) {

    if(hideButton) {

        box.button.hide(id2);

    }

    id1 = 'box-' + id1;
    id2 = 'box-' + id2;

    box.hide(id1);
    box.show(id2);

}

box.button.hide = function(id) {

    id = '#btn-' + id;

    console.log(id);

    $(id).css({'transform':'scale(0) rotate(1turn)'});

}

box.button.show = function(id) {

    id = '#btn-' + id;

    $(id).css({'transform':'scale(1) rotate(0turn)'});

}


//-------------------//

box.show('box-A-1');


$('#btn-A-1').click(function() {

    box.transition('A-1', 'A-2');
    $('.wrap1').css({'margin-top':'0px'});
    $('.playerRandomSortImage2').css({'opacity':'1'})
    $('.pointerArrow').css({'opacity':'1'});
    wiggleArrow(1);

});


$('#btn-B-3').click(function() {

    $('#boxbox-B').css({'transition':'0.4s', 'transform':'scale(0)'});
    $('.showSecond').css({'display':'flex'});
    setTimeout(()=>{$('.showSecond').css({'transition':'0.4s', 'transform':'scale(1)'});}, 400);

});



var wiggleArrowActive = true;
var wiggleArrow = function(state) {

    if(wiggleArrowActive) {

        if(state === 0) {
            $('.buttonPointerArrow').css({'margin-top':'20px'});
            setTimeout(()=>wiggleArrow(1), 700);

        }

        if(state === 1) {
            $('.buttonPointerArrow').css({'margin-top':'70px'});
            setTimeout(()=>wiggleArrow(0), 700);
        }

    } else {
        $('.buttonPointerArrow').css({'opacity':'0'});
    }

}
