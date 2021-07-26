
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////
////////////////////////// EVENT LISTENERS /////////////////////////////////////


//----------------------------------------------------------------------------//
//--------------------------------- CHANGE -----------------------------------//
//----------------------------------------------------------------------------//

$('#vSlider1').change(function() {

    //----------------------------------------//
    //----- OG2-2 SLIDER VALUE LISTENER -----//
    //----------------------------------------//

    if(listener.og2_f1) {
        activator.og2_f1 = true;
        listener.og2_f1 = false;
    }

    if(activator.og2_f1 && (h1 >= 8 && h1 <= 20)) {


        if(h1 === 11) {
            $('#perfectText').css({'transition':'1s', 'opacity':'1'});
        } else {
            $('#goodEnoughText').css({'transition':'1s', 'opacity':'1'});
        }

        calculator.show.checkMark();


        setTimeout(()=>{

            box.transition('OG2-2', 'OG2-201', 0, 0, 1, 750);
            calculator.lock.activate([0, 0, 1, 1, 1, 1]);

            setTimeout(()=>{
                calculator.lock.activate([0, 0, 0, 0, 0, 0]);
                calculator.hide.checkMark();
                calculator.globalVariable.enervate2FollowerF1 = true;
                calculator.icons.enervate2.followerF1(0);
            }, 1000)


            setTimeout(()=>{
                box.button.show('OG2-201');
            }, 3000)

        }, 750)

        activator.og2_f1 = false;

    }


})


$('#lSlider1').change(function() {

    //---------------------------------------//
    //----- OG2-6 SLIDER VALUE LISTENER -----//
    //---------------------------------------//

    if(listener.og2_6_l1) {
        activator.og2_6_l1 = true;
        listener.og2_6_l1 = false;
    }

    if(activator.og2_6_l1) {

        activator.og2_6_l1 = false;

        setTimeout(()=>{

            box.button.show('OG2-6');

        }, 2000)

    }

})
