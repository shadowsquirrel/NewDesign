
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// ----------------------------    MAP    ----------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //


// -------------------------------------------------------------------------- //
// -----------------------------  GLOBALS  ---------------------------------- //
// -------------------------------------------------------------------------- //


let map = {

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
    zoom:{},
    move:{},
    introduce: undefined,
    focus: {
        og1:{},
        ig:{},
        og2:{},
    },
    tutorial:{
        result:{},
    },

};


// -------------------------------------------------------------------------- //
// ---------------------------  MAP GENERATOR  ------------------------------ //
// -------------------------------------------------------------------------- //


let generateMap = function() {

    //--------- GLOBAL VARIABLES TO RULE IT ALL ------//

    map.globalVariable.ourSideIsHetero = undefined;
    map.globalVariable.theirSideIsHetero = undefined;

    map.globalVariable.playerIndex = undefined; //-1,0,1

    map.winnerFollowerIndex = undefined;
    map.winnerLeaderIndex = undefined;


    //--------------------------//
    // fake data generation to be updated by showresult of wheel

    //this is not a fake data
    map.og1_topWon = undefined;


    //-------------------------//
    //-------------------------//
    //-------------------------//

    map.showMap = function(transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.sexplain').css({'transition':transitionTime, 'opacity': '1'});

    }

    map.hideMap = function(transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.sexplain').css({'transition':transitionTime, 'opacity': '0'});

    }


    //------SPACE METHODS------//
    //------SPACE METHODS------//
    //------SPACE METHODS------//

    map.openSpace = function(transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.arrowsToOG1IconResults').css({'transition':transitionTime, 'opacity': '1', 'margin-right':'-12px', 'margin-left':'8px'});

    }

    map.closeSpace = function(transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.arrowsToOG1IconResults').css({'transition':transitionTime, 'opacity': '1', 'margin-right':'-120px', 'margin-left':'8px'});

    }


    //------ARROW OPACITY METHODS------//
    //------ARROW OPACITY METHODS------//
    //------ARROW OPACITY METHODS------//

    // [arrows to result icons, arrows from result icons, arrows from ig boxes]
    map.opacity.mainArrowSections = function(optArray, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.arrowsToOG1IconResults').css({'transition':transitionTime, 'opacity' : optArray[0].toString()});
        // arrows from the results either to ig or to og2 depending on the outcome
        $('.arrowsFromIconResultsToIG').css({'transition':transitionTime, 'opacity' : optArray[1].toString()});
        $('.arrowsToOG2').css({'transition':transitionTime, 'opacity' : optArray[2].toString()});

    }

    // [arrow2TopIcon, arrow2BottomIcon]
    map.opacity.arrowsToResultIcons = function(optArray, transitionTime) {

        transitionTime = transitionTime === undefined ? 0.5 : transitionTime;

        transitionTime = transitionTime + 's';

        $('.arrowToTopIconResults').css({'transition':transitionTime, 'opacity': optArray[0].toString()});
        $('.arrowToBottomIconResults').css({'transition':transitionTime, 'opacity': optArray[1].toString()});

    }

    // [arrow2TopIG, arrow2BottomIG], [arrowfromTopIconToOG2, arrowfromBottomIconToOG2]
    map.opacity.arrowsFromResultIcons = function(optArrayShort, optArrayLong, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.arrowsFromIconResultsToIG').css({'opacity':'1'});

        // short arrows to IG
        if(optArrayShort[0] != -1) {
            $('.arrowTopIconToIG').css({'transition':transitionTime, 'opacity' : optArrayShort[0].toString()});
        }
        if(optArrayShort[1] != -1) {
            $('.arrowBottomIconToIG').css({'transition':transitionTime, 'opacity' : optArrayShort[1].toString()});
        }


        // long arrows to OG2
        if(optArrayLong[0] != -1) {
            $('.longArrowTopIconToOG2').css({'transition':transitionTime, 'opacity' : optArrayLong[0].toString()});
        }
        if(optArrayLong[1] != -1) {
            $('.longArrowBottomIconToOG2').css({'transition':transitionTime, 'opacity' : optArrayLong[1].toString()});
        }

    }

    // [arrowfromTopIG, arrowfromBottomIG]
    map.opacity.arrowsFromIG = function(optArray, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.arrowTopIGtoOG2').css({'transition':transitionTime, 'opacity' : optArray[0].toString()});
        $('.arrowBottomIGtoOG2').css({'transition':transitionTime, 'opacity' : optArray[1].toString()});

    }

    // [OG1toIGsArrows, IGstoOG2Arrows]
    map.opacity.coverArrows= function(optArray, transitionTime) {

        map.opacity.mainArrowSections([1,0,1], transitionTime);
        map.opacity.arrowsToResultIcons([0,0], transitionTime);

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.coverArrowOG1toIG').css({'transition':transitionTime, 'opacity': optArray[0].toString()});
        $('.arrowsToOG2').css({'transition':transitionTime, 'opacity': optArray[1].toString()});

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

    map.opacity.og1Leaders = function(o, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.OG1LeaderLeft').css({'transition':transitionTime, 'opacity': o.toString()});
        $('.OG1LeaderRight').css({'transition':transitionTime, 'opacity': o.toString()});
        $('.OG1FightIcon').css({'transition':transitionTime, 'opacity': o.toString()});

    }

    // IconsWrap, [topIcon, bottomIcon]
    map.opacity.resultIcons = function(mainOpt, optArray, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.wonLostBoxes').css({'transition':transitionTime, 'opacity': mainOpt.toString()});
        $('.topBoxLeaderResult').css({'transition':transitionTime, 'opacity': optArray[0].toString()});
        $('.bottomBoxLeaderResult').css({'transition':transitionTime, 'opacity': optArray[1].toString()});

    }

    map.opacity.shadowOG2 = function(on, delay) {

        delay = delay === undefined ? 0.5 : delay;

        delay = delay + 's';

        if(on) {
            $('.OG2IconsWrap').css({'transition':delay, 'filter':'brightness(0)'});
        } else {
            $('.OG2IconsWrap').css({'transition':delay, 'filter':'brightness(1)'});
        }


    }

    map.opacity.shadowOG2Right = function(on, delay) {

        delay = delay === undefined ? 0.5 : delay;

        delay = delay + 's';

        if(on) {
            $('.OG2FollowerArrowsRight, .OG2FollowersWrapRight, .OG2LeaderRight').css({'transition':delay, 'filter':'brightness(0)'});
        } else {
            $('.OG2FollowerArrowsRight, .OG2FollowersWrapRight, .OG2LeaderRight').css({'transition':delay, 'filter':'brightness(1)'});
        }

    }

    map.opacity.OG2Right = function(o, delay) {

        delay = delay === undefined ? 0.5 : delay;

        delay = delay + 's';

        o = o === undefined ? 0.5 : o;
        o = o + '';

            $('.OG2FollowerArrowsRight, .OG2FollowersWrapRight, .OG2LeaderRight').css({'transition':delay, 'opacity':o});

    }

    map.opacity.shadowOG2Left = function(on, delay) {

        delay = delay === undefined ? 0.5 : delay;

        delay = delay + 's';

        if(on) {
            $('.OG2FollowerArrowsLeft, .OG2FollowersWrapLeft, .OG2LeaderLeft').css({'transition':delay, 'filter':'brightness(0)'});
        } else {
            $('.OG2FollowerArrowsLeft, .OG2FollowersWrapLeft, .OG2LeaderLeft').css({'transition':delay, 'filter':'brightness(1)'});
        }

    }

    map.opacity.OG2Right = function(opacity, delay) {

        delay = delay === undefined ? 0.5 : delay;

        delay = delay + 's';

        opacity = opacity + '';


        $('.OG2FollowerArrowsRight, .OG2FollowersWrapRight, .OG2LeaderRight').css({'transition':delay, 'opacity':opacity});

    }

    map.opacity.OG2Left = function(opacity, delay) {

        delay = delay === undefined ? 0.5 : delay;

        delay = delay + 's';

        opacity = opacity + '';


        $('.OG2FollowerArrowsLeft, .OG2FollowersWrapLeft, .OG2LeaderLeft').css({'transition':delay, 'opacity':opacity});

    }

    map.opacity.IGContests = function(o, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');
        o = o === undefined ? 1 : o;

        o2 = o;
        o = [o].toString();

        console.log(o);

        console.log('winner leader: ' + map.globalVariable.winnerLeaderIndex);

        // our leader lost (leader A)
        if(map.globalVariable.winnerLeaderIndex === 1) {

            map.opacity.arrowsFromResultIcons([o2,0], [0,o2]);
            map.opacity.arrowsFromIG([o2,0])
            $('.IGTopContestWrap').css({'transition':transitionTime,
            'opacity':o});
            $('.IGBottomContestWrap').css({'transition':transitionTime,
            'opacity':'0'});

        }

        // opposing leader lost (leader B)
        if(map.globalVariable.winnerLeaderIndex === 0) {

            map.opacity.arrowsFromResultIcons([0,o2], [o2,0]);
            map.opacity.arrowsFromIG([0,o2])
            $('.IGTopContestWrap').css({'transition':transitionTime,
            'opacity':'0'});
            $('.IGBottomContestWrap').css({'transition':transitionTime,
            'opacity':o});



        }

    }

    map.opacity.IGTop = function(o, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');
        o = o === undefined ? 1 : o;

        o2 = o;
        o = [o].toString();

        map.opacity.arrowsFromResultIcons([o2,0], [0,o2]);
        map.opacity.arrowsFromIG([o2,0])
        $('.IGTopContestWrap').css({'transition':transitionTime,
        'opacity':o});
        $('.IGBottomContestWrap').css({'transition':transitionTime,
        'opacity':'0'});

    }


    map.show.topTransition = function(state, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        o = state ? 1 : 0;

        o = [o].toString();

        if(map.globalVariable.winnerLeaderIndex === 1) {

            $('.arrowTopIGtoOG2').css({'transition':transitionTime,'opacity':o});
            $('.longArrowTopIconToOG2').css({'transition':'0','opacity':'0'});
            $('.arrowTopIconToIG').css({'transition':transitionTime,'opacity':o});
            $('.IGTopContestWrap').css({'transition':transitionTime,'opacity':o});

        }

        if(map.globalVariable.winnerLeaderIndex === 0) {

            $('.arrowTopIGtoOG2').css({'transition':'0','opacity':'0'});
            $('.longArrowTopIconToOG2').css({'transition':transitionTime,'opacity':o});
            $('.arrowTopIconToIG').css({'transition':'0','opacity':'0'});
            $('.IGTopContestWrap').css({'transition':'0','opacity':'0'});

        }

        $('.topBoxLeaderResult, .arrowToTopIconResults').css({'transition':transitionTime,
        'opacity':o});

    }

    map.opacity.topTransition = function(opacity, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        opacity = opacity === undefined ? 0.5 : opacity;

        o = opacity + '';

        if(map.globalVariable.winnerLeaderIndex === 1) {

            $('.arrowTopIGtoOG2').css({'transition':transitionTime,'opacity':o});
            $('.longArrowTopIconToOG2').css({'transition':'0','opacity':'0'});
            $('.arrowTopIconToIG').css({'transition':transitionTime,'opacity':o});
            $('.IGTopContestWrap').css({'transition':transitionTime,'opacity':o});

        }

        if(map.globalVariable.winnerLeaderIndex === 0) {

            $('.arrowTopIGtoOG2').css({'transition':'0','opacity':'0'});
            $('.longArrowTopIconToOG2').css({'transition':transitionTime,'opacity':o});
            $('.arrowTopIconToIG').css({'transition':'0','opacity':'0'});
            $('.IGTopContestWrap').css({'transition':'0','opacity':'0'});

        }

        $('.topBoxLeaderResult, .arrowToTopIconResults').css({'transition':transitionTime,
        'opacity':o});

    }

    map.show.bottomTransition = function(state, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        o = state ? 1 : 0;

        o = [o].toString();

        if(map.globalVariable.winnerLeaderIndex === 0) {

            $('.arrowBottomIGtoOG2').css({'transition':transitionTime,'opacity':o});
            $('.longArrowBottomIconToOG2').css({'transition':'0','opacity':'0'});
            $('.arrowBottomIconToIG').css({'transition':'0','opacity':o});
            $('.IGBottomContestWrap').css({'transition':'0','opacity':o});

        }

        if(map.globalVariable.winnerLeaderIndex === 1) {

            $('.arrowBottomIGtoOG2').css({'transition':'0','opacity':'0'});
            $('.longArrowBottomIconToOG2').css({'transition':transitionTime,'opacity':o});
            $('.arrowBottomIconToIG').css({'transition':'0','opacity':'0'});
            $('.IGBottomContestWrap').css({'transition':'0','opacity':'0'});

        }

        $('.bottomBoxLeaderResult, .arrowToBottomIconResults').css({'transition':transitionTime,
        'opacity':o});

    }

    map.opacity.bottomTransition = function(opacity, transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        opacity = opacity === undefined ? 0.5 : opacity;

        o = opacity + '';

        if(map.globalVariable.winnerLeaderIndex === 0) {

            $('.arrowBottomIGtoOG2').css({'transition':transitionTime,'opacity':o});
            $('.longArrowBottomIconToOG2').css({'transition':'0','opacity':'0'});
            $('.arrowBottomIconToIG').css({'transition':'0','opacity':o});
            $('.IGBottomContestWrap').css({'transition':'0','opacity':o});

        }

        if(map.globalVariable.winnerLeaderIndex === 1) {

            $('.arrowBottomIGtoOG2').css({'transition':'0','opacity':'0'});
            $('.longArrowBottomIconToOG2').css({'transition':transitionTime,'opacity':o});
            $('.arrowBottomIconToIG').css({'transition':'0','opacity':'0'});
            $('.IGBottomContestWrap').css({'transition':'0','opacity':'0'});

        }

        $('.bottomBoxLeaderResult, .arrowToBottomIconResults').css({'transition':transitionTime,
        'opacity':o});

    }

    map.opacity.OG1Results = function(o, transitionTime) {

        map.opacity.arrowsToResultIcons([o,o], transitionTime);

        transitionTime = transitionTime === undefined ? 0.5 : transitionTime;

        transitionTime = transitionTime + 's';

        o = [o].toString();
        $('.wonLostBoxes,.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':transitionTime, 'opacity':o});


    }


    //---- CIRCLE METHODS ----//

    map.opacity.circles = function(contest, player, opt) {

        var o = opt.toString();

        if(contest === 'og1') {

            if(player === 'l1') {
                $('.OG1LeaderCircleLeft').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'f1') {
                $('.OG1f1CircleLeft').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'f2') {
                $('.OG1f2CircleLeft').css({'transition':'0.45s', 'opacity': o});
            }


            if(player === 'ol1') {
                $('.OG1LeaderCircleRight').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'of1') {
                $('.OG1f1CircleRight').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'of2') {
                $('.OG1f2CircleRight').css({'transition':'0.45s', 'opacity': o});
            }

        }

        if(contest === 'result') {
            if(player === 'l1') {
                $('.OG1TopLeaderResultIconsCircle').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'l2') {
                $('.OG1BottomLeaderResultIconsCircle').css({'transition':'0.45s', 'opacity': o});
            }
        }


        if(contest === 'iga') {
            if(player === 'f1') {
                $('.IGTopLeftCircle').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'f2') {
                $('.IGTopRightCircle').css({'transition':'0.45s', 'opacity': o});
            }
        }


        if(contest === 'igb') {
            if(player === 'f1') {
                $('.IGBottomLeftCircle').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'f2') {
                $('.IGBottomRightCircle').css({'transition':'0.45s', 'opacity': o});
            }
        }


        if(contest === 'og2') {

            if(player === 'l1') {
                $('.OG2LeaderCircleLeft').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'f1') {
                $('.OG2f1CircleLeft').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'f2') {
                $('.OG2f2CircleLeft').css({'transition':'0.45s', 'opacity': o});
            }


            if(player === 'ol1') {
                $('.OG2LeaderCircleRight').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'of1') {
                $('.OG2f1CircleRight').css({'transition':'0.45s', 'opacity': o});
            }
            if(player === 'of2') {
                $('.OG2f2CircleRight').css({'transition':'0.45s', 'opacity': o});
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
        map.opacity.circles('og1', 'ol1', 0);
        map.opacity.circles('og1', 'of1', 0);
        map.opacity.circles('og1', 'of2', 0);

        map.opacity.circles('result', 'l1', 0);
        map.opacity.circles('result', 'l2', 0);

        map.opacity.circles('iga', 'f1', 0);
        map.opacity.circles('iga', 'f2', 0);
        map.opacity.circles('igb', 'f1', 0);
        map.opacity.circles('igb', 'f2', 0);

        map.opacity.circles('og2', 'l1', 0);
        map.opacity.circles('og2', 'f1', 0);
        map.opacity.circles('og2', 'f2', 0);
        map.opacity.circles('og2', 'ol1', 0);
        map.opacity.circles('og2', 'of1', 0);
        map.opacity.circles('og2', 'of2', 0);

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
    map.wiggle.og1_f1 = function() {

        $('.OG1f1YAH, .OG1f1YAHT').css({'transition':'1.5s', 'opacity':'1'})

        if(map.wiggle.active) {

            // if(state === 0) {
            //     $('.OG1f1YAHT').css({'transform':'rotateZ(1deg)'});
            //     $('.OG1f1YAH').css({'margin-top':'30px', 'margin-left':'30px'});
            //     setTimeout(()=>map.wiggle.og1_f1(1), 750);
            // }
            // if(state === 1) {
            //     $('.OG1f1YAHT').css({'transform':'rotateZ(-1deg)'});
            //     $('.OG1f1YAH').css({'margin-top':'45px', 'margin-left':'40px'});
            //     setTimeout(()=>map.wiggle.og1_f1(0), 750);
            // }

            setTimeout(()=>map.wiggle.og1_f1(), 500);

        } else {
            $('.OG1f1YAH, .OG1f1YAHT').css({'transition':'1s', 'opacity':'0'})
        }

    }

    // map.opacity.circles('og1', 'f2', 1);
    // map.wiggle.og1_f2(0);
    map.wiggle.og1_f2 = function() {

        $('.OG1f2YAH, .OG1f2YAHT').css({'transition':'1.5s', 'opacity':'1'})

        if(map.wiggle.active) {

            // if(state === 0) {
            //     $('.OG1f2YAHT').css({'transform':'rotateZ(-1deg)'});
            //     $('.OG1f2YAH').css({'margin-top':'26px', 'margin-left':'33px'});
            //     setTimeout(()=>map.wiggle.og1_f2(1), 750);
            // }
            // if(state === 1) {
            //     $('.OG1f2YAHT').css({'transform':'rotateZ(1deg)'});
            //     $('.OG1f2YAH').css({'margin-top':'21px', 'margin-left':'28px'});
            //     setTimeout(()=>map.wiggle.og1_f2(0), 750);
            // }

            setTimeout(()=>map.wiggle.og1_f2(), 500);

        } else {
            $('.OG1f2YAH, .OG1f2YAHT').css({'transition':'1s', 'opacity':'0'})
        }

    }

    // map.opacity.circles('og1', 'l2', 1);
    // map.wiggle.og1_l1(0);
    map.wiggle.og1_l1 = function() {

        $('.OG1l1YAH, .OG1l1YAHT').css({'transition':'1.5s', 'opacity':'1'})

        if(map.wiggle.active) {

            // if(state === 0) {
            //     $('.OG1l1YAHT').css({'transform':'rotateZ(-1deg)'});
            //     $('.OG1l1YAH').css({'margin-top':'61px', 'margin-left':'0px'});
            //     setTimeout(()=>map.wiggle.og1_l1(1), 750);
            // }
            // if(state === 1) {
            //     $('.OG1l1YAHT').css({'transform':'rotateZ(1deg)'});
            //     $('.OG1l1YAH').css({'margin-top':'56px', 'margin-left':'0px'});
            //     setTimeout(()=>map.wiggle.og1_l1(0), 750);
            // }

            setTimeout(()=>map.wiggle.og1_l1(), 500);

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

            // if(state === 0) {
            //     $('.IGf1YAHT').css({'transform':'rotateZ(1deg)'});
            //     $('.IGf1YAH').css({'margin-top':'-45px', 'margin-left':'-90px'});
            //     setTimeout(()=>map.wiggle.ig_f1(1), 750);
            // }
            // if(state === 1) {
            //     $('.IGf1YAHT').css({'transform':'rotateZ(-1deg)'});
            //     $('.IGf1YAH').css({'margin-top':'-50px', 'margin-left':'-85px'});
            //     setTimeout(()=>map.wiggle.ig_f1(0), 750);
            // }

            setTimeout(()=>map.wiggle.ig_f1(0), 500);

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

            // if(state === 0) {
            //     $('.IGf2YAHT').css({'transform':'rotateZ(1deg)'});
            //     $('.IGf2YAH').css({'margin-top':'-45px', 'margin-left':'14px'});
            //     setTimeout(()=>map.wiggle.ig_f2(1), 750);
            // }
            // if(state === 1) {
            //     $('.IGf2YAHT').css({'transform':'rotateZ(-1deg)'});
            //     $('.IGf2YAH').css({'margin-top':'-50px', 'margin-left':'9px'});
            //     setTimeout(()=>map.wiggle.ig_f2(0), 750);
            // }

            setTimeout(()=>map.wiggle.ig_f2(0), 500);

        } else {
            $('.IGf2YAH, .IGf2YAHT').css({'transition':'1s', 'opacity':'0'})
        }

    }

    // map.opacity.circles('og1', 'f1');
    // map.wiggle.og1_f1(0);
    map.wiggle.og2_f1 = function(state) {

        $('.OG2f1YAH, .OG2f1YAHT').css({'transition':'1s', 'opacity':'1'})

        if(map.wiggle.active) {

            // if(state === 0) {
            //     $('.OG2f1YAHT').css({'transform':'rotateZ(1deg)'});
            //     $('.OG2f1YAH').css({'margin-top':'-67px', 'margin-left':'-17px'});
            //     setTimeout(()=>map.wiggle.og2_f1(1), 750);
            // }
            // if(state === 1) {
            //     $('.OG2f1YAHT').css({'transform':'rotateZ(-1deg)'});
            //     $('.OG2f1YAH').css({'margin-top':'-58px', 'margin-left':'-17px'});
            //     setTimeout(()=>map.wiggle.og2_f1(0), 750);
            // }

            setTimeout(()=>map.wiggle.og2_f1(0), 500);

        } else {
            $('.OG2f1YAH, .OG2f1YAHT').css({'transition':'1s', 'opacity':'0'})
        }

    }

    // map.opacity.circles('og2', 'f2');
    // map.wiggle.og2_f2(0);
    map.wiggle.og2_f2 = function(state) {

        $('.OG2f2YAH, .OG2f2YAHT').css({'transition':'1s', 'opacity':'1'})

        if(map.wiggle.active) {

            // if(state === 0) {
            //     $('.OG2f2YAHT').css({'transform':'rotateZ(-1deg)'});
            //     $('.OG2f2YAH').css({'margin-top':'26px', 'margin-left':'33px'});
            //     setTimeout(()=>map.wiggle.og2_f2(1), 750);
            // }
            // if(state === 1) {
            //     $('.OG2f2YAHT').css({'transform':'rotateZ(1deg)'});
            //     $('.OG2f2YAH').css({'margin-top':'21px', 'margin-left':'28px'});
            //     setTimeout(()=>map.wiggle.og2_f2(0), 750);
            // }

            setTimeout(()=>map.wiggle.og2_f2(0), 500);

        } else {
            $('.OG2f2YAH, .OG2f2YAHT').css({'transition':'1s', 'opacity':'0'})
        }

    }

    // map.opacity.circles('og2', 'l2');
    // map.wiggle.og2_l1(0);
    map.wiggle.og2_l1 = function(state) {

        $('.OG2l1YAH, .OG2l1YAHT').css({'transition':'1s', 'opacity':'1'})

        if(map.wiggle.active) {

            // if(state === 0) {
            //     $('.OG2l1YAHT').css({'transform':'rotateZ(-1deg)'});
            //     $('.OG2l1YAH').css({'margin-top':'61px', 'margin-left':'0px'});
            //     setTimeout(()=>map.wiggle.og2_l1(1), 750);
            // }
            // if(state === 1) {
            //     $('.OG2l1YAHT').css({'transform':'rotateZ(1deg)'});
            //     $('.OG2l1YAH').css({'margin-top':'56px', 'margin-left':'0px'});
            //     setTimeout(()=>map.wiggle.og2_l1(0), 750);
            // }

            setTimeout(()=>map.wiggle.og2_l1(0), 500);

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


    // FOR FINAL FEEDBACK INDEXES ARE DIFFERENT SO WE USE MINORLY DIFF FUNCs
    //------- ICON SORTING BASED ON THE RESULTS ------//

    map.set.OG1ResultIcons2 = function() {

        var winnerLeader = map.globalVariable.winnerLeaderIndex === 0 ? 'top' : 'bottom';

        if(winnerLeader === 'top') {
            $('.topLeaderWon, .bottomLeaderLost').css({'transition':'0.3s', 'opacity':'1'});
            $('.topLeaderLost, .bottomLeaderWon').css({'transition':'0s', 'opacity':'0'});
        }

        if(winnerLeader === 'bottom') {
            $('.topLeaderLost, .bottomLeaderWon').css({'transition':'0.3s', 'opacity':'1'});
            $('.topLeaderWon, .bottomLeaderLost').css({'transition':'0s', 'opacity':'0'});
        }


    }


    map.set.OG2ResultingIcons2 = function() {

        var winnerLeader = map.globalVariable.winnerLeaderIndex === 0 ? 'left' : 'right';
        var winnerFollower = map.globalVariable.winnerFollowerIndex === 0 ? 'left' :'right';

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


    //----- MAIN DISPLAY METHOD -----//

    map.show.sections = function(transitionTime) {

        transitionTime = transitionTime === undefined ? 0.5 : transitionTime;

        map.closeSpace(transitionTime);
        map.opacity.arrowsToResultIcons([0,0], transitionTime);
        map.opacity.arrowsFromResultIcons([0,0], [0,0], transitionTime);
        map.opacity.resultIcons(0, [0,0], transitionTime);
        map.opacity.mainArrowSections([0,0,0], transitionTime);
        map.opacity.coverArrows([0,0], transitionTime);
        map.opacity.inside([0,0,0], transitionTime);
        map.opacity.cover([0,0,0], transitionTime);

        map.opacity.main([1,1,1], transitionTime);
        map.opacity.section([1,1,1], transitionTime);
        map.opacity.sectionTitles([1,1,1], transitionTime);

    }



    map.zoom.og1 = function(transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.OG1').css({'transition':transitionTime,
        'transform':'scale(1.4)','margin-top':'42px', 'margin-left':'120px'});
        $('.IG').css({'transition':transitionTime, 'transform-origin':'right',
        'transform':'scale(0.8)', 'margin-left':'20px'});
        $('.OG2').css({'transition':transitionTime, 'transform-origin':'left',
        'transform':'scale(0.8)', 'margin-left':'-20px'});

    }

    map.zoom.ig = function(transitionTime) {

        transitionTime = transitionTime === undefined ? '0.5s' : (transitionTime + 's');

        $('.IG').css({'transition':transitionTime, 'transform-origin':'right',
        'transform':'scale(1.4)', 'margin-left':'20px'});
        $('.OG2').css({'transition':transitionTime, 'transform-origin':'left',
        'transform':'scale(0.8)', 'margin-left':'-20px'});


    }

    map.focus.og1.followers = function(transitionTime) {

        transitionTime2 = transitionTime === undefined ? 2 : (transitionTime * 2);
        transitionTime = transitionTime === undefined ? '1s' : (transitionTime + 's');
        transitionTime2 = transitionTime2 === undefined ? '2s' : (transitionTime2 + 's');

        $('.OG1GroupSeparator').css({'transition':transitionTime2, 'opacity':'1',
        'height':'119px'});
        $('.OG1FightIcon, .OG1FightIconLime').css({'transition':transitionTime,
        'opacity':'0'});

        $('.s2ActiveFollower').css({'transition':transitionTime, 'opacity':'0.6'});
        $('.s2PassiveFollower').css({'transition':transitionTime, 'opacity':'1'});

        $('.arrowDashedLime1').css({'transition':transitionTime, 'opacity':'1'});

        $('.OG1LeaderLeft, .OG1LeaderRight').css({'transition':transitionTime,
        'opacity':'0.4'});
        $('.leaderKingLeft, .leaderKingRight').css({'transition':transitionTime,
        'filter':'drop-shadow(0px 0px 0px transparent)'});

    }

    map.focus.og1.leaders = function(transitionTime) {

        transitionTime2 = transitionTime === undefined ? 2 : (transitionTime * 2);
        transitionTime = transitionTime === undefined ? '1s' : (transitionTime + 's');
        transitionTime2 = transitionTime2 === undefined ? '2s' : (transitionTime2 + 's');

        $('.OG1GroupSeparator').css({'transition':transitionTime2, 'opacity':'0',
        'height':'0px'});
        $('.OG1FightIcon').css({'transition':transitionTime, 'opacity':'0'});
        $('.OG1FightIconLime').css({'transition':transitionTime, 'opacity':'1'});

        $('.s2ActiveFollower').css({'transition':transitionTime, 'opacity':'0',
        'filter':'drop-shadow(0px 0px 0px transparent)'});
        $('.s2PassiveFollower').css({'transition':transitionTime, 'opacity':'0.2',
        'filter':'drop-shadow(0px 0px 0px transparent)'});

        $('.arrowDashedLime1').css({'transition':transitionTime, 'opacity':'0.6'});
        $('.og1PassiveArrows').css({'transition':transitionTime, 'opacity':'0.6'});

        $('.OG1LeaderLeft, .OG1LeaderRight').css({'transition':transitionTime,
        'opacity':'1'});

        $('.leaderKingLeft, .leaderKingRight').css({'transition':transitionTime,
        'filter':'drop-shadow(0px 7px 3px black)'});

        $('.subsubOG1L').css({'border-color':'lime', 'background-color':'#16ff0021'})

    }

    map.focus.og2.followers = function(transitionTime) {

        transitionTime2 = transitionTime === undefined ? 2 : (transitionTime * 2);
        transitionTime = transitionTime === undefined ? '1s' : (transitionTime + 's');
        transitionTime2 = transitionTime2 === undefined ? '2s' : (transitionTime2 + 's');

        $('.OG2GroupSeparator').css({'transition':transitionTime2, 'opacity':'1',
        'height':'119px'});
        $('.OG2FightIcon, .OG2FightIconLime').css({'transition':transitionTime,
        'opacity':'0'});

        $('.s5ActiveFollower').css({'transition':transitionTime, 'opacity':'0.6'});
        $('.s5PassiveFollower').css({'transition':transitionTime, 'opacity':'1'});

        $('.arrowDashedLime2').css({'transition':transitionTime, 'opacity':'1'});

        $('.OG2LeaderLeft, .OG2LeaderRight').css({'transition':transitionTime,
        'opacity':'0.4'});
        $('.OG2leaderKingLeft, .OG2leaderKingRight, .newLeaderKingRight, .newLeaderKingLeft').css({'transition':transitionTime,
        'filter':'drop-shadow(0px 0px 0px transparent)'});

    }

    map.focus.og2.leaders = function(transitionTime) {

        transitionTime2 = transitionTime === undefined ? 2 : (transitionTime * 2);
        transitionTime = transitionTime === undefined ? '1s' : (transitionTime + 's');
        transitionTime2 = transitionTime2 === undefined ? '2s' : (transitionTime2 + 's');

        $('.OG2GroupSeparator').css({'transition':transitionTime2, 'opacity':'0',
        'height':'0px'});
        $('.OG2FightIcon').css({'transition':transitionTime, 'opacity':'0'});
        $('.OG2FightIconLime').css({'transition':transitionTime, 'opacity':'1'});

        $('.s5ActiveFollower').css({'transition':transitionTime, 'opacity':'0',
        'filter':'drop-shadow(0px 0px 0px transparent)'});
        $('.s5PassiveFollower').css({'transition':transitionTime, 'opacity':'0.2',
        'filter':'drop-shadow(0px 0px 0px transparent)'});

        $('.arrowDashedLime2').css({'transition':transitionTime, 'opacity':'0.6'});
        $('.og2PassiveArrows').css({'transition':transitionTime, 'opacity':'0.6'});

        $('.OG2LeaderLeft, .OG2LeaderRight').css({'transition':transitionTime,
        'opacity':'1'});

        $('.OG2leaderKingLeft, .OG2leaderKingRight').css({'transition':transitionTime,
        'filter':'drop-shadow(0px 7px 3px black)'});

        $('.subsubOG2L').css({'border-color':'lime', 'background-color':'#16ff0021'})

    }



    map.move.insideDecisionSlider = function() {
        // move the map to its new div
        $('.sexplain').appendTo($('.mapInfoWrap'));
        $('.sexplain').css({'margin-left':'0px',
        'opacity':'1', 'transform':'scale(1)', 'margin-top':'50px'});
    }

    map.move.insideDecisionSlider2 = function() {
        // move the map to its new div
        $('.sexplain').appendTo($('.mapInfoWrap2'));
        $('.sexplain').css({'margin-left':'0px',
        'opacity':'1', 'transform':'scale(1)', 'margin-top':'50px', 'position':'static'});
    }

    map.move.insideDecisionSlider3 = function() {

        // move the map to its new div
        $('.sexplain').appendTo($('.mapInfoWrap2'));
        $('.sexplain').css({'margin-left':'0px',
        'opacity':'1', 'transform':'scale(1)', 'margin-top':'50px', 'position':'static'});

        setTimeout(()=>{
            $('.IG').css({'transition':'0s', 'transform':'scale(1)',
            'margin-top':'0px', 'margin-left':'0px'});
            $('.arrowTopIconToIG').css({'transition':'0s', 'opacity':'1'});
            map.show.stage('ig');
            $('.allboxwrap').css({'margin-left':'275px', 'margin-top':'50px',
            'margin-bottom':'-38px', 'transform':'scale(1.5)'})
            setTimeout(()=>{
                map.opacity.inside([0.5,1,0], 0.75);
                $('.OG1').css({'transform':'scale(0.7)', 'margin-right':'-62px',
                'margin-left':'-63px'});
            }, 1750)
            map.wiggle.active = true;
            map.animate.YAH_ig()
        }, 1000)

    }

    //----------------------------------------------------------//
    //---- SETUP -----------------------------------------------//
    //----------------------------------------------------------//
    //----------------------- MAP ICONS ------------------------//
    //----------------------------------------------------------//
    // ----- PARAMETER ASSIGNMENT + TREATMENT ADJUSTMENT ------ //
    //----------------------------------------------------------//
    //
    //
    // map related values are assigned in setup.og so map setup should be done
    // after setup.og()
    //
    map.setup = function() {

        // this is where the icons are being basically determined
        map.globalVariable.ourSideIsHetero = calculator.globalVariable.ourFollowersAreHetero;
        map.globalVariable.theirSideIsHetero = calculator.globalVariable.theirFollowersAreHetero;
        map.globalVariable.playerIndex = calculator.globalVariable.playerIndex;

        map.treatment();

    }

    map.setupAfterOG1 = function(myData, isOpen, showUnusedIG) {

        showUnusedIG = showUnusedIG === undefined ? false : showUnusedIG;

        isOpen = isOpen === undefined ? true : isOpen;

        // this is where the icons are being basically determined
        map.globalVariable.ourSideIsHetero = myData.treatment[0];
        map.globalVariable.theirSideIsHetero = myData.treatment[1];
        var myList = myData.sortedArray;
        var myIndex = (myList.indexOf(myData.myCount) - 1);
        map.globalVariable.playerIndex = myIndex;

        map.treatment();

        if(isOpen) {
            map.openSpace();
        } else {
            map.closeSpace();
        }


        var winnerGroupIndex = myData.s3[1].indexOf(true);
        map.globalVariable.winnerLeaderIndex = winnerGroupIndex;

        map.set.OG1ResultIcons2();

        if(!showUnusedIG) {
            map.opacity.IGContests();
        }


    }

    map.setupAfterIG = function(myData) {

        map.setupAfterOG1(myData);

        var winnerGroupIndex = myData.s3[1].indexOf(true);
        var lostGroupIndex = 1 - winnerGroupIndex;
        map.globalVariable.winnerFollowerIndex = myData.s4[lostGroupIndex][1].indexOf(true);

        map.set.OG2ResultingIcons2();

        map.opacity.IGContests(1,0);

    }

    map.setupFinalFeedback = function(myData) {

        map.setupAfterIG(myData);

        map.opacity.section([0.1,0.1,0.1], 0)

    }


    //----------------------------------------------------------//
    //---- SHOW ------------------------------------------------//
    //----------------------------------------------------------//
    //------------------------  STAGE  -------------------------//
    //----------------------------------------------------------//
    //----------------------------------------------------------//
    //
    //
    // map related values are assigned in setup.og so map setup should be done
    // after setup.og()
    //
    map.show.stage = function(state, myData) {

        map.setup();

        // ------------ GRAPHICAL INTRODUCTION ---------- //

        if(state === 'og1_wait') {

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            // DISPLAY THE MAP WITH SECTIONS ONLY
            map.show.sections(0);

            $('.sexplain').css({
                'transition':'0s',
                'transform-origin':'center center',
                'transform':'scale(1)'
            });

            setTimeout(()=>{
                map.showMap(0.5);
                setTimeout(()=>{
                    map.zoom.og1(0.75);
                    map.opacity.main([1,0.4,0.4], 0.75);
                }, 300)
            }, 10)

            setTimeout(()=>{
                map.opacity.section([0.1,0.4,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
            }, 500)

        }

        if(state === 'og1_hs') {

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            // DISPLAY THE MAP WITH SECTIONS ONLY
            map.show.sections(0);

            $('.sexplain').css({
                'transition':'0s',
                'transform-origin':'center center',
                'transform':'scale(1)'
            });

            setTimeout(()=>{
                map.showMap(0.5);
                setTimeout(()=>{
                    map.zoom.og1(0.75);
                    map.opacity.main([1,0.4,0.4], 0.75);
                }, 300)
            }, 10)

            setTimeout(()=>{
                map.opacity.section([0.1,0.4,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
                map.focus.og1.followers(0.75);
                setTimeout(()=>{
                    map.animate.YAH_og1();
                }, 1000)
            }, 500)

        }

        if(state === 'og1_lc') {

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            // DISPLAY THE MAP WITH SECTIONS ONLY
            map.show.sections(0);

            $('.sexplain').css({
                'transition':'0s',
                'transform-origin':'center center',
                'transform':'scale(1)'
            });

            setTimeout(()=>{
                map.showMap(0.5);
                setTimeout(()=>{
                    map.zoom.og1(0.75);
                    map.opacity.main([1,0.4,0.4], 0.75);
                }, 300)
            }, 10)

            setTimeout(()=>{
                map.opacity.section([0.1,0.4,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
                map.focus.og1.leaders(0.75);
                setTimeout(()=>{
                    map.animate.YAH_og1();
                }, 1000)
            }, 1000)

        }

        if(state === 'og1_fb') {

            // have the calculator open and ready to go
            calculator.open();
            // but hidden
            calculator.section.all.opacity(0, 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            // DISPLAY THE MAP WITH SECTIONS ONLY
            map.show.sections(0);

            $('.sexplain').css({
                'position':'absolute',
                'transition':'0s',
                'transform-origin':'center center',
                'transform':'scale(1)'
            });

            setTimeout(()=>{
                calculator.section.contest.minimize(false);
                map.showMap(1);
                setTimeout(()=>{
                    map.zoom.og1(1);
                    map.opacity.main([1,0.4,0.4], 1);
                    setTimeout(()=>{
                        map.animate.YAH_og1();
                    }, 250)
                }, 250)
            }, 500)

            setTimeout(()=>{
                map.opacity.section([0.1,1,1], 1);
                map.opacity.inside([1,0,0], 1);
            }, 1500)

            setTimeout(()=>{
                map.opacity.main([1,0,0], 1);
            }, 2000)

            setTimeout(()=>{
                $('.sexplain').css({'transition':'1s','margin-left':'250px',
                'margin-top':'66px', 'transform':'scale(1) scaleX(1.11)'});
                setTimeout(()=>{
                    calculator.section.all.opacity(1, 1);
                    $('.contestTitle2').css({'transition':'0s', 'opacity':'0'});
                    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,1,0], 1);
                    setTimeout(()=>{
                        $('.sexplain').css({'transition':'1s', 'opacity':'0'});
                        map.showCirclesInsideCalculator();
                    }, 500)
                }, 500)
            }, 3000)


        }

        if(state === 'ig_wait_winner') {

            // ------ STARTING SETUP ------------ //

            map.setupAfterOG1(mainData, false, true);

            map.opacity.main([0,0,0], 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);

            map.show.sections(0);

            map.set.OG1ResultIcons2();
            map.opacity.OG1Results(0,0)


            // DISPLAY THE MAP WITH SECTIONS ONLY


            // ------ SHOW STARTING SETUP ------- //

            setTimeout(()=>{
                $('.sexplain').css({
                    'transition':'0.75s',
                    'transform-origin':'center center',
                    'transform':'scale(1)',
                    'opacity':'1',
                    'margin-left':'10px'
                });

                map.opacity.main([1,1,1], 0.75);

            }, 10)

            // ------ prep the map ------- //

            setTimeout(()=>{
                map.opacity.section([0.1,0.7,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
                map.opacity.main([1,0,0], 0.5);
            }, 650)

            setTimeout(()=>{
                map.openSpace(0.75);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});
            }, 1500)


            // ---- show results ---- //

            setTimeout(()=>{

                $('.OG1FightIconWrap').css({'transition':'0.75s', 'opacity':'0'});
                map.opacity.inside([0.6,1,0], 0.75);
                map.opacity.main([1,1,0], 0.75);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});
                map.opacity.OG1Results(1,0.75)

            }, 1750)

            // draw arrow to og2 and prep og2
            setTimeout(()=>{
                map.opacity.IGContests(1, 0.5);
                map.show.bottomTransition(false, 0.5);
                $('.bottomBoxLeaderResult, .arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});
                map.set.OG2ResultingIcons2();
            }, 2250)

            // show frame of og2
            setTimeout(()=>{
                map.opacity.main([1,1,1], 0.5);
            }, 2750)

            setTimeout(()=>{
                map.opacity.inside([0.6,1,1], 0.75);
                map.opacity.shadowOG2(false, 0.75);
                map.opacity.shadowOG2Right(true, 0.75);
                map.opacity.section([0.1,0.7,0.1], 0.75);
                map.opacity.OG2Right(0.4, 0.75);
            }, 3250)

            setTimeout(()=>{
                map.animate.YAH_og2();
            }, 3750)


        }

        if(state === 'ig_wait_loser') {

            // ------ STARTING SETUP ------------ //

            map.setupAfterOG1(mainData, false, true);

            map.opacity.main([0,0,0], 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            map.show.sections(0);

            map.set.OG1ResultIcons2();
            map.opacity.OG1Results(0,0)


            // DISPLAY THE MAP WITH SECTIONS ONLY


            // ------ SHOW STARTING SETUP ------- //

            setTimeout(()=>{

                $('.sexplain').css({
                    'transition':'0.75s',
                    'transform-origin':'center center',
                    'transform':'scale(1)',
                    'opacity':'1',
                    'margin-left':'10px'
                });

                map.opacity.main([1,1,1], 0.75);

            }, 10)

            // ------ prep the map ------- //

            setTimeout(()=>{

                map.opacity.section([0.1,0.7,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
                map.opacity.main([1,0,0], 0.5);

            }, 650)

            setTimeout(()=>{

                map.openSpace(0);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});

            }, 1500)


            // ---- show results ---- //

            setTimeout(()=>{

                $('.OG1FightIconWrap').css({'transition':'0.75s', 'opacity':'0'});
                map.opacity.inside([0.6,1,0], 0.75);
                map.opacity.main([1,1,0], 0.75);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});
                map.opacity.OG1Results(1,0.75)

            }, 1750)

            setTimeout(()=>{

                map.opacity.IGContests(1, 0.5);
                map.show.topTransition(false, 0.5);
                $('.topBoxLeaderResult, .arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
                map.set.OG2ResultingIcons2();

            }, 2250)

            setTimeout(()=>{

                map.opacity.main([1,1,1], 0.5);

            }, 2750)

            setTimeout(()=>{

                map.opacity.inside([0.6,1,1], 0.75);
                map.opacity.shadowOG2(false, 0.75);
                map.opacity.shadowOG2Left(true, 0.75);
                map.opacity.section([0.1,0.7,0.1], 0.75);
                map.opacity.OG2Left(0.4, 0.75);

            }, 3250)

            if(calculator.globalVariable.playerIndex === -1) {
                setTimeout(()=>{
                    map.animate.YAH_ig();
                }, 3750)
            }


        }

        if(state === 'ig') {

            // ------ STARTING SETUP ------------ //

            map.setupAfterOG1(mainData, false, true);

            map.opacity.main([0,0,0], 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            map.show.sections(0);

            map.set.OG1ResultIcons2();
            map.opacity.OG1Results(0,0)


            // DISPLAY THE MAP WITH SECTIONS ONLY


            // ------ SHOW STARTING SETUP ------- //

            setTimeout(()=>{
                $('.sexplain').css({
                    'transition':'0.75s',
                    'transform-origin':'center center',
                    'transform':'scale(1)',
                    'opacity':'1'
                });

                map.opacity.main([1,1,1], 0.75);

            }, 10)

            // ------ prep the map ------- //

            setTimeout(()=>{
                map.opacity.main([1,1,0.4], 0.75);
                map.opacity.section([0.1,0.7,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
            }, 650)


            // ---- prep for show results ---- //

            setTimeout(()=>{

                map.opacity.main([1,1,0], 0.75);
                map.openSpace(0.75);
                // $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});

            }, 650)

            // ---- show results ---- //

            setTimeout(()=>{

                $('.OG1FightIconWrap').css({'transition':'0.75s', 'opacity':'0'});
                map.opacity.inside([0.5,0,0], 0.75);
                map.opacity.OG1Results(1,0.75)
                map.opacity.IGContests(1, 0.5);
                map.show.bottomTransition(false, 0.5);
                // $('.prizeCrownLimeTop').css({'transition':'0s', 'opacity':'0',
                // 'margin-top':'40px', 'margin-left':'-132px'});

            }, 1000)

            // ----- show ig ----- //

            setTimeout(()=>{
                $('.IGFightIconLimeTop').css({'transition':'0.75s', 'opacity':'1'});
                map.opacity.section([0.1,0.1,0.4], 0.75);
                map.opacity.inside([0.5,1,0], 0.75);
                $('.prizeCrownLimeTop').css({'transition':'4s', 'opacity':'1',
                'margin-top':'-44px', 'margin-left':'0px'});
            }, 1500)

            setTimeout(()=>{
                map.animate.YAH_ig();
            }, 1750)


            // ------ pre arrange you and circle for the calculator graphics -- //

            if(map.globalVariable.ourSideIsHetero === 1) {

                if(map.globalVariable.playerIndex === 0) {

                    $('.dynamicCircle-big, .YAH-arrow-IG-big, .YAH-text-IG-big').css({'transition':'0.75s', 'opacity':'1'});

                }

                if(map.globalVariable.playerIndex === 1) {

                    $('.dynamicCircle-small, .YAH-arrow-IG-small, .YAH-text-IG-small').css({'transition':'0.75s', 'opacity':'1'});

                }

            } else {

                $('.dynamicCircle-normal, .YAH-arrow-IG-normal, .YAH-text-IG-normal').css({'transition':'0.75s', 'opacity':'1'});

            }

        }

        if(state === 'ig_fb') {

            // ------ STARTING SETUP ------------ //

            map.setupAfterOG1(mainData, false, true);

            map.opacity.main([0,0,0], 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            map.show.sections(0);

            map.set.OG1ResultIcons2();
            map.opacity.OG1Results(0,0)


            // DISPLAY THE MAP WITH SECTIONS ONLY


            // ------ SHOW STARTING SETUP ------- //

            setTimeout(()=>{
                $('.sexplain').css({
                    'transition':'0.75s',
                    'transform-origin':'center center',
                    'transform':'scale(1)',
                    'opacity':'1',
                    'margin-left':'10px'
                });

                map.opacity.main([1,1,1], 0.75);

            }, 10)

            // ------ prep the map ------- //

            setTimeout(()=>{
                map.opacity.section([0.1,0.7,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
                map.opacity.main([1,0,0], 0.5);
            }, 650)

            setTimeout(()=>{
                map.openSpace(0);
            }, 1500)


            // ---- show results ---- //

            setTimeout(()=>{

                $('.OG1FightIconWrap').css({'transition':'0.75s', 'opacity':'0'});
                map.opacity.inside([0.6,1,0], 0.75);
                map.opacity.main([1,1,0], 0.75);
                $('.IGContests').css({'transition':'0s', 'opacity':'0'});
                map.opacity.OG1Results(1,0.75)

            }, 1750)

            if(calculator.globalVariable.isIGB) {

                setTimeout(()=>{
                    map.opacity.IGContests(1, 0.5);
                    map.show.bottomTransition(false, 0.5);
                    $('.bottomBoxLeaderResult, .arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});
                    map.set.OG2ResultingIcons2();
                }, 2250)

                setTimeout(()=>{
                    map.opacity.main([1,1,1], 0.5);
                }, 2750)

                setTimeout(()=>{
                    map.opacity.inside([0.6,1,1], 0.75);
                    map.opacity.shadowOG2(false, 0.75);
                    map.opacity.shadowOG2Right(true, 0.75);
                    map.opacity.section([0.1,0.7,0.1], 0.75);
                    map.opacity.OG2Right(0.4, 0.75);
                }, 3250)

                setTimeout(()=>{
                    map.animate.YAH_og2();
                }, 3750)

            } else {

                setTimeout(()=>{
                    map.opacity.IGContests(1, 0.5);
                    map.show.topTransition(false, 0.5);
                    $('.topBoxLeaderResult, .arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
                    map.set.OG2ResultingIcons2();
                }, 2250)

                setTimeout(()=>{
                    map.opacity.main([1,1,1], 0.5);
                }, 2750)

                setTimeout(()=>{
                    map.opacity.inside([0.6,1,1], 0.75);
                    map.opacity.shadowOG2(false, 0.75);
                    map.opacity.shadowOG2Left(true, 0.75);
                    map.opacity.section([0.1,0.7,0.1], 0.75);
                    map.opacity.OG2Left(0.3, 0.5);
                }, 3250)


                if(map.globalVariable.playerIndex != -1) {
                    if(map.globalVariable.ourSideIsHetero === 1) {

                        if(map.globalVariable.playerIndex === 0) {

                            $('.dynamicCircle-big, .YAH-arrow-IG-big, .YAH-text-IG-big').css({'transition':'0.75s', 'opacity':'1'});

                        }

                        if(map.globalVariable.playerIndex === 1) {

                            $('.dynamicCircle-small, .YAH-arrow-IG-small, .YAH-text-IG-small').css({'transition':'0.75s', 'opacity':'1'});

                        }

                    } else {

                        $('.dynamicCircle-normal, .YAH-arrow-IG-normal, .YAH-text-IG-normal').css({'transition':'0.75s', 'opacity':'1'});

                    }
                }


            }


        }

        if(state === 'og2_wait_ig1Loser') {

            // ------ STARTING SETUP ------------ //

            map.setupAfterOG1(mainData, false, true);

            map.opacity.main([0,0,0], 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            map.show.sections(0);

            map.set.OG1ResultIcons2();
            map.opacity.OG1Results(0,0)


            // DISPLAY THE MAP WITH SECTIONS ONLY


            // ------ SHOW STARTING SETUP ------- //

            setTimeout(()=>{

                $('.sexplain').css({
                    'transition':'0.75s',
                    'transform-origin':'center center',
                    'transform':'scale(1)',
                    'opacity':'1',
                    'margin-left':'10px'
                });

                map.opacity.main([1,1,1], 0.75);

            }, 10)

            // ------ prep the map ------- //

            setTimeout(()=>{

                map.opacity.section([0.1,0.7,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
                map.opacity.main([1,0,0], 0.5);

            }, 650)

            setTimeout(()=>{

                map.openSpace(0);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});

            }, 1500)


            // ---- show results ---- //

            setTimeout(()=>{

                $('.OG1FightIconWrap').css({'transition':'0.75s', 'opacity':'0'});
                map.opacity.inside([0.6,1,0], 0.75);
                map.opacity.main([1,1,0], 0.75);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});
                map.opacity.OG1Results(1,0.75)

            }, 1750)

            setTimeout(()=>{

                map.opacity.IGContests(1, 0.5);
                map.show.topTransition(false, 0.5);
                $('.topBoxLeaderResult, .arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});
                map.set.OG2ResultingIcons2();

            }, 2250)

            setTimeout(()=>{

                map.opacity.main([1,1,1], 0.5);

            }, 2750)

            setTimeout(()=>{

                map.opacity.inside([0.6,1,1], 0.75);
                map.opacity.shadowOG2(false, 0.75);
                map.opacity.shadowOG2Left(true, 0.75);
                map.opacity.section([0.1,0.7,0.1], 0.75);
                map.opacity.OG2Left(0.4, 0.75);

            }, 3250)

            setTimeout(()=>{

                map.show.topTransition(true, 0.5);

                setTimeout(()=>{

                    $('.IGContests').css({'transition':'1s', 'opacity':'1'});

                    $('.prizeCrownBlackBottom').css({'transition':'0.5s','opacity':'0'});

                    $('.IGFightIconLimeTop').css({'transition':'0.5s',
                    'opacity':'1'});

                    $('.prizeCrownLimeTop').css({'transition':'0.5s',
                    'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

                    $('.IGFI_Bottom, .IGFightIconLimeBottom, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'1', 'filter':'opacity(1)'})

                    $('.prizeCrownLimeBottom').css({'transition':'2s', 'margin-top':'-37px'});

                    map.opacity.section([0.1,0.1,0.1], 0.5);

                }, 750)

                setTimeout(()=>{

                    $('.IGFightIconLimeTop').css({'transition':'0.5s',
                    'opacity':'0'});

                    if(tool.winnerFollowerIndex === 0) {
                        $('.prizeCrownLimeTop').css({'transition':'0.5s',
                        'margin-left':'-38px', 'margin-top':'-48px', 'z-index':'-1'});
                    } else {
                        $('.prizeCrownLimeTop').css({'transition':'0.5s',
                        'margin-left':'37px', 'margin-top':'-48px', 'z-index':'-1'});
                    }

                }, 1500)

                setTimeout(()=>{
                    $('.arrowsToOG2, .arrowTopIGtoOG2').css({'transition':'0.5s', 'opacity':'1'});
                }, 2250)

                setTimeout(()=>{
                    map.opacity.shadowOG2Left(false, 0.5);
                    map.opacity.OG2Left(1, 0.5);
                }, 3000)

                setTimeout(()=>{
                    map.animate.YAH_og2();
                }, 3500)

                setTimeout(()=>{
                    $('.IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'0.5s', 'opacity':'0.7'});
                    $('.OG1, .IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'1s',
                    'transform-origin':'right', 'transform':'scale(0.7)'});
                    $('.arrowsToOG1IconResults').css({'transition':'1s','margin-left':'-20px'});
                    $('.IG').css({'transition':'1s','margin-left':'-70px'});
                    $('.arrowsToOG2').css({'transition':'1s','margin-left':'15px', 'margin-top':'8px'});
                    $('.OG2').css({'transition':'1s', 'transform-origin':'left', 'transform':'scale(1.4)'})
                    $('.sexplain').css({'transition':'1s', 'margin-left':'-40px'});
                }, 4500)

            }, 3250)

        }

        if(state === 'og2_wait_ig1Winner') {

            // ------ STARTING SETUP ------------ //

            map.setupAfterOG1(mainData, false, true);

            map.opacity.main([0,0,0], 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            map.show.sections(0);

            map.set.OG1ResultIcons2();
            map.opacity.OG1Results(0,0)


            // DISPLAY THE MAP WITH SECTIONS ONLY


            // ------ SHOW STARTING SETUP ------- //

            setTimeout(()=>{

                $('.sexplain').css({
                    'transition':'0.75s',
                    'transform-origin':'center center',
                    'transform':'scale(1)',
                    'opacity':'1',
                    'margin-left':'10px'
                });

                map.opacity.main([1,1,1], 0.75);

            }, 10)

            // ------ prep the map ------- //

            setTimeout(()=>{

                map.opacity.section([0.1,0.7,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
                map.opacity.main([1,0,0], 0.5);

            }, 650)

            setTimeout(()=>{

                map.openSpace(0);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});

            }, 1500)


            // ---- show results ---- //

            setTimeout(()=>{

                $('.OG1FightIconWrap').css({'transition':'0.75s', 'opacity':'0'});
                map.opacity.inside([0.6,1,0], 0.75);
                map.opacity.main([1,1,0], 0.75);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});
                map.opacity.OG1Results(1,0.75)

            }, 1750)

            setTimeout(()=>{

                map.opacity.IGContests(1, 0.5);
                map.show.bottomTransition(false, 0.5);
                $('.bottomBoxLeaderResult, .arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});
                map.set.OG2ResultingIcons2();

            }, 2250)

            setTimeout(()=>{

                map.opacity.main([1,1,1], 0.5);

            }, 2750)

            setTimeout(()=>{

                map.opacity.inside([0.6,1,1], 0.75);
                map.opacity.shadowOG2(false, 0.75);
                map.opacity.shadowOG2Right(true, 0.75);
                map.opacity.section([0.1,0.7,0.1], 0.75);
                map.opacity.OG2Right(0.4, 0.75);

            }, 3250)

            setTimeout(()=>{

                map.show.bottomTransition(true, 0.5);

                setTimeout(()=>{

                    $('.IGContests').css({'transition':'1s', 'opacity':'1'});

                    $('.prizeCrownBlackBottom').css({'transition':'0.5s','opacity':'0'});

                    $('.IGFightIconLimeBottom').css({'transition':'0.5s',
                    'opacity':'1'});

                    $('.prizeCrownLimeBottom').css({'transition':'0.5s',
                    'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

                    $('.IGFI_Bottom, .IGFightIconLimeBottom, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'1', 'filter':'opacity(1)'})

                    $('.prizeCrownLimeBottom').css({'transition':'0.5s', 'margin-top':'-37px'});

                    map.opacity.section([0.1,0.1,0.1], 0.5);

                }, 750)

                setTimeout(()=>{

                    $('.IGFI_Bottom, .IGFightIconLimeBottom').css({'transition':'0.5s',
                    'opacity':'0'});

                    if(tool.winnerFollowerIndex === 0) {
                        $('.prizeCrownLimeBottom').css({'transition':'0.5s',
                        'margin-left':'-38px', 'margin-top':'-48px', 'z-index':'-1'});
                    } else {
                        $('.prizeCrownLimeBottom').css({'transition':'0.5s',
                        'margin-left':'37px', 'margin-top':'-48px', 'z-index':'-1'});
                    }

                }, 1500)

                setTimeout(()=>{
                    $('.arrowsToOG2, .arrowBottomIGtoOG2').css({'transition':'0.5s', 'opacity':'1'});
                    $('.arrowTopIGtoOG2').css({'transition':'0s', 'opacity':'0'});
                }, 2250)

                setTimeout(()=>{
                    map.opacity.shadowOG2Right(false, 0.5);
                    map.opacity.OG2Right(1, 0.5);
                }, 3000)

                setTimeout(()=>{
                    map.animate.YAH_og2();
                }, 3500)

                setTimeout(()=>{
                    $('.IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'0.5s', 'opacity':'0.7'});
                    $('.OG1, .IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'1s',
                    'transform-origin':'right', 'transform':'scale(0.7)'});
                    $('.arrowsToOG1IconResults').css({'transition':'1s','margin-left':'-20px'});
                    $('.IG').css({'transition':'1s','margin-left':'-70px'});
                    $('.arrowsToOG2').css({'transition':'1s','margin-left':'15px', 'margin-top':'8px'});
                    $('.OG2').css({'transition':'1s', 'transform-origin':'left', 'transform':'scale(1.4)'})
                    $('.sexplain').css({'transition':'1s', 'margin-left':'-40px'});
                }, 4500)

            }, 3250)

        }

        if(state === 'og2_og1Won') {

            // ------ STARTING SETUP ------------ //

            map.setupAfterOG1(mainData, false, true);

            map.opacity.main([0,0,0], 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            map.show.sections(0);

            map.set.OG1ResultIcons2();
            map.opacity.OG1Results(0,0)


            // DISPLAY THE MAP WITH SECTIONS ONLY


            // ------ SHOW STARTING SETUP ------- //

            setTimeout(()=>{

                $('.sexplain').css({
                    'transition':'0.75s',
                    'transform-origin':'center center',
                    'transform':'scale(1)',
                    'opacity':'1',
                    'margin-left':'10px'
                });

                map.opacity.main([1,1,1], 0.75);

            }, 10)

            // ------ prep the map ------- //

            setTimeout(()=>{

                map.opacity.section([0.1,0.7,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
                map.opacity.main([1,0,0], 0.5);

            }, 650)

            setTimeout(()=>{

                map.openSpace(0);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});

            }, 1500)


            // ---- show results ---- //

            setTimeout(()=>{

                $('.OG1FightIconWrap').css({'transition':'0.75s', 'opacity':'0'});
                map.opacity.inside([0.6,1,0], 0.75);
                map.opacity.main([1,1,0], 0.75);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});
                map.opacity.OG1Results(1,0.75)

            }, 1750)

            setTimeout(()=>{

                map.opacity.IGContests(1, 0.75);
                map.show.bottomTransition(false, 0.75);
                $('.bottomBoxLeaderResult, .arrowToBottomIconResults').css({'transition':'0.75s', 'opacity':'1'});
                map.set.OG2ResultingIcons2();
                map.opacity.shadowOG2(false, 0);

            }, 2250)

            setTimeout(()=>{

                map.opacity.main([1,1,1], 0.75);

            }, 2750)

            setTimeout(()=>{

                map.opacity.inside([0.6,1,1], 0.75);
                map.opacity.shadowOG2(false, 0.75);
                // map.opacity.shadowOG2Right(true, 0.75);
                map.opacity.section([0.1,0.7,0.1], 0.75);
                map.opacity.OG2Right(0, 0);
                map.opacity.topTransition(0.6, 0.75);

                $('.prizeCrownBlackTop').css({'transition':'0s', 'opacity':'0'})

            }, 3250)

            setTimeout(()=>{

                map.show.bottomTransition(true, 0.75);

                setTimeout(()=>{

                    $('.IGContests').css({'transition':'1s', 'opacity':'1'});

                    $('.prizeCrownBlackBottom').css({'transition':'0.75s','opacity':'0'});

                    $('.IGFightIconLimeBottom').css({'transition':'0.75s',
                    'opacity':'1'});

                    $('.prizeCrownLimeBottom').css({'transition':'0.75s',
                    'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

                    $('.IGFI_Bottom, .IGFightIconLimeBottom, .prizeCrownLimeBottom').css({'transition':'0.75s',
                    'opacity':'1', 'filter':'opacity(1)'})

                    $('.prizeCrownLimeBottom').css({'transition':'0.75s', 'margin-top':'-37px'});

                    map.opacity.section([0.1,0.1,0.1], 0.75);

                }, 250)

                setTimeout(()=>{

                    $('.IGFI_Bottom, .IGFightIconLimeBottom').css({'transition':'0.5s',
                    'opacity':'0'});

                    if(tool.winnerFollowerIndex === 0) {
                        $('.prizeCrownLimeBottom').css({'transition':'0.75s',
                        'margin-left':'-38px', 'margin-top':'-48px', 'z-index':'-1'});
                    } else {
                        $('.prizeCrownLimeBottom').css({'transition':'0.75s',
                        'margin-left':'37px', 'margin-top':'-48px', 'z-index':'-1'});
                    }

                }, 1000)

                setTimeout(()=>{
                    $('.arrowsToOG2, .arrowBottomIGtoOG2').css({'transition':'0.75s', 'opacity':'1'});
                    $('.arrowTopIGtoOG2').css({'transition':'0s', 'opacity':'0'});
                }, 1750)

                setTimeout(()=>{
                    map.opacity.shadowOG2Right(false, 0.75);
                    map.opacity.OG2Right(1, 1);
                }, 2000)

                setTimeout(()=>{
                    map.animate.YAH_og2();
                }, 2500)

                setTimeout(()=>{

                    $('.IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'0.75s', 'opacity':'0.7'});
                    $('.OG1, .IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'1s',
                    'transform-origin':'right', 'transform':'scale(0.7)'});
                    $('.arrowsToOG1IconResults').css({'transition':'1s','margin-left':'-20px'});
                    $('.IG').css({'transition':'1s','margin-left':'-70px'});
                    $('.arrowsToOG2').css({'transition':'1s','margin-left':'15px', 'margin-top':'8px'});
                    $('.OG2').css({'transition':'1s', 'transform-origin':'left', 'transform':'scale(1.4)'})
                    $('.sexplain').css({'transition':'1s', 'margin-left':'-40px'});
                    map.opacity.bottomTransition(1, 0.75);
                    map.opacity.topTransition(1, 0.75);

                    setTimeout(()=>{
                        $('.OG2FightIcon').css({'transition':'1s', 'opacity':'0'});
                        $('.OG2FightIconLime').css({'transition':'1s', 'opacity':'1'});
                    }, 250)

                }, 2500)

            }, 3750)

        }

        if(state === 'og2_og1Lost') {

            // ------ STARTING SETUP ------------ //

            map.setupAfterOG1(mainData, false, true);

            map.opacity.main([0,0,0], 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            map.show.sections(0);

            map.set.OG1ResultIcons2();
            map.opacity.OG1Results(0,0)


            // DISPLAY THE MAP WITH SECTIONS ONLY


            // ------ SHOW STARTING SETUP ------- //

            setTimeout(()=>{

                $('.sexplain').css({
                    'transition':'0.75s',
                    'transform-origin':'center center',
                    'transform':'scale(1)',
                    'opacity':'1',
                    'margin-left':'10px'
                });

                map.opacity.main([1,1,1], 0.5);

            }, 10)

            // ------ prep the map ------- //

            setTimeout(()=>{

                map.opacity.section([0.1,0.7,0.4], 0.5);
                map.opacity.inside([1,0,0], 0.5);
                map.opacity.main([1,0,0], 0.5);

            }, 650)

            setTimeout(()=>{

                map.openSpace(0);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});

            }, 1500)


            // ---- show results ---- //

            /// aldskjaldkajslkdjalskdjalksj

            setTimeout(()=>{

                $('.OG1FightIconWrap').css({'transition':'0.75s', 'opacity':'0'});
                map.opacity.inside([0.6,1,0], 0.75);
                map.opacity.main([1,1,0], 0.75);
                $('.IGContests').css({'transition':'0.15s', 'opacity':'0'});
                map.opacity.OG1Results(1,0.75)

            }, 1750)

            setTimeout(()=>{

                map.opacity.IGContests(1, 0.75);
                map.show.topTransition(false, 0.75);
                $('.topBoxLeaderResult, .arrowToTopIconResults').css({'transition':'0.75s', 'opacity':'1'});
                map.set.OG2ResultingIcons2();
                map.opacity.shadowOG2(false, 0);

            }, 2250)

            setTimeout(()=>{

                map.opacity.main([1,1,1], 0.75);


            }, 2750)

            setTimeout(()=>{

                map.opacity.inside([0.6,1,1], 1.5);
                map.opacity.inside([0.6,1,1], 0.75);
                map.opacity.OG2Left(0, 0);
                // map.opacity.shadowOG2Left(false, 0);
                map.opacity.section([0.1,0.7,0.1], 1);
                map.opacity.OG2Left(0, 0);
                map.opacity.bottomTransition(0.6, 0.75);

                $('.prizeCrownBlackTop').css({'transition':'0s', 'opacity':'0'})

            }, 3000)

            setTimeout(()=>{

                map.show.topTransition(true, 0.75);

                setTimeout(()=>{

                    $('.IGContests').css({'transition':'1s', 'opacity':'1'});

                    $('.prizeCrownBlackBottom').css({'transition':'0.5s','opacity':'0'});

                    $('.IGFightIconLimeTop').css({'transition':'0.5s',
                    'opacity':'1'});

                    $('.prizeCrownLimeTop').css({'transition':'0.5s',
                    'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

                    $('.IGFI_Bottom, .IGFightIconLimeBottom, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'1', 'filter':'opacity(1)'})

                    $('.prizeCrownLimeBottom').css({'transition':'1s', 'margin-top':'-37px'});

                    map.opacity.section([0.1,0.1,0.1], 0.75);

                }, 250)

                setTimeout(()=>{


                    $('.IGFightIconLimeTop').css({'transition':'0.5s',
                    'opacity':'0'});

                    if(tool.winnerFollowerIndex === 0) {
                        $('.prizeCrownLimeTop').css({'transition':'0.75s',
                        'margin-left':'-38px', 'margin-top':'-48px', 'z-index':'-1'});
                    } else {
                        $('.prizeCrownLimeTop').css({'transition':'0.75s',
                        'margin-left':'37px', 'margin-top':'-48px', 'z-index':'-1'});
                    }

                }, 1000)

                setTimeout(()=>{
                    $('.arrowsToOG2, .arrowTopIGtoOG2').css({'transition':'0.75s', 'opacity':'1'});
                }, 1750)

                setTimeout(()=>{
                    map.opacity.topTransition(0.6, 0.75);
                    map.opacity.OG2Left(1, 1);
                }, 2000)

                setTimeout(()=>{
                    map.animate.YAH_og2();
                }, 2500)

                setTimeout(()=>{
                    $('.IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'0.75s', 'opacity':'0.7'});
                    $('.OG1, .IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'1s',
                    'transform-origin':'right', 'transform':'scale(0.7)'});
                    $('.arrowsToOG1IconResults').css({'transition':'1s','margin-left':'-20px'});
                    $('.IG').css({'transition':'1s','margin-left':'-70px'});
                    $('.arrowsToOG2').css({'transition':'1s','margin-left':'15px', 'margin-top':'8px'});
                    $('.OG2').css({'transition':'1s', 'transform-origin':'left', 'transform':'scale(1.4)'})
                    $('.sexplain').css({'transition':'1s', 'margin-left':'-40px'});
                    map.opacity.bottomTransition(1, 0.75);
                    map.opacity.topTransition(1, 0.75);

                    setTimeout(()=>{
                        $('.OG2FightIcon').css({'transition':'1s', 'opacity':'0'});
                        $('.OG2FightIconLime').css({'transition':'1s', 'opacity':'1'});
                    }, 250)

                }, 2500)

            }, 3750)

        }

        if(state === 'og2_og1Won_fb') {

            // ------ STARTING SETUP ------------ //

            map.setupAfterOG1(mainData, false, true);

            map.opacity.main([0,0,0], 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            map.show.sections(0);

            map.set.OG1ResultIcons2();
            map.opacity.OG1Results(0,0)


            // DISPLAY THE MAP WITH SECTIONS ONLY


            // ------ SHOW STARTING SETUP ------- //

            setTimeout(()=>{

                $('.sexplain').css({
                    'transition':'0.75s',
                    'transform-origin':'center center',
                    'transform':'scale(1)',
                    'opacity':'1',
                    'margin-left':'10px'
                });

                map.opacity.main([1,1,1], 0.75);

            }, 10)

            // ------ prep the map ------- //

            setTimeout(()=>{

                map.opacity.section([0.1,0.7,0.4], 0.75);
                map.opacity.inside([1,0,0], 0.75);
                map.opacity.main([1,0,0], 0.5);

            }, 650)

            setTimeout(()=>{

                map.openSpace(0);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});

            }, 1500)


            // ---- show results ---- //

            setTimeout(()=>{

                $('.OG1FightIconWrap').css({'transition':'0.75s', 'opacity':'0'});
                map.opacity.inside([0.6,1,0], 0.75);
                map.opacity.main([1,1,0], 0.75);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});
                map.opacity.OG1Results(1,0.75)

            }, 1750)

            setTimeout(()=>{

                map.opacity.IGContests(1, 0.75);
                map.show.bottomTransition(false, 0.75);
                $('.bottomBoxLeaderResult, .arrowToBottomIconResults').css({'transition':'0.75s', 'opacity':'1'});
                map.set.OG2ResultingIcons2();
                map.opacity.shadowOG2(false, 0);

            }, 2250)

            setTimeout(()=>{

                map.opacity.main([1,1,1], 0.75);

            }, 2750)

            setTimeout(()=>{

                map.opacity.inside([0.6,1,1], 0.75);
                map.opacity.shadowOG2(false, 0.75);
                // map.opacity.shadowOG2Right(true, 0.75);
                map.opacity.section([0.1,0.7,0.1], 0.75);
                map.opacity.OG2Right(0, 0);
                map.opacity.topTransition(0.6, 0.75);

                $('.prizeCrownBlackTop').css({'transition':'0s', 'opacity':'0'})

            }, 3250)

            setTimeout(()=>{

                map.show.bottomTransition(true, 0.75);

                setTimeout(()=>{

                    $('.IGContests').css({'transition':'1s', 'opacity':'1'});

                    $('.prizeCrownBlackBottom').css({'transition':'0.75s','opacity':'0'});

                    $('.IGFightIconLimeBottom').css({'transition':'0.75s',
                    'opacity':'1'});

                    $('.prizeCrownLimeBottom').css({'transition':'0.75s',
                    'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

                    $('.IGFI_Bottom, .IGFightIconLimeBottom, .prizeCrownLimeBottom').css({'transition':'0.75s',
                    'opacity':'1', 'filter':'opacity(1)'})

                    $('.prizeCrownLimeBottom').css({'transition':'0.75s', 'margin-top':'-37px'});

                    map.opacity.section([0.1,0.1,0.1], 0.75);

                }, 250)

                setTimeout(()=>{

                    $('.IGFI_Bottom, .IGFightIconLimeBottom').css({'transition':'0.5s',
                    'opacity':'0'});

                    if(tool.winnerFollowerIndex === 0) {
                        $('.prizeCrownLimeBottom').css({'transition':'0.75s',
                        'margin-left':'-38px', 'margin-top':'-48px', 'z-index':'-1'});
                    } else {
                        $('.prizeCrownLimeBottom').css({'transition':'0.75s',
                        'margin-left':'37px', 'margin-top':'-48px', 'z-index':'-1'});
                    }

                }, 1000)

                setTimeout(()=>{
                    $('.arrowsToOG2, .arrowBottomIGtoOG2').css({'transition':'0.75s', 'opacity':'1'});
                    $('.arrowTopIGtoOG2').css({'transition':'0s', 'opacity':'0'});
                }, 1750)

                setTimeout(()=>{
                    map.opacity.shadowOG2Right(false, 0.75);
                    map.opacity.OG2Right(1, 1);
                }, 2000)

                setTimeout(()=>{
                    map.animate.YAH_og2();
                }, 2500)

                setTimeout(()=>{

                    $('.IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'0.75s', 'opacity':'0.7'});
                    $('.OG1, .IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'1s',
                    'transform-origin':'right', 'transform':'scale(0.7)'});
                    $('.arrowsToOG1IconResults').css({'transition':'1s','margin-left':'-20px'});
                    $('.IG').css({'transition':'1s','margin-left':'-70px'});
                    $('.arrowsToOG2').css({'transition':'1s','margin-left':'15px', 'margin-top':'8px'});
                    $('.OG2').css({'transition':'1s', 'transform-origin':'left', 'transform':'scale(1.4)'})

                    map.opacity.bottomTransition(1, 0.75);
                    map.opacity.topTransition(1, 0.75);

                    setTimeout(()=>{
                        $('.OG2FightIcon').css({'transition':'1s', 'opacity':'0'});
                        $('.OG2FightIconLime').css({'transition':'1s', 'opacity':'1'});
                    }, 250)

                }, 2500)

                setTimeout(()=>{
                    map.opacity.main([0,0,1], 1);
                    $('.arrowsToOG1IconResults, .arrowsToOG2').css({'transition':'0.5s',
                    'opacity':'0'})
                    calculator.section.contest.minimize(false);
                    $('.sexplain').css({'transition':'1s','margin-left':'-312px',
                    'margin-top':'66px', 'transform':'scale(1) scaleX(1.11)'});
                }, 3250)

                setTimeout(()=>{
                    calculator.section.all.opacity(1, 1);
                    $('.contestTitle2').css({'transition':'0s', 'opacity':'0'});
                    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,1,0], 1);
                    setTimeout(()=>{
                        $('.sexplain').css({'transition':'1s', 'opacity':'0'});
                    }, 500)
                }, 3750)

            }, 3750)

        }

        if(state === 'og2_og1Lost_fb') {

            // ------ STARTING SETUP ------------ //

            map.setupAfterOG1(mainData, false, true);

            map.opacity.main([0,0,0], 0);

            // do this as a first thing for graphical ease
            map.opacity.shadowOG2(1);
            $('.IGFI_Top, .IGFI_Bottom').css({'filter':'opacity(0)'});

            map.show.sections(0);

            map.set.OG1ResultIcons2();
            map.opacity.OG1Results(0,0)


            // DISPLAY THE MAP WITH SECTIONS ONLY


            // ------ SHOW STARTING SETUP ------- //

            setTimeout(()=>{

                $('.sexplain').css({
                    'transition':'0.75s',
                    'transform-origin':'center center',
                    'transform':'scale(1)',
                    'opacity':'1',
                    'margin-left':'10px'
                });

                map.opacity.main([1,1,1], 0.5);

            }, 10)

            // ------ prep the map ------- //

            setTimeout(()=>{

                map.opacity.section([0.1,0.7,0.4], 0.5);
                map.opacity.inside([1,0,0], 0.5);
                map.opacity.main([1,0,0], 0.5);

            }, 650)

            setTimeout(()=>{

                map.openSpace(0);
                $('.IGContests').css({'transition':'0.25s', 'opacity':'0'});

            }, 1500)


            // ---- show results ---- //

            setTimeout(()=>{

                $('.OG1FightIconWrap').css({'transition':'0.75s', 'opacity':'0'});
                map.opacity.inside([0.6,1,0], 0.75);
                map.opacity.main([1,1,0], 0.75);
                $('.IGContests').css({'transition':'0.15s', 'opacity':'0'});
                map.opacity.OG1Results(1,0.75)

            }, 1750)

            setTimeout(()=>{

                map.opacity.IGContests(1, 0.75);
                map.show.topTransition(false, 0.75);
                $('.topBoxLeaderResult, .arrowToTopIconResults').css({'transition':'0.75s', 'opacity':'1'});
                map.set.OG2ResultingIcons2();
                map.opacity.shadowOG2(false, 0);

            }, 2250)

            setTimeout(()=>{

                map.opacity.main([1,1,1], 0.75);

            }, 2750)

            setTimeout(()=>{

                map.opacity.inside([0.6,1,1], 1.5);
                map.opacity.inside([0.6,1,1], 0.75);
                map.opacity.OG2Left(0, 0);
                // map.opacity.shadowOG2Left(false, 0);
                map.opacity.section([0.1,0.7,0.1], 1);
                map.opacity.OG2Left(0, 0);
                map.opacity.bottomTransition(0.6, 0.75);

                $('.prizeCrownBlackTop').css({'transition':'0s', 'opacity':'0'})

            }, 3000)

            setTimeout(()=>{

                map.show.topTransition(true, 0.75);

                setTimeout(()=>{

                    $('.IGContests').css({'transition':'1s', 'opacity':'1'});

                    $('.prizeCrownBlackBottom').css({'transition':'0.5s','opacity':'0'});

                    $('.IGFightIconLimeTop').css({'transition':'0.5s',
                    'opacity':'1'});

                    $('.prizeCrownLimeTop').css({'transition':'0.5s',
                    'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

                    $('.IGFI_Bottom, .IGFightIconLimeBottom, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'1', 'filter':'opacity(1)'})

                    $('.prizeCrownLimeBottom').css({'transition':'1s', 'margin-top':'-37px'});

                    map.opacity.section([0.1,0.1,0.1], 0.75);

                }, 250)

                setTimeout(()=>{

                    $('.IGFightIconLimeTop').css({'transition':'0.5s',
                    'opacity':'0'});

                    if(tool.winnerFollowerIndex === 0) {
                        $('.prizeCrownLimeTop').css({'transition':'0.75s',
                        'margin-left':'-38px', 'margin-top':'-48px', 'z-index':'-1'});
                    } else {
                        $('.prizeCrownLimeTop').css({'transition':'0.75s',
                        'margin-left':'37px', 'margin-top':'-48px', 'z-index':'-1'});
                    }

                }, 1000)

                setTimeout(()=>{
                    $('.arrowsToOG2, .arrowTopIGtoOG2').css({'transition':'0.75s', 'opacity':'1'});
                }, 1750)

                setTimeout(()=>{
                    map.opacity.topTransition(0.6, 0.75);
                    map.opacity.OG2Left(1, 1);
                }, 2000)

                setTimeout(()=>{
                    map.animate.YAH_og2();
                }, 2500)

                setTimeout(()=>{

                    $('.IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'0.75s', 'opacity':'0.7'});
                    $('.OG1, .IG, .arrowsToOG2, .arrowsToOG1IconResults').css({'transition':'1s',
                    'transform-origin':'right', 'transform':'scale(0.7)'});
                    $('.arrowsToOG1IconResults').css({'transition':'1s','margin-left':'-20px'});
                    $('.IG').css({'transition':'1s','margin-left':'-70px'});
                    $('.arrowsToOG2').css({'transition':'1s','margin-left':'15px', 'margin-top':'8px'});
                    $('.OG2').css({'transition':'1s', 'transform-origin':'left', 'transform':'scale(1.4)'})

                    map.opacity.bottomTransition(1, 0.75);
                    map.opacity.topTransition(1, 0.75);

                    setTimeout(()=>{
                        $('.OG2FightIcon').css({'transition':'1s', 'opacity':'0'});
                        $('.OG2FightIconLime').css({'transition':'1s', 'opacity':'1'});
                    }, 250)

                }, 2500)

                setTimeout(()=>{

                    map.opacity.main([0,0,1], 1);
                    $('.arrowsToOG1IconResults, .arrowsToOG2').css({'transition':'0.5s',
                    'opacity':'0'})
                    calculator.section.contest.minimize(false);
                    $('.sexplain').css({'transition':'1s','margin-left':'-312px',
                    'margin-top':'66px', 'transform':'scale(1) scaleX(1.11)'});

                }, 3250)

                setTimeout(()=>{
                    calculator.section.all.opacity(1, 1);
                    $('.contestTitle2').css({'transition':'0s', 'opacity':'0'});
                    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,1,0], 1);
                    setTimeout(()=>{
                        $('.sexplain').css({'transition':'1s', 'opacity':'0'});
                    }, 500)
                }, 3750)

            }, 3750)

        }

    }

    // circles will appear as the map is replaced by the calculator icons.
    // this transition occurs inside map.show.stage big function sub condition
    // circles will dissappear when the wheel starts spinning
    // killing function is inside calculator.wheel.spin()
    // so far we are only using it in stage23 feedback
    map.showCirclesInsideCalculator = function() {

        if(calculator.globalVariable.playerIndex === -1) {
            $('.leaderRedCircle').css({'transition':'5s', 'opacity':'1'});
        }

        if(calculator.globalVariable.playerIndex === 0) {
            $('.follower1RedCircle').css({'transition':'5s', 'opacity':'1'});
        }

        if(calculator.globalVariable.playerIndex === 1) {
            $('.follower2RedCircle').css({'transition':'5s', 'opacity':'1'});
        }

    }





}


generateMap();
