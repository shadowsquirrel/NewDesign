


var debug = {
    start: {}
}


//----------------------------------------------------------------------------//
//--------------------------------- PAYMENT ----------------------------------//
//----------------------------------------------------------------------------//

debug.start.P = function(treatment) {

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

    $('#boxbox-P').css({'display':'block'});

    title.update.size(false);




    //----- PAYMENT SEXPLAIN ACTIN THIS WILL BE DONE IN SOME LATER STAGE OF THIS SECTION FOR NOW WE KEEP IT HERE ----//

    map.show.initialSetup();
    map.opacity.sectionTitles([1,1,1]);
    map.opacity.inside([0,0,0],0);
    map.opacity.mainArrowSections([0,0,0],0);
    map.opacity.main([0,0,0], 0);
    map.opacity.section([0,0,0], 0);

    $('.sexplain').css({'transition':'0.5s', 'margin-bottom':'0px',
    'transform':'scale(1)', 'opacity':'0', 'display':'flex'});
    $('.netPayoffResultsTutorial').css({'transition':'0s', 'display':'flex', 'margin-top':'0px', 'margin-bottom':'-310px'});


    map.animate.showPayoffs2(500)
    setTimeout(()=>{
        $('.thisIsExampleWrap').css({'transition':'1s', 'opacity':'1'})
    }, 5000)


    setTimeout(()=>{
        box.transition('', 'P-603', 0, 0, 1);
    }, 3000)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('P-603');
    }, 5000);




}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


debug.start.P(1);


//----------------------------------------------------------------------------//
//--------------------------------- PAYMENT ----------------------------------//
//----------------------------------------------------------------------------//




$('#btn-P-603').click(function() {

    // close the box
    box.transition('P-603', '', 0, 0, 0);

    $('.netPayoffResultsTutorialText1').css({'transition':'0.5s', 'transform-origin':'left', 'transform':'scale(0.6)', 'opacity':'0.7', 'margin-top':'-65px'});
    $('.netPayoffCircle, .netPayoffArrow, .netPayoffText').css({'transition':'0.2s', 'opacity':'0'});
    $('.initialBudgetCircle, .initialBudgetArrow, .initialBudgetText').css({'transition':'0.2s', 'opacity':'0'});
    $('.netPayoffResultsTutorialText2').css({'transition':'0.5s', 'margin-top':'-26px', 'margin-bottom':'60px'});
    $('.og1NetPayoffText1, .igNetPayoffText1, .og2NetPayoffText1').css({'transition':'0.5s', 'opacity':'0'});

    setTimeout(()=>{
        $('.newRound').css({'transition':'0s', 'margin-top':'-270px', 'margin-left':'35px'});
        map.animate.showPayoffs3(500)
    },1000)


    setTimeout(()=>{
        box.transition('', 'P-7', 0, 0, 1);
    }, 3000)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('P-7');
    }, 5000);

})

$('#btn-P-7').click(function() {

    $('.thisIsExampleWrap').css({'opacity':'0'});
    $('.section1Text, .section3Text').css({'transition':'1s', 'color':'red', 'font-weight':'700'});
    $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':'1'})

    // close the box
    box.transition('P-7', '', 0, 0, 1);

    $('.bracketText').css({'display':'none'});

    setTimeout(()=>{
        $('.og2NetPayoffText2, .igNetPayoffText2, .og1NetPayoffText2').css({'transition':'0.3s', 'opacity':'0'});
        map.opacity.section([1,1,1], 0.7);
        $('.netPayoffResultsTutorial').css({'transition':'0.35s', 'margin-bottom':'-473px', 'opacity':'0'});
        setTimeout(()=>{
                $('.netPayoffResultsTutorial').css({'display':'none'});
        }, 400)
    }, 100)


    $('.mapBracket').css({'margin-left':'-6px'});
    setTimeout(()=>{
            $('.mapBracket').css({'display':'flex'});
        setTimeout(()=>{
            $('.mapBracket').css({'transition':'0.5s', 'margin-bottom':'0px', 'transform':'scale(1)'});
        }, 100)
        setTimeout(()=>{
            $('.tenTimes').css({'display':'flex'});
            setTimeout(()=>{
                $('.tenTimeText').css({'transition':'0.6s', 'opacity':'1'});
                $('.tenTimes').css({'transition':'0.6s', 'margin-top':'-27px', 'opacity':'1'});
                setTimeout(()=>{
                    $('.tenTimes').css({'transition':'3s', 'transform':'rotate(-3turn)'});
                }, 600)
            }, 100)
        }, 600)
    }, 500)


    setTimeout(()=>{
        box.transition('', 'P-8', 0, 0, 1);
    }, 1500);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('P-8');
    }, 3500);

})

$('#btn-P-8').click(function() {

    // close the box
    box.transition('P-8', 'P-9', 0, 0, 750);

    // hide bracket and ten times sign
    setTimeout(()=>{
        map.hide.bracket();
        setTimeout(()=>{
            $('.tenTimes').css({'transition':'0.3s', 'display':'flex', 'margin-top':'-150px', 'opacity':'0'});
            setTimeout(()=>{
                $('.tenTimes').css({'display':'none'});
            });
        }, 300);
    }, 100);

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('P-9');
    }, 2000);

})

$('#btn-P-9').click(function() {

    // close the box
    box.transition('P-9', 'P-10', 1, 0, 750);

    $('#box-P-10').css({'margin-top':'20px'});

    setTimeout(()=>{
        box.button.show('P-10');
    }, 2000)

})

$('#btn-P-10').click(function() {

    // close the box
    box.transition('P-10', 'P-11', 1, 0, 750);

    $('#box-P-10').css({'margin-top':'0px', 'margin-bottom':'20px'});

    $('.sexplain').css({'transition':'0.75s',
    'transform-origin':'top', 'transform':'scale(0.5)', 'margin-bottom':'-90px'});

    setTimeout(()=>{
        box.button.show('P-11');
    }, 2000)


})

$('#btn-P-11').click(function() {


    map.tutorial.result.rotateRandomScenario(0, 200, 400);

    $('.sexplain').css({'transition':'0.75s',
   'transform-origin':'top', 'transform':'scale(1)', 'margin-top':'50px','margin-bottom':'20px'});

    // close the box
    box.flush()
    box.transition('P-11', 'P-12', 0, 0, 250);

    setTimeout(()=>{
        box.button.show('P-12');
    }, 2000)


})

$('#btn-P-12').click(function() {

    box.transition('P-12', 'P-13', 1, 0, 250);



    setTimeout(()=>{
        box.button.show2('P-13');
    }, 2000)


})
