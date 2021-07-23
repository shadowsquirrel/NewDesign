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





//----------------------------------------------------------------------------//
//--------------------------- OG2 TUTORIAL METHODS ---------------------------//
//----------------------------------------------------------------------------//


calculator.tutorial.rotateSectionCoverIsOn = true;
calculator.tutorial.rotateSectionCoverDelay = 3000;

calculator.tutorial.rotateSectionCover = function(state) {

    if(calculator.tutorial.rotateSectionCoverIsOn) {


        if(state === 0) {
            map.opacity.cover([0,0,0], 3);
            map.opacity.section([1,1,1], 3);
            setTimeout(()=>{
                calculator.tutorial.rotateSectionCover(1);
            }, calculator.tutorial.rotateSectionCoverDelay)
        }

        if(state === 1) {
            map.opacity.cover([1,1,1], 3);
            map.opacity.section([0,0,0], 3);
            setTimeout(()=>{
                calculator.tutorial.rotateSectionCover(2);
            }, calculator.tutorial.rotateSectionCoverDelay)
        }

        if(state === 2) {
            map.opacity.section([0.2,0.2,0.2], 3);
            setTimeout(()=>{
                calculator.tutorial.animateOG2sectionNumber = true;
            }, 2000)
        }

    } else {
        map.opacity.cover([1,1,1], 1);
        map.opacity.section([0.1,0.1,0.1], 1);
        setTimeout(()=>{
            map.opacity.cover([1,1,1], 1);
            map.opacity.section([0.1,0.1,0.1], 1);
        }, 100)
    }

}


calculator.tutorial.animateOG2sectionNumber = false;
calculator.tutorial.animateOG2mapActive = true;

calculator.tutorial.animateOG2map = function(state) {

    if(calculator.tutorial.animateOG2mapActive) {

        if(state === 0) {
            $('.OG2').css({'transition':'0.5s', 'transform':'rotate(1deg) scale(1.02)', 'box-shadow':'0px 0px 8px 3px black'})
            map.opacity.section([0.2,0.2,0.2], 0.5);
            setTimeout(()=>{
                $('.OG2').css({'transition':'0.5s', 'transform':'rotate(1deg) scale(1)', 'box-shadow':'0px 0px 4px 1px black'})
                map.opacity.section([0.2,0.2,0.3], 0.5);
            }, 350)

            setTimeout(()=>{
                calculator.tutorial.animateOG2map(1);
            }, 650)
        }

        if(state === 1) {
            $('.OG2').css({'transition':'0.5s', 'transform':'rotate(-1deg) scale(1.02)', 'box-shadow':'0px 0px 8px 3px black'})
            map.opacity.section([0.2,0.2,0.2], 0.5);
            setTimeout(()=>{
                $('.OG2').css({'transition':'0.5s', 'transform':'rotate(-1deg) scale(1)', 'box-shadow':'0px 0px 4px 1px black'})
                map.opacity.section([0.2,0.2,0.3], 0.5);
            }, 350)

            setTimeout(()=>{
                calculator.tutorial.animateOG2map(0);
            }, 650)
        }

    } else {
        $('.OG2').css({'transition':'0.5s', 'transform':'rotate(0deg) scale(1)', 'box-shadow':'0px 0px 8px 3px black'})
    }

}


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
//---------------------- tutorial specific map animation ---------------------//
//----------------------------------------------------------------------------//

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

//-------------------------------------------------------------------------//
//------------------------- DEBUG INITIATION ------------------------------//
//-------------------------------------------------------------------------//


var debug = {
    start: {}
}


//----------------------------------------------------------------------------//
//------------------------------ GAME OVERVIEW -------------------------------//
//----------------------------------------------------------------------------//

debug.start.SE = function(treatment) {

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

    title.update.textColor(-8000, true, 30);

    setTimeout(()=>{
        title.update.text('OVERVIEW OF GAME SECTIONS');
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
        box.button.show('SE-1');
    }, 3000)

}

