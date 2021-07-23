/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/


//----------------------------------------//
//----- HS2-3 SLIDER VALUE LISTENER -----//
//---------------------------------------//

if(listener.hs2_3_f1 && h1 === 20) {
    activator.hs2_3_f1 = true;
    listener.hs2_3_f1 = false;
}

if(activator.hs2_3_f1) {

    calculator.show.checkMark();

    setTimeout(()=>{
        box.button.show('HS2-3');
    }, 1000)

    activator.hs2_3_f1 = false;

}


/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/


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


/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/
// FOLLOWER 1 POINT OF VIEW

//change the layout of the calculator switch to subjectiveview to 1 or 2 (i.e. one of the followers)
calculator.globalVariable.playerView = 1;
calculator.globalVariable.playerIndex = 0;
//updated the icons accordingly
calculator.icons.setAll();
// update slider
calculator.refresh.values();
// change ghost title color to green white
$('.contestTitle1, .contestTitle22, .ghostTitleColor').css({'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});
//update the rolls accordingly
calculator.roll.resetRoll();
$('.wrapRight, .iaf2, .lbf2').css({'display':'none'});


/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/
// LEADER POINT OF VIEW

calculator.globalVariable.playerView = 1;
calculator.globalVariable.playerIndex = -1;
//updated the icons accordingly
calculator.icons.setAll();
// update slider
calculator.refresh.values();
$('.contestTitle1, .contestTitle22, .ghostTitleColor').css({'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});
// calculator.wheel.hide();
calculator.graphics.update.contestSliderBackgroundColor();
calculator.roll.resetRoll();


/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/


// set the help sabotage value
// s1,s2,h1,h2,os1,os2,oh1,oh2
calculator.values.set.helpSabo([15,0,0,5,0,0,7,8]);
calculator.refresh.sliders();


/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/

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


$('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'1s', 'opacity':'0'});
$('.OG1LeadersIcon, .OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1s', 'opacity':'1'});
$('.leaderKingLeft, .leaderKingRight').css({'transition':'1s', 'filter':'drop-shadow(0px 3px 2px black)', 'opacity':'1'});





calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
calculator.section.hs.set.iconPosition('bottom');
calculator.globalVariable.hover.hsIcons = false;

calculator.titles.hs.ghost.text();
calculator.titles.hs.ghost.show();
calculator.globalVariable.hover.hsGhostTitle = false;

calculator.titles.hs.hide();
calculator.globalVariable.hover.hsMainTitle = false

calculator.section.hs.minimize(true)
calculator.globalVariable.hover.hsMinimize = false;

calculator.globalVariable.hover.cMinimize = false;

$('.generalMarginBox').css({'margin-top':'-82px', 'padding-top':'10px'});









    // hide title
    $('.ctBottom').css({'transition':'1s',
    'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
    $('.ctBottom').css({ 'opacity':'0'});

    calculator.space.close.cResults();

    calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]);
    calculator.section.hs.set.iconPosition('center');
    calculator.titles.hs.show();
    calculator.section.hs.minimize(false);
    calculator.section.contest.minimize(false);
    calculator.titles.update.position();
    calculator.results.hide.leaderOutcomes();
    calculator.titles.hs.ghost.text();
    calculator.titles.hs.ghost.hide();

    $('.generalMarginBox').css({'margin-top':'10px'});
    $('.contestSection').css({'margin-top':'-28px'});

    calculator.wheel.enervate(0);





    if(activator.ls2_902_f1) {

        activator.ls2_902_f1 = false;

        setTimeout(()=>{
            calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
            calculator.section.hs.set.iconPosition('bottom');
            calculator.globalVariable.hover.hsIcons = false;

            calculator.titles.hs.ghost.text();
            calculator.titles.hs.ghost.show();
            calculator.globalVariable.hover.hsGhostTitle = false;

            calculator.titles.hs.hide();
            calculator.globalVariable.hover.hsMainTitle = false

            calculator.section.hs.minimize(true)
            calculator.globalVariable.hover.hsMinimize = false;

            calculator.globalVariable.hover.cMinimize = false;

            $('.generalMarginBox').css({'margin-top':'-82px', 'padding-top':'10px'});
        }, 1000)

        setTimeout(()=>{
            calculator.hide.checkMark();
            calculator.lock.activate([1,1,1,1,1,1]);
            box.transition('LC2-902', 'LC2-9021', 0, 0, 1, 500);
        }, 1000)

        setTimeout(()=>{

            calculator.values.set.efforts([200, 200]);

            if(box.global.symmetricHeteroTreatment) {
                calculator.values.set.helpSabo([0,0,0,7,4,0,0,7]);
                calculator.refresh.sliders();
            }

            if(box.global.asymmetricHeteroTreatment) {
                calculator.values.set.helpSabo([0,0,10,14,0,0,2,2]);
                calculator.refresh.sliders();
            }

            if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
                calculator.values.set.helpSabo([1,0,0,1,0,0,1,3]);
                calculator.refresh.sliders();
            }

        }, 1250)

        setTimeout(()=>{
            calculator.lock.activate([0,1,1,1,1,1]);
            calculator.pointers.activate([1,0,0,0,0,0]);
            listener.ls2_9021_f1 = true;
        }, 1750)


    }



/*------------------------------------------------------------*/

// map.closeSpace()
// map.opacity.mainArrowSections([0,0,0]);
// isolate group A and enlarge it
setTimeout(()=>{
    $('.IGBottomContestWrap').css({'transition':'1s', 'filter':'opacity(0)'});
    $('.IGTopContestWrap').css({'transition':'1s', 'transform':'scale(2)', 'margin-top':'124px'});
    map.opacity.main([0, 1, 0], 1);
}, 750)


/*----*/

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
$('.IG_generalMarginBox').css({'margin-top':'38px'})


$('.rightFollowerIconMainWrap').css({'filter':'drop-shadow(5px 5px 3px transparent)'});
$('.IG_generalMarginBox').css({'transition':'0.5s', 'padding-top':'10px'});
if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
    $('.rightFollowerIconMainWrap').css({'margin-top':'0px'});
    $('.IG_generalMarginBox').css({'transition':'0.5s', 'padding-top':'0px'});
}

setTimeout(()=>{
    calculator.titles.contest.IG_hide();
    calculator.results.hide.IG_leaderOutcomes()
    calculator.globalVariable.IG_contestResultsExist = false;
    calculator.space.update.IG_heights();
}, 100)
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


// FIRST STEP
map.IGHighlightAnimationOn = false;
map.opacity.main([0,1,0], 0.5)
$('.IGFI_Top').css({'transition':'0.5s', 'opacity':'1'});
$('.arrowsToOG1IconResults').css({'transition':'0.5s', 'opacity':'0'})
$('.IG').css({'transform-origin':'top', 'transform':'scale(2)',
'margin-top':'43px', 'margin-left':'-183px'});

// PREP CALCULATOR
calculator.tutorial.IG('A', false, 1000, true);
calculator.roll.IG_resetRoll();
$('.IG_generalMarginBox').css({'margin-top':'38px'})
$('.IG_superWrap').css({'transition':'0s', 'opacity':'0'});

$('.rightFollowerIconMainWrap').css({'filter':'drop-shadow(5px 5px 3px transparent)'});
$('.IG_generalMarginBox').css({'transition':'0.5s', 'padding-top':'10px'});
if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
    $('.rightFollowerIconMainWrap').css({'margin-top':'0px'});
    $('.IG_generalMarginBox').css({'transition':'0.5s', 'padding-top':'0px'});
}
