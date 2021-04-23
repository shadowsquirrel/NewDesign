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
    tutorial: {
        result:{},
    },

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

    // console.log(transitionTime);

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
            $('.OG1LeaderCircleLeft').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'f1') {
            $('.OG1f1CircleLeft').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'f2') {
            $('.OG1f2CircleLeft').css({'transition':'1s', 'opacity': o});
        }


        if(player === 'ol1') {
            $('.OG1LeaderCircleRight').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'of1') {
            $('.OG1f1CircleRight').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'of2') {
            $('.OG1f2CircleRight').css({'transition':'1s', 'opacity': o});
        }

    }

    if(contest === 'result') {
        if(player === 'l1') {
            $('.OG1TopLeaderResultIconsCircle').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'l2') {
            $('.OG1BottomLeaderResultIconsCircle').css({'transition':'1s', 'opacity': o});
        }
    }


    if(contest === 'iga') {
        if(player === 'f1') {
            $('.IGTopLeftCircle').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'f2') {
            $('.IGTopRightCircle').css({'transition':'1s', 'opacity': o});
        }
    }


    if(contest === 'igb') {
        if(player === 'f1') {
            $('.IGBottomLeftCircle').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'f2') {
            $('.IGBottomRightCircle').css({'transition':'1s', 'opacity': o});
        }
    }


    if(contest === 'og2') {

        if(player === 'l1') {
            $('.OG2LeaderCircleLeft').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'f1') {
            $('.OG2f1CircleLeft').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'f2') {
            $('.OG2f2CircleLeft').css({'transition':'1s', 'opacity': o});
        }


        if(player === 'ol1') {
            $('.OG2LeaderCircleRight').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'of1') {
            $('.OG2f1CircleRight').css({'transition':'1s', 'opacity': o});
        }
        if(player === 'of2') {
            $('.OG2f2CircleRight').css({'transition':'1s', 'opacity': o});
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


    $('.IGTopContestWrap').css({'transition':'0.5s','opacity':'1'});
    $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'0'});

    $('.IGBottomContestWrap').css({'transition':'0.5s','opacity':'1'});
    $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'0'});

}

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
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
    calculator.tutorial.allowCalculator();
    map.opacity.main([1,1,1]);
    map.opacity.section([0.1,0.1,0.1]);
    map.opacity.cover([0,0,0.5]);
    $('.groupADescription, .fightDescription, .groupBDescription').css({'transition':'0.5s','opacity':'1'})
    map.opacity.inside([1,1,0]);
    map.opacity.sectionTitles([1,1,1])
    map.opacity.arrowsFromResultIcons([0,0], [0,0]);
    map.opacity.arrowsFromIG([0,0]);
    $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '0'});

    map.openSpace();

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '1'});

    $('.OG1LeaderLeft, .OG1LeaderRight, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'1'});
    $('.subsubOG1L').css({'border-color':'lime'});
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '0'});
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '0'});
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

}

