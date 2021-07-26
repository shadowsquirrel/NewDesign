
var data = {};



//-------------------------------------------------------------------------//
//------------------------- TUTO INITIATION ------------------------------//
//-------------------------------------------------------------------------//


var tuto = {
    start: {}
}


//----------------------------------------------------------------------------//
//------------------------------ GAME OVERVIEW -------------------------------//
//----------------------------------------------------------------------------//


tuto.start.SE = function(treatment) {

    //------------------------------------------------------------------//

    $('.heteroInfoBoxOG2, .homoInfoBoxOG2').css({'display':'none'});

    if(treatment === 0) {

        $('.heteroInfoBoxOG2').css({'display':'none'});
        $('.homoInfoBoxOG2').css({'display':'block'});

        box.set.treatment_tuto(0,0);
    }

    if(treatment === 1) {
        $('.homoInfoBoxOG2').css({'display':'none'});
        $('.heteroInfoBoxOG2').css({'display':'block'});

        box.set.treatment_tuto(1,0);
    }

    if(treatment === 2) {
        $('.homoInfoBoxOG2').css({'display':'none'});
        $('.heteroInfoBoxOG2').css({'display':'block'});

        box.set.treatment_tuto(0,1);
    }


    //------------------------------------------------------------------//

    title.update.size(false);

    $('#boxbox-SE').css({'display':'block', 'margin-top':'386px'});



    $('.sexplain').css({'display':'flex'});

    map.show.initialSetup();

    $('.sexplain').css({'transition':'0s', 'margin-bottom':'0px',
    'transform-origin':'left top', 'transform':'scale(1.5)', 'position':'absolute',
    'left':'333px'});
    setTimeout(()=>{
        $('.sexplain').css({'transition':'1s', 'margin-bottom':'0px',
        'opacity':'1'})
    }, 50)

    setTimeout(()=>{

        map.opacity.main([1,0,0], 0.5)
        map.opacity.sectionTitles([1,1,1])
        map.opacity.section([0.1, 0.4, 0.1], 1);
        map.opacity.cover([0,0,0.5], 1)

    }, 100)

    setTimeout(()=>{

        $('.arrowDashed, .OG1ficon, .OG1LeaderLeft, .OG1LeaderRight').css({'transition':'1s', 'opacity':'1'});
        map.opacity.inside([1,0,0], 1);

        setTimeout(()=>{
            map.animate.og1Results(50, 2);
            $('#anotherIdToCall6').css({'transition':'1s', 'opacity':'1'})

            setTimeout(()=>{
                map.opacity.main([1,1,0], 1)
                $('.IGTopContestWrap').css({'transition':'0s', 'opacity':'0'});
                $('.IGBottomContestWrap').css({'transition':'0s', 'opacity':'0'});
            },650)

        }, 1250)

    }, 100)

    setTimeout(()=>{
        box.transition('', 'SE-n13', 0, 0, 1);
    }, 1350)


    setTimeout(()=>{
        box.button.show('SE-n13');
    }, 4000)

}


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


calculator.hide.checkMark();

tuto.start.SE(2);



//----------------------------------------------------------------------------//
//--------------------------- SECTIONS OVERVIEW ------------------------------//
//----------------------------------------------------------------------------//

var listener = {};
var activator = {};


$('#btn-SE-n13').click(function() {

    box.transition('SE-n13', '', 0, 0, 1, 0);
    setTimeout(()=>{
        $('#boxbox-SE').css({'display':'block', 'margin-top':'275px'});
    }, 1000)

    $('.sexplain').css({'transition':'0.5s', 'margin-bottom':'0px',
    'transform-origin':'left top', 'transform':'scale(1)', 'position':'absolute',
    'left':'185px'});


    // hide top section
    map.opacity.top(0);

    // hide ingroup B
    setTimeout(()=>{
        $('.IGBottomContestWrap').css({'transition':'0.5s','opacity':'0'});
    }, 10)

    // show arrow from results to og2 and set the og2 icons based on the results
    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([-1, 0], [0, 1]);
        map.winnerFollowerIndex = 1;
        map.set.OG2ResultingIcons();
    }, 750)

    setTimeout(()=>{
        map.opacity.main([1,1,1],0.5)
    }, 1500)

    // hide group b cover of og2
    setTimeout(()=>{
        $('.OG2FightIconWrap, .groupBDescription, .fightDescription').css({'transition':'0.5s', 'opacity':'0'});
    }, 2250)

    setTimeout(()=>{

        // show inside of og2
        map.opacity.inside([1,0,1], 0.5);
        // hide left side of the inside
        map.opacity.OG2Left(0, 0);
        // probably redundant
        map.show.og2_rightLeader()
        // hide followers and their arrows
        $('.og2BlackArrow, .OG2FollowersWrapRight').css({'transition':'0s',
        'opacity':'0'});

        map.show.og2_rightLeaderCAT();

    },3000)

    setTimeout(()=>{
        box.transition('', 'SE-n14', 1, 0, 1, 0);
    }, 3750)

    setTimeout(()=>{
        box.button.show('SE-n14');
    }, 5750)

})

