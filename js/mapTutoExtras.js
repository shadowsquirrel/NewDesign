//----------------------------------------------------------//
//----------------------------------------------------------//
//----------------------------------------------------------//
//-------------                                  -----------//
//-------------                                  -----------//
//-------------   ADDITIONAL TUTORIAL FUNCTIONS  -----------//
//-------------                                  -----------//
//-------------                                  -----------//
//----------------------------------------------------------//
//----------------------------------------------------------//
//----------------------------------------------------------//


// -------------------------------------------------------- //
// --------------- RELATED TO BASICS.JS TUTO -------------- //
// -------------------------------------------------------- //

map.show.initialSetup = function() {

    map.showMap();
    map.show.sections();
    map.opacity.main([1,1,1]);
    map.opacity.section([1,1,1]);
    map.opacity.cover([0,0,0]);
    map.opacity.inside([0,0,0]);
    map.opacity.sectionTitles([0,0,0]);

    $('.sexplain').css({'transition':'0s', 'filter':'opacity(0)'});

    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'filter':'opacity(1)'});
    }, 750)

}

map.animate.rotatePause = 250;

map.animate.rotateSectionsSimple = function(array, counter, metaCounter) {

    array[counter] = 1;

    map.opacity.section(array);
    map.opacity.main(array);

    var newCounter = counter + 1;
    var newMetaCounter = metaCounter + 1;

    if(newCounter === 3) {

        // ADD HERE NEXT INFO BOX TRIGGER

        if(newMetaCounter < 3) {

            newCounter = 0;
            array = [0,0,0];

            setTimeout(()=>{
                map.animate.showNoSections(array, newCounter, newMetaCounter)
            }, map.animate.rotatePause);

        }

    } else if (newCounter < 3) {

        setTimeout(()=>{
            map.animate.rotateSectionsSimple(array, newCounter, newMetaCounter)
        }, map.animate.rotatePause);

    }

}


map.animate.showNoSections = function(array, counter, metaCounter) {

    map.opacity.section([0,0,0]);
    map.opacity.main([0,0,0]);

    setTimeout(()=>{
        map.animate.rotateSectionsSimple(array, counter, metaCounter)
    }, map.animate.rotatePause);

}


map.show.bracket = function() {

    $('.mapBracket').css({'transition':'0s', 'margin-bottom':'-45px', 'margin-left':'-12px', 'opacity':'0', 'transform':'scale(0)'});

    setTimeout(()=>{
        $('.mapBracket').css({'transition':'0s', 'opacity':'1'});
    }, 100)

    setTimeout(()=>{
        $('.mapBracket').css({'display':'flex'})
    }, 150)

    setTimeout(()=>{
        $('.mapBracket').css({'transition':'0.7s', 'transform':'scale(1)'})
    }, 1000)

}

map.hide.bracket = function() {

    $('.mapBracket').css({'transition':'0.3s', 'margin-bottom':'-164px', 'transform':'scale(0)'});
    setTimeout(()=>{$('.mapBracket').css({'display':'none'})}, 350);

}


map.animate.myRotateDelay = 250;
map.animate.myRoundNumber = 1;

map.animate.rotateRounds = function(state) {

    var myTitleString;

    if(map.animate.myRoundNumber < 5) {

        if(state === 0) {

            map.opacity.section([0,0,0]);
            map.opacity.main([0,0,0]);

            setTimeout(()=>{
                map.animate.rotateRounds(1);
            }, map.animate.myRotateDelay)

            $('#roundCount').css({'transition':'0.25s', 'opacity':'0'});

            setTimeout(()=>{

                $('.newRound').css({'transition':'0.5s', 'opacity':'1'});
                $('.newRoundText').css({'transition':'0.5s', 'opacity':'1'});
                $('#roundCount').css({'transition':'0.25s', 'opacity':'1'});

                if(map.animate.myRoundNumber < 4) {
                    $('#roundCount').html(map.animate.myRoundNumber);
                    // myTitleString = 'ROUND '+ map.animate.myRoundNumber;
                    // title.update.closeOpen(1, myTitleString, -2000, 30);
                } else {
                    $('#roundCount').html('4, 5, ...');
                    // title.update.closeOpen(1, 'ROUND 4, 5, etc', -2000, 30);
                }

            }, map.animate.myRotateDelay+250)

        }

        if(state === 1) {

            map.opacity.section([1,0,0]);
            map.opacity.main([1,0,0]);

            setTimeout(()=>{
                map.animate.rotateRounds(2);
            }, map.animate.myRotateDelay)

        }

        if(state === 2) {

            map.opacity.section([1,1,0]);
            map.opacity.main([1,1,0]);

            setTimeout(()=>{
                map.animate.rotateRounds(3);
            }, map.animate.myRotateDelay)

        }

        if(state === 3) {

            map.animate.myRoundNumber++

            map.opacity.section([1,1,1]);
            map.opacity.main([1,1,1]);

            setTimeout(()=>{
                map.animate.rotateRounds(0);
            }, map.animate.myRotateDelay)

        }

    } else {

        setTimeout(()=>{
            $('.newRound').css({'transition':'0.5s', 'opacity':'0'});
            $('.newRoundText').css({'transition':'0.5s', 'opacity':'0'});
        }, 750)

    }

}


// -------------------------------------------------------- //
// -------------- RELATED TO SECTIONS.JS TUTO ------------- //
// -------------------------------------------------------- //

map.animate.se8Lock = false;
map.animate.se9Lock = false;
map.animate.stepNumberAnimationActive = true;
$('.leftSideStep1Text, .rightSideStep1Text, .middleStep2Text').css({'opacity':'0'});
map.animate.stepNumber = function(state) {

    if(map.animate.stepNumberAnimationActive) {

        if(state === 0) {

            $('.leftSideStep1Text, .rightSideStep1Text').css({'transition':'1.25s', 'filter':'grayscale(0)', 'opacity':'1', 'box-shadow':'0px 4px 4px 0px black'});
            $('.middleStep2Text').css({'transition':'1.25s', 'opacity':'0', 'filter':'grayscale(1)','box-shadow':'0px 0px 0px 0px black'});


            $('.OG1LeadersIcon, .OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1s', 'opacity':'1'});
            $('.leaderKingLeft, .leaderKingRight').css({'transition':'1s', 'filter':'drop-shadow(0px 3px 2px black)', 'opacity':'0.35'});
            $('.subsubOG1L').css({'transition':'1s', 'border-color':'transparent', 'background-color':'transparent'});
            $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'0'});
            $('.OG1FightIcon').css({'transition':'1s', 'opacity':'0.35'});

            $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'1'});
            $('.arrowDashed').css({'transition':'1s', 'opacity':'1'});


            setTimeout(()=>{
                if(!map.animate.se8Lock) {
                    map.animate.stepNumber(1)
                }
            }, 1750)

        }

        if(state ===1) {

            $('.leftSideStep1Text, .rightSideStep1Text').css({'filter':'grayscale(1)', 'opacity':'0', 'box-shadow':'0px 0px 0px 0px black'});
            $('.middleStep2Text').css({'filter':'grayscale(0)', 'opacity':'1', 'box-shadow':'0px 4px 4px 0px black'});


            $('.OG1LeadersIcon, .OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1s', 'opacity':'1'});
            $('.leaderKingLeft, .leaderKingRight').css({'transition':'1s', 'filter':'drop-shadow(0px 3px 2px black)', 'opacity':'1'});

            $('.subsubOG1L').css({'transition':'1s', 'border-color':'gray', 'background-color':'#d3d3d378'});
            $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'0'});
            $('.OG1FightIcon').css({'transition':'1s', 'opacity':'1'});

            $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'});
            $('.arrowDashed').css({'transition':'1s', 'opacity':'0'});

            setTimeout(()=>{
                if(!map.animate.se9Lock) {
                    map.animate.stepNumber(0)
                }
            }, 1750)

        }

    } else {

        $('.leftSideStep1Text, .rightSideStep1Text, .middleStep2Text').css({'transition':'1.25s', 'filter':'opacity(0)'});

        // NEUTRAL SETUP
        $('.s2ActiveFollower').css({'transition':'1s', 'opacity':'0'});
        $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'1'});

        $('.arrowDashed').css({'transition':'1s', 'opacity':'1'});
        $('.arrowDashedLime1').css({'transition':'1s', 'opacity':'0'});

        $('.OG1LeadersIcon, .OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1s', 'opacity':'1'});
        $('.leaderKingLeft, .leaderKingRight').css({'transition':'1s', 'filter':'drop-shadow(0px 3px 2px black)', 'opacity':'1'});

        $('.subsubOG1L').css({'transition':'1s', 'border-color':'gray', 'background-color':'#d3d3d378'});
        $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'0'});
        $('.OG1FightIcon').css({'transition':'1s', 'opacity':'1'});

    }


}


//----------------- ARROW COLOR SWITCH ANIMATION ----------------------//

map.globalVariable.activeHelpFollowerAnimation = true;
map.globalVariable.delayColorAnimation = 2500;
map.animate.activateInverseColoring = false;

map.animate.arrowColor = function(state) {

    if(map.globalVariable.activeHelpFollowerAnimation) {

        // blue arrow
        if(state === 1) {
            $('.arrowDashedBlue1, .arrowDashedBlueInfoBox').css({'transition':'2s', 'opacity':'1'});
            $('.subsubOG1L').css({'transition':'2s', 'background-color':'#aaadda', 'border-color':'blue'});
            $('.arrowDashed, .arrowDashedInfoBox, .arrowDashedRed1, .arrowDashedRedInfoBox').css({'transition':'2s', 'opacity':'0'})

            if(map.animate.activateInverseColoring) {

                $('.arrowDashedRed2').css({'transition':'2s', 'opacity':'1'});
                $('.arrowDashedBlue2').css({'transition':'2s', 'opacity':'0'});
                $('.subsubRightSide').css({'transition':'2s', 'background-color':'#daaaaa', 'border-color':'red'});

            }

            $('.leaderAuraInfoBox').css({'transition':'2s', 'background-color':'#abb8f2', 'border-color':'blue'});

            $('#saboT, #saboT2').css({'opacity':'0'});
            $('#helpT, #helpT2').css({'opacity':'1'});

            setTimeout(()=>{map.animate.arrowColor(2)}, map.globalVariable.delayColorAnimation);
        }

        // red arrow
        if(state === 2) {
            $('.arrowDashedRed1, .arrowDashedRedInfoBox').css({'transition':'2s', 'opacity':'1'});
            $('.subsubOG1L').css({'transition':'2s', 'background-color':'#daaaaa', 'border-color':'red'});
            $('.arrowDashed, .arrowDashedInfoBox, .arrowDashedBlue1, .arrowDashedBlueInfoBox').css({'transition':'2s', 'opacity':'0'})

            if(map.animate.activateInverseColoring) {

                $('.arrowDashedRed2').css({'transition':'2s', 'opacity':'0'});
                $('.arrowDashedBlue2').css({'transition':'2s', 'opacity':'1'});
                $('.subsubRightSide').css({'transition':'2s', 'background-color':'#abb8f2', 'border-color':'blue'});

            }

            $('.leaderAuraInfoBox').css({'transition':'2s', 'background-color':'#f6c0c0', 'border-color':'red'});

            $('#saboT, #saboT2').css({'opacity':'1'});
            $('#helpT, #helpT2').css({'opacity':'0'});

            setTimeout(()=>{map.animate.arrowColor(1)}, map.globalVariable.delayColorAnimation);
        }

    } else {

        setTimeout(()=>{
            $('.arrowDashed, .arrowDashedInfoBox').css({'transition':'2s', 'opacity':'0.5'})
            $('.arrowDashedBlue1, .arrowDashedRed1, .arrowDashedBlueInfoBox, .arrowDashedRedInfoBox').css({'transition':'2s', 'opacity':'0'})
            $('.subsubOG1L').css({'transition':'2s', 'background-color':'#d3d3d378', 'border-color':'gray'});
            $('.leaderAuraInfoBox').css({'transition':'2s', 'background-color':'#f5f5f5', 'border-color':'#504c4c'});
        }, 100)

    }

}


//------------ KING ANIMATION SWITCH FOR INFO BOX AND MAP ------------//

map.globalVariable.stopKingIconAnimation = false;

map.animate.kingIcons = function(state) {

    if(!map.globalVariable.stopKingIconAnimation) {

        if(state === 0) {

            $('.anotherKingIcon1').css({'transition':'2s', 'opacity':'1'});
            $('.anotherKingIcon2').css({'transition':'2s', 'opacity':'0'});
            $('.prizeCrownBlackBottom, .prizeCrownBlackTop').css({'transition':'2s', 'opacity':'0'});
            $('.prizeCrownLimeBottom, .prizeCrownLimeTop').css({'transition':'2s', 'opacity':'1'});

            setTimeout(()=>{
                map.animate.kingIcons(1);
            }, 1250)

        }

        if(state === 1) {

            $('.anotherKingIcon1').css({'transition':'2s', 'opacity':'0'});
            $('.anotherKingIcon2').css({'transition':'2s', 'opacity':'1'});
            $('.prizeCrownBlackBottom, .prizeCrownBlackTop').css({'transition':'2s', 'opacity':'1'});
            $('.prizeCrownLimeBottom, .prizeCrownLimeTop').css({'transition':'2s', 'opacity':'0'});

            setTimeout(()=>{
                map.animate.kingIcons(0);
            }, 1250)

        }

    } else {
        $('.prizeCrownBlackBottom, .prizeCrownBlackTop').css({'transition':'1s', 'opacity':'1'});
        $('.prizeCrownLimeBottom, .prizeCrownLimeTop').css({'transition':'1s', 'opacity':'0'});
    }
}