map.tutorial.result.AWon = function(delay) {

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

    delay = delay === undefined ? 1000 : delay;
    fWI = fWI === undefined ? 2 : fWI;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.arrowToBottomIconResults, .arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderRight, .OG1LeaderLeft, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.bottomBoxLeaderResult, .topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 1;
        map.set.OG1ResultIcons();
    }, 1 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1, 1], [-1, 0])
    }, 2 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeBottom, .IGFI_Bottom').css({'transition':'0.5s', 'opacity':'1'});
        $('.prizeCrownBlackBottom, .IGFightIconLimeBottom').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.IGFI_Bottom').css({'transition':'0.5s', 'opacity':'0'});

        // calculator.tutorial.denyCalculator();
        $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'1'});
    }, 3 * delay)

    setTimeout(()=>{

        if(fWI === 1) {
            $('.prizeCrownLimeBottom').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        }

        if(fWI === 2) {
            $('.prizeCrownLimeBottom').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '35px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        }

        $('.IGTopContestWrap').css({'transition':'0.5s','opacity':'0.1'});
        $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'0.2'});
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
        $('.OG1FollowersWrapRight').css({'transition':'3s', 'opacity': '1'});
        $('.OG1FollowerArrowsRight').css({'transition':'3s', 'opacity': '1'});
        $('.OG1LeaderRight').css({'transition':'3s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'3s', 'opacity':'1'});
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'3s', 'opacity':'0.4'});
        $('.subsubOG1L').css({'border-color':'gray'});

        // show the initial setup for comparison
        $('.OG1FollowersWrapLeft').css({'transition':'3s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft').css({'transition':'3s', 'opacity': '1'});
        $('.OG1LeaderLeft').css({'transition':'3s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'3s', 'opacity':'1'});
        $('.subsubOG1L').css({'border-color':'gray'});

        $('.OG1FightIconWrap').css({'transition':'3s', 'opacity':'0.4'});
        $('.OG1FightIcon').css({'transition':'3s', 'opacity':'1'});
        $('.OG1FightIconLime').css({'transition':'0s', 'opacity':'0'});
    }, 9 * delay)

}

map.tutorial.result.BWonALost = function(delay, fWI) {

    delay = delay === undefined ? 1000 : delay;
    fWI = fWI === undefined ? 1 : fWI;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.arrowToTopIconResults, .arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderLeft, .OG1LeaderRight, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 2;
        map.set.OG1ResultIcons();
    }, 1 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1, 1], [0, -1])
    }, 2 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeTop, .IGFI_Top').css({'transition':'0.5s', 'opacity':'1'});
        $('.prizeCrownBlackTop, .IGFightIconLimeTop').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.IGFI_Top').css({'transition':'0.5s', 'opacity':'0'});

        $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'1'});
    }, 3 * delay)

    setTimeout(()=>{

        if(fWI === 1) {
            $('.prizeCrownLimeTop').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        }

        if(fWI === 2) {
            $('.prizeCrownLimeTop').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '35px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        }


        $('.IGBottomContestWrap').css({'transition':'0.5s','opacity':'0.1'});
        $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'0.2'});
    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1,0], [0, 1]);
        map.opacity.arrowsFromIG([1,0]);
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '1'});
        setTimeout(()=>{
            $('.groupADescription, .groupBDescription, .fightDescription').css({'transition':'0.5s','opacity':'0'})
        }, 0.75 * delay)
    }, 5 * delay);

    setTimeout(()=>{
        map.winnerLeaderIndex = 2;
        map.winnerFollowerIndex = fWI;
        map.set.OG2ResultingIcons();
        $('.OG2LeaderRight, .OG2LeaderLeft, .OG2LeadersIcon').css({'transition':'0.5s',  'opacity':'1'});
        $('.OG2FightIconWrap').css({'transition':'0s',  'opacity':'0'});

        if(fWI === 1) {
            $('.IGLeftFollower1, .prizeCrownLimeTop').css({'transition':'0.5s', 'opacity':'0.3'})
        }

        if(fWI === 2) {
            $('.IGLeftFollower2, .prizeCrownLimeTop').css({'transition':'0.5s', 'opacity':'0.3'})
        }

        $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'0.3'});
        map.opacity.arrowsFromResultIcons([0.3, 0], [0, 0.3]);
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '0.3'});
    }, 6.5 * delay)

    setTimeout(()=>{

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
        $('.OG1FollowersWrapLeft').css({'transition':'3s', 'opacity': '0.4'});
        $('.OG1FollowerArrowsLeft').css({'transition':'3s', 'opacity': '0.4'});
        $('.OG1LeaderLeft').css({'transition':'3s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'3s', 'opacity':'1'});
        $('.subsubOG1L').css({'border-color':'gray'});

        // show the initial setup for comparison
        $('.OG1FollowersWrapRight').css({'transition':'3s', 'opacity': '1'});
        $('.OG1FollowerArrowsRight').css({'transition':'3s', 'opacity': '1'});
        $('.OG1LeaderRight').css({'transition':'3s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'3s', 'opacity':'1'});
        $('.OG1RightFollower1, .OG1RightFollower2').css({'transition':'3s', 'opacity':'0.4'});
        $('.subsubOG1L').css({'border-color':'gray'});

        $('.OG1FightIconWrap').css({'transition':'3s', 'opacity':'0.4'});
        $('.OG1FightIcon').css({'transition':'3s', 'opacity':'1'});
        $('.OG1FightIconLime').css({'transition':'0s','opacity':'0'});
    }, 9 * delay)

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
        $('.OG1FightIcon, .OG1FightIconLime, .OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0'});
        $('.bottomBoxLeaderResult, .topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.set.OG1ResultIcons();
    }, 2 * delay);

    map.globalVariable.og1ResultsCounter = 1 + map.globalVariable.og1ResultsCounter;

}

map.opacity.bottom = function(opt) {

    opt = opt.toString();

    $('.arrowToBottomIconResults').css({'transition':'1s', 'opacity':opt});
    $('.bottomLeaderWon').css({'transition':'1s', 'opacity':opt});
    $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':opt});
    $('.arrowBottomIGtoOG2').css({'transition':'1s', 'opacity':'0'});

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
        $('.prizeCrownLimeTop').css({'transition':'2s', 'margin-top':'-51px', 'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'0'});
    }

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
        map.animate.roundNumber.innerHTML = 3;
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
            }, 1000)

        }

    }

    if(roundCount === 2) {

        if(partCount === 1) {

            map.opacity.main([1,0,0]);
            $('.og1NetPayoffText1').css({'transition':'0s', 'opacity':'0'});
            $('.og1NetPayoffText2').css({'opacity':'1'});
            $('.netPayoffPart21').css({'opacity':'1'});

        }

        if(partCount === 2) {

            map.opacity.main([1,1,0]);
            $('.igNetPayoffText1').css({'transition':'0s', 'opacity':'0'});
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

    // $('.netPayoffResultsTutorialText1').css({'transition':'0.5s', 'transform-origin':'left', 'transform':'scale(0.7)', 'opacity':'0.7', 'margin-top':'-65px'});
    // $('.netPayoffCircle, .netPayoffArrow, .netPayoffText').css({'transition':'0.2s', 'opacity':'0'});
    // $('.initialBudgetCircle, .initialBudgetArrow, .initialBudgetText').css({'transition':'0.2s', 'opacity':'0'});
    // $('.netPayoffResultsTutorialText2').css({'transition':'0.5s', 'margin-top':'-26px', 'margin-bottom':'60px'});
    setTimeout(()=>{
        // $('.initialBudgetCircle2, .initialBudgetArrow2, .initialBudgetText2').css({'transition':'0.5s', 'opacity':'1'});
    }, 1000)


    var delay;

    myDelay = myDelay === undefined ? 1000 : myDelay;

    delay = myDelay;

    setTimeout(()=>map.animate.startRoundNetPayoffs(2), 1 * delay);

    map.animate.startRoundNetPayoffs(2);
    $('.initialBudgetCircle2, .initialBudgetArrow2, .initialBudgetText2').css({'transition':'0.5s', 'opacity':'1'});

    setTimeout(()=>{
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 1), 2 * delay);
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 2), 3 * delay);
        setTimeout(()=>map.animate.rotateNetPayoffs(2, 3), 4 * delay);
    }, 1000)

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

    $('.OG2FollowersWrapLeft, .OG2FollowersWrapRight').css({'transition':'1s', 'opacity': '1'});
    $('.OG2FollowerArrowsLeft, .OG2FollowerArrowsRight').css({'transition':'1s', 'opacity': '1'});
    $('.arrowDashedLime2').css({'transition':'1s', 'opacity':'1'});
    $('.og2BlackArrow').css({'transition':'1s','opacity':'0'});
    $('.s5PassiveFollower').css({'transition':'1s','opacity':'0'});
    $('.s5ActiveFollower').css({'transition':'1s','opacity':'1'});

    $('.OG2GroupSeparator').css({'transition':'2s', 'opacity':'1', 'height':'119px'});

    $('.OG2FightIcon, .OG2FightIconLime').css({'transition':'1s', 'opacity':'0'});
    $('.OG2LeaderRight, .OG2LeaderLeft').css({'transition':'1s', 'opacity':'0.7'});

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
    $('.OG2GroupSeparator, .arrowDashedLime2').css({'transition':'0.5s', 'opacity':'0', 'height':'100px'});
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

//---------------------------------------------//

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

            $('.s2ActiveFollower').css({'transition':'1.15s', 'opacity':'1'});
            $('.s2PassiveFollower').css({'transition':'1.15s', 'opacity':'0'});

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

