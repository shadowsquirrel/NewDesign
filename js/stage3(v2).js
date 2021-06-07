window.onload = function() {

    // var node = parent.node;

    // -------------------------------------------------------------------------- //
    // -------------------------------------------------------------------------- //
    // -----------------------   EXECUTING THE SETUPS   ------------------------- //
    // -------------------------------------------------------------------------- //
    // -------------------------------------------------------------------------- //

    // THIS IS CAUSING AN ERROR ON NOT HAVING A MAIN DATA i DONT UNDERSTAND WHY
    // let mainData = {};

    // node.on('htmlData', function(msg) {
    //
    //     console.log('message received');
    //     console.log(msg);
    //
    //     mainData = msg;
    //
    // })

    // some node commands to use later
    // node.emit('setHeight', 1165);
    // node.emit('countdown', 45);
    // node.emit('goup');

    // node.emit('submitDecision')


    // ------------------------ //
    // ------ debug data ------ //
    // ------------------------ //
    mainData = {
        round: 1,
        myTutorial: {
            s1Done: 1,
            s2Done: 0,
            s3Done: 1,
            s4Done: 0,
            s5Done: 0,
            s6Done: 0,
            fB1: 0,
            fB2: 0,
            fB3: 0,
            miniGame: 0,
        },
        sortedArray: [0,2,5,4,1,3],
        treatment: [0,1],
        myCount: 4,
        s2: [ [ [10,0], [0,10]], [ [0,0], [5,5] ] ]
    }
    // ------------------------ //
    // ------------------------ //
    // ------------------------ //


    // console.log('sorted array: ' + mainData.sortedArray);
    // console.log('treatment: ' + mainData.treatment);

    // rearranges the sortedArray so that the left group is the subject's group
    tool.rearrangeGroupOrder(mainData);

    // determines the group index for both original sort and rearranged sort
    tool.calculateMyOriginalGroupIndex(mainData);

    // console.log('sorted array: ' + mainData.sortedArray);
    // console.log('treatment: ' + mainData.treatment);

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
    map.show.stage('og1_lc');

    // setup the info text displays based on the treatment
    setup.basicInfoText();

    // setup the info text displays based on tutorial experience
    tool.tutorialSetup(mainData, 's3');


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

    }, 2000)


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

        // free sexplain div from its initial div by making it absolute
        $('.sexplain').css({'transition':'0s',
        'position':'absolute', 'margin-left':'-10px'});

        // kill/hide the arrow YOH animation
        map.wiggle.active = false

        // visually move the map
        setTimeout(()=>{

            // isoalte og1 display
            map.opacity.main([1,0,0],0.5)

            // move the map
            $('.sexplain').css({'transition':'0.5s',
            'margin-top':'84px', 'margin-left':'249px', 'transform':'scaleX(1.11)'});

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
            calculator.section.all.opacity(1, 4);

            // initially hide the power ratio
            calculator.section.power.opacity.bar(0, 0)

            // transition into the calcultor by hiding the map
            map.hideMap(1, 4)

            setTimeout(()=>{
                map.move.insideDecisionSlider2();
                map.opacity.main([1,0.3,0.3]);
            }, 3500)

        }, 750)


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
        calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.5,0,1], 0.5);


        setTimeout(()=>{
            calculator.AAHS(750)
        }, 750)


        // --- TUTORIAL PATH --- //
        if(!mainData.myTutorial.s3Done) {

            $('#boxbox-B').css({'transition':'0.7s', 'margin-top':'-110px', 'margin-bottom':'142px'});

            setTimeout(()=>{

                box.transition('', 'B-2', 0, 0, 1, 0);

                setTimeout(()=>{
                    calculator.section.power.opacity.bar(1, 0.75);
                }, 500)

                setTimeout(()=>{
                    box.button.show('B-2');
                }, 2000)

            }, 4000)

        } else { // --- REGULAR NO TUTO PATH --- //

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


                    box.transition('', 'D-12', 0, 0, 1, 0);

                    calculator.section.contest.display.sliders(true);
                    $('.generalMarginBox').css({'height':'495px'});
                    $('.decisionWrapL').css({'transition':'1s', 'margin-top':'-17px'});
                    calculator.section.contest.opacity.sliders(0,0);

                    // show button and activate hovers
                    setTimeout(()=>{

                        box.button.show('D-12');
                        tool.active.sparkle = true;
                        tool.sparkle('D-12');

                        // if too much time spent finalize the setup automatically
                        // NODE NODE NODE NODE NODE NODE NODE NODE NODE NODE NODE NODE NODE NODE
                        setTimeout(()=>{

                            if(listener.d12) {

                                listener.d12 = false;

                                calculator.globalVariable.leaderHoverBlock = false;

                                tool.active.sparkle = false;

                                // id1, id2, transform, addSpaceBetween, hideButton, delay
                                box.transition('D-12', '', 0, 0, 1, 0);
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

                                    $('.infoButtonBottom, .mapButtonBottom, .submitButtonBottom, .calcButtonBottom').css({ 'transform-origin':'top',
                                    'transform':'scale(1)'});


                                }, 250)

                            }

                        }, 6000)

                    }, 2000)



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

        }


    });

    // NODE NODE NODE NODE NODE NODE
    $('#btn-D-12').click(function() {

        calculator.globalVariable.leaderHoverBlock = false;
        tool.active.sparkle = false;
        listener.d12 = false;

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-12', '', 0, 0, 1, 0);
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

            $('.infoButtonBottom, .mapButtonBottom, .submitButtonBottom, .calcButtonBottom').css({ 'transform-origin':'top',
            'transform':'scale(1)'});


        }, 250)

    });


    // TUTORIAL PATH
    listener.c2 = false;
    listener.c3 = false;

    $('#btn-B-2').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('B-2', '', 0, 0, 1, 0);

        // enable decision slider of leader
        calculator.decisionSlider.leader.enable();

        // enable next info box wrap
        $('#boxbox-C').css({'display':'block'});

        // kill info box wrap B
        $('#boxbox-B').css({'transition':'0.7s', 'margin-top':'-142px'});
        setTimeout(()=>{
            $('#boxbox-B').css({'display':'none'});
        }, 700)

        // minimize help sabotage section and open its hovers
        calculator.section.hs.minimize(1);
        calculator.titles.hs.hide();
        calculator.titles.hs.ghost.show();
        calculator.section.hs.set.iconPosition('bottom');
        calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);

        // close hovers
        calculator.globalVariable.hover.hsMinimize = 0;
        calculator.globalVariable.hover.hsIcons = 0;
        calculator.globalVariable.hover.hsMainTitle = 0;
        calculator.globalVariable.hover.hsGhostTitle = 0;

        // a tiny bit of top space through some unused div
        $('.initialMapDiv').css({'transition':'0.7s', 'margin-bottom':'-266px'});

        // minimize calculator set up the triangle perspective
        $('.generalMarginBox').css({'transition':'0.7s',
        'transform':'scale(0.815)', 'margin-top':'-100px', 'height':'325px'});
        $('#boxbox-C').css({'transition':'0.7s',
        'margin-top':'-67px', 'transform':'scale(1.225)'});
        $('.decisionWrapL').css({'transition':'0.7s',
        'margin-top':'155px'});


        setTimeout(()=>{

            // show info box
            box.transition('', 'C-2', 0, 0, 1, 0);

            setTimeout(()=>{
                box.button.show('C-2');
            }, 2000)

        }, 500)

        setTimeout(()=>{

            // show leader decision slider
            calculator.section.decision.leader.opacity(1,1);

            setTimeout(()=>{

                // show arrow pointer
                console.log('ARROW POINTER METHOD NEEDED !!!!!!!!!');

                setTimeout(()=>{
                    listener.c2 = true;
                }, 500)

            }, 750)

        }, 1250)

    });




    $('#btn-C-2').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('C-2', 'C-3', 0, 0, 1, 750);

        listener.c2 = false;
        listener.c3 = true;

        if(calculator.quickTutorial) {

            $('.outcomeWrap').css({'display':'flex'})
            calculator.setPayoffTextLeader(100)

            setTimeout(()=>{
                $('.outcomeWrap').css({'transition':'1s',
                'transform':'scale(1.1)', 'margin-top':'-44px',
                'filter':'opacity(1)', 'opacity':'1'});
            }, 50)

        }

    });

    $('#btn-C-4').click(function() {

        // make the output screen normal
        tool.enervatePayoffTitlesLeader(0);

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('C-4', '', 0, 0, 1, 0);
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

            $('.outcomeWrap').css({'transition':'0.5s', 'filter':'opacity(0)'});

        }, 500)

        setTimeout(()=>{

            $('#boxbox-D').css({'transition':'0.2s', 'margin-top':'-40px'});

            box.transition('', 'D-1', 0, 0, 1, 0);

            setTimeout(()=>{
                box.button.show('D-1');
            }, 2000)

        }, 750)

    });

    $('#btn-D-1').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-1', 'D-2', 0, 0, 1, 750);

        calculator.pointers.activate([0,1,0,0,0,0]);

        setTimeout(()=>{
            box.button.show('D-2');
        }, 2000)

    });

    $('#btn-D-2').click(function() {

        if(!calculator.quickTutorial) {

            // id1, id2, transform, addSpaceBetween, hideButton, delay
            box.transition('D-2', 'D-3', 0, 0, 1, 750);

            calculator.pointers.activate([1,0,0,0,0,0]);

            setTimeout(()=>{
                box.button.show('D-3');
            }, 2000)

        } else {

            box.transition('D-2', 'D-11', 0, 0, 1, 750);

            $('.infoButtonBottom, .mapButtonBottom, .submitButtonBottom, .calcButtonBottom').css({ 'transform-origin':'top',
            'transform':'scale(1)'});

            calculator.pointers.activate([0,0,0,0,0,0]);

            setTimeout(()=>{
                box.button.show('D-11');
            }, 2000)

        }

    });

    $('#btn-D-3').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-3', 'D-4', 0, 0, 1, 750);

        calculator.pointers.activate([0,0,0,0,0,0]);

        $('.decisionWrapL').css({'z-index':'10000000'});

        setTimeout(()=>{
            $('.submitButtonBottom').css({'transform':'scale(1)'})
        }, 750)


        setTimeout(()=>{
            box.button.show('D-4');
        }, 3000)

    });

    $('#btn-D-4').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-4', 'D-5', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('D-5');
        }, 2000)

    });

    $('#btn-D-5').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-5', 'D-6', 0, 0, 1, 750);

        setTimeout(()=>{
            calculator.warn15();
        }, 2000)

        setTimeout(()=>{
            box.button.show('D-6');
        }, 4750)

    });

    $('#btn-D-6').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-6', 'D-7', 0, 0, 1, 750);

        setTimeout(()=>{
            calculator.warn5();
        }, 2000)

        setTimeout(()=>{
            box.button.show('D-7');
        }, 4750)

    });

    $('#btn-D-7').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-7', 'D-8', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('D-8');
        }, 2000)

    });

    $('#btn-D-8').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-8', 'D-9', 0, 0, 1, 750);

        // show map icon
        setTimeout(()=>{
            $('.mapButtonBottom').css({ 'transform-origin':'top',
            'transform':'scale(1)'});
        }, 1000)

        setTimeout(()=>{
            box.button.show('D-9');
        }, 2000)

    });

    $('#btn-D-9').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-9', 'D-10', 0, 0, 1, 750);

        // show map icon
        setTimeout(()=>{
            $('.infoButtonBottom').css({ 'transform-origin':'top',
            'transform':'scale(1)'});
        }, 1000)

        setTimeout(()=>{
            box.button.show('D-10');
        }, 2000)

    });

    $('#btn-D-10').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-10', 'D-11', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('D-11');
        }, 2000)

        setTimeout(()=>{
            // box.transition('D-11', '', 0, 0, 1, 750);
        }, 5000)

    });

    $('#btn-D-11').click(function() {

        // id1, id2, transform, addSpaceBetween, hideButton, delay
        box.transition('D-11', '', 0, 0, 1, 750);

        $('.outcomeWrap').css({'transition':'0.7s',
        'transform':'scale(1.1)', 'margin-top':'-18px', 'filter':'opacity(1)'});


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

            s3DoneUpdated = mainData.myTutorial.s3Done + 1;

            var msg = [efo, s3DoneUpdated, ['big brother is watching']];

            node.emit('s3_effort_decision', msg);

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