//-------SIZE METHODS------//
//-------SIZE METHODS------//
//-------SIZE METHODS------//

// enlarge section 1 and 3
map.enlarge.main = function(myArray, transitionTime) {

    var s1, s2, s3;

    s1 = 'scale('+myArray[0]+')';
    s2 = 'scale('+myArray[1]+')';
    s3 = 'scale('+myArray[2]+')';

    transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

    $('.IG').css({'transition':'0s', 'transform-origin':'right'});
    $('.OG2').css({'transition':'0s', 'transform-origin':'initial'});


    $('.OG1').css({'transition': transitionTime, 'transform' : s1});
    $('.IG').css({'transition': transitionTime, 'transform' : s2, 'margin-left':'-23px'});
    $('.OG2').css({'transition': transitionTime,  'transform' :  s3, 'margin-top':'33px'});

}


map.normalSize.main = function(transitionTime) {

    transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

    $('.OG1').css({'transition': transitionTime, 'transform' : 'scale(1)'});
    $('.IG').css({'transition': transitionTime, 'transform' : 'scale(1)', 'margin-left':'0px'});
    $('.OG2').css({'transition': transitionTime,  'transform' : 'scale(1)', 'margin-top':'41px', 'margin-left':'0px'});

}

// normal size for section 1 and 2 only
map.enlarge.main2 = function(s3Size, transitionTime) {

    var s3;

    s3 = 'scale('+s3Size+')';

    transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

    $('.IG').css({'transition':'0s', 'transform-origin':'left'});
    $('.OG2').css({'transition':'0s', 'transform-origin':'initial'});


    $('.OG1').css({'transition': transitionTime, 'transform' : 'scale(1)'});
    $('.IG').css({'transition': transitionTime, 'transform' : 'scale(1)', 'margin-left':'0px'});
    $('.OG2').css({'transition': transitionTime,  'transform' :  s3, 'margin-top':'33px', 'margin-left':'-37px'});

}

//-------RESET METHODS-------//
//-------RESET METHODS-------//
//-------RESET METHODS-------//

// RESETS OG1 RESULTS
// open the space for results to be shown
// make the main result icon box visible
// make the result icons hidden
// make the arrows to result icons hidden
// make the arrows from result icons hidden
// make the cover arrows hidden
// make the arrow divs for arrows to and from icons visible
map.reset.OG1results = function(activeIG) {

    map.opacity.coverArrows([0,0]);
    map.opacity.mainArrowSections([1,1,0]);

    // map.closeSpace();

    $('.wonLostBoxes').css({'transition':'0.25s', 'opacity': '1'});
    $('.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':'0.25s', 'opacity':'0'});

    map.og1_topWon = undefined;
    $('.topLeaderWon, .bottomLeaderLost').css({'transition':'0.25s', 'opacity':'0'});
    $('.topLeaderLost, .bottomLeaderWon').css({'transition':'0.25s', 'opacity':'0'});

    $('.OG1LeaderLeft').css({'transition':'0.25s', 'opacity':'1'});
    $('.OG1LeaderRight').css({'transition':'0.25s', 'opacity':'1'});

    $('.OG1FightIconLime').css({'transition':'0.25s', 'opacity':'1'});
    $('.OG1FightIcon').css({'transition':'0.25s', 'opacity':'0'});

    map.opacity.arrowsToResultIcons([0,0]);

    map.reset.IGresults(activeIG);
    // map.active.igStart();

}

// RESETS IG RESULTS
// hide short and long arrows leaving from result icons.
// both fight icons are lime (active state)
// hide lime crown and center it
// show black crown
map.reset.IGresults = function(activeIG) {

    map.opacity.arrowsFromResultIcons([0,0], [0,0]);
    map.opacity.main([1,1,0]);
    map.opacity.cover([0,0,1]);
    map.opacity.inside([1,1,0]);

    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '0.2'});
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '0.2'});

    $('.IGFightIconLimeTop, .IGFightIconLimeBottom').css({'transition':'0.5s','opacity':'1'});
    $('.prizeCrownLimeTop, .prizeCrownLimeBottom').css({'transition':'0s', 'opacity':'0', 'margin-top':'-18px', 'margin-left':'0px'});
    $('.prizeCrownBlackTop, .prizeCrownBlackBottom').css({'opacity':'1'});
    $('.IGTopContestWrap, .IGBottomContestWrap').css({'opacity':'1'});
    $('.mapdiscardedXTop, .mapdiscardedXBottom').css({'opacity':'0'});

    if(activeIG) {

        map.active.ig([1, 1]);

    } else {

        map.active.ig([0, 0]);

    }


}

//-------- ANIMATE OG1 WINNER AND LOSER ------//

// tag = top / bottom
// show arrow
// show icon result + hide related leader icon from og1
//
map.animate.OG1Winner = function(delay) {

    delay = delay === undefined ? 750 : delay;

    map.openSpace();
    map.active.og1(false);
    $('.OG1FightIconLime').css({'opacity':'0'});
    $('.OG1FightIcon').css({'opacity':'0.3'});
    $('.wonLostBoxes').css({'opacity':'1'});

    var winnerPlayer;

    winnerPlayer = map.winnerLeaderIndex === 1 ? 'top' : 'bottom';

    if(winnerPlayer === 'top') {

        setTimeout(()=>{$('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});}, delay)

        setTimeout(()=>{
            $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
            $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0'});
            map.set.OG1ResultIcons();
        }, 2 * delay);

    }

    if(winnerPlayer === 'bottom') {

        setTimeout(()=>{$('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});}, delay)

        setTimeout(()=>{
            $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
            $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0'});
            map.set.OG1ResultIcons();
        }, 2 * delay);

    }

    map.animate.OG1ResultsUknown(0);

}

map.animate.OG1Loser = function(delay) {

    delay = delay === undefined ? 750 : delay;

    map.openSpace();
    map.active.og1(false);
    $('.OG1FightIconLime').css({'opacity':'0'});
    $('.OG1FightIcon').css({'opacity':'0.3'});
    $('.wonLostBoxes').css({'opacity':'1'});

    var loserPlayer;

    loserPlayer = map.winnerLeaderIndex === 1 ? 'bottom' : 'top';

    if(loserPlayer === 'top') {

        setTimeout(()=>{$('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});}, delay)

        setTimeout(()=>{
            $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
            $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0'});
            map.set.OG1ResultIcons();
        }, 2 * delay);

    }

    if(loserPlayer === 'bottom') {

        setTimeout(()=>{$('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});}, delay)

        setTimeout(()=>{
            $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
            $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0'});
            map.set.OG1ResultIcons();
        }, 2 * delay);

    }

    map.animate.OG1ResultsUknown(0);

}

//--------- SOME NEW OG1 RESULTS METHODS ------//

map.globalVariable.og1ResultsCounter = 0;

map.reset.og1Results = function() {

    $('.wonLostBoxes').css({'transition':'0.5s', 'opacity': '1'});
    $('.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0'});

    $('.topLeaderWon, .bottomLeaderLost').css({'transition':'0.5s', 'opacity':'0'});
    $('.topLeaderLost, .bottomLeaderWon').css({'transition':'0.5s', 'opacity':'0'});

    $('.OG1FightIcon, .OG1FightIconLime, .OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});
    $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'0'});
    $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'0'});


    $('.IGTopContestWrap').css({'transition':'0.5s','opacity':'1'});
    $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'0'});

    $('.IGBottomContestWrap').css({'transition':'0.5s','opacity':'1'});
    $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'0'});

}

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//


map.tutorial.result.introTop = function() {

    $('.sexplain').css({'transition':'0s', 'display':'flex', 'margin-bottom':'-210px', 'margin-top':'-9px', 'opacity':'0'})
    $('.IGBottomContestWrap').css({'filter':'opacity(0)'});
    $('.IGTopContestWrap').css({'transform':'scale(1)', 'margin-top':'3px', 'filter':'opacity(1)'});

    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.3s', 'opacity':'1', 'margin-top':'24px'});
        map.tutorial.result.reset();
        $('.IG_ctGhost, .IG_hsWrap').css({'transition':'1s', 'filter':'opacity(0)'});
    }, 10)

}

map.tutorial.result.introBottom = function() {

    $('.sexplain').css({'transition':'0s', 'display':'flex', 'margin-bottom':'-210px', 'margin-top':'-9px', 'opacity':'0'})
    $('.IGTopContestWrap').css({'filter':'opacity(0)'});
    $('.IGBottomContestWrap').css({'transition':'scale(1)', 'filter':'opacity(1)'});

    setTimeout(()=>{
        $('.sexplain').css({'transition':'1s', 'opacity':'1', 'margin-top':'24px'});
        map.tutorial.result.reset();
        $('.IG_ctGhost, .IG_hsWrap').css({'transition':'1s', 'filter':'opacity(0)'});
    }, 100)

}

map.tutorial.result.introBoth = function() {

    $('.sexplain').css({'transition':'0s', 'display':'flex', 'opacity':'0'})
    $('.IGBottomContestWrap, .IGTopContestWrap').css({'transition':'scale(1)', 'filter':'opacity(1)'});

    setTimeout(()=>{
        $('.sexplain').css({'transition':'1s', 'opacity':'1'});
        map.tutorial.result.reset();
        $('.IG_ctWrap, .IG_hsWrap').css({'transition':'1s', 'filter':'opacity(0)'});
    }, 100)

}


map.tutorial.result.reset = function() {

    map.opacity.coverArrows([0,0,0])
    // calculator.tutorial.allowCalculator();
    map.opacity.main([1,0.5,1]);
    map.opacity.section([0.1,0.5,0.1]);
    map.opacity.cover([0,0,0.5]);
    $('.groupADescription, .fightDescription, .groupBDescription').css({'transition':'0.5s','opacity':'1'})
    map.opacity.inside([1,0,0]);
    map.opacity.sectionTitles([1,1,1])
    map.opacity.arrowsFromResultIcons([0,0], [0,0]);
    map.opacity.arrowsFromIG([0,0]);
    $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '0'});

    map.openSpace();

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '1'});

    $('.OG1LeaderLeft, .OG1LeaderRight, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'1'});
    $('.subsubOG1L').css({'border-color':'black'});
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '1'});
    $('.OG1LeftFollower1, .OG1LeftFollower2, .OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '1'});
    $('.OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'1'});

    $('.IGIconWrap2').css({'transition':'0.5s', 'opacity':'1'});
    $('.IGLeftFollower1, .IGLeftFollower2').css({'transition':'0.5s', 'opacity':'1'});
    $('.IGRightFollower1, .IGRightFollower2').css({'transition':'0.5s', 'opacity':'1'})
    $('.IGFightIconLimeTop, .IGFightIconLimeBottom').css({'transition':'0.5s','opacity':'1'});
    $('.prizeCrownLimeTop, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'0', 'margin-top':'-18px', 'margin-left':'0px'});
    $('.prizeCrownBlackTop, .prizeCrownBlackBottom').css({'opacity':'1'});

    // reset any discarded box to their initial position
    $('.IGTopContestWrap').css({'transition':'0.5s','opacity':'1'});
    $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'0'});

    $('.IGBottomContestWrap').css({'transition':'0.5s','opacity':'1'});
    $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'0'});

    $('.arrowToTopIconResults, .arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'0'});
    $('.wonLostBoxes').css({'opacity':'0'});
    $('.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG1LeaderLeft, .OG1LeaderRight').css({'transition':'0.5s', 'opacity':'1'});

    $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s','opacity':'1'})
    $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s','opacity':'1'})

}



map.tutorial.result.AWon = function(delay) {

    delay = delay === undefined ? 1000 : delay;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeaderRight, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 1;
        map.set.OG1ResultIcons();
    }, delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1, 0], [0, 0])
    }, 2 * delay)

    setTimeout(()=>{
        calculator.tutorial.denyCalculator();
        $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'1'});
    },3 * delay)

    setTimeout(()=>{
        $('.IGTopContestWrap').css({'transition':'0.5s','opacity':'0.1'});
        $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'0.2'});
    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([0,-1], [1, 0]);
        setTimeout(()=>{
            $('.groupADescription, .fightDescription').css({'transition':'0.5s','opacity':'0'})
            map.winnerLeaderIndex = 1;
            map.winnerFollowerIndex = 1;
            map.set.OG2ResultingIcons();
        }, 0.5 * delay)
    }, 5 * delay);

    setTimeout(()=>{
        map.winnerLeaderIndex = 1;
        map.winnerFollowerIndex = 1;
        map.set.OG2ResultingIcons();
        $('.OG2LeaderLeft, .OG2LeadersIcon').css({'transition':'0.5s',  'opacity':'1'});
        $('.OG2LeaderRight, .OG2FightIconWrap').css({'transition':'0s',  'opacity':'0'});
        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'0.3'});
        map.opacity.arrowsFromResultIcons([0, 0], [0.3, 0])
    }, 7 * delay)

    setTimeout(()=>{
        $('.OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'transition':'1s', 'opacity':'1'});
    }, 8 * delay)

    setTimeout(()=>{
        // show the initial setup for comparison
        $('.OG1FollowersWrapLeft').css({'transition':'3s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft').css({'transition':'3s', 'opacity': '1'});
        $('.OG1LeaderLeft').css({'transition':'3s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'3s', 'opacity':'1'});
        $('.subsubOG1L').css({'border-color':'gray'});
    }, 9 * delay)

}

map.tutorial.result.BWon = function(delay) {

    delay = delay === undefined ? 1000 : delay;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeaderLeft, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 2;
        map.set.OG1ResultIcons();
    }, delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([0, 1], [0, 0])
    }, 2 * delay)

    setTimeout(()=>{
        calculator.tutorial.denyCalculator();
        $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'1'});
    },3 * delay)

    setTimeout(()=>{
        $('.IGBottomContestWrap').css({'transition':'0.5s','opacity':'0.1'});
        $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'0.2'});
    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([-1,0], [0, 1]);
    }, 5 * delay);

    setTimeout(()=>{
        $('.groupBDescription, .fightDescription').css({'transition':'0.5s','opacity':'0'})
        map.winnerLeaderIndex = 2;
        map.winnerFollowerIndex = 1;
        map.set.OG2ResultingIcons();
    }, 6 * delay)

    setTimeout(()=>{
        $('.OG2LeaderRight, .OG2LeadersIcon').css({'transition':'0.5s',  'opacity':'1'});
        $('.OG2LeaderLeft, .OG2FightIconWrap').css({'transition':'0s',  'opacity':'0'});
        $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'0.3'});
        map.opacity.arrowsFromResultIcons([0, 0], [0, 0.3])
    }, 7 * delay)

    setTimeout(()=>{
        $('.OG2FollowerArrowsRight, .OG2FollowersWrapRight').css({'transition':'1s', 'opacity':'1'});
    }, 8 * delay)

    setTimeout(()=>{
        // show the initial setup for comparison
        $('.OG1FollowersWrapRight').css({'transition':'3s', 'opacity': '1'});
        $('.OG1FollowerArrowsRight').css({'transition':'3s', 'opacity': '1'});
        $('.OG1LeaderRight').css({'transition':'3s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'3s', 'opacity':'1'});
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'3s', 'opacity':'0.4'});
        $('.subsubOG1L').css({'border-color':'gray'});
    }, 9 * delay)

}

