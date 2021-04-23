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


    $('.IGCircleArrowLeft_f1, .IGCircleArrowTextLeft_f1, .winnerLeaderTextLeft, .winnerLeaderArrowLeft').css({'transition':'0.5s', 'opacity':'0'});
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

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0.5'});

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
        // $('.longArrowTopIconToOG2').css({'transition':'0.5s', 'opacity':'0.8'})
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
        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
        map.opacity.arrowsFromResultIcons([0, 0], [1, 0])
    }, 7 * delay)

    setTimeout(()=>{
        $('.OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'transition':'1s', 'opacity':'1'});
    }, 8 * delay)

    setTimeout(()=>{
        // show the initial setup for comparison
        $('.OG1FollowersWrapLeft').css({'transition':'3s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft').css({'transition':'3s', 'opacity': '1'});
        $('.OG1LeaderLeft').css({'transition':'3s', 'opacity':'1'});
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
        $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s', 'opacity':'1'});
        $('.IGFI_Top').css({'transition':'0.5s', 'opacity':'0'});
    }, 3 * delay)

    setTimeout(()=>{
        $('.prizeCrownLimeTop').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        $('.IGCircleArrowLeft_f1, .IGCircleArrowTextLeft_f1, .winnerLeaderTextLeft, .winnerLeaderArrowLeft').css({'transition':'0.5s', 'opacity':'1'});
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
        $('.IGLeftFollower1, .prizeCrownLimeTop').css({'transition':'0.5s', 'opacity':'1'})
    }, 6.5 * delay)

    setTimeout(()=>{
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '1'});
        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.IGLeftFollower2').css({'transition':'0.5s', 'opacity':'1'})
        map.opacity.arrowsFromResultIcons([1, 0], [0, 0])
        $('.og2BlackArrow, .OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'transition':'0.5s', 'opacity':'1'});


    }, 8 * delay)

    setTimeout(()=>{
        // show the initial setup for comparison
        $('.OG1FollowersWrapLeft').css({'transition':'3s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft').css({'transition':'3s', 'opacity': '1'});
        $('.OG1LeaderLeft').css({'transition':'3s', 'opacity':'1'});
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

map.wheel.cruising = function(startAngle, duration, number) {

    duration = duration === undefined ? 600 : duration;
    number = number === undefined ? 20 : number;

    map.wheel.spinType = 'spinOngoing';
    map.wheel.spinDuration = duration;
    map.wheel.spinNumber = number;
    map.wheel.spinRepeat = 0;
    map.wheel.create(map.wheel.netPayoffArray);

    map.wheel.myWheelObj.rotationAngle = startAngle //36;

    map.wheel.myWheelObj.startAnimation();

}

map.wheel.wheelSpinWinnerPredetermined = false;
map.wheel.predeterminedWinner = undefined;
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
    if(map.wheel.wheelSpinWinnerPredetermined) {
        winner = map.wheel.predeterminedWinner;
    }

    var stopAt = map.wheel.myWheelObj.getRandomForSegment(winner);
    map.wheel.myWheelObj.animation.stopAngle = stopAt;
    map.wheel.myWheelObj.startAnimation();

    setTimeout(()=>map.wheel.showResult(winner), map.wheel.spinDuration * 1000);

    if(someWheelSwitch){
        setTimeout(()=>{
            box.transition('', 'P-11', 0, 0, 1);
            setTimeout(()=>{
                box.button.show('P-11');
            }, 1000)
        }, (map.wheel.spinDuration + 0.2) * 1000);
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

    // update the code with the data received
    // initially data is empty it is an array full of ?
    map.wheel.netPayoffArray[index - 1] = data.netPayoffs[index - 1];

    //  update tables left and right to the wheel
    var str = 'netPayoffResultRound' + index;
    var span = document.getElementById(str);
    if(map.wheel.netPayoffArray[index - 1] != '?') {
        span.innerHTML = map.wheel.netPayoffArray[index - 1];
        var str2 = '.nptr' + index;
        $(str2).css({'opacity':'1'});
        map.wheel.spinToPick = true;
    }

    // doesn't make too much sense
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


map.wheel.setRoundResultNew = function(index) {

    // update the code with the data received
    // initially data is empty it is an array full of ?
    map.wheel.netPayoffArray[index - 1] = data.netPayoffs[index - 1];

    //  update tables left and right to the wheel
    var str = 'netPayoffResultRound' + index;
    var span = document.getElementById(str);
    if(map.wheel.netPayoffArray[index - 1] != '?') {
        span.innerHTML = map.wheel.netPayoffArray[index - 1];
        var str2 = '.nptr' + index;
        $(str2).css({'opacity':'1'});
        map.wheel.spinToPick = true;
    }

    // doesn't make too much sense
    if(map.wheel.netPayoffArray[index - 1] === '?') {
        map.wheel.spinToPick = false;
    }


    var n = map.wheel.netPayoffArray.length;

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

// map.wheel.setRoundResultDynamic(1, 1500, 600, 20)
map.wheel.setRoundResultDynamic = function(index, myDelay, wheelDuration, wheelSpin) {

    myDelay = myDelay === undefined ? 1540 : myDelay;
    wheelDuration = wheelDuration === undefined ? 600 : wheelDuration;
    wheelSpin = wheelSpin === undefined ? 20 : wheelSpin;


    // console.log('function activated');

    // update the code with the data received
    // initially data is empty it is an array full of ?
    map.wheel.netPayoffArray[index - 1] = data.netPayoffs[index - 1];

    //  update tables left and right to the wheel
    var str = 'netPayoffResultRound' + index;
    var span = document.getElementById(str);
    if(map.wheel.netPayoffArray[index - 1] != '?') {
        span.innerHTML = map.wheel.netPayoffArray[index - 1];
        var str2 = '.nptr' + index;
        $(str2).css({'opacity':'1'});
        map.wheel.spinToPick = true;
    }

    // doesn't make too much sense
    if(map.wheel.netPayoffArray[index - 1] === '?') {
        map.wheel.spinToPick = false;
    }


    var n = map.wheel.netPayoffArray.length;
    var a = 360/n;
    var b = a/2;


    // wheel
    map.wheel.rotationAngle = ((index - 1) * a) - b;
    map.wheel.create(map.wheel.netPayoffArray);
    map.wheel.cruising(map.wheel.rotationAngle, wheelDuration, wheelSpin)



    if(index < 2) {
        // setTimeout(()=>map.wheel.setRoundResult(index + 1), 15wheelSpin);
        setTimeout(()=>map.wheel.setRoundResultDynamic((index + 1), myDelay, wheelDuration, wheelSpin), myDelay);
    }

    if(index === 2) {
        // setTimeout(()=>map.wheel.setRoundResult(index + 1), 15wheelSpin);

        setTimeout(()=>map.wheel.setRoundResultDynamic((index + 1), 500, 200, 20), myDelay);
    }

    if(index < 10 && index > 2) {
        // setTimeout(()=>map.wheel.setRoundResult(index + 1), 15wheelSpin);

        setTimeout(()=>map.wheel.setRoundResultDynamic((index + 1), 500, 200, 20), 500);
    }

    if(index === 10) {

        // setTimeout(()=>map.wheel.cruising(360 - b), 1520);
        setTimeout(()=>map.wheel.cruising((360 - b), 600, 20), 500);
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

data.netPayoffs = [1440, 800, 1654, 934, 1991, 2043, 1334, 1781, 742, 2134];
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


            setTimeout(()=>map.animate.helpSabotage4(1), 500);

        }

        // lime help sabotage arrows
        if(state === 1) {

            $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'0s', 'transform':'rotate3d(3,2,1, 0deg)'});

            // active followers
            $('.s2ActiveFollower').css({'transition':'0.75s', 'opacity':'0.6'});
            $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'1'});

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
            }, 150)

            setTimeout(()=>{
                $('.IGLeftFollower1, .IGLeftFollower2, .IGRightFollower1, .IGRightFollower2').css({'transition':'1s', 'opacity':'1'})
            }, 600)

            // active arrows dissapearing
            setTimeout(()=>{
                $('.arrowDashedLime1').css({'transition':'0.75s', 'opacity':'0'})
            }, 750)

            // if(map.globalVariable.IG101lock) {
            //
            //     setTimeout(()=>{
            //
            //         $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
            //
            //
            //         $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'0.5s', 'opacity':'0'})
            //         // PLACE HERE FOLLOWERS IG ICONS AND FFIGHT ICONS  DISSAPEAR
            //         $('.IGLeftFollower1, .IGLeftFollower2, .IGRightFollower1, .IGRightFollower2').css({'transition':'0.5s', 'opacity':'0'})
            //         $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0.3'});//0.4
            //         $('.subsubOG1L').css({'transition':'0.5s', 'border-color':'transparent', 'background-color':'transparent'});
            //
            //         setTimeout(()=>{
            //             map.animate.helpSabotage4(0)
            //         }, 500)
            //
            //     }, 2500)
            //
            // } else {
            //
            //     // active arrows dissapearing and FIGHT ICON APPEARS
            //     setTimeout(()=>{
            //
            //         $('.OG1FightIconLime').css({'transition':'1.5s', 'opacity':'1'});
            //
            //         // PLACE HERE FIGHT ICONS FOR IG CONTEST
            //         $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'1s', 'opacity':'1'})
            //
            //     }, 2000)
            //
            //     setTimeout(()=>map.animate.helpSabotage42(0), 3000)
            //
            // }

        }

        if(state === 3) {

            // HAVE THE FIGHT ICONS ROTATION HERE MAKE THE BELOW DELAY LONGER

            setTimeout(()=>{
                $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'1s', 'transform':'rotate3d(3,2,1, 1800deg)'});
            }, 500)

            // immidiatly connect to the intial state of followers help sabo setup an at the same time make fight icon dissapear
            setTimeout(()=>{

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

map.animate.helpSabotage42 = function(state) {

    if(!map.globalVariable.stopHelpSabotageAnimation4) {

        if(state === 0) {

            $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'1'});

            // PLACE HERE FIGHT ICONS FOR IG CONTEST
            $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'1s', 'opacity':'1'})

            map.openSpace();
            map.opacity.arrowsToResultIcons([0,0]);
            map.opacity.mainArrowSections([0,0,0]);
            $('.resultsUnknown').css({'transition':'0.5s', 'opacity':'0.3'});

            setTimeout(()=>{
                map.animate.helpSabotage42(1);
            }, 1500)

        }

        if(state === 1) {

            $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'1s', 'transform':'rotate3d(3,2,1, 1800deg)'});

            setTimeout(()=>{
                // map.animate.helpSabotage42(2);
            }, 1500)

        }

        if(state === 2) {

            $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.75s', 'opacity':'0'});
            $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'0.75s', 'opacity':'0'})

            setTimeout(()=>{
                $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'0s', 'transform':'rotate3d(3,2,1, 0deg)'});
            }, 750)

            setTimeout(()=>{
                map.animate.helpSabotage42(0)
            }, 1500)

        }

    } else {
        $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'1'});

        // PLACE HERE FIGHT ICONS FOR IG CONTEST
        $('.IGRightFightIcon, .IGLeftFightIcon').css({'transition':'1s', 'opacity':'1'})
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




