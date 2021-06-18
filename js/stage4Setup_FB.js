

setup = {};
initialize = {};


//----------------------------------------------------------//
//---- TEXT ------------------------------------------------//
//----------------------------------------------------------//
//------------- INFO BOX EXPLANATION/TUTORIAL --------------//
//----------------------------------------------------------//
//
// call this after assigning the treatment variables from the myData received from the client
setup.infoBoxText = function(myData) {

    myList = myData.sortedArray;
    myIndex = ( ( myList.indexOf(myData.myCount) % 3 ) - 1) ;

    $('.igb-active-infoBox, .iga-active-infoBox, .followerInfoBox, .leaderInfoBox').css({'display':'none'});

    if(calculator.globalVariable.isIGB) {
        $('.igb-active-infoBox').css({'display':'flex'});
    }

    if(calculator.globalVariable.isIGA) {

        $('.iga-active-infoBox').css({'display':'flex'});

        winnerIndex = mainData.s4[0][1].indexOf(true);

        if(winnerIndex === myIndex) {
            $('.winnerFollowerInfoBox').css({'display':'flex'});
            $('.defeatedFollowerInfoBox').css({'display':'none'});
        } else {
            $('.winnerFollowerInfoBox').css({'display':'none'});
            $('.defeatedFollowerInfoBox').css({'display':'flex'});
        }

        if(myIndex != -1) {
            $('.followerInfoBox').css({'display':'flex'});
            $('.leaderInfoBox').css({'display':'none'});
        } else {
            $('.leaderInfoBox').css({'display':'flex'});
            $('.followerInfoBox').css({'display':'none'});
            $('.winnerFollowerInfoBox').css({'display':'none'});
            $('.defeatedFollowerInfoBox').css({'display':'none'});
        }

    }





}

//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//-------------------- FEEDBACK SETTINGS -------------------//
//----------------------------------------------------------//
//
// replaced calculator.setup.ig_feedbackAdjustment()
//
setup.IGfeedback = function() {

    if(calculator.globalVariable.weAreInFeedbackStage) {

        $('.IG_pWrap').css({'margin-top':'-22px'});
        $('.IG_ctGhost, .IG_hsWrap, .IG_decisionWrapL').css({'display':'none'});
        $('.IG_generalMarginBox').css({'transition':'0s', 'height':'345px'})

        //------ QUESTIONS -----//
        calculator.questions.activate.IG_all([0,0])

        //------ LOCKS -------//
        calculator.lock.IG_activate([1,1]);

    }

}

//----------------------------------------------------------//
//------------------  VALUE INITIATIONS   ------------------//
//----------------------------------------------------------//
//
// NODE ACTION REQUIRED IN HERE
// replaced setup()
initialize.values = function(myData) {

    calculator.pointers.IG_activate([0, 0]);
    calculator.questions.activate.IG_all([0, 0]);
    calculator.lock.IG_activate([1, 1]);

    if(calculator.globalVariable.isIGB) {

        var efforts = myData.s4[1][2];

    } else {

        var efforts = myData.s4[0][2];

    }

    calculator.values.set.IG_efforts([efforts[0], efforts[1]]);

    // since we are making the weak player be the one on the right as this is its view
    // we need to adjust all the data related to him and his opponent accordingly
    // when leader is watching or other group is watching nothing changes strong follower or
    // follower 1 is always on the left
    if(calculator.globalVariable.isIGA) {
        if(calculator.globalVariable.playerIndex === 1) {
            calculator.values.set.IG_efforts([efforts[1], efforts[0]]);
        }
    }


    calculator.refresh.IG_sliders();
    calculator.graphics.update.IG_pie();

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

    //------- CALCULATOR SETUP -------//

    calculator.globalVariable.showDecisionSlider = 0;

    calculator.globalVariable.isOG1 = 0;
    calculator.globalVariable.isOG2 = 0;
    calculator.globalVariable.isIGA = 1;
    calculator.globalVariable.isIGB = 0;

    //------- PLAYER SPECIFIC INFORMATION -------//

    calculator.globalVariable.ourFollowersAreHetero = myData.treatment[0];
    calculator.globalVariable.theirFollowersAreHetero = myData.treatment[1];

    calculator.globalVariable.playerView = 0;

    myList = myData.sortedArray;
    myIndex = (myList.indexOf(myData.myCount) - 1);
    calculator.globalVariable.playerIndex = myIndex;
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


    calculator.globalVariable.playerGroup = 0;

    // leader view setup - gray/yellow
    // calculator.globalVariable.playerView = 1;
    // calculator.globalVariable.playerIndex = -1;
    // calculator.globalVariable.playerGroup = 1;

    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//

    calculator.globalVariable.tutorial.weAreInTutorial = 0;
    calculator.globalVariable.tutorial.IGSameColor = 0;
    calculator.globalVariable.tutorial.IGDifferentColor = 0;


}