debug.start.SE12 = function(treatment) {

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


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


debug.start.SE(1);
// debug.start.SE12();


//----------------------------------------------------------------------------//
//--------------------------- SECTIONS OVERVIEW ------------------------------//
//----------------------------------------------------------------------------//

$('#btn-SE-1').click(function() {

    title.update.textColor(-6000, false, 50);

    // close the box
    box.transition('SE-1', 'SE-3', 0, 0, 1, 1000);

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
    box.transition('SE-5', 'SE-6', 0, 0, 1, 750);

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
    box.transition('SE-10', 'SE-11', 0, 0, 1);

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
    box.transition('SE-11', 'SE-12', 1, 1, 1, 750);

    $('.leftSideStep1Text, .rightSideStep1Text, .middleStep2Text').css({'transition':'1s', 'filter':'opacity(0)'});

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

        $('.OG1FightIcon').css({'transition':'1s', 'opacity':'0', 'margin-top':'5px'});
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

        $('.OG1FightIcon').css({'transition':'1s', 'opacity':'0', 'margin-top':'5px'});
        $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'1'});

    }, 750)


    setTimeout(()=>{

        $('.s2PassiveFollower').css({'transition':'1s', 'opacity':'0'})
        $('.arrowDashed, .arrowDashedLime1').css({'transition':'1s', 'opacity':'0'})

        map.opacity.inside([1,1,0], 1);

        $('.OG1FightIcon').css({'transition':'1s', 'opacity':'0', 'margin-top':'5px'});
        $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'1'});

        map.opacity.section([0.1, 0.1, 0.1], 1);

        $('#anotherIdToCall2').css({'transition':'1s', 'opacity':'1'});

    }, 3500)


    setTimeout(()=>{
        box.button.show('SE-12');
    }, 6000)


})

$('#btn-SE-12').click(function() {

    if (box.global.asymmetricHeteroTreatment) {
        box.set.treatment_tuto(0,1);
    }

    // close the box
    box.transition('SE-12', 'SE-13', 1, 1, 1, 500);

    $('#anotherIdToCall2').css({'transition':'0.5s', 'margin-left':'530px', 'margin-top':'-67px'})

    $('.prizeCrownLimeBottom, .prizeCrownLimeTop').css({'transition':'0s', 'margin-top':'-40px'});
    $('.prizeCrownBlackTop, .prizeCrownBlackBottom').css({'transition':'0s', 'margin-top':'-40px'});

    setTimeout(()=>{
        $('.IGFightIcon').css({'transition':'2s', 'z-index':'2', 'opacity':'0'});
        $('.IGFightIconLimeBottom, .IGFightIconLimeTop').css({'transition':'2s', 'z-index':'2', 'opacity':'1'});
        map.animate.kingIcons(0);
    }, 1500)

    setTimeout(()=>{
        box.button.show('SE-13');
    }, 3000)

})

$('#btn-SE-13').click(function() {

    if (box.global.asymmetricHeteroTreatment) {
        box.set.treatment_tuto(0,1);
    }

    // close the box
    box.transition('SE-13', '', 1, 0, 1, 750);

    $('.someWrapForKingIcons').css({'margin-left':'639px'});
    $('#someInfoBoxId').css({'margin-left':'126px', 'margin-top':'-56px'});
    $('#boxwrap-SE-12').css({'margin-top':'-30px'});

    setTimeout(()=>{

        // weird animation setup
        map.opacity.main([0,1,0], 1);
        setTimeout(()=>{
            $('.IG').css({'transition':'1s', 'margin-left':'384px', 'margin-top':'-104px', 'transform':'scale(1.8)'});
            $('.IGTopContestWrap').css({'transition':'1s', 'margin-left':'-115px', 'margin-top':'130px'});
            $('.IGBottomContestWrap').css({'transition':'1s', 'margin-left':'149px', 'margin-top':'-74px'});
        }, 1000)

        box.transition('', 'SE-14', 1, 0, 1, 2750);

        setTimeout(()=>{
            map.opacity.sectionTitles([0,1,0], 1.5);
            $('#anotherIdToCall').css({'transition':'1.5s', 'opacity':'1'})
        }, 3750)

    },750)

    setTimeout(()=>{
        box.button.show('SE-14');
    }, 6500)

})