map.opacity.OG1Icons = function(opt) {

    $('.OG1FightIcon, .s2PassiveFollower, .OG1LeaderLeft, .OG1LeaderRight, .leaderKingLeft, .leaderKingRight').css({'transition':'0.5s', 'opacity':opt});
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight, .OG1LeadersIcon, .OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity':opt});
    $('.OG1LeftFollower2, .OG1LeftFollower1, .OG1RightFollower2, .OG1RightFollower1').css({'transition':'0.5s', 'opacity':opt});

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

title.update.closeOpen = function(state, myString, index, extraStep) {

    if(state === 0) {

        $('.welcomeTitle').css({'transition':'0.75s', 'transform':'scaleY(0)', 'height':'0', 'margin-bottom': '-35px'});
        setTimeout(()=>{
            title.update.closeOpen(1, myString, index, extraStep)
        }, 700)

    }

    if(state === 1) {

        title.update.text(myString);
        title.update.textColor(index, true, extraStep);
        setTimeout(()=>{
            $('.welcomeTitle').css({'transition':'0.75s', 'transform':'scaleY(1)', 'height':'115px', 'margin-bottom': '20px'})
        }, 50)

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
    setTimeout(()=>$('.crownSwitchAnimationWrap').css({'transition':'0.7s', 'margin-bottom':'0px', 'opacity':'1', 'margin-top':'-75px'}), 50);

}

crown.hide = function() {

    $('.crownSwitchAnimationWrap').css({'transition':'0.7s', 'margin-bottom':'-190px', 'opacity':'0'});
    setTimeout(()=>$('.crownSwitchAnimationWrap').css({'display':'none'}),350);

}

crown.stopAnimate = false;

crown.infoBox13IsClose = true;
crown.infoBox14IsClose = true;
crown.blackFollower = true;

crown.animateDeny = function() {

    $('.section2').css({'z-index':'0'});
    $('.IGFightIcon').css({'opacity':'0'});
    $('.IGFightIcon').css({'transition':'0s', 'opacity':'0'});
    crown.resetMiniNewLeader();

    if(!crown.stopAnimate) {

        map.opacity.section([1,0,0], 1);
        map.opacity.main([1,0,0], 1);

        if(crown.blackFollower) {
            $('.IGTopContestWrap').css({'transition':'1s', 'opacity':'1'});
            $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':'0'});
            $('.followerWinning').css({'transition':'1s', 'opacity':'0'});
            $('.leaderLosing').css({'transition':'0.3s', 'opacity':'1'});
            $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});
        } else {
            $('.IGTopContestWrap').css({'transition':'1s', 'opacity':'0'});
            $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':'1'});
            $('.followerWinning2').css({'transition':'1s', 'opacity':'0'});
            $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'1'});
            $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});
        }

        $('.followerCrown').css({'transition':'1.5s'});
        $('.leaderCrown').css({'transition':'0.8s', 'margin-left':'-76px'});
        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.8s', 'margin-top':'84px'});
        }, 100)

        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.7s', 'opacity':'0'});
            $('.myLeaderDenied').css({'transition':'0.39s', 'opacity':'1'});
        }, 900)

        setTimeout(()=>{
            if(crown.infoBox13IsClose) {
                setTimeout(()=>{
                    crown.reset();
                }, 1)
            } else {
                $('.IGFightIcon').css({'transition':'0s', 'opacity':'0'});
                crown.newLeader();
            }
        }, 1750)

    }

}

crown.newLeader = function() {

    setTimeout(()=>{
        map.opacity.section([1,1,0], 1);
        map.opacity.main([1,1,0], 1);
        map.opacity.inside([0,1,0], 1)
        $('.IGFightIcon').css({'transition':'0s', 'opacity':'0'});
        setTimeout(()=>{
            $('.IGFightIcon').css({'transition':'0s', 'opacity':'0'});
        }, 10)
    }, 500)

    $('.leaderCrown').css({'transition':'0.5s', 'opacity':'1'});
    $('.myLeaderDenied').css({'transition':'0.5s', 'opacity':'0'});

    setTimeout(()=>{
        $('.followerCrown').css({'transition':'0.5s', 'opacity':'0'});
        $('.leaderCrown').css({'transition':'0.5s', 'opacity':'1'});
    }, 50)

    setTimeout(()=>{
        $('.leaderCrown').css({'transition':'1.5s', 'opacity':'0', 'margin-left':'181px', 'margin-top':'-33px'});
        $('.followerCrown').css({'transition':'1.5s', 'opacity':'1', 'margin-left':'181px', 'margin-top':'-33px'});

        crown.miniNewLeader();

        if(crown.infoBox14IsClose) {
            setTimeout(()=>{
                if(crown.blackFollower) {
                    $('.followerWinning').css({'transition':'0.6s', 'opacity':'1'});
                } else {
                    $('.followerWinning2').css({'transition':'0.6s', 'opacity':'1'});
                }
            },0)
        }
    }, 500)

    if(crown.infoBox14IsClose) {
        setTimeout(()=>{
            crown.reset();
        }, 2750)
    } else {

        setTimeout(()=>{
            if(crown.blackFollower) {
                $('.followerWinning').css({'transition':'1.2s', 'opacity':'1'});
            } else {
                $('.followerWinning2').css({'transition':'1.2s', 'opacity':'1'});
            }
        }, 1000)

        setTimeout(()=>{
            map.opacity.section([1, 1, 1], 1.5);
            map.opacity.main([0,0,1], 1.5);

            if(!crown.infoBox14IsClose) {
                if(crown.blackFollower) {
                    $('.leaderLosing').css({'transition':'1.5s', 'opacity':'0'});
                } else {
                    $('.leaderLosing2').css({'transition':'1.5s', 'opacity':'0'});
                }
            }
        }, 2500)

        setTimeout(()=>{
            crown.reset();
            map.opacity.inside([0,0,0], 1)
        }, 6000)

    }

}

crown.reset = function() {




    if(crown.infoBox13IsClose && crown.infoBox14IsClose) {
        // map.opacity.main([0,0,0], 0.3);
        $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});
        $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});
    }
    $('.leaderCrown').css({'transition':'0s', 'margin-left':'-182px', 'margin-top':'-33px'});

    setTimeout(()=>{

        $('.myLeaderDenied, .followerCrown').css({'transition':'0.3s', 'opacity':'0'});

        if(crown.blackFollower) {
            $('.followerWinning').css({'transition':'0.4s', 'opacity':'0'})
        } else {
            $('.followerWinning2').css({'transition':'0.4s', 'opacity':'0'})
        }

        crown.pause();
        // map.opacity.section([1,0,0], 0.7);
        // map.opacity.main([1,0,0], 0.7);
        // if(crown.blackFollower) {
        //     $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'1'});
        //     $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});
        // } else {
        //     $('.leaderLosing').css({'transition':'0.3s', 'opacity':'1'});
        //     $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});
        // }

    }, 100)

    // setTimeout(()=>{
    //     $('.leaderCrown').css({'transition':'0.6s', 'opacity':'1'});
    // }, 200)
    //
    //
    // setTimeout(()=>{
    //     $('.followerCrown').css({'transition':'0s', 'margin-left':'-76px', 'margin-top':'84px'})
    // }, 350)

    // if(crown.infoBox13IsClose || crown.infoBox14IsClose) {
    //     setTimeout(()=>{
    //         crown.blackFollower = 1 - crown.blackFollower;
    //         crown.animateDeny()
    //     }, 1000)
    // } else {
    //     setTimeout(()=>{
    //         crown.blackFollower = 1 - crown.blackFollower;
    //         crown.animateDeny()
    //     }, 2000)
    // }



}