map.tutorial.result.ALost = function(delay) {

    delay = delay === undefined ? 1000 : delay;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeaderRight, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 2;
        map.set.OG1ResultIcons();
    }, delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1, 0], [0, -1])
    }, 2 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeTop, .IGFI_Top').css({'transition':'0.5s', 'opacity':'1'});
        $('.prizeCrownBlackTop, .IGFightIconLimeTop').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.IGFI_Top').css({'transition':'0.5s', 'opacity':'0'});
    }, 3 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeTop').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'0'});
    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1,0], [0, 0]);
        map.opacity.arrowsFromIG([1,0]);
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '1'});
        setTimeout(()=>{
            $('.groupADescription, .fightDescription').css({'transition':'0.5s','opacity':'0'})
        }, 0.5 * delay)
    }, 5 * delay);

    setTimeout(()=>{
        map.winnerLeaderIndex = 2;
        map.winnerFollowerIndex = 1;
        map.set.OG2ResultingIcons();
        $('.OG2LeaderLeft, .OG2LeadersIcon').css({'transition':'0.5s',  'opacity':'1'});
        $('.OG2LeaderRight, .OG2FightIconWrap').css({'transition':'0s',  'opacity':'0'});
        $('.IGLeftFollower1, .prizeCrownLimeTop').css({'transition':'0.5s', 'opacity':'0.3'})
    }, 6.5 * delay)

    setTimeout(()=>{
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '0.3'});
        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.IGLeftFollower2').css({'transition':'0.5s', 'opacity':'0.3'})
        map.opacity.arrowsFromResultIcons([0.3, 0], [0, 0])
        $('.og2BlackArrow, .OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'transition':'0.5s', 'opacity':'1'});


    }, 8 * delay)

    setTimeout(()=>{
        // show the initial setup for comparison
        $('.OG1FollowersWrapLeft').css({'transition':'3s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft').css({'transition':'3s', 'opacity': '1'});
        $('.OG1LeaderLeft').css({'transition':'3s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'3s', 'opacity':'1'});
        $('.subsubOG1L').css({'border-color':'gray'});
    }, 9 * delay)

}

map.tutorial.result.BLost = function(delay) {

    delay = delay === undefined ? 1000 : delay;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeaderLeft, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 1;
        map.set.OG1ResultIcons();
    }, 1 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([0, 1], [-1, 0])
    }, 2 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeBottom, .IGFI_Bottom').css({'transition':'0.5s', 'opacity':'1'});
        $('.prizeCrownBlackBottom, .IGFightIconLimeBottom').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.IGFI_Bottom').css({'transition':'0.5s', 'opacity':'0'});
    }, 3 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeBottom').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '35px', 'height':'27px', 'width':'29px', 'z-index':'0'});
    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([0,1], [0, 0]);
        map.opacity.arrowsFromIG([0,1]);
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '1'});
        setTimeout(()=>{
            $('.groupBDescription, .fightDescription').css({'transition':'0.5s','opacity':'0'})
        }, 500)
    }, 5 * delay);

    setTimeout(()=>{
        map.winnerLeaderIndex = 1;
        map.winnerFollowerIndex = 2;
        map.set.OG2ResultingIcons();
        $('.OG2LeaderRight, .OG2LeadersIcon').css({'transition':'0.5s',  'opacity':'1'});
        $('.OG2LeaderLeft, .OG2FightIconWrap').css({'transition':'0s',  'opacity':'0'});
        $('.IGRightFollower2, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'0.3'});
    }, 6.5 * delay)

    setTimeout(()=>{
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '0.3'});
        $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.IGRightFollower1').css({'transition':'0.5s', 'opacity':'0.3'})
        map.opacity.arrowsFromResultIcons([0, 0.3], [0, 0])
        $('.OG2FollowerArrowsRight, .OG2FollowersWrapRight').css({'transition':'0.5s', 'opacity':'1'});
    }, 8 * delay)

    setTimeout(()=>{
        // show the initial setup for comparison
        $('.OG1FollowersWrapRight').css({'transition':'3s', 'opacity': '1'});
        $('.OG1FollowerArrowsRight').css({'transition':'3s', 'opacity': '1'});
        $('.OG1LeaderRight').css({'transition':'3s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'3s', 'opacity':'1'});
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'3s', 'opacity':'0.4'});
        $('.subsubOG1L').css({'border-color':'gray'});
    }, 9 * delay)

}



map.tutorial.result.AWonBLost = function(delay, fWI) {

    map.tutorial.result.reset();

    delay = delay === undefined ? 1000 : delay;
    fWI = fWI === undefined ? 2 : fWI;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '1'});
        $('.arrowToBottomIconResults, .arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderRight, .OG1LeaderLeft, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.bottomBoxLeaderResult, .topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 1;
        map.set.OG1ResultIcons();
        map.opacity.main([1,1,1], 0.5);
        $('.IGTopContestWrap').css({'transition':'0.5s', 'opacity':'0'});


    }, 1 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([0, 1], [-1, 0])
        $('.OG1FollowersWrapLeft, .OG1FollowerArrowsLeft').css({'transition':'0.5s', 'opacity': '0'});
    }, 2 * delay)

    setTimeout(()=>{
        map.opacity.section([0.05,0.05,0.05], 1);
        $('.prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'1', 'margin-top':'-40px'});
        $('.IGFI_Bottom').css({'transition':'0.5s', 'opacity':'1'});
        $('.prizeCrownBlackBottom, .IGFightIconLimeBottom').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s', 'opacity':'0'});
        $('.igallbottom').css({'transition':'0.5s', 'opacity':'1'});


    }, 3 * delay)

    setTimeout(()=>{

        if(fWI === 1) {
            $('.prizeCrownLimeBottom').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        }

        if(fWI === 2) {
            $('.prizeCrownLimeBottom').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '35px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        }

        $('.IGFI_Bottom').css({'transition':'0.5s', 'opacity':'0'});

    }, 4 * delay)

    setTimeout(()=>{

        map.opacity.arrowsFromResultIcons([0,1], [1, 0]);

        map.opacity.arrowsFromIG([0,1]);
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '1'});

        setTimeout(()=>{
            $('.groupADescription, .groupBDescription, .fightDescription').css({'transition':'0.5s','opacity':'0'})
            map.winnerLeaderIndex = 1;
            map.winnerFollowerIndex = fWI;
            map.set.OG2ResultingIcons();
        }, 500)
    }, 5 * delay);

    setTimeout(()=>{

        $('.OG2LeaderLeft, .OG2LeaderRight, .OG2LeadersIcon').css({'transition':'0.5s',  'opacity':'1'});
        $('.OG2FightIconWrap').css({'transition':'0s',  'opacity':'0'});
        if(fWI === 1) {
            $('.IGRightFollower1, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'0.3'});
        }
        if(fWI === 2) {
            $('.IGRightFollower2, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'0.3'});
        }
        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
    }, 6.5 * delay)

    setTimeout(()=>{

        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'0.3'});

        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '0.3'});
        $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'0.3'});
        if(fWI === 2) {
            $('.IGRightFollower1').css({'transition':'0.5s', 'opacity':'0.3'})
        }
        if(fWI === 1) {
            $('.IGRightFollower2').css({'transition':'0.5s', 'opacity':'0.3'})
        }
        map.opacity.arrowsFromResultIcons([0, 0.3], [0.3, 0])
        $('.OG2FollowerArrowsRight, .OG2FollowersWrapRight').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'transition':'1s', 'opacity':'1'});
        $('.OG2FightIconWrap').css({'opacity':'1'});

    }, 8 * delay)

    setTimeout(()=>{



        // show the initial setup for comparison
        $('.OG1FollowersWrapLeft, .OG1FollowerArrowsLeft').css({'transition':'0.5s', 'opacity': '0.5'});
        $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.subsubOG1L').css({'border-color':'gray'});

        // show the initial setup for comparison
        $('.OG1FollowersWrapLeft, .OG1FollowerArrowsLeft').css({'transition':'0.5s', 'opacity': '0.5'});
        $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'1'});
        $('.subsubOG1L').css({'border-color':'gray'});

        $('.OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1FightIconLime').css({'transition':'0s', 'opacity':'0'});

        map.opacity.main([1,1,1], 0.5);
        map.opacity.inside([0.5,1,1], 0.5)
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s','opacity':'0.5'})
        $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s','opacity':'0.5'})

    }, 8 * delay)

}

map.tutorial.result.BWonALost = function(delay, fWI) {

    map.tutorial.result.reset();

    delay = delay === undefined ? 1000 : delay;
    fWI = fWI === undefined ? 1 : fWI;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '1'});
        $('.arrowToTopIconResults, .arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderLeft, .OG1LeaderRight, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 2;
        map.set.OG1ResultIcons();
        map.opacity.main([1,1,1], 0.5);
        $('.IGBottomContestWrap').css({'transition':'0.5s', 'opacity':'0'});
    }, 1 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1, 0], [0, -1])
    }, 2 * delay)

    setTimeout(()=>{
        map.opacity.section([0.05,0.05,0.05], 1);
        $('.prizeCrownLimeTop').css({'transition':'0.5s', 'opacity':'1', 'margin-top':'-40px'});
        $('.IGFI_Top').css({'transition':'0.5s', 'opacity':'1'});
        $('.prizeCrownBlackTop, .IGFightIconLimeTop').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s','opacity':'0'})
        $('.igalltop').css({'transition':'0.5s', 'opacity':'1'})
    }, 3 * delay)

    setTimeout(()=>{

        if(fWI === 1) {
            $('.prizeCrownLimeTop').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        }

        if(fWI === 2) {
            $('.prizeCrownLimeTop').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '35px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        }

        $('.IGFI_Top').css({'transition':'0.5s', 'opacity':'0'});

    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1,0], [0, 1]);



        map.opacity.arrowsFromIG([1,0]);
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '1'});
        setTimeout(()=>{
            $('.groupADescription, .groupBDescription, .fightDescription').css({'transition':'0.5s','opacity':'0'})
            map.winnerLeaderIndex = 2;
            map.winnerFollowerIndex = fWI;
            map.set.OG2ResultingIcons();
        }, 500)
    }, 5 * delay);

    setTimeout(()=>{

        $('.OG2LeaderRight, .OG2LeaderLeft, .OG2LeadersIcon').css({'transition':'0.5s',  'opacity':'1'});
        $('.OG2FightIconWrap').css({'transition':'0s',  'opacity':'0'});

        if(fWI === 1) {
            $('.IGLeftFollower1, .prizeCrownLimeTop').css({'transition':'0.5s', 'opacity':'0.3'})
        }

        if(fWI === 2) {
            $('.IGLeftFollower2, .prizeCrownLimeTop').css({'transition':'0.5s', 'opacity':'0.3'})
        }

        $('.arrowToBottomIconResults, .bottomBoxLeaderResult').css({'opacity':'0.4'});

    }, 6.5 * delay)

    setTimeout(()=>{

        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'0.3'});

        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '0.3'});
        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'0.3'});

        if(fWI === 1) {
            $('.IGLeftFollower2').css({'transition':'0.5s', 'opacity':'0.3'})
        }

        if(fWI === 2) {
            $('.IGLeftFollower1').css({'transition':'0.5s', 'opacity':'0.3'})
        }

        map.opacity.arrowsFromResultIcons([0.3, 0], [0, 0.3])
        $('.og2BlackArrow, .OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'transition':'0.5s', 'opacity':'1'});

        $('.OG2FollowerArrowsRight, .OG2FollowersWrapRight').css({'transition':'1s', 'opacity':'1'});
        $('.OG2FightIconWrap').css({'opacity':'1'});
    }, 8 * delay)

    setTimeout(()=>{
        // show the initial setup for comparison
        $('.OG1FollowersWrapRight, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '0.5'});
        $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.subsubOG1L').css({'border-color':'gray'});

        // show the initial setup for comparison
        $('.OG1FollowersWrapRight, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '0.5'});
        $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'1'});
        $('.subsubOG1L').css({'border-color':'gray'});

        $('.OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1FightIconLime').css({'transition':'0s', 'opacity':'0'});

        map.opacity.main([1,1,1], 0.5);
        map.opacity.inside([0.5,1,1], 0.25)
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s','opacity':'0.25'})
    }, 8 * delay)

}