// BACKUP
/*
map.animate.helpSabotage3 = function(state) {

    $('.OG1GroupSeparator').css({'transition':'0.75s', 'opacity':'0', 'height':'0px'});

    if(!map.globalVariable.stopHelpSabotageAnimation3) {

        if(state === 0) {

            $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'0'});
            $('.middleStep2Text').css({'transition':'1.15s', 'opacity':'0.2', 'filter':'grayscale(1)','box-shadow':'0px 0px 0px 0px black'});
            $('.leftSideStep1Text, .rightSideStep1Text').css({'transition':'1.15s', 'opacity':'1', 'filter':'grayscale(0)', 'box-shadow':'0px 4px 4px 0px black'});

            $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'1'});
            $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0.3'});
            $('.leaderKingLeft, .leaderKingRight').css({'transition':'0.5s', 'filter':'drop-shadow(0px 0px 0px transparent)'})

            $('.arrowDashed').css({'transition':'0.15s', 'opacity':'0'})
            $('.subsubOG1L').css({'transition':'0.15s', 'border-color':'transparent', 'background-color':'transparent'});

            setTimeout(()=>map.animate.helpSabotage3(1), 0);

        }

        // lime hel sabotage arrows
        if(state === 1) {

            $('.s2ActiveFollower').css({'transition':'1.15s', 'opacity':'1'});
            $('.s2PassiveFollower').css({'transition':'1.15s', 'opacity':'0'});

            $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1.15s', 'opacity':'0.2'});

            setTimeout(()=>{
                $('.subsubOG1L').css({'transition':'2s', 'border-color':'lime', 'background-color':'#e6fbe6'});
            }, 750)


            setTimeout(()=>{
                $('.arrowDashed').css({'transition':'1.15s', 'opacity':'0'})
                $('.arrowDashedLime1').css({'transition':'1.75s', 'opacity':'1'})
            }, 200)

            setTimeout(()=>{
                $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1.75s', 'opacity':'1'});
                $('.leaderKingLeft, .leaderKingRight').css({'transition':'1s', 'filter':'drop-shadow(0px 3px 2px black)'})
            }, 1000)

            setTimeout(()=>map.animate.helpSabotage3(2), 500)

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
            }, 4000)

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
*/

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
    roll: {
        manual:{},
    },
    show: {},
    hide: {},
    introduce: {},
    animate: {
        global: {},
        change: {},
    },
    change: {},
    tutorial: {}

};

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
    $('.IG_heteroLeftFollowers, .IG_heteroRightFollowers, .IG_heteroLeftFollowers, .IG_heteroRightFollowers').css({'display':'none'});

    if(calculator.globalVariable.IG_ourFollowersAreHetero) {

        // OG and IGA and IGB
        $('.IG_homoLeftFollowers').css({'display':'none'});
        $('.IG_heteroLeftFollowers').css({'display':'flex'});

    }

    if(calculator.globalVariable.IG_theirFollowersAreHetero) {

        // OG and IGA and IGB
        $('.IG_homoRightFollowers, .IG_homoRightLeaders').css({'display':'none'});
        $('.IG_heteroRightFollowers, .IG_heteroRightLeaders').css({'display':'flex'});

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
calculator.roll.IG_displayTime = 8000;
calculator.roll.IG_delayTime = 4000
calculator.roll.IG_transitionTime = '2s';
calculator.roll.IG_counter = 0;
calculator.roll.IG_kill = true;

calculator.roll.IG_slowTime = function(counter) {

    console.log('IG inside slowtime');
    // console.log('IG current delay: ' + calculator.roll.displayTime);
    // console.log('IG current counter: ' + calculator.roll.counter);

    if(counter === 1) {
        calculator.roll.IG_displayTime = 4000;
        calculator.roll.IG_delayTime = 2000
        calculator.roll.IG_transitionTime = '1.25s';
    }

    if(counter > 2) {
        calculator.roll.IG_displayTime = 8000;
        calculator.roll.IG_delayTime = 4000
        calculator.roll.IG_transitionTime = '2s';
    }

    // console.log('IG new delay: ' + calculator.roll.IG_displayTime);

}


calculator.roll.IG_transformFade = function(string1, string2) {

    $(string2).css({'transition':calculator.roll.IG_transitionTime,'opacity':'0'});
    setTimeout(()=>{
        $(string1).css({'transition':calculator.roll.IG_transitionTime, 'opacity':'1'});
    },calculator.roll.IG_delayTime)

}

calculator.roll.IG_l1 = function(index, prevIndex, textArray, newRoll) {

    newRoll === undefined ? false : newRoll;

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

        calculator.roll.IG_transformFade(str1, str2);

        // $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        // $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        // setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=> {

            if(!calculator.roll.IG_kill || newRoll) {
                calculator.roll.IG_l1(nextIndex, prevIndex, calculator.roll.IG_lArray)
            }

        }, calculator.roll.IG_displayTime);

    } else {

        lSideText10.innerHTML = 'GROUP A';
        lSideText11.innerHTML = '';
        lSideText12.innerHTML = '';
        lSideText13.innerHTML = '';
        lSideText14.innerHTML = '';
        lSideText15.innerHTML = '';

        $('.IG_lSideText10').css({'transition':'1.5s', 'opacity':'1'});
        $('.IG_lSideText11, .IG_lSideText12, .IG_lSideText13, .IG_lSideText14, .IG_lSideText15').css({'transition':'1s', 'opacity':'0'});

    }


}

