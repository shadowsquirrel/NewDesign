
var data = {};



//-------------------------------------------------------------------------//
//------------------------- TUTO INITIATION ------------------------------//
//-------------------------------------------------------------------------//


var tuto = {
    start: {}
}


//----------------------------------------------------------------------------//
//------------------------------ GAME OVERVIEW -------------------------------//
//----------------------------------------------------------------------------//


tuto.start.SE = function(treatment) {

    //------------------------------------------------------------------//


    if(treatment === 0) {
        box.set.treatment_tuto(0,0);
        map.globalVariable.ourSideIsHetero = 0;
        map.globalVariable.theirSideIsHetero = 0;
        map.treatment();
    }

    if(treatment === 1) {
        box.set.treatment_tuto(1,0);
        map.globalVariable.ourSideIsHetero = 1;
        map.globalVariable.theirSideIsHetero = 1;
        map.treatment();
    }

    if(treatment === 2) {
        box.set.treatment_tuto(0,1);
        map.globalVariable.ourSideIsHetero = 1;
        map.globalVariable.theirSideIsHetero = 0;
        map.treatment();
        crown.asymmetricHetero = true;
    }


    //------------------------------------------------------------------//


    $('#boxbox-SE').css({'display':'block'});

    $('.sexplain').css({'display':'flex'});

    title.update.textColor(-8000, true, 30);

    setTimeout(()=>{
        title.update.text('OVERVIEW');
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

    map.flowIsActive = true;
    map.animate.flow(0);
    setTimeout(()=>{
    }, 250)


    setTimeout(()=>{
        box.button.show('SE-1');
    }, 3000)

}


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


tuto.start.SE(2);



//----------------------------------------------------------------------------//
//--------------------------- SECTIONS OVERVIEW ------------------------------//
//----------------------------------------------------------------------------//
$('#btn-SE-1').click(function() {

    box.transition('SE-1', 'SE-101', 0, 0, 1, 750);

    map.flowIsActive = false;

    // map.opacity.coverArrows([0,0],1)

    setTimeout(()=>{
        map.animate.rotateIGs(0);
    }, 1000)

    setTimeout(()=>{
        map.flowIsActive = false;
    }, 3000)


    setTimeout(()=>{
        box.button.show('SE-101');
    }, 2000)



})


$('#btn-SE-101').click(function() {

    title.update.textColor(-6000, false, 50);

    map.animateRotateIGsActive = false;

    // close the box
    box.transition('SE-101', 'SE-3', 0, 0, 1, 1000);

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
    box.transition('SE-5', 'SE-501', 1, 0, 1, 750);

    $('.someTinyTinyClass2').css({'margin-top':'-25px', 'margin-left':'250px',
    'margin-bottom':'0px'})

    setTimeout(()=>{
        box.button.show('SE-501');
    }, 2000)

})

$('#btn-SE-501').click(function() {

    // close the box
    box.transition('SE-501', 'SE-502', 1, 0, 1, 750);

    setTimeout(()=>{
        crown.show();
        setTimeout(()=>{
            $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});
            $('.leaderLosing').css({'transition':'0.3s', 'opacity':'1'});
            crown.animateDeny();
        }, 750)
    },750)

    $('.crownSwitchAnimationWrap').css({'margin-top':'375px', 'right':'132px'});

    setTimeout(()=>{
        box.button.show('SE-502');
    }, 2000)

})

$('#btn-SE-502').click(function() {

    // close the box
    box.transition('SE-502', 'SE-503', 1, 0, 1, 750);

    crown.infoBox13IsClose = false;

    $('.crownSwitchAnimationWrap').css({'transition':'0.5s', 'opacity':'0'});
    setTimeout(()=>{
        $('.crownSwitchAnimationWrap').css({'transition':'0s','margin-top':'8px', 'right':'509px'});
        setTimeout(()=>{
            map.opacity.main([0.5,0.5,0.5],1);
            $('.crownSwitchAnimationWrap').css({'transition':'1s', 'opacity':'1', 'z-index':'10'});
        }, 200)
    }, 550)



    setTimeout(()=>{
        box.button.show('SE-503');
    }, 2000)

})

