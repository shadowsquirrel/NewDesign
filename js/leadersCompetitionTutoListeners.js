
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

$('#vSlider1').hover(
    function() {

        if(listener.ls2_9_f1_click) {

            setTimeout(()=>{
                box.transition('LC2-9012', '', 0, 0, 1, 0);
                $('#boxbox-LC2').css({'margin-bottom':'-4px'});
            }, 1000)

        }

    },
    function() {}
)


$('#vSlider1').click(function() {

    if(listener.ls2_9_f1_click) {
        activator.ls2_9_f1_click = true;
        listener.ls2_9_f1_click = false;
    }

    if(activator.ls2_9_f1_click) {

        box.transition('LC2-9012', '', 0, 0, 1, 0);
        $('#boxbox-LC2').css({'margin-bottom':'-4px'});

        activator.ls2_9_f1_click = false;
        listener.ls2_9_f1 = true;

    }

})

//----------------------------------------------------------------------------//
//--------------------------------- CHANGE -----------------------------------//
//----------------------------------------------------------------------------//

$('#vSlider1').change(function() {

    if(listener.ls2_9_f1) {
        activator.ls2_9_f1 = true;
        listener.ls2_9_f1 = false;
    }

    if(activator.ls2_9_f1) {

        activator.ls2_9_f1 = false;

        setTimeout(()=>{
            calculator.wheel.enervateActivated = false;
            setTimeout(()=>{
                $('.wpWrap').css({'transform':'scale(1.15)'});
            }, 750)
        }, 750)

        // lock the slider and show 902 instructions
        setTimeout(()=>{

            box.transition('', 'LC2-902', 0, 0, 1, 0);
            $('#boxbox-LC2').css({'margin-bottom':'20px'});

            calculator.lock.activate([1,1,1,1,1,1]);

        }, 6000)

        // unlock it and show the place
        // activate the listener
        setTimeout(()=>{

            calculator.lock.activate([1,1,0,1,1,1]);
            listener.ls2_902_f1 = true;
            calculator.pointers.activate([0,0,1,0,0,0]);

        }, 7000)

    }

    //------------------------------------------//
    //----- LC2-902 SLIDER VALUE LISTENER -----//
    //------------------------------------------//

    if(listener.ls2_902_f1) {

        calculator.results.hide.leaderOutcomes();

        if(box.global.symmetricHeteroTreatment) {

            if(s1 <= 1 && h1 <=3) {

                activator.ls2_902_f1 = true;
                listener.ls2_902_f1 = false;

                calculator.show.checkMark();

                if(s1 === 0 && h1 === 0) {
                    $('#perfectText').css({'transition':'1s', 'opacity':'1'});
                } else {
                    $('#goodEnoughText').css({'transition':'1s', 'opacity':'1'});
                }

            }

        }

        if(box.global.asymmetricHeteroTreatment) {

            if(h1 >= 4 && h1 <= 16) {

                activator.ls2_902_f1 = true;
                listener.ls2_902_f1 = false;

                calculator.show.checkMark();

                if(h1 === 10) {
                    $('#perfectText').css({'transition':'1s', 'opacity':'1'});
                } else {
                    $('#goodEnoughText').css({'transition':'1s', 'opacity':'1'});
                }

            }

        }

        if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

            if(s1 >= 0 && s1 <=3 && h1 <= 0) {

                activator.ls2_902_f1 = true;
                listener.ls2_902_f1 = false;

                calculator.show.checkMark();

                if(s1 === 1) {
                    $('#perfectText').css({'transition':'1s', 'opacity':'1'});
                } else {
                    $('#goodEnoughText').css({'transition':'1s', 'opacity':'1'});
                }

            }

        }

    }

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





    //------------------------------------------//
    //----- LC2-902 SLIDER VALUE LISTENER -----//
    //------------------------------------------//

    if(listener.ls2_903_f1) {

        if(box.global.symmetricHeteroTreatment) {

            if(s1 >= 20 && s1 <=29) {
                activator.ls2_903_f1 = true;
                listener.ls2_903_f1 = false;

                calculator.show.checkMark();

                if(s1 === 24) {
                    $('#perfectText').css({'transition':'1s', 'opacity':'1'});
                } else {
                    $('#goodEnoughText').css({'transition':'1s', 'opacity':'1'});
                }

            }

        }

        if(box.global.asymmetricHeteroTreatment) {

            if(s1 >= 8 && s1 <=20) {
                activator.ls2_903_f1 = true;
                listener.ls2_903_f1 = false;

                calculator.show.checkMark();

                if(s1 === 14) {
                    $('#perfectText').css({'transition':'1s', 'opacity':'1'});
                } else {
                    $('#goodEnoughText').css({'transition':'1s', 'opacity':'1'});
                }

            }

        }

        if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {

            if(h1 >= 18 && h1 <=25) {

                activator.ls2_903_f1 = true;
                listener.ls2_903_f1 = false;

                calculator.show.checkMark();

                if(h1 === 23) {
                    $('#perfectText').css({'transition':'1s', 'opacity':'1'});
                } else {
                    $('#goodEnoughText').css({'transition':'1s', 'opacity':'1'});
                }

            }

        }

    }

    if(activator.ls2_903_f1) {

        calculator.results.hide.leaderOutcomes();

        activator.ls2_903_f1 = false;

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
            box.transition('LC2-903', 'LC2-9031', 0, 0, 1, 500);
        }, 1000)

        setTimeout(()=>{

                // calculator.values.set.efforts([200, 200]);

            if(box.global.symmetricHeteroTreatment) {
                calculator.values.set.helpSabo([24,0,0,7,4,0,0,7]);
                calculator.refresh.sliders();
            }

            if(box.global.asymmetricHeteroTreatment) {
                calculator.values.set.helpSabo([14,0,0,14,0,0,2,2]);
                calculator.refresh.sliders();
            }

            if(!box.global.symmetricHeteroTreatment && !box.global.asymmetricHeteroTreatment) {
                calculator.values.set.helpSabo([0,0,23,1,0,0,1,3]);
                calculator.refresh.sliders();
            }

        }, 1250)


        setTimeout(()=>{
            calculator.lock.activate([0,1,1,1,1,1]);
            calculator.pointers.activate([1,0,0,0,0,0]);
            listener.ls2_9031_f1 = true;
        }, 1750)


    }


})