calculator.roll.IG_l2 = function(index, prevIndex, textArray, newRoll) {

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

        // $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        // $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        // setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);


        calculator.roll.IG_transformFade(str1, str2);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=> {

            if(!calculator.roll.IG_kill || newRoll) {
                calculator.roll.IG_l2(nextIndex, prevIndex, calculator.roll.IG_olArray)
            }

        }, calculator.roll.IG_displayTime);

    } else {

        lSideText20.innerHTML = 'GROUP A';
        lSideText21.innerHTML = '';
        lSideText22.innerHTML = '';
        lSideText23.innerHTML = '';
        lSideText24.innerHTML = '';
        lSideText25.innerHTML = '';

        $('.IG_lSideText20').css({'transition':'1.5s', 'opacity':'1'});
        $('.IG_lSideText21, .IG_lSideText22, .IG_lSideText23, .IG_lSideText24, .IG_lSideText25').css({'transition':'1s', 'opacity':'0'});

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

calculator.roll.IG_hideAll = function() {

    $('.IG_lSideText10, .IG_lSideText11, .IG_lSideText12, .IG_lSideText13, .IG_lSideText14, .IG_lSideText15').css({'transition':'0s', 'opacity':'0'});
    $('.IG_lSideText20, .IG_lSideText21, .IG_lSideText22, .IG_lSideText23, .IG_lSideText24, .IG_lSideText25').css({'transition':'0s', 'opacity':'0'});

    $('.IG_lSideText10, .IG_lSideText11, .IG_lSideText12, .IG_lSideText13, .IG_lSideText14, .IG_lSideText15').css({'transition':'0s', 'filter':'opacity(0)'});
    $('.IG_lSideText20, .IG_lSideText21, .IG_lSideText22, .IG_lSideText23, .IG_lSideText24, .IG_lSideText25').css({'transition':'0s', 'filter':'opacity(0)'});

}

calculator.roll.IG_showAll = function() {

    $('.IG_lSideText10, .IG_lSideText11, .IG_lSideText12, .IG_lSideText13, .IG_lSideText14, .IG_lSideText15').css({'transition':'0s', 'filter':'opacity(1)'});
    $('.IG_lSideText20, .IG_lSideText21, .IG_lSideText22, .IG_lSideText23, .IG_lSideText24, .IG_lSideText25').css({'transition':'0s', 'filter':'opacity(1)'});

}

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

    calculator.IG_stopRolling = true;
    calculator.roll.IG_adjustRollTextColor();
    calculator.roll.IG_emptyAll();
    calculator.roll.IG_setRolesAndGroups();
    calculator.roll.IG_setYouTag();
    calculator.roll.IG_adjustForTreatment();

    setTimeout(()=>{
        calculator.IG_stopRolling = false;
        calculator.roll.IG_animate();
    }, calculator.roll.IG_displayTime + 500)

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


calculator.roll.IG_updateRollArrays = function() {
    calculator.roll.IG_hideAll();
    calculator.roll.IG_emptyAll();
    calculator.roll.IG_setRolesAndGroups();
    calculator.roll.IG_setYouTag();
    calculator.roll.IG_adjustForTreatment();
    calculator.roll.IG_adjustRollTextColor();
    calculator.roll.IG_counter = 0;
    setTimeout(()=>{
        calculator.roll.IG_showAll();
    }, 10100)
}

calculator.roll.IG_killaWhile = function() {
    calculator.IG_stopRolling = true;
    calculator.roll.IG_kill = true;
    setTimeout(()=>{
        calculator.IG_stopRolling = true;
        calculator.roll.IG_kill = true;
    }, 4000)
}

calculator.roll.IG_resetRoll = function() {

    calculator.IG_stopRolling = true;
    calculator.roll.IG_kill = true;
    // calculator.roll.updateRollArrays();

    setTimeout(()=>{

        calculator.roll.IG_updateRollArrays();

        calculator.IG_stopRolling = false;

        calculator.roll.IG_l1(0, 6, calculator.roll.IG_lArray, true);
        calculator.roll.IG_l2(0, 6, calculator.roll.IG_olArray, true);

        if(calculator.globalVariable.IG_playerView) {

            calculator.roll.IG_dsL(0, 6, calculator.roll.IG_dsLeader);

        }

    }, 1000)

    setTimeout(()=>{
        calculator.roll.IG_kill = false;
    }, 10000)

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

calculator.questions.IG_animateActive = true;

calculator.questions.IG_animate = function(state) {

    if(calculator.questions.IG_animateActive) {
        if(state === 0) {
            calculator.questions.spin1.IG_l1();
            calculator.questions.spin1.IG_l2();
            setTimeout(()=>{
                calculator.questions.IG_animate(1)
            }, 4000)
        }

        if(state === 1) {
            calculator.questions.spin2.IG_l1();
            calculator.questions.spin2.IG_l2();
            setTimeout(()=>{
                calculator.questions.IG_animate(0)
            }, 4000)
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


calculator.wheel.IG_hide = function() {

    $('.IG_pw').css({'opacity':'1', 'zIndex':'1'});
    $('.IG_mywheel').css({'opacity':'0', 'zIndex':'0'});

}

calculator.wheel.IG_show = function() {

    $('.IG_pw').css({'opacity':'0', 'zIndex':'-1'});
    $('.IG_mywheel').css({'opacity':'1', 'zIndex':'0'});

}

calculator.tutorial.forcedWinnerFollower = undefined;

calculator.tutorial.globalWinner = undefined;

calculator.wheel.IG_spin = function(spinDuration) {

    spinDuration = spinDuration === undefined ? 1 : spinDuration;
    var spinTurn;
    spinTurn = spinDuration * 3;

    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

    //---//

    calculator.results.softHide.IG_allResults();

    //---//

    calculator.wheel.IG_spinDuration = spinDuration;
    calculator.wheel.IG_spinNumber = spinTurn;

    calculator.wheel.IG_create(IG_pwin, 'IG_myWheel');
    calculator.wheel.IG_myWheelObj.stopAnimation(false);
    calculator.wheel.IG_myWheelObj.rotationAngle = 0;

    calculator.wheel.IG_show();

    //---//

    var winner = (IG_pwin > Math.random()) ? 1 : 2;

    if(calculator.tutorial.forcedWinnerFollower != undefined) {
        winner = calculator.tutorial.forcedWinnerFollower;
    }

    calculator.tutorial.globalWinner = winner;

    var stopAt = calculator.wheel.IG_myWheelObj.getRandomForSegment(winner);
    calculator.wheel.IG_myWheelObj.animation.stopAngle = stopAt;
    calculator.wheel.IG_myWheelObj.startAnimation();

    //---//

    setTimeout(()=> {
        calculator.results.update.IG_allTextAndColors(winner);
    }, calculator.wheel.IG_spinDuration * 0.75 * 1000);

    setTimeout(()=> {
        calculator.results.show.IG_outcomes();
        calculator.tutorial.forcedWinnerFollower = undefined;
    }, calculator.wheel.IG_spinDuration * 1000);

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
        calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;
        calculator.button.display.IG_spinBottom(true);
        setTimeout(()=>calculator.button.enable.IG_spinBottom(), 300);
    } else {
        calculator.button.display.IG_spinBottom(false);
        calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;
        // COMMENTED FOR THE TUTORIAL WE MAY NEED TO UNCOMMENT IT IN OTHER PLACES
        // calculator.button.disable.IG_spinBottom();
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

// slider rolls are disabled
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
    // calculator.roll.IG_initiate();

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

calculator.hide.IG = function(delay) {

    var delay1, delay2;

    if(delay === undefined) {
        delay1 = '0.3s';
        delay2 = 350;
    } else {
        delay1 = delay + 's';
        delay2 = delay * 1000;
    }

    // console.log('delay: ' + delay);
    // console.log('delay2: ' + delay2);

    $('.IG_generalMarginBox').css({'transition': delay1, 'transform':'scaleY(0)', 'height':'0'});
    setTimeout(()=>{$('.IG_generalMarginBox').css({'display':'none'})}, delay2);

}

calculator.show.IG = function() {
    $('.IG_generalMarginBox').css({'display':'block'});
    setTimeout(()=>{$('.IG_generalMarginBox').css({'transition':'0.3s', 'transform':'scaleY(1)', 'height':'545px'});}, 150);
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

        map.globalVariable.ourSideIsHetero = false;
        map.globalVariable.theirSideIsHetero = false;

        calculator.globalVariable.ourFollowersAreHetero = false;
        calculator.globalVariable.theirFollowersAreHetero = false;

        calculator.globalVariable.IG_ourFollowersAreHetero = false;
        calculator.globalVariable.IG_theirFollowersAreHetero = false;

    } else if (box.global.symmetricHeteroTreatment) {

        map.globalVariable.ourSideIsHetero = true;
        map.globalVariable.theirSideIsHetero = true;

        calculator.globalVariable.ourFollowersAreHetero = true;
        calculator.globalVariable.theirFollowersAreHetero = true;

        calculator.globalVariable.IG_ourFollowersAreHetero = true;
        calculator.globalVariable.IG_theirFollowersAreHetero = true;

    } else if (box.global.asymmetricHeteroTreatment) {

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

                calculator.globalVariable.ourFollowersAreHetero = false;
                calculator.globalVariable.theirFollowersAreHetero = true;

                calculator.globalVariable.IG_ourFollowersAreHetero = false;
                calculator.globalVariable.IG_theirFollowersAreHetero = true;

            } else {

                $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});

                // our side is hetero
                $('.equalityAdjustment2').css({'margin-top':'12px'});
                $('.equalityAdjustment1').css({'margin-top':'0px'});
                $('.treatmentInfoBoxLeftHomo, .treatmentInfoBoxRightHetero').css({'display':'none'})
                $('.treatmentInfoBoxLeftHetero, .treatmentInfoBoxRightHomo').css({'display':'flex'})
                map.globalVariable.ourSideIsHetero = true;
                map.globalVariable.theirSideIsHetero = false;

                calculator.globalVariable.ourFollowersAreHetero = true;
                calculator.globalVariable.theirFollowersAreHetero = false;

                calculator.globalVariable.IG_ourFollowersAreHetero = true;
                calculator.globalVariable.IG_theirFollowersAreHetero = false;

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

            calculator.globalVariable.ourFollowersAreHetero = true;
            calculator.globalVariable.theirFollowersAreHetero = false;

            calculator.globalVariable.IG_ourFollowersAreHetero = true;
            calculator.globalVariable.IG_theirFollowersAreHetero = false;

        }

    }


    map.treatment();
    calculator.icons.IG_adjustForTreatment();

    if(rollOn){
        calculator.roll.IG_reset();
    }


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


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//-------------------------- TUTORIAL EXTENSTIONS ----------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


calculator.show.checkMark = function() {

    $('.success-checkmark').css({'opacity':'1'})
    $('.check-icon').show();
    $('.verticalSection1').css({'transition':'0.5s', 'box-shadow':'0px 0px 4px 2px lime'});

}

calculator.hide.checkMark = function() {

    $('.success-checkmark').css({'transition':'0.5s', 'opacity':'0'})
    $('.verticalSection1').css({'transition':'0.5s', 'box-shadow':'0px 0px 4px 2px black'});

    setTimeout(()=>{
        $('.check-icon').hide();
    }, 500)


}


//----------------------------------------------------------------------------//
//--------------------------- IG TUTORIAL SETUP ------------------------------//
//----------------------------------------------------------------------------//


calculator.tutorial.IG = function(group, isSameColor, showDelay, experimentView) {

    //--------------------------------------------------------------------//
    //------------- COPY PASTES FROM THE ORIGINAL IG INTIATOR ------------//
    //--------------------------------------------------------------------//

    experimentView = experimentView === undefined ? false : experimentView;


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
        calculator.globalVariable.display.IG_cButton = 0;


        //----- HOVER SWITCHES ------//

        calculator.globalVariable.hover.IG_cTitle = 1;
        calculator.globalVariable.hover.IG_cButton = 0;

    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //------------ THINGS THAT MATTERS/CHANGED FOR THE TUTORIAL ----------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//

    $('.IG_generalMarginBox').css({'transition':'1s', 'filter':'opacity(0)'});

    calculator.setup.IG()

    calculator.globalVariable.display.IG_cButton = 0;
    calculator.globalVariable.hover.IG_cButton = 0;

    if(group === 'A'){

        calculator.globalVariable.IG_isIGA = 1;
        calculator.globalVariable.IG_isIGB = 0;

    }

    if(group === 'B'){

        calculator.globalVariable.IG_isIGA = 0;
        calculator.globalVariable.IG_isIGB = 1;
        calculator.globalVariable.tutorial.IG_weAreInTutorial = 0;
        calculator.globalVariable.IG_playerIndex = -1;

    }

    if(experimentView) {
        calculator.globalVariable.IG_playerView = 1;
        calculator.globalVariable.IG_playerIndex = 0;
        calculator.globalVariable.tutorial.IG_weAreInTutorial = 0;
    }

    calculator.globalVariable.tutorial.IG_IGSameColor = isSameColor;
    calculator.globalVariable.tutorial.IG_IGDifferentColor = 1 - calculator.globalVariable.tutorial.IG_IGSameColor;

    calculator.globalVariable.IG_ourFollowersAreHetero = map.globalVariable.ourSideIsHetero;
    calculator.globalVariable.IG_theirFollowersAreHetero = map.globalVariable.theirSideIsHetero;

    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//

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
    // calculator.roll.IG_resetRoll();

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

    calculator.button.display.IG_spinBottom(false);
    // calculator.button.enable.IG_spinBottom();
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


    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//

    //------ REFRESH ------// -> NOT SURE WHEN IT IS NECESSARY TO USE THESE

    calculator.refresh.IG_values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    calculator.refresh.IG_sliders();

    //------ DISPLAY ------//
    $('.IG_generalMarginBox').css({'transition':'0.7s', 'transform':'scale(1)', 'display':'grid'});


    if(experimentView) {
        setTimeout(()=>{
            $('.IG_decisionWrapL').css({'display':'none'});
            calculator.button.display.IG_spinBottom(0)
        }, 50)

    }


    setTimeout(()=> {
        calculator.section.all.IG_opacity(1);
    }, 500);

    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //------------------------- FINAL INITIATION -------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//
    //--------------------------------------------------------------------//

    calculator.show.IG()


    setTimeout(()=>{
        $('.IG_generalMarginBox').css({'transition':'2s', 'filter':'opacity(1)'});
    }, showDelay)

}

calculator.tutorial.denyCalculator = function() {

    $('.IG_X').css({'opacity':'1', 'z-index':'100', 'display':'block'});
    $('.IG_pWrap, .IG_contestSection, .IG_imageWrap23, .IG_payoffWrap').css({'transition':'1s', 'filter':'grayscale(1) opacity(0.6)'});

}

calculator.tutorial.allowCalculator = function() {

    $('.IG_X').css({'opacity':'0', 'z-index':'-100'});
    setTimeout(()=>{
        $('.IG_X').css({'margin-top':'102px', 'display':'none'});
    }, 1000)
    $('.IG_pWrap, .IG_contestSection, .IG_imageWrap23, .IG_payoffWrap').css({'transition':'1s', 'filter':'grayscale(0) opacity(1)'});

}


//----------------------------------------------------------------------------//
//---------------------------- MOUSE LISTENER UP -----------------------------//
//----------------------------------------------------------------------------//


calculator.globalVariable.enervateIsActive = true;
calculator.globalVariable.mouseWasAlreadyUpOnce = false;


// there was a slowdown roll speed option at mmouse up that I canceled
// this is used to reactivate the enervate animation when mouse is up
// when the slider is active the enervate is deactiated for smoother graphics
$(document).mouseup(function() {

    if(!calculator.globalVariable.mouseWasAlreadyUpOnce) {

        // console.log('mouse is up');

        calculator.globalVariable.mouseWasAlreadyUpOnce = true;

        calculator.globalVariable.enervateIsActive = true;

        // calculator.roll.displayTime = 3250;

    }

})

//----------------------------------------------------------------------------//
//---------------------------- tiny animation for infbox ---------------------//
//----------------------------------------------------------------------------//
calculator.tutorial.startFlashAnimation = true;
calculator.tutorial.flash = function(state) {

    if(calculator.tutorial.startFlashAnimation) {
        if(state === 0) {
            $('.IGPrizeIconWrap').css({'transition':'2s', 'opacity':'1'})
            map.opacity.section([0.1,0.2,0.1], 2)
            setTimeout(()=>{
                calculator.tutorial.flash(1);
            }, 2000)
        }

        if(state === 1) {
            $('.IGPrizeIconWrap').css({'transition':'2s', 'opacity':'0.2'})
            map.opacity.section([0.1,1,0.1], 2)
            setTimeout(()=>{
                calculator.tutorial.flash(0);
            }, 2000)
        }
    }

}

//----------------------------------------------------------------------------//
//---------------- SPIN METHOD TO CALL INSIDE INFO BOX -----------------------//
//----------------------------------------------------------------------------//

// delay1 is the same delay from transition method so that we can sync height setup and margin setup
// delay2 is the delay to wait for the wheel to stop and the results to show we can
// later take this out once we figured out the perfect delay timing
// delay3 is the delay to wait until the infobox is closed so that not everything is happening at once

box.spin = function(boxID, delay1, delay2, delay3, spinDuration, spinTurnNumber) {

    setTimeout(()=>{
        calculator.globalVariable.aBitOfWaitingIsDone = false;
        calculator.wheel.spin(spinDuration, spinTurnNumber);
        calculator.globalVariable.dynamicDisplay = false;
    }, delay3)


    //split the boxID to get the first bit to generate boxbox string id
    // boxID will be something like LC2-3
    var boxID1 = boxID.split('-')[0];
    var boxbox = '#boxbox-' + boxID1;

    // use the key to make the margins top and bottom of the boxbox 0
    // here you are using the delay1 passed on by the method
    setTimeout(()=>{
        $(boxbox).css({'margin-top':'0px', 'margin-bottom':'0px'});
    }, delay1)


    // use delay2 to call for transition method with the first string empty
    // second string will be the boxID that the method is receiving
    var newDelay = delay2 + delay3
    setTimeout(()=>{
        box.transition2('', boxID, 0, 0, 1, newDelay);
    })

}

box.spin2 = function(boxID, delay1, delay2, delay3, spinDuration, spinTurnNumber) {

    setTimeout(()=>{
        calculator.globalVariable.aBitOfWaitingIsDone = false;
        calculator.wheel.spin(spinDuration, spinTurnNumber);
        calculator.globalVariable.dynamicDisplay = false;
    }, delay3)


    //split the boxID to get the first bit to generate boxbox string id
    // boxID will be something like LC2-3
    var boxID1 = boxID.split('-')[0];
    var boxbox = '#boxbox-' + boxID1;

    // use the key to make the margins top and bottom of the boxbox 0
    // here you are using the delay1 passed on by the method
    setTimeout(()=>{
        // $(boxbox).css({'margin-top':'0px', 'margin-bottom':'0px'});
    }, delay1)

    // transition2 negates the margin top margin bottom 0 to its original values

    // use delay2 to call for transition method with the first string empty
    // second string will be the boxID that the method is receiving
    var newDelay = delay2 + delay3
    setTimeout(()=>{
        box.transition2('', boxID, 0, 0, 1, newDelay);
    })

}


//-------------------------------------------------------------------------//
//------------------------- DEBUG INITIATION ------------------------------//
//-------------------------------------------------------------------------//


calculator.hide.checkMark();

var debug = {
    start: {}
}


//----------------------------------------------------------------------------//
//----------------------------- IN-GROUP CONTEST -----------------------------//
//----------------------------------------------------------------------------//


debug.start.IG = function(treatment) {

    //------------------------------------------------------------------//

    // // homo symm
    // box.set.treatment(0,0);
    // // hetero symm
    // box.set.treatment(1,0);
    // // hetero asymm
    // box.set.treatment(0,1);

    if(treatment === 0) {
        box.set.treatment(0,0);
        $('#IG_homoCaseInfoBoxIG2-1').css({'display':'inline'});
    }

    if(treatment === 1) {
        box.set.treatment(1,0);
        $('#IG_heteroCaseInfoBoxIG2-1').css({'display':'inline'});
    }

    if(treatment === 2) {
        box.set.treatment(0,1);
        $('#IG_heteroCaseInfoBoxIG2-1').css({'display':'inline'});
    }


    //------------------------------------------------------------------//

    // close the basics info box container
    $('#boxbox-HSINTRO').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-HSINTRO').css({'display':'none'});
    }, 300);

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
    }, 300);

    $('#boxbox-SE').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-SE').css({'display':'none'});
    }, 300);

    $('#boxbox-HS1').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-HS1').css({'display':'none'});
    }, 300);

    $('#boxbox-HS2').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-HS2').css({'display':'none'});
    }, 300);

    $('#boxbox-LC1').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-LC1').css({'display':'none'});
    }, 300);

    $('#boxbox-LC2').css({'transition':'0.3s','margin-bottom':'-20px'});
    setTimeout(()=>{
        $('#boxbox-LC2').css({'display':'none'});
    }, 300);

    //------------------------------------------------------------------//

    calculator.stopRolling = true;
    calculator.IG_stopRolling = true;
    // calculator.roll.initiate()
    // calculator.roll.IG_initiate()

    // ADDITIONAL MAP ADJUSTMENT NOT REALLY USED IN THE REAL code
    $('.sexplain').css({'display':'none', 'margin-top':'30px', 'transform':'scaleY(0)'});
    map.opacity.mainArrowSections([0,0,0])
    map.opacity.cover([-1,-1, 1])

    // close the box

    title.update.textColor(-6750, true, 30);
    setTimeout(()=>{
        // show new title and a segue info box
        title.update.text('IN-GROUP CONTEST');
        title.update.size(true);
    }, 750)


    // hide the calculator
    setTimeout(()=>{

        $('.generalMarginBox').css({'transform':'scaleY(0)'});
        setTimeout(()=>{
            $('.generalMarginBox').css({'display':'none'});
            $('#boxbox-LC2').css({'display':'none'});
            $('#boxbox-IG').css({'display':'block'});
        }, 1000)

    }, 750)

    // set the map to LC + IG setup
    map.opacity.main([1,1,0.5]);
    map.opacity.section([0.1,0.1,0.3]);
    map.opacity.inside([-1,1,0]);
    $('.IGFightIconLimeTop, .IGFightIconLimeBottom').css({'opacity':'1', 'margin-top':'13px'});
    $('.IGFightIcon').css({'opacity':'0'});
    map.animate.helpSabotage4Setup();
    setTimeout(()=>{
        map.animate.helpSabotage4(0);
    }, 1500)
    //
    // show the map
    setTimeout(()=>{

        $('.sexplain').css({'display':'flex', 'margin-top':'30px', 'transform':'scaleY(1)'});
        setTimeout(()=>{
            $('.sexplain').css({'transition':'1s', 'opacity':'1'});
            map.normalSize.main(1);
        }, 50)

    }, 1000)


    // show the new infobox
    setTimeout(()=>{
        box.transition('', 'IG-101', 0, 0, 1, 100);

        setTimeout(()=>{
            // map.animate.helpSabotage4(0);
        }, 0)

    }, 3750)

    // setTimeout(()=>{
    //     map.animate.helpSabotage4(0);
    // }, 8000)


    setTimeout(()=>{
        box.button.show('IG-101');
    }, 6000)

}


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