map.tutorial.result.generateScenario = function(delay, lWI, fWI) {

    delay = delay === undefined ? 1000 : delay;
    fWI = fWI === undefined ? 1 : fWI;
    lWI = lWI === undefined ? 2 : lWI;

    if(lWI === 1) {
        map.tutorial.result.AWonBLost(delay, fWI);
    }

    if(lWI === 2) {
        map.tutorial.result.BWonALost(delay, fWI);
    }

}

map.tutorial.result.generateRandomScenario = function(delay) {

    var fWI, lWI;

    delay = delay === undefined ? 1000 : delay;

    if(Math.random() > 0.5) {
        fWI = 1;
    } else {
        fWI = 2;
    }

    if(Math.random() > 0.5) {
        lWI = 1;
    } else {
        lWI = 2;
    }

    if(lWI === 1) {
        map.tutorial.result.AWonBLost(delay, fWI);
    }

    if(lWI === 2) {
        map.tutorial.result.BWonALost(delay, fWI);
    }

}

map.tutorial.result.stopRotation = false;
map.tutorial.result.rotateScenario = function(state, delay, lWI, fWI, delay2) {

    if(!map.tutorial.result.stopRotation) {

        if(state === 0) {

            map.tutorial.result.reset();
            setTimeout(()=>{
                map.tutorial.result.rotateScenario(1, delay, lWI, fWI, delay2);
            }, 1000)

        }

        if(state === 1) {
            map.tutorial.result.generateScenario(delay, lWI, fWI);
            setTimeout(()=>{
                map.tutorial.result.rotateScenario(0, delay, lWI, fWI, delay2);
            }, (delay * 10) + delay2)
        }

    }

}

map.tutorial.result.stopRandomRotation = false;
map.tutorial.result.rotateRandomScenario = function(state, delay, delay2) {

    if(!map.tutorial.result.stopRandomRotation) {

        if(state === 0) {

            map.tutorial.result.reset();
            setTimeout(()=>{
                map.tutorial.result.rotateRandomScenario(1, delay, delay2);
            }, delay)

        }

        if(state === 1) {
            map.tutorial.result.generateRandomScenario(delay);
            setTimeout(()=>{
                map.tutorial.result.rotateRandomScenario(0, delay, delay2);
            }, (delay * 10) + delay2)
        }

    }

}

//----------//

map.tutorial.result.AWonShort = function(delay) {

    delay = delay === undefined ? 1000 : delay;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeaderRight, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 1;
        map.set.OG1ResultIcons();
    }, 1 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1, 0], [0, 0])
    }, 2 * delay)

    setTimeout(()=>{
        calculator.tutorial.denyCalculator();
        $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'1'});
    },3 * delay)

    setTimeout(()=>{
        $('.IGTopContestWrap').css({'transition':'0.5s','opacity':'0.1'});
        $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'0.2'});
    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([0,-1], [1, 0]);
    }, 5 * delay);


}

map.tutorial.result.ALostShort = function(delay) {

    delay = delay === undefined ? 1000 : delay;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeaderRight, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 2;
        map.set.OG1ResultIcons();
    }, 1 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1, 0], [0, -1])
    }, 2 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeTop, .IGFI_Top').css({'transition':'0.5s', 'opacity':'1'});
        $('.prizeCrownBlackTop, .IGFightIconLimeTop').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.IGFI_Top').css({'transition':'0.5s', 'opacity':'0'});
    }, 3 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeTop').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'0'});
    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1,0], [0, 0]);
        map.opacity.arrowsFromIG([1,0]);
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '1'});
    }, 5 * delay);



}

map.tutorial.result.BWonShort = function(delay) {

    delay = delay === undefined ? 1000 : delay;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeaderLeft, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 2;
        map.set.OG1ResultIcons();
    }, 1 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([0, 1], [0, 0])
    }, 2 * delay)

    setTimeout(()=>{
        calculator.tutorial.denyCalculator();
        $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'1'});
    },3 * delay)

    setTimeout(()=>{
        $('.IGBottomContestWrap').css({'transition':'0.5s','opacity':'0.1'});
        $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'0.2'});
    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([-1,0], [0, 1]);
    }, 5 * delay);

}

map.tutorial.result.BLostShort = function(delay) {

    delay = delay === undefined ? 1000 : delay;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeaderLeft, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 1;
        map.set.OG1ResultIcons();
    }, 1 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([0, 1], [-1, 0])
    }, 2 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeBottom, .IGFI_Bottom').css({'transition':'0.5s', 'opacity':'1'});
        $('.prizeCrownBlackBottom, .IGFightIconLimeBottom').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.IGFI_Bottom').css({'transition':'0.5s', 'opacity':'0'});
    }, 3 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeBottom').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '35px', 'height':'27px', 'width':'29px', 'z-index':'0'});
    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([0,1], [0, 0]);
        map.opacity.arrowsFromIG([0,1]);
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '1'});
    }, 5 * delay);

}

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//