$('#btn-SE-n14').click(function() {

    box.transition('SE-n14', 'SE-n15', 1, 0, 1, 750);

    $('.OG1LeaderRight').css({'opacity':'0.5'});

    $('.icon-SE-n14').css({'transition':'1s', 'transform':'scale(0.8)',
    'margin-left':'-1px', 'margin-right':'-1px'});

    map.hide.og2_rightLeaderCAT();

    setTimeout(()=>{
        map.show.og2_rightFollowers();
        map.show.og2_rightFollowersCAT();
    }, 750)

    setTimeout(()=>{
        box.button.show('SE-n15');
    }, 2000)

})


$('#btn-SE-n15').click(function() {

    box.flush();
    box.transition('SE-n15', 'SE-n16', 0, 0, 1, 750);
    $('.arrowToBottomIconResults, .longArrowBottomIconToOG2').css({'transition':'0.5s',
    'opacity':'0.3'});
    $('.OG2FollowerArrowsRight, .OG2LeaderRight, .OG2FollowersWrapRight').css({'transition':'0.5s', 'opacity':'0.5'});

    map.hide.og2_rightFollowersCAT();

    setTimeout(()=>{
        $('.arrowToTopIconResults, .topBoxLeaderResult, .topLeaderLost').css({'transition':'0.5s', 'opacity':'1'});
    }, 750)


    setTimeout(()=>{
        box.button.show('SE-n16');
    }, 2000)

})

$('#btn-SE-n16').click(function() {

    box.transition('SE-n16', 'SE-n161', 1, 0, 1, 750);

    $('.groupADescription').css({'transition':'0.5s', 'opacity':'0'});

    setTimeout(()=>{
        map.show.og2_leftFollower1CAT();
        map.opacity.OG2Left(1, 0.5);
        $('.OG2LeftFollower2, .OG2LeaderLeft').css({'transition':'0s', 'opacity':'0'});
    }, 500)

    setTimeout(()=>{
        box.button.show('SE-n161');
    }, 2000)




})

$('#btn-SE-n161').click(function() {

    // ------------------------------- //

    // PREP CALCULATOR
    calculator.tutorial.IG('A', false, 1000, true, true);
    calculator.tutorial.IGextras();
    $('.IG_superWrap').css({'transition':'0s', 'opacity':'0'});


    // ------------------------------ //

    box.transition('SE-n161', 'SE-n17', 1, 0, 1, 750);

    // $('#boxwrap-SE-n16').css({'margin-top':'-100px'});


    map.hide.og2_leftFollower1CAT();
    $('.OG1LeaderLeft, .OG2LeftFollower1').css({'transition':'0.5s', 'opacity':'0.5'});

    setTimeout(()=>{
        $('.arrowTopIconToIG').css({'opacity':'1'});
    }, 750)

    setTimeout(()=>{
        $('.IGTopContestWrap').css({'opacity':'1'});
        map.opacity.section([0.1,0.1,0.1], 0.5);
        map.opacity.inside([-1,1,-1], 0.5);
        map.opacity.sectionTitles([1,1,1]);
        $('.prizeCrownBlackTop, .IGFI_Top').css({'transition':'0s', 'opacity':'0'});
        $('.prizeCrownLimeTop').css({'transition':'1.5s',
        'opacity':'1', 'margin-top':'-41px'});
    }, 1000)


    setTimeout(()=>{
        box.button.show('SE-n17');
    }, 2000)

})