crown.pause = function() {


    if(crown.infoBox13IsClose && crown.infoBox14IsClose) {

        // map.opacity.main([0,0,0], 0.3);
        $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});
        $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});


        setTimeout(()=>{
            crown.first();
        }, 1000)
    } else if(!crown.infoBox13IsClose && crown.infoBox14IsClose) {

        map.opacity.main([0,0,0], 0.3);
        $('.leaderLosing, .followerWinning').css({'transition':'0.3s', 'opacity':'0'});
        $('.leaderLosing2, .followerWinning2').css({'transition':'0.3s', 'opacity':'0'});

        setTimeout(()=>{
            crown.first();
        }, 1000)

    } else {

        map.opacity.main([0,0,0], 0.3);
        $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});
        $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});

        setTimeout(()=>{
            crown.first();
        }, 1000)
    }

}

crown.first = function() {

    map.opacity.section([1,0,0], 0.7);
    map.opacity.main([1,0,0], 0.7);
    if(crown.blackFollower) {
        $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'1'});
        $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});
    } else {
        $('.leaderLosing').css({'transition':'0.3s', 'opacity':'1'});
        $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});
    }

    setTimeout(()=>{
        $('.leaderCrown').css({'transition':'0.6s', 'opacity':'1'});
    }, 0)


    setTimeout(()=>{
        $('.followerCrown').css({'transition':'0s', 'margin-left':'-76px', 'margin-top':'84px'})
    }, 250)


    if(crown.infoBox13IsClose || crown.infoBox14IsClose) {
        setTimeout(()=>{
            crown.blackFollower = 1 - crown.blackFollower;
            crown.animateDeny()
        }, 900)
    } else {
        setTimeout(()=>{
            crown.blackFollower = 1 - crown.blackFollower;
            crown.animateDeny()
        }, 1900)
    }

}

crown.miniNewLeader = function() {

    var winnerIndex, ml;

    winnerIndex = Math.random() > 0.5 ? 1 : 2;

    ml = winnerIndex === 1 ? '-40px' : '35px';

    // top section
    $('.prizeCrownLimeBottom, .IGFI_Bottom').css({'transition':'0.5s', 'opacity':'1'});
    $('.prizeCrownBlackBottom, .IGFightIconLimeBottom').css({'transition':'0.5s', 'opacity':'0'});

    setTimeout(()=>{
        $('.prizeCrownLimeBottom').css({'transition':'1.5s', 'margin-top':'-51px', 'margin-left': ml, 'height':'27px', 'width':'29px', 'z-index':'0'});
    }, 200)


    // bottom section
    $('.prizeCrownLimeTop, .IGFI_Top').css({'transition':'0.5s', 'opacity':'1'});
    $('.prizeCrownBlackTop, .IGFightIconLimeTop').css({'transition':'0.5s', 'opacity':'0'});

    setTimeout(()=>{
        $('.prizeCrownLimeTop').css({'transition':'1.5s', 'margin-top':'-51px', 'margin-left': ml, 'height':'27px', 'width':'29px', 'z-index':'0'});
    }, 200)

}

crown.resetMiniNewLeader = function() {

    $('.prizeCrownLimeBottom, .IGFI_Bottom').css({'transition':'0s', 'opacity':'0'});
    $('.prizeCrownBlackBottom, .IGFightIconLimeBottom').css({'transition':'0s', 'opacity':'1'});

    $('.prizeCrownLimeBottom, .prizeCrownLimeTop').css({'transition':'0.8s', 'margin-top':'-35px', 'margin-left': '0px', 'height':'27px', 'width':'29px', 'z-index':'0'});

    $('.prizeCrownLimeTop, .IGFI_Top').css({'transition':'0s', 'opacity':'0'});
    $('.prizeCrownBlackTop, .IGFightIconLimeTop').css({'transition':'0s', 'opacity':'1'});


}



//---- UNSUED CODE FOR EXPERIMENTAL STUFF -----//

crown.stopAnimateLeaderLost = false;
crown.animateLeaderLost = function() {

    if(!crown.stopAnimateLeaderLost) {

        $('.leaderCrown').css({'transition':'0.8s', 'margin-left':'-368px', 'margin-top':'-33px', 'opacity':'1'});

        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.8s', 'margin-left':'-76px'});
        }, 900)

        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.8s', 'margin-top':'84px'});
        }, 1000)

        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.7s', 'opacity':'0'});
            $('.myLeaderDenied').css({'transition':'0.4s', 'opacity':'1'});
        }, 2000)

        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0s', 'margin-left':'-368px', 'margin-top':'-33px'});
            $('.myLeaderDenied').css({'transition':'0.5s', 'opacity':'0'});
        }, 3000)

        setTimeout(()=>{
            crown.animateLeaderLost();
        }, 3100)

    }

}

crown.show2 = function() {

    $('.crownSwitchAnimationWrap').css({'display':'flex'});
    setTimeout(()=>$('.crownSwitchAnimationWrap').css({'transition':'0.7s',  'opacity':'1'}), 50);

}

crown.stopAnimate2 = false;
crown.animateDeny2 = function() {

    if(!crown.stopAnimate2) {

        $('.followerCrown').css({'transition':'0.75s'});
        $('.leaderCrown').css({'transition':'0.4s', 'margin-left':'-180px'});
        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.4s', 'margin-top':'84px'});
            $('.myLeaderDenied').css({'transition':'0s', 'margin-left':'-180px'});
        }, 50)

        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.35s', 'opacity':'0'});
            $('.myLeaderDenied').css({'transition':'0.2s', 'opacity':'1'});
        }, 450)

        setTimeout(()=>{
            crown.newLeader2()
        }, 1500)

    }

}

crown.newLeader2 = function() {

    $('.leaderCrown').css({'transition':'0.25s', 'opacity':'1'});
    $('.myLeaderDenied').css({'transition':'0.25s', 'opacity':'0'});

    setTimeout(()=>{
        $('.leaderCrown').css({'transition':'0.75s', 'opacity':'0', 'margin-left':'106px', 'margin-top':'-33px'});
        $('.followerCrown').css({'transition':'0.75s', 'opacity':'1', 'margin-left':'106px', 'margin-top':'-33px'});
    }, 250)

    setTimeout(()=>{
        crown.reset2()
    }, 2000)

}

