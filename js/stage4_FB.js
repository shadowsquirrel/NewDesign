// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ----------------           MAINDATA             ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //


let mainData = {};



window.onload = function() {

    // var node = parent.node;




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
        myRound: 4,

        myCount: 0,
        sortedArray: [0,2,5,4,1,3],
        treatment: [0,1],
        s2: [ [ [0,11], [11,0]], [ [0,40], [40,0] ] ],
        // s2: [ [[0,20], [10,0]], [[0,5], [10,0]] ],
        // s3: [ [200, 100], [true, false] ],
        s3: [ [200, 100], [false, true] ],
        s4: [ [ [5, 1], [true, false], [50, 100] ], [ [5, 1], [false, true], [31, 131] ] ],
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
    //     generateStage2();
    //
    // });


    // ADD A NORP LISTENER HERE
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
    //     // setMetaNorp(108, -18, 0.25);
    // if(helper.myIndex != -1) {
    //     // tool.set.NORP(4,2);
    //     tool.set.NORP(4)
    // } else {
    //     // tool.set.NORP(2, 4);
    //     tool.set.NORP(2)
    // }
    //
    // })


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

                var someDelay = 250;
                if(calculator.globalVariable.isIGB) {
                    someDelay = 750;
                }

                setTimeout(()=>{

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

                }, someDelay)

                if(calculator.globalVariable.isIGA) {

                    map.animate.YAH_ig();

                    map.show.topTransition(true, 0.5);
                    map.opacity.bottomTransition(0.5)
                    map.opacity.OG2Right(1);
                    map.opacity.OG2Left(1)
                    map.opacity.main([1,1,0.5], 0.5);

                    $('.IGFightIconLimeTop').css({'transition':'0.5s',
                    'opacity':'1'});

                    $('.prizeCrownLimeTop').css({'transition':'2s',
                    'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

                }

            }, 4000)

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

            }, 6000)

        }


        // --------------- NODE ACTION -------------- //
        // move to the top of the div


        if(!setup.quickFeedback){
            // show the first info box -> info box A-1
            setTimeout(()=>{

                box.transition('', 'A-1', 1, 0, 1, 0);

                setTimeout(()=>{
                    box.button.show('A-1');
                }, 1500)

            }, 3500)

        } else { // FAST FEEDBACK WITHOUT ANY TEXT ONLY ANIMATION UP TO READY BUTTON

            fastFeedback();

            $('#boxwrap-B-5').css({'margin-top':'156px'});

        }


        listener = {};
        activator = {};



        $('#btn-A-1').click(function() {

            box.transition('A-1', 'A-2', 0, 0, 1, 750);

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

                map.animate.YAH_ig();

                map.show.topTransition(true, 0.5);
                map.opacity.bottomTransition(0.5);
                map.opacity.OG2Right(1);
                map.opacity.OG2Left(1);
                map.opacity.main([1,1,0.5], 0.5);

                $('.IGFightIconLimeTop').css({'transition':'0.5s',
                'opacity':'1'});

                $('.prizeCrownLimeTop').css({'transition':'2s',
                'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

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


        })

        //-------- FAST OR SLOW THESE BUTTON ARE ALWAYS ACTIVE AND THEY HAVE NODE TRIGGERS ------ //

        $('#btn-B-4').click(function() {

            // ------- NODE ACTION -------- //
            // var stage = 'fb4-S';
            // node.emit('HTML-ready', stage);

            $('.IG_payoffWrap, .IG_imageWrap23').css({'display':'flex'});
            $('.IG_imageWrap23').css({'margin-top':'-14px', 'filter':'opacity(0)'});

            box.transition('B-4', '', 0, 0, 1, 0);
            box.transition('B-3', '', 0, 0, 1, 0);

            calculator.wheel.IG_cruise();

            metaMoveBottom(675, 437, 0.8);
            $('.wpWrap').css({'transition':'1s', 'margin-top':'113px', 'transform':'scale(1.5)'})
            $('.bottomMapWrap').css({'transition':'0.5s', 'opacity':'0'});

            setTimeout(()=>{

                var winner;

                // our group won check their group's s4 results
                if(calculator.globalVariable.isIGB) {

                    winner = 1 + setup.s4WinnerIndex
                    ;
                } else { // check our group's s4 results

                    winner = 1 + setup.s4WinnerIndex;
                }

                calculator.wheel.IG_spin(winner);

                $('.metaNorp').css({'filter':'opacity(0)'})

                setTimeout(()=>{
                    setMetaNorp(168, -14, 0.3);
                    $('.metaNorp').css({'filter':'opacity(1)'})
                }, 5000)




            }, 5000)

        })

        $('#btn-B-5').click(function() {

            box.transition('B-5', '', 0, 0, 1, 0);

            // ------- NODE GAME ACTION --------- //
            // var stage = 'fb4-d';
            // node.emit('HTML-ready', stage);

            metaMoveBottom(675, 437, 0.8);



        })




    }




    generateIGFeedback();


}
