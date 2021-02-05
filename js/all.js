var map = {

    display: {},
    show: {},
    hide: {},
    opacity: {},
    enlarge: {},
    normalSize: {},
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
map.induceRoundNumbers = false;
map.globalVariable.showButtonBCP10 = false;


//--------------------------//
// fake data generation to be updated by showresult of wheel

//this is not a fake data
map.og1_topWon = undefined;

//-------------------------//
//-------------------------//
//-------------------------//

map.showMap = function() {

    $('.sexplain').css({'display':'flex'});
    setTimeout(()=>{$('.sexplain').css({'transition':'0.5', 'opacity': '1', 'transform':'scale(1)'});}, 100)

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

    $('.arrowToTopIconResults').css({'transition':'0.25s', 'opacity': optArray[0].toString()});
    $('.arrowToBottomIconResults').css({'transition':'0.25s', 'opacity': optArray[1].toString()});

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

//------OPACITY METHODS------//
//------OPACITY METHODS------//
//------OPACITY METHODS------//

// [OG1, IG, OG2]
map.opacity.main = function(optArray, transitionTime) {

    transitionTime = transitionTime === undefined ? '0.3s' : (transitionTime + 's');

    $('.OG1').css({'transition': transitionTime, 'opacity' : optArray[0].toString()});
    $('.IG').css({'transition': transitionTime, 'opacity' : optArray[1].toString()});
    $('.OG2').css({'transition': transitionTime, 'opacity' :  optArray[2].toString()});

}

map.opacity.section = function(optArray, transitionTime) {

    transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

    $('.section1').css({'transition':transitionTime, 'opacity' : optArray[0].toString()});
    $('.section2').css({'transition':transitionTime, 'opacity' : optArray[1].toString()});
    $('.section3').css({'transition':transitionTime, 'opacity' :  optArray[2].toString()});


}

map.opacity.sectionTitles = function(optArray, transitionTime) {

    transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

    $('.OG1Title').css({'transition':transitionTime, 'opacity' : optArray[0].toString()});
    $('.IGTitleTop, .IGTitleBottom').css({'transition':transitionTime, 'opacity' : optArray[1].toString()});
    $('.OG2Title').css({'transition':transitionTime, 'opacity' : optArray[2].toString()});

}

// cover for og1, og2, ig
map.showCoverFor = function(contest, opt, transitionTime) {

    var k = opt != undefined ? opt : 1;

    transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

    if(contest === 'og1') {

        $('.IG1Description').css({'transition':transitionTime, 'opacity': k});

    }

    if(contest === 'og2') {

        $('.IG2Description').css({'transition':transitionTime, 'opacity': k});

    }

    if(contest === 'ig') {

        $('.IGCoverTop, .IGCoverBottom').css({'transition':transitionTime, 'opacity': k});

    }


}

// [OG1, IG, OG2]
map.opacity.cover = function(optArray, transitionTime) {

    transitionTime = transitionTime === undefined ? '0.5' : (transitionTime);

    map.showCoverFor('og1', optArray[0].toString(), transitionTime);
    map.showCoverFor('ig', optArray[1].toString(), transitionTime);
    map.showCoverFor('og2', optArray[2].toString(), transitionTime);

}

// inside of og1, og2, ig and results icons for og1
map.insideOf = function(contest, myOpt, transitionTime) {


    transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

    var opt = myOpt.toString();


    if(contest === 'og1') {

        $('.og1all').css({'transition':transitionTime, 'opacity': opt});

    }

    // note there is no outside of results just icons and arrows
    if(contest === 'results') {

        // hide icon results
        $('.wonLostBoxes').css({'transition':transitionTime, 'opacity': opt});

        // arrows to icons
        $('.arrowsFromIconResultsToIG, .arrowToTopIconResults, .arrowToBottomIconResults').css({'transition':transitionTime, 'opacity': opt});

        // arrows to IG and arrows to OG2
        $('.arrowsFromIconResultsToIG').css({'transition':transitionTime, 'opacity': opt});

    }

    if(contest === 'ig') {

        // partial hiding: only hides the crown and FOLLOWERS text
        $('.igalltop, .igallbottom').css({'transition':transitionTime, 'opacity': opt});

    }

    if(contest === 'og2') {

        $('.og2all').css({'transition':transitionTime, 'opacity': opt});

    }

}

// [OG1, IG, OG2]
map.opacity.inside = function(optArray, transitionTime) {

    if(optArray[0] != -1) {
        map.insideOf('og1', optArray[0].toString(), transitionTime);
    }

    if(optArray[1] != -1) {
        map.insideOf('ig', optArray[1].toString(), transitionTime);
    }

    if(optArray[2] != -1) {
        map.insideOf('og2', optArray[2].toString(), transitionTime);
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
        $('.topLeaderWon, .bottomLeaderLost').css({'transition':'0.5s', 'opacity':'1'});
        $('.topLeaderLost, .bottomLeaderWon').css({'transition':'0s', 'opacity':'0'});
    }

    if(winnerLeader === 'bottom') {
        $('.topLeaderLost, .bottomLeaderWon').css({'transition':'0.5s', 'opacity':'1'});
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
    //
    // setTimeout(()=>{
    //     $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'0'});
    //     $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'0'});
    // }, 100)
    //
    // setTimeout(()=>{
    //     // map.closeSpace();
    //     setTimeout(()=>{
    //         $('.OG1FightIcon, .OG1FightIconLime, .OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});
    //     }, 100)
    // }, 100)

}


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
        $('.OG1FightIcon, .OG1FightIconLime, .OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0'});
        $('.bottomBoxLeaderResult, .topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.set.OG1ResultIcons();
    }, 2 * delay);

    map.globalVariable.og1ResultsCounter = 1 + map.globalVariable.og1ResultsCounter;

}

map.opacity.bottom = function(opt) {

    opt = opt.toString();

    $('.arrowToBottomIconResults').css({'transition':'2s', 'opacity':opt});
    $('.bottomLeaderWon').css({'transition':'2s', 'opacity':opt});
    $('.IGBottomContestWrap').css({'transition':'2s', 'opacity':opt});

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
map.animate.rotatePause = 500;

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
            map.animate.rotatePause);

        }

    } else if (newCounter < 3) {

        setTimeout(()=>
        map.animate.rotateSectionsSimple(array, newCounter, newMetaCounter),
        map.animate.rotatePause);

    }

}

map.animate.showNoSections = function(array, counter, metaCounter) {

    map.opacity.section([0,0,0]);
    map.opacity.main([0,0,0]);

    setTimeout(()=>
    map.animate.rotateSectionsSimple(array, counter, metaCounter),
    map.animate.rotatePause);

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
            map.animate.rotatePause);

        } else {

            // PLACE HERE INFO BOX TRIGGER

        }

    } else if (newCounter < 3) {

        setTimeout(()=>
        map.animate.rotateSections(array, newCounter, newMetaCounter),
        map.animate.rotatePause);

    }

}

map.animate.rotateSections2 = function(array, counter, metaCounter) {

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
            map.animate.setNewRound2(array, newCounter, newMetaCounter),
            map.animate.rotatePause);

        } else {

            // PLACE HERE INFO BOX TRIGGER

        }

    } else if (newCounter < 3) {

        setTimeout(()=>
        map.animate.rotateSections2(array, newCounter, newMetaCounter),
        map.animate.rotatePause);

    }

}


map.globalVariable.textGraphicsDelay = 750;

map.animate.setNewRound = function(array, counter, metaCounter) {

    map.opacity.section(array);
    map.opacity.main(array);

    $('.newRound').css({'transition':'0.5s', 'opacity':'1'});

    $('.newRoundText').css({'transition':'0.5s', 'opacity':'1'});
    map.animate.roundNumber.innerHTML = map.animate.roundCount;
    map.globalVariable.textGraphicsDelay = 750;

    if(map.animate.roundCount >= 3 && map.induceRoundNumbers) {
        $('.newRoundText').css({'transition':'0s','margin-left':'160px'});
        map.animate.roundNumber.innerHTML = '3, 4, etc...';
        map.globalVariable.textGraphicsDelay = 1500;
    }

    map.animate.roundCount = map.animate.roundCount + 1;

    $('.endRoundText').css({'opacity':'0'});
    setTimeout(()=>map.animate.beginNewRound(array, counter, metaCounter), map.globalVariable.textGraphicsDelay);

}

map.animate.setNewRound2 = function(array, counter, metaCounter) {

    map.opacity.section(array);
    map.opacity.main(array);

    $('.newRound').css({'opacity':'1'});

    $('.newRoundText0').css({'opacity':'1'});
    // map.animate.roundNumber.innerHTML = map.animate.roundCount;
    map.animate.roundCount = map.animate.roundCount + 1;

    $('.endRoundText').css({'opacity':'0'});
    setTimeout(()=>map.animate.beginNewRound2(array, counter, metaCounter), 750);

}

map.animate.beginNewRound = function(array, counter, metaCounter) {

    $('.newRound').css({'opacity':'0'});
    $('.newRoundText0').css({'opacity':'0'});
    $('.newRoundText').css({'transition':'0.3s', 'opacity':'0'});
    $('.endRoundText').css({'opacity':'0'});
    setTimeout(()=>map.animate.rotateSections(array, counter, metaCounter), 50);

}

map.animate.beginNewRound2 = function(array, counter, metaCounter) {

    $('.newRound').css({'opacity':'0'});
    $('.newRoundText0').css({'opacity':'0'});
    $('.newRoundText').css({'opacity':'0'});
    $('.endRoundText').css({'opacity':'0'});
    setTimeout(()=>map.animate.rotateSections2(array, counter, metaCounter), 50);

}

map.animate.rotateTextandSection = function() {

    map.animate.rotatePause = 550;
    map.opacity.main([0,0,0]);
    map.animate.setNewRound([0,0,0],0,-3);

}

map.animate.rotateTextandSection2 = function() {

    map.animate.rotatePause = 400;
    map.opacity.main([0,0,0]);
    map.animate.setNewRound2([0,0,0],0,-12);

}

map.animate.resetCounter = function() {

    map.animate.roundCount = 1;

}

//-----ROTATING NETPAYOFFS ON THE MAP----//

map.animate.startRoundNetPayoffs = function(roundCount) {

    map.animate.roundNumber.innerHTML = roundCount;
    $('.newRound').css({'transition':'0.6s', 'opacity':'1'});
    $('.newRoundText').css({'transition':'0.6s', 'opacity':'1'});


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
            $('.og1NetPayoffText1').css({'transition':'0.5s', 'opacity':'1'});
            $('.netPayoffPart11').css({'transition':'0.5s', 'opacity':'1'});

        }

        if(partCount === 2) {

            map.opacity.main([1,1,0]);
            $('.igNetPayoffText1').css({'transition':'0.5s', 'opacity':'1'});
            $('.netPayoffPart12').css({'transition':'0.5s', 'opacity':'1'});

        }

        if(partCount === 3) {
            map.opacity.main([1,1,1]);
            $('.og2NetPayoffText1').css({'transition':'0.5s', 'opacity':'1'});
            $('.netPayoffPart13').css({'transition':'0.5s', 'opacity':'1'});

            setTimeout(()=>{
                $('.netPayoffPart14').css({'transition':'0.5s', 'opacity':'1'});
                $('.netPayoffCircle, .netPayoffArrow, .netPayoffText').css({'transition':'0.5s', 'opacity':'1'});
            }, 1500)

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
            $('.og2NetPayoffText1').css({'transition':'0s', 'opacity':'0'});
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

    $('.netPayoffResultsTutorial').css({'display':'flex', 'margin-bottom':'-230px'});

    var delay;

    myDelay = myDelay === undefined ? 1500 : myDelay;

    delay = myDelay;

    map.opacity.section([0,0,0], 0.5);

    setTimeout(()=>{
        map.animate.startRoundNetPayoffs(1);
    }, 300)

    setTimeout(()=>{
        setTimeout(()=>map.animate.rotateNetPayoffs(1, 1), delay);
        setTimeout(()=>map.animate.rotateNetPayoffs(1, 2), 2 * delay);
        setTimeout(()=>map.animate.rotateNetPayoffs(1, 3), 3 * delay);
    }, 2600)



}

map.animate.showPayoffs3 = function(myDelay) {

    $('.netPayoffResultsTutorialText1').css({'transition':'0.5s', 'transform-origin':'left', 'transform':'scale(0.7)', 'opacity':'0.7', 'margin-top':'-65px'});
    $('.netPayoffCircle, .netPayoffArrow, .netPayoffText').css({'transition':'0.2s', 'opacity':'0'});
    $('.initialBudgetCircle, .initialBudgetArrow, .initialBudgetText').css({'transition':'0.2s', 'opacity':'0'});
    $('.netPayoffResultsTutorialText2').css({'transition':'0.5s', 'margin-top':'-26px', 'margin-bottom':'60px'});
    setTimeout(()=>{
        $('.initialBudgetCircle2, .initialBudgetArrow2, .initialBudgetText2').css({'transition':'0.5s', 'opacity':'1'});
    }, 1000)


    var delay;

    myDelay = myDelay === undefined ? 1000 : myDelay;

    delay = myDelay;

    setTimeout(()=>map.animate.startRoundNetPayoffs(2), 1 * delay);

    setTimeout(()=>{
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 1), 3 * delay);
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 2), 4 * delay);
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 3), 5 * delay);
    }, 1000)

    // setTimeout(()=>$('.netPayoffPart30').css({'opacity':'1'}), 7 * delay);

}

//-----WHEEL NETPAYOFF----//

map.display.wheelPayoff = function() {

    $('.netPayoffTextAndWheel').css({'display' : 'block'});
    setTimeout(()=>{
        $('.netPayoffTextAndWheel').css({'transition':'0.5s', 'margin-bottom' : '0px', 'opacity':'1'});
    }, 100)

}

map.hide.wheelPayoff = function() {

    $('.netPayoffTextAndWheel').css({'transition':'0.5s', 'margin-bottom' : '-500px', 'opacity':'0'});

    setTimeout(()=>{
        $('.netPayoffTextAndWheel').css({'display' : 'none'});
    }, 500)

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

var someWheelSwitch = true;
map.wheel.spin = function(a, b) {

    $('.netPayoffWheelPickedResult').css({'transition':'0.2s', 'opacity':'0'});
    $('.wheelOfFortuneText, .wheelOfFortuneArrow').css({'transition':'0.3s', 'opacity':'0'});

    a = a === undefined ? 5 : a;
    b = b === undefined ? 50 : b;

    map.wheel.spinType = 'spinToStop';
    map.wheel.spinDuration = a;//5;
    map.wheel.spinNumber = b; //50;
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

    if(someWheelSwitch){
        setTimeout(()=>{
            box.transition('', 'BCP-11', 0, 0, 1);
            setTimeout(()=>{
                box.button.show('BCP-11');
            }, 1000)
        }, (map.wheel.spinDuration+1)*1000);
        someWheelSwitch = false;
    }

}

map.wheel.showResult = function(winner) {

    var roundWheelResult = document.getElementById('roundWheelResult');
    var finalNetPayoffEuro = document.getElementById('finalNetPayoffEuro');
    var finalNetPayoffToken = document.getElementById('finalNetPayoffToken');
    var round;

    $('.netPayoffWheelPickedResult').css({'transition':'0.5s', 'opacity':'1', 'margin-top':'0px', 'margin-bottom':'-30px'});

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
            setTimeout(()=>{
                box.button.show('BCP-10');
            }, 4000)
            map.globalVariable.showButtonBCP10 = true;
            // setTimeout(()=>map.wheel.spin(), 3000);
        }

    }

}

// map.display.wheelPayoff()
// map.wheel.setRoundResult(1)

data.netPayoffs = [1440, 800, 1654, 943, 1991, 2543, 742, 1781, 1234, 2167];
// data.netPayoffs = [1161, '?', '?', '?', '?', '?', '?', '?', '?', '?'];
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
    $('.OG2LeaderLeft, .OG2LeadersIcon').css({'transition':'0.5s', 'opacity':'1'});
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
    $('.IGLeftFollower1').css({'transition':'0.5s', 'opacity':'0.4', 'z-index':'2'});
    map.opacity.circles('iga', 'f1', 0);

    map.opacity.circles('og1','f1', 0);
    $('.OG1LeftFollower1').css({'opacity':'0.8'});
    $('.prizeCrownLimeTop').css({'opacity':'0.8'});

}

map.show.og2_leftFollower1 = function() {

    $('.OG2LeftFollower1').css({'transition':'0.5s', 'opacity':'1'});
    $('.OG2LeftFollower2').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG2FollowersWrapLeft, .OG2FollowerArrowsLeft').css({'opacity':'1'});

}
map.hide.og2_leftFollower1 = function() {

    $('.OG2LeftFollower1').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG2FollowersWrapLeft, .OG2FollowerArrowsLeft').css({'opacity':'1'});

}
map.show.og2_leftFollower1CAT = function() {

    $('.OG2CircleArrowLeft_f1, .OG2CircleArrowTextLeft_f1').css({'transition':'0.5s', 'opacity':'1'});
    map.opacity.circles('og2', 'f1', 1);

    $('.OG1LeaderLeft, .leaderKingLeft,  .topBoxLeaderResult').css({'transition':'1s', 'opacity':'1'});
    map.opacity.circles('result', 'l1', 1);

    map.opacity.circles('og1','l1', 1);

}
map.hide.og2_leftFollower1CAT = function() {

    $('.OG2CircleArrowLeft_f1, .OG2CircleArrowTextLeft_f1').css({'transition':'0.5s', 'opacity':'0'});
    map.opacity.circles('og2', 'f1', 0);

    $('.OG1LeaderLeft, .topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.8'});
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


map.show.bracket = function() {

    $('.mapBracket').css({'display':'flex'});
    setTimeout(()=>{$('.mapBracket').css({'transition':'0.7s', 'margin-bottom':'-45px', 'transform':'scale(1)'})},50);

}

map.hide.bracket = function() {

    $('.mapBracket').css({'transition':'0.3s', 'margin-bottom':'-164px', 'transform':'scale(0)'});
    setTimeout(()=>{$('.mapBracket').css({'display':'none'})}, 350);

}

//---------------------------------------------//

map.show.initialSetup = function() {

    map.showMap();
    map.show.sections();
    map.opacity.main([1,1,1]);
    map.opacity.section([1,1,1]);
    map.opacity.cover([0,0,0]);
    map.opacity.inside([0,0,0]);
    map.opacity.sectionTitles([0,0,0]);
    // map.animate.OG1ResultsUknown(0);
    // map.globalVariable.ourSideIsHetero = 1;
    // map.globalVariable.theirSideIsHetero = 1;
    // map.treatment();

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

map.opacity.OG1Icons = function(opt) {

    $('.OG1FightIcon, .s2PassiveFollower, .arrowDashed, .OG1LeaderLeft, .OG1LeaderRight, .leaderKingLeft, .leaderKingRight').css({'transition':'0.5s', 'opacity':opt});
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight, .OG1LeadersIcon, .OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity':opt});
    // $('.OG2LeftFollower2').css({'transition':'0.5s', 'opacity':'0'});

}

//----------------- ARROW COLOR SWITCH ANIMATION ----------------------//

map.globalVariable.stopArrowColorAnimation = false;
map.globalVariable.colorCounter = 0;
map.globalVariable.colorCounter2 = 0;
map.globalVariable.delay1 = 1500;
map.globalVariable.delay2 = 1500;


map.animate.arrowColor = function(state) {

    if(!map.globalVariable.stopArrowColorAnimation) {

        if(state === 0) {
            $('.arrowDashed, .arrowDashedInfoBox').css({'transition':'0.5s', 'opacity':'1'})
            $('.arrowDashedBlue1, .arrowDashedRed1, .arrowDashedBlueInfoBox, .arrowDashedRedInfoBox').css({'transition':'1.5s', 'opacity':'0'})

            setTimeout(()=>{map.animate.arrowColor(-1)}, map.globalVariable.delay1);
        }

        // blue arrow
        if(state === 1) {
            $('.arrowDashedBlue1, .arrowDashedBlueInfoBox').css({'transition':'1.5s', 'opacity':'1'});
            $('.subsubOG1L').css({'transition':'1.5s', 'background-color':'#aaadda', 'border-color':'blue'});
            $('.leaderAuraInfoBox').css({'transition':'1.5s', 'background-color':'#abb8f2', 'border-color':'blue'});
            $('.arrowDashed, .arrowDashedInfoBox, .arrowDashedRed1, .arrowDashedRedInfoBox').css({'transition':'1.5s', 'opacity':'0'})

            setTimeout(()=>{map.animate.arrowColor(-1)}, map.globalVariable.delay1);

            var nState = 2;
            setTimeout(()=>{map.animate.arrowColor(nState)}, map.globalVariable.delay1);

        }

        if(state === 2) {
            $('.arrowDashedRed1, .arrowDashedRedInfoBox').css({'transition':'1.5s', 'opacity':'1'});
            $('.subsubOG1L').css({'transition':'1.5s', 'background-color':'#daaaaa', 'border-color':'red'});
            $('.leaderAuraInfoBox').css({'transition':'1.5s', 'background-color':'#f6c0c0', 'border-color':'red'});
            $('.arrowDashed, .arrowDashedInfoBox, .arrowDashedBlue1, .arrowDashedBlueInfoBox').css({'transition':'1.5s', 'opacity':'0'})

            var nState =  1;
            setTimeout(()=>{map.animate.arrowColor(nState)}, map.globalVariable.delay1);
        }

        if(state === -1) {

            map.globalVariable.colorCounter2 = 1 + map.globalVariable.colorCounter2;

            map.globalVariable.colorCounter = 1 - map.globalVariable.colorCounter;

            $('.arrowDashed, .arrowDashedBlue1, .arrowDashedRed1, .arrowDashedBlueInfoBox, .arrowDashedRedInfoBox').css({'transition':'1.5s', 'opacity':'0'})
            $('.subsubOG1L').css({'transition':'1.5s', 'background-color':'#d3d3d378', 'border-color':'gray'});
            $('.leaderAuraInfoBox').css({'transition':'1.5s', 'background-color':'#f5f5f5', 'border-color':'#504c4c'});

            if(map.globalVariable.colorCounter2 < 5) {

                if(map.globalVariable.colorCounter === 0) {
                    setTimeout(()=>{map.animate.arrowColor(1)}, map.globalVariable.delay2);
                }

                if(map.globalVariable.colorCounter === 1) {
                    setTimeout(()=>{map.animate.arrowColor(2)}, map.globalVariable.delay2);
                }

            }
        }

    } else {

        map.globalVariable.delay1 = 0;
        map.globalVariable.delay2 = 0;
        setTimeout(()=>{
            $('.arrowDashed, .arrowDashedInfoBox').css({'transition':'1.5s', 'opacity':'0.5'})
            $('.arrowDashedBlue1, .arrowDashedRed1, .arrowDashedBlueInfoBox, .arrowDashedRedInfoBox').css({'transition':'1.5s', 'opacity':'0'})
            $('.subsubOG1L').css({'transition':'1.5s', 'background-color':'#d3d3d378', 'border-color':'gray'});
            $('.leaderAuraInfoBox').css({'transition':'1.5s', 'background-color':'#f5f5f5', 'border-color':'#504c4c'});
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


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////




///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////
///////////////////////////// TITLE ANIMATION //////////////////////////////////


var title = {
    update: {},
    global: {},
}

title.global.mySpeed = 5;

title.update.text = function(myString) {

    $('#mainmainTitle').html(myString);

}

title.update.textColor = function(index, direction, extraStep) {

    extraStep = extraStep === undefined ? 1 : extraStep;
    // console.log(index);

    if(title.global.mySpeed != -1) {

        var increasing;

        increasing = direction;

        if(!increasing && index <= 40) {
            increasing = true;
        }

        if(increasing && index > 250) {
            increasing = false;
        }

        var myString;
        myString = 'rgb(' + index + ',' + index + ',' + index +')';

        // console.log(myString);

        $('.welcomeTitle').css({'color': myString});

        if(increasing) {

            // console.log(extraStep);
            var myNewIndex = index + (1 * extraStep);
            // console.log(myNewIndex);

            setTimeout(()=>title.update.textColor(myNewIndex, increasing, extraStep), title.global.mySpeed);

        } else {

            // setTimeout(()=>title.update.textColor(index - 1, increasing), title.global.mySpeed);

        }

    }

}

title.update.size = function(show) {

    if(show) {

        $('.welcomeTitle').css({'transition':'0.01s', 'display':'flex', 'margin-bottom': '-35px'});
        setTimeout(()=>{$('.welcomeTitle').css({'transition':'0.75s', 'transform':'scaleY(1)', 'height':'115px', 'margin-bottom': '20px'}), 15})


    } else {

        $('.welcomeTitle').css({'transition':'1s', 'transform':'scaleY(0)', 'height':'0', 'margin-bottom': '-35px'});
        setTimeout(()=>{$('.welcomeTitle').css({'display':'none'});}, 1000);

    }

}

title.show = function() {

    title.update.size(true);
    title.update.textColor(0, true);

}

title.hide = function() {

    title.update.size(false);

}


/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////
/////////////////////////// CROWN SWITCH ANIMATION /////////////////////////////


var crown = {}

crown.show = function() {

    $('.crownSwitchAnimationWrap').css({'display':'flex'});
    setTimeout(()=>$('.crownSwitchAnimationWrap').css({'transition':'0.7s', 'margin-bottom':'0px', 'opacity':'1', 'margin-top':'-97px'}), 50);

}

crown.hide = function() {

    $('.crownSwitchAnimationWrap').css({'transition':'0.7s', 'margin-bottom':'-190px', 'opacity':'0'});
    setTimeout(()=>$('.crownSwitchAnimationWrap').css({'display':'none'}),350);

}

crown.stopAnimate = false;

crown.animateDeny = function() {

    if(!crown.stopAnimate) {

        $('.followerCrown').css({'transition':'1.5s'});
        $('.leaderCrown').css({'transition':'0.8s', 'margin-left':'-76px'});
        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.8s', 'margin-top':'84px'});
        }, 100)

        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.7s', 'opacity':'0'});
            $('.myLeaderDenied').css({'transition':'0.4s', 'opacity':'1'});
        }, 900)

        setTimeout(()=>{
            crown.newLeader()
        }, 3000)

    }

}

crown.newLeader = function() {

    $('.leaderCrown').css({'transition':'0.5s', 'opacity':'1'});
    $('.myLeaderDenied').css({'transition':'0.5s', 'opacity':'0'});

    setTimeout(()=>{
        $('.leaderCrown').css({'transition':'1.5s', 'opacity':'0', 'margin-left':'181px', 'margin-top':'-33px'});
        $('.followerCrown').css({'transition':'1.5s', 'opacity':'1', 'margin-left':'181px', 'margin-top':'-33px'});
    }, 500)

    setTimeout(()=>{
        crown.reset()
    }, 4000)

}

crown.reset = function() {

    $('.myLeaderDenied, .followerCrown').css({'transition':'0.3s', 'opacity':'0'});
    $('.leaderCrown').css({'transition':'0s', 'margin-left':'-182px', 'margin-top':'-33px'});

    setTimeout(()=>{
        $('.leaderCrown').css({'transition':'0.3s', 'opacity':'1'});
        $('.followerCrown').css({'transition':'0s', 'margin-left':'-76px', 'margin-top':'84px'})
    }, 350)

    setTimeout(()=>{
        crown.animateDeny()
    }, 1000)


}


////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////
////////////////////// ICON SORTING ANIMATIONS ////////////////////////////////


var icon = {

    tool:
    {
        set:{}
    },
    set: {},
    display: {},
    values: {},
    stage1: {},
    globalVariable: {},

};


icon.globalVariable.ourFollowersAreHetero = undefined;
icon.globalVariable.theirFollowersAreHetero  = undefined;

icon.globalVariable.bothHomo = undefined;
icon.globalVariable.bothHetero = undefined;

icon.globalVariable.genericIcons = undefined;
icon.globalVariable.showUnevenSign = undefined;
icon.globalVariable.showUnevenIcon = false;

icon.display.genericIcons = function() {

    $('.genericGroupIcon').css({'display':'none'});
    $('.roleSpecificIcons').css({'display':'flex'});

    if(icon.globalVariable.genericIcons) {
        $('.genericGroupIcon').css({'display':'flex'});
        $('.roleSpecificIcons').css({'display':'none'});
    }

}

icon.tool.shuffle = function(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;

};

// Need to set the treatment
// homo treatment: bothHomo = 1; bothHetero = 0
// both hetero treatment: bothHomo = 0; bothHetero = 1
// Asymmetric treatment: bothHomo = 0; bothHetero = 0 and
// the below function will randomly decide which side is hetero.
icon.set.treatment = function() {

    icon.globalVariable.ourFollowersAreHetero = 0;
    icon.globalVariable.theirFollowersAreHetero = 0;

    if(Math.random() > 0.5) {
        icon.globalVariable.ourFollowersAreHetero = 1;
    } else {
        icon.globalVariable.theirFollowersAreHetero = 1;
    }

    if(icon.globalVariable.bothHomo) {
        icon.globalVariable.ourFollowersAreHetero = 0;
        icon.globalVariable.theirFollowersAreHetero = 0;
    }

    if(icon.globalVariable.bothHetero) {
        icon.globalVariable.ourFollowersAreHetero = 1;
        icon.globalVariable.theirFollowersAreHetero = 1;
    }

}

// after setting the treatment display the according icons constelation
icon.display.treatment = function() {

    $('.homoA, .heteroA, .homoB, .heteroB').css({'transform':'scale(0)'});
    $('.unevenRight, .unevenLeft').css({'transition':'0s', 'opacity':'0'});

    if(icon.globalVariable.ourFollowersAreHetero) {
        $('.heteroA').css({'transform':'scale(1)'});
    } else {
        $('.homoA').css({'transform':'scale(1)'});
    }

    if(icon.globalVariable.theirFollowersAreHetero) {
        $('.heteroB').css({'transform':'scale(1)'});
    } else {
        $('.homoB').css({'transform':'scale(1)'});
    }

}

icon.display.unevenSign = function() {

    if(icon.globalVariable.ourFollowersAreHetero) {
        if(icon.globalVariable.showUnevenSign && icon.globalVariable.showUnevenIcon){
            $('.unevenLeft').css({'transition':'0.5s', 'opacity':'1'});
        }
    }

    if(icon.globalVariable.theirFollowersAreHetero) {
        if(icon.globalVariable.showUnevenSign && icon.globalVariable.showUnevenIcon){
            $('.unevenRight').css({'transition':'0.5s', 'opacity':'1'});
        }
    }

}
// array is defined inside icon.set.stage1 by the role array internally defined
// this array is something like [0,1,0, 0,0,1] where 1 is leader and 0's are followers
icon.tool.set.strongWeak = function(array) {

    var s, w, l;

    // create two true false array of length two
    var a1 = [1,0];
    var a2 = [1,0];

    // randomize their order
    a1 = icon.tool.shuffle(a1);
    a2 = icon.tool.shuffle(a2);

    // combine them
    var a3 = a1.concat(a2);

    // console.log('weakstrong sorted array: ' + a3);
    // console.log('myrole array: ' + array);

    for(var i = 0; i < array.length; i++) {

        // there was an issue with the follower icon hidden behind the leader
        // icon slightly being seen as the follower icons are a bit fat.
        // To overcome that this below fix is applied in here
        if(array[i]) {
            l = '.a' + (i + 1) + '1';
            $(l).css({'transform':'scale(0)'});
        }

        // console.log('inside for loop checking myrole array element: ' + array[i]);
        // then whenever we see in myrole array a zero bring this array
        // as whenever we see in myrole array a zero it means we are dealing with
        // a follower
        if(!array[i]) {

            // console.log('the role is follower');

            s = '.strong' + (i + 1);
            w = '.weak' + (i + 1);

            // console.log('strong string of this follower: ' + s);
            // console.log('weak string of this follower: ' + w);

            $(s).css({'display':'none'});
            $(w).css({'display':'none'});

            // console.log('displaying the weakstrong array inside the for loop: ' + a3);
            // console.log('weakstrong array specific to this follower: ' + a3[0]);

            // if true make the follower strong
            if(a3[0]) {
                // console.log('this follower is strong');
                $(s).css({'display':'flex'});
            } else {
                // console.log('this follower is weak');
                // if false make the follower weak
                $(w).css({'display':'flex'});
            }

            // console.log('finishing the procedure for one step of the loop');

            // shift the array
            a3.shift();

            // console.log('strongweak array after the shift: ' + a3);

        }

    }

}

icon.tool.matchIcon = function(array) {

    for(var i = 0; i < array.length; i++) {
        var myID = 'a' + (i + 1);
        var temp = document.getElementById(myID);
        temp.innerHTML = array[i];
    }

}

icon.tool.set.myRole = function(array) {

    // set everything to invisible
    $('.p0, .a10, .a11, .a20, .a21, .a30, .a31, .a40, .a41, .a50, .a51, .a60, .a61').css({'z-index':'0'});

    for(var i = 0; i < array.length; i++) {

        var myRole = array[i] ? 0 : 1;
        // array is true or false match that to the class tag a1x a2x a3x etc...
        var myClass = '.a' + (i + 1) + myRole;
        // we also have the crown icon for every icon cr1, cr2, cr3, etc...
        var myRoleClass = '.cr' + (i + 1);
        // all icons are initially at index 0
        $(myClass).css({'z-index':'1'});

        var myRole2 = array[i] ? '1' : '0';
        $(myRoleClass).css({'opacity': myRole2});

    }
}

icon.stage1.generateSortedArray = function() {

    icon.stage1.sortedArray = icon.tool.shuffle([1,2,3,4,5,6]);

}

icon.set.stage1 = function() {

    var mySort, myRole1, myRole2, roles;

    icon.display.genericIcons();

    // generate the shuffled array
    icon.stage1.generateSortedArray();

    // my sort is the shuffled array
    mySort = icon.stage1.sortedArray;
    // generate shuffled true false where true is for leader...
    // myrole1 is for the first group myrole2...
    myRole1 = icon.tool.shuffle([true, false, false]);
    myRole2 = icon.tool.shuffle([false, true, false]);
    // combine them into a single role array preserving the order
    roles = myRole1.concat(myRole2);

    // match icon matches the sorted number array with the numbers underneat the icons
    icon.tool.matchIcon(mySort);

    icon.tool.set.myRole(roles);


    icon.set.treatment();
    icon.display.treatment();
    icon.tool.set.strongWeak(roles);

    // hide  all the images of the sorted icons
    $('.imgwrap2').css({'opacity':'0'});
    // initially show the 6 yellow icons and replay button etc.
    $('.playerBracketImage, .playerRandomSortImage, .wrap1, .imgwrap1').css({'transition':'0.3s', 'opacity':'1'});
    $('.replayButton').css({'opacity':'0', 'z-index':'-1'});
    $('.hidder').css({'z-index':'2'});

    $('.unevenRight, .unevenLeft').css({'transition':'0s', 'opacity':'0'});

}

icon.stage1.animateSort = function(delay) {

    var d = delay === undefined ? 500 : delay;

    icon.stage1.showHide(0);
    setTimeout(()=>icon.stage1.showHide(1), d);
    setTimeout(()=>icon.stage1.showHide(2), 2*d);
    setTimeout(()=>icon.stage1.showHide(3), 3*d);
    setTimeout(()=>icon.stage1.showHide(4), 4*d);
    setTimeout(()=>icon.stage1.showHide(5), 5*d);
    setTimeout(()=>icon.stage1.hideShowButtons(), 5*d);
    setTimeout(()=>icon.display.unevenSign(), 7*d);


}

icon.stage1.showHide = function(index) {

    var myString1, myString2, myNewIndex;

    var newArray = icon.stage1.sortedArray;

    myString1 = '.initialIwIndex' + (index + 1);
    $(myString1).css({'opacity':'0'});

    myNewIndex = newArray.indexOf(index + 1);
    myString2 = '.iwIndex' + (myNewIndex + 1);
    $(myString2).css({'opacity':'1'})

}

icon.stage1.hideShowButtons = function() {
    $('.playerBracketImage, .playerRandomSortImage, .wrap1').css({'opacity':'0'});
    $('.replayButton').css({'opacity':'1', 'z-index':'2'});
    $('.hidder').css({'z-index':'-1'});
}

icon.stage1.button1 = document.getElementById('stage1RandomButton');
icon.stage1.button1.onclick = function() {

    icon.stage1.animateSort();
}

icon.stage1.button2 = document.getElementById('replayButton');
icon.stage1.button2.onclick = function() {

    icon.set.stage1();

}

icon.display.stage1 = function(show) {

    var display = show ? 'flex' : 'none';
    var o = show ? '1' : '0';

    $('.s1Icon').css({'display' : display});
    setTimeout(()=>{
        $('.s1Icon').css({'transition':'0.5s', 'opacity': o});
    }, 100)

}


////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////

var calculator = {

    globalVariable: {
        frame: {},
        tutorial: {},
        display: {},
        hover: {},
    },
    space: {
        update:{},
        open: {},
        close:{},
    },
    icons: {
        calculate: {},
        update: {},
        set: {},
        rescale: {},
        show: {},
        hide: {},
        enervate:{},
        enervate2:{},
    },
    values: {
        update: {},
        set: {},
    },
    graphics: {
        update: {},
        activate: {},
    },
    decisionSlider: {
        leader:{},
        follower:{},
    },
    results: {
        opacity:{},
        softHide:{},
        display:{},
        update:{},
        show:{},
        hide:{},
        disable:{},
        leader:{
            update:{},
            display:{},
        },
    },
    titles: {
        hs: {
            ghost:{},
        },
        contest: {},
        set:{},
        update:{},
        opacity:{},
    },
    slider : {
        followerDecision: {},
        playerDecision: {},
    },
    questions: {
        activate:{},
        spin1:{},
        spin2:{},
    },
    lock: {
        switch: {},
        vibrate: {},
        activate:{},
    },
    button: {
        enable: {},
        disable: {},
        display: {},
    },
    pointers: {
        wiggle: {},
        activate: {},
    },
    section: {
        example:{
            vertical:{},
            horizontal: {},
        },
        all:{
            adjust: {},
        },
        hs: {
            opacity:{},
            display:{},
            set:{},
            show:{},
            hide:{}
        },
        contest: {
            show:{},
            hide:{},
            display:{},
        },
        power: {
            set:{},
            opacity:{},
            display:{},
            adjust:{},
        },
        decision: {
            leader: {},
            follower: {},
            player: {},
        },
    },
    refresh: {},
    wheel: {},
    setup: {},
    roll: {},
    show: {},
    hide: {},

};

/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////



var efo, oefo, efi, oefi, pwin, efefo, oefefo;
var s1, h1, s2, h2, ts, th, os1, oh1, os2, oh2, tos, toh;

// unused
calculator.globalVariable.gameStage = undefined;


calculator.globalVariable.isOG1 = undefined;
calculator.globalVariable.isOG2 = undefined;
calculator.globalVariable.isIGA = undefined;
calculator.globalVariable.isIGB = undefined;

calculator.globalVariable.ourFollowersAreHetero = true;
calculator.globalVariable.theirFollowersAreHetero = true;

calculator.globalVariable.winnerLeaderIndex = 2;
calculator.globalVariable.winnerFollowerIndex = 1;

calculator.globalVariable.playerView = false;
calculator.globalVariable.playerIndex = undefined; //-1,0,1 (l,f1,f2)

calculator.globalVariable.tutorial.IGSameColor = undefined;
calculator.globalVariable.tutorial.IGDifferentColor = undefined;
calculator.globalVariable.tutorial.weAreInTutorial = undefined;


// RESULT DISPLAY ON/OFF VARIABLES (AFTER SPIN)
calculator.globalVariable.display.hsIcons = undefined;
calculator.globalVariable.display.hsResults = undefined;
calculator.globalVariable.display.hsMainTitle = undefined;
calculator.globalVariable.display.hsGhostTitle = undefined;
calculator.globalVariable.display.hsButton = undefined;
calculator.globalVariable.display.hsMinimize = undefined;

calculator.globalVariable.display.cResults = undefined;
calculator.globalVariable.display.cTitle = undefined;
calculator.globalVariable.display.cButton = undefined;
calculator.globalVariable.display.cMinimize = undefined;

calculator.globalVariable.contestResultsExist = false;

// HOVER ON/OFF VARIABLES
calculator.globalVariable.hover.hsMinimize = undefined;
calculator.globalVariable.hover.hsIcons = undefined;
calculator.globalVariable.hover.hsResults = undefined;
calculator.globalVariable.hover.hsMainTitle = undefined;
calculator.globalVariable.hover.hsGhostTitle = undefined;
calculator.globalVariable.hover.hsButton = undefined;

calculator.globalVariable.hover.cMinimize = undefined;
calculator.globalVariable.hover.cResults = undefined;
calculator.globalVariable.hover.cTitle = undefined;
calculator.globalVariable.hover.cButton = undefined;

calculator.decisionSlider.leader.isFlashing;


calculator.graphics.dynamicPowerBarText;


//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////


calculator.wheel.spinDuration = 1;
calculator.wheel.spinNumber = 3;
calculator.wheel.isSpinning = false;

calculator.wheel.create = function(probability, id) {

    var a = 100*probability;
    var b = 100-a;

    var leaderColorArray = ['rgb(60,60,60)', 'rgb(210,210,210)'];

    var followerAColorArray = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];
    var followerBColorArray = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];
    var colors;

    var lineColor = 'white';
    var lineWidth = 1;

    if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
        leaderColorArray = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
    }

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                followerAColorArray = ['rgb(60,60,60)', 'rgb(210,210,0)'];
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,0)'];
            }
        }

    }


    // no need to account for subjective view setup as the default setup is for the subjective view

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                followerAColorArray = ['rgb(60,60,60)', 'rgb(60,60,60)'];
            }
            if(calculator.globalVariable.isIGB) {
                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,210)'];
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                followerAColorArray = ['rgb(60,60,60)', 'rgb(210,210,0)'];
            }
            if(calculator.globalVariable.isIGB) {
                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,0)'];
            }
        }

    }

    //---- only for tutorial ----//

    //---------------------------//


    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {
        colors = leaderColorArray;
    }

    if(calculator.globalVariable.isIGA) {
        colors = followerAColorArray;
    }

    if(calculator.globalVariable.isIGB) {
        colors = followerBColorArray;
    }

    calculator.wheel.myWheelObj = new Winwheel({
        'canvasId': id,
        'numSegments': 2,
        'lineWidth' : lineWidth,
        'outerRadius': 58, // controls the size of the theWheel
        'textOrientation' : 'curved',    // Set orientation. horizontal, vertical, curved.
        'textFontFamily'  : 'Courier',     // Monospace font best for vertical and curved.
        'rotationAngle':Math.random()*360,
        'textFontSize':20,

        'segments':
        [
            {
                'fillStyle' : colors[0],
                'strokeStyle':lineColor,
                // 'textFillStyle': 'white',
                // 'text'      : 'A wins',
                'size'      : winwheelPercentToDegrees(a),
            },
            {
                'fillStyle' : colors[1],
                'strokeStyle':lineColor,
                // 'textFillStyle': 'rgb(60, 60, 60)',
                // 'text'      : 'B wins',
                'size'      : winwheelPercentToDegrees(b),
            },
        ],
        'animation' :
        {
            'type'     : 'spinToStop',
            'duration' : calculator.wheel.spinDuration,
            'spins'    : calculator.wheel.spinNumber,
            'callbackFinished' : '',
        }
    });

}


/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////


var logistic2 = function(val , k) {
    var L = 1;
    var m = 0.5;
    var result;
    result= L / (1 + Math.exp(-k * (val - m)));
    return result;
}

var nzt = function(val) {
    return (val != 0) ? val : '';
}


//-------------- PIE ----------------//
calculator.globalVariable.pieBorderRight = false;
calculator.globalVariable.pieBorderLeft = false;
calculator.graphics.update.pie = function() {

    var x = pwin;
    var y = 1-pwin;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var pieColors;
    var lcolors = ['rgb(210, 210, 210)', 'rgb(60, 60, 60)'];
    var fcolors = ['rgb(60, 60, 60)', 'rgb(35, 79, 30)'];
    var ofcolors = ['rgb(210, 210, 210)', 'rgb(35, 79, 30)'];

    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                fcolors = ['rgb(60,60,60)', 'rgb(60,60,60)'];
            }
            if(calculator.globalVariable.isIGB) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,210)'];
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                fcolors = ['rgb(210,210,0)', 'rgb(60,60,60)'];
            }
            if(calculator.globalVariable.isIGB) {
                ofcolors = ['rgb(210,210,0)', 'rgb(210,210,210)'];
            }
        }

    }
    //---- only for tutorial ----//

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                fcolors = ['rgb(60,60,60)', 'rgb(210,210,0)'];
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,0)'];
            }
        }

    }

    //---------------------------//


    if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
        lcolors = ['rgb(210, 210, 210)', 'rgb(35, 79, 30)'];
    }


    var p1, p2;

    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

        pieColors = lcolors;

        p1 = 'LEADER A';
        p2 = 'LEADER B';

    }

    if(calculator.globalVariable.isIGA) {

        pieColors = fcolors;

        p1 = 'FOLLOWER 1A';
        p2 = 'FOLLOWER 2A';

        if(calculator.globalVariable.ourFollowersAreHetero) {

            p1 = 'STRONG F.';
            p2 = 'WEAK F.';

            if(calculator.globalVariable.playerIndex === 1) {
                p1 = 'WEAK F.';
                p2 = 'STRONG F.';
            }

        }

    }

    // RELEVANT ONLY FOR TUTORIAL
    if(calculator.globalVariable.isIGB) {

        pieColors = ofcolors;

        p1 = 'FOLLOWER 1B';
        p2 = 'FOLLOWER 2B';

        if(calculator.globalVariable.theirFollowersAreHetero) {

            p1 = 'STRONG F.';
            p2 = 'WEAK F.';

            if(calculator.globalVariable.playerIndex === 1) {

                p1 = 'WEAK F.';
                p2 = 'STRONG F.';

            }

        }

    }


    var pieBorderArray = Array(2);
    pieBorderArray = [1,1];
    var pieBorderColor = 'white';

    if(calculator.globalVariable.pieBorderLeft) {
        pieBorderArray = [0,3];
        pieBorderColor = 'lime';
    }
    if(calculator.globalVariable.pieBorderRight) {
        pieBorderArray = [3,0];
        pieBorderColor = 'lime';
    }


    var playerLabels = [p2, p1];

    var data = [{
        values: [y, x],
        labels: playerLabels,
        textinfo:'none',
        textfont: {
            // color: ['black', 'white'],
            color: ['transparent', 'transparent']
        },
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: pieColors,
            line: {
                color: pieBorderColor,
                width: pieBorderArray,
            },
        }
    }];

    var layout = {
        height: 115,
        width: 115,
        font:{
            size: 10
        },
        margin: {"t": 2, "b": 2, "l":2, "r": 2},
        showlegend: false,
    };

    Plotly.react('pie', data, layout, {displayModeBar: false});
}


//-------------- LEADER EFFORT ----------------//
calculator.graphics.update.effortBar = function(e, barId, ourSide, axisOn) {

    var y = e;
    if(typeof(x) === 'undefined') x = 0;

    var upperBound, myTickVal, myTickText, myRange;

    var colorArrays = Array(2);
    var insideTextColor = Array(2);

    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

        colorArrays = ['rgb(60, 60, 60)', 'rgb(210, 210, 210)'];
        upperBound = 742;
        myTickVal = [0, 50, 100, 150, 250, 350, 500, 650, 800];
        myTickText = [0, 50, 100, 150, 250, 350, 500, 650, 800];
        myRange = [0, 800];
        insideTextColor = ['white', 'black'];

        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
            colorArrays[0] = 'rgb(35, 79, 30)';
        }

    }

    if(calculator.globalVariable.isIGA || calculator.globalVariable.isIGB) {

        upperBound = 128;
        myTickVal = [0, 5, 10, 20, 30, 50, 75, 100, 140];
        myTickText = [0, 5, 10, 20, 30, 50, 75, 100, 140];
        myRange = [0, 140];

    }

    if(calculator.globalVariable.isIGA) {

        colorArrays = ['rgb(35, 79, 30)', 'rgb(60, 60, 60)'];
        insideTextColor = ['white', 'white'];

    }

    if(calculator.globalVariable.isIGB) {

        colorArrays = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
        insideTextColor = ['white', 'black'];

    }

    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                colorArrays = ['rgb(60,60,60)', 'rgb(60,60,60)'];
                insideTextColor = ['white', 'white'];
            }
            if(calculator.globalVariable.isIGB) {
                colorArrays = ['rgb(210,210,210)', 'rgb(210,210,210)'];
                insideTextColor = ['black', 'black'];
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                colorArrays = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                insideTextColor = ['white', 'black'];
            }
            if(calculator.globalVariable.isIGB) {
                colorArrays = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                insideTextColor = ['black', 'black'];
            }
        }

    }
    //---- only for tutorial ----//

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                colorArrays = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                insideTextColor = ['white', 'black'];
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                colorArrays = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                insideTextColor = ['black', 'black'];
            }
        }

    }

    //---------------------------//

    var mColor = ourSide ? colorArrays[0] : colorArrays[1];

    var mytextpos = 'outside';

    var somecolor = 'black';

    if(y > upperBound) {

        mytextpos = 'inside';


        if(barId === 'barl1' || barId === 'example_barl1') {
            somecolor = insideTextColor[0];
        }

        if(barId === 'barl2') {
            somecolor = insideTextColor[1];
        }

    }


    var data = [{
        x: [y],
        name: [''],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        cliponaxis: false,
        marker:{
            color: mColor,
        },
        text: [y],
        textfont: {
            size: '14',
            color:somecolor,
        },
        orientation: 'h',
        // textanchor: 'right',
        textposition: mytextpos,
    }];

    var ticktextcolors = ['black', 'white'];
    var tindex = 1;

    var papercolors = ['rgb(60, 60, 60)', 'rgb(210, 210, 210)', 'rgb(18,103,48)', 'rgb(35, 79, 30)'];
    var pindex = 1;

    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

        if(barId === 'barl1' || barId === 'example_barl1'){//darkgray white //NEED TO DO FOR 4 OTHER IDS
            pindex=0;
            tindex=1;

            if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
                pindex = 3;
            }
        }

        if(barId === 'barl2'){
            //lightgray black
            pindex=1;
            tindex=0;
        }

    }



    if(calculator.globalVariable.isIGA) {

        if(barId === 'barl1'){//darkgreen white
            pindex=2;
            tindex=1;
        }

        if(barId === 'barl2'){
            //darkgray white
            pindex=0;
            tindex=1;
        }

    }

    if(calculator.globalVariable.isIGB) {

        if(barId === 'barl1'){//darkgreen white
            pindex=2;
            tindex=1;
        }

        if(barId === 'barl2'){
            //lighgray black
            pindex=1;
            tindex=0;
        }

    }



    var layout = {
        paper_bgcolor: papercolors[pindex],
        barmode: 'group',
        height: 75,
        width: 405,
        margin: {"t": 20, "b": 20, "l": 25, "r": 27},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: myRange,
            layer: 'below traces',
            tickfont: {
                size: 10,
                color:ticktextcolors[tindex],
            },
            tickmode: 'array',
            tickvals: myTickVal,
            ticktext: myTickText,
            tickangle: -30,
            ticks:'',
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(207, 202, 202)",
        },
        yaxis: {
            ticks: '',
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            showticklabels: false,
        },
    }




    Plotly.react(barId, data, layout, {displayModeBar: false});
}

calculator.graphics.update.effortSliderRange = function() {

    var myMax;

    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {
        myMax = 800;
    }
    if(calculator.globalVariable.isIGA || calculator.globalVariable.isIGB) {
        myMax = 140;
    }

    $("#lSlider1, #olSlider1, #dSliderL").attr({
        "max" : myMax,
        "min" : 0
    });

}


// USES calculator.globalVariable.typeOfContest TO DETErmine leader slider colors
// it is not concerned with the me coloring but leader vs leader or
// follower vs follower for either group ig slider top coloring
// it also updates the slider range for type of contest
// it also determines the resulting text's tag as this is dependent on leader or follower
calculator.graphics.update.contestSliderBackgroundColor = function() {


    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

        $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
        $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
            $('.bswLeft').css({'background-color': 'rgb(35, 79, 30)'});
        }

    }

    if(calculator.globalVariable.isIGA) {

        $('.bswLeft').css({'background-color':'rgb(18,103,48)', 'color':'white'});
        $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

    }

    if(calculator.globalVariable.isIGB) {

        $('.bswLeft').css({'background-color':'rgb(18,103,48)', 'color':'white'});
        $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

    }

    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});
            }
            if(calculator.globalVariable.isIGB) {
                $('.bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});
            }
            if(calculator.globalVariable.isIGB) {
                $('.bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});
            }
        }

    }
    //---- only for tutorial ----//

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                $('.bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});
            }
        }

    }

    //---------------------------//


}


//-------------- HELP SABO BARS ----------------//
calculator.graphics.update.helpSaboBar = function(a, barId, lighter, axisOn) {

    var x, colors, myLabel, myColor, position;

    x = a;

    if(typeof(x) === 'undefined') x = 0;

    if(lighter){
        colors = ['rgb(200,200,255)',  'rgb(255,200,200)'];
    } else {
        colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];
    }

    myColor = x > 0 ? colors[0] : colors[1];
    myLabel = Math.abs(x);
    position = myLabel > 34 ? 'inside' : 'outside';

    var data = [{
        y: [x],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [myColor],
            line: {
                color: 'none',
                width: 0
            }
        },
        text: [myLabel],
        textfont: {
            size: '16',
            color: 'black',
        },
        textanchor: 'right',
        textposition: position,
        cliponaxis: false,
    }];



    var ticktextcolors = ['black', 'white'];
    var tindex = 1;

    var papercolors = ['rgb(35,79,30)', 'rgb(60, 60, 60)' , 'rgb(210, 210, 210)'];
    var pindex = 1;

    if(barId === 'barf2'){//darkgray white
        tindex = 1;
        pindex = 1;
        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === 1) {
            pindex = 0;
        }
    }
    if(barId === 'barf1' || barId === 'example_barf1'){//darkgray or darkgreen and  white
        tindex = 1;
        pindex = 1;
        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === 0) {
            pindex = 0;
        }
    }
    if(barId === 'obarf1' || barId === 'obarf2'){//lightgray black
        tindex = 0;
        pindex = 2;
    }


    var layout = {
        paper_bgcolor: papercolors[pindex],
        barmode: 'group',
        height: 300,
        width: 110,
        margin: {"t": 5, "b": 5, "l": 55, "r": 25},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [-40,40],
            layer: 'below traces',
            ticks:'',
            tickfont: {
                size: 9,
                color:ticktextcolors[tindex],
            },
            tickmode: 'array',
            tickvals: [-40,  -20, -10, -5, 0, 5, 10,  20, 40],
            ticktext: [40, 20, 10, 5, 0, 5, 10, 20, 40],
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(207, 202, 202)",

        },
        xaxis: {
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },

    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

calculator.graphics.update.totalHelpBar = function(a,b) {
    var x = a;
    var y = b;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;

    var data = [{
        y: [x, y],
        name: ['Opposing Group', 'Your Group'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(140, 140, 255)', 'rgb(200,200,255)'],
        },
        text: [nzt(x), nzt(y)],
        textposition: 'auto',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 100,//60
        width: 250,//150
        // title: 'Total Help',
        margin: {"t": 20, "b": 0, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            autorange: false,
            showgrid: false,
            range: [0,80]
        },
        xaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },
        bargap: 0.3,//0.1
    };

    Plotly.react('helpBar', data, layout, {displayModeBar: false});
}

calculator.graphics.update.totalSaboBar = function(a, b) {
    var x = -a;
    var y = -b;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;

    var data = [{
        y: [x, y], //[y, x],
        x: ['Opposing Group', 'Your Group'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(255,140,140)', 'rgb(255,200,200)'],
        },
        text: [nzt(-x), nzt(-y)],
        textposition: 'auto',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 100,//60
        width: 250,//150
        margin: {"t": 0, "b": 20, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            autorange: false,
            showgrid: false,
            range: [-80,0]
        },
        xaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },
        bargap: 0.3,//0.1
    };

    Plotly.react('saboBar', data, layout, {displayModeBar: false});
}


//-------------- DECISION SLIDER FOLLOWER ----------------//

calculator.decisionSlider.follower.isFlashing = true;
calculator.decisionSlider.follower.flash = function(state) {

    if(calculator.decisionSlider.follower.isFlashing) {

        if(state === 0) {
            $('.inputF').css({'transition':'0.7s', 'box-shadow':'0px 0px 10px 5px orange'});
            if(calculator.globalVariable.playerIndex === 0) {
                $('.bf1').css({'transition':'0.7s', 'box-shadow':'0px 0px 10px 5px orange'});
            }
            if(calculator.globalVariable.playerIndex === 1) {
                $('.bf2').css({'transition':'0.7s', 'box-shadow':'0px 0px 10px 5px orange'});
            }
            setTimeout(()=>calculator.decisionSlider.follower.flash(1), 700);
        }
        if(state === 1) {
            $('.inputF').css({'transition':'0.7s', 'box-shadow':'0px 0px 0px 0px orange'});
            if(calculator.globalVariable.playerIndex === 0) {
                $('.bf1').css({'transition':'0.7s', 'box-shadow':'0px 0px 0px 0px orange'});
            }
            if(calculator.globalVariable.playerIndex === 1) {
                $('.bf2').css({'transition':'0.7s', 'box-shadow':'0px 0px 0px 0px orange'});
            }
            setTimeout(()=>calculator.decisionSlider.follower.flash(0), 700);
        }

    } else {
        $('.inputF').css({'transition':'0.7s', 'box-shadow':'0px 0px 4px 2px lime'});

        if(calculator.globalVariable.playerIndex === 0) {
            $('.bf1').css({'transition':'0.7s', 'box-shadow':'0px 0px 4px 2px lime'});
        }
        if(calculator.globalVariable.playerIndex === 1) {
            $('.bf2').css({'transition':'0.7s', 'box-shadow':'0px 0px 4px 2px lime'});
        }

    }

}

calculator.decisionSlider.follower.helpSaboBar = function(a, axisOn) {

    var y = a;
    if(typeof(y) === 'undefined') y = 0;

    var colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];

    var myLabel = y > 0 ? y : -y;
    var myColor = y > 0 ? colors[0] : colors[1];


    var mytextpos= myLabel > 38 ? 'inside':'outside';


    var ticktextcolors = ['black', 'white'];
    var tindex = 1;

    var papercolors = ['white', 'rgb(35,79,30)'];
    var pindex = 1;


    var data = [{
        x: [y],
        orientation: 'h',
        name: [''],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [myColor],
            line: {
                color: 'none',
                width: 0
            }
        },
        text: [myLabel],
        textfont: {
            size: '50',
            color:'black',
        },
        textposition: mytextpos,
        cliponaxis: false,
    }];

    var layout = {
        paper_bgcolor: papercolors[pindex],
        barmode: 'group',
        height: 75,
        width: 975,
        margin: {"t": 20, "b": 20, "l": 5, "r": 20},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: [-40,40],
            layer: 'below traces',
            ticks:'',
            tickfont: {
                size: 10,
                color:ticktextcolors[tindex],
            },
            tickmode: 'array',
            tickvals: [-40, -30, -20, -12, -8, -4, -2, 0, 2, 4, 8, 12, 20, 30, 40],
            ticktext: [40, 30, 20, 12, 8, 4, 2, 0, 2, 4, 8, 12, 20, 30, 40],
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(207, 202, 202)",

        },
        yaxis: {
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },

    };

    Plotly.react('bardf', data, layout, {displayModeBar: false});

}

calculator.decisionSlider.follower.enable = function() {
    $('.decisionWrapF').css({'display':'flex'});
}

calculator.decisionSlider.follower.disable = function() {
    $('.decisionWrapF').css({'display':'none'});
}


//-------------- DECISION SLIDER LEADER ----------------//
calculator.decisionSlider.leader.effortBar = function(a, axisOn) {


        var y = a;

        var upperBound, myTickVal, myTickText, myRange;

        var colorArrays = Array(1);
        var insideTextColor = Array(1);

        colorArrays = ['rgb(35, 79, 30)'];
        insideTextColor = ['white'];

        if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

            upperBound = 742;
            myTickVal = [0, 50, 100, 150, 250, 350, 500, 650, 800];
            myTickText = [0, 50, 100, 150, 250, 350, 500, 650, 800];
            myRange = [0, 800];

        }

        if(calculator.globalVariable.isIGA || calculator.globalVariable.isIGB) {

            upperBound = 128;
            myTickVal = [0, 5, 10, 20, 30, 50, 75, 100, 140];
            myTickText = [0, 5, 10, 20, 30, 50, 75, 100, 140];
            myRange = [0, 140];

        }

        var mColor = colorArrays[0];

        var mytextpos = 'outside';

        var somecolor = 'black';

        if(y > upperBound) {

            mytextpos = 'inside';
            somecolor = insideTextColor[0];

        }


        var data = [{
            x: [y],
            name: [''],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            cliponaxis: false,
            marker:{
                color: mColor,
            },
            text: [y],
            textfont: {
                size: '50',
                color:somecolor,
            },
            orientation: 'h',
            // textanchor: 'right',
            textposition: mytextpos,
        }];


        var ticktextcolors = ['white'];
        var tindex = 0;

        var papercolors = ['rgb(35, 79, 30)'];
        var pindex = 0;


        var layout = {
            paper_bgcolor: papercolors[pindex],
            barmode: 'group',
            height: 75,
            width: 975,
            margin: {"t": 20, "b": 20, "l": 5, "r": 20},
            xaxis: {
                side: 'top',
                fixedrange: true,
                autorange: false,
                range: myRange,
                layer: 'below traces',
                tickfont: {
                    size: 10,
                    color:ticktextcolors[tindex],
                },
                tickmode: 'array',
                tickvals: myTickVal,
                ticktext: myTickText,
                tickangle: -30,
                ticks:'',
                showline: false,
                showgrid: axisOn,
                showticklabels: axisOn,
                gridcolor: "rgb(207, 202, 202)",
            },
            yaxis: {
                ticks: '',
                layer: 'below traces',
                fixedrange: true,
                showline: false,
                showgrid: false,
                showticklabels: false,
            },
        }




        Plotly.react('bardl', data, layout, {displayModeBar: false});

}

calculator.decisionSlider.leader.enable = function() {
    $('.decisionWrapL').css({'display':'flex'});
}

calculator.decisionSlider.leader.disable = function() {
    $('.decisionWrapL').css({'display':'none'});
}


//-------------- POWER RATIO BAR ----------------//
calculator.graphics.activate.dynamicPowerBarText = function(place) {

    $('.pTitleDynamicLeft').css({'transition':'0s', 'opacity':'0'});
    $('.pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'0'});
    $('.pTitleDynamicRight').css({'transition':'0s', 'opacity':'0'});

    if(place === 'middle') {

        $('.pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
        $('.pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
        $('.pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

        $('.pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'353px', 'margin-right':'5px'});
        $('.pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'103px', 'margin-right':'-21px'});
        $('.pTitleDynamicRight').css({'transition':'0s', 'marign-left':'5px'});

    }

    if(place === 'left') {

        $('.pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
        $('.pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
        $('.pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

        $('.pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'15px', 'margin-right':'5px'});
        $('.pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'29px', 'margin-right':'-21px'});

    }

    if(place === 'right') {

        $('.pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
        $('.pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
        $('.pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

        $('.pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'758px', 'margin-right':'41px'});
        $('.pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'0px', 'margin-right':'-21px'});

    }


}

calculator.globalVariable.powerBarRight = false;
calculator.globalVariable.powerBarLeft = false;

calculator.graphics.update.efficiencyBar = function(efficiency1, efficiency2) {

    var efi1, efi2;
    efi1 = efficiency1 != undefined ? efficiency1 : efi;
    efi2 = efficiency2 != undefined ? efficiency2 : oefi;

    var val1 = efi1 / (efi1 + efi2);
    var val2 = efi2 / (efi1 + efi2);

    if(!calculator.graphics.dynamicPowerBarText) {

        calculator.graphics.activate.dynamicPowerBarText();

    }

    if(efi1 === efi2 && calculator.graphics.dynamicPowerBarText) {

        calculator.graphics.activate.dynamicPowerBarText('middle');

    }

    if((efi1 / efi2) > 1){
        var myText = (val1 >= 0.99) ? '100+' : (efi1 / efi2).toFixed(2);
        if(calculator.graphics.dynamicPowerBarText) {
            calculator.graphics.activate.dynamicPowerBarText('left');
        }
    } else {
        myText = 1;
    }

    if((efi1 / efi2) < 1){
        var myText2 = (val2 >= 0.99) ? '100+' : (efi2 / efi1).toFixed(2);
        if(calculator.graphics.dynamicPowerBarText) {
            calculator.graphics.activate.dynamicPowerBarText('right');
        }
    } else {
        myText2 = 1;
    }


    val1 = logistic2(val1, 5);
    val2 = 1 - val1;

    var gapSize = 0.06;
    val1 = val1 - gapSize/2;
    val2 = val2 - gapSize/2;

    var lcolors = ['rgb(60,60,60)', 'rgb(210,210,210)'];
    var fcolors = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];
    var ofcolors = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];
    var cA = Array(2);

    if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
        lcolors = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
    }

    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                fcolors = ['rgb(60,60,60)', 'rgb(60,60,60)'];
            }
            if(calculator.globalVariable.isIGB) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,210)'];
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                fcolors = ['rgb(210,210,0)', 'rgb(60,60,60)'];
            }
            if(calculator.globalVariable.isIGB) {
                ofcolors = ['rgb(210,210,0)', 'rgb(210,210,210)'];
            }
        }

    }
    //---- only for tutorial ----//

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                fcolors = ['rgb(60,60,60)', 'rgb(210,210,0)'];
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,0)'];
            }
        }

    }

    //---------------------------//


    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {
        cA = lcolors;
    }
    if(calculator.globalVariable.isIGA) {
        cA = fcolors;
    }
    if(calculator.globalVariable.isIGB) {
        cA = ofcolors;
    }

    var myLineWith1 = 0;
    var myLineWith2 = 0;

    if(calculator.globalVariable.powerBarLeft) {
        myLineWith1 = 4
    }
    if(calculator.globalVariable.powerBarRight) {
        myLineWith2 = 4
    }



    var player1 = {
        y: ['group 1'],
        x: [val1],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker: {
            color: cA[0],
            line: {
                color: 'lime',
                width: myLineWith1,
            }
        },
        text: myText,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'white',
            size: '18'
        },
    };

    var gap = {
        y: ['group 1'],
        x: [gapSize],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker: {
            color: 'white',
            line: {
                color: 'white',
                width: 0,
            }
        },
        text: ':',
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'black',
            size: '18'
        },
    };

    var player2 = {
        y: ['group 1'],
        x: [val2],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        fixedrange: true,
        marker: {
            color: cA[1],
            line: {
                color: 'lime',
                width: myLineWith2,
            }
        },
        text: myText2,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            size: '18'
        },
    };

    var data = [player1, gap, player2];

    var layout = {
        barmode: 'stack',
        height: 40,
        width: 975,
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        xaxis: {
            fixedrange: true,
            autorange: false,
            range: [0,1],
            showline: false,
            showgrid: false,
            showticklabels: false,
        },
        yaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            showticklabels: false,
        }

    };

    Plotly.react('powerRatio', data, layout, {displayModeBar: false});

}


//-------------- GRID GRAPHICS ----------------//
calculator.graphics.update.barLabelX = function(barId, show) {
    var update = {
        'xaxis.showticklabels': show
    };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.barGridX = function(barId, show) {
    var update = {
        'xaxis.showgrid': show
        };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.barLabelY = function(barId, show) {
    var update = {
        'yaxis.showticklabels': show
    };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.barGridY = function(barId, show) {
    var update = {
        'yaxis.showgrid': show
        };
    Plotly.relayout(barId, update);
}


//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////


//---- CALCULATE TOTAL HELP AND SABOTAGE -----//
calculator.values.update.totalHelpSabo = function() {

    th = h1 + h2;
    ts = s1 + s2;
    toh = oh1 + oh2;
    tos = os1 + os2;

    // update total help sabo graphics
    calculator.graphics.update.totalHelpBar(th, toh);
    calculator.graphics.update.totalSaboBar(ts, tos);

    calculator.icons.update.leaderAuraColor();
    calculator.icons.update.followerArrows();
    calculator.icons.update.leaderSize();


}


//----- CALCULATE LEADER EFFICINCIES -----//
// VALUES: values.update.totalHelpSabo()
// GRAPHICS: graphics.update.efficiencyBar()
calculator.values.update.efficiencies = function() {

    calculator.values.update.totalHelpSabo();

    efi = (1 + th) / (1 + ts);
    oefi = (1 + toh) / (1 + tos);

    calculator.graphics.update.efficiencyBar();

}


//----- CALCULATE PROBABILITIES GIVEN EFFICIENCIES -----//
// Does not call values.efficiencies takes it as given
// GRAPHICS: graphics.update.pie()
calculator.values.update.probability = function() {

    efefo = efo * efi;
    oefefo = oefo * oefi;
    pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));

    calculator.graphics.update.pie();

}


//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////


// Decision Sliders

//FOLLOWER HELP AND SABOTAGE
calculator.slider.followerDecision.helpSabo = document.getElementById('dSliderF');
calculator.slider.followerDecision.helpSabo.oninput = function() {

    calculator.wheel.hide();

    // get the value from the slider
    var dValue = parseFloat(calculator.slider.followerDecision.helpSabo.value);

    // update bar plot
    calculator.decisionSlider.follower.helpSaboBar(dValue, true);

    // SYNC HELP SABO VALUES AND HELP SABO BARS GIVEN FOLLOWER INDEX

    // if you are the first follower (strong)
    if(calculator.globalVariable.playerIndex === 0) {

        //convert it to sabotage or help of follower 1
        s1 = dValue >= 0 ? 0 : -dValue;
        h1 = dValue >= 0 ? dValue : 0;

        //synching sliders with follower 1 slider
        $('#vSlider1').prop('value', dValue);
        $('#vSlider1').change();

        // call update.bar for hs for follower 1
        calculator.graphics.update.helpSaboBar(dValue, 'barf1', false, false);

    }

    //if you are the second follower (weak)
    if(calculator.globalVariable.playerIndex === 1) {

        //convert it to sabotage or help of follower 2
        s2 = dValue >= 0 ? 0 : -dValue;
        h2 = dValue >= 0 ? dValue : 0;

        //synching sliders with follower 2 slider
        $('#vSlider2').prop('value', dValue);
        $('#vSlider2').change();

        // call update.bar for hs for follower 2
        calculator.graphics.update.helpSaboBar(dValue, 'barf2', false, false);

    }

    calculator.values.update.efficiencies();
    calculator.values.update.probability();
    calculator.results.update.allTextAndColors();


    //WILL ADD AN ACTIVE WIGGLE SWITCH OFF HERE

}

// Decision Sliders

// EFFORT

calculator.slider.playerDecision.effort = document.getElementById('dSliderL');
calculator.slider.playerDecision.effort.oninput = function() {


    calculator.wheel.hide();


    // get the value from the slider
    efo = parseFloat(calculator.slider.playerDecision.effort.value);


    // update bar plot
    calculator.decisionSlider.leader.effortBar(efo, true);


    // slider sync
    $('#lSlider1').prop('value', efo);
    $('#lSlider1').change();


    // bar plot sync
    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.effortBar(efo, 'barl1', ourSide, !showAxis)


    calculator.values.update.efficiencies();
    calculator.values.update.probability();
    calculator.results.update.allTextAndColors();


    //WILL ADD AN ACTIVE WIGGLE SWITCH OFF HERE


}

//------- EXAMPLE EFFORT SECTION -------//

//Player 1
calculator.slider.example_l1= document.getElementById('example_lSlider1');
calculator.slider.example_l1.oninput = function() {

    efo = parseFloat(calculator.slider.example_l1.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.effortBar(efo, 'example_barl1', ourSide, showAxis);

    calculator.graphics.update.barLabelX('example_barl1', true);

    calculator.pointers.example_switch1 = false;

}

// Follower 1
calculator.slider.example_f1= document.getElementById('example_vSlider1');
calculator.slider.example_f1.oninput = function() {

    // calculator.graphics.update.barLabelY('example_barf1', true);

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.example_f1.value);

    s1 = hsValue > 0 ? 0 : -hsValue;
    h1 = hsValue > 0 ? hsValue : 0;

    calculator.graphics.update.helpSaboBar(hsValue, 'example_barf1', !theirSide, showAxis);

    calculator.pointers.switches[2] = false;

}

//--------------------------------------//

//Player 1
calculator.slider.l1= document.getElementById('lSlider1');
calculator.slider.l1.oninput = function() {

    calculator.wheel.hide();

    efo = parseFloat(calculator.slider.l1.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.effortBar(efo, 'barl1', ourSide, showAxis);

    calculator.results.update.allTextAndColors();

    calculator.graphics.update.barLabelX('barl1', true);

    calculator.values.update.probability();

    calculator.pointers.switches[0] = false;

    // slider sync
    $('#dSliderL').prop('value', efo);
    $('#dSliderL').change();

    calculator.decisionSlider.leader.effortBar(efo, true);

}

//Player 2
calculator.slider.l2 = document.getElementById('olSlider1');
calculator.slider.l2.oninput = function() {

    calculator.wheel.hide();

    oefo = parseFloat(calculator.slider.l2.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.effortBar(oefo, 'barl2', !ourSide, showAxis);

    calculator.results.update.allTextAndColors();

    calculator.values.update.probability();

    calculator.graphics.update.barLabelX('barl2', true);

    calculator.pointers.switches[1] = false;

}


// Help Sabotage Section

// LEFT SIDE

// Follower 1
calculator.slider.f1= document.getElementById('vSlider1');
calculator.slider.f1.oninput = function() {

    calculator.graphics.update.barLabelY('barf1', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.f1.value);

    s1 = hsValue > 0 ? 0 : -hsValue;
    h1 = hsValue > 0 ? hsValue : 0;

    calculator.values.update.efficiencies();

    calculator.values.update.probability();

    calculator.graphics.update.helpSaboBar(hsValue, 'barf1', !theirSide, showAxis);

    calculator.results.update.allTextAndColors();

    calculator.pointers.switches[2] = false;

    // SYNC WITH THE DECISION SLIDER IF IT IS A MATCH
    // if you are the first follower (strong)
    if(calculator.globalVariable.playerIndex === 0) {

        //update decision slider
        calculator.decisionSlider.follower.helpSaboBar(hsValue, false);

        //synching sliders with d slider
        $('#dSliderF').prop('value', hsValue);
        $('#dSliderF').change();

    }

}

// Follower 2
calculator.slider.f2= document.getElementById('vSlider2');
calculator.slider.f2.oninput = function() {

    calculator.graphics.update.barLabelY('barf2', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.f2.value);

    s2 = hsValue > 0 ? 0 : -hsValue;
    h2 = hsValue > 0 ? hsValue : 0;

    calculator.values.update.efficiencies();
    calculator.values.update.probability();

    calculator.graphics.update.helpSaboBar(hsValue, 'barf2', !theirSide, showAxis);
    calculator.results.update.allTextAndColors();

    calculator.pointers.switches[3] = false;

    // SYNC WITH THE DECISION SLIDER IF IT IS A MATCH
    // if you are the second follower (weak)
    if(calculator.globalVariable.playerIndex === 1) {

        //update decision slider
        calculator.decisionSlider.follower.helpSaboBar(hsValue, false);

        //synching sliders with d slider
        $('#dSliderF').prop('value', hsValue);
        $('#dSliderF').change();

    }

}

// RIGHT SIDE

// Follower 1
calculator.slider.of1= document.getElementById('ovSlider1');
calculator.slider.of1.oninput = function() {

    calculator.graphics.update.barLabelY('obarf1', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.of1.value);

    os1 = hsValue > 0 ? 0 : -hsValue;
    oh1 = hsValue > 0 ? hsValue : 0;

    calculator.values.update.efficiencies();

    calculator.values.update.probability();

    calculator.graphics.update.helpSaboBar(hsValue, 'obarf1', theirSide, showAxis);

    calculator.results.update.allTextAndColors();

    calculator.pointers.switches[4] = false;

}

// Follower 2
calculator.slider.of2= document.getElementById('ovSlider2');
calculator.slider.of2.oninput = function() {

    calculator.graphics.update.barLabelY('obarf2', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.of2.value);

    os2 = hsValue > 0 ? 0 : -hsValue;
    oh2 = hsValue > 0 ? hsValue : 0;

    calculator.values.update.efficiencies();

    calculator.values.update.probability();

    calculator.graphics.update.helpSaboBar(hsValue, 'obarf2', theirSide, showAxis);

    calculator.results.update.allTextAndColors();

    calculator.pointers.switches[5] = false;

}


////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////


//------------------------------------------------//
//------------------------------------------------//
//------------ DECISION SLIDER SECTIONS ----------//
//------------------------------------------------//
//------------------------------------------------//

//----- LEADER DECISION SLIDER ------//

$('#dSliderL').hover(
    function() {

        setTimeout(()=>calculator.graphics.update.barLabelX('bardl', true), 150);


        calculator.globalVariable.pieBorderLeft = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderLeft = true;
        calculator.icons.enervate.leaderLeft(0);
        calculator.globalVariable.enervate2LeaderLeft = false;

        $('.activeLeaderLeft').css({'opacity':'1'});
        $('.passiveLeaderLeft').css({'opacity':'0'});

        $('.bswLeft').css({'box-shadow':'0px 0px 1px 4px lime'});


    },
    function() {

        setTimeout(()=>calculator.graphics.update.barLabelX('bardl', false), 150);
        calculator.graphics.update.barGridX('bardl', false);

        calculator.globalVariable.pieBorderLeft = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderLeft = false;
        calculator.globalVariable.enervate2LeaderLeft = true;
        calculator.icons.enervate2.leaderLeft(0);

        $('.activeLeaderLeft').css({'opacity':'0'});
        $('.passiveLeaderLeft').css({'opacity':'1'});

        $('.bswLeft').css({'box-shadow':'0px 1px 1px 0px black'});

    }
)

$('.inputL').hover(

    function() {

        // even the follower results are not shown make sure to display the ghost title for contest on top of leader icons
        if(!calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen) {

            if(calculator.globalVariable.hover.hsGhostTitle){
                calculator.titles.hs.ghost.text();
                calculator.titles.hs.ghost.show();
            }

        }

        if(calculator.globalVariable.dynamicDisplay && !calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen && calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

            if(calculator.globalVariable.hover.hsGhostTitle){
                calculator.titles.hs.ghost.text();
                calculator.titles.hs.ghost.show();
            }

        }

        // hs title
        if(calculator.globalVariable.hover.hsMainTitle){
            calculator.titles.hs.hide();
        }

        // contest maximize
        if(calculator.globalVariable.hover.cMinimize && !calculator.globalVariable.closedDecisionCalculator) {
            calculator.section.contest.minimize(false);
        }



        // hs minimize
        if(calculator.globalVariable.hover.hsMinimize) {
            calculator.section.hs.minimize(true);
        }

        // hs icon
        if(calculator.globalVariable.hover.hsIcons){
            calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
            calculator.section.hs.opacity.SFiALiFiS([0,0,1,1,1,0]);
            calculator.section.hs.set.iconPosition('bottom');
        }

        // hs button
        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(false);
        }

        calculator.globalVariable.enervate2LeaderLeft = true;
        calculator.icons.enervate2.leaderLeft(0);

        $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1.1)'});


        // hs results
        if(calculator.globalVariable.hover.hsResults){
            calculator.results.hide.followerOutcomesAll();
        }

        if(!calculator.globalVariable.closedDecisionCalculator) {

            // hide contest title and results drag the top to decision slider
            $('.payoffWrap, .imageWrap23').css({'transition' : '0.15s', 'opacity':'0'});
            calculator.space.contestResultsIsOpen = false;
            calculator.space.update.heights();
            $('.generalMarginBox').css({'margin-top':'73px'});

        }

        calculator.button.display.spinBottom(false);

        calculator.decisionSlider.leader.isFlashing = false;



    },
    function() {

        calculator.globalVariable.enervate2LeaderLeft = false;

        $('.decisionWrapL').css({'transition':'0.3s', 'transform':'scale(1)'});
        $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1)'});

        if(calculator.globalVariable.hover.cTitle && !calculator.globalVariable.closedDecisionCalculator) {


            $('.payoffWrap, .imageWrap23').css({'transition' : '0.15s', 'opacity':'1'});
            calculator.space.contestResultsIsOpen = true;

            if(!calculator.globalVariable.contestResultsExist) {
                $('.payoffWrap').css({'transition' : '0s', 'opacity':'0'});
            }

            $('.generalMarginBox').css({'margin-top':'-77px'});

            calculator.space.update.heights();


            if(calculator.globalVariable.hover.cButton) {
                calculator.button.display.spinBottom(true);
            }

        }

    }

)

//----- FOLLOWER DECISION SLIDER ------//

$('#dSliderF').hover(
    function() {

        setTimeout(()=>calculator.graphics.update.barLabelX('bardf', true), 150);

        calculator.globalVariable.pieBorderLeft = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = true;
        calculator.graphics.update.efficiencyBar();

        if(calculator.globalVariable.playerIndex === 0) {
            calculator.section.hs.opacity.activeFollowerIcon('spf1L11', true)
            calculator.globalVariable.enervateFollowerF1 = true;
        }

        if(calculator.globalVariable.playerIndex === 1) {
            calculator.section.hs.opacity.activeFollowerIcon('spf1L12', true);
            calculator.globalVariable.enervateFollowerF2 = true;
        }

    },
    function() {

        calculator.globalVariable.pieBorderLeft = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = false;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelX('bardf', false), 150);
        calculator.graphics.update.barGridX('bardf', false);

        if(calculator.globalVariable.playerIndex === 0){
            calculator.section.hs.opacity.activeFollowerIcon('spf1L11', false)
            calculator.globalVariable.enervateFollowerF1 = false;
        }

        if(calculator.globalVariable.playerIndex === 1) {
            calculator.section.hs.opacity.activeFollowerIcon('spf1L12', false);
            calculator.globalVariable.enervateFollowerF2 = false;
        }


    }
)

$('.inputF').hover(

    function() {

        $('.decisionWrapF').css({'transition':'0.3s', 'transform':'scale(1.1)'});

        if(calculator.globalVariable.playerIndex === 0) {
            $('.bf1').css({'transition':'0.3s', 'box-shadow':'0px 0px 3px 3px lime', 'transform':'scale(1.04)'});
        }

        if(calculator.globalVariable.playerIndex === 1) {
            $('.bf2').css({'transition':'0.3s', 'box-shadow':'0px 0px 3px 3px lime', 'transform':'scale(1.04)'});
        }

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            calculator.results.hide.followerOutcomesBottom();
            calculator.results.hide.followerOutcomesTop();
            calculator.results.hide.leaderOutcomes();
            calculator.titles.hs.ghost.hide();
            calculator.titles.update.position();

        }

        if(calculator.globalVariable.aBitOfWaitingIsDone) {

            calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.5,0,1]);
            calculator.section.hs.set.iconPosition('center');
            calculator.titles.hs.ghost.hide();
            calculator.titles.hs.show();
            calculator.titles.update.position();

        }


        calculator.button.display.spinTop(false);
        // calculator.button.display.minTop(false);
        // calculator.button.disable.minTop();

        calculator.decisionSlider.leader.isFlashing = false;

    },
    function() {

        $('.decisionWrapF').css({'transition':'0.3s', 'transform':'scale(1)'});

        if(calculator.globalVariable.playerIndex === 0) {
            $('.bf1').css({'transition':'0.3s', 'box-shadow':'0px 0px 0px 0px black', 'transform':'scale(1)'});
        }

        if(calculator.globalVariable.playerIndex === 1) {
            $('.bf2').css({'transition':'0.3s', 'box-shadow':'0px 0px 0px 0px black', 'transform':'scale(1)'});
        }
    }

)


//------------------------------------------------//
//------------------------------------------------//
//-------------- CONTEST SECTION -----------------//
//------------------------------------------------//
//------------------------------------------------//

//----- LEFT HORIZONTAL EXAMPLE SLIDER -----//

$('#example_lSlider1').hover(
    function() {

        setTimeout(()=>calculator.graphics.update.barLabelX('example_barl1', true), 150);

    },
    function() {

        setTimeout(()=>calculator.graphics.update.barLabelX('example_barl1', false), 400);
        calculator.graphics.update.barGridX('example_barl1', false);

    }
);


//----- LEFT HORIZONTAL SLIDER -----//

$('#lSlider1').hover(
    function() {

        calculator.globalVariable.pieBorderLeft = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderLeft = true;
        calculator.icons.enervate.leaderLeft(0);
        calculator.globalVariable.enervate2LeaderLeft = false;

        $('.activeLeaderLeft').css({'opacity':'1'});
        $('.passiveLeaderLeft').css({'opacity':'0'});

        $('.activeFollowerLeft').css({'opacity':'1'});
        $('.passiveFollowerLeft').css({'opacity':'0'});

        setTimeout(()=>calculator.graphics.update.barLabelX('barl1', true), 150);
        // calculator.questions.spin2.l1();

        },
    function() {

        calculator.globalVariable.pieBorderLeft = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderLeft = false;
        calculator.globalVariable.enervate2LeaderLeft = true;
        calculator.icons.enervate2.leaderLeft(0);

        $('.activeLeaderLeft').css({'opacity':'0'});
        $('.passiveLeaderLeft').css({'opacity':'1'});

        $('.activeFollowerLeft').css({'opacity':'0'});
        $('.passiveFollowerLeft').css({'opacity':'1'});

        setTimeout(()=>calculator.graphics.update.barLabelX('barl1', false), 400);
        calculator.graphics.update.barGridX('barl1', false);

    }
);

$('.bswLeft').hover(
    function() {

        calculator.globalVariable.enervate2LeaderLeft = true;
        calculator.icons.enervate2.leaderLeft(0);

        $('.l1vibrate').css({'transition':'0s', 'opacity':'0'});
        $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.bswLeft').css({'transition':'0.7s', 'box-shadow':'0px 6px 6px 2px black'});

        if(calculator.globalVariable.hover.cButton) {
            calculator.button.display.spinBottom(false);
        }

        calculator.questions.spin1.l1();

        if(calculator.lock.switch.all[0]) {
            $('.l1vibrate').css({'transition':'0.3s', 'opacity':'1'});
            calculator.lock.switch.l1 = true;
            calculator.lock.vibrate.l1(1);
        }

    },
    function() {

        calculator.globalVariable.enervate2LeaderLeft = false;

        $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.bswLeft').css({'transition':'0.7s', 'box-shadow':'0px 1px 1px 0px black'});

        if(calculator.globalVariable.hover.cButton) {
            calculator.button.display.spinBottom(true);
        }

        calculator.questions.spin2.l1();
        calculator.lock.switch.l1 = false;
        calculator.lock.switch.example_l1 = false;

    }
);


//----- RIGHT HORIZONTAL SLIDER -----//

$('#olSlider1').hover(
    function() {

        calculator.globalVariable.pieBorderRight = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderRight = true;
        calculator.icons.enervate.leaderRight(0);

        calculator.globalVariable.enervate2LeaderRight = false;

        $('.activeLeaderRight').css({'opacity':'1'});
        $('.passiveLeaderRight').css({'opacity':'0'});

        $('.activeFollowerRight').css({'opacity':'1'});
        $('.passiveFollowerRight').css({'opacity':'0'});

        setTimeout(()=>calculator.graphics.update.barLabelX('barl2', true), 150);
        // calculator.questions.spin2.l2();

    },
    function() {

        calculator.globalVariable.pieBorderRight = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderRight = false;
        calculator.globalVariable.enervate2LeaderRight = true;
        calculator.icons.enervate2.leaderRight(0);

        $('.activeLeaderRight').css({'opacity':'0'});
        $('.passiveLeaderRight').css({'opacity':'1'});

        $('.activeFollowerRight').css({'opacity':'0'});
        $('.passiveFollowerRight').css({'opacity':'1'});

        setTimeout(()=>calculator.graphics.update.barLabelX('barl2', false), 400);
        calculator.graphics.update.barGridX('barl2', false);

    }
);

$('.bswRight').hover(

    function() {

        calculator.globalVariable.enervate2LeaderRight = true;
        calculator.icons.enervate2.leaderRight(0);

        $('.l2vibrate').css({'transition':'0s', 'opacity':'0'});
        $('.bswRight').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.bswRight').css({'transition':'0.7s', 'box-shadow':'0px 6px 6px 2px black'});

        if(calculator.globalVariable.hover.cButton) {
            calculator.button.display.spinBottom(false);
        }

        calculator.questions.spin1.l2();

        if(calculator.lock.switch.all[1]) {
            $('.l2vibrate').css({'transition':'0.3s', 'opacity':'1'});
            calculator.lock.switch.l2 = true;
            calculator.lock.vibrate.l2(1);
        }

    },
    function() {

        calculator.globalVariable.enervate2LeaderRight = false

        $('.bswRight').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.bswRight').css({'transition':'0.7s', 'box-shadow':'0px 1px 1px 0px black'});

        if(calculator.globalVariable.hover.cButton) {
            calculator.button.display.spinBottom(true);
        }

        calculator.questions.spin2.l2();
        calculator.lock.switch.l2 = false;

    }

);


//------------------------------------------------//
//------------------------------------------------//
//------------- HELP SABOTAGE SECTION ------------//
//------------------------------------------------//
//------------------------------------------------//

//------ FOLLOWER 1 SLIDER ------//

$('#vSlider1').hover(
    function() {

        calculator.globalVariable.pieBorderLeft = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = true;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('barf1', true), 150);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L11', true);
        // calculator.questions.spin2.f1();
        calculator.globalVariable.enervateFollowerF1 = true;
        calculator.icons.enervate.followerF1(0);
        calculator.globalVariable.enervate2FollowerF1 = false;

        },

    function() {

        calculator.globalVariable.pieBorderLeft = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = false;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('barf1', false), 400);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L11', false);
        calculator.graphics.update.barGridY('barf1', false);

        calculator.globalVariable.enervateFollowerF1 = false;
        calculator.globalVariable.enervate2FollowerF1 = true;
        calculator.icons.enervate2.followerF1(0);

    }
);

$('.lbf1').hover(

    function() {

        if(box.button.btn_d13a_listenerOn){
            calculator.pointers.activate([0,0,0,0,0,0]);
            box.button.btn_d13a_listenerOn = false;
        }

        calculator.globalVariable.enervate2FollowerF1 = true;
        calculator.icons.enervate2.followerF1(0);

        $('#barf1, #example_barf1').css({'transition':'0.7s', 'transform':'scale(1.04)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            if(calculator.globalVariable.hover.hsResults){
                calculator.results.hide.followerOutcomesBottom();
            }

        }

        calculator.questions.spin1.f1();

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(false);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(false);
            calculator.button.disable.minTop();
        }

        calculator.questions.spin1.f1();

        if(calculator.lock.switch.all[2]) {

            calculator.lock.switch.f1 = true;
            calculator.lock.vibrate.f1(1);

        }

    },
    function() {

        calculator.globalVariable.enervate2FollowerF1 = false;

        $('#barf1, #example_barf1').css({'transition':'0.7s', 'transform':'scale(1)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            if(calculator.globalVariable.hover.hsResults){
                calculator.results.show.followerOutcomesBottom();
            }

        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(true);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(true);
            calculator.button.enable.minTop();
        }

        calculator.questions.spin2.f1();

        calculator.lock.switch.f1 = false;

    }

);


//-------- FOLLOWER 2 SLIDER ------//

$('#vSlider2').hover(
    function() {

        calculator.globalVariable.pieBorderLeft = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = true;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('barf2', true), 150);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L12', true);
        // calculator.questions.spin2.f2();
        calculator.globalVariable.enervateFollowerF2 = true;
        calculator.icons.enervate.followerF2(0);
        calculator.globalVariable.enervate2FollowerF2 = false;


    },
    function() {

        calculator.globalVariable.pieBorderLeft = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = false;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('barf2', false), 400);
        calculator.graphics.update.barGridY('barf2', false);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L12', false);

        calculator.globalVariable.enervateFollowerF2 = false;
        calculator.globalVariable.enervate2FollowerF2 = true;
        calculator.icons.enervate2.followerF2(0);

    }
);

$('.lbf2').hover(

    function() {

        calculator.globalVariable.enervate2FollowerF2 = true;
        calculator.icons.enervate2.followerF2(0);

        $('#barf2').css({'transition':'0.7s', 'transform':'scale(1.04)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            if(calculator.globalVariable.hover.hsResults){
                calculator.results.hide.followerOutcomesBottom();
            }

        }

        if(calculator.globalVariable.hover.hsTop){
            calculator.button.display.spinTop(false);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(false);
            calculator.button.disable.minTop();
        }

        calculator.questions.spin1.f2();

        if(calculator.lock.switch.all[3]) {

            calculator.lock.switch.f2 = true;
            calculator.lock.vibrate.f2(1);

        }

    },
    function() {

        calculator.globalVariable.enervate2FollowerF2 = false;

        $('#barf2').css({'transition':'0.7s', 'transform':'scale(1)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {
            if(calculator.globalVariable.hover.hsResults){
                calculator.results.show.followerOutcomesBottom();
            }
        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(true);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(true);
            calculator.button.enable.minTop();
        }

        calculator.questions.spin2.f2();

        calculator.lock.switch.f2 = false;

    }

);


//-------- O FOLLOWER 1 SLIDER -----//

$('#ovSlider1').hover(
    function() {

        calculator.globalVariable.pieBorderRight = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarRight = true;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('obarf1', true), 150);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L21', true);
        // calculator.questions.spin2.of2();
        calculator.globalVariable.enervateFollowerOF1 = true;
        calculator.icons.enervate.followerOF1(0);
        calculator.globalVariable.enervate2FollowerOF1 = false;

    },
    function() {

        calculator.globalVariable.pieBorderRight = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarRight = false;
        calculator.graphics.update.efficiencyBar();

        calculator.graphics.update.barGridY('obarf1', false);
        setTimeout(()=>calculator.graphics.update.barLabelY('obarf1', false), 400);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L21', false);

        calculator.globalVariable.enervateFollowerOF1 = false;
        calculator.globalVariable.enervate2FollowerOF1 = true;
        calculator.icons.enervate2.followerOF1(0);

    }
);

$('.rbf1').hover(

    function() {

        calculator.globalVariable.enervate2FollowerOF1 = true;
        calculator.icons.enervate2.followerOF1(0);

        $('#obarf1').css({'transition':'0.7s', 'transform':'scale(1.04)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            if(calculator.globalVariable.hover.hsResults){
                calculator.results.hide.followerOutcomesBottom();
            }

        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(false);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(false);
            calculator.button.disable.minTop();
        }

        calculator.questions.spin1.of1();

        if(calculator.lock.switch.all[4]) {

            calculator.lock.switch.of1 = true;
            calculator.lock.vibrate.of1(1);

        }

    },
    function() {

        calculator.globalVariable.enervate2FollowerOF1 = false;

        $('#obarf1').css({'transition':'0.7s', 'transform':'scale(1)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            if(calculator.globalVariable.hover.hsResults){
                calculator.results.show.followerOutcomesBottom();
            }

        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(true);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(true);
            calculator.button.enable.minTop();
        }

        calculator.questions.spin2.of1();

        calculator.lock.switch.of1 = false;

    }

);


//-------- O FOLLOWER 2 SLIDER -----//

$('#ovSlider2').hover(
    function() {

        calculator.globalVariable.pieBorderRight = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarRight = true;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('obarf2', true), 150);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L22', true);
        // calculator.questions.spin2.of2();

        calculator.globalVariable.enervateFollowerOF2 = true;
        calculator.icons.enervate.followerOF2(0);
        calculator.globalVariable.enervate2FollowerOF2 = false;

    },
    function() {

        calculator.globalVariable.pieBorderRight = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarRight = false;
        calculator.graphics.update.efficiencyBar();

        calculator.graphics.update.barGridY('obarf2', false);
        setTimeout(()=>calculator.graphics.update.barLabelY('obarf2', false), 400);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L22', false);

        calculator.globalVariable.enervateFollowerOF2 = false;
        calculator.globalVariable.enervate2FollowerOF2 = true;
        calculator.icons.enervate2.followerOF2(0);

    }
);

$('.rbf2').hover(

    function() {

        calculator.globalVariable.enervate2FollowerOF2 = true;
        calculator.icons.enervate2.followerOF2(0);

        $('#obarf2').css({'transition':'0.7s', 'transform':'scale(1.04)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {
            if(calculator.globalVariable.hover.hsResults){
                calculator.results.hide.followerOutcomesBottom();
            }
        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(false);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(false);
            calculator.button.disable.minTop();
        }

        calculator.questions.spin1.of2();

        if(calculator.lock.switch.all[5]) {

            calculator.lock.switch.of2 = true;
            calculator.lock.vibrate.of2(1);

        }

    },
    function() {

        calculator.globalVariable.enervate2FollowerOF2 = false;

        $('#obarf2').css({'transition':'0.7s', 'transform':'scale(1)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {
            if(calculator.globalVariable.hover.hsResults){
                calculator.results.show.followerOutcomesBottom();
            }
        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(true);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(true);
            calculator.button.enable.minTop();
        }

        calculator.questions.spin2.of2();

        calculator.lock.switch.of2 = false;

    }

);







//------------------------------------------------//
//------------------------------------------------//
//------------------ MAIN BODIES -----------------//
//------------------------------------------------//
//------------------------------------------------//

//------ HELP SABOTAGE SECTION -----//

$('.hsWrap').hover(

    function() {

        if(calculator.globalVariable.aBitOfWaitingIsDone) {

            // contes hide title
            if(calculator.globalVariable.hover.cTitle) {
                calculator.titles.contest.hide();
            }

            // contest hide botton
            if(calculator.globalVariable.hover.cButton) {
                calculator.button.display.spinBottom(false);
            }

            // hs icon setup
            if(calculator.globalVariable.hover.hsIcons) {
                calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]);
                calculator.section.hs.set.iconPosition('center');
            }

            // hs show main title
            if(calculator.globalVariable.hover.hsMainTitle) {
                calculator.titles.hs.show();
            }

            // hs show button
            if(calculator.globalVariable.hover.hsButton) {
                calculator.button.display.spinTop(true);
            }


            // hs maximize
            if(calculator.globalVariable.hover.hsMinimize) {
                calculator.section.hs.minimize(false);
            }

            // contest minimize
            if(calculator.globalVariable.hover.cMinimize) {
                calculator.section.contest.minimize(true);

            }

            // turn of the hovering ability on showing the results
            if(calculator.globalVariable.dynamicDisplay) {

                calculator.button.display.minTop(true);
                calculator.button.enable.minTop();

                calculator.button.display.minBottom(false);
                calculator.button.disable.minBottom();

                calculator.titles.update.position();

                // contest hide results
                if(calculator.globalVariable.hover.cResults) {
                    calculator.results.hide.leaderOutcomes();
                }

                // hs show results
                if(calculator.globalVariable.hover.hsResults) {
                    calculator.results.show.followerOutcomesAll();
                }

            }

            // hs ghost title chaos (so far it works)

            if(!calculator.globalVariable.dynamicDisplay && !calculator.space.hsResultsTopIsOpen && !calculator.space.open.hsResultsBottomIsOpen) {

                if(calculator.globalVariable.hover.hsGhostTitle){

                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.hide();

                }

            }

            if(calculator.globalVariable.dynamicDisplay && calculator.space.hsResultsTopIsOpen && calculator.space.hsResultsBottomIsOpen && calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

                if(calculator.globalVariable.hover.hsGhostTitle){

                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.hide();

                }

            }

            if(calculator.globalVariable.dynamicDisplay) {

                if(calculator.globalVariable.hover.hsGhostTitle){

                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.hide();

                }

            }



        }

    },

    function() {}

)

//------ POWER BAR SECTION ------//
/*
$('.pWrap').hover(
    function() {
        setTimeout(()=>{

            if(calculator.globalVariable.closedDecisionCalculator) {

            if(calculator.globalVariable.display.hsGhostTitle) {
                calculator.titles.hs.ghost.text();
                calculator.titles.hs.ghost.show();
            }

            // hs results
            if(calculator.globalVariable.hover.hsResults) {
                calculator.results.hide.followerOutcomesAll();
            }

            // hs setup icon
            if(calculator.globalVariable.hover.hsIcons){
                calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                calculator.section.hs.set.iconPosition('bottom');
            }
            // hs title
            if(calculator.globalVariable.hover.hsMainTitle){
                calculator.titles.hs.hide();
            }

            // hs minimize
            if(calculator.globalVariable.hover.hsMinimize) {
                calculator.section.hs.minimize(true);
            }

            // hs button
            if(calculator.globalVariable.hover.hsButton){
                calculator.button.display.spinTop(false);
            }

            // hs ghost title
            // even the follower results are not shown make sure to display the ghost title for contest on top of leader icons
            if(!calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen) {

                if(calculator.globalVariable.hover.hsGhostTitle){
                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.show();
                }

            }

            if(calculator.globalVariable.dynamicDisplay && !calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen && calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

                if(calculator.globalVariable.hover.hsGhostTitle){
                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.show();
                }

            }

        }

        }, 0);
    },
    function() {}
)
*/

//------ CONTEST SECTION ------//

$('.contestSection').hover(

    function() {

        if(calculator.globalVariable.aBitOfWaitingIsDone) {

            // contest show button
            if(calculator.globalVariable.hover.cButton){
                calculator.button.enable.spinBottom();
                calculator.button.display.spinBottom(true);
            }

            // hs setup icon
            if(calculator.globalVariable.hover.hsIcons){
                calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                calculator.section.hs.set.iconPosition('bottom');
            }

            // hs title
            if(calculator.globalVariable.hover.hsMainTitle){
                calculator.titles.hs.hide();
            }

            // hs button
            if(calculator.globalVariable.hover.hsButton){
                calculator.button.display.spinTop(false);
            }

            // c title
            if(calculator.globalVariable.hover.cTitle){
                calculator.titles.contest.show();
            }

            if(calculator.globalVariable.dynamicDisplay) {

                // hs minimize button on the decision slider of hs
                calculator.button.display.minTop(false);
                calculator.button.disable.minTop();

                //----//

                // contest minimize button on the decision slider of contest
                calculator.button.display.minBottom(true);
                calculator.button.enable.minBottom();

                if(calculator.globalVariable.hover.cResults){
                    calculator.results.show.leaderOutcomes();
                }
                //----//

                // hs results
                if(calculator.globalVariable.hover.hsResults){
                    calculator.results.hide.followerOutcomesAll();
                }

            }

            // hs minimize
            if(calculator.globalVariable.hover.hsMinimize) {
                calculator.section.hs.minimize(true);
            }

            // contest maximize
            if(calculator.globalVariable.hover.cMinimize) {
                calculator.section.contest.minimize(false);
            }

            // even the follower results are not shown make sure to display the ghost title for contest on top of leader icons
            if(!calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen) {

                if(calculator.globalVariable.hover.hsGhostTitle){
                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.show();
                }

            }

            if(calculator.globalVariable.dynamicDisplay && !calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen && calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

                if(calculator.globalVariable.hover.hsGhostTitle){
                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.show();
                }

            }

        }

    },

    function() {}

)


//------------------------------------------------//
//------------------------------------------------//
//----------------- SPIN BUTTONS -----------------//
//------------------------------------------------//
//------------------------------------------------//

var sp23C = 0;
$('#spinImage23').hover(
    function() {

        calculator.pointers.spinButtonBottomSwitch = 0;


        sp23C = sp23C + 1;
        var str = 'rotate('+sp23C+'turn)';
        $('#spinImage23').css({'transition':'0.5s', 'transform':str});

    },
    function() {

    }
)

var spC = 0;
$('#spinImage').hover(
    function() {

        calculator.pointers.spinButtonTopSwitch = 0;

        spC = spC + 1;
        var str = 'rotate('+spC+'turn)';
        $('#spinImage').css({'transition':'0.5s', 'transform':str});

        // calculator.wheel.cruise();
        // calculator.wheel.show();
    },
    function() {
    }
)


$('#submitButtonBottom').hover(
    function() {
        $('.submitButtonBottomImage').css({'opacity':'1'});
        $('.submitButtonBottomImage2').css({'transition-delay':'1s', 'transition':'3s', 'right':'-100px'});
    },
    function() {
        $('.submitButtonBottomImage').css({'opacity':'1'});
        $('.submitButtonBottomImage2').css({'transition-delay':'0s', 'transition':'0s', 'right':'55px'});
    }
)


/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////


//------- POSITION -----//
calculator.titles.update.position = function() {

    if(!calculator.space.hsResultsTopIsOpen) {
        calculator.titles.update.topTitleMargins(0, -75);
    }

    if(calculator.space.hsResultsTopIsOpen) {
        calculator.titles.update.topTitleMargins(35, -110);
    }

}

calculator.titles.update.topTitleMargins = function(mt, mb) {

    mt = mt === undefined ? 0 : mt;
    mb = mb === undefined ? 0 : mb;

    mt = mt + 'px';
    mb = mb + 'px';

    $('.ctTop').css({'margin-bottom': mb , 'margin-top': mt});

}

calculator.titles.update.bottomTitleMargins = function(mt, mb) {

    mt = mt === undefined ? 0 : mt;
    mb = mb === undefined ? 0 : mb;

    mt = mt + 'px';
    mb = mb + 'px';

    $('.ctBottom').css({'margin-bottom': mb , 'margin-top': mt});

}


//------- HS TITLE SHOW / HIDE -------//

calculator.titles.hs.show = function() {

    $('.ctTop').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0turn)'});
    $('.ctTop').css({'opacity':'1'});

}

calculator.titles.hs.hide = function() {

    $('.ctTop').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
    $('.ctTop').css({ 'opacity':'0'});

}

calculator.titles.hs.ghost.show = function() {

    $('.ctGhost').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0turn)'});
    $('.ctGhost').css({'opacity':'1'});
    calculator.titles.hs.ghost.adjustHeight();

}

calculator.titles.hs.ghost.hide = function() {

    $('.ctGhost').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 1turn)'});
    $('.ctGhost').css({ 'opacity':'0'});

}

calculator.titles.opacity.all = function(array) {
    var topt, bopt;

    topt = array[0] ? '1' : '0';
    bopt = array[1] ? '1' : '0';

    $('.ctTop').css({'opacity':topt});
    $('.ctBottom').css({'opacity':bopt});

}

calculator.titles.hs.ghost.adjustHeight = function() {
    var myEfi = Math.max(efi, oefi);
    var marginTop;

    if(myEfi < 1) {
        marginTop = '125px';
    } else if(myEfi === 1) {
        marginTop = '112px';
    } else if(myEfi === 2) {
        marginTop = '94px';
    } else if(myEfi < 6) {
        marginTop = '86px';
    } else if(myEfi < 16) {
        marginTop = '81px';
    } else {
        marginTop = '75px';
    }

    $('.ctGhost').css({'transition':'1.023456s', 'margin-top' : marginTop});

}


//------- CONTEST TITLE SHOW / HIDE -------//

calculator.titles.contest.show = function() {

    $('.ctBottom').css({'transition':'1.023456s', 'transition-delay':'0.3s', 'transform' : 'rotate3d(1, 0, 0, 1turn)', 'opacity':'1'});
    $('.imageWrap23').css({'transition':'1.023456s', 'opacity':'1'});

    calculator.space.open.cResults();

}

calculator.titles.contest.hide = function() {

    $('.ctBottom').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
    $('.ctBottom').css({ 'opacity':'0'});

    calculator.space.close.cResults();

    // this is a stupid line negating the method by calling its counterpart
    if(calculator.globalVariable.playerIndex === -1 && calculator.globalVariable.playerView) {
        calculator.titles.contest.show();
    }

}


//---------- TEXT AND COLOR ---------//

calculator.titles.hs.ghost.text = function() {

    var contestName1, contestName2;

    contestName1 = document.getElementById('contestNameG1');
    contestName2 = document.getElementById('contestNameG2');

    if(calculator.globalVariable.isOG1) {

        contestName1.innerHTML = 'OUT-GROUP CONTEST I';
        contestName2.innerHTML = 'LEADERS\' COMPETITION';

    }

    if(calculator.globalVariable.isOG2) {

        contestName1.innerHTML = 'OUT-GROUP CONTEST II';
        contestName2.innerHTML = 'LEADERS\' COMPETITION';

    }

    if(calculator.globalVariable.isIGA) {
        contestName1.innerHTML = 'OUT-GROUP CONTEST A';
        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
    }

    if(calculator.globalVariable.isIGB) {
        contestName1.innerHTML = 'OUT-GROUP CONTEST B';
        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
    }
    //
    // if(name === undefined) {
    //
    //     contestName1.innerHTML = 'OUT-GROUP CONTEST X';
    //     contestName2.innerHTML = 'LEADERS\' COMPETITION';
    //
    // }

}

calculator.titles.update.textAndColor = function() {

    var contestName1, contestName2, contestName21, contestName22;

    contestName1 = document.getElementById('contestName1');
    contestName2 = document.getElementById('contestName2');
    contestName21 = document.getElementById('contestName21');
    contestName22 = document.getElementById('contestName22');

    if(calculator.globalVariable.isOG1) {

        $('.contestTitle1').css({'color':'white', 'font-size':'25px',
        'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))',
        'width':'308px', 'margin-left':'90px', 'margin-top':'-4px',
        'border-radius':'40px'});
        $('.contestTitle2').css({'font-size':'22px'});
        contestName1.innerHTML = 'OUT-GROUP CONTEST I';
        contestName2.innerHTML = 'FOLLOWERS\' HELP & SABOTAGE';


        $('.contestTitle22').css({'color':'white',
        'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))'});
        contestName21.innerHTML = 'LEADERS\' COMPETITION';
        contestName22.innerHTML = 'OUT-GROUP CONTEST I';

        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

            $('.contestTitle22, .ghostTitleColor').css({'color':'white',
            'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

        }

    }

    if(calculator.globalVariable.isOG2) {

        $('.contestTitle1').css({'color':'white', 'font-size':'25px',
        'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))',
        'width':'308px', 'margin-left':'90px', 'margin-top':'-4px',
        'border-radius':'40px'});
        $('.contestTitle2').css({'font-size':'22px'});
        contestName1.innerHTML = 'OUT-GROUP CONTEST II';
        contestName2.innerHTML = 'FOLLOWERS\' HELP & SABOTAGE';


        $('.contestTitle22').css({'color':'white',
        'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))'});
        contestName21.innerHTML = 'LEADERS\' COMPETITION';
        contestName22.innerHTML = 'OUT-GROUP CONTEST II';

        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

            $('.contestTitle22, .ghostTitleColor').css({'color':'white',
            'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

        }

    }

    if(calculator.globalVariable.isIGA) {

        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
        contestName1.innerHTML = 'IN-GROUP CONTEST A';
        $('.ctWrap').css({'margin-bottom':'-97px', 'margin-top':'0px'});

        $('.contestTitle22, .ghostTitleColor').css({'color':'white',
        'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(60,60,60))'});

    }

    if(calculator.globalVariable.isIGB) {

        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
        contestName1.innerHTML = 'IN-GROUP CONTEST A';
        $('.ctWrap').css({'margin-bottom':'-97px', 'margin-top':'0px'});

        $('.contestTitle22, .ghostTitleColor').css({'color':'white',
        'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

    }


    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                $('.contestTitle22').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60, 60, 60), rgb(60,60,60))'});
            }
            if(calculator.globalVariable.isIGB) {
                $('.contestTitle22').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(210, 210, 210), rgb(210,210,210))'});
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                $('.contestTitle22').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60, 60, 60), rgb(210,210,0))'});
            }
            if(calculator.globalVariable.isIGB) {
                $('.contestTitle22').css({'color':'black',
                'background':'linear-gradient(90deg, rgb(210, 210, 210), rgb(210,210,0))'});
            }
        }

    }
    //---- only for tutorial ----//

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                $('.contestTitle22').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60, 60, 60), rgb(210,210,0))'});
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                $('.contestTitle22').css({'color':'black',
                'background':'linear-gradient(90deg, rgb(210, 210, 210), rgb(210,210,0))'});
            }
        }

    }

    //---------------------------//

}


//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////


//----- DISPLAY ICON DEPENDING ON INDEX AND ROLE ------//

calculator.icons.setMe = function() {

    $('.objectivef1').css({'display':'flex'});
    $('.objectivef2').css({'display':'flex'});
    $('.objectivel').css({'display':'flex'});
    $('.objectivef').css({'display':'flex'});

    $('.subjectivef1').css({'display':'none'});
    $('.subjectivef2').css({'display':'none'});
    $('.subjectivel').css({'display':'none'});
    $('.subjectivef').css({'display':'none'})

    if(calculator.globalVariable.playerView) {

        if(calculator.globalVariable.playerIndex === 0) {
            // OG
            $('.subjectivef1').css({'display':'flex'});
            $('.objectivef1').css({'display':'none'});

            //IGA
            $('.subjectivef').css({'display':'flex'});
            $('.objectivef').css({'display':'none'});


        }

        if(calculator.globalVariable.playerIndex === 1) {

            // OG
            $('.subjectivef2').css({'display':'flex'});
            $('.objectivef2').css({'display':'none'});

            //IGA
            $('.subjectivef').css({'display':'flex'});
            $('.objectivef').css({'display':'none'});

        }

        if(calculator.globalVariable.playerIndex === -1) {
            // OG
            $('.subjectivel').css({'display':'flex'});
            $('.objectivel').css({'display':'none'});

        }


    }

}

calculator.icons.setOG1 = function() {

    // right side og1 setup initial roles
    $('.sameOLeaderIcon, .oldFollowerIconOfNewLeaderOf1, .oldFollowerIconOfNewLeaderOf2').css({'display':'flex'});
    $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf1, .newLeaderIconOfOldOf2, .newFollowerIconOfOldLeaderOf1, .newFollowerIconOfOldLeaderOf2').css({'display':'none'});

    // left side og1 setup intial roles
    $('.sameLeaderIcon, .oldFollowerIconOfNewLeaderf2, .oldFollowerIconOfNewLeaderf1').css({'display':'flex'});
    $('.newLeaderIconOfOldf, .newLeaderIconOfOldf1, .newLeaderIconOfOldf2, .newFollowerIconOfOldLeaderf1, .newFollowerIconOfOldLeaderf2').css({'display':'none'});


}

calculator.icons.adjustForTreatment = function() {

        $('.homoLeftFollowers, .homoRightFollowers, .homoLeftLeaders, .homoRightLeaders').css({'display':'flex'});
        $('.heteroLeftFollowers, .heteroRightFollowers, .heteroLeftLeaders, .heteroRightLeaders').css({'display':'none'});

        if(calculator.globalVariable.ourFollowersAreHetero) {

            // OG and IGA and IGB
            $('.homoLeftFollowers, .homoLeftLeaders').css({'display':'none'});
            $('.heteroLeftFollowers, .heteroLeftLeaders').css({'display':'flex'});

        }
        if(calculator.globalVariable.theirFollowersAreHetero) {

            // OG and IGA and IGB
            $('.homoRightFollowers, .homoRightLeaders').css({'display':'none'});
            $('.heteroRightFollowers, .heteroRightLeaders').css({'display':'flex'});

        }

}

calculator.icons.setOG2 = function() {

    if(calculator.globalVariable.winnerLeaderIndex === 1) {

        // left side the same
        // same followers
        $('.oldFollowerIconOfNewLeaderf2, .oldFollowerIconOfNewLeaderf1').css({'display':'flex'});
        $('.newFollowerIconOfOldLeaderf1, .newFollowerIconOfOldLeaderf2').css({'display':'none'});
        //same leader
        $('.sameLeaderIcon').css({'display':'flex'});
        $('.newLeaderIconOfOldf, .newLeaderIconOfOldf1, .newLeaderIconOfOldf2').css({'display':'none'});

        if(calculator.globalVariable.winnerFollowerIndex === 1) {
            // right side changes
            // top follower or strong follower is now the new leader
            // defeated leader takes the top follower's place the other follower is the same
            $('.newFollowerIconOfOldLeaderOf1, .oldFollowerIconOfNewLeaderOf2').css({'display':'flex'});
            $('.oldFollowerIconOfNewLeaderOf1, .newFollowerIconOfOldLeaderOf2').css({'display':'none'});
            // leader icon is now the old follower's new leader icon
            $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf1').css({'display':'flex'});
            $('.sameOLeaderIcon, .newLeaderIconOfOldOf2').css({'display':'none'});
        }

        if(calculator.globalVariable.winnerFollowerIndex === 2) {
            // top follower or strong follower is now the new leader
            // defeated leader takes the top follower's place the other follower is the same
            $('.newFollowerIconOfOldLeaderOf2, .oldFollowerIconOfNewLeaderOf1').css({'display':'flex'});
            $('.oldFollowerIconOfNewLeaderOf2, .newFollowerIconOfOldLeaderOf1').css({'display':'none'});
            // leader icon is now the old follower's new leader icon
            $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf2').css({'display':'flex'});
            $('.sameOLeaderIcon, .newLeaderIconOfOldOf1').css({'display':'none'});
        }

    }

    if(calculator.globalVariable.winnerLeaderIndex === 2) {

        // left side the same
        // same followers
        $('.oldFollowerIconOfNewLeaderOf2, .oldFollowerIconOfNewLeaderOf1').css({'display':'flex'});
        $('.newFollowerIconOfOldLeaderOf1, .newFollowerIconOfOldLeaderOf2').css({'display':'none'});
        //same leader
        $('.sameOLeaderIcon').css({'display':'flex'});
        $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf1, .newLeaderIconOfOldOf2').css({'display':'none'});

        if(calculator.globalVariable.winnerFollowerIndex === 1) {
            // right side changes
            // top follower or strong follower is now the new leader
            // defeated leader takes the top follower's place the other follower is the same
            $('.newFollowerIconOfOldLeaderf1, .oldFollowerIconOfNewLeaderf2').css({'display':'flex'});
            $('.oldFollowerIconOfNewLeaderf1, .newFollowerIconOfOldLeaderf2').css({'display':'none'});
            // leader icon is now the old follower's new leader icon
            $('.newLeaderIconOfOldf, .newLeaderIconOfOldf1').css({'display':'flex'});
            $('.sameLeaderIcon, .newLeaderIconOfOldf2').css({'display':'none'});
        }

        if(calculator.globalVariable.winnerFollowerIndex === 2) {

            // top follower or strong follower is now the new leader
            // defeated leader takes the top follower's place the other follower is the same
            $('.newFollowerIconOfOldLeaderf2, .oldFollowerIconOfNewLeaderf1').css({'display':'flex'});
            $('.oldFollowerIconOfNewLeaderf2, .newFollowerIconOfOldLeaderf1').css({'display':'none'});
            // leader icon is now the old follower's new leader icon
            $('.newLeaderIconOfOldf, .newLeaderIconOfOldf2').css({'display':'flex'});
            $('.sameLeaderIcon, .newLeaderIconOfOldf1').css({'display':'none'});

        }
    }

}

calculator.icons.setIGA = function() {


        if(calculator.globalVariable.playerIndex === 0) {

            // first follower is strong
            $('.strongFollower1').css({'display':'flex'});
            $('.weakFollower1').css({'display':'none'})

            // second follower is weak
            $('.weakFollower2').css({'display':'flex'});
            $('.strongFollower2').css({'display':'none'});

        }

        if(calculator.globalVariable.playerIndex === 1) {

            // first follower is weak
            $('.weakFollower1').css({'display':'flex'});
            $('.strongFollower1').css({'display':'none'});

            // second follower is strong
            $('.strongFollower2').css({'display':'flex'});
            $('.weakFollower2').css({'display':'none'});

        }


}

calculator.icons.setAll = function() {

    $('.wrapMidOGSetup, .wrapMidIGASetup, .wrapMidIGBSetup').css({'display':'none'})

    if(calculator.globalVariable.isOG1) {

        $('.wrapMidOGSetup').css({'display':'flex'})

        calculator.icons.setOG1();

        calculator.icons.setMe();
        calculator.icons.adjustForTreatment();

    }

    if(calculator.globalVariable.isOG2) {

        $('.wrapMidOGSetup').css({'display':'flex'})

        calculator.icons.setOG2();

        calculator.icons.setMe();
        calculator.icons.adjustForTreatment();

    }

    if(calculator.globalVariable.isIGA) {

        $('.wrapMidIGASetup').css({'display':'flex'})

        calculator.icons.setIGA();

        calculator.icons.setMe();
        calculator.icons.adjustForTreatment();

    }

    if(calculator.globalVariable.isIGB) {

        $('.wrapMidIGBSetup').css({'display':'flex'})

    }



}


//-------- SET SIZE OF ICONS IN HS SECTION -------//

calculator.icons.set.size = function(Id, h, w) {

    var myClass, myHeight, myWidth;

    myClass = '.' + Id;
    myHeight = h + 'px';
    myWidth = w + 'px';

    $(myClass).css({'height' : myHeight, 'width' : myWidth});

}

calculator.icons.calculate.size = function(h, s) {

    var hRatio = h / 80;
    var sRatio = s / 80;
    var k = 0.2//0.2

    var m = (1 + Math.pow(hRatio, k)) / (1 + Math.pow(sRatio, k));

    return m;

}

calculator.icons.update.logisticColor = function(help, sabo, max, avg) {

    var k1, val, val1, val2, result;
    val = help / (help + sabo);
    val = max * val;

    // set color
    k1 = 0.05;
    val1 = max / (1 + Math.exp(-k1 * (val - avg)));
    // blue
    val1 = Math.floor(val1);
    // red
    val2 = max - val1;


    result = [val1, 0, val2];

    if(help === 0 && sabo === 0) {
        result = [235, 235, 235];
    }

    return result;

}

calculator.icons.update.arrowColor = function(help, sabo) {

    var hW, sW, myArray;

    myArray = Array(3);
    hW = (help + 30) / 60;
    sW = (sabo + 30) / 60;

    if(help === 0) {

        myArray = [255,0, 0, sW];

    }

    if(sabo === 0) {

        myArray = [0, 0, 255, hW];

    }

    if(help === 0 && sabo === 0) {
        myArray = [60, 60, 60, 0];
    }

    return myArray

}

calculator.icons.set.RGB4Leaders = function(val){

    return ('rgb(' + val[0] +',' + val[1] + ', ' + val[2] +', 0.2)');

}

calculator.icons.set.RGB4Followers = function(val){

    return ('rgb(' + val[0] +',' + val[1] +', ' + val[2] + ',' + val[3] + ')');

}


//------- LEADER ICON RESIZING METHOD DEPENDENT ON HELP AND SABOTAGE VALUES ----//

calculator.icons.update.leaderAuraColor = function() {

    // leader aura color
    var leaderIconBorderColor = calculator.icons.update.logisticColor(ts, th, 255, 132);
    var libcRGB = calculator.icons.set.RGB4Leaders(leaderIconBorderColor);
    $('.imgwrapwrapwrap31').css({'background-color':libcRGB, 'border-color':libcRGB});

    leaderIconBorderColor = calculator.icons.update.logisticColor(tos, toh, 255, 132);
    libcRGB = calculator.icons.set.RGB4Leaders(leaderIconBorderColor);
    $('.imgwrapwrapwrap32').css({'background-color':libcRGB, 'border-color':libcRGB});

}

calculator.icons.update.followerArrows = function() {

    // follower arrow color
    var followerArrowColor = calculator.icons.update.arrowColor(h1, s1);
    var facRGB = calculator.icons.set.RGB4Followers(followerArrowColor);
    $('.iaf1').css({'stroke':facRGB});
    $('.arrowTip11').css({'fill':facRGB});

    followerArrowColor = calculator.icons.update.arrowColor(h2, s2);
    facRGB = calculator.icons.set.RGB4Followers(followerArrowColor);
    $('.iaf2').css({'stroke':facRGB});
    $('.arrowTip12').css({'fill':facRGB});

    followerArrowColor = calculator.icons.update.arrowColor(oh1, os1);
    facRGB = calculator.icons.set.RGB4Followers(followerArrowColor);
    $('.iaof1').css({'stroke':facRGB});
    $('.arrowTip21').css({'fill':facRGB});

    followerArrowColor = calculator.icons.update.arrowColor(oh2, os2);
    facRGB = calculator.icons.set.RGB4Followers(followerArrowColor);
    $('.iaof2').css({'stroke':facRGB});
    $('.arrowTip22').css({'fill':facRGB});

}

calculator.icons.update.leaderSize = function() {

    var m1 = calculator.icons.calculate.size(th, ts);
    calculator.icons.set.size('splc1', 85 * m1, 65 * m1);

    var m2 = calculator.icons.calculate.size(toh, tos)
    calculator.icons.set.size('splc2', 85 * m2, 65 * m2)

}

//---- LEADER ICON PLACEMENT DEPENDING ON SIZE ----//

calculator.icons.update.leaderMargins = function(active) {

    if(active) {
        if($('.splc2').height() < 85) {
            $('.rightLeaderIconMainWrap').css({'transition':'0.2s', 'margin-top':'10px'});
            $('.arrowIconBoxRight').css({'transition':'0.2s', 'margin-top':'20px'});
        } else {
            $('.rightLeaderIconMainWrap').css({'transition':'0.2s', 'margin-top':'0px'});
            $('.arrowIconBoxRight').css({'transition':'0.2s', 'margin-top':'10px'});
        }

        if($('.splc1').height() < 85) {
            $('.leftLeaderIconMainWrap').css({'transition':'0.2s', 'margin-top':'10px'});
            $('.arrowIconBoxLeft').css({'transition':'0.2s', 'margin-top':'20px'});
        } else {
            $('.leftLeaderIconMainWrap').css({'transition':'0.2s', 'margin-top':'0px'});
            $('.arrowIconBoxLeft').css({'transition':'0.2s', 'margin-top':'10px'});
        }
    } else {
        $('.rightLeaderIconMainWrap, .leftLeaderIconMainWrap').css({'transition':'0.2s', 'margin-top':'0px'});
        $('.arrowIconBoxRight, .arrowIconBoxLeft').css({'transition':'0.2s', 'margin-top':'10px'});
    }


}


//-------- HIDDEN ICON METHODS --------//

calculator.icons.rescale.leaderIconSize = function(scale) {

    var m1 = calculator.icons.calculate.size(th, ts) * scale;
    calculator.icons.set.size('rescaleL1', 85 * m1, 65 * m1);

    var m2 = calculator.icons.calculate.size(toh, tos) * scale;
    calculator.icons.set.size('rescaleL2', 85 * m2, 65 * m2)

}

calculator.icons.show.hiddenContest = function() {
    $('.OGCIcon2').css({'opacity':'1'});
}

calculator.icons.hide.hiddenContest = function() {
    $('.OGCIcon2').css({'opacity':'0'});
}

//------------- ENERVATE ICONS -----------------//

calculator.icons.enervate.delayTime = 200;

//-- ENERVATE ACTIVE ICONS --//
calculator.globalVariable.enervateLeaderLeft = false;
calculator.icons.enervate.leaderLeft = function(state) {

    if(calculator.globalVariable.enervateLeaderLeft) {

        if(state === 0) {
            $('.splc1').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.leaderLeft(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.splc1').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.leaderLeft(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.splc1').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervateLeaderRight = false;
calculator.icons.enervate.leaderRight = function(state) {

    if(calculator.globalVariable.enervateLeaderRight) {

        if(state === 0) {
            $('.splc2').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.leaderRight(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.splc2').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.leaderRight(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.splc2').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervateFollowerF1 = false;
calculator.icons.enervate.followerF1 = function(state) {

    if(calculator.globalVariable.enervateFollowerF1) {

        if(state === 0) {
            $('.spf1L11').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.followerF1(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.spf1L11').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.followerF1(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.spf1L11').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervateFollowerF2 = false;
calculator.icons.enervate.followerF2 = function(state) {

    if(calculator.globalVariable.enervateFollowerF2) {

        if(state === 0) {
            $('.spf1L12').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.followerF2(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.spf1L12').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.followerF2(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.spf1L12').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervateFollowerOF1 = false;
calculator.icons.enervate.followerOF1 = function(state) {

    if(calculator.globalVariable.enervateFollowerOF1) {

        if(state === 0) {
            $('.spf1L21').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.followerOF1(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.spf1L21').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.followerOF1(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.spf1L21').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervateFollowerOF2 = false;
calculator.icons.enervate.followerOF2 = function(state) {

    if(calculator.globalVariable.enervateFollowerOF2) {

        if(state === 0) {
            $('.spf1L22').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.followerOF2(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.spf1L22').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.followerOF2(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.spf1L22').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}


//-- ENERVATE PASIVE ICONS --//
calculator.globalVariable.enervate2LeaderLeft = false;
calculator.icons.enervate2.leaderLeft = function(state) {

    if(calculator.globalVariable.enervate2LeaderLeft) {

        if(state === 0) {
            $('.lener1').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.leaderLeft(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.lener1').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.leaderLeft(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.lener1').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervate2LeaderRight = false;
calculator.icons.enervate2.leaderRight = function(state) {

    if(calculator.globalVariable.enervate2LeaderRight) {

        if(state === 0) {
            $('.lener2').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.leaderRight(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.lener2').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.leaderRight(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.lener2').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervate2FollowerF1 = false;
calculator.icons.enervate2.followerF1 = function(state) {

    if(calculator.globalVariable.enervate2FollowerF1) {

        if(state === 0) {
            $('.fener11').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.followerF1(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.fener11').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.followerF1(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.fener11').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervate2FollowerF2 = false;
calculator.icons.enervate2.followerF2 = function(state) {

    if(calculator.globalVariable.enervate2FollowerF2) {

        if(state === 0) {
            $('.fener12').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.followerF2(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.fener12').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.followerF2(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.fener12').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervate2FollowerOF1 = false;
calculator.icons.enervate2.followerOF1 = function(state) {

    if(calculator.globalVariable.enervate2FollowerOF1) {

        if(state === 0) {
            $('.fener21').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.followerOF1(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.fener21').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.followerOF1(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.fener21').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervate2FollowerOF2 = false;
calculator.icons.enervate2.followerOF2 = function(state) {

    if(calculator.globalVariable.enervate2FollowerOF2) {

        if(state === 0) {
            $('.fener22').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.followerOF2(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.fener22').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.followerOF2(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.fener22').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}


////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////


calculator.lock.switch.all = Array(6);

calculator.lock.switch.l1 = true;
calculator.lock.vibrate.l1 = function(state) {

    if(calculator.lock.switch.l1) {

        $('.l1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


        if(state === 1) {

            $('.l1vibrate').css({'margin-left':'30px'});
            setTimeout(()=>calculator.lock.vibrate.l1(2),100);

        }

        if(state === 2) {

            $('.l1vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.l1(1),100);

        }

    } else {

        calculator.lock.switch.l1 = false;
        $('.l1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

    }

}

calculator.lock.switch.l2 = true;
calculator.lock.vibrate.l2 = function(state) {

    if(calculator.lock.switch.l2) {

        $('.l2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


        if(state === 1) {

            $('.l2vibrate').css({'margin-left':'30px'});
            setTimeout(()=>calculator.lock.vibrate.l2(2),100);

        }

        if(state === 2) {

            $('.l2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.l2(1),100);

        }

    } else {

        calculator.lock.switch.l2 = false;
        $('.l2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

    }

}

calculator.lock.switch.f1 = true;
calculator.lock.vibrate.f1 = function(state) {

    if(calculator.lock.switch.f1) {

        $('.f1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})
        $('.f1vex').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-top':'78px'})

        if(state === 1) {

            $('.f1vibrate').css({'margin-left':'20px'});
            $('.f1vex').css({'margin-left':'-30px'});
            setTimeout(()=>calculator.lock.vibrate.f1(2),100);

        }

        if(state === 2) {

            $('.f1vibrate').css({'margin-left':'0px'});
            $('.f1vex').css({'margin-left':'-20px'});
            setTimeout(()=>calculator.lock.vibrate.f1(1),100);

        }

    } else {

        calculator.lock.switch.f1 = false;
        $('.f1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})
        $('.f1vex').css({'height':'20px', 'width':'20px', 'margin-left':'-44px', 'opacity':'1', 'margin-top':'12px'})
    }

}

calculator.lock.switch.f2 = true;
calculator.lock.vibrate.f2 = function(state) {

    if(calculator.lock.switch.f2) {

        $('.f2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


        if(state === 1) {

            $('.f2vibrate').css({'margin-left':'20px'});
            setTimeout(()=>calculator.lock.vibrate.f2(2),100);

        }

        if(state === 2) {

            $('.f2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.f2(1),100);

        }

    } else {

        calculator.lock.switch.f2 = false;
        $('.f2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

    }

}

calculator.lock.switch.of1 = true;
calculator.lock.vibrate.of1 = function(state) {

    if(calculator.lock.switch.of1) {

        $('.of1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


        if(state === 1) {

            $('.of1vibrate').css({'margin-left':'20px'});
            setTimeout(()=>calculator.lock.vibrate.of1(2),100);

        }

        if(state === 2) {

            $('.of1vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.of1(1),100);

        }

    } else {

        calculator.lock.switch.of1 = false;
        $('.of1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

    }

}

calculator.lock.switch.of2 = true;
calculator.lock.vibrate.of2 = function(state) {

    if(calculator.lock.switch.of2) {

        $('.of2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


        if(state === 1) {

            $('.of2vibrate').css({'margin-left':'20px'});
            setTimeout(()=>calculator.lock.vibrate.of2(2),100);

        }

        if(state === 2) {

            $('.of2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.of2(1),100);

        }

    } else {

        calculator.lock.switch.of2 = false;
        $('.of2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

    }

}

calculator.lock.activate = function(array) {

    calculator.lock.switch.all = array;

    var l1, l2, f1, f2, of1, of2;
    var o1, o2;
    l1 = array[0] ? '2' : '-1';
    l2 = array[1] ? '2' : '-1';
    o1 = array[0] ? '1' : '0';
    o2 = array[1] ? '1' : '0';

    f1 = array[2] ? '2' : '-1';
    f2 = array[3] ? '2' : '-1';
    of1 = array[4] ? '2' : '-1';
    of2 = array[5] ? '2' : '-1';

    $('.lockedCover_l1').css({'z-index' : l1, 'opacity' : o1});
    $('.lockedCover_l2').css({'z-index' : l2, 'opacity' : o2});
    $('.lockedCover_f1').css({'z-index' : f1});
    $('.lockedCover_f2').css({'z-index' : f2});
    $('.lockedCover_of1').css({'z-index' : of1});
    $('.lockedCover_of2').css({'z-index' : of2});

}


////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////


calculator.pointers.switches = Array(6);

calculator.pointers.switches[0] = true;
calculator.pointers.wiggle.l1= function(state) {

    if(calculator.pointers.switches[0]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_l1').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.l1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_l1').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>calculator.pointers.wiggle.l1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_l1').css({'opacity':'0'});

    }

}

calculator.pointers.switches[1] = true;
calculator.pointers.wiggle.l2= function(state) {

    if(calculator.pointers.switches[1]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_l2').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.l2(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_l2').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>calculator.pointers.wiggle.l2(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_l2').css({'opacity':'0'});

    }

}

calculator.pointers.switches[2] = true;
calculator.pointers.wiggle.f1= function(state) {

    if(calculator.pointers.switches[2]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_f1').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.f1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_f1').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>calculator.pointers.wiggle.f1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_f1').css({'opacity':'0'});

    }

}

calculator.pointers.switches[3] = true;
calculator.pointers.wiggle.f2 = function(state) {

    if(calculator.pointers.switches[3]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_f2').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.f2(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_f2').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>calculator.pointers.wiggle.f2(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_f2').css({'opacity':'0'});

    }

}

calculator.pointers.switches[4] = true;
calculator.pointers.wiggle.of1 = function(state) {

    if(calculator.pointers.switches[4]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_of1').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.of1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_of1').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>calculator.pointers.wiggle.of1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_of1').css({'opacity':'0'});

    }

}

calculator.pointers.switches[5] = true;
calculator.pointers.wiggle.of2 = function(state) {

    if(calculator.pointers.switches[5]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_of2').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.of2(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_of2').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>calculator.pointers.wiggle.of2(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_of2').css({'opacity':'0'});

    }

}

calculator.pointers.activate = function(array) {

    calculator.pointers.switches = array;

    calculator.pointers.wiggle.l1(1);
    calculator.pointers.wiggle.l2(1);
    calculator.pointers.wiggle.f1(1);
    calculator.pointers.wiggle.f2(1);
    calculator.pointers.wiggle.of1(1);
    calculator.pointers.wiggle.of2(1);

}

//-------- ADDITIONAL POINTERS --------//

//--- spin button Top ---//

calculator.pointers.spinButtonTopSwitch = false;

// calculator.pointers.spinButtonTopSwitch = 1;
// calculator.pointers.wiggle.spinButtonTop(1);

calculator.pointers.wiggle.spinButtonTop = function(state) {

    if(calculator.pointers.spinButtonTopSwitch) {

        if(state === 1) {

            $('.spinButtonTop_arrowLeft').css({'margin-left':'131px', 'opacity':'1'});
            $('.spinButtonTop_arrowRight').css({'margin-left':'238px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.spinButtonTop(0), 750);

        }

        if(state === 0) {

            $('.spinButtonTop_arrowLeft').css({'margin-left':'100px', 'opacity':'1'});
            $('.spinButtonTop_arrowRight').css({'margin-left':'270px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.spinButtonTop(1), 750);

        }

    } else {

        $('.spinButtonTop_arrowLeft').css({'opacity':'0'});
        $('.spinButtonTop_arrowRight').css({'opacity':'0'});

    }

}


//--- spin button Bottom ---//

calculator.pointers.spinButtonBottomSwitch = false;

// calculator.pointers.spinButtonBottomSwitch = 1;
// calculator.pointers.wiggle.spinButtonBottom(1);

calculator.pointers.wiggle.spinButtonBottom = function(state) {

    if(calculator.pointers.spinButtonBottomSwitch) {

        if(state === 1) {

            $('.spinButtonBottom_arrowLeft').css({'margin-left':'407px', 'opacity':'1'});
            $('.spinButtonBottom_arrowRight').css({'margin-left':'515px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.spinButtonBottom(0), 750);

        }

        if(state === 0) {

            $('.spinButtonBottom_arrowLeft').css({'margin-left':'376px', 'opacity':'1'});
            $('.spinButtonBottom_arrowRight').css({'margin-left':'546px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.spinButtonBottom(1), 750);

        }

    } else {

        $('.spinButtonBottom_arrowLeft').css({'opacity':'0'});
        $('.spinButtonBottom_arrowRight').css({'opacity':'0'});

    }

}


//--- example leader slider ---//

calculator.pointers.example_switch1 = false;

// calculator.pointers.example_switch1 = 1;
// calculator.pointers.wiggle.example_l1(1);

calculator.pointers.wiggle.example_l1 = function(state) {

    if(calculator.pointers.example_switch1) {

        if(state === 1) {

            $('.sliderArrowImageWrap_l1').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.example_l1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_l1').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>calculator.pointers.wiggle.example_l1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_l1').css({'opacity':'0'});

    }

}


/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////


// MICRO ROLLING METHDODS

// the order of context for the array text is as below
// need to stick to this order as the x coordinates are predefined accordingly
// var textArray = ['GROUP A', 'YOU', 'FOLLOWER', 'STRONG', 'WEAK', 1000]
calculator.stopRolling = false;
calculator.roll.displayTime = 4500;

//------ ROLLING FOR EXAMPLE SLIDERS -----//

calculator.stopRolling_example = 0;
calculator.roll.example_l1 = function(index, prevIndex) {

    if(!calculator.stopRolling_example) {

        var str1 = '.example_lSideText1' + index;
        var str2 = '.example_lSideText1' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = 8;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        setTimeout(()=>calculator.roll.example_l1(nextIndex, prevIndex), calculator.roll.displayTime);

    } else {

        $('.example_lSideText10').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.example_lSideText11, .example_lSideText12').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }

}

calculator.stopRolling_example2 = 0;
calculator.roll.example_f1 = function(index, prevIndex) {


    if(!calculator.stopRolling_example2) {

        var str1 = '.example_fSideText1' + index;
        var str2 = '.example_fSideText1' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(360deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(150deg)'});}, 1600);

        var m = 5;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        setTimeout(()=>calculator.roll.example_f1(nextIndex, prevIndex), calculator.roll.displayTime);

    } else {

        $('.example_fSideText10').css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $('.example_fSideText11, .example_fSideText12, .example_fSideText13, .example_fSideText14').css({'transition':'0s', 'transform':'rotate(200deg)'});

    }


}

//---------------------------------------//

calculator.roll.f1 = function(index, prevIndex, textArray) {

    var fSideText10 = document.getElementById('fSideText10');
    var fSideText11 = document.getElementById('fSideText11');
    var fSideText12 = document.getElementById('fSideText12');
    var fSideText13 = document.getElementById('fSideText13');
    var fSideText14 = document.getElementById('fSideText14');
    var fSideText15 = document.getElementById('fSideText15');

    if(!calculator.stopRolling) {


        fSideText10.innerHTML = textArray[0];
        fSideText11.innerHTML = textArray[1];
        fSideText12.innerHTML = textArray[2];
        fSideText13.innerHTML = textArray[3];
        fSideText14.innerHTML = textArray[4];
        fSideText15.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.fSideText1' + index;
        var str2 = '.fSideText1' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(300deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(200deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.f1(nextIndex, prevIndex, textArray), calculator.roll.displayTime);

    } else {

        fSideText10.innerHTML = 'GROUP A';
        fSideText11.innerHTML = '';
        fSideText12.innerHTML = '';
        fSideText13.innerHTML = '';
        fSideText14.innerHTML = '';
        fSideText15.innerHTML = '';

        $('.fSideText10').css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $('.fSideText11, .fSideText12, .fSideText13, .fSideText14, .fSideText15').css({'transition':'0s', 'transform':'rotate(200deg)'});

    }


}

calculator.roll.f2 = function(index, prevIndex, textArray) {

    var fSideText20 = document.getElementById('fSideText20');
    var fSideText21 = document.getElementById('fSideText21');
    var fSideText22 = document.getElementById('fSideText22');
    var fSideText23 = document.getElementById('fSideText23');
    var fSideText24 = document.getElementById('fSideText24');
    var fSideText25 = document.getElementById('fSideText25');

    if(!calculator.stopRolling) {


        fSideText20.innerHTML = textArray[0];
        fSideText21.innerHTML = textArray[1];
        fSideText22.innerHTML = textArray[2];
        fSideText23.innerHTML = textArray[3];
        fSideText24.innerHTML = textArray[4];
        fSideText25.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.fSideText2' + index;
        var str2 = '.fSideText2' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(300deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(200deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.f2(nextIndex, prevIndex, textArray), calculator.roll.displayTime);

    } else {

        fSideText20.innerHTML = 'GROUP A';
        fSideText21.innerHTML = '';
        fSideText22.innerHTML = '';
        fSideText23.innerHTML = '';
        fSideText24.innerHTML = '';
        fSideText25.innerHTML = '';

        $('.fSideText20').css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $('.fSideText21, .fSideText22, .fSideText23, .fSideText24, .fSideText25').css({'transition':'0s', 'transform':'rotate(200deg)'});

    }


}

calculator.roll.f3 = function(index, prevIndex, textArray) {

    var fSideText30 = document.getElementById('fSideText30');
    var fSideText31 = document.getElementById('fSideText31');
    var fSideText32 = document.getElementById('fSideText32');
    var fSideText33 = document.getElementById('fSideText33');
    var fSideText34 = document.getElementById('fSideText34');
    var fSideText35 = document.getElementById('fSideText35');

    if(!calculator.stopRolling) {


        fSideText30.innerHTML = textArray[0];
        fSideText31.innerHTML = textArray[1];
        fSideText32.innerHTML = textArray[2];
        fSideText33.innerHTML = textArray[3];
        fSideText34.innerHTML = textArray[4];
        fSideText35.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.fSideText3' + index;
        var str2 = '.fSideText3' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(300deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(200deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.f3(nextIndex, prevIndex, textArray), calculator.roll.displayTime);

    } else {

        fSideText30.innerHTML = 'GROUP B';
        fSideText31.innerHTML = '';
        fSideText32.innerHTML = '';
        fSideText33.innerHTML = '';
        fSideText34.innerHTML = '';
        fSideText35.innerHTML = '';

        $('.fSideText30').css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $('.fSideText31, .fSideText32, .fSideText33, .fSideText34, .fSideText35').css({'transition':'0s', 'transform':'rotate(200deg)'});

    }


}

calculator.roll.f4 = function(index, prevIndex, textArray) {

    var fSideText40 = document.getElementById('fSideText40');
    var fSideText41 = document.getElementById('fSideText41');
    var fSideText42 = document.getElementById('fSideText42');
    var fSideText43 = document.getElementById('fSideText43');
    var fSideText44 = document.getElementById('fSideText44');
    var fSideText45 = document.getElementById('fSideText45');

    if(!calculator.stopRolling) {


        fSideText40.innerHTML = textArray[0];
        fSideText41.innerHTML = textArray[1];
        fSideText42.innerHTML = textArray[2];
        fSideText43.innerHTML = textArray[3];
        fSideText44.innerHTML = textArray[4];
        fSideText45.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.fSideText4' + index;
        var str2 = '.fSideText4' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(300deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(200deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.f4(nextIndex, prevIndex, textArray), calculator.roll.displayTime);

    } else {

        fSideText40.innerHTML = 'GROUP B';
        fSideText41.innerHTML = '';
        fSideText42.innerHTML = '';
        fSideText43.innerHTML = '';
        fSideText44.innerHTML = '';
        fSideText45.innerHTML = '';

        $('.fSideText40').css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $('.fSideText41, .fSideText42, .fSideText43, .fSideText44, .fSideText45').css({'transition':'0s', 'transform':'rotate(200deg)'});

    }


}


calculator.roll.l1 = function(index, prevIndex, textArray) {

    var lSideText10 = document.getElementById('lSideText10');
    var lSideText11 = document.getElementById('lSideText11');
    var lSideText12 = document.getElementById('lSideText12');
    var lSideText13 = document.getElementById('lSideText13');
    var lSideText14 = document.getElementById('lSideText14');
    var lSideText15 = document.getElementById('lSideText15');

    if(!calculator.stopRolling) {


        lSideText10.innerHTML = textArray[0];
        lSideText11.innerHTML = textArray[1];
        lSideText12.innerHTML = textArray[2];
        lSideText13.innerHTML = textArray[3];
        // lSideText13.innerHTML = calculator.roll.l1PowerText;
        lSideText14.innerHTML = textArray[4];
        lSideText15.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.lSideText1' + index;
        var str2 = '.lSideText1' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.l1(nextIndex, prevIndex, textArray), calculator.roll.displayTime);

    } else {

        lSideText10.innerHTML = 'GROUP A';
        lSideText11.innerHTML = '';
        lSideText12.innerHTML = '';
        lSideText13.innerHTML = '';
        lSideText14.innerHTML = '';
        lSideText15.innerHTML = '';

        $('.lSideText10').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.lSideText11, .lSideText12, .lSideText13, .lSideText14, .lSideText15').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}

calculator.roll.l2 = function(index, prevIndex, textArray) {

    var lSideText20 = document.getElementById('lSideText20');
    var lSideText21 = document.getElementById('lSideText21');
    var lSideText22 = document.getElementById('lSideText22');
    var lSideText23 = document.getElementById('lSideText23');
    var lSideText24 = document.getElementById('lSideText24');
    var lSideText25 = document.getElementById('lSideText25');

    if(!calculator.stopRolling) {


        lSideText20.innerHTML = textArray[0];
        lSideText21.innerHTML = textArray[1];
        lSideText22.innerHTML = textArray[2];
        lSideText23.innerHTML = textArray[3];
        // lSideText23.innerHTML = calculator.roll.l2PowerText;
        lSideText24.innerHTML = textArray[4];
        lSideText25.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.lSideText2' + index;
        var str2 = '.lSideText2' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.l2(nextIndex, prevIndex, textArray), calculator.roll.displayTime);

    } else {

        lSideText20.innerHTML = 'GROUP A';
        lSideText21.innerHTML = '';
        lSideText22.innerHTML = '';
        lSideText23.innerHTML = '';
        lSideText24.innerHTML = '';
        lSideText25.innerHTML = '';

        $('.lSideText20').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.lSideText21, .lSideText22, .lSideText23, .lSideText24, .lSideText25').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}


calculator.roll.dsL = function(index, prevIndex, textArray) {

    var dLSideText0 = document.getElementById('dLSideText0');
    var dLSideText1 = document.getElementById('dLSideText1');
    var dLSideText2 = document.getElementById('dLSideText2');
    var dLSideText3 = document.getElementById('dLSideText3');
    var dLSideText4 = document.getElementById('dLSideText4');
    var dLSideText5 = document.getElementById('dLSideText5');

    if(!calculator.stopRolling) {


        dLSideText0.innerHTML = textArray[0];
        dLSideText1.innerHTML = textArray[1];
        dLSideText2.innerHTML = textArray[2];
        dLSideText3.innerHTML = textArray[3];
        dLSideText4.innerHTML = textArray[4];
        dLSideText5.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.dLSideText' + index;
        var str2 = '.dLSideText' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.dsL(nextIndex, prevIndex, textArray), calculator.roll.displayTime);

    } else {

        dLSideText0.innerHTML = 'GROUP A';
        dLSideText1.innerHTML = '';
        dLSideText2.innerHTML = '';
        dLSideText3.innerHTML = '';
        dLSideText4.innerHTML = '';
        dLSideText5.innerHTML = '';

        $('.dLSideText0').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.dLSideText1, .dLSideText2, .dLSideText3, .dLSideText4, .dLSideText5').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}


calculator.roll.dsF = function(index, prevIndex, textArray) {

    var dFSideText0 = document.getElementById('dFSideText0');
    var dFSideText1 = document.getElementById('dFSideText1');
    var dFSideText2 = document.getElementById('dFSideText2');
    var dFSideText3 = document.getElementById('dFSideText3');
    var dFSideText4 = document.getElementById('dFSideText4');
    var dFSideText5 = document.getElementById('dFSideText5');

    if(!calculator.stopRolling) {


        dFSideText0.innerHTML = textArray[0];
        dFSideText1.innerHTML = textArray[1];
        dFSideText2.innerHTML = textArray[2];
        dFSideText3.innerHTML = textArray[3];
        dFSideText4.innerHTML = textArray[4];
        dFSideText5.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.dFSideText' + index;
        var str2 = '.dFSideText' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.dsF(nextIndex, prevIndex, textArray), calculator.roll.displayTime);

    } else {

        dFSideText0.innerHTML = 'GROUP A';
        dFSideText1.innerHTML = '';
        dFSideText2.innerHTML = '';
        dFSideText3.innerHTML = '';
        dFSideText4.innerHTML = '';
        dFSideText5.innerHTML = '';

        $('.dFSideText0').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.dFSideText1, .dFSideText2, .dFSideText3, .dFSideText4, .dFSideText5').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}


calculator.roll.setCurrentBalance = function(larray, farray) {

    calculator.currentBalance.f1 = farray[0];
    calculator.currentBalance.f2 = farray[1];
    calculator.currentBalance.f3 = farray[2];
    calculator.currentBalance.f4 = farray[3];

    calculator.currentBalance.l1 = larray[0];
    calculator.currentBalance.l2 = larray[1];

}

calculator.roll.calculateNetBalance = function(nplArray, npfArray) {

    calculator.netBalance.f1 = calculator.currentBalance.f1 + npfArray[0];
    calculator.netBalance.f2 = calculator.currentBalance.f2 + npfArray[1];
    calculator.netBalance.f3 = calculator.currentBalance.f3 + npfArray[2];
    calculator.netBalance.f4 = calculator.currentBalance.f4 + npfArray[3];

    calculator.netBalance.l1 = calculator.currentBalance.l1 + nplArray[0];
    calculator.netBalance.l2 = calculator.currentBalance.l2 + nplArray[1];

}


// MICRO TO MACRO CONNECTION ARRAYS

calculator.roll.lArray = Array(6);
calculator.roll.f1Array = Array(6);
calculator.roll.f2Array = Array(6);

calculator.roll.olArray = Array(6);
calculator.roll.of1Array = Array(6);
calculator.roll.of2Array = Array(6);

calculator.roll.dsFollower = Array(6);
calculator.roll.dsLeader = Array(6);

//*-*-*-*//
// this is the old roll method it is not used but it still has usefull code
// that can later be used
calculator.roll.all = function(on, state) {

    var fa1, fa2, fa3, fa4, la1, la2;

    calculator.stopRolling = !on;

    if(state === 'tuto_ashe') {

        fa1 = ['GROUP A', 'FOLLOWER', 'YOU', 'STRONG', -1,  calculator.netBalance.f1];
        fa2 = ['GROUP A', 'FOLLOWER', '', 'WEAK', -1,  calculator.netBalance.f2];
        fa3 = ['GROUP B', 'FOLLOWER', '', 'EQUAL POWER', -1,  calculator.netBalance.f3];
        fa4 = ['GROUP B', 'FOLLOWER', '', 'EQUAL POWER', -1,  calculator.netBalance.f4];

        la1 = ['GROUP A', 'LEADER', '', '', -1,  calculator.netBalance.l1];
        la2 = ['GROUP B', 'LEADER', '', '', -1,  calculator.netBalance.l2];

    }

    if(state === 'tuto_sho_hs1') {

        fa1 = ['GROUP A', 'FOLLOWER', -1, -1, -1, -1];
        fa2 = ['GROUP A', 'FOLLOWER', -1, -1, -1, -1];
        fa3 = ['GROUP B', 'FOLLOWER', -1, -1, -1, -1];
        fa4 = ['GROUP B', 'FOLLOWER', -1, -1, -1, -1];

        la1 = [-1, -1, -1, -1, -1, -1];
        la2 = [-1, -1, -1, -1, -1, -1];

    }

    if(state === 'tuto_sho_lc1') {

        fa1 = [-1, -1, -1, -1, -1, -1];
        fa2 = [-1, -1, -1, -1, -1, -1];
        fa3 = [-1, -1, -1, -1, -1, -1];
        fa4 = [-1, -1, -1, -1, -1, -1];

        la1 = ['GROUP A', 'LEADER', -1, -1, -1, -1];
        la2 = ['GROUP B', 'LEADER', -1, -1, -1, -1];

    }

    if(state === 'tuto_sho_og1') {

        fa1 = ['GROUP A', 'FOLLOWER', -1, -1, -1, -1];
        fa2 = ['GROUP A', 'FOLLOWER', -1, -1, -1, -1];
        fa3 = ['GROUP B', 'FOLLOWER', -1, -1, -1, -1];
        fa4 = ['GROUP B', 'FOLLOWER', -1, -1, -1, -1];

            la1 = ['GROUP A', 'LEADER', -1, -1, -1, -1];
        la2 = ['GROUP B', 'LEADER', -1, -1, -1, -1];

    }


    calculator.roll.f1(0, 6, fa1);
    calculator.roll.f2(0, 6, fa2);
    calculator.roll.f3(0, 6, fa3);
    calculator.roll.f4(0, 6, fa4);

    calculator.roll.l1(0, 6, la1);
    calculator.roll.l2(0, 6, la2);

}
//*-*-*-*//


// MACRO ARRAY CONTROLLING METHODS
calculator.roll.emptyAll = function() {

    calculator.roll.f1Array = [-1, -1, -1, -1, -1, -1];
    calculator.roll.f2Array = [-1, -1, -1, -1, -1, -1];
    calculator.roll.of1Array = [-1, -1, -1, -1, -1, -1];
    calculator.roll.of2Array = [-1, -1, -1, -1, -1, -1];
    calculator.roll.lArray = [-1, -1, -1, -1, -1, -1];
    calculator.roll.olArray = [-1, -1, -1, -1, -1, -1];

    calculator.roll.dsFollower = [-1, -1, -1, -1, -1, -1];
    calculator.roll.dsLeader = [-1, -1, -1, -1, -1, -1];

}

// typeOfContest is about which type of contest is being played
// in the experiment only 'l', 'f' and 'fhetero will be relevant'
calculator.roll.setRolesAndGroups = function() {

    // contest section related
    // Also help sabo is available for leader contest so the standart role rolls
    // for followers are also assigned
    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

        calculator.roll.dsFollower[0] = 'GROUP A';
        calculator.roll.dsFollower[1] = 'FOLLOWER';

        calculator.roll.dsLeader[0] = 'GROUP A';
        calculator.roll.dsLeader[1] = 'LEADER';


        calculator.roll.lArray[0] = 'GROUP A';
        calculator.roll.lArray[1] = 'LEADER';

        calculator.roll.f1Array[0] = 'GROUP A';
        calculator.roll.f1Array[1] = 'FOLLOWER';
        calculator.roll.f2Array[1] = 'FOLLOWER';
        calculator.roll.f2Array[0] = 'GROUP A';

        calculator.roll.olArray[0] = 'GROUP B';
        calculator.roll.olArray[1] = 'LEADER';

        calculator.roll.of1Array[0] = 'GROUP B';
        calculator.roll.of1Array[1] = 'FOLLOWER';
        calculator.roll.of2Array[0] = 'GROUP B';
        calculator.roll.of2Array[1] = 'FOLLOWER';

    }

    // contest section related
    if(calculator.globalVariable.isIGA) {

        calculator.roll.dsFollower[0] = '';
        calculator.roll.dsFollower[1] = '';

        calculator.roll.dsLeader[0] = 'GROUP A';
        calculator.roll.dsLeader[1] = 'FOLLOWER';

        calculator.roll.lArray[0] = 'GROUP A';
        calculator.roll.lArray[1] = 'FOLLOWER';
        calculator.roll.olArray[0] = 'GROUP A';
        calculator.roll.olArray[1] = 'FOLLOWER';


        calculator.roll.lArray[3] = 'EQUAL POWER';
        calculator.roll.olArray[3] = 'EQUAL POWER';

        calculator.roll.dsLeader[3] = 'EQUAL POWER';

        // we are always represented by left side so left hetero implies our
        // group is hetero
        if(calculator.globalVariable.ourFollowersAreHetero) {

            if(calculator.globalVariable.playerIndex === 0) {

                calculator.roll.lArray[3] = 'STRONG';
                calculator.roll.olArray[3] = 'WEAK';

                calculator.roll.dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.playerIndex === 1) {

                calculator.roll.lArray[3] = 'WEAK';
                calculator.roll.olArray[3] = 'STRONG';

                calculator.roll.dsLeader[3] = 'WEAK';

            }

        }

    }

    // contest section related
    // this section is only relevant for the tutorial
    // otherwise we reconstruct the data to make the subject's group group A
    if(calculator.globalVariable.isIGB) {

        calculator.roll.dsFollower[0] = '';
        calculator.roll.dsFollower[1] = '';

        calculator.roll.dsLeader[0] = 'GROUP B';
        calculator.roll.dsLeader[1] = 'FOLLOWER';

        calculator.roll.lArray[0] = 'GROUP B';
        calculator.roll.lArray[1] = 'FOLLOWER';
        calculator.roll.olArray[0] = 'GROUP B';
        calculator.roll.olArray[1] = 'FOLLOWER';


        calculator.roll.lArray[3] = 'EQUAL POWER';
        calculator.roll.olArray[3] = 'EQUAL POWER';

        calculator.roll.dsLeader[3] = 'EQUAL POWER';

        // we are always represented by left side so left hetero implies our
        // group is hetero
        if(calculator.globalVariable.theirFollowersAreHetero) {

            if(calculator.globalVariable.playerIndex === 0) {

                calculator.roll.lArray[3] = 'STRONG';
                calculator.roll.olArray[3] = 'WEAK';

                calculator.roll.dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.playerIndex === 1) {

                calculator.roll.lArray[3] = 'WEAK';
                calculator.roll.olArray[3] = 'STRONG';

                calculator.roll.dsLeader[3] = 'WEAK';

            }

        }

    }


}

calculator.roll.setYouTag = function() {

    if(calculator.globalVariable.playerView) {

        if(calculator.globalVariable.playerIndex === -1) {

            calculator.roll.lArray[2] = 'YOU';
            calculator.roll.dsLeader[2] = 'YOU';

            calculator.roll.f1Array[2] = '';
            calculator.roll.f2Array[2] = '';
            calculator.roll.of1Array[2] = '';
            calculator.roll.of2Array[2] = '';
            // calculator.roll.lArray[2] = '';
            calculator.roll.olArray[2] = '';

        }

        if(calculator.globalVariable.playerIndex === 0) {

            calculator.roll.f1Array[2] = 'YOU';
            calculator.roll.dsFollower[2] = 'YOU';

            calculator.roll.lArray[2] = '';
            // calculator.roll.f1Array[2] = '';
            calculator.roll.f2Array[2] = '';
            calculator.roll.olArray[2] = '';
            calculator.roll.of1Array[2] = '';
            calculator.roll.of2Array[2] = '';

        }

        if(calculator.globalVariable.playerIndex === 1) {

            calculator.roll.f2Array[2] = 'YOU';
            calculator.roll.dsFollower[2] = 'YOU';

            calculator.roll.lArray[2] = '';
            calculator.roll.f1Array[2] = '';
            // calculator.roll.f2Array[2] = '';
            calculator.roll.olArray[2] = '';
            calculator.roll.of1Array[2] = '';
            calculator.roll.of2Array[2] = '';

        }
    }

}

calculator.roll.adjustForTreatment = function() {

    if(!calculator.globalVariable.theirFollowersAreHetero && !calculator.globalVariable.ourFollowersAreHetero) {

        calculator.roll.f1Array[3] = -1;
        calculator.roll.f2Array[3] = -1;
        calculator.roll.of1Array[3] = -1;
        calculator.roll.of2Array[3] = -1;

        calculator.roll.lArray[3] = -1;
        calculator.roll.olArray[3] = -1;

        calculator.roll.dsFollower[3] = -1;
        calculator.roll.dsLeader[3] = -1;

    }


    // we are always represented by left side so left hetero implies our
    // group is hetero
    if(calculator.globalVariable.ourFollowersAreHetero) {

        if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

            calculator.roll.f1Array[3] = 'STRONG';
            calculator.roll.f2Array[3] = 'WEAK';
            calculator.roll.of1Array[3] = 'EQUAL POWER';
            calculator.roll.of2Array[3] = 'EQUAL POWER';

            calculator.roll.lArray[3] = '';
            calculator.roll.olArray[3] = '';

            calculator.roll.dsLeader[3] = '';
            calculator.roll.dsFollower[3] = '';

            if(calculator.globalVariable.playerView) {

                if(calculator.globalVariable.playerIndex === 0) {
                    calculator.roll.dsFollower[3] = 'STRONG';
                }

                if(calculator.globalVariable.playerIndex === 1) {
                    calculator.roll.dsFollower[3] = 'WEAK';
                }

            }
        }

        if(calculator.globalVariable.isIGA) {

            calculator.roll.f1Array[3] = '';
            calculator.roll.f2Array[3] = '';
            calculator.roll.of1Array[3] = '';
            calculator.roll.of2Array[3] = '';

            // here we use subjectiveIndex as a way to determine left and right player rolls
            // we do not require subjectiveview that way we can also use this method during the tutorial
            if(calculator.globalVariable.playerIndex === 0) {

                calculator.roll.lArray[3] = 'STRONG';
                calculator.roll.olArray[3] = 'WEAK';

                calculator.roll.dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.playerIndex === 1) {

                calculator.roll.lArray[3] = 'WEAK';
                calculator.roll.olArray[3] = 'STRONG';

                calculator.roll.dsLeader[3] = 'WEAK';

            }

        }

        if(calculator.globalVariable.isIGB) {

            calculator.roll.f1Array[3] = '';
            calculator.roll.f2Array[3] = '';
            calculator.roll.of1Array[3] = '';
            calculator.roll.of2Array[3] = '';

            calculator.roll.lArray[3] = 'EQUAL POWER';
            calculator.roll.olArray[3] = 'EQUAL POWER';

            calculator.roll.dsLeader[3] = 'EQUAL POWER';

        }

    }

    if(calculator.globalVariable.theirFollowersAreHetero) {

        if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

            calculator.roll.f1Array[3] = 'EQUAL POWER';
            calculator.roll.f2Array[3] = 'EQUAL POWER';
            calculator.roll.of1Array[3] = 'STRONG';
            calculator.roll.of2Array[3] = 'WEAK';

            calculator.roll.lArray[3] = '';
            calculator.roll.olArray[3] = '';

            calculator.roll.dsLeader[3] = '';
            calculator.roll.dsFollower[3] = '';

            if(calculator.globalVariable.playerView) {

                if(calculator.globalVariable.playerIndex === 0) {
                    calculator.roll.dsFollower[3] = 'EQUAL POWER';
                }

                if(calculator.globalVariable.playerIndex === 1) {
                    calculator.roll.dsFollower[3] = 'EQUAL POWER';
                }

            }

        }

        if(calculator.globalVariable.isIGA) {

            calculator.roll.f1Array[3] = '';
            calculator.roll.f2Array[3] = '';
            calculator.roll.of1Array[3] = '';
            calculator.roll.of2Array[3] = '';

            calculator.roll.lArray[3] = 'EQUAL POWER';
            calculator.roll.olArray[3] = 'EQUAL POWER';

            calculator.roll.dsLeader[3] = 'EQUAL POWER';

        }

        if(calculator.globalVariable.isIGB) {

            calculator.roll.f1Array[3] = '';
            calculator.roll.f2Array[3] = '';
            calculator.roll.of1Array[3] = '';
            calculator.roll.of2Array[3] = '';

            // here we use subjectiveIndex as a way to determine left and right player rolls
            // we do not require subjectiveview that way we can also use this method during the tutorial
            if(calculator.globalVariable.playerIndex === 0) {

                calculator.roll.lArray[3] = 'STRONG';
                calculator.roll.olArray[3] = 'WEAK';

                calculator.roll.dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.playerIndex === 1) {

                calculator.roll.lArray[3] = 'WEAK';
                calculator.roll.olArray[3] = 'STRONG';

                calculator.roll.dsLeader[3] = 'WEAK';

            }

        }

    }

    if(calculator.globalVariable.theirFollowersAreHetero && calculator.globalVariable.ourFollowersAreHetero) {

        calculator.roll.f1Array[3] = 'STRONG';
        calculator.roll.f2Array[3] = 'WEAK';
        calculator.roll.of1Array[3] = 'STRONG';
        calculator.roll.of2Array[3] = 'WEAK';

        calculator.roll.lArray[3] = '';
        calculator.roll.olArray[3] = '';

        calculator.roll.dsLeader[3] = '';
        calculator.roll.dsFollower[3] = '';

        if(calculator.globalVariable.playerView) {

            if(calculator.globalVariable.playerIndex === 0) {
                calculator.roll.dsFollower[3] = 'STRONG';
            }

            if(calculator.globalVariable.playerIndex === 1) {
                calculator.roll.dsFollower[3] = 'WEAK';
            }

        }


        if(calculator.globalVariable.isIGA && calculator.globalVariable.isIGB) {

            if(calculator.globalVariable.playerIndex === 0) {

                calculator.roll.lArray[3] = 'STRONG';
                calculator.roll.olArray[3] = 'WEAK';

                calculator.roll.dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.playerIndex === 1) {

                calculator.roll.lArray[3] = 'WEAK';
                calculator.roll.olArray[3] = 'STRONG';

                calculator.roll.dsLeader[3] = 'WEAK';

            }

        }

    }

}

calculator.roll.adjustForOG2 = function() {

    // In og2 one of the follower of one of the group is the old leader so being weak and strong does not work
    // in addition, being the weak or strong follower does not matter
    // so we take out that section from the roll
    if(calculator.globalVariable.isOG2) {

        calculator.roll.f1Array[3] = -1;
        calculator.roll.f2Array[3] = -1;
        calculator.roll.of1Array[3] = -1;
        calculator.roll.of2Array[3] = -1;

        calculator.roll.lArray[3] = -1;
        calculator.roll.olArray[3] = -1;

        calculator.roll.dsFollower[3] = -1;
        calculator.roll.dsLeader[3] = -1;

    }

}

// ACTION AND EXECUTION
calculator.roll.animate = function() {

    calculator.roll.f1(0, 6, calculator.roll.f1Array);
    calculator.roll.f2(0, 6, calculator.roll.f2Array);
    calculator.roll.f3(0, 6, calculator.roll.of1Array);
    calculator.roll.f4(0, 6, calculator.roll.of2Array);

    calculator.roll.l1(0, 6, calculator.roll.lArray);
    calculator.roll.l2(0, 6, calculator.roll.olArray);

    if(calculator.globalVariable.playerView) {
        if(calculator.globalVariable.playerIndex === -1) {
            calculator.roll.dsL(0, 6, calculator.roll.dsLeader);
        } else {
            calculator.roll.dsF(0, 6, calculator.roll.dsFollower);
        }
    }

}

calculator.roll.initiate = function() {

    calculator.roll.emptyAll();
    calculator.roll.setRolesAndGroups();
    calculator.roll.setYouTag();
    calculator.roll.adjustForTreatment();
    calculator.roll.adjustForOG2();
    calculator.stopRolling = false;
    calculator.roll.animate();

}

calculator.roll.reset = function() {

    calculator.stopRolling = true;
    setTimeout(()=>calculator.roll.initiate(), calculator.roll.displayTime);

}

/*
To update the roll during the action
calculator.roll.reset();
change the desired roll array calculator.roll.**Array
calculator.roll.initiate();
*/


/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////


calculator.questions.spin1.l1 = function() {
    $('.sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.l1 = function() {
    $('.sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.l2 = function() {
    $('.sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.l2 = function() {
    $('.sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.f1 = function() {
    $('.sliderQuestion_f1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.f1 = function() {
    $('.sliderQuestion_f1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.f2 = function() {
    $('.sliderQuestion_f2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.f2 = function() {
    $('.sliderQuestion_f2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.of1 = function() {
    $('.sliderQuestion_of1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.of1 = function() {
    $('.sliderQuestion_of1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.of2 = function() {
    $('.sliderQuestion_of2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.of2 = function() {
    $('.sliderQuestion_of2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.activate.all = function(array) {

    $('.sliderQuestion_l1').css({'opacity': array[0].toString()});
    $('.sliderQuestion_f1').css({'opacity': array[1].toString()});
    $('.sliderQuestion_f2').css({'opacity': array[2].toString()});
    $('.sliderQuestion_l2').css({'opacity': array[3].toString()});
    $('.sliderQuestion_of1').css({'opacity': array[4].toString()});
    $('.sliderQuestion_of2').css({'opacity': array[5].toString()});

    if(calculator.globalVariable.playerView) {
        if(calculator.globalVariable.playerIndex === -1) {
            $('.sliderQuestion_l1').css({'opacity': '0'});
        }
        if(calculator.globalVariable.playerIndex === 0) {
            $('.sliderQuestion_f1').css({'opacity': '0'});
        }
        if(calculator.globalVariable.playerIndex === 1) {
            $('.sliderQuestion_f2').css({'opacity': '0'});
        }
    }

}


/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////


calculator.wheel.hide = function() {

    $('.pw').css({'opacity':'1', 'zIndex':'1'});
    $('.mywheel').css({'opacity':'0', 'zIndex':'0'});

}

calculator.wheel.show = function() {

    $('.pw').css({'opacity':'0', 'zIndex':'-1'});
    $('.mywheel').css({'opacity':'1', 'zIndex':'0'});

}

calculator.wheel.spin = function() {

    calculator.globalVariable.topSpinButtonIsEnabled = false;
    calculator.globalVariable.bottomSpinButtonIsEnabled = false;

    //---//

    calculator.results.softHide.allResults();
    calculator.button.display.spinTop(false);
    setTimeout(()=>calculator.button.disable.spinTop(), 300);


    //---//

    calculator.wheel.spinDuration = 1;
    calculator.wheel.spinNumber = 3;

    calculator.wheel.create(pwin, 'myWheel');
    calculator.wheel.myWheelObj.stopAnimation(false);
    calculator.wheel.myWheelObj.rotationAngle = 0;

    calculator.wheel.show();

    //---//

    var winner = (pwin > Math.random()) ? 1 : 2;

    var stopAt = calculator.wheel.myWheelObj.getRandomForSegment(winner);
    calculator.wheel.myWheelObj.animation.stopAngle = stopAt;
    calculator.wheel.myWheelObj.startAnimation();

    //---//

    setTimeout(()=>
    {
        calculator.results.update.allTextAndColors(winner);
    },
    calculator.wheel.spinDuration * 0.75 * 1000);

    setTimeout(()=>
    {
        calculator.results.show.outcomes();
    },
    calculator.wheel.spinDuration * 1000);

}

calculator.wheel.cruise = function() {

    if(!calculator.wheel.isSpinning) {

        calculator.wheel.show();

        calculator.wheel.spinDuration = 60;
        calculator.wheel.spinNumber = 6;

        calculator.wheel.create(pwin, 'myWheel');
        calculator.wheel.myWheelObj.stopAnimation(false);
        calculator.wheel.myWheelObj.rotationAngle = 0;
        calculator.wheel.myWheelObj.startAnimation();

    }

}


//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////


calculator.space.hsIsOpen = undefined;

calculator.space.hsResultsTopIsOpen = undefined;

calculator.space.hsResultsBottomIsOpen = undefined;

calculator.space.powerBarIsOpen = undefined;

// Used only in a specific circumstance otherwise always closed as it messes up the height
calculator.space.powerBarLegendIsOpen = false;

calculator.space.contestIsOpen = undefined;

calculator.space.contestResultsIsOpen = undefined;


// CONTEST SECTION SPACE MANAGEMENT

calculator.space.open.cResults = function() {

    calculator.space.contestResultsIsOpen = true;
    calculator.space.update.heights();

}

calculator.space.close.cResults = function() {

    calculator.space.contestResultsIsOpen = false;
    calculator.space.update.heights();

}


// TOP RESULTS OF HELP / SABOTAGE

calculator.space.open.hsResultsTop = function() {

    $('.hsWrap').css({'transition-delay':'1.2s', 'transition':'0.3521s', 'margin-top':'0px'});
    calculator.space.hsResultsTopIsOpen = true;
    calculator.space.update.heights();

}

calculator.space.close.hsResultsTop = function() {

    $('.hsWrap').css({'transition-delay':'0s', 'transition':'0.3521s', 'margin-top':'-57px'});
    calculator.space.hsResultsTopIsOpen = false;
    calculator.space.update.heights();

}


// BOTTOM RESULTS OF HELP / SABOTAGE

calculator.space.open.hsResultsBottom = function() {

    $('.pWrap').css({'transition':'0.3s', 'margin-top':'40px'});
    calculator.space.hsResultsBottomIsOpen = true;
    calculator.space.update.heights();

}

calculator.space.close.hsResultsBottom = function() {

    $('.pWrap').css({'transition':'0.3s', 'margin-top':'-54px'});
    calculator.space.hsResultsBottomIsOpen = false;
    calculator.space.update.heights();

}


// CLOSE BOTH HELP SABOTAGE SECTION AND 'CLOSE' LEADER RESULT SECTION

calculator.space.close.all = function() {

    calculator.space.close.hsResultsTop();
    calculator.space.close.hsResultsBottom();
    calculator.space.close.cResults();

    // if(calculator.globalVariable.playerIndex === -1 && calculator.globalVariable.playerView) {
    //     calculator.space.contestResultsIsOpen = true;
    // }
    //
    // calculator.space.update.heights();

}


// ADJUST HEIGHT DEPENDING ON WHAT IS DISPLAYED AND OPEN

calculator.space.update.heights = function() {

    var pb = calculator.space.powerBarIsOpen ? 30 : 0;
    var pblegend = calculator.space.powerBarLegendIsOpen ? 60 : 0;
    var c = calculator.space.contestIsOpen ? 170 : 0;
    var hs = calculator.space.hsIsOpen ? 295 : 0;
    var cr = calculator.space.contestResultsIsOpen ? 150 : 0;//145 OLD VALUE
    var hsT = calculator.space.hsResultsTopIsOpen ? 65 : 0;
    var hsB = calculator.space.hsResultsBottomIsOpen ? 90 : 0;


    var total = pb + pblegend +  c + cr + hs + hsT + hsB;

    total = total + 'px';

    console.log('********************');
    console.log('power bar: ' + pb);
    console.log('power bar legend: ' + pblegend);
    console.log('contest: ' + c);
    console.log('contestResult: ' + cr);
    console.log('hs: ' + hs);
    console.log('hs Top: ' + hsT);
    console.log('hs Bottom: ' + hsB);
    console.log('total: ' + total);
    console.log('********************');

    $('.generalMarginBox').css({'transition':'1.023456s', 'height' : total});

    calculator.section.power.adjust.space();

}


////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////


//-------------- AFTER WHEEL STOPS ------------//

calculator.results.show.outcomes = function() {

    calculator.globalVariable.contestResultsExist = true;
    calculator.globalVariable.topSpinButtonIsEnabled = true;
    calculator.globalVariable.bottomSpinButtonIsEnabled = true;

    // enlarge to their original size both section when you display the results

    if(calculator.globalVariable.display.cMinimize) {
        calculator.section.contest.minimize(false);
    }

    if(calculator.globalVariable.display.hsMinimize) {
        calculator.section.hs.minimize(false);
    }

    //---------- CONTEST SECTION -----------//

    // I do not want the spinButton Bottom to have power to control the space
    // results and titles are the primary determinantes we can be clever and use this switch accordingly
    if(calculator.globalVariable.display.cButton) {
        calculator.button.display.spinBottom(true);
        setTimeout(()=>calculator.button.enable.spinBottom(), 300);
    } else {
        calculator.button.display.spinBottom(false);
        calculator.button.disable.spinBottom();
    }

    if(calculator.globalVariable.display.cResults) {
        calculator.results.show.leaderOutcomes();
    } else {
        calculator.results.hide.leaderOutcomes()
    }

    if(calculator.globalVariable.display.cTitle) {
        calculator.titles.contest.show();
    } else {
        calculator.titles.contest.hide();
    }


    //-------------- HELP / SABOTAGE SECTION ------------//

    if(calculator.globalVariable.display.hsButton) {
        calculator.button.display.spinTop(true);
        setTimeout(()=>calculator.button.enable.spinTop(), 300);
    }

    if(calculator.globalVariable.display.hsResults) {
        calculator.results.show.followerOutcomesAll();
    } else {
        calculator.results.hide.followerOutcomesAll();
    }

    if(calculator.globalVariable.display.hsIcons) {
        calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);
        calculator.section.hs.set.iconPosition('center');
    } else {
        // Not sure how can I benefit this state to be considered when needed
    }

    if(calculator.globalVariable.display.hsMainTitle) {
        calculator.titles.hs.show();
        calculator.titles.update.position();
    }


    //------ DELAYED ACTIVATIONS -------//

    setTimeout(()=>{

        calculator.globalVariable.aBitOfWaitingIsDone = true;
        calculator.globalVariable.dynamicDisplay = true;

        calculator.button.enable.minTop();
        calculator.button.display.minTop(true);

        calculator.button.enable.minBottom();
        calculator.button.display.minBottom(true);

    }, 5000);

}


//------------------ CONTEST -----------------//

calculator.results.leader.switches = Array(4);
calculator.results.leader.switches = [false, false, false, false];


calculator.results.leader.update.payoffHeights = function(array) {

    var sum = array.reduce((a,b) => a + b, 0)

    if(sum === 0) {

        $('.payoffWrap').css({'margin-top':'-109px'});
        $('.c1, .c2').css({'opacity':'1'});
        $('.bottomText').css({'display':'none'});

    }

    if(sum === 1 || sum === 2) {

        $('.payoffWrap').css({'margin-top':'-145px'});
        $('.c1, .c2').css({'opacity':'1'});
        $('.bottomText').css({'display':'none'});

    }

    if(sum === 3) {

        $('.payoffWrap').css({'margin-top':'-145px'});
        $('.c1, .c2').css({'opacity':'1'});
        $('.bottomText').css({'display':'flex', 'margin-bottom':'-25px'});

    }

    if(sum === 4) {

        $('.payoffWrap').css({'margin-top':'-145px'});
        $('.c1, .c2').css({'opacity':'1'});
        $('.bottomText').css({'display':'flex', 'margin-bottom':'0px'});

    }


}

calculator.results.leader.display.investment = function(show) {

    var opacity = show ? '1' : '0';
    $('.cLeft, .cRight').css({'opacity': opacity});
    $('.pRight, .pLeft').css({'display':'none'});
    $('.topText').css({'justify-content':'center', 'border-bottom':'0px black'});


    calculator.results.leader.switches[0] = show;
    calculator.results.leader.update.payoffHeights(calculator.results.leader.switches);

    calculator.results.tokenTextIsShown = true;

}

calculator.results.leader.display.prize = function(show) {

    var opacity = show ? '1' : '0';
    $('.pLeft, .pRight').css({'opacity': opacity});
    $('.tokenTag').css({'display':'none'});

    calculator.results.leader.switches[1] = show;
    calculator.results.leader.update.payoffHeights(calculator.results.leader.switches);

    if(show) {

        $('.pRight, .pLeft').css({'display':'flex'});
        $('.topText').css({'justify-content':'space-between'});
        calculator.results.tokenTextIsShown = false;

    }

}

calculator.results.leader.display.netPayoff = function(show) {

    var opacity = show ? '1' : '0';
    $('.npLeft, .npRight').css({'opacity': opacity});
    $('.topText').css({'border-bottom':'1px black dashed'});
    calculator.results.leader.switches[2] = show;
    calculator.results.leader.update.payoffHeights(calculator.results.leader.switches);

}

calculator.results.leader.display.role = function(show) {

    var opacity = show ? '1' : '0';
    $('.rLeft, .rRight').css({'opacity': opacity});
    calculator.results.leader.switches[3] = show;
    calculator.results.leader.update.payoffHeights(calculator.results.leader.switches);

}



calculator.results.show.leaderOutcomes = function() {

    $('.payoffWrap, .imageWrap23').css({'transition' : '1.023456s',  'opacity':'1'});
    calculator.space.contestResultsIsOpen = true;

    if(!calculator.globalVariable.contestResultsExist) {
        $('.payoffWrap').css({'transition' : '0s', 'opacity':'0'});
    }

    calculator.space.update.heights();

}

calculator.results.hide.leaderOutcomes = function() {

    $('.payoffWrap, .imageWrap23').css({'transition' : '1.023456s', 'transition-delay':'0s', 'opacity':'0'});
    calculator.space.contestResultsIsOpen = false;

    // Do not hide the contest titles when the subjective view is the leader
    if(calculator.globalVariable.playerIndex === -1 && calculator.globalVariable.playerView) {
        calculator.space.contestResultsIsOpen = true;
        $('.imageWrap23').css({'transition' : '0.15s', 'transition-delay':'0s','opacity':'1'});
    }

    // do not hide the contest title when contest title hover is close.
    // If the title is hidden then it will never be opened by the hover since it is closed
    if(!calculator.globalVariable.hover.cTitle) {
        calculator.space.contestResultsIsOpen = true;
        $('.imageWrap23').css({'transition' : '0.5s', 'transition-delay':'0s', 'opacity':'1'});
    }

    calculator.space.update.heights();

}


//----------- HELP SABOTAGE ----------//

calculator.results.hide.followerOutcomesBottom = function() {

    calculator.space.close.hsResultsBottom();
    $('.leftSideResult, .rightSideResult, .leftSidePrize, .rightSidePrize, .leftSideRole, .rightSideRole').css({'transition':'0.3521s', 'transition-delay':'0s', 'opacity':'0'});

}

calculator.results.hide.followerOutcomesTop = function() {

    calculator.space.close.hsResultsTop();
    $('.fNetPayoffText, .fResults').css({'transition-delay':'0s', 'transition':'0.3521s', 'opacity':'0'});

}

calculator.results.hide.followerOutcomesAll = function() {

    calculator.results.hide.followerOutcomesTop();
    calculator.results.hide.followerOutcomesBottom();

}


calculator.results.show.followerOutcomesBottom = function() {

    if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1)

    $('.fResults').css({'transition' : '0.15s', 'opacity':'1'});

    calculator.space.open.hsResultsBottom();

    $('.leftSideResult, .rightSideResult').css({'transition':'0.521s', 'transition-delay':'0.5s', 'opacity':'1'});
    $('.leftSidePrize, .rightSidePrize').css({'transition':'0.521s', 'transition-delay':'0.5s', 'opacity':'1'});
    $('.leftSideRole, .rightSideRole').css({'transition':'0.521s', 'transition-delay':'0.5s', 'opacity':'1'});

}

calculator.results.show.followerOutcomesTop = function() {

    calculator.space.open.hsResultsTop();
    $('.fNetPayoffText, .fResults').css({'transition-delay':'1.2s','transition':'0.3521s', 'opacity':'1'});

}

calculator.results.show.followerOutcomesAll = function() {

    calculator.results.show.followerOutcomesTop();
    calculator.results.show.followerOutcomesBottom();

}


//---------- ALL ----------//

calculator.results.softHide.allResults = function() {

    $('.payoffWrap, .fNetPayoffText, .fResults, .leftSideResult, .rightSideResult, .leftSidePrize, .rightSidePrize, .leftSideRole, .rightSideRole').css({'transition-delay':'0s', 'transition' : '0.15s', 'opacity':'0'});

}

calculator.results.hide.all = function() {

    calculator.results.hide.followerOutcomesAll();
    calculator.results.hide.leaderOutcomes();
    calculator.globalVariable.dynamicDisplay = false;
    calculator.titles.update.position();

}

calculator.results.show.all = function() {

    calculator.results.show.followerOutcomesBottom();
    calculator.results.show.followerOutcomeTop();
    calculator.results.show.leaderOutcomes();

}


//-------------- TEXT AND COLOR UPDATING ------------//

calculator.results.tokenTextIsShown = undefined;
calculator.results.resultTextsType = undefined;
calculator.results.lastWinner = undefined;


calculator.results.update.contestText = function(w) {

    w = w === undefined ? calculator.results.lastWinner : w;
    calculator.results.lastWinner = w;

    var winnerPrize,winnerRole, loserRole;

    // can be replaced with typeofcontest
    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {
        winnerRole = 'Continue as Leader';
        loserRole = 'Became a Follower';
        winnerPrize = 1000;
    }
    if(calculator.globalVariable.isIGA || calculator.globalVariable.isIGB) {
        winnerRole = 'Became the Leader';
        loserRole = 'Continue as Follower';
        winnerPrize = 0;
    }
    if(calculator.globalVariable.isGeneric) {
        winnerRole = 'Upgrade in role';
        loserRole = 'Downgrade in role';

        winnerPrize = 'PRIZE';
    }


    //---//


    var resultLeft = document.getElementById('resultLeft');
    var prizeLeft = document.getElementById('prizeLeft');
    var costLeft = document.getElementById('costLeft');
    var netPayoffLeft = document.getElementById('netPayoffLeft');
    var roleLeft = document.getElementById('roleLeft');
    var resultRight = document.getElementById('resultRight');
    var prizeRight = document.getElementById('prizeRight');
    var costRight = document.getElementById('costRight');
    var netPayoffRight = document.getElementById('netPayoffRight');
    var roleRight = document.getElementById('roleRight');
    var myTokenTag1 = document.getElementById('tokenTag1');
    var myTokenTag2 = document.getElementById('tokenTag2');

    var tokenTag1, tokenTag2;
    if(calculator.results.tokenTextIsShown) {
        tokenTag1 = efo === 0 ? ' token' : ' tokens';
        tokenTag2 = oefo === 0 ? ' token' : ' tokens';
        $('.tokenTag').css({'padding-left':'10px', 'font-weight':'400', 'display':'inline'});
    } else {
        tokenTag1 = tokenTag2 = '';
        $('.tokenTag').css({'display':'none'});
    }


    //---//


    resultLeft.innerHTML = w === 1 ? 'WON' : 'LOST';
    prizeLeft.innerHTML = w === 1 ? winnerPrize : 0;
    costLeft.innerHTML = efo;
    myTokenTag1.innerHTML = tokenTag1;
    netPayoffLeft.innerHTML = -efo + ( w === 1 ? winnerPrize : 0);
    roleLeft.innerHTML = w === 1 ? winnerRole : loserRole;

    resultRight.innerHTML = w === 2 ? 'WON' : 'LOST';
    prizeRight.innerHTML = w === 2 ? winnerPrize : 0;
    costRight.innerHTML = oefo;
    myTokenTag2.innerHTML = tokenTag2;
    netPayoffRight.innerHTML = -oefo + ( w === 2 ? winnerPrize : 0);
    roleRight.innerHTML = w === 2 ? winnerRole : loserRole;


    //---//


    if(calculator.globalVariable.isGeneric) {

        prizeLeft.innerHTML = w === 1 ? winnerPrize : 0;
        prizeRight.innerHTML = w === 2 ? winnerPrize : 0;

        var str1, str2, str3;
        str1 = '<span style=\'color:red;\'>';
        str2 = '</span>';
        str3 = str1 + ' - ' + efo + str2;

        if(efo === 0) {
            netPayoffLeft.innerHTML =  w === 1 ? winnerPrize : -efo;
        } else if(efo > 0) {
            netPayoffLeft.innerHTML = w === 1 ? (winnerPrize + str3) : -efo;
        }

        var ostr1, ostr2, ostr3;
        ostr1 = '<span style=\'color:red;\'>';
        ostr2 = '</span>';
        ostr3 = ostr1 + ' - ' + oefo + ostr2;

        if(oefo === 0) {
            netPayoffRight.innerHTML =  w === 2 ? winnerPrize : -oefo;
        } else if(oefo > 0) {
            netPayoffRight.innerHTML = w === 2 ? (winnerPrize + ostr3) : -oefo;
        }

    }

}

calculator.results.update.followerHSText = function(w) {

    w = w === undefined ? calculator.results.lastWinner : w;
    calculator.results.lastWinner = w;

    var fwinnerRole, floserRole, fwinnerPrize, floserPrize;


    var f1NetPayoff = document.getElementById('f1netPayoff');
    var f2NetPayoff = document.getElementById('f2netPayoff');
    var leftSidePrize = document.getElementById('leftSidePrize')
    var leftSideRole = document.getElementById('leftSideRole');
    var leftSideResult = document.getElementById('leftSideResult');
    var of1NetPayoff = document.getElementById('of1netPayoff');
    var of2NetPayoff = document.getElementById('of2netPayoff');
    var rightSidePrize = document.getElementById('rightSidePrize')
    var rightSideRole = document.getElementById('rightSideRole');
    var rightSideResult = document.getElementById('rightSideResult');


    fwinnerRole = 'Each continues as Follower';
    fwinnerPrize = 'Each receives 100 tokens'
    floserRole = 'Chance to be the new Leader';
    floserPrize = 'Each receives 0 token'

    leftSidePrize.innerHTML = w === 1 ? fwinnerPrize : floserPrize;
    leftSideRole.innerHTML = w === 1 ? fwinnerRole : floserRole;
    leftSideResult.innerHTML = w === 1 ? 'LEADER WON' : 'LEADER LOST';
    f1NetPayoff.innerHTML = -(h1 + s1) + ((w === 1) ? 100 : 0);
    f2NetPayoff.innerHTML = -(h2 + s2) + ((w === 1) ? 100 : 0);

    rightSidePrize.innerHTML = w === 2 ? fwinnerPrize : floserPrize;
    rightSideRole.innerHTML = w === 2 ? fwinnerRole : floserRole;
    rightSideResult.innerHTML = w === 2 ? 'LEADER WON' : 'LEADER LOST';
    of1NetPayoff.innerHTML = -(oh1 + os1) + ((w === 2) ? 100 : 0);
    of2NetPayoff.innerHTML = -(oh2 + os2) + ((w === 2) ? 100 : 0);

    //
    // var f1np, f2np, of1np, of2np, l1np, l2np;
    //
    // f1np =  -(h1 + s1) + ((w === 1) ? 100 : 0);
    // f2np =  -(h2 + s2) + ((w === 1) ? 100 : 0);
    // of1np =  -(oh1 + os1) + ((w === 2) ? 100 : 0);
    // of2np =  -(oh2 + os2) + ((w === 2) ? 100 : 0);
    //
    // l1np = -efo + ( w === 1 ? winnerPrize : 0);
    // l2np = -oefo + ( w === 2 ? winnerPrize : 0);

}

calculator.results.update.outcomeColors = function(w) {

    w = w === undefined ? calculator.results.lastWinner : w;
    calculator.results.lastWinner = w;

    if(w === 1) {
        $('.resultLeft, .leftSideResult').css({'transition':'1s', 'background-color':'darkblue'});
        $('.resultRight, .rightSideResult').css({'transition':'1s', 'background-color':'darkred', 'color':'white'});
    }
    if(w === 2) {
        $('.resultLeft, .leftSideResult').css({'transition':'1s', 'background-color':'darkred'});
        $('.resultRight, .rightSideResult').css({'transition':'1s', 'background-color':'darkblue', 'color':'white'});
    }

}

calculator.results.update.allColors = function(w) {

    if(w === 1) {
        $('.p1, .np1, .f1NetPayoff, .f2NetPayoff').css({'color':'blue'});
        $('.p2').css({'color':'black'});
        $('.np2, .of1NetPayoff, .of2NetPayoff').css({'color':'red'});
    }

    if(w === 2) {
        $('.p2, .np2, .of1NetPayoff, .of2NetPayoff').css({'color':'blue'});
        $('.p1').css({'color':'black'});
        $('.np1, .f1NetPayoff, .f2NetPayoff').css({'color':'red'});
    }

    if(oefo > 0 && w === 1) {
        $('.np2').css({'color':'red'});
    }

    if(efo > 0 && w === 2) {
        $('.np1').css({'color':'red'});
    }

    $('.c1, .c2').css({'color':'red'});

    if(efo === 0 && w === 2) {
        $('.np1').css({'color':'black'});
    }

    if(oefo === 0 && w === 1) {
        $('.np2').css({'color':'black'});
    }

    if(efo === 0) {
        $('.c1').css({'color':'black'});
    }

    if(oefo === 0) {
        $('.c2').css({'color':'black'});
    }

    if(calculator.globalVariable.isIGA || calculator.globalVariable.isIGB) {

        $('.p1, .p2').css({'color':'black'});

        if(efo === 0) {
            $('.np1').css({'color':'black'});
        }
        if(efo > 0) {
            $('.np1').css({'color':'red'});
        }
        if(oefo === 0) {
            $('.np2').css({'color':'black'});
        }
        if(oefo > 0) {
            $('.np2').css({'color':'red'});
        }

    }

    $('.p1, .c1, .np1, .p2, .c2, .np2').css({'font-weight':'500'});

    if(w === 2) {
        if(s1 + h1 === 0) {
            $('.f1NetPayoff').css({'color':'black'});
        }
        if(s2 + h2 === 0) {
            $('.f2NetPayoff').css({'color':'black'});
        }
    }

    if(w === 1) {
        if(os1 + oh1 === 0) {
            $('.of1NetPayoff').css({'color':'black'});
        }
        if(os2 + oh2 === 0) {
            $('.of2NetPayoff').css({'color':'black'});
        }
    }

    calculator.results.update.outcomeColors(w)

}

calculator.results.update.allTextAndColors = function(w) {

    if(w === 'undefined') {
        console.log('WARNING WINNER INDEX FOR CALCULATOR.RESULTS.UPDATE.* IS UNDEFINED');
    }

    calculator.results.update.contestText(w);
    calculator.results.update.followerHSText(w);
    calculator.results.update.allColors(w);

}


/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////


//-------SPIN BUTTON COMMAND-------//

calculator.button.spin = function() {

    if(calculator.globalVariable.bottomSpinButtonIsEnabled) {

        calculator.globalVariable.aBitOfWaitingIsDone = false;

        calculator.wheel.spin();

        calculator.globalVariable.dynamicDisplay = false;

    }

}


//----- SPIN TOP -----//

calculator.button.enable.spinTop= function() {

    $('.spinImage').css({'display':'inline'});

}

calculator.button.disable.spinTop = function() {

    $('.spinImage').css({'display':'none'});

}

calculator.button.display.spinTop = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.spinImage').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

}


//------ MINIMIZE TOP ------//

calculator.button.display.minTop = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.minImageTopSetup').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

}

calculator.button.disable.minTop = function() {

    $('.minImageTopSetup').css({'display':'none'});

}

calculator.button.enable.minTop = function() {

    $('.minImageTopSetup').css({'display':'flex'});

}


//--------- SPIN BOTTOM --------//

calculator.button.display.spinBottom = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.spinImage23').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

}

calculator.button.disable.spinBottom = function() {

    $('.spinImage23').css({'display':'none'});

}

calculator.button.enable.spinBottom = function() {

    $('.spinImage23').css({'display':'inline'});

}


//--------- MINIMIZE BOTTOM ---------//

calculator.button.display.minBottom = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.minImageBottomSetup').css({'transition':'1s', 'opacity': opacity, 'cursor' : cursor});

}

calculator.button.disable.minBottom = function() {

    $('.minImageBottomSetup').css({'display':'none'});

}

calculator.button.enable.minBottom = function() {

    $('.minImageBottomSetup').css({'display':'flex'});

}


//---------- SPIN BOTTOM MINI -------//

calculator.button.display.spinBottomMini = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.spinImageMini').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

}

calculator.button.disable.spinBottomMini = function() {

    $('.spinImageMini').css({'display':'none'});

}

calculator.button.enable.spinBottomMini = function() {

    $('.spinImageMini').css({'display':'flex'});

}


////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////

//------------- EXAMPLE SLIDER SECTION -------//

calculator.section.example.horizontal.show = function() {


    $('.horizontalSliderExample').css({'transition':'0.3s', 'transform':'scale(1)', 'display':'flex', 'opacity':'1'});

}

calculator.section.example.horizontal.hide = function() {

    $('.horizontalSliderExample').css({'transition':'0.3s', 'opacity':'0'});
    setTimeout(()=>{
        $('.horizontalSliderExample').css({'transition':'0.3s', 'transform':'scale(0)', 'display':'none'});
    },300)


}


calculator.section.example.vertical.show = function() {

    $('.verticalSliderExample').css({'transition':'0.3s', 'transform':'scale(1)', 'margin-top':'20px', 'display':'flex', 'opacity':'1'});
    setTimeout(()=>{$('.verticalSliderExample').css({'transition':'0.6s', 'opacity':'1'});}, 300)
}

calculator.section.example.vertical.hide = function() {

    $('.verticalSliderExample').css({'transition':'0.5s', 'transform':'scale(0)', 'opacity':'0'});
    setTimeout(()=>{$('.verticalSliderExample').css({'display':'none'});}, 500);

}


//------------------- DISPLAY CALCULATOR -----------------//

calculator.show = function() {

    calculator.section.hs.minimize(false);
    calculator.section.contest.minimize(true);

    $('.decisionWrapF').css({'transition':'1.023456s', 'margin-bottom':'10px'});
    $('.generalMarginBox').css({'transition':'1.023456s', 'transform-origin':'top', 'transform':'scaleY(1)'});
    calculator.space.update.heights();

}

calculator.hide = function() {

    $('.generalMarginBox').css({'transition':'0.5s', 'transform-origin':'top', 'transform':'scaleY(0)'});

    setTimeout(()=> {

        $('.generalMarginBox').css({'transition':'0.5s', 'height':'0px'});
        $('.decisionWrapF').css({'transition':'0.5s', 'margin-bottom':'115px'});

    }, 200)

}


//------------- MINIMIZE HELP/SABOTAGE SECTION -----------//

calculator.section.hs.minimize = function(show) {

    var mt = show ? '-77px' : '0px';
    var pt = show ? '91px' : '0px';
    var sc = show ? 'scale(0.6)' : 'scale(1)';

    $('.sliderBarWrap').css({'transition':'1.023456s', 'padding-top' : pt, 'transform' : sc});
    $('.generalMarginBox').css({'transition':'1.023456s', 'margin-top' : mt});


}

//------------ MINIMIZE CONTEST SECTION ---------------//

calculator.section.contest.minimize = function(show) {

    var mb;

    var mt = show ? '-89px' : '-29px';
    var sc = show ? 'scale(0.6)' : 'scale(1)';

    if(calculator.space.contestResultsIsOpen && !calculator.globalVariable.closedDecisionCalculator) {
        mb = show ? '-115px' : '0px';
    } else {
        mb = show ? '-66px' : '0px';
    }


    $('.contestSectionMinimize').css({'transition':'1.023456s', 'transform-origin':'top',  'transform' : sc});
    $('.generalMarginBox').css({'transition':'1.023456s', 'margin-bottom' : mb});

    $('.imageWrap23').css({'transition':'1.023456s', 'margin-top':mt});


}


//------------- DISPLAY CALCULATOR ------------------//

calculator.section.all.opacity = function(opt) {

    $('.generalMarginBox').css({'opacity' : opt.toString()});

}

calculator.section.all.adjust.decisionSliders = function() {

    if(calculator.globalVariable.playerView) {

        if(calculator.globalVariable.playerIndex === -1) {

            calculator.section.decision.leader.opacity(1)
            calculator.decisionSlider.leader.enable();
            calculator.decisionSlider.follower.disable();

        }

        if(calculator.globalVariable.playerIndex === 0 || calculator.globalVariable.playerIndex === 1) {

            calculator.section.decision.follower.opacity(1)
            calculator.decisionSlider.follower.enable();
            calculator.decisionSlider.leader.disable();

        }

    } else {
        calculator.decisionSlider.follower.disable();
        calculator.decisionSlider.leader.disable();
    }

}


//------------- DISPLAY FOLLOWER DECISION SLIDER -----------------//

calculator.section.decision.follower.opacity = function(opt) {

    $('.decisionWrapF').css({'opacity' : opt.toString()});

}


//------------- DISPLAY PLAYER DECISION SLIDER -----------------//

calculator.section.decision.leader.opacity = function(opt) {

    $('.decisionWrapL').css({'opacity' : opt.toString()});

}


//--------------- HELP SABOTAGE SECTION  ----------//

calculator.section.hs.display.all = function(show) {

    var d = show ? 'flex' : 'none';

    $('.hsWrap, .ctTop, .ctGhost').css({'display': d});
    calculator.space.hsIsOpen = show;

}

calculator.section.hs.display.totalHSBars = function(show) {

    if(!show) {


        $('.followersTotalHS').css({'opacity':'0'});


    } else {

        $('.OGCIcon').css({'margin-top' : '0px'});
        $('.followersTotalHS').css({'opacity':'1'});
        $('.ctWrap').css({'margin-bottom':'-50px'});

    }

}

calculator.section.hs.display.totalHSBars(false);

//----//
// Slider - Follower icon - Arrows - Leader icon - Fight icon - Separator
calculator.section.hs.opacity.SFiALiFiS = function(array) {

    calculator.section.hs.opacity.followerSliders(array[0]);
    calculator.section.hs.opacity.followerIcons(array[1]);
    calculator.section.hs.opacity.followerArrows(array[2]);
    calculator.section.hs.opacity.leaderIconsMain(array[3]);
    calculator.section.hs.opacity.fightIcon(array[4]);
    calculator.section.hs.opacity.separator(array[5]);

}

// Methods used in SFIALIFIS
calculator.section.hs.opacity.followerSliders = function(o) {

    if(o != -1) {

        $('.followersRight, .followersLeft').css({'transition':'1.023456s', 'opacity': o.toString()});

    }

}

calculator.section.hs.opacity.followerArrows = function(o) {

    if(o != -1) {

        $('.arrowIconBoxLeft, .arrowIconBoxRight').css({'opacity':o.toString()});

    }

}

calculator.section.hs.opacity.followerIcons = function(o) {

    if(o != -1) {

        $('.wrapLeft,  .wrapRight').css({'transition':'1.023456s', 'opacity': o.toString()});

    }

    if(o === 1) {
        $('.spf1, .spf1L11, .spf1L12, .spf1L21, .spf1L22').css({'filter':'drop-shadow(0px 7px 3px black)'});
    } else {
        $('.spf1, .spf1L11, .spf1L12, .spf1L21, .spf1L22').css({'filter':'drop-shadow(0px 0px 0px transparent)'});
    }

}

calculator.section.hs.opacity.leaderIconsMain = function(o) {

    if(o != -1) {

        $('.imgwrap3').css({'transition':'1.023456s', 'opacity': o.toString()});

    }

    if(o === 1) {
        $('.splc1, .splc2').css({'filter':'drop-shadow(0px 7px 3px black)'});
    } else {
        $('.splc1, .splc2').css({'filter':'drop-shadow(0px 0px 0px transparent)'});
    }

}

calculator.section.hs.opacity.fightIcon = function(o) {

    if(o != -1) {

        $('.imgwrapfight').css({'transition':'0.5s', 'opacity' : o.toString()});

    }

}

calculator.section.hs.opacity.separator = function(o) {

    if(o === 1) {

        $('.verticalSeparator').css({'transition':'1.023456s', 'transition-delay':'0.5s', 'height':'166px', 'opacity' : '1'});

    }

    if(o === 0) {

        $('.verticalSeparator').css({'transition-delay':'0s', 'transition':'1.023456s', 'height':'0px', 'opacity' : '0'});

    }

}
//----//

calculator.section.hs.set.iconPosition = function(position) {

    if(position === 'center') {

        $('.OGCIcon').css({'transition':'1.023456s', 'margin-top':'-29px'});
        $('.imgwrapfight').css({'transition':'1.023456s','margin-left':'0px', 'margin-right':'0px', 'margin-top':'0px'});
        $('.leftLeaderIconMainWrap').css({'transition':'0s','transform':'rotate(0deg)'});
        $('.rightLeaderIconMainWrap').css({'transition':'0s','transform':'rotate(0deg)'});
        $('.fightIcon').css({'transition':'0.5s', 'transform':'rotate(0turn)'});

        calculator.icons.update.leaderMargins(false);

    }

    if(position == 'bottom') {

        $('.OGCIcon').css({'margin-top':'39px'});
        $('.imgwrapfight').css({'transition':'1.023456s','margin-left':'35px', 'margin-right':'35px', 'margin-top':'10px'});
        $('.leftLeaderIconMainWrap').css({'transition':'1.023456s','transform':'rotate(10deg)'});
        $('.rightLeaderIconMainWrap').css({'transition':'1.023456s','transform':'rotate(-10deg)'});
        $('.fightIcon').css({'transition':'0.5s', 'transform':'rotate(1turn)'});

        calculator.icons.update.leaderMargins(true);

    }

}

calculator.section.hs.opacity.activeFollowerIcon = function(tag, show) {

    var opacity = show ? '1' : '0';
    var myString = '.' + tag;
    $(myString).css({'opacity' : opacity});

}

calculator.section.hs.set.grayToAll = function() {

    var gray = 'rgb(140, 140, 140, 0.2)'
    var black = 'rgb(50, 50, 50, 1)'
    $('.imgwrapwrapwrap31').css({'background-color':gray, 'border-color':'black'});
    $('.imgwrapwrapwrap32').css({'background-color':gray, 'border-color':'black'});
    $('.iaf1').css({'stroke':black});
    $('.arrowTip11').css({'fill':black});
    $('.iaf2').css({'stroke':black});
    $('.arrowTip12').css({'fill':black});
    $('.iaof1').css({'stroke':black});
    $('.arrowTip21').css({'fill':black});
    $('.iaof2').css({'stroke':black});
    $('.arrowTip22').css({'fill':black});

}


//-------------- POWER RATIO ----------------//
//-------------- POWER RATIO ----------------//

calculator.section.power.opacity.bar = function(opt) {

    $('.pWrap').css({'opacity' : opt.toString()});

}

calculator.section.power.display.barText = function(tag) {

    if(tag === 'top') {
        $('.pTitleTop').css({'opacity' : '1'});
        $('.pTitleBottom').css({'opacity' : '0'});
        $('.powerRatio').css({'margin-top':'0px', 'margin-bottom':'-10px'});
        calculator.section.power.display.barLegend(false);
    }

    if(tag === 'bottom') {
        $('.pTitleTop').css({'opacity' : '0'});
        $('.pTitleBottom').css({'opacity' : '1'});
        calculator.section.power.display.barLegend(true);
    }

    if(tag === 'none') {
        $('.pTitleTop').css({'opacity' : '0'});
        $('.pTitleBottom').css({'opacity' : '0'});
        $('.powerRatio').css({'margin-top':'0px', 'margin-bottom':'-4px'});
        calculator.section.power.display.barLegend(false);
    }

}

calculator.section.power.display.barLegend = function(show) {

    var opacity = show ? 'flex' : 'none';

    $('.legendwrapwrap').css({'display' : opacity});

}

calculator.section.power.adjust.space = function() {

    if(calculator.space.hsResultsBottomIsOpen) {
        $('.pWrap').css({'transition':'1.023456s', 'margin-top':'40px'});
    } else {
        $('.pWrap').css({'transition':'1.023456s', 'margin-top':'-54px'});
    }

}


//-------------- CONTEST SECTION ----------------//
//-------------- CONTEST SECTION ----------------//

calculator.section.contest.display.all = function(show) {

    calculator.section.contest.display.sliders(show);
    calculator.section.contest.display.title(show);
    calculator.section.contest.display.results(show);

}

calculator.section.contest.display.sliders = function(show) {

    var display = show ? 'flex' : 'none';

    $('.contestSection').css({'display': display});

    calculator.space.contestIsOpen = show;

    calculator.space.update.heights();

}

calculator.section.contest.display.title = function(show) {

    var display = show ? 'block' : 'none';

    $('.imageWrap23').css({'display': display});

    calculator.space.contestResultsIsOpen = show;

    calculator.space.update.heights();

}

calculator.section.contest.display.results = function(show) {

    var display = show ? 'flex' : 'none';

    $('.payoffWrap').css({'display': display});

    calculator.space.contestResultsIsOpen = show;

    calculator.space.update.heights();

}

// unused second set of leader icons
calculator.section.contest.display.icons = function(show) {

    var opt = show ? '1' : '0';
    var display = show ? 'flex' : 'none'
    $('.OGCIcon2').css({'opacity':opt, 'display':display});

}


///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////


calculator.values.set.helpSabo = function(valueArray) {

    s1 = valueArray[0];
    s2 = valueArray[1];
    h1 = valueArray[2];
    h2 = valueArray[3];
    os1 = valueArray[4];
    os2 = valueArray[5];
    oh1 = valueArray[6];
    oh2 = valueArray[7];

    calculator.values.update.efficiencies();
    calculator.values.update.probability();

}

calculator.values.set.efforts = function(valueArray) {

    efo = valueArray[0];
    oefo = valueArray[1];

    calculator.values.update.probability();

}


///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////


calculator.refresh.sliders = function() {

    var ourSide, theirSide, showAxis;
    ourSide = true;
    showAxis = true;
    theirSide = true;


    var f1, f2, of1, of2;

    $('#lSlider1').prop('value', efo);
    $('#lSlider1').change();

    $('#olSlider1').prop('value', oefo);
    $('#olSlider1').change();

    calculator.graphics.update.effortBar(efo, 'barl1', ourSide, !showAxis);
    calculator.graphics.update.effortBar(oefo, 'barl2', !ourSide, !showAxis);

    // Example vertical Slider initiation
    calculator.graphics.update.effortBar(efo, 'example_barl1', ourSide, !showAxis);
    $('#example_lSlider1').prop('value', efo);
    $('#example_lSlider1').change();

    f1 = s1 > 0 ? -s1 : h1;
    f2 = s2 > 0 ? -s2 : h2;
    of1 = os1 > 0 ? -os1 : oh1;
    of2 = os2 > 0 ? -os2 : oh2;

    $('#vSlider1').prop('value', f1);
    $('#vSlider1').change();

    $('#vSlider2').prop('value', f2);
    $('#vSlider2').change();

    $('#ovSlider1').prop('value', of1);
    $('#ovSlider1').change();

    $('#ovSlider2').prop('value', of2);
    $('#ovSlider2').change();

    calculator.graphics.update.helpSaboBar(f1, 'barf1', !theirSide, !showAxis);
    calculator.graphics.update.helpSaboBar(f2, 'barf2', !theirSide, !showAxis);
    calculator.graphics.update.helpSaboBar(of1, 'obarf1', theirSide, !showAxis);
    calculator.graphics.update.helpSaboBar(of2, 'obarf2', theirSide, !showAxis);

    // Example horizontal Slider intiation
    $('#example_vSlider1').prop('value', f1);
    $('#example_vSlider1').change();
    calculator.graphics.update.helpSaboBar(f1, 'example_barf1', !theirSide, !showAxis);

    //if you are the leader
    if(calculator.globalVariable.playerIndex === -1) {
        //update dfslider according to efo
        calculator.decisionSlider.leader.effortBar(efo, !showAxis);
        $('#dSliderL').prop('value', efo);
        $('#dSliderL').change();
        calculator.graphics.update.barLabelX('bardl', true);

    }

    // if you are the first follower (strong)
    if(calculator.globalVariable.playerIndex === 0) {
        //update dfslider according to h1 s1
        calculator.decisionSlider.follower.helpSaboBar(f1, !showAxis);
        $('#dSliderF').prop('value', f1);
        $('#dSliderF').change();
        calculator.graphics.update.barLabelX('bardf', true);

    }

    //if you are the second follower (weak)
    if(calculator.globalVariable.playerIndex === 1) {
        //update dfslider according to h2 s2
        calculator.decisionSlider.follower.helpSaboBar(f2, !showAxis);
        $('#dSliderF').prop('value', f2);
        $('#dSliderF').change();
        calculator.graphics.update.barLabelX('bardf', true);

    }


}

calculator.refresh.values = function() {

    calculator.values.update.probability();
    calculator.values.update.efficiencies();

    calculator.refresh.sliders();

}

calculator.refresh.barXAxis = function() {

    calculator.update.barLabel('barl1', false);
    calculator.update.barLabel('barl2', false);
    calculator.update.barGrid('barl1', false);
    calculator.update.barGrid('barl2', false);

    calculator.update.barLabel('barf1', false);
    calculator.update.barLabel('barf2', false);
    calculator.update.barGrid('barf1', false);
    calculator.update.barGrid('barf2', false);

    calculator.update.barLabel('obarf1', false);
    calculator.update.barLabel('obarf2', false);
    calculator.update.barGrid('obarf1', false);
    calculator.update.barGrid('obarf2', false);

    calculator.update.barLabel('example_barl1', false);
    calculator.update.barGrid('example_barl1', false);

    calculator.update.barLabel('example_barf1', false);
    calculator.update.barGrid('example_barf1', false);

}


//////////////////////// OG SETUP METHODS //////////////////////////////////
//////////////////////// OG SETUP METHODS //////////////////////////////////
//////////////////////// OG SETUP METHODS //////////////////////////////////
//////////////////////// OG SETUP METHODS //////////////////////////////////
//////////////////////// OG SETUP METHODS //////////////////////////////////
//////////////////////// OG SETUP METHODS //////////////////////////////////


calculator.initialize = function() {

    calculator.pointers.activate([0, 0, 0, 0, 0, 0]);
    calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);
    calculator.lock.activate([0, 0, 0, 0, 0, 0]);


    calculator.values.set.helpSabo([0,0,0,0,0,0,0,0]);
    calculator.values.set.efforts([200,200]);
    calculator.refresh.sliders();
    calculator.graphics.update.pie();

    // always hide the decision sliders during the tutorial
    calculator.section.all.adjust.decisionSliders();

}

calculator.null = function() {

    // begin with no calculator i.e. no height no space
    calculator.space.powerBarIsOpen = 0;
    calculator.space.powerBarLegendIsOpen = 0;
    calculator.space.contestIsOpen = 0;
    calculator.space.hsIsOpen = 0;
    calculator.space.contestResultsIsOpen = 0;
    calculator.space.hsResultsTopIsOpen = 0;
    calculator.space.hsResultsBottomIsOpen = 0;

    calculator.space.update.heights();

    // Make sure nothing is touchable to do that minimize everything to null
    $('.generalMarginBox').css({'transform':'scale(0)'});

    // turn off all possible hover mechanics
    calculator.globalVariable.hover.hsMinimize = 0;
    calculator.globalVariable.hover.hsIcons = 0;
    calculator.globalVariable.hover.hsResults = 0;
    calculator.globalVariable.hover.hsMainTitle = 0;
    calculator.globalVariable.hover.hsGhostTitle = 0;
    calculator.globalVariable.hover.hsButton = 0;

    calculator.globalVariable.hover.cMinimize = 0;
    calculator.globalVariable.hover.cResults = 0;
    calculator.globalVariable.hover.cTitle = 0;
    calculator.globalVariable.hover.cButton = 0;

    // turn off all the buttons
    calculator.globalVariable.topSpinButtonIsEnabled = false;
    calculator.button.display.spinTop(false);
    calculator.button.disable.spinTop();

    calculator.globalVariable.bottomSpinButtonIsEnabled = false;
    calculator.button.display.spinBottom(false);
    calculator.button.disable.spinBottom();

    // reset rolls
    calculator.stopRolling = true;

}

calculator.setup.hsOnly = function() {

    calculator.null();

    $('.generalMarginBox').css({'transform':'scale(1)'});

    calculator.space.hsIsOpen = 1;
    calculator.space.powerBarIsOpen = 0;
    calculator.space.powerBarLegendIsOpen = 0;
    calculator.space.contestIsOpen = 0;
    calculator.globalVariable.aBitOfWaitingIsDone = 1;

    calculator.globalVariable.isOG1 = 1;
    calculator.globalVariable.isOG2 = 0;
    calculator.globalVariable.isIGA = 0;
    calculator.globalVariable.isIGB = 0;

    calculator.globalVariable.ourFollowersAreHetero = 1;
    calculator.globalVariable.theirFollowersAreHetero = 1;

    calculator.globalVariable.winnerLeaderIndex = 1;
    calculator.globalVariable.winnerFollowerIndex = 1;

    calculator.globalVariable.playerView = 0;
    calculator.globalVariable.playerIndex = 0;

    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//
    calculator.globalVariable.tutorial.weAreInTutorial = 0;
    calculator.globalVariable.tutorial.IGSameColor = 0;
    calculator.globalVariable.tutorial.IGDifferentColor = 0;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([0,0,0,0,0,0]);

    //------ LOCKS -------//
    calculator.lock.activate([0,0,0,0,0,0]);

    //----- ROLL ------//
    calculator.roll.reset();

    //----- ICONS -----//
    calculator.icons.setAll();
    calculator.section.hs.set.iconPosition('center');


    //-- SETUP TEXT --//
    calculator.titles.update.textAndColor();
    calculator.titles.hs.ghost.text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    calculator.section.all.adjust.decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.allResults();
    calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.hsIcons = 1;
    calculator.globalVariable.display.hsResults = 1;
    calculator.globalVariable.display.hsMainTitle = 1;
    calculator.globalVariable.display.hsGhostTitle = 1;
    calculator.globalVariable.display.hsButton = 1;
    calculator.globalVariable.display.hsMinimize = 1;

    calculator.globalVariable.hover.hsMinimize = 1;
    calculator.globalVariable.hover.hsIcons = 1;
    calculator.globalVariable.hover.hsResults = 1;
    calculator.globalVariable.hover.hsMainTitle = 1;
    calculator.globalVariable.hover.hsGhostTitle = 0;
    calculator.globalVariable.hover.hsButton = 1;

    //------- BUTTONS ------//
    calculator.button.display.spinTop(false);
    calculator.button.disable.spinTop();

    calculator.globalVariable.topSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    calculator.titles.hs.show();
    calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);
    setTimeout(()=>calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]), 2000);


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    calculator.section.power.opacity.bar(0);
    calculator.section.power.display.barText('none');
    calculator.graphics.dynamicPowerBarText = true;


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.cResults = 0;
    calculator.globalVariable.display.cTitle = 0;
    calculator.globalVariable.display.cButton = 0;
    calculator.globalVariable.display.cMinimize = 0;

    calculator.globalVariable.hover.cMinimize = 0;
    calculator.globalVariable.hover.cResults = 0;
    calculator.globalVariable.hover.cTitle = 0;
    calculator.globalVariable.hover.cButton = 0;

    calculator.section.contest.display.all(false);


    setTimeout(()=> {
        calculator.section.all.opacity(1);
    }
    , 1000);

}



calculator.setup.hsAndPowerRatio = function() {

    calculator.null();

    $('.generalMarginBox').css({'transform':'scale(1)'});

    calculator.space.hsIsOpen = 1;
    calculator.space.powerBarIsOpen = 1;
    calculator.space.contestIsOpen = 0;
    calculator.globalVariable.aBitOfWaitingIsDone = 1;

    calculator.globalVariable.isOG1 = 1;
    calculator.globalVariable.isOG2 = 0;
    calculator.globalVariable.isIGA = 0;
    calculator.globalVariable.isIGB = 0;

    calculator.globalVariable.ourFollowersAreHetero = 1;
    calculator.globalVariable.theirFollowersAreHetero = 1;

    calculator.globalVariable.winnerLeaderIndex = 1;
    calculator.globalVariable.winnerFollowerIndex = 1;

    calculator.globalVariable.playerView = 0;
    calculator.globalVariable.playerIndex = 0;

    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//
    calculator.globalVariable.tutorial.weAreInTutorial = 0;
    calculator.globalVariable.tutorial.IGSameColor = 0;
    calculator.globalVariable.tutorial.IGDifferentColor = 0;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([0,0,0,0,0,0])

    //------ LOCKS -------//
    calculator.lock.activate([0,0,0,0,0,0]);

    //----- ROLL ------//
    calculator.roll.reset();

    //----- ICONS -----//
    calculator.icons.setAll();
    calculator.section.hs.set.iconPosition('center');


    //-- SETUP TEXT --//
    calculator.titles.update.textAndColor();
    calculator.titles.hs.ghost.text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    calculator.section.all.adjust.decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.allResults();
    calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.hsIcons = 1;
    calculator.globalVariable.display.hsResults = 1;
    calculator.globalVariable.display.hsMainTitle = 1;
    calculator.globalVariable.display.hsGhostTitle = 1;
    calculator.globalVariable.display.hsButton = 1;
    calculator.globalVariable.display.hsMinimize = 1;

    calculator.globalVariable.hover.hsMinimize = 1;
    calculator.globalVariable.hover.hsIcons = 1;
    calculator.globalVariable.hover.hsResults = 1;
    calculator.globalVariable.hover.hsMainTitle = 1;
    calculator.globalVariable.hover.hsGhostTitle = 0;
    calculator.globalVariable.hover.hsButton = 1;

    //------- BUTTONS ------//
    calculator.button.display.spinTop(false);
    calculator.button.disable.spinTop();

    calculator.globalVariable.topSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    calculator.titles.hs.show();
    calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);
    setTimeout(()=>calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]), 2000);


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    calculator.section.power.opacity.bar(1);
    calculator.section.power.display.barText('none');
    calculator.section.power.display.barLegend(true);
    calculator.space.powerBarLegendIsOpen = true;
    calculator.graphics.dynamicPowerBarText = true;


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.cResults = 0;
    calculator.globalVariable.display.cTitle = 0;
    calculator.globalVariable.display.cButton = 0;
    calculator.globalVariable.display.cMinimize = 0;

    calculator.globalVariable.hover.cMinimize = 0;
    calculator.globalVariable.hover.cResults = 0;
    calculator.globalVariable.hover.cTitle = 0;
    calculator.globalVariable.hover.cButton = 0;

    calculator.section.contest.display.all(false);

    //------- INITIALIZE ------//
    calculator.refresh.values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    // calculator.refresh.sliders();


    setTimeout(()=> {
        calculator.section.all.opacity(1);
    }
    , 1000);

}

calculator.setup.og = function() {

    calculator.null();

    $('.generalMarginBox').css({'transform':'scale(1)'});

    calculator.space.hsIsOpen = true;
    calculator.space.powerBarIsOpen = true;
    calculator.space.powerBarLegendIsOpen = false;
    calculator.space.contestIsOpen = true;
    calculator.globalVariable.aBitOfWaitingIsDone = true;

    calculator.globalVariable.isOG1 = 1;
    calculator.globalVariable.isOG2 = 0;
    calculator.globalVariable.isIGA = 0;
    calculator.globalVariable.isIGB = 0;

    calculator.globalVariable.ourFollowersAreHetero = 1;
    calculator.globalVariable.theirFollowersAreHetero = 1;

    calculator.globalVariable.winnerLeaderIndex = 1;
    calculator.globalVariable.winnerFollowerIndex = 1;

    calculator.globalVariable.playerView = 0;
    calculator.globalVariable.playerIndex = 0;

    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//
    calculator.globalVariable.tutorial.weAreInTutorial = 0;
    calculator.globalVariable.tutorial.IGSameColor = 0;
    calculator.globalVariable.tutorial.IGDifferentColor = 0;


    //----- AFTER SPIN ACTION SWITCHES ----//

    calculator.globalVariable.display.hsIcons = 1;
    calculator.globalVariable.display.hsResults = 1;
    calculator.globalVariable.display.hsMainTitle = 1;
    calculator.globalVariable.display.hsGhostTitle = 1;
    calculator.globalVariable.display.hsButton = 1;
    calculator.globalVariable.display.hsMinimize = 1;

    calculator.globalVariable.display.cResults = 1;
    calculator.globalVariable.display.cTitle = 1;
    calculator.globalVariable.display.cButton = 1;
    calculator.globalVariable.display.cMinimize = 1;


    //----- HOVER SWITCHES ------//

    calculator.globalVariable.hover.hsMinimize = 1;
    calculator.globalVariable.hover.hsIcons = 1;
    calculator.globalVariable.hover.hsResults = 1;
    calculator.globalVariable.hover.hsMainTitle = 1;
    calculator.globalVariable.hover.hsGhostTitle = 1;
    calculator.globalVariable.hover.hsButton = 1;


    calculator.globalVariable.hover.cMinimize = 1;
    calculator.globalVariable.hover.cResults = 1;
    calculator.globalVariable.hover.cTitle = 1;
    calculator.globalVariable.hover.cButton = 1;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([0,0,0,0,0,0])

    //------ LOCKS -------//
    calculator.lock.activate([0,0,0,0,0,0]);

    //----- ROLL ------//
    calculator.roll.reset();

    //----- ICONS -----//
    calculator.icons.setAll();
    calculator.section.hs.set.iconPosition('center');

    //-- SETUP TEXT --//
    calculator.titles.update.textAndColor();
    calculator.titles.hs.ghost.text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    calculator.section.all.adjust.decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.allResults();
    calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    //------- BUTTONS ------//
    calculator.button.display.spinTop(false);
    calculator.button.disable.spinTop();

    calculator.globalVariable.topSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    calculator.titles.hs.show();
    calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);
    setTimeout(()=>calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]), 2000);


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    calculator.section.power.opacity.bar(true);
    calculator.section.power.display.barText('none');
    calculator.graphics.dynamicPowerBarText = true;


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    //----- GENERAL SETTINGS -----//

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

    calculator.button.display.spinBottom(true);
    calculator.button.enable.spinBottom();
    calculator.globalVariable.bottomSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    // if the subjective index is leader then hiding the contest title will not work by construction
    calculator.titles.contest.show();
    // calculator.titles.contest.hide();

    //------ SLIDERS -------//

    // changes the slider range based on globalVariable.is***
    calculator.graphics.update.effortSliderRange();
    // changes the leader slider text background color based on globalVariable.is***
    calculator.graphics.update.contestSliderBackgroundColor();

    //------ REFRESH ------// -> NOT SURE WHEN IT IS NECESSARY TO USE THESE

    calculator.refresh.values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    calculator.refresh.sliders();




    setTimeout(()=> {
        calculator.section.all.opacity(1);
    }
    , 1000);


}

//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//


calculator.initialize();
calculator.null();
calculator.setup.og();
// calculator.setup.hsOnly();
// calculator.setup.hsAndPowerRatio();


//------//

var spin = document.getElementById('spinImage');
calculator.globalVariable.topSpinButtonIsEnabled = true;
spin.onclick = function() {
    if(calculator.globalVariable.topSpinButtonIsEnabled) {

        calculator.globalVariable.aBitOfWaitingIsDone = false;

        calculator.wheel.spin();
        calculator.globalVariable.dynamicDisplay = false;

    }
}

//------//

var spin2 = document.getElementById('spinImage23');
calculator.globalVariable.bottomSpinButtonIsEnabled = true;
spin2.onclick = function() {
    if(calculator.globalVariable.bottomSpinButtonIsEnabled) {

        calculator.globalVariable.aBitOfWaitingIsDone = false;


        calculator.wheel.spin();
        calculator.globalVariable.dynamicDisplay = false;

        calculator.titles.hs.ghost.hide();

    }
}

//------//

var minButton = document.getElementById('minImage');
calculator.globalVariable.minButtonIsEnabled = true;
minButton.onclick = function() {
    calculator.results.hide.all();
    calculator.button.display.minTop(false);
    calculator.button.disable.minTop();

    setTimeout(()=>{
        calculator.button.display.spinBottom(false);
    },200)

    setTimeout(()=>{
        calculator.button.disable.spinBottom();
    }, 500)

}

//------//

$(document).keydown(function() {
  console.log( "Handler for .keypress() called." );

  if(event.which === 32) {

      calculator.button.spin();

  }

});

//------//

calculator.globalVariable.open;
var calcTop = document.getElementById('calcButtonTop');
calculator.globalVariable.open = 1;

calcTop.onclick = function() {

    if(calculator.globalVariable.open) {


        $('.generalMarginBox').css({'transition':'0.3s', 'transform-origin':'top', 'transform':'scaleY(0)', 'height':'0'});
        setTimeout(()=>{$('.generalMarginBox').css({'display':'none'});}, 400);

    }

    if(!calculator.globalVariable.open) {
        $('.generalMarginBox').css({'display':'grid'})
        setTimeout(()=>{
            $('.generalMarginBox').css({'transition':'0.3s', 'transform-origin':'top', 'transform':'scaleY(1)'});
            calculator.space.update.heights();
        }, 100);


    }

    calculator.globalVariable.open = 1 - calculator.globalVariable.open;

}

//------//

var calcBottom = document.getElementById('calcButtonBottom');
calculator.globalVariable.bottomOpen = 1;
calculator.globalVariable.closedDecisionCalculator = 0;

calcBottom.onclick = function() {

    if(calculator.globalVariable.bottomOpen) {

        calculator.section.power.display.barText(true);

        $('.imageWrap23, .contestSection, .payoffWrap').css({'transition':'0.3s', 'transform-origin':'bottom', 'transform':'scaleY(0)'});

        calculator.space.contestIsOpen = false;
        calculator.space.update.heights();

        // $('.generalMarginBox').css({'margin-bottom':'-200px'});

        setTimeout(()=>{
            $('.generalMarginBox').css({'margin-bottom':'-20px'});
            $('.contestSection').css({'display':'none'});
        }, 400);


        calculator.globalVariable.closedDecisionCalculator = 1;

        calculator.globalVariable.hover.cMinimize = 0;

    }



    if(!calculator.globalVariable.bottomOpen) {

        calculator.section.power.display.barText(false);

        calculator.globalVariable.closedDecisionCalculator = 0;

        $('.contestSection').css({'display':'inherit'});

        setTimeout(()=>{

            $('.imageWrap23, .contestSection, .payoffWrap').css({'transition':'0.3s', 'transform-origin':'bottom', 'transform':'scaleY(1)'});
            $('.generalMarginBox').css({'margin-bottom':'0px'});
            calculator.space.contestIsOpen = true;
            calculator.space.contestResultsIsOpen = true;
            calculator.space.update.heights();


        }, 100);

        calculator.globalVariable.hover.cMinimize = 1;

    }

    calculator.globalVariable.bottomOpen = 1 - calculator.globalVariable.bottomOpen;

}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////

/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////


var efo1, efo2, efi1, efi2, efefo1, efefo2, IG_pwin;

// unused
calculator.globalVariable.gameStage = undefined;



calculator.globalVariable.IG_isIGA = undefined;
calculator.globalVariable.IG_isIGB = undefined;

calculator.globalVariable.IG_ourFollowersAreHetero = true;
calculator.globalVariable.IG_theirFollowersAreHetero = true;

calculator.globalVariable.IG_playerView = false;
calculator.globalVariable.IG_playerIndex = undefined; //-1,0,1 (l,f1,f2)

calculator.globalVariable.tutorial.IG_IGSameColor = undefined;
calculator.globalVariable.tutorial.IG_IGDifferentColor = undefined;
calculator.globalVariable.tutorial.IG_weAreInTutorial = undefined;

calculator.globalVariable.IG_weAreInFeedbackStage = undefined;


// RESULT DISPLAY ON/OFF VARIABLES (AFTER SPIN)

calculator.globalVariable.display.IG_hsIcons = undefined;

calculator.globalVariable.display.IG_cResults = undefined;
calculator.globalVariable.display.IG_cTitle = undefined;
calculator.globalVariable.display.IG_cButton = undefined;



//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////
//////////////////////// WHEEL ///////////////////////


calculator.wheel.IG_spinDuration = 1;
calculator.wheel.IG_spinNumber = 3;
calculator.wheel.IG_isSpinning = false;

calculator.wheel.IG_create = function(probability, id) {

    var a = 100*probability;
    var b = 100-a;


    var followerAColorArray = Array(2);
    var followerBColorArray = Array(2);
    var colors;

    var lineColor = 'white';
    var lineWidth = 1;



    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        // In-group contest A
        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                followerAColorArray = ['rgb(60,60,60)', 'rgb(210,210,0)'];

            } else {

                followerAColorArray = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];

            }

        }

        // In-group contest B
        if(calculator.globalVariable.IG_isIGB) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,0)'];

            } else {

                followerAColorArray = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];

            }

        }

    }

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IG_IGSameColor) {

            if(calculator.globalVariable.IG_isIGA) {
                followerAColorArray = ['rgb(60,60,60)', 'rgb(60,60,60)'];
            }

            if(calculator.globalVariable.IG_isIGB) {
                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,210)'];
            }

        }

        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IG_IGDifferentColor) {

            if(calculator.globalVariable.IG_isIGA) {
                followerAColorArray = ['rgb(60,60,60)', 'rgb(210,210,0)'];
            }

            if(calculator.globalVariable.IG_isIGB) {
                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,0)'];
            }

        }

    }

    //---------------------------//


    if(calculator.globalVariable.IG_isIGA) {
        colors = followerAColorArray;
    }

    if(calculator.globalVariable.IG_isIGB) {
        colors = followerBColorArray;
    }

    calculator.wheel.IG_myWheelObj = new Winwheel({
        'canvasId': id,
        'numSegments': 2,
        'lineWidth' : lineWidth,
        'outerRadius': 58, // controls the size of the theWheel
        'textOrientation' : 'curved',    // Set orientation. horizontal, vertical, curved.
        'textFontFamily'  : 'Courier',     // Monospace font best for vertical and curved.
        'rotationAngle':Math.random()*360,
        'textFontSize':20,

        'segments':
        [
            {
                'fillStyle' : colors[0],
                'strokeStyle':lineColor,
                // 'textFillStyle': 'white',
                // 'text'      : 'A wins',
                'size'      : winwheelPercentToDegrees(a),
            },
            {
                'fillStyle' : colors[1],
                'strokeStyle':lineColor,
                // 'textFillStyle': 'rgb(60, 60, 60)',
                // 'text'      : 'B wins',
                'size'      : winwheelPercentToDegrees(b),
            },
        ],
        'animation' :
        {
            'type'     : 'spinToStop',
            'duration' : calculator.wheel.IG_spinDuration,
            'spins'    : calculator.wheel.IG_spinNumber,
            'callbackFinished' : '',
        }
    });

}


/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////
/////////////////// GRAPHICS ////////////////////


var IG_logistic2 = function(val , k) {
    var L = 1;
    var m = 0.5;
    var result;
    result= L / (1 + Math.exp(-k * (val - m)));
    return result;
}


//-------------- PIE ----------------//123456789
// these can be changed to ig specific variables!!!
calculator.globalVariable.IG_pieBorderRight = false;
calculator.globalVariable.IG_pieBorderLeft = false;
calculator.graphics.update.IG_pie = function() {

    var x = IG_pwin;
    var y = 1 - IG_pwin;

    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var pieColors;
    var fcolors;
    var ofcolors;

    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IG_IGSameColor) {

            if(calculator.globalVariable.IG_isIGA) {

                fcolors = ['rgb(60,60,60)', 'rgb(60,60,60)'];

            }

            if(calculator.globalVariable.IG_isIGB) {

                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,210)'];

            }

        }

        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IG_IGDifferentColor) {

            if(calculator.globalVariable.IG_isIGA) {

                fcolors = ['rgb(210,210,0)', 'rgb(60,60,60)'];

            }
            if(calculator.globalVariable.IG_isIGB) {

                ofcolors = ['rgb(210,210,0)', 'rgb(210,210,210)'];

            }

        }

    }

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                fcolors = ['rgb(210,210,0)', 'rgb(60,60,60)'];

            } else {

                fcolors = ['rgb(60, 60, 60)', 'rgb(35, 79, 30)'];

            }

        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.IG_isIGB) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                ofcolors = ['rgb(210,210,0)', 'rgb(210,210,210)'];

            } else {

                ofcolors = ['rgb(210, 210, 210)', 'rgb(35, 79, 30)'];

            }

        }

    }

    //---------------------------//



    var p1, p2;


    if(calculator.globalVariable.IG_isIGA) {

        pieColors = fcolors;

        p1 = 'FOLLOWER 1A';
        p2 = 'FOLLOWER 2A';

        if(calculator.globalVariable.IG_ourFollowersAreHetero) {

            p1 = 'STRONG F.';
            p2 = 'WEAK F.';

            if(calculator.globalVariable.IG_playerIndex === 1) {
                p1 = 'WEAK F.';
                p2 = 'STRONG F.';
            }

        }

    }

    // RELEVANT ONLY FOR TUTORIAL
    if(calculator.globalVariable.IG_isIGB) {

        pieColors = ofcolors;

        p1 = 'FOLLOWER 1B';
        p2 = 'FOLLOWER 2B';

        if(calculator.globalVariable.IG_theirFollowersAreHetero) {

            p1 = 'STRONG F.';
            p2 = 'WEAK F.';

            if(calculator.globalVariable.IG_playerIndex === 1) {

                p1 = 'WEAK F.';
                p2 = 'STRONG F.';

            }

        }

    }


    var pieBorderArray = Array(2);
    pieBorderArray = [1,1];
    var pieBorderColor = 'white';

    if(calculator.globalVariable.IG_pieBorderLeft) {
        pieBorderArray = [0,3];
        pieBorderColor = 'lime';
    }
    if(calculator.globalVariable.IG_pieBorderRight) {
        pieBorderArray = [4,0];
        pieBorderColor = 'lime';
    }


    var playerLabels = [p2, p1];

    var data = [{
        values: [y, x],
        labels: playerLabels,
        textinfo:'none',
        textfont: {
            // color: ['black', 'white'],
            color: ['transparent', 'transparent']
        },
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: pieColors,
            line: {
                color: pieBorderColor,
                width: pieBorderArray,
            },
        }
    }];

    var layout = {
        height: 115,
        width: 115,
        font:{
            size: 10
        },
        margin: {"t": 2, "b": 2, "l":2, "r": 2},
        showlegend: false,
    };

    Plotly.react('IG_pie', data, layout, {displayModeBar: false});
}


//-------------- LEADER EFFORT ----------------//123456789
calculator.graphics.update.IG_effortBar = function(e, barId, ourSide, axisOn) {

    var y = e;

    var upperBound, myTickVal, myTickText, myRange;

    var colorArrays = Array(2);
    var insideTextColor = Array(2);

    var ticktextcolors = ['black', 'white'];
    var tindex = 1;

    var papercolors = ['rgb(60, 60, 60)', 'rgb(210, 210, 210)', 'rgb(35, 79, 30)'];
    var pindex = 1;


    if(calculator.globalVariable.IG_isIGA || calculator.globalVariable.IG_isIGB) {

        upperBound = 128;
        myTickVal = [0, 5, 10, 20, 30, 50, 75, 100, 140];
        myTickText = [0, 5, 10, 20, 30, 50, 75, 100, 140];
        myRange = [0, 140];

    }

    if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerIndex != -1) {

                colorArrays = ['rgb(35, 79, 30)', 'rgb(60, 60, 60)'];
                insideTextColor = ['white', 'white'];

                if(barId === 'IG_barl1'){
                    //darkgreen white
                    pindex=2;
                    tindex=1;
                }

                if(barId === 'IG_barl2'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

            } else {

                $('.rightFollowerIconMainWrap').css({'filter':'drop-shadow(5px 5px 3px #d2d201)'});

                colorArrays = ['rgb(60, 60, 60)', 'rgb(210, 210, 0)'];
                insideTextColor = ['white', 'black'];

                if(barId === 'IG_barl1'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

                if(barId === 'IG_barl2'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

            }

        }

        if(calculator.globalVariable.IG_isIGB) {

            if(calculator.globalVariable.IG_playerIndex != -1) {

                colorArrays = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
                insideTextColor = ['white', 'black'];

                if(barId === 'IG_barl1'){
                    //darkgreen white
                    pindex=2;
                    tindex=1;
                }

                if(barId === 'IG_barl2'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

            } else {

                $('.rightFollowerIconMainWrap').css({'filter':'drop-shadow(5px 5px 3px #d2d201)'});

                colorArrays = ['rgb(210, 210, 210)', 'rgb(210, 210, 0)'];
                insideTextColor = ['black', 'black'];

                if(barId === 'IG_barl1'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

                if(barId === 'IG_barl2'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

            }

        }

    }

    //---------------------------//
    //---- only for tutorial ----//
    //---------------------------//

    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IG_IGSameColor) {

            if(calculator.globalVariable.IG_isIGA) {

                colorArrays = ['rgb(60,60,60)', 'rgb(60,60,60)'];
                insideTextColor = ['white', 'white'];

                if(barId === 'IG_barl1'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

                if(barId === 'IG_barl2'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

            }

            if(calculator.globalVariable.IG_isIGB) {

                colorArrays = ['rgb(210,210,210)', 'rgb(210,210,210)'];
                insideTextColor = ['black', 'black'];

                if(barId === 'IG_barl1'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

                if(barId === 'IG_barl2'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

            }

        }

        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IG_IGDifferentColor) {

            $('.rightFollowerIconMainWrap').css({'filter':'drop-shadow(5px 5px 3px #d2d201)'});

            if(calculator.globalVariable.IG_isIGA) {

                colorArrays = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                insideTextColor = ['white', 'black'];

                if(barId === 'IG_barl1'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

                if(barId === 'IG_barl2'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

            }

            if(calculator.globalVariable.IG_isIGB) {

                colorArrays = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                insideTextColor = ['black', 'black'];

                if(barId === 'IG_barl1'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

                if(barId === 'IG_barl2'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

            }
        }

    }


    //---------------------------//


    var mColor = ourSide ? colorArrays[0] : colorArrays[1];

    var mytextpos = 'outside';

    var somecolor = 'black';

    if(y > upperBound) {

        mytextpos = 'inside';


        if(barId === 'IG_barl1') {
            somecolor = insideTextColor[0];
        }

        if(barId === 'IG_barl2') {
            somecolor = insideTextColor[1];
        }

    }


    var data = [{
        x: [y],
        name: [''],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        cliponaxis: false,
        marker:{
            color: mColor,
        },
        text: [y],
        textfont: {
            size: '14',
            color:somecolor,
        },
        orientation: 'h',
        // textanchor: 'right',
        textposition: mytextpos,
    }];


    var layout = {
        paper_bgcolor: papercolors[pindex],
        barmode: 'group',
        height: 75,
        width: 405,
        margin: {"t": 20, "b": 20, "l": 25, "r": 27},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: myRange,
            layer: 'below traces',
            tickfont: {
                size: 10,
                color:ticktextcolors[tindex],
            },
            tickmode: 'array',
            tickvals: myTickVal,
            ticktext: myTickText,
            tickangle: -30,
            ticks:'',
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(207, 202, 202)",
        },
        yaxis: {
            ticks: '',
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            showticklabels: false,
        },
    }




    Plotly.react(barId, data, layout, {displayModeBar: false});
}


// USES calculator.globalVariable.typeOfContest TO DETErmine leader slider colors
// it is not concerned with the me coloring but leader vs leader or
// follower vs follower for either group ig slider top coloring
// it also updates the slider range for type of contest
// it also determines the resulting text's tag as this is dependent on leader or follower
calculator.graphics.update.IG_contestSliderBackgroundColor = function() {

    if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IG_IGSameColor) {

            if(calculator.globalVariable.IG_isIGA) {

                $('.IG_bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.IG_bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

            }

            if(calculator.globalVariable.IG_isIGB) {

                $('.IG_bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.IG_bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

            }

        }

        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IG_IGDifferentColor) {

            if(calculator.globalVariable.IG_isIGA) {

                $('.IG_bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.IG_bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

            }

            if(calculator.globalVariable.IG_isIGB) {

                $('.IG_bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.IG_bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

            }

        }

    }

    if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                $('.IG_bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.IG_bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

            } else {

                $('.IG_bswLeft').css({'background-color':'rgb(35, 79, 30)', 'color':'white'});
                $('.IG_bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.IG_isIGB) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                $('.IG_bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.IG_bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

            } else {

                // we will never visit this case but let's have it for completness
                $('.IG_bswLeft').css({'background-color':'rgb(35, 79, 30)', 'color':'white'});
                $('.IG_bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

            }
        }

    }

}


//-------------- DECISION SLIDER LEADER ----------------//123456789
calculator.decisionSlider.leader.IG_effortBar = function(a, axisOn) {


        var y = a;

        var upperBound, myTickVal, myTickText, myRange;

        var colorArrays = Array(1);
        var insideTextColor = Array(1);

        colorArrays = ['rgb(35, 79, 30)'];
        insideTextColor = ['white'];


        if(calculator.globalVariable.IG_isIGA || calculator.globalVariable.IG_isIGB) {

            upperBound = 128;
            myTickVal = [0, 5, 10, 20, 30, 50, 75, 100, 140];
            myTickText = [0, 5, 10, 20, 30, 50, 75, 100, 140];
            myRange = [0, 140];

        }

        var mColor = colorArrays[0];

        var mytextpos = 'outside';

        var somecolor = 'black';

        if(y > upperBound) {

            mytextpos = 'inside';
            somecolor = insideTextColor[0];

        }


        var data = [{
            x: [y],
            name: [''],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            cliponaxis: false,
            marker:{
                color: mColor,
            },
            text: [y],
            textfont: {
                size: '50',
                color:somecolor,
            },
            orientation: 'h',
            // textanchor: 'right',
            textposition: mytextpos,
        }];


        var ticktextcolors = ['white'];
        var tindex = 0;

        var papercolors = ['rgb(35, 79, 30)'];
        var pindex = 0;


        var layout = {
            paper_bgcolor: papercolors[pindex],
            barmode: 'group',
            height: 75,
            width: 975,
            margin: {"t": 20, "b": 20, "l": 5, "r": 20},
            xaxis: {
                side: 'top',
                fixedrange: true,
                autorange: false,
                range: myRange,
                layer: 'below traces',
                tickfont: {
                    size: 10,
                    color:ticktextcolors[tindex],
                },
                tickmode: 'array',
                tickvals: myTickVal,
                ticktext: myTickText,
                tickangle: -30,
                ticks:'',
                showline: false,
                showgrid: axisOn,
                showticklabels: axisOn,
                gridcolor: "rgb(207, 202, 202)",
            },
            yaxis: {
                ticks: '',
                layer: 'below traces',
                fixedrange: true,
                showline: false,
                showgrid: false,
                showticklabels: false,
            },
        }


        Plotly.react('IG_bardl', data, layout, {displayModeBar: false});

}

calculator.decisionSlider.leader.IG_enable = function() {
    $('.IG_decisionWrapL').css({'display':'flex'});
}

calculator.decisionSlider.leader.IG_disable = function() {
    $('.IG_decisionWrapL').css({'display':'none'});
}


//-------------- POWER RATIO BAR ----------------//123456789
calculator.graphics.activate.IG_dynamicPowerBarText = function(place) {

    $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'opacity':'0'});
    $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'0'});
    $('.IG_pTitleDynamicRight').css({'transition':'0s', 'opacity':'0'});

    if(place === 'middle') {

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'353px', 'margin-right':'5px'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'103px', 'margin-right':'-21px'});
        $('.IG_pTitleDynamicRight').css({'transition':'0s', 'marign-left':'5px'});

    }

    if(place === 'left') {

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'15px', 'margin-right':'5px'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'29px', 'margin-right':'-21px'});

    }

    if(place === 'right') {

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'758px', 'margin-right':'41px'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'0px', 'margin-right':'-21px'});

    }


}

// SETUP FOR WHEN THE CALCULATOR IS CLOSED THEN WE SHOW THE POWER LEGENDS
// AND TEXT AND SET THE LEGEND COLORS ACCORDINGLY
calculator.section.power.display.IG_barText = function(show) {

    if(show) {

        $('.IG_pTitleBottom').css({'display' : 'grid'});

        calculator.section.power.display.IG_barLegend(true);

    } else {

        $('.IG_pTitleBottom').css({'display' : 'none'});

        calculator.section.power.display.IG_barLegend(false);

    }

}

calculator.section.power.display.IG_barLegend = function(show) {

    var opacity = show ? 'flex' : 'none';

    $('.IG_legendwrapwrap').css({'display' : opacity});

    calculator.section.power.set.IG_barLegendText(show);

}

calculator.section.power.set.IG_barLegendText = function(show) {

    if(show) {

        var textLeft = document.getElementById('IG_leader1Boxtext');
        var textRight = document.getElementById('IG_leader2Boxtext');

        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerView) {

                if(calculator.globalVariable.IG_ourFollowersAreHetero) {

                    if(calculator.globalVariable.IG_playerIndex === -1) {

                        textLeft.innerHTML = 'Strong Follower\'s Relative Power';
                        textRight.innerHTML = 'Weak Follower\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 0) {

                        textLeft.innerHTML = 'Your Relative Power';
                        textRight.innerHTML = 'Weak Follower\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 1) {

                        textLeft.innerHTML = 'Your Relative Power';
                        textRight.innerHTML = 'Strong Follower\'s Relative Power';

                    }

                } else {

                    if(calculator.globalVariable.IG_playerIndex === -1) {

                        textLeft.innerHTML = 'Follower A1\'s Relative Power';
                        textRight.innerHTML = 'Follower A2\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 0) {

                        textLeft.innerHTML = 'Your Relative Power';
                        textRight.innerHTML = 'Opposing Follower\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 1) {

                        textLeft.innerHTML = 'Your Relative Power';
                        textRight.innerHTML = 'Opposing Follower\'s Relative Power';

                    }

                }

            }

            if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

                if(calculator.globalVariable.IG_ourFollowersAreHetero) {

                    textLeft.innerHTML = 'Strong Follower\'s Relative Power';
                    textRight.innerHTML = 'Weak Follower\'s Relative Power';

                } else {

                    textLeft.innerHTML = 'Follower A1\'s Relative Power';
                    textRight.innerHTML = 'Follower A2\'s Relative Power';

                }

            }

        }

        if(calculator.globalVariable.IG_isIGB) {

            if(calculator.globalVariable.IG_playerView) {

                if(calculator.globalVariable.IG_theirFollowersAreHetero) {

                    if(calculator.globalVariable.IG_playerIndex === -1) {

                        textLeft.innerHTML = 'Strong Follower\'s Relative Power';
                        textRight.innerHTML = 'Weak Follower\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 0) {

                        textLeft.innerHTML = 'Strong Follower\'s Relative Power';
                        textRight.innerHTML = 'Weak Follower\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 1) {

                        textLeft.innerHTML = 'Weak Follower\'s Relative Power';
                        textRight.innerHTML = 'Strong Follower\'s Relative Power';

                    }

                } else {

                    if(calculator.globalVariable.IG_playerIndex === -1) {

                        textLeft.innerHTML = 'Follower B1\'s Relative Power';
                        textRight.innerHTML = 'Follower B2\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 0) {

                        textLeft.innerHTML = 'Follower B1\'s Relative Power';
                        textRight.innerHTML = 'Follower B2\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 1) {

                        textLeft.innerHTML = 'Follower B1\'s Relative Power';
                        textRight.innerHTML = 'Follower B2\'s Relative Power';

                    }

                }

                if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

                    if(calculator.globalVariable.IG_theirFollowersAreHetero) {

                        textLeft.innerHTML = 'Strong Follower\'s Relative Power';
                        textRight.innerHTML = 'Weak Follower\'s Relative Power';

                    } else {

                        textLeft.innerHTML = 'Follower B1\'s Relative Power';
                        textRight.innerHTML = 'Follower B2\'s Relative Power';

                    }

                }

            }

        }

    }

}

calculator.section.power.set.IG_barLegendColor = function(colorArray) {

    $('.IG_leader1Box').css({'background-color' : colorArray[0]});
    $('.IG_leader2Box').css({'background-color' : colorArray[1]});

}


calculator.globalVariable.IG_powerBarRight = false;
calculator.globalVariable.IG_powerBarLeft = false;

calculator.graphics.update.IG_efficiencyBar = function(efficiency1, efficiency2) {

    var effi1, effi2;
    effi1 = efficiency1 != undefined ? efficiency1 : efi1;
    effi2 = efficiency2 != undefined ? efficiency2 : efi2;

    var val1 = effi1 / (effi1 + effi2);
    var val2 = effi2 / (effi1 + effi2);


    if(effi1 === effi2) {

        calculator.graphics.activate.IG_dynamicPowerBarText('middle');

    }

    if((effi1 / effi2) > 1) {

        var myText = (val1 >= 0.99) ? '100+' : (effi1 / effi2).toFixed(0);
        calculator.graphics.activate.IG_dynamicPowerBarText('left');

    } else {

        myText = 1;

    }

    if((effi1 / effi2) < 1) {

        var myText2 = (val2 >= 0.99) ? '100+' : (effi2 / effi1).toFixed(0);
        calculator.graphics.activate.IG_dynamicPowerBarText('right');

    } else {

        myText2 = 1;

    }


    val1 = IG_logistic2(val1, 5);
    val2 = 1 - val1;

    var gapSize = 0.06;
    val1 = val1 - gapSize/2;
    val2 = val2 - gapSize/2;


    var fcolors = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];
    var ofcolors = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];
    var cA = Array(2);

    var textColor = ['white', 'white'];



    if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IG_IGSameColor) {

            if(calculator.globalVariable.IG_isIGA) {
                fcolors = ['rgb(60,60,60)', 'rgb(60,60,60)'];
                textColor = ['white', 'white'];

            }

            if(calculator.globalVariable.IG_isIGB) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,210)'];
                textColor = ['black', 'black'];
            }

        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IG_IGDifferentColor) {

            if(calculator.globalVariable.IG_isIGA) {
                fcolors = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                textColor = ['white', 'black'];
            }

            if(calculator.globalVariable.IG_isIGB) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                textColor = ['black', 'black'];
            }
        }

    }

    if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                fcolors = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                textColor = ['white', 'black'];

            } else {

                fcolors = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];
                textColor = ['white', 'white'];

            }

        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.IG_isIGB) {
            if(calculator.globalVariable.IG_playerIndex === -1) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                textColor = ['black', 'black'];
            } else {
                // never visited but have it for completness
                fcolors = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];
                textColor = ['white', 'black'];
            }
        }

    }

    if(calculator.globalVariable.IG_isIGA) {
        calculator.section.power.set.IG_barLegendColor(fcolors);
        cA = fcolors;
    }

    if(calculator.globalVariable.IG_isIGB) {
        calculator.section.power.set.IG_barLegendColor(fcolors);
        cA = ofcolors;
    }

    var myLineWith1 = 0;
    var myLineWith2 = 0;

    if(calculator.globalVariable.IG_powerBarLeft) {
        myLineWith1 = 4
    }

    if(calculator.globalVariable.IG_powerBarRight) {
        myLineWith2 = 4
    }


    var player1 = {
        y: ['group 1'],
        x: [val1],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker: {
            color: cA[0],
            line: {
                color: 'lime',
                width: myLineWith1,
            }
        },
        text: myText,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: textColor[0],
            size: '18'
        },
    };

    var gap = {
        y: ['group 1'],
        x: [gapSize],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker: {
            color: 'white',
            line: {
                color: 'white',
                width: 0,
            }
        },
        text: ':',
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'black',
            size: '18'
        },
    };

    var player2 = {
        y: ['group 1'],
        x: [val2],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        fixedrange: true,
        marker: {
            color: cA[1],
            line: {
                color: 'lime',
                width: myLineWith2,
            }
        },
        text: myText2,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: textColor[0],
            size: '18'
        },
    };

    var data = [player1, gap, player2];

    var layout = {
        barmode: 'stack',
        height: 40,
        width: 975,
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        xaxis: {
            fixedrange: true,
            autorange: false,
            range: [0,1],
            showline: false,
            showgrid: false,
            showticklabels: false,
        },
        yaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            showticklabels: false,
        }

    };

    Plotly.react('IG_powerRatio', data, layout, {displayModeBar: false});

}


//-------------- GRID GRAPHICS ----------------//
calculator.graphics.update.IG_barLabelX = function(barId, show) {
    var update = {
        'xaxis.showticklabels': show
    };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.IG_barGridX = function(barId, show) {
    var update = {
        'xaxis.showgrid': show
        };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.IG_barLabelY = function(barId, show) {
    var update = {
        'yaxis.showticklabels': show
    };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.IG_barGridY = function(barId, show) {
    var update = {
        'yaxis.showgrid': show
        };
    Plotly.relayout(barId, update);
}


//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////
//////////////////// VALUES ////////////////////



//----- CALCULATE LEADER EFFICINCIES -----//123456789
// VALUES: values.update.totalHelpSabo()
// GRAPHICS: graphics.update.efficiencyBar()
//
calculator.values.update.IG_efficiencies = function() {

    if(calculator.globalVariable.IG_isIGA) {

        if(calculator.globalVariable.IG_ourFollowersAreHetero) {

            if(calculator.globalVariable.IG_playerIndex === -1) {
                efi1 = 5;
                efi2 = 1;
            }

            if(calculator.globalVariable.IG_playerIndex === 0) {
                efi1 = 5;
                efi2 = 1;
            }

            if(calculator.globalVariable.IG_playerIndex === 1) {
                efi1 = 1;
                efi2 = 5;
            }

        }

        if(!calculator.globalVariable.IG_ourFollowersAreHetero) {

            efi1 = 1;
            efi2 = 1;

        }

    }

    if(calculator.globalVariable.IG_isIGB) {

        if(calculator.globalVariable.IG_theirFollowersAreHetero) {

            if(calculator.globalVariable.IG_playerIndex === -1) {
                efi1 = 5;
                efi2 = 1;
            }

            if(calculator.globalVariable.IG_playerIndex === 0) {
                efi1 = 5;
                efi2 = 1;
            }

            if(calculator.globalVariable.IG_playerIndex === 1) {
                efi1 = 1;
                efi2 = 5;
            }

        }

        if(!calculator.globalVariable.IG_theirFollowersAreHetero) {

            efi1 = 1;
            efi2 = 1;

        }

    }

    calculator.graphics.update.IG_efficiencyBar(efi1, efi2);
    calculator.icons.update.IG_leaderSize();
    calculator.icons.IG_adjustPlacement();

}


//----- CALCULATE PROBABILITIES GIVEN EFFICIENCIES -----//123456789
// Does not call values.efficiencies takes it as given
// GRAPHICS: graphics.update.IG_pie()
calculator.values.update.IG_probability = function() {

    efefo1 = efo1 * efi1;
    efefo2 = efo2 * efi2;

    IG_pwin = ((efo1 + efo2) === 0) ? 0.5 : (efefo1 / (efefo1 + efefo2));

    calculator.graphics.update.IG_pie();

}


//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////
//////////////////// SLIDER /////////////////////


// Decision Sliders

// EFFORT 123456789
calculator.slider.playerDecision.IG_effort = document.getElementById('IG_dSliderL');
calculator.slider.playerDecision.IG_effort.oninput = function() {


    calculator.wheel.IG_hide();


    // get the value from the slider
    efo1 = parseFloat(calculator.slider.playerDecision.IG_effort.value);


    // update bar plot
    calculator.decisionSlider.leader.IG_effortBar(efo1, true);


    // slider sync
    $('#IG_lSlider1').prop('value', efo1);
    $('#IG_lSlider1').change();


    // bar plot sync
    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.IG_effortBar(efo1, 'IG_barl1', ourSide, !showAxis)


    calculator.values.update.IG_efficiencies();
    calculator.values.update.IG_probability();
    calculator.results.update.IG_allTextAndColors();


    //WILL ADD AN ACTIVE WIGGLE SWITCH OFF HERE


}

// Effort Section

//Player 1 123456789
calculator.slider.IG_l1= document.getElementById('IG_lSlider1');
calculator.slider.IG_l1.oninput = function() {

    calculator.wheel.IG_hide();

    efo1 = parseFloat(calculator.slider.IG_l1.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.IG_effortBar(efo1, 'IG_barl1', ourSide, showAxis);

    calculator.results.update.IG_allTextAndColors();

    calculator.graphics.update.IG_barLabelX('IG_barl1', true);

    calculator.values.update.IG_probability();

    calculator.pointers.IG_switches[0] = false;

    // slider sync
    $('#IG_dSliderL').prop('value', efo1);
    $('#IG_dSliderL').change();

    calculator.decisionSlider.leader.IG_effortBar(efo1, true);

}

//Player 2 123456789
calculator.slider.IG_l2 = document.getElementById('IG_olSlider1');
calculator.slider.IG_l2.oninput = function() {

    calculator.wheel.IG_hide();

    efo2 = parseFloat(calculator.slider.IG_l2.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.IG_effortBar(efo2, 'IG_barl2', !ourSide, showAxis);

    calculator.results.update.IG_allTextAndColors();

    calculator.values.update.IG_probability();

    calculator.graphics.update.IG_barLabelX('IG_barl2', true);

    calculator.pointers.IG_switches[1] = false;

}


////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////
////////////////////////// HOVER ///////////////////////////


//------------------------------------------------//
//------------------------------------------------//
//------------ DECISION SLIDER SECTIONS ----------//
//------------------------------------------------//
//------------------------------------------------//

//----- LEADER DECISION SLIDER ------//

$('#IG_dSliderL').hover(
    function() {

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_bardl', true), 150);


        calculator.globalVariable.IG_pieBorderLeft = true;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderLeft = true;
        calculator.icons.enervate.IG_leaderLeft(0);
        calculator.globalVariable.IG_enervate2LeaderLeft = false;

        $('.activeFollowerLeft').css({'opacity':'1'});
        $('.passiveFollowerLeft').css({'opacity':'0'});

        $('.IG_bswLeft').css({'box-shadow':'0px 0px 1px 4px lime'});

    },
    function() {

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_bardl', false), 150);
        calculator.graphics.update.IG_barGridX('IG_bardl', false);

        calculator.globalVariable.IG_pieBorderLeft = false;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderLeft = false;
        calculator.globalVariable.IG_enervate2LeaderLeft = true;
        calculator.icons.enervate2.IG_leaderLeft(0);

        $('.activeFollowerLeft').css({'opacity':'0'});
        $('.passiveFollowerLeft').css({'opacity':'1'});

        $('.IG_bswLeft').css({'box-shadow':'0px 1px 1px 0px black'});

    }
)

$('.IG_inputL').hover(

    function() {

        calculator.globalVariable.IG_enervate2LeaderLeft = true;
        calculator.icons.enervate2.IG_leaderLeft(0);

        $('.IG_decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.IG_bswLeft').css({'transition':'0.7s', 'transform':'scale(1.1)'});

        calculator.button.display.IG_spinBottom(false);

        calculator.decisionSlider.leader.IG_isFlashing = false;

        if(calculator.globalVariable.IG_open) {

            calculator.results.hide.IG_leaderOutcomes();
            $('.IG_generalMarginBox').css({'transition':'1.523456s', 'margin-top':'150px'});

        }

    },

    function() {

        setTimeout(()=>{

            calculator.globalVariable.IG_enervate2LeaderLeft = false;

            $('.IG_decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1)'});
            $('.IG_bswLeft').css({'transition':'0.7s', 'transform':'scale(1)'});

            calculator.button.display.IG_spinBottom(true);

            if(calculator.globalVariable.IG_open) {

                $('.IG_payoffWrap, .IG_imageWrap23').css({'transition':'1.523456s', 'transition-delay':'1s','opacity':'1'});
                calculator.space.IG_contestResultsIsOpen = true;

                calculator.space.update.IG_heights();

                $('.IG_generalMarginBox').css({'transition':'1.523456s', 'transition-delay':'1s', 'margin-top':'0px'});

            }


            if(!calculator.globalVariable.IG_contestResultsExist) {

                $('.IG_payoffWrap').css({'transition':'0s', 'opacity':'0'});

            }

        }, 200)





    }

)


//------------------------------------------------//
//------------------------------------------------//
//-------------- CONTEST SECTION -----------------//
//------------------------------------------------//
//------------------------------------------------//

//----- LEFT HORIZONTAL SLIDER -----//

$('#IG_lSlider1').hover(
    function() {

        calculator.globalVariable.IG_pieBorderLeft = true;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderLeft = true;
        calculator.icons.enervate.IG_leaderLeft(0);
        calculator.globalVariable.IG_enervate2LeaderLeft = false;

        $('.activeFollowerLeft').css({'opacity':'1'});
        $('.passiveFollowerLeft').css({'opacity':'0'});

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_barl1', true), 150);
        // calculator.questions.spin2.l1();

        },
    function() {

        calculator.globalVariable.IG_pieBorderLeft = false;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderLeft = false;
        calculator.globalVariable.IG_enervate2LeaderLeft = true;
        calculator.icons.enervate2.IG_leaderLeft(0);

        $('.activeFollowerLeft').css({'opacity':'0'});
        $('.passiveFollowerLeft').css({'opacity':'1'});

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_barl1', false), 400);
        calculator.graphics.update.IG_barGridX('IG_barl1', false);

    }
);

$('.IG_bswLeft').hover(
    function() {

        calculator.globalVariable.IG_enervate2LeaderLeft = true;
        calculator.icons.enervate2.IG_leaderLeft(0);

        $('.IG_l1vibrate').css({'transition':'0s', 'opacity':'0'});
        $('.IG_decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.IG_bswLeft').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.IG_bswLeft').css({'transition':'0.7s', 'box-shadow':'0px 6px 6px 2px black'});

        if(calculator.globalVariable.hover.IG_cButton) {
            calculator.button.display.IG_spinBottom(false);
        }

        calculator.questions.spin1.IG_l1();

        if(calculator.lock.switch.IG_all[0]) {
            $('.IG_l1vibrate').css({'transition':'0.3s', 'opacity':'1'});
            calculator.lock.switch.IG_l1 = true;
            calculator.lock.vibrate.IG_l1(1);
        }

    },
    function() {

        calculator.globalVariable.IG_enervate2LeaderLeft = false;

        $('.IG_decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.IG_bswLeft').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.IG_bswLeft').css({'transition':'0.7s', 'box-shadow':'0px 1px 1px 0px black'});

        if(calculator.globalVariable.hover.IG_cButton) {
            calculator.button.display.IG_spinBottom(true);
        }

        calculator.questions.spin2.IG_l1();
        calculator.lock.switch.IG_l1 = false;

    }
);


//----- RIGHT HORIZONTAL SLIDER -----//

$('#IG_olSlider1').hover(
    function() {

        calculator.globalVariable.IG_pieBorderRight = true;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderRight = true;
        calculator.icons.enervate.IG_leaderRight(0);

        calculator.globalVariable.IG_enervate2LeaderRight = false;

        $('.activeFollowerRight').css({'opacity':'1'});
        $('.passiveFollowerRight').css({'opacity':'0'});

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_barl2', true), 150);
        // calculator.questions.spin2.l2();

    },
    function() {

        calculator.globalVariable.IG_pieBorderRight = false;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderRight = false;
        calculator.globalVariable.IG_enervate2LeaderRight = true;
        calculator.icons.enervate2.IG_leaderRight(0);

        $('.activeFollowerRight').css({'opacity':'0'});
        $('.passiveFollowerRight').css({'opacity':'1'});

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_barl2', false), 400);
        calculator.graphics.update.IG_barGridX('IG_barl2', false);

    }
);

$('.IG_bswRight').hover(

    function() {

        calculator.globalVariable.IG_enervate2LeaderRight = true;
        calculator.icons.enervate2.IG_leaderRight(0);

        $('.IG_l2vibrate').css({'transition':'0s', 'opacity':'0'});
        $('.IG_bswRight').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.IG_bswRight').css({'transition':'0.7s', 'box-shadow':'0px 6px 6px 2px black'});

        if(calculator.globalVariable.hover.IG_cButton) {
            calculator.button.display.IG_spinBottom(false);
        }

        calculator.questions.spin1.IG_l2();

        if(calculator.lock.switch.IG_all[1]) {
            $('.IG_l2vibrate').css({'transition':'0.3s', 'opacity':'1'});
            calculator.lock.switch.IG_l2 = true;
            calculator.lock.vibrate.IG_l2(1);
        }

    },
    function() {

        calculator.globalVariable.IG_enervate2LeaderRight = false

        $('.IG_bswRight').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.IG_bswRight').css({'transition':'0.7s', 'box-shadow':'0px 1px 1px 0px black'});

        if(calculator.globalVariable.hover.IG_cButton) {
            calculator.button.display.IG_spinBottom(true);
        }

        calculator.questions.spin2.IG_l2();
        calculator.lock.switch.IG_l2 = false;

    }

);


//------------------------------------------------//
//------------------------------------------------//
//----------------- SPIN BUTTONS -----------------//
//------------------------------------------------//
//------------------------------------------------//123456789

var IG_sp23C = 0;
$('#IG_spinImage23').hover(
    function() {
        IG_sp23C = IG_sp23C + 1;
        var str = 'rotate('+IG_sp23C+'turn)';
        $('#IG_spinImage23').css({'transition':'0.5s', 'transform':str});
    },
    function() {

    }
)

$('#IG_submitButtonBottom').hover(

    function() {
        calculator.button.IG_activeSubmitButtonAnimation = true;
        calculator.button.IG_animate(0);
    },
    function() {
        calculator.button.IG_activeSubmitButtonAnimation = false;
    }

)


/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////
/////////////////// TITLE /////////////////////



//------- HS TITLE SHOW / HIDE -------//


calculator.titles.hs.ghost.IG_show = function() {

    $('.IG_ctGhost').css({'transition':'0.3s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0turn)'});
    $('.IG_ctGhost').css({'opacity':'1'});
    calculator.titles.hs.ghost.IG_adjustHeight();

}

calculator.titles.hs.ghost.IG_hide = function() {

    $('.IG_ctGhost').css({'transition':'0.3s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 1turn)'});
    $('.IG_ctGhost').css({ 'opacity':'0'});

}

calculator.titles.opacity.IG_all = function(array) {

    var topt, bopt;

    topt = array[0] ? '1' : '0';
    bopt = array[1] ? '1' : '0';

    $('.IG_ctGhost').css({'opacity':topt});
    $('.IG_ctBottom').css({'opacity':bopt});

}

// we will readjust this one we determine the size for the icons
calculator.titles.hs.ghost.IG_adjustHeight = function() {

    var marginTop;

    if(calculator.globalVariable.IG_isIGA) {

    if(calculator.globalVariable.IG_ourFollowersAreHetero) {
        marginTop = '-8px';
    }

    if(!calculator.globalVariable.IG_ourFollowersAreHetero) {
        marginTop = '40px';
    }

}

if(calculator.globalVariable.IG_isIGB) {

    if(calculator.globalVariable.IG_theirFollowersAreHetero) {
        marginTop = '-8px';
    }

    if(!calculator.globalVariable.IG_theirFollowersAreHetero) {
        marginTop = '40px';
    }

}

    $('.IG_ctGhost').css({'transition':'0.3s', 'margin-top' : marginTop});

}


//------- CONTEST TITLE SHOW / HIDE -------//

calculator.titles.contest.IG_show = function() {

    $('.IG_ctBottom').css({'transition':'0.3s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 1turn)', 'opacity':'1'});
    $('.IG_imageWrap23').css({'transition':'0.3s', 'opacity':'1'});

    calculator.space.open.IG_cResults();

}

calculator.titles.contest.IG_hide = function() {

    $('.IG_ctBottom').css({'transition':'0.3s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
    $('.IG_ctBottom').css({ 'opacity':'0'});

    calculator.space.close.IG_cResults();

}


//---------- TEXT AND COLOR ---------//

calculator.titles.hs.ghost.IG_text = function() {

    var contestName1, contestName2;

    contestName1 = document.getElementById('IG_contestNameG1');
    contestName2 = document.getElementById('IG_contestNameG2');

    if(calculator.globalVariable.IG_isIGA) {
        contestName1.innerHTML = 'IN-GROUP CONTEST A';
        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
    }

    if(calculator.globalVariable.IG_isIGB) {
        contestName1.innerHTML = 'IN-GROUP CONTEST B';
        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
    }

}

calculator.titles.update.IG_textAndColor = function() {

    var contestName21, contestName22;

    contestName21 = document.getElementById('IG_contestName21');
    contestName22 = document.getElementById('IG_contestName22');

    if(calculator.globalVariable.IG_isIGA) {

        contestName21.innerHTML = 'FOLLOWERS\' COMPETITION';
        contestName22.innerHTML = 'IN-GROUP CONTEST A';

        if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

            if(calculator.globalVariable.tutorial.IG_IGSameColor) {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60,60,60), rgb(60,60,60))'});

            } else {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,0))'});

            }

        }

        if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,0))'});

            } else {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(60,60,60))'});

            }

        }

    }

    if(calculator.globalVariable.IG_isIGB) {

        contestName21.innerHTML = 'FOLLOWERS\' COMPETITION';
        contestName22.innerHTML = 'IN-GROUP CONTEST B';

        if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

            if(calculator.globalVariable.tutorial.IG_IGSameColor) {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(210,210,210), rgb(210,210,210))'});

            } else {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(210,210,210), rgb(210,210,0))'});

            }

        }

        if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(210,210,210), rgb(210,210,0))'});

            } else {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

            }

        }

    }

}


//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////
//////////// ICON /////////////

//------- ADJUSTMENT FOR HETERO ICONS ------//

calculator.icons.IG_adjustPlacement = function() {

    if(calculator.globalVariable.IG_ourFollowersAreHetero && calculator.globalVariable.IG_isIGA) {

        if(calculator.globalVariable.IG_playerView) {

            if(calculator.globalVariable.IG_playerIndex === 0 || calculator.globalVariable.IG_playerIndex === -1) {
                $('.IG_wrapMid').css({'margin-left':'-12px'});
                $('.IG_imgwrapfight').css({'margin-left':'47px'});
                $('.rightFollowerIconMainWrap').css({'margin-top':'6px'});
            }

            if(calculator.globalVariable.IG_playerIndex === 1) {
                $('.IG_wrapMid').css({'margin-right':'-12px'});
                $('.IG_imgwrapfight').css({'margin-right':'47px'});
                $('.leftFollowerIconMainWrap').css({'margin-top':'6px'});
            }

        }

        if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {
            $('.IG_wrapMid').css({'margin-left':'-12px'});
            $('.IG_imgwrapfight').css({'margin-left':'47px'});
            $('.rightFollowerIconMainWrap').css({'margin-top':'6px'});
        }

    }

    if(calculator.globalVariable.IG_theirFollowersAreHetero && calculator.globalVariable.IG_isIGB) {

        $('.IG_wrapMid').css({'margin-left':'-12px'});
        $('.IG_imgwrapfight').css({'margin-left':'47px'});
        $('.rightFollowerIconMainWrap').css({'margin-top':'6px'});

    }

}


//----- DISPLAY ICON DEPENDING ON INDEX AND ROLE ------//

calculator.icons.IG_setMe = function() {

    $('.objectivef1').css({'display':'flex'});
    $('.objectivef2').css({'display':'flex'});
    $('.objectivel').css({'display':'flex'});
    $('.objectivef').css({'display':'flex'});

    $('.subjectivef1').css({'display':'none'});
    $('.subjectivef2').css({'display':'none'});
    $('.subjectivel').css({'display':'none'});
    $('.subjectivef').css({'display':'none'})

    if(calculator.globalVariable.IG_playerView) {

        if(calculator.globalVariable.IG_playerIndex === 0) {
            // OG
            $('.subjectivef1').css({'display':'flex'});
            $('.objectivef1').css({'display':'none'});

            //IGA
            $('.subjectivef').css({'display':'flex'});
            $('.objectivef').css({'display':'none'});


        }

        if(calculator.globalVariable.IG_playerIndex === 1) {

            // OG
            $('.subjectivef2').css({'display':'flex'});
            $('.objectivef2').css({'display':'none'});

            //IGA
            $('.subjectivef').css({'display':'flex'});
            $('.objectivef').css({'display':'none'});

        }

        if(calculator.globalVariable.IG_playerIndex === -1) {
            // OG
            $('.subjectivel').css({'display':'flex'});
            $('.objectivel').css({'display':'none'});

        }

    }

}

calculator.icons.IG_adjustForTreatment = function() {

    $('.IG_homoLeftFollowers, .IG_homoRightFollowers, .IG_homoLeftFollowers, .IG_homoRightFollowers').css({'display':'flex'});
    $('.IG_heteroLeftFollowers, .heteroRightFollowers, .IG_heteroLeftFollowers, .heteroRightFollowers').css({'display':'none'});

    if(calculator.globalVariable.IG_ourFollowersAreHetero) {

        // OG and IGA and IGB
        $('.IG_homoLeftFollowers').css({'display':'none'});
        $('.IG_heteroLeftFollowers').css({'display':'flex'});

    }

    if(calculator.globalVariable.IG_theirFollowersAreHetero) {

        // OG and IGA and IGB
        $('.IG_homoRightFollowers, .homoRightLeaders').css({'display':'none'});
        $('.heteroRightFollowers, .heteroRightLeaders').css({'display':'flex'});

    }

}

calculator.icons.IG_setIGA = function() {

    if(calculator.globalVariable.IG_playerIndex === -1) {

        // first follower is strong
        $('.strongFollower1').css({'display':'flex'});
        $('.weakFollower1').css({'display':'none'})

        // second follower is weak
        $('.weakFollower2').css({'display':'flex'});
        $('.strongFollower2').css({'display':'none'});

    }

        if(calculator.globalVariable.IG_playerIndex === 0) {

            // first follower is strong
            $('.strongFollower1').css({'display':'flex'});
            $('.weakFollower1').css({'display':'none'})

            // second follower is weak
            $('.weakFollower2').css({'display':'flex'});
            $('.strongFollower2').css({'display':'none'});

        }

        if(calculator.globalVariable.IG_playerIndex === 1) {

            // first follower is weak
            $('.weakFollower1').css({'display':'flex'});
            $('.strongFollower1').css({'display':'none'});

            // second follower is strong
            $('.strongFollower2').css({'display':'flex'});
            $('.weakFollower2').css({'display':'none'});

        }

    }

calculator.icons.IG_setAll = function() {

    $('.wrapMidIGASetup, .wrapMidIGBSetup').css({'display':'none'})

    if(calculator.globalVariable.IG_isIGA) {

        $('.wrapMidIGASetup').css({'display':'flex'})

        calculator.icons.IG_setIGA();

        calculator.icons.IG_setMe();
        calculator.icons.IG_adjustForTreatment();

    }

    if(calculator.globalVariable.IG_isIGB) {

        // no subjective view for displaying the other team

        calculator.icons.IG_adjustForTreatment();

        $('.wrapMidIGBSetup').css({'display':'flex'})

    }

}


//-------- SET SIZE OF ICONS IN HS SECTION -------//

calculator.icons.set.IG_size = function(Id, h, w) {

    var myClass, myHeight, myWidth;

    myClass = '.' + Id;
    myHeight = h + 'px';
    myWidth = w + 'px';

    $(myClass).css({'height' : myHeight, 'width' : myWidth});

}


//------- LEADER ICON RESIZING METHOD DEPENDENT ON HELP AND SABOTAGE VALUES ----//

calculator.icons.update.IG_followerAuraColor = function() {

    // Followers do not have any aura color
    $('.IG_imgwrapwrapwrap31').css({'background-color':'transparent', 'border-color':'transparent'});

    $('.IG_imgwrapwrapwrap32').css({'background-color':'transparent', 'border-color':'transparent'});

}

calculator.icons.update.IG_leaderSize = function() {

    var m1, m2;

    if(calculator.globalVariable.IG_isIGA) {

        if(calculator.globalVariable.IG_ourFollowersAreHetero) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                m1 = 1.8;
                m2 = 0.7;

            }

            if(calculator.globalVariable.IG_playerIndex === 0) {

                m1 = 1.8;
                m2 = 0.7;

            }

            if(calculator.globalVariable.IG_playerIndex === 1) {

                m1 = 0.7;
                m2 = 1.8;

            }

        } else {
            // from the leader's point of view

            m1 = 1;
            m2 = 1;

        }

    }

    if(calculator.globalVariable.IG_isIGB) {

        if(calculator.globalVariable.IG_theirFollowersAreHetero) {

            m1 = 1.8;
            m2 = 0.7;

        } else {

            m1 = 1;
            m2 = 1;

        }

    }


    calculator.icons.set.IG_size('IG_splc1', 85 * m1, 55 * m1);
    calculator.icons.set.IG_size('IG_splc2', 85 * m2, 55 * m2)

}


//-------- HIDDEN ICON METHODS --------//

calculator.icons.rescale.IG_leaderIconSize = function(scale) {

    var m1 = calculator.icons.calculate.size(th, ts) * scale;
    calculator.icons.set.IG_size('IG_rescaleL1', 85 * m1, 65 * m1);

    var m2 = calculator.icons.calculate.size(toh, tos) * scale;
    calculator.icons.set.IG_size('IG_rescaleL2', 85 * m2, 65 * m2)

}

calculator.icons.show.IG_hiddenContest = function() {
    $('.IG_OGCIcon2').css({'opacity':'1'});
}

calculator.icons.hide.IG_hiddenContest = function() {
    $('.IG_OGCIcon2').css({'opacity':'0'});
}


//------------- ENERVATE ICONS -----------------//

calculator.icons.enervate.IG_delayTime = 200;

//-- ENERVATE ACTIVE ICONS --//
calculator.globalVariable.IG_enervateLeaderLeft = false;
calculator.icons.enervate.IG_leaderLeft = function(state) {

    if(calculator.globalVariable.IG_enervateLeaderLeft) {

        if(state === 0) {
            $('.IG_splc1').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.IG_leaderLeft(1), calculator.icons.enervate.IG_delayTime);
        }
        if(state === 1) {
            $('.IG_splc1').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.IG_leaderLeft(0), calculator.icons.enervate.IG_delayTime);
        }

    } else {
        $('.IG_splc1').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.IG_enervateLeaderRight = false;
calculator.icons.enervate.IG_leaderRight = function(state) {

    if(calculator.globalVariable.IG_enervateLeaderRight) {

        if(state === 0) {
            $('.IG_splc2').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.IG_leaderRight(1), calculator.icons.enervate.IG_delayTime);
        }
        if(state === 1) {
            $('.IG_splc2').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.IG_leaderRight(0), calculator.icons.enervate.IG_delayTime);
        }

    } else {
        $('.IG_splc2').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}


//-- ENERVATE PASIVE ICONS --//
calculator.globalVariable.IG_enervate2LeaderLeft = false;
calculator.icons.enervate2.IG_leaderLeft = function(state) {

    if(calculator.globalVariable.IG_enervate2LeaderLeft) {

        if(state === 0) {
            $('.IG_lener1').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.IG_leaderLeft(1), calculator.icons.enervate.IG_delayTime);
        }
        if(state === 1) {
            $('.IG_lener1').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.IG_leaderLeft(0), calculator.icons.enervate.IG_delayTime);
        }

    } else {
        $('.IG_lener1').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.IG_enervate2LeaderRight = false;
calculator.icons.enervate2.IG_leaderRight = function(state) {

    if(calculator.globalVariable.IG_enervate2LeaderRight) {

        if(state === 0) {
            $('.IG_lener2').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.IG_leaderRight(1), calculator.icons.enervate.IG_delayTime);
        }
        if(state === 1) {
            $('.IG_lener2').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.IG_leaderRight(0), calculator.icons.enervate.IG_delayTime);
        }

    } else {
        $('.IG_lener2').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}


////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////
////////////////////////// LOCK ///////////////////////////


calculator.lock.switch.IG_all = Array(2);

calculator.lock.switch.IG_l1 = true;
calculator.lock.vibrate.IG_l1 = function(state) {

    if(calculator.lock.switch.IG_l1) {

        $('.IG_l1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


        if(state === 1) {

            $('.IG_l1vibrate').css({'margin-left':'10px'});
            setTimeout(()=>calculator.lock.vibrate.IG_l1(2),100);

        }

        if(state === 2) {

            $('.IG_l1vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.IG_l1(1),100);

        }

    } else {

        calculator.lock.switch.IG_l1 = false;
        $('.IG_l1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

    }

}

calculator.lock.switch.IG_l2 = true;
calculator.lock.vibrate.IG_l2 = function(state) {

    if(calculator.lock.switch.IG_l2) {

        $('.IG_l2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


        if(state === 1) {

            $('.IG_l2vibrate').css({'margin-left':'10px'});
            setTimeout(()=>calculator.lock.vibrate.IG_l2(2),100);

        }

        if(state === 2) {

            $('.IG_l2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.IG_l2(1),100);

        }

    } else {

        calculator.lock.switch.IG_l2 = false;
        $('.IG_l2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

    }

}


calculator.lock.IG_activate = function(array) {

    calculator.lock.switch.IG_all = array;

    var l1, l2, o1, o2;
    l1 = array[0] ? '2' : '-1';
    l2 = array[1] ? '2' : '-1';
    o1 = array[0] ? '1' : '0';
    o2 = array[1] ? '1' : '0';

    $('.IG_lockedCover_l1').css({'z-index' : l1, 'opacity' : o1});
    $('.IG_lockedCover_l2').css({'z-index' : l2, 'opacity' : o2});

}


////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////
////////////////////// POINTER ///////////////////////////


calculator.pointers.IG_switches = Array(2);

calculator.pointers.IG_switches[0] = true;
calculator.pointers.wiggle.IG_l1= function(state) {

    if(calculator.pointers.IG_switches[0]) {

        if(state === 1) {

            $('.IG_sliderArrowImageWrap_l1').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.IG_l1(0), 750);

        }

        if(state === 0) {

            $('.IG_sliderArrowImageWrap_l1').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>calculator.pointers.wiggle.IG_l1(1), 750);

        }

    } else {

        $('.IG_sliderArrowImageWrap_l1').css({'opacity':'0'});

    }

}

calculator.pointers.IG_switches[1] = true;
calculator.pointers.wiggle.IG_l2= function(state) {

    if(calculator.pointers.IG_switches[1]) {

        if(state === 1) {

            $('.IG_sliderArrowImageWrap_l2').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.IG_l2(0), 750);

        }

        if(state === 0) {

            $('.IG_sliderArrowImageWrap_l2').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>calculator.pointers.wiggle.IG_l2(1), 750);

        }

    } else {

        $('.IG_sliderArrowImageWrap_l2').css({'opacity':'0'});

    }

}


calculator.pointers.IG_activate = function(array) {

    calculator.pointers.IG_switches = array;

    calculator.pointers.wiggle.IG_l1(1);
    calculator.pointers.wiggle.IG_l2(1);

}


/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////
/////////////////////// ROLL ////////////////////////


// MICRO ROLLING METHDODS

// the order of context for the array text is as below
// need to stick to this order as the x coordinates are predefined accordingly
// var textArray = ['GROUP A', 'YOU', 'FOLLOWER', 'STRONG', 'WEAK', 1000]
calculator.IG_stopRolling = false;
calculator.roll.IG_displayTime = 4500;


calculator.roll.IG_l1 = function(index, prevIndex, textArray) {

    var lSideText10 = document.getElementById('IG_lSideText10');
    var lSideText11 = document.getElementById('IG_lSideText11');
    var lSideText12 = document.getElementById('IG_lSideText12');
    var lSideText13 = document.getElementById('IG_lSideText13');
    var lSideText14 = document.getElementById('IG_lSideText14');
    var lSideText15 = document.getElementById('IG_lSideText15');

    if(!calculator.IG_stopRolling) {


        lSideText10.innerHTML = textArray[0];
        lSideText11.innerHTML = textArray[1];
        lSideText12.innerHTML = textArray[2];
        lSideText13.innerHTML = textArray[3];
        // lSideText13.innerHTML = calculator.roll.l1PowerText;
        lSideText14.innerHTML = textArray[4];
        lSideText15.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.IG_lSideText1' + index;
        var str2 = '.IG_lSideText1' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.IG_l1(nextIndex, prevIndex, textArray), calculator.roll.IG_displayTime);

    } else {

        lSideText10.innerHTML = 'GROUP A';
        lSideText11.innerHTML = '';
        lSideText12.innerHTML = '';
        lSideText13.innerHTML = '';
        lSideText14.innerHTML = '';
        lSideText15.innerHTML = '';

        $('.IG_lSideText10').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.IG_lSideText11, .IG_lSideText12, .IG_lSideText13, .IG_lSideText14, .IG_lSideText15').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}

calculator.roll.IG_l2 = function(index, prevIndex, textArray) {

    var lSideText20 = document.getElementById('IG_lSideText20');
    var lSideText21 = document.getElementById('IG_lSideText21');
    var lSideText22 = document.getElementById('IG_lSideText22');
    var lSideText23 = document.getElementById('IG_lSideText23');
    var lSideText24 = document.getElementById('IG_lSideText24');
    var lSideText25 = document.getElementById('IG_lSideText25');

    if(!calculator.IG_stopRolling) {


        lSideText20.innerHTML = textArray[0];
        lSideText21.innerHTML = textArray[1];
        lSideText22.innerHTML = textArray[2];
        lSideText23.innerHTML = textArray[3];
        // lSideText23.innerHTML = calculator.roll.l2PowerText;
        lSideText24.innerHTML = textArray[4];
        lSideText25.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.IG_lSideText2' + index;
        var str2 = '.IG_lSideText2' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.IG_l2(nextIndex, prevIndex, textArray), calculator.roll.IG_displayTime);

    } else {

        lSideText20.innerHTML = 'GROUP A';
        lSideText21.innerHTML = '';
        lSideText22.innerHTML = '';
        lSideText23.innerHTML = '';
        lSideText24.innerHTML = '';
        lSideText25.innerHTML = '';

        $('.IG_lSideText20').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.IG_lSideText21, .IG_lSideText22, .IG_lSideText23, .IG_lSideText24, .IG_lSideText25').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}


calculator.roll.IG_dsL = function(index, prevIndex, textArray) {

    var dLSideText0 = document.getElementById('IG_dLSideText0');
    var dLSideText1 = document.getElementById('IG_dLSideText1');
    var dLSideText2 = document.getElementById('IG_dLSideText2');
    var dLSideText3 = document.getElementById('IG_dLSideText3');
    var dLSideText4 = document.getElementById('IG_dLSideText4');
    var dLSideText5 = document.getElementById('IG_dLSideText5');

    if(!calculator.IG_stopRolling) {


        dLSideText0.innerHTML = textArray[0];
        dLSideText1.innerHTML = textArray[1];
        dLSideText2.innerHTML = textArray[2];
        dLSideText3.innerHTML = textArray[3];
        dLSideText4.innerHTML = textArray[4];
        dLSideText5.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.IG_dLSideText' + index;
        var str2 = '.IG_dLSideText' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.IG_dsL(nextIndex, prevIndex, textArray), calculator.roll.IG_displayTime);

    } else {

        dLSideText0.innerHTML = 'GROUP A';
        dLSideText1.innerHTML = '';
        dLSideText2.innerHTML = '';
        dLSideText3.innerHTML = '';
        dLSideText4.innerHTML = '';
        dLSideText5.innerHTML = '';

        $('.IG_dLSideText0').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.IG_dLSideText1, .IG_dLSideText2, .IG_dLSideText3, .IG_dLSideText4, .IG_dLSideText5').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}


// MICRO TO MACRO CONNECTION ARRAYS

calculator.roll.IG_lArray = Array(6);


calculator.roll.IG_olArray = Array(6);


calculator.roll.IG_dsLeader = Array(6);


// MACRO ARRAY CONTROLLING METHODS
calculator.roll.IG_emptyAll = function() {

    calculator.roll.IG_lArray = [-1, -1, -1, -1, -1, -1];
    calculator.roll.IG_olArray = [-1, -1, -1, -1, -1, -1];

    calculator.roll.IG_dsLeader = [-1, -1, -1, -1, -1, -1];

}

// typeOfContest is about which type of contest is being played
// in the experiment only 'l', 'f' and 'fhetero will be relevant'
calculator.roll.IG_setRolesAndGroups = function() {

        // contest section related
    if(calculator.globalVariable.IG_isIGA) {

        calculator.roll.IG_dsLeader[0] = 'GROUP A';
        calculator.roll.IG_dsLeader[1] = 'FOLLOWER';

        calculator.roll.IG_lArray[0] = 'GROUP A';
        calculator.roll.IG_lArray[1] = 'FOLLOWER';
        calculator.roll.IG_olArray[0] = 'GROUP A';
        calculator.roll.IG_olArray[1] = 'FOLLOWER';


        calculator.roll.IG_lArray[3] = 'EQUAL POWER';
        calculator.roll.IG_olArray[3] = 'EQUAL POWER';

        calculator.roll.IG_dsLeader[3] = 'EQUAL POWER';

        // we are always represented by left side so left hetero implies our
        // group is hetero
        if(calculator.globalVariable.IG_ourFollowersAreHetero) {

            if(calculator.globalVariable.IG_playerIndex === 0) {

                calculator.roll.IG_lArray[3] = 'STRONG';
                calculator.roll.IG_olArray[3] = 'WEAK';

                calculator.roll.IG_dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.IG_playerIndex === 1) {

                calculator.roll.IG_lArray[3] = 'WEAK';
                calculator.roll.IG_olArray[3] = 'STRONG';

                calculator.roll.IG_dsLeader[3] = 'WEAK';

            }

        }

    }

    // contest section related
    // this section is only relevant for the tutorial
    // otherwise we reconstruct the data to make the subject's group group A
    if(calculator.globalVariable.IG_isIGB) {

        calculator.roll.IG_dsLeader[0] = 'GROUP B';
        calculator.roll.IG_dsLeader[1] = 'FOLLOWER';

        calculator.roll.IG_lArray[0] = 'GROUP B';
        calculator.roll.IG_lArray[1] = 'FOLLOWER';
        calculator.roll.IG_olArray[0] = 'GROUP B';
        calculator.roll.IG_olArray[1] = 'FOLLOWER';


        calculator.roll.IG_lArray[3] = 'EQUAL POWER';
        calculator.roll.IG_olArray[3] = 'EQUAL POWER';

        calculator.roll.IG_dsLeader[3] = 'EQUAL POWER';

        // we are always represented by left side so left hetero implies our
        // group is hetero
        if(calculator.globalVariable.IG_theirFollowersAreHetero) {

            if(calculator.globalVariable.IG_playerIndex === 0) {

                calculator.roll.IG_lArray[3] = 'STRONG';
                calculator.roll.IG_olArray[3] = 'WEAK';

                calculator.roll.IG_dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.IG_playerIndex === 1) {

                calculator.roll.IG_lArray[3] = 'WEAK';
                calculator.roll.IG_olArray[3] = 'STRONG';

                calculator.roll.IG_dsLeader[3] = 'WEAK';

            }

        }

    }

}

calculator.roll.IG_setYouTag = function() {

    if(calculator.globalVariable.IG_playerView) {

        if(calculator.globalVariable.IG_playerIndex === 0) {

            calculator.roll.IG_lArray[2] = 'YOU';

            calculator.roll.IG_dsLeader[2] = 'YOU';

            calculator.roll.IG_olArray[2] = '';


        }

        if(calculator.globalVariable.IG_playerIndex === 1) {

            calculator.roll.IG_lArray[2] = 'YOU';

            calculator.roll.IG_dsLeader[2] = 'YOU';

            calculator.roll.IG_olArray[2] = '';

        }

    }

}

calculator.roll.IG_adjustForTreatment = function() {

    calculator.roll.IG_lArray[3] = 'EQUAL POWER';
    calculator.roll.IG_olArray[3] = 'EQUAL POWER';

    calculator.roll.IG_dsLeader[3] = 'EQUAL POWER';

    // we are always represented by left side so left hetero implies our
    // group is hetero
    if(calculator.globalVariable.IG_ourFollowersAreHetero) {

        if(calculator.globalVariable.IG_isIGA) {

            calculator.roll.IG_lArray[3] = 'STRONG';
            calculator.roll.IG_olArray[3] = 'WEAK';

            calculator.roll.IG_dsLeader[3] = 'STRONG';

            // here we use subjectiveIndex as a way to determine left and right player rolls
            // we do not require subjectiveview that way we can also use this method during the tutorial
            if(calculator.globalVariable.IG_playerIndex === 0) {

                calculator.roll.IG_lArray[3] = 'STRONG';
                calculator.roll.IG_olArray[3] = 'WEAK';

                calculator.roll.IG_dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.IG_playerIndex === 1) {

                calculator.roll.IG_lArray[3] = 'WEAK';
                calculator.roll.IG_olArray[3] = 'STRONG';

                calculator.roll.IG_dsLeader[3] = 'WEAK';

            }

        }

    }

    if(calculator.globalVariable.IG_theirFollowersAreHetero) {

        if(calculator.globalVariable.IG_isIGB) {

            calculator.roll.IG_lArray[3] = 'STRONG';
            calculator.roll.IG_olArray[3] = 'WEAK';

            calculator.roll.IG_dsLeader[3] = 'STRONG';

            // here we use subjectiveIndex as a way to determine left and right player rolls
            // we do not require subjectiveview that way we can also use this method during the tutorial
            if(calculator.globalVariable.IG_playerIndex === 0) {

                calculator.roll.IG_lArray[3] = 'STRONG';
                calculator.roll.IG_olArray[3] = 'WEAK';

                calculator.roll.IG_dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.IG_playerIndex === 1) {

                calculator.roll.IG_lArray[3] = 'WEAK';
                calculator.roll.IG_olArray[3] = 'STRONG';

                calculator.roll.IG_dsLeader[3] = 'WEAK';

            }

        }

    }

}

// ACTION AND EXECUTION
calculator.roll.IG_animate = function() {

    calculator.roll.IG_l1(0, 6, calculator.roll.IG_lArray);
    calculator.roll.IG_l2(0, 6, calculator.roll.IG_olArray);

    if(calculator.globalVariable.IG_playerView) {

        calculator.roll.IG_dsL(0, 6, calculator.roll.IG_dsLeader);

    }

}

calculator.roll.IG_initiate = function() {

    calculator.roll.IG_adjustRollTextColor();
    calculator.roll.IG_emptyAll();
    calculator.roll.IG_setRolesAndGroups();
    calculator.roll.IG_setYouTag();
    calculator.roll.IG_adjustForTreatment();
    calculator.IG_stopRolling = false;
    calculator.roll.IG_animate();

}

calculator.roll.IG_reset = function() {

    calculator.IG_stopRolling = true;
    setTimeout(()=>calculator.roll.IG_initiate(), calculator.roll.IG_displayTime);

}


calculator.roll.IG_adjustRollTextColor = function() {
    if(calculator.globalVariable.IG_isIGA) {

        $('.IG_lSideText10, .IG_lSideText11, .IG_lSideText12, .IG_lSideText13, .IG_lSideText14, .IG_lSideText15').css({'fill':'white'});
        $('.IG_lSideText12').css({'fill':'lime'});

        $('.IG_lSideText20, .IG_lSideText21, .IG_lSideText22, .IG_lSideText23, .IG_lSideText24, .IG_lSideText25').css({'fill':'white'});

    }

    if(calculator.globalVariable.IG_isIGB) {

        $('.IG_lSideText10, .IG_lSideText11, .IG_lSideText12, .IG_lSideText13, .IG_lSideText14, .IG_lSideText15').css({'fill':'black'});
        $('.IG_lSideText12').css({'fill':'lime'});

        $('.IG_lSideText20, .IG_lSideText21, .IG_lSideText22, .IG_lSideText23, .IG_lSideText24, .IG_lSideText25').css({'fill':'black'});

    }
}


/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////
/////////////////////// QUESTIONS ////////////////////////


calculator.questions.spin1.IG_l1 = function() {
    $('.IG_sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.IG_l1 = function() {
    $('.IG_sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.IG_l2 = function() {
    $('.IG_sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.IG_l2 = function() {
    $('.IG_sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}


calculator.questions.activate.IG_all = function(array) {

    $('.IG_sliderQuestion_l1').css({'opacity': array[0].toString()});
    $('.IG_sliderQuestion_l2').css({'opacity': array[1].toString()});

    if(calculator.globalVariable.IG_playerView) {

        $('.IG_sliderQuestion_l1').css({'opacity': '0'});

    }

}


/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////
/////////////////////// WHEEL ////////////////////////


calculator.wheel.IG_hide = function() {

    $('.IG_pw').css({'opacity':'1', 'zIndex':'1'});
    $('.IG_mywheel').css({'opacity':'0', 'zIndex':'0'});

}

calculator.wheel.IG_show = function() {

    $('.IG_pw').css({'opacity':'0', 'zIndex':'-1'});
    $('.IG_mywheel').css({'opacity':'1', 'zIndex':'0'});

}

calculator.wheel.IG_spin = function() {

    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

    //---//

    calculator.results.softHide.IG_allResults();

    //---//

    calculator.wheel.IG_spinDuration = 1;
    calculator.wheel.IG_spinNumber = 3;

    calculator.wheel.IG_create(IG_pwin, 'IG_myWheel');
    calculator.wheel.IG_myWheelObj.stopAnimation(false);
    calculator.wheel.IG_myWheelObj.rotationAngle = 0;

    calculator.wheel.IG_show();

    //---//

    var winner = (IG_pwin > Math.random()) ? 1 : 2;

    var stopAt = calculator.wheel.IG_myWheelObj.getRandomForSegment(winner);
    calculator.wheel.IG_myWheelObj.animation.stopAngle = stopAt;
    calculator.wheel.IG_myWheelObj.startAnimation();

    //---//

    setTimeout(()=>
    {
        calculator.results.update.IG_allTextAndColors(winner);
    },
    calculator.wheel.IG_spinDuration * 0.75 * 1000);

    setTimeout(()=>
    {
        calculator.results.show.IG_outcomes();
    },
    calculator.wheel.IG_spinDuration * 1000);

}

calculator.wheel.IG_cruise = function() {

    if(!calculator.wheel.IG_isSpinning) {

        calculator.wheel.IG_show();

        calculator.wheel.IG_spinDuration = 60;
        calculator.wheel.IG_spinNumber = 6;

        calculator.wheel.IG_create(IG_pwin, 'IG_myWheel');
        calculator.wheel.IG_myWheelObj.stopAnimation(false);
        calculator.wheel.IG_myWheelObj.rotationAngle = 0;
        calculator.wheel.IG_myWheelObj.startAnimation();

    }

}


//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////
//////////////////////// SPACE ///////////////////////////


calculator.space.IG_hsIsOpen = undefined;

calculator.space.IG_powerBarIsOpen = undefined;

calculator.space.IG_contestIsOpen = undefined;

calculator.space.IG_contestResultsIsOpen = undefined;

// CONTEST SECTION SPACE MANAGEMENT

calculator.space.open.IG_cResults = function() {

    calculator.space.IG_contestResultsIsOpen = true;
    calculator.space.update.IG_heights();

}

calculator.space.close.IG_cResults = function() {

    calculator.space.IG_contestResultsIsOpen = false;
    calculator.space.update.IG_heights();

}


// CLOSE BOTH HELP SABOTAGE SECTION AND 'CLOSE' LEADER RESULT SECTION

calculator.space.close.IG_all = function() {

    calculator.space.close.IG_cResults();

}


// ADJUST HEIGHT DEPENDING ON WHAT IS DISPLAYED AND OPEN

calculator.space.update.IG_heights = function() {



    var pb = calculator.space.IG_powerBarIsOpen ? 30 : 0;
    var c = calculator.space.IG_contestIsOpen ? 180 : 0;
    var hs = calculator.space.IG_hsIsOpen ? 195 : 0; // this may be smaller depending on the size of the icons
    var cr = calculator.space.IG_contestResultsIsOpen ? 140 : 0;//145 OLD VALUE

    var total = pb + c + cr + hs;

    total = total + 'px';

    console.log('********************');
    console.log('power bar: ' + pb);
    console.log('contest: ' + c);
    console.log('contestResult: ' + cr);
    console.log('hs: ' + hs);
    console.log('total: ' + total);
    console.log('********************');



    $('.IG_generalMarginBox').css({'transition':'1.023456s', 'height' : total});

    calculator.section.power.adjust.IG_space();

}


////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////
////////////////////////// RESULTS ////////////////////////////


//-------------- AFTER WHEEL STOPS ------------//

calculator.results.show.IG_outcomes = function() {

    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;



    //---------- CONTEST SECTION -----------//

    // I do not want the spinButton Bottom to have power to control the space
    // results and titles are the primary determinantes we can be clever and use this switch accordingly
    if(calculator.globalVariable.display.IG_cButton) {
        calculator.button.display.IG_spinBottom(true);
        setTimeout(()=>calculator.button.enable.IG_spinBottom(), 300);
    } else {
        calculator.button.display.IG_spinBottom(false);
        calculator.button.disable.IG_spinBottom();
    }

    if(calculator.globalVariable.display.IG_cResults) {
        calculator.results.show.IG_leaderOutcomes();
        calculator.globalVariable.IG_contestResultsExist = true;
    } else {
        calculator.results.hide.IG_leaderOutcomes()
        calculator.globalVariable.IG_contestResultsExist = false;
    }

    if(calculator.globalVariable.display.IG_cTitle) {
        calculator.titles.contest.IG_show();
    } else {
        calculator.titles.contest.IG_hide();
    }


    //-------------- HELP / SABOTAGE SECTION ------------//


    if(calculator.globalVariable.display.IG_hsIcons) {
        // need to redefined the parameters that the below method takes and
        // not sure if we have a hover switch for this or a results switch or
        // even if we need it
        calculator.section.hs.opacity.IG_LiFi([1,1])
        calculator.section.hs.set.IG_iconPosition('bottom');
    } else {
        // Not sure how can I benefit this state to be considered when needed
        // this section can be used to disappear hs section during the feedback
        // section to save some space and simplify the view and make sure
        // to always have only one leader icons set in the page
    }

    if(calculator.globalVariable.IG_weAreInFeedbackStage) {
        $('.IG_pWrap').css({'transition':'0s', 'margin-top':'-22px'});
        $('.IG_generalMarginBox').css({'height':'345px'});
    }


    //------ DELAYED ACTIVATIONS -------//

    setTimeout(()=>{

        calculator.globalVariable.IG_aBitOfWaitingIsDone = true;
        calculator.globalVariable.IG_dynamicDisplay = true;

    }, 5000);

}


//------------------ CONTEST -----------------//

calculator.results.leader.IG_switches = Array(4);
calculator.results.leader.IG_switches = [false, false, false, false];


calculator.results.leader.update.IG_payoffHeights = function(array) {

    var sum = array.reduce((a,b) => a + b, 0)

    if(sum === 0) {

        $('.IG_payoffWrap').css({'margin-top':'-109px'});
        $('.IG_c1, .IG_c2').css({'opacity':'1'});
        $('.IG_bottomText').css({'display':'none'});

    }

    if(sum === 1 || sum === 2) {

        $('.IG_payoffWrap').css({'margin-top':'-145px'});
        $('.IG_c1, .IG_c2').css({'opacity':'1'});
        $('.IG_bottomText').css({'display':'none'});

    }

    if(sum === 3) {

        $('.IG_payoffWrap').css({'margin-top':'-145px'});
        $('.IG_c1, .IG_c2').css({'opacity':'1'});
        $('.IG_bottomText').css({'display':'flex', 'margin-bottom':'-25px'});

    }

    if(sum === 4) {

        $('.IG_payoffWrap').css({'margin-top':'-145px'});
        $('.IG_c1, .IG_c2').css({'opacity':'1'});
        $('.IG_bottomText').css({'display':'flex', 'margin-bottom':'0px'});

    }


}

calculator.results.leader.display.IG_investment = function(show) {

    var opacity = show ? '1' : '0';
    $('.IG_cLeft, .IG_cRight').css({'opacity': opacity});
    $('.IG_pRight, .IG_pLeft').css({'display':'none'});
    $('.IG_topText').css({'justify-content':'center', 'border-bottom':'0px black'});


    calculator.results.leader.IG_switches[0] = show;
    calculator.results.leader.update.IG_payoffHeights(calculator.results.leader.IG_switches);

    calculator.results.IG_tokenTextIsShown = true;

}

calculator.results.leader.display.IG_prize = function(show) {

    var opacity = show ? '1' : '0';
    $('.IG_pLeft, .IG_pRight').css({'opacity': opacity});
    $('.IG_tokenTag').css({'display':'none'});

    calculator.results.leader.IG_switches[1] = show;
    calculator.results.leader.update.IG_payoffHeights(calculator.results.leader.IG_switches);

    if(show) {

        $('.IG_pRight, .IG_pLeft').css({'display':'flex'});
        $('.IG_topText').css({'justify-content':'space-between'});
        calculator.results.IG_tokenTextIsShown = false;

    }

}

calculator.results.leader.display.IG_netPayoff = function(show) {

    var opacity = show ? '1' : '0';
    $('.IG_npLeft, .IG_npRight').css({'opacity': opacity});
    $('.IG_topText').css({'border-bottom':'1px black dashed'});
    calculator.results.leader.IG_switches[2] = show;
    calculator.results.leader.update.IG_payoffHeights(calculator.results.leader.IG_switches);

}

calculator.results.leader.display.IG_role = function(show) {

    var opacity = show ? '1' : '0';
    $('.IG_rLeft, .IG_rRight').css({'opacity': opacity});
    calculator.results.leader.IG_switches[3] = show;
    calculator.results.leader.update.IG_payoffHeights(calculator.results.leader.IG_switches);

}


calculator.results.show.IG_leaderOutcomes = function() {


    $('.IG_payoffWrap, .IG_imageWrap23').css({'transition-delay':'0s','transition' : '0.7s', 'opacity':'1'});
    calculator.space.IG_contestResultsIsOpen = true;


    calculator.space.update.IG_heights();

}

calculator.results.hide.IG_leaderOutcomes = function() {

    $('.IG_payoffWrap, .IG_imageWrap23').css({'transition' : '0.15s', 'opacity':'0'});
    calculator.space.IG_contestResultsIsOpen = false;

    // Do not hide the contest titles when the subjective view is the leader
    if(calculator.globalVariable.IG_playerIndex === -1 && calculator.globalVariable.IG_playerView) {
        calculator.space.IG_contestResultsIsOpen = true;
        $('.IG_imageWrap23').css({'transition' : '0.15s', 'opacity':'1'});
    }

    // do not hide the contest title when contest title hover is close.
    // If the title is hidden then it will never be opened by the hover since it is closed
    if(!calculator.globalVariable.hover.IG_cTitle) {
        calculator.space.IG_contestResultsIsOpen = true;
        $('.IG_imageWrap23').css({'transition' : '0.15s', 'opacity':'1'});
    }

    calculator.space.update.IG_heights();

}


//---------- ALL ----------//

calculator.results.softHide.IG_allResults = function() {

    $('.IG_payoffWrap').css({'transition-delay':'0s', 'transition' : '0.15s', 'opacity':'0'});

}

calculator.results.hide.IG_all = function() {

    calculator.results.hide.IG_leaderOutcomes();
    calculator.globalVariable.IG_dynamicDisplay = false;

}

calculator.results.show.IG_all = function() {

    calculator.results.show.IG_leaderOutcomes();

}


//-------------- TEXT AND COLOR UPDATING ------------//

calculator.results.IG_tokenTextIsShown = undefined;
calculator.results.IG_resultTextsType = undefined;
calculator.results.IG_lastWinner = undefined;


calculator.results.update.IG_contestText = function(w) {

    w = w === undefined ? calculator.results.IG_lastWinner : w;
    calculator.results.IG_lastWinner = w;

    var winnerPrize, winnerRole, loserRole;


    winnerRole = 'Become the Leader';
    loserRole = 'Continue as Follower';
    winnerPrize = 0;

    //---//

    var resultLeft = document.getElementById('IG_resultLeft');
    var prizeLeft = document.getElementById('IG_prizeLeft');
    var costLeft = document.getElementById('IG_costLeft');
    var netPayoffLeft = document.getElementById('IG_netPayoffLeft');
    var roleLeft = document.getElementById('IG_roleLeft');
    var resultRight = document.getElementById('IG_resultRight');
    var prizeRight = document.getElementById('IG_prizeRight');
    var costRight = document.getElementById('IG_costRight');
    var netPayoffRight = document.getElementById('IG_netPayoffRight');
    var roleRight = document.getElementById('IG_roleRight');
    var myTokenTag1 = document.getElementById('IG_tokenTag1');
    var myTokenTag2 = document.getElementById('IG_tokenTag2');

    var tokenTag1, tokenTag2;
    if(calculator.results.IG_tokenTextIsShown) {
        tokenTag1 = efo1 === 0 ? ' token' : ' tokens';
        tokenTag2 = efo2 === 0 ? ' token' : ' tokens';
        $('.IG_tokenTag').css({'padding-left':'10px', 'font-weight':'400', 'display':'inline'});
    } else {
        tokenTag1 = tokenTag2 = '';
        $('.IG_tokenTag').css({'display':'none'});
    }

    //---//

    resultLeft.innerHTML = w === 1 ? 'WON' : 'LOST';
    prizeLeft.innerHTML = w === 1 ? winnerPrize : 0;
    costLeft.innerHTML = efo1;
    myTokenTag1.innerHTML = tokenTag1;
    netPayoffLeft.innerHTML = -efo1 + ( w === 1 ? winnerPrize : 0);
    roleLeft.innerHTML = w === 1 ? winnerRole : loserRole;

    resultRight.innerHTML = w === 2 ? 'WON' : 'LOST';
    prizeRight.innerHTML = w === 2 ? winnerPrize : 0;
    costRight.innerHTML = efo2;
    myTokenTag2.innerHTML = tokenTag2;
    netPayoffRight.innerHTML = -efo2 + ( w === 2 ? winnerPrize : 0);
    roleRight.innerHTML = w === 2 ? winnerRole : loserRole;

}

calculator.results.update.IG_outcomeColors = function(w) {

    w = w === undefined ? calculator.results.IG_lastWinner : w;
    calculator.results.IG_lastWinner = w;

    if(w === 1) {
        $('.IG_resultLeft, .IG_leftSideResult').css({'transition':'1s', 'background-color':'darkblue'});
        $('.IG_resultRight, .IG_rightSideResult').css({'transition':'1s', 'background-color':'darkred', 'color':'white'});
    }
    if(w === 2) {
        $('.IG_resultLeft, .IG_leftSideResult').css({'transition':'1s', 'background-color':'darkred'});
        $('.IG_resultRight, .IG_rightSideResult').css({'transition':'1s', 'background-color':'darkblue', 'color':'white'});
    }

}

calculator.results.update.IG_allColors = function(w) {

    if(w === 1) {
        $('.IG_p1, .IG_np1').css({'color':'blue'});
        $('.IG_p2').css({'color':'black'});
        $('.IG_np2').css({'color':'red'});
    }

    if(w === 2) {
        $('.IG_p2, .IG_np2').css({'color':'blue'});
        $('.IG_p1').css({'color':'black'});
        $('.IG_np1').css({'color':'red'});
    }

    if(efo2 > 0 && w === 1) {
        $('.IG_np2').css({'color':'red'});
    }

    if(efo1 > 0 && w === 2) {
        $('.IG_np1').css({'color':'red'});
    }

    $('.IG_c1, .IG_c2').css({'color':'red'});

    if(efo1 === 0 && w === 2) {
        $('.IG_np1').css({'color':'black'});
    }

    if(efo2 === 0 && w === 1) {
        $('.IG_np2').css({'color':'black'});
    }

    if(efo1 === 0) {
        $('.IG_c1').css({'color':'black'});
    }

    if(efo2 === 0) {
        $('.IG_c2').css({'color':'black'});
    }

    if(calculator.globalVariable.IG_isIGA || calculator.globalVariable.IG_isIGB) {

        $('.IG_p1, .IG_p2').css({'color':'black'});

        if(efo1 === 0) {
            $('.IG_np1').css({'color':'black'});
        }
        if(efo1 > 0) {
            $('.IG_np1').css({'color':'red'});
        }
        if(efo2 === 0) {
            $('.IG_np2').css({'color':'black'});
        }
        if(efo2 > 0) {
            $('.IG_np2').css({'color':'red'});
        }

    }

    $('.IG_p1, .IG_c1, .IG_np1, .IG_p2, .IG_c2, .IG_np2').css({'font-weight':'500'});

    calculator.results.update.IG_outcomeColors(w)

}

calculator.results.update.IG_allTextAndColors = function(w) {

    if(w === 'undefined') {
        console.log('WARNING WINNER INDEX FOR CALCULATOR.RESULTS.UPDATE.* IS UNDEFINED');
    }

    calculator.results.update.IG_contestText(w);
    calculator.results.update.IG_allColors(w);

}


/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////
/////////////// BUTTONS /////////////////

//----- CALCULATOR BUTTON ------//

calculator.IG_open = function() {

    calculator.section.power.display.IG_barText(false);
    $('.IG_contestSectionMinimize, .IG_contestSectionMinimize2').css({'transition':'0.3s', 'transform-origin':'bottom', 'transform':'scaleY(1)'});
    $('.IG_generalMarginBox').css({'margin-bottom':'0px'});
    calculator.space.IG_contestIsOpen = true;
    calculator.space.IG_contestResultsIsOpen = true;
    calculator.space.update.IG_heights();

}

calculator.IG_close = function() {

    calculator.section.power.display.IG_barText(true);

    $('.IG_contestSectionMinimize, .IG_contestSectionMinimize2').css({'transition':'0.3s', 'transform-origin':'bottom', 'transform':'scaleY(0)'});

    calculator.space.IG_contestIsOpen = false;
    calculator.space.update.IG_heights();

    $('.IG_generalMarginBox').css({'margin-bottom':'-20px'});

}

//------ SUBMIT TOP -----//

calculator.button.IG_activeSubmitButtonAnimation = false;
calculator.button.IG_animate = function(state) {

    if(calculator.button.IG_activeSubmitButtonAnimation) {

        if(state === 0) {
            $('.IG_submitButtonBottomImage2').css({'transition-delay':'1s', 'transition':'3s', 'right':'-100px'});
            setTimeout(()=>calculator.button.IG_animate(1), 1000);
        }

        if(state === 1) {
            $('.IG_submitButtonBottomImage2').css({'transition-delay':'0s', 'transition':'0s', 'right':'58px'});
        }

    } else {
        $('.IG_submitButtonBottomImage2').css({'transition-delay':'0s', 'transition':'0s', 'right':'58px'});
    }

}


//--------- SPIN BOTTOM --------//

calculator.button.display.IG_spinBottom = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.IG_spinImage23').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

}

calculator.button.disable.IG_spinBottom = function() {

    $('.IG_spinImage23').css({'display':'none'});

}

calculator.button.enable.IG_spinBottom = function() {

    $('.IG_spinImage23').css({'display':'inline'});

}


////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////
////////////////////// SECTIONS /////////////////////////


//------------- DISPLAY CALCULATOR ------------------//

calculator.section.all.IG_opacity = function(opt) {

    $('.IG_generalMarginBox').css({'transition':'0.35s', 'opacity' : opt.toString()});

}

calculator.section.all.adjust.IG_decisionSliders = function() {

    if(calculator.globalVariable.IG_playerView) {

        if(calculator.globalVariable.IG_playerIndex === -1) {

            calculator.decisionSlider.leader.IG_disable();

        }

        if(calculator.globalVariable.IG_playerIndex === 0 || calculator.globalVariable.IG_playerIndex === 1) {

            calculator.section.decision.leader.IG_opacity(1)
            calculator.decisionSlider.leader.IG_enable();

        }

    } else {

        calculator.decisionSlider.leader.IG_disable();

    }

    if(calculator.globalVariable.IG_weAreInFeedbackStage) {

        calculator.decisionSlider.leader.IG_disable();

    }

}


//------------- DISPLAY PLAYER DECISION SLIDER -----------------//

calculator.section.decision.leader.IG_opacity = function(opt) {

    $('.IG_decisionWrapL').css({'opacity' : opt.toString()});

}


//--------------- HELP SABOTAGE SECTION  ----------//

calculator.section.hs.display.IG_all = function(show) {

    var d = show ? 'flex' : 'none';

    $('.IG_hsWrap, .IG_ctGhost').css({'display': d});
    calculator.space.IG_hsIsOpen = show;

}


// Leader icon - Fight icon
calculator.section.hs.opacity.IG_LiFi = function(array) {

    calculator.section.hs.opacity.IG_leaderIconsMain(array[0]);
    calculator.section.hs.opacity.IG_fightIcon(array[1]);

}

// Methods used in IG_LIFI
//----//
calculator.section.hs.opacity.IG_leaderIconsMain = function(o) {

    if(o != -1) {

        $('.IG_wrapMid').css({'transition':'0.3s', 'opacity': o.toString()});

    }

    if(o === 1) {
        $('.IG_splc1, .IG_splc2').css({'filter':'drop-shadow(0px 7px 3px black)'});
    } else {
        $('.IG_splc1, .IG_splc2').css({'filter':'drop-shadow(0px 0px 0px transparent)'});
    }

}

calculator.section.hs.opacity.IG_fightIcon = function(o) {

    if(o != -1) {

        $('.IG_imgwrapfight').css({'transition':'0.5s', 'opacity' : o.toString()});

    }

}
//---//

calculator.section.hs.set.IG_iconPosition = function(position) {

    if(position === 'center') {

        $('.IG_OGCIcon').css({'transition':'0.3s', 'margin-top':'-29px'});
        $('.IG_imgwrapfight').css({'transition':'0.3s','margin-left':'0px', 'margin-right':'0px', 'margin-top':'0px'});
        $('.leftFollowerIconMainWrap').css({'transition':'0s','transform':'rotate(0deg)'});
        $('.rightFollowerIconMainWrap').css({'transition':'0s','transform':'rotate(0deg)'});
        $('.IG_fightIcon').css({'transition':'0.5s', 'transform':'rotate(0turn)'});

    }

    if(position == 'bottom') {

        $('.IG_OGCIcon').css({'margin-top':'39px'});
        $('.IG_imgwrapfight').css({'transition':'0.7s','margin-left':'35px', 'margin-right':'35px', 'margin-top':'10px'});
        $('.leftFollowerIconMainWrap').css({'transition':'0.7s','transform':'rotate(10deg)'});
        $('.rightFollowerIconMainWrap').css({'transition':'0.7s','transform':'rotate(-10deg)'});
        $('.IG_fightIcon').css({'transition':'0.5s', 'transform':'rotate(1turn)'});

        if(calculator.globalVariable.IG_isIGA) {
            if(!calculator.globalVariable.IG_ourFollowersAreHetero) {
                $('.IG_OGCIcon').css({'margin-top':'69px'});
            }
        }

        if(calculator.globalVariable.IG_isIGB) {
            if(!calculator.globalVariable.IG_theirFollowersAreHetero) {
                $('.IG_OGCIcon').css({'margin-top':'69px'});
            }
        }


    }

}


//-------------- POWER RATIO ----------------//
//-------------- POWER RATIO ----------------//

calculator.section.power.opacity.IG_bar = function(opt) {

    $('.IG_pWrap').css({'opacity' : opt.toString()});

}

// !! NOT SURE IF THIS SHOULD BE USED OR NOT
calculator.section.power.adjust.IG_space = function() {

    $('.IG_pWrap').css({'transition':'0.3s', 'margin-top':'-54px'});

}


//-------------- CONTEST SECTION ----------------//
//-------------- CONTEST SECTION ----------------//

calculator.section.contest.display.IG_all = function(show) {

    calculator.section.contest.display.IG_sliders(show);
    calculator.section.contest.display.IG_title(show);
    calculator.section.contest.display.IG_results(show);

}

calculator.section.contest.display.IG_sliders = function(show) {

    var display = show ? 'flex' : 'none';

    $('.IG_contestSection').css({'display': display});

    calculator.space.IG_contestIsOpen = show;

    calculator.space.update.IG_heights();

}

calculator.section.contest.display.IG_title = function(show) {

    var display = show ? 'block' : 'none';

    $('.IG_imageWrap23').css({'display': display});

    calculator.space.IG_contestResultsIsOpen = show;

    calculator.space.update.IG_heights();

}

calculator.section.contest.display.IG_results = function(show) {

    var display = show ? 'flex' : 'none';

    $('.IG_payoffWrap').css({'display': display});

    calculator.space.IG_contestResultsIsOpen = show;

    calculator.space.update.IG_heights();

}

// unused second set of leader icons
calculator.section.contest.display.IG_icons = function(show) {

    var opt = show ? '1' : '0';
    var display = show ? 'flex' : 'none'
    $('.IG_OGCIcon2').css({'opacity':opt, 'display':display});

}


///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////
///////////// SET VALUES //////////


calculator.values.set.IG_efforts = function(valueArray) {

    efo1 = valueArray[0];
    efo2 = valueArray[1];

    calculator.values.update.IG_efficiencies();
    calculator.values.update.IG_probability();

}


///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////
///////////// REFRESH ////////////


calculator.refresh.IG_sliders = function() {

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    $('#IG_lSlider1').prop('value', efo1);
    $('#IG_lSlider1').change();

    $('#IG_olSlider1').prop('value', efo2);
    $('#IG_olSlider1').change();

    calculator.graphics.update.IG_effortBar(efo1, 'IG_barl1', ourSide, !showAxis);
    calculator.graphics.update.IG_effortBar(efo2, 'IG_barl2', !ourSide, !showAxis);


    if(calculator.globalVariable.IG_playerView) {

        calculator.decisionSlider.leader.IG_effortBar(efo1, !showAxis);
        $('#IG_dSliderL').prop('value', efo1);
        $('#IG_dSliderL').change();
        calculator.graphics.update.IG_barLabelX('IG_bardl', true);

    }


}

calculator.refresh.IG_values = function() {

    calculator.values.update.IG_efficiencies();
    calculator.values.update.IG_probability();

    calculator.refresh.IG_sliders();

}

calculator.refresh.IG_barXAxis = function() {

    calculator.update.barLabel('IG_barl1', false);
    calculator.update.barLabel('IG_barl2', false);
    calculator.update.barGrid('IG_barl1', false);
    calculator.update.barGrid('IG_barl2', false);

}


//////////////////////// SETUP METHODS //////////////////////////////////
//////////////////////// SETUP METHODS //////////////////////////////////
//////////////////////// SETUP METHODS //////////////////////////////////
//////////////////////// SETUP METHODS //////////////////////////////////
//////////////////////// SETUP METHODS //////////////////////////////////
//////////////////////// SETUP METHODS //////////////////////////////////


calculator.setup.IG = function() {

    // HOVERS ACTIVE
    calculator.globalVariable.IG_aBitOfWaitingIsDone = true;

    //------- SPACING OF CALCULATOR -----//
    calculator.space.IG_hsIsOpen = true;
    calculator.space.IG_powerBarIsOpen = true;
    calculator.space.IG_contestIsOpen = true;
    calculator.space.IG_contestResultsIsOpen = true;
    calculator.globalVariable.IG_contestResultsExist = false;


    //------- CALCULATOR SETUP -------//

    calculator.globalVariable.IG_showDecisionSlider = 0;

    calculator.globalVariable.IG_isOG1 = 0;
    calculator.globalVariable.IG_isOG2 = 0;
    calculator.globalVariable.IG_isIGA = 1;
    calculator.globalVariable.IG_isIGB = 0;


    //------- PLAYER SPECIFIC INFORMATION -------//

    calculator.globalVariable.IG_ourFollowersAreHetero = 1;
    calculator.globalVariable.IG_theirFollowersAreHetero = 1;

    calculator.globalVariable.IG_playerView = 0;
    calculator.globalVariable.IG_playerIndex = 0;


    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//

    calculator.globalVariable.tutorial.IG_weAreInTutorial = 1;
    calculator.globalVariable.tutorial.IG_IGSameColor = 0;
    calculator.globalVariable.tutorial.IG_IGDifferentColor = 1 - calculator.globalVariable.tutorial.IG_IGSameColor;


    //----- AFTER SPIN ACTION SWITCHES ----//

    calculator.globalVariable.display.IG_hsIcons = 1;

    calculator.globalVariable.display.IG_cResults = 1;
    calculator.globalVariable.display.IG_cTitle = 1;
    calculator.globalVariable.display.IG_cButton = 1;


    //----- HOVER SWITCHES ------//

    calculator.globalVariable.hover.IG_cTitle = 1;
    calculator.globalVariable.hover.IG_cButton = 1;

    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//

    calculator.values.set.IG_efforts([20,20]);
    calculator.refresh.IG_sliders();
    calculator.graphics.update.IG_pie();

    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//

    //------ QUESTIONS -----//
    calculator.questions.activate.IG_all([0,0])

    //------ LOCKS -------//
    calculator.lock.IG_activate([0,0]);

    //----- ROLL ------//
    calculator.roll.IG_initiate();

    //----- POINTERS -----//
    calculator.pointers.IG_activate([0, 0]);

    //----- ICONS -----//
    calculator.icons.IG_setAll();
    calculator.section.hs.set.IG_iconPosition('bottom');

    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//

    //-- SETUP TEXT --//
    calculator.titles.update.IG_textAndColor();
    calculator.titles.hs.ghost.IG_text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    calculator.section.all.adjust.IG_decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.IG_allResults();

    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//

    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    //-------- TITLES -------//

    calculator.titles.hs.ghost.IG_show();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.IG_dynamicDisplay = false;
    calculator.section.hs.opacity.IG_LiFi([1,1]);


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    calculator.section.power.opacity.IG_bar(true);
    calculator.section.power.display.IG_barText();


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    //----- GENERAL SETTINGS -----//

    // these display settins simply display none the specific section
    // calculator.section.contest.display.all(true);
    calculator.section.contest.display.IG_sliders(true);
    calculator.section.contest.display.IG_title(true);
    calculator.section.contest.display.IG_results(true);
    calculator.section.contest.display.IG_icons(false);

    //------- RESULTS DISPLAY SETTINGS ------//

    calculator.results.leader.display.IG_investment(true);
    calculator.results.leader.display.IG_prize(true);
    calculator.results.leader.display.IG_netPayoff(true);
    calculator.results.leader.display.IG_role(true);

    //------- BUTTONS ------//

    calculator.button.display.IG_spinBottom(true);
    calculator.button.enable.IG_spinBottom();
    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    // if the subjective index is leader then hiding the contest title will not work by construction
    calculator.titles.contest.IG_show();
    // calculator.titles.contest.hide();

    //------ SLIDERS -------//

    // changes the slider range based on globalVariable.is***
    // calculator.graphics.update.IG_effortSliderRange();
    // changes the leader slider text background color based on globalVariable.is***
    calculator.graphics.update.IG_contestSliderBackgroundColor();


    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//

    //------ REFRESH ------// -> NOT SURE WHEN IT IS NECESSARY TO USE THESE

    calculator.refresh.IG_values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    calculator.refresh.IG_sliders();

    //------ DISPLAY ------//
    $('.IG_generalMarginBox').css({'transition':'0.7s', 'transform':'scale(1)', 'display':'grid'});


    setTimeout(()=> {
        calculator.section.all.IG_opacity(1);
    }
    , 1000);


}

calculator.hide.IG = function() {

    $('.IG_generalMarginBox').css({'transition':'0.3s', 'transform':'scale(0)', 'height':'0'});
    setTimeout(()=>{$('.IG_generalMarginBox').css({'display':'none'})}, 350);

}

calculator.show.IG = function() {
    $('.IG_generalMarginBox').css({'display':'block'});
    setTimeout(()=>{$('.IG_generalMarginBox').css({'transition':'0.3s', 'transform':'scale(1)', 'height':'545px'});}, 150);
}


//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//


calculator.setup.IG();


//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//


calculator.globalVariable.IG_open = true;
$('#IG_calcButtonBottom').click(function() {
    // close calculator
    if(calculator.globalVariable.IG_open) {

        calculator.IG_close();

    }

    // open calculator
    if(!calculator.globalVariable.IG_open) {

        calculator.IG_open();

    }

    calculator.globalVariable.IG_open = 1 - calculator.globalVariable.IG_open;
})


calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;
$('#IG_spinImage23').click(function() {
    if(calculator.globalVariable.IG_bottomSpinButtonIsEnabled) {

        calculator.globalVariable.IG_aBitOfWaitingIsDone = false;

        calculator.wheel.IG_spin();
        calculator.globalVariable.IG_dynamicDisplay = false;


    }
})


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//------- STARTING SETUP --------//
//------- STARTING SETUP --------//
//------- STARTING SETUP --------//
//------- STARTING SETUP --------//
//------- STARTING SETUP --------//


calculator.section.example.horizontal.hide();

calculator.section.example.vertical.hide();



icon.set.stage1();

calculator.hide();

calculator.hide.IG();


/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
/////////////////////////////// BOX METHODS ////////////////////////////////////
var box = {

    set: {},
    show: {},
    hide: {},
    global: {},
    button: {},
    slider: {},
    adjust: {},

}

box.global.previousKey = undefined;
box.global.currentKey = undefined;
box.global.transformedBoxes = [];

box.global.keys = [];

box.global.nextBoxToShow = undefined;

box.global.symmetricHeteroTreatment = false;
box.global.asymmetricHeteroTreatment = false;
box.global.homoTreatment = true;


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
    console.log('height: ' + height);
    if(height === undefined) {
        height = '0px';
    } else {
        height = height + 'px';
    }

    console.log(height);

    var boxbox = '#boxbox-' + key;

    console.log(boxbox);

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

    // console.log(myDiv);

    var myPlace = '#boxbox-' + id.split('-')[1];

    // console.log(myPlace);

    $(myDiv).appendTo(myPlace);

}

box.store = function(id) {

    var myDiv = '#boxwrap-' + id.split('-')[1] + '-' + id.split('-')[2];

    $(myDiv).appendTo('.reviewBox');

}

// need to be used before the transition is made as it is added to the end of the div
box.addSpace = function(id) {

    var key = id.split('-')[1];



    var myBox = '#boxbox-' + key;

    console.log('space is being added to ' + myBox);

    $('<br>').appendTo(myBox);

}

box.show = function(id, addSpaceAbove) {

    var id1, id2, id3;

    // console.log('asdasdasdasda: ' + id);

    id1 = id.split(':')[0];

    id2 = id.split(':')[1];

    if(id2 != undefined) {
        id3 = id1.split('box-')[1];
    }

    // console.log('id: ' + id);
    // console.log('id1: ' + id1);
    // console.log('id2: ' + id2);
    // console.log('id3: ' + id3);


    if(id2 === 'wait') {

        // if this is not undefined then showresult that is called by the wheel
        // will also activate showing the new box
        // and as it shows it, it should make the below global undefined again
        box.global.nextBoxToShow = id3;

    } else {

        if(addSpaceAbove) {

            box.addSpace(id);

        }

        box.global.nextBoxToShow = undefined;

        box.move(id);

        box.set.wrapHeight(id);

        id = '#' + id;

        $(id).css({'transform':'scale(1)'});

        // ADD MOVE IFRAME TO THIS DIV METHOD HERE

    }

}

box.transform = function(idCore, id) {

    var cT, cTCA;

    box.global.transformedBoxes.push(id);
    console.log(box.global.transformedBoxes);

    box.button.hide(idCore);

    $(id).css({'position':'relative', 'background':'transparent', 'border-width':'0px', 'box-shadow':'0px 0px black', 'margin-top':'-30px'});
    cT = $(id).children('div:first');

    console.log(cT);
    $(cT).css({'font-size':'20px'});
    cTCA = $(id).children('div:first').children();

    console.log(cTCA);
    for(var f = 0; f < cTCA.length; f++) {

        $(cTCA[f]).css({'margin-bottom':'-5px'});

    }

    box.global.transformedBoxesStorage = box.global.transformedBoxes;

}

box.global.transformedKey = undefined;

box.flush = function() {

    if(box.global.transformedBoxes.length > 0) {

        box.global.transformedKey = (box.global.transformedBoxes[0]).split('-')[1];

        var id, cT, cTCA;

        id = box.global.transformedBoxes.pop();

        $(id).css({'transition':'1s', 'transform':'scale(0)', 'margin-bottom':'-200px'});
        setTimeout(()=>{

            $(id).css({'transition':'0.5s', 'transition-delay':'2s',
            'position':'absolute', 'background':'rgb(255, 254, 172)',
            'border-width':'4px', 'box-shadow':'0px 2px 5px 1px black',
            'margin-top':'0px',  'margin-bottom':'0px'});

        }, 2000)


        // text div of the div in question
        cT = $(id).children('div:first');
        $(cT).css({'transition':'1s', 'font-size':'25px'});

        // subtext divs of the text div of the div in question
        cTCA = $(id).children('div:first').children();
        for(var f = 0; f < cTCA.length; f++) {

            $(cTCA[f]).css({'transition':'1s', 'margin-bottom':'1rem'});

        }

        // show the button again

        setTimeout(()=>{

            $($($(id).children()[1]).children()).css({'transform':'scale(1)'});

        }, 2000)



        setTimeout(()=>box.flush(), 100);

    } else {

        console.log(box.global.transformedKey);
        var boxWrap = '#boxbox-' + box.global.transformedKey;
        console.log(boxWrap);

        $($(boxWrap).children()).remove('br')
    }


}

box.hide = function(id, transform, moveToReviewBox) {

    var idCore = id.split('box-')[1];

    id = '#' + id;

    if(transform) {

        box.transform(idCore, id);

    } else {

        $(id).css({'transform':'scale(0)'});

    }

    if(moveToReviewBox) {

        setTimeout(()=>{
            box.store(id);
            $(id).css({'transform':'scale(1)'});
        }, 850);

    }

}

//box.transition('A-1', 'A-2:wait', 1, 1, 0)

box.transition = function(id1, id2, transform, addSpaceBetween, hideButton, delay) {

    delay = delay === undefined ? 750 : delay;

    if(hideButton) {

        box.button.hide(id2);

    }

    id1 = 'box-' + id1;
    id2 = 'box-' + id2;

    box.hide(id1, transform);
    setTimeout(()=>box.show(id2, addSpaceBetween), delay);

}

box.button.hide = function(id) {

    id = '#btn-' + id;

    $(id).css({'transform':'scale(0) rotate(1turn)'});

}

box.button.show = function(id) {

    id = '#btn-' + id;

    $(id).css({'transform':'scale(1) rotate(0turn)'});

}

box.global.stopWiggle = true;

box.button.point = function() {
    $('.buttonIndicator').css({'transition':'1s', 'opacity':'1'});
    box.global.stopWiggle = false;
    box.button.wiggle(1);
}

box.button.wiggle = function(state) {
    if(!box.global.stopWiggle) {
        if(state === 0) {
            $('.buttonIndicator').css({'transition':'0.8s', 'top':'-70px'});
            setTimeout(()=>box.button.wiggle(1), 700)
        }
        if(state === 1) {
            $('.buttonIndicator').css({'transition':'1s', 'top':'-60px'});
            setTimeout(()=>box.button.wiggle(0), 700)
        }
    } else {
        $('.buttonIndicator').css({'transition':'1s', 'opacity':'0', 'transform':'scale(0)'});
    }
}

box.slider.point = function() {

    $('.buttonIndicator2').css({'transition':'1s', 'opacity':'1'});
    box.global.stopWiggle = false;
    box.slider.wiggle(1);

}

box.slider.wiggle = function(state) {

    if(!box.global.stopWiggle) {
        if(state === 0) {
            $('.buttonIndicator2').css({'transition':'0.7s', 'left':'220px'});
            setTimeout(()=>box.slider.wiggle(1), 700)
        }
        if(state === 1) {
            $('.buttonIndicator2').css({'transition':'0.7s', 'left':'230px'});
            setTimeout(()=>box.slider.wiggle(0), 700)
        }
    } else {
        $('.buttonIndicator2').css({'transition':'0.3s', 'opacity':'0', 'transform':'scale(0)'});
    }

}


//-------- TREATMENT SETUP FOR MAP AND ICON SORTING AND INFO BOXES --------//
//-------- TREATMENT SETUP FOR MAP AND ICON SORTING AND INFO BOXES --------//
//-------- TREATMENT SETUP FOR MAP AND ICON SORTING AND INFO BOXES --------//

box.set.treatment = function(sH, aH) {

    box.global.symmetricHeteroTreatment = sH;
    box.global.asymmetricHeteroTreatment = aH;

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        icon.globalVariable.bothHomo = true;
        icon.globalVariable.bothHetero = false;
        map.globalVariable.ourSideIsHetero = false;
        map.globalVariable.theirSideIsHetero = false;

    } else if (box.global.symmetricHeteroTreatment) {

        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = true;
        map.globalVariable.ourSideIsHetero = true;
        map.globalVariable.theirSideIsHetero = true;

    } else if (box.global.asymmetricHeteroTreatment) {

        icon.globalVariable.bothHomo = true;
        icon.globalVariable.bothHetero = false;

        if(Math.random() > 0.5) {

            $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});

            // our side is homo
            $('.equalityAdjustment1').css({'margin-top':'12px'});
            $('.equalityAdjustment2').css({'margin-top':'0px'});
            $('.treatmentInfoBoxLeftHomo, .treatmentInfoBoxRightHetero').css({'display':'flex'})
            $('.treatmentInfoBoxLeftHetero, .treatmentInfoBoxRightHomo').css({'display':'none'})
            map.globalVariable.ourSideIsHetero = false;
            map.globalVariable.theirSideIsHetero = true;

        } else {

            $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});

            // our side is hetero
            $('.equalityAdjustment2').css({'margin-top':'12px'});
            $('.equalityAdjustment1').css({'margin-top':'0px'});
            $('.treatmentInfoBoxLeftHomo, .treatmentInfoBoxRightHetero').css({'display':'none'})
            $('.treatmentInfoBoxLeftHetero, .treatmentInfoBoxRightHomo').css({'display':'flex'})
            map.globalVariable.ourSideIsHetero = true;
            map.globalVariable.theirSideIsHetero = false;

        }

    }

    map.treatment()

}

box.adjust.forWinnerAndTreatmentNoTokenIcons = function() {

    if(map.winnerLeaderIndex === 1) {
        // show white icons (right side/their side)
        $('.blackGroup1').css({'display':'none'});
        $('.whiteGroup1').css({'display':'flex'});

        $('.noTokenLeftHomo, .noTokenRightHomo, .noTokenLeftHetero, .noTokenRightHetero').css({'display':'none'});

        if(map.globalVariable.theirSideIsHetero) {
            $('.noTokenRightHetero').css({'display':'flex'});
        } else {
            $('.noTokenRightHomo').css({'display':'flex'});
        }

    }

    if(map.winnerLeaderIndex === 2) {
        // show black icons (left side/ourside)
        $('.blackGroup1').css({'display':'flex'});
        $('.whiteGroup1').css({'display':'none'});

        $('.noTokenLeftHomo, .noTokenRightHomo, .noTokenLeftHetero, .noTokenRightHetero').css({'display':'none'});

        if(map.globalVariable.ourSideIsHetero) {
            $('.noTokenLeftHetero').css({'display':'flex'});
        } else {
            $('.noTokenLeftHomo').css({'display':'flex'});
        }

    }

}

//-------------------------------------------------------------------------//


//-------- DEBUG INITIATION -----------//




//-------------------------------------//

//---- INITIATION ----//

// title.update.text('WELCOME TO THE EXPERIMENT');
//
// title.show();
//
// setTimeout(()=>{
//     box.show('box-I-1');
// },4000);

//---- DEBUG INTIATION ---//
var debug = {
    start: {}
}

debug.start.I = function() {

    title.update.text('WELCOME TO THE EXPERIMENT');

    title.show();

    setTimeout(()=>{
        box.show('box-I-1');
    },3500);

}

debug.start.B = function() {

    // close the introduction info box container
    $('#boxbox-I').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-I').css({'display':'none'});
    }, 300);

    // Transition to the overview
    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('GAME BASICS');
        title.update.size(true);
        title.update.textColor(0, true);

    }, 600)

    setTimeout(()=>{
        // show new title and a segue info box
        box.transition('', 'B-0', 0, 0, 1);
    }, 3500)

    setTimeout(()=>box.button.show('B-0'), 4500);

}

debug.start.B12 = function() {

    $('#boxbox-I').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-I').css({'display':'none'});
    }, 300);

    box.global.symmetricHeteroTreatment = 0;
    box.global.asymmetricHeteroTreatment = 1;

    icon.display.stage1(true);

    // close the box
    box.transition('B-12', '', 0, 0, 1);

    crown.hide();
    crown.stopAnimate = true;

    if(box.global.symmetricHeteroTreatment) {
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = true;
    }

    if(box.global.asymmetricHeteroTreatment) {
        // when both both are false one is randomly determined to be uneven
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = false;
        icon.globalVariable.showUnevenSign = true;
        icon.globalVariable.showUnevenIcon = true;
    }

    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        icon.set.stage1();
        $('.wrap2').css({'transition':'0.3s', 'opacity':'1', 'margin-bottom':'0px'});
        $('.s1Icon').css({'transition':'0.3s','margin-bottom':'-30px'});
    }, 700)

    setTimeout(()=>{
        icon.stage1.animateSort();
    }, 1300)


    if(box.global.symmetricHeteroTreatment) {

        setTimeout(()=>{
            box.transition('', 'B-12_T1_1', 0, 0, 1);
        }, 4200)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('B-12_T1_1');
        }, 6000);

    }


    if(box.global.asymmetricHeteroTreatment) {

        setTimeout(()=>{
            box.transition('', 'B-12_T2_0', 0, 0, 1);
        }, 4200)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('B-12_T2_0');
        }, 6000);

    }

}

debug.start.BCP = function() {

    // close the introduction info box container
    $('#boxbox-I').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-I').css({'display':'none'});
    }, 300);

    // close the introduction info box container
    $('#boxbox-B').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-B').css({'display':'none'});
    }, 300);

    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('BUDGET & CURRENCY');
        title.update.size(true);
        title.update.textColor(-200, true);

    }, 1100)

    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'transition':'0s', 'display':'flex', 'opacity':'0'});
    }, 1400)

    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'transition':'2s', 'margin-bottom':'0px', 'opacity':'1', 'margin-top':'5px'});
    }, 1700)

    setTimeout(()=>{
        // show new title and a segue info box
        box.transition('', 'BCP-1', 0, 0, 1);
    }, 2500)

    setTimeout(()=>box.button.show('BCP-1'), 4000);

}

debug.start.SE = function() {

    // close the introduction info box container
    $('#boxbox-I').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-I').css({'display':'none'});
    }, 300);

    // close the basics info box container
    $('#boxbox-B').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-B').css({'display':'none'});
    }, 300);

    // close the payment info box container
    $('#boxbox-BCP').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-BCP').css({'display':'none'});
        $('#boxbox-SE').css({'display':'block'});
    }, 500);

    title.update.textColor(-2500, true, 30);
    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('OVERVIEW OF GAME SECTIONS');
        title.update.size(true);

    }, 800)


    setTimeout(()=>{
        box.transition('', 'SE-1', 0, 0, 1);
    }, 500)

    setTimeout(()=>{
        box.button.show('SE-1');
    }, 2750)

}

debug.start.SE12 = function() {

    // close the introduction info box container
    $('#boxbox-I').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-I').css({'display':'none'});
    }, 300);

    // close the basics info box container
    $('#boxbox-B').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-B').css({'display':'none'});
    }, 300);

    // close the payment info box container
    $('#boxbox-BCP').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-BCP').css({'display':'none'});
        $('#boxbox-SE').css({'display':'block'});
    }, 500);

    //------------------------------------------------------------------//

    // // homo symm
    box.set.treatment(0,0);
    // // hetero symm
    // box.set.treatment(1,0);
    // // hetero asymm
    // box.set.treatment(0,1);

    //------------------------------------------------------------------//

    // close the box
    box.transition('SE-11', 'SE-12', 1, 0, 1, 750);

    setTimeout(()=>{
        box.flush();
    }, 100);

    title.update.size(false);

    $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'0px',
    'transform':'scale(1)', 'opacity':'1'});

    map.show.initialSetup();

    map.opacity.sectionTitles([1,0,1], 2);



    //------------------------------------------------------------------//

    setTimeout(()=>{

        map.globalVariable.stopHelpSabotageAnimation2 = true;
        map.normalSize.main()
        map.opacity.main([1,1,1], 0.5)
        map.opacity.section([0.1, 1, 0.1], 1);

    }, 100)


    setTimeout(()=>{

        map.opacity.cover([0,0,1], 2);

        $('.OG1FightIcon').css({'transition':'1s', 'opacity':'1', 'margin-top':'5px'});
        $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'1'});

        $('.prizeCrownBlackTop, .prizeCrownBlackBottom').css({'transition':'0s', 'opacity':'0'});
        $('.prizeCrownLimeTop, .prizeCrownLimeBottom').css({'transition':'0s', 'opacity':'0'});

        $('.IGFightIcon').css({'transition':'1s', 'z-index':'2', 'opacity':'0'});
        $('.IGFightIconLimeBottom, .IGFightIconLimeTop').css({'transition':'1s', 'z-index':'2', 'opacity':'0'});

        $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0.5'})
        $('.arrowDashed, .arrowDashedLime1').css({'transition':'1s', 'opacity':'0.5'})
        $('.arrowDashedLime1').css({'transition':'0s', 'opacity':'0'})

    }, 750)


    setTimeout(()=>{

        map.opacity.inside([1,0,0], 1);

    }, 750)


    setTimeout(()=>{

        $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'})
        $('.arrowDashed, .arrowDashedLime1').css({'transition':'1s', 'opacity':'0'})

        map.opacity.inside([1,1,0], 1);
        map.opacity.section([0.1, 0.1, 0.1], 1);

        $('#anotherIdToCall2').css({'transition':'1s', 'opacity':'1'});

    }, 3500)


    setTimeout(()=>{
        box.button.show('SE-12');
    }, 6000)


}

// debug.start.I();
// debug.start.B();
// debug.start.B12();
// debug.start.BCP();
// debug.start.SE();
debug.start.SE12();

//----------------------------------------------------------------------------//
//---------------------------- TREATMENT SETUP -------------------------------//
//----------------------------------------------------------------------------//

box.set.treatment(0,1);

//----------------------------------------------------------------------------//
//----------------------------- INTRODUCTION ---------------------------------//
//----------------------------------------------------------------------------//


$('#btn-I-1').click(function() {

    box.transition('I-1', 'I-2', 0, 0, 1);
    setTimeout(()=>box.button.show('I-2'), 2000);

});

$('#btn-I-2').click(function() {

    box.transition('I-2', 'I-3', 0, 0, 1);
    setTimeout(()=>box.button.show('I-3'), 2000);

});

$('#btn-I-3').click(function() {

    box.transition('I-3', 'I-4', 1, 1, 1);
    setTimeout(()=>box.button.show('I-4'), 2000);

    title.update.textColor(-150, true);

});

$('#btn-I-4').click(function() {

    box.transition('I-4', 'I-5', 1, 1, 1);
    setTimeout(()=>{
        box.button.show('I-5');
        box.button.point();
    }, 2000);

    title.update.textColor(-150, true);

});

$('#btn-I-5').click(function() {

    box.global.stopWiggle = true;

    box.transition('I-5', 'I-6', 1, 1, 1);
    setTimeout(()=>{
        box.button.show('I-6');
        box.button.point();
    }, 2000);

    title.update.textColor(-150, true);

});

$('#btn-I-6').click(function() {

    // close the box
    box.transition('I-6', '', 0, 0, 1);

    // close the former ghost boxes
    setTimeout(()=>{
        box.flush();
        title.hide();
    }, 100);

    // close the introduction info box container
    $('#boxbox-I').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-I').css({'display':'none'});
    }, 300);

    // Transition to the overview
    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('GAME BASICS');
        title.update.size(true);
        title.update.textColor(0, true);

    }, 1200)

    setTimeout(()=>{
        // show new title and a segue info box
        box.transition('', 'B-0', 0, 0, 1);
    }, 2500)

    setTimeout(()=>box.button.show('B-0'), 4000);

});


//----------------------------------------------------------------------------//
//------------------ OVERVIEW OF SECTIONS, ROLES, GROUPS ---------------------//
//----------------------------------------------------------------------------//


$('#btn-B-0').click(function() {

    box.transition('B-0', '', 0, 0, 1);
    title.update.size(false);

    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('GAME MAP');
        title.update.size(true);
        title.update.textColor(-200, true);

    }, 1100)

    setTimeout(()=>{
        map.show.initialSetup();
        map.opacity.main([1,1,1]);
        map.opacity.section([0,0,0]);
    }, 1750)

    setTimeout(()=>box.transition('', 'B-1', 0, 0, 1), 2500);
    setTimeout(()=>{
        box.button.show('B-1');
    }, 3500);

});

$('#btn-B-1').click(function() {

    box.transition('B-1', 'B-2', 0, 0, 1);
    setTimeout(()=>box.transition('', 'B-2', 0, 0, 0), 1500);
    setTimeout(()=>{
        box.button.show('B-2');
    }, 2500);

});

$('#btn-B-2').click(function() {

    box.transition('B-2', '', 0, 0, 1);

    map.opacity.main([0,0,0]);

    setTimeout(()=>{
        map.show.initialSetup();
        map.opacity.main([0,0,0]);
        map.opacity.section([1,1,1])
    }, 500)
    setTimeout(()=>{
        map.animate.rotateSectionsSimple([0,0,0],0,0);
    }, 1500)

    setTimeout(()=>box.transition('', 'B-3', 0, 0, 1), 3000);
    setTimeout(()=>box.button.show('B-3'), 5000);

});

$('#btn-B-3').click(function() {

    box.transition('B-3', '', 0, 0, 1);

    title.update.size(false);

    setTimeout(()=>{
        map.show.bracket();
    }, 500)

    setTimeout(()=>{
        box.transition('', 'B-4', 1, 0, 1);
    }, 1500);

    setTimeout(()=>{
        box.button.show('B-4');
    }, 2500);

});


$('#btn-B-4').click(function() {

    box.transition('B-4', '', 0, 0, 1);
    map.hide.bracket();

    setTimeout(()=>{
        map.induceRoundNumbers = true;
        map.animate.rotateTextandSection();
    }, 500)

    setTimeout(()=>{
        box.transition('', 'B-5', 0, 0, 1);
    }, 8000)

    setTimeout(()=>{
        box.button.show('B-5');
    }, 10500);

})

$('#btn-B-5').click(function() {

    // close the box
    box.transition('B-5', 'B-6', 1, 0, 1);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-6');
    }, 2000);

})

$('#btn-B-6').click(function() {

    // close the box
    box.transition('B-6', 'B-65', 1, 0, 1);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-65');
    }, 2000);

})


$('#btn-B-65').click(function() {

    // close the box
    box.transition('B-65', '', 0, 0, 1);
    map.induceRoundNumbers = false;

    title.update.size(false);

    // close the former ghost boxes
    setTimeout(()=>{
        box.flush();
    }, 100);

    // hide the sections map
    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'-194px',
        'transform':'scale(0)', 'opacity':'0'});
    }, 100)

    // new animation for the new information
    setTimeout(()=>{
        icon.set.stage1();
        $('.wrap2').css({'opacity':'0', 'margin-bottom':'-210px'});
        $('.s1Icon').css({'margin-bottom':'-220px'});
        icon.display.stage1(true);
    }, 1000)

    // show new information
    setTimeout(()=>{
        box.transition('', 'B-7', 0, 0, 1);
    }, 1500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-7');
    }, 3000);

})

$('#btn-B-7').click(function() {

    // close the box
    box.transition('B-7', 'B-8', 1, 0, 1);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-8');
    }, 2000);

})

$('#btn-B-8').click(function() {

    // close the box
    box.transition('B-8', '', 0, 0, 1);

    // new animation for the new information
    setTimeout(()=>{
        $('.wrap2').css({'transition':'0.7s', 'opacity':'1', 'margin-bottom':'0px'});
        $('.s1Icon').css({'transition':'0.7s', 'margin-bottom':'-30px'});
    }, 500)

    setTimeout(()=>{
        icon.globalVariable.genericIcons = true;
        icon.set.stage1();
        icon.stage1.animateSort();
    }, 2200)

    // show new information
    setTimeout(()=>{
        box.transition('', 'B-9', 0, 0, 1);
    }, 5500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-9');
    }, 7500);

})

$('#btn-B-9').click(function() {

    // close the box
    box.transition('B-9', '', 0, 0, 1);

    // // close the former ghost boxes
    // setTimeout(()=>{
    //     box.flush();
    //     title.hide();
    // }, 100);

    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        icon.globalVariable.bothHomo = true;
        icon.globalVariable.bothHetero = false;
        icon.set.stage1();
    }, 300)
    setTimeout(()=>{
        icon.stage1.animateSort();
    }, 1000)

    setTimeout(()=>{
        box.transition('', 'B-10', 0, 0, 1);
    }, 3250)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-10');
    }, 4500);

})

$('#btn-B-10').click(function() {

    // close the box
    box.transition('B-10', '', 0, 0, 1);

    // close the former ghost boxes
    setTimeout(()=>{
        box.flush();
        title.hide();
    }, 100);

    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        // initially we do not mention strong and weak so even if we are in
        // one of the hetero treatments it will be as if it is homo
        icon.globalVariable.bothHomo = 1;
        icon.globalVariable.bothHetero = 0;
        icon.set.stage1();
    }, 700)
    setTimeout(()=>{
        icon.stage1.animateSort(350);
    }, 1300)

    setTimeout(()=>{
        box.transition('', 'B-11', 0, 0, 1);
    }, 3200)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-11');
    }, 5500);

})

$('#btn-B-11').click(function() {

    // close the box
    box.transition('B-11', '', 0, 0, 1);

    $('.wrap2').css({'opacity':'0', 'margin-bottom':'-210px'});
    $('.s1Icon').css({'margin-bottom':'-266px'});

    setTimeout(()=>{
        crown.show();
    }, 750)

    setTimeout(()=>{
        crown.animateDeny();
    }, 1250)


    setTimeout(()=>{
        box.transition('', 'B-12', 0, 0, 1);
    }, 6000)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12');
    }, 10000);

})

//////// WARNING TREATMENT INFO BOX SWITCHES ////////

// box.global.symmetricHeteroTreatment = 1;
// box.global.asymmetricHeteroTreatment = 0;

//////// WARNING TREATMENT INFO BOX SWITCHES ////////

$('#btn-B-12').click(function() {

    // close the box
    box.transition('B-12', '', 0, 0, 1);

    crown.hide();
    crown.stopAnimate = true;

    if(box.global.symmetricHeteroTreatment) {
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = true;
    }

    if(box.global.asymmetricHeteroTreatment) {
        // when both both are false one is randomly determined to be uneven
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = false;
        icon.globalVariable.showUnevenSign = true;
        icon.globalVariable.showUnevenIcon = true;
    }

    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        icon.set.stage1();
        $('.wrap2').css({'transition':'0.3s', 'opacity':'1', 'margin-bottom':'0px'});
        $('.s1Icon').css({'transition':'0.3s','margin-bottom':'-30px'});
    }, 700)

    setTimeout(()=>{
        icon.stage1.animateSort();
    }, 1300)


    if(box.global.symmetricHeteroTreatment) {

        setTimeout(()=>{
            box.transition('', 'B-12_T1_1', 0, 0, 1);
        }, 3750)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('B-12_T1_1');
        }, 6000);

    }


    if(box.global.asymmetricHeteroTreatment) {

        setTimeout(()=>{
            box.transition('', 'B-12_T2_0', 0, 0, 1);
        }, 3750)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('B-12_T2_0');
        }, 6000);

    }


})

//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//

$('#btn-B-12_T1_1').click(function() {

    // close the box
    box.transition('B-12_T1_1', '', 1, 0, 1);


    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = true;
        icon.set.stage1();
    }, 700)
    setTimeout(()=>{
        icon.stage1.animateSort(350);
    }, 1300)

    setTimeout(()=>{
        box.transition('', 'B-12_T1_2', 0, 0, 1);
    }, 3200)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T1_2');
    }, 5000);

})

$('#btn-B-12_T1_2').click(function() {

    // close the box
    box.transition('B-12_T1_2', '', 0, 0, 1);

    setTimeout(()=>{
        box.flush();
    }, 200);

    setTimeout(()=>{
        // hide sorting graphics
        $('.wrap2').css({'opacity':'0', 'margin-bottom':'-210px'});
        // $('.s1Icon').css({'margin-bottom':'-266px'});
        $('.s1Icon').css({'margin-bottom':'-330px'});
    }, 300);

    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('GAME MAP');
        title.update.size(true);
        title.update.textColor(-200, true);

    }, 750)

    // show map
    map.opacity.main([0,0,0]);
    map.opacity.section([1,1,1])

    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'0px',
        'transform':'scale(1)', 'opacity':'1'});
    }, 1750)

    setTimeout(()=>{
        map.show.initialSetup();
        map.opacity.main([0,0,0], 0);
    }, 1950)

    setTimeout(()=>{
        map.show.initialSetup();
        map.opacity.main([1,1,1], 1);
    }, 2000)

    setTimeout(()=>{
        map.show.initialSetup();
        map.opacity.main([0.3,1,0.3], 3);
        map.opacity.section([0.5,1,0.5], 3);
    }, 3000)

    setTimeout(()=>{
        box.transition('', 'B-12_T1_3', 0, 0, 1);
    }, 3500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T1_3');
    }, 5000);

})

$('#btn-B-12_T1_3').click(function() {

    // close the box
    box.transition('B-12_T1_3', '', 0, 0, 1);

    setTimeout(()=>{
        box.flush();
    }, 100);

    // show map
    map.opacity.main([0,0,0]);

    // hide the sections map
    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'-194px',
        'transform':'scale(0)', 'opacity':'0'});
    }, 100)

    title.update.size(false);

    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('BUDGET & CURRENCY');
        title.update.size(true);
        title.update.textColor(-200, true);

    }, 1100)

    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'transition':'0s', 'display':'flex', 'opacity':'0'});
    }, 1400)

    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'transition':'2s', 'margin-bottom':'0px', 'opacity':'1', 'margin-top':'5px'});
    }, 1700)

    // close the introduction info box container
    $('#boxbox-B').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-B').css({'display':'none'});
    }, 300);


    setTimeout(()=>{
        box.transition('', 'BCP-1', 0, 0, 1);
    }, 2500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('BCP-1');
    }, 4000);

})

//-------------- ASYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- ASYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- ASYMMETRIC HETERO FOLLOWERS ------------------//

$('#btn-B-12_T2_0').click(function() {

    // close the box
    box.transition('B-12_T2_0', '', 1, 0, 1);

    box.transition('', 'B-12_T2_1', 0, 0, 1);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T2_1');
    }, 3000);

})

$('#btn-B-12_T2_1').click(function() {

    // close the box
    box.transition('B-12_T2_1', '', 1, 0, 1);

    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        icon.set.stage1();
    }, 700)
    setTimeout(()=>{
        icon.stage1.animateSort(350);
    }, 1300)

    setTimeout(()=>{
        box.transition('', 'B-12_T2_2', 0, 0, 1);
    }, 3200)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T2_2');
    }, 5000);

})

$('#btn-B-12_T2_2').click(function() {

    // close the box
    box.transition('B-12_T2_2', '', 1, 0, 1);

    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        icon.set.stage1();
    }, 700)
    setTimeout(()=>{
        icon.stage1.animateSort(350);
    }, 1300)

    setTimeout(()=>{
        box.transition('', 'B-12_T2_3', 0, 0, 1);
    }, 3200)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T2_3');
    }, 5000);

})

$('#btn-B-12_T2_3').click(function() {

    // close the box
    box.transition('B-12_T2_3', '', 0, 0, 1);

    setTimeout(()=>{
        box.flush();
    }, 200);

    setTimeout(()=>{
        // hide sorting graphics
        $('.wrap2').css({'opacity':'0', 'margin-bottom':'-210px'});
        // $('.s1Icon').css({'margin-bottom':'-266px'});
        $('.s1Icon').css({'margin-bottom':'-330px'});
    }, 300);

    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('GAME MAP');
        title.update.size(true);
        title.update.textColor(-200, true);

    }, 750)

    // show map
    map.opacity.main([0,0,0]);
    map.opacity.section([1,1,1])

    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'0px',
        'transform':'scale(1)', 'opacity':'1'});
    }, 1750)

    setTimeout(()=>{
        map.show.initialSetup();
        map.opacity.main([0,0,0], 0);
    }, 1950)

    setTimeout(()=>{
        map.show.initialSetup();
        map.opacity.main([1,1,1], 1);
    }, 2000)

    setTimeout(()=>{
        map.opacity.main([0.3,1,0.3], 3);
        map.opacity.section([0.1,1,0.1], 3)
    }, 3000)

    setTimeout(()=>{
        box.transition('', 'B-12_T2_4', 0, 0, 1);
    }, 3500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T2_4');
    }, 5000);

})

$('#btn-B-12_T2_4').click(function() {

    // close the box
    box.transition('B-12_T2_4', '', 0, 0, 1);

    // close the former ghost boxes
    setTimeout(()=>{
        box.flush();
    }, 100);

    // show map
    map.opacity.main([0,0,0]);

    // hide the sections map
    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'-250px',
        'transform':'scale(0)', 'opacity':'0'});
    }, 100)

    title.update.size(false);

    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('BUDGET & CURRENCY');
        title.update.size(true);
        title.update.textColor(-200, true);

    }, 1100)

    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'transition':'0s', 'display':'flex', 'opacity':'0'});
    }, 1400)

    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'transition':'2s', 'margin-bottom':'0px', 'opacity':'1', 'margin-top':'5px'});
    }, 1700)

    // close the introduction info box container
    $('#boxbox-B').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-B').css({'display':'none'});
    }, 300);

    setTimeout(()=>{
        box.transition('', 'BCP-1', 0, 0, 1);
    }, 2500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('BCP-1');
    }, 4000);

})

//----------------------------------------------------------------------------//
//------------------------ PAYMENT AND CURRENCY ------------------------------//
//----------------------------------------------------------------------------//

$('#btn-BCP-1').click(function() {

    title.update.size(false);

    // close the box
    box.transition('BCP-1', 'BCP-2', 1, 0, 1);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('BCP-2');
    }, 2000);

})

$('#btn-BCP-2').click(function() {

    title.update.size(false);

    // close the box
    box.transition('BCP-2', 'BCP-3', 1, 1, 1);

    $('.currencyRelatedWrap').css({'transition':'1s', 'margin-top':'-250px', 'opacity':'0', 'transform':'scaleY(0)'});
    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'transition':'0.5s', 'transform':'scaleY(0)'});
    }, 100)


    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'display':'none'})
    }, 1000)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('BCP-3');
    }, 2500);

})

$('#btn-BCP-3').click(function() {

    title.update.size(false);

    // close the box
    box.transition('BCP-3', 'BCP-4', 1, 1, 1);

    $('.yoket1').css({'transition':'0.5s', 'opacity':'0'});
    setTimeout(()=>{
        $('.yoket1').css({'display':'none'});
    }, 500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('BCP-4');
    }, 2000);

})

$('#btn-BCP-4').click(function() {

    title.update.size(false);

    // close the box
    box.transition('BCP-4', 'BCP-5', 1, 1, 1);

    $('.yoket2').css({'transition':'0.5s', 'opacity':'0'});
    setTimeout(()=>{
        $('.yoket2').css({'display':'none'});
    }, 500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('BCP-5');
    }, 2000);

})

$('#btn-BCP-5').click(function() {

    title.update.size(false);

    // close the box
    box.transition('BCP-5', '', 0, 0, 1);

    setTimeout(()=>{
        box.flush();
    }, 100);

    setTimeout(()=>{
        map.show.initialSetup();
        map.opacity.main([1,1,1], 1);
        map.opacity.section([1,1,1], 1);
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'0px',
        'transform':'scale(1)', 'opacity':'1'});
        $('.netPayoffResultsTutorial').css({'transition':'0.3s', 'margin-top':'15px', 'margin-bottom':'-330px'});
    }, 1000)

    setTimeout(()=>{
        map.opacity.section([0,0,0], 1);
    }, 2000)

    setTimeout(()=>{
        $('.newRound').css({'transition':'0s', 'margin-top':'-270px', 'margin-left':'35px'});
        setTimeout(()=>{
            map.animate.showPayoffs2()
        }, 100)
    },3000)


    setTimeout(()=>{
        box.transition('', 'BCP-6', 0, 0, 1);
    }, 12000);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('BCP-6');
    }, 13500);

})

$('#btn-BCP-6').click(function() {

    title.update.size(false);

    // close the box
    box.transition('BCP-6', '', 0, 0, 1);


    setTimeout(()=>{
        map.animate.showPayoffs3();
    }, 1000)


    setTimeout(()=>{
        box.transition('', 'BCP-7', 0, 0, 1);
    }, 8000);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('BCP-7');
    }, 10000);

})

$('#btn-BCP-7').click(function() {

    title.update.size(false);

    // close the box
    box.transition('BCP-7', '', 0, 0, 1);

    $('.bracketText').css({'display':'none'});


    setTimeout(()=>{
        $('.og2NetPayoffText2, .igNetPayoffText2, .og1NetPayoffText2').css({'transition':'0.3s', 'opacity':'0'});
        map.opacity.section([1,1,1], 0.3);
        $('.netPayoffResultsTutorial').css({'transition':'0.35s', 'margin-bottom':'-473px', 'opacity':'0'});
        setTimeout(()=>{
                $('.netPayoffResultsTutorial').css({'display':'none'});
        }, 400)
    }, 100)


    setTimeout(()=>{
            $('.mapBracket').css({'display':'flex'});
        setTimeout(()=>{
            $('.mapBracket').css({'transition':'0.3s', 'margin-bottom':'0px', 'transform':'scale(1)'});
        }, 100)
        setTimeout(()=>{
            $('.tenTimes').css({'display':'flex'});
            setTimeout(()=>{
                $('.tenTimeText').css({'transition':'0.6s', 'opacity':'1'});
                $('.tenTimes').css({'transition':'0.6s', 'margin-top':'-27px', 'opacity':'1'});
                setTimeout(()=>{
                    $('.tenTimes').css({'transition':'10s', 'transform':'rotate(-10turn)'});
                }, 600)
            }, 100)
        }, 600)
    }, 1500)


    setTimeout(()=>{
        box.transition('', 'BCP-8', 0, 0, 1);
    }, 2500);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('BCP-8');
    }, 3500);

})

$('#btn-BCP-8').click(function() {

    title.update.size(false);

    // close the box
    box.transition('BCP-8', '', 0, 0, 1);

    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'-250px',
        'transform':'scale(0)', 'opacity':'0'});
    }, 100)

    setTimeout(()=>{
        map.hide.bracket();
        setTimeout(()=>{
            $('.tenTimes').css({'transition':'0.3s', 'display':'flex', 'margin-top':'-150px', 'opacity':'0'});
            setTimeout(()=>{
                $('.tenTimes').css({'display':'none'});
            });
        }, 300);
    }, 100);

    setTimeout(()=>{
        $('.wheelOfFortuneText, .wheelOfFortuneArrow').css({'transition':'0.3s', 'opacity':'1'});
        map.display.wheelPayoff();
    },1000)

    setTimeout(()=>{
        map.wheel.setRoundResult(1);
    },2000)


    setTimeout(()=>{
        box.transition('', 'BCP-9', 0, 0, 1);
    }, 2500);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('BCP-9');
    }, 3500);

})


$('#btn-BCP-9').click(function() {

    // close the box
    box.transition('BCP-9', 'BCP-10', 0, 0, 1);

    if(map.globalVariable.showButtonBCP10) {
        setTimeout(()=>{
            box.button.show('BCP-10');
        }, 4000)

    }

})

$('#btn-BCP-10').click(function() {

    // close the box
    box.transition('BCP-10', '', 0, 0, 1);


    map.wheel.spin(3, 30);

})

$('#btn-BCP-11').click(function() {


    map.wheel.spin(1, 10);

    // close the box
    box.transition('BCP-11', 'BCP-12', 0, 0, 1);

    setTimeout(()=>{
        box.button.show('BCP-12');
    }, 2000)

})

$('#btn-BCP-12').click(function() {

    map.wheel.spin(1, 10);

    // close the box
    box.transition('BCP-12', 'BCP-13', 0, 0, 1);

    setTimeout(()=>{
        box.button.show('BCP-13');
    }, 2000)

})

$('#btn-BCP-13').click(function() {

    map.wheel.spin(1, 10);

    // close the box
    box.transition('BCP-13', 'BCP-14', 0, 0, 1);

    setTimeout(()=>{
        box.button.show('BCP-14');
    }, 1000)

})

$('#btn-BCP-14').click(function() {

    setTimeout(()=>{
        map.hide.wheelPayoff();
    }, 200)

    $('#boxbox-BCP').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-BCP').css({'display':'none'});
        $('#boxbox-SE').css({'display':'block'});
    }, 500);

    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('OVERVIEW OF GAME SECTIONS');
        title.update.size(true);
        title.update.textColor(-200, true);

    }, 800)


    // close the box
    box.transition('BCP-14', '', 0, 0, 1);

    title.update.textColor(-2500, true, 30);
    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('OVERVIEW OF GAME SECTIONS');
        title.update.size(true);
    }, 800)

    setTimeout(()=>{
        box.transition('', 'SE-1', 0, 0, 1);
    }, 500)

    setTimeout(()=>{
        box.button.show('SE-1');
    }, 2750)

})

//----------------------------------------------------------------------------//
//--------------------------- SECTIONS OVERVIEW ------------------------------//
//----------------------------------------------------------------------------//

// need to change this and use it within for the asymm treatment
// // homo symm
// box.set.treatment(0,0);
// // hetero symm
// box.set.treatment(1,0);
// // hetero asymm
// box.set.treatment(0,1);

$('#btn-SE-1').click(function() {

    // close the box
    box.transition('SE-1', 'SE-2', 0, 0, 1, 800);

    title.update.textColor(-6000, false, 50);

    setTimeout(()=>{
        box.button.show('SE-2');
    }, 1500)

})

$('#btn-SE-2').click(function() {


    // close the box
    box.transition('SE-2', 'SE-3', 0, 0, 1, 800);

    setTimeout(()=>{
        title.update.size(false);
    }, 100)

    // show map
    map.opacity.main([0,0,0]);
    map.opacity.section([1,1,1], 0);


    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'0px',
        'transform':'scale(1)', 'opacity':'0'});
    }, 400)

    setTimeout(()=>{
        map.show.initialSetup();
        map.opacity.main([0,0,0], 0);
        setTimeout(()=>{
            map.opacity.main([1,0.5,1], 1);
            map.opacity.section([1,1,1], 1.5);
            setTimeout(()=>{
                map.enlarge.main([1.2, 0.6, 1.2], 1.5)
            }, 100)
        },100)
    }, 400)

    setTimeout(()=>{
        map.opacity.section([0.05,1,0.05], 2);
        map.opacity.cover([1,0,1], 2.5);
        $('.someTextWrapForSomeSmallBusiness').css({'transition':'1.5s', 'opacity':'1'})
    }, 2250)

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
    }, 1000)



    setTimeout(()=>{
        $('.someTinyTinyClass2').css({'transition':'0.75s', 'opacity':'1'})
    }, 1500)


    setTimeout(()=>{
        box.button.show('SE-5');
    }, 3000)

})

$('#btn-SE-5').click(function() {


    // close the box
    box.transition('SE-5', 'SE-6', 0, 0, 1, 500);

    setTimeout(()=>{
        $('.OG1LeadersIcon').css({'transition':'0.5s', 'margin-right':'0px', 'margin-top':'2px',
        'transform-origin':'bottom', 'transform':'scale(1)'})
    }, 50)

    setTimeout(()=>{
        $('.OG1LeadersIcon').css({'transition':'0.5s', 'opacity':'0.4'})
        $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'0.5s', 'opacity': '1'});

        map.globalVariable.colorCounter2 = 0;
        map.globalVariable.colorCounter = 1;
        map.globalVariable.stopArrowColorAnimation = 1;
        setTimeout(()=>{
            map.globalVariable.stopArrowColorAnimation = 0;
            map.globalVariable.delay1 = 1250;
            map.globalVariable.delay2 = 1500;
            setTimeout(()=>{
                if(map.globalVariable.colorCounter2 < 5) {
                    map.animate.arrowColor(2);
                }
            }, 5)
        }, 1000)

    }, 50)


    setTimeout(()=>{
            box.transition('', 'SE-6', 0, 0, 1);
    }, 100)


    setTimeout(()=>{
        box.button.show('SE-6');
    }, 4500)

})

$('#btn-SE-6').click(function() {

    // close the box
    box.transition('SE-6', 'SE-61', 1, 1, 1);

    $('.OG1LeadersIcon').css({'transition':'0.5s', 'opacity':'1'})
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '0.7'});

    map.globalVariable.colorCounter2 = 0;
    map.globalVariable.colorCounter = 0;
    map.globalVariable.stopArrowColorAnimation = 1;
    setTimeout(()=>{
        map.globalVariable.stopArrowColorAnimation = 0;
        map.globalVariable.delay1 = 1250;
        map.globalVariable.delay2 = 1500;
        setTimeout(()=>{
            if(map.globalVariable.colorCounter2 < 5) {
                map.animate.arrowColor(1);
            }
        }, 100)
    }, 1000)

    setTimeout(()=>{
        box.button.show('SE-61');
    }, 4000)

})

var someFunction1 = function() {
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.15s', 'opacity': '1'});
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'0.15s', 'opacity': '1'});
    $('.OG1GroupSeparator').css({'transition':'0.15s', 'opacity':'1', 'height':'119px'});
    $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.15s', 'opacity':'0'});
    $('.s2PassiveFollower').css({'transition':'0.15s', 'opacity':'1'})
    $('.s2ActiveFollower').css({'transition':'0.15s', 'opacity':'0'});
    $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.15s', 'opacity':'0.5'});
    map.opacity.inside([0,0,0], 0.1);
}
$('#btn-SE-61').click(function() {

    // close the box
    box.transition('SE-61', '', 0, 0, 1);

    setTimeout(()=>{
        box.flush();
        map.globalVariable.stopArrowColorAnimation = true;
    }, 100)

    map.opacity.inside([0,0,0], 0.1);
    setTimeout(()=>{
        someFunction1();
        setTimeout(()=>{
            someFunction1();
            setTimeout(()=>{
                someFunction1();
            }, 250)
        }, 250)
    }, 1050)

    setTimeout(()=>{
        map.opacity.inside([1,0,0], 0.3);
    }, 2800)
    setTimeout(()=>{
        $('.OG1GroupSeparator').css({'display':'none'});
        map.animate.helpSabotage2(0);
    }, 2800)

    setTimeout(()=>{
        box.transition('', 'SE-7', 0, 0, 1);
        setTimeout(()=>{
            $('.leftSideStep1Text, .middleStep2Text, .rightSideStep1Text').css({'transition':'1s', 'opacity':'0.3', 'filter':'grayscale(1)'});
        }, 2500)
    }, 1)

    setTimeout(()=>{
        box.button.show('SE-7');
    }, 5500)

})

$('#btn-SE-7').click(function() {

    // close the box
    box.transition('SE-7', 'SE-8', 1, 0, 1);

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

    setTimeout(()=>{
        $('.additionalStep1Class').css({'margin-top':'-31px',
        'margin-left':'46px', 'margin-bottom':'-7px', 'transform':'scale(0.7)'});
    }, 200)

    setTimeout(()=>{
        box.button.show('SE-10');
    }, 3000)

})

$('#btn-SE-10').click(function() {

    // close the box
    box.transition('SE-10', 'SE-11', 0, 0, 1);

    setTimeout(()=>{
        box.button.show('SE-11');
    },3000)

})

$('#btn-SE-11').click(function() {

    // close the box
    box.transition('SE-11', 'SE-12', 1, 1, 1, 750);

    setTimeout(()=>{

        box.flush();

    }, 100);


    setTimeout(()=>{

        map.globalVariable.stopHelpSabotageAnimation2 = true;
        map.normalSize.main()
        map.opacity.main([1,1,1], 0.5)
        map.opacity.section([0.1, 2, 0.1], 1);

    }, 100)


    setTimeout(()=>{

        map.opacity.cover([0,0,1], 2);

        $('.OG1FightIcon').css({'transition':'1s', 'opacity':'1', 'margin-top':'5px'});
        $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'1'});

        $('.prizeCrownBlackTop, .prizeCrownBlackBottom').css({'transition':'0s', 'opacity':'0'});
        $('.prizeCrownLimeTop, .prizeCrownLimeBottom').css({'transition':'0s', 'opacity':'0'});

        $('.IGFightIcon').css({'transition':'1s', 'z-index':'2', 'opacity':'0'});
        $('.IGFightIconLimeBottom, .IGFightIconLimeTop').css({'transition':'1s', 'z-index':'2', 'opacity':'0'});

        $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0.5'})
        $('.arrowDashed, .arrowDashedLime1').css({'transition':'1s', 'opacity':'0.5'})
        $('.arrowDashedLime1').css({'transition':'0s', 'opacity':'0'})

    }, 750)


    setTimeout(()=>{

        map.opacity.inside([1,0,0], 1);

    }, 750)


    setTimeout(()=>{

        $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'})
        $('.arrowDashed, .arrowDashedLime1').css({'transition':'1s', 'opacity':'0'})

        map.opacity.inside([1,1,0], 1);

        map.opacity.section([0.1, 0.1, 0.1], 1);

        $('#anotherIdToCall2').css({'transition':'1s', 'opacity':'1'});

    }, 3500)


    setTimeout(()=>{
        box.button.show('SE-12');
    }, 6000)


})

$('#btn-SE-12').click(function() {

    if (box.global.asymmetricHeteroTreatment) {
        box.set.treatment(0,1);
    }

    // close the box
    box.transition('SE-12', 'SE-13', 1, 1, 1, 500);

    $('#anotherIdToCall2').css({'transition':'0.5s', 'margin-left':'530px', 'margin-top':'-67px'})

    $('.prizeCrownLimeBottom, .prizeCrownLimeTop').css({'transition':'0s', 'margin-top':'-40px'});
    $('.prizeCrownBlackTop, .prizeCrownBlackBottom').css({'transition':'0s', 'margin-top':'-40px'});

    setTimeout(()=>{
        $('.IGFightIcon').css({'transition':'2s', 'z-index':'2', 'opacity':'1'});
        $('.IGFightIconLimeBottom, .IGFightIconLimeTop').css({'transition':'2s', 'z-index':'2', 'opacity':'1'});
        map.animate.kingIcons(0);
    }, 1500)

    setTimeout(()=>{
        box.button.show('SE-13');
    }, 5000)

})

$('#btn-SE-13').click(function() {

    if (box.global.asymmetricHeteroTreatment) {
        box.set.treatment(0,1);
    }

    // close the box
    box.transition('SE-13', 'SE-14', 1, 0, 1, 750);

    $('.someWrapForKingIcons').css({'margin-left':'639px'});
    $('#someInfoBoxId').css({'margin-left':'126px', 'margin-top':'-56px'});

    setTimeout(()=>{
        map.opacity.sectionTitles([0,1,0], 2);
        setTimeout(()=>{
            $('#anotherIdToCall').css({'transition':'1.5s', 'opacity':'1'})
        }, 1000)
    },1000)

    setTimeout(()=>{
        box.button.show('SE-14');
    }, 3000)

})

$('#btn-SE-14').click(function() {

    setTimeout(()=>{
        map.opacity.sectionTitles([1,1,1], 2);
    }, 100)


    setTimeout(()=>{
        box.flush();
    }, 100)

    // close the box
    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment){

        box.transition('SE-14', 'SE-15', 0, 0, 1, 750);
        setTimeout(()=>{
            box.button.show('SE-15');
        }, 3000)

    } else if(box.global.symmetricHeteroTreatment) {

        box.transition('SE-14', 'SE-15A', 0, 0, 1, 750);
        $('.someWrapForKingIcons').css({'margin-left':'444px'});
        setTimeout(()=>{
            $('#anotherIdToCall3').css({'transition':'2s', 'opacity':'1'});
        }, 2000)
        setTimeout(()=>{
            box.button.show('SE-15A');
        }, 4000)

    } else if(box.global.asymmetricHeteroTreatment) {

        $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});
        if(map.globalVariable.ourSideIsHetero) {
            $('.equalityAdjustment2').css({'display':'none'});
        }
        if(map.globalVariable.theirSideIsHetero){
            $('.equalityAdjustment1').css({'display':'none'});
        }

        $('.someWrapForKingIcons').css({'margin-left':'444px'});
        setTimeout(()=>{
            $('#anotherIdToCall3').css({'transition':'2s', 'opacity':'1'});
        }, 2000)
        box.transition('SE-14', 'SE-15B1', 0, 0, 1, 750);
        setTimeout(()=>{
            box.button.show('SE-15B1');
        }, 3000)

    }

})

//--------------------- HOMO FOLLOWERS -----------------------//
//--------------------- HOMO FOLLOWERS -----------------------//
//--------------------- HOMO FOLLOWERS -----------------------//

$('#btn-SE-15').click(function() {

        box.transition('SE-15', 'SE-16', 0, 0, 1, 750);

        $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'10s', 'transform':'rotate3d(3,2,1, 36000deg)'});

        setTimeout(()=>{
            box.button.show('SE-16');
        }, 3000)

})

//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//

$('#btn-SE-15A').click(function() {

        box.transition('SE-15A', 'SE-16', 0, 0, 1, 750);

        $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'5s', 'transform':'rotate3d(3,2,1, 18000deg)'});

        map.globalVariable.stopKingIconAnimation = true;

        setTimeout(()=>{
            box.button.show('SE-16');
        }, 4500)

})

//-------------- ASYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- ASYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- ASYMMETRIC HETERO FOLLOWERS ------------------//

$('#btn-SE-15B1').click(function() {

        box.transition('SE-15B1', 'SE-15B2', 0, 0, 1, 750);

        $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});
        if(map.globalVariable.ourSideIsHetero) {
            $('.equalityAdjustment1').css({'display':'none'});
        }
        if(map.globalVariable.theirSideIsHetero){
            $('.equalityAdjustment2').css({'display':'none'});
        }

        setTimeout(()=>{
            $('#anotherIdToCall4').css({'transition':'2s', 'opacity':'1'});
        }, 2000)

        setTimeout(()=>{
            box.button.show('SE-15B2');
        }, 3000)

})

$('#btn-SE-15B2').click(function() {

        box.transition('SE-15B2', 'SE-16', 0, 0, 1, 750);

        $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'5s', 'transform':'rotate3d(3,2,1, 18000deg)'});

        map.globalVariable.stopKingIconAnimation = true;

        map.globalVariable.ourSideIsHetero = true;
        map.globalVariable.theirSideIsHetero = false;
        map.treatment();

        setTimeout(()=>{
            box.button.show('SE-16');
        }, 4500)

})

//--------------------- CONVERGENCE -----------------------//
//--------------------- CONVERGENCE -----------------------//
//--------------------- CONVERGENCE -----------------------//

$('#btn-SE-16').click(function() {

    box.transition('SE-16', 'SE-17', 0, 0, 1, 750);

    setTimeout(()=>{
        $('#anotherIdToCall6').css({'transition':'1s', 'opacity':'1'})
    }, 2750)

    setTimeout(()=>{
        map.animate.og1Results(750, 1);
    }, 1250)

    setTimeout(()=>{
        box.button.show('SE-17');
    }, 5000)

})

$('#btn-SE-17').click(function() {

    box.transition('SE-17', 'SE-17A1', 0, 0, 1, 750);

    map.reset.og1Results();
    setTimeout(()=>{
        map.animate.og1Results(750, 2);
    }, 750)

    setTimeout(()=>{
        $('#anotherIdToCall11').css({'transition':'2s', 'opacity':'1'});
    }, 3000)

    setTimeout(()=>{
        box.button.show('SE-17A1');
    }, 5250)

})

$('#btn-SE-17A1').click(function() {

    box.transition('SE-17A1', 'SE-17A2', 0, 0, 1, 750);

    setTimeout(()=>{
        map.opacity.bottom(0);
    }, 3000)

    setTimeout(()=>{
        box.button.show('SE-17A2');
    }, 4500)

})

$('#btn-SE-17A2').click(function() {

    box.transition('SE-17A2', 'SE-18', 0, 0, 1, 750);

    setTimeout(()=>{
        $('#anotherIdToCall7').css({'transition':'1s', 'opacity':'1'})
    }, 1250)

    setTimeout(()=>{
        box.adjust.forWinnerAndTreatmentNoTokenIcons()
        $('#anotherIdToCall5').css({'transition':'1s', 'opacity':'1'})
    }, 2250)

    setTimeout(()=>{
        box.button.show('SE-18');
    }, 3250)

})

$('#btn-SE-18').click(function() {

    box.transition('SE-18', 'SE-19', 0, 0, 1, 750);

    map.opacity.cover([0,0,0], 3);

    map.hide.og2_all();

    setTimeout(()=>{
        $('#anotherIdToCall8').css({'transition':'1s', 'opacity':'1'})
    }, 2000)

    setTimeout(()=>{
        map.show.og2_leftFollower1();
        setTimeout(()=>{
            map.opacity.OG1Icons(0.8);
            map.show.og2_leftFollower1CAT();
        }, 1000)
    }, 2000)

    setTimeout(()=>{
        box.button.show('SE-19');
    }, 4500)

})

$('#btn-SE-19').click(function() {

    box.transition('SE-19', 'SE-20', 0, 0, 1, 3500);

    map.hide.og2_leftFollower1CAT();
    map.opacity.OG1Icons(0);

    setTimeout(()=>{
        map.winnerFollowerIndex = 1;
        map.animate.validateIG();
    }, 500)


    setTimeout(()=>{
        box.button.show('SE-20');
    }, 5000)

})

$('#btn-SE-20').click(function() {

    box.transition('SE-20', 'SE-21', 0, 0, 1, 750);


    setTimeout(()=>{
        map.show.og2_leftLeader()
        setTimeout(()=>{
            map.opacity.OG1Icons(1);
            map.show.og2_leftLeaderCAT()
        }, 1000)
    }, 2000)


    setTimeout(()=>{
        box.button.show('SE-21');
    }, 4500)

})

$('#btn-SE-21').click(function() {

    box.transition('SE-21', 'SE-22', 0, 0, 1, 750);
    map.hide.og2_leftLeaderCAT()

    setTimeout(()=>{
        map.show.og2_leftFollower2()
        setTimeout(()=>{
            map.show.og2_leftFollower2CAT()
        }, 1000)
    }, 2000)


    setTimeout(()=>{
        box.button.show('SE-22');
    }, 4500)

})

$('#btn-SE-22').click(function() {

    box.transition('SE-22', 'SE-23', 0, 0, 1, 750);
    map.hide.og2_leftFollower2CAT()

    setTimeout(()=>{
        $('#anotherIdToCall9').css({'transition':'1s', 'opacity':'1'})
    }, 1000)

    setTimeout(()=>{
        $('#anotherIdToCall10').css({'transition':'1s', 'opacity':'1'})
        if(map.globalVariable.theirSideIsHetero) {
            $('.noTokenRightHomo2').css({'display':'none'});
            $('.noTokenRightHetero2').css({'display':'flex'});
        } else {
            $('.noTokenRightHomo2').css({'display':'flex'});
            $('.noTokenRightHetero2').css({'display':'none'});
        }
    }, 2000)

    setTimeout(()=>{
        box.button.show('SE-23');
    }, 3500)

})

//--------------------------------------------------------------//
/*
// TO BE USED IN THE RELATED BOX BUTTON

// //---- TRANSITION TO SLIDER SECTION ----//
// box.button.btn_d6_listenerOn = false;
// box.button.btn_d62_listenerOn = false;
// // enable lock
// setTimeout(()=>{
//     calculator.section.example.horizontal.show();
//     calculator.lock.activate([1, 1, 1, 1, 1, 1]);
//     // open a listener for hover to show the button after hover
//     box.button.btn_d6_listenerOn = true;
// }, 2000);
//
// setTimeout(()=>{
//     box.transition('', 'D-6', 0, 0, 1);
// }, 3000);
//
// // enable wrapping arrows indicating the slider
// setTimeout(()=>{
//     box.button.btn_d62_listenerOn = true;
//     box.slider.point();
//     // open a listener for hover to hide arrowr
// }, 5000);

$('#btn-D-6').click(function() {

    box.transition('D-6', 'D-7', 0, 0, 1);
    setTimeout(()=>box.button.show('D-7'), 2000);

});


$('#btn-D-7').click(function() {

    box.transition('D-7', 'D-8', 1, 1, 1);
    setTimeout(()=>box.button.show('D-8'), 2000);

});


$('#btn-D-8').click(function() {

    box.transition('D-8', 'D-9', 1, 1, 1);
    setTimeout(()=>box.button.show('D-9'), 2000);

});


box.button.btn_d10_listenerOn = false;
$('#btn-D-9').click(function() {

    box.transition('D-9', '', 0, 0, 1);
    setTimeout(()=>box.flush(), 100);

    // setTimeout(()=>box.button.show('D-10'), 2000);

    setTimeout(()=>{

        box.transition('', 'D-10', 0, 0, 1);
        calculator.lock.activate([0, 0, 0, 0, 0, 0]);
        calculator.pointers.activate([1,1,1,1,1,1]);

    }, 1000);

    box.button.btn_d10_listenerOn = true;

});


box.button.btn_d11_listenerOn = false;
$('#btn-D-10').click(function() {

    box.transition('D-10', 'D-11', 0, 0, 1);
    box.button.btn_d11_listenerOn = true;
    // setTimeout(()=>box.button.show('D-11'), 2000);

});


$('#btn-D-11').click(function() {

    box.transition('D-11', '', 0, 0, 1);
    setTimeout(()=>calculator.section.example.horizontal.hide(), 1000);
    setTimeout(()=>{
        calculator.section.example.vertical.show();
        calculator.lock.activate([1, 1, 1, 1, 1, 1]);
    }, 2000);
    setTimeout(()=>box.transition('', 'D-12', 0, 0, 1), 3000);
    setTimeout(()=>box.button.show('D-12'), 5000);

});


box.button.btn_d13a_listenerOn = false;
box.button.btn_d13b_listenerOn = false;
$('#btn-D-12').click(function() {

    box.transition('D-12', 'D-13', 0, 0, 1);

    // setTimeout(()=>box.button.show('D-13'), 2000);
    box.button.btn_d13a_listenerOn = true;
    box.button.btn_d13b_listenerOn = true;
    calculator.lock.activate([0, 0, 0, 0, 0, 0]);
    setTimeout(()=>calculator.pointers.activate([1,1,1,1,1,1]), 500)

});


box.button.btn_d14_listenerOn = false;
$('#btn-D-13').click(function() {

    box.transition('D-13', 'D-14', 1, 1, 1);

    // setTimeout(()=>box.button.show('D-14'), 2000);
    box.button.btn_d14_listenerOn = true;
    calculator.lock.activate([0, 0, 0, 0, 0, 0]);
    setTimeout(()=>calculator.pointers.activate([1,1,1,1,1,1]), 500)

});

// Transition away from the slider section use this below code
// box id needs to be different
// $('#btn-O-14').click(function() {
//
//     box.transition('O-14', '', 0, 0, 1);
//
//     setTimeout(()=>box.flush(), 500);
//
//
//     setTimeout(()=>{
//         calculator.section.example.vertical.hide();
//     }, 1000)
//
//
//
// });
*/

////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////

$('.lockedCover_l1').hover(
    function() {

        //---- Slider introduction related listeners ----//

        if(box.button.btn_d6_listenerOn) {

            setTimeout(()=>{
                box.button.show('D-6');
                box.button.btn_d6_listenerOn = false;
            },2000)

        }

        if(box.button.btn_d62_listenerOn) {


            box.global.stopWiggle = true;
            box.button.btn_d62_listenerOn = false;


        }





    },
    function(){}
);

//---- Only slider introduction related listeners ----//

$('#example_lSlider1').change(function() {

    if(box.button.btn_d10_listenerOn){

        calculator.pointers.activate([0,0,0,0,0,0]);
        box.button.btn_d10_listenerOn = false;
        setTimeout(()=>{
            box.button.show('D-10');
            calculator.pointers.activate([0,0,0,0,0,0]);
        }, 2000);

    }

});

$('#example_vSlider1').change(function() {

    if(box.button.btn_d13b_listenerOn && (h1 > 0)){

        setTimeout(()=>box.button.show('D-13'), 2000);

    }

    if(box.button.btn_d14_listenerOn && (s1 > 0)){

        box.button.btn_d14_listenerOn = false;
        setTimeout(()=>box.button.show('D-14'), 2000);
    }

});


$(document).keydown(function() {

    //---- Slider introduction related listener ----//

    if(box.button.btn_d11_listenerOn){
        if(event.which === 37 || event.which === 39) {
            box.button.btn_d11_listenerOn = false;
            setTimeout(()=>box.button.show('D-11'), 2000);
        }
    }

});
