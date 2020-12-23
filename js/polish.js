var map = {

    display: {},
    show: {},
    hide: {},
    opacity: {},
    active: {},
    reset: {},
    animate: {},
    wheel: {},
    set: {},
    wiggle: {},
    me: {},
    treatment: {},
    globalVariable: {},

};

var data = {};

//--------- GLOBAL VARIABLES TO RULE IT ALL ------//

map.globalVariable.ourSideIsHetero = undefined;
map.globalVariable.theirSideIsHetero = undefined;

map.globalVariable.playerIndex = undefined; //-1,0,1

map.winnerFollowerIndex = 2;
map.winnerLeaderIndex = 1;



//--------------------------//
// fake data generation to be updated by showresult of wheel

//this is not a fake data
map.og1_topWon = undefined;

//-------------------------//
//-------------------------//
//-------------------------//

map.showMap = function() {

    $('.sexplain').css({'transition-delay':'0.5', 'opacity': '1'});

}

map.hideMap = function() {

    $('.sexplain').css({'transition-delay':'0.5', 'opacity': ''});

}


//------SPACE METHODS------//
//------SPACE METHODS------//
//------SPACE METHODS------//

map.openSpace = function() {

    $('.arrowsToOG1IconResults').css({'transition':'0.5s', 'opacity': '1', 'margin-right':'-12px', 'margin-left':'8px'});

}

map.closeSpace = function() {

    $('.arrowsToOG1IconResults').css({'transition':'0.5s', 'opacity': '1', 'margin-right':'-120px', 'margin-left':'8px'});

}

//------ARROW OPACITY METHODS------//
//------ARROW OPACITY METHODS------//
//------ARROW OPACITY METHODS------//

// [arrows to result icons, arrows from result icons, arrows from ig boxes]
map.opacity.mainArrowSections = function(optArray) {

    $('.arrowsToOG1IconResults').css({'transition':'0.5s', 'opacity' : optArray[0].toString()});
    // arrows from the results either to ig or to og2 depending on the outcome
    $('.arrowsFromIconResultsToIG').css({'transition':'0.5s', 'opacity' : optArray[1].toString()});
    $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : optArray[2].toString()});

}

// [arrow2TopIcon, arrow2BottomIcon]
map.opacity.arrowsToResultIcons = function(optArray) {

    $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity': optArray[0].toString()});
    $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity': optArray[1].toString()});

}

// [arrow2TopIG, arrow2BottomIG], [arrowfromTopIconToOG2, arrowfromBottomIconToOG2]
map.opacity.arrowsFromResultIcons = function(optArrayShort, optArrayLong) {

    $('.arrowsFromIconResultsToIG').css({'opacity':'1'});

    // short arrows to IG
    if(optArrayShort[0] != -1) {
        $('.arrowTopIconToIG').css({'transition':'0.5s', 'opacity' : optArrayShort[0].toString()});
    }
    if(optArrayShort[1] != -1) {
        $('.arrowBottomIconToIG').css({'transition':'0.5s', 'opacity' : optArrayShort[1].toString()});
    }


    // long arrows to OG2
    if(optArrayLong[0] != -1) {
        $('.longArrowTopIconToOG2').css({'transition':'0.5s', 'opacity' : optArrayLong[0].toString()});
    }
    if(optArrayLong[1] != -1) {
        $('.longArrowBottomIconToOG2').css({'transition':'0.5s', 'opacity' : optArrayLong[1].toString()});
    }

}

// [arrowfromTopIG, arrowfromBottomIG]
map.opacity.arrowsFromIG = function(optArray) {

    $('.arrowTopIGtoOG2').css({'transition':'0.5s', 'opacity' : optArray[0].toString()});
    $('.arrowBottomIGtoOG2').css({'transition':'0.5s', 'opacity' : optArray[1].toString()});

}

// [OG1toIGsArrows, IGstoOG2Arrows]
map.opacity.coverArrows= function(optArray) {

    $('.coverArrowOG1toIG').css({'transition':'0.5s', 'opacity': optArray[0].toString()});
    map.opacity.mainArrowSections([1,0,1]);
    map.opacity.arrowsToResultIcons([0,0]);
    $('.arrowsToOG2').css({'transition':'0.5s', 'opacity': optArray[1].toString()});

}

//------OPACITY METHODS------//
//------OPACITY METHODS------//
//------OPACITY METHODS------//

// [OG1, IG, OG2]
map.opacity.main = function(optArray) {

    $('.OG1').css({'transition':'0.5s', 'opacity' : optArray[0].toString()});
    $('.IG').css({'transition':'0.5s', 'opacity' : optArray[1].toString()});
    $('.OG2').css({'transition':'0.5s', 'opacity' :  optArray[2].toString()});

}

map.opacity.section = function(optArray) {

    $('.section1').css({'transition':'0.5s', 'opacity' : optArray[0].toString()});
    $('.section2').css({'transition':'0.5s', 'opacity' : optArray[1].toString()});
    $('.section3').css({'transition':'0.5s', 'opacity' :  optArray[2].toString()});


}

map.opacity.sectionTitles = function(optArray) {

    $('.OG1Title').css({'transition':'0.5s', 'opacity' : optArray[0].toString()});
    $('.IGTitleTop, .IGTitleBottom').css({'transition':'0.5s', 'opacity' : optArray[1].toString()});
    $('.OG2Title').css({'transition':'0.5s', 'opacity' : optArray[2].toString()});

}

// cover for og1, og2, ig
map.showCoverFor = function(contest, opt) {

    var k = opt != undefined ? opt : 1;

    if(contest === 'og1') {

        $('.IG1Description').css({'transition':'0.5s', 'opacity': k});

    }

    if(contest === 'og2') {

        $('.IG2Description').css({'transition':'0.5s', 'opacity': k});

    }

    if(contest === 'ig') {

        $('.IGCoverTop, .IGCoverBottom').css({'transition':'0.5s', 'opacity': k});

    }


}

// [OG1, IG, OG2]
map.opacity.cover = function(optArray) {

    map.showCoverFor('og1', optArray[0].toString());
    map.showCoverFor('ig', optArray[1].toString());
    map.showCoverFor('og2', optArray[2].toString());

}

// inside of og1, og2, ig and results icons for og1
map.insideOf = function(contest, myOpt) {


    var opt = myOpt.toString();


    if(contest === 'og1') {

        $('.og1all').css({'transition':'0.5s', 'opacity': opt});

    }

    // note there is no outside of results just icons and arrows
    if(contest === 'results') {

        // hide icon results
        $('.wonLostBoxes').css({'transition':'0.5s', 'opacity': opt});

        // arrows to icons
        $('.arrowsFromIconResultsToIG, .arrowToTopIconResults, .arrowToBottomIconResults').css({'transition':'0.5s', 'opacity': opt});

        // arrows to IG and arrows to OG2
        $('.arrowsFromIconResultsToIG').css({'transition':'0.5s', 'opacity': opt});

    }

    if(contest === 'ig') {

        // partial hiding: only hides the crown and FOLLOWERS text
        $('.igalltop, .igallbottom').css({'transition':'0.5s', 'opacity': opt});

    }

    if(contest === 'og2') {

        $('.og2all').css({'transition':'0.5s', 'opacity': opt});

    }

}

// [OG1, IG, OG2]
map.opacity.inside = function(optArray) {

    if(optArray[0] != -1) {
        map.insideOf('og1', optArray[0].toString());
    }

    if(optArray[1] != -1) {
        map.insideOf('ig', optArray[1].toString());
    }

    if(optArray[2] != -1) {
        map.insideOf('og2', optArray[2].toString());
    }

}

map.opacity.og1Leaders = function(o) {

    $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity': o.toString()});
    $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity': o.toString()});
    $('.OG1FightIcon').css({'transition':'1s', 'opacity': o.toString()});

}

// IconsWrap, [topIcon, bottomIcon]
map.opacity.resultIcons = function(mainOpt, optArray) {

    $('.wonLostBoxes').css({'transition':'0.5s', 'opacity': mainOpt.toString()});
    $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity': optArray[0].toString()});
    $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity': optArray[1].toString()});

}

map.opacity.shadowOG2 = function(on) {

    if(on) {
        $('.OG2IconsWrap').css({'filter':'brightness(0)'});
    } else {
        $('.OG2IconsWrap').css({'filter':'brightness(1)'});
    }


}

//---- CIRCLE METHODS ----//

