helper = {};


window.onload = function() {

    // var node = parent.node;

    adjustWindowSize();

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

        myRound: 1,

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
            // no tuto variable for minigame
            // first time it is done is in round one and every one experience itn in og 1
        },


        myCount: 3,


        sortedArray: [0,2,5,4,1,3],


        myMiniGame: {
            totalScore: 1200,
            previousScore: 500,
        },


        treatment: [1,1],

        s2: [ [Array(6), Array(6)], [Array(6), Array(6)] ],

        s3: [ Array(2), [true, false] ],
        // s3: [ [200, 100], [false, true] ],
        s4: [ [ Array(2), [true, false], Array(2) ], [ Array(2), [false, true], Array(2) ] ],
        // s4: [ [ Array(2), [false, true], Array(2) ], [ Array(2), [true, false], Array(2) ] ],

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

        tool.rearrangeMainData(mainData);

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



        // immediatly call the function
        tool.determineS3Winner();

        tool.determineS4Winner();

        $('.winnerGroup-leader-InfoBox, .winnerGroup-follower-InfoBox, .lostGroup-leader-InfoBox, .lostGroup-follower-InfoBox').css({'display':'none'});

        if(tool.ourGroupWonOG1) { // we won og1

            map.show.stage('og2_wait_ig1Winner');

            if(calculator.globalVariable.playerIndex != -1) { // not leader means follower

                $('.winnerGroup-follower-InfoBox').css({'display':'flex'});

            } else { // leader

                $('.winnerGroup-leader-InfoBox').css({'display':'flex'});

            }

        } else { //we lost

            map.show.stage('og2_wait_ig1Loser');

            if(calculator.globalVariable.playerIndex != -1) { // one of the followers is the leader now

                if(calculator.globalVariable.playerIndex === tool.winnerFollowerIndex) { // new leader
                    $('.winnerGroup-leader-InfoBox').css({'display':'flex'});
                } else { // still follower
                    $('.lostGroup-follower-InfoBox').css({'display':'flex'});
                }

            } else { // leader became follower

                $('.lostGroup-follower-InfoBox').css({'display':'flex'});

            }

        }

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



        // helper.useMiniGameList = skipTuto;

        helper.myIndex = (mainData.sortedArray.indexOf(mainData.myCount) - 1);


        tool.set.NORP(4)
        setMetaNorp(168, -14, 0.3);


        // --------------- NODE ACTION -------------- //
        // move to the top of the div



        // show the first info box -> info box A-1
        setTimeout(()=>{

            box.transition('', 'A-1', 1, 0, 1, 0);

            // // SEND READY SIGNAL TO CLIENT
            // node.emit('HTML-ready')

            setTimeout(()=>{
                box.button.show('A-1');
            }, 2000)

        }, 8000)


        listener = {};
        activator = {};

        $('#btn-A-1').click(function() {

            box.transition('A-1', 'A-2', 0, 0, 1, 750);


            if(tool.ourGroupWonOG1) {

                if(calculator.globalVariable.playerIndex != -1) {
                    map.focus.og2.followers();
                } else {
                    map.focus.og2.leaders();
                }

            } else {

                if(calculator.globalVariable.playerIndex != -1) {

                    if(calculator.globalVariable.playerIndex === tool.winnerFollowerIndex) {
                        map.focus.og2.followers();
                    } else {
                        map.focus.og2.leaders();
                    }

                } else {
                    map.focus.og2.leaders();
                }

            }



            setTimeout(()=>{
                box.button.show('A-2');
            }, 2000)

        });


        $('#btn-A-2').click(function() {

            box.transition('A-2', 'A-6', 0, 0, 1, 750);

            setTimeout(()=>{
                box.transition('', 'A-7', 0, 0, 1, 750);
                box.button.show2('A-7');
                box.transition('', 'A-8', 0, 0, 1, 750);
                box.button.show2('A-8');
            }, 1250)

        });





        // ------  MINI GAME BUTTON  ------ //
        $('#btn-A-7').click(function() {

            box.transition('A-5', '', 0, 0, 1, 0);
            box.transition('A-6', '', 0, 0, 1, 0);
            box.transition('A-7', '', 0, 0, 1, 0);
            box.transition('A-8', '', 0, 0, 1, 0);
            $('.sexplain').css({'transition':'0.5s', 'opacity':'0'});

            $('.metaNorp').css({'transition':'0.5s', 'opacity':'0'});
            setTimeout(()=>{

                $('.metaNorp').appendTo('.metaNorpWrapTop');
                $('.metaNorp').css({'transition':'0s', 'margin-top':'0px',
                 'margin-left':'0px', 'position':'absolute'});

                 setTimeout(()=>{
                     $('.metaNorp').css({'transition':'0.5s', 'opacity':'1'});
                 }, 100)

             }, 500)

             setMetaNorp(168, -14, 0.3);

             continueFlowing = false;

             setTimeout(()=>{
                 $('#boxbox-A').css({'display':'none'});
                 $('.initialMapDiv').css({'display':'none'});
             }, 750)

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



         });

        // -------- NO THANKS BUTTON ------- //
        $('#btn-A-8').click(function() {

            box.transition('A-5', '', 0, 0, 1, 0);
            box.transition('A-6', '', 0, 0, 1, 0);
            box.transition('A-8', '', 0, 0, 1, 0);


            $('#box-A-7').css({'transform':'scale(0.7)', 'margin-left':'700px', 'margin-top':'-140px'});

            $('.metaNorp').css({'transition':'0.5s', 'opacity':'0'});
            setTimeout(()=>{

                $('.metaNorp').appendTo('.norpBottomWrap');

                $('.metaNorp').css({'transition':'0s','position':'static',
                'margin-top':'150px', 'margin-left':'250px', 'transform':'scale(1)'});

                setTimeout(()=>{
                    $('.metaNorp').css({'transition':'0.5s', 'opacity':'1'});
                    flowLoad(1);
                }, 100)

            }, 500)

        });



    }

    generateMiniGame();


}
