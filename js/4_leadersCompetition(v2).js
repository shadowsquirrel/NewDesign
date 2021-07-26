//-------------------------------------------------------------------------//
//------------------------- DEBUG INITIATION ------------------------------//
//-------------------------------------------------------------------------//

calculator.hide.checkMark();

var debug = {
    start: {}
}

//----------------------------------------------------------------------------//
//---------------------------- LEADER COMPETITION ----------------------------//
//----------------------------------------------------------------------------//


debug.start.LC1 = function(treatment) {

    //------------------------------------------------------------------//

    $('.leaderPowerRatioHeteroText, .leaderPowerRatioHomoText').css({'display':'none'});
    $('.lc1-4-homo-text, .lc1-4-heteroS-text, .lc1-4-heteroAS-text').css({'display':'none'});

    if(treatment === 0) {
        box.set.treatment_tuto_lc(0,0);
        $('.leaderPowerRatioHomoText').css({'display':'block'});
        $('.lc1-4-homo-text').css({'display':'block'});
    }

    if(treatment === 1) {
        box.set.treatment_tuto_lc(1,0);
        $('.leaderPowerRatioHeteroText').css({'display':'block'});
        $('.lc1-4-heteroS-text').css({'display':'block'});
    }

    if(treatment === 2) {
        box.set.treatment_tuto_lc(0,1);
        $('.leaderPowerRatioHeteroText').css({'display':'block'});
        $('.lc1-4-heteroAS-text').css({'display':'block'});
    }


    //------------------------------------------------------------------//


    $('#boxbox-LC1').css({'display':'block'});

    $('.generalMarginBox').css({'display':'none'});
    $('.generalMarginBox').css({'transition':'1s', 'margin-bottom':'-475px', 'transform':'scaleY(0)'});

    title.update.text('COMPETITION MECHANICS');
    title.update.size(true);
    title.update.textColor(-4500, true, 30);



    // bring the map
    // activate the map but make it bodyless
    map.show.initialSetup();
    $('.sexplain').css({'display':'none'});
    setTimeout(()=>{
        $('.sexplain').css({'transition':'0s', 'margin-top':'20px','margin-bottom':'10px',
        'transform':'scale(1)', 'opacity':'0'});
        setTimeout(()=>{
            $('.sexplain').css({'display':'flex'});
        }, 15)
    },250)

    // transition map to the second step of the OG1
    map.enlarge.main([1.2, 0.6, 1.2], 0);
    map.opacity.section([0.05,1,0.35], 0);
    map.opacity.cover([0,0,1], 0);
    map.opacity.inside([1,0,0], 0);
    map.opacity.sectionTitles([1,1,1], 0);
    map.opacity.main([1,0.45,0.45], 0);

    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.5s', 'opacity':'1'});
    }, 250)

    setTimeout(()=>{
        map.globalVariable.stopHelpSabotageAnimation3 = false;
        map.animate.helpSabotage3(0);
    },250)


    setTimeout(()=>{
        box.transition('', 'LC1-1', 0, 0, 1, 0);
    }, 750)


    setTimeout(()=>{
        box.button.show('LC1-1');
    }, 2000)


    // calculator.globalVariable.tutorialLeaderIconOpacityBlockisOn = false;
    //
    setTimeout(()=>{

        // setup of calculator as it is in the flow
        calculator.setup.hsOnly();
        calculator.section.power.opacity.bar(1);
        calculator.section.power.display.barText('none');
        calculator.section.power.display.barLegend(true);
        calculator.space.powerBarLegendIsOpen = true;
        calculator.graphics.dynamicPowerBarText = true;
        $('.generalMarginBox').css({'transition':'0s', 'margin-bottom':'-295px', 'transform':'scaleY(0)', 'opacity':'0'});
        setTimeout(()=>{
            $('.generalMarginBox').css({'display':'none'});
            $('.hsWrap').css({'filter':'opacity(1)'});
        }, 1000)

    }, 1000)

    $('.pWrap').css({'z-index':'-1'});


}


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

debug.start.LC1(1);


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

var listener = {};
var activator = {};


//----------------------------------------------------------------------------//
//--------------------------- LEADER COMPETITION -----------------------------//
//----------------------------------------------------------------------------//