map.opacity.circles = function(contest, player, opt) {

    var o = opt.toString();

    if(contest === 'og1') {

        if(player === 'l1') {
            $('.OG1LeaderCircleLeft').css({'opacity': o});
        }
        if(player === 'f1') {
            $('.OG1f1CircleLeft').css({'opacity': o});
        }
        if(player === 'f2') {
            $('.OG1f2CircleLeft').css({'opacity': o});
        }


        if(player === 'ol1') {
            $('.OG1LeaderCircleRight').css({'opacity': o});
        }
        if(player === 'of1') {
            $('.OG1f1CircleRight').css({'opacity': o});
        }
        if(player === 'of2') {
            $('.OG1f2CircleRight').css({'opacity': o});
        }

    }

    if(contest === 'result') {
        if(player === 'l1') {
            $('.OG1TopLeaderResultIconsCircle').css({'opacity': o});
        }
        if(player === 'l2') {
            $('.OG1BottomLeaderResultIconsCircle').css({'opacity': o});
        }
    }


    if(contest === 'iga') {
        if(player === 'f1') {
            $('.IGTopLeftCircle').css({'opacity': o});
        }
        if(player === 'f2') {
            $('.IGTopRightCircle').css({'opacity': o});
        }
    }


    if(contest === 'igb') {
        if(player === 'f1') {
            $('.IGBottomLeftCircle').css({'opacity': o});
        }
        if(player === 'f2') {
            $('.IGBottomRightCircle').css({'opacity': o});
        }
    }


    if(contest === 'og2') {

        if(player === 'l1') {
            $('.OG2LeaderCircleLeft').css({'opacity': o});
        }
        if(player === 'f1') {
            $('.OG2f1CircleLeft').css({'opacity': o});
        }
        if(player === 'f2') {
            $('.OG2f2CircleLeft').css({'opacity': o});
        }


        if(player === 'ol1') {
            $('.OG2LeaderCircleRight').css({'opacity': o});
        }
        if(player === 'of1') {
            $('.OG2f1CircleRight').css({'opacity': o});
        }
        if(player === 'of2') {
            $('.OG2f2CircleRight').css({'opacity': o});
        }

    }

}

map.opacity.pastCircles = function(contest, player, opt) {

    var o = 'grayscale(' + opt + ')';
    // var o2 = opt.toString();
    var o2 = 1;

    if(contest === 'og1') {

        if(player === 'l1') {
            $('.OG1LeaderCircleLeft').css({'filter': o, 'opacity':o2});
        }
        if(player === 'f1') {
            $('.OG1f1CircleLeft').css({'filter': o, 'opacity':o2});
        }
        if(player === 'f2') {
            $('.OG1f2CircleLeft').css({'filter': o, 'opacity':o2});
        }

    }

    if(contest === 'result') {

        if(player === 'l1') {
            $('.OG1TopLeaderResultIconsCircle').css({'filter': o, 'opacity':o2});
        }

    }


    if(contest === 'iga') {
        if(player === 'f1') {
            $('.IGTopLeftCircle').css({'filter': o, 'opacity':o2});
        }
        if(player === 'f2') {
            $('.IGTopRightCircle').css({'filter': o, 'opacity':o2});
        }
    }


    if(contest === 'og2') {

        if(player === 'l1') {
            $('.OG2LeaderCircleLeft').css({'filter': o, 'opacity':o2});
        }
        if(player === 'f1') {
            $('.OG2f1CircleLeft').css({'filter': o, 'opacity':o2});
        }
        if(player === 'f2') {
            $('.OG2f2CircleLeft').css({'filter': o, 'opacity':o2});
        }

    }

}


//---- CIRCLING ME / PAST AND PRESENT -----//

map.me.reset = function() {

    map.opacity.circles('og1', 'l1', 0);
    map.opacity.circles('og1', 'f1', 0);
    map.opacity.circles('og1', 'f2', 0);
    map.opacity.circles('iga', 'f1', 0);
    map.opacity.circles('iga', 'f2', 0);
    map.opacity.circles('og2', 'l1', 0);
    map.opacity.circles('og2', 'f1', 0);
    map.opacity.circles('og2', 'f2', 0);

}

map.me.old_reset = function() {

    map.opacity.pastCircles('og1', 'l1', 0);
    map.opacity.pastCircles('og1', 'f1', 0);
    map.opacity.pastCircles('og1', 'f2', 0);
    map.opacity.pastCircles('iga', 'f1', 0);
    map.opacity.pastCircles('iga', 'f2', 0);
    map.opacity.pastCircles('og2', 'l1', 0);
    map.opacity.pastCircles('og2', 'f1', 0);
    map.opacity.pastCircles('og2', 'f2', 0);

}

map.me.og1 = function() {

    if(map.globalVariable.playerIndex === -1) {
        map.opacity.circles('og1', 'l1', 1);
    }

    if(map.globalVariable.playerIndex === 0) {
        map.opacity.circles('og1', 'f1', 1);
    }

    if(map.globalVariable.playerIndex === 1) {
        map.opacity.circles('og1', 'f2', 1);
    }

}

map.me.old_og1 = function() {

    if(map.globalVariable.playerIndex === -1) {
        map.opacity.pastCircles('og1', 'l1', 0.7);
    }

    if(map.globalVariable.playerIndex === 0) {
        map.opacity.pastCircles('og1', 'f1', 0.7);
    }

    if(map.globalVariable.playerIndex === 1) {
        map.opacity.pastCircles('og1', 'f2', 0.7);
    }

}

map.me.ig = function() {

    map.me.old_og1();

    if(map.globalVariable.playerIndex === -1) {
        map.opacity.circles('result', 'l1', 1);
    }

    if(map.globalVariable.playerIndex === 0) {
        map.opacity.circles('iga', 'f1', 1);
    }

    if(map.globalVariable.playerIndex === 1) {
        map.opacity.circles('iga', 'f2', 1);
    }
}

map.me.old_ig = function() {

    map.me.old_og1();

    if(map.globalVariable.playerIndex === -1) {
        map.opacity.pastCircles('result', 'l1', 0.7);
    }

    if(map.globalVariable.playerIndex === 0) {
        map.opacity.pastCircles('iga', 'f1', 0.7);
    }

    if(map.globalVariable.playerIndex === 1) {
        map.opacity.pastCircles('iga', 'f2', 0.7);
    }

}

map.me.og2 = function() {

    map.me.old_ig();

    if(map.winnerLeaderIndex === 1) {

        if(map.globalVariable.playerIndex === -1) {
            map.opacity.circles('og2', 'l1', 1);
        }

        if(map.globalVariable.playerIndex === 0) {
            map.opacity.circles('og2', 'f1', 1);
        }

        if(map.globalVariable.playerIndex === 1) {
            map.opacity.circles('og2', 'f2', 1);
        }

    }

    if(map.winnerLeaderIndex === 2) {

        if(map.winnerFollowerIndex === 1) {

            if(map.globalVariable.playerIndex === -1) {
                map.opacity.circles('og2', 'f1', 1);
            }

            if(map.globalVariable.playerIndex === 0) {
                map.opacity.circles('og2', 'l1', 1);
            }

            if(map.globalVariable.playerIndex === 1) {
                map.opacity.circles('og2', 'f2', 1);
            }

        }

        if(map.winnerFollowerIndex === 2) {

            if(map.globalVariable.playerIndex === -1) {
                map.opacity.circles('og2', 'f2', 1);
            }

            if(map.globalVariable.playerIndex === 0) {
                map.opacity.circles('og2', 'f1', 1);
            }

            if(map.globalVariable.playerIndex === 1) {
                map.opacity.circles('og2', 'l1', 1);
            }

        }

    }

}

map.me.old_og2 = function() {

    if(map.winnerLeaderIndex === 1) {

        if(map.globalVariable.playerIndex === -1) {
            map.opacity.pastCircles('og2', 'l1', 0.7);
        }

        if(map.globalVariable.playerIndex === 0) {
            map.opacity.pastCircles('og2', 'f1', 0.7);
        }

        if(map.globalVariable.playerIndex === 1) {
            map.opacity.pastCircles('og2', 'f2', 0.7);
        }

    }

    if(map.winnerLeaderIndex === 2) {

        if(map.winnerFollowerIndex === 1) {

            if(map.globalVariable.playerIndex === -1) {
                map.opacity.pastCircles('og2', 'f1', 0.7);
            }

            if(map.globalVariable.playerIndex === 0) {
                map.opacity.pastCircles('og2', 'l1', 0.7);
            }

            if(map.globalVariable.playerIndex === 1) {
                map.opacity.pastCircles('og2', 'f2', 0.7);
            }

        }

        if(map.winnerFollowerIndex === 2) {

            if(map.globalVariable.playerIndex === -1) {
                map.opacity.pastCircles('og2', 'f2', 0.7);
            }

            if(map.globalVariable.playerIndex === 0) {
                map.opacity.pastCircles('og2', 'f1', 0.7);
            }

            if(map.globalVariable.playerIndex === 1) {
                map.opacity.pastCircles('og2', 'l1', 0.7);
            }

        }

    }

}