$('#btn-SE-n17').click(function() {

    box.flush();
    box.transition('SE-n17', '', 0, 0, 1, 0);
    setTimeout(()=>{
        $('#boxbox-SE').css({'margin-top':'0px'});
    }, 780)

    map.opacity.main([0,1,0], 0.5)
    $('.IGFI_Top').css({'transition':'0.75s', 'opacity':'1'});
    $('.arrowsToOG1IconResults').css({'transition':'0.75s', 'opacity':'0'})
    $('.IG').css({'transition':'0.75s', 'transform-origin':'top', 'transform':'scale(2.5)',
    'margin-top':'76px', 'margin-left':'-186px'});
    map.opacity.bottom(0, 0.5);
    map.opacity.arrowsFromResultIcons([-1, 0], [0, 0]);

    setTimeout(()=>{
        $('#boxbox-IG').css({'display':'block'})
        box.transition('', 'IG-n18', 0, 0, 1, 100);
    }, 800)


    setTimeout(()=>{
        box.button.show('IG-n18');
    }, 3000)

})

$('#btn-IG-n18').click(function() {

    if(box.global.asymmetricHeteroTreatment) {

        box.transition('IG-n18', '', 0, 0, 1, 0);
        setTimeout(()=>{
            box.transition('', 'IG-n1802', 0, 0, 1, 0);
        }, 1750)
        setTimeout(()=>{
            calculator.wheel.IG_cruise();
            crown.resetCrowning();
        }, 1000)

        $('.IG_superWrap').css({'transition':'0s', 'margin-top':'0px',
        'margin-bottom':'-35px'});


        calculator.tutorial.IG('A', false, 0, false, true);
        calculator.tutorial.IGextras();
        calculator.roll.IG_hideAll();

        setTimeout(()=>{
            $('.IG_superWrap').css({'transition':'1s', 'opacity':'1'});
            $('.sexplain').css({'transition':'1s', 'opacity':'0'});
        }, 500)

        setTimeout(()=>{
            box.button.show('IG-n1802');
        }, 3000)

    } else {

        box.transition('IG-n18', '', 0, 0, 1, 0);
        setTimeout(()=>{
            box.transition('', 'IG-n1802', 0, 0, 1, 0);
        }, 1750)
        setTimeout(()=>{
            calculator.wheel.IG_cruise();
            crown.resetCrowning();
        }, 1000)


        if(box.global.symmetricHeteroTreatment) {

            $('.IG_superWrap').css({'transition':'0s', 'margin-top':'0px',
            'margin-bottom':'-35px'});
            // group, isSameColor, showDelay, experimentView, outGroupHetero
            calculator.tutorial.IG('A', false, 0, false, true);
        } else {
            // group, isSameColor, showDelay, experimentView, outGroupHetero
            calculator.tutorial.IG('A', false, 0, false, false);
            $('#box-IG-n1802').css({'transition':'0.5s', 'margin-top':'-8px'});
        }

        calculator.tutorial.IGextras();
        calculator.roll.IG_hideAll();

        setTimeout(()=>{
            $('.IG_superWrap').css({'transition':'1s', 'opacity':'1'});
            $('.sexplain').css({'transition':'1s', 'opacity':'0'});
        }, 500)

        setTimeout(()=>{
            box.button.show('IG-n1802');
        }, 3000)

    }


})


$('#btn-IG-n1802').click(function() {

    if(box.global.asymmetricHeteroTreatment) {

        $('.IG_superWrap').css({'transition':'1s', 'margin-top':'-50px',
        'margin-bottom':'-35px'});


        box.transition('IG-n1802', 'IG-n1803_T2', 0, 0, 1, 2750);
        calculator.wheel.IG_simpleSpin(2,1,1);

        setTimeout(()=>{
            box.button.show('IG-n1803_T2');
        }, 4000)

    }

    if(box.global.symmetricHeteroTreatment) {

        $('.IG_superWrap').css({'transition':'1s', 'margin-top':'-30px',
        'margin-bottom':'-35px'});

        box.transition('IG-n1802', 'IG-n1803_T1', 0, 0, 1, 2750);
        calculator.wheel.IG_simpleSpin(2,1,1);

        setTimeout(()=>{
            box.button.show('IG-n1803_T1');
        }, 2000)

    }

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        box.transition('IG-n1802', 'IG-n1803_T0', 0, 0, 1, 2750);
        calculator.wheel.IG_simpleSpin(2,0);

        // $('#box-IG-n1803_T0').css({'margin-top':'-2px'})

        setTimeout(()=>{
            box.button.show('IG-n1803_T0');
        }, 2000)

    }


})

