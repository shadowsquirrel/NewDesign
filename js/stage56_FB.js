// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ----------------           MAINDATA             ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //


let mainData = {};



window.onload = function() {

    adjustWindowSize();

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
        myRound: 2,

        myCount: 4,
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


    var generateStage23Feedback = function() {

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


        // --------------- NODE ACTION -------------- //
        // move to the top of the div



        listener = {};
        activator = {};

        if(!setup.fastFeedback) {

            setTimeout(()=>{

                box.transition('', 'A-1', 0, 0, 1, 0);
                calculator.wrapMinimize(0.9, 1, -42)

                setTimeout(()=>{
                    box.button.show('A-1');
                }, 2000)

            }, 8000)

        } else {

            setTimeout(()=>{

                calculator.wrapMinimize(1, 1, -10)

                setTimeout(()=>{
                    tool.set.NORP(0);
                    setMetaNorp(168, -14, 0.3);
                }, 1750)

                box.transition('', 'A-3', 0, 0, 1, 750);
                box.button.show2('A-3');

                box.transition('A-1', '', 0, 0, 1, 750);

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

        // ----------- always exists ----------- //

        $('#btn-A-3').click(function() {

            if(!setup.fastFeedback) {

                box.transition('A-3', '', 0, 0, 1, 0);
                box.transition('A-2', '', 0, 0, 1, 0);
                calculator.wheel.cruise();

                $('.wpWrap').css({'transition':'1s', 'margin-top':'113px', 'transform':'scale(1.5)'})
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

                }, 500)

                // debug

                setTimeout(()=>{

                    calculator.wheel.spin();

                    $('.metaNorp').css({'transition':'0.5s', 'opacity':'0'});
                    setTimeout(()=>{

                        setMetaNorp(168, -14, 0.3);

                        continueFlowing = false;

                        setTimeout(()=>{

                            $('.metaNorp').appendTo('.metaNorpWrapTop');
                            $('.metaNorp').css({'transition':'0s', 'margin-top':'0px',
                             'margin-left':'0px', 'position':'absolute'});

                             setTimeout(()=>{
                                 $('.metaNorp').css({'transition':'0.5s', 'opacity':'1'});
                             }, 100)

                         }, 500)
                    }, 5000)

                }, 5000)

            } else {

                box.transition('A-3', '', 0, 0, 1, 0);
                box.transition('A-2', '', 0, 0, 1, 0);
                calculator.wrapMinimize(0.7, 1, -160);
                calculator.wheel.cruise();

                $('.wpWrap').css({'transition':'1s', 'margin-top':'113px', 'transform':'scale(1.5)'})
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

                }, 500)

                // debug

                setTimeout(()=>{

                    var winner;

                    winner = 1 + setup.og1WinnerGroupIndex

                    calculator.wheel.spin(winner);

                    $('.metaNorp').css({'transition':'0.5s', 'opacity':'0'});
                    setTimeout(()=>{

                        setMetaNorp(168, -14, 0.3);

                        continueFlowing = false;

                        setTimeout(()=>{

                            $('.metaNorp').appendTo('.metaNorpWrapTop');
                            $('.metaNorp').css({'transition':'0s', 'margin-top':'0px',
                             'margin-left':'0px', 'position':'absolute'});

                             setTimeout(()=>{
                                 $('.metaNorp').css({'transition':'0.5s', 'opacity':'1'});
                             }, 100)

                         }, 500)
                    }, 5000)

                }, 5000)

            }

        })

        $('#btn-A-4').click(function() {

            box.transition('A-4', 'A-5', 0, 0, 1, 750);
            setTimeout(()=>{
                box.button.show2('A-5');
            }, 100)


            // ------------ NODE ACTION ---------------- //
            // var stage = 'fb23-D';
            // node.emit('HTML-ready', stage);

        })

        $('#btn-A-5').click(function() {

            box.transition('A-5', '', 0, 0, 1, 0);
            calculator.wrapMinimize(1, 1, -305);
            setMetaNorp(168, -30, 0.4, 1);

            // ------------ NODE ACTION ---------------- //
            // var stage = 'fb23-D';
            // node.emit('HTML-ready', stage);

        })

    }


    generateStage23Feedback();


}