//-------- ICON SETUP BASED ON TREATMENT -----//

map.treatment = function() {

    $('.ourSideHomo, .theirSideHomo').css({'display':'flex'})
    $('.ourSideHetero, .theirSideHetero').css({'display':'none'})

    if(map.globalVariable.ourSideIsHetero) {
        $('.ourSideHomo').css({'display':'none'});
        $('.ourSideHetero').css({'display':'flex'});
    }

    if(map.globalVariable.theirSideIsHetero) {
        $('.theirSideHomo').css({'display':'none'});
        $('.theirSideHetero').css({'display':'flex'});
    }

}


//-------WIGGLE YOU ARE HERE METHODS-------//

map.wiggle.active = true;

// map.opacity.circles('og1', 'f1', 1);
// map.wiggle.og1_f1(0);
map.wiggle.og1_f1 = function(state) {

    $('.OG1f1YAH, .OG1f1YAHT').css({'transition':'1s', 'opacity':'1'})

    if(map.wiggle.active) {

        if(state === 0) {
            $('.OG1f1YAHT').css({'transform':'rotateZ(1deg)'});
            $('.OG1f1YAH').css({'margin-top':'-67px', 'margin-left':'-17px'});
            setTimeout(()=>map.wiggle.og1_f1(1), 750);
        }
        if(state === 1) {
            $('.OG1f1YAHT').css({'transform':'rotateZ(-1deg)'});
            $('.OG1f1YAH').css({'margin-top':'-58px', 'margin-left':'-17px'});
            setTimeout(()=>map.wiggle.og1_f1(0), 750);
        }

    } else {
        $('.OG1f1YAH, .OG1f1YAHT').css({'transition':'1s', 'opacity':'0'})
    }

}

// map.opacity.circles('og1', 'f2', 1);
// map.wiggle.og1_f2(0);
map.wiggle.og1_f2 = function(state) {

    $('.OG1f2YAH, .OG1f2YAHT').css({'transition':'1s', 'opacity':'1'})

    if(map.wiggle.active) {

        if(state === 0) {
            $('.OG1f2YAHT').css({'transform':'rotateZ(-1deg)'});
            $('.OG1f2YAH').css({'margin-top':'26px', 'margin-left':'33px'});
            setTimeout(()=>map.wiggle.og1_f2(1), 750);
        }
        if(state === 1) {
            $('.OG1f2YAHT').css({'transform':'rotateZ(1deg)'});
            $('.OG1f2YAH').css({'margin-top':'21px', 'margin-left':'28px'});
            setTimeout(()=>map.wiggle.og1_f2(0), 750);
        }

    } else {
        $('.OG1f2YAH, .OG1f2YAHT').css({'transition':'1s', 'opacity':'0'})
    }

}


// map.opacity.circles('og1', 'l2', 1);
// map.wiggle.og1_l1(0);
map.wiggle.og1_l1 = function(state) {

    $('.OG1l1YAH, .OG1l1YAHT').css({'transition':'1s', 'opacity':'1'})

    if(map.wiggle.active) {

        if(state === 0) {
            $('.OG1l1YAHT').css({'transform':'rotateZ(-1deg)'});
            $('.OG1l1YAH').css({'margin-top':'61px', 'margin-left':'0px'});
            setTimeout(()=>map.wiggle.og1_l1(1), 750);
        }
        if(state === 1) {
            $('.OG1l1YAHT').css({'transform':'rotateZ(1deg)'});
            $('.OG1l1YAH').css({'margin-top':'56px', 'margin-left':'0px'});
            setTimeout(()=>map.wiggle.og1_l1(0), 750);
        }

    } else {
        $('.OG1l1YAH, .OG1l1YAHT').css({'transition':'1s', 'opacity':'0'})
    }

}


// map.opacity.circles('iga', 'f1', 1);
// map.wiggle.ig_f1(0);
map.wiggle.ig_f1 = function(state) {

    map.openSpace();

    // $('.wonLostBoxes').css({'transition':'0.5s', 'opacity': '0'});
    // $('.OG2').css({'transition':'0.5s', 'opacity' :  '0'});

    $('.IGf1YAH, .IGf1YAHT').css({'transition':'1s', 'opacity':'1'})

    if(map.wiggle.active) {

        if(state === 0) {
            $('.IGf1YAHT').css({'transform':'rotateZ(1deg)'});
            $('.IGf1YAH').css({'margin-top':'-45px', 'margin-left':'-90px'});
            setTimeout(()=>map.wiggle.ig_f1(1), 750);
        }
        if(state === 1) {
            $('.IGf1YAHT').css({'transform':'rotateZ(-1deg)'});
            $('.IGf1YAH').css({'margin-top':'-50px', 'margin-left':'-85px'});
            setTimeout(()=>map.wiggle.ig_f1(0), 750);
        }

    } else {
        $('.IGf1YAH, .IGf1YAHT').css({'transition':'1s', 'opacity':'0'})
    }

}


// map.opacity.circles('iga', 'f2');
// map.wiggle.ig_f2(0);
map.wiggle.ig_f2 = function(state) {

    map.openSpace();

    // $('.wonLostBoxes').css({'transition':'0.5s', 'opacity': '0'});
    // $('.OG2').css({'transition':'0.5s', 'opacity' :  '0'});


    $('.IGf2YAH, .IGf2YAHT').css({'transition':'1s', 'opacity':'1'})

    if(map.wiggle.active) {

        if(state === 0) {
            $('.IGf2YAHT').css({'transform':'rotateZ(1deg)'});
            $('.IGf2YAH').css({'margin-top':'-45px', 'margin-left':'14px'});
            setTimeout(()=>map.wiggle.ig_f2(1), 750);
        }
        if(state === 1) {
            $('.IGf2YAHT').css({'transform':'rotateZ(-1deg)'});
            $('.IGf2YAH').css({'margin-top':'-50px', 'margin-left':'9px'});
            setTimeout(()=>map.wiggle.ig_f2(0), 750);
        }

    } else {
        $('.IGf2YAH, .IGf2YAHT').css({'transition':'1s', 'opacity':'0'})
    }

}


// map.opacity.circles('og1', 'f1');
// map.wiggle.og1_f1(0);
map.wiggle.og2_f1 = function(state) {

    $('.OG2f1YAH, .OG2f1YAHT').css({'transition':'1s', 'opacity':'1'})

    if(map.wiggle.active) {

        if(state === 0) {
            $('.OG2f1YAHT').css({'transform':'rotateZ(1deg)'});
            $('.OG2f1YAH').css({'margin-top':'-67px', 'margin-left':'-17px'});
            setTimeout(()=>map.wiggle.og2_f1(1), 750);
        }
        if(state === 1) {
            $('.OG2f1YAHT').css({'transform':'rotateZ(-1deg)'});
            $('.OG2f1YAH').css({'margin-top':'-58px', 'margin-left':'-17px'});
            setTimeout(()=>map.wiggle.og2_f1(0), 750);
        }

    } else {
        $('.OG2f1YAH, .OG2f1YAHT').css({'transition':'1s', 'opacity':'0'})
    }

}

// map.opacity.circles('og2', 'f2');
// map.wiggle.og2_f2(0);
map.wiggle.og2_f2 = function(state) {

    $('.OG2f2YAH, .OG2f2YAHT').css({'transition':'1s', 'opacity':'1'})

    if(map.wiggle.active) {

        if(state === 0) {
            $('.OG2f2YAHT').css({'transform':'rotateZ(-1deg)'});
            $('.OG2f2YAH').css({'margin-top':'26px', 'margin-left':'33px'});
            setTimeout(()=>map.wiggle.og2_f2(1), 750);
        }
        if(state === 1) {
            $('.OG2f2YAHT').css({'transform':'rotateZ(1deg)'});
            $('.OG2f2YAH').css({'margin-top':'21px', 'margin-left':'28px'});
            setTimeout(()=>map.wiggle.og2_f2(0), 750);
        }

    } else {
        $('.OG2f2YAH, .OG2f2YAHT').css({'transition':'1s', 'opacity':'0'})
    }

}


// map.opacity.circles('og2', 'l2');
// map.wiggle.og2_l1(0);
map.wiggle.og2_l1 = function(state) {

    $('.OG2l1YAH, .OG2l1YAHT').css({'transition':'1s', 'opacity':'1'})

    if(map.wiggle.active) {

        if(state === 0) {
            $('.OG2l1YAHT').css({'transform':'rotateZ(-1deg)'});
            $('.OG2l1YAH').css({'margin-top':'61px', 'margin-left':'0px'});
            setTimeout(()=>map.wiggle.og2_l1(1), 750);
        }
        if(state === 1) {
            $('.OG2l1YAHT').css({'transform':'rotateZ(1deg)'});
            $('.OG2l1YAH').css({'margin-top':'56px', 'margin-left':'0px'});
            setTimeout(()=>map.wiggle.og2_l1(0), 750);
        }

    } else {
        $('.OG2l1YAH, .OG2l1YAHT').css({'transition':'1s', 'opacity':'0'})
    }

}


