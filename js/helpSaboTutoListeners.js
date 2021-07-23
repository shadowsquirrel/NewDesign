////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////


//----------------------------------------------------------------------------//
//--------------------------------- HOVERS -----------------------------------//
//----------------------------------------------------------------------------//

$('.lockedCover_f1').hover(
    function() {

        //------ HS1-1 LOCK HOVER LISTENER -------//
        if(listener.HS1_1) {

            listener.HS1_1  = false;

            setTimeout(()=>{
                box.transition('HS1-1', 'HS1-2', 0, 0, 1, 1000);
                setTimeout(()=>{
                    box.button.show('HS1-2');
                }, 3000)
            }, 1000)

            calculator.pointers.activate([0,0,0,0,0,0]);

        }
        //-----------------------------------//




    },
    function(){}
)


$('#vSlider2').hover(function() {
    calculator.varyHelpAnimationActive = false;
})
$('#vSlider1').hover(function() {
    calculator.varySaboAnimationActive = false;
})


//----------------------------------------------------------------------------//
//--------------------------------- CHANGE -----------------------------------//
//----------------------------------------------------------------------------//

$('#vSlider1').change(function() {

    //---------------------------------------//
    //---- HS1-3/32 SLIDER VALUE LISTENER ---//
    //---------------------------------------//

    // FIRST STEP
    if(h1 > 0 && listener.hs1_3_help) {

        calculator.lock.activate([0,0,1,0,0,0]);
        listener.hs1_3_help = false;
        box.transition('HS1-3', 'HS1-32', 0, 0, 1, 750);

        setTimeout(()=>{
            calculator.lock.activate([0,0,0,0,0,0]);
            calculator.pointers.activate([0,0,1,0,0,0]);
            listener.hs1_3_sabo = true;
        }, 1750)


    }

    // SECOND STEP
    if(s1 > 0 && listener.hs1_3_sabo) {

        listener.hs1_3_sabo = false;
        box.transition('HS1-32', 'HS1-33', 0, 0, 1, 750);

        setTimeout(()=>{
            calculator.introduce.onlyCosts();
            calculator.introduce.pointerCostActive = true;
            calculator.introduce.pointerCost(0);
        }, 750)

        setTimeout(()=>{
            box.button.show('HS1-33');
        }, 2000)

    }

    //----------------------------------------//
    //----- HS2-100 SLIDER VALUE LISTENER -----//
    //----------------------------------------//

    if(listener.hs2_100_f1) {
        activator.hs2_100_f1 = true;
        listener.hs2_100_f1 = false;
    }

    if(activator.hs2_100_f1 && activator.hs2_100_f2 && activator.hs2_100_of1 && activator.hs2_100_of2) {

        setTimeout(()=>{
            box.transition('HS2-100', 'HS2-101', 0, 0, 1, 750);

            // start questionmark animation
            calculator.questions.activate.all([0,0,1,1,1,1]);
            calculator.questions.animateFollowerSpin = 1;
            calculator.questions.spinAllFollowers(0);


            //turn on question mark animation
        }, 1000)

        setTimeout(()=>{
            box.button.show('HS2-101');
        }, 3000)

        activator.hs2_100_f1 = false;
        activator.hs2_100_f2 = false;
        activator.hs2_100_of1 = false;
        activator.hs2_100_of2 = false;

    }


})

$('#vSlider2').change(function() {

    //----------------------------------------//
    //----- HS2-100 SLIDER VALUE LISTENER -----//
    //----------------------------------------//

    if(listener.hs2_100_f2) {
        activator.hs2_100_f2 = true;
        listener.hs2_100_f2 = false;
    }

    if(activator.hs2_100_f1 && activator.hs2_100_f2 && activator.hs2_100_of1 && activator.hs2_100_of2) {

        setTimeout(()=>{
            box.transition('HS2-100', 'HS2-101', 0, 0, 1, 750);

            calculator.questions.activate.all([0,0,1,1,1,1]);
            calculator.questions.animateFollowerSpin = 1;
            calculator.questions.spinAllFollowers(0);

        }, 1000)

        setTimeout(()=>{
            box.button.show('HS2-101');
        }, 3000)

        activator.hs2_100_f1 = false;
        activator.hs2_100_f2 = false;
        activator.hs2_100_of1 = false;
        activator.hs2_100_of2 = false;

    }

})


$('#ovSlider1').change(function() {

    //----------------------------------------//
    //----- HS2-100 SLIDER VALUE LISTENER -----//
    //----------------------------------------//

    if(listener.hs2_100_of1) {
        activator.hs2_100_of1 = true;
        listener.hs2_100_of1 = false;
    }

    if(activator.hs2_100_f1 && activator.hs2_100_f2 && activator.hs2_100_of1 && activator.hs2_100_of2) {

        setTimeout(()=>{
            box.transition('HS2-100', 'HS2-101', 0, 0, 1, 750);

            calculator.questions.activate.all([0,0,1,1,1,1]);
            calculator.questions.animateFollowerSpin = 1;
            calculator.questions.spinAllFollowers(0);

        }, 1000)

        setTimeout(()=>{
            box.button.show('HS2-101');
        }, 3000)

        activator.hs2_100_f1 = false;
        activator.hs2_100_f2 = false;
        activator.hs2_100_of1 = false;
        activator.hs2_100_of2 = false;

    }

})

$('#ovSlider2').change(function() {

    //----------------------------------------//
    //----- HS2-100 SLIDER VALUE LISTENER -----//
    //----------------------------------------//

    if(listener.hs2_100_of2) {
        activator.hs2_100_of2 = true;
        listener.hs2_100_of2 = false;
    }

    if(activator.hs2_100_f1 && activator.hs2_100_f2 && activator.hs2_100_of1 && activator.hs2_100_of2) {

        setTimeout(()=>{
            box.transition('HS2-100', 'HS2-101', 0, 0, 1, 750);

            calculator.questions.activate.all([0,0,1,1,1,1]);
            calculator.questions.animateFollowerSpin = 1;
            calculator.questions.spinAllFollowers(0);

        }, 1000)

        setTimeout(()=>{
            box.button.show('HS2-101');
        }, 3000)

        activator.hs2_100_f1 = false;
        activator.hs2_100_f2 = false;
        activator.hs2_100_of1 = false;
        activator.hs2_100_of2 = false;

    }

})
