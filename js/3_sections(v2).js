
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


    $('#boxbox-SE').css({'display':'block'});

    $('.sexplain').css({'display':'flex'});

    title.update.textColor(-8000, true, 30);

    setTimeout(()=>{
        title.update.text('OVERVIEW');
        title.update.size(true);
    }, 800)

    map.show.initialSetup();

    $('.sexplain').css({'transition':'0s', 'margin-bottom':'0px'})
    setTimeout(()=>{
        $('.sexplain').css({'transition':'1.5s', 'margin-bottom':'0px',
        'transform':'scale(1)', 'opacity':'1'})
    })

    setTimeout(()=>{
        box.transition('', 'SE-1', 0, 0, 1);
    }, 1250)

    setTimeout(()=>{
        map.opacity.coverArrows([1,0],0.5)
    }, 2250)

    setTimeout(()=>{
        map.opacity.coverArrows([1,1],0.5)
    }, 2750)

    setTimeout(()=>{
        box.button.show('SE-1');
    }, 3000)

}


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


tuto.start.SE(2);



//----------------------------------------------------------------------------//
//--------------------------- SECTIONS OVERVIEW ------------------------------//
//----------------------------------------------------------------------------//
$('#btn-SE-1').click(function() {

    box.transition('SE-1', 'SE-101', 0, 0, 1, 750);

    map.opacity.coverArrows([0,0],1)

    setTimeout(()=>{
        map.animate.rotateIGs(0);
    }, 1000)


    setTimeout(()=>{
        box.button.show('SE-101');
    }, 2000)



})


$('#btn-SE-101').click(function() {

    title.update.textColor(-6000, false, 50);

    map.animateRotateIGsActive = false;

    // close the box
    box.transition('SE-101', 'SE-3', 0, 0, 1, 1000);

    setTimeout(()=>{
        title.update.size(false);
    }, 100)

    setTimeout(()=>{
        map.opacity.main([1,0.7,1], 1);
        map.opacity.section([1,1,1], 1.5);
        setTimeout(()=>{
            map.enlarge.main([1.2, 0.6, 1.2], 1.5)
            setTimeout(()=>{
                map.opacity.section([0.05,1,0.05], 1.5);
                map.opacity.cover([1,0,1], 1.5);
                setTimeout(()=>{
                    $('.someTextWrapForSomeSmallBusiness').css({'transition':'1.5s', 'opacity':'1'})
                }, 200)
            }, 1250)
        }, 100)
    }, 750)

    setTimeout(()=>{
        box.button.show('SE-3');
    }, 3750)

})

$('#btn-SE-3').click(function() {


    // close the box
    box.transition('SE-3', 'SE-4', 0, 0, 1, 750);

    setTimeout(()=>{
        map.opacity.section([0.25,1,0.25], 2);
    }, 100)

    setTimeout(()=>{
        map.opacity.sectionTitles([1,0,1], 2);
        $('.OG1Title, .OG2Title').css({'transition':'1s', 'transform-origin':'bottom',
        'transform':'scale(1.2)', 'font-size':'25px', 'font-weight':'500'});
        setTimeout(()=>{
            $('#someTinyTinyClass').css({'transition':'1.25s', 'opacity':'1'})
        }, 10)
    }, 1500)


    setTimeout(()=>{
        box.button.show('SE-4');
    }, 2750)

})

$('#btn-SE-4').click(function() {

    // close the box
    box.transition('SE-4', 'SE-5', 0, 0, 1, 500);

    $('.OG1Title, .OG2Title').css({'transition':'0.5s',
    'transform-origin':'bottom','transform':'scale(1)', 'font-size':'22px', 'font-weight':'400'});

    setTimeout(()=>{
        map.opacity.section([0.05,1,0.05], 2);
        map.opacity.cover([0,0,1], 1);
        map.opacity.inside([1,0,0], 1.5)
        $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0s', 'opacity': '0'});
        $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'0s', 'opacity': '0'});
        $('.OG1LeadersIcon').css({'transition':'1.5s', 'margin-right':'-4px', 'margin-top':'4px',
        'transform-origin':'bottom', 'transform':'scale(1.5)'})
    }, 1500)



    setTimeout(()=>{
        $('.someTinyTinyClass2').css({'transition':'1s', 'opacity':'1'})
    }, 1500)


    setTimeout(()=>{
        box.button.show('SE-5');
    }, 3250)

})

$('#btn-SE-5').click(function() {

    // close the box
    box.transition('SE-5', 'SE-501', 1, 0, 1, 750);

    $('.someTinyTinyClass2').css({'margin-top':'-25px', 'margin-left':'250px',
    'margin-bottom':'0px'})

    setTimeout(()=>{
        box.button.show('SE-501');
    }, 2000)

})