//--------- YOU ARE HERE METHOD --------//

map.animate.YAH_og1 = function() {

    map.me.og1();

    if(map.globalVariable.playerIndex === -1) {
        map.wiggle.og1_l1(0);
    }

    if(map.globalVariable.playerIndex === 0) {
        map.wiggle.og1_f1(0);
    }

    if(map.globalVariable.playerIndex === 1) {
        map.wiggle.og1_f2(0);
    }

}

map.animate.YAH_ig = function() {

    map.me.ig();

    if(map.globalVariable.playerIndex === 0) {
        map.wiggle.ig_f1(0);
    }

    if(map.globalVariable.playerIndex === 1) {
        map.wiggle.ig_f2(0);
    }

}

map.animate.YAH_og2 = function() {

    map.me.og2();

    if(map.winnerLeaderIndex === 1) {

        if(map.globalVariable.playerIndex === -1) {
            map.wiggle.og2_l1(0);
        }

        if(map.globalVariable.playerIndex === 0) {
            map.wiggle.og2_f1(0);
        }

        if(map.globalVariable.playerIndex === 1) {
            map.wiggle.og2_f2(0);
        }

    }

    if(map.winnerLeaderIndex === 2) {

        if(map.winnerFollowerIndex === 1) {

            if(map.globalVariable.playerIndex === -1) {
                map.wiggle.og2_f1(0);
            }

            if(map.globalVariable.playerIndex === 0) {
                map.wiggle.og2_l1(0);
            }

            if(map.globalVariable.playerIndex === 1) {
                map.wiggle.og2_f2(0);
            }

        }

        if(map.winnerFollowerIndex === 2) {

            if(map.globalVariable.playerIndex === -1) {
                map.wiggle.og2_f2(0);
            }

            if(map.globalVariable.playerIndex === 0) {
                map.wiggle.og2_f1(0);
            }

            if(map.globalVariable.playerIndex === 1) {
                map.wiggle.og2_l1(0);
            }

        }

    }
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

    map.closeSpace();

    $('.wonLostBoxes').css({'transition':'0.5s', 'opacity': '1'});
    $('.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0'});

    map.og1_topWon = undefined;
    $('.topLeaderWon, .bottomLeaderLost').css({'transition':'0s', 'opacity':'0'});
    $('.topLeaderLost, .bottomLeaderWon').css({'transition':'0s', 'opacity':'0'});

    $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'1'});

    $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'1'});
    $('.OG1FightIcon').css({'transition':'1s', 'opacity':'0'});

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

//------SHOW ACTIVE STAGE METHODS-------//
//------SHOW ACTIVE STAGE METHODS-------//
//------SHOW ACTIVE STAGE METHODS-------//


// This serves the same purpose as the below methods but map.active.ig provide selecting top or bottom
map.active.main = function(logicArray) {

    if(1 === logicArray[0]) {

        $('.OG1').css({'transition':'0.5s','border-color': 'lime', 'border-width': '8px'});

    }

    if(0 === logicArray[0]) {

        $('.OG1').css({'transition':'0.5s','border-color': 'black', 'border-width': '4px'});

    }

    if(1 === logicArray[1]) {

        $('.IGTopContestWrap, .IGBottomContestWrap').css({'transition':'0.5s','border-color': 'lime', 'border-width': '8px'});

    }

    if(0 === logicArray[1]) {

        $('.IGTopContestWrap, .IGBottomContestWrap').css({'transition':'0.5s','border-color': 'black', 'border-width': '4px'});

    }

    if(1 === logicArray[2]) {

        $('.OG2').css({'transition':'0.5s','border-color': 'lime', 'border-width': '8px'});

    }

    if(0 === logicArray[2]) {

        $('.OG2').css({'transition':'0.5s','border-color': 'black', 'border-width': '4px'});

    }

}

// redundant method but nice name so keep it
map.active.og1 = function(on) {

    if(on) {

        $('.OG1').css({'transition':'0.5s','border-color': 'lime', 'border-width': '6px'});

    } else {

        $('.OG1').css({'transition':'0.5s','border-color': 'black', 'border-width': '4px'});

    }

}

// ACTIVE IG
// fight icons are lime
// crowns are visible and black
map.active.ig = function(logicArray) {

    if(logicArray[0] === 1) {
        $('.IGTopContestWrap').css({'transition':'0.5s','border-color':'lime', 'border-width':'6px'});
    }

    if(logicArray[0] === 0) {
        $('.IGTopContestWrap').css({'transition':'0.5s','border-color':'black', 'border-width':'4px'});
    }

    if(logicArray[1] === 1) {
        $('.IGBottomContestWrap').css({'transition':'0.5s','border-color':'lime', 'border-width':'6px'});
    }

    if(logicArray[1] === 0) {
        $('.IGBottomContestWrap').css({'transition':'0.5s','border-color':'black', 'border-width':'4px'});
    }

}


//----- MAIN DISPLAY METHODS -----//
//----- MAIN DISPLAY METHODS -----//
//----- MAIN DISPLAY METHODS -----//

map.show.sections = function() {

    map.closeSpace();
    map.opacity.arrowsToResultIcons([0,0]);
    map.opacity.arrowsFromResultIcons([0,0], [0,0]);
    map.opacity.resultIcons(0, [0,0]);
    map.opacity.mainArrowSections([0,0,0]);
    map.opacity.coverArrows([0,0]);
    map.opacity.inside([0,0,0]);
    map.opacity.cover([0,0,0]);


    map.opacity.main([1,1,1]);
    map.opacity.section([1,1,1]);
    map.opacity.sectionTitles([0,0,0]);

}

map.show.overview = function(showIGIcons) {

    map.closeSpace();
    map.opacity.arrowsToResultIcons([0,0]);
    map.opacity.arrowsFromResultIcons([0,0], [0,0]);
    map.opacity.resultIcons(0, [0,0]);
    map.opacity.mainArrowSections([1,0,1]);
    map.opacity.coverArrows([1,1]);
    map.opacity.main([1,1,1]);
    map.opacity.inside([0,0,0]);
    map.opacity.cover([1,1,1]);

    map.opacity.section([0.1,0.1,0.1]);
    map.opacity.sectionTitles([1,1,1]);

    if(showIGIcons) {
        map.opacity.cover([1,0,1]);
        map.opacity.inside([0,1,0]);
    }

}

// shows og1 with icons makes the other secions opaque
// does not show the inside of the other sections
map.show.og1 = function() {

    // arrows
    map.opacity.arrowsToResultIcons([0,0]);
    map.opacity.arrowsFromResultIcons([0,0], [0,0]);
    map.opacity.mainArrowSections([1,0,1]);
    map.opacity.coverArrows([0.4,0.4]);

    // Result Icons
    map.opacity.resultIcons(0, [0,0]);

    // general opacity of sections
    map.opacity.main([1,0.4,0.4]);
    map.opacity.cover([0,0.5,0.5]);
    map.opacity.section([0.05,0.1,0.1]);

    // specific opacity of cover and inside of each section
    map.opacity.inside([1,0,0]);
    map.opacity.cover([0,1,1]);

}


//------- ICON SORTING BASED ON THE RESULTS ------//

map.set.OG1ResultIcons = function() {

    var winnerLeader = map.winnerLeaderIndex === 1 ? 'top' : 'bottom';

    if(winnerLeader === 'top') {
        $('.topLeaderWon, .bottomLeaderLost').css({'transition':'0.3s', 'opacity':'1'});
        $('.topLeaderLost, .bottomLeaderWon').css({'transition':'0s', 'opacity':'0'});
    }

    if(winnerLeader === 'bottom') {
        $('.topLeaderLost, .bottomLeaderWon').css({'transition':'0.3s', 'opacity':'1'});
        $('.topLeaderWon, .bottomLeaderLost').css({'transition':'0s', 'opacity':'0'});
    }

}