crown.reset2 = function() {

    $('.myLeaderDenied, .followerCrown').css({'transition':'0.15s', 'opacity':'0'});
    $('.leaderCrown').css({'transition':'0s', 'margin-left':'-360px', 'margin-top':'-33px'});

    setTimeout(()=>{
        $('.leaderCrown').css({'transition':'0.15s', 'opacity':'1'});
        $('.followerCrown').css({'transition':'0s', 'margin-left':'-180px', 'margin-top':'84px'})
    }, 175)

    setTimeout(()=>{
        crown.animateDeny2()
    }, 500)

}

crown.stopAnimate3 = false;
crown.animateDeny3 = function() {

    if(!crown.stopAnimate3) {

        $('.followerCrown').css({'transition':'0.75s'});
        $('.leaderCrown').css({'transition':'0.4s', 'margin-left':'-180px'});

        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.4s', 'margin-top':'84px'});
            $('.myLeaderDenied').css({'transition':'0s', 'margin-left':'-180px'});
        }, 50)

        setTimeout(()=>{
            $('.leaderCrown').css({'transition':'0.35s', 'opacity':'0'});
            $('.myLeaderDenied').css({'transition':'0.2s', 'opacity':'1'});
        }, 450)

        setTimeout(()=>{
            crown.newLeader3()
        }, 1500)

    }

}

crown.newLeader3 = function() {

    $('.leaderCrown').css({'transition':'0.25s', 'opacity':'1'});
    $('.myLeaderDenied').css({'transition':'0.25s', 'opacity':'0'});

    setTimeout(()=>{
        $('.leaderCrown').css({'transition':'0.75s', 'opacity':'0', 'margin-left':'365px', 'margin-top':'-33px'});
        $('.followerCrown').css({'transition':'0.75s', 'opacity':'1', 'margin-left':'365px', 'margin-top':'-33px'});
    }, 250)

    setTimeout(()=>{
        crown.reset3()
    }, 2000)

}

crown.reset3 = function() {

    $('.myLeaderDenied, .followerCrown').css({'transition':'0.15s', 'opacity':'0'});
    $('.leaderCrown').css({'transition':'0s', 'margin-left':'-366px', 'margin-top':'-33px'});

    setTimeout(()=>{
        $('.leaderCrown').css({'transition':'0.15s', 'opacity':'1'});
        $('.followerCrown').css({'transition':'0s', 'margin-left':'-180px', 'margin-top':'84px'})
    }, 175)

    setTimeout(()=>{
        crown.animateDeny3()
    }, 500)

}
//----------------------------------------------//


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

icon.set.forcedUnevenGroup = false;
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

    if(!icon.set.forcedUnevenGroup) {
        icon.set.treatment();
    }

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

var tutorial = {}

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

    // console.log('we are inside wrapHeight');
    console.log(height);

    var boxbox = '#boxbox-' + key;

    // console.log(key);
    console.log(boxbox);

    $(boxbox).css({'height' : height});

    if(box.global.previousKey != box.global.currentKey) {

        console.log('do we get in here somehow?');

        var prevBoxbox = '#boxbox-' + box.global.previousKey;
        $(prevBoxbox).css({'height' : '0'});

    }

    if(box.global.keys.length > 2) {

        box.global.keys = box.global.keys.slice(Math.max(box.global.keys.length - 2, 1));

    }

    // console.log(box.global.keys);

}

box.set.wrapHeight2 = function(id) {

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

    // console.log('we are inside wrapHeight');
    console.log(height);

    var boxbox = '#boxbox-' + key;

    // console.log(key);
    console.log(boxbox);

    $(boxbox).css({'height' : height, 'margin-top':'20px', 'margin-bottom':'20px'});

    if(box.global.previousKey != box.global.currentKey) {

        console.log('do we get in here somehow?');

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

    console.log('id: ' + id);
    console.log('id1: ' + id1);
    console.log('id2: ' + id2);
    console.log('id3: ' + id3);


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
        // console.log('calling wrapHeight');
        box.set.wrapHeight(id);

        id = '#' + id;

        $(id).css({'transform':'scale(1)'});

        // ADD MOVE IFRAME TO THIS DIV METHOD HERE


    }

}

box.show2 = function(id, addSpaceAbove) {

    var id1, id2, id3;

    // console.log('asdasdasdasda: ' + id);

    id1 = id.split(':')[0];

    id2 = id.split(':')[1];

    if(id2 != undefined) {
        id3 = id1.split('box-')[1];
    }

    console.log('id: ' + id);
    console.log('id1: ' + id1);
    console.log('id2: ' + id2);
    console.log('id3: ' + id3);


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
        // console.log('calling wrapHeight');
        box.set.wrapHeight2(id);

        id = '#' + id;

        $(id).css({'transform':'scale(1)'});

        // ADD MOVE IFRAME TO THIS DIV METHOD HERE


    }

}

box.transform = function(idCore, id) {

    var cT, cTCA;

    box.global.transformedBoxes.push(id);
    // console.log(box.global.transformedBoxes);

    box.button.hide(idCore);

    $(id).css({'position':'relative', 'background':'transparent', 'border-width':'0px', 'box-shadow':'0px 0px black', 'margin-top':'-30px'});
    cT = $(id).children('div:first');

    // console.log(cT);
    $(cT).css({'font-size':'20px'});
    cTCA = $(id).children('div:first').children();

    // console.log(cTCA);
    for(var f = 0; f < cTCA.length; f++) {

        $(cTCA[f]).css({'margin-bottom':'-5px'});

    }

    box.global.transformedBoxesStorage = box.global.transformedBoxes;

}

