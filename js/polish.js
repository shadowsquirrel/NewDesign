var map = {

    display: {},
    show: {},
    hide: {},
    opacity: {},
    active: {},
    reset: {},
    animate: {},
    wheel: {}

};

var data = {};

map.winnerFollowerIndex = 1;


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

//------BOX OPACITY METHODS------//
//------BOX OPACITY METHODS------//
//------BOX OPACITY METHODS------//

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

    map.insideOf('og1', optArray[0].toString());
    map.insideOf('ig', optArray[1].toString());
    map.insideOf('og2', optArray[2].toString());

}

// IconsWrap, [topIcon, bottomIcon]
map.opacity.resultIcons = function(mainOpt, optArray) {

    $('.wonLostBoxes').css({'transition':'0.5s', 'opacity': mainOpt.toString()});
    $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity': optArray[0].toString()});
    $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity': optArray[1].toString()});

}


//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//


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

map.show.overview = function() {

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

}

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

//------ANIMATE METHODS------//
//------ANIMATE METHODS------//
//------ANIMATE METHODS------//

// tag = top / bottom
// show arrow
// show icon result + hide related leader icon from og1
//
map.animate.OG1Outcome = function(player, delay) {

    delay = delay === undefined ? 750 : delay;

    map.openSpace();
    map.active.og1(false);
    $('.OG1FightIconLime').css({'opacity':'0'});
    $('.OG1FightIcon').css({'opacity':'0.3'});

    if(player === 'top') {

        setTimeout(()=>{$('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'1'});}, delay)

        setTimeout(()=>{
            $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
            $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0.3'});
        }, 2 * delay);

    }

    if(player === 'bottom') {

        setTimeout(()=>{$('.arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});}, delay)

        setTimeout(()=>{
            $('.bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
            $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0.3'});
        }, 2 * delay);

    }

}

// point arrow from result icon to IG contest
// Position the lime crown icon to the middle
// turn the fight icon from lime to black by hiding limefighticon
// turn the black fight icon hidden
// put the red cross
map.animate.discardIG1 = function(player, delay) {

    delay = delay === undefined ? 750 : delay;

    if(player === 'top') {

        map.opacity.arrowsFromResultIcons([1,-1], [0, -1]);
        setTimeout(()=>map.active.ig([0,-1]), 250);

        setTimeout(()=>
        {
            $('.IGFightIconLimeTop').css({'transition':'0.5s','opacity':'0'});
            $('.prizeCrownLimeTop').css({'transition':'0s', 'opacity':'0', 'margin-top':'-18px', 'margin-left':'0px'});
        }, delay);

        setTimeout(()=>{$('.prizeCrownBlackTop').css({'transition':'0.5s', 'opacity':'0'});}, 2 * delay);
        setTimeout(()=>{$('.IGFI_Top').css({'transition':'0.5s', 'opacity':'0'});}, 3 * delay);
        setTimeout(()=>{$('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'1'});}, 4 * delay);

    }

    if(player === 'bottom') {

        map.opacity.arrowsFromResultIcons([-1,1], [-1, 0]);
        setTimeout(()=>map.active.ig([-1,0]), 250);

        setTimeout(()=>
        {
            $('.IGFightIconLimeBottom').css({'transition':'0.5s','opacity':'0'});
            $('.prizeCrownLimeBottom').css({'transition':'0s', 'opacity':'0', 'margin-top':'-18px', 'margin-left':'0px'});
        }, delay);

        setTimeout(()=>{$('.prizeCrownBlackBottom').css({'transition':'0.5s', 'opacity':'0'});}, 2 * delay);
        setTimeout(()=>{$('.IGFI_Bottom').css({'transition':'0.5s', 'opacity':'0'});}, 3 * delay);
        setTimeout(()=>{$('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'1'});}, 4 * delay)

    }

}

// make the discarded IG opaque show the long arrow hide the short arrow
map.animate.discardIG2 = function(player, delay) {

        delay = delay === undefined ? 750 : delay;

        if(player === 'top') {

            map.opacity.arrowsFromResultIcons([0, -1], [1, -1]);
            $('.IGTopContestWrap').css({'transition':'0.5s','opacity':'0.1'});
            $('.mapdiscardedXTop').css({'transition':'0.5s','opacity':'0.2'});
            setTimeout(()=>{map.opacity.arrowsFromResultIcons([0,-1], [1, 0]);}, delay);

        }

        if(player === 'bottom') {

            map.opacity.arrowsFromResultIcons([-1, 0], [-1, 1]);
            $('.IGBottomContestWrap').css({'transition':'0.5s','opacity':'0.1'});
            $('.mapdiscardedXBottom').css({'transition':'0.5s','opacity':'0.2'});
            setTimeout(()=>{map.opacity.arrowsFromResultIcons([-1, 0], [0, 1]);}, delay);

        }

}

// player= top or bottom and winner index = 1 or 0
map.animate.validIG = function(player, delay, winnerFollowerIndex) {

    var ml = winnerFollowerIndex === 1 ? '-37px' : '37px';

    if(player === 'top') {

        map.opacity.arrowsFromResultIcons([1,0], [0, -1]);
        setTimeout(()=>{
            $('.prizeCrownLimeTop, .IGFI_Top').css({'transition':'0.5s', 'opacity':'1'});
            $('.prizeCrownBlackTop, .IGFightIconLimeTop').css({'transition':'0.5s', 'opacity':'0'});
        }, delay)
        setTimeout(()=>{$('.prizeCrownLimeTop').css({'transition':'2s', 'margin-top':'-24px', 'margin-left': ml});}, 2 * delay)

    }

    if(player === 'bottom') {

        map.opacity.arrowsFromResultIcons([0, 1], [-1, 0]);
        setTimeout(()=>{
            $('.prizeCrownLimeBottom, .IGFI_Bottom').css({'transition':'0.5s', 'opacity':'1'});
            $('.prizeCrownBlackBottom, .IGFightIconLimeBottom').css({'transition':'0.5s', 'opacity':'0'});
        }, delay)
        setTimeout(()=>{$('.prizeCrownLimeBottom').css({'transition':'2s', 'margin-top':'-24px', 'margin-left': ml});}, delay)

    }

}


map.animate.winner = function(winnerLeaderIndex, winnerFollowerIndex) {

    if(winnerLeaderIndex === 1) {

        // show winner


    }

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


//-----NETPAYOFF 1----//

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

    $('.OG1GroupSeparator').css({'transition':'2s', 'opacity':'1', 'height':'126px'});

    $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'1s', 'opacity':'0'});
    $('.OG1ficonLime, .arrowDashedLime1').css({'transition':'1s', 'opacity':'1'});

    //stage 3 inactive
    $('.OG1FightIconLime, .OG1FightIcon').css({'transition':'1s', 'opacity':'0'});
    $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0.5'});



}

map.display.stage3 = function() {

    map.opacity.main([1,0,0]);
    map.opacity.mainArrowSections([0,0,0]);

    // stage 2 inactive
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '0.5'});
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '0.5'});

    $('.OG1GroupSeparator').css({'transition':'1s', 'opacity':'0', 'height':'0px'});

    $('.OG1ficonLime, .arrowDashedLime1').css({'transition':'1s', 'opacity':'0'});

    // stage 3 active
    $('.OG1FightIconLime').css({'transition':'1s', 'opacity':'1'});
    $('.OG1FightIcon').css({'transition':'1s', 'opacity':'0'});

    $('.OG1LeaderRight, .OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'1'});

}

map.display.stage4 = function(highlightBorder) {

    map.opacity.main([1,1,0]);
    map.opacity.cover([0,0,1]);
    map.opacity.coverArrows([0,1]);
    map.opacity.inside([1,1,0]);

    // hide icon results
    $('.wonLostBoxes').css({'transition':'0.5s', 'opacity': '1'});
    $('.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0'});

    map.opacity.arrowsToResultIcons([0,0]);
    map.opacity.arrowsFromResultIcons([0,0], [0,0]);

    // followers are even more opaque
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '0.2'});
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '0.2'});


    //lime fight icon, black crown
    $('.IGFightIconLimeTop, .IGFightIconLimeBottom').css({'transition':'0.5s','opacity':'1'});
    $('.prizeCrownLimeTop, .prizeCrownLimeBottom').css({'transition':'0s', 'opacity':'0', 'margin-top':'-18px', 'margin-left':'0px'});
    $('.prizeCrownBlackTop, .prizeCrownBlackBottom').css({'opacity':'1'});
    $('.IGTopContestWrap, .IGBottomContestWrap').css({'opacity':'1'});
    $('.mapdiscardedXTop, .mapdiscardedXBottom').css({'opacity':'0'});


    if(highlightBorder) {

        map.active.ig([1, 1]);

    } else {

        map.active.ig([0, 0]);

    }


}



map.showMap();
map.show.sections();



/*
// map.show = function(state) {
//
//
//     if(state === 'og1') {
//
//         map.showOG1(0.1, 8, 'lime', 0.4);
//
//     }
//
//     if(state === 's2') {
//
//         map.showStage2();
//
//     }
//
//     if(state === 's3') {
//
//         map.showStage3(0.4);
//
//     }
//
//     if(state === 's3ands4') {
//
//         map.showStage3(0.1);
//         map.showIG();
//
//     }
//
//     if(state === 'og1resultsWinner1') {
//
//         $('.arrowTopIconToIG, .arrowBottomIconToIG').css({'transition':'0.5s', 'opacity':'0'});
//         map.winnerFollowerIndex = 2;
//         var blackWon = true;
//         var showWinner = true;
//         map.showResults(!blackWon, showWinner);
//
//     }
//
//     if(state === 'og1resultsLoser') {
//
//         blackWon = true;
//         showWinner = true;
//         map.showResults(!blackWon, !showWinner);
//
//     }
//
//     if(state === 'leaderwontoog2') {
//
//         $('.arrowToBottomIconResults').css({'opacity':'0'});
//
//
//         $('.OG1FightIconLime, .mapfightIconLimeFollowers, .wa4, .mapdiscarded').css({'opacity':'0'});
//         $('.la4, .mapwa5, .mapacceptedBox, .mapigtitle, .x456, .mapOG2').css({'opacity':'0'});
//
//         $('.OG1FollowersWrapRight, .OG1LeaderRight, .OG1FightIconWrap').css({'opacity':'0.4'});
//         $('.discardedIGcontest, .mapdiscarded, .mapdiscardedB, .mapdiscardedX, .x4da5').css({'opacity':'1'});
//         $('.mapacceptedBox').css({'border-color':'black'});
//         $('.mapOG2, .wa4, .x4da5, .x456, .winnerleadertalk').css({'opacity':'1'});
//         $('.groupA, .x4a5, .mapfightIcon2').css({'opacity':'0'});
//         $('.mapOG2').css({'border-color':'lime'});
//
//
//     }
//
//
//
//     if(state === 'llog2') {
//
//         // $('.arrowToTopIconResults').css({'opacity':'0'});
//
//
//         $('.wa4, .mapwa5, .mapacceptedBox, .mapigtitle, .x456, .mapOG2, .discardedIGcontest').css({'opacity':'0'});
//         $('.mapacceptedBox').css({'border-color':'black'});
//         $('.la4, .mapacceptedBox').css({'opacity':'1'});
//         $('.OG1FollowersWrapLeft, .OG1LeaderLeft,.OG1FollowersWrapRight, .OG1LeaderRight, .OG1FightIconWrap').css({'opacity':'0.4'});
//         $('.mapOG2, .x4da5, .x456, .mapigtitle, .x4a5, .groupA, .lostleadertalk').css({'opacity':'1'});
//         $('.w34, .wa4, .mapwa5, .x4da5, .groupB, .winnerleadertalk').css({'opacity':'0'});
//         $('.mapOG2').css({'border-color':'lime'});
//
//     }
//
//     if(state === 'og2') {
//
//         $('.arrowToTopIconResults, .arrowToBottomIconResults').css({'opacity':'0.4'});
//
//
//         $('.discardedIGcontest, .mapdiscarded, .mapdiscardedB, .mapdiscardedX, .x4da5, .groupB, .mapfightIcon2').css({'opacity':'1'});
//         $('.OG1FollowersWrapLeft, .OG1LeaderLeft,.OG1FollowersWrapRight, .OG1LeaderRight, .OG1FightIconWrap, .mapxwl, .la4, .wa4, .mapacceptedBox, .mapdiscardedB, .x4a5, .x4da5').css({'opacity':'0.4'});
//         $('.mapOG2').css({'border-color':'lime'});
//         $('.lostleadertalk').css({'opacity':'0'});
//
//     }
//
//     if(state === 's5') {
//
//         $('.arrowToTopIconResults, .arrowToBottomIconResults').css({'opacity':'0.4'});
//
//
//         $('.discardedIGcontest, .mapdiscarded, .mapdiscardedB, .mapdiscardedX, .x4da5, .groupB, .mapfightIcon2').css({'opacity':'1'});
//         $('.OG1FollowersWrapLeft, .OG1LeaderLeft,.OG1FollowersWrapRight, .OG1LeaderRight, .OG1FightIconWrap, .mapxwl, .la4, .wa4, .mapacceptedBox, .mapdiscardedB, .x4a5, .x4da5').css({'opacity':'0.4'});
//         $('.mapOG2').css({'border-color':'lime'});
//         $('.lostleadertalk').css({'opacity':'0'});
//
//         $('.mapspf1L2, .arrowdashedlime2').css({'opacity':'1'});
//         $('.lostleadertalk').css({'opacity':'0'});
//
//
//     }
//
//     if(state === 's6') {
//
//         $('.arrowToTopIconResults, .arrowToBottomIconResults').css({'opacity':'0.4'});
//
//
//         $('.discardedIGcontest, .mapdiscarded, .mapdiscardedB, .mapdiscardedX, .x4da5, .groupB, .mapfightIcon2').css({'opacity':'1'});
//         $('.OG1FollowersWrapLeft, .OG1LeaderLeft,.OG1FollowersWrapRight, .OG1LeaderRight, .OG1FightIconWrap, .mapxwl, .la4, .wa4, .mapacceptedBox, .mapdiscardedB, .x4a5, .x4da5').css({'opacity':'0.4'});
//         $('.mapOG2').css({'border-color':'lime'});
//         $('.lostleadertalk').css({'opacity':'0'});
//
//         $('.mapspf1L2, .arrowdashedlime2').css({'opacity':'0'});
//         $('.og1leaderlime2').css({'border-color':'lime'});
//         $('.mapfightIconLime2').css({'opacity':'1'});
//
//     }
//
// }

var rotateCounter = 0;
var rotate = function() {

    var array = ['og1', 's2', 's3', 's3ands4', 'og1resultsWinner', 'og1resultsLoser'];

    console.log(array[rotateCounter]);

    // map.show(array[rotateCounter]);

    rotateCounter++;

    if(rotateCounter === array.length) rotateCounter = 0;

}

var yoyo = document.getElementById('mybutton1');
yoyo.onclick = function() {
    rotate();
}
*/

//