$('#btn-SE-14').click(function() {

    setTimeout(()=>{
        map.opacity.sectionTitles([1,1,1], 2);
    }, 100)


    setTimeout(()=>{
        box.flush();
        $('#boxwrap-SE-12').css({'margin-top':'0px'});
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

        // no reversal of the weird animation in this treatment

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

    //reverse weird animation setup
    $('.IG').css({'transition':'1s', 'margin-left':'0px', 'margin-top':'0px', 'transform':'scale(1)'});
    $('.IGTopContestWrap').css({'transition':'1s', 'margin-left':'3px', 'margin-top':'0px'});
    $('.IGBottomContestWrap').css({'transition':'1s', 'margin-left':'3px', 'margin-top':'67px'});
    setTimeout(()=>{
        map.opacity.main([1,1,1], 1);
    }, 1000)

    box.transition('SE-15', 'SE-16', 0, 0, 1, 1000);

    setTimeout(()=>{

        $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'0s', 'transform':'rotate3d(3,2,1, 0deg)'});
        setTimeout(()=>{
            $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'2s', 'transform':'rotate3d(3,2,1, 1800deg)'});
        }, 100)

        map.globalVariable.stopKingIconAnimation = true;

        setTimeout(()=>{
            box.button.show('SE-16');
        }, 3000)

    }, 1500)

})

//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//

$('#btn-SE-15A').click(function() {

    //reverse weird animation setup
    $('.IG').css({'transition':'1s', 'margin-left':'0px', 'margin-top':'0px', 'transform':'scale(1)'});
    $('.IGTopContestWrap').css({'transition':'1s', 'margin-left':'3px', 'margin-top':'0px'});
    $('.IGBottomContestWrap').css({'transition':'1s', 'margin-left':'3px', 'margin-top':'67px'});
    setTimeout(()=>{
        map.opacity.main([1,1,1], 1);
    }, 1000)

    box.transition('SE-15A', 'SE-16', 0, 0, 1, 1000);
    $('.IGFightIcon, .OG1FightIcon').css({'transition':'0s', 'opacity':'0'});
    $('.IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIconLime').css({'transition':'0s', 'opacity':'1'});

    setTimeout(()=>{

        $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'0s', 'transform':'rotate3d(3,2,1, 0deg)'});
        setTimeout(()=>{
            $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'2s', 'transform':'rotate3d(3,2,1, 1800deg)'});
        }, 100)

        map.globalVariable.stopKingIconAnimation = true;

        setTimeout(()=>{
            box.button.show('SE-16');
        }, 3000)

    }, 1500)


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

    //reverse weird animation setup
    $('.IG').css({'transition':'1s', 'margin-left':'0px', 'margin-top':'0px', 'transform':'scale(1)'});
    $('.IGTopContestWrap').css({'transition':'1s', 'margin-left':'3px', 'margin-top':'0px'});
    $('.IGBottomContestWrap').css({'transition':'1s', 'margin-left':'3px', 'margin-top':'67px'});
    setTimeout(()=>{
        map.opacity.main([1,1,1], 1);
    }, 1000)

    box.transition('SE-15B2', 'SE-16', 0, 0, 1, 1000);
    $('.IGFightIcon, .OG1FightIcon').css({'transition':'0s', 'opacity':'0'});
    $('.IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIconLime').css({'transition':'0s', 'opacity':'1'});

    setTimeout(()=>{

        $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'0s', 'transform':'rotate3d(3,2,1, 0deg)'});
        setTimeout(()=>{
            $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'2s', 'transform':'rotate3d(3,2,1, 1800deg)'});
        }, 100)

        map.globalVariable.stopKingIconAnimation = true;

        map.globalVariable.ourSideIsHetero = true;
        map.globalVariable.theirSideIsHetero = false;
        map.treatment();

        setTimeout(()=>{
            box.button.show('SE-16');
        }, 3000)

    }, 1500)


})

//--------------------- CONVERGENCE -----------------------//
//--------------------- CONVERGENCE -----------------------//
//--------------------- CONVERGENCE -----------------------//

$('#btn-SE-16').click(function() {

    box.transition('SE-16', 'SE-1601', 1, 0, 1, 750);

    map.openSpace();
    setTimeout(()=>{
        $('.resultsUnknown').css({'transition':'0.5s', 'opacity':'0.6'});
    }, 500)

    setTimeout(()=>{
        box.button.show('SE-1601');
    }, 5000)

})

