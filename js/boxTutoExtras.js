
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// ----------------- ADDITIONAL FUNCTIONS FOR TUTORIAL ---------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //


// -------------------------------------------------------- //
// --------------- RELATED TO SECIONS TUTO ---------------- //
// -------------------------------------------------------- //

box.fixLeftGroupToHetero = true;

box.set.treatment_tuto = function(sH, aH, rollOn) {

    rollOn === undefined ? false : rollOn;

    box.global.symmetricHeteroTreatment = sH;
    box.global.asymmetricHeteroTreatment = aH;

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        map.globalVariable.ourSideIsHetero = false;
        map.globalVariable.theirSideIsHetero = false;


    } else if (box.global.symmetricHeteroTreatment) {

        map.globalVariable.ourSideIsHetero = true;
        map.globalVariable.theirSideIsHetero = true;

    } else if (box.global.asymmetricHeteroTreatment) {

        if(!box.fixLeftGroupToHetero) {

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

box.set.treatment_tuto_lc = function(sH, aH, rollOn) {

    rollOn === undefined ? false : rollOn;

    box.global.symmetricHeteroTreatment = sH;
    box.global.asymmetricHeteroTreatment = aH;

    if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

        map.globalVariable.ourSideIsHetero = false;
        map.globalVariable.theirSideIsHetero = false;

        calculator.globalVariable.ourFollowersAreHetero = false;
        calculator.globalVariable.theirFollowersAreHetero = false;

    } else if (box.global.symmetricHeteroTreatment) {

        map.globalVariable.ourSideIsHetero = true;
        map.globalVariable.theirSideIsHetero = true;

        calculator.globalVariable.ourFollowersAreHetero = true;
        calculator.globalVariable.theirFollowersAreHetero = true;

    } else if (box.global.asymmetricHeteroTreatment) {


        if(!box.fixLeftGroupToHetero) {

            if(Math.random() > 0.5) {

                $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});

                // our side is homo
                $('.equalityAdjustment1').css({'margin-top':'12px'});
                $('.equalityAdjustment2').css({'margin-top':'0px'});
                $('.treatmentInfoBoxLeftHomo, .treatmentInfoBoxRightHetero').css({'display':'flex'})
                $('.treatmentInfoBoxLeftHetero, .treatmentInfoBoxRightHomo').css({'display':'none'})
                map.globalVariable.ourSideIsHetero = false;
                map.globalVariable.theirSideIsHetero = true;

                calculator.globalVariable.ourFollowersAreHetero = false;
                calculator.globalVariable.theirFollowersAreHetero = true;

            } else {

                $('.equalityAdjustment1, .equalityAdjustment2').css({'display':'flex'});

                // our side is hetero
                $('.equalityAdjustment2').css({'margin-top':'12px'});
                $('.equalityAdjustment1').css({'margin-top':'0px'});
                $('.treatmentInfoBoxLeftHomo, .treatmentInfoBoxRightHetero').css({'display':'none'})
                $('.treatmentInfoBoxLeftHetero, .treatmentInfoBoxRightHomo').css({'display':'flex'})
                map.globalVariable.ourSideIsHetero = true;
                map.globalVariable.theirSideIsHetero = false;

                calculator.globalVariable.ourFollowersAreHetero = true;
                calculator.globalVariable.theirFollowersAreHetero = false;

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

            calculator.globalVariable.ourFollowersAreHetero = true;
            calculator.globalVariable.theirFollowersAreHetero = false;

        }

    }


    map.treatment();
    calculator.icons.adjustForTreatment();

    if(rollOn){
        calculator.roll.reset();

    }


}


box.adjust.forWinnerAndTreatmentNoTokenIcons = function() {

    if(map.winnerLeaderIndex === 1) {
        // show white icons (right side/their side)
        $('.blackGroup1').css({'display':'none'});
        $('.whiteGroup1').css({'display':'flex'});

        $('.noTokenLeftHomo, .noTokenRightHomo, .noTokenLeftHetero, .noTokenRightHetero').css({'display':'none'});

        if(map.globalVariable.theirSideIsHetero) {
            $('.noTokenRightHetero').css({'display':'flex'});
        } else {
            $('.noTokenRightHomo').css({'display':'flex'});
        }

    }

    if(map.winnerLeaderIndex === 2) {
        // show black icons (left side/ourside)
        $('.blackGroup1').css({'display':'flex'});
        $('.whiteGroup1').css({'display':'none'});

        $('.noTokenLeftHomo, .noTokenRightHomo, .noTokenLeftHetero, .noTokenRightHetero').css({'display':'none'});

        if(map.globalVariable.ourSideIsHetero) {
            $('.noTokenLeftHetero').css({'display':'flex'});
        } else {
            $('.noTokenLeftHomo').css({'display':'flex'});
        }

    }

}


//----------------------------------------------------------------------------//
//---------------- SPIN METHOD TO CALL INSIDE INFO BOX -----------------------//
//----------------------------------------------------------------------------//

// delay1 is the same delay from transition method so that we can sync height setup and margin setup
// delay2 is the delay to wait for the wheel to stop and the results to show we can
// later take this out once we figured out the perfect delay timing
// delay3 is the delay to wait until the infobox is closed so that not everything is happening at once

box.spin = function(boxID, delay1, delay2, delay3, spinDuration, spinTurnNumber) {

    setTimeout(()=>{
        calculator.globalVariable.aBitOfWaitingIsDone = false;
        calculator.wheel.spin(spinDuration, spinTurnNumber);
        calculator.globalVariable.dynamicDisplay = false;
    }, delay3)


    //split the boxID to get the first bit to generate boxbox string id
    // boxID will be something like LC2-3
    var boxID1 = boxID.split('-')[0];
    var boxbox = '#boxbox-' + boxID1;

    // use the key to make the margins top and bottom of the boxbox 0
    // here you are using the delay1 passed on by the method
    setTimeout(()=>{
        $(boxbox).css({'margin-top':'0px', 'margin-bottom':'0px'});
    }, delay1)


    // use delay2 to call for transition method with the first string empty
    // second string will be the boxID that the method is receiving
    var newDelay = delay2 + delay3
    setTimeout(()=>{
        box.transition2('', boxID, 0, 0, 1, newDelay);
    })

}

box.spin2 = function(boxID, delay1, delay2, delay3, spinDuration, spinTurnNumber) {

    setTimeout(()=>{
        calculator.globalVariable.aBitOfWaitingIsDone = false;
        calculator.wheel.spin(spinDuration, spinTurnNumber);
        calculator.globalVariable.dynamicDisplay = false;
    }, delay3)


    //split the boxID to get the first bit to generate boxbox string id
    // boxID will be something like LC2-3
    var boxID1 = boxID.split('-')[0];
    var boxbox = '#boxbox-' + boxID1;

    // use the key to make the margins top and bottom of the boxbox 0
    // here you are using the delay1 passed on by the method
    setTimeout(()=>{
        // $(boxbox).css({'margin-top':'0px', 'margin-bottom':'0px'});
    }, delay1)

    // transition2 negates the margin top margin bottom 0 to its original values

    // use delay2 to call for transition method with the first string empty
    // second string will be the boxID that the method is receiving
    var newDelay = delay2 + delay3
    setTimeout(()=>{
        box.transition2('', boxID, 0, 0, 1, newDelay);
    })

}
