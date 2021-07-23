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
    //     generateStage5();
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
    //         s5DoneUpdated = 1;
    //
    //         if(calculator.globalVariable.playerIndex === 0) {
    //
    //             var msg = {
    //
    //                 decision: [h1, s1],
    //                 stage: 5,
    //                 tutoDone: s5DoneUpdated,
    //                 bb: {
    //                     stage: 5,
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
    //                 stage: 5,
    //                 tutoDone: s5DoneUpdated,
    //                 bb: {
    //                     stage: 5,
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

        var determineCalculatorFollowerCircle = function() {

            if(map.globalVariable.playerIndex === 0) {

                $('.follower1Circle').css({'transition':'0.5s', 'opacity':'1'});

            }

            if(map.globalVariable.playerIndex === 1) {

                $('.follower2Circle').css({'transition':'0.5s', 'opacity':'1'});

            }

        }

        determineCalculatorFollowerCircle();

        $('#boxwrap-A-1').css({'margin-top':'20px'});
        $('#boxwrap-A-2').css({'margin-top':'-32px'});

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
            map.opacity.main([0,0,1],0.5);
            $('.arrowsToOG1IconResults, .arrowsToOG2').css({'transition':'0.5s',
            'opacity':'0'})

            // move the map
            setTimeout(()=>{

                $('.sexplain').css({'transition':'0.7s',
                'margin-top':'242px', 'margin-left':'-275px'});
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
                        $('.sexplain').css({'position':'relative', 'margin-left':'-50px'});
                        map.opacity.main([0.6,0.6,1], 0.75);
                        $('.arrowsToOG1IconResults, .arrowsToOG2').css({'transition':'0.5s',
                        'opacity':'0.6'})
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
            console.log('node.emit countdown');


            // id1, id2, transform, addSpaceBetween, hideButton, delay
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

            // setTimeout(()=>{
            //     box.button.show('A-15');
            // }, 2000)


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


        // NODE GAME ACTION
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

                }, 1500)

            }


        })

        $('#submitButtonTop').click(function() {

            if(!tool.var.submitTutorialLockActive) {

                decisionSubmitted = true;

                s5DoneUpdated = 1;

                if(calculator.globalVariable.playerIndex === 0) {

                    var msg = {

                        decision: [h1, s1],
                        stage: 5,
                        tutoDone: s5DoneUpdated,
                        bb: {
                            stage: 5,
                            dynamic: bb.data.followerHelpSabo.dynamic,
                            static: bb.data.followerHelpSabo.static
                        }

                    }

                }

                if(calculator.globalVariable.playerIndex === 1) {

                    var msg = {

                        decision: [h2, s2],
                        stage: 5,
                        tutoDone: s5DoneUpdated,
                        bb: {
                            stage: 5,
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
                // -------------   STAGE 5 ---------------- //
                // ------------ WAITING SETUP ------------- //
                // ---------------------------------------- //
                // ---------------------------------------- //

                if(calculator.globalVariable.playerIndex === 0) {

                    calculator.lock.activate2([0, 0, 1, 0, 0, 0]);
                    $('.sliderQuestion_f1').css({'opacity': '0'});
                    $('.sliderQuestion_f2').css({'opacity': '1'});

                }

                if(calculator.globalVariable.playerIndex === 1) {

                    calculator.lock.activate2([0, 0, 0, 1, 0, 0]);
                    $('.sliderQuestion_f2').css({'opacity': '0'});
                    $('.sliderQuestion_f1').css({'opacity': '1'});

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


    generateStage5();

}