box.transform2 = function(idCore, id , marginTop) {

    var cT, cTCA;

    box.global.transformedBoxes.push(id);
    // console.log(box.global.transformedBoxes);

    // console.log(marginTop);

    mt = marginTop + 'px';

    box.button.hide(idCore);


    $(id).css({'transition':'0.15s', 'border-width':'0px', 'box-shadow':'0px 0px 0px 0px black'});

    setTimeout(()=>{

        $(id).css({'transition':'0.25s', 'background':'transparent', 'border-width':'0px', 'box-shadow':'0px 0px 0px 0px black'});

        setTimeout(()=>{
            // $(id).css({'transition':'1s', 'position':'relative', 'margin-top':mt});
            $(id).css({'transition':'1s', 'margin-top':mt});
        }, 150)

    },150)

    cT = $(id).children('div:first');

    // console.log(cT);
    $(cT).css({'font-size':'20px'});
    cTCA = $(id).children('div:first').children();

    // console.log(cTCA);
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

    if(transform === 1) {

        box.transform(idCore, id);

    } else if(transform === 0) {

        $(id).css({'transform':'scale(0)'});

    } else {

        // console.log('asdaslkdjalskdjalksjdlaksjdlaksdjalksdja');
        box.transform2(idCore, id, transform);

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

    $('#debugInfoBoxText').html(id2);

    id1 = 'box-' + id1;
    id2 = 'box-' + id2;

    box.hide(id1, transform);
    setTimeout(()=>{
        box.show(id2, addSpaceBetween);
    }, delay);

}


// transition2 calls show2 which calls wrapheight2 everything is the same except wrapheight2
// in wrapheight2 everything is the same except boxbox margin top and bottom are reset to 20 20
// we are going to use this when we are making the info box dissapear between contest hs calculator sections
// and we additionally need to also make the boxbox mt and mb 0 0. So when we show a new infobox we need
// to reset the mt and mb to 20 20 and to to that we are using transition2 that is the only difference
// a super lazy short copy past solution
box.transition2 = function(id1, id2, transform, addSpaceBetween, hideButton, delay) {

    delay = delay === undefined ? 750 : delay;

    if(hideButton) {

        box.button.hide(id2);

    }

    id1 = 'box-' + id1;
    id2 = 'box-' + id2;

    box.hide(id1, transform);
    setTimeout(()=>{
        box.show2(id2, addSpaceBetween);
    }, delay);

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


//-------------------------------------------------------------------------//
//-------- TREATMENT SETUP FOR MAP AND ICON SORTING AND INFO BOXES --------//
//-------------------------------------------------------------------------//

tutorial.fixLeftGroupToHetero = true;

box.set.treatment = function(sH, aH, rollOn) {

    rollOn === undefined ? false : rollOn;

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

        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = false;

        if(!tutorial.fixLeftGroupToHetero) {

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

    map.treatment();

}


//----------------------------------------------------------------------------//
//--------------------------- BASICS OF THE GAME -----------------------------//
//----------------------------------------------------------------------------//


var debug = {
    start: {}
}

debug.start.B = function(treatment) {

    //------------------------------------------------------------------//

    if(treatment === 0) {
        box.set.treatment(0,0);
    }

    if(treatment === 1) {
        box.set.treatment(1,0);
    }

    if(treatment === 2) {
        box.set.treatment(0,1);
    }

    //------------------------------------------------------------------//


    title.update.text('GAME BASICS');
    title.update.size(true);
    title.update.textColor(-2500, true, 30);

    $('#boxbox-B').css({'display':'block'});

    box.transition('', 'B-0', 0, 0, 1);

    setTimeout(()=>box.button.show('B-0'), 1750);

}


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


debug.start.B(2);


//----------------------------------------------------------------------------//
//------------------ OVERVIEW OF SECTIONS, ROLES, GROUPS ---------------------//
//----------------------------------------------------------------------------//


$('#btn-B-0').click(function() {

    box.transition('B-0', '', 0, 0, 0);

    title.update.closeOpen(0, 'GAME MAP', -4000, 30)

    map.opacity.main([0,0,0]);

    setTimeout(()=>{
        map.show.initialSetup();
        map.opacity.main([0,0,0]);
        map.opacity.section([1,1,1])
    }, 750)

    setTimeout(()=>{
        map.animate.rotateSectionsSimple([0,0,0],0,0);
    }, 1750)

    setTimeout(()=>{
        box.transition('', 'B-3', 0, 0, 1)
    }, 2250);

    setTimeout(()=>{
        box.button.show('B-3')
    }, 4000);

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

    title.update.size(false);

    box.transition('B-3', '', 0, 0, 0);

    map.show.bracket();

    setTimeout(()=>{
        box.transition('', 'B-4', 1, 0, 1);
    }, 250);

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

    // $('#boxbox-B').css({'margin-top':'-20px'});

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-6');
    }, 2000);

})

$('#btn-B-6').click(function() {

    // close the box
    box.transition('B-6', 'B-65', 1, 0, 1);
    $('#boxwrap-B-6').css({'margin-top':'13px'});

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-65');
    }, 2000);

})

$('#btn-B-65').click(function() {

    // close the box
    box.transition('B-65', 'B-675', 1, 1, 1);

    $('.sexplain').css({'transform':'scale(0.7)', 'margin-top':'-26px', 'margin-bottom':'-45px'});

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-675');
    }, 2000);

})


$('#btn-B-675').click(function() {

    // close the box
    box.transition('B-675', '', 1, 0, 1);
    map.induceRoundNumbers = false;

    title.update.size(false);

    // close the former ghost boxes
    setTimeout(()=>{
        box.flush();
        $('#boxbox-B').css({'margin-top':'-25px'});
    }, 100);

    // hide the sections map
    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'-194px', 'margin-top':'30px',
        'transform':'scale(0)', 'opacity':'0'});
    }, 100)

    // new animation for the new information
    setTimeout(()=>{
        icon.set.stage1();
        $('.wrap2').css({'opacity':'0', 'margin-bottom':'-210px'});
        $('.s1Icon').css({'transition':'0s', 'margin-bottom':'-220px', 'filter':'opacity(0)'});
        icon.display.stage1(true);
        setTimeout(()=>{
            $('.s1Icon').css({'transition':'0.5s', 'filter':'opacity(1)'});
        }, 100)
    }, 1000)


    // show new information
    setTimeout(()=>{
        box.transition('', 'B-8', 0, 0, 750);
    }, 750)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-8');
    }, 2750);

})

// SKIPPED
$('#btn-B-7').click(function() {

    // close the box
    box.transition('B-7', '', 1, 0, 1);
    map.induceRoundNumbers = false;

    title.update.size(false);

    // close the former ghost boxes
    setTimeout(()=>{
        box.flush();
        $('#boxbox-B').css({'margin-top':'-25px'});
    }, 100);

    // hide the sections map
    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'-194px', 'margin-top':'30px',
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
        box.transition('', 'B-8', 0, 0, 1);
    }, 1500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-8');
    }, 3000);

})

$('#btn-B-8').click(function() {

    // close the box
    box.transition('B-8', '', 1, 0, 1);

    // new animation for the new information
    setTimeout(()=>{
        $('.wrap2').css({'transition':'0.7s', 'opacity':'1', 'margin-bottom':'0px'});
        $('.s1Icon').css({'transition':'0.7s', 'margin-bottom':'-30px'});
    }, 500)

    setTimeout(()=>{
        icon.globalVariable.genericIcons = true;
        icon.set.stage1();
        icon.stage1.animateSort(350);
    }, 2200)

    // show new information
    setTimeout(()=>{
        box.transition('', 'B-9', 0, 0, 1);
    }, 3350)

    setTimeout(()=>{
        $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-60px'});
    }, 4250)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-9');
    }, 6500);

})