debug.start.IG(0);

var listener = {};

var activator = {};

var minimizeFunction = function() {

    calculator.globalVariable.aBitOfWaitingIsDone = false;
    calculator.tutorial.specialHoverSetupActive = true;
    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,1]);
    $('.verticalSection1').css({'margin-left':'273px'});
    $('.verticalSeparator').css({'height':'133px', 'margin-top':'31px'});
    calculator.section.hs.set.iconPosition('bottom');
    calculator.titles.hs.hide();
    calculator.section.hs.minimize(true);
    calculator.titles.hs.ghost.text();
    calculator.titles.hs.ghost.modifyText('FOLLOWERS\' HELP & SABOTAGE');
    calculator.titles.hs.ghost.show();
    $('.generalMarginBox').css({'margin-top':'-111px'});
    $('.rightLeaderIconMainWrap').css({'transition':'0.5s', 'margin-top':'8px'});


}

var maximizeFunction = function() {

    calculator.tutorial.specialHoverSetupActive = false;
    $('.generalMarginBox').css({'margin-top':'-77px'});
    calculator.section.hs.minimize(false);
    calculator.titles.hs.ghost.hide();
    calculator.titles.hs.show();
    calculator.section.hs.set.iconPosition('center');
    // reverse vertical section position
    $('.verticalSection1').css({'margin-left':'201px'});
    $('.verticalSeparator').css({'height':'166px', 'margin-top':'0px'});
    $('.rightLeaderIconMainWrap').css({'transition':'0.5s', 'margin-top':'0px'});

}

