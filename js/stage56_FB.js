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
            s4Done: 1,
            s5Done: 0,
            s6Done: 0,
            miniGame: 0,
        },

        myRound: 1,

        myCount: 1,
        sortedArray: [0,2,5,4,1,3],

        treatment: [0,1],

        s2: [ [ [0,11], [31,0]], [ [0,20], [40,0] ] ],
        // s2: [ [[0,20], [10,0]], [[0,5], [10,0]] ],
        s3: [ [200, 100], [true, false] ],
        // s3: [ [200, 100], [false, true] ],
        s4: [ [ [5, 1], [true, false], [50, 100] ], [ [5, 1], [false, true], [31, 131] ] ],
        s5:  [ [ [0,2], [3,0]], [ [0,4], [5,0] ] ],
        // s6: [ [222, 222], [true, false] ],
        s6: [ [333, 2], [false, true] ],

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
    //     generateStage56Feedback();
    //
    // });


    // ADD A NORP LISTENER HERE

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

    // called by the NORP listener above
    var spinTheWheel = function() {

        if(allReadyToSpin) {

            setTimeout(()=>{

                // kill the spin activator switch on NORP listener
                allReadyToSpin = false;

                // hide NORP
                $('.metaNorp').css({'transition':'0.5s', 'opacity':'0'});

                // kill the norp animation
                // we don't want the spin wheel to be affected by the waiting animation
                // compuational load
                continueFlowing = false;

                var winner;

                // set winner index
                // for wheel object index starts from 1
                // it is either 1 or 2
                winner = 1 + setup.og2WinnerGroupIndex;

                // debug
                console.log('setup.og1WinnerGroupIndex: ' + setup.og2WinnerGroupIndex);
                console.log('winner index for wheel: ' + winner);

                // spin the wheel
                calculator.wheel.spin(winner);

                // --- after wheel stops --- //

                // after the wheel stops (5 seconds of spin)
                setTimeout(()=>{

                    // move the NORP animation back to the left side of the screen
                    setMetaNorp(168, -14, 0.3);

                    // turn the animation back on again
                    continueFlowing = true;
                    flowLoad(1);

                    setTimeout(()=>{

                        // move norp animation to top
                        $('.metaNorp').appendTo('.metaNorpWrapTop');

                        $('.metaNorp').css({'transition':'0s', 'margin-top':'0px',
                        'margin-left':'0px', 'position':'absolute'});

                        // show norp animation
                        setTimeout(()=>{
                            $('.metaNorp').css({'transition':'0.5s', 'opacity':'1'});
                        }, 100)

                    }, 500)

                }, 5000)

                setTimeout(()=>{

                    // open just before the spin end the finish stage activation
                    // inside norp listener
                    allReadyToEnd = true;

                }, 4000)

            }, 1000)

        }


    }


    var generateStage56Feedback = function() {

        // console.log('sorted array: ' + mainData.sortedArray);
        // console.log('treatment: ' + mainData.treatment);

        // rearranges the sortedArray so that the left group is the subject's group
        tool.rearrangeGroupOrder(mainData);

        // rearrange all the data if the sortedArray is rearranged
        tool.rearrangeMainData(mainData);


        tool.determineS3Winner();

        tool.determineS4Winner();


        // setup.value does nothing with the mainData so far we can pass on
        // previous graphical calculator values to here
        // also for og1-lc we will pass on h/s data etc..
        initialize.values(mainData);



        setup.og2Winner(mainData);


        // matches player's node data with the graphics
        setup.fundamentals(mainData);


        // calls all the different setup function using the parameters
        // defined/assigned by setup.fundamentals
        setup.og_fb();


        setup.infoBoxText();


        setup.determineFastFeedback(mainData);

        // uses map.setup() to pass calculator.globalVariables to map.globalVariables
        // map.setup() -> adjust which icon sets to show given the treatment and group
        //
        // given the setup show the desired stage
        //
        // shows the map with focus action etc...
        if(tool.ourGroupWonOG1) {

            map.show.stage('og2_og1Won_fb');

        } else {

            map.show.stage('og2_og1Lost_fb');

        }





        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//
        //----------------------- INFO BOX BUTTON ACTION --------------------------//
        //-------------------------------------------------------------------------//
        //-------------------------------------------------------------------------//


        // ------------------------------------------ //
        // --------------- NODE ACTION -------------- //
        // ------------------------------------------ //
        //
        // node.emit('goup');
        console.log('node.emit(goup)');



        listener = {};
        activator = {};

        if(!setup.fastFeedback) {

            console.log('TUTO TRACK');

            setTimeout(()=>{

                box.transition('', 'A-1', 0, 0, 1, 0);

                calculator.wrapMinimize(0.9, 1, -42)

                setTimeout(()=>{
                    box.button.show('A-1');
                }, 2000)

            }, 8000)

        } else {

            console.log('NO TUTO TRACK');

            setTimeout(()=>{

                calculator.wrapMinimize(1, 1, -10)

                setTimeout(()=>{

                    tool.set.NORP(0);
                    setMetaNorp(168, -14, 0.3);

                }, 1750)

                box.transition('', 'A-3', 0, 0, 1, 750);

                box.button.show2('A-3');

                // box.transition('A-1', '', 0, 0, 1, 750);

            }, 8000)

        }





        $('#btn-A-1').click(function() {

            calculator.wrapMinimize(0.7, 1, -160);

            setTimeout(()=>{
                tool.set.NORP(0);
                setMetaNorp(168, -14, 0.3);
            }, 1750)

            box.transition('', 'A-3', 0, 0, 1, 750);

            box.button.show2('A-3');

            box.transition('A-1', 'A-2', 0, 0, 1, 750);

        })


        // ------------------------------------------------------------------ //
        // ------------------------------------------------------------------ //
        // -----------               always exists                ----------- //
        // ------------------------------------------------------------------ //
        // ------------------------------------------------------------------ //



        // ------------------------------------------------------------------ //
        // ------------                                          ------------ //
        // ------------          READY to SPIN BUTTON            ------------ //
        // ------------                                          ------------ //
        // ------------------------------------------------------------------ //
        //
        // ------------------------------------------------------------------ //
        // ------    FIRST NODE.EMIT('HTML-READY', stage = fb56-S)    ------- //
        // ------------------------------------------------------------------ //
        //
        //
        $('#btn-A-3').click(function() {


            // ----------------------------------------- //
            // ------------ NODE ACTION ---------------- //
            // ----------------------------------------- //
            //
            // var stage = 'fb23-S';
            // node.emit('HTML-ready', stage);
            console.log('node.emit(HTML-ready), stage = fb23-S');

            box.transition('A-3', '', 0, 0, 1, 0);
            box.transition('A-2', '', 0, 0, 1, 0);

            calculator.wheel.cruise();

            calculator.wrapMinimize(0.7, 1, -160);

            $('.wpWrap').css({'transition':'1s', 'margin-top':'113px', 'transform':'scale(1.5)'});

            $('.bottomMapWrap').css({'transition':'0.5s', 'opacity':'0'});

            $('.metaNorp').css({'transition':'0.5s', 'opacity':'0'});

            setTimeout(()=>{

                $('.metaNorp').appendTo('.norpBottomWrap');

                $('.metaNorp').css({'transition':'0s','position':'static',
                'margin-top':'150px', 'margin-left':'250px', 'transform':'scale(1)'});

                setTimeout(()=>{

                    $('.metaNorp').css({'transition':'0.5s', 'opacity':'1'});
                    flowLoad(1);

                }, 100)

            }, 250)

            // ------------------------------- //
            // ------------ DEBUG ------------ //
            // ------------------------------- //
            //
            // in the nodegame instead we will have spinTheWheel be activated
            // by the NORP listener when all players are ready
            // i.e. when msg === 6
            setTimeout(()=>{

                spinTheWheel();

            }, 4321)


            if(!setup.fastFeedback) {

                console.log('TUTO TRACK');

            } else {

                console.log('NO TUTO TRACK');



            }

        })



        $('#btn-A-4').click(function() {

            box.transition('A-4', 'A-5', 0, 0, 1, 750);

            setTimeout(()=>{

                $('#boxwrap-A-3').css({'display':'none'});
                $('#boxbox-A').css({'margin-top':'138px'})

            }, 750)

            setTimeout(()=>{
                box.button.show2('A-5');
            }, 100)


            // ------------ NODE ACTION ---------------- //
            // var stage = 'fb23-D';
            // node.emit('HTML-ready', stage);

        })

        // ------------------------------------------------------------------ //
        // ------    FINAL NODE.EMIT('HTML-READY', stage = fb56-D)    ------- //
        // ------------------------------------------------------------------ //
        //
        // final info box after wheel is spun and the results are shown
        // when clicked ok the subject sends a ready signal for a second time.
        //
        $('#btn-A-5').click(function() {

            $('.hoverInfoWrap').css({'transition':'1s', 'opacity':'0.5',
            'transform-origin':'left', 'margin-left':'-1112px',
            'transform':'scale(0.7)'});

            box.transition('A-5', '', 0, 0, 1, 0);
            calculator.wrapMinimize(1, 1, -305);
            setMetaNorp(168, -30, 0.4, 1);

            // ----------------------------------------- //
            // ------------ NODE ACTION ---------------- //
            // ----------------------------------------- //
            //
            // var stage = 'fb56-D';
            // node.emit('HTML-ready', stage);
            console.log('node.emit(HTML-ready, stage = fb56-D)');

        })

    }


    generateStage56Feedback();


}