$('#btn-SE-501').click(function() {

    box.flush();

    // close the box
    box.transition('SE-501', 'SE-6', 0, 0, 1, 750);

    setTimeout(()=>{
        $('.OG1LeadersIcon').css({'transition':'0.5s', 'margin-right':'0px', 'margin-top':'2px',
        'transform-origin':'bottom', 'transform':'scale(1)'})
    }, 50)

    setTimeout(()=>{

        $('.OG1LeadersIcon').css({'transition':'1s', 'opacity':'1'})
        $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1s', 'opacity':'0.4'});
        $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1GroupSeparator').css({'transition':'2s', 'height':'100px', 'opacity':'1'});

        $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'0.5s', 'opacity': '1'});


        setTimeout(()=>{
            map.globalVariable.activeHelpFollowerAnimation = true;
            map.animate.arrowColor(1);
        }, 500)

    }, 150)

    setTimeout(()=>{
        box.button.show('SE-6');
    }, 3000)

})

$('#btn-SE-6').click(function() {

    // close the box
    box.transition('SE-6', 'SE-61', 1, 1, 750);

    map.animate.activateInverseColoring = true;

    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'1s', 'opacity': '0.4'});

    $('.OG1LeadersIcon').css({'transition':'1s', 'opacity':'1'})
    $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1s', 'opacity':'1'});

    $('.OG1GroupSeparator').css({'transition':'1.25s', 'height':'0px', 'opacity':'0'});
    setTimeout(()=>{
        $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1FightIcon').css({'transition':'1s', 'opacity':'1'});
    }, 1000)

    setTimeout(()=>{
        box.button.show('SE-61');
    }, 3000)

})

$('#btn-SE-61').click(function() {

    // close the box
    box.transition('SE-61', 'SE-62', 1, 1, 750);

    setTimeout(()=>{
        box.button.show('SE-62');
    }, 3000)

})

var neutralOG1 = function() {

    $('.s2ActiveFollower').css({'transition':'1s', 'opacity':'0'});
    $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'1'});
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'1s', 'opacity':'1'});

    $('.arrowDashed').css({'transition':'1s', 'opacity':'1'});
    $('.arrowDashedLime1').css({'transition':'1s', 'opacity':'0'});

    $('.OG1LeadersIcon, .OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1s', 'opacity':'1'});
    $('.leaderKingLeft, .leaderKingRight').css({'transition':'1s', 'filter':'drop-shadow(0px 3px 2px black)', 'opacity':'1'});

    $('.subsubOG1L').css({'transition':'1s', 'border-color':'gray', 'background-color':'#d3d3d378'});
    $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'0'});
    $('.OG1FightIcon').css({'transition':'1s', 'opacity':'1'});

}

var minimizeStep = function() {
    $('.rightSideStep1Text').css({'transition':'1s', 'margin-top':'45px', 'transform':'scale(0.6)', 'margin-left':'183px'});
    $('.leftSideStep1Text').css({'transition':'1s', 'margin-top':'45px', 'transform':'scale(0.6)', 'margin-left':'-215px'});
    $('.middleStep2Text').css({'transition':'1s', 'margin-top':'11px', 'transform':'scale(0.6)'});
}

var maximizeStep = function() {
    $('.rightSideStep1Text').css({'transition':'1s', 'margin-top':'144px', 'transform':'scale(1)', 'margin-left':'190px'});
    $('.leftSideStep1Text').css({'transition':'1s', 'margin-top':'144px', 'transform':'scale(1)', 'margin-left':'-240px'});
    $('.middleStep2Text').css({'transition':'1s', 'margin-top':'144px', 'transform':'scale(1)'});
}

$('#btn-SE-62').click(function() {

    map.globalVariable.activeHelpFollowerAnimation = false;

    // close the box
    box.transition('SE-62', 'SE-7', 0, 0, 1500);

    neutralOG1();

    setTimeout(()=>{
        box.flush();
    }, 100)

    setTimeout(()=>{
        neutralOG1();
        $('.OG1GroupSeparator').css({'display':'none'});
        $('.leftSideStep1Text, .middleStep2Text, .rightSideStep1Text').css({'transition':'1s', 'opacity':'0.3', 'filter':'grayscale(1)'});
        map.animate.stepNumber(0)
    }, 1500)

    setTimeout(()=>{
        box.button.show('SE-7');
    }, 3000)

})

