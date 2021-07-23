helper = {};


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

        myRound: 1,

        myTutorial: {
            s1Done: 1,
            s2Done: 0,
            s3Done: 0,
            s4Done: 1,
            s5Done: 0,
            s6Done: 0,
            // no tuto variable for minigame
            // first time it is done is in round one and every one experience itn in og 1
        },

        sortedArray: [0,2,5,4,1,3],

        myCount: 2,

        myMiniGame: {
            totalScore: 1200,
            previousScore: 500,
            showMiniGame:true,
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
    //     generateMiniGame();
    //
    // });


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
    // })


    // node.on('askMiniGame-HTML', function() {
    //
    //     var msg = {
    //
    //         // simply contains the current mini game score
    //         myScore: helper.currentGameScore,
    //
    //         // heavily nested array object
    //         // [
    //         //   [
    //         //     myEffort,
    //         //     cEffort,
    //         //     [myPower, cPower],
    //         //     [won/lost, won/lost],
    //         //     [ [myEffort, myPWin], ...] <- calculator tracker (BigBrother)
    //         //   ],
    //         //   ... <- same list object as above for every instance of a miniGame
    //         // ]
    //         //
    //         myCurrentMiniGames: helper.currentMiniGames,
    //
    //     }
    //
    //     node.emit('HTML-miniGame', msg);
    //
    // })



    var generateMiniGame = function() {

        helper.currentGameScore = 0;
        helper.totalGameScore = mainData.myMiniGame.totalScore;
        helper.previousGameScore = mainData.myMiniGame.previousScore;

        helper.highlightPB = function() {

            $('.IG_pWrap').css({'transition':'1s', 'transform':'scale(1.2) rotateX(1turn)'});

            setTimeout(()=>{
                $('.IG_pWrap').css({'transition':'1s', 'transform':'scale(1) rotateX(0turn)'});
            }, 2000)

        }

        // debug
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
        map.show.stage('og1_wait');

        // setup the info text displays based on the treatment
        setup.infoBoxText(mainData);

        // setup the info text displays based on tutorial experience
        tool.tutorialSetup(mainData, 's4');

        // ------------------------- //
        // ------ big brother ------ //
        // ------------------------- //
        //
        // for every mini game state listens player's slider movement
        // and records it with the other given mini game state relevant variables
        helper.bbState = [];

        helper.bbStateListener = function() {

            var act = [efo1, efo2, IG_pwin, helper.miniGamePowerRatio];

            helper.bbState.push(act);

        }


        // ----------------------------------------------------------- //
        // ------- MINI GAME RESULT RECORDING RELATED FUNCTINS ------- //
        // ----------------------------------------------------------- //

        helper.currentMiniGames = [];

        // called from calculator.wheel.IG_spin()
        helper.recordMiniGame = function(currentWinner) {

            // note that the winner index is adjusted for the spin wheel object
            // thus needs to be adjusted before recording
            var myWinner = currentWinner -1 ;


            var results = [false, false];
            results[myWinner] = true;

            // -------- current game ------ //
            // [
            //   [
            //     myEffort,
            //     cEffort,
            //     [myPower, cPower],
            //     [won/lost, won/lost],
            //     [ [myEffort, myPWin], ...] <- calculator tracker (BigBrother)
            //   ],
            //   ... <- same list object as above for every instance of a miniGame
            // ]

            var currentGame = [

                efo1,
                efo2,
                helper.miniGamePowerRatio,
                IG_pwin,
                results,
                helper.bbState

            ]

            helper.currentMiniGames.push(currentGame);

            console.log('mini game recorded!');
            console.log(helper.currentMiniGames);

        }


        // There are 5 primary states each with 4 substates
        // In sum there are 20 possible states to pick from
        helper.miniGameStateList = [

            // MAIN STATE 0 - Player heavily disadvantaged
            [
                // [cEffort, [myPower, cPower]]
                [400, [1,5]],
                [200, [1,5]],
                [100, [1,5]],
                [50, [1,5]]
            ],

            // MAIN STATE 1 - Player disadvantaged
            [
                // [cEffort, [myPower, cPower]]
                [750, [1,2]],
                [500, [1,2]],
                [250, [1,2]],
                [125, [1,2]]
            ],

            // MAIN STATE 2 - PLAYER EQUAL
            [
                // [cEffort, [myPower, cPower]]
                [750, [1,1]],
                [500, [1,1]],
                [250, [1,1]],
                [125, [1,1]]
            ],

            // MAIN STATE 3 - Player heavily advantaged
            [
                // [cEffort, [myPower, cPower]]
                [400, [5,1]],
                [200, [5,1]],
                [100, [5,1]],
                [50, [5,1]]
            ],

            // MAIN STATE 4 - Player advantaged
            [
                // [cEffort, [myPower, cPower]]
                [750, [2,1]],
                [500, [2,1]],
                [250, [2,1]],
                [125, [2,1]]
            ]

        ]


        helper.shuffle = function(array) {

            var currentIndex = array.length,  randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

            }

            return array;

        }

        helper.myMainMiniGameStateList = [];
        helper.mySubMiniGameStateList = [];

        helper.currentMainState = undefined;
        helper.currentSubState = undefined;

        helper.generateMainStateOrder = function() {

            var myMainStateArray = helper.shuffle([0,1,2,3,4]);

            helper.myMainMiniGameStateList = myMainStateArray;

        }

        helper.generateSubStateOrder = function() {

            var mySubStateArray = helper.shuffle([0,1,2,3]);

            helper.mySubMiniGameStateList = mySubStateArray;

        }


        helper.pickMainState = function() {

            var currentMainState;

            if(helper.myMainMiniGameStateList.length > 0) {

                currentMainState = helper.myMainMiniGameStateList.shift();

                helper.currentMainState = currentMainState;

            } else {

                console.log('We run out of main states !!!!');
                console.log('Generating a new main states array');

                helper.generateMainStateOrder();

                // a bit risky let's hope we don't get into an infinite loop
                setTimeout(()=>{
                    helper.pickMainState();
                }, 50)

            }

        }

        helper.pickSubState = function() {

            var currentSubState;

            if(helper.mySubMiniGameStateList.length > 0) {

                currentSubState = helper.mySubMiniGameStateList.shift();

                helper.currentSubState = currentSubState;

            } else {

                console.log('We finished all the substates of a main state');
                console.log('Generating a new substates array for the next main state');

                helper.generateSubStateOrder();

                console.log('Moving to the next main state');

                helper.pickMainState();

                // a bit risky let's hope we don't get into an infinite loop
                setTimeout(()=>{
                    helper.pickSubState();
                }, 50)

            }

        }


        helper.computerEffort = undefined;
        helper.assignComputerEffort = function() {

            helper.computerEffort = helper.miniGameStateList[helper.currentMainState][helper.currentSubState][0]

        }

        helper.miniGamePowerRatio = undefined;
        helper.assignPowerRatio = function() {

            helper.miniGamePowerRatio = helper.miniGameStateList[helper.currentMainState][helper.currentSubState][1]

        }


        // Dont forget that the assignments occur with 500ms delay
        // adjust the graphics accordingly!!!
        helper.assignState = function() {

            // initially nothing is defined so first a substate array will be
            // determined. This will trigger picking a new main state which is
            // also initially not determined to this will trigger generating
            // the main state list and in turn determining the current maint state
            //
            // After the initial usage of helper.assignState every time it is used
            // it will just pop the first element from the array of the substate
            // until it runs out of substate elements
            // Once it runs out of substate elements it will generate a new one
            // and also pop the next first element from the main state array
            //
            helper.pickSubState();

            // once the states are determined then we can move to assigning
            // computer effort and power ratio
            // note that the above procedure has a slight delay (50ms) built in so we
            // will have the below assignments with a slight delay
            setTimeout(()=>{

                helper.assignComputerEffort();
                helper.assignPowerRatio();

            }, 500)

        }


        // Notice the resetContest has a 750ms delay in it.
        // Do your coding accordingly !!!
        helper.resetContest = function() {

            // reset big brother list
            helper.bbState = [];

            // disable spin button
            calculator.button.display.IG_spinBottom(false);

            calculator.pointers.IG_activate([0, 0]);

            // make sure it is disabled (extra precaution)
            calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

            helper.sliderChangeListenerIsActivated = false;

            // lock computer effort level before anything else
            calculator.lock.IG_activate([0,1]);

            // hide the mini game calculator display
            $('.IG_generalMarginBox').css({'transition':'0.5s', 'opacity':'0',
            'margin-top':'50px', 'transform':'scale(1)'});

            $('.fuckSpinButton').css({'transition':'0s', 'transform':'scale(0)'})

            setTimeout(()=>{

                // We are further hiding stuff
                $('.IG_pWrap, .IG_contestSection').css({'transition':'0s', 'filter':'opacity(0)', 'opacity':'0'});

                // And more and more stuff are getting hidden -> not sure if all of this secrecy is necessary
                calculator.results.hide.IG_all();

                // The case where we are not using the mini Game list
                // this will be relevant for the tutorial and that is it...
                // We will use this predefined setup to tell the subjects that
                // when it is highly unlikely to win it is better not to invest anything
                if(!helper.useMiniGameList) {

                    calculator.values.set.IG_efforts([efo1,750]);

                    calculator.refresh.IG_sliders();

                    calculator.values.update.IG_efficiencies(1,5);

                    calculator.graphics.update.IG_efficiencyBar();

                    calculator.values.update.IG_probability()

                    calculator.graphics.update.IG_pie();

                    calculator.wheel.IG_hide();

                } else {

                    console.log('INSIDE USING MINI GAME LIST');

                    // has a 500ms delay in it so below code needs to accound for it
                    helper.assignState();

                    setTimeout(()=>{

                        console.log('main state: ' + helper.currentMainState);
                        console.log('future main states to go: ' + helper.myMainMiniGameStateList);
                        console.log();
                        console.log('sub state: ' + helper.currentSubState);
                        console.log('future sub states to go: ' + helper.mySubMiniGameStateList);
                        console.log();
                        console.log('Current computer effort: ' + helper.computerEffort);
                        console.log('Current power ratio: ' + helper.miniGamePowerRatio);

                        var cefo = helper.computerEffort;

                        console.log('computer effort: ' + cefo);

                        calculator.values.set.IG_efforts([efo1,cefo]);

                        calculator.refresh.IG_sliders();

                        var pRatio = helper.miniGamePowerRatio;

                        console.log('predetermined power ratio: ' + pRatio);

                        calculator.values.update.IG_efficiencies(pRatio[0], pRatio[1])

                        calculator.graphics.update.IG_efficiencyBar();

                        calculator.values.update.IG_probability()

                        calculator.graphics.update.IG_pie();

                        calculator.wheel.IG_hide();

                        $('#IG_spinImage23').css({'filter':'opacity(0)'});

                    }, 750)

                }

                $('.IG_pWrap').css({'transition':'0s', 'filter':'opacity(1)'});

            }, 510)


            setTimeout(()=>{

                $('.IG_generalMarginBox, .IG_pWrap').css({'transition':'0.75s', 'opacity':'1'});

                setTimeout(()=>{
                    $('.IG_contestSection').css({'transition':'0.75s', 'filter':'opacity(1)', 'opacity':'1'});
                }, 500)

                setTimeout(()=>{

                    helper.highlightPB();

                    setTimeout(()=>{
                        calculator.pointers.IG_activate([1, 0]);
                        helper.sliderChangeListenerIsActivated = true;
                    }, 3000)

                }, 1500)

            }, 1500)

        }



        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//
        //----------------------- INFO BOX BUTTON ACTION --------------------------//
        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//

        helper.spinButtonActivator = false;

        helper.hideResultsOnSliderUse = true;

        helper.useMiniGameList = false;

        helper.skipTuto = (mainData.myRound > 1) ? true : false;

        helper.introduceSunTzuBot = !helper.skipTuto;

        helper.useMiniGameList = helper.skipTuto;

        helper.myIndex = (mainData.sortedArray.indexOf(mainData.myCount) - 1);


        // ------------------------------------------ //
        // --------------- NODE ACTION -------------- //
        // ------------------------------------------ //
        //
        // node.emit('goup');
        console.log('node.emit(goup)');




        // show the first info box -> info box A-1
        // appears after map is shown
        // also has 'you are here' shit
        setTimeout(()=>{

            if(helper.skipTuto) {

                // ------------------------------------------ //
                // --------------- NODE ACTION -------------- //
                // ------------------------------------------ //
                //
                // When no tuto, as the mini game page opens up
                // the player auto sends a ready signal
                // let's not risk any lazy ass subjects not
                // clicking some buttons they are supposed to click
                //
                // stage = 0
                // node.emit('HTML-ready', stage)
                console.log('node.emit(HTML-ready, stage = 0)');

            }

            box.transition('', 'A-1', 1, 0, 1, 0);

            setTimeout(()=>{
                map.animate.YAH_og1();
            }, 300)

            setTimeout(()=>{
                box.button.show('A-1');
            }, 1500)

        }, 1500)


        listener = {};
        activator = {};

        // has some further focus on the map shit and moves to A-2
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

        // ------------------------------------------------------------------ //
        // -------- FIRST TUTORIAL OR NO TUTORIAL FORK BUTTON IS HERE ------- //
        // ------------------------------------------------------------------ //
        //
        // If no tutorial we jump to A-6, A-7 and A-8
        // A-6 is 'While you wait, you can play...' -> no buttons
        // A-8 is NO THANKS button and A-7 is MINI GAME button
        //
        // If tutorial we proceed to A-3
        //
        $('#btn-A-2').click(function() {

            if(mainData.myMiniGame.showMiniGame) {

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

            } else {

                box.transition('A-2', '', 1, 0, 1, 0);
                $('#box-A-2').css({'margin-top':'4px', 'margin-left':'9px'});
                $('#btn-A-2').css({'display':'none'});
                $('.specialText-A-2').css({'transition':'1s',
                'font-size':'25px', 'margin-left':'60px'})

                $('.norpBottomWrap').css({'margin-top':'27px'});


                setTimeout(()=>{

                    $('.metaNorp').css({'transition':'0.5s', 'opacity':'0'});
                    setTimeout(()=>{

                        $('.metaNorp').appendTo('.norpBottomWrap');

                        $('.metaNorp').css({'transition':'0s','position':'static',
                        'margin-top':'150px', 'margin-left':'250px', 'transform':'scale(1)'});

                        setTimeout(()=>{
                            $('.metaNorp').css({'transition':'0.5s', 'opacity':'1'});
                            continueFlowing = true;
                            flowLoad(1);
                        }, 100)

                    }, 500)

                }, 750)

            }

        });


        // ----------------------------------------------- //
        // ---------------   TUTORIAL PATH --------------- //
        // ----------------------------------------------- //
        //
        // We are going to explain what's going on
        // not show no thanks button after A-4 but still show
        // A-7 button to make them move to miniGame tutorial this time
        //
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

                // if the fuckers decide not to click the mini game button
                // after 10 seconds it will auto click
                setTimeout(()=>{

                    // hide buttons
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

                        setMetaNorp(168, -14, 0.3);

                        continueFlowing = false;

                        setTimeout(()=>{
                            $('.metaNorp').css({'transition':'0.5s', 'opacity':'1'});
                        }, 100)

                    }, 8000)

                    // kill map, kill initial button box
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
                        box.transition('', 'B-1', 0, 0, 1, 0);

                        setTimeout(()=>{
                            box.button.show('B-1');
                        }, 2000)

                    }, 1500)

                }, 10000)

            }, 1250)

        });



        // ------------------------------------------------------------------ //
        // --------- TUTORIAL OR NO TUTORIAL FORK BUTTON IS ALSO HERE ------- //
        // ------------------------------------------------------------------ //
        //
        //  If we go down the tutorial path we move to B boxes
        //
        // In the tuto path we don't see the A-8 (no thanks) button
        // So forcing the subjects to go through the tutorial in their first time


        // -------------------------------- //
        // ------  MINI GAME BUTTON  ------ //
        // -------------------------------- //
        //
        $('#btn-A-7').click(function() {

            // hide buttons
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

                 setMetaNorp(168, -14, 0.3);

                 continueFlowing = false;

                 setTimeout(()=>{
                     $('.metaNorp').css({'transition':'0.5s', 'opacity':'1'});
                 }, 100)

            }, 6900)

            // kill map, kill initial button box
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

                // THIS ONE IS NOT NECESSARY AS WE SEND READY SIGNAL AT THE BEGINNING
                // ------------------------------------------ //
                // --------------- NODE ACTION -------------- //
                // ------------------------------------------ //
                //
                // When no tuto, once the player begins the mini games it sends
                // a signal of being ready.
                //
                // stage = 0
                // node.emit('HTML-ready', stage)
                console.log('node.emit(HTML-ready, stage = 0) THIS MUST BE UNCESSARY');

                helper.resetContest();

                setTimeout(()=>{

                    $('#boxbox-C').css({'display':'flex',
                    'margin-left':'500px', 'margin-top':'-235px'});

                    $('.miniGameScoreWrap').css({'transition':'0s','margin-left':'373px', 'margin-top':'368px'});

                    $('.previousScore').css({'display':'flex'});

                    setTimeout(()=>{
                        $('.miniGameScoreWrap').css({'transition':'1s', 'opacity':'1'});
                        $('.totalScore').css({'transition':'1s', 'filter':'opacity(1)'});
                    }, 6000)

                    $('#myCurrentGameScore').html(helper.currentGameScore);
                    $('#myMiniGameScore').html(helper.totalGameScore);
                    $('#myPreviousGameScore').html(helper.previousGameScore);

                }, 1000)

            }

        });

        // --------------------------------- //
        // -------- NO THANKS BUTTON ------- //
        // --------------------------------- //
        //
        $('#btn-A-8').click(function() {

            // THIS ONE IS NOT NECESSARY AS WE SEND READY SIGNAL AT THE BEGINNING
            // ------------------------------------------ //
            // --------------- NODE ACTION -------------- //
            // ------------------------------------------ //
            //
            // When no tuto, once the player says no thanks it sends
            // a signal of being ready.
            //
            // stage = 0
            // node.emit('HTML-ready', stage)
            console.log('node.emit(HTML-ready, stage = 0) THIS MUST BE UNCESSARY');


            box.transition('A-5', '', 0, 0, 1, 0);
            box.transition('A-6', '', 0, 0, 1, 0);
            box.transition('A-8', '', 0, 0, 1, 0);


            $('#box-A-7').css({'transform':'scale(0.7)', 'margin-left':'700px', 'margin-top':'-173px'});

            $('.metaNorp').css({'transition':'0.5s', 'opacity':'0'});
            setTimeout(()=>{

                $('.metaNorp').appendTo('.norpBottomWrap');

                $('.metaNorp').css({'transition':'0s','position':'static',
                'margin-top':'150px', 'margin-left':'250px', 'transform':'scale(1)'});

                setTimeout(()=>{
                    $('.metaNorp').css({'transition':'0.5s', 'opacity':'1'});
                     continueFlowing = true;
                    flowLoad(1);
                }, 100)

            }, 500)


        });


        // ------------------------------------------------------------------ //
        // ---------------------------- TUTO PATH --------------------------- //
        // ------------------------------------------------------------------ //
        //
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

        // ------- FAT LARGE NEXT BUTTON INSIDE TUTO ------- //
        //
        // Uses helper.resetContest() so be prudent
        //
        $('#btn-B-11').click(function() {

            // listener.b11 = true;

            box.transition('B-10', '', 0, 0, 1, 0);
            box.transition('B-11', '', 0, 0, 1, 0);

            setTimeout(()=>{
                helper.resetContest();
                setTimeout(()=>{
                    calculator.pointers.IG_activate([0, 1]);
                    setTimeout(()=>{
                        calculator.pointers.IG_activate([0, 1]);
                        setTimeout(()=>{
                            calculator.pointers.IG_activate([0, 1]);
                            setTimeout(()=>{
                                calculator.pointers.IG_activate([0, 1]);
                                setTimeout(()=>{
                                    calculator.pointers.IG_activate([0, 1]);
                                    setTimeout(()=>{
                                        calculator.pointers.IG_activate([0, 1]);
                                    }, 250)
                                }, 250)
                            }, 250)
                        }, 250)
                    }, 250)
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

        // ------------------------------------------------------------------ //
        // -------------------- LAST BUTTON OF TUTO ------------------------- //
        // ------------------------------------------------------------------ //
        //
        // THIS IS ALSO WHERE WE NEED A NODE.EMIT(READY) i think...
        //
        listener.b20 = false;
        $('#btn-B-20').click(function() {

            listener.b20 = true;

            box.transition('B-20', 'B-21', 0, 0, 1, 750);

            calculator.pointers.IG_activate([1, 0]);
            calculator.lock.IG_activate([0,1]);

            // calculator.button.display.IG_spinBottom(true);
            // calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;

            if(!helper.skipTuto) {

                // ------------------------------------------ //
                // --------------- NODE ACTION -------------- //
                // ------------------------------------------ //
                //
                // When no tuto, once the player says no thanks it sends
                // a signal of being ready.
                //
                // stage = 0
                // node.emit('HTML-ready', stage)
                console.log('node.emit(HTML-ready, stage = 0)');

            }


        });

        // ------------------------------------------------------------------ //
        // ----------------------- END OF TUTO PATH ------------------------- //
        // ------------------------------------------------------------------ //





        // ------------------------------------------------------------------ //
        // ----------------------- MAIN NEXT BUTTON ------------------------- //
        // ------------------------------------------------------------------ //
        //
        listener.notuto = false;
        listener.sunTzuCounter = 0;
        $('#btn-C-1').click(function() {

            listener.notuto = true;

            helper.useMiniGameList = true;

            box.transition('C-1', '', 0, 0, 1, 0);

            setTimeout(()=>{
                helper.resetContest();
            }, 250)



            if(helper.introduceSunTzuBot) {

                helper.introduceSunTzuBot = false;

                setTimeout(()=>{
                    // sunTzuIntro();
                    sunTzuLongIntro();
                }, 6000)

            } else {

                $('.sunTzuWrap, .speechBubble').css({'transition':'1s', 'opacity':'0'});

                setTimeout(()=>{
                    $('.someQuote').html('');
                }, 2000)

                if(listener.sunTzuCounter % 3 === 1)
                {
                    setTimeout(()=>{

                        $('.sunTzuWrap').css({'transition':'1s', 'opacity':'1'});

                        setTimeout(()=>{
                            $('.speechBubble').css({'transition':'1s', 'opacity':'1'});
                        }, 1000)

                    }, 6000)

                    setTimeout(()=>{
                        sunTzuTalk();
                    }, 6000)

                }

                listener.sunTzuCounter++;

            }





        });


        // ------------------------------------------------------------------ //
        // -------------------- PLAYER SLIDER ON CHANGE --------------------- //
        // ------------------------------------------------------------------ //
        //
        helper.sliderChangeListenerIsActivated = false;
        $('#IG_lSlider1').change(function() {

            if(helper.sliderChangeListenerIsActivated) {

                setTimeout(()=>{

                    $('#IG_spinImage23').css({'filter':'opacity(1)'})

                    setTimeout(()=>{
                        $('.fuckSpinButton').css({'transition':'0.5s', 'transform':'scale(1)'});
                    }, 250)

                    calculator.button.display.IG_spinBottom(true);
                    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;

                }, 1000)

            }


        })


    }


    generateMiniGame();


}