$('#btn-LC1-1').click(function() {

    $('.wpWrap').css({'z-index':'-10'});

    // hide the previous info text box
    box.transition('LC1-1', '', 0, 0, 1, 750);

    calculator.roll.resetRoll();

    // hide title
    title.update.size(false);


    // hide map
    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.5s', 'margin-top':'-230px','margin-bottom':'10px',
        'transform':'scaleY(0)', 'opacity':'0'});
        setTimeout(()=>{
            $('.sexplain').css({'display':'none'});
        }, 550)
    }, 50)

    setTimeout(()=>{
        // show help sabotage decision
        $('.generalMarginBox').css({'display':'block', 'margin-bottom':'-293px',});
        setTimeout(()=>{
            $('.generalMarginBox').css({'transition':'1s', 'margin-bottom':'88px', 'margin-top':'35px', 'transform':'scaleY(1)'});
        }, 550)
    }, 550)

    // make them locked
    calculator.introduce.costsAreDisplayed = 0;
    calculator.introduce.costs()
    calculator.lock.activate([1,1, 1,1, 1,1]);


    // set the help sabotage value
    // s1,s2,h1,h2,os1,os2,oh1,oh2
    calculator.values.set.helpSabo([0,0,0,0,0,0,0,0]);
    calculator.refresh.sliders();

    // show the info text
    setTimeout(()=>{
        box.transition('', 'LC1-3', 0, 0, 1, 750);
    }, 1000)

    setTimeout(()=>{
        box.button.show('LC1-3');
    }, 3000)

})

$('#btn-LC1-3').click(function() {

    box.transition('LC1-3', 'LC1-301', 0, 0, 1, 0);
    setTimeout(()=>{
        box.button.show2('LC1-301');
    }, 750)


})

$('#btn-LC1-301').click(function() {

    box.transition('LC1-301', '', 0, 0, 1, 0);

    $('#boxwrap-LC1-301').css({'transition':'0.5s', 'transform':'scale(0)'});
    setTimeout(()=>{
        $('#boxwrap-LC1-301').css({'display':'none'});
    }, 510)

    var delay = 500;

    setTimeout(()=>{

        if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment){

            calculator.values.set.helpSabo([0,0,3,0,0,0,0,0]);
            calculator.refresh.sliders();

            setTimeout(()=>{
                calculator.values.set.helpSabo([0,0,3,1,0,0,0,0]);
                calculator.refresh.sliders();
            }, delay)

            setTimeout(()=>{
                calculator.values.set.helpSabo([0,0,3,1,0,0,1,0]);
                calculator.refresh.sliders();
            }, delay*2.5)

            setTimeout(()=>{
                calculator.values.set.helpSabo([0,0,3,1,0,0,1,3]);
                calculator.refresh.sliders();
            }, delay*3.5)

        } else {

            if(box.global.symmetricHeteroTreatment) {

                calculator.values.set.helpSabo([4,0,0,0,0,0,0,0]);
                calculator.refresh.sliders();

                setTimeout(()=>{
                    calculator.values.set.helpSabo([4,0,0,7,0,0,0,0]);
                    calculator.refresh.sliders();
                }, delay)

                setTimeout(()=>{
                    calculator.values.set.helpSabo([4,0,0,7,4,0,0,0]);
                    calculator.refresh.sliders();
                }, delay*2.5)

                setTimeout(()=>{
                    calculator.values.set.helpSabo([4,0,0,7,4,0,0,7]);
                    calculator.refresh.sliders();
                }, delay*3.5)

            }

            if(box.global.asymmetricHeteroTreatment) {

                calculator.values.set.helpSabo([2,0,0,0,0,0,0,0]);
                calculator.refresh.sliders();

                setTimeout(()=>{
                    calculator.values.set.helpSabo([2,0,0,14,0,0,0,0]);
                    calculator.refresh.sliders();
                }, delay)

                setTimeout(()=>{
                    calculator.values.set.helpSabo([2,0,0,14,0,0,2,0]);
                    calculator.refresh.sliders();
                }, delay*2.5)

                setTimeout(()=>{
                    calculator.values.set.helpSabo([2,0,0,14,0,0,2,2]);
                    calculator.refresh.sliders();
                }, delay*3.5)

            }

        }


        setTimeout(()=>{
            box.transition('', 'LC1-4', 0, 0, 1, 0);
        }, delay*5)

        setTimeout(()=>{
            box.button.show('LC1-4');
        }, delay*7.5)

    }, 750)



})