map.animate.og1Results = function(delay, result) {

    delay = delay === undefined ? 750 : delay;

    if(map.globalVariable.og1ResultsCounter % 2 === 0) {
        map.winnerLeaderIndex = 1;
    } else {
        map.winnerLeaderIndex = 2;
    }

    map.winnerLeaderIndex = result === undefined ? map.winnerLeaderIndex : result;

    map.openSpace();

    setTimeout(()=>{
        $('.wonLostBoxes').css({'opacity':'1'});
    }, 100)

    setTimeout(()=>{
        $('.arrowToBottomIconResults, .arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
    }, delay)

    setTimeout(()=>{
        $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
        $('.bottomBoxLeaderResult, .topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.set.OG1ResultIcons();
    }, 2 * delay);

    map.globalVariable.og1ResultsCounter = 1 + map.globalVariable.og1ResultsCounter;

}

map.opacity.bottom = function(opt, delay) {

    delay = delay === undefined ? '1' : delay;

    delay = delay + 's';

    opt = opt.toString();

    $('.arrowToBottomIconResults').css({'transition':delay, 'opacity':opt});
    $('.bottomLeaderWon').css({'transition':delay, 'opacity':opt});
    $('.IGBottomContestWrap').css({'transition':delay, 'opacity':opt});
    $('.arrowBottomIGtoOG2').css({'transition':delay, 'opacity':'0'});

}


map.opacity.top = function(opt) {

    opt = opt.toString();

    $('.arrowToTopIconResults, .arrowTopIconToIG, .arrowTopIGtoOG2').css({'transition':'1s', 'opacity':opt});
    $('.topLeaderLost').css({'transition':'1s', 'opacity':opt});
    $('.IGTopContestWrap').css({'transition':'1s', 'opacity':opt});

}

//------- GENERATE QUESTION MARK IN THE PLACE OF OG1 RESULTS -----//

map.animate.OG1ResultsUknown = function(opt) {

    opt = opt === undefined ? 0.5 : opt;

    map.openSpace();

    var o = opt.toString();

    $('.resultsUnknown').css({'transition':'1s', 'opacity': o});

}


//----- ANIMATE UNVALIDATED IG CONTEST -----//

// point arrow from result icon to IG contest
// Position the lime crown icon to the middle
// turn the fight icon from lime to black by hiding limefighticon
// turn the black fight icon hidden
// put the red cross
map.animate.discardIG_firstStep = function(delay) {

    delay = delay === undefined ? 750 : delay;

    var winnerLeader = map.winnerLeaderIndex;

    winnerLeader = map.winnerLeaderIndex === 1 ? 'top' : 'bottom';

    if(winnerLeader === 'top') {

        map.opacity.arrowsFromResultIcons([1,-1], [0, -1]);
        setTimeout(()=>map.active.ig([0,-1]), 250);

        setTimeout(()=>
        {
            $('.IGFightIconLimeTop').css({'transition':'0.5s','opacity':'0'});
            $('.prizeCrownLimeTop').css({'transition':'0s', 'opacity':'0', 'margin-top':'-18px', 'margin-left':'0px'});
        }, delay);

        setTimeout(()=>{
            $('.prizeCrownBlackTop').css({'transition':'0.5s', 'opacity':'0'});
            $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        }, 2 * delay);
        setTimeout(()=>{$('.IGFI_Top').css({'transition':'0.5s', 'opacity':'0'});}, 3 * delay);
        setTimeout(()=>{$('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'1'});}, 4 * delay);

    }

    if(winnerLeader === 'bottom') {

        map.opacity.arrowsFromResultIcons([-1,1], [-1, 0]);
        setTimeout(()=>map.active.ig([-1,0]), 250);

        setTimeout(()=>
        {
            $('.IGFightIconLimeBottom').css({'transition':'0.5s','opacity':'0'});
            $('.prizeCrownLimeBottom').css({'transition':'0s', 'opacity':'0', 'margin-top':'-18px', 'margin-left':'0px'});
        }, delay);

        setTimeout(()=>{
            $('.prizeCrownBlackBottom').css({'transition':'0.5s', 'opacity':'0'});
            $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        }, 2 * delay);
        setTimeout(()=>{$('.IGFI_Bottom').css({'transition':'0.5s', 'opacity':'0'});}, 3 * delay);
        setTimeout(()=>{$('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'1'});}, 4 * delay)


    }

}


// make the discarded IG opaque show the long arrow hide the short arrow
map.animate.discardIG_secondStep = function(player, delay) {

    delay = delay === undefined ? 750 : delay;

    var winnerLeader = map.winnerLeaderIndex;

    winnerLeader = map.winnerLeaderIndex === 1 ? 'top' : 'bottom';

    if(winnerLeader === 'top') {

        map.opacity.arrowsFromResultIcons([0, -1], [1, -1]);
        $('.IGTopContestWrap').css({'transition':'0.5s','opacity':'0.1'});
        $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'0.2'});
        setTimeout(()=>{map.opacity.arrowsFromResultIcons([0,-1], [1, 0]);}, delay);

    }

    if(winnerLeader === 'bottom') {

        map.opacity.arrowsFromResultIcons([-1, 0], [-1, 1]);
        $('.IGBottomContestWrap').css({'transition':'0.5s','opacity':'0.1'});
        $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'0.2'});
        setTimeout(()=>{map.opacity.arrowsFromResultIcons([-1, 0], [0, 1]);}, delay);

    }

}


//-------- ANIMATE VALIDATED IG CONTEST WINNER ------//

// player= top or bottom and winner index = 1 or 0
map.animate.validateIG = function(delay) {

    delay = delay === undefined ? 750 : delay;

    var ml = map.winnerFollowerIndex === 1 ? '-40px' : '35px';

    var winnerPlayer = map.winnerLeaderIndex === 1 ? 'top' : 'bottom';

    // Notice that if the winnerPlayer(leader) is top then the bottom IG is validated
    if(winnerPlayer === 'top') {

        map.opacity.arrowsFromResultIcons([0, 1], [-1, 0]);
        setTimeout(()=>{
            $('.prizeCrownLimeBottom, .IGFI_Bottom').css({'transition':'0.5s', 'opacity':'1'});
            $('.prizeCrownBlackBottom, .IGFightIconLimeBottom').css({'transition':'0.5s', 'opacity':'0'});
            $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
            $('.IGFI_Bottom').css({'transition':'0.5s', 'opacity':'0'});
        }, delay)
        setTimeout(()=>{
            $('.prizeCrownLimeBottom').css({'transition':'2s', 'margin-top':'-51px', 'margin-left': ml, 'height':'27px', 'width':'29px', 'z-index':'0'});


        }, delay)

    }

    if(winnerPlayer === 'bottom') {

        map.opacity.arrowsFromResultIcons([1,0], [0, -1]);
        setTimeout(()=>{
            $('.prizeCrownLimeTop, .IGFI_Top').css({'transition':'0.5s', 'opacity':'1'});
            $('.prizeCrownBlackTop, .IGFightIconLimeTop').css({'transition':'0.5s', 'opacity':'0'});
            $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
            $('.IGFI_Top').css({'transition':'0.5s', 'opacity':'0'});

        }, delay)
        setTimeout(()=>{
            $('.prizeCrownLimeTop').css({'transition':'2s', 'margin-top':'-51px', 'margin-left': ml, 'height':'27px', 'width':'29px', 'z-index':'0'});

        }, 2 * delay)

    }

    map.set.OG2ResultingIcons();

}

map.globalVariable.stopTutorialCrownLoop = false;

map.animate.tutorialCrownLoop = function(state) {

    if(!map.globalVariable.stopTutorialCrownLoop) {

        if(state === 0) {
            $('.prizeCrownLimeTop').css({'transition':'0.15s', 'opacity':'0'});
            setTimeout(()=>{
                $('.prizeCrownLimeTop').css({'transition':'0s','margin-top':'-40px', 'margin-left':'0px'});
                setTimeout(()=>{
                    $('.prizeCrownLimeTop').css({'transition':'0.15s', 'opacity':'1'});
                }, 125)
            }, 125)

            setTimeout(()=>{
                map.animate.tutorialCrownLoop(1)
            }, 350)
        }

        if(state === 1) {
            $('.prizeCrownLimeTop').css({'transition':'2s', 'margin-top':'-51px', 'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'0'});
            setTimeout(()=>{
                map.animate.tutorialCrownLoop(0)
            }, 2500)
        }
    } else {
        $('.prizeCrownLimeTop').css({'transition':'2s', 'margin-top':'-51px',
        'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'-10',
        'opacity':'0.5'});
    }

}


//--------- METHODS FOR TUTORIAL DEMONSTRATION -------//

//---------SHOW HIDE METHODS---------//

map.hide.og2_all = function() {

    $('.OG2LeaderRight, .OG2FollowerArrowsRight, .OG2FollowersWrapRight').css({'transition':'0s', 'opacity':'0'});
    $('.OG2LeaderLeft, .OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'transition':'0s', 'opacity':'0'});
    $('.OG2LeftFollower1, .OG2LeftFollower2').css({'transition':'0s', 'opacity':'0'});
    map.hide.og2_fightIcon();

}

//FIGHT ICONS
map.hide.og2_fightIcon = function() {
    $('.OG2FightIconWrap').css({'opacity':'0'});
}
map.show.og2_fightIcon = function() {
    $('.OG2FightIconWrap').css({'transition':'0.5s', 'opacity':'1'});
}

//----------------------//
//-----LEFT SECTION------//
//----------------------//

map.show.og2_leftGroupIcons = function() {
    $('.OG2LeaderLeft, .OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'transition':'1s', 'opacity':'1'});
}
map.hide.og2_leftGroupIcons = function() {

    $('.OG2LeaderLeft, .OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'transition':'1s', 'opacity':'0'});
    $('.OG2LeftFollower1, .OG2LeftFollower2').css({'transition':'1s', 'opacity':'0'});
}

map.show.og2_leftLeader = function() {
    $('.OG2LeaderLeft, .OG2LeadersIcon').css({'transition':'1s',  'opacity':'1'});
}
map.hide.og2_leftLeader = function() {
    $('.OG2LeaderLeft').css({'transition':'1s',  'opacity':'0'});
}
map.show.og2_leftLeaderCAT = function() {

    $('.OG2LeaderCircleLeft, .winnerLeaderArrowLeft, .winnerLeaderTextLeft').css({'transition':'1s',  'opacity':'1'});

    $('.IGCircleArrowLeft_f1, .IGCircleArrowTextLeft_f1').css({'transition':'1s',  'opacity':'1'});
    $('.IGLeftFollower1').css({'transition':'1s', 'opacity':'1'});
    map.opacity.circles('iga', 'f1', 1);

    $('.OG1LeftFollower1').css({'transition':'1s', 'opacity':'1'});
    map.opacity.circles('og1','f1', 1);

}
map.hide.og2_leftLeaderCAT = function() {

    $('.OG2LeaderCircleLeft, .winnerLeaderArrowLeft, .winnerLeaderTextLeft').css({'transition':'1s', 'opacity':'0'});

    $('.IGCircleArrowLeft_f1, .IGCircleArrowTextLeft_f1').css({'transition':'1s', 'opacity':'0'});
    $('.IGLeftFollower1').css({'transition':'1s', 'opacity':'0.5', 'z-index':'2'});

    map.opacity.circles('iga', 'f1', 0);
    map.opacity.circles('og1','f1', 0);


    $('.prizeCrownLimeTop').css({'opacity':'0.5'});

}

map.show.og2_leftFollower1 = function() {

    $('.OG2LeftFollower1').css({'transition':'1s', 'opacity':'1'});
    $('.OG2LeftFollower2').css({'transition':'1s', 'opacity':'0'});
    $('.OG2FollowersWrapLeft, .OG2FollowerArrowsLeft').css({'opacity':'1'});

}
map.hide.og2_leftFollower1 = function() {

    $('.OG2LeftFollower1').css({'transition':'1s', 'opacity':'0'});
    $('.OG2FollowersWrapLeft, .OG2FollowerArrowsLeft').css({'opacity':'1'});

}
map.show.og2_leftFollower1CAT = function() {

    $('.OG2CircleArrowLeft_f1, .OG2CircleArrowTextLeft_f1').css({'transition':'1s', 'opacity':'1'});
    map.opacity.circles('og2', 'f1', 1);

    $('.OG1LeaderLeft, .leaderKingLeft,  .topBoxLeaderResult').css({'transition':'1s', 'opacity':'1'});
    map.opacity.circles('result', 'l1', 1);

    map.opacity.circles('og1','l1', 1);

}
map.hide.og2_leftFollower1CAT = function() {

    $('.OG2CircleArrowLeft_f1, .OG2CircleArrowTextLeft_f1').css({'transition':'1s', 'opacity':'0'});
    map.opacity.circles('og2', 'f1', 0);

    $('.topBoxLeaderResult').css({'transition':'1s', 'opacity':'0.5'});
    map.opacity.circles('result', 'l1', 0);

    map.opacity.circles('og1','l1', 0);

}

map.show.og2_leftFollower2 = function() {

    $('.OG2LeftFollower2').css({'transition':'1s', 'opacity':'1'});
    $('.OG2FollowersWrapLeft, .OG2FollowerArrowsLeft').css({'opacity':'1'});

}
map.hide.og2_leftFollower2 = function() {

    $('.OG2LeftFollower2').css({'transition':'1s', 'opacity':'0'});
    $('.OG2FollowersWrapLeft, .OG2FollowerArrowsLeft').css({'opacity':'1'});

}
map.show.og2_leftFollower2CAT = function() {

    $('.OG2CircleArrowLeft_f2, .OG2CircleArrowTextLeft_f2').css({'transition':'1s', 'opacity':'1'});
    map.opacity.circles('og2', 'f2', 1);

    map.opacity.circles('iga', 'f2', 1);
    $('.IGLeftFollower2').css({'transition':'1s', 'opacity':'1'});
    $('.IGCircleArrowTextLeft_f2, .IGCircleArrowLeft_f2').css({'transition':'1s', 'opacity':'1'});

    map.opacity.circles('og1', 'f2', 1);
    $('.OG1LeftFollower2').css({'opacity':'1'})

}
map.hide.og2_leftFollower2CAT = function() {

    $('.OG2CircleArrowLeft_f2, .OG2CircleArrowTextLeft_f2').css({'transition':'1s', 'opacity':'0'});
    map.opacity.circles('og2', 'f2', 0);

    map.opacity.circles('iga', 'f2', 0);
    $('.IGLeftFollower2').css({'transition':'1s', 'opacity':'0.5'});
    $('.IGCircleArrowTextLeft_f2, .IGCircleArrowLeft_f2').css({'transition':'1s', 'opacity':'0'});

    map.opacity.circles('og1', 'f2', 0);
    $('.OG1LeftFollower2').css({'opacity':'0.5'});

}

map.show.og2_leftFollowers = function() {
    $('.OG2LeftFollower1').css({'transition':'1s', 'opacity':'1'});
    $('.OG2LeftFollower2').css({'transition':'1s', 'opacity':'1'});
}
map.hide.og2_leftFollowers = function() {
    $('.OG2LeftFollower1').css({'transition':'1s', 'opacity':'0'});
    $('.OG2LeftFollower2').css({'transition':'1s', 'opacity':'0'});
}

//----------------------//
//-----RIGHT SECTION----//
//----------------------//
map.show.og2_rightGroupIcons = function() {
    $('.OG2LeaderRight, .OG2FollowerArrowsRight, .OG2FollowersWrapRight').css({'transition':'1s','opacity':'1'});
}
map.hide.og2_rightGroupIcons = function() {
    $('.OG2LeaderRight, .OG2FollowerArrowsRight, .OG2FollowersWrapRight').css({'transition':'1s','opacity':'0'});
}

map.show.og2_rightFollowers = function() {
    $('.OG2FollowersWrapRight, .OG2FollowerArrowsRight, .arrowDashed').css({'transition':'1s', 'opacity':'1'});
}
map.hide.og2_rightFollowers = function() {
    $('.OG2FollowersWrapRight, .OG2FollowerArrowsRight').css({'transition':'1s', 'opacity':'0'});
}
map.show.og2_rightFollowersCAT = function() {
    $('.OG2BothFollowersCircleRight, .OG2BothFollowersCircleRightText, .OG2BothFollowersCircleRightArrow').css({'transition':'1s', 'opacity':'1'});
    $('.OG1BothFollowersCircleRight').css({'transition':'1s', 'opacity':'1'});
    $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'1s', 'opacity':'1'});
}
map.hide.og2_rightFollowersCAT = function() {
    $('.OG2BothFollowersCircleRight, .OG2BothFollowersCircleRightText, .OG2BothFollowersCircleRightArrow').css({'transition':'1s', 'opacity':'0'});
    $('.OG1BothFollowersCircleRight').css({'transition':'1s', 'opacity':'0'});
    $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'1s', 'opacity':'0.5'});
}

map.show.og2_rightLeader = function() {
    $('.OG2LeaderRight').css({'transition':'1s', 'opacity':'1'});
}
map.hide.og2_rightLeader = function() {
    $('.OG2LeaderRight').css({'transition':'1s','opacity':'0'});
}
map.show.og2_rightLeaderCAT = function() {

    $('.OG2LeaderCircleRight, .winnerLeaderArrowRight, .winnerLeaderTextRight').css({'transition':'1s', 'opacity':'1'});

    $('.bottomBoxLeaderResult').css({'transition':'1s', 'opacity':'1'});
    $('.OG1LeaderRight').css({'transition':'1s', 'opacity':'1'});

    map.opacity.circles('og1','ol1', 1);
    map.opacity.circles('result','l2', 1);

}
map.hide.og2_rightLeaderCAT = function() {

    $('.OG2LeaderCircleRight, .winnerLeaderArrowRight, .winnerLeaderTextRight').css({'transition':'1s', 'opacity':'0'});

    $('.bottomBoxLeaderResult').css({'transition':'1s', 'opacity':'0.5'});
    // $('.OG1LeaderRight').css({'transition':'1s', 'opacity':'0.5'});

    map.opacity.circles('og1','ol1', 0)
    map.opacity.circles('result','l2', 0);
}

//-------------------------------------------//

map.show.demo = function(delay) {

    delay = delay === undefined ? 3000 : delay;

    map.hide.og2_all();
    setTimeout(()=>map.show.og2_leftLeader(), 0.25 * delay);
    setTimeout(()=>map.show.og2_leftLeaderCAT(), 0.5 * delay);
    setTimeout(()=>map.hide.og2_leftLeaderCAT(), 3 * delay);

    setTimeout(()=>map.show.og2_leftFollower1(), 3.25 * delay);
    setTimeout(()=>map.show.og2_leftFollower1CAT(), 3.5 * delay);
    setTimeout(()=>map.hide.og2_leftFollower1CAT(),6 * delay);

    setTimeout(()=>map.show.og2_leftFollower2(), 6.25 * delay);
    setTimeout(()=>map.show.og2_leftFollower2CAT(), 6.5 * delay);
    setTimeout(()=>map.hide.og2_leftFollower2CAT(), 9 * delay);

    setTimeout(()=>map.show.og2_rightLeader(), 9.25 * delay);
    setTimeout(()=>map.show.og2_rightLeaderCAT(), 9.5 * delay);
    setTimeout(()=>map.hide.og2_rightLeaderCAT(), 12 * delay);

    setTimeout(()=>map.show.og2_rightFollowers(), 12.25 * delay);
    setTimeout(()=>map.show.og2_rightFollowersCAT(),12.5 * delay);
    setTimeout(()=>map.hide.og2_rightFollowersCAT(), 15 * delay);
    setTimeout(()=>map.show.og2_fightIcon(), 15.25 * delay);

}


map.IGHighlightAnimationOn = true;
map.animate.IGTopContestHighlight = function(state) {

    if(map.IGHighlightAnimationOn) {

        if(state === 0) {

            $('.IGTopContestWrap').css({'transition':'1.5s', 'transform-origin':'top left',
            'transform':'scale(1)', 'box-shadow':'0px 0px 8px 3px lime'});

            map.opacity.section([0.1, 0.1, 0.1], 1.5);

            setTimeout(()=>{
                map.animate.IGTopContestHighlight(1);
            }, 1300)

        }

        if(state === 1) {

            $('.IGTopContestWrap').css({'transition':'1.5s', 'transform-origin':'top left',
            'transform':'scale(1.05)', 'box-shadow':'0px 0px 8px 3px black'});

            map.opacity.section([0.1, 0.4, 0.1], 1.5);

            setTimeout(()=>{
                map.animate.IGTopContestHighlight(0);
            }, 1300)

        }

    } else {

        map.opacity.section([0.1, 0.1, 0.1], 1.5)

        $('.IGTopContestWrap').css({'transform':'scale(1)', 'box-shadow':'0px 0px 8px 3px black'});

    }

}





//----------------------- HELP SABOTAGE ANIMATION --------------//

map.globalVariable.stopHelpSabotageAnimation1 = false;

map.animate.helpSabotage1 = function(state) {

    if(!map.globalVariable.stopHelpSabotageAnimation1) {

        if(state === -1) {

            $('.leaderKingLeft, .leaderKingRight').css({'transition':'0.15s', 'filter':'drop-shadow(0px 0px 0px transparent)'})
            // $('.OG1GroupSeparator').css({'display':'none'});

            $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.75s', 'opacity':'0.3'});
            $('.subsubOG1L').css({'transition':'1.25s', 'border-color':'transparent', 'background-color':'transparent'});

            $('.s2PassiveFollower').css({'transition':'1.25s', 'opacity':'0'});
            $('.s2ActiveFollower').css({'transition':'0.75s', 'opacity':'1'});
            $('.OG1ficon, .OG1ficonLime').css({'transition':'0.5s', 'filter':'drop-shadow(0px 3px 2px black)'})

            $('.OG1FightIcon').css({'transition':'0.15s', 'opacity':'0'});
            $('.OG1GroupSeparator').css({'transition':'0.15s', 'opacity':'1', 'height':'119px'});



            map.animate.helpSabotage1(0)

        }

        if(state === 0) {

            $('.arrowDashed').css({'transition':'1s', 'opacity':'0'})

            $('.subsubOG1L').css({'transition':'0.5s', 'border-color':'transparent', 'background-color':'transparent'});


            setTimeout(()=>map.animate.helpSabotage1(1), 1000);

        }


        // lime hel sabotage arrows
        if(state === 1) {

            setTimeout(()=>{
                $('.arrowDashedLime1').css({'transition':'2s', 'opacity':'1'})
            },150)


            $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'3.25s', 'opacity':'1'});
            $('.subsubOG1L').css({'transition':'2s', 'border-color':'lime', 'background-color':'#e6fbe6'});

            // setTimeout(()=>{
            //     $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.75s', 'opacity':'1'});
            // }, 850)


            setTimeout(()=>map.animate.helpSabotage1(2), 250)

        }

        // lime leader contour
        if(state === 2) {

            setTimeout(()=>{
                $('.s2PassiveFollower').css({'transition':'1.75s', 'opacity':'0.3'});
                $('.s2ActiveFollower').css({'transition':'1.25s', 'opacity':'0'});
                $('.OG1ficon, .OG1ficonLime').css({'transition':'1s', 'filter':'drop-shadow(0px 0px 0px transparent)'})
            }, 50)

            setTimeout(()=>{

                $('.arrowDashedLime1').css({'transition':'1.5s', 'opacity':'0'})
                // $('.OG1GroupSeparator').css({'transition':'0.5s', 'opacity':'0'});
            }, 750)


            setTimeout(()=>map.animate.helpSabotage1(-1), 2000)

        }


    } else {
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'0.5'})
        $('.s2ActiveFollower').css({'transition':'0.5s', 'opacity':'0'});
        $('.arrowDashed').css({'transition':'0.5s', 'opacity':'0'})
        $('.arrowDashedLime1').css({'transition':'0.5s', 'opacity':'1'})
        $('.subsubOG1L').css({'transition':'0.5s',  'border-color':'lime', 'background-color':'#e6fbe6'});
        $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.15s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'0.15s', 'opacity': '1'});
        $('.OG1GroupSeparator').css({'transition':'0.15s', 'opacity':'1', 'height':'119px'});
        $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.15s', 'opacity':'0'});
        $('.s2PassiveFollower').css({'transition':'0.15s', 'opacity':'0'})
        $('.s2ActiveFollower').css({'transition':'0.15s', 'opacity':'1'});
        $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.15s', 'opacity':'0.5'});
        setTimeout(()=>{
            $('.leaderKingLeft, .leaderKingRight').css({'transition':'1s', 'filter':'drop-shadow(0px 3px 2px black)'});
            $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'1s', 'opacity': '0'});
            $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'1s', 'opacity': '0'});
            $('.OG1GroupSeparator').css({'transition':'0.5s', 'opacity':'0', 'height':'0px'});
            $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'1'});
            $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1s', 'opacity':'1'});
        })

    }

}

