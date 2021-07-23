//-------------------------------------------------------------------------//
//-------- TREATMENT SETUP FOR MAP AND ICON SORTING AND INFO BOXES --------//
//-------------------------------------------------------------------------//

var tutorial = {}

tutorial.fixLeftGroupToHetero = true;

box.set.treatment = function(sH, aH, rollOn) {

    rollOn === undefined ? false : rollOn;

    box.global.symmetricHeteroTreatment = sH;
    box.global.asymmetricHeteroTreatment = aH;

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        icon.globalVariable.bothHomo = true;
        icon.globalVariable.bothHetero = false;

        map.globalVariable.ourSideIsHetero = false;
        map.globalVariable.theirSideIsHetero = false;

    } else if (box.global.symmetricHeteroTreatment) {

        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = true;

        map.globalVariable.ourSideIsHetero = true;
        map.globalVariable.theirSideIsHetero = true;

    } else if (box.global.asymmetricHeteroTreatment) {

        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = false;

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

            } else {

                $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});

                // our side is hetero
                $('.equalityAdjustment2').css({'margin-top':'12px'});
                $('.equalityAdjustment1').css({'margin-top':'0px'});
                $('.treatmentInfoBoxLeftHomo, .treatmentInfoBoxRightHetero').css({'display':'none'})
                $('.treatmentInfoBoxLeftHetero, .treatmentInfoBoxRightHomo').css({'display':'flex'})
                map.globalVariable.ourSideIsHetero = true;
                map.globalVariable.theirSideIsHetero = false;

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

        }

    }

    map.treatment();

}


//----------------------------------------------------------------------------//
//--------------------------- BASICS OF THE GAME -----------------------------//
//----------------------------------------------------------------------------//


var debug = {
    start: {}
}

debug.treatment = 2;

crown.tutoTreatment = debug.treatment;

debug.start.B = function(treatment) {

    //------------------------------------------------------------------//

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


    // title.update.text('GAME BASICS');
    // title.update.size(true);
    // title.update.textColor(-2500, true, 30);
    //
    // $('#boxbox-B').css({'display':'block'});
    //
    // box.transition('', 'B-0', 0, 0, 1);
    //
    // setTimeout(()=>box.button.show('B-0'), 1750);

    $('#boxbox-B').css({'display':'block'});

    box.transition('B-0', '', 0, 0, 0);

    title.update.closeOpen(0, 'GAME', -2000, 30)

    map.opacity.main([0,0,0]);

    setTimeout(()=>{
        $('.sexplain').css({'display':'flex', 'transform':'scale(1)'})
        map.show.initialSetup();
        map.opacity.main([0,0,0]);
        map.opacity.section([1,1,1])
    }, 750)

    setTimeout(()=>{
        map.animate.rotateSectionsSimple([0,0,0],0,0);
    }, 1750)

    setTimeout(()=>{
        box.transition('', 'B-3', 0, 0, 1)
    }, 2000);

    setTimeout(()=>{
        box.button.show('B-3')
    }, 4000);

}


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


debug.start.B(debug.treatment);


//----------------------------------------------------------------------------//
//------------------ OVERVIEW OF SECTIONS, ROLES, GROUPS ---------------------//
//----------------------------------------------------------------------------//


$('#btn-B-0').click(function() {

    box.transition('B-0', '', 0, 0, 0);

    title.update.closeOpen(0, 'GAME MAP', -2000, 30)

    map.opacity.main([0,0,0]);

    setTimeout(()=>{
        $('.sexplain').css({'display':'flex', 'transform':'scale(1)'})
        map.show.initialSetup();
        map.opacity.main([0,0,0]);
        map.opacity.section([1,1,1])
    }, 750)

    setTimeout(()=>{
        map.animate.rotateSectionsSimple([0,0,0],0,0);
    }, 1750)

    setTimeout(()=>{
        box.transition('', 'B-3', 0, 0, 1)
    }, 2000);

    setTimeout(()=>{
        box.button.show('B-3')
    }, 4000);

});

$('#btn-B-3').click(function() {

    title.update.closeOpen(0, 'ROUND', -2000, 30)

    box.transition('B-3', '', 0, 0, 0);

    // map.show.bracket();

    setTimeout(()=>{
        box.transition('', 'B-4', 1, 0, 1);
    }, 750);

    setTimeout(()=>{
        box.button.show('B-4');
    }, 2000);

});