$('#btn-LC1-4').click(function() {

    calculator.globalVariable.dynamicDisplay = false;

    box.transition('LC1-4', '', 0, 0, 1, 0);

    // we make sure that contest section is initially invisible
    $('.contestSection, .imageWrap23, .payoffWrap, .wpWrap').css({'filter':'opacity(0)'})

    // close the info box wrap for LC1 open LC2
    setTimeout(()=>{
        $('#boxbox-LC1').css({'display':'none'});
        $('#boxbox-LC2').css({'display':'block'});
    }, 750)


    // minimize help sabotage section and etc...
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

    }, 0)

    //show contest section
    setTimeout(()=>{
        calculator.space.hsIsOpen = true;
        calculator.space.powerBarIsOpen = true;
        calculator.space.powerBarLegendIsOpen = false;
        calculator.section.power.display.barText('none');
        calculator.space.contestIsOpen = true;
        calculator.space.close.all();

        //----- GENERAL SETTINGS -----//

        // these display settins simply display none the specific section
        // calculator.section.contest.display.all(true);
        calculator.section.contest.display.sliders(true);
        calculator.section.contest.display.title(true);
        calculator.section.contest.display.results(true);
        calculator.section.contest.display.icons(false);

        //------- RESULTS DISPLAY SETTINGS ------//

        calculator.globalVariable.display.hsIcons = 0;
        calculator.globalVariable.display.hsResults = 0;
        calculator.globalVariable.display.hsMainTitle = 0;
        calculator.globalVariable.display.hsGhostTitle = 0;
        calculator.globalVariable.display.hsButton = 0;
        calculator.globalVariable.display.hsMinimize = 0;

        calculator.globalVariable.display.cResults = 1;
        calculator.globalVariable.display.cTitle = 1;
        calculator.globalVariable.display.cButton = 0;
        calculator.globalVariable.display.cMinimize = 1;

        calculator.results.leader.display.investment(true);
        calculator.results.leader.display.prize(true);
        calculator.results.leader.display.netPayoff(true);
        calculator.results.leader.display.role(true)

        calculator.button.enable.spinBottom();
        calculator.button.display.spinBottom(false);
        calculator.globalVariable.bottomSpinButtonIsEnabled = false;
        calculator.globalVariable.hover.cButton = 0;

        calculator.titles.contest.show();

        calculator.titles.contest.hide();

        $('.generalMarginBox').css({'display':'block'});

    }, 750)

    // show new info box
    box.transition('', 'LC2-1', 0, 0, 1, 1250);

    setTimeout(()=>{
        $('.contestSection, .imageWrap23, .payoffWrap').css({'transition':'2s', 'filter':'opacity(1)'})
        calculator.section.contest.minimize(false);
        setTimeout(()=>{
            $('.contestSection').css({'transition':'0.7s'})
            $('.imageWrap23').css({'transition':'1.023456s'})
            $('.payoffWrap').css({'transition':'0.15s'})
            calculator.section.contest.minimize(false);
            $('.generalMarginBox').css({'display':'block'});
        }, 1000)
    }, 2500)

    setTimeout(()=>{
        $('#anotherIdToCall-151').css({'transition':'1s', 'opacity':'1'});
        $('.wpWrap').css({'transition':'1s', 'filter':'opacity(1)'})
        calculator.wheel.cruise();
        $('.generalMarginBox').css({'display':'block'});
    }, 5000)

    setTimeout(()=>{
        box.button.show('LC2-1');
        $('.generalMarginBox').css({'display':'block'});
    }, 7000)

})


//----------------------------------------------------------------------------//
//--------------------------- LEADER COMPETITION 2 ---------------------------//
//----------------------------------------------------------------------------//