$('#btn-SE-1601').click(function() {

    box.transition('SE-1601', 'SE-17', 0, 0, 1, 750);

    setTimeout(()=>{
        box.flush();
    }, 100)

    $('.resultsUnknown').css({'transition':'1s', 'opacity':'0'});

    setTimeout(()=>{
        $('#anotherIdToCall6').css({'transition':'1s', 'opacity':'1'})
    }, 2750)

    setTimeout(()=>{

        map.animate.og1Results(750, 1);
        setTimeout(()=>{
            $('.IGFightIcon').css({'transition':'0.5s', 'opacity':'0'});
            $('.IGFightIconLimeBottom, .IGFightIconLimeTop').css({'transition':'0.5s', 'opacity':'0'});
        }, 750)

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
        $('#anotherIdToCall11').css({'transition':'1s', 'opacity':'1'});
    }, 2250)

    setTimeout(()=>{
        $('#box17A1SecondText').css({'transition':'1s', 'opacity':'1'});
    }, 4250)

    setTimeout(()=>{
        box.button.show('SE-17A1');
    }, 5000)

})

$('#btn-SE-17A1').click(function() {

    box.transition('SE-17A1', 'SE-18', 0, 0, 1, 750);

    setTimeout(()=>{
        box.flush();
    }, 100)

    setTimeout(()=>{
        map.opacity.bottom(0);
    }, 1500)

    setTimeout(()=>{
        $('#anotherIdToCall7').css({'transition':'1s', 'opacity':'1'})
    }, 2500)

    setTimeout(()=>{
        box.adjust.forWinnerAndTreatmentNoTokenIcons()
        $('#anotherIdToCall5').css({'transition':'1s', 'opacity':'1'})
    }, 3500)

    setTimeout(()=>{
        box.button.show('SE-18');
    }, 4500)

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
            map.opacity.OG1Icons(1);
            map.show.og2_leftFollower1CAT();
        }, 250)
    }, 4000)

    setTimeout(()=>{
        box.button.show('SE-19');
    }, 6000)

})

$('#btn-SE-19').click(function() {

    box.transition('SE-19', 'SE-20', 0, 0, 1, 4000);

    map.hide.og2_leftFollower1CAT();
    map.opacity.OG1Icons(0);

    setTimeout(()=>{
        map.winnerFollowerIndex = 1;
        map.animate.validateIG();
        setTimeout(()=>{
            map.animate.tutorialCrownLoop(0)
        }, 3500)
        if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment){
            $('#infoBoxSE20Homo').css({'display':'inline'});
        } else {
            $('#infoBoxSE20Hetero').css({'display':'inline'});
        }
    }, 500)

    setTimeout(()=>{
        $('.arrowsToOG2, .arrowTopIGtoOG2').css({'transition':'1s', 'opacity':'1'})
        $('.arrowBottomIGtoOG2').css({'transition':'0s', 'opacity':'0'})
    }, 2250)

    setTimeout(()=>{
        box.button.show('SE-20');
    }, 5500)

})

$('#btn-SE-20').click(function() {

    box.transition('SE-20', 'SE-21', 0, 0, 1, 750);

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
        $('#homoTreatmentInfo21').css({'display':'block'});
    } else {
        $('#heteroTreatmentInfo21').css({'display':'block'});
    }



    setTimeout(()=>{
        map.show.og2_leftLeader()
        setTimeout(()=>{
            map.opacity.OG1Icons(1);
            map.show.og2_leftLeaderCAT()
        }, 250)
    }, 3000)


    setTimeout(()=>{
        box.button.show('SE-21');
    }, 5500)

})

$('#btn-SE-21').click(function() {

    box.transition('SE-21', 'SE-22', 0, 0, 1, 750);

    map.globalVariable.stopTutorialCrownLoop = true;

    map.hide.og2_leftLeaderCAT()

    setTimeout(()=>{
        map.show.og2_leftFollower2()
        setTimeout(()=>{
            map.show.og2_leftFollower2CAT()
        }, 250)
    }, 3000)


    setTimeout(()=>{
        box.button.show('SE-22');
    }, 5500)

})