$('#btn-B-4').click(function() {

    title.update.size(false);
    // title.update.closeOpen(1, '', -2000, 30);

    box.transition('B-4', '', 0, 0, 1);
    // map.hide.bracket();

    setTimeout(()=>{
        map.animate.rotateRounds(0)
    }, 750)

    setTimeout(()=>{
        box.transition('', 'B-5', 0, 0, 1000);
        setTimeout(()=>{
            title.update.closeOpen(0, 'MULTIPLE ROUNDS', -2000, 30);
            title.update.size(true);
        }, 1500)

    }, 5000)

    setTimeout(()=>{
        box.button.show('B-5');
    }, 7500);

})

$('#btn-B-5').click(function() {

    title.update.closeOpen(0, 'AT THE START OF EVERY ROUND', -2000, 30);

    // close the box
    box.transition('B-5', 'B-501', 0, 0, 1250);

    // hide the sections map
    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'-194px', 'margin-top':'30px',
        'transform':'scale(0)', 'opacity':'0'});
    }, 100)

    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'transition':'0s', 'display':'flex', 'opacity':'0'});
    }, 1210)


    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'transition':'1s', 'margin-bottom':'0px', 'opacity':'1', 'margin-top':'5px'});
    }, 1250)


    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-501');
    }, 2500);

})

$('#btn-B-501').click(function() {

    // close the box
    box.transition('B-501', 'B-502', 1, 0, 750);

    $('.currencyRelatedWrap').css({'transition':'1s',
    'margin-bottom':'-150px', 'transform':'scale(0.6)', 'transform-origin':'top'});

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-502');
    }, 2000);

})

$('#btn-B-502').click(function() {

    // title.update.closeOpen(0, 'AT THE START OF EVERY ROUND', -2000, 30);

    $('.currencyRelatedWrap').css({'transition':'0.5s',
    'margin-bottom':'-150px', 'transform':'scale(0)', 'transform-origin':'top'});
    setTimeout(()=>{
        $('.currencyRelatedWrap').css({'display':'none'});
    }, 550)

    // close the box
    box.transition('B-502', '', 1, 0, 1);

    map.induceRoundNumbers = false;

    // title.update.size(false);

    // close the former ghost boxes
    box.flush();
    setTimeout(()=>{
        $('#boxbox-B').css({'margin-top':'-25px'});
    }, 100);

    // hide the sections map
    setTimeout(()=>{
        $('.sexplain').css({'transition':'0.7s', 'margin-bottom':'-194px', 'margin-top':'30px',
        'transform':'scale(0)', 'opacity':'0'});
    }, 100)

    // new animation for the new information
    setTimeout(()=>{
        icon.set.stage1();
        $('.wrap2').css({'opacity':'0', 'margin-bottom':'-210px'});
        $('.s1Icon').css({'transition':'0s', 'margin-bottom':'-220px', 'filter':'opacity(0)'});
        icon.display.stage1(true);
        setTimeout(()=>{
            $('.s1Icon').css({'transition':'0.5s', 'filter':'opacity(1)'});
        }, 100)
    }, 1000)


    // show new information
    setTimeout(()=>{
        box.transition('', 'B-8', 0, 0, 750);
    }, 750)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-8');
    }, 2750);

})

$('#btn-B-8').click(function() {

    title.update.size(false);

    // close the box
    box.transition('B-8', '', 1, 0, 1);

    // new animation for the new information
    setTimeout(()=>{
        $('.wrap2').css({'transition':'0.7s', 'opacity':'1', 'margin-bottom':'0px'});
        $('.s1Icon').css({'transition':'0.7s', 'margin-bottom':'-30px'});
    }, 250)

    setTimeout(()=>{
        icon.globalVariable.genericIcons = true;
        icon.set.stage1();
        icon.stage1.animateSort(250);
    }, 1500)

    // show new information
    setTimeout(()=>{
        box.transition('', 'B-9', 0, 0, 1);
    }, 2500)

    setTimeout(()=>{
        $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-60px'});
    }, 3250)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-9');
    }, 5250);

})