setup.IGAB = function(myData) {

    console.log('INSIDE SETUP.IGAB');

    var ourGroup = 0;
    var results = 1;


    var winnerGroupIndex = myData.s3[results].indexOf(true);

    console.log(myData.s3);
    console.log('winner group Index: ' + winnerGroupIndex);

    if(winnerGroupIndex === ourGroup) {

        console.log('IGB setup is on');

        calculator.globalVariable.isIGB = 1;
        calculator.globalVariable.isIGA = 0;
        calculator.globalVariable.tutorial.weAreInTutorial = 1;
        calculator.globalVariable.tutorial.IGSameColor = 0;
        calculator.globalVariable.tutorial.IGDifferentColor = 1;

        // if we are seeing ig for group b then it must be that group b is lost
        // this group a won
        map.winnerLeaderIndex = 1;
        map.globalVariable.winnerLeaderIndex = 0;

    } else {

        console.log('IGA setup is on');

        calculator.globalVariable.isIGA = 1;
        calculator.globalVariable.isIGB = 0;
        calculator.globalVariable.tutorial.weAreInTutorial = 0;
        calculator.globalVariable.tutorial.IGSameColor = 0;
        calculator.globalVariable.tutorial.IGDifferentColor = 0;

        calculator.globalVariable.playerView = 1;

        // if we are seeing ig for group a then it must be that group a is lost
        // thus group b won
        map.winnerLeaderIndex = 2;
        map.globalVariable.winnerLeaderIndex = 1;


    }

}

setup.s4WinnerIndex = undefined;
setup.s4Winner = function(myData) {

    console.log('insider setup.s4Winner');

    if(calculator.globalVariable.isIGB) {

        console.log('IGB');
        console.log(calculator.globalVariable.isIGB);

        setup.s4WinnerIndex = myData.s4[1][1].indexOf(true);

        console.log('Winner index is ' + setup.s4WinnerIndex);

    }

    if(calculator.globalVariable.isIGA) {

        console.log('IGA');

        setup.s4WinnerIndex = myData.s4[0][1].indexOf(true);

        console.log('Leader view or strong follower (1) view');

        console.log('Winner index is ' + setup.s4WinnerIndex);

        if(calculator.globalVariable.playerView === 1) {
            if(calculator.globalVariable.playerIndex === 1) {

                console.log('weak follower (2) view');

                setup.s4WinnerIndex = 1 - setup.s4WinnerIndex;

                console.log('Winner index is ' + setup.s4WinnerIndex);

            }
        }
    }


}

//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//--------------- HELP AND SABOTAGE SETTINGS ---------------//
//----------------------------------------------------------//
//
setup.hs = function() {

    //-------- TITLES -------//

    calculator.titles.hs.ghost.IG_show();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    calculator.section.hs.opacity.IG_LiFi([1,1]);

}

//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//------------------- POWER BAR SETTINGS -------------------//
//----------------------------------------------------------//
//
setup.pb = function() {

    calculator.section.power.opacity.IG_bar(true);
    calculator.section.power.display.IG_barText();
}

