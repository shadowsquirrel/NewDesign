

var data = {};







//-------------------------------------------------------------------------//
//------------------------- DEBUG INITIATION ------------------------------//
//-------------------------------------------------------------------------//


calculator.hide.checkMark();

var debug = {
    start: {}
}


//----------------------------------------------------------------------------//
//---------------------------- HELP AND SABOTAGE -----------------------------//
//----------------------------------------------------------------------------//

debug.start.GMHS1 = function(treatment) {

    //------------------------------------------------------------------//

    // // homo symm
    // box.set.treatment(0,0);
    // // hetero symm
    // box.set.treatment(1,0);
    // // hetero asymm
    // box.set.treatment(0,1);

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
        $('#boxbox-HSINTRO').css({'display':'block'});
    }, 300);

    //------------------------------------------------------------------//

    calculator.roll.hideAll();

    // reset the rotations formerly performed at SE-15
    $('.IGFightIcon, .IGFightIconLimeBottom, .IGFightIconLimeTop, .OG1FightIcon, .OG1FightIconLime').css({'transition':'0s', 'transform':'rotate3d(3,2,1, 0deg)'});

    calculator.hide.checkMark();

    calculator.introduce.Vslider1();
    calculator.roll.resetRoll();


    $('.generalMarginBox').css({'transition':'0s', 'margin-top':'-15px'});

    $('#boxbox-HS1').css({'display':'block'});

    title.update.text('HELP & SABOTAGE MECHANICS');
    title.update.size(true);
    title.update.textColor(-1000, true, 30);



    // title.update.size(false);
    setTimeout(()=>{
        // close the box
        box.transition('', 'HS1-1', 0, 0, 1, 750);
    }, 300)

    setTimeout(()=>{

        $('.hsWrap').css({'transition':'0.5s', 'filter':'opacity(1)'});

        setTimeout(()=>{
            calculator.lock.activate([0,0,1,0,0,0]);
        }, 500)

        setTimeout(()=>{
            setTimeout(()=>{
                listener.HS1_1  = true;
                calculator.pointers.activate([0,0,1,0,0,0]);
            }, 500)
            $('#anotherIdToCall-15').css({'transition':'1s', 'opacity':'1'})
        }, 1500)

    }, 850)

}

debug.start.GMHS2 = function(treatment) {

    //------------------------------------------------------------------//

    // // homo symm
    // box.set.treatment(0,0);
    // // hetero symm
    // box.set.treatment(1,0);
    // // hetero asymm
    // box.set.treatment(0,1);

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


    $('#boxbox-HS2').css({'display':'block'});
    calculator.introduce.Vslider1();
    // calculator.roll.resetRoll();
    calculator.introduce.onlyCosts();
    calculator.introduce.Vslider2();
    calculator.introduce.Vslider34();
    calculator.section.power.opacity.bar(1);
    calculator.section.power.display.barText('none');
    calculator.section.power.display.barLegend(true);
    calculator.space.powerBarLegendIsOpen = true;
    calculator.graphics.dynamicPowerBarText = true;
    calculator.introduce.title();
    title.update.size(false);
    $('.sexplain').css({'display':'flex', 'margin-bottom':'-209px'});

    setTimeout(()=>{
        $('.hsWrap').css({'transition':'0.5s', 'filter':'opacity(1)'});
        $('#boxbox-HS2').css({'display':'block'});

        $('.pWrap').css({'z-index':'-1'});
    }, 500)

    setTimeout(()=>{
        calculator.values.set.helpSabo([0,0,0,0,0,0,0,0]);
        calculator.refresh.sliders();
        calculator.introduce.costs();
    }, 1000)

    setTimeout(()=>{
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
        // $('.wrapRight, .iaf2, .lbf2').css({'display':'none'});
    }, 10)

    setTimeout(()=>{
        calculator.questions.activate.all([0,0,1,1,1,1]);
        box.transition('', 'HS2-10103', 0, 0, 1, 0);
    }, 750)


    setTimeout(()=>{
        box.button.show('HS2-10103');
    }, 3000)


}


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


debug.start.GMHS1(2);
// debug.start.GMHS2(2);


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


var listener = {};
var activator = {};


//HS1-3 and HS1-32 listeners
listener.hs1_3_help = false;
listener.hs1_3_sabo = false;

$('#btn-HS1-2').click(function() {

    // close the box
    box.transition('HS1-2', 'HS1-3', 0, 0, 1, 750);

    setTimeout(()=>{

        calculator.values.set.helpSabo([0,0,0,0,0,0,0,0]);
        calculator.refresh.sliders();
        calculator.lock.activate([0,0,0,0,0,0]);
        calculator.pointers.activate([0,0,1,0,0,0]);
        listener.hs1_3_help = true;

    }, 1000)

})

$('#btn-HS1-33').click(function() {

    box.transition('HS1-33', 'HS1-4', 0, 0, 1, 750);

    calculator.introduce.pointerCostActive = false;


    setTimeout(()=>{
        box.button.show('HS1-4');
    }, 3000)

})

