

let practice_setup = {};
let practice_initialize = {};

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
practice_initialize.values_og1 = function(myData) {

    practice_calculator.pointers.activate([0, 0, 0, 0, 0, 0]);
    practice_calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);
    practice_calculator.lock.activate([0, 0, 0, 0, 0, 0])

    var s1, h1, s2, h2, os1, os2, oh1, oh2, efo1, efo2;

    var myGroup = 0;
    var theirGroup = 1;
    var help = 0;
    var sabo = 1;
    var f1 = 0;
    var f2 = 1;
    var efforts = 0;

    s1 = 0;
    h1 = 0;
    s2 = 0;
    h2 = 0;
    os1 = 0;
    os2 = 0;
    oh1 = 0;
    oh2 = 0;

    efo1 = 100;
    efo2 = 100;

    if(practice_calculator.globalVariable.playerIndex === 0) {

        s1 = myData.s2[myGroup][sabo][f1];
        h1 = myData.s2[myGroup][help][f1];

    }

    if(practice_calculator.globalVariable.playerIndex === 1) {

        s2 = myData.s2[myGroup][sabo][f2];
        h2 = myData.s2[myGroup][help][f2];

    }

    practice_calculator.values.set.helpSabo([s1, s2, h1, h2, os1, os2, oh1, oh2]);

    practice_calculator.values.set.efforts([efo1,efo2]);
    practice_calculator.refresh.sliders();
    practice_calculator.graphics.update.pie();

    practice_calculator.globalVariable.hover.followerHsAdjustments = 1;

}


practice_initialize.values_ig = function(myData) {

    practice_calculator.pointers.activate([0, 0, 0, 0, 0, 0]);
    practice_calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);
    practice_calculator.lock.activate([0, 0, 0, 0, 0, 0])

    var s1, h1, s2, h2, os1, os2, oh1, oh2, efo1, efo2;

    var myGroup = 0;
    var theirGroup = 1;
    var help = 0;
    var sabo = 1;
    var f1 = 0;
    var f2 = 1;
    var efforts = 0;

    s1 = myData.s2[myGroup][sabo][f1];
    s2 = myData.s2[myGroup][sabo][f2];
    h1 = myData.s2[myGroup][help][f1];
    h2 = myData.s2[myGroup][help][f2];

    os1 = myData.s2[theirGroup][sabo][f1];
    os2 = myData.s2[theirGroup][sabo][f2];
    oh1 = myData.s2[theirGroup][help][f1];
    oh2 = myData.s2[theirGroup][help][f2];

    efo1 = myData.s3[efforts][myGroup];
    efo2 = myData.s3[efforts][theirGroup];

    practice_calculator.values.set.helpSabo([s1, s2, h1, h2, os1, os2, oh1, oh2]);

    practice_calculator.values.set.efforts([efo1,efo2]);
    practice_calculator.refresh.sliders();
    practice_calculator.graphics.update.pie();

    practice_calculator.globalVariable.hover.followerHsAdjustments = 1;

}


practice_initialize.values_og2 = function(myData) {

    practice_calculator.pointers.activate([0, 0, 0, 0, 0, 0]);
    practice_calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);
    practice_calculator.lock.activate([0, 0, 0, 0, 0, 0])

    var s1, h1, s2, h2, os1, os2, oh1, oh2, efo1, efo2;

    var myGroup = 0;
    var theirGroup = 1;
    var help = 0;
    var sabo = 1;
    var f1 = 0;
    var f2 = 1;
    var efforts = 0;

    s1 = 0;
    h1 = 0;
    s2 = 0;
    h2 = 0;
    os1 = 0;
    os2 = 0;
    oh1 = 0;
    oh2 = 0;

    efo1 = 100;
    efo2 = 100;

    if(practice_calculator.globalVariable.playerIndex === 0) {

        s1 = myData.s5[myGroup][sabo][f1];
        h1 = myData.s5[myGroup][help][f1];

    }

    if(practice_calculator.globalVariable.playerIndex === 1) {

        s2 = myData.s5[myGroup][sabo][f2];
        h2 = myData.s5[myGroup][help][f2];

    }

    practice_calculator.values.set.helpSabo([s1, s2, h1, h2, os1, os2, oh1, oh2]);

    practice_calculator.values.set.efforts([efo1,efo2]);
    practice_calculator.refresh.sliders();
    practice_calculator.graphics.update.pie();

    practice_calculator.globalVariable.hover.followerHsAdjustments = 1;

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
practice_setup.fundamentals_og1 = function(myData) {

    // setup the contest
    practice_calculator.globalVariable.isOG1 = 1;
    practice_calculator.globalVariable.isOG2 = 0;
    practice_calculator.globalVariable.isIGA = 0;
    practice_calculator.globalVariable.isIGB = 0;


    practice_calculator.globalVariable.ourFollowersAreHetero = myData.treatment[0];
    practice_calculator.globalVariable.theirFollowersAreHetero = myData.treatment[1];

    // Always on unless it is a leader watching followers compete in IG
    practice_calculator.globalVariable.playerView = 1;

    // setup the player role (leader/follower // strong/weak)
    myList = myData.sortedArray;
    myIndex = (myList.indexOf(myData.myCount) - 1);
    practice_calculator.globalVariable.playerIndex = myIndex;
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
    practice_calculator.globalVariable.tutorial.weAreInTutorial = 0;
    practice_calculator.globalVariable.tutorial.IGSameColor = 0;
    practice_calculator.globalVariable.tutorial.IGDifferentColor = 0;

}