$('#btn-SE-22').click(function() {

    box.transition('SE-22', 'SE-23', 0, 0, 1, 750);
    map.hide.og2_leftFollower2CAT()
    map.opacity.OG1Icons(0);

    $('.arrowBottomIGtoOG2').css({'transition':'1s', 'opacity':'0'});

    setTimeout(()=>{
        $('#anotherIdToCall9').css({'transition':'1s', 'opacity':'1'})
    }, 1500)
    setTimeout(()=>{
        map.opacity.top(0.3);
    }, 2000)
    setTimeout(()=>{
        map.opacity.bottom(1);
    }, 2500)

    setTimeout(()=>{
        $('#anotherIdToCall10').css({'transition':'1s', 'opacity':'1'})
        if(map.globalVariable.theirSideIsHetero) {
            $('.noTokenRightHomo2').css({'display':'none'});
            $('.noTokenRightHetero2').css({'display':'flex'});
        } else {
            $('.noTokenRightHomo2').css({'display':'flex'});
            $('.noTokenRightHetero2').css({'display':'none'});
        }
    }, 3500)

    setTimeout(()=>{
        box.button.show('SE-23');
    }, 4500)

})

$('#btn-SE-23').click(function() {

    box.transition('SE-23', 'SE-24', 0, 0, 1, 750);

    setTimeout(()=>{
        $('#anotherIdToCall12').css({'transition':'1s', 'opacity':'1'});
    },3000)

    setTimeout(()=>{
        map.animate.discardIG_firstStep()
    },3500)

    setTimeout(()=>{
        box.button.show('SE-24');
    },7500)

})

$('#btn-SE-24').click(function() {

    box.transition('SE-24', 'SE-25', 0, 0, 1, 750);

    setTimeout(()=>{
        map.animate.discardIG_secondStep();
    }, 2500)


    setTimeout(()=>{
        map.show.og2_rightLeader()
        setTimeout(()=>{
            map.opacity.OG1Icons(1);
            map.show.og2_rightLeaderCAT();
        }, 500)
    },3250)


    setTimeout(()=>{
        box.button.show('SE-25');
    }, 5500)

})

$('#btn-SE-25').click(function() {

    box.transition('SE-25', 'SE-26', 0, 0, 1, 750);

    map.hide.og2_rightLeaderCAT();
    setTimeout(()=>{
        map.opacity.OG1Icons(0);
    }, 500)

    setTimeout(()=>{
        map.show.og2_rightFollowers()
        setTimeout(()=>{
            map.show.og2_rightFollowersCAT();
            map.opacity.OG1Icons(1);
        }, 500)
    },3500)

    setTimeout(()=>{
        box.button.show('SE-26');
    }, 5500)

})

$('#btn-SE-26').click(function() {

    box.transition('SE-26', 'SE-27', 0, 0, 1, 750);

    map.hide.og2_rightFollowersCAT();
    setTimeout(()=>{
        map.opacity.OG1Icons(0.8);
        map.opacity.top(1);
        map.opacity.bottom(1);
        map.animate.discardIG_secondStep();
        $('.OG2FightIconWrap').css({'transition':'1s', 'opacity':'1'});
    }, 750)

    setTimeout(()=>{
        $('.OG2').css({'transition':'1s', 'box-shadow':'0px 0px 8px 3px lime'});
    }, 1750)


    setTimeout(()=>{
        box.button.show('SE-27');
    }, 3000)

})

$('#btn-SE-27').click(function() {

    box.transition('SE-27', 'SE-28', 0, 0, 1, 750);

    setTimeout(()=>{

        $('#anotherIdToCall13').css({'transition':'1s', 'opacity':'1'});

        $('.OG2').css({'transition':'1s', 'box-shadow':'0px 0px 8px 3px black'});


        $('.OG2LeadersIcon').css({'transition':'1s', 'opacity':'1'});
        $('.subsubOG2L').css({'transition':'1s', 'border-color':'transparent', 'background-color':'transparent'});
        $('.OG2LeaderLeft, .OG2LeaderRight').css({'transition':'1s', 'opacity':'0.5'});

        $('.OG2FightIconWrap').css({'transition':'1s', 'opacity':'1'});
        $('.OG2FightIconLime').css({'transition':'1s', 'opacity':'0'});
        $('.OG2FightIcon').css({'transition':'1s', 'opacity':'0'});
        $('.OG2GroupSeparator').css({'transition':'1s', 'height':'110px', 'opacity':'0.7'});

        $('.OG2FollowerArrowsLeft, .OG2FollowerArrowsRight').css({'transition':'1s', 'opacity': '1'});
        $('.arrowDashedLime2').css({'transition':'1s', 'opacity':'1'});
        $('.og2BlackArrow').css({'transition':'1s', 'opacity':'0'});

        $('.OG2FollowersWrapLeft, .OG2FollowersWrapRight').css({'transition':'1s', 'opacity': '1'});
        $('.s5PassiveFollower').css({'transition':'1s','opacity':'1'});
        $('.s5ActiveFollower').css({'transition':'1s','opacity':'0.6'});

    }, 1000)


    setTimeout(()=>{
        box.button.show('SE-28');
    }, 3000)

})