$('#btn-B-9').click(function() {

    // close the box
    box.transition('B-9', 'B-901', 1, 0, 1);
    $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-120px', 'transform':'scale(0.8)', 'margin-bottom':'-70px'});

    $('.grouptitleB, .grouptitleA').css({'transition':'1s',
    'opacity':'0', 'transform':'scale(0)'});
    setTimeout(()=>{
        $('#groupATitle-B-9').html('YOUR GROUP');
        $('#groupBTitle-B-9').html('OPPOSING GROUP');
        $('.grouptitleB').css({'transition':'0s', 'margin-left':'-10px', 'margin-right':'-326px'});
        setTimeout(()=>{
            $('.grouptitleB, .grouptitleA').css({'transition':'1s',
            'opacity':'1', 'transform':'scale(1)'});
        }, 100)
    }, 1100)


    $('.B-10-extra').css({'transition':'0.7s', 'transform':'scale(0.6)'});

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-901');
    }, 2000);

})

$('#btn-B-901').click(function() {

    box.transition('B-901', '', 0, 0, 1);
    // close the box
    box.flush();


    $('.s1Icon').css({'transition':'0.7s', 'margin-top':'0px', 'transform':'scale(1.2)', 'margin-bottom':'-30px'});

    setTimeout(()=>{
        icon.globalVariable.genericIcons = false;
        icon.globalVariable.bothHomo = true;
        icon.globalVariable.bothHetero = false;
        icon.set.stage1();
    }, 300)

    setTimeout(()=>{
        icon.stage1.animateSort(250);
    }, 1000)

    setTimeout(()=>{
        box.transition('', 'B-10', 0, 0, 1);
    }, 2000)

    setTimeout(()=>{
        $('.s1Icon').css({'transition':'0.7s', 'margin-top':'-60px'});
    }, 2750)

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-10');
    }, 4000);

})

$('#btn-B-10').click(function() {

    // close the box
    box.transition('B-10', 'B-11', 1, 0, 750);
    $('.B-10-icon-left, .B-10-icon-right').css({'transition':'0.5s', 'transform':'scale(0.7)'});

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-11');
    }, 2000);

})


$('#btn-B-11').click(function() {

    setTimeout(()=>{
        box.flush();
        title.hide();
    }, 100);

    // close the box
    box.transition('B-11', '', 0, 0, 1);
    // $('.s1Icon').css({'transition':'0.7s', 'margin-top':'0px', 'transform':'scale(1)', 'margin-bottom':'-60px'});

    // readjusting the right global variables
    if(box.global.symmetricHeteroTreatment) {
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = true;
        map.globalVariable.ourSideIsHetero = 1;
        map.globalVariable.theirSideIsHetero = 1;
        map.treatment();
    }

    // readjusting the right global variables
    if(box.global.asymmetricHeteroTreatment) {
        // when both both are false one is randomly determined to be uneven
        icon.globalVariable.bothHomo = false;
        icon.globalVariable.bothHetero = false;
        icon.globalVariable.showUnevenSign = true;
        icon.globalVariable.showUnevenIcon = true;
        map.globalVariable.ourSideIsHetero = 1;
        map.globalVariable.theirSideIsHetero = 0;
        map.treatment();
    }

    if(box.global.symmetricHeteroTreatment) {

        $('.s1Icon').css({'transition':'0.9s', 'margin-top':'-16px', 'margin-bottom':'-16px'});
        setTimeout(()=>{
            icon.globalVariable.genericIcons = false;
            icon.set.stage1();
            $('.wrap2').css({'transition':'0.3s', 'opacity':'1', 'margin-bottom':'0px'});
        }, 500)

        setTimeout(()=>{
            icon.stage1.animateSort(250);
        }, 1000)

        setTimeout(()=>{
            box.transition('', 'B-12_T1_1', 0, 0, 1);
            setTimeout(()=>{
                $('.s1Icon').css({'transition':'0.7s', 'margin-bottom':'-6px', 'margin-top':'-50px'});
            }, 750)
        }, 2000)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('B-12_T1_1');
        }, 4000);

    }

    if(box.global.asymmetricHeteroTreatment) {

        $('.s1Icon').css({'transition':'0.9s', 'margin-top':'-16px', 'margin-bottom':'-16px'});
        setTimeout(()=>{
            icon.globalVariable.genericIcons = false;
            icon.set.forcedUnevenGroup = true;
            icon.globalVariable.ourFollowersAreHetero = 1;
            icon.globalVariable.theirFollowersAreHetero = 0;
            icon.set.stage1();
            $('.wrap2').css({'transition':'0.3s', 'opacity':'1', 'margin-bottom':'0px'});
        }, 500)

        setTimeout(()=>{
            icon.stage1.animateSort(250);
        }, 1000)

        setTimeout(()=>{
            box.transition('', 'B-12_T2_0', 0, 0, 1);
            setTimeout(()=>{
                $('.s1Icon').css({'transition':'0.7s', 'margin-bottom':'-6px', 'margin-top':'-50px'});
            }, 750)
        }, 2000)

        // show the new info OK button
        setTimeout(()=>{
            box.button.show('B-12_T2_0');
        }, 4000);

    }

    // next section transition code
    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        // setTimeout(()=>{
        //     box.flush();
        // }, 100);
        //
        // // close the box
        // box.transition('B-22', 'B-final1', 0, 0, 750);
        // $('.s1Icon').css({'transition':'0.75s', 'opacity':'0'});
        // $('.crownSwitchAnimationWrap').css({'margin-top':'-240px', 'margin-bottom':'170px'});
        //
        // setTimeout(()=>{
        //     crown.show();
        //     setTimeout(()=>{
        //         crown.animateDeny();
        //     }, 750)
        // },750)
        //
        // setTimeout(()=>{
        //     box.button.show('B-final1');
        // }, 2000);

        $('.all').css({'display':'none'});


    }



})


