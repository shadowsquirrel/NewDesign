

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
initialize.values = function() {

    calculator.pointers.activate([0, 0, 0, 0, 0, 0]);
    calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);
    calculator.lock.activate([0, 0, 0, 0, 0, 0])


    calculator.values.set.helpSabo([0,0,0,0,0,0,0,0]);
    calculator.values.set.efforts([100,100]);
    calculator.refresh.sliders();
    calculator.graphics.update.pie();

    calculator.globalVariable.hover.followerHsAdjustments = 1;

}


//----------------------------------------------------------//
//------------- EXPLANATION TEXT BASICS - SETTING ----------//
//----------------------------------------------------------//
//
//
setup.basicInfoText = function() {

    var isT1, isT2, isT3

    var h1 = calculator.globalVariable.ourFollowersAreHetero;
    var h2 = calculator.globalVariable.theirFollowersAreHetero;

    var fI = calculator.globalVariable.playerIndex;


    isT1 = (!h1 && !h2) ? true : false;
    isT2 = (h1 && h2) ? true : false;
    isT3 = (!isT1 && !isT2) ? true : false;


    $('.onlyT2, .onlyT3, .notT1').css({'display':'none'});


    if(isT1) {
        $('#infoTextFollowerType, #infoTextFollowerType2').html('a follower');
    }


    if(isT2) {

        $('.onlyT2, .notT1').css({'display':'inline-block'});

        if(fI === 0) {
            $('#infoTextFollowerType, #infoTextFollowerType2').html('the <i style=\'font-weight:500\'>strong</i> follower of your group');
        }

        if(fI === 1) {
            $('#infoTextFollowerType, #infoTextFollowerType2').html('the <i style=\'font-weight:500\'>weak</i> follower of your group');
        }

    }


    if(isT3) {
        $('.onlyT3, .notT1').css({'display':'inline-block'});

        if(h1) {

            $('.infoBoxYourGroupHetero').css({'display':'inline-block'});
            $('.infoBoxTheirGroupHetero').css({'display':'none'});

            if(fI === 0) {
                $('#infoTextFollowerType, #infoTextFollowerType2').html('the <i style=\'font-weight:500\'>strong</i> follower of your group');
            }

            if(fI === 1) {
                $('#infoTextFollowerType, #infoTextFollowerType2').html('the <i style=\'font-weight:500\'>weak</i> follower of your group');
            }
        }

        if(h2) {

            $('.infoBoxYourGroupHetero').css({'display':'none'});
            $('.infoBoxTheirGroupHetero').css({'display':'inline-block'});

            $('#infoTextFollowerType, #infoTextFollowerType2').html('a follower');

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
    calculator.globalVariable.isOG1 = 1;
    calculator.globalVariable.isOG2 = 0;
    calculator.globalVariable.isIGA = 0;
    calculator.globalVariable.isIGB = 0;


    calculator.globalVariable.ourFollowersAreHetero = myData.treatment[0];
    calculator.globalVariable.theirFollowersAreHetero = myData.treatment[1];

    // ONLY USED IN OG2 AND FEEDBACK 2
    calculator.globalVariable.winnerLeaderIndex = 2;
    calculator.globalVariable.winnerFollowerIndex = 1;

    // Always on unless it is a leader watching followers compete in IG
    calculator.globalVariable.playerView = 1;

    // setup the player role (leader/follower // strong/weak)
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
    calculator.globalVariable.hover.hsResults = 0;
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

    calculator.globalVariable.display.cResults = 0;
    calculator.globalVariable.display.cTitle = 0;
    calculator.globalVariable.display.cButton = 0;
    calculator.globalVariable.display.cMinimize = 1;


    //----- HOVER SWITCHES ------//

    calculator.globalVariable.hover.cMinimize = 1;
    calculator.globalVariable.hover.cResults = 0;
    calculator.globalVariable.hover.cTitle = 0;
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
    calculator.results.leader.display.role(true);


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
    calculator.space.contestIsOpen = true;
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

    // --- HIDE --- //
    calculator.section.decision.follower.opacity(0);
    calculator.section.decision.leader.opacity(0);



    // -------------------------------------------------------- //
    // ----------------- FURTHER ADJUSTMENTS ------------------ //
    // -------------------------------------------------------- //

    calculator.minimize();

    //----------------------------------------------------------------------------//
    //----------------------------- SUBMIT BUTTON --------------------------------//
    //----------------------------------------------------------------------------//

    $('#submitButtonBottom').click(function() {

        if(!tool.var.submitTutorialLockActive) {

            s2DoneUpdated = mainData.myTutorial.s2Done + 1;

            if(calculator.globalVariable.playerIndex === 0) {
                var msg = [h1, s1, s2DoneUpdated, ['big brother is watching']];
            }

            if(calculator.globalVariable.playerIndex === 1) {
                var msg = [h2, s2, s2DoneUpdated, ['big brother is watching']];
            }


            node.emit('s2_hs_decision', msg);

        } else {

            $('.cantSubmitWrap').css({'transform':'scale(1)',
            'z-index':'100000000'})

            $('.all').css({'filter':'grayscale(1)', 'opacity':'0.5'});

            $('.majorBlocker').css({'display':'flex'});

        }

    })

    $('#cantSubmitButton').click(function() {

        $('.cantSubmitWrap').css({'transform':'scale(0)',
        'z-index':'-100000000'})

        $('.all').css({'filter':'grayscale(0)', 'opacity':'1'});

        $('.majorBlocker').css({'display':'none'});

    })

}
