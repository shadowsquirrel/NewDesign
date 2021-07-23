// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ----------------           MAINDATA             ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //


let mainData = {};


window.onload = function() {

    adjustWindowSize();

    tool.set.NORP(4)
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
    //     generateStage3();
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
    //     showNorp();
    //     tool.set.NORP(msg);
    //     setMetaNorp(108, -18, 0.25);
    //
    // })
    //
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
    //         s4DoneUpdated = 1;
    //
    //         var msg = {
    //             decision: [efo1],
    //             stage: 4,
    //             tutoDone: s4DoneUpdated,
    //             bb: {
    //                 stage: 4,
    //                 dynamic: bb.data.followerContest.dynamic,
    //                 static: bb.data.followerContest.static
    //             }
    //         }
    //
    //         // emitting decision also sends ready signal from the client decision listener
    //         // node.emit('HTML-decision', msg);
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
    //
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
        myTutorial: {
            s1Done: 1,
            s2Done: 0,
            s3Done: 0,
            s4Done: 1,
            s5Done: 0,
            s6Done: 0,
            fB1: 0,
            fB2: 0,
            fB3: 0,
            miniGame: 0,
        },
        myCount: 3,

        round: 4,
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


    var generateStage4 = function() {

        // node.emit(goup);

        // DEBUG
        tool.debug.showMainData(mainData);

        // rearranges the sortedArray so that the left group is the subject's group
        tool.rearrangeGroupOrder(mainData);

        // DEBUG
        tool.debug.showMainData(mainData);

        // determines the group index for both original sort and rearranged sort
        tool.calculateMyOriginalGroupIndex(mainData);

        // rearrange all the data if the sortedArray is rearranged
        tool.rearrangeMainData(mainData);

        // DEBUG
        tool.debug.showMainData(mainData);


        // ---------------------------------------------------------------------- //
        // ------------ ACTION AFTER DATA IS REARRANGED / MANIPULATED ----------- //
        // ---------------------------------------------------------------------- //

        // setup.value does nothing with the mainData so far we can pass on
        // previous graphical calculator values to here
        // also for og1-lc we will pass on h/s data etc..
        initialize.values();

        // matches player's node data with the graphics
        setup.fundamentals(mainData);

        // calls all the different setup function using the parameters
        // defined/assigned by setup.fundamentals
        setup.ig();

        // uses map.setup() to pass calculator.globalVariables to map.globalVariables
        // map.setup() -> adjust which icon sets to show given the treatment and group
        //
        // given the setup show the desired stage
        //
        // shows the map with focus action etc...
        map.show.stage('ig');

        // setup the info text displays based on the treatment
        setup.infoBoxText(mainData);

        // setup the info text displays based on tutorial experience
        tool.tutorialSetup(mainData, 's4');

        // set their previous h/s decision
        tool.set.pastHSDecisions(mainData);

        tool.adjust.pastHSDecisions(mainData);


        // NODE COUNTDOWN EMIT BELOW
        var prepare4Decision = function() {

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

                calculator.pointers.wiggleD();
                setTimeout(()=>{
                }, 750)

            }, 1000)


            $('#boxbox-B').css({'margin-bottom':'58px'});
            // $('#boxbox-B').css({'transition':'0.5s', 'margin-bottom':'-85px'});
            $('#box-B-9').css({'transition':'0.5s'});
            box.transition('', 'B-9', 0, 0, 1, 750);

            setTimeout(()=>{

                calculator.globalVariable.IG_enervate2LeaderLeft = false;

                $('#box-B-9').css({'transition':'0.5s'});
                box.transition('B-9', 'B-10', 0, 0, 1, 750);

                setTimeout(()=>{
                    calculator.pointers.IG_dSwitch = false;
                }, 3500)

                setTimeout(()=>{

                    // node.emit('countDown', countDownTime);

                    bb.activators.followerContest = true;

                    $('#boxbox-B').css({'margin-bottom':'20px'});
                    // $('#boxbox-B').css({'transition':'0.5s', 'margin-bottom':'-85px'});
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
                        tool.var.submitTutorialLockActive = false;
                        $('.IG_submitButtonBottom').css({'transform':'scale(1)'})
                    }, 10000)

                }, 4000)

            }, 4000)

        }


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

            setTimeout(()=>{
                box.button.show('A-1');
            }, 1500)

        }, 1500)


        listener = {};
        activator = {};


        $('#btn-A-1').click(function() {

            box.transition('A-1', 'A-2', 0, 0, 1, 750);

            if(calculator.quickTutorial) {
                $('.risingCrown').css({'margin-top':'-106px', 'opacity':'1'});
            }

            setTimeout(()=>{
                box.button.show('A-2');
            }, 2000)

            $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-375px'});

            map.wiggle.active = false;
            map.opacity.main([0,1,0], 0.75);
            $('.arrowTopIconToIG').css({'transition':'0.75s', 'opacity':'0'});
            map.opacity.OG1Results(0,0.75)
            $('.IG').css({'transition':'0.75s', 'transform':'scale(1.75) scaleX(1.15)',
            'margin-top':'117px', 'margin-left':'-200px'});

            setTimeout(()=>{
                $('.IG').css({'transition':'1.5s', 'opacity':'0'})
                calculator.section.all.IG_opacity(1,1.5);
                $('.IG_contestSection').css({'transition':'0s', 'transform':'scaleY(0)'});
                $('.IG_decisionWrapL').css({'display':'none'});
            }, 750)

        });

        listener.a3 = false;

        $('#btn-A-2').click(function() {

            calculator.globalVariable.IG_enervate2LeaderLeft = false;

            if(!calculator.quickTutorial) {

                box.transition('A-2', 'A-201', 0, 0, 1, 750);

                $('.risingCrown').css({'margin-top':'-106px', 'opacity':'1'});

                setTimeout(()=>{
                    $('#boxbox-A').css({'transition':'0.5s', 'margin-top':'-55px'});
                }, 750)


                setTimeout(()=>{
                    box.button.show('A-201');
                }, 2000)

            } else {

                $('.dynamicCircle-big, .YAH-arrow-IG-big, .YAH-text-IG-big').css({'transition':'0.75s', 'opacity':'0'});
                $('.dynamicCircle-small, .YAH-arrow-IG-small, .YAH-text-IG-small').css({'transition':'0.75s', 'opacity':'0'});
                $('.dynamicCircle-normal, .YAH-arrow-IG-normal, .YAH-text-IG-normal').css({'transition':'0.75s', 'opacity':'0'});

                box.transition('A-2', 'A-3', 0, 0, 1, 750);

                calculator.globalVariable.IG_hsWrapActive = true;

                setTimeout(()=>{
                    $('.lfpd, .rfpd').css({'transition':'2s', 'opacity':'1'});
                }, 750)


                setTimeout(()=>{
                    $('#boxbox-A').css({'transition':'0.5s', 'margin-top':'-55px'});
                    $('#boxwrap-A-3').css({'margin-top':'20px'});
                }, 750)


                setTimeout(()=>{
                    listener.a3 = true;
                }, 500)


                setTimeout(()=>{
                    box.button.show('A-3');
                }, 2750)

            }

            setTimeout(()=>{
                map.move.insideDecisionSlider2();
            }, 3000)

        })

        $('#btn-A-201').click(function() {

            calculator.globalVariable.IG_enervate2LeaderLeft = false;

            $('.dynamicCircle-big, .YAH-arrow-IG-big, .YAH-text-IG-big').css({'transition':'0.75s', 'opacity':'0'});
            $('.dynamicCircle-small, .YAH-arrow-IG-small, .YAH-text-IG-small').css({'transition':'0.75s', 'opacity':'0'});
            $('.dynamicCircle-normal, .YAH-arrow-IG-normal, .YAH-text-IG-normal').css({'transition':'0.75s', 'opacity':'0'});

            box.transition('A-201', 'A-202', 0, 0, 1, 750);

            setTimeout(()=>{
                $('#boxbox-A').css({'transition':'0.5s', 'margin-top':'-60px'});
            }, 750)

            setTimeout(()=>{
                box.button.show('A-202');
            }, 2000)

        })

        $('#btn-A-202').click(function() {

            calculator.globalVariable.IG_enervate2LeaderLeft = false;

            box.transition('A-202', 'A-3', 0, 0, 1, 750);

            calculator.globalVariable.IG_hsWrapActive = true;
            setTimeout(()=>{
                $('.lfpd, .rfpd').css({'transition':'2s', 'opacity':'1'});
            }, 750)

            setTimeout(()=>{
                listener.a3 = true;
            }, 500)

            setTimeout(()=>{
                $('#boxbox-A').css({'transition':'0.5s', 'margin-top':'-55px'});
                $('#boxwrap-A-202').css({'margin-top':'0px'});
            }, 750)


            setTimeout(()=>{
                box.button.show('A-3');
            }, 2000)

        })

        $('#btn-A-3').click(function() {

            calculator.globalVariable.IG_enervate2LeaderLeft = false;

            if(!calculator.quickTutorial) {

                box.transition('A-3', 'A-301', 0, 0, 1, 750);

                setTimeout(()=>{
                    $('#boxbox-A').css({'transition':'0.75s', 'margin-top':'-95px'});
                }, 750)

                setTimeout(()=>{
                    box.button.show('A-301');
                    $('.IG_decisionWrapL').css({'display':'flex'});
                }, 2000)

            } else {

                prepare4Decision();

            }


        })

        $('#btn-A-301').click(function() {

            box.transition('A-301', 'A-4', 0, 0, 1, 750);

            setTimeout(()=>{
                $('#boxbox-A').css({'transition':'0.75s', 'margin-top':'-40px'});
            }, 750)

            setTimeout(()=>{
                calculator.section.decision.leader.IG_opacity(1,1);
                // setTimeout(()=>{
                //     calculator.pointers.wiggleD();
                // }, 750)
            }, 1250)

            setTimeout(()=>{
                calculator.activateDSlider = true;
            }, 3000)


            setTimeout(()=>{
                box.button.show('A-4');
            }, 2000)

        })

        listener.a5 = false;
        listener.a6 = false;

        $('#btn-A-4').click(function() {

            box.transition('A-4', 'A-5', 0, 0, 1, 750);

            listener.a5 = true;

            $('.outcomeWrap').css({'display':'flex'});
            setTimeout(()=>{
                calculator.IG_setPayoffTextFollower(efo1);
            }, 500)
            setTimeout(()=>{
                $('.outcomeWrap').css({'transition':'1s', 'filter':'opacity(1)', 'opacity':'1'});
            }, 1500)

            setTimeout(()=>{
                calculator.pointers.wiggleD();
            }, 750)

        })

        $('#btn-A-5').click(function() {

            box.transition('A-5', 'A-6', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('A-6');
                $('.IG_contestSection').css({'transform':'scale(0)'});
            }, 2000)

        })

        $('#btn-A-6').click(function() {

            box.transition('A-6', '', 0, 0, 1, 0);

            $('.IG_generalMarginBox').css({'transition':'0.7s', 'margin-top':'-275px'});

            setTimeout(()=>{

                box.transition('', 'B-7', 0, 0, 1, 0);
                $('#boxbox-B').css({'margin-bottom':'58px'});

                setTimeout(()=>{
                    box.button.show('B-7');
                }, 2000)

            }, 750)

            setTimeout(()=>{
                $('.IG_contestSection').css({'transition':'1s', 'transform':'scale(1)'});
                calculator.section.all.IG_opacity(1, 1);
            }, 250)

        })

        $('#btn-B-7').click(function() {

            box.transition('B-7', 'B-8', 0, 0, 1, 750);

            setTimeout(()=>{
                calculator.pointers.IG_activate([0, 1]);
            }, 750)

            setTimeout(()=>{
                box.button.show('B-8');
            }, 2000)

        })

        $('#btn-B-8').click(function() {

            box.transition('B-8', 'B-9', 0, 0, 1, 750);

            $('#boxbox-B').css({'transition':'0.5s', 'margin-bottom':'-85px'});

            calculator.pointers.IG_activate([0, 0]);

            setTimeout(()=>{
                $('.IG_contestSection').css({'transition':'0.5s', 'transform-origin':'center', 'transform':'scale(0)'});
            }, 1000)


            setTimeout(()=>{
                box.button.show('B-9');
            }, 2000)

        })

        $('#btn-B-9').click(function() {

            calculator.globalVariable.IG_enervate2LeaderLeft = false;

            $('#box-B-9').css({'transition':'0.5s'});

            box.transition('B-9', 'B-10', 0, 0, 1, 750);

            $('.leftFollowerPastDecision, .rightFollowerPastDecision').css({'transition':'0.75s', 'opacity':'0.1'});

            setTimeout(()=>{
                box.button.show('B-10');
            }, 2000)

            // main pointer here

        })



        $('#btn-B-10').click(function() {

            // node.emit('countDown', countDownTime);

            calculator.globalVariable.IG_enervate2LeaderLeft = false;


            $('#boxbox-B').css({'margin-bottom':'20px'});
            box.transition('B-10', '', 0, 0, 1, 0);

            setTimeout(()=>{
                $('.IG_contestSection').css({'transition':'0.5s', 'transform':'scale(1)'});
            }, 500)

            setTimeout(()=>{

                bb.activators.followerContest = true;

                calculator.section.decision.leader.IG_opacity(1,1);
                $('.outcomeWrap').css({'transition':'1s', 'filter':'opacity(1)', 'opacity':'1'});
                $('.outcomeWrap').css({'transition':'2s'});

                setTimeout(()=>{
                    $('.IG_mapButtonBottom, .IG_infoButtonBottom').css({'transform':'scale(1)'});
                }, 1500)

                setTimeout(()=>{
                    tool.var.submitTutorialLockActive = false;
                    $('.IG_submitButtonBottom').css({'transform':'scale(1)'})
                }, 10000)

                calculator.pointers.wiggleD();
            }, 0)

            // main pointer here
            setTimeout(()=>{
                calculator.activateDSlider = true;
            }, 750)

        })


        $('#btn-A-007').click(function() {

            box.transition('A-007', '', 0, 0, 1, 0);

        })



        //----------------------------------------------------------------------------//
        //--------------------------------- HOVER ------------------------------------//
        //----------------------------------------------------------------------------//

        box.infoB101HoverActive = true;
        $('#btn-B-101').hover(
            function() {

                $('.ctGhost').css({'transition':'0.5s', 'margin-top' : '81px',
                'transform':'rotate(1turn)', 'opacity':'0'})

                calculator.titles.hs.show();
                calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.7,0,1], 0.5);

            },
            function() {

                if(box.infoB101HoverActive) {

                    $('.ctGhost').css({'transition':'0.5s', 'margin-top' : '37px',
                    'transform':'rotate(1turn)', 'opacity':'1'});

                    calculator.titles.hs.hide();
                    calculator.section.hs.opacity.SFiALiFiS([0.5,0.5,1,1,1,0], 0.5);

                }

            }
        )

        $('.IG_wrapMid').hover(
            function() {
                if(listener.a3) {
                    listener.a3 = false;
                    box.button.show('A-3');
                }
            }
        )


        //----------------------------------------------------------------------------//
        //--------------------------------- CHANGE -----------------------------------//
        //----------------------------------------------------------------------------//

        //  leader's decision slider
        $('#IG_dSliderL').change(function() {

            //---------------------------------------//
            //----- A-5 INFO BOX VALUE LISTENER -----//
            //---------------------------------------//

            if(listener.a5) {

                listener.a5 = false;

                setTimeout(()=>{

                    box.transition('A-5', 'A-6', 0, 0, 1, 750);

                    setTimeout(()=>{
                        $('.netPayoffIndicatorCicrle').css({'opacity':'1'})
                    }, 750)

                    $('.IG_contestSection').css({'transition':'1s', 'opacity':'0'});

                    listener.a6 = true;

                    setTimeout(()=>{
                        calculator.pointers.wiggleD();
                    }, 2000)

                    setTimeout(()=>{
                        // box.button.show('A-6');
                        $('.IG_contestSection').css({'transform':'scaleY(1)'});
                    }, 2000)

                }, 1000)

            }

            //---------------------------------------//
            //----- A-6 INFO BOX VALUE LISTENER -----//
            //---------------------------------------//

            if(listener.a6) {

                listener.a6 = false;

                setTimeout(()=>{

                    box.transition('A-6', '', 0, 0, 1, 0);

                    $('.IG_generalMarginBox').css({'transition':'0.7s', 'margin-top':'-275px'});

                    $('.netPayoffIndicatorCicrle').css({'opacity':'0'})

                    setTimeout(()=>{

                        box.transition('', 'B-7', 0, 0, 1, 0);
                        $('#boxbox-B').css({'margin-bottom':'58px'});

                        setTimeout(()=>{
                            $('.IG_contestSection').css({'transition':'1s', 'opacity':'1'});
                        }, 250)

                        setTimeout(()=>{
                            box.button.show('B-7');
                        }, 2000)

                    }, 750)



                }, 2000)

            }




        })


        //----------------------------------------------------------------------------//
        //----------------------------- SUBMIT BUTTON --------------------------------//
        //----------------------------------------------------------------------------//

        $('#IG_submitButtonBottom').click(function() {

            if(!tool.var.submitTutorialLockActive) {

                decisionSubmitted = true;

                s4DoneUpdated = 1;

                var msg = {
                    decision: [efo1],
                    stage: 4,
                    tutoDone: s4DoneUpdated,
                    bb: {
                        stage: 4,
                        dynamic: bb.data.followerContest.dynamic,
                        static: bb.data.followerContest.static
                    }
                }

                console.log(msg);
                console.log(bb.data.followerContest.dynamic);

                // emitting decision also sends ready signal from the client decision listener
                // node.emit('HTML-decision', msg);

                // ---------------------------------------- //
                // -------------   STAGE 4 ---------------- //
                // ------------ WAITING SETUP ------------- //
                // ---------------------------------------- //
                // ---------------------------------------- //
                calculator.lock.IG_activate([1,0]);
                calculator.section.decision.leader.IG_opacity(0);
                $('.outcomeWrap').css({'transition':'0.5s', 'opacity':'0'});
                $('.IG_generalMarginBox').css({'transition':'0.5s',
                'transform':'scale(1)'});
                $('.norp').css({'transition':'0s', 'filter':'opacity(0)'});

                setTimeout(()=>{

                    calculator.decisionSlider.leader.IG_disable();

                    $('.outcomeWrap').css({'transition':'0s', 'margin-top':'10px',
                    'flex-direction':'row-reverse'});
                    $('.pleaseWait').css({'display':'block', 'position':'static'});
                    $('.norp').appendTo('.pleaseWait');
                    $('.norp').css({'position':'static'});


                    setTimeout(()=>{

                        $('.outcomeWrap').css({'transition':'0.5s', 'opacity':'1',
                        'transform':'scale(1.5)', 'margin-top':'0px'});

                        $('.pleaseWait').css({'transition':'0.5s', 'opacity':'1'});
                        $('.norp').css({'transition':'0.5s', 'filter':'opacity(1)',
                        'opacity':'1'});
                        flowLoad(1);

                    }, 100)

                }, 550)


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


    generateStage4();

}