$('#btn-B-9').click(function() {

    // close the box
    box.transition('B-9', '', 0, 0, 1);
    $('.s1Icon').css({'transition':'0.7s', 'margin-top':'0px'});

    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        icon.globalVariable.bothHomo = true;
        icon.globalVariable.bothHetero = false;
        icon.set.stage1();
    }, 300)

    setTimeout(()=>{
        icon.stage1.animateSort(350);
    }, 1300)

    setTimeout(()=>{
        box.transition('', 'B-10', 0, 0, 1);
    }, 2700)

    setTimeout(()=>{
        $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-60px'});
    }, 3500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-10');
    }, 4750);

})

$('#btn-B-10').click(function() {

    // close the box
    box.transition('B-10', '', 0, 0, 1);
    $('.s1Icon').css({'transition':'0.7s', 'margin-top':'0px'});
    $('#boxbox-B').css({'margin-top':'20px'});
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
        map.globalVariable.ourSideIsHetero = 0;
        map.globalVariable.theirSideIsHetero = 0;
        map.treatment();
    }, 700)

    setTimeout(()=>{
        icon.stage1.animateSort(350);
    }, 1300)

    setTimeout(()=>{
        box.transition('', 'B-11', 0, 0, 1);
        setTimeout(()=>{
            $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-60px'});
        }, 250)
    }, 3200)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-11');
    }, 6000);

})

// shorter version with skipped leader demotion graphics and explanation
$('#btn-B-11').click(function() {

    // close the box
    box.transition('B-11', '', 0, 0, 1);
    $('.s1Icon').css({'transition':'0.7s', 'margin-top':'0px'});

    // readjusting the right global variables
    if(box.global.symmetricHeteroTreatment) {
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = true;
        map.globalVariable.ourSideIsHetero = 1;
        map.globalVariable.theirSideIsHetero = 1;
        map.treatment();
    }

    // readjusting the right global variables
    if(box.global.asymmetricHeteroTreatment) {
        // when both both are false one is randomly determined to be uneven
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = false;
        icon.globalVariable.showUnevenSign = true;
        icon.globalVariable.showUnevenIcon = true;
        map.globalVariable.ourSideIsHetero = 1;
        map.globalVariable.theirSideIsHetero = 0;
        map.treatment();
    }

    if(box.global.symmetricHeteroTreatment) {

        setTimeout(()=>{
            icon.globalVariable.genericIcons = false;
            icon.set.stage1();
            $('.wrap2').css({'transition':'0.3s', 'opacity':'1', 'margin-bottom':'0px'});
        }, 500)

        setTimeout(()=>{
            icon.stage1.animateSort(350);
        }, 1750)

        setTimeout(()=>{
            box.transition('', 'B-12_T1_1', 0, 0, 1);
            setTimeout(()=>{
                $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-60px'});
            }, 750)
        }, 3750)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('B-12_T1_1');
        }, 5750);

    }

    if(box.global.asymmetricHeteroTreatment) {

        setTimeout(()=>{
            icon.globalVariable.genericIcons = false;
            icon.set.forcedUnevenGroup = true;
            icon.globalVariable.ourFollowersAreHetero = 1;
            icon.globalVariable.theirFollowersAreHetero = 0;
            icon.set.stage1();
            $('.wrap2').css({'transition':'0.3s', 'opacity':'1', 'margin-bottom':'0px'});
        }, 500)

        setTimeout(()=>{
            icon.stage1.animateSort(350);
        }, 1750)

        setTimeout(()=>{
            box.transition('', 'B-12_T2_0', 0, 0, 1);
            setTimeout(()=>{
                $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-60px'});
            }, 750)
        }, 3750)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('B-12_T2_0');
        }, 5750);

    }

    // next section transition code
    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        $('.all').css({'transition':'1s', 'filter':'blur(400px) sepia(1)'});

    }



})


//////// WARNING TREATMENT INFO BOX SWITCH IS IMMINENT !!! ////////
//////// WARNING TREATMENT INFO BOX SWITCH IS IMMINENT !!! ////////


$('#btn-B-12').click(function() {

    crown.infoBox13IsClose = false;

    box.transition('B-12', 'B-13', 1, 0, 750);
    $('#box-B-12').css({'margin-top':'25px'});
    $('#box12IconWrap').css({'transition':'0.7s', 'transform':'scale(0.7)', 'margin-top':'-63px', 'margin-left':'470px', 'margin-right':'-153px'});
    $('.bigslash1').css({'transition':'0.7s', 'font-size':'71px', 'margin-top':'-25px'});

    setTimeout(()=>{
        $('#box-B-13').css({'margin-top':'12px'});
    }, 750)

    setTimeout(()=>{
        box.button.show('B-13');
    }, 3000);

})

$('#btn-B-13').click(function() {

    // crown.infoBox14IsClose = false;

    box.transition('B-13', 'B-14', 1, 0, 750);
    $('#box-B-13').css({'margin-top':'-16px', 'margin-bottom':'10px'});
    $('.someGrouping2').css({'transition':'0.7s', 'transform':'scale(0.8)', 'margin-bottom':'2px', 'margin-top':'-67px', 'margin-left':'500px', 'margin-right':'-126px'});

    setTimeout(()=>{
        box.button.show('B-14');
    }, 3000);

})