activator.ls2_2_l1 = false;
listener.ls2_2_l1 = false;
$('#btn-LC2-1').click(function() {



    box.transition('LC2-1', 'LC2-101', 0, 0, 1, 750);

    // calculator.globalVariable.playerView = 1;
    // calculator.globalVariable.playerIndex = -1;
    // //updated the icons accordingly
    // calculator.icons.setAll();
    // // update slider
    // calculator.refresh.values();
    // $('.contestTitle1, .contestTitle22, .ghostTitleColor').css({'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});
    // // calculator.wheel.hide();
    // calculator.graphics.update.contestSliderBackgroundColor();
    // calculator.roll.resetRoll();
    // calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);
    // calculator.wheel.hide();

    // calculator.wheel.cruise();

    setTimeout(()=>{
        box.button.show('LC2-101');
    }, 2000)

})

$('#btn-LC2-101').click(function() {

    box.transition('LC2-101', 'LC2-102', 0, 0, 1, 750);

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
    calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);
    calculator.wheel.hide();

    calculator.wheel.cruise();

    setTimeout(()=>{
        box.button.show('LC2-102');
    }, 2000)

})

$('#btn-LC2-102').click(function() {

    box.transition('LC2-102', 'LC2-2', 0, 0, 1, 750);

    calculator.tutorial.sliderResultHideInteractionIsOn = true;

    setTimeout(()=>{
        calculator.lock.activate([0,1,1,1,1,1]);
        calculator.pointers.activate([1,0,0,0,0,0]);
        listener.ls2_2_l1 = true;
    }, 1500)

})

listener.ls2_41_l1 = false;
$('#btn-LC2-3').click(function() {

    box.transition('LC2-3', 'LC2-301', 0, 0, 1, 750);

    calculator.tutorial.sliderResultHideInteractionIsOn = false;

    $('.payoffWrap').css({'opacity':'1'});

    calculator.results.leader.display.investment(1);
    calculator.results.leader.display.netPayoff(0);
    calculator.results.leader.display.role(0);
    calculator.results.leader.display.prize(0);
    $('.resultLeft, .resultRight').css({'opacity':'0'})
    minResult();
    $('#tokenTag2, #tokenTag1').html('tokens');
    $('.tokenTag').css({'opacity':'1', 'display':'inline'})

    setTimeout(()=>{
        box.button.show('LC2-301');
    }, 2000)

})


activator.ls2_4_l2 = false;
listener.ls2_4_l2 = false;

activator.ls2_41_l2 = false;
listener.ls2_41_l2 = false;
activator.ls2_41_l1 = false;
$('#btn-LC2-301').click(function() {

    box.transition('LC2-301', 'LC2-4', 0, 0, 1, 750);

    calculator.lock.activate([1,1,1,1,1,1]);

    calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);

    setTimeout(()=>{
        calculator.lock.activate([0,0,1,1,1,1]);
        calculator.pointers.activate([0,1,0,0,0,0]);
        listener.ls2_41_l2 = true;
        listener.ls2_41_l1 = true;
        activator.ls2_41_l1 = true;
    }, 1500)

})

$('#btn-LC2-4').click(function() {

    box.transition('LC2-4', 'LC2-42', 0, 0, 1, 750);

    calculator.questions.activate.all([0, 0, 0, 1, 0, 0]);
    calculator.questions.animateLeaderSpin = true;
    calculator.questions.spinLeaders(0);

    setTimeout(()=>{
        box.button.show('LC2-42');
    }, 3000)

})

$('#btn-LC2-42').click(function() {

    box.transition('LC2-42', 'LC2-6', 0, 0, 1, 750);

    calculator.questions.activate.all([0, 0, 0, 1, 0, 0]);
    calculator.questions.animateLeaderSpin = false;

    setTimeout(()=>{
        box.button.show('LC2-6');
    }, 3000)

})


// ----------- HOW IS IT WON --------------- //

var maxResult = function() {

    $('.resultLeft').css({'transition':'1s', 'transform':'scale(1.5)', 'margin-left':'81px', 'margin-top':'-22px'});
    $('.resultRight').css({'transition':'1s', 'transform':'scale(1.5)', 'margin-left':'-25px', 'margin-top':'-22px'});

}