$('#btn-SE-503').click(function() {

    $('.crownSwitchAnimationWrap').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG1LeadersIcon').css({'transition':'1s', 'margin-right':'-4px', 'margin-top':'4px',
    'transform-origin':'bottom', 'transform':'scale(1)'});
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'1s', 'opacity': '1'});
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'1s', 'opacity': '1'});
    $('.IGTopContestWrap').css({'transition':'1s', 'opacity':'1'});
    $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':'1'});
    map.opacity.cover([0,0,1], 1);
    map.opacity.inside([1,0,0], 1)
    map.opacity.section([0.05,0.3,0.05], 1);

    box.flush();

    // close the box
    box.transition('SE-503', 'SE-6', 0, 0, 1, 750);

    crown.stopAnimate = true;
    map.opacity.main([1,1,1],1);
    $('.crownSwitchAnimationWrap').css({'transition':'0.5s', 'opacity':'0'});

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

// $('#btn-SE-61').click(function() {
//
//     // close the box
//     box.transition('SE-61', 'SE-62', 1, 1, 750);
//
//     setTimeout(()=>{
//         box.button.show('SE-62');
//     }, 3000)
//
// })

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

$('#btn-SE-61').click(function() {

    map.globalVariable.activeHelpFollowerAnimation = false;

    // close the box
    box.transition('SE-61', 'SE-7', 0, 0, 1500);

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

    $('#boxwrap-SE-7').css({'transition':'1s', 'margin-top':'-26px'});

    $('#box-SE-7').css({'transition':'1s', 'margin-left':'853px', 'margin-top':'-47px',
    'margin-bottom':'0px'});


    map.globalVariable.activeHelpFollowerAnimation = true;
    map.animate.arrowColor(1);
    setTimeout(()=>{
        $('.OG1LeadersIcon').css({'opacity':'0.5'});
    }, 1000)



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
    box.transition('SE-8', 'SE-9', 1, 0, 1);

    $('.step1Number').css({'width':'30px', 'margin-left':'48px', 'padding-left':'9px'});
    $('.myStep1').css({'transition':'1s', 'margin-top':'8px', 'margin-bottom':'-28px'});
    $('#boxwrap-SE-8').css({'transition':'1s','margin-top':'10px'});
    $('.se-8-text').css({'transition':'1s',
    'margin-top':'5px', 'margin-left':'157px', 'margin-bottom':'24px'});

    map.globalVariable.activeHelpFollowerAnimation = false;
    map.animate.se9Lock = true;
   map.animate.stepNumber(1)

    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'1s', 'opacity':'0'});
    $('.OG1LeadersIcon, .OG1LeaderRight, .OG1LeaderLeft').css({'transition':'1s', 'opacity':'1'});
    $('.leaderKingLeft, .leaderKingRight').css({'transition':'1s', 'filter':'drop-shadow(0px 3px 2px black)', 'opacity':'1'});
    $('.OG1GroupSeparator').css({'transition':'2s', 'height':'0px', 'opacity':'0'});

    setTimeout(()=>{
        box.button.show('SE-9');
        $('.OG1GroupSeparator').css({'transition':'2s', 'height':'0px', 'opacity':'0'});
    },2000)

})



$('#btn-SE-9').click(function() {

    // close the box
    box.transition('SE-9', 'SE-901', 1, 0, 0);

    $('#boxwrap-SE-8').css({'transition':'1s','margin-top':'-10px', 'margin-bottom':'10px' });

    box.button.show2('SE-901');

})

// FINAL NODE ACTION IS HERE
$('#btn-SE-901').click(function() {

    box.flush();

    box.transition('SE-901', '', 1, 0, 0);

    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'transform':'scaleY(0)'});
    }, 300)

    // NDOE ACTION HERE
    setTimeout(()=>{
        $('.all').css({'display':'none'});
    }, 1010)

})