var maxResult = function() {

    $('.resultLeft').css({'transition':'1s', 'transform':'scale(1.5)', 'margin-left':'81px', 'margin-top':'-22px'});
    $('.resultRight').css({'transition':'1s', 'transform':'scale(1.5)', 'margin-left':'-25px', 'margin-top':'-22px'});

}

var minResult = function() {

    $('.resultLeft').css({'transition':'0s', 'transform':'scale(1)', 'margin-left':'22px', 'margin-top':'0px'});
    $('.resultRight').css({'transition':'0s', 'transform':'scale(1)', 'margin-left':'43px', 'margin-top':'0px'});

}

calculator.animateRoleResultTextsActive = true;
calculator.animate.roleResultTexts = function(state) {

    if(calculator.animateRoleResultTextsActive) {


        if(state === 0) {

            if(calculator.tutorial.globalWinner === 1) {
                $('.roleTextIGAnimation1').css({'transition':'1s', 'font-weight':'300',
                'transform':'scale(1.5)', 'color':'lime'});
            }

            if(calculator.tutorial.globalWinner === 2) {
                $('.roleTextIGAnimation2').css({'transition':'1s', 'font-weight':'300',
                'transform':'scale(1.5)', 'color':'lime'});
            }

            setTimeout(()=>{
                calculator.animate.roleResultTexts(1)
            }, 1000)

        }

        if(state === 1) {

            if(calculator.tutorial.globalWinner === 1) {
                $('.roleTextIGAnimation1').css({'transition':'1s', 'font-weight':'300',
                'transform':'scale(1)', 'color':'black'});
            }

            if(calculator.tutorial.globalWinner === 2) {
                $('.roleTextIGAnimation2').css({'transition':'1s', 'font-weight':'300',
                'transform':'scale(1)', 'color':'black'});
            }

            setTimeout(()=>{
                calculator.animate.roleResultTexts(0)
            }, 1000)

        }

    } else {

        $('.roleTextIGAnimation1, .roleTextIGAnimation2').css({'transition':'1s', 'font-weight':'100',
        'transform':'scale(1)', 'color':'black'});

    }

}


calculator.animatePaymentResultTextsActive = true;
calculator.animate.paymentResultTexts = function(state) {

    if(calculator.animatePaymentResultTextsActive) {

        if(state === 0) {

            if(calculator.tutorial.globalWinner === 1) {
                $('.IG_pLeft').css({'transition':'1s',
                'transform':'scale(1.5)', 'color':'lime'});
            }

            if(calculator.tutorial.globalWinner === 2) {
                $('.IG_pRight').css({'transition':'1s',
                'transform':'scale(1.5)', 'color':'lime'});
            }

            setTimeout(()=>{
                calculator.animate.paymentResultTexts(1)
            }, 1000)

        }

        if(state === 1) {

            if(calculator.tutorial.globalWinner === 1) {
                $('.IG_pLeft').css({'transition':'1s',
                'transform':'scale(1)', 'color':'black'});
            }

            if(calculator.tutorial.globalWinner === 2) {
                $('.IG_pRight').css({'transition':'1s',
                'transform':'scale(1)', 'color':'black'});
            }

            setTimeout(()=>{
                calculator.animate.paymentResultTexts(0)
            }, 1000)

        }

    } else {

        $('.IG_pLeft, .IG_pRight').css({'transition':'1s',
        'transform':'scale(1)', 'color':'black'});

    }

}


