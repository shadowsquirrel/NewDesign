// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ----------------           MAINDATA             ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //


let mainData = {};


window.onload = function() {

    adjustWindowSize();

    tool.set.NORP(2)
    setMetaNorp(168, -14, 0.3);
    hideNorp(0);

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
    //     // not sure if we will have this
    //     setMetaNorp(108, -18, 0.25);
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
            s3Done: 0,
            s4Done: 0,
            s5Done: 0,
            s6Done: 0,
            fB1: 0,
            fB2: 0,
            fB3: 0,
            miniGame: 0,
        },
        sortedArray: [0,2,5,4,1,3],
        treatment: [1,1],
        myCount: 3
    }
    // ------------------------ //
    // ------------------------ //
    // ------------------------ //


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
    //         decisionSubmitted = true;
    //
    //         s2DoneUpdated = 1;
    //
    //         if(calculator.globalVariable.playerIndex === 0) {
    //
    //             var msg = {
    //
    //                 decision: [h1, s1],
    //                 stage: 2,
    //                 tutoDone: s2DoneUpdated,
    //                 bb: {
    //                     stage: 2,
    //                     dynamic: bb.data.followerHelpSabo.dynamic,
    //                     static: bb.data.followerHelpSabo.static
    //                 }
    //
    //             }
    //
    //         }
    //
    //         if(calculator.globalVariable.playerIndex === 1) {
    //
    //             var msg = {
    //
    //                 decision: [h2, s2],
    //                 stage: 2,
    //                 tutoDone: s2DoneUpdated,
    //                 bb: {
    //                     stage: 2,
    //                     dynamic: bb.data.followerHelpSabo.dynamic,
    //                     static: bb.data.followerHelpSabo.static
    //                 }
    //
    //             }
    //
    //         }
    //
    //         node.emit('HTML-decision', msg);
    //
    //     }, 3000)
    //
    // })


    var decisionSubmitted = false;

    // node.on('orangeLight', function() {
    //
    //     if(!decisionSubmitted) {
    //         calculator.warn15();
    //     }
    //
    // })

    // node.on('redLight', function() {
    //
    //     if(!decisionSubmitted) {
    //         calculator.warn5();
    //     }
    //
    // })


    var countDownTime = undefined;

    var determineTime = function() {

        var myRound = mainData.myRound;

        // round 1,2,3 -> 60seconds
        if(myRound < 4) {

            countDownTime = 60000;

            // round 4,5,6,7 -> 45 seconds
        } else if(myRound < 8) {

            countDownTime = 45000;

            // round 8,9,10 -> 30 seconds
        } else {

            countDownTime = 30000;

        }

    }



    var generateStage2 = function() {


        // node.emit(goup);

        // rearranges the sortedArray so that the left group is the subject's group
        tool.rearrangeGroupOrder(mainData);

        // console.log('sorted array: ' + mainData.sortedArray);
        // console.log('treatment: ' + mainData.treatment);

        // setup.value does nothing with the mainData so far we can pass on
        // previous graphical calculator values to here
        // also for og1-lc we will pass on h/s data etc..
        initialize.values();


        // matches player's node data with the graphics
        setup.fundamentals(mainData);


        // calls all the different setup function using the parameters
        // defined/assigned by setup.fundamentals
        setup.og();


        // uses map.setup() to pass calculator.globalVariables to map.globalVariables
        // map.setup() -> adjust which icon sets to show given the treatment and group
        //
        // given the setup show the desired stage
        //
        // shows the map with focus action etc...
        map.show.stage('og1_hs');

        // setup the info text displays based on the treatment
        setup.basicInfoText();

        // setup the info text displays based on tutorial experience
        tool.tutorialSetup(mainData, 's2');

        // setup the countdown time depending on the round at further rounds less
        // time
        determineTime(mainData);


        var determineCalculatorFollowerCircle = function() {

            if(map.globalVariable.playerIndex === 0) {

                $('.follower1Circle').css({'transition':'0.5s', 'opacity':'1'});

            }

            if(map.globalVariable.playerIndex === 1) {

                $('.follower2Circle').css({'transition':'0.5s', 'opacity':'1'});

            }

        }


        determineCalculatorFollowerCircle();

        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//
        //----------------------- INFO BOX BUTTON ACTION --------------------------//
        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//

        var prepare4Decision = function() {

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

            // isoalte og1 display
            map.opacity.main([1,0,0],0.5)

            // move the map
            setTimeout(()=>{

                $('.sexplain').css({'transition':'0.7s',
                'margin-top':'273px', 'margin-left':'226px'});
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
                        map.move.insideDecisionSlider();
                        $('.sexplain').css({'position':'relative'});
                        map.opacity.main([1,0.4,0.4], 0.75);
                    }, 1000)

                }, 600)

            }, 260)

            setTimeout(()=>{

                $('#boxbox-B').css({'z-index':'200'});
                box.transition('', 'B-1', 0, 0, 1, 0);

            }, 1000)

            setTimeout(()=>{

                // id1, id2, transform, addSpaceBetween, hideButton, delay
                box.transition('B-1', 'B-2', 0, 0, 1, 750);

                $('.infoButtonTop, .mapButtonTop, .submitButtonTop, .calcButtonTop').css({ 'transform-origin':'bottom',
                'transform':'scale(0)'});

                calculator.section.decision.follower.opacity(0)

            }, 5000)

            setTimeout(()=>{

                // id1, id2, transform, addSpaceBetween, hideButton, delay
                box.transition('B-2', '', 0, 0, 1, 0);

                // ---- NODE GAME COUNT DOWN EMITTER HERE ---- //
                // node.emit('countDown', countDownTime);
                console.log('node.emit countdown');

                bb.activators.followerHelpSabo = true;

                setTimeout(()=>{
                    calculator.section.decision.follower.opacity(1)
                }, 500)


                setTimeout(()=>{
                    $('.infoButtonTop, .mapButtonTop, .calcButtonTop').css({ 'transform-origin':'bottom',
                    'transform':'scale(1)'});
                }, 1500)

                setTimeout(()=>{
                    $('.submitButtonTop').css({ 'transform-origin':'bottom',
                    'transform':'scale(1)'});
                }, 10500)


                setTimeout(()=>{
                    $('#boxbox-B').css({'z-index':'-200'});
                }, 750)

                setTimeout(()=>{
                    calculator.pointers.activateDf(true);
                    $('.outcomeWrap').css({'transition':'1s', 'filter':'opacity(1)', 'opacity':'1'});
                }, 1500)

                setTimeout(()=>{

                    // dealing with the nuissance

                    // show calculator utility buttons
                    tool.graphics.show.decisionSliderButtons();

                    // $('.follower1Circle, .follower2Circle').css({'transition':'0.5s', 'opacity':'0'});


                }, 3000)

            }, 9000)


        };

        // show the first info box -> info box A-1
        setTimeout(()=>{

            box.transition('', 'A-1', 1, 0, 1, 0);

            setTimeout(()=>{
                box.button.show('A-1');
            }, 1500)

        }, 1500)


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
                'margin-top':'390px', 'margin-left':'226px'});
                // isoalte og1 display
                map.opacity.main([1,0,0],0.5)

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

                        // dealing with the nuissance
                        // $('.outcomeWrap').css({'transition':'1s', 'filter':'opacity(1)'});
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

                prepare4Decision();

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

            if(!calculator.quickTutorial) {

                // id1, id2, transform, addSpaceBetween, hideButton, delay
                box.transition('A-4', 'A-5', 0, 0, 1, 750);

                setTimeout(()=>{

                    // hide the map
                    map.hideMap(0.75)

                    // show calculator
                    calculator.open();
                    calculator.section.all.opacity(1);
                    calculator.set.height();

                }, 1500)

                setTimeout(()=>{
                    box.button.show('A-5');
                }, 2000)

            } else {

                box.transition('A-4', 'A-501', 0, 0, 1, 750);

                // move the map inside the button triggered div of decision calculator

                // hide the map
                map.hideMap(0.75)

                setTimeout(()=>{
                    map.move.insideDecisionSlider();
                    $('.sexplain').css({'position':'relative'});
                    map.opacity.main([1,0.4,0.4], 0.75);
                }, 550)

                setTimeout(()=>{
                    // show calculator
                    calculator.open();
                    calculator.section.all.opacity(1);
                    calculator.set.height();
                }, 550)

                setTimeout(()=>{
                    box.button.show('A-501');
                }, 2000)

            }

        })

        $('#btn-A-5').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-5', 'A-6', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('A-6');
            }, 2000)

        })

        $('#btn-A-6').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-6', 'A-7', 0, 0, 1, 750);

            if(calculator.globalVariable.playerIndex === 0) {
                calculator.pointers.activate([0,0,1,0,0,0]);
            }

            if(calculator.globalVariable.playerIndex === 1) {
                calculator.pointers.activate([0,0,0,1,0,0]);
            }

            setTimeout(()=>{
                box.button.show('A-7');
            }, 2000)

        })

        $('#btn-A-7').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-7', 'A-8', 0, 0, 1, 750);

            tool.var.submitTutorialLockActive = true;

            calculator.pointers.activate([0,0,0,0,0,0]);

            setTimeout(()=>{
                $('.submitButtonTop').css({'transform':'scale(1)'});
            }, 2000)


            setTimeout(()=>{
                box.button.show('A-8');
            }, 4000)

        })

        // ---------- NODE GAME ACTION ----------- //
        $('#btn-A-8').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-8', 'A-9', 0, 0, 1, 750);

            // ------------------------------------------------------------- //
            // ---- NODE GAME ACTION SHOW THE TIMER AND START COUNTDOWN ---- //
            // ------------------------------------------------------------- //
            bb.activators.followerHelpSabo = true;

            // START THE TIMER
            // node.emit('countDown', countDownTime);
            console.log('node.emit countdown');

            setTimeout(()=>{
                box.button.show('A-9');
            }, 2000)

        })

        $('#btn-A-9').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-9', 'A-10', 0, 0, 1, 750);

            setTimeout(()=>{
                calculator.warn15();
            }, 2000)

            setTimeout(()=>{
                box.button.show('A-10');
            }, 4750)

        })

        $('#btn-A-10').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-10', 'A-11', 0, 0, 1, 750);

            setTimeout(()=>{
                calculator.warn5();
            }, 2000)

            setTimeout(()=>{
                box.button.show('A-11');
            }, 4750)

        })

        $('#btn-A-11').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-11', 'A-12', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('A-12');
            }, 2000)

        })

        // map button is introduced, map is moved inside the decision slider
        $('#btn-A-12').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-12', 'A-13', 0, 0, 1, 750);

            // move the map inside the button triggered div of decision calculator
            map.move.insideDecisionSlider();
            $('.sexplain').css({'position':'relative'});
            map.opacity.main([1,0.4,0.4], 0.75);

            // show map icon
            setTimeout(()=>{
                $('.mapButtonTop').css({ 'transform-origin':'bottom',
                'transform':'scale(1)'});
            }, 1000)

            setTimeout(()=>{
                box.button.show('A-13');
            }, 2000)

        })

        $('#btn-A-13').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-13', 'A-14', 0, 0, 1, 750);

            // show map icon
            setTimeout(()=>{
                $('.infoButtonTop').css({ 'transform-origin':'bottom',
                'transform':'scale(1)'});
            }, 1000)

            setTimeout(()=>{
                box.button.show('A-14');
            }, 2000)

        })

        $('#btn-A-14').click(function() {

            box.transition('A-14', '', 0, 0, 1, 0);

            $('#boxbox-A').css({'margin-bottom':'-20px', 'transition':'0.7s'})
            $('#boxbox-B').css({'z-index':'200'});
            $('#boxwrap-B-1').css({'margin-top':'18px', 'transition':'0.7s'});

            box.transition('', 'B-1', 0, 0, 1, 500);

            $('.infoButtonTop, .mapButtonTop, .submitButtonTop, .calcButtonTop').css({ 'transform-origin':'bottom',
            'transform':'scale(0)'});

            calculator.section.decision.follower.opacity(0)

            setTimeout(()=>{
                box.button.show('B-1');
            }, 1000)

            tool.var.submitTutorialLockActive = false;

        })

        // -------- NODE GAME ACTION ---------- //
        // END OF TUTORIAL PLEASE MAKE AN H/S DECISION
        $('#btn-A-15').click(function() {

            // START THE TIMER
            // node.emit('countDown', countDownTime);
            console.log('node.emit countdown');

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-15', '', 0, 0, 1, 0);
            $('#boxbox-A').css({'margin-top':'-20px'});

            setTimeout(()=>{
                $('#boxbox-A').css({'display':'none'})
            }, 750)

        })

        // -------- NODE GAME ACTION ---------- //
        $('#btn-A-501').click(function() {

            // ------------ NODE GAME ACTION ------------- //

            tool.var.submitTutorialLockActive = false;

            // START THE TIMER
            // node.emit('countDown', countDownTime);
            console.log('node.emit countdown');

            bb.activators.followerHelpSabo = true;

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            // box.transition('A-501', 'A-15', 0, 0, 1, 750);

            box.transition('A-501', '', 0, 0, 1, 0);

            $('#boxbox-A').css({'margin-bottom':'-20px', 'transition':'0.7s'})
            $('#boxbox-B').css({'z-index':'200'});
            $('#boxwrap-B-1').css({'margin-top':'18px', 'transition':'0.7s'});
            box.transition('', 'B-1', 0, 0, 1, 500);
            $('.infoButtonTop, .mapButtonTop, .submitButtonTop, .calcButtonTop').css({ 'transform-origin':'bottom',
            'transform':'scale(0)'});

            calculator.section.decision.follower.opacity(0)

            setTimeout(()=>{
                box.button.show('B-1');
            }, 1000)

            // dealing with the nuissance
            $('.outcomeWrap').css({'transition':'1s', 'filter':'opacity(1)'});

        })


        $('#btn-B-1').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('B-1', 'B-2', 0, 0, 1, 750);

            $('.infoButtonTop, .mapButtonTop, .submitButtonTop, .calcButtonTop').css({ 'transform-origin':'bottom',
            'transform':'scale(0)'});

            calculator.section.decision.follower.opacity(0)

            setTimeout(()=>{
                box.button.show('B-2');
            }, 2000)

        })

        // -------- NODE GAME ACTION ---------- //
        $('#btn-B-2').click(function() {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('B-2', '', 0, 0, 1, 0);

            // ---- NODE GAME COUNT DOWN EMITTER HERE ---- //
            // node.emit('countDown', countDownTime);
            console.log('node.emit countdown');

            bb.activators.followerHelpSabo = true;

            // $('.follower1Circle, .follower2Circle').css({'transition':'0.5s', 'opacity':'0'});

            setTimeout(()=>{
                calculator.section.decision.follower.opacity(1)
            }, 500)

            setTimeout(()=>{
                $('.infoButtonTop, .mapButtonTop, .calcButtonTop').css({ 'transform-origin':'bottom',
                'transform':'scale(1)'});
            }, 1500)

            setTimeout(()=>{
                $('.submitButtonTop').css({ 'transform-origin':'bottom',
                'transform':'scale(1)'});
            }, 10500)


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

                }, 3000)

            }


        })

        $('#submitButtonTop').click(function() {

            if(!tool.var.submitTutorialLockActive) {

                decisionSubmitted = true;

                s2DoneUpdated = 1;

                if(calculator.globalVariable.playerIndex === 0) {

                    var msg = {

                        decision: [h1, s1],
                        stage: 2,
                        tutoDone: s2DoneUpdated,
                        bb: {
                            stage: 2,
                            dynamic: bb.data.followerHelpSabo.dynamic,
                            static: bb.data.followerHelpSabo.static
                        }

                    }

                }

                if(calculator.globalVariable.playerIndex === 1) {

                    var msg = {

                        decision: [h2, s2],
                        stage: 2,
                        tutoDone: s2DoneUpdated,
                        bb: {
                            stage: 2,
                            dynamic: bb.data.followerHelpSabo.dynamic,
                            static: bb.data.followerHelpSabo.static
                        }

                    }

                }

                // node.emit('HTML-decision', msg);
                console.log('node.emit(html-decision)');
                console.log(msg);

                // ---------------------------------------- //
                // ---------------------------------------- //
                // -------------   STAGE 2 ---------------- //
                // ------------ WAITING SETUP ------------- //
                // ---------------------------------------- //
                // ---------------------------------------- //

                if(calculator.globalVariable.playerIndex === 0) {

                    calculator.lock.activate2([0, 0, 1, 0, 0, 0]);
                    $('.sliderQuestion_f1').css({'opacity': '0'});

                }

                if(calculator.globalVariable.playerIndex === 1) {

                    calculator.lock.activate2([0, 0, 0, 1, 0, 0]);
                    $('.sliderQuestion_f2').css({'opacity': '0'});

                }

                calculator.section.decision.follower.opacity(0);

                $('.outcomeWrap').css({'transition':'0s', 'opacity':'0'});

                $('.calculator').css({'transition':'0.5s', 'transform':'scale(1)'});

                $('.norp').css({'transition':'0s', 'filter':'opacity(0)'});

                $('.generalMarginBox').css({'transition':'0.5s',
                'margin-top':'103px'});

                $('.outcomeWrap').css({'transition':'0.5s', 'flex-direction':'row-reverse',
                'transform':'scale(1.25)', 'justify-content':'space-around',
                'margin-bottom':'-75px'});

                $('.decisionWrapF').css({'transition':'0.5s',
                'margin-bottom':'-194px'});

                $('.sliderQuestion_l2').css({'opacity': '1'});

                if(map.globalVariable.playerIndex === 0) {

                    $('.follower1Circle').css({'transition':'0.5s', 'opacity':'1',
                    'transform':'scale(1)'});

                }

                if(map.globalVariable.playerIndex === 1) {

                    $('.follower2Circle').css({'transition':'0.5s', 'opacity':'1',
                    'transform':'scale(1)'});

                }

                setTimeout(()=>{

                    calculator.decisionSlider.follower.disable();

                    $('.pleaseWait').css({'display':'block', 'position':'static'});

                    $('.norp').appendTo('.pleaseWait');

                    $('.norp').css({'position':'static'});

                    $('.outcomeWrap').css({'transition':'0.5s', 'opacity':'1'});

                    setTimeout(()=>{

                        $('.pleaseWait').css({'transition':'0.5s', 'opacity':'1'});

                        $('.norp').css({'transition':'0.5s', 'filter':'opacity(1)',
                        'opacity':'1'});

                        flowLoad(1);

                    }, 100)

                }, 500)


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


    generateStage2();

}
