// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// ----------------------------- GLOBAL VARIABLES --------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //


let tool = {
    active:{},
    set:{},
    info:{},
    graphics:{
        show:{},
    },
    var:{},
}


// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// --------------------------- ALL STAGE RELATED ---------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// -------------- REARRANGE GROUP ORDER IN THE SHUFFLED ORDER --------------- //
// -------------------------------------------------------------------------- //
//
// 1. Rearrange the groups based on the current player's index
//    if the player is on the second group swap the group places
//
// 2. If groups swapped then swap the hetero asym treatment values accordingly
//
// 3. Stores the original sorted array under originalSortedArray
//
// DO THIS AS THE FIRST THING BEFORE PASSING THE MAIN DATA ANYWHERE ELSE
//
tool.rearrangeGroupOrder = function(myData) {

    var firstHalf, secondHalf, myList, myIndex, myNewList, myOldList;

    myList = myData.sortedArray;

    myIndex = myList.indexOf(myData.myCount);

    // if you are in the second group make the second group the first group
    if(myIndex > 2) {

        tool.areGroupsRearranged = true;

        firstHalf = myList.splice(0, 3);
        secondHalf = myList.splice(-3);

        myNewList = secondHalf.concat(firstHalf);
        myOldList = firstHalf.concat(secondHalf);
        // updating the original data object
        mainData.sortedArray = myNewList;
        mainData.originalSortedArray = myOldList;

        // since we are switching the group order we also need to switch the
        // treatment condition for hetero asym case
        var t1 = mainData.treatment[0];
        var t2 = mainData.treatment[1];

        // updating the original data object
        mainData.treatment[0] = t2;
        mainData.treatment[1] = t1;

    } else { // even if groups are not rearranged store the unarranged sorted array also
             // as the originalSortedArray
        mainData.originalSortedArray = myData.sortedArray;
    }

}

tool.areGroupsRearranged = false;
// For the final feedback we need to have the entire data rearranged matching the
// rearranged sortedArray
tool.rearrangeMainData = function(myData) {

    if(tool.areGroupsRearranged) {

        tool.swapArrayElements(myData.s2, 0, 1);
        tool.swapArrayElements(myData.s3[0], 0, 1);
        tool.swapArrayElements(myData.s3[1], 0, 1);
        tool.swapArrayElements(myData.s4, 0, 1);
        tool.swapArrayElements(myData.s5, 0, 1);
        tool.swapArrayElements(myData.s6[0], 0, 1);
        tool.swapArrayElements(myData.s6[1], 0, 1);

    }

}

tool.rearrangePayoffData = function(myPayoffs) {

    if(tool.areGroupsRearranged) {

        tool.swapArrayElements(myPayoffs, 0, 1);

    }

}

tool.swapArrayElements = function(arr, indexA, indexB) {

    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;

}

// -------------------------------------------------------------------------- //
// -------------------  DETERMINE / ASSIGN GROUP INDEX  --------------------- //
// -------------------------------------------------------------------------- //
//
// uses myData to get myData.count to determine:
//
// 1. mainData.myOriginalGroup
//
// 2. mainData.myGroup -> this one is based on the rearrangement of groups
//
// if there is no rearrangement (i.e. if leader is from group A to begin with)
// then mainData.myOriginalGroup and mainData.myGroup will be the same
//
tool.calculateMyOriginalGroupIndex = function(myData) {

    var myOriginalList = mainData.originalSortedArray;

    var myOriginalIndex = myOriginalList.indexOf(myData.myCount);

    mainData.myOriginalGroup = (myOriginalIndex > 2) ? 1 : 0;


    var myList = mainData.sortedArray;

    var myIndex = myList.indexOf(myData.myCount);

    mainData.myGroup = (myIndex > 2) ? 1 : 0;

}


tool.tutorialSetup = function(myData, stage) {

    // skip tutorial overwrites quickTutorial so no worries for missing cases

    if(stage === 's2') {

        calculator.quickTutorial = mainData.myTutorial.s3Done;
        calculator.skipTutorial = mainData.myTutorial.s2Done;

        var skip = (mainData.myTutorial.s3Done || mainData.myTutorial.s2Done)

        tool.var.submitTutorialLockActive = !skip;

    }


    if(stage === 's3') {

        calculator.quickTutorial = mainData.myTutorial.s2Done;

        // you can be the follower who became the leader in the first round then
        // assigned to the leader role in the second round (33% chance)
        var skip = (mainData.myTutorial.s3Done || mainData.myTutorial.s6Done) ? 1 : 0;
        calculator.skipTutorial = skip;

        tool.var.submitTutorialLockActive = !skip;

    }

}

tool.active.sparkle = true;
tool.sparkle = function(buttonIndex) {

    if(buttonIndex === 'D-12') {
        // tool.sparkleSlider();
    }

    var bS = '#btn-' + buttonIndex;

    if(tool.active.sparkle) {

        $(bS).css({'transition':'0.5s', 'filter': 'hue-rotate(0deg) saturate(1)'});

        setTimeout(()=>{
            $(bS).css({'transition':'0.5s', 'filter': 'hue-rotate(-95deg) saturate(5)'});
        }, 2000)

        setTimeout(()=>{
            tool.sparkle(buttonIndex);
        }, 2200)

    } else {

        $(bS).css({'transition':'0.5s', 'filter': 'hue-rotate(0deg) saturate(1)'});

    }

}