map.globalVariable.stopHelpSabotageAnimation2 = false;

map.animate.helpSabotage2 = function(state) {

    if(!map.globalVariable.stopHelpSabotageAnimation2) {

        if(state === 0) {

            $('.middleStep2Text').css({'transition':'1.15s', 'opacity':'0.2', 'filter':'grayscale(1)','box-shadow':'0px 0px 0px 0px black'});
            $('.leftSideStep1Text, .rightSideStep1Text').css({'transition':'1.15s', 'opacity':'1', 'filter':'grayscale(0)', 'box-shadow':'0px 4px 4px 0px black'});

            $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'1'});
            $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0.3'});
            $('.leaderKingLeft, .leaderKingRight').css({'transition':'0.5s', 'filter':'drop-shadow(0px 0px 0px transparent)'})

            $('.arrowDashed').css({'transition':'0.15s', 'opacity':'0'})
            $('.subsubOG1L').css({'transition':'0.15s', 'border-color':'transparent', 'background-color':'transparent'});

            setTimeout(()=>map.animate.helpSabotage2(1), 1250);

        }

        // lime hel sabotage arrows
        if(state === 1) {

            $('.s2ActiveFollower').css({'transition':'1.15s', 'opacity':'1'});
            $('.s2PassiveFollower').css({'transition':'1.15s', 'opacity':'0'});

            $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1.15s', 'opacity':'0.2'});
            $('.subsubOG1L').css({'transition':'2s', 'border-color':'lime', 'background-color':'#e6fbe6'});

            setTimeout(()=>{
                $('.arrowDashed').css({'transition':'1.15s', 'opacity':'0'})
                $('.arrowDashedLime1').css({'transition':'1.75s', 'opacity':'1'})
            }, 200)

            setTimeout(()=>{
                $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1.75s', 'opacity':'1'});
                $('.leaderKingLeft, .leaderKingRight').css({'transition':'1s', 'filter':'drop-shadow(0px 3px 2px black)'})
            }, 1000)

            setTimeout(()=>map.animate.helpSabotage2(2), 500)

        }

        // lime leader contour
        if(state === 2) {

            setTimeout(()=>{
                $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'0'});
                $('.s2ActiveFollower').css({'transition':'0.5s', 'opacity':'0'});
                $('.OG1ficon, .OG1ficonLime').css({'transition':'1s', 'filter':'drop-shadow(0px 0px 0px transparent)'})
            }, 150)

            setTimeout(()=>{
                $('.leftSideStep1Text, .rightSideStep1Text').css({'transition':'1.15s', 'filter':'grayscale(1)', 'opacity':'0.2', 'box-shadow':'0px 0px 0px 0px black'});
            }, 500)

            setTimeout(()=>{
                $('.middleStep2Text').css({'transition':'1.15s', 'opacity':'1', 'filter':'grayscale(0)', 'box-shadow':'0px 4px 4px 0px black'});
            }, 500)

            setTimeout(()=>{
                $('.arrowDashedLime1').css({'transition':'0.75s', 'opacity':'0'})
            }, 1000)

            setTimeout(()=>{
                $('.arrowDashedLime1').css({'transition':'1.15s', 'opacity':'0'})
                $('.OG1GroupSeparator').css({'transition':'0.75s', 'opacity':'0', 'height':'0px'});
                $('.OG1FightIconLime').css({'transition':'1.5s', 'opacity':'1'});
            }, 750)

            setTimeout(()=>{
                $('.OG1ficon, .OG1ficonLime').css({'transition':'0s', 'filter':'drop-shadow(0px 3px 2px black)'})
            }, 1750)

            setTimeout(()=>map.animate.helpSabotage2(3), 1500)

        }

        if(state === 3) {

            setTimeout(()=>{
                $('.OG1GroupSeparator').css({'transition':'0.75s', 'opacity':'1', 'height':'119px'});
                $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.75s', 'opacity':'0'});
                map.animate.helpSabotage2(0)
            }, 850)

        }

    } else {

        $('.OG1GroupSeparator').css({'transition':'0.5s', 'opacity':'0', 'height':'0px'});
        $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'1'})
        $('.s2ActiveFollower').css({'transition':'0.5s', 'opacity':'0'});
        $('.arrowDashed').css({'transition':'0.5s', 'opacity':'1'})
        $('.subsubOG1L').css({'transition':'0.5s', 'border-color':'gray', 'background-color':'#d3d3d378'});
        $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});
        $('.middleStep2Text, .leftSideStep1Text, .rightSideStep1Text').css({'transition':'1.15s', 'opacity':'0', 'filter':'grayscale(0)', 'box-shadow':'0px 4px 4px 0px black'});

    }

}

// faster version of the above method with an emphasis on the second step
map.globalVariable.stopHelpSabotageAnimation3 = false;

map.animate.helpSabotage3 = function(state) {

    $('.OG1GroupSeparator').css({'transition':'0.75s', 'opacity':'0', 'height':'0px'});

    if(!map.globalVariable.stopHelpSabotageAnimation3) {

        if(state === 0) {

            $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});
            $('.middleStep2Text').css({'transition':'1.15s', 'opacity':'0.2', 'filter':'grayscale(1)','box-shadow':'0px 0px 0px 0px black'});
            $('.leftSideStep1Text, .rightSideStep1Text').css({'transition':'1.15s', 'opacity':'1', 'filter':'grayscale(0)', 'box-shadow':'0px 4px 4px 0px black'});

            $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'1'});
            $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0.8'});
            $('.leaderKingLeft, .leaderKingRight').css({'transition':'0.5s', 'filter':'drop-shadow(0px 0px 0px transparent)'})

            $('.arrowDashed').css({'transition':'0.15s', 'opacity':'0'})
            $('.subsubOG1L').css({'transition':'0.15s', 'border-color':'transparent', 'background-color':'transparent'});

            setTimeout(()=>map.animate.helpSabotage3(1), 0);

        }

        // lime hel sabotage arrows
        if(state === 1) {

            $('.s2ActiveFollower').css({'transition':'1.15s', 'opacity':'0.6'});
            $('.s2PassiveFollower').css({'transition':'1.15s', 'opacity':'1'});

            $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1.15s', 'opacity':'0.6'});

            setTimeout(()=>{
                $('.subsubOG1L').css({'transition':'2s', 'border-color':'lime', 'background-color':'#e6fbe6'});
            }, 750)


            setTimeout(()=>{
                $('.arrowDashed').css({'transition':'1.15s', 'opacity':'0'})
                $('.arrowDashedLime1').css({'transition':'1.75s', 'opacity':'1'})
            }, 350)

            setTimeout(()=>{
                $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1.75s', 'opacity':'1'});
                $('.leaderKingLeft, .leaderKingRight').css({'transition':'1s', 'filter':'drop-shadow(0px 3px 2px black)'})
            }, 1000)

            setTimeout(()=>map.animate.helpSabotage3(2), 500)

        }

        // lime leader contour
        if(state === 2) {

            setTimeout(()=>{
                $('.s2PassiveFollower').css({'transition':'4s', 'opacity':'0'});
                $('.s2ActiveFollower').css({'transition':'4s', 'opacity':'0'});
                $('.OG1ficon, .OG1ficonLime').css({'transition':'1s', 'filter':'drop-shadow(0px 0px 0px transparent)'})
            }, 350)

            setTimeout(()=>{
                $('.leftSideStep1Text, .rightSideStep1Text').css({'transition':'1.15s', 'filter':'grayscale(1)', 'opacity':'0.2', 'box-shadow':'0px 0px 0px 0px black'});
            }, 500)

            setTimeout(()=>{
                $('.middleStep2Text').css({'transition':'1.15s', 'opacity':'1', 'filter':'grayscale(0)', 'box-shadow':'0px 4px 4px 0px black'});
            }, 500)

            setTimeout(()=>{
                $('.arrowDashedLime1').css({'transition':'0.75s', 'opacity':'0'})
            }, 1000)

            setTimeout(()=>{
                $('.arrowDashedLime1').css({'transition':'1.15s', 'opacity':'0'})

                $('.OG1FightIconLime').css({'transition':'1.5s', 'opacity':'1'});
            }, 750)

            setTimeout(()=>{
                $('.OG1ficon, .OG1ficonLime').css({'transition':'0s', 'filter':'drop-shadow(0px 3px 2px black)'})
            }, 1750)

            setTimeout(()=>map.animate.helpSabotage3(3), 1500)

        }

        if(state === 3) {

            setTimeout(()=>{
                // $('.OG1GroupSeparator').css({'transition':'0.75s', 'opacity':'1', 'height':'119px'});
                $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.75s', 'opacity':'0'});
                map.animate.helpSabotage3(0)
            }, 2000)

        }

    } else {

        $('.OG1GroupSeparator').css({'transition':'0.5s', 'opacity':'0', 'height':'0px'});
        $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'1'});
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'0'})
        $('.s2ActiveFollower').css({'transition':'0.5s', 'opacity':'0'});
        $('.arrowDashed').css({'transition':'0.5s', 'opacity':'0.25'});
        $('.arrowDashedLime1').css({'transition':'0.5s', 'opacity':'0'});
        $('.subsubOG1L').css({'transition':'0.5s', 'border-color':'lime', 'background-color':'#e6fbe6'});
        $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});
        $('.middleStep2Text, .leftSideStep1Text, .rightSideStep1Text').css({'transition':'1.15s', 'opacity':'0', 'filter':'grayscale(0)', 'box-shadow':'0px 4px 4px 0px black'});

    }

}

map.globalVariable.stopHelpSabotageAnimation4 = false;
map.globalVariable.stopHelpSabotageAnimation5 = false;

map.globalVariable.IG101lock = true;

map.animate.helpSabotage4Setup = function() {

    $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});

        // FOLLOWERS APPEAR
    $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'1'});

    // $('.leaderKingLeft, .leaderKingRight').css({'transition':'0.5s', 'filter':'drop-shadow(0px 0px 0px transparent)'})

    $('.arrowDashed').css({'transition':'0.15s', 'opacity':'0.4'});

    $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'0s', 'transform':'rotate3d(3,2,1, 0deg)'});

    $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.75s', 'opacity':'0'});


    $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'0.75s', 'opacity':'0'})
    // PLACE HERE FOLLOWERS IG ICONS AND FFIGHT ICONS  DISSAPEAR
    $('.IGLeftFollower1, .IGLeftFollower2, .IGRightFollower1, .IGRightFollower2').css({'transition':'0.75s', 'opacity':'0'})
    $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.75s', 'opacity':'0.4'});//0.4
    $('.subsubOG1L').css({'transition':'0.75s', 'border-color':'gray', 'background-color':'gray'});

}