$('#btn-IG-n1803_T2').click(function() {

        box.transition('IG-n1803_T2', 'IG-n1804_T2', 0, 0, 1, 5750);

        $('.IG_superWrap').css({'transition':'0.5s', 'opacity':'0'});

        setTimeout(()=>{
            calculator.tutorial.IG('A', false, 0, false, false);
            calculator.tutorial.IGextras();
            calculator.roll.IG_hideAll();
        }, 550)

        setTimeout(()=>{
            calculator.wheel.IG_cruise();
            calculator.lock.IG_activate([1,1]);
            calculator.values.set.IG_efforts([20,20]);
            calculator.refresh.IG_values();
            crown.resetCrowning();
            $('.risingCrown').css({'transition':'0s', 'margin-top':'-106px',
            'height':'65px', 'width':'65px', 'margin-left':'-8px', 'opacity':'1'});
        }, 750)

        setTimeout(()=>{
            $('.IG_superWrap').css({'transition':'1s', 'opacity':'1'});
        }, 1000)

        setTimeout(()=>{
            calculator.wheel.IG_simpleSpin(2,0);
        }, 3000)

        setTimeout(()=>{
            box.button.show('IG-n1804_T2');
        }, 7000)

})

$('#btn-IG-n1804_T2').click(function() {

        box.transition('IG-n1804_T2', 'SE-n19', 0, 0, 1, 3000);
        setTimeout(()=>{
            $('#boxbox-IG').css({'margin-top':'0px'});
            $('#boxbox-SE').css({'display':'block', 'margin-top':'115px'})
        }, 780)
        setTimeout(()=>{
            $('#boxbox-IG').css({'display':'none'})
        }, 800)

        $('.IG_superWrap').css({'transition':'0.5s', 'opacity':'0'});
        setTimeout(()=>{
            $('.IG_superWrap').css({'display':'none'})
        }, 760)


        map.opacity.main([1,1,1], 0)
        $('.IGFI_Top').css({'transition':'0s', 'opacity':'0'});
        $('.arrowsToOG1IconResults').css({'transition':'0s', 'opacity':'1'})
        $('.IG').css({'transition':'0s', 'transform-origin':'top',
        'transform':'scale(1)',
        'margin-top':'0px', 'margin-left':'0px'});
        map.opacity.bottom(1);
        $('.IGBottomContestWrap').css({'transition':'0s', 'opacity':'0'});
        map.opacity.arrowsFromResultIcons([-1, 0], [0, 1]);
        $('.arrowToBottomIconResults, .longArrowBottomIconToOG2').css({'transition':'0s',
        'opacity':'0.3'})
        $('.arrowsToOG2, .arrowTopIGtoOG2').css({'transition':'0s', 'opacity':'1'});
        $('.arrowBottomIGtoOG2').css({'transition':'0s', 'opacity':'0'});

        setTimeout(()=>{
            $('.sexplain').css({'transition':'1s', 'opacity':'1'});
        }, 1000)

        setTimeout(()=>{
            map.animate.tutorialCrownLoop(0);
        }, 2000)


        setTimeout(()=>{
            map.show.og2_leftLeader();
            map.show.og2_leftLeaderCAT();
        }, 2500)

        setTimeout(()=>{
            box.button.show('SE-n19');
        }, 5000)

})

$('#btn-IG-n1803_T1').click(function() {

    box.transition('IG-n1803_T1', 'SE-n19', 0, 0, 1, 3000);
    setTimeout(()=>{
        $('#boxbox-IG').css({'margin-top':'0px'});
        $('#boxbox-SE').css({'display':'block', 'margin-top':'115px'})
    }, 780)
    setTimeout(()=>{
        $('#boxbox-IG').css({'display':'none'})
    }, 800)

    $('.IG_superWrap').css({'transition':'0.5s', 'opacity':'0'});
    setTimeout(()=>{
        $('.IG_superWrap').css({'display':'none'})
    }, 760)


    map.opacity.main([1,1,1], 0)
    $('.IGFI_Top').css({'transition':'0s', 'opacity':'0'});
    $('.arrowsToOG1IconResults').css({'transition':'0s', 'opacity':'1'})
    $('.IG').css({'transition':'0s', 'transform-origin':'top',
    'transform':'scale(1)',
    'margin-top':'0px', 'margin-left':'0px'});
    map.opacity.bottom(1);
    $('.IGBottomContestWrap').css({'transition':'0s', 'opacity':'0'});
    map.opacity.arrowsFromResultIcons([-1, 0], [0, 1]);
    $('.arrowToBottomIconResults, .longArrowBottomIconToOG2').css({'transition':'0s',
    'opacity':'0.3'})
    $('.arrowsToOG2, .arrowTopIGtoOG2').css({'transition':'0s', 'opacity':'1'});
    $('.arrowBottomIGtoOG2').css({'transition':'0s', 'opacity':'0'});

    setTimeout(()=>{
        $('.sexplain').css({'transition':'1s', 'opacity':'1'});
    }, 1000)

    setTimeout(()=>{
        map.animate.tutorialCrownLoop(0);
    }, 2000)


    setTimeout(()=>{
        map.show.og2_leftLeader();
        map.show.og2_leftLeaderCAT();
    }, 2500)

    setTimeout(()=>{
        box.button.show('SE-n19');
    }, 5000)

})