tool.sparkleSlider = function() {

    if(tool.active.sparkle) {

        $('.inputL, .leftLeaderIconMainWrap').css({'transition':'0.5s', 'filter': 'hue-rotate(0deg) saturate(1)'});

        setTimeout(()=>{
            $('.inputL, .leftLeaderIconMainWrap').css({'transition':'0.5s', 'filter': 'hue-rotate(-95deg) saturate(5)'});
        }, 2000)

        setTimeout(()=>{
            tool.sparkleSlider();
        }, 2200)

    } else {

        $('.inputL, .leftLeaderIconMainWrap').css({'transition':'0.5s', 'filter': 'hue-rotate(0deg) saturate(1)'});

    }

}

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// ----------------------------- STAGE 1 RELATED ---------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //


// set round number
tool.set.roundNumber = function(myData) {

    var number = myData.round;

    $('#currentRound').html(number);

}


// set the position of you are here arrow and text
// matches the green icon that is determined by the player's index
tool.set.YAHPosition = function(myData) {

    // var myIndex = myData.myCount;

    var pI = myData.myCount;
    var myIndex = tool.displayedShuffledList.indexOf(pI);

    if(myIndex === 0) {
        $('.dynamicYouAreWrap').css({'margin-left':'-494px'});
    }

    if(myIndex === 1) {
        $('.dynamicYouAreWrap').css({'margin-left':'-294px'});
    }

    if(myIndex === 2) {
        $('.dynamicYouAreWrap').css({'margin-left':'-94px'});
    }

    if(myIndex === 3) {
        $('.dynamicYouAreWrap').css({'margin-left':'103px'});
    }

    if(myIndex === 4) {
        $('.dynamicYouAreWrap').css({'margin-left':'303px'});
    }

    if(myIndex === 5) {
        $('.dynamicYouAreWrap').css({'margin-left':'503px'});
    }

}


tool.info.skip = false;
// skipping information boxes after some round
tool.skipInfoBox = function(myData) {

    var myR = myData.round;

    if(myR > tool.info.skipTutorialAfterRound) {
        tool.info.skip = true;
    }

}


tool.set.youGraphics = function(myData) {

    var me = myData.sortedArray.indexOf(myData.myCount) % 3;

    console.log('shuffled array: ' + myData.treatment);
    console.log('player count: ' + myData.myCount);
    console.log('me index: ' + me);

    if(me === 0) {
        $('.leaderYou').css({'transition':'1s', 'opacity':'1'})
    }

    if(me === 1) {
        $('.follower1You').css({'transition':'1s', 'opacity':'1'})
    }

    if(me === 2) {
        $('.follower2You').css({'transition':'1s', 'opacity':'1'})
    }

}


tool.set.balanceGraphics = function(myData) {

    $('.g1Uneven, .g2Uneven').css({'transition':'0s', 'filter':'opacity(0)'});

    var sum = myData.treatment.reduce((a,b) => a + b, 0);

    if(sum === 1) {

        if(myData.treatment[0] === 1) {

            $('.g1Uneven').css({'transition':'0.5s', 'filter':'opacity(1)'});

        }

        if(myData.treatment[1] === 1) {

            $('.g2Uneven').css({'transition':'0.5s', 'filter':'opacity(1)'});

        }

    }

}


tool.set.fLSize = function() {

    var l1,l2,f1,f2,of1,of2;

    l1 = '.iwIndex' + 1;
    f1 = '.iwIndex' + 2;
    f2 = '.iwIndex' + 3;
    l2 = '.iwIndex' + 4;
    of1 = '.iwIndex' + 5;
    of2 = '.iwIndex' + 6;

    $(l1).css({'transform':'scale(1.1)'});
    $(l2).css({'transform':'scale(1.1)'});

    $(f1).css({'transform':'scale(0.9)', 'transform-origin':'right'});
    $(f2).css({'transform':'scale(0.9)'});
    $(of1).css({'transform':'scale(0.9)', 'transform-origin':'right'});
    $(of2).css({'transform':'scale(0.9)'});

}


tool.displayedShuffledList = Array(6);

// used in random animation function icon.animate.stage1()
// used in the initial display of the players (before grouping)
tool.shuffle = function(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;

};


tool.displayedShuffledList = tool.shuffle([0,1,2,3,4,5])


// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// --------------------------- STAGE 2 & 3 RELATED -------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //


tool.enervatePayoffTitles = function(state) {

    if(state === 1) {

        $('.lostTextWrap, .wonTextWrap').css({'transition':'1s', 'font-weight':'400',
        'transform':'scale(1.3)', 'color':'black', 'border-color':'black'});

        $('.outcomeHelper').css({'opacity':'0.7'});

    } else {

        $('.outcomeHelper').css({'opacity':'0'});
        $('.lostTextWrap, .wonTextWrap').css({'transition':'1s', 'font-weight':'300',
          'transform':'scale(1)', 'color':'black', 'border-color':'black'});

    }

}

tool.enervatePayoffTitlesLeader = function(state) {


    $('.outcomeWrap').css({'transition':'1s', 'opacity':'1', 'filter':'opacity(1)'})

    if(state === 1) {

        $('.lostTextWrap, .wonTextWrap').css({'transition':'1s', 'font-weight':'400',
        'transform':'scale(1.3)', 'color':'black', 'border-color':'black'});

        $('.outcomeHelper').css({'opacity':'0.7'});

    } else {

        $('.outcomeHelper').css({'opacity':'0'});
        $('.lostTextWrap, .wonTextWrap').css({'transition':'1s', 'font-weight':'300',
          'transform':'scale(1)', 'color':'black', 'border-color':'black'});

    }

}


tool.graphics.show.decisionSliderButtons = function() {

    $('.mapButtonTop').css({ 'transform-origin':'bottom',
    'transform':'scale(1)'});
    $('.infoButtonTop').css({ 'transform-origin':'bottom',
    'transform':'scale(1)'});

    // Give at least 15 seconds before showing the submit button
    setTimeout(()=>{
        $('.submitButtonTop').css({'transform':'scale(1)'});
    }, 15000)

}