map.animate.helpSabotage4 = function(state) {

    $('.OG1GroupSeparator').css({'transition':'0.75s', 'opacity':'0', 'height':'0px'});

    if(!map.globalVariable.stopHelpSabotageAnimation4) {

        if(state === 0) {

            // FIGHT ICONS FULLY DISSAPEARED
            $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});

                // FOLLOWERS APPEAR
            $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'1'});

            // $('.leaderKingLeft, .leaderKingRight').css({'transition':'0.5s', 'filter':'drop-shadow(0px 0px 0px transparent)'})

            // $('.arrowDashed').css({'transition':'0.15s', 'opacity':'0'})


            setTimeout(()=>map.animate.helpSabotage4(1), 500);

        }

        // lime help sabotage arrows
        if(state === 1) {

            $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'0s', 'transform':'rotate3d(3,2,1, 0deg)'});


            // active followers
            $('.s2ActiveFollower').css({'transition':'0.75s', 'opacity':'0.8'});
            // $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'});

            // leaders are appearing
            // $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1.15s', 'opacity':'0.6'});

            setTimeout(()=>{
                $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1.15s', 'opacity':'1'});
            }, 1000)

            // power are appearing around leaders
            setTimeout(()=>{
                $('.subsubOG1L').css({'transition':'2s', 'border-color':'lime', 'background-color':'#e6fbe6'});
            }, 750)

            // lime arrows are activating
            setTimeout(()=>{
                $('.arrowDashed').css({'transition':'1.15s', 'opacity':'0'})
                $('.arrowDashedLime1').css({'transition':'1s', 'opacity':'1'})

            }, 10)



            setTimeout(()=>map.animate.helpSabotage4(2), 500)

        }

        // lime leader contour
        if(state === 2) {

            $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'});

            // followers are deactivated
            setTimeout(()=>{
                $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'});
                $('.s2ActiveFollower').css({'transition':'1s', 'opacity':'0'});

                        // $('.OG1ficon, .OG1ficonLime').css({'transition':'1s', 'filter':'drop-shadow(0px 0px 0px transparent)'})

            }, 150)

            setTimeout(()=>{
                $('.IGLeftFollower1, .IGLeftFollower2, .IGRightFollower1, .IGRightFollower2').css({'transition':'1s', 'opacity':'1'})
            }, 600)


            // active arrows dissapearing
            setTimeout(()=>{
                $('.arrowDashedLime1').css({'transition':'0.75s', 'opacity':'0'})
                // $('.arrowDashed').css({'transition':'0.75s', 'opacity':'0.5'})
                // PLACE HERE FOLLOWERS ACTIVATING IN IG

            }, 750)





            if(map.globalVariable.IG101lock) {

                setTimeout(()=>{
                    // $('.OG1GroupSeparator').css({'transition':'0.75s', 'opacity':'1', 'height':'119px'});
                    $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.75s', 'opacity':'0'});


                    $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'0.75s', 'opacity':'0'})
                    // PLACE HERE FOLLOWERS IG ICONS AND FFIGHT ICONS  DISSAPEAR
                    $('.IGLeftFollower1, .IGLeftFollower2, .IGRightFollower1, .IGRightFollower2').css({'transition':'0.75s', 'opacity':'0'})
                    $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.75s', 'opacity':'0'});//0.4
                    $('.subsubOG1L').css({'transition':'0.75s', 'border-color':'transparent', 'background-color':'transparent'});

                    setTimeout(()=>{
                        map.animate.helpSabotage4(0)
                    }, 1000)

                }, 2500)

            } else {

                // active arrows dissapearing and FIGHT ICON APPEARS
                setTimeout(()=>{
                    // $('.arrowDashedLime1').css({'transition':'1.15s', 'opacity':'0'})

                    $('.OG1FightIconLime').css({'transition':'1.5s', 'opacity':'1'});

                    // PLACE HERE FIGHT ICONS FOR IG CONTEST
                    $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'1s', 'opacity':'1'})
                }, 2000)

                setTimeout(()=>map.animate.helpSabotage4(3), 3000)
            }

        }

        if(state === 3) {

            // HAVE THE FIGHT ICONS ROTATION HERE MAKE THE BELOW DELAY LONGER

            setTimeout(()=>{
                $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'1s', 'transform':'rotate3d(3,2,1, 1800deg)'});
            }, 500)

            // immidiatly connect to the intial state of followers help sabo setup an at the same time make fight icon dissapear
            setTimeout(()=>{
                // $('.OG1GroupSeparator').css({'transition':'0.75s', 'opacity':'1', 'height':'119px'});
                $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.75s', 'opacity':'0'});


                $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'0.75s', 'opacity':'0'})
                // PLACE HERE FOLLOWERS IG ICONS AND FFIGHT ICONS  DISSAPEAR
                $('.IGLeftFollower1, .IGLeftFollower2, .IGRightFollower1, .IGRightFollower2').css({'transition':'0.75s', 'opacity':'0'})
                $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.75s', 'opacity':'0'});//0.4
                $('.subsubOG1L').css({'transition':'0.75s', 'border-color':'transparent', 'background-color':'transparent'});

                setTimeout(()=>{
                    map.animate.helpSabotage4(0)
                }, 1000)

            }, 2500)

        }

    } else {

        $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'1s', 'opacity':'1'})
        $('.IGLeftFollower1, .IGLeftFollower2, .IGRightFollower1, .IGRightFollower2').css({'transition':'1s', 'opacity':'1'})

        $('.OG1GroupSeparator').css({'transition':'0.5s', 'opacity':'0', 'height':'0px'});
        $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'1'});
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'0'})
        $('.s2ActiveFollower').css({'transition':'0.5s', 'opacity':'0'});
        $('.arrowDashed').css({'transition':'0.5s', 'opacity':'0.25'});
        $('.arrowDashedLime1').css({'transition':'0.5s', 'opacity':'0'});
        $('.subsubOG1L').css({'transition':'0.5s', 'border-color':'lime', 'background-color':'#e6fbe6'});
        $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});
        $('.middleStep2Text, .leftSideStep1Text, .rightSideStep1Text').css({'transition':'1.15s', 'opacity':'0', 'filter':'grayscale(0)', 'box-shadow':'0px 4px 4px 0px black'});

    }

}

map.animate.helpSabotage5 = function(state) {

    $('.OG1GroupSeparator').css({'transition':'0.75s', 'opacity':'0', 'height':'0px'});

    if(!map.globalVariable.stopHelpSabotageAnimation5) {

        if(state === 0) {

            // FIGHT ICONS FULLY DISSAPEARED
            $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});

                // FOLLOWERS APPEAR
            $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'1'});

            // $('.leaderKingLeft, .leaderKingRight').css({'transition':'0.5s', 'filter':'drop-shadow(0px 0px 0px transparent)'})

            // $('.arrowDashed').css({'transition':'0.15s', 'opacity':'0'})


            setTimeout(()=>map.animate.helpSabotage5(1), 500);

        }

        // lime help sabotage arrows
        if(state === 1) {

            $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'0s', 'transform':'rotate3d(3,2,1, 0deg)'});


            // active followers
            $('.s2ActiveFollower').css({'transition':'0.75s', 'opacity':'0.8'});
            // $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'});

            // leaders are appearing
            // $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1.15s', 'opacity':'0.6'});

            setTimeout(()=>{
                $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1.15s', 'opacity':'1'});
            }, 1000)

            // power are appearing around leaders
            setTimeout(()=>{
                $('.subsubOG1L').css({'transition':'2s', 'border-color':'lime', 'background-color':'#e6fbe6'});
            }, 750)

            // lime arrows are activating
            setTimeout(()=>{
                $('.arrowDashed').css({'transition':'1.15s', 'opacity':'0'})
                $('.arrowDashedLime1').css({'transition':'1s', 'opacity':'1'})

            }, 10)



            setTimeout(()=>map.animate.helpSabotage5(2), 500)

        }

        // lime leader contour
        if(state === 2) {

            $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'});

            // followers are deactivated
            setTimeout(()=>{
                $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'});
                $('.s2ActiveFollower').css({'transition':'1s', 'opacity':'0'});

                        // $('.OG1ficon, .OG1ficonLime').css({'transition':'1s', 'filter':'drop-shadow(0px 0px 0px transparent)'})

            }, 150)

            setTimeout(()=>{
                $('.IGLeftFollower1, .IGLeftFollower2, .IGRightFollower1, .IGRightFollower2').css({'transition':'1s', 'opacity':'1'})
            }, 600)


            // active arrows dissapearing
            setTimeout(()=>{
                $('.arrowDashedLime1').css({'transition':'0.75s', 'opacity':'0'})
                // $('.arrowDashed').css({'transition':'0.75s', 'opacity':'0.5'})
                // PLACE HERE FOLLOWERS ACTIVATING IN IG

            }, 750)

            // active arrows dissapearing and FIGHT ICON APPEARS
            setTimeout(()=>{
                // $('.arrowDashedLime1').css({'transition':'1.15s', 'opacity':'0'})

                $('.OG1FightIconLime').css({'transition':'1.5s', 'opacity':'1'});

                // PLACE HERE FIGHT ICONS FOR IG CONTEST
                $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'1s', 'opacity':'1'})
            }, 4000)




            setTimeout(()=>map.animate.helpSabotage5(3), 5000)

        }

        if(state === 3) {

            // HAVE THE FIGHT ICONS ROTATION HERE MAKE THE BELOW DELAY LONGER

            setTimeout(()=>{
                $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'2s', 'transform':'rotate3d(3,2,1, 3600deg)'});
            }, 500)

            // // immidiatly connect to the intial state of followers help sabo setup an at the same time make fight icon dissapear
            // setTimeout(()=>{
            //     // $('.OG1GroupSeparator').css({'transition':'0.75s', 'opacity':'1', 'height':'119px'});
            //     $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.75s', 'opacity':'0'});
            //
            //
            //     $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'0.75s', 'opacity':'0'})
            //     // PLACE HERE FOLLOWERS IG ICONS AND FFIGHT ICONS  DISSAPEAR
            //     $('.IGLeftFollower1, .IGLeftFollower2, .IGRightFollower1, .IGRightFollower2').css({'transition':'0.75s', 'opacity':'0'})
            //     $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.75s', 'opacity':'0'});//0.4
            //     $('.subsubOG1L').css({'transition':'0.75s', 'border-color':'transparent', 'background-color':'transparent'});
            //
            //     setTimeout(()=>{
            //         map.animate.helpSabotage4(0)
            //     }, 1000)
            //
            // }, 5000)

        }

    } else {

        $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'1s', 'opacity':'1'})
        $('.IGLeftFollower1, .IGLeftFollower2, .IGRightFollower1, .IGRightFollower2').css({'transition':'1s', 'opacity':'1'})

        $('.OG1GroupSeparator').css({'transition':'0.5s', 'opacity':'0', 'height':'0px'});
        $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'1'});
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'0'})
        $('.s2ActiveFollower').css({'transition':'0.5s', 'opacity':'0'});
        $('.arrowDashed').css({'transition':'0.5s', 'opacity':'0.25'});
        $('.arrowDashedLime1').css({'transition':'0.5s', 'opacity':'0'});
        $('.subsubOG1L').css({'transition':'0.5s', 'border-color':'lime', 'background-color':'#e6fbe6'});
        $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});
        $('.middleStep2Text, .leftSideStep1Text, .rightSideStep1Text').css({'transition':'1.15s', 'opacity':'0', 'filter':'grayscale(0)', 'box-shadow':'0px 4px 4px 0px black'});

    }

}


/*----------------------------------------------------------*/

map.animateRotateIGsActive = true;
map.animate.rotateIGs = function(state) {

    if(map.animateRotateIGsActive) {

        if(state === 0) {

            $('.IGTopContestWrap').css({'transition':'1.5s', 'opacity':'1'});
            $('.IGBottomContestWrap').css({'transition':'0.5s', 'opacity':'0'});

            setTimeout(()=>{
                map.animate.rotateIGs(1);
            }, 2000)

        }

        if(state === 1) {

            $('.IGTopContestWrap').css({'transition':'0.5s', 'opacity':'0'});
            $('.IGBottomContestWrap').css({'transition':'1.5s', 'opacity':'1'});

            setTimeout(()=>{
                map.animate.rotateIGs(0);
            }, 2000)

        }

    } else {

        $('.IGTopContestWrap').css({'transition':'1s', 'opacity':'1'});
        $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':'1'});

    }


}


map.flowIsActive = true;
map.animate.flow = function(state) {

    if(map.flowIsActive) {

        if(state === -1) {

            map.opacity.section([0.4,0.4,1], 0.5);

            $('.tutoOG1Wrap').css({'transition':'0.75s', 'transform':'scale(1)'});
            $('.tutoIGWrap').css({'transition':'0.75s', 'transform':'scale(1)'});
            setTimeout(()=>{
                $('.tutoOG2Wrap').css({'transition':'0.75s', 'transform':'scale(1)'});
                map.opacity.section([0.4,0.4,0.4], 0.5);
            },300)


            setTimeout(()=>{
                map.animate.flow(0);
            }, 1250)

        }

        if(state === 0) {

            map.opacity.section([1,0.4,0.4], 0.5);

            $('.tutoOG1Wrap').css({'transition':'0.75s', 'transform':'scale(1.05)'});
            $('.tutoIGWrap').css({'transition':'0.75s', 'transform':'scale(1)'});
            $('.tutoOG2Wrap').css({'transition':'0.75s', 'transform':'scale(1)'});

            setTimeout(()=>{
                map.animate.flow(1);
            }, 200)

        }

        if(state === 1) {

            map.opacity.section([1,1,0.4], 0.5);

            $('.tutoIGWrap').css({'transition':'0.75s', 'transform':'scale(1.05)'});
            $('.tutoOG2Wrap').css({'transition':'0.75s', 'transform':'scale(1)'});

            setTimeout(()=>{
                $('.tutoOG1Wrap').css({'transition':'0.75s', 'transform':'scale(1)'});
                // map.opacity.section([0.4,1,0.4], 0.5);
            },500)

            setTimeout(()=>{
                map.animate.flow(2);
            }, 200)

        }

        if(state === 2) {



            $('.tutoOG2Wrap').css({'transition':'0.75s', 'transform':'scale(1.05)'});
            $('.tutoOG1Wrap').css({'transition':'0.75s', 'transform':'scale(1)'});

            setTimeout(()=>{
                map.opacity.section([0.4,0.4,1], 0.5);
            }, 500)

            setTimeout(()=>{
                $('.tutoIGWrap').css({'transition':'0.75s', 'transform':'scale(1)'});

            }, 500)



            setTimeout(()=>{
                map.animate.flow(-1);
            }, 300)

        }

    } else {
        map.opacity.section([1,1,1], 0.5);

        $('.tutoOG1Wrap').css({'transition':'0.5s', 'transform':'scale(1)'});
        $('.tutoIGWrap').css({'transition':'0.5s', 'transform':'scale(1)'});
        $('.tutoOG2Wrap').css({'transition':'0.5s', 'transform':'scale(1)'});

    }

}