//----------------------------------------------------------------------------//
//--------------------------- FOLLOWERS COMPETITION --------------------------//
//----------------------------------------------------------------------------//

$('#btn-IG-101').click(function() {

    map.globalVariable.stopHelpSabotageAnimation4 = false;
    map.globalVariable.IG101lock = false;

    map.animate.helpSabotage42(0);

    box.transition('IG-101', 'IG-102', 0, 0, 1, 750);

    setTimeout(()=>{
        box.button.show('IG-102');
    }, 3000)

})


$('#btn-IG-102').click(function() {


    // map.opacity.mainArrowSections([0,0,0]);
    //
    // // show question mark
    // setTimeout(()=>{
    //     map.openSpace();
    //     $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0.5'});
    //     map.opacity.mainArrowSections([0,0,0]);
    // }, 750)
    //
    //
    // box.transition('IG-102', 'IG-103', 0, 0, 1, 750);
    //
    // setTimeout(()=>{
    //     box.button.show('IG-103');
    // }, 3000)

    map.globalVariable.stopHelpSabotageAnimation4 = true;
    map.closeSpace()
    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    map.opacity.mainArrowSections([0,0,0]);

    box.transition('IG-102', 'IG-2', 0, 0, 1, 750);

    // isolate group A and enlarge it
    setTimeout(()=>{
        $('.IGBottomContestWrap').css({'transition':'1s', 'filter':'opacity(0)'});
        $('.IGTopContestWrap').css({'transition':'1s', 'transform':'scale(2)', 'margin-top':'124px'});
        map.opacity.main([0, 1, 0], 1);
    }, 750)

    setTimeout(()=>{
        box.button.show('IG-2');
        $('.IG_generalMarginBox').css({'transition':'0s', 'filter':'opacity(0)'});
    }, 3000)

})

// skipped
$('#btn-IG-103').click(function() {

    map.globalVariable.stopHelpSabotageAnimation4 = true;
    map.closeSpace()
    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    map.opacity.mainArrowSections([0,0,0]);

    box.transition('IG-103', 'IG-2', 0, 0, 1, 750);

    // isolate group A and enlarge it
    setTimeout(()=>{
        $('.IGBottomContestWrap').css({'transition':'1s', 'filter':'opacity(0)'});
        $('.IGTopContestWrap').css({'transition':'1s', 'transform':'scale(2)', 'margin-top':'124px'});
        map.opacity.main([0, 1, 0], 1);
    }, 750)

    setTimeout(()=>{
        box.button.show('IG-2');
        $('.IG_generalMarginBox').css({'transition':'0s', 'filter':'opacity(0)'});
    }, 3000)

})

$('#btn-IG-2').click(function() {

    // calculator.roll.IG_resetRoll();

    title.update.size(false);

    // hide the infobox
    box.transition('IG-2', '', 0, 0, 1, 750);

    $('.IG_generalMarginBox').css({'transition':'0s', 'filter':'opacity(0)'});
    $('#IG-301-homo').css({'display':'none'});
    $('#IG-301-hetero').css({'display':'none'});
    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
        $('#IG-301-homo').css({'display':'inline-block'});
    } else {
        $('#IG-301-hetero').css({'display':'inline-block'});
    }


    // hide the map
    setTimeout(()=>{
        $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-251px'});

        if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
            $('.IG_generalMarginBox').css({'transition':'0.3s', 'margin-top':'-308px'});

        }

        $('.sexplain').css({'transition':'1s', 'opacity':'0'})
        $('.IG_generalMarginBox').css({'transition':'0s', 'filter':'opacity(0)'});
        setTimeout(()=>{
            $('.IG_generalMarginBox').css({'transition':'0.5s', 'filter':'opacity(1)'});
        }, 500)
    },1000)



    calculator.tutorial.IG('A', false, 1000, true);
    calculator.roll.IG_resetRoll();
    setTimeout(()=>{
        calculator.titles.contest.IG_hide();
        calculator.results.hide.IG_leaderOutcomes()
        calculator.globalVariable.IG_contestResultsExist = false;
        calculator.space.update.IG_heights();
    }, 100)
    // at the same time show the IG calculator (quasi matching the icons)
    // function(group, isSameColor, displayDelay)
    // calculator.tutorial.IG('A',1,1000)
    // calculator.roll.IG_resetRoll();
    setTimeout(()=>{
        calculator.titles.contest.IG_hide();
        calculator.results.hide.IG_leaderOutcomes()
        calculator.globalVariable.IG_contestResultsExist = false;
        calculator.space.update.IG_heights();
    }, 1100)
    setTimeout(()=>{
        calculator.results.hide.IG_leaderOutcomes()
        calculator.space.update.IG_heights();
        calculator.button.display.IG_spinBottom(0);
        $('.IG_decisionWrapL').css({'display':'none'});
    }, 2000)
    setTimeout(()=>{
        calculator.results.hide.IG_leaderOutcomes()
        calculator.space.update.IG_heights();
        calculator.button.display.IG_spinBottom(0);
        $('.IG_decisionWrapL').css({'display':'none'});
    }, 3000)


    $('.rightFollowerIconMainWrap').css({'filter':'drop-shadow(5px 5px 3px transparent)'});
    $('.IG_generalMarginBox').css({'transition':'0.5s', 'padding-top':'10px'});
    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
        $('.rightFollowerIconMainWrap').css({'margin-top':'0px'});
        $('.IG_generalMarginBox').css({'transition':'0.5s', 'padding-top':'0px'});
    }
    // show the new infobox
    setTimeout(()=>{
        box.transition('', 'IG-301', 0, 0, 1, 750);
    }, 1500)

    // show the button
    setTimeout(()=>{

        box.button.show('IG-301');

    }, 3000)


    setTimeout(()=>{
        $('.sexplain').css({'display':'none'});
        $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'8px'});
        if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
            $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-6px'});
        }
        box.button.show('IG-301');
        $('#boxbox-IG').css({'margin-top':'20px'});

        $('.IG_decisionWrapL').css({'display':'none'});
        $('.IG_decisionWrapL').css({'display':'none', 'filter':'opacity(0)'});

    }, 5000)

})

$('#btn-IG-301').click(function() {

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
        $('.rightFollowerIconMainWrap').css({'margin-top':'0px'});
    }

    box.transition('IG-301', 'IG-4', 0, 0, 1, 750);

    setTimeout(()=>{
        box.button.show('IG-4');
    }, 3000)

})
// SKIPPED
$('#btn-IG-302').click(function() {

    // different color followers
    calculator.tutorial.IG('A',0,0);
    setTimeout(()=>{
        calculator.titles.contest.IG_hide();
        calculator.results.hide.IG_leaderOutcomes()
        calculator.globalVariable.IG_contestResultsExist = false;
        calculator.space.update.IG_heights();
        calculator.roll.IG_killaWhile();
    }, 100)
    setTimeout(()=>{
        calculator.space.update.IG_heights();
        calculator.roll.IG_killaWhile();
        calculator.roll.IG_hideAll();
    }, 500)

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
        $('.rightFollowerIconMainWrap').css({'margin-top':'0px'});
    }

    box.transition('IG-302', 'IG-303', 0, 0, 1, 750);

    setTimeout(()=>{
        box.button.show('IG-303');
    }, 3000)

})
// SKIPPED
$('#btn-IG-303').click(function() {

    box.transition('IG-303', 'IG-4', 0, 0, 1, 750);

    setTimeout(()=>{
        box.button.show('IG-4');
    }, 3000)

})

$('#btn-IG-4').click(function() {

    // calculator.roll.IG_resetRoll();

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        box.transition('IG-4', 'IG-5A', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('IG-5A');
        }, 3000)

    }

    if(box.global.symmetricHeteroTreatment) {

        box.transition('IG-4', 'IG-5B', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('IG-5B');
        }, 3000)

    }

    if(box.global.asymmetricHeteroTreatment) {

        box.transition('IG-4', 'IG-5C', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('IG-5C');
        }, 3000)

    }

})

activator.ig_6_f1 = false;
listener.ig_6_f1 = false;
activator.ig_6_f2 = false;
listener.ig_6_f2 = false;
$('#btn-IG-5A, #btn-IG-5B, #btn-IG-5C').click(function() {

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        box.transition('IG-5A', 'IG-6', 0, 0, 1, 750);

    }

    if(box.global.symmetricHeteroTreatment) {

        box.transition('IG-5B', 'IG-6', 0, 0, 1, 750);

    }

    if(box.global.asymmetricHeteroTreatment) {

        box.transition('IG-5C', 'IG-6', 0, 0, 1, 750);

    }

    setTimeout(()=>{
        calculator.pointers.IG_activate([1, 1]);
        listener.ig_6_f1 = true;
        listener.ig_6_f2 = true;
    }, 1000)


})

