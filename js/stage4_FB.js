// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ----------------           MAINDATA             ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //


let mainData = {};



window.onload = function() {

    adjustWindowSize();

    tool.set.NORP(0)
    setMetaNorp(168, -14, 0.3);
    hideNorp(0);

    // var node = parent.node;


    // ------------------------ //
    // ------ debug data ------ //
    // ------------------------ //
    mainData = {
        myTutorial: {
            s1Done: 1,
            s2Done: 0,
            s3Done: 0,
            s4Done: 0,
            s5Done: 0,
            s6Done: 0,
            miniGame: 0,
        },
        myRound: 4,

        myCount: 1,
        sortedArray: [0,2,5,4,1,3],
        treatment: [1,0],
        s2: [ [ [0,11], [11,0]], [ [0,40], [40,0] ] ],
        // s2: [ [[0,20], [10,0]], [[0,5], [10,0]] ],
        s3: [ [200, 100], [true, false] ],
        // s3: [ [200, 100], [false, true] ],
        s4: [ [ [5, 1], [true, false], [1, 100] ], [ [1, 1], [false, true], [31, 131] ] ],
        s5: [ [Array(6), Array(6)], [Array(6), Array(6)] ],
        s6: [ Array(2), Array(2) ],

    }
    // ------------------------ //
    // ------------------------ //
    // ------------------------ //


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
    //     generateIGFeedback();
    //
    // });


    // we have all ready to spin switch on initially
    // when NORP = 6 (i.e. all players are ready)
    // then spinTheWheel function is executed
    // This function is active only if allReadyToSpin is true
    // once it is activated it turns the allReadyToSpin switch off
    // this way next time (after results are displayed and subjects are
    // asked to proceed again) all players are ready the function is not activated
    var allReadyToSpin = true;

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
    //
    //     // if all are ready
    //     if(msg === 6) {
    //
    //         spinTheWheel();
    //
    //     }
    //
    // })

    var spinTheWheel = function() {

        if(allReadyToSpin) {

            setTimeout(()=>{

                // kill the spin activator switch on NORP listener
                allReadyToSpin = false;

                // hide NORP
                $('.pleaseWait').css({'transition':'0.1s', 'margin-top':'150px',
                'opacity':'0'});

                $('.bottomMapWrap').css({'transition':'0.1s', 'opacity':'0'});

                // kill the norp animation
                // we don't want the spin wheel to be affected by the waiting animation
                // compuational load
                continueFlowing = false;

                var winner;

                // set winner index
                // for wheel object index starts from 1
                // it is either 1 or 2
                // our group won check their group's s4 results
                if(calculator.globalVariable.isIGB) {

                    winner = 1 + setup.s4WinnerIndex;

                } else { // check our group's s4 results

                    winner = 1 + setup.s4WinnerIndex;
                }

                // debug
                console.log('setup.igWinnerFollowerIndex: ' + setup.s4WinnerIndex);
                console.log('winner index for wheel: ' + winner);

                // spin the wheel
                calculator.wheel.IG_spin(winner);

                // --- after wheel stops --- //

                // after the wheel stops (5 seconds of spin)
                setTimeout(()=>{

                    $('.norp').appendTo('.metaNorp');

                    setTimeout(()=>{
                        // move the NORP animation back to the left side of the screen
                        setMetaNorp(168, -14, 0.3);

                        // turn the animation back on again
                        continueFlowing = true;
                        flowLoad(1);
                    }, 100)

                }, 5000)

                setTimeout(()=>{

                    // open just before the spin end the finish stage activation
                    // inside norp listener
                    allReadyToEnd = true;

                }, 4000)

            }, 1000)

        }


    }


    var generateIGFeedback = function() {

        // DEBUG
        tool.debug.showMainData(mainData);

        // rearranges the sortedArray so that the left group is the subject's group
        tool.rearrangeGroupOrder(mainData);

        // DEBUG
        tool.debug.showMainData(mainData);

        // determines the group index for both original sort and rearranged sort
        tool.calculateMyOriginalGroupIndex(mainData);

        console.log(mainData);

        // rearrange all the data if the sortedArray is rearranged
        tool.rearrangeMainData(mainData);

        console.log(mainData);

        // DEBUG
        tool.debug.showMainData(mainData);



        // ---------------------------------------------------------------------- //
        // ------------ ACTION AFTER DATA IS REARRANGED / MANIPULATED ----------- //
        // ---------------------------------------------------------------------- //


        // matches player's node data with the graphics
        setup.fundamentals(mainData);

        // determines which group's IG it is and sets the related indexes/switches
        setup.IGAB(mainData);

        // determines the winner index to be pass on to the wheel object given
        // who is watching and which IG we are in etc...
        setup.s4Winner(mainData);


        // setup.value does nothing with the mainData so far we can pass on
        // previous graphical calculator values to here
        // also for og1-lc we will pass on h/s data etc..
        initialize.values(mainData);

        // calls all the different setup function using the parameters
        // defined/assigned by setup.fundamentals
        setup.ig();

        // uses map.setup() to pass calculator.globalVariables to map.globalVariables
        // map.setup() -> adjust which icon sets to show given the treatment and group
        //
        // given the setup show the desired stage
        //
        // shows the map with focus action etc...
        map.show.stage('ig_fb');

        // setup the info text displays based on the treatment
        setup.infoBoxText(mainData);

        // setup the info text displays based on tutorial experience
        tool.tutorialSetup(mainData, 's4');

        // set their previous h/s decision
        tool.set.pastHSDecisions(mainData);

        tool.adjust.pastHSDecisions(mainData);

        tool.set.NORP(0);
        setMetaNorp(168, -14, 0.3);

        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//
        //----------------------- INFO BOX BUTTON ACTION --------------------------//
        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//


        setup.quickFeedback = undefined;

        if(mainData.myRound > 3) {
            setup.quickFeedback = true;
        } else {
            setup.quickFeedback = false;
        }

        var reverseMapAnimation = function() {

            map.show.bottomTransition(true, 0.5)
            map.opacity.main([0.5,1,0.5], 0.5)

            if(calculator.globalVariable.isIGB) {

                map.opacity.topTransition(0.5, 0.5)
                map.opacity.main([0.7,1,0.7], 0.5);

                $('.bottomBoxLeaderResult, .arrowToBottomIconResults, .arrowBottomIconToIG').css({'transition':'0.5','opacity':'1'});
                $('.IGBottomContestWrap').css({'transition':'0.5s', 'margin-top':'70px', 'margin-left':'0px', 'transform':'scale(1)'});
                $('.IGBottomContestWrap').css({'transition':'0.5s', 'opacity':'1'});

            } else {

                map.opacity.bottomTransition(0.5, 0.5)
                map.opacity.main([0.7,1,0.7], 0.5)

                $('.IGTopContestWrap').css({'transition':'0.5s', 'opacity':'1'});
                $('.topBoxLeaderResult, .arrowToTopIconResults, .arrowTopIconToIG').css({'transition':'0.5','opacity':'1'});
                $('.IGTopContestWrap').css({'transition':'0.5s', 'margin-top':'0px', 'margin-left':'0px', 'transform':'scale(1)'});

            }

        }


        var fastFeedback = function() {

            // -------- A1 TRIGGER --------- //

            setTimeout(()=>{

                var someDelay;
                if(calculator.globalVariable.isIGB) {
                    someDelay = 1250;
                } else {
                    someDelay = 500;
                }

                setTimeout(()=>{

                    map.show.bottomTransition(true, 0.75);

                    if(calculator.globalVariable.isIGB) {
                        map.opacity.topTransition(0.3);
                        map.opacity.main([1,1,0.3], 0.75);
                    }

                    setTimeout(()=>{

                        $('.IGContests').css({'transition':'0.5s', 'opacity':'1'});
                        $('.prizeCrownBlackBottom').css({'transition':'0.5s','opacity':'0'});

                        $('.IGFI_Bottom, .IGFightIconLimeBottom, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'1', 'filter':'opacity(1)'})

                        $('.prizeCrownLimeBottom').css({'transition':'2s', 'margin-top':'-37px'});
                        map.opacity.section([0.1,0.1,0.1], 0.5);

                    }, 500)

                }, someDelay)

                if(calculator.globalVariable.isIGA) {

                    map.animate.YAH_ig();

                    map.show.topTransition(true, 0.75);
                    map.opacity.bottomTransition(0.3, 0.75);
                    map.opacity.OG2Right(1);
                    map.opacity.OG2Left(1)
                    map.opacity.main([1,1,0.3], 0.75);

                    $('.IGFightIconLimeTop').css({'transition':'0.5s',
                    'opacity':'1'});

                    $('.prizeCrownLimeTop').css({'transition':'2s',
                    'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

                    setTimeout(()=>{
                        map.opacity.bottomTransition(0.3, 0.75);
                    }, 500)

                }

            }, 4500)

            // -------- A2 TRIGGER --------- //

            setTimeout(()=>{

                $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-325px'});

                if(calculator.globalVariable.isIGB) {

                    map.show.topTransition(false, 0.5)
                    map.opacity.main([0,1,0], 0.5);

                    $('.bottomBoxLeaderResult, .arrowToBottomIconResults, .arrowBottomIconToIG').css({'transition':'0.5','opacity':'0'});
                    $('.IGBottomContestWrap').css({'transition':'0.75s', 'margin-top':'-75px', 'margin-left':'-50px', 'transform':'scale(1.5) scaleX(1.5)'});

                    setTimeout(()=>{
                        $('.IGBottomContestWrap').css({'transition':'1.5s', 'opacity':'0'});
                    }, 500)


                } else {

                    map.show.bottomTransition(false, 0.5)
                    map.opacity.main([0,1,0], 0.5);

                    $('.topBoxLeaderResult, .arrowToTopIconResults, .arrowTopIconToIG').css({'transition':'0.5','opacity':'0'});
                    $('.IGTopContestWrap').css({'transition':'0.75s', 'margin-top':'135px', 'margin-left':'-50px', 'transform':'scale(1.5) scaleX(1.5)'});

                    setTimeout(()=>{
                        $('.IGTopContestWrap').css({'transition':'1.5s', 'opacity':'0'});
                    }, 500)

                }

                setTimeout(()=>{

                    calculator.section.all.IG_opacity(1,1.5);
                    calculator.lock.IG_activate([1, 1]);
                    calculator.questions.activate.IG_all([0, 0]);
                    setTimeout(()=>{
                        calculator.globalVariable.IG_hsWrapActive = true
                        $('.lfpd, .rfpd').css({'transition':'1s', 'opacity':'0.1'});
                    }, 1250)

                    setTimeout(()=>{
                        $('.risingCrown').css({'margin-top':'-106px', 'opacity':'1'});
                    }, 500)

                }, 500)

                setTimeout(()=>{

                    $('#boxwrap-B-4').css({'margin-top':'-70px'});

                    box.transition('', 'B-4', 0, 0, 1, 0);
                    box.button.show2('B-4');

                    $('.sexplain').appendTo('.bottomMapWrap');

                    setTimeout(()=>{

                        reverseMapAnimation();

                        setTimeout(()=>{
                            $('.bottomMapWrap').css({'opacity':'1'})
                        }, 500)

                    }, 100)

                }, 2000)

            }, 8000)

        }


        // ------------------------------------------ //
        // --------------- NODE ACTION -------------- //
        // ------------------------------------------ //
        //
        // node.emit('goup');
        console.log('node.emit(goup)');


        if(!setup.quickFeedback){
            // show the first info box -> info box A-1
            setTimeout(()=>{

                box.transition('', 'A-1', 1, 0, 1, 0);

                setTimeout(()=>{
                    box.button.show('A-1');
                }, 1500)

            }, 3250)

        } else { // FAST FEEDBACK WITHOUT ANY TEXT ONLY ANIMATION UP TO READY BUTTON

            fastFeedback();

            $('#boxwrap-B-5').css({'margin-top':'156px'});

        }


        listener = {};
        activator = {};



        $('#btn-A-1').click(function() {

            box.transition('A-1', 'A-2', 0, 0, 1, 1250);

            map.show.bottomTransition(true, 0.5);

            if(calculator.globalVariable.isIGB) {
                map.opacity.topTransition(0.5);
                map.opacity.main([1,1,0.5], 0.5);
            }

            setTimeout(()=>{

                $('.IGContests').css({'transition':'0.5s', 'opacity':'1'});
                $('.prizeCrownBlackBottom').css({'transition':'0.5s','opacity':'0'});

                $('.IGFI_Bottom, .IGFightIconLimeBottom, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'1', 'filter':'opacity(1)'})

                $('.prizeCrownLimeBottom').css({'transition':'2s', 'margin-top':'-37px'});
                map.opacity.section([0.1,0.1,0.1], 0.5);

            }, 250)

            setTimeout(()=>{
                box.button.show('A-2');
            }, 2250)

            if(calculator.globalVariable.isIGA) {

                setTimeout(()=>{

                    map.animate.YAH_ig();

                    map.show.topTransition(true, 0.75);
                    map.opacity.bottomTransition(0.4, 0.75);
                    map.opacity.OG2Right(1);
                    map.opacity.OG2Left(0.5);
                    map.opacity.main([0.7,1,0.5], 0.75);

                    $('.IGFightIconLimeTop').css({'transition':'0.5s',
                    'opacity':'1'});

                    $('.prizeCrownLimeTop').css({'transition':'2s',
                    'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

                }, 500)


            }


        });



        $('#btn-A-2').click(function() {

            box.transition('A-2', '', 0, 0, 1, 0);

            $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-325px'});

            if(calculator.globalVariable.isIGB) {

                map.show.topTransition(false, 0.5)
                map.opacity.main([0,1,0], 0.5);

                $('.bottomBoxLeaderResult, .arrowToBottomIconResults, .arrowBottomIconToIG').css({'transition':'0.5','opacity':'0'});
                $('.IGBottomContestWrap').css({'transition':'0.75s', 'margin-top':'-75px', 'margin-left':'-50px', 'transform':'scale(1.5) scaleX(1.5)'});

                setTimeout(()=>{
                    $('.IGBottomContestWrap').css({'transition':'1.5s', 'opacity':'0'});
                }, 500)


            } else {

                map.show.bottomTransition(false, 0.5)
                map.opacity.main([0,1,0], 0.5);

                $('.topBoxLeaderResult, .arrowToTopIconResults, .arrowTopIconToIG').css({'transition':'0.5','opacity':'0'});
                $('.IGTopContestWrap').css({'transition':'0.75s', 'margin-top':'135px', 'margin-left':'-50px', 'transform':'scale(1.5) scaleX(1.5)'});

                setTimeout(()=>{
                    $('.IGTopContestWrap').css({'transition':'1.5s', 'opacity':'0'});
                }, 500)

            }

            setTimeout(()=>{

                calculator.section.all.IG_opacity(1,1.5);
                calculator.lock.IG_activate([1, 1]);
                calculator.questions.activate.IG_all([0, 0]);
                setTimeout(()=>{
                    calculator.globalVariable.IG_hsWrapActive = true
                    $('.lfpd, .rfpd').css({'transition':'1s', 'opacity':'0.1'});
                }, 1250)

                setTimeout(()=>{
                    $('.risingCrown').css({'margin-top':'-106px', 'opacity':'1'});
                }, 500)

            }, 500)

            setTimeout(()=>{
                box.transition('', 'B-3', 0, 0, 1, 0);
                setTimeout(()=>{
                    box.transition('', 'B-4', 0, 0, 1, 0);
                    box.button.show2('B-4');
                }, 500)
            }, 2000)


            setTimeout(()=>{
                $('.sexplain').appendTo('.bottomMapWrap');
                $('.bottomMapWrap').css({'margin-top':'90px'});
                setTimeout(()=>{

                    reverseMapAnimation();

                    setTimeout(()=>{
                        $('.bottomMapWrap').css({'opacity':'1'})
                    }, 1000)

                }, 100)
            }, 2000)


        })

        // ------------------------------------------------------------------ //
        // ------------------------------------------------------------------ //
        // -----------               always exists                ----------- //
        // ------------------------------------------------------------------ //
        // ------------------------------------------------------------------ //
        //
        //
        // ------------------------------------------------------------------ //
        // ------------                                          ------------ //
        // ------------          READY to SPIN BUTTON            ------------ //
        // ------------                                          ------------ //
        // ------------------------------------------------------------------ //
        //
        //
        // ------------------------------------------------------------------ //
        // ------    FIRST NODE.EMIT('HTML-READY', stage = fb4-S)    ------- //
        // ------------------------------------------------------------------ //
        //
        //
        $('#btn-B-4').click(function() {

            // ----------------------------------------- //
            // ------------ NODE ACTION ---------------- //
            // ----------------------------------------- //
            //
            // var stage = 'fb4-S';
            // node.emit('HTML-ready', stage);
            console.log('node.emit(HTML-ready), stage = fb23-S');

            if(setup.quickFeedback) {

                $('.bottomMapWrap').css({'transition':'0.5s', 'opacity':'0',
                'transform':'scale(0)'});

                setTimeout(()=>{
                    $('.bottomMapWrap').css({'transition':'0s', 'margin-top':'90px',
                    'transform':'scale(0.6)'});
                    setTimeout(()=>{
                        $('.bottomMapWrap').css({'transition':'0.5s', 'opacity':'1'});
                    }, 100)
                }, 1000)

            }


            $('.IG_payoffWrap, .IG_imageWrap23').css({'display':'flex'});
            $('.IG_imageWrap23').css({'margin-top':'-14px', 'filter':'opacity(0)'});

            box.transition('B-4', '', 0, 0, 1, 0);
            box.transition('B-3', '', 0, 0, 1, 0);

            calculator.wheel.IG_cruise();



            $('.wpWrap').css({'transition':'1s', 'margin-top':'113px', 'transform':'scale(1.5)'})

            $('.norp').appendTo('.pleaseWait');
            $('.pleaseWait').css({'display':'block'});
            $('.pleaseWait').css({'transition':'0.5s', 'margin-top':'260px'});


            setTimeout(()=>{
                $('.pleaseWait').css({'opacity':'1'})
                continueFlowing = true;
                flowLoad(1);

            }, 250)


            setTimeout(()=>{

                spinTheWheel();

            }, 4321)

        })

        $('#btn-B-5').click(function() {

            box.transition('B-5', '', 0, 0, 1, 0);

            // ------- NODE GAME ACTION --------- //
            // var stage = 'fb4-d';
            // node.emit('HTML-ready', stage);

            $('.norp').appendTo('.pleaseWait');
            $('.pleaseWait').css({'display':'block'});
            $('.pleaseWait').css({'transition':'0.5s', 'margin-top':'260px'});
            setTimeout(()=>{
                $('.pleaseWait').css({'opacity':'1'})
            }, 250)

        })




    }




    generateIGFeedback();


}
