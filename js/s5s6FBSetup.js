

let setup = {};
let initialize = {};

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// ----------------------   CALCULATOR SETUP METHODS   ---------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //


//----------------------------------------------------------//
//-------------- VALUE INITIATIONS/ASSIGNMENT --------------//
//----------------------------------------------------------//
//
//
initialize.values = function(myData) {

    calculator.pointers.activate([0, 0, 0, 0, 0, 0]);
    calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);
    calculator.lock.activate([0, 0, 0, 0, 0, 0])

    var s1, h1, s2, h2, os1, os2, oh1, oh2, efo1, efo2;

    var myGroup = 0;
    var theirGroup = 1;
    var help = 0;
    var sabo = 1;
    var f1 = 0;
    var f2 = 1;
    var efforts = 0;

    s1 = myData.s5[myGroup][sabo][f1];
    s2 = myData.s5[myGroup][sabo][f2];
    h1 = myData.s5[myGroup][help][f1];
    h2 = myData.s5[myGroup][help][f2];

    os1 = myData.s5[theirGroup][sabo][f1];
    os2 = myData.s5[theirGroup][sabo][f2];
    oh1 = myData.s5[theirGroup][help][f1];
    oh2 = myData.s5[theirGroup][help][f2];

    efo1 = myData.s6[efforts][myGroup];
    efo2 = myData.s6[efforts][theirGroup];

    calculator.values.set.helpSabo([s1, s2, h1, h2, os1, os2, oh1, oh2]);

    calculator.values.set.efforts([efo1,efo2]);
    calculator.refresh.sliders();
    calculator.graphics.update.pie();

    calculator.globalVariable.hover.followerHsAdjustments = 1;

}




//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//----------------- FUNDAMENTAL SETTINGS -------------------//
//----------------------------------------------------------//
//
//
// the data received to this function has already been rearranged
//
setup.fundamentals = function(myData) {

    // setup the contest
    calculator.globalVariable.isOG1 = 0;
    calculator.globalVariable.isOG2 = 1;
    calculator.globalVariable.isIGA = 0;
    calculator.globalVariable.isIGB = 0;


    calculator.globalVariable.ourFollowersAreHetero = myData.treatment[0];
    calculator.globalVariable.theirFollowersAreHetero = myData.treatment[1];

    // ONLY USED IN OG2 AND FEEDBACK 2
    calculator.globalVariable.winnerLeaderIndex = map.winnerLeaderIndex;
    calculator.globalVariable.winnerFollowerIndex = map.winnerFollowerIndex;

    // Always on unless it is a leader watching followers compete in IG
    calculator.globalVariable.playerView = 1;

    // setup the player role (leader/follower // strong/weak)
    myList = myData.sortedArray;
    myIndex = (myList.indexOf(myData.myCount) - 1);
    // calculator.globalVariable.playerIndex = myIndex;

    if(tool.ourGroupWonOG1) {
        calculator.globalVariable.playerIndex = myIndex;
    } else {

        if(tool.winnerFollowerIndex === myIndex) { // if you are the new leader
            calculator.globalVariable.playerIndex = -1;
        } else if(myIndex === -1) { // if you are the lost leader your new index is the winner follower's old index
            calculator.globalVariable.playerIndex = tool.winnerFollowerIndex;
        } else { // if you are the lost follower your index is the one retreived from the sortedArray
            calculator.globalVariable.playerIndex = myIndex;
        }

    }

    if(myIndex === -1) {
        console.log();
        console.log();
        console.log();
        console.log('ERROR! ERROR! ERROR!');
        console.log('PLAYER ROLE IS DEFINED TO BE THE LEADER');
        console.log();
        console.log();
        console.log();
    }

    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//
    calculator.globalVariable.tutorial.weAreInTutorial = 0;
    calculator.globalVariable.tutorial.IGSameColor = 0;
    calculator.globalVariable.tutorial.IGDifferentColor = 0;

}


//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//--------------- HELP AND SABOTAGE SETTINGS ---------------//
//----------------------------------------------------------//
//
//
setup.hs = function() {

    //----- AFTER SPIN ACTION SWITCHES ----//

    calculator.globalVariable.display.hsIcons = 1;
    calculator.globalVariable.display.hsResults = 1;
    calculator.globalVariable.display.hsMainTitle = 1;
    calculator.globalVariable.display.hsGhostTitle = 0;
    calculator.globalVariable.display.hsButton = 0;
    calculator.globalVariable.display.hsMinimize = 0;

    //----- HOVER SWITCHES ------//

    calculator.globalVariable.hover.hsMinimize = 1;
    calculator.globalVariable.hover.hsIcons = 1;
    calculator.globalVariable.hover.hsResults = 1;
    calculator.globalVariable.hover.hsMainTitle = 1;
    calculator.globalVariable.hover.hsGhostTitle = 1;
    calculator.globalVariable.hover.hsButton = 0;

    //---- SIZE -----//

    calculator.section.hs.minimize(false);

    //------- SPIN BUTTON ------//

    calculator.button.display.spinTop(false);
    calculator.button.enable.spinTop();

    calculator.globalVariable.topSpinButtonIsEnabled = false;

    //-------- TITLES -------//

    calculator.titles.hs.show();
    calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);



    $('.followerRoleText').css({'display':'none'});
    $('.hsWrap').css({'margin-bottom':'-30px'});


}