$('#btn-SE-28').click(function() {

    box.transition('SE-28', 'SE-29', 1, 1, 1, 750);

    setTimeout(()=>{

        $('#anotherIdToCall13').css({'transition':'1s','margin-top':'10px'});

        $('#anotherIdToCall14').css({'transition':'1s', 'opacity':'1'});

        $('.OG2FightIconWrap').css({'transition':'1s', 'opacity':'1'});

        $('.OG2GroupSeparator').css({'transition':'1s', 'height':'0px', 'opacity':'0'});
        setTimeout(()=>{
            $('.OG2FightIcon').css({'transition':'0s', 'opacity':'0'});
            $('.OG2FightIconLime').css({'transition':'1s', 'opacity':'1'});
        }, 750)

        $('.OG2LeadersIcon').css({'transition':'1s', 'opacity':'1'});
        $('.OG2LeaderLeft, .OG2LeaderRight').css({'transition':'1s', 'opacity':'1'});
        $('.subsubOG2L').css({'transition':'1s', 'border-color':'lime', 'background-color':'#65f76a78'})

        $('.OG2FollowerArrowsLeft, .OG2FollowerArrowsRight').css({'transition':'1s', 'opacity': '0.5'});
        $('.arrowDashedLime2').css({'transition':'1s', 'opacity':'0'});
        $('.og2BlackArrow').css({'transition':'1s', 'opacity':'1'});

        $('.OG2FollowersWrapLeft, .OG2FollowersWrapRight').css({'transition':'1s', 'opacity': '0.5'});
        $('.s5PassiveFollower').css({'transition':'1s','opacity':'1'});
        $('.s5ActiveFollower').css({'transition':'1s','opacity':'0'});

    }, 1250)


    setTimeout(()=>{
        box.button.show('SE-29');
    }, 3000)

})

$('#btn-SE-29').click(function() {

    box.transition('SE-29', 'SE-30', 1, 1, 1, 750);

    setTimeout(()=>{
        box.flush();
    },100)

    setTimeout(()=>{

        $('.OG2FightIconWrap').css({'transition':'1s', 'opacity':'1'});
        $('.OG2FightIcon').css({'transition':'1s', 'opacity':'1'});
        $('.OG2FightIconLime').css({'transition':'0s', 'opacity':'0'});

        $('.OG2LeadersIcon').css({'transition':'1s', 'opacity':'1'});
        $('.subsubOG2L').css({'transition':'1s', 'border-color':'gray', 'background-color':'#d3d3d378'})

        $('.OG2FollowerArrowsLeft, .OG2FollowerArrowsRight').css({'transition':'1s', 'opacity': '1'});

        $('.OG2FollowersWrapLeft, .OG2FollowersWrapRight').css({'transition':'1s', 'opacity': '1'});

    }, 500)


    setTimeout(()=>{
        box.button.show('SE-30');
    }, 3000)

})

$('#btn-SE-30').click(function() {

    box.transition('SE-30', 'SE-31', 1, 1, 1, 750);

    setTimeout(()=>{
        box.button.show('SE-31');
    }, 2000)

})

$('#btn-SE-31').click(function() {

    box.transition('SE-31', 'SE-32', 1, 1, 1, 750);

    setTimeout(()=>{
        box.flush();
    },100)

    setTimeout(()=>{
        box.button.show('SE-32');
    }, 2000)

})

$('#btn-SE-32').click(function() {

    $('.all').css({'transition':'1s', 'filter':'blur(400px) sepia(1)'});

})
