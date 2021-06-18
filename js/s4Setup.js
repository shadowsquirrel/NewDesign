

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

    var s4Done = myData.myTutorial.s4Done;

    $('.info-a-2-tuto, .info-a-2-notuto').css({'display':'none'});

    if(s4Done > 0) {

        $('.info-a-2-notuto, #info-a-3-notuto').css({'display':'block'});

    } else {

        $('.info-a-2-tuto, #info-a-3-tuto').css({'display':'block'});

    }

    var ourSideIsHetero = myData.treatment[0];
    var theirSideIsHetero = myData.treatment[1];
    var myList = myData.sortedArray;
    var myIndex = (myList.indexOf(myData.myCount) - 1);

    var infoBoxA1 = 'one of the two followers';

    if(ourSideIsHetero === 1) {

        $('#infoBox-a-202-hetero').css({'display':'block'});

        if(myIndex === 0) {
            infoBoxA1 = 'the <i class=myBold>strong follower</i>';
            $('#infoBox-a-202-strong').html('You are advantaged in this contest');
        } else {
            infoBoxA1 = 'the <i class=myBold>weak follower</i>';
            $('#infoBox-a-202-weak').html('You are disadvantaged in this contest');
        }


    } else {

        $('#infoBox-a-202-homo').css({'display':'block'});

    }

    $('#infoBox-a-1').html(infoBoxA1);

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
initialize.values = function() {

    calculator.pointers.IG_activate([0, 0]);
    calculator.questions.activate.IG_all([0, 0]);
    calculator.lock.IG_activate([0, 0]);


    calculator.values.set.IG_efforts([50,50]);


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

    calculator.globalVariable.playerView = 1;

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

    calculator.results.leader.display.IG_investment(false);
    calculator.results.leader.display.IG_prize(false);
    calculator.results.leader.display.IG_netPayoff(false);
    calculator.results.leader.display.IG_role(false);

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

    calculator.globalVariable.display.IG_cResults = 0;
    calculator.globalVariable.display.IG_cTitle = 1;
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
    calculator.section.all.adjust.IG_decisionSliders();

    // to override above setup use below code
    // calculator.decisionSlider.leader.IG_disable();
    // calculator.decisionSlider.leader.IG_enable();
    calculator.section.decision.leader.IG_opacity(0);


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
