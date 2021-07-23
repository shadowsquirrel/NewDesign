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
    //     generateStage6();
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
    //         // we are counting it twice I will omit this one and keep the update
    //         // done in the logic side
    //         s6DoneUpdated = 1;
    //
    //         var msg = {
    //             decision: [efo],
    //             stage: 6,
    //             tutoDone: s6DoneUpdated,
    //             bb: {
    //                 stage: 6,
    //                 dynamic: bb.data.leaderContest.dynamic,
    //                 static: bb.data.leaderContest.static
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
        myRound: 1,
        myTutorial: {
            s1Done: 1,
            s2Done: 0,
            s3Done: 0,
            s4Done: 0,
            s5Done: 0,
            s6Done: 0,
            miniGame: 0,
        },

        myCount: 1,

        sortedArray: [0,2,5,4,1,3],
        treatment: [0,1],

        s2: [ [ [10,0], [0,10]], [ [15,0], [0,5] ] ],
        // s2: [ [[0,20], [10,0]], [[0,5], [10,0]] ],
        s3: [ [800, 800], [true, false] ],
        // s3: [ [200, 100], [false, true] ],
        // s4: [ [ [5, 1], [true, false], [50, 100] ], [ [5, 1], [false, true], [51, 101] ] ],
        s4: [ [ [5, 1], [false, true], [50, 100] ], [ [5, 1], [true, false], [51, 101] ] ],
        s5:  [ [ [30,30], [0,0]], [ [0,0], [10,20] ] ],
        s6: [ Array(2), Array(2) ],
    }
    // ------------------------ //
    // ------------------------ //
    // ------------------------ //




    var generateStage6 = function() {

        // rearranges the sortedArray so that the left group is the subject's group
        tool.rearrangeGroupOrder(mainData);

        // determines the group index for both original sort and rearranged sort
        tool.calculateMyOriginalGroupIndex(mainData);

        tool.rearrangeMainData(mainData);

        // Define parameters to be used by data usage and map usage
        tool.determineS3Winner();

        tool.determineS4Winner();

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
        if(tool.ourGroupWonOG1) {

            map.show.stage('og2_og1Won');

        } else {

            map.show.stage('og2_og1Lost');

        }

        // setup the countdown time depending on the round at further rounds less
        // time
        determineTime(mainData);


        bb.activators.leaderContest = true;



        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//
        //----------------------- INFO BOX BUTTON ACTION --------------------------//
        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//


        // node.emit('goup');



        // show the first info box -> info box A-1
        setTimeout(()=>{

            box.transition('', 'A-1', 1, 0, 1, 0);

            setTimeout(()=>{
                box.button.show('A-1');
            }, 1500)

        }, 6500)


        listener = {};
        activator = {};



        $('#btn-A-1').click(function() {

            // causes trouble let's kill it initially
            $('.outcomeWrap').css({'transition':'0s', 'filter':'opacity(0)'});

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('A-1', '', 0, 0, 1, 0);

            // no button setup for leader calculator
            var someString = '.infoButtonBottom, .mapButtonBottom, ' +
            '.submitButtonBottom, .calcButtonBottom';
            $(someString).css({ 'transform-origin':'top',
            'transform':'scale(0)'});


            // kill/hide the arrow YOH animation
            map.wiggle.active = false

            // visually move the map
            setTimeout(()=>{

                // isoalte og1 display
                map.opacity.main([0,0,1],0.5)
                $('.arrowsToOG1IconResults, .arrowsToOG2').css({'transition':'0.5s',
                'opacity':'0'})


                // move the map
                $('.sexplain').css({'transition':'1s',
                'margin-top':'85px', 'margin-left':'-313px', 'transform':'scaleX(1.11)'});

                // kill the space of initial map div
                // map position is absolute so we can move it
                $('.initialMapDiv').css({'transition':'0s', 'margin-bottom':'-275px'});
                $('#boxbox-A').css({'margin-top':'-11px'});

                // kill the initial info box box open a new one and adjust the
                // calculator main div accordingly
                setTimeout(()=>{ // at 750
                    $('#boxbox-B').css({'display':'block'});
                    $('#boxbox-A').css({'display':'none'});
                    $('.generalMarginBox').css({'transition':'0s', 'margin-top':'35px'})
                }, 500)

            }, 250)


            setTimeout(()=>{

                // show calculator
                calculator.section.all.opacity(1, 2);

                // initially hide the power ratio
                calculator.section.power.opacity.bar(0, 0)

                // transition into the calcultor by hiding the map
                setTimeout(()=>{
                    map.hideMap(1, 2)
                }, 250)


                setTimeout(()=>{
                    $('.sexplain').appendTo($('.mapInfoWrap2'));
                    $('.sexplain').css({'margin-left':'-54px',
                    'opacity':'1', 'transform':'scale(1)', 'margin-top':'50px', 'position':'static'});
                    $('.arrowsToOG1IconResults, .arrowsToOG2').css({'transition':'0.5s',
                    'opacity':'0.7'})
                    map.opacity.inside([1,1,1])
                    map.opacity.main([0.7,0.7,1]);
                }, 3500)

            }, 1000)


            // show info box
            setTimeout(()=>{

                // id1, id2, transform, addSpaceBetween, hideButton, delay
                box.transition('', 'B-101', 0, 0, 1, 0);

                calculator.lock.activate([0, 0, 1, 1, 1, 1]);
                calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);

                setTimeout(()=>{

                    box.button.show2('B-101');

                    calculator.globalVariable.hover.fMadeInfo = true;

                }, 20)

                $('.generalMarginBox').css({'transition':'1s'});

            }, 1500)

        });

        // ------ NODE ACTION BELOW ------- //
        // node counter inside !
        var prepare4Decision = function() {

            // node.emit('countDown', countDownTime);

            calculator.pointers.dSwitch = false;

            $('.decisionWrapWrap').css({'z-index':'100000000000'});

            listener.d12 = false;

            calculator.globalVariable.leaderHoverBlock = false;

            tool.active.sparkle = false;

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('D-13', '', 0, 0, 1, 0);
            $('#boxbox-D').css({'margin-bottom':'-60px'})
            setTimeout(()=>{
                $('#boxbox-D').css({'display':'none'});
            }, 350)

            calculator.globalVariable.hover.cMinimize = 1;
            calculator.globalVariable.hover.hsMinimize = 1;
            calculator.globalVariable.hover.hsIcons = 1;
            calculator.globalVariable.hover.hsMainTitle = 1;
            calculator.globalVariable.hover.hsGhostTitle = 1;
            calculator.globalVariable.hover.leaderContestAdjustments = 1;

            // -------------------- show calculator --------------------- //
            setTimeout(()=>{

                calculator.section.contest.display.sliders(true);
                $('.generalMarginBox').css({'height':'495px'});
                $('.decisionWrapL').css({'transition':'1s', 'margin-top':'-17px'});
                calculator.section.contest.opacity.sliders(1,0.5);

                setTimeout(()=>{
                    calculator.section.contest.minimize(0);
                    calculator.section.contest.opacity.sliders(1,0.7);
                    calculator.questions.activate.all([0, 0, 0, 1, 0, 0]);

                    $('.outcomeWrap').css({'transition':'0.7s',
                    'transform':'scale(1.1)', 'margin-top':'-44px',
                    'filter':'opacity(1)', 'opacity':'1'});
                }, 50)

                $('.infoButtonBottom, .mapButtonBottom').css({ 'transform-origin':'top',
                'transform':'scale(1)'});

                setTimeout(()=>{
                    $('.submitButtonBottom').css({ 'transform-origin':'top',
                    'transform':'scale(1)'});
                }, 10000)


            }, 500)

        }

        listener.d12 = true;
        // COME BACK HERE AND ADD THE NO TUTORIAL ACTION
        $('#btn-B-101').click(function() {

            box.infoB101HoverActive = false;

            tool.active.sparkle = false;

            $('#boxwrap-B-101').css({'transform':'scale(0)'})


            $('.OG1l1CALCYAH, .OG1l1CALCYAHT').css({'transition':'0.2s', 'opacity':'0'});


            $('.ctGhost').css({'transition':'0.5s', 'margin-top' : '0px',
            'transform':'rotateX(1turn)', 'opacity':'0'})


            calculator.titles.hs.show();
            calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,1], 0.5);


            setTimeout(()=>{
                calculator.AAHS_og2(750);
            }, 750)

            setTimeout(()=>{

                // ------------------- kill info box b ---------------------- //
                $('#boxbox-B').css({'transition':'0.5s', 'margin-top':'-25px'});
                setTimeout(()=>{
                    $('#boxbox-B').css({'display':'none'});
                }, 500)

                // -------------------- show power bar ---------------------- //
                setTimeout(()=>{
                    calculator.section.power.opacity.bar(1, 0.65);
                    calculator.section.contest.opacity.sliders(0,0);
                }, 150)

                // ----------- minimize hs results and power bar ------------ //
                setTimeout(()=>{

                    // enable decision slider
                    calculator.decisionSlider.leader.enable();

                    // minimize help sabotage section and open its hovers
                    calculator.section.hs.minimize(1);
                    calculator.titles.hs.hide();
                    calculator.titles.hs.ghost.show();
                    calculator.section.hs.set.iconPosition('bottom');
                    calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                    $('.ctTop').css({'margin-top':'0px'})

                    // kill power bar legends
                    calculator.section.power.display.barLegend(0);

                    calculator.globalVariable.hover.cMinimize = 0;
                    calculator.globalVariable.hover.hsMinimize = 0;
                    calculator.globalVariable.hover.hsIcons = 0;
                    calculator.globalVariable.hover.hsMainTitle = 0;
                    calculator.globalVariable.hover.hsGhostTitle = 0;
                    calculator.globalVariable.hover.leaderContestAdjustments = 0;

                    // a tiny bit of top space through some unused div
                    $('.initialMapDiv').css({'transition':'0.7s', 'margin-bottom':'-266px'});

                    // minimize calculator set up the triangle perspective
                    $('.generalMarginBox').css({'transition':'0.7s',
                    'transform':'scale(0.815)', 'margin-top':'-100px', 'height':'325px'});


                    $('#boxbox-D').css({'display':'block', 'margin-top':'-20px'});

                    $('.decisionWrapL').css({'transition':'1s', 'margin-top':'-17px'});

                }, 2000)

                setTimeout(()=>{
                    // adjust the final info box setup and outcomeWrap place accordingly
                    $('#boxbox-D').css({'transition':'0.2s',
                    'margin-top':'-40px', 'margin-bottom':'-63px'});

                    $('.generalMarginBox').css({'height':'495px'});
                }, 2010)

                // ------------ show final instruction info box ------------- //
                setTimeout(()=>{

                    calculator.globalVariable.leaderHoverBlock = true;

                    calculator.pointers.wiggleD();

                    box.transition('', 'D-12', 0, 0, 1, 0);

                    calculator.section.contest.display.sliders(true);
                    $('.generalMarginBox').css({'height':'495px'});
                    $('.decisionWrapL').css({'transition':'1s', 'margin-top':'-17px'});
                    calculator.section.contest.opacity.sliders(0,0);

                    // show button and activate hovers
                    setTimeout(()=>{

                        // box.button.show('D-12');
                        box.transition('D-12', 'D-13', 0, 0, 1, 750);

                        setTimeout(()=>{

                            prepare4Decision();

                        }, 4000)

                    }, 4000)

                }, 2020)

                // --------------- show leader decision slider -------------- //
                setTimeout(()=>{

                    calculator.section.decision.leader.opacity(1,1);

                }, 2030)

                // ------------------- show outcome Wrap -------------------- //
                setTimeout(()=>{

                    $('.outcomeWrap').css({'display':'flex'})
                    calculator.setPayoffTextLeader(100);
                    setTimeout(()=>{
                        $('.outcomeWrap').css({'transition':'0.7s',
                        'transform':'scale(1.1)', 'margin-top':'-44px',
                        'filter':'opacity(0)', 'opacity':'0'});
                    }, 100)

                    $('.generalMarginBox').css({'height':'495px'});

                }, 3000)

            }, 3000)

        });


        $('#btn-D-12').click(function() {

            listener.d12 = true;

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('D-12', 'D-13', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('D-13');
                tool.active.sparkle = true;
                tool.sparkle('D-13');
            }, 2000)


            setTimeout(()=>{

                if(listener.d12) {

                    $('.decisionWrapWrap').css({'z-index':'100000000000'});

                    listener.d12 = false;

                    calculator.globalVariable.leaderHoverBlock = false;

                    tool.active.sparkle = false;

                    // id1, id2, transform, addSpaceBetween, hideButton, delay
                    box.transition('D-13', '', 0, 0, 1, 0);
                    $('#boxbox-D').css({'margin-bottom':'-60px'})
                    setTimeout(()=>{
                        $('#boxbox-D').css({'display':'none'});
                    }, 350)

                    calculator.globalVariable.hover.cMinimize = 1;
                    calculator.globalVariable.hover.hsMinimize = 1;
                    calculator.globalVariable.hover.hsIcons = 1;
                    calculator.globalVariable.hover.hsMainTitle = 1;
                    calculator.globalVariable.hover.hsGhostTitle = 1;
                    calculator.globalVariable.hover.leaderContestAdjustments = 1;

                    // -------------------- show calculator --------------------- //
                    setTimeout(()=>{

                        calculator.section.contest.display.sliders(true);
                        $('.generalMarginBox').css({'height':'495px'});
                        $('.decisionWrapL').css({'transition':'1s', 'margin-top':'-17px'});
                        calculator.section.contest.opacity.sliders(1,0.5);

                        setTimeout(()=>{
                            calculator.section.contest.minimize(0);
                            calculator.section.contest.opacity.sliders(1,0.7);
                            calculator.questions.activate.all([0, 0, 0, 1, 0, 0]);

                            $('.outcomeWrap').css({'transition':'0.7s',
                            'transform':'scale(1.1)', 'margin-top':'-44px',
                            'filter':'opacity(1)', 'opacity':'1'});
                        }, 50)

                        $('.infoButtonBottom, .mapButtonBottom').css({ 'transform-origin':'top',
                        'transform':'scale(1)'});

                        setTimeout(()=>{
                            $('.submitButtonBottom').css({ 'transform-origin':'top',
                            'transform':'scale(1)'});
                        }, 10000)


                    }, 250)

                }

            }, 6000)


        });

        // NODE NODE NODE NODE NODE NODE
        $('#btn-D-13').click(function() {

            tool.var.submitTutorialLockActive = false;

            $('.decisionWrapWrap').css({'z-index':'100000000000'});

            calculator.globalVariable.leaderHoverBlock = false;
            tool.active.sparkle = false;
            listener.d12 = false;

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('D-13', '', 0, 0, 1, 0);
            $('#boxbox-D').css({'margin-bottom':'-60px'})
            setTimeout(()=>{
                $('#boxbox-D').css({'display':'none'});
            }, 350)

            calculator.globalVariable.hover.cMinimize = 1;
            calculator.globalVariable.hover.hsMinimize = 1;
            calculator.globalVariable.hover.hsIcons = 1;
            calculator.globalVariable.hover.hsMainTitle = 1;
            calculator.globalVariable.hover.hsGhostTitle = 1;
            calculator.globalVariable.hover.leaderContestAdjustments = 1;

            // -------------------- show calculator --------------------- //
            setTimeout(()=>{

                calculator.section.contest.display.sliders(true);
                $('.generalMarginBox').css({'height':'495px'});
                $('.decisionWrapL').css({'transition':'1s', 'margin-top':'-17px'});
                calculator.section.contest.opacity.sliders(1,0.5);

                setTimeout(()=>{
                    calculator.section.contest.minimize(0);
                    calculator.section.contest.opacity.sliders(1,0.7);
                    calculator.questions.activate.all([0, 0, 0, 1, 0, 0]);

                    $('.outcomeWrap').css({'transition':'0.7s',
                    'transform':'scale(1.1)', 'margin-top':'-44px',
                    'filter':'opacity(1)', 'opacity':'1'});
                }, 50)

                $('.infoButtonBottom, .mapButtonBottom').css({ 'transform-origin':'top',
                'transform':'scale(1)'});

                setTimeout(()=>{
                    $('.submitButtonBottom').css({ 'transform-origin':'top',
                    'transform':'scale(1)'});
                }, 10000)


            }, 250)

        });



        //----------------------------------------------------------------------------//
        //--------------------------------- HOVER ------------------------------------//
        //----------------------------------------------------------------------------//

        box.infoB101HoverActive = true;
        $('#btn-B-101').hover(
            function() {

                $('.ctGhost').css({'transition':'0.5s', 'margin-top' : '81px',
                'transform':'rotate(1turn)', 'opacity':'0'})

                calculator.titles.hs.show();
                calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,1], 0.5);

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


        //----------------------------------------------------------------------------//
        //--------------------------------- CHANGE -----------------------------------//
        //----------------------------------------------------------------------------//

        //  leader's decision slider
        $('#dSliderL').change(function() {

            //---------------------------------------//
            //----- C-2 INFO BOX VALUE LISTENER -----//
            //---------------------------------------//

            if(listener.c2) {

                listener.c2 = false;

                setTimeout(()=>{

                    box.transition('C-2', 'C-3', 0, 0, 1, 750);

                    setTimeout(()=>{
                        calculator.pointers.wiggleD();
                    }, 750)

                    setTimeout(()=>{
                        listener.c3 = true;
                    }, 750)

                    setTimeout(()=>{
                        // box.button.show('C-3');
                    }, 2000)

                    if(calculator.quickTutorial) {
                        $('.outcomeWrap').css({'transition':'1s',
                        'transform':'scale(1.1)', 'margin-top':'-18px', 'filter':'opacity(1)'});
                    }

                }, 2000)

            }

            //---------------------------------------//
            //----- C-3 INFO BOX VALUE LISTENER -----//
            //---------------------------------------//

            if(listener.c3) {


                listener.c3 = false;


                if(!calculator.quickTutorial) {

                    setTimeout(()=>{

                        box.transition('C-3', 'C-4', 0, 0, 1, 750);

                        setTimeout(()=>{
                            $('.outcomeWrap').css({'display':'flex'});
                            setTimeout(()=>{
                                tool.enervatePayoffTitlesLeader(1);
                            }, 100)
                        }, 750)

                        setTimeout(()=>{
                            box.button.show('C-4');
                        }, 3000)

                    }, 1500)

                } else {

                    // id1, id2, transform, addSpaceBetween, hideButton, delay
                    box.transition('C-3', '', 0, 0, 1, 0);
                    calculator.section.contest.opacity.sliders(0,0);

                    // hide power bar legends
                    calculator.section.power.opacity.barLegend(0,0.7)

                    // kill info box wrap B
                    $('#boxbox-C').css({'transition':'0.7s', 'margin-top':'-142px'});

                    // adjust leader decision slider top space
                    $('.decisionWrapL').css({'margin-top':'135px'});

                    setTimeout(()=>{
                        $('#boxbox-C').css({'display':'none'});
                        // kill power bar legends
                        calculator.section.power.display.barLegend(0);


                        calculator.globalVariable.hover.cMinimize = 1;
                        calculator.globalVariable.hover.hsMinimize = 1;
                        calculator.globalVariable.hover.hsIcons = 1;
                        calculator.globalVariable.hover.hsMainTitle = 1;
                        calculator.globalVariable.hover.hsGhostTitle = 1;
                        calculator.globalVariable.hover.leaderContestAdjustments = 1;

                        calculator.section.contest.display.sliders(true);
                        $('.decisionWrapL').css({'transition':'1s', 'margin-top':'-17px'});

                        setTimeout(()=>{
                            calculator.section.contest.minimize(0);
                            calculator.section.contest.opacity.sliders(1,0.7);
                            calculator.questions.activate.all([0, 0, 0, 1, 0, 0]);
                        }, 50)

                        $('#boxbox-D').css({'display':'block', 'margin-top':'-20px'});

                    }, 700)

                    setTimeout(()=>{
                        $('.outcomeWrap').css({'transition':'0.5s', 'filter':'opacity(0)'})
                    }, 500)

                    setTimeout(()=>{

                        $('#boxbox-D').css({'transition':'0.2s', 'margin-top':'-40px'});

                        box.transition('', 'D-1', 0, 0, 1, 0);

                        setTimeout(()=>{
                            box.button.show('D-1');
                        }, 2000)

                    }, 750)

                }


            }


        })


        //----------------------------------------------------------------------------//
        //----------------------------- SUBMIT BUTTON --------------------------------//
        //----------------------------------------------------------------------------//

        $('#submitButtonBottom').click(function() {

            if(!tool.var.submitTutorialLockActive) {

                decisionSubmitted = true;

                s6DoneUpdated = 1;

                var msg = {
                    decision: [efo],
                    stage: 6,
                    tutoDone: s6DoneUpdated,
                    bb: {
                        stage: 6,
                        dynamic: bb.data.leaderContest.dynamic,
                        static: bb.data.leaderContest.static
                    }
                }

                // emitting decision also sends ready signal from the client decision listener
                // node.emit('HTML-decision', msg);

                // ---------------------------------------- //
                // -------------   STAGE 6 ---------------- //
                // ------------ WAITING SETUP ------------- //
                // ---------------------------------------- //
                // ---------------------------------------- //

                calculator.lock.activate([1, 0, 1, 1, 1, 1]);
                $('.lockedCover_l1').css({'z-index':'100'});
                setTimeout(()=>{
                    $('.lockedCover_l1').css({'z-index':'100'});
                }, 500)

                calculator.section.decision.leader.opacity(0);
                $('.outcomeWrap').css({'transition':'0.5s', 'opacity':'0'});


                $('.generalMarginBox').css({'transition':'0.5s',
                'transform':'scale(1)', 'margin-top':'-68px'});
                // calculator.wheel.cruise();

                $('.norp').css({'transition':'0s', 'filter':'opacity(0)'});

                setTimeout(()=>{

                    calculator.decisionSlider.leader.disable();

                    $('.outcomeWrap').css({'transition':'0s', 'margin-top':'10px',
                    'flex-direction':'row-reverse'});
                    $('.pleaseWait').css({'display':'block', 'position':'static'});
                    $('.norp').appendTo('.pleaseWait');
                    $('.norp').css({'position':'static'});


                    setTimeout(()=>{

                        $('.outcomeWrap').css({'transition':'0.5s', 'opacity':'1',
                        'transform':'scale(1.5)', 'margin-top':'25px'});

                        $('.pleaseWait').css({'transition':'0.5s', 'opacity':'1'});
                        $('.norp').css({'transition':'0.5s', 'filter':'opacity(1)',
                        'opacity':'1'});
                        flowLoad(1);

                    }, 100)

                }, 550)

                console.log('submit button pressed');
                console.log('effort submitted: ' +  efo);
                console.log('BB: ' + bb.data.leaderContest.dynamic);

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


    generateStage6();

}