$('#btn-IG-n1803_T0').click(function() {

    box.transition('IG-n1803_T0', 'SE-n19', 0, 0, 1, 3000);
    setTimeout(()=>{
        $('#boxbox-IG').css({'margin-top':'0px'});
        $('#boxbox-SE').css({'display':'block', 'margin-top':'115px'})
    }, 780)
    setTimeout(()=>{
        $('#boxbox-IG').css({'display':'none'})
    }, 800)

    $('.IG_superWrap').css({'transition':'0.5s', 'opacity':'0'});
    setTimeout(()=>{
        $('.IG_superWrap').css({'display':'none'})
    }, 760)


    map.opacity.main([1,1,1], 0)
    $('.IGFI_Top').css({'transition':'0s', 'opacity':'0'});
    $('.arrowsToOG1IconResults').css({'transition':'0s', 'opacity':'1'})
    $('.IG').css({'transition':'0s', 'transform-origin':'top',
    'transform':'scale(1)',
    'margin-top':'0px', 'margin-left':'0px'});
    map.opacity.bottom(1);
    $('.IGBottomContestWrap').css({'transition':'0s', 'opacity':'0'});
    map.opacity.arrowsFromResultIcons([-1, 0], [0, 1]);
    $('.arrowToBottomIconResults, .longArrowBottomIconToOG2').css({'transition':'0s',
    'opacity':'0.3'})
    $('.arrowsToOG2, .arrowTopIGtoOG2').css({'transition':'0s', 'opacity':'1'});
    $('.arrowBottomIGtoOG2').css({'transition':'0s', 'opacity':'0'});

    setTimeout(()=>{
        $('.sexplain').css({'transition':'1s', 'opacity':'1'});
    }, 1000)

    setTimeout(()=>{
        map.animate.tutorialCrownLoop(0);
    }, 2000)


    setTimeout(()=>{
        map.show.og2_leftLeader();
        map.show.og2_leftLeaderCAT();
    }, 2500)

    setTimeout(()=>{
        box.button.show('SE-n19');
    }, 5000)

})


$('#btn-SE-n18').click(function() {

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        box.flush();

        map.IGHighlightAnimationOn = false;

        box.transition('SE-n18', 'SE-n19', 0, 0, 1, 750);

        $('.arrowsToOG2, .arrowTopIGtoOG2').css({'transition':'0.5s', 'opacity':'1'});
        $('.arrowBottomIGtoOG2').css({'transition':'0s', 'opacity':'0'});

        map.animate.tutorialCrownLoop(0);

        setTimeout(()=>{
            map.show.og2_leftLeader();
            map.show.og2_leftLeaderCAT();
        }, 1000)

        setTimeout(()=>{
            box.button.show('SE-n19');
        }, 2000)

    }

    if(box.global.symmetricHeteroTreatment) {

        box.flush();

        box.transition('SE-n18', 'SE-n1801', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('SE-n1801');
        }, 2000)

    }

    if(box.global.asymmetricHeteroTreatment) {

        box.flush();

        box.transition('SE-n18', 'SE-n1802', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('SE-n1802');
        }, 2000)

    }

})

// SYMM HETERO FORK
$('#btn-SE-n1801').click(function() {

    map.IGHighlightAnimationOn = false;

    box.transition('SE-n1801', 'SE-n19', 0, 0, 1, 750);

    $('.arrowsToOG2, .arrowTopIGtoOG2').css({'transition':'0.5s', 'opacity':'1'});
    $('.arrowBottomIGtoOG2').css({'transition':'0s', 'opacity':'0'});

    map.animate.tutorialCrownLoop(0);

    setTimeout(()=>{
        map.show.og2_leftLeader();
        map.show.og2_leftLeaderCAT();
    }, 1000)

    setTimeout(()=>{
        box.button.show('SE-n19');
    }, 2000)

})