$('#btn-IG-7').click(function() {

    calculator.questions.IG_animateActive = false;

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        box.transition('IG-7', 'IG-8', 0, 0, 1, 1500);

        setTimeout(()=>{
            calculator.animatePaymentResultTextsActive = true;
            calculator.animate.paymentResultTexts(0);
        }, 1500)

        calculator.wheel.IG_spin(1);

        setTimeout(()=>{
            box.button.show('IG-8');
        }, 5000)

    } else {

        box.transition('IG-7', 'IG-701A', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('IG-701A');
        }, 3000)

    }



})

$('#btn-IG-701A').click(function() {

    box.transition('IG-701A', 'IG-8', 0, 0, 1, 1500);

    calculator.wheel.IG_spin(1);

    setTimeout(()=>{
        calculator.animatePaymentResultTextsActive = true;
        calculator.animate.paymentResultTexts(0);
    }, 1000)

    setTimeout(()=>{
        box.button.show('IG-8');
    }, 3000)

})

$('#btn-IG-8').click(function() {

    box.transition('IG-8', 'IG-9', 0, 0, 1, 750);

    calculator.animatePaymentResultTextsActive = false;

    setTimeout(()=>{
        calculator.animateRoleResultTextsActive = true;
        calculator.animate.roleResultTexts(0);
    }, 750)

    setTimeout(()=>{
        box.button.show('IG-9');
    }, 3000)

})

$('#btn-IG-9').click(function() {

    box.transition('IG-9', 'IG-10', 0, 0, 1, 1500);

    calculator.animateRoleResultTextsActive = false;

    calculator.tutorial.forcedWinnerFollower = 1;
    calculator.wheel.IG_spin(1);
    calculator.lock.IG_activate([1,1]);

    setTimeout(()=>{
        box.button.show('IG-10');
    }, 3000)

})

$('#btn-IG-10').click(function() {


    box.transition('IG-10', '', 0, 0, 1, 0);
    $('.sexplain').css({'transition':'0s', 'filter':'opacity(0)'});

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
        $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'4px'});
    }

    setTimeout(()=>{
        $('#boxbox-IG').css({'display':'none'});
    }, 750)

    // calculator.tutorial.forcedWinnerFollower = 1;
    // calculator.wheel.IG_spin(1);
    setTimeout(()=>{
        // show map
        map.tutorial.result.introTop();
        setTimeout(()=>{
            $('.sexplain').css({'transition':'1s', 'filter':'opacity(1)'});
        }, 250)
    }, 500)

    // hide box storage open a new storage
    setTimeout(()=>{
        // animate leader A losing
        map.tutorial.result.ALost(500);
    }, 2000)

    setTimeout(()=>{
        $('#boxbox-IG2').css({'display':'block'});
        $('#boxbox-IG2').css({'transition':'0s', 'margin-top':'-47px'});
        setTimeout(()=>{
            $('#boxbox-IG2').css({'transition':'1s', 'margin-top':'-14px'});
            $('#boxbox-IG2').css({'transition':'1s', 'margin-bottom':'2px'});
            setTimeout(()=>{
                box.transition('', 'IG2-1', 0, 0, 1, 250);
                $('#boxbox-IG2').css({'margin-top':'6px'});
            }, 50)
        }, 300)

    }, 6000)


    setTimeout(()=>{
        $('#boxbox-IG2').css({'transition':'0.5s', 'margin-bottom':'2px'});
        box.button.show('IG2-1');
    }, 8000)

})

$('#btn-IG2-1').click(function() {

    // $('.sexplain').css({'transition':'0s', 'filter':'opacity(0)'});
    map.tutorial.result.reset();

    box.transition('IG2-1', '', 0, 0, 1, 0);

    setTimeout(()=>{
        // animate leader A losing
        map.tutorial.result.AWon(500);
    }, 750)

    setTimeout(()=>{
        box.transition('', 'IG2-2', 0, 0, 1, 50);
        $('#boxbox-IG2').css({'transition':'0.5s', 'margin-bottom':'2px'});
        $('.IG_X').css({'margin-top':'313px'});
    }, 6000)

    setTimeout(()=>{
        box.button.show('IG2-2');
    }, 8000)

})

$('#btn-IG2-2').click(function() {

    $('.IG_generalMarginBox').css({'transition':'1s', 'filter':'opacity(0)'});
    $('.sexplain').css({'transition':'0.3s', 'filter':'opacity(0)'})

    setTimeout(()=>{
        calculator.tutorial.allowCalculator();
        map.tutorial.result.reset();
    }, 300)

    box.transition('IG2-2', '', 0, 0, 1, 0);

    setTimeout(()=>{
        $('#boxbox-IG2').css({'display':'none'});
        $('#boxbox-IG').css({'display':'block'});
    }, 750)

    setTimeout(()=>{

        map.closeSpace();
        $('.resultsUnknown').css({'transition':'0s', 'opacity': '0'});
        $('.IGBottomContestWrap').css({'transition':'scale(1)', 'filter':'opacity(1)'});
        $('.IGTopContestWrap').css({'transition':'1s', 'filter':'opacity(0)'});

        setTimeout(()=>{
            $('.sexplain').css({'transition':'0.5s', 'filter':'opacity(1)'})
        }, 1000)

        if(!box.global.asymmetricHeteroTreatment) {
            setTimeout(()=>{
                map.opacity.main([0, 1, 0], 1);
            }, 3500)
        }

    }, 500)

    if(!box.global.asymmetricHeteroTreatment) {
        setTimeout(()=>{
            $('.IGBottomContestWrap').css({'transition':'1s', 'transform':'scale(2)', 'margin-top':'-80px'});
        }, 4750)
    }

    if(!box.global.asymmetricHeteroTreatment) {

        // transition to calculator from map
        setTimeout(()=>{

            $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-73px'});
            if(box.global.symmetricHeteroTreatment) {///789789
                $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-25px'});
            }
            if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
                $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-73px'});
            }

            $('.sexplain').css({'transition':'1s', 'opacity':'0'})
            $('.IG_ctWrap, .IG_hsWrap').css({'transition':'1s', 'filter':'opacity(1)'});

            calculator.tutorial.IG('B',0,0);
            calculator.lock.IG_activate([0,0]);
            setTimeout(()=>{
                calculator.titles.contest.IG_hide();
                calculator.results.hide.IG_leaderOutcomes()
                calculator.globalVariable.IG_contestResultsExist = false;
                calculator.space.update.IG_heights();
                calculator.roll.IG_killaWhile();
                calculator.roll.IG_hideAll();
            }, 100)

            setTimeout(()=>{
                calculator.space.update.IG_heights();
                calculator.roll.IG_hideAll();
            }, 500)

            if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
                $('.rightFollowerIconMainWrap').css({'margin-top':'0px'});
            }
            if(box.global.asymmetricHeteroTreatment) {
                $('.rightFollowerIconMainWrap').css({'margin-top':'0px'});
            }

            // instead of hiding the wheel created by winwheel let's update ot
            calculator.wheel.IG_create(IG_pwin, 'IG_myWheel');
            calculator.wheel.IG_myWheelObj.stopAnimation(false);
            calculator.wheel.IG_myWheelObj.rotationAngle = 0;
            calculator.wheel.IG_show();

            setTimeout(()=>{

                $('.IG_generalMarginBox').css({'transition':'0.5s', 'filter':'opacity(1)'});
                // $('.IG_generalMarginBox').css({'transition':'1s', 'margin-top':'-26px'});
                // $('.IG_generalMarginBox').css({'transition':'0.3s', 'margin-top':'-73px'});
                calculator.titles.contest.IG_hide();
                calculator.results.hide.IG_leaderOutcomes()
                calculator.globalVariable.IG_contestResultsExist = false;
                calculator.space.update.IG_heights();

            }, 100)
        }, 5750)

        setTimeout(()=>{
            box.transition('', 'IG-12A', 0, 0, 1, 0);
        }, 7000)

        setTimeout(()=>{
            box.button.show('IG-12A');
        }, 9000)

        setTimeout(()=>{
            calculator.roll.IG_resetRoll();
        }, 10000)

    } else {

        setTimeout(()=>{
            $('.IGBottomContestWrap').css({'transition':'scale(1)', 'filter':'opacity(1)'});
            $('.IGTopContestWrap').css({'transform':'scale(1)', 'margin-top':'3px', 'filter':'opacity(1)'});
        }, 600)

        setTimeout(()=>{
            box.transition('', 'IG-12B0', 0, 0, 1, 0);
            // calculator.roll.IG_resetRoll();
        }, 2000)


        setTimeout(()=>{
            box.button.show('IG-12B0');
            // calculator.roll.IG_resetRoll();
        }, 5000)

    }

})

