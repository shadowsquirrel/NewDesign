// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ----------------           MAINDATA             ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //


let mainData = {};


window.onload = function() {

    // var node = parent.node;

    // -------------------------------------------- //
    // --------------- DATA LISTENERS ------------- //
    // -------------------------------------------- //


    // node.on('HTML-data', function(msg) {
    //
    //     mainData = msg;
    //
    //     console.log('----------------------------------------------');
    //     console.log('-------                               --------');
    //     console.log('-------          DATA RECEIVED        --------');
    //     console.log('-------                               --------');
    //     console.log('----------------------------------------------');
    //     console.log();
    //     console.log(mainData);
    //     console.log();
    //     console.log('----------------------------------------------');
    //     console.log('-------                               --------');
    //     console.log('----------------------------------------------');
    //
    //     generateStage2();
    //
    // });
    //
    // node.on('HTML-NORP', function(msg) {
    //
    //     console.log('----------------------------------------------');
    //     console.log('-------                               --------');
    //     console.log('-------              NORP             --------');
    //     console.log('-------                               --------');
    //     console.log('----------------------------------------------');
    //     console.log();
    //     console.log(msg);
    //     console.log();
    //     console.log('----------------------------------------------');
    //     console.log('-------                               --------');
    //     console.log('----------------------------------------------');
    //
    //     tool.set.NORP(msg);
    //     setMetaNorp(108, -18, 0.25);
    //
    // })

    // node.on('timeUp', function() {
    //
    //     // let's give 3 seconds of grace period
    //
    //     setTimeout(()=>{
    //
    //         console.log('TIME IS UP !!!!!!');
    //         console.log('CLIENT FAILED TO SUBMIT IN TIME');
    //         console.log('AUTO SENDING READY MESSAGE TO CLIENT');
    //
    //         // we are counting it twice I will omit this one and keep the update
    //         // done in the logic side
    //         s2DoneUpdated = mainData.myTutorial.s2Done + 1;
    //
    //         if(calculator.globalVariable.playerIndex === 0) {
    //
    //             var msg = {
    //                 decision: [h1, s1, s2DoneUpdated, ['big brother is watching']],
    //                 stage: 2,
    //             }
    //
    //         }
    //
    //         if(calculator.globalVariable.playerIndex === 1) {
    //
    //             var msg = {
    //                 decision: [h2, s2, s2DoneUpdated, ['big brother is watching']],
    //                 stage: 2,
    //             }
    //
    //         }
    //
    //         node.emit('HTML-decision', msg);
    //
    //     }, 3000)
    //
    // })
    //
    //
    // node.on('orangeLight', function() {
    //
    //     calculator.warn15();
    //
    // })
    //
    // node.on('redLight', function() {
    //
    //     calculator.warn5();
    //
    // })


    // ------------------------ //
    // ------ debug data ------ //
    // ------------------------ //
    mainData = {
        myRound: 1,
        myTutorial: {
            s1Done: 1,
            s2Done: 1,
            s3Done: 1,
            s4Done: 0,
            s5Done: 0,
            s6Done: 0,
            fB1: 0,
            fB2: 0,
            fB3: 0,
            miniGame: 0,
        },
        myCount: 2,

        sortedArray: [0,2,5,4,1,3],
        treatment: [0,1],

        s2: [ [ [10,0], [0,10]], [ [15,0], [0,5] ] ],
        // s2: [ [[0,20], [10,0]], [[0,5], [10,0]] ],
        s3: [ [200, 100], [true, false] ],
        // s3: [ [200, 100], [false, true] ],
        s4: [ [ [5, 1], [true, false], [50, 100] ], [ [5, 1], [false, true], [51, 101] ] ],
        s5: [ [Array(6), Array(6)], [Array(6), Array(6)] ],
        s6: [ Array(2), Array(2) ],

    }
    // ------------------------ //
    // ------------------------ //
    // ------------------------ //





    var countDownTime = undefined;

    var determineTime = function() {

        var myRound = mainData.myRound;

        if(myRound < 4) {

            countDownTime = 60000;

        } else if(myRound < 8) {

            countDownTime = 45000;

        } else {

            countDownTime = 30000;

        }

    }



    var generateStage5 = function() {


        // console.log('sorted array: ' + mainData.sortedArray);
        // console.log('treatment: ' + mainData.treatment);

        // rearranges the sortedArray so that the left group is the subject's group
        tool.rearrangeGroupOrder(mainData);


        tool.rearrangeMainData(mainData);


        // setup the info text displays based on tutorial experience
        if(mainData.myTutorial.s2Done === 1 || mainData.myTutorial.s5Done === 1) {
            calculator.skipTutorial = true;
        }

        // for now we have it we will take out quicktutorial setups
        calculator.quickTutorial = true;

        // setup the countdown time depending on the round at further rounds less
        // time
        determineTime(mainData);


        tool.determineS3Winner();

        tool.determineS4Winner();


        // matches player's node data with the graphics
        setup.fundamentals(mainData);

        // setup.value does nothing with the mainData so far we can pass on
        // previous graphical calculator values to here
        // also for og1-lc we will pass on h/s data etc..
        initialize.values();

        // calls all the different setup function using the parameters
        // defined/assigned by setup.fundamentals
        setup.og();

        // setup the info text displays based on the treatment
        setup.basicInfoText();

        if(tool.ourGroupWonOG1) {

            map.show.stage('og2_og1Won');

        } else {

            map.show.stage('og2_og1Lost');

        }

        $('#boxwrap-A-1').css({'margin-top':'20px'});
        $('#boxwrap-A-2').css({'margin-top':'-32px'});

        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//
        //----------------------- INFO BOX BUTTON ACTION --------------------------//
        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//


        // --------------- NODE ACTION -------------- //
        // move to the top of the div



        // show the first info box -> info box A-1
        setTimeout(()=>{

            box.transition('', 'A-1', 1, 0, 1, 0);

            // map.focus.og2.followers();

            setTimeout(()=>{
                box.button.show('A-1');
            }, 1500)

        }, 6500)


        listener = {};
        activator = {};



        // NODE GAME ACTION
        listener.A_1_df = false;
        $('#btn-A-1').click(function() {

            // causes trouble let's kill it initially
            $('.outcomeWrap').css({'transition':'0s', 'filter':'opacity(0)'});
            setTimeout(()=>{
                $('.outcomeWrap').css({'transition':'1s'});
            }, 1000)

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-1', '', 0, 0, 1, 0);

            // no button setup for follower calculator
            $('.infoButtonTop, .mapButtonTop, .submitButtonTop, .calcButtonTop').css({ 'transform-origin':'bottom',
            'transform':'scale(0)'});

            // free sexplain from its initial div by making it absolute
            $('.sexplain').css({'transition':'0s',
            'position':'absolute', 'margin-left':'-10px'});

            // kill/hide the arrow YOH animation
            map.wiggle.active = false

            // activate follower decision slider but don't show it yet
            setTimeout(()=>{
                calculator.decisionSlider.follower.enable();
                calculator.setPayoffTextFollower(0,0);
            }, 250)


            // ------------------------------------------ //
            // --------- TUTORIAL/REGULAR SETUP --------- //
            // ------------------------------------------ //

            if(!calculator.skipTutorial) {

                // ---------------------------------- //
                // --------- TUTORIAL SETUP --------- //
                // ---------------------------------- //

                // move map below and focus on og1
                $('.sexplain').css({'transition':'0.7s',
                'margin-top':'390px', 'margin-left':'-275px'});
                // isoalte og1 display
                map.opacity.main([0,0,1],0.5);
                $('.arrowsToOG1IconResults, .arrowsToOG2').css({'transition':'0.5s',
                'opacity':'0'})

                setTimeout(()=>{

                    // kill the space of initial map div
                    // map position is absolute so we can move it
                    $('.initialMapDiv').css({'transition':'0s', 'margin-bottom':'-275px'});

                    // show follower decision slider
                    calculator.section.decision.follower.opacity(1);

                    // show info box
                    box.transition('', 'A-2', 0, 0, 1, 0);

                    setTimeout(()=>{
                        box.button.show('A-2');
                    }, 2000)

                    setTimeout(()=>{
                        calculator.pointers.activateDf(true);
                        listener.A_1_df = true;
                    }, 250)

                }, 750)


            } else {

                // ---------------------------------- //
                // ---------- REGULAR SETUP --------- //
                // ---------------------------------- //

                // isoalte og1 display
                map.opacity.main([0,0,1],0.5)
                $('.arrowsToOG1IconResults, .arrowsToOG2').css({'transition':'0.5s',
                'opacity':'0'})

                setTimeout(()=>{

                    $('#boxbox-B').css({'z-index':'200'});
                    box.transition('', 'B-1', 0, 0, 1, 0);

                    setTimeout(()=>{
                        box.button.show('B-1');
                    }, 1000)

                }, 1000)

                // move the map
                setTimeout(()=>{

                    // move map below and focus on og1
                    $('.sexplain').css({'transition':'0.7s',
                    'margin-top':'245px', 'margin-left':'-275px'});

                    // kill the space of initial map div
                    // map position is absolute so we can move it
                    $('.initialMapDiv').css({'transition':'0s', 'margin-bottom':'-275px'});
                    $('#boxbox-A').css({'margin-top':'-11px'});

                    setTimeout(()=>{

                        // show calculator
                        calculator.open();
                        calculator.section.all.opacity(1);
                        calculator.set.height();

                        // hide the map
                        map.hideMap(1)

                        setTimeout(()=>{
                            $('.sexplain').appendTo($('.mapInfoWrap'));
                            $('.sexplain').css({'margin-left':'-54px',
                            'opacity':'1', 'transform':'scale(1)', 'margin-top':'50px', 'position':'static'});
                            $('.arrowsToOG1IconResults, .arrowsToOG2').css({'transition':'0.5s',
                            'opacity':'0.7'})
                            map.opacity.inside([1,1,1])
                            map.opacity.main([0.7,0.7,1]);
                        }, 1000)

                    }, 600)

                }, 260)

            }

        })


        listener.A_2_df = false;
        activator.A_2_df = false;
        $('#btn-A-2').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-2', 'A-3', 0, 0, 1, 750);
            listener.A_1_df = false;
            listener.A_2_df = true;

        })


        $('#btn-A-4').click(function() {

            tool.enervatePayoffTitles(0);

            box.transition('A-4', 'A-501', 0, 0, 1, 750);

            // move the map inside the button triggered div of decision calculator
            map.move.insideDecisionSlider();
            $('.sexplain').css({'position':'relative'});
            map.opacity.main([1,0.4,0.4], 0.75);

            setTimeout(()=>{

                // hide the map
                map.hideMap(0.75)

                // show calculator
                calculator.open();
                calculator.section.all.opacity(1);
                calculator.set.height();

            }, 1500)

            setTimeout(()=>{
                box.button.show('A-501');
            }, 2000)

        })

        // NODE GAME ACTION
        $('#btn-A-501').click(function() {

            // ------------ NODE GAME ACTION ------------- //

            tool.var.submitTutorialLockActive = false;

            // START THE TIMER
            // node.emit('countDown', countDownTime);


            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-501', 'A-15', 0, 0, 1, 750);

            // dealing with the nuissance
            $('.outcomeWrap').css({'transition':'1s', 'filter':'opacity(1)'});

            // show calculator utility buttons
            tool.graphics.show.decisionSliderButtons();

            setTimeout(()=>{
                box.button.show('A-15');
            }, 2000)


        })


        // END OF TUTORIAL PLEASE MAKE AN H/S DECISION
        $('#btn-A-15').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-15', '', 0, 0, 1, 0);
            $('#boxbox-A').css({'margin-top':'-20px'});

            setTimeout(()=>{
                $('#boxbox-A').css({'display':'none'})
            }, 750)

        })


        $('#btn-B-1').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('B-1', 'B-2', 0, 0, 1, 750);

            calculator.section.decision.follower.opacity(0)

            setTimeout(()=>{
                box.button.show('B-2');
            }, 2000)

        })


        // NODE GAME ACTION
        $('#btn-B-2').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('B-2', '', 0, 0, 1, 0);

            // node.emit('countDown', countDownTime);

            setTimeout(()=>{
                calculator.section.decision.follower.opacity(1)
            }, 500)


            setTimeout(()=>{
                $('#boxbox-B').css({'z-index':'-200'});
            }, 750)

            setTimeout(()=>{
                calculator.pointers.activateDf(true);
                $('.outcomeWrap').css({'transition':'1s', 'filter':'opacity(1)'});
            }, 1500)

            setTimeout(()=>{

                // dealing with the nuissance

                // show calculator utility buttons
                tool.graphics.show.decisionSliderButtons();

            }, 3000)

            // ---- NODE GAME COUNT DOWN EMITTER HERE ---- //

        })


        //----------------------------------------------------------------------------//
        //--------------------------------- CHANGE -----------------------------------//
        //----------------------------------------------------------------------------//


        //  follower's decision slider
        $('#dSliderF').change(function() {

            //---------------------------------------//
            //----- A-4 INFO BOX VALUE LISTENER -----//
            //---------------------------------------//


            // if( ( (h1 + h2) > 0 || (s1 + s2) > 0) && listener.A_2_df) {
            if(listener.A_2_df) {

                listener.A_2_df = false;

                setTimeout(()=>{

                    box.transition('A-3', 'A-4', 0, 0, 1, 750);
                    $('.outcomeWrap').css({'transition':'1s', 'filter':'opacity(1)'});


                    $('.outcomeWrap').css({'transition':'1s', 'filter':'opacity(1)'});
                    setTimeout(()=>{
                        tool.enervatePayoffTitles(1);
                    }, 3000)


                    setTimeout(()=>{
                        box.button.show('A-4');
                    }, 4500)

                }, 1500)

            }


        })

        $('#submitButtonTop').click(function() {

            if(!tool.var.submitTutorialLockActive) {

                s2DoneUpdated = mainData.myTutorial.s2Done + 1;

                if(calculator.globalVariable.playerIndex === 0) {

                    var msg = {
                        decision: [h1, s1, s2DoneUpdated, ['big brother is watching']],
                        stage: 2,
                    }

                }

                if(calculator.globalVariable.playerIndex === 1) {

                    var msg = {
                        decision: [h2, s2, s2DoneUpdated, ['big brother is watching']],
                        stage: 2,
                    }

                }

                node.emit('HTML-decision', msg);

            } else {

                $('.cantSubmitWrap').css({'transform':'scale(1)',
                'z-index':'100000000'})

                $('.all').css({'filter':'grayscale(1)', 'opacity':'0.5'});

                $('.majorBlocker').css({'display':'flex'});

            }

        })

        $('#cantSubmitButton').click(function() {

            $('.cantSubmitWrap').css({'transform':'scale(0)',
            'z-index':'-100000000'})

            $('.all').css({'filter':'grayscale(0)', 'opacity':'1'});

            $('.majorBlocker').css({'display':'none'});

        })


    }


    generateStage5();

}
