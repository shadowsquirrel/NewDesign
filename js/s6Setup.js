

let setup = {};
let initialize = {};

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// ----------------------   CALCULATOR SETUP METHODS   ---------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //


//----------------------------------------------------------//
//------------------  VALUE INITIATIONS   ------------------//
//----------------------------------------------------------//
//
// NODE ACTION REQUIRED IN HERE
initialize.values = function() {

    // dont point or question anything, unlock all
    calculator.pointers.activate([0, 0, 0, 0, 0, 0]);
    calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);

    // lock help sabotage decisions since they've already been made
    calculator.lock.activate([0, 0, 1, 1, 1, 1]);

    // initialize
    calculator.values.set.helpSabo([0,0,0,0,0,0,0,0]);
    calculator.values.set.efforts([100,100]);
    calculator.refresh.sliders();
    calculator.graphics.update.pie();

}

//----------------------------------------------------------//
//---- TEXT ------------------------------------------------//
//----------------------------------------------------------//
//------------- INFO BOX EXPLANATION/TUTORIAL --------------//
//----------------------------------------------------------//
//
// call this after assigning the treatment variables from the myData received from the client
setup.basicInfoText = function() {

    var isT1, isT2, isT3

    var h1 = calculator.globalVariable.ourFollowersAreHetero;
    var h2 = calculator.globalVariable.theirFollowersAreHetero;

    // must be always -1
    var fI = calculator.globalVariable.playerIndex;

    console.log();
    console.log('-----------------------------------------------');
    console.log('player index: ' + fI);
    console.log('-----------------------------------------------');
    console.log();

    isT1 = (!h1 && !h2) ? true : false;
    isT2 = (h1 && h2) ? true : false;
    isT3 = (!isT1 && !isT2) ? true : false;

    // notT1 represents common info boxes on treatment 2 and treatment 3
    $('.onlyT2, .onlyT3, .notT1').css({'display':'none'});


    if(isT1) {

    }


    if(isT2) {

        $('.onlyT2, .notT1').css({'display':'inline-block'});


    }


    if(isT3) {

        $('.onlyT3, .notT1').css({'display':'inline-block'});

        if(h1) {

            $('.infoBoxYourGroupHetero').css({'display':'inline-block'});
            $('.infoBoxTheirGroupHetero').css({'display':'none'});

        }

        if(h2) {

            $('.infoBoxYourGroupHetero').css({'display':'none'});
            $('.infoBoxTheirGroupHetero').css({'display':'inline-block'});

        }

    }


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

    // since the data has already been rearranged subject's count is always
    // in the first 3 elements of the list. It in fact must always be the first
    // element if there is no bug
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

    if(myIndex != -1) {
        console.log();
        console.log();
        console.log();
        console.log('ERROR! ERROR! ERROR!');
        console.log('PLAYER ROLE IS DEFINED [ ! NOT ! ] TO BE THE LEADER');
        console.log('index: ' + myIndex);
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
    calculator.globalVariable.display.hsResults = 0;
    calculator.globalVariable.display.hsMainTitle = 0;
    calculator.globalVariable.display.hsGhostTitle = 0;
    calculator.globalVariable.display.hsButton = 0;
    calculator.globalVariable.display.hsMinimize = 0;

    //----- HOVER SWITCHES ------//

    calculator.globalVariable.hover.hsMinimize = 0;
    calculator.globalVariable.hover.hsIcons = 0;
    calculator.globalVariable.hover.hsResults = 0;
    calculator.globalVariable.hover.hsMainTitle = 0;
    calculator.globalVariable.hover.hsGhostTitle = 0;
    calculator.globalVariable.hover.hsButton = 0;

    //---- SIZE -----//

    calculator.section.hs.minimize(false);

    //------- SPIN BUTTON ------//

    calculator.button.display.spinTop(false);
    calculator.button.enable.spinTop();
    calculator.globalVariable.topSpinButtonIsEnabled = false;

    //-------- TITLES -------//

    calculator.titles.hs.hide();

    calculator.titles.hs.ghost.show()
    $('.ctGhost').css({'transition':'0.5s', 'margin-top' : '37px',
    'transform':'rotate(1turn)'});

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    calculator.section.hs.opacity.SFiALiFiS([0.5,0.5,1,1,1,0], 0.5);


}


//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//------------------- POWER BAR SETTINGS -------------------//
//----------------------------------------------------------//
//
//
setup.pb = function() {

    // show power bar
    calculator.section.power.opacity.bar(true);

    // show/hide power bar text
    calculator.section.power.display.barText('none');

    // if the text inside the bar is dynamic/adaptive
    calculator.graphics.dynamicPowerBarText = true;

    // powerbar setup (probably default is false)
    calculator.section.power.display.barLegend(true);

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

    calculator.globalVariable.display.cResults = 0;
    calculator.globalVariable.display.cTitle = 0;
    calculator.globalVariable.display.cButton = 0;
    calculator.globalVariable.display.cMinimize = 0;


    //----- HOVER SWITCHES ------//

    calculator.globalVariable.hover.cMinimize = 0;
    calculator.globalVariable.hover.cResults = 0;
    calculator.globalVariable.hover.cTitle = 0;
    calculator.globalVariable.hover.cButton = 0;

    // recent addition as the old hover methods are not serving us well
    calculator.globalVariable.hover.leaderHidesFicons = 1;


    //---- SIZE ----//

    calculator.section.contest.minimize(true);
    calculator.results.hide.leaderOutcomes();


    //----- OUTCOME DISPLAY SWITCHES -----//

    // these display settins simply display none the specific section
    calculator.section.contest.display.all(false);
    // calculator.section.contest.display.sliders(true);
    // calculator.section.contest.display.title(false);
    // calculator.section.contest.display.results(false);
    // calculator.section.contest.display.icons(false);


    //------- RESULTS DISPLAY SETTINGS ------//

    calculator.results.leader.display.investment(false);
    calculator.results.leader.display.prize(false);
    calculator.results.leader.display.netPayoff(false);
    calculator.results.leader.display.role(false);


    //------- BUTTONS ------//

    calculator.button.display.spinBottom(false);
    calculator.button.disable.spinBottom();
    calculator.globalVariable.bottomSpinButtonIsEnabled = false;


    //-------- TITLES -------//

    calculator.titles.contest.hide();


    //------ SLIDERS -------//

    // changes the slider range based on globalVariable.is***
    calculator.graphics.update.effortSliderRange();
    // changes the leader slider text background color based on globalVariable.is***
    calculator.graphics.update.contestSliderBackgroundColor();

}


//----------------------------------------------------------//
//---- SETUP -----------------------------------------------//
//----------------------------------------------------------//
//---------------------- OG CALCULATOR ---------------------//
//----------------------------------------------------------//
//
//
setup.og = function() {

    //-------- CALCULATOR SPACE --------//
    calculator.space.hsIsOpen = true;
    calculator.space.powerBarIsOpen = true;
    calculator.space.contestIsOpen = false;
    calculator.globalVariable.aBitOfWaitingIsDone = true;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([1,1,1,1,1,1])

    //------ LOCKS -------//
    calculator.lock.activate([0,0,0,0,0,0]);

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
    // calculator.decisionSlider.leader.enable();

    // --- HIDE --- //
    calculator.section.decision.follower.opacity(0);
    calculator.section.decision.leader.opacity(0);
    // calculator.section.decision.leader.opacity(1);


}