// ASYMMM HETERO FORK
$('#btn-SE-n1802').click(function() {

    box.transition('SE-n1802', 'SE-n1803', 0, 0, 1, 750);

    map.globalVariable.ourSideIsHetero = 0;
    map.globalVariable.theirSideIsHetero = 1;
    map.treatment()

    setTimeout(()=>{
        box.button.show('SE-n1803');
    }, 2000)

})

$('#btn-SE-n1803').click(function() {

    map.globalVariable.ourSideIsHetero = 1;
    map.globalVariable.theirSideIsHetero = 0;
    map.treatment()

    box.transition('SE-n1803', 'SE-n19', 0, 0, 1, 750);

    map.IGHighlightAnimationOn = false;

    $('.arrowsToOG2, .arrowTopIGtoOG2').css({'transition':'0.5s', 'opacity':'1'});
    $('.arrowBottomIGtoOG2').css({'transition':'0s', 'opacity':'0'});

    map.animate.tutorialCrownLoop(0);

    setTimeout(()=>{
        map.show.og2_leftLeader();
        map.show.og2_leftLeaderCAT();
    }, 1000)

    setTimeout(()=>{
        box.button.show('SE-n19');
    }, 2000)

})

// FORK CONVERGENCE TO HERE

$('#btn-SE-n19').click(function() {

    box.transition('SE-n19', 'SE-n20', 0, 0, 1, 750);

    map.globalVariable.stopTutorialCrownLoop = true;

    map.hide.og2_leftLeaderCAT();
    $('.OG1TopFollower, .OG2LeaderLeft').css({'transition':'0.5s', 'opacity':'0.5'});


    setTimeout(()=>{
        map.show.og2_leftFollower2();
        map.show.og2_leftFollower2CAT();
    }, 1250)

    setTimeout(()=>{
        box.button.show('SE-n20');
    }, 3000)

})

$('#btn-SE-n20').click(function() {

    box.transition('SE-n13', '', 0, 0, 1, 0);
    box.transition('SE-n20', 'SE-n21', 0, 0, 1, 750);

    map.globalVariable.stopTutorialCrownLoop = true;

    map.hide.og2_leftFollower2CAT();

    $('.OG1BottomFollower').css({'transition':'0.5s', 'opacity':'0.5'});
    $('.OG2FightIconWrap').css({'transition':'0.5s', 'opacity':'1'});

    setTimeout(()=>{

        $('.OG2LeftFollower1, .OG2FollowerArrowsRight, .OG2FollowersWrapRight, .OG2LeaderRight').css({'opacity':'1'});
        $('.IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'0.75s', 'opacity':'0.7'});
        $('.OG1, .IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'1s',
        'transform-origin':'right', 'transform':'scale(0.7)'});
        $('.arrowsToOG1IconResults').css({'transition':'1s','margin-left':'-20px'});
        $('.IG').css({'transition':'1s','margin-left':'-70px'});
        $('.arrowsToOG2').css({'transition':'1s','margin-left':'15px', 'margin-top':'8px'});
        $('.OG2').css({'transition':'1s', 'transform-origin':'left', 'transform':'scale(1.4)'})
        $('.sexplain').css({'transition':'1s', 'margin-left':'-75px'});
        map.opacity.bottomTransition(1, 0.75);
        map.opacity.topTransition(1, 0.75);
        $('.OG2LeaderLeft, .longArrowBottomIconToOG2').css({'transition':'0.5s', 'opacity':'1'});

    }, 1000)

    setTimeout(()=>{
        box.button.show('SE-n21');
    }, 3000)

})