map.set.OG2ResultingIcons = function() {

    var winnerLeader = map.winnerLeaderIndex === 1 ? 'left' : 'right';
    var winnerFollower = map.winnerFollowerIndex === 1 ? 'left' :'right';

    // left leader won so it continues as the leader in og2
    if(winnerLeader === 'left') {

        // left group's followers continue as followers
        $('.f1NewRole, .f2NewRole').css({'display':'none'});
        $('.f1SameRole, .f2SameRole').css({'display':'flex'});

        // left group's leader continue as leader
        $('.l1NewRolef1, .l1NewRolef2').css({'opacity':'0'});
        $('.l1SameRole').css({'opacity':'1'});

        // right group's leader is not the leader anymore
        $('.ol1SameRole').css({'opacity':'0'});

        if(winnerFollower === 'left') {
            // new leader is the left follower
            $('.ol1NewRoleof1').css({'opacity':'1'});
            $('.ol1NewRoleof2').css({'opacity':'0'});

            //lost leader replaces the winner follower's left follower (of1) place in the group
            $('.of1NewRole, .of2SameRole').css({'display':'flex'});
            $('.of1SameRole, .of2NewRole').css({'display':'none'});
        }

        if(winnerFollower === 'right') {
            // new leader is theright follower
            $('.ol1NewRoleof1').css({'opacity':'0'});
            $('.ol1NewRoleof2').css({'opacity':'1'});

            //lost leader replaces the winner follower's left follower (of2) place in the group
            $('.of2NewRole, .of1SameRole').css({'display':'flex'});
            $('.of2SameRole, .of1NewRole').css({'display':'none'});
        }

    }

    // left leader lost so it becomes a follower and we have a new follower
    if(winnerLeader === 'right') {

        $('.of1NewRole, .of2NewRole').css({'display':'none'});
        $('.of1SameRole, .of2SameRole').css({'display':'flex'});

        // right group's leader continue as leader
        $('.ol1NewRoleof1, .ol1NewRoleof2').css({'opacity':'0'});
        $('.ol1SameRole').css({'opacity':'1'});

        // left group's leader is not the leader anymore
        $('.l1SameRole').css({'opacity':'0'});


        // notice that this is the winner follower for the left team
        if(winnerFollower === 'left') {
            // new leader is the left follower
            $('.l1NewRolef1').css({'opacity':'1'});
            $('.l1NewRolef2').css({'opacity':'0'});

            //lost leader replaces the winner follower's follower place in the group
            $('.f1NewRole, .f2SameRole').css({'display':'flex'});
            $('.f1SameRole, .f2NewRole').css({'display':'none'});
        }

        if(winnerFollower === 'right') {
            // new leader is the left follower
            $('.l1NewRolef1').css({'opacity':'0'});
            $('.l1NewRolef2').css({'opacity':'1'});

            $('.f2NewRole, .f1SameRole').css({'display':'flex'});
            $('.f2SameRole, .f1NewRole').css({'display':'none'});
        }

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


//------ROTATING SECTIONS-----//

map.animate.roundNumber = document.getElementById('roundCount');
map.animate.roundCount = 1;


// map.animate.rotateSectionsSimple([0,0,0],0,0)
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

            setTimeout(()=>
            map.animate.showNoSections(array, newCounter, newMetaCounter),
            1000);

        }

    } else if (newCounter < 3) {

        setTimeout(()=>
        map.animate.rotateSectionsSimple(array, newCounter, newMetaCounter),
        1000);

    }

}

map.animate.showNoSections = function(array, counter, metaCounter) {

    map.opacity.section([0,0,0]);
    map.opacity.main([0,0,0]);

    setTimeout(()=>
    map.animate.rotateSectionsSimple(array, counter, metaCounter),
    1000);

}

map.animate.rotateSections = function(array, counter, metaCounter) {

    array[counter] = 1;

    map.opacity.section(array);
    map.opacity.main(array);

    var newCounter = counter + 1;
    var newMetaCounter = metaCounter + 1;

    if(newCounter === 3) {
        // 6 for 2 rounds
        if(newMetaCounter < 6) {

            newCounter = 0;
            array = [0,0,0];
            setTimeout(()=>
            map.animate.setNewRound(array, newCounter, newMetaCounter),
            1000);

        } else {

            // PLACE HERE INFO BOX TRIGGER

        }

    } else if (newCounter < 3) {

        setTimeout(()=>
        map.animate.rotateSections(array, newCounter, newMetaCounter),
        1000);

    }

}

map.animate.setNewRound = function(array, counter, metaCounter) {

    map.opacity.section(array);
    map.opacity.main(array);

    $('.newRound').css({'opacity':'1'});

    $('.newRoundText').css({'opacity':'1'});
    map.animate.roundNumber.innerHTML = map.animate.roundCount;
    map.animate.roundCount = map.animate.roundCount + 1;

    $('.endRoundText').css({'opacity':'0'});
    setTimeout(()=>map.animate.beginNewRound(array, counter, metaCounter), 750);

}

map.animate.beginNewRound = function(array, counter, metaCounter) {

    $('.newRound').css({'opacity':'0'});
    $('.newRoundText').css({'opacity':'0'});
    $('.endRoundText').css({'opacity':'0'});
    setTimeout(()=>map.animate.rotateSections(array, counter, metaCounter), 50);

}

map.animate.rotateTextandSection = function() {

    map.opacity.main([0,0,0]);
    map.animate.setNewRound([0,0,0],0,0);

}


//-----ROTATING NETPAYOFFS ON THE MAP----//

map.animate.startRoundNetPayoffs = function(roundCount) {

    map.animate.roundNumber.innerHTML = roundCount;
    $('.newRound').css({'opacity':'1'});
    $('.newRoundText').css({'opacity':'1'});
    if(roundCount === 1) {
        $('.netPayoffPart10').css({'opacity':'1'});
    }
    if(roundCount === 2) {
        $('.netPayoffPart20').css({'opacity':'1'});
    }
    if(roundCount === 4) {
        map.animate.roundNumber.innerHTML = 10
        $('.netPayoffPart40').css({'opacity':'1'});
    }

    map.opacity.main([0,0,0]);
    map.opacity.section([0,0,0]);

}