//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//------------------- POWER BAR SETTINGS -------------------//
//----------------------------------------------------------//
//
//
setup.pb = function() {

    calculator.section.power.opacity.bar(true);
    calculator.section.power.display.barText('none');
    calculator.graphics.dynamicPowerBarText = true;

}


//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//--------------------- CONTEST SECTION --------------------//
//----------------------------------------------------------//
//
//
setup.contest = function() {

    //----- AFTER SPIN ACTION SWITCHES ----//

    calculator.globalVariable.display.cResults = 1;
    calculator.globalVariable.display.cTitle = 0;
    calculator.globalVariable.display.cButton = 0;
    calculator.globalVariable.display.cMinimize = 0;


    //----- HOVER SWITCHES ------//

    calculator.globalVariable.hover.cMinimize = 1;
    calculator.globalVariable.hover.cResults = 1;
    calculator.globalVariable.hover.cTitle = 1;
    calculator.globalVariable.hover.cButton = 0;


    //---- SIZE ----//

    calculator.section.contest.minimize(true);
    calculator.results.hide.leaderOutcomes();


    //----- OUTCOME DISPLAY SWITCHES -----//

    // these display settins simply display none the specific section
    // calculator.section.contest.display.all(true);
    calculator.section.contest.display.sliders(true);
    calculator.section.contest.display.title(true);
    calculator.section.contest.display.results(true);
    calculator.section.contest.display.icons(false);


    //------- RESULTS DISPLAY SETTINGS ------//

    calculator.results.leader.display.investment(true);
    calculator.results.leader.display.prize(true);
    calculator.results.leader.display.netPayoff(true);
    calculator.results.leader.display.role(false);


    //------- BUTTONS ------//

    calculator.button.display.spinBottom(false);
    calculator.button.enable.spinBottom();
    calculator.globalVariable.bottomSpinButtonIsEnabled = false;


    //-------- TITLES -------//

    calculator.titles.contest.hide();


    //------ SLIDERS -------//

    // changes the slider range based on globalVariable.is***
    calculator.graphics.update.effortSliderRange();
    // changes the leader slider text background color based on globalVariable.is***
    calculator.graphics.update.contestSliderBackgroundColor();


    $('.ctWrap2').css({'margin-top':'-23px', 'margin-bottom':'23px'});

}


//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//---------------------- OG CALCULATOR ---------------------//
//----------------------------------------------------------//
//
//
setup.og_fb = function() {

    //-------- CALCULATOR SPACE --------//
    calculator.space.hsIsOpen = true;
    calculator.space.powerBarIsOpen = true;
    calculator.space.contestIsOpen = true;
    calculator.globalVariable.aBitOfWaitingIsDone = true;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([0,0,0,0,0,0])

    //------ LOCKS -------//
    calculator.lock.activate([1,1,1,1,1,1]);

    //----- ROLL ------//
    // calculator.roll.initiate();
    calculator.roll.resetRoll();

    //----- ICONS -----//
    calculator.icons.setAll();
    calculator.section.hs.set.iconPosition('center');

    //----- TEXT -----//
    calculator.titles.update.textAndColor();
    calculator.titles.hs.ghost.text();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.allResults();
    calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//


    setup.hs();


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//


    setup.pb();


    //----------------------------------------------------------//
    //--------------------- CONTEST SETTINGS -------------------//
    //----------------------------------------------------------//


    setup.contest();


    //----------------------------------------------------------//
    //--------- REFRESH/UPDATE/ADJUST/RECALCULATE VALUE --------//
    //----------------------------------------------------------//


    calculator.refresh.values();


    // -------------------------------------------------------- //
    // ------------ HIDE/DISABLE DECISION SLIDERS ------------- //
    // -------------------------------------------------------- //


    // --- DISABLE --- //
    calculator.decisionSlider.follower.disable();
    calculator.decisionSlider.leader.disable();

    // --- HIDE --- //
    calculator.section.decision.follower.opacity(0);
    calculator.section.decision.leader.opacity(0);



    // -------------------------------------------------------- //
    // ----------------- FURTHER ADJUSTMENTS ------------------ //
    // -------------------------------------------------------- //

    calculator.minimize(1, 0.5);

}




setup.og2WinnerGroupIndex = undefined;

setup.og2Winner = function(myData) {

    setup.og2WinnerGroupIndex = myData.s6[1].indexOf(true);

}



setup.infoBoxText = function() {

    if(setup.og2WinnerGroupIndex === 0) {

        $('.groupWon-infoBox').css({'display':'block'});
        $('.groupLost-infoBox').css({'display':'none'});

    } else {

        $('.groupWon-infoBox').css({'display':'none'});
        $('.groupLost-infoBox').css({'display':'block'});

    }

}


setup.fastFeedback = false;

setup.determineFastFeedback = function(myData) {

    myRound = myData.myRound;

    if(myRound > 3) {
        setup.fastFeedback = true;
    }

}
