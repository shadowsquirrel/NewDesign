
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


    if(treatment === 0) {
        box.set.treatment_tuto(0,0);
    }

    if(treatment === 1) {
        box.set.treatment_tuto(1,0);
    }

    if(treatment === 2) {
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


tuto.start.SE(2);



//----------------------------------------------------------------------------//
//--------------------------- SECTIONS OVERVIEW ------------------------------//
//----------------------------------------------------------------------------//



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

        $('.IG_superWrap').css({'transition':'0s', 'margin-top':'-50px',
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

        box.transition('IG-n1802', 'IG-n1803_T2', 0, 0, 1, 750);
    
        setTimeout(()=>{
            box.button.show('IG-n1803_T2');
        }, 4000)

    }

    if(box.global.symmetricHeteroTreatment) {

        box.transition('IG-n1802', 'IG-n1803_T1', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('IG-n1803_T1');
        }, 2000)

    }

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        box.transition('IG-n1802', 'IG-n1803_T0', 0, 0, 1, 750);

        // $('#box-IG-n1803_T0').css({'margin-top':'-2px'})

        setTimeout(()=>{
            box.button.show('IG-n1803_T0');
        }, 2000)

    }


})

$('#btn-IG-n1803_T2').click(function() {

        box.transition('IG-n1803_T2', 'IG-n1804_T2', 0, 0, 1, 2250);

        $('.IG_superWrap').css({'transition':'0.5s', 'opacity':'0'});

        setTimeout(()=>{
            calculator.tutorial.IG('A', false, 0, false, false);
            calculator.tutorial.IGextras();
            calculator.roll.IG_hideAll();
        }, 550)

        setTimeout(()=>{
            $('.IG_superWrap').css({'transition':'1s', 'opacity':'1'});
        }, 1000)

        setTimeout(()=>{
            box.button.show('IG-n1804_T2');
        }, 3750)

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
    $('.OG1TopFollower').css({'transition':'0.5s', 'opacity':'0.5'});

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

    }, 1000)

    setTimeout(()=>{
        box.button.show('SE-n21');
    }, 3000)

})

$('#btn-SE-n21').click(function() {

    box.transition('SE-n21', 'SE-n22', 0, 0, 1, 750);

    setTimeout(()=>{
        box.button.show('SE-n22');
    }, 2000)

})

$('#btn-SE-n22').click(function() {

    $('.all').css({'display':'none'})

})