$('#btn-HS1-4').click(function() {

    $('.experimentalText').css({'transition':'1s', 'transform':'scale(0.6)', 'margin-top':'104px', 'margin-left':'180px'});

    box.transition('HS1-4', 'HS1-401', -384, 0, 1, 750);

    $('#box-HS1-4').css({'transition':'0.75s', 'width':'735px',
    'margin-top':'-379px', 'margin-left':'536px'});

    setTimeout(()=>{
        $('#advTextInfoBox').css({'display':'contents'});
        setTimeout(()=>{
            $('#advTextInfoBox').css({'transition':'1s', 'opacity':'1'});
        }, 250)
    }, 1000)


    setTimeout(()=>{
        box.button.show('HS1-401');
    }, 3000)

})

$('#btn-HS1-401').click(function() {

    $('.experimentalText').css({'transition':'1s', 'margin-top':'354px', 'margin-left':'156px'});

    box.transition('HS1-401', 'HS1-5', -300, 0, 1, 750);

    $('#box-HS1-401').css({'transition':'1s', 'margin-left':'513px', 'width':'694px'});

    setTimeout(()=>{
        box.button.show('HS1-5');
    }, 3000)

})

$('#btn-HS1-5').click(function() {

    box.transition('HS1-5', 'HS1-6', 0, 0, 1,1250);

    setTimeout(()=>{
        box.flush();
    }, 100)

    setTimeout(()=>{
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
    }, 1500)

    setTimeout(()=>{
        box.button.show('HS1-6');
    }, 4000)

})


$('#btn-HS1-6').click(function() {

    box.transition('HS1-6', 'HS1-7', 0, 0, 1, 750);
    calculator.introduce.pointerCostActive = false;
    title.update.size(false);

    setTimeout(()=>{
        calculator.introduce.Vslider2();
    }, 750)

    setTimeout(()=>{
        title.update.size(false);
    }, 750)

    setTimeout(()=>{
        box.button.show('HS1-7');
    }, 3000)

})


$('#btn-HS1-7').click(function() {

    box.transition('HS1-7', 'HS1-91', 0, 0, 1, 750);

    calculator.introduce.pointerCostActive2 = false;

    calculator.introduce.Vslider34();

    setTimeout(()=>{
        box.button.show('HS1-91');
    }, 3000)

})

$('#btn-HS1-91').click(function() {


    box.transition('HS1-91', 'HS1-92', 0, 0, 1, 750);
    //
    // calculator.introduce.title();

    minimizeFunction();
    calculator.tutorial.specialHoverSetupActive = 0;

    // activate the map but make it bodyless

    map.show.sections();
    map.enlarge.main([1.2, 0.6, 1.2], 0);
    map.opacity.section([0.05,1,0.35], 0);
    map.opacity.cover([0,0,1], 0);
    map.opacity.inside([1,0,0], 0);
    map.opacity.sectionTitles([1,1,1], 0);
    map.opacity.main([1,0.45,0.45], 0);

    // followers
    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0s', 'opacity': '1'});
    $('.s2ActiveFollower').css({'transition':'0s', 'opacity':'0.7'});
    $('.s2PassiveFollower').css({'transition':'0s', 'opacity':'1'});
    // follower arrows
    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0s', 'opacity': '1'});
    $('.arrowDashed').css({'transition':'0s', 'opacity': '0'});
    $('.arrowDashedLime1').css({'transition':'0s', 'opacity': '1'});
    // leaders
    $('.OG1LeadersIcon').css({'transition':'0s', 'opacity':'1'});
    $('.OG1FightIcon, .OG1FightIconLime').css({'transition':'0.5s', 'opacity':'0'});
    $('.OG1GroupSeparator').css({'transition':'0s', 'opacity':'1', 'height':'119px'});
    $('.subsubOG1L').css({'transition':'0s', 'border-color':'lime', 'background-color':'#e6fbe6'});
    $('.leaderKingLeft, .leaderKingRight').css({'transition':'0s','filter':'drop-shadow(0px 0px 0px black)'});

    $('.sexplain').css({'transition':'0s', 'display':'none','margin-top':'-220px','margin-bottom':'10px',
    'transform':'scale(1)', 'opacity':'0', 'filter':'opacity(0)'});

    setTimeout(()=>{
        $('.sexplain').css({'display':'flex'});
        $('.sexplain').css({'transition':'0s', 'opacity':'0', 'filter':'opacity(0)'});
    }, 15)

    setTimeout(()=>{
        $('.sexplain').css({'transition':'1s', 'transform':'scale(1)','margin-bottom':'-11px','margin-top':'-20px', 'opacity':'1', 'filter':'opacity(1)'});
    }, 100)


    setTimeout(()=>{
        calculator.values.set.helpSabo([26,0,0,7,4,0,0,14]);
        calculator.refresh.sliders();
    }, 750)

    setTimeout(()=>{
        box.button.show('HS1-92');
    }, 3000)


})