$('#btn-B-14').click(function() {

    box.transition('B-14', '', 0, 0, 1);

    setTimeout(()=>{
        box.flush();
    }, 100)

    setTimeout(()=>{
        crown.stopAnimate = true;
        crown.hide();
        // setup to bring back to the original state of the map
        $('.sexplain').css({'display':'flex',
        'filter':'opacity(1)', 'opacity':'0', 'margin-top':'30px', 'margin-bottom':'-194px', 'z-index':'0'});
        $('.OG2').css({'margin-top':'41px', 'margin-left':'0px'})
        $('.OG1').css({'margin-right':'0px'})
    }, 200)

    setTimeout(()=>{
        $('.IGTopContestWrap').css({'transition':'1s', 'opacity':'1'});
        $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':'1'});
        map.opacity.section([1,1,1]);
    }, 5000)

    if(box.global.symmetricHeteroTreatment) {
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = true;
        map.globalVariable.ourSideIsHetero = 1;
        map.globalVariable.theirSideIsHetero = 1;
        map.treatment();
    }

    if(box.global.asymmetricHeteroTreatment) {
        // when both both are false one is randomly determined to be uneven
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = false;
        icon.globalVariable.showUnevenSign = true;
        icon.globalVariable.showUnevenIcon = true;
        map.globalVariable.ourSideIsHetero = 1;
        map.globalVariable.theirSideIsHetero = 0;
        map.treatment();
    }

    if(box.global.symmetricHeteroTreatment) {

        setTimeout(()=>{
            icon.globalVariable.genericIcons = false;
            icon.set.stage1();
            $('.wrap2').css({'transition':'0.3s', 'opacity':'1', 'margin-bottom':'0px'});
            $('.s1Icon').css({'transition':'0.3s','margin-bottom':'-30px'});
        }, 1500)

        setTimeout(()=>{
            icon.stage1.animateSort();
        }, 2750)

        setTimeout(()=>{
            box.transition('', 'B-12_T1_1', 0, 0, 1);
            setTimeout(()=>{
                $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-60px'});
            }, 750)
        }, 4750)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('B-12_T1_1');
        }, 6750);

    }

    if(box.global.asymmetricHeteroTreatment) {

        setTimeout(()=>{
            icon.globalVariable.genericIcons = false;
            icon.set.stage1();
            $('.wrap2').css({'transition':'0.3s', 'opacity':'1', 'margin-bottom':'0px'});
            $('.s1Icon').css({'transition':'0.3s','margin-bottom':'-30px'});
        }, 1500)

        setTimeout(()=>{
            icon.stage1.animateSort();
        }, 2750)

        setTimeout(()=>{
            box.transition('', 'B-12_T2_0', 0, 0, 1);
            setTimeout(()=>{
                $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-60px'});
            }, 750)
        }, 4750)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('B-12_T2_0');
        }, 6750);

    }

    // next section transition code
    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        setTimeout(()=>{
            $('.wrap2').css({'opacity':'0', 'margin-bottom':'-250px'});
            $('.s1Icon').css({'margin-bottom':'-333px'});

            setTimeout(()=>{
                $('.s1Icon').css({'display':'none'});
            }, 500)
            // show map
            map.opacity.main([0,0,0]);

        }, 100)

        // hide the sections map
        setTimeout(()=>{
            $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'-250px',
            'transform':'scale(0)', 'opacity':'0'});
        }, 1000)

        title.update.size(false);

        setTimeout(()=>{
            // show new title and a segue info box
            title.update.text('BUDGET & CURRENCY');
            title.update.size(true);
            title.update.textColor(-200, true);

        }, 2100)

        setTimeout(()=>{
            $('.currencyRelatedWrap').css({'transition':'0s', 'display':'flex', 'opacity':'0'});
        }, 2400)

        setTimeout(()=>{
            $('.currencyRelatedWrap').css({'transition':'2s', 'margin-bottom':'0px', 'opacity':'1', 'margin-top':'5px'});
        }, 2700)

        // close the introduction info box container
        $('#boxbox-B').css({'transition':'0.3s','margin-bottom':'-20px'});
        setTimeout(()=>{
            $('#boxbox-B').css({'display':'none'});
            $('#boxbox-BCP').css({'display':'block'});
        }, 1300);


        setTimeout(()=>{
            box.transition('', 'BCP-1', 0, 0, 1);
        }, 3500)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('BCP-1');
        }, 5000);

    }

})


//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//

$('#btn-B-12_T1_1').click(function() {

    // close the box
    box.transition('B-12_T1_1', '', 1, 0, 1);
    $('.s1Icon').css({'transition':'0.7s', 'margin-top':'0px'});

    $('#boxwrap-B-12_T1_1').css({'margin-top':'20px'});
    $('#spanBoxB12T11').css({'margin-top':'0px'});
    $('#someGroupingBox12T11').css({'transition':'1s', 'margin-left':'-65px', 'margin-top':'2px', 'margin-bottom':'-2px', 'transform':'scale(0.7)'});

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
        $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-60px'});
    }, 3500)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T1_2');
    }, 5000);

})

$('#btn-B-12_T1_2').click(function() {

    $('.all').css({'transition':'1s', 'filter':'blur(400px) sepia(1)'});

})

$('#btn-B-12_T1_3').click(function() {

    calculator.tutorial.startFlashAnimation = false;

    map.opacity.inside([0,0,0], 1);

    // close the box
    box.transition('B-12_T1_3', '', 0, 0, 1);

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
        $('.section2').css({'z-index':'1'});
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
        $('#boxbox-BCP').css({'display':'block'});
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
    box.transition('B-12_T2_0', 'B-12_T2_1', 1, 0, 750);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T2_1');
    }, 3000);

})

$('#btn-B-12_T2_1').click(function() {

    // close the box
    box.transition('B-12_T2_1', '', 1, 0, 1);
    $('#boxwrap-B-12_T2_0').css({'margin-bottom':'33px'});
    $('.s1Icon').css({'transition':'0.7s', 'margin-top':'0px'});
    $('.B-10-icon-right').css({'transition':'0.5s', 'transform':'scale(0.65)'});

    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        icon.set.forcedUnevenGroup = true;
        icon.globalVariable.ourFollowersAreHetero = 0;
        icon.globalVariable.theirFollowersAreHetero = 1;
        icon.set.stage1();
    }, 700)

    setTimeout(()=>{
        icon.stage1.animateSort(350);
    }, 1300)

    setTimeout(()=>{
        box.transition('', 'B-12_T2_2', 0, 0, 1);
        $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-120px', 'margin-bottom':'-114px', 'transform':'scale(0.7)'});
    }, 3200)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T2_2');
    }, 5000);

})

$('#btn-B-12_T2_2').click(function() {

    // close the box
    box.transition('B-12_T2_2', '', 1, 0, 1);
    $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-40px', 'margin-bottom':'-60px', 'transform':'scale(1)'});
    $('#boxwrap-B-12_T2_1').css({'margin-bottom':'25px'});

    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        icon.set.forcedUnevenGroup = true;
        icon.globalVariable.ourFollowersAreHetero = 1;
        icon.globalVariable.theirFollowersAreHetero = 0;
        icon.set.stage1();
    }, 700)

    setTimeout(()=>{
        icon.stage1.animateSort(350);
    }, 1300)

    setTimeout(()=>{
        $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-120px', 'margin-bottom':'-114px', 'transform':'scale(0.7)'});
        box.transition('', 'B-12_T2_3', 0, 0, 1);
    }, 3200)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T2_3');
    }, 5000);

})

$('#btn-B-12_T2_3').click(function() {

    $('.all').css({'transition':'1s', 'filter':'blur(400px) sepia(1)'});

})