map.animate.rotateNetPayoffs = function(roundCount, partCount) {

    $('.newRound').css({'opacity':'0'});
    $('.newRoundText').css({'opacity':'0'});

    if(roundCount === 1) {

        if(partCount === 1) {

            map.opacity.main([1,0,0]);
            $('.og1NetPayoffText1').css({'opacity':'1'});
            $('.netPayoffPart11').css({'opacity':'1'});

        }

        if(partCount === 2) {

            map.opacity.main([1,1,0]);
            $('.igNetPayoffText1').css({'opacity':'1'});
            $('.netPayoffPart12').css({'opacity':'1'});

        }

        if(partCount === 3) {
            map.opacity.main([1,1,1]);
            $('.og2NetPayoffText1').css({'opacity':'1'});
            $('.netPayoffPart13').css({'opacity':'1'});

        }

    }

    if(roundCount === 2) {

        if(partCount === 1) {

            map.opacity.main([1,0,0]);
            $('.og1NetPayoffText1').css({'opacity':'0'});
            $('.og1NetPayoffText2').css({'opacity':'1'});
            $('.netPayoffPart21').css({'opacity':'1'});

        }

        if(partCount === 2) {

            map.opacity.main([1,1,0]);
            $('.igNetPayoffText1').css({'opacity':'0'});
            $('.igNetPayoffText2').css({'opacity':'1'});
            $('.netPayoffPart22').css({'opacity':'1'});

        }

        if(partCount === 3) {

            map.opacity.main([1,1,1]);
            $('.og2NetPayoffText1').css({'opacity':'0'});
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


//-----WHEEL NETPAYOFF----//

map.display.wheelPayoff = function(on) {

    var d = on ? 'block' : 'none';

    $('.netPayoffTextAndWheel').css({'display' : d});

}

map.wheel.spinDuration = 2;
map.wheel.spinNumber = 20;
map.wheel.rotationAngle = 0;

map.wheel.create = function(npArray) {


    map.wheel.myWheelObj = new Winwheel({
        'canvasId': 'myNetPayoffWheel',
        'numSegments': 10,
        'lineWidth' : 0,
        'outerRadius': 200, // controls the size of the theWheel
        'textOrientation' : 'vertical',    // Set orientation. horizontal, vertical, curved.
        'textFontFamily'  : 'Monospace',     // Monospace font best for vertical and curved.
        'textFontSize':30,
        'rotationAngle': map.wheel.rotationAngle,

        'segments':
        [
            {
                'fillStyle' : 'rgb(60,60,60)',
                'strokeStyle':'transparent',
                'textFillStyle': 'white',
                'text'      : npArray[0].toString(),
            },
            {
                'fillStyle' : 'rgb(210,210,210)',
                'strokeStyle':'transparent',
                'textFillStyle': 'black',
                'text'      : npArray[9].toString(),
            },
            {
                'fillStyle' : 'rgb(60,60,60)',
                'strokeStyle':'transparent',
                'textFillStyle': 'white',
                'text'      : npArray[8].toString(),
            },
            {
                'fillStyle' : 'rgb(210,210,210)',
                'strokeStyle':'transparent',
                'textFillStyle': 'black',
                'text'      : npArray[7].toString(),
            },
            {
                'fillStyle' : 'rgb(60,60,60)',
                'strokeStyle':'transparent',
                'textFillStyle': 'white',
                'text'      : npArray[6].toString(),
            },
            {
                'fillStyle' : 'rgb(210,210,210)',
                'strokeStyle':'transparent',
                'textFillStyle': 'black',
                'text'      : npArray[5].toString(),
            },
            {
                'fillStyle' : 'rgb(60,60,60)',
                'strokeStyle':'transparent',
                'textFillStyle': 'white',
                'text'      : npArray[4].toString(),
            },
            {
                'fillStyle' : 'rgb(210,210,210)',
                'strokeStyle':'transparent',
                'textFillStyle': 'black',
                'text'      : npArray[3].toString(),
            },
            {
                'fillStyle' : 'rgb(60,60,60)',
                'strokeStyle':'transparent',
                'textFillStyle': 'white',
                'text'      : npArray[2].toString(),
            },
            {
                'fillStyle' : 'rgb(210,210,210)',
                'strokeStyle':'transparent',
                'textFillStyle': 'black',
                'text'      : npArray[1].toString(),
            },
        ],
        'animation' :
        {
            'type'     : map.wheel.spinType,
            'duration' : map.wheel.spinDuration,
            'repeat'   : map.wheel.spinRepeat,
            'spins'    : map.wheel.spinNumber,
        }
    });

    console.log(map.wheel.rotationAngle);

}

map.wheel.cruising = function(startAngle) {

    map.wheel.spinType = 'spinOngoing';
    map.wheel.spinDuration = 600;
    map.wheel.spinNumber = 20;
    map.wheel.spinRepeat = 0;
    map.wheel.create(map.wheel.netPayoffArray);

    map.wheel.myWheelObj.rotationAngle = startAngle //36;

    map.wheel.myWheelObj.startAnimation();

}

map.wheel.spin = function() {

    map.wheel.spinType = 'spinToStop';
    map.wheel.spinDuration = 5;
    map.wheel.spinNumber = 50;
    map.wheel.spinRepeat = 0;
    map.wheel.create(map.wheel.netPayoffArray);

    map.wheel.myWheelObj.stopAnimation(false);
    map.wheel.myWheelObj.rotationAngle = 0;

    var winner = Math.floor(Math.random() * 10) + 1;
    // map.wheel.winner = winner;

    var stopAt = map.wheel.myWheelObj.getRandomForSegment(winner);
    map.wheel.myWheelObj.animation.stopAngle = stopAt;
    map.wheel.myWheelObj.startAnimation();

    setTimeout(()=>map.wheel.showResult(winner), map.wheel.spinDuration*1000);

}

map.wheel.showResult = function(winner) {

    var roundWheelResult = document.getElementById('roundWheelResult');
    var finalNetPayoffEuro = document.getElementById('finalNetPayoffEuro');
    var finalNetPayoffToken = document.getElementById('finalNetPayoffToken');
    var round;

    $('.netPayoffWheelPickedResult').css({'opacity':'1'});

    if(winner === 1) {
        winner = 0;
        round = 1;

    } else if(winner != 1) {
        winner = 11 - winner;
        round = winner + 1
    }

    roundWheelResult.innerHTML = round;
    finalNetPayoffEuro.innerHTML = Math.ceil(map.wheel.netPayoffArray[winner] * 1.5 / 100);
    finalNetPayoffToken.innerHTML = map.wheel.netPayoffArray[winner];

}

map.wheel.setRoundResult = function(index) {

    // text
    map.wheel.netPayoffArray[index - 1] = data.netPayoffs[index - 1];

    var str = 'netPayoffResultRound' + index;
    var span = document.getElementById(str);
    if(map.wheel.netPayoffArray[index - 1] != '?') {
        span.innerHTML = map.wheel.netPayoffArray[index - 1];
        var str2 = '.nptr' + index;
        $(str2).css({'opacity':'1'});
        map.wheel.spinToPick = true;
    }

    if(map.wheel.netPayoffArray[index - 1] === '?') {
        map.wheel.spinToPick = false;
    }



    // wheel
    map.wheel.rotationAngle = ((index - 1) * 36) - 18;
    map.wheel.create(map.wheel.netPayoffArray);
    map.wheel.cruising(map.wheel.rotationAngle)


    if(index < 10) {
        setTimeout(()=>map.wheel.setRoundResult(index + 1), 1520);
    }

    if(index === 10) {

        setTimeout(()=>map.wheel.cruising(342), 1520);
        if(map.wheel.spinToPick) {
            setTimeout(()=>map.wheel.spin(), 3000);
        }

    }

}

// map.display.wheelPayoff(1)
// map.wheel.setRoundResult(1)

data.netPayoffs = [1161, 345, 543, 1491, 654, 342, 1781, 543, 1234, 567];
data.netPayoffs = [1161, '?', '?', '?', '?', '?', '?', '?', '?', '?'];
map.wheel.netPayoffArray = ['?', '?', '?', '?', '?', '?', '?', '?', '?', '?'];
map.wheel.rotationAngle = -18;
map.wheel.create(map.wheel.netPayoffArray);

//-------------------------//
//-------------------------//
//-------------------------//
//-------------------------//
//-------------------------//
//-------------------------//
//-------------------------//
//-------------------------//
//-------------------------//

map.display.og1 = function() {

    map.opacity.main([1,0,0]);
    map.opacity.cover([0,0,1]);
    map.opacity.section([0.05, 0.05, 0.05]);
    map.opacity.coverArrows([0,0]);
    map.opacity.inside([1,0,0]);
    map.active.og1(true);

}

map.display.stage2 = function() {

    map.opacity.main([1,0,0]);
    map.opacity.mainArrowSections([0,0,0]);
    map.active.og1(false);


    // stage 2 active
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '1'});
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '1'});

    $('.OG1GroupSeparator').css({'transition':'2s', 'opacity':'1', 'height':'119px'});

    $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'1s', 'opacity':'0'});
    $('.arrowDashedLime1').css({'transition':'1s', 'opacity':'1'});

    $('.s2ActiveFollower').css({'transition':'1s', 'opacity':'1'});
    $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'});

    //stage 3 inactive
    $('.OG1FightIconLime, .OG1FightIcon').css({'transition':'1s', 'opacity':'0'});
    $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0.5'});

}

map.display.stage2Soft = function() {

    $('.OG1GroupSeparator').css({'transition':'2s', 'opacity':'1', 'height':'119px'});
    $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'1s', 'opacity':'0'});

    $('.s2ActiveFollower').css({'transition':'1s', 'opacity':'1'});
    $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'});

    $('.arrowDashedLime1').css({'transition':'1s', 'opacity':'1'});

}

map.display.stage3 = function() {

    map.opacity.main([1,0.2,0.2]);
    map.opacity.mainArrowSections([0,0,0]);

    // stage 2 inactive
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '0'});
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'0.5s', 'opacity': '1'});

    $('.OG1GroupSeparator').css({'transition':'1s', 'opacity':'0', 'height':'0px'});

    $('.OG1ficonLime, .arrowDashedLime1').css({'transition':'1s', 'opacity':'0'});

    // stage 3 active
    $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'1'});
    $('.OG1FightIcon').css({'transition':'1s', 'opacity':'0'});

    $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});

    $('.subsubOG1L').css({'border-color':'lime'});

}

map.display.stage4 = function(highlightBorder) {

    map.opacity.main([1,1,0]);
    map.opacity.cover([0,0,1]);
    map.opacity.coverArrows([0,0]);
    map.opacity.inside([1,1,0]);

    // Hide followers icon
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '0.1'});

    // hide icon results
    $('.wonLostBoxes').css({'transition':'0.5s', 'opacity': '1'});
    $('.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0'});

    map.opacity.arrowsToResultIcons([0,0]);
    map.opacity.arrowsFromResultIcons([0,0], [0,0]);

    // followers are even more opaque
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '0'});
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '0'});


    //lime fight icon, black crown
    $('.IGFightIconLimeTop, .IGFightIconLimeBottom').css({'transition':'0.5s','opacity':'1'});
    $('.prizeCrownLimeTop, .prizeCrownLimeBottom').css({'transition':'0s', 'opacity':'0', 'margin-top':'-18px', 'margin-left':'0px'});
    $('.prizeCrownBlackTop, .prizeCrownBlackBottom').css({'opacity':'1'});
    $('.IGTopContestWrap, .IGBottomContestWrap').css({'opacity':'1'});
    $('.mapdiscardedXTop, .mapdiscardedXBottom').css({'opacity':'0'});
    $('.igPassive').css({'opacity':'0'});
    $('.igActive').css({'opacity':'1'});


    if(highlightBorder) {

        map.active.ig([1, 1]);

    } else {

        map.active.ig([0, 0]);

    }


}