$('#btn-HS1-92').click(function() {

    box.transition('HS1-92', 'HS1-93', 0, 0, 1, 750);

    calculator.tutorial.specialHoverSetupActive = 1;
    maximizeFunction();

    $('.sexplain').css({'transition':'1s', 'margin-top':'-230px','margin-bottom':'10px',
    'transform':'scale(1)', 'opacity':'0'});
    $('.generalMarginBox').css({'transition':'1s', 'margin-top':'-5px'});
    setTimeout(()=>{
        $('.sexplain').css({'display':'none'});
    }, 1000)

    setTimeout(()=>{

        setTimeout(()=>{
            calculator.values.set.helpSabo([0,0,10,14,0,0,11,13]);
            calculator.refresh.sliders();
        }, 1000)



        $('.dynamicLeaderIconSizeWrap').css({'transition':'0.5s', 'opacity':'1', 'height':'100px'});

        setTimeout(()=>{
            calculator.introduce.animateLeaderSizeVariation = true;
            calculator.introduce.leaderSizeVariation(0);
        }, 10)

    }, 750)

    setTimeout(()=>{
        box.button.show('HS1-93');
    }, 3000)


})

$('#btn-HS1-93').click(function() {

    box.transition('HS1-93', 'HS1-12', 0, 0, 1, 750);
    calculator.introduce.animateLeaderSizeVariation = false;

    calculator.lock.activate([0,0,1,1,1,1]);

    calculator.introduce.costs();

    setTimeout(()=>{
        calculator.section.power.opacity.bar(1);
        calculator.section.power.display.barText('none');
        calculator.section.power.display.barLegend(true);
        calculator.space.powerBarLegendIsOpen = true;
        calculator.graphics.dynamicPowerBarText = true;
    }, 1000)

    setTimeout(()=>{
        calculator.values.set.helpSabo([0,0,10,14,0,0,11,13]);
        calculator.animate.increment = 5;
        calculator.change.f1(20,0)
    }, 3000)

    setTimeout(()=>{
        calculator.lock.activate([0,0,0,0,0,0]);
    }, 5000)

    setTimeout(()=>{
        box.button.show('HS1-12');
    }, 5000)

})

$('#btn-HS1-12').click(function() {

    $('.dynamicLeaderIconSizeWrap').css({'transition':'0.5s', 'opacity':'0'});
    $('.dynamicPowerBarRepWrap').css({'transition':'0.5s', 'opacity':'0'});

    box.transition('HS1-12', '', 0, 0, 1, 100);

    setTimeout(()=>{
        $('#boxbox-HS1').css({'transition':'0.5s', 'margin-bottom':'-20px'});
        setTimeout(()=>{
            $('#boxbox-HS1').css({'display':'none'});
        }, 500)
    },250)

    setTimeout(()=>{
        calculator.lock.activate([0,0,1,1,1,1]);
        calculator.values.set.helpSabo([20,0,0,14,0,0,10,13]);
        calculator.refresh.sliders();
        calculator.introduce.costs();
        calculator.animate.recallDelay = 1;
        calculator.animate.increment = 5;
        calculator.change.of1(30,0)
    }, 750)

    box.transition('', 'HS2-1', 0, 0, 1, 2000);

    setTimeout(()=>{
        calculator.lock.activate([0,0,0,0,0,0]);
    }, 3500)

    $('#boxbox-HS2').css({'display':'block'});
    $('.pWrap').css({'z-index':'-1'});


    setTimeout(()=>{

        $('.dynamicLeaderIconSizeWrap').css({'transition':'0.1s', 'opacity':'1', 'height':'100px'});
        $('.dynamicPowerBarRepWrap').css({'transition':'0.1s', 'opacity':'1', 'height':'28px'});

        setTimeout(()=>{
            calculator.introduce.animateLeaderSizeVariation2 = true;
            calculator.introduce.leaderSizeVariation2(0);
        }, 10)

    }, 2500)


    setTimeout(()=>{
        box.button.show('HS2-1');
    }, 5000)

})

$('#btn-HS2-1').click(function() {

    box.transition('HS2-1', 'HS2-101', 0, 0, 1, 750);

    // kill previous info box animation
    calculator.introduce.animateLeaderSizeVariation2 = false;

    // start questionmark animation
    calculator.questions.activate.all([0,0,1,1,1,1]);
    calculator.questions.animateFollowerSpin = 1;
    calculator.questions.spinAllFollowers(0);


    setTimeout(()=>{
        box.button.show('HS2-101');
    }, 2000)

})

$('#btn-HS2-101').click(function() {


    box.transition('HS2-101', '', 0, 0, 1, 0);

    setTimeout(()=>{
        $('.pWrap').css({'transition':'0.5s', 'transform':'scaleY(0)'});
        $('.hsWrap').css({'transition':'0.5s', 'transform':'scaleX(0)'});
        setTimeout(()=>{
            $('.all').css({'display':'none'});
        }, 510)
    }, 500)



})

$('#btn-HS2-12A4').click(function() {

    $('.all').css({'transition':'1s', 'filter':'blur(400px) sepia(1)'});

})