//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//--------------------- CONTEST SECTION --------------------//
//----------------------------------------------------------//
//
setup.contest = function() {

    //----- GENERAL SETTINGS -----//

    // these display settins simply display none the specific section
    // calculator.section.contest.display.all(true);
    calculator.section.contest.display.IG_sliders(true);
    calculator.section.contest.display.IG_title(false);
    calculator.section.contest.display.IG_results(false);
    calculator.section.contest.display.IG_icons(false);

    //------- RESULTS DISPLAY SETTINGS ------//

    calculator.results.leader.display.IG_investment(true);
    calculator.results.leader.display.IG_prize(true);
    calculator.results.leader.display.IG_netPayoff(true);
    calculator.results.leader.display.IG_role(true);

    //------- BUTTONS ------//

    calculator.button.display.IG_spinBottom(false);
    calculator.button.disable.IG_spinBottom();
    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

    //-------- TITLES -------//

    // if the subjective index is leader then hiding the contest title will not work by construction
    calculator.titles.contest.IG_show();
    // calculator.titles.contest.hide();

    //------ SLIDERS -------//

    // changes the slider range based on globalVariable.is***
    // calculator.graphics.update.IG_effortSliderRange();
    // changes the leader slider text background color based on globalVariable.is***
    calculator.graphics.update.IG_contestSliderBackgroundColor();

}

//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//---------------------- IG CALCULATOR ---------------------//
//----------------------------------------------------------//
//
//
setup.ig = function() {

    // HOVERS ACTIVE
    calculator.globalVariable.aBitOfWaitingIsDone = true;


    //------- SPACING OF CALCULATOR -----//
    calculator.space.IG_hsIsOpen = true;
    calculator.space.IG_powerBarIsOpen = true;
    calculator.space.IG_contestIsOpen = true;
    calculator.space.IG_contestResultsIsOpen = false;
    calculator.globalVariable.contestResultsExist = false;


    //----- AFTER SPIN ACTION SWITCHES ----//
    calculator.globalVariable.display.IG_hsIcons = 1;

    calculator.globalVariable.display.IG_cResults = 1;
    calculator.globalVariable.display.IG_cTitle = 0;
    calculator.globalVariable.display.IG_cButton = 0;


    //----- HOVER SWITCHES ------//
    calculator.globalVariable.hover.IG_cTitle = 0;
    calculator.globalVariable.hover.IG_cButton = 0;


    //------ QUESTIONS -----//
    calculator.questions.activate.IG_all([1,1])


    //------ LOCKS -------//
    calculator.lock.IG_activate([0,0]);


    //----- ROLL ------//
    // calculator.roll.IG_initiate();
    calculator.roll.IG_resetRoll();



    //----- ICONS -----//
    calculator.icons.setAll();
    calculator.section.hs.set.IG_iconPosition('bottom');


    //-- SETUP TEXT --//
    calculator.titles.update.IG_textAndColor();
    calculator.titles.hs.ghost.IG_text();



    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    setup.hs();

    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    setup.pb();

    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    setup.contest();


    //----------------------------------------------------------//
    //--------- REFRESH/UPDATE/ADJUST/RECALCULATE VALUE --------//
    //----------------------------------------------------------//

    calculator.refresh.IG_values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    calculator.refresh.IG_sliders();

    //----------------------------------------------------------//
    //---------------- FEEDBACK DISPLAY OR NOT -----------------//
    //----------------------------------------------------------//

    calculator.globalVariable.weAreInFeedbackStage = 0;
    setup.IGfeedback();

    //----------------------------------------------------------//
    //-------------------- DECISION SLIDER ---------------------//
    //----------------------------------------------------------//

    // auto show hide the relevant slider based on globalVariable.subjective**
    // calculator.section.all.adjust.IG_decisionSliders();

    // to override above setup use below code
    calculator.decisionSlider.leader.IG_disable();
    // calculator.decisionSlider.leader.IG_enable();
    // calculator.section.decision.leader.IG_opacity(0);


    //----------------------------------------------------------//
    //-------------------- GENERAL DISPLAY ---------------------//
    //----------------------------------------------------------//

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.hide.IG_all();
    // calculator.results.softHide.IG_allResults();


    // setTimeout(()=> {
    //     calculator.section.all.IG_opacity(1, 0.5);
    //     calculator.section.decision.leader.IG_opacity(1,0.5);
    // }, 100);

    // calculator.IG_close();
    calculator.IG_open();



}