map.display.stage5 = function() {

    $('.OG2FollowersWrapLeft, .OG2FollowersWrapRight').css({'transition':'0.5s', 'opacity': '1'});
    $('.OG2FollowerArrowsLeft, .OG2FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '1'});
    $('arrowDashedLime1').css({'transition':'1s', 'opacity':'1'});
    $('.s5PassiveFollower').css({'opacity':'0'});
    $('.s5ActiveFollower').css({'opacity':'1'});

    $('.OG2GroupSeparator').css({'transition':'2s', 'opacity':'1', 'height':'119px'});

    $('.OG2FightIcon, .OG2FightIconLime').css({'transition':'1s', 'opacity':'0'});
    $('.OG2LeaderRight, .OG2LeaderLeft').css({'transition':'0.5s', 'opacity':'0.4'});

}

map.display.stage6 = function() {

    $('.OG2FollowersWrapLeft, .OG2FollowersWrapRight').css({'transition':'0.5s', 'opacity': '0.5'});
    $('.OG2FollowerArrowsLeft, .OG2FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '0.5'});

    $('.OG2GroupSeparator').css({'transition':'1s', 'opacity':'0', 'height':'0px'});

    $('.OG2ficonLime, .arrowDashedLime1').css({'transition':'1s', 'opacity':'0'});
    $('.OG2LimeFollower2').css({'opacity':'0'});

    // stage 3 active
    $('.OG2FightIconLime').css({'transition':'1s', 'opacity':'1'});
    $('.OG2FightIcon').css({'transition':'1s', 'opacity':'0'});

    $('.OG2LeaderRight, .OG2LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});

}

map.show.everything = function(wl, wf) {

    map.winnerFollowerIndex = wf;
    map.winnerLeaderIndex = wl;

    map.opacity.main([1,1,1]);
    map.opacity.section([0.1,0.1,0.1]);
    map.opacity.cover([0,0,0]);
    map.opacity.inside([1,1,1]);
    map.opacity.sectionTitles([1,1,1]);

    setTimeout(()=>map.animate.OG1Loser(), 1000);
    setTimeout(()=>{map.animate.validateIG()}, 3000);
    setTimeout(()=>{
        map.opacity.arrowsFromIG([1,0]);
        }, 5000)
    setTimeout(()=>{
        map.opacity.mainArrowSections([1,1,1]);
    }, 6000)
    setTimeout(()=>map.animate.OG1Winner(), 6000);
    setTimeout(()=>map.animate.discardIG_firstStep(), 8000);
    setTimeout(()=>map.animate.discardIG_secondStep(), 12000);

    map.hide.og2_all();

}

//-------RESET METHODS-------//

map.reset.s2 = function() {

    $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s','opacity':'1'})
    $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s','opacity':'1'})
    $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG1ficonLime, .arrowDashedLime1').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG1GroupSeparator').css({'transition':'0.5s', 'opacity':'0', 'height':'0px'});
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '1'});
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '1'});

    $('.s2ActiveFollower').css({'transition':'1s', 'opacity':'0'});
    $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'1'});

}