var minResult = function() {

    $('.resultLeft').css({'transition':'0s', 'transform':'scale(1)', 'margin-left':'22px', 'margin-top':'0px'});
    $('.resultRight').css({'transition':'0s', 'transform':'scale(1)', 'margin-left':'43px', 'margin-top':'0px'});

}

calculator.lc2_6_listener = false;
$('#btn-LC2-6').click(function() {



    box.transition('LC2-6', '', 0, 0, 1, 0);
    $('#boxbox-LC2').css({'margin-bottom':'-20px'});

    setTimeout(()=>{

        calculator.wheel.spin(3, 9);
        calculator.lock.activate([1,1,1,1,1,1]);

        calculator.lc2_6_listener = true;

        setTimeout(()=>{
            $('.pTextLeft, .pTextRight').css({'filter':'opacity(0)'});
            calculator.results.leader.display.investment(0);
            calculator.results.leader.display.netPayoff(0);
            calculator.results.leader.display.role(0);
            calculator.results.leader.display.prize(1);
            $('.resultLeft, .resultRight').css({'opacity':'1'})
            maxResult();
        }, 3010)

        calculator.tutorial.sliderResultHideInteractionIsOn = true;

        setTimeout(()=>{
            $('#boxbox-LC2').css({'margin-bottom':'20px'});
            box.transition('', 'LC2-7', 0, 0, 1, 100);
            calculator.lock.activate([0,0,1,1,1,1]);
        }, 5250)

        setTimeout(()=>{
            box.button.show('LC2-7');
        }, 8000)

    }, 750)

})

$('#btn-LC2-7').click(function() {

    box.transition('LC2-7', 'LC2-901', 0, 0, 1, 750);

    setTimeout(()=>{
        box.button.show('LC2-901');
    }, 2000)
})

activator.ls2_9_f1_click = false;
listener.ls2_9_f1_click = false;

activator.ls2_9_f1 = false;
listener.ls2_9_f1 = false;

activator.ls2_902_f1 = false;
listener.ls2_902_f1 = false;

activator.ls2_9021_f1 = false;
listener.ls2_9021_f1 = false;

activator.ls2_903_f1 = false;
listener.ls2_903_f1 = false;

activator.ls2_9031_f1 = false;
listener.ls2_9031_f1 = false;

$('#btn-LC2-901').click(function() {

    box.transition('LC2-901', 'LC2-9012', 0, 0, 1, 750);

    calculator.wheel.hide();

    calculator.values.set.efforts([200,200]);
    calculator.refresh.sliders();

    setTimeout(()=>{

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

    }, 750)

    setTimeout(()=>{

        calculator.lock.activate([1,1,0,1,1,1]);
        calculator.pointers.activate([0,0,1,0,0,0]);
        listener.ls2_9_f1_click = true;

    }, 2000)

})

$('#btn-LC2-9021').click(function() {

    box.transition('LC2-9021', '', 0, 0, 1, 0);
    $('#boxbox-LC2').css({'margin-bottom':'-10px'});

    calculator.wheel.enervateActivated = false;

    setTimeout(()=>{

        if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
            calculator.tutorial.forceLeader1Winner = 0;
            calculator.tutorial.forceLeader2Winner = 1;
        } else {
            calculator.tutorial.forceLeader1Winner = 1;
            calculator.tutorial.forceLeader2Winner = 0;
        }

        calculator.wheel.spin(3, 9);
        calculator.lock.activate([1,1,1,1,1,1]);
        setTimeout(()=>{
            $('.pTextLeft, .pTextRight').css({'filter':'opacity(0)'});
            calculator.results.leader.display.investment(0);
            calculator.results.leader.display.netPayoff(0);
            calculator.results.leader.display.role(0);
            calculator.results.leader.display.prize(1);
            maxResult();
            $('.resultLeft, .resultRight').css({'opacity':'1'})
        }, 3010)

        calculator.tutorial.sliderResultHideInteractionIsOn = true;
        calculator.helpSaboHideResults = true;
        setTimeout(()=>{
            $('#boxbox-LC2').css({'margin-bottom':'20px'});
            box.transition('', 'LC2-903', 0, 0, 1, 100);

            setTimeout(()=>{
                // hide title
                $('.ctBottom').css({'transition':'1s',
                'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
                $('.ctBottom').css({ 'opacity':'0'});

                // calculator.space.close.cResults();

                calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]);
                calculator.section.hs.set.iconPosition('center');
                calculator.titles.hs.show();
                calculator.section.hs.minimize(false);
                calculator.section.contest.minimize(false);
                calculator.titles.update.position();
                // calculator.results.hide.leaderOutcomes();
                calculator.titles.hs.ghost.text();
                calculator.titles.hs.ghost.hide();

                $('.generalMarginBox').css({'margin-top':'10px'});
                $('.contestSection').css({'margin-top':'-28px'});
            }, 750)

            setTimeout(()=>{
                calculator.lock.activate([1,1,0,1,1,1]);
                calculator.pointers.activate([0,0,1,0,0,0]);
                listener.ls2_903_f1 = true;
            }, 1000)

        }, 4250)

    }, 750)

})