$('#btn-SE-7').click(function() {

    // close the box
    box.transition('SE-7', 'SE-8', 1, 0, 1);
    map.animate.se8Lock = true;
    map.animate.se9Lock = false;

    $('#boxwrap-SE-7').css({'transition':'1s', 'margin-top':'-26px'});

    $('#box-SE-7').css({'transition':'1s', 'margin-left':'853px', 'margin-top':'-47px',
    'margin-bottom':'0px'});


    map.globalVariable.activeHelpFollowerAnimation = true;
    map.animate.arrowColor(1);
    setTimeout(()=>{
        $('.OG1LeadersIcon').css({'opacity':'0.5'});
    }, 1000)



    $('.OG1GroupSeparator').css({'display':'flex', 'transition':'0s', 'height':'0px'})
    setTimeout(()=>{
        $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});
        setTimeout(()=>{
            $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});
        }, 1000)
        $('.OG1GroupSeparator').css({'transition':'2s', 'height':'100px', 'opacity':'1'});
    }, 100)


    setTimeout(()=>{
        $('#box-SE-7').css({'margin-top':'-10px'});
    }, 500)

    setTimeout(()=>{
        box.button.show('SE-8');
    },3000)

})

$('#btn-SE-8').click(function() {

    // close the box
    box.transition('SE-8', 'SE-10', 1, 0, 1);
    map.animate.se9Lock = true;
    map.animate.stepNumber(1);
    $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG1GroupSeparator').css({'transition':'2s', 'height':'100px', 'opacity':'1'});

    $('#boxwrap-SE-8').css({'margin-top':'-25px'});
    $('.se-8-text').css({'transition':'1s',
    'margin-top':'2px', 'margin-left':'85px',
    'display':'block'})

    $('.arrowDashed').css({'transition':'1s', 'opacity':'1'});

    setTimeout(()=>{
        $('.additionalStep1Class-infoBox').css({'transition':'0.5s', 'margin-top':'-31px',
        'margin-left':'41px', 'margin-bottom':'-10px', 'transform':'scale(0.6)'});
    }, 200)

    setTimeout(()=>{
        box.button.show('SE-10');
    }, 3000)

})

$('#btn-SE-10').click(function() {

    // close the box
    box.transition('SE-10', 'SE-11', 1, 0, 1);

    $('#box-SE-8').css({'margin-bottom':'20px'});

    map.globalVariable.activeHelpFollowerAnimation = false;

    $('.arrowDashed').css({'transition':'1s', 'opacity':'0'});
    setTimeout(()=>{
        $('.OG1GroupSeparator').css({'transition':'1.25s', 'height':'0px', 'opacity':'0'});
        setTimeout(()=>{
            $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
            $('.OG1FightIcon').css({'transition':'1s', 'opacity':'1'});
            setTimeout(()=>{
                $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'1'});
                $('.OG1FightIcon').css({'transition':'1s', 'opacity':'0'});
                setTimeout(()=>{
                    $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'2s', 'transform':'rotate3d(3,2,1, 1800deg)'});
                }, 1000)
            }, 1000)
        }, 1000)
    })


    setTimeout(()=>{
        box.button.show('SE-11');
    },3000)

})

$('#btn-SE-11').click(function() {

    // close the box
    box.transition('SE-11', 'SE-n12', 1, 1, 1, 750);

    $('.leftSideStep1Text, .rightSideStep1Text, .middleStep2Text').css({'transition':'1s', 'filter':'opacity(0)'});

    setTimeout(()=>{
        box.flush();
    }, 100);


    setTimeout(()=>{

        map.globalVariable.stopHelpSabotageAnimation2 = true;
        map.normalSize.main()
        map.opacity.main([1,1,1], 0.5)
        map.opacity.section([0.1, 0.4, 0.1], 1);
        map.opacity.cover([0,0,0.5], 1)

    }, 100)


    setTimeout(()=>{

        $('.arrowDashed, .OG1ficon, .OG1LeaderLeft, .OG1LeaderRight').css({'transition':'1s', 'opacity':'1'});
        map.opacity.inside([0.5,0,0])

        setTimeout(()=>{

            map.animate.og1Results(750, 1);
            $('#anotherIdToCall6').css({'transition':'1s', 'opacity':'1'})

            setTimeout(()=>{
                $('.IGTopContestWrap').css({'transition':'1s', 'opacity':'0'});
                $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':'1'});
            }, 1500)

        }, 750)

    }, 750)


    setTimeout(()=>{
        box.button.show('SE-n12');
    }, 6000)


})




