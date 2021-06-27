box.transition('A-3', '', 0, 0, 1, 0);

calculator.activateDSlider = false;

$('.lfpd, .rfpd').css({'transition':'0.5s', 'opacity':'0.1'});

calculator.IG_setPayoffTextFollower(efo1);
$('.IG_contestSection').css({'transition':'0s', 'transform-origin':'center', 'transform':'scale(0)'});
$('.outcomeWrap').css({'display':'flex'});
$('.IG_decisionWrapL').css({'transition':'0s', 'display':'flex', 'opacity':'0'});
$('.IG_generalMarginBox').css({'transition':'0.5s', 'margin-top':'-255px'});

setTimeout(()=>{
    calculator.section.decision.leader.IG_opacity(1,0.5);

    setTimeout(()=>{
        calculator.pointers.wiggleD();
    }, 750)

}, 1000)


$('#boxbox-B').css({'margin-bottom':'58px'});
$('#box-B-9').css({'transition':'1s'});
box.transition('', 'B-9', 0, 0, 1, 750);

setTimeout(()=>{

    calculator.globalVariable.IG_enervate2LeaderLeft = false;

    $('#box-B-9').css({'transition':'0.5s'});
    box.transition('B-9', 'B-10', 0, 0, 1, 750);

    setTimeout(()=>{

        $('#boxbox-B').css({'margin-bottom':'20px'});
        box.transition('B-10', '', 0, 0, 1, 0);

        $('.outcomeWrap').css({'transition':'1s', 'filter':'opacity(1)', 'opacity':'1'});
        $('.outcomeWrap').css({'transition':'2s'});

        setTimeout(()=>{
            $('.IG_contestSection').css({'transition':'0.5s', 'transform':'scale(1)'});
        }, 500)

        setTimeout(()=>{
            $('.IG_mapButtonBottom, .IG_infoButtonBottom').css({'transform':'scale(1)'});
        }, 1500)

        setTimeout(()=>{
            $('.IG_submitButtonBottom').css({'transform':'scale(1)'})
        }, 10000)

        calculator.pointers.IG_dSwitch = false;

    }, 4000)

}, 4000)


// ---------------------------------------- //
// -------------   STAGE 3 ---------------- //
// ------------ WAITING SETUP ------------- //
// ---------------------------------------- //
// ---------------------------------------- //

calculator.lock.activate([1, 1, 1, 1, 1, 1]);
$('.lockedCover_l1').css({'z-index':'100'});

calculator.section.decision.leader.opacity(0);
$('.outcomeWrap').css({'transition':'0.5s', 'opacity':'0'});


$('.generalMarginBox').css({'transition':'0.5s',
'transform':'scale(1)', 'margin-top':'-68px'});
calculator.wheel.cruise();

$('.norp').css({'transition':'0s', 'filter':'opacity(0)'});

setTimeout(()=>{

    calculator.decisionSlider.leader.disable();

    $('.outcomeWrap').css({'transition':'0s', 'margin-top':'10px',
    'flex-direction':'row-reverse'});
    $('.pleaseWait').css({'display':'block', 'position':'static'});
    $('.norp').appendTo('.pleaseWait');
    $('.norp').css({'position':'static'});


    setTimeout(()=>{

        $('.outcomeWrap').css({'transition':'0.5s', 'opacity':'1',
        'transform':'scale(1.5)', 'margin-top':'25px'});

        $('.pleaseWait').css({'transition':'0.5s', 'opacity':'1'});
        $('.norp').css({'transition':'0.5s', 'filter':'opacity(1)',
        'opacity':'1'});
        flowLoad(1);

    }, 100)

}, 550)