activator.ig_13_f1 = false;
listener.ig_13_f1 = false;
activator.ig_13_f2 = false;
listener.ig_13_f2 = false;
$('#btn-IG-12A').click(function() {

    box.transition('IG-12A', 'IG-13', 0, 0, 1, 750);

    setTimeout(()=>{
        calculator.pointers.IG_activate([1, 1]);
        listener.ig_13_f1 = true;
        listener.ig_13_f2 = true;
    }, 1000)

})

$('#btn-IG-12B0').click(function() {

    box.transition('IG-12B0', '', 0, 0, 1, 0);

    setTimeout(()=>{
        $('.IGTopContestWrap').css({'filter':'opacity(0)'});
        setTimeout(()=>{
            map.opacity.main([0, 1, 0], 1);
            $('.IGBottomContestWrap').css({'transition':'1s', 'transform':'scale(2)', 'margin-top':'-80px'});
        }, 500)
    }, 500)

    setTimeout(()=>{

        $('.IG_generalMarginBox').css({'transition':'0.5s', 'margin-top':'-73px'});

        $('.sexplain').css({'transition':'1s', 'opacity':'0'})
        $('.IG_ctWrap, .IG_hsWrap').css({'transition':'1s', 'filter':'opacity(1)'});

        calculator.tutorial.IG('B',0,0);
        calculator.lock.IG_activate([0,0]);

        setTimeout(()=>{
            calculator.titles.contest.IG_hide();
            calculator.results.hide.IG_leaderOutcomes()
            calculator.globalVariable.IG_contestResultsExist = false;
            calculator.space.update.IG_heights();
            calculator.roll.IG_killaWhile();
            calculator.roll.IG_hideAll();
        }, 100)

        setTimeout(()=>{
            calculator.space.update.IG_heights();
            calculator.roll.IG_hideAll();
        }, 500)

        if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
            $('.rightFollowerIconMainWrap').css({'margin-top':'0px'});
        }
        if(box.global.asymmetricHeteroTreatment) {
            $('.rightFollowerIconMainWrap').css({'margin-top':'0px'});
        }

        // instead of hiding the wheel created by winwheel let's update ot
        calculator.wheel.IG_create(IG_pwin, 'IG_myWheel');
        calculator.wheel.IG_myWheelObj.stopAnimation(false);
        calculator.wheel.IG_myWheelObj.rotationAngle = 0;
        calculator.wheel.IG_show();

        setTimeout(()=>{
            $('.IG_generalMarginBox').css({'transition':'0.5s', 'filter':'opacity(1)'});
            calculator.titles.contest.IG_hide();
            calculator.results.hide.IG_leaderOutcomes()
            calculator.globalVariable.IG_contestResultsExist = false;
            calculator.space.update.IG_heights();
        }, 100)

    }, 1250)

    setTimeout(()=>{
        box.transition('', 'IG-12B1', 0, 0, 1, 0);

        setTimeout(()=>{
            box.button.show('IG-12B1');
        }, 1500)

        setTimeout(()=>{
            calculator.roll.IG_resetRoll();
        }, 10000)

    }, 2000)

})

$('#btn-IG-12B1').click(function() {

    box.transition('IG-12B1', 'IG-12B2', 0, 0, 1, 750);

    setTimeout(()=>{
        box.button.show('IG-12B2');
    }, 3000)

})

$('#btn-IG-12B2').click(function() {

    box.transition('IG-12B2', 'IG-13', 0, 0, 1, 750);

    setTimeout(()=>{
        calculator.pointers.IG_activate([1, 1]);
        listener.ig_13_f1 = true;
        listener.ig_13_f2 = true;
    }, 1000)

})

$('#btn-IG-13').click(function() {

    box.transition('IG-13', '', 0, 0, 1, 0);

    setTimeout(()=>{
        calculator.wheel.IG_spin(1);
    }, 1000)

    setTimeout(()=>{
        box.transition('', 'IG-14', 0, 0, 1, 0);
    }, 2500)

    setTimeout(()=>{
        box.button.show('IG-14');
    }, 4500)

})

// skipped
$('#btn-IG-13A').click(function() {

    box.transition('IG-13A', '', 0, 0, 1, 0);

    setTimeout(()=>{
        calculator.wheel.IG_spin(3);
    }, 1000)

    setTimeout(()=>{
        box.transition('', 'IG-14', 0, 0, 1, 0);
    }, 4500)


    setTimeout(()=>{
        box.button.show('IG-14');
    }, 7500)

})

$('#btn-IG-13B').click(function() {

    box.transition('IG-13B', '', 0, 0, 1, 0);

    setTimeout(()=>{
        calculator.wheel.IG_spin(1);
    }, 1000)

    setTimeout(()=>{
        box.transition('', 'IG-14', 0, 0, 1, 0);
    }, 1500)


    setTimeout(()=>{
        box.button.show('IG-14');
    }, 3500)

})

$('#btn-IG-14').click(function() {

    $('.all').css({'transition':'1s', 'filter':'blur(400px) sepia(1)'});

})


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

//----------------------------------------------------------------------------//
//--------------------------------- CHANGE -----------------------------------//
//----------------------------------------------------------------------------//


$('#IG_lSlider1').change(function() {

    //---------------------------------------//
    //----- IG-6 SLIDER VALUE LISTENER -----//
    //---------------------------------------//

    if(listener.ig_6_f1) {
        activator.ig_6_f1 = true;
        listener.ig_6_f1 = false;
    }

    if(activator.ig_6_f1 && activator.ig_6_f2) {

        setTimeout(()=>{

            activator.ig_6_f1 = false;
            activator.ig_6_f2 = false;

            box.transition('IG-6', 'IG-7', 0, 0, 1, 750);

            calculator.questions.activate.IG_all([0,1])
            calculator.questions.IG_animate(0)

            setTimeout(()=>{
                box.button.show('IG-7');
            }, 3000)

        }, 1000)

    }

    //---------------------------------------//
    //----- IG-13 SLIDER VALUE LISTENER -----//
    //---------------------------------------//

    if(listener.ig_13_f1) {
        activator.ig_13_f1 = true;
        listener.ig_13_f1 = false;
    }

    if(activator.ig_13_f1 && activator.ig_13_f2) {

        setTimeout(()=>{

            activator.ig_13_f1 = false;
            activator.ig_13_f2 = false;

            if(box.global.asymmetricHeteroTreatment) {

                setTimeout(()=>{
                    // box.transition('IG-13', 'IG-13A', 0, 0, 1, 750);
                    //
                    // setTimeout(()=>{
                    //     box.button.show('IG-13A');
                    // }, 3000)

                    box.button.show('IG-13');

                }, 1000)


            } else if(box.global.symmetricHeteroTreatment) {

                setTimeout(()=>{
                    box.transition('IG-13', 'IG-13B', 0, 0, 1, 750);

                    setTimeout(()=>{
                        box.button.show('IG-13B');
                    }, 3000)
                }, 1000)

            } else {

                setTimeout(()=>{
                    box.button.show('IG-13');
                }, 1000)

            }

        }, 1000)

    }

})

$('#IG_olSlider1').change(function() {

    //---------------------------------------//
    //----- IG-6 SLIDER VALUE LISTENER -----//
    //---------------------------------------//

    if(listener.ig_6_f2) {
        activator.ig_6_f2 = true;
        listener.ig_6_f2 = false;
    }

    if(activator.ig_6_f1 && activator.ig_6_f2) {

        setTimeout(()=>{

            activator.ig_6_f1 = false;
            activator.ig_6_f2 = false;

            box.transition('IG-6', 'IG-7', 0, 0, 1, 750);

            calculator.questions.activate.IG_all([0,1])
            calculator.questions.IG_animate(0)

            setTimeout(()=>{
                box.button.show('IG-7');
            }, 3000)

        }, 1000)

    }

    //---------------------------------------//
    //----- IG-13 SLIDER VALUE LISTENER -----//
    //---------------------------------------//

    if(listener.ig_13_f2) {
        activator.ig_13_f2 = true;
        listener.ig_13_f2 = false;
    }

    if(activator.ig_13_f1 && activator.ig_13_f2) {

        setTimeout(()=>{

            activator.ig_13_f1 = false;
            activator.ig_13_f2 = false;

            if(box.global.asymmetricHeteroTreatment) {

                setTimeout(()=>{
                    box.button.show('IG-13');
                }, 1000)


            } else if(box.global.symmetricHeteroTreatment) {

                setTimeout(()=>{
                    box.transition('IG-13', 'IG-13B', 0, 0, 1, 750);

                    setTimeout(()=>{
                        box.button.show('IG-13B');
                    }, 3000)
                }, 1000)

            } else {

                setTimeout(()=>{
                    box.button.show('IG-13');
                }, 1000)

            }

        }, 1000)

    }

})