//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- SYMMETRIC HETERO FOLLOWERS ------------------//

$('#btn-B-12_T1_1').click(function() {

    // // close the box
    // box.transition('B-12_T1_1', 'B-final1', 0, 0, 750);
    // $('.s1Icon').css({'transition':'0.75s', 'opacity':'0'});
    // $('.crownSwitchAnimationWrap').css({'margin-top':'-240px', 'margin-bottom':'170px'});
    //
    // setTimeout(()=>{
    //     crown.show();
    //     setTimeout(()=>{
    //         crown.animateDeny();
    //     }, 750)
    // },500)
    //
    // setTimeout(()=>{
    //     box.button.show('B-final1');
    // }, 2000);


    $('.all').css({'display':'none'});

})

//-------------- ASYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- ASYMMETRIC HETERO FOLLOWERS ------------------//
//-------------- ASYMMETRIC HETERO FOLLOWERS ------------------//

$('#btn-B-12_T2_0').click(function() {

    // close the box
    box.transition('B-12_T2_0', 'B-12_T2_1', 1, 0, 750);

    $('.s1Icon').css({'transition':'0.7s', 'transform':'scale(1)', 'margin-top':'-98px', 'margin-bottom':'-68px'});

    // show the new info OK button
    setTimeout(()=>{
        box.button.show('B-12_T2_1');
    }, 3000);

})

$('#btn-B-12_T2_1').click(function() {

    // setTimeout(()=>{
    //     box.flush();
    // }, 100);
    //
    // // close the box
    // box.transition('B-12_T2_1', 'B-final1', 0, 0, 750);
    // $('.s1Icon').css({'transition':'0.75s', 'opacity':'0'});
    //
    // setTimeout(()=>{
    //     crown.show();
    //     setTimeout(()=>{
    //         crown.animateDeny();
    //     }, 750)
    // },2000)
    //
    // setTimeout(()=>{
    //     box.button.show('B-final1');
    // }, 2000);


    $('.all').css({'display':'none'});

})


// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------ CONVERGENCE ------------------ //
// ------------------------------------------------- //
// ------------------------------------------------- //

$('#btn-B-final1').click(function() {

    // close the box
    box.transition('B-final1', 'B-final2', 1, 0, 750);

    crown.infoBox13IsClose = false;

    setTimeout(()=>{
        box.button.show('B-final2');
    }, 2000);

})


$('#btn-B-final2').click(function() {

    if(debug.treatment === 0) {

        // close the box
        box.transition('B-final2', 'B-final3_t0', 1, 0, 750);

        setTimeout(()=>{
            box.button.show('B-final3_t0');
        }, 2000);

    } else {

        // close the box
        box.transition('B-final2', 'B-final3_t12', 1, 0, 750);

        setTimeout(()=>{
            box.button.show('B-final3_t12');
        }, 2000);
    }

})


$('#btn-B-final3_t12, #btn-B-final3_t0').click(function() {

    $('.all').css({'transition':'1s', 'filter':'blur(400px) sepia(1)'});

})
