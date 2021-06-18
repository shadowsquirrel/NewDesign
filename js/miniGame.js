helper = {};


window.onload = function() {

    // var node = parent.node;


    helper.highlightPB = function() {

        $('.IG_pWrap').css({'transition':'1s', 'transform':'scale(1.2) rotateX(1turn)'});

        setTimeout(()=>{
            $('.IG_pWrap').css({'transition':'1s', 'transform':'scale(1) rotateX(0turn)'});
        }, 2000)

    }

    // ------------------------ //
    // ------ debug data ------ //
    // ------------------------ //
    mainData = {
        round: 1,

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
            miniGame: 1,
        },



        sortedArray: [0,2,5,4,1,3],

        myCount: 2,

        myMiniGame: {
            totalScore: 1200,
            previousScore: 500,
        },


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

    var generateMiniGame = function() {

        helper.currentGameScore = 0;
        helper.totalGameScore = mainData.myMiniGame.totalScore;
        helper.previousGameScore = mainData.myMiniGame.previousScore;

        // DEBUG
        tool.debug.showMainData(mainData);

        // rearranges the sortedArray so that the left group is the subject's group
        tool.rearrangeGroupOrder(mainData);


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
        setup.mg();

        // uses map.setup() to pass calculator.globalVariables to map.globalVariables
        // map.setup() -> adjust which icon sets to show given the treatment and group
        //
        // given the setup show the desired stage
        //
        // shows the map with focus action etc...
        map.show.stage('og1_wait_l');

        // setup the info text displays based on the treatment
        setup.infoBoxText(mainData);

        // setup the info text displays based on tutorial experience
        tool.tutorialSetup(mainData, 's4');


        helper.computerEffortList = [50, 125, 250, 500, 750];
        helper.powerList = [

            [1,1],
            [1,2],
            [2,1],
            [1,3],
            [3,1],
            [1,5],
            [5,1],
            [1,10],
            [10,1]

        ];

        calculator.updateLogic = function(msg) {

            console.log('node.say(newScore, newScore)');
            console.log('total score: ' + msg.totalScore);
            console.log('current score: ' + msg.currentScore);
            // current score will be stored as the previous session score for the next time

            // create a mini game score higheway in client
            // create a mini game score listener in logic
            // node.say('newMiniGameScore', newScore)

        }

        // ------------ node.on ask mini game ------------ //
        // node.on('askMiniGame-HTML', function() {
        //
        //     var msg = {
        //         currentScore: helper.currentGameScore,
        //         totalScore: mainData.myMiniGame.totalScore
        //     }
        //
        //     node.emit('HTML-miniGame', msg);
        //
        // })

        helper.randomEffort = function() {
            return helper.computerEffortList[Math.floor(Math.random()*helper.computerEffortList.length)]
        };

        helper.randomPower = function() {
            return helper.powerList[Math.floor(Math.random()*helper.powerList.length)]
        }

        helper.resetContest = function() {

            calculator.button.display.IG_spinBottom(false);
            calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

            calculator.lock.IG_activate([0,1]);

            $('.IG_generalMarginBox').css({'transition':'0.5s', 'opacity':'0'});

            setTimeout(()=>{

                $('.IG_pWrap, .IG_contestSection').css({'transition':'0s', 'filter':'opacity(0)', 'opacity':'0'});

                calculator.results.hide.IG_all();

                if(!helper.useMiniGameList) {

                    calculator.values.set.IG_efforts([efo1,750]);
                    calculator.refresh.IG_sliders();
                    calculator.values.update.IG_efficiencies(1,5)
                    calculator.graphics.update.IG_efficiencyBar();

                } else {

                    console.log('INSIDE USING MINI GAME LIST');
                    console.log('counter before using list items: ' + helper.resetCounter);
                    var pefo = helper.randomEffort();

                    console.log('computer effort: ' + pefo);

                    calculator.values.set.IG_efforts([efo1,pefo]);
                    calculator.refresh.IG_sliders();
                    setTimeout(()=>{
                        calculator.button.display.IG_spinBottom(false);
                        calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;
                    }, 950)

                    var pRatio = helper.randomPower();

                    console.log('predetermined power ratio: ' + pRatio);

                    calculator.values.update.IG_efficiencies(pRatio[0], pRatio[1])
                    calculator.graphics.update.IG_efficiencyBar();


                }


                calculator.values.update.IG_probability()
                calculator.graphics.update.IG_pie();
                calculator.wheel.IG_hide();
                $('.IG_pWrap').css({'transition':'0s', 'filter':'opacity(1)'});

                calculator.button.display.IG_spinBottom(false);
                calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

            }, 510)


            setTimeout(()=>{
                $('.IG_generalMarginBox, .IG_pWrap').css({'transition':'1s', 'opacity':'1'});
                calculator.button.display.IG_spinBottom(false);
                calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;
                $('.IG_contestSection').css({'transition':'0s', 'filter':'opacity(1)', 'opacity':'0'});
                setTimeout(()=>{
                    $('.IG_contestSection').css({'transition':'1s', 'opacity':'1'});
                    calculator.button.display.IG_spinBottom(false);
                    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;
                }, 500)
                setTimeout(()=>{
                    helper.highlightPB();

                    setTimeout(()=>{
                        calculator.pointers.IG_activate([1, 0]);
                    }, 3000)

                    calculator.button.display.IG_spinBottom(false);
                    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

                }, 1750)
            }, 750)
        }

        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//
        //----------------------- INFO BOX BUTTON ACTION --------------------------//
        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//

        helper.spinButtonActivator = false;

        helper.hideResultsOnSliderUse = true;

        helper.useMiniGameList = false;

        helper.skipTuto = (mainData.myTutorial.miniGame > 0) ? true : false;

        // helper.useMiniGameList = skipTuto;

        helper.myIndex = (mainData.sortedArray.indexOf(mainData.myCount) - 1);


        if(helper.myIndex != -1) {
            // tool.set.NORP(4,2);
            tool.set.NORP(4)
        } else {
            // tool.set.NORP(2, 4);
            tool.set.NORP(2)
        }
        setMetaNorp(168, -14, 0.3);


        // --------------- NODE ACTION -------------- //
        // move to the top of the div



        // show the first info box -> info box A-1
        setTimeout(()=>{

            box.transition('', 'A-1', 1, 0, 1, 0);

            if(helper.skipTuto) {

                // // SEND READY SIGNAL TO CLIENT
                // node.emit('HTML-ready')

            }

            setTimeout(()=>{
                map.animate.YAH_og1();
            }, 300)

            setTimeout(()=>{
                box.button.show('A-1');
            }, 2000)

        }, 1500)


        listener = {};
        activator = {};

        $('#btn-A-1').click(function() {

            box.transition('A-1', 'A-2', 0, 0, 1, 750);

            if(helper.myIndex != -1) {
                map.focus.og1.leaders(0.75);
            } else {
                map.focus.og1.followers(0.75);
            }


            setTimeout(()=>{
                box.button.show('A-2');
            }, 2000)

        });

        $('#btn-A-2').click(function() {

            if(helper.skipTuto) {

                box.transition('A-2', 'A-6', 0, 0, 1, 750);

                setTimeout(()=>{
                    box.transition('', 'A-7', 0, 0, 1, 750);
                    box.button.show2('A-7');
                    box.transition('', 'A-8', 0, 0, 1, 750);
                    box.button.show2('A-8');
                }, 1250)

            } else {

                box.transition('A-2', 'A-3', 0, 0, 1, 750);

                setTimeout(()=>{
                    box.button.show('A-3');
                }, 2000)
            }

        });

        $('#btn-A-3').click(function() {

            box.transition('A-3', 'A-4', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('A-4');
            }, 2000)

        });

        $('#btn-A-4').click(function() {

            box.transition('A-4', 'A-5', 0, 0, 1, 750);

            setTimeout(()=>{
                box.transition('', 'A-7', 0, 0, 1, 750);
                box.button.show2('A-7');
                // box.transition('', 'A-8', 0, 0, 1, 750);
                // box.button.show2('A-8');
            }, 1250)

        });




        // ------  MINI GAME BUTTON  ------ //
        $('#btn-A-7').click(function() {

            box.transition('A-5', '', 0, 0, 1, 0);
            box.transition('A-6', '', 0, 0, 1, 0);
            box.transition('A-7', '', 0, 0, 1, 0);
            box.transition('A-8', '', 0, 0, 1, 0);
            $('.sexplain').css({'transition':'0.5s', 'opacity':'0'});
            setMetaNorp(168, -14, 0.3);
            continueFlowing = false;

            setTimeout(()=>{
                $('#boxbox-A').css({'display':'none'});
                $('.initialMapDiv').css({'display':'none'});
            }, 750)

            if(!helper.skipTuto) {

                setTimeout(()=>{

                    calculator.section.all.IG_opacity(1,1);

                    $('.IG_generalMarginBox').css({'transition':'1s',
                    'transform':'scale(1)', 'margin-top':'50px'});

                    calculator.button.display.IG_spinBottom(false);
                    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

                }, 800)

                setTimeout(()=>{
                    box.transition('', 'B-1', 0, 0, 1, 0);

                    setTimeout(()=>{
                        box.button.show('B-1');
                    }, 2000)

                }, 1500)

            } else { // NO TUTORIAL

                setTimeout(()=>{

                    calculator.section.all.IG_opacity(1,1);

                    $('.IG_generalMarginBox').css({'transition':'1s',
                    'transform':'scale(1)', 'margin-top':'50px'});

                    calculator.button.display.IG_spinBottom(false);
                    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

                }, 800)

                setTimeout(()=>{

                    calculator.button.display.IG_spinBottom(false);
                    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

                    calculator.pointers.IG_activate([1, 0]);
                    helper.spinButtonActivator = true;
                    $('#boxbox-C').css({'display':'flex',
                    'margin-left':'500px', 'margin-top':'-235px'});

                    $('.miniGameScoreWrap').css({'transition':'0s','margin-left':'373px', 'margin-top':'368px'});
                    $('.previousScore').css({'display':'flex'});
                    setTimeout(()=>{
                        $('.miniGameScoreWrap').css({'transition':'1s', 'opacity':'1'});
                        $('.totalScore').css({'transition':'1s', 'filter':'opacity(1)'});
                    }, 100)

                    $('#myCurrentGameScore').html(helper.currentGameScore);
                    $('#myMiniGameScore').html(helper.totalGameScore);
                    $('#myPreviousGameScore').html(helper.previousGameScore);

                }, 1500)

            }

        });

        // NO THANKS BUTTON
        $('#btn-A-8').click(function() {

            box.transition('A-5', '', 0, 0, 1, 0);
            box.transition('A-6', '', 0, 0, 1, 0);
            box.transition('A-8', '', 0, 0, 1, 0);


            $('#box-A-7').css({'transform':'scale(0.7)', 'margin-left':'700px', 'margin-top':'-173px'});
            metaMoveBottom();
            // setMetaNorp(108, -18, 0.25);

        });

        $('#btn-B-1').click(function() {

            box.transition('B-1', 'B-2', 0, 0, 1, 750);

            setTimeout(()=>{
                calculator.pointers.IG_activate([1, 0]);
            }, 1000)

            setTimeout(()=>{
                box.button.show('B-2');
            }, 2000)

        });

        $('#btn-B-2').click(function() {

            calculator.pointers.IG_activate([0, 0]);

            box.transition('B-2', 'B-3', 0, 0, 1, 750);

            setTimeout(()=>{
                calculator.pointers.IG_activate([0, 1]);
            }, 1000)

            setTimeout(()=>{
                box.button.show('B-3');
            }, 2000)

        });

        $('#btn-B-3').click(function() {

            calculator.pointers.IG_activate([0, 0]);

            box.transition('B-3', 'B-4', 0, 0, 1, 750);

            setTimeout(()=>{
                helper.highlightPB();
            }, 2000)

            setTimeout(()=>{
                box.button.show('B-4');
            }, 3000)

        });

        $('#btn-B-4').click(function() {

            box.transition('B-4', 'B-5', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('B-5');
            }, 2000)

        });

        $('#btn-B-5').click(function() {

            box.transition('B-5', 'B-6', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('B-6');
            }, 2000)

        });

        $('#btn-B-6').click(function() {

            box.transition('B-6', 'B-7', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('B-7');
            }, 2000)

        });

        listener.b9 = false;
        $('#btn-B-7').click(function() {

            listener.b9 = true;

            box.transition('B-7', 'B-8', 0, 0, 1, 750);

            calculator.pointers.IG_activate([1, 0]);

            $('#boxbox-B').css({'transition':'1s', 'margin-top':'-76px'});

            setTimeout(()=>{
                calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;
                calculator.button.display.IG_spinBottom(true);
            }, 2000)

        });

        listener.b10 = false;
        $('#btn-B-9').click(function() {

            box.transition('B-9', 'B-10', 0, 0, 1, 750);

            setTimeout(()=>{
                box.transition('', 'B-11', 0, 0, 1, 750);
                box.button.show2('B-11');
            }, 2000)

        });

        // first next button
        $('#btn-B-11').click(function() {

            // listener.b11 = true;

            box.transition('B-10', '', 0, 0, 1, 0);
            box.transition('B-11', '', 0, 0, 1, 0);

            setTimeout(()=>{
                helper.resetContest();
                setTimeout(()=>{
                    calculator.pointers.IG_activate([0, 1]);
                }, 6000)
            }, 750)


            setTimeout(()=>{

                box.transition('', 'B-12', 0, 0, 1, 0);

                setTimeout(()=>{
                    box.button.show('B-12');
                }, 2000)

            }, 4000)

        });


        listener.b13 = false;
        $('#btn-B-12').click(function() {

            listener.b13 = true;
            listener.b11 = false;

            box.transition('B-12', 'B-13', 0, 0, 1, 750);

            calculator.pointers.IG_activate([1, 0]);

            helper.spinButtonActivator = true;

            // calculator.button.display.IG_spinBottom(true);
            // calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;

        });


        $('#btn-B-15').click(function() {

            box.transition('B-15', 'B-1501', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('B-1501');
            }, 2000)

        });

        $('#btn-B-1501').click(function() {

            box.transition('B-1501', 'B-16', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('B-16');
            }, 2000)

        });

        $('#btn-B-16').click(function() {

            box.transition('B-16', 'B-17', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('B-17');
            }, 2000)

        });

        $('#btn-B-17').click(function() {

            box.transition('B-17', 'B-18', 0, 0, 1, 750);

            $('.totalScore').css({'transition':'1', 'filter':'opacity(1)'});

            setTimeout(()=>{
                box.button.show('B-18');
            }, 2000)

        });

        $('#btn-B-18').click(function() {

            box.transition('B-18', 'B-19', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('B-19');
            }, 2000)

        });

        $('#btn-B-19').click(function() {

            box.transition('B-19', 'B-20', 0, 0, 1, 750);

            setTimeout(()=>{
                box.button.show('B-20');
            }, 2000)

        });

        listener.b20 = false;
        $('#btn-B-20').click(function() {

            listener.b20 = true;

            box.transition('B-20', 'B-21', 0, 0, 1, 750);

            calculator.pointers.IG_activate([1, 0]);
            calculator.lock.IG_activate([0,1]);

            // calculator.button.display.IG_spinBottom(true);
            // calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;

            if(!helper.skipTuto) {

                // // SEND READY SIGNAL TO CLIENT
                // var stage = ''
                // node.emit('HTML-ready')

            }


        });

        listener.notuto = false;
        $('#btn-C-1').click(function() {

            listener.notuto = true;

            helper.useMiniGameList = true;

            box.transition('C-1', '', 0, 0, 1, 0);

            setTimeout(()=>{
                helper.resetContest();
            }, 250)

            // if(!helper.skipTuto){}

            // setTimeout(()=>{
            //     calculator.button.display.IG_spinBottom(true);
            //     calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;
            // }, 5000)

        });

    }

    generateMiniGame();


}