$('#btn-LC2-9031').click(function() {

    box.transition('LC2-9031', '', 0, 0, 1, 0);
    $('#boxbox-LC2').css({'margin-bottom':'-10px'});


    setTimeout(()=>{

        if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
            calculator.tutorial.forceLeader1Winner = 1;
            calculator.tutorial.forceLeader2Winner = 0;
        } else {
            calculator.tutorial.forceLeader1Winner = 0;
            calculator.tutorial.forceLeader2Winner = 1;
        }

        calculator.wheel.spin(3, 9);
        calculator.lock.activate([1,1,1,1,1,1]);

        setTimeout(()=>{
            $('.pTextLeft, .pTextRight').css({'filter':'opacity(0)'});
            calculator.results.leader.display.investment(0);
            calculator.results.leader.display.netPayoff(0);
            calculator.results.leader.display.role(0);
            calculator.results.leader.display.prize(1);
            maxResult();
            $('.resultLeft, .resultRight').css({'opacity':'1'})
        }, 3010)

        calculator.tutorial.sliderResultHideInteractionIsOn = true;

        setTimeout(()=>{
            $('#boxbox-LC2').css({'transition':'1s', 'margin-bottom':'15px'});
            box.transition('', 'LC2-9032', 0, 0, 1, 0);

            $('.ctBottom').css({'transition':'1s',
            'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
            $('.ctBottom').css({ 'opacity':'0'});
            calculator.titles.hs.hide();
            calculator.titles.hs.ghost.hide();
            calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,1,0]);
            calculator.section.hs.set.iconPosition('bottom');

            $('.generalMarginBox').css({'margin-top':'-90px'});

            $('.followersLeft').css({'transform-origin':'bottom right',
            'transform':'scale(1.2)'})

            $('.followersRight').css({'transform-origin':'bottom left',
            'transform':'scale(1.2)'})

            $('.ctBottom').css({'transition':'1s',
            'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
            $('.ctBottom').css({ 'opacity':'0'});


            setTimeout(()=>{
                box.button.show('LC2-9032');
            }, 2000)

        }, 4000)


    }, 750)

})

$('#btn-LC2-9032').click(function() {


    box.transition('LC2-9032', 'LC2-9033', 0, 0, 1, 750);

    $('.ctBottom').css({'transition':'1s',
    'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
    $('.ctBottom').css({ 'opacity':'0'});


    setTimeout(()=>{
        box.button.show('LC2-9033');
    }, 2000)

})

$('#btn-LC2-9033').click(function() {

    box.transition('LC2-9033', 'LC2-9034', 0, 0, 1, 750);

    setTimeout(()=>{
        box.button.show('LC2-9034');
    }, 2000)

})

$('#btn-LC2-9034').click(function() {

    box.transition('LC2-9034', 'LC2-9035', 0, 0, 1, 750);

    setTimeout(()=>{
        box.button.show('LC2-9035');
    }, 2000)

})

$('#btn-LC2-9035').click(function() {

    box.transition('LC2-9035', 'LC2-9036', 0, 0, 1, 100);

    setTimeout(()=>{
        $('#boxbox-LC2').css({'margin-bottom':'120px'});
    }, 100)

    setTimeout(()=>{
        box.button.show2('LC2-9036');
    }, 2000)

})