$('#lSlider1').change(function() {

    //------------------------------------------//
    //----- LC2-9021 SLIDER VALUE LISTENER -----//
    //------------------------------------------//

    if(listener.ls2_9021_f1) {
        activator.ls2_9021_f1 = true;
        listener.ls2_9021_f1 = false;
    }

    if(activator.ls2_9021_f1) {

        setTimeout(()=>{
            box.button.show('LC2-9021');
        },1000)

    }

    //------------------------------------------//
    //----- LC2-9031 SLIDER VALUE LISTENER -----//
    //------------------------------------------//

    if(listener.ls2_9031_f1) {
        activator.ls2_9031_f1 = true;
        listener.ls2_9031_f1 = false;
    }

    if(activator.ls2_9031_f1) {

        setTimeout(()=>{
            box.button.show('LC2-9031');
        },1000)

    }


    //---------------------------------------//
    //----- LS2-2 SLIDER VALUE LISTENER -----//
    //---------------------------------------//

    if(listener.ls2_2_l1) {
        activator.ls2_2_l1 = true;
        listener.ls2_2_l1 = false;
    }

    if(activator.ls2_2_l1) {

        activator.ls2_2_l1 = false;

        setTimeout(()=>{

            box.transition('LC2-2', 'LC2-301', 0, 0, 1, 750);

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

        }, 1000)

    }

    //---------------------------------------//
    //----- LS2-41 SLIDER VALUE LISTENER -----//
    //---------------------------------------//

    if(listener.ls2_41_l1) {
        activator.ls2_41_l1 = true;
        listener.ls2_41_l1 = false;
    }

    if(activator.ls2_41_l2 && activator.ls2_41_l1) {

        activator.ls2_41_l2 = false;
        activator.ls2_41_l1 = false;

        setTimeout(()=>{

            // box.transition('LC2-41', 'LC2-5', 0, 0, 1, 750);
            //
            // setTimeout(()=>{
            //     box.button.show('LC2-5');
            // }, 3000)

            box.transition('LC2-4', 'LC2-42', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('LC2-42');
            }, 3000)

        }, 3500)

    }

})



$('#olSlider1').change(function() {

    //---------------------------------------//
    //----- LS2-4 SLIDER VALUE LISTENER -----//
    //---------------------------------------//

    if(listener.ls2_4_l2) {
        activator.ls2_4_l2 = true;
        listener.ls2_4_l2 = false;
    }

    if(activator.ls2_4_l2) {

        activator.ls2_4_l2 = false;

        setTimeout(()=>{
            calculator.lock.activate([1,1,1,1,1,1]);
        }, 2000)

        setTimeout(()=>{

            box.transition('LC2-4', 'LC2-41', 0, 0, 1, 750);

            setTimeout(()=>{
                calculator.lock.activate([0,0,1,1,1,1]);
                calculator.pointers.activate([1,1,0,0,0,0]);

                listener.ls2_41_l2 = true;
                listener.ls2_41_l1 = true;
            }, 3000)

        }, 3500)

    }

    //---------------------------------------//
    //----- LS2-41 SLIDER VALUE LISTENER -----//
    //---------------------------------------//

    if(listener.ls2_41_l2) {
        activator.ls2_41_l2 = true;
        listener.ls2_41_l2 = false;
    }

    if(activator.ls2_41_l2 && activator.ls2_41_l1) {

        activator.ls2_41_l2 = false;
        activator.ls2_41_l1 = false;

        setTimeout(()=>{

            calculator.questions.activate.all([0, 0, 0, 1, 0, 0]);
            calculator.questions.animateLeaderSpin = true;
            calculator.questions.spinLeaders(0);


            box.transition('LC2-4', 'LC2-42', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('LC2-42');
            }, 2000)

        }, 1000)

    }

})
