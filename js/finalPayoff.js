var payoffs;
var final;

window.onload = function() {

    final = {
        set:{},
        globalVariable:{},
    };

    // ------ debug data ------ //
    mainData = {

        round: 1,
        sortedArray: [0,2,5,4,3,1],
        treatment: [1,0],
        myCount: 3,
        myTutorial: {
            s1Done: 1,
            s2Done: 1,
            s3Done: 0,
            s4Done: 0,
            s5Done: 0,
            s6Done: 0,
            fB1: 0,
            fB2: 0,
            fB3: 0,
            miniGame: 0,
        },
        s2: [ [[0,20], [10,0]], [[0,5], [10,0]] ],
        // s3: [ [200, 100], [true, false] ],
        s3: [ [200, 100], [false, true] ],
        s4: [ [ [5, 1], [true, false], [50, 100] ], [ [5, 1], [false, true], [51, 101] ] ],
        s5: [ [[0,5], [10,0]], [[0,20], [10,0]] ],
        s6: [ [100, 200], [false, true] ],

    }

    payoffs = [
        // group A/1
        [
            // leader
            // [s2payoff, s3payoff, s4payoff, s5payoff, s6payoff,
            //  final payoff, final balance]
            [-10,-500,0,-20,-600,-800,100],
            // follower 1/s
            [-11,501,-151,-21,601,801,1010],
            // follower 2/w
            [-12,-502,-152,-22,-602,-802,202],
        ],
        // group B/2
        [
            // leader
            [0,503,0,-5,-483,20,1020],
            // follower 1/s
            [80,0,-120,90,604,170,1170],
            // follower 2/w
            [-15,0,-155,-25,-605,-805,505],
        ]
    ]


    // console.log('sorted array: ' + mainData.sortedArray);
    // console.log('treatment: ' + mainData.treatment);


    // call it after rearranging groups
    final.adjustCrowns = function(myData) {

        var lostGroupIndex =myData.s3[1].indexOf(false);
        console.log('lostGroupIndex: ' + lostGroupIndex);

        var crNewI = lostGroupIndex === 0 ? 2 : 5;

        var crOldI = crNewI - 1;



        var crNewI = crNewI + myData.s4[lostGroupIndex][1].indexOf(true);

        var crStringOld = '.cr' + crOldI;
        var crStringNew = '.cr' + crNewI;

        console.log(crStringOld);
        console.log(crStringNew);

        $(crStringOld).css({'opacity':'0'});
        $(crStringNew).css({'opacity':'1'});

    }

    final.set.index = function(myData) {

        final.globalVariable.wlx = myData.s3[1].indexOf(true);
        final.globalVariable.llx = 1 - final.globalVariable.wlx;
        final.globalVariable.wfx = myData.s4[final.globalVariable.llx][1].indexOf(true);
        final.globalVariable.me = myData.sortedArray.indexOf(myData.myCount);

    }

    final.assignFinalPayoffs = function(myPayoff) {

        for(var i = 0; i < 6; i++) {

            var s1 = '#a' + (i + 1);
            var s2 = s1 + '2';

            var value1, value2;

            var group = (i < 3) ? 0 : 1;

            var j = (i % 3);

            value1 = myPayoff[group][j][5];

            value2 = myPayoff[group][j][6];

            $(s1).html(value1);
            $(s2).html(value2);

        }

    }

    final.adjustIGCrowns = function() {

        if(final.globalVariable.wlx === 0) {

            if(final.globalVariable.wfx === 0) {
                $('.prizeCrownLimeBottom').css({'margin-left':'-37px'});
            } else {
                $('.prizeCrownLimeBottom').css({'margin-left':'37px'});
            }

        } else {

            if(final.globalVariable.wfx === 0) {
                $('.prizeCrownLimeTop').css({'margin-left':'-38px'});
            } else {
                $('.prizeCrownLimeTop').css({'margin-left':'37px'});
            }

        }

    }

    final.adjustYouIcon = function(myData, dt) {

        var dt = dt === undefined ? 0.5 : dt;

        dt = dt + 's';

        var me = myData.myCount;

        final.globalVariable.myIndex = myData.sortedArray.indexOf(me);

        $('.leaderYou').css({'transition':'0s', 'opacity':'0'});

        if(final.globalVariable.myIndex === 0) {
            $('.l1you').css({'transition': dt, 'opacity':'1'});
            $('.f1you, .f2you').css({'display':'none'});
        }

        if(final.globalVariable.myIndex === 1) {
            $('.f1you').css({'transition': dt, 'opacity':'1'});
            $('.l1you, .f2you').css({'display':'none'});
        }

        if(final.globalVariable.myIndex === 2) {
            $('.f2you').css({'transition': dt, 'opacity':'1'});
            $('.f1you, .l1you').css({'display':'none'});
        }

    }

    final.setHoverBlocker = function() {
        final.globalVariable.blockerList = Array(6);
        final.globalVariable.blockerList.fill(0);
        final.globalVariable.blockerList[final.globalVariable.myIndex] = 1;
    }

    final.lockBlocker = function() {
        final.globalVariable.blockerList = Array(6);
        final.globalVariable.blockerList.fill(0);
    }

    final.unlockBlocker = function() {
        final.globalVariable.blockerList = Array(6);
        final.globalVariable.blockerList.fill(1);
    }

    final.setRound = function() {

        $('#someRound').html(mainData.round);
        setTimeout(()=>{
            $('.someTitle').css({'transition':'2s', 'opacity':'1'});
        }, 1000)

    }

    // ------------------------------------------------------------------- //
    // ---------------------- Global Initiations ------------------------- //
    // ------------------------------------------------------------------- //


    icon.globalVariable.isPracticeRound = undefined;

    icon.globalVariable.ourFollowersAreHetero = undefined;
    icon.globalVariable.theirFollowersAreHetero  = undefined;
    icon.globalVariable.bothHomo = undefined;
    icon.globalVariable.bothHetero = undefined;


    tool.set.YAHPosition(mainData);

    tool.rearrangeGroupOrder(mainData);
    tool.rearrangeMainData(mainData);
    tool.rearrangePayoffData(payoffs);
    final.set.index(mainData);


    map.setupFinalFeedback(mainData);

    box.set.treatment(mainData);

    generateIcons(mainData);


    icon.set.stage1();
    icon.ff.showMe(mainData);
    // icon.ff.showAllIcons();
    final.adjustCrowns(mainData);
    final.assignFinalPayoffs(payoffs);
    final.adjustIGCrowns();
    final.adjustYouIcon(mainData, 3);
    final.lockBlocker();

    final.setRound();

    setTimeout(()=>{
        final.adjustYouIcon(mainData);
    }, 3100)


    //-----------------  HOVERS  ------------------ //


    // ------ DONE BUTTON HOVER ----- //

    $('.doneWithRound').hover(
        function() {

            $(this).css({'transition':'0.15s', 'filter':'hue-rotate(-70deg) saturate(5)'});

        },
        function() {

            $(this).css({'transition':'0.15s', 'filter':'hue-rotate(0deg) saturate(1)'});

        }
    )


    // ---- ICON HOVERS ---- //

    $('.iwIndex1').hover(
        function() {

            $(this).css({'cursor':'default'});

            if(final.globalVariable.blockerList[0]) {

                $('.doneWithRound').css({'transition-delay':'0s', 'transition':'0.5s', 'opacity':'0'});

                $(this).css({'cursor':'pointer'});

                if(final.globalVariable.me === 0) {
                    $('.l1you').css({'opacity':'0'});
                }

                if(final.globalVariable.me === 1) {
                    $('.f1you').css({'opacity':'0'});
                }

                $(this).css({'transition':'0.25s', 'transform':'scale(1.3)'});

                $('.sexplain').removeClass('t6 t5 t4 t3 t2 t1').addClass('t1');

                $('.sexplain').css({'transition':'0.5s', 'opacity':'1'})

                map.show.topTransition(1,0.5);
                map.show.bottomTransition(0,0.5);

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;

                $('.total1').css({'transition':'0.5s', 'opacity':'1'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.7s', 'opacity':'1'});

                var group, role, stage, data;

                group = 0;
                role = 0;

                data = payoffs[group][role][1];

                final.set.og1NP(data);

                data = payoffs[group][role][2];

                final.set.igTopNP(data);


                if(final.globalVariable.wlx === 0) {

                    data = payoffs[group][role][4];

                } else {

                    data = payoffs[group][role][3];

                }


                final.set.og2NP(data);
            }

        },
        function() {

            if(final.globalVariable.blockerList[0]) {

                $('.doneWithRound').css({'transition-delay':'0.5s', 'transition':'1.5s', 'opacity':'1'});

                if(final.globalVariable.me === 0) {
                    $('.l1you').css({'opacity':'1'});
                }

                if(final.globalVariable.me === 1) {
                    $('.f1you').css({'opacity':'1'});
                }

                $('.sexplain').css({'transition':'0.5s', 'opacity':'0'})

                $(this).css({'transition':'0.25s', 'transform':'scale(1)'});

                $('.iwIndex1').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                map.me.reset();

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;

                $('.total1').css({'transition':'0.5s', 'opacity':'0'});
            }

        }
    )

    $('.iwIndex2').hover(
        function() {

            $(this).css({'cursor':'default'});

            if(final.globalVariable.blockerList[1]) {

                $('.doneWithRound').css({'transition-delay':'0s', 'transition':'0.5s', 'opacity':'0'});

                $(this).css({'cursor':'pointer'});

                if(final.globalVariable.me === 1) {
                    $('.f1you').css({'opacity':'0'});
                }

                if(final.globalVariable.me === 2) {
                    $('.f2you').css({'opacity':'0'});
                }

                $('.sexplain').css({'transition':'0.5s', 'opacity':'1'})

                $(this).css({'transition':'0.25s', 'transform':'scale(1.3)'});

                $('.sexplain').removeClass('t6 t5 t4 t3 t2 t1').addClass('t2');

                map.show.topTransition(1,0.5);
                map.show.bottomTransition(0,0.5);

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;

                $('.total2').css({'transition':'0.5s', 'opacity':'1'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.7s', 'opacity':'1'});

                var group, role, stage, data;

                group = 0;
                role = 1;

                // stage 2 & 3
                data = payoffs[group][role][0];

                final.set.og1NP(data);

                // stage 4
                if(final.globalVariable.wlx === 0) {
                    data = 0;
                } else {
                    data = payoffs[group][role][2];
                }

                final.set.igTopNP(data);

                // stage 5 & 6
                if(final.globalVariable.wlx === 0) {

                    data = payoffs[group][role][3];

                } else {

                    if(final.globalVariable.wfx === 1){

                        data = payoffs[group][role][3];

                    } else if(final.globalVariable.wfx === 0){

                        data = payoffs[group][role][4];

                    }
                }


                final.set.og2NP(data);
            }

        },
        function() {

            if(final.globalVariable.blockerList[1]) {

                $('.doneWithRound').css({'transition-delay':'0.5s', 'transition':'1.5s', 'opacity':'1'});

                if(final.globalVariable.me === 1) {
                    $('.f1you').css({'opacity':'1'});
                }

                if(final.globalVariable.me === 2) {
                    $('.f2you').css({'opacity':'1'});
                }

                $('.sexplain').css({'transition':'0.5s', 'opacity':'0'});

                $(this).css({'transition':'0.25s', 'transform':'scale(1)'});

                $('.iwIndex2').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                map.me.reset();
                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;
                $('.total2').css({'transition':'0.5s', 'opacity':'0'});

            }

        }
    )

    $('.iwIndex3').hover(
        function() {

            $(this).css({'cursor':'default'});

            if(final.globalVariable.blockerList[2]) {

                $('.doneWithRound').css({'transition-delay':'0s', 'transition':'0.5s', 'opacity':'0'});

                $(this).css({'cursor':'pointer'});

                if(final.globalVariable.me === 2) {
                    $('.f2you').css({'opacity':'0'});
                }

                $('.sexplain').css({'transition':'0.5s', 'opacity':'1'})

                $(this).css({'transition':'0.25s', 'transform':'scale(1.3)'});

                $('.sexplain').removeClass('t6 t5 t4 t3 t2 t1').addClass('t3');

                map.show.topTransition(1,0.5);
                map.show.bottomTransition(0,0.5);

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;

                $('.total3').css({'transition':'0.5s', 'opacity':'1'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.7s', 'opacity':'1'});


                var group, role, stage, data;

                group = 0;
                role = 2;

                // stage 2 & 3
                data = payoffs[group][role][0];

                final.set.og1NP(data);

                // stage 4
                if(final.globalVariable.wlx === 0) {
                    data = 0;
                } else {
                    data = payoffs[group][role][2];
                }

                final.set.igTopNP(data);


                // stage 5 & 6
                if(final.globalVariable.wlx === 0) {

                    data = payoffs[group][role][3];

                } else {

                    if(final.globalVariable.wfx === 0){

                        data = payoffs[group][role][3];

                    } else if(final.globalVariable.wfx === 1){

                        data = payoffs[group][role][4];

                    }
                }


                final.set.og2NP(data);

            }

        },
        function() {

            if(final.globalVariable.blockerList[2]) {

                $('.doneWithRound').css({'transition-delay':'0.5s', 'transition':'1.5s', 'opacity':'1'});

                if(final.globalVariable.me === 2) {
                    $('.f2you').css({'opacity':'1'});
                }

                $('.sexplain').css({'transition':'0.5s', 'opacity':'0'})
                $(this).css({'transition':'0.25s', 'transform':'scale(1)'});
                $('.iwIndex3').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                map.me.reset();
                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;
                $('.total3').css({'transition':'0.5s', 'opacity':'0'});

            }

        }
    )

    $('.iwIndex4').hover(
        function() {

            $(this).css({'cursor':'default'});

            if(final.globalVariable.blockerList[3]) {

                $('.doneWithRound').css({'transition-delay':'0s', 'transition':'0.5s', 'opacity':'0'});

                $(this).css({'cursor':'pointer'});

                $('.sexplain').css({'transition':'0.5s', 'opacity':'1'})

                $(this).css({'transition':'0.25s', 'transform':'scale(1.3)'});

                $('.sexplain').removeClass('t6 t5 t4 t3 t2 t1').addClass('t4');

                map.show.bottomTransition(1,0.5);
                map.show.topTransition(0,0.5);

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;

                $('.total4').css({'transition':'0.5s', 'opacity':'1'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.7s', 'opacity':'1'});

                var group, role, stage, data;

                group = 1;
                role = 0;

                data = payoffs[group][role][1];

                final.set.og1NP(data);

                data = payoffs[group][role][2];

                final.set.igBottomNP(data);

                if(final.globalVariable.wlx === 1) {

                    data = payoffs[group][role][4];

                } else {

                    data = payoffs[group][role][3];

                }


                final.set.og2NP(data);

            }

        },
        function() {

            if(final.globalVariable.blockerList[3]) {

                $('.doneWithRound').css({'transition-delay':'0.5s', 'transition':'1.5s', 'opacity':'1'});

                $('.sexplain').css({'transition':'0.5s', 'opacity':'0'})
                $(this).css({'transition':'0.25s', 'transform':'scale(1)'});
                $('.iwIndex4').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                map.me.reset();
                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;
                $('.total4').css({'transition':'0.5s', 'opacity':'0'});

            }

        }
    )

    $('.iwIndex5').hover(
        function() {

            $(this).css({'cursor':'default'});

            if(final.globalVariable.blockerList[4]) {

                $('.doneWithRound').css({'transition-delay':'0s', 'transition':'0.5s', 'opacity':'0'});

                $(this).css({'cursor':'pointer'});

                $('.sexplain').css({'transition':'0.5s', 'opacity':'1'})

                $(this).css({'transition':'0.25s', 'transform':'scale(1.3)'});

                $('.sexplain').removeClass('t6 t5 t4 t3 t2 t1').addClass('t5');

                map.show.bottomTransition(1,0.5);
                map.show.topTransition(0,0.5);

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;

                $('.total5').css({'transition':'0.5s', 'opacity':'1'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.7s', 'opacity':'1'});

                var group, role, stage, data;

                group = 1;
                role = 1;

                // stage 2 & 3
                data = payoffs[group][role][0];

                final.set.og1NP(data);

                // stage 4
                if(final.globalVariable.wlx === 1) {
                    data = 0;
                } else {
                    data = payoffs[group][role][2];
                }

                final.set.igBottomNP(data);

                // stage 5 & 6
                if(final.globalVariable.wlx === 1) {

                    data = payoffs[group][role][3];

                } else {

                    if(final.globalVariable.wfx === 1){

                        data = payoffs[group][role][3];

                    } else if(final.globalVariable.wfx === 0){

                        data = payoffs[group][role][4];

                    }
                }


                final.set.og2NP(data);

            }

        },
        function() {

            if(final.globalVariable.blockerList[4]) {

                $('.doneWithRound').css({'transition-delay':'0.5s', 'transition':'1.5s', 'opacity':'1'});

                $('.sexplain').css({'transition':'0.5s', 'opacity':'0'})
                $(this).css({'transition':'0.25s', 'transform':'scale(1)'});
                $('.iwIndex5').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                map.me.reset();
                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;
                $('.total5').css({'transition':'0.5s', 'opacity':'0'});

            }
        }
    )

    $('.iwIndex6').hover(
        function() {

            $(this).css({'cursor':'default'});

            if(final.globalVariable.blockerList[5]) {

                $('.doneWithRound').css({'transition-delay':'0s', 'transition':'0.5s', 'opacity':'0'});

                $(this).css({'cursor':'pointer'});

                $('.sexplain').css({'transition':'0.5s', 'opacity':'1'})

                $(this).css({'transition':'0.25s', 'transform':'scale(1.3)'});

                $('.sexplain').removeClass('t6 t5 t4 t3 t2 t1').addClass('t6');

                map.show.bottomTransition(1,0.5);
                map.show.topTransition(0,0.5);

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;

                $('.total6').css({'transition':'0.5s', 'opacity':'1'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.7s', 'opacity':'1'});


                var group, role, stage, data;

                group = 1;
                role = 2;

                // stage 2 & 3
                data = payoffs[group][role][0];

                final.set.og1NP(data);

                // stage 4
                if(final.globalVariable.wlx === 1) {
                    data = 0;
                } else {
                    data = payoffs[group][role][2];
                }

                final.set.igBottomNP(data);


                // stage 5 & 6
                if(final.globalVariable.wlx === 1) {

                    data = payoffs[group][role][3];

                } else {

                    if(final.globalVariable.wfx === 0){

                        data = payoffs[group][role][3];

                    } else if(final.globalVariable.wfx === 1){

                        data = payoffs[group][role][4];

                    }
                }


                final.set.og2NP(data);

            }

        },
        function() {

            if(final.globalVariable.blockerList[5]) {

                $('.doneWithRound').css({'transition-delay':'0.5s', 'transition':'1.5s', 'opacity':'1'});

                $('.sexplain').css({'transition':'0.5s', 'opacity':'0'})
                $(this).css({'transition':'0.25s', 'transform':'scale(1)'});
                $('.iwIndex6').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                map.me.reset();
                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'opacity':'1'});
                final.globalVariable.payoffsHidden = 0;
                $('.total6').css({'transition':'0.5s', 'opacity':'0'});

            }

        }
    )


    final.set.og1NP = function(value) {

        var sign, color;
        color = 'black';

        if(value === 0) {
            sign = '';
        }
        if(value > 0) {
            color = 'green';
            sign = '+';
        }
        if(value < 0) {
            color = 'red';
            sign = '';
        }

        var report = sign + value;

        $('#og1NP').html(report);
        $('#og1NP').css({'opacity':'0.1s', 'color':color});

    }

    final.set.igTopNP = function(value) {

        var sign, color;
        color = 'black';

        if(value === 0) {
            sign = '';
        }
        if(value > 0) {
            color = 'green';
            sign = '+';
        }
        if(value < 0) {
            color = 'red';
            sign = '';
        }

        var report = sign + value;

        $('#igTopNP').html(report);
        $('#igTopNP').css({'opacity':'0.1s', 'color':color});

    }

    final.set.igBottomNP = function(value) {

        var sign, color;
        color = 'black';

        if(value === 0) {
            sign = '';
        }
        if(value > 0) {
            color = 'green';
            sign = '+';
        }
        if(value < 0) {
            color = 'red';
            sign = '';
        }

        var report = sign + value;

        $('#igBottomNP').html(report);
        $('#igBottomNP').css({'opacity':'0.1s', 'color':color});

    }

    final.set.og2NP = function(value) {

        var sign, color;
        color = 'black';

        if(value === 0) {
            sign = '';
        }
        if(value > 0) {
            color = 'green';
            sign = '+';
        }
        if(value < 0) {
            color = 'red';
            sign = '';
        }

        var report = sign + value;

        $('#og2NP').html(report);
        $('#og2NP').css({'opacity':'0.1s', 'color':color});

    }



    // ----- CLICKS ----- //

    final.globalVariable.payoffsHidden = 0;
    final.globalVariable.clickActive = false;

    $('.iwIndex1').click(function(){

        if(final.globalVariable.clickActive) {

            if(!final.globalVariable.payoffsHidden) {

                $('.iwIndex1').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px red'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'0'});

                map.opacity.circles('og1', 'l1', 1);
                map.opacity.circles('result', 'l1', 1);

                if(final.globalVariable.wlx === 0) {
                    map.opacity.circles('og2', 'l1', 1);
                } else {
                    if(final.globalVariable.wfx === 0) {
                        map.opacity.circles('og2', 'f1', 1);
                    } else {
                        map.opacity.circles('og2', 'f2', 1);
                    }
                }

            } else {

                $('.iwIndex1').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'1'});

                map.me.reset();

            }

            final.globalVariable.payoffsHidden = 1- final.globalVariable.payoffsHidden;

        }

    });

    $('.iwIndex2').click(function(){

        if(final.globalVariable.clickActive) {

            if(!final.globalVariable.payoffsHidden) {

                $('.iwIndex2').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px red'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'0'});

                map.opacity.circles('og1', 'f1', 1);


                if(final.globalVariable.wlx === 0) {
                    map.opacity.circles('og2', 'f1', 1);
                } else {

                    map.opacity.circles('iga', 'f1', 1);

                    if(final.globalVariable.wfx === 0) {
                        map.opacity.circles('og2', 'l1', 1);
                    } else {
                        map.opacity.circles('og2', 'f1', 1);
                    }
                }

            } else {

                $('.iwIndex2').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'1'});

                map.me.reset();

            }

            final.globalVariable.payoffsHidden = 1- final.globalVariable.payoffsHidden;

        }

    });

    $('.iwIndex3').click(function(){

        if(final.globalVariable.clickActive) {

            if(!final.globalVariable.payoffsHidden) {

                $('.iwIndex3').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px red'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'0'});

                map.opacity.circles('og1', 'f2', 1);


                if(final.globalVariable.wlx === 0) {
                    map.opacity.circles('og2', 'f2', 1);
                } else {

                    map.opacity.circles('iga', 'f2', 1);

                    if(final.globalVariable.wfx === 1) {
                        map.opacity.circles('og2', 'l1', 1);
                    } else {
                        map.opacity.circles('og2', 'f2', 1);
                    }
                }

            } else {

                $('.iwIndex3').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'1'});

                map.me.reset();

            }

            final.globalVariable.payoffsHidden = 1- final.globalVariable.payoffsHidden;

        }

    });

    $('.iwIndex4').click(function(){

        if(final.globalVariable.clickActive) {

            if(!final.globalVariable.payoffsHidden) {

                $('.iwIndex4').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px red'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'0'});

                map.opacity.circles('og1', 'ol1', 1);
                map.opacity.circles('result', 'l2', 1);

                if(final.globalVariable.wlx === 1) {
                    map.opacity.circles('og2', 'ol1', 1);
                } else {
                    if(final.globalVariable.wfx === 0) {
                        map.opacity.circles('og2', 'of1', 1);
                    } else {
                        map.opacity.circles('og2', 'of2', 1);
                    }
                }

            } else {

                $('.iwIndex4').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'1'});

                map.me.reset();

            }

            final.globalVariable.payoffsHidden = 1- final.globalVariable.payoffsHidden;

        }

    });

    $('.iwIndex5').click(function(){

        if(final.globalVariable.clickActive) {

            if(!final.globalVariable.payoffsHidden) {

                $('.iwIndex5').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px red'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'0'});

                map.opacity.circles('og1', 'of1', 1);


                if(final.globalVariable.wlx === 1) {
                    map.opacity.circles('og2', 'of1', 1);
                } else {

                    map.opacity.circles('igb', 'f1', 1);

                    if(final.globalVariable.wfx === 0) {
                        map.opacity.circles('og2', 'ol1', 1);
                    } else {
                        map.opacity.circles('og2', 'of1', 1);
                    }
                }

            } else {

                $('.iwIndex5').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'1'});

                map.me.reset();

            }

            final.globalVariable.payoffsHidden = 1- final.globalVariable.payoffsHidden;

        }

    });

    $('.iwIndex6').click(function(){

        if(final.globalVariable.clickActive) {

            if(!final.globalVariable.payoffsHidden) {

                $('.iwIndex6').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px red'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'0'});

                map.opacity.circles('og1', 'of2', 1);


                if(final.globalVariable.wlx === 1) {
                    map.opacity.circles('og2', 'of2', 1);
                } else {

                    map.opacity.circles('igb', 'f2', 1);

                    if(final.globalVariable.wfx === 1) {
                        map.opacity.circles('og2', 'ol1', 1);
                    } else {
                        map.opacity.circles('og2', 'of2', 1);
                    }
                }

            } else {

                $('.iwIndex6').css({'transition':'0.4s', 'box-shadow':'0px 6px 3px 1px transparent'});

                $('.og1NetPayoff, .igNetPayoff, .og2NetPayoff').css({'transition':'0.4s', 'opacity':'1'});

                map.me.reset();

            }

            final.globalVariable.payoffsHidden = 1- final.globalVariable.payoffsHidden;

        }

    });


    // --------- INFO BOXES ----------- //

    final.globalVariable.doneButtonActive = false;

    if(mainData.myTutorial.fB3 === 0) {

        setTimeout(()=>{

            box.transition('', 'A-1', 0, 0, 1, 0);

            $('.sexplain').css({'margin-top':'-100px'});

            setTimeout(()=>{
                box.button.show('A-1');
            }, 2000)

        }, 3000)

    } else {

        final.globalVariable.clickActive = true;

        final.setHoverBlocker();

        setTimeout(()=>{
            box.transition('', 'A-5', 0, 0, 1, 0);
            setTimeout(()=>{
                box.button.show2('A-5');
            }, 10)

            $('.sexplain').css({'margin-top':'-155px'});


        }, 3000)


        $('.sexplain').css({'transition':'0.5s', 'margin-top':'-155px', 'filter':'opacity(1)', 'opacity':'0'});

        $('#boxbox-A').css({'transition':'0.5s','margin-top':'125px', 'transform':'scale(1.7)'});

        $('.all').css({'transition':'0.5s', 'margin-top':'5px', 'transform':'scale(0.7)'});

        $('#btn-A-5').css({'transition':'0.5s', 'margin-top':'243px'});
        $('#boxwrap-A-5').css({'transition':'0.5s', 'transform':'scale(0.8)', 'margin-left':'785px'});

    }


    $('#btn-A-1').click(function() {

        box.transition('A-1', 'A-2', 0, 0, 1, 750);

        $('.sexplain').css({'margin-top':'-120px'});

        final.setHoverBlocker();

        setTimeout(()=>{
            box.button.show('A-2');
        }, 2000)

    })

    $('#btn-A-2').click(function() {

        box.transition('A-2', 'A-3', 0, 0, 1, 750);

        $('.sexplain').css({'margin-top':'-115px', 'filter':'opacity(1)', 'opacity':'0'});

        setTimeout(()=>{
            box.button.show('A-3');
        }, 2000)

    })

    $('#btn-A-3').click(function() {

        box.transition('A-3', 'A-4', 0, 0, 1, 750);

        $('.sexplain').css({'margin-top':'-110px'});

        final.globalVariable.clickActive = true;

        setTimeout(()=>{
            box.button.show('A-4');
        }, 2000)

    })

    $('#btn-A-4').click(function() {

        box.transition('A-4', 'A-5', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show2('A-5');
        }, 760)

    })

    $('#btn-A-5').click(function() {

        // ------ tutorial setup --------- //

        if(mainData.myTutorial.fB3 === 0) {

            box.transition('A-5', '', 0, 0, 1, 0);

            icon.ff.showAllIcons();
            $('.all').css({'transition':'2s', 'margin-top':'-84px', 'transform':'scale(0.5)'});

            $('#boxbox-A').css({'transition':'2s','margin-top':'125px', 'transform':'scale(1.7)'});
            setTimeout(()=>{


                box.transition('', 'A-6', 0, 0, 1, 0);

                setTimeout(()=>{
                    final.unlockBlocker();
                }, 1000)

                setTimeout(()=>{
                    box.button.show('A-6');
                }, 2000)

            }, 750)

        } else {

            box.transition('A-5', '', 0, 0, 1, 0);

            $('.sexplain').css({'margin-top':'-110px'});

            icon.ff.showAllIcons();

            $('.doneWithRoundButton').css({'display':'block'});

            setTimeout(()=>{
                final.unlockBlocker();
            }, 1000)

            setTimeout(()=>{
                $('#someDescription').css({'transition':'2s', 'opacity':'0'})
            }, 2000)

            setTimeout(()=>{
                $('.doneWithRound').css({'transition':'1s', 'transform':'scale(1)'});
                final.globalVariable.doneButtonActive = true;
            }, 5000)
        }

    })

    $('#btn-A-6').click(function() {

        box.transition('A-6', 'A-7', 0, 0, 1, 750);

        setTimeout(()=>{
            box.button.show('A-7');
        }, 2000)

    })

    $('#btn-A-7').click(function() {

        $('.doneWithRoundButton').css({'display':'block'});

        box.transition('A-7', 'A-8', 0, 0, 1, 750);

        setTimeout(()=>{

            $('.doneWithRound').css({'transition':'1s', 'transform':'scale(1)'});
            $('#someDescription').css({'transition':'1s', 'opacity':'0'})

        }, 1000)

        setTimeout(()=>{
            box.button.show('A-8');
        }, 2000)

    })

    $('#btn-A-8').click(function() {

        final.globalVariable.doneButtonActive = true;

        box.transition('A-8', '', 0, 0, 1, 0);

        $('.all').css({'transition':'1.5s', 'margin-top':'5px', 'transform':'scale(0.75)'});
        $('.someTitle').css({'margin-top':'25px'});

    })



    // -------- SUBMIT BUTTON -------- //


    $('#doneWithRound').click(function() {

        if(final.globalVariable.doneButtonActive) {

            // NODE GAME ACTION


            // TEMPORARY ACTION
            $('.wrap').css({'transition':'0.1s', 'opacity':'0', 'transform':'scale(0)'});

        } else {
            console.log('button not activated');
        }

    })


}