/*----------------------------------------------------------------*/

map.animate.roundNumber = document.getElementById('roundCount');
map.animate.roundCount = 1;
map.animate.rotatePause = 50;

//-----ROTATING NETPAYOFFS ON THE MAP----//

map.animate.startRoundNetPayoffs = function(roundCount) {

    map.animate.roundNumber.innerHTML = roundCount;
    // $('.newRound').css({'transition':'0.6s', 'opacity':'1'});
    // $('.newRoundText').css({'transition':'0.6s', 'opacity':'1'});


    if(roundCount === 1) {
        setTimeout(()=>{
            $('.netPayoffPart10').css({'opacity':'1'});
            $('.initialBudgetCircle, .initialBudgetArrow, .initialBudgetText').css({'transition':'0.5s', 'opacity':'1'});
        }, 750)

    }

    if(roundCount === 2) {
        $('.netPayoffPart20').css({'opacity':'1'});
    }

    if(roundCount === 4) {
        map.animate.roundNumber.innerHTML = 3;
        $('.netPayoffPart40').css({'opacity':'1'});
    }

    // map.opacity.main([0,0,0]);
    map.opacity.section([0,0,0]);

}

map.animate.rotateNetPayoffs = function(roundCount, partCount) {

    $('.newRound').css({'opacity':'0'});
    $('.newRoundText').css({'opacity':'0'});

    if(roundCount === 1) {

        if(partCount === 1) {

            // map.opacity.main([1,0,0]);
            $('.og1NetPayoffText1').css({'transition':'0.5s', 'opacity':'1'});
            $('.netPayoffPart11').css({'transition':'0.5s', 'opacity':'1'});

        }

        if(partCount === 2) {

            // map.opacity.main([1,1,0]);
            $('.igNetPayoffText1').css({'transition':'0.5s', 'opacity':'1'});
            $('.netPayoffPart12').css({'transition':'0.5s', 'opacity':'1'});

        }

        if(partCount === 3) {
            // map.opacity.main([1,1,1]);
            $('.og2NetPayoffText1').css({'transition':'0.5s', 'opacity':'1'});
            $('.netPayoffPart13').css({'transition':'0.5s', 'opacity':'1'});

            setTimeout(()=>{
                $('.netPayoffPart14').css({'transition':'0.5s', 'opacity':'1'});
                $('.netPayoffCircle, .netPayoffArrow, .netPayoffText').css({'transition':'0.5s', 'opacity':'1'});
            }, 1000)

        }

    }

    if(roundCount === 2) {


        if(partCount === 1) {

            // map.opacity.main([1,0,0]);
            // $('.og1NetPayoffText1').css({'transition':'0s', 'opacity':'0'});
            $('.og1NetPayoffText2').css({'opacity':'1'});
            $('.netPayoffPart21').css({'opacity':'1'});

        }

        if(partCount === 2) {

            // map.opacity.main([1,1,0]);
            // $('.igNetPayoffText1').css({'transition':'0s', 'opacity':'0'});
            $('.igNetPayoffText2').css({'opacity':'1'});
            $('.netPayoffPart22').css({'opacity':'1'});

        }

        if(partCount === 3) {

            // map.opacity.main([1,1,1]);
            // $('.og2NetPayoffText1').css({'transition':'0s', 'opacity':'0'});
            $('.og2NetPayoffText2').css({'opacity':'1'});
            $('.netPayoffPart23').css({'opacity':'1'});

        }

    }

    if(roundCount === 4) {

        $('.newRoundText2').css({'opacity':'0'});

        if(partCount === 1) {

            map.opacity.main([1,0,0]);
            $('.og1NetPayoffText2').css({'opacity':'0'});
            $('.og1NetPayoffText4').css({'opacity':'1'});
            $('.netPayoffPart41').css({'opacity':'1'});

        }

        if(partCount === 2) {

            map.opacity.main([1,1,0]);
            $('.igNetPayoffText2').css({'opacity':'0'});
            $('.igNetPayoffText4').css({'opacity':'1'});
            $('.netPayoffPart42').css({'opacity':'1'});

        }

        if(partCount === 3) {
            map.opacity.main([1,1,1]);
            $('.og2NetPayoffText2').css({'opacity':'0'});
            $('.og2NetPayoffText4').css({'opacity':'1'});
            $('.netPayoffPart43').css({'opacity':'1'});

        }

    }
}

map.animate.showPayoffs = function() {

    var delay = 2000;
    map.opacity.section([0,0,0]);

    map.animate.startRoundNetPayoffs(1);

    setTimeout(()=>map.animate.rotateNetPayoffs(1, 1), delay);
    setTimeout(()=>map.animate.rotateNetPayoffs(1, 2), 2 * delay);
    setTimeout(()=>map.animate.rotateNetPayoffs(1, 3), 3 * delay);
    setTimeout(()=>map.animate.startRoundNetPayoffs(2), 5 * delay);
    setTimeout(()=>map.animate.rotateNetPayoffs(2, 1), 6 * delay);
    setTimeout(()=>map.animate.rotateNetPayoffs(2, 2), 7 * delay);
    setTimeout(()=>map.animate.rotateNetPayoffs(2, 3), 8 * delay);
    setTimeout(()=>{
        $('.newRoundText').css({'opacity':'0'});
        $('.newRound').css({'opacity':'1'});
        $('.newRoundText2').css({'opacity':'1'});
        $('.netPayoffPart30').css({'opacity':'1'});
    }, 10 * delay);
    setTimeout(()=>{
        $('.newRoundText2').css({'opacity':'0'});
        map.animate.startRoundNetPayoffs(4)
    }, 12 * delay);
    setTimeout(()=>map.animate.rotateNetPayoffs(4, 1), 13 * delay);
    setTimeout(()=>map.animate.rotateNetPayoffs(4, 2), 14 * delay);
    setTimeout(()=>map.animate.rotateNetPayoffs(4, 3), 15 * delay);

}

map.animate.showPayoffs2 = function(myDelay) {


    $('.netPayoffPart10, .initialBudgetCircle, .initialBudgetText, .initialBudgetArrow').css({'transition':'0.5s', 'opacity':'1'})



    var delay;

    myDelay = myDelay === undefined ? 1500 : myDelay;

    delay = myDelay;


    setTimeout(()=>{
        setTimeout(()=>map.animate.rotateNetPayoffs(1, 1), delay);
        setTimeout(()=> {
            map.animate.rotateNetPayoffs(1, 2);
            $('.IGBottomContestWrap').css({'transition':'0.3s', 'opacity':'0'})
        }, 2 * delay);
        setTimeout(()=>map.animate.rotateNetPayoffs(1, 3), 3 * delay);
        setTimeout(()=>{
            $('.netPayoffPart14').css({'transition':'0.5s', 'opacity':'1'});
            $('.netPayoffCircle, .netPayoffArrow, .netPayoffText').css({'transition':'0.5s', 'opacity':'1'});
        }, 4*delay)
    }, 1250)


    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.5s', 'opacity':'1'});
        map.opacity.main([1,1,1], 0);
    }, 900)


}

map.animate.showPayoffs3 = function(myDelay) {


    var delay;

    myDelay = myDelay === undefined ? 1000 : myDelay;

    delay = myDelay;

    map.animate.startRoundNetPayoffs(2);
    $('.initialBudgetCircle2, .initialBudgetArrow2, .initialBudgetText2').css({'transition':'0.5s', 'opacity':'1'});


    setTimeout(()=>{
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 1), 2 * delay);
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 2), 3 * delay);
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 3), 4 * delay);
    }, 500)

    // setTimeout(()=>$('.netPayoffPart30').css({'opacity':'1'}), 7 * delay);

}



// NEW NET PAYOFF TEXT MAP ANIMATIONS

map.animate.intitiateNetPayoffAnimation = function() {

    $('.og1MoneyBagWrap1, .og1MoneyBagWrap2, .igTopMoneyBagWrap1, .igBottomMoneyBagWrap1, .og2MoneyBagWrap1, .og2MoneyBagWrap2').css({'transition':'0.3s', 'opacity':'0'});
    map.opacity.section([0,0,0], 0.3)
    $('.thisIsExampleWrap').css({'display':'flex'});

    setTimeout(()=>{
        $('.og1MoneyBagWrap1, .og1MoneyBagWrap2, .igTopMoneyBagWrap1, .igBottomMoneyBagWrap1, .og2MoneyBagWrap1, .og2MoneyBagWrap2').css({'display':'none', 'z-index':'-2'});
        $('.section1Text, .section3Text').css({'transition':'1.5s', 'color':'red'});
        $('.sexplain').css({'margin-left':'-175px'});
        $('.netPayoffResultsTutorial').css({'transition':'0s', 'opacity':'0', 'position':'absolute', 'display':'flex', 'margin-top':'130px', 'margin-left':'983px', 'margin-bottom':'-230px', 'width':'536px'})
        $('.thisIsExampleWrap').css({'opacity':'1'});
    }, 300)

}


map.animate.showRound1 = function() {

    map.animate.startRoundNetPayoffs(1);
    setTimeout(()=>{
        $('.netPayoffResultsTutorial').css({'transition':'0.5s', 'opacity':'1'});
    }, 1000)


    setTimeout(()=>{
        setTimeout(()=>map.animate.rotateNetPayoffs(1, 1), 0);
        setTimeout(()=>map.animate.rotateNetPayoffs(1, 2), 2000);
        setTimeout(()=>map.animate.rotateNetPayoffs(1, 3), 4000);
    }, 3000)

}

map.animate.showRound2 = function() {

    // make circles and arrows dissapear
    $('.netPayoffCircle, .netPayoffArrow, .netPayoffText').css({'transition':'0.1s', 'opacity':'0'});
    $('.initialBudgetCircle, .initialBudgetArrow, .initialBudgetText').css({'transition':'0.1s', 'opacity':'0'});

    setTimeout(()=>{
        // minimize round 1 results
        $('.netPayoffResultsTutorialText1').css({'transition':'0.5s', 'transform-origin':'left', 'transform':'scale(0.7)', 'opacity':'0.7', 'margin-top':'-230px', 'margin-bottom':'31px'});
    }, 100)

    setTimeout(()=>{
        // reposition the circle and arrows for the next show
        $('.netPayoffResultsTutorialText2').css({'transition':'0.1s', 'margin-top':'-26px', 'margin-bottom':'60px'});
        $('.initialBudgetCircle2').css({'transition':'0s', 'margin-top':'-70px'});
        $('.initialBudgetArrow2').css({'transition':'0s', 'margin-top':'8px'});
        $('.initialBudgetText2').css({'transition':'0s', 'margin-top':'-99px'});
        // reposition netpayoff circle and arrows for the next show
        $('.netPayoffCircle').css({'transition':'0s', 'margin-top':'-69px', 'margin-left':'340px'});
        $('.netPayoffArrow').css({'transition':'0s', 'margin-top':'-73px', 'transform':'rotate(-118deg)'});
        $('.netPayoffText').css({'transition':'0s', 'margin-top':'-118px', 'margin-left':'451px'});
        // move the ig text so that it appears the data is from gray group
        $('.igNetPayoffText1').css({'opacity':'0'});
        $('.igNetPayoffText2').css({'margin-top':'125px', 'margin-left':'52px'});
    }, 750)

    setTimeout(()=>{
        map.animate.startRoundNetPayoffs(2);
        $('.initialBudgetCircle2, .initialBudgetArrow2, .initialBudgetText2').css({'transition':'0.5s', 'opacity':'1'});
    }, 1000)

    setTimeout(()=>{
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 1), 0);
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 2), 2000);
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 3), 4000);
    }, 3000)

    setTimeout(()=>{
        $('.netPayoffCircle, .netPayoffArrow, .netPayoffText').css({'transition':'0.3s', 'opacity':'1'});
    }, 7000)


}

map.animate.showRound3 = function() {

    // make round 1 results dissapear
    $('.netPayoffResultsTutorialText1').css({'transition':'0.1s', 'opacity':'0'});
    // make circles and arrows dissapear
    $('.initialBudgetCircle2, .initialBudgetArrow2, .initialBudgetText2').css({'transition':'0.1s', 'opacity':'0'});
    $('.netPayoffCircle, .netPayoffArrow, .netPayoffText').css({'transition':'0.1s', 'opacity':'0'});

    setTimeout(()=>{
        // minimize round 2 results
        $('.netPayoffResultsTutorialText2').css({'transition':'0.5s', 'transform-origin':'left', 'transform':'scale(0.6)', 'opacity':'0.7', 'margin-top':'-260px', 'margin-bottom':'-82px'});
    }, 100)

    setTimeout(()=>{
        map.animate.startRoundNetPayoffs(4);
    }, 1500)

    setTimeout(()=>{
        setTimeout(()=>map.animate.rotateNetPayoffs(4, 1), 0);
        setTimeout(()=>map.animate.rotateNetPayoffs(4, 2), 1000);
        setTimeout(()=>map.animate.rotateNetPayoffs(4, 3), 2000);
    }, 2500)

}