$('#btn-SE-n21').click(function() {

    s1 = s2 = h1 = h2 = os1 = os2 = oh1 = oh2 = 0;
    efo = oefo = 200;

    box.transition('SE-n21', '', 0, 0, 1, 0);

    setTimeout(()=>{

        $('.sexplain').css({'margin-top':'-84px', 'margin-left':'375px'});
        map.opacity.main([0,0,1], 0.5);
        map.opacity.mainArrowSections([0,0,0], 0.5);

        calculator.section.hs.minimize(0);
        $('.generalMarginBox').css({'transition':'0s', 'display':'block',
        'transform':'scale(1)', 'filter':'opacity(0)','margin-top':'-93px'});
        $('.OG2').css({'transition':'1s', 'transform':'scale(1.5)', 'margin-top':'209px', 'margin-left':'-675px'});

        $('.contestSection, .payoffWrap, .imageWrap23').css({'display':'none'});

        setTimeout(()=>{
            // calculator.setup.hsAndPowerRatioTutorialOG2();
            $('.OG2').css({'transition':'0.75s', 'filter':'opacity(0)'});
            $('.hsWrap').css({'transition':'0.75s', 'filter':'opacity(1)'});
            $('.generalMarginBox').css({'transition':'0.75s', 'opacity':'1', 'filter':'opacity(1)'});
            setTimeout(()=>{
                $('.sexplain').css({'display':'none'});
            }, 750)
        }, 1000)


        // $('.winnerLeaderArrowLeft, .winnerLeaderTextLeft, .OG2CircleArrowLeft_f1, .OG2CircleArrowTextLeft_f1').css({'transition':'1s',  'opacity':'0'});


        setTimeout(()=>{
            $('#boxbox-OG2Intro').css({'display':'none'});
            $('#boxbox-OG2').css({'display':'block'});
        }, 750)

        setTimeout(()=>{
            map.opacity.section([0,0,0.15])
            $('.OG2FollowersWrapLeft, .OG2FollowersWrapRight').css({'transition':'1s', 'opacity': '1'});
            $('.OG2FollowerArrowsLeft, .OG2FollowerArrowsRight').css({'transition':'1s', 'opacity': '1'});
            $('.arrowDashedLime2').css({'transition':'1s', 'opacity':'0'});
            $('.og2BlackArrow').css({'transition':'1s','opacity':'1'});
            $('.s5PassiveFollower').css({'transition':'1s','opacity':'1'});
            $('.s5ActiveFollower').css({'transition':'1s','opacity':'0'});
            $('.OG2GroupSeparator').css({'transition':'2s', 'opacity':'1', 'height':'119px'});
            $('.OG2FightIcon, .OG2FightIconLime').css({'transition':'1s', 'opacity':'0'});
            $('.OG2LeaderRight, .OG2LeaderLeft').css({'transition':'1s', 'opacity':'0.8'});
            calculator.setup.hsAndPowerRatioTutorialOG2();
        }, 250)



        setTimeout(()=>{

            box.transition('', 'OG2-1', 0, 0, 1, 0);

            calculator.roll.resetRoll();

            setTimeout(()=>{
                calculator.values.set.helpSabo([0,0,0,12,0,0,4,7]);
                calculator.values.set.efforts([200,200]);
                calculator.refresh.sliders();
                calculator.graphics.update.pie();
                calculator.refresh.values();
                calculator.lock.activate([0, 0, 1, 1, 1, 1]);
            }, 2000)

            setTimeout(()=>{
                box.button.show('OG2-1');
            }, 3000)

        }, 1000)

    }, 250)

})

listener.og2_f1 = false;
activator.og2_f1 = false;
$('#btn-OG2-1').click(function() {

    box.transition('OG2-1', 'OG2-2', 0, 0, 1, 750);

    setTimeout(()=>{
        calculator.values.set.helpSabo([0,0,0,12,0,0,4,7]);
        calculator.values.set.efforts([200,200]);
        calculator.refresh.sliders();
        calculator.graphics.update.pie();
        calculator.refresh.values();
        calculator.lock.activate([0, 0, 0, 1, 1, 1]);
        calculator.pointers.activate([0,0, 1,0, 0,0]);

        listener.og2_f1 = true;
    }, 1000)

})

$('#btn-OG2-201').click(function() {

    box.transition('OG2-201', 'OG2-3', 0, 0, 1, 750);


    calculator.globalVariable.enervate2FollowerF1 = false;
    // s1,s2,h1,h2,os1,os2,oh1,oh2
    calculator.values.set.helpSabo([0,0,11,12,0,0,4,7]);
    calculator.refresh.sliders();
    calculator.hide.checkMark();

    calculator.lock.activate([0, 0, 1, 1, 1, 1]);

    setTimeout(()=>{
        box.button.show('OG2-3');
    }, 3000)

})

$('#btn-OG2-3').click(function() {

    box.transition('OG2-3', '', 0, 0, 1, 0);
    $('#boxbox-OG2').css({'margin-top':'-15px'});

    calculator.setup.ogTutorialOG2();
    calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
    calculator.section.hs.set.iconPosition('bottom');
    calculator.titles.hs.hide();
    calculator.titles.hs.ghost.text();
    calculator.titles.hs.ghost.show();
    calculator.section.hs.minimize(true);
    calculator.section.contest.minimize(false);

    $('.contestSection, .imageWrap23, .payoffWrap').css({'transition':'0s', 'filter':'opacity(0)', 'transform':'scale(0)'});
    $('.generalMarginBox').css({'margin-top':'-200px'});

    calculator.lock.activate([0, 0, 1, 1, 1, 1]);

    setTimeout(()=>{
        $('#boxbox-OG2').css({'margin-top':'20px', 'margin-bottom':'10px'});
        box.transition('', 'OG2-5', 0, 0, 1, 0);

        setTimeout(()=>{
            calculator.button.enable.spinBottom();
            calculator.lock.activate([0, 0, 1, 1, 1, 1]);
            setTimeout(()=>{
                $('.contestSection, .imageWrap23, .payoffWrap').css({'transition':'1s', 'filter':'opacity(1)', 'transform':'scale(1)'});
            }, 1000)
        })

    }, 750)

    setTimeout(()=>{
        box.button.show('OG2-5');
    }, 3000)

})