$('#btn-SE-n12').click(function() {

    box.transition('SE-n12', 'SE-n13', 0, 0, 1, 750);


    map.reset.og1Results();
    $('.IGTopContestWrap').css({'transition':'1s', 'opacity':'0'});
    $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':'0'});
    setTimeout(()=>{

        map.animate.og1Results(750, 2);

        setTimeout(()=>{
            $('.IGTopContestWrap').css({'transition':'1s', 'opacity':'1'});
            $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':'0'});
        }, 1500)

    }, 750)

    setTimeout(()=>{
        box.button.show('SE-n13');
    }, 2000)

})

$('#btn-SE-n13').click(function() {

    box.transition('SE-n13', 'SE-n14', 1, 0, 1, 750);

    // arrangements to make text/icon smaller and ajust its place
    $('#boxwrap-SE-n13').css({'transition':'2s', 'margin-left':'1070px', 'margin-top':'40px',
    'margin-bottom':'-15px'});

    $('.groupA-SE-n13, .groupB-SE-n13').css({'transition':'0.7s',
    'transform':'scale(0.8)', 'margin-left':'0px', 'margin-right':'0px'});

    // hide top section
    map.opacity.top(0);

    // hide ingroup B
    setTimeout(()=>{
        $('.IGBottomContestWrap').css({'transition':'0.5s','opacity':'0'});
    }, 1000)

    // show arrow from results to og2 and set the og2 icons based on the results
    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([-1, 0], [0, 1]);
        map.winnerFollowerIndex = 1;
        map.set.OG2ResultingIcons();
    }, 1500)

    // hide group b cover of og2
    setTimeout(()=>{
        $('.OG2FightIconWrap, .groupBDescription, .fightDescription').css({'transition':'0.5s', 'opacity':'0'});
    }, 2000)

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

    },3500)

    setTimeout(()=>{
        box.button.show('SE-n14');
    }, 4500)

})

$('#btn-SE-n14').click(function() {

    box.transition('SE-n14', 'SE-n15', 1, 0, 1, 750);

    $('.OG1LeaderRight').css({'opacity':'0.5'});

    map.hide.og2_rightLeaderCAT();

    setTimeout(()=>{
        map.show.og2_rightFollowers();
        map.show.og2_rightFollowersCAT();
    }, 1500)


    setTimeout(()=>{
        box.button.show('SE-n15');
    }, 3000)

})


$('#btn-SE-n15').click(function() {

    box.transition('SE-n14', '', 0, 0, 1, 0);
    box.transition('SE-n15', '', 0, 0, 1, 0);
    box.transition('', 'SE-n16', 0, 0, 1, 750);

    map.hide.og2_rightFollowersCAT();

    setTimeout(()=>{
        $('.arrowToTopIconResults, .topBoxLeaderResult, .topLeaderLost').css({'transition':'0.5s', 'opacity':'1'});
    }, 750)

    setTimeout(()=>{
        $('.groupADescription').css({'transition':'0.5s', 'opacity':'0'});
    }, 1250)

    setTimeout(()=>{
        map.show.og2_leftFollower1CAT();
        map.opacity.OG2Left(1, 0.5);
        $('.OG2LeftFollower2, .OG2LeaderLeft').css({'transition':'0s', 'opacity':'0'});
    }, 2250)

    setTimeout(()=>{
        box.button.show('SE-n16');
    }, 3250)

})

$('#btn-SE-n16').click(function() {

    box.transition('SE-n16', 'SE-n17', 1, 0, 1, 750);

    map.animate.IGTopContestHighlight(0);

    $('#boxwrap-SE-n16').css({'margin-top':'-100px'});

    map.hide.og2_leftFollower1CAT();
    $('.OG1LeaderLeft').css({'opacity':'0.5'});

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

    // map.IGHighlightAnimationOn = false;

    box.transition('SE-n16', '', 0, 0, 1, 0);
    box.transition('SE-n17', 'SE-n18', 0, 0, 1, 750);

    $('.IGFightIconLimeTop').css({'transition':'1s', 'opacity':'1'});
    $('.IGFightIconLimeTop').css({'transition':'0.5s', 'opacity':'0'});




    setTimeout(()=>{
        box.button.show('SE-n18');
    }, 2000)

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

        $('.IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'0.75s', 'opacity':'0.7'});
        $('.OG1, .IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'1s',
        'transform-origin':'right', 'transform':'scale(0.7)'});
        $('.arrowsToOG1IconResults').css({'transition':'1s','margin-left':'-20px'});
        $('.IG').css({'transition':'1s','margin-left':'-70px'});
        $('.arrowsToOG2').css({'transition':'1s','margin-left':'15px', 'margin-top':'8px'});
        $('.OG2').css({'transition':'1s', 'transform-origin':'left', 'transform':'scale(1.4)'})
        $('.sexplain').css({'transition':'1s', 'margin-left':'-200px'});
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