map.reset.s3 = function() {

    $('.OG1LeaderRight, .bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG1LeaderLeft, .topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG1FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
    $('.subsubOG1L').css({'border-color':'gray'});

}

map.reset.s4 = function(closed) {

    if(closed){
        map.closeSpace();
    } else if(!closed) {
        map.openSpace();
    } else {
        map.closeSpace();
    }
    $('.IGLeftFightIcon, .IGRightFightIcon').css({'transition':'0.5s', 'opacity':'1'});
    $('.IGLeftFollower1, .IGLeftFollower2').css({'transition':'0.5s', 'opacity':'1'});
    $('.prizeCrownBlackTop, .prizeCrownBlackBottom').css({'transition':'0.5s','opacity':'1'});
    $('.IGFightIconLimeTop, .IGFightIconLimeBottom').css({'transition':'0.5s','opacity':'0'});
    $('.IGFI_Top, .IGFI_Bottom').css({'transition':'0.5s','opacity':'1'});
    $('.IGTopContestWrap, .IGBottomContestWrap').css({'opacity':'1'});

    $('.igPassive').css({'opacity':'1'});
    $('.igActive').css({'opacity':'0'});

}

map.reset.s5 = function() {

    $('.OG2FollowerArrowsRight, .OG2FollowersWrapRight, .OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'opacity':'1'});
    $('.OG2LeftFollower1, .OG2LeftFollower2').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG2RightFollower1, .OG2RightFollower2').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG2GroupSeparator, .arrowDashedLime2').css({'transition':'0.5s', 'opacity':'0', 'height':'0px'});
    $('.s5PassiveFollower').css({'opacity':'1'});
    $('.s5ActiveFollower').css({'opacity':'0'});

    $('.OG2FightIcon').css({'transition':'1s', 'opacity':'1'});
    $('.OG2LeaderRight, .OG2LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});

}

map.reset.s6 = function() {

    $('.OG2LeaderRight, .OG2LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG2FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG2FightIcon, .OG2FightIconWrap').css({'transition':'0.5s', 'opacity':'1'});

}

map.reset.all = function(closed) {

    map.opacity.main([1,1,1]);
    map.opacity.inside([1,1,1]);
    map.opacity.cover([0,0,0]);
    map.opacity.coverArrows([0,0]);

    // OG1

    // STAGE 2
    map.reset.s2();

    // STAGE 3
    map.reset.s3();


    // IG
    map.reset.s4(closed);


    // OG2

    // STAGE 5
    map.reset.s5();

    // STAGE 6
    map.reset.s6();

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

//-----LEFT SECTION------//

map.show.og2_leftGroupIcons = function() {
    $('.OG2LeaderLeft, .OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'opacity':'1'});
}
map.hide.og2_leftGroupIcons = function() {

    $('.OG2LeaderLeft, .OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'opacity':'0'});
    $('.OG2LeftFollower1, .OG2LeftFollower2').css({'opacity':'0'});
}

map.show.og2_leftLeader = function() {
    $('.OG2LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});
}
map.hide.og2_leftLeader = function() {
    $('.OG2LeaderLeft').css({'transition':'0s', 'opacity':'0'});
}
map.show.og2_leftLeaderCAT = function() {

    $('.OG2LeaderCircleLeft, .winnerLeaderArrowLeft, .winnerLeaderTextLeft').css({'transition':'0.5s', 'opacity':'1'});

    $('.IGCircleArrowLeft_f1, .IGCircleArrowTextLeft_f1').css({'transition':'0.5s', 'opacity':'1'});
    $('.IGLeftFollower1').css({'transition':'0.5s', 'opacity':'1'});
    map.opacity.circles('iga', 'f1', 1);

    $('.OG1LeftFollower1').css({'transition':'0.5s', 'opacity':'1'});
    map.opacity.circles('og1','f1', 1);

}
map.hide.og2_leftLeaderCAT = function() {

    $('.OG2LeaderCircleLeft, .winnerLeaderArrowLeft, .winnerLeaderTextLeft').css({'transition':'0.5s', 'opacity':'0'});

    $('.IGCircleArrowLeft_f1, .IGCircleArrowTextLeft_f1').css({'transition':'0.5s', 'opacity':'0'});
    $('.IGLeftFollower1').css({'transition':'0.5s', 'opacity':'0.4'});
    map.opacity.circles('iga', 'f1', 0);

    map.opacity.circles('og1','f1', 0);
    $('.OG1LeftFollower1, .prizeCrownLimeTop').css({'opacity':'0.4'});

}

map.show.og2_leftFollower1 = function() {

    $('.OG2LeftFollower1').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG2FollowersWrapLeft, .OG2FollowerArrowsLeft').css({'opacity':'1'});

}
map.hide.og2_leftFollower1 = function() {

    $('.OG2LeftFollower1').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG2FollowersWrapLeft, .OG2FollowerArrowsLeft').css({'opacity':'1'});

}
map.show.og2_leftFollower1CAT = function() {

    $('.OG2CircleArrowLeft_f1, .OG2CircleArrowTextLeft_f1').css({'transition':'0.5s', 'opacity':'1'});
    map.opacity.circles('og2', 'f1', 1);

    $('.OG1LeaderLeft, .topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
    map.opacity.circles('result', 'l1', 1);

    map.opacity.circles('og1','l1', 1);

}
map.hide.og2_leftFollower1CAT = function() {

    $('.OG2CircleArrowLeft_f1, .OG2CircleArrowTextLeft_f1').css({'transition':'0.5s', 'opacity':'0'});
    map.opacity.circles('og2', 'f1', 0);

    $('.OG1LeaderLeft, .topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.4'});
    map.opacity.circles('result', 'l1', 0);

    map.opacity.circles('og1','l1', 0);

}

map.show.og2_leftFollower2 = function() {

    $('.OG2LeftFollower2').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG2FollowersWrapLeft, .OG2FollowerArrowsLeft').css({'opacity':'1'});

}
map.hide.og2_leftFollower2 = function() {

    $('.OG2LeftFollower2').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG2FollowersWrapLeft, .OG2FollowerArrowsLeft').css({'opacity':'1'});

}
map.show.og2_leftFollower2CAT = function() {

    $('.OG2CircleArrowLeft_f2, .OG2CircleArrowTextLeft_f2').css({'transition':'0.5s', 'opacity':'1'});
    map.opacity.circles('og2', 'f2', 1);

    map.opacity.circles('iga', 'f2', 1);
    $('.IGLeftFollower2').css({'transition':'0.5s', 'opacity':'1'});
    $('.IGCircleArrowTextLeft_f2, .IGCircleArrowLeft_f2').css({'transition':'0.5s', 'opacity':'1'});

    map.opacity.circles('og1', 'f2', 1);
    $('.OG1LeftFollower2').css({'opacity':'1'})

}
map.hide.og2_leftFollower2CAT = function() {

    $('.OG2CircleArrowLeft_f2, .OG2CircleArrowTextLeft_f2').css({'transition':'0.5s', 'opacity':'0'});
    map.opacity.circles('og2', 'f2', 0);

    map.opacity.circles('iga', 'f2', 0);
    $('.IGLeftFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
    $('.IGCircleArrowTextLeft_f2, .IGCircleArrowLeft_f2').css({'transition':'0.5s', 'opacity':'0'});

    map.opacity.circles('og1', 'f2', 0);
    $('.OG1LeftFollower2').css({'opacity':'0.4'});

}

map.show.og2_leftFollowers = function() {
    $('.OG2LeftFollower1').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG2LeftFollower2').css({'transition':'0.5s', 'opacity':'1'});
}
map.hide.og2_leftFollowers = function() {
    $('.OG2LeftFollower1').css({'transition':'0s', 'opacity':'0'});
    $('.OG2LeftFollower2').css({'transition':'0s', 'opacity':'0'});
}

//-----RIGHT SECTION----//

map.show.og2_rightGroupIcons = function() {
    $('.OG2LeaderRight, .OG2FollowerArrowsRight, .OG2FollowersWrapRight').css({'opacity':'1'});
}
map.hide.og2_rightGroupIcons = function() {
    $('.OG2LeaderRight, .OG2FollowerArrowsRight, .OG2FollowersWrapRight').css({'opacity':'0'});
}

map.show.og2_rightFollowers = function() {
    $('.OG2FollowersWrapRight, .OG2FollowerArrowsRight').css({'transition':'0.5s', 'opacity':'1'});
}
map.hide.og2_rightFollowers = function() {
    $('.OG2FollowersWrapRight, .OG2FollowerArrowsRight').css({'opacity':'0'});
}
map.show.og2_rightFollowersCAT = function() {
    $('.OG2BothFollowersCircleRight, .OG2BothFollowersCircleRightText, .OG2BothFollowersCircleRightArrow').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG1BothFollowersCircleRight').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s', 'opacity':'1'});
}
map.hide.og2_rightFollowersCAT = function() {
    $('.OG2BothFollowersCircleRight, .OG2BothFollowersCircleRightText, .OG2BothFollowersCircleRightArrow').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG1BothFollowersCircleRight').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
}

map.show.og2_rightLeader = function() {
    $('.OG2LeaderRight').css({'transition':'0.5s', 'opacity':'1'});
}
map.hide.og2_rightLeader = function() {
    $('.OG2LeaderRight').css({'opacity':'0'});
}
map.show.og2_rightLeaderCAT = function() {

    $('.OG2LeaderCircleRight, .winnerLeaderArrowRight, .winnerLeaderTextRight').css({'transition':'0.5s', 'opacity':'1'});

    $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'1'});

    map.opacity.circles('og1','ol1', 1);
    map.opacity.circles('result','l2', 1);

}
map.hide.og2_rightLeaderCAT = function() {

    $('.OG2LeaderCircleRight, .winnerLeaderArrowRight, .winnerLeaderTextRight').css({'transition':'0.5s', 'opacity':'0'});

    $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.4'});
    $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0.4'});

    map.opacity.circles('og1','ol1', 0)
    map.opacity.circles('result','l2', 0);
}


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

//---------------------------------------------//





map.showMap();
map.show.sections();
map.opacity.main([1,1,1]);
map.opacity.section([0.1,0.1,0.1]);
map.opacity.cover([0,0,0]);
map.opacity.inside([1,1,1]);
map.opacity.sectionTitles([1,1,1]);
map.animate.OG1ResultsUknown(0);
map.globalVariable.ourSideIsHetero = 1;
map.globalVariable.theirSideIsHetero = 1;
map.treatment();
map.globalVariable.playerIndex = 1;
map.animate.YAH_og1();



// map.show.everything(2, 1);




//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//

var box = {

    set: {},
    show: {},
    hide: {},
    global: {},
    button: {},

}

box.global.previousKey = undefined;
box.global.currentKey = undefined;

box.global.keys = [];


box.set.wrapHeight = function(id) {

    var key = id.split('-')[1];

    box.global.keys.push(key);

    box.global.currentKey = box.global.keys[box.global.keys.length - 1];

    if(box.global.keys.length === 1) {

        box.global.previousKey = box.global.keys[box.global.keys.length - 1];

    } else {

        box.global.previousKey = box.global.keys[box.global.keys.length - 2];

    }

    id = '#' + id;
    var height = $(id).height();
    height = height + 'px';

    var boxbox = '#boxbox-' + key;

    $(boxbox).css({'height' : height});

    if(box.global.previousKey != box.global.currentKey) {

        var prevBoxbox = '#boxbox-' + box.global.previousKey;
        $(prevBoxbox).css({'height' : '0'});

    }

    if(box.global.keys.length > 2) {

        box.global.keys = box.global.keys.slice(Math.max(box.global.keys.length - 2, 1));

    }

    // console.log(box.global.keys);

}

box.move = function(id) {

    var myDiv = '#boxwrap-' + id.split('-')[1] + '-' + id.split('-')[2];

    console.log(myDiv);

    var myPlace = '#boxbox-' + id.split('-')[1];

    console.log(myPlace);

    $(myDiv).appendTo(myPlace);

}

box.store = function(id) {

    var myDiv = '#boxwrap-' + id.split('-')[1] + '-' + id.split('-')[2];

    $(myDiv).appendTo('.reviewBox');

}

box.show = function(id) {

    box.move(id);

    box.set.wrapHeight(id);

    id = '#' + id;

    $(id).css({'transform':'scale(1)'});

    // ADD MOVE IFRAME TO THIS DIV METHOD HERE

}

box.hide = function(id, moveToReviewBox) {

    id = '#' + id;
    $(id).css({'transform':'scale(0)'});

    if(moveToReviewBox) {

        setTimeout(()=>{
            box.store(id);
            $(id).css({'transform':'scale(1)'});
        }, 850);

    }

}

box.transition = function(id1, id2, hideButton) {

    if(hideButton) {

        box.button.hide(id2);

    }

    id1 = 'box-' + id1;
    id2 = 'box-' + id2;

    box.hide(id1);
    box.show(id2);

}

box.button.hide = function(id) {

    id = '#btn-' + id;

    console.log(id);

    $(id).css({'transform':'scale(0) rotate(1turn)'});

}

box.button.show = function(id) {

    id = '#btn-' + id;

    $(id).css({'transform':'scale(1) rotate(0turn)'});

}


//-------------------//

box.show('box-A-1');


$('#btn-A-1').click(function() {
    box.transition('A-1', 'A-2');
});

$('#btn-A-2').click(function() {
    box.transition('A-2', 'A-3');
});

$('#btn-A-3').click(function() {
    box.transition('A-3', 'B-1');
});

$('#btn-B-1').click(function() {
    box.transition('B-1', 'B-2');
});

$('#btn-B-2').click(function() {
    box.transition('B-2', 'B-3');
});

$('#btn-B-3').click(function() {
    box.transition('B-3', 'C-1');
});

$('#btn-C-1').click(function() {
    box.transition('C-1', 'C-2');
});

$('#btn-C-2').click(function() {
    box.transition('C-2', 'C-3');
});

$('#btn-C-3').click(function() {
    box.transition('C-3', 'D-1');
});

$('#btn-D-1').click(function() {
    box.transition('D-1', 'A-1');
});