activator.og2_6_l1 = false;
listener.og2_6_l1 = false;
$('#btn-OG2-5').click(function() {

    box.transition('OG2-5', 'OG2-6', 0, 0, 1, 750);

    setTimeout(()=>{
        listener.og2_6_l1 = true;
        calculator.lock.activate([0, 1, 1, 1, 1, 1]);
        calculator.values.set.efforts([200,200]);
        calculator.refresh.sliders();
        calculator.pointers.activate([1,0,0,0,0,0]);
    }, 1250)

})

$('#btn-OG2-6').click(function() {

    calculator.pointers.activate([0,0,0,0,0,0]);

    box.transition('OG2-6', '', 0, 0, 1, 0);
    calculator.lock.activate([1, 1, 1, 1, 1, 1]);
    $('.generalMarginBox').css({'transition':'0.5s','opacity':'0'});
    setTimeout(()=>{
        $('.generalMarginBox').css({'transition':'0s', 'transform':'scale(0)'});
    }, 600)



    $('.OG2GroupSeparator').css({'transition':'0s', 'opacity':'0', 'height':'0px'});
    $('.OG2FightIconWrap').css({'transition':'0s', 'opacity':'1'});
    $('.OG2FightIcon').css({'transition':'0s', 'opacity':'1'});
    $('.OG2LeaderRight, .OG2LeaderLeft').css({'transition':'0s', 'opacity':'1'});
    $('.OG2LeftFollower1, .OG2FollowerArrowsRight, .OG2FollowersWrapRight, .OG2LeaderRight').css({'opacity':'1'});
    $('.IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'0s', 'opacity':'0.7'});
    $('.OG1, .IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'0s',
    'transform-origin':'right', 'transform':'scale(0.7)'});
    $('.arrowsToOG1IconResults').css({'transition':'0s','margin-left':'-20px'});
    $('.IG').css({'transition':'0s','margin-left':'-70px'});
    $('.arrowsToOG2').css({'transition':'0s','margin-left':'15px', 'margin-top':'8px'});
    $('.OG2').css({'transition':'0s', 'transform-origin':'left', 'transform':'scale(1.4)'})
    $('.sexplain').css({'transition':'0s', 'margin-left':'-75px'});
    map.opacity.bottomTransition(1, 0.75);
    map.opacity.topTransition(1, 0.75);
    $('.OG2LeaderLeft, .arrowsFromIconResultsToIG, .longArrowBottomIconToOG2').css({'transition':'0s', 'opacity':'1'});
    $('.OG1LeftFollower1').css({'opacity':'0.5'})
    $('.arrowsFromIconResultsToIG').css({'transition':'0s', 'opacity':'0.7'});
    $('.longArrowBottomIconToOG2').css({'transition':'0s', 'opacity':'1'});
    $('.wonLostBoxes').css({'opacity':'0.7'});


    $('.sexplain').css({'transition':'0s', 'opacity':'0', 'display':'flex'})
    map.opacity.main([1,1,1], 0);
    $('.OG2').css({'transition':'0s', 'filter':'opacity(1)', 'margin-top':'41px', 'margin-left':'0px'});
    $('.sexplain').css({'margin-left':'-59px', 'margin-top':'54px', 'margin-bottom':'30px'});
    setTimeout(()=>{
        $('.sexplain').css({'transition':'1s', 'opacity':'1'})
    }, 610)

    setTimeout(()=>{
        box.transition('', 'SE-n22', 0, 0, 1, 0);

        setTimeout(()=>{
            box.button.show('SE-n22');
        }, 2000)
    }, 610)


})

$('#btn-SE-n22').click(function() {

    box.transition('SE-n22', 'SE-n23', 0, 0, 1, 750);

    setTimeout(()=>{
        box.button.show('SE-n23');
    }, 2000)

})
