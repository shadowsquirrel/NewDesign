// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// ----------------------------- GLOBAL VARIABLES --------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //


tool = {
    active:{},
    set:{},
    info:{},
    graphics:{
        show:{},
    },
    var:{},
    debug:{},
    adjust:{},
}


// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// --------------------------- ALL STAGE RELATED ---------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //



tool.debug.showMainData = function(myData) {

    console.log('');
    console.log('--------------------------------------------------');
    console.log('');
    console.log('sorted array: ' + myData.sortedArray);
    console.log('count: ' + myData.myCount);
    console.log('treatment: ' + myData.treatment);
    console.log('myGroup: ' + myData.myGroup);
    console.log('myOriginalGroup: ' + myData.myOriginalGroup);
    console.log('original sorted array: ' + myData.originalSortedArray);
    console.log('og1 won lost: ' + myData.s3[1]);
    console.log('');
    console.log('--------------------------------------------------');
    console.log('')

}

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

tool.determineS3Winner = function() {

    var results = 1;

    // since the data is rearranged to be from the subject's point of view
    // subject's group will always be 0
    var myGroup = 0;

    var winnerGroupIndex = mainData.s3[results].indexOf(true);


    tool.ourGroupWonOG1 = (winnerGroupIndex === myGroup);


    // console.log('INSIDE DETERMINE S3 WINNER');
    // console.log(tool.ourGroupWonOG1);

    if(tool.ourGroupWonOG1) {
        map.winnerLeaderIndex = 1;
    } else {
        map.winnerLeaderIndex = 2;
    }

}

tool.determineS4Winner = function() {

    var results = 1;

    // since the data is rearranged to be from the subject's point of view
    // subject's group will always be 0
    var myGroup = 0;

    var lostGroupIndex = mainData.s3[results].indexOf(false);

    var winnerFollowerIndex = mainData.s4[lostGroupIndex][results].indexOf(true);

    tool.winnerFollowerIndex = winnerFollowerIndex;
    map.globalVariable.winnerFollowerIndex = winnerFollowerIndex;
    map.winnerFollowerIndex = winnerFollowerIndex + 1;

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

// COME BACK TO THIS AND RE CONFIG CONDITIONS WE ARE STILL NOT DECIDED ON
// HOW TO UPDATE S*DONE VARIABLES IF WE DO 1 OR 0 THEN WE ARE FINE BELOW
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
        var skip = (mainData.myTutorial.s3Done || mainData.myTutorial.s4Done || mainData.myTutorial.s6Done) ? 1 : 0;
        calculator.skipTutorial = skip;

        tool.var.submitTutorialLockActive = !skip;

    }

    if(stage === 's4') {

        // you can be the follower who became the leader in the first round then
        // assigned to the leader role in the second round (33% chance)
        var skip = (mainData.myTutorial.s4Done === 1) ? 1 : 0;
        calculator.skipTutorial = skip;

        calculator.quickTutorial = (mainData.myTutorial.s4Done > 0) ? 1 : 0;

        tool.var.submitTutorialLockActive = !skip;

    }

}

tool.active.sparkle = true;
tool.sparkle = function(buttonIndex) {

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


tool.set.NORP = function(norp, np) {

    np = np === undefined ? 6 : np;

    $('#norp').html(norp);

    updateLoad(norp, np)

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

    var number = myData.myRound;

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

    var myR = myData.myRound;

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


// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// ------------------------------ STAGE 4 RELATED --------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

tool.set.pastHSDecisions = function(myData) {

    var h1,s1,h2,s2;

    var help = 0;
    var sabo = 1;

    if(calculator.globalVariable.isIGA) {

        var ourGroup = 0;

        if(calculator.globalVariable.playerIndex != -1) {

            var myList = myData.sortedArray;
            var myIndex = (myList.indexOf(myData.myCount) - 1);

        } else {

            var myIndex = 0;

        }
    } else {

        var ourGroup = 1;
        var myIndex = 0;

    }

    h1 = myData.s2[ourGroup][help][myIndex];
    s1 = myData.s2[ourGroup][sabo][myIndex];

    var myColor = 'gray';
    if(h1 > 0) {
        myColor = 'blue';
    }
    if(s1 > 0) {
        myColor = 'red';
    }

    $('.lfpd').removeClass('leftFollowerPastDecisionBlue leftFollowerPastDecisionGray leftFollowerPastDecisionRed').addClass('leftFollowerPastDecisionGray');

    $('#leftFollowerHSValue').html(0);

    if(h1 > 0) {
        $('#leftFollowerHSValue').html(h1);
        $('#leftFollowerHSText').html('Help');
        $('.lfpd').removeClass('leftFollowerPastDecisionBlue leftFollowerPastDecisionGray leftFollowerPastDecisionRed').addClass('leftFollowerPastDecisionBlue');
    }
    if(s1 > 0) {
        $('#leftFollowerHSValue').html(s1);
        $('#leftFollowerHSText').html('Sabotage');
        $('.lfpd').removeClass('leftFollowerPastDecisionBlue leftFollowerPastDecisionGray leftFollowerPastDecisionRed').addClass('leftFollowerPastDecisionRed');
    }

    var hisIndex = 1- myIndex;

    h2 = myData.s2[ourGroup][help][hisIndex];
    s2 = myData.s2[ourGroup][sabo][hisIndex];

    var hisColor = 'gray';
    if(h2 > 0) {
        hisColor = 'blue';
    }
    if(s2 > 0) {
        hisColor = 'red';
    }

    $('.rightFollowerPastDecision').css({'background':hisColor});

    $('#rightFollowerHSValue').html(0);
    $('.rfpd').removeClass('rightFollowerPastDecisionBlue rightFollowerPastDecisionGray rightFollowerPastDecisionRed').addClass('rightFollowerPastDecisionGray');

    if(h2 > 0) {
        $('#rightFollowerHSValue').html(h2);
        $('#rightFollowerHSText').html('Help');
        $('.rfpd').removeClass('rightFollowerPastDecisionBlue rightFollowerPastDecisionGray rightFollowerPastDecisionRed').addClass('rightFollowerPastDecisionBlue');

    }
    if(s2 > 0) {
        $('#rightFollowerHSValue').html(s2);
        $('#rightFollowerHSText').html('Sabotage');
        $('.rfpd').removeClass('rightFollowerPastDecisionBlue rightFollowerPastDecisionGray rightFollowerPastDecisionRed').addClass('rightFollowerPastDecisionRed');
    }


}



tool.adjust.pastHSDecisions = function(myData) {

    var homo;

    if(calculator.globalVariable.isIGA) {

        homo = (myData.treatment[0] === 0);

    } else {
        homo = (myData.treatment[1] === 0);
    }

    if(homo) {

        $('.lfpd').css({'transform-origin':'right center', 'transform':'scale(0.7)'});
        $('.rfpd').css({'transform-origin':'left center', 'transform':'scale(0.7)'});
        $('.pastDecision, .pastDecision2').css({'font-weight':'600'});
    }

}