practice_setup.fundamentals_ig = function(myData) {

    // setup the contest
    practice_calculator.globalVariable.isOG1 = 1;
    practice_calculator.globalVariable.isOG2 = 0;
    practice_calculator.globalVariable.isIGA = 0;
    practice_calculator.globalVariable.isIGB = 0;


    practice_calculator.globalVariable.ourFollowersAreHetero = myData.treatment[0];
    practice_calculator.globalVariable.theirFollowersAreHetero = myData.treatment[1];

    // Always on unless it is a leader watching followers compete in IG
    practice_calculator.globalVariable.playerView = 1;

    // setup the player role (leader/follower // strong/weak)
    myList = myData.sortedArray;
    myIndex = (myList.indexOf(myData.myCount) - 1);
    practice_calculator.globalVariable.playerIndex = myIndex;
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
    practice_calculator.globalVariable.tutorial.weAreInTutorial = 0;
    practice_calculator.globalVariable.tutorial.IGSameColor = 0;
    practice_calculator.globalVariable.tutorial.IGDifferentColor = 0;

}

practice_setup.fundamentals_og2 = function(myData) {

    // setup the contest
    practice_calculator.globalVariable.isOG1 = 0;
    practice_calculator.globalVariable.isOG2 = 1;
    practice_calculator.globalVariable.isIGA = 0;
    practice_calculator.globalVariable.isIGB = 0;


    practice_calculator.globalVariable.ourFollowersAreHetero = myData.treatment[0];
    practice_calculator.globalVariable.theirFollowersAreHetero = myData.treatment[1];




    var results = 1;

    // since the data is rearranged to be from the subject's point of view
    // subject's group will always be 0
    var myGroup = 0;

    var winnerGroupIndex = myData.s3[results].indexOf(true);


    var ourGroupWonOG1 = (winnerGroupIndex === myGroup);


    // console.log('INSIDE DETERMINE S3 WINNER');
    // console.log(tool.ourGroupWonOG1);

    var winnerLeaderIndex;

    if(ourGroupWonOG1) {
        winnerLeaderIndex = 1;
    } else {
        winnerLeaderIndex = 2;
    }

    var lostGroupIndex = mainData.s3[results].indexOf(false);

    var winnerFollowerIndex = mainData.s4[lostGroupIndex][results].indexOf(true);


    practice_calculator.globalVariable.winnerLeaderIndex = winnerLeaderIndex;
    practice_calculator.globalVariable.winnerFollowerIndex = winnerFollowerIndex + 1;


    // Always on unless it is a leader watching followers compete in IG
    practice_calculator.globalVariable.playerView = 1;

    // setup the player role (leader/follower // strong/weak)
    myList = myData.sortedArray;
    myIndex = (myList.indexOf(myData.myCount) - 1);


    if(ourGroupWonOG1) {

        practice_calculator.globalVariable.playerIndex = myIndex;

    } else {

        if(winnerFollowerIndex === myIndex) { // if you are the new leader
            practice_calculator.globalVariable.playerIndex = -1;
        } else if(myIndex === -1) { // if you are the lost leader your new index is the winner follower's old index
            practice_calculator.globalVariable.playerIndex = winnerFollowerIndex;
        } else { // if you are the lost follower your index is the one retreived from the sortedArray
            practice_calculator.globalVariable.playerIndex = myIndex;
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
    practice_calculator.globalVariable.tutorial.weAreInTutorial = 0;
    practice_calculator.globalVariable.tutorial.IGSameColor = 0;
    practice_calculator.globalVariable.tutorial.IGDifferentColor = 0;

}


//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//--------------- HELP AND SABOTAGE SETTINGS ---------------//
//----------------------------------------------------------//
//
//
practice_setup.hs = function() {

    //----- AFTER SPIN ACTION SWITCHES ----//

    practice_calculator.globalVariable.display.hsIcons = 1;
    practice_calculator.globalVariable.display.hsResults = 1;
    practice_calculator.globalVariable.display.hsMainTitle = 0;
    practice_calculator.globalVariable.display.hsGhostTitle = 0;
    practice_calculator.globalVariable.display.hsButton = 0;
    practice_calculator.globalVariable.display.hsMinimize = 0;

    //----- HOVER SWITCHES ------//

    practice_calculator.globalVariable.hover.hsMinimize = 1;
    practice_calculator.globalVariable.hover.hsIcons = 1;
    practice_calculator.globalVariable.hover.hsResults = 1;
    practice_calculator.globalVariable.hover.hsMainTitle = 0;
    practice_calculator.globalVariable.hover.hsGhostTitle = 0;
    practice_calculator.globalVariable.hover.hsButton = 1;

    //---- SIZE -----//

    practice_calculator.section.hs.minimize(false);

    //------- SPIN BUTTON ------//

    practice_calculator.button.display.spinTop(false);
    practice_calculator.button.disable.spinTop();

    practice_calculator.globalVariable.topSpinButtonIsEnabled = false;

    //-------- TITLES -------//

    practice_calculator.titles.hs.show();
    practice_calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    practice_calculator.globalVariable.dynamicDisplay = false;
    practice_calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);

}


//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//------------------- POWER BAR SETTINGS -------------------//
//----------------------------------------------------------//
//
//
practice_setup.pb = function() {

    practice_calculator.section.power.opacity.bar(true);
    practice_calculator.section.power.display.barText('none');
    practice_calculator.graphics.dynamicPowerBarText = true;

}


//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//--------------------- CONTEST SECTION --------------------//
//----------------------------------------------------------//
//
//
practice_setup.contest = function() {

    //----- AFTER SPIN ACTION SWITCHES ----//

    practice_calculator.globalVariable.display.cResults = 1;
    practice_calculator.globalVariable.display.cTitle = 0;
    practice_calculator.globalVariable.display.cButton = 0;
    practice_calculator.globalVariable.display.cMinimize = 0;


    //----- HOVER SWITCHES ------//

    practice_calculator.globalVariable.hover.cMinimize = 1;
    practice_calculator.globalVariable.hover.cResults = 1;
    practice_calculator.globalVariable.hover.cTitle = 0;
    practice_calculator.globalVariable.hover.cButton = 1;


    //---- SIZE ----//

    practice_calculator.section.contest.minimize(false);
    practice_calculator.results.hide.leaderOutcomes();


    //----- OUTCOME DISPLAY SWITCHES -----//

    // these display settins simply display none the specific section
    // practice_calculator.section.contest.display.all(true);
    practice_calculator.section.contest.display.sliders(true);
    practice_calculator.section.contest.display.title(true);
    practice_calculator.section.contest.display.results(false);
    practice_calculator.section.contest.display.icons(false);


    //------- RESULTS DISPLAY SETTINGS ------//

    practice_calculator.results.leader.display.investment(false);
    practice_calculator.results.leader.display.prize(false);
    practice_calculator.results.leader.display.netPayoff(false);
    practice_calculator.results.leader.display.role(false);


    //------- BUTTONS ------//

    practice_calculator.button.display.spinBottom(true);
    practice_calculator.button.disable.spinBottom();
    practice_calculator.globalVariable.bottomSpinButtonIsEnabled = true;


    //-------- TITLES -------//

    practice_calculator.titles.contest.hide();


    //------ SLIDERS -------//

    // changes the slider range based on globalVariable.is***
    practice_calculator.graphics.update.effortSliderRange();
    // changes the leader slider text background color based on globalVariable.is***
    practice_calculator.graphics.update.contestSliderBackgroundColor();

}


//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//---------------------- OG CALCULATOR ---------------------//
//----------------------------------------------------------//
//
//

// this differe from the ig version only on the locks
practice_setup.practice_og = function() {

    //-------- CALCULATOR SPACE --------//
    practice_calculator.space.hsIsOpen = true;
    practice_calculator.space.powerBarIsOpen = true;
    practice_calculator.space.contestIsOpen = true;
    practice_calculator.globalVariable.aBitOfWaitingIsDone = true;


    //------ QUESTIONS -----//
    practice_calculator.questions.activate.all([0,0,0,0,0,0])

    //------ LOCKS -------//

    if(practice_calculator.globalVariable.playerIndex === -1) {
        practice_calculator.lock.activate([1,0,0,0,0,0]);
    }
    if(practice_calculator.globalVariable.playerIndex === 0) {
        practice_calculator.lock.activate([0,0,1,0,0,0]);

    }
    if(practice_calculator.globalVariable.playerIndex === 1) {
        practice_calculator.lock.activate([0,0,0,1,0,0]);
    }

    //----- ROLL ------//
    // practice_calculator.roll.initiate();
    practice_calculator.roll.resetRoll();

    //----- ICONS -----//
    practice_calculator.icons.setAll();
    practice_calculator.section.hs.set.iconPosition('center');

    //----- TEXT -----//
    practice_calculator.titles.update.textAndColor();
    practice_calculator.titles.hs.ghost.text();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    practice_calculator.results.softHide.allResults();
    practice_calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//


    practice_setup.hs();


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//


    practice_setup.pb();


    //----------------------------------------------------------//
    //--------------------- CONTEST SETTINGS -------------------//
    //----------------------------------------------------------//


    practice_setup.contest();


    //----------------------------------------------------------//
    //--------- REFRESH/UPDATE/ADJUST/RECALCULATE VALUE --------//
    //----------------------------------------------------------//


    practice_calculator.refresh.values();


    // -------------------------------------------------------- //
    // ------------ HIDE/DISABLE DECISION SLIDERS ------------- //
    // -------------------------------------------------------- //


    // --- DISABLE --- //
    practice_calculator.decisionSlider.follower.disable();
    practice_calculator.decisionSlider.leader.disable();

    // --- HIDE --- //
    practice_calculator.section.decision.follower.opacity(0);
    practice_calculator.section.decision.leader.opacity(0);



    // -------------------------------------------------------- //
    // ----------------- FURTHER ADJUSTMENTS ------------------ //
    // -------------------------------------------------------- //

    practice_calculator.minimize(1, 0.5);

    $('.generalMarginBox').css({'opacity':'1'})



    // ------------------ HACK -------------- //


    practice_calculator.noResults = true;
    practice_calculator.titles.hs.show();
    practice_calculator.titles.contest.show();
    $('.generalMarginBox').css({'transform':'scale(0.85)', 'margin-top':'0px'});
    practice_calculator.button.display.spinBottom(false);
    practice_calculator.button.display.spinTop(false);
    $('#spinImage, #spinImage23').css({'filter':'opacity(0)', 'transform':'scale(0)'});

}


// this one has no locks
practice_setup.practice_ig = function() {

    //-------- CALCULATOR SPACE --------//
    practice_calculator.space.hsIsOpen = true;
    practice_calculator.space.powerBarIsOpen = true;
    practice_calculator.space.contestIsOpen = true;
    practice_calculator.globalVariable.aBitOfWaitingIsDone = true;


    //------ QUESTIONS -----//
    practice_calculator.questions.activate.all([0,0,0,0,0,0])


    //----- ROLL ------//
    // practice_calculator.roll.initiate();
    practice_calculator.roll.resetRoll();

    //----- ICONS -----//
    practice_calculator.icons.setAll();
    practice_calculator.section.hs.set.iconPosition('center');

    //----- TEXT -----//
    practice_calculator.titles.update.textAndColor();
    practice_calculator.titles.hs.ghost.text();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    practice_calculator.results.softHide.allResults();
    practice_calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//


    practice_setup.hs();


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//


    practice_setup.pb();


    //----------------------------------------------------------//
    //--------------------- CONTEST SETTINGS -------------------//
    //----------------------------------------------------------//


    practice_setup.contest();


    //----------------------------------------------------------//
    //--------- REFRESH/UPDATE/ADJUST/RECALCULATE VALUE --------//
    //----------------------------------------------------------//


    practice_calculator.refresh.values();


    // -------------------------------------------------------- //
    // ------------ HIDE/DISABLE DECISION SLIDERS ------------- //
    // -------------------------------------------------------- //


    // --- DISABLE --- //
    practice_calculator.decisionSlider.follower.disable();
    practice_calculator.decisionSlider.leader.disable();

    // --- HIDE --- //
    practice_calculator.section.decision.follower.opacity(0);
    practice_calculator.section.decision.leader.opacity(0);



    // -------------------------------------------------------- //
    // ----------------- FURTHER ADJUSTMENTS ------------------ //
    // -------------------------------------------------------- //

    practice_calculator.minimize(1, 0.5);

    $('.generalMarginBox').css({'opacity':'1'})



    // ------------------ HACK -------------- //


    practice_calculator.noResults = true;
    practice_calculator.titles.hs.show();
    practice_calculator.titles.contest.show();
    $('.generalMarginBox').css({'transform':'scale(0.85)', 'margin-top':'0px'});
    practice_calculator.button.display.spinBottom(false);
    practice_calculator.button.display.spinTop(false);
    $('#spinImage, #spinImage23').css({'filter':'opacity(0)', 'transform':'scale(0)'});

}
