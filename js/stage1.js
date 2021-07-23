// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ----------------           MAINDATA             ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //


let mainData = {};



// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ---------------- GENERAL GRAPHICAL HELPER TOOLS ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //

var pumpingActive = true;
var pumpReady = function(state) {

    if(pumpingActive) {

        if(state === 0) {

            $('.playerRandomSortImageWrap').css({'transition':'0.7s',
            'transform':'scale(1.05)'})

            setTimeout(()=>{
                pumpReady(1);
            }, 600)

        }

        if(state === 1) {

            $('.playerRandomSortImageWrap').css({'transition':'0.7s',
            'transform':'scale(1)'})

            setTimeout(()=>{
                pumpReady(0);
            }, 600)

        }

    } else {

        $('.playerRandomSortImageWrap').css({'transition':'0.7s',
        'transform':'scale(1)'});

    }

}


var wiggleArrowActive = false;
var wiggleArrow = function(state) {

    if(wiggleArrowActive) {

        if(state === 0) {
            $('.youAreArrowWrap').css({'transition':'0.7s', 'margin-top':'-5px'});
            setTimeout(()=>wiggleArrow(1), 600);

        }

        if(state === 1) {
            $('.youAreArrowWrap').css({'transition':'0.7s', 'margin-top':'-15px'});
            setTimeout(()=>wiggleArrow(0), 600);
        }

    } else {
        $('.youAreArrowWrap').css({'margin-top':'-10px'});
    }

}

var pumpFinalButtonActive = false;
var pumpFinalButton = function(state) {

    if(pumpFinalButtonActive) {

        if(state === 0) {

            $('.buttonPump').css({'transition':'1s', 'transform':'scale(1.03) translateY(-2px)'});
            $('.specialStage1DoneButton').css({'transition':'1s', 'box-shadow':'0px 5px 4px 2px black'})
            setTimeout(()=>{
                pumpFinalButton(1);
            }, 750)

        }

        if(state === 1) {

            $('.buttonPump').css({'transition':'1s', 'transform':'scale(1) translateY(2px)'});
            $('.specialStage1DoneButton').css({'transition':'1s', 'box-shadow':'0px 1px 4px 2px black'})
            setTimeout(()=>{
                pumpFinalButton(0);
            }, 1200)

        }


    }

}

var unbalanceActive = true;
var unbalanceScale = function(state) {

    $('.g1Uneven, .g2Uneven').css({'transition':'1s', 'opacity':'1'});
    // setTimeout(()=>{
    // }, 500)


    if(unbalanceActive) {

        if(state === 0) {

            $('.unbalance').css({
                'transition':'2s',
                'transform':'rotateY(180deg) rotateZ(15deg)',
            });

            $('.uneven2').css({'background-color':'blue'});
            setTimeout(()=>{

                $('.uneven1').css({
                    'transition':'1s',
                    'opacity':'0'
                });
                $('.uneven3').css({
                    'transition':'1s',
                    'opacity':'1'
                });

            }, 250)


            setTimeout(()=>{
                unbalanceScale(1);
            }, 1700)

        }

        if(state === 1) {

            $('.uneven2').css({'background-color':'rgb(50 50 50)'});
            $('.uneven1').css({
                'transition':'0.15s',
                'opacity':'1'
            });
            $('.uneven3').css({
                'transition':'0.5s',
                'opacity':'0'
            });

            $('.unbalance').css({
                'transition':'2s',
                'transform':'rotateY(180deg) rotateZ(-1deg)'
            });

            setTimeout(()=>{
                unbalanceScale(0);
            }, 1500)

        }

    }


}


var sparkleActive = true;
var showSparkle = true;
var sparkle = function() {

    if(sparkleActive) {

        if(showSparkle) {

            $('.dynamicYouAreWrap').css({'transition':'0.15s', 'filter': 'hue-rotate(95deg) saturate(5)'})
            $('.playerRandomSortImage2').css({'filter': 'hue-rotate(0deg) saturate(1)'})
            $(tool.sparkleMe).css({'transition':'0.15s', 'filter': 'hue-rotate(0deg) saturate(1) drop-shadow(0px 7px 3px black)'})

            setTimeout(()=>{
                $('.dynamicYouAreWrap').css({'transition':'0.15s', 'filter': 'hue-rotate(0deg) saturate(5)'})
                $('.playerRandomSortImage2').css({'filter': 'hue-rotate(-95deg) saturate(5)'})
                $(tool.sparkleMe).css({'transition':'0.15s', 'filter': 'hue-rotate(-95deg) saturate(5) drop-shadow(0px 7px 3px black)'})
            }, 2000)

        }

        setTimeout(()=>{
            sparkle();
        }, 2200)

    } else {
        $(tool.sparkleMe).css({'transition':'0.15s', 'filter': 'hue-rotate(0deg) saturate(1) drop-shadow(0px 7px 3px black)'})
    }

}

$('.playerRandomSortImage2').hover(
    function() {
        $('.dynamicYouAreWrap').css({'filter': 'hue-rotate(0deg) saturate(5)'})
        $('.playerRandomSortImage2').css({'filter': 'hue-rotate(-95deg) saturate(5)'})
        $(tool.sparkleMe).css({'transition':'0.15s', 'filter': 'hue-rotate(-95deg) saturate(5) drop-shadow(0px 7px 3px black)'})
        showSparkle = false;
    },
    function() {
        $('.dynamicYouAreWrap').css({'filter': 'hue-rotate(95deg) saturate(5)'})
        $('.playerRandomSortImage2').css({'filter': 'hue-rotate(0deg) saturate(1)'})
        $(tool.sparkleMe).css({'transition':'0.15s', 'filter': 'hue-rotate(0deg) saturate(1) drop-shadow(0px 7px 3px black)'})
        showSparkle = true;
    }
)



// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ----------------             ON LOAD            ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //


window.onload = function() {

    adjustWindowSize();

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
    //     activateStage1();
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

    // node.on('timeUp', function() {
    //
    //     console.log('TIME IS UP !!!!!!');
    //     console.log('CLIENT FAILED TO CLICK IN TIME');
    //     console.log('AUTO SENDING READY MESSAGE TO CLIENT');
    //
    //
    //     var msg = {
    //         stage:1,
    //     }
    //
    //     node.emit('HTML-decision', msg);
    //
    // })


    var activateStage1 = function() {


        console.log('INSIDE ACTIVATE STAGE 1');
        console.log('sorted array: ' + mainData.sortedArray);
        console.log('treatment: ' + mainData.treatment);
        console.log('my count: ' + mainData.myCount);


        // ------------------------------------------------------------------- //
        // ---------------------- Global Initiations ------------------------- //
        // ------------------------------------------------------------------- //


        icon.globalVariable.isPracticeRound = undefined;

        icon.globalVariable.ourFollowersAreHetero = undefined;
        icon.globalVariable.theirFollowersAreHetero  = undefined;
        icon.globalVariable.bothHomo = undefined;
        icon.globalVariable.bothHetero = undefined;


        // DONT SHOW TUTORIAL AFTER X MANY ROUNDS
        tool.info.skipTutorialAfterRound = 3;
        tool.sparkleMe = undefined;

        tool.activateG2UnevenLater = false;
        tool.activateG1UnevenLater = false;


        // ----------------------------------------------------------------------- //
        // ----------------------------------------------------------------------- //
        // ---------------------- INFO BOX TEXT GENERATOR ------------------------ //
        // ----------------------------------------------------------------------- //
        // ----------------------------------------------------------------------- //

        // ----- COUNT DOWN FOR THE REGULAR GAME IS HERE ---- //
        icon.stage1.text = function() {

            $('.wrap2').css({'transition':'1s', 'margin-top':'-475px'});
            $('#boxbox-C').css({'opacity':'1'});

            if(!tool.info.skip) {

                box.transition('', 'C-1', 0, 0, 1, 0);
                setTimeout(()=>{
                    box.button.show('C-1');
                }, 1250)

            } else {

                // node.emit('countDown', 5000);
                console.log('node.emit(countDown)');

                box.transition('', 'C-3', 0, 0, 1, 0);
                setTimeout(()=>{
                    box.button.show2('C-3');
                }, 1000)

            }


            var text1, text2;

            var myIndex = icon.stage1.sortedArray.indexOf(icon.globalVariable.playerIndex);


            if(icon.globalVariable.ourFollowersAreHetero) {

                if(myIndex === 0) {

                    text1 = 'You are the <span class=b500>leader</span> of your group.';

                    if(icon.globalVariable.theirFollowersAreHetero) {

                        text2 = 'In <span class=b500>both</span> groups, there is ' +
                        '<span class=b5>1</span> <i>strong</i> and ' +
                        '<span class=b5>1</span> <i>weak</i> follower.';

                    } else {

                        text2 = 'Your followers have <span class=b500>unequal</span> ' +
                        'power';

                        $('.g1UnevenInfoBox').css({'transform':'scale(0.8)'});
                        $('.g1Uneven').css({'transition':'0s', 'transform':'scale(0)'})
                        tool.activateG1UnevenLater = true;

                        if(tool.info.skip) {
                            setTimeout(()=>{
                                $('.g1Uneven').css({'transition':'1s', 'transform':'scale(1)'})
                            }, 1000)
                        }

                    }

                }

                if(myIndex === 1) {

                    text1 = 'You are the <span class=b500>strong follower</span> of your group.';

                    if(icon.globalVariable.theirFollowersAreHetero) {

                        text2 = 'In <span class=b500>both</span> groups, there is ' +
                        '<span class=b5>1</span> <i>strong</i> and ' +
                        '<span class=b5>1</span> <i>weak</i> follower.';

                    } else {

                        text2 = 'In the <span class=b500>opposing</span> group, ' +
                        'followers have <span class=b500>equal<span/> power';

                        $('.g1UnevenInfoBox2').css({'transform':'scale(0.8)'});

                    }

                }

                if(myIndex === 2) {

                    text1 = 'You are the <span class=b500>weak follower</span> of your group.';

                    if(icon.globalVariable.theirFollowersAreHetero) {

                        text2 = 'In <span class=b500>both</span> groups, there is ' +
                        '<span class=b5>1</span> <i>strong</i> and ' +
                        '<span class=b5>1</span> <i>weak</i> follower.';

                    } else {

                        text2 = 'In the <span class=b500>opposing</span> group, ' +
                        'followers have <span class=b500>equal<span/> power';

                        $('.g1UnevenInfoBox2').css({'transform':'scale(0.8)'});

                    }

                }

            }

            if(!icon.globalVariable.ourFollowersAreHetero) {

                if(myIndex === 0) {

                    text1 = 'You are the <span class=b500>leader</span> of your group.';

                    if(icon.globalVariable.theirFollowersAreHetero) {

                        text2 = 'In the <span class=b500>opposing</span> group, ' +
                        'followers have <span class=b500>unequal<span/> power';

                        $('.g2UnevenInfoBox').css({'transform':'scale(0.8)'});

                        $('.g2Uneven').css({'transition':'0s', 'transform':'scale(0)'})
                        tool.activateG2UnevenLater = true;

                        if(tool.info.skip) {
                            setTimeout(()=>{
                                $('.g2Uneven').css({'transition':'1s', 'transform':'scale(1)'})
                            }, 1000)
                        }


                    }

                }

                if(myIndex === 1 || myIndex === 2) {

                    text1 = 'You are the <span class=b500>follower</span> of your group.';

                    if(icon.globalVariable.theirFollowersAreHetero) {

                        text2 = 'In the <span class=b500>opposing</span> group, ' +
                        'followers have <span class=b500>unequal<span/> power';

                        $('.g2UnevenInfoBox').css({'transform':'scale(0.8)'});

                        $('.g2Uneven').css({'transition':'0s', 'transform':'scale(0)'})
                        tool.activateG2UnevenLater = true;

                        if(tool.info.skip) {
                            setTimeout(()=>{
                                $('.g2Uneven').css({'transition':'1s', 'transform':'scale(1)'})
                            }, 1000)
                        }



                    }

                }

            }

            if(icon.globalVariable.bothHomo) {

                text2 = '';
                // $('.text').css({'font-size':'35px'});

            }



            $('#text1').html(text1);
            $('#text2').html(text2);


        }


        // -------------------------------------------------------------------------- //
        // -------------------------------------------------------------------------- //
        // ---------------------------- BOX ACTION ---------------------------------- //
        // -------------------------------------------------------------------------- //
        // -------------------------------------------------------------------------- //


        // FIRST GO BUTTON
        $('#btn-B-1').click(function() {

            $('#boxbox-B').css({'transition':'0.4s', 'transform':'scale(0)'});
            $('.showSecond').css({'display':'flex'});
            wiggleArrow(1)
            setTimeout(()=>{

                $('.showSecond').css({'transition':'0.7s', 'transform':'scale(1)'});

                setTimeout(()=>{

                    $('.playerRandomSortImage2').css({'transition':'0.5s', 'transform':'scale(1)'})

                    if(!tool.info.skip) {
                        box.show('box-A-2');
                    }

                    sparkle();

                    setTimeout(()=>{
                        $('.playerRandomSortImage2').css({'transition':'0.15s'})
                    }, 150)

                }, 500)

            }, 750);

        });

        // READY BUTTON
        $('#stage1RandomButton').click(function() {

            pumpingActive = false;
            wiggleArrowActive = false;
            sparkleActive = false;
            showSparkle = false;

            // check button dissapears
            $('.playerRandomSortImage2').css({'transition':'0.3s', 'transform':'scale(0) rotateY(2turn)'});
            $('.wrap1').css({'transition':'0.3', 'margin-top':'33px', 'margin-bottom':'45px'});
            $('#boxwrap-A-2').css({'transition':'0.3', 'transform':'scale(0)'});

            $('.firstboxbox').css({'margin-bottom':'0px'});


            $('.wrap2').css({'margin-top':'-196px'});

            if(!tool.info.skip) {
                $('.wrap2').css({'margin-top':'-310px'});
            }


            setTimeout(()=>{
                $('.wrap2').css({'opacity':'1'});
            },300)

            setTimeout(()=>icon.stage1.animateSort(500), 1500);

        })

        $('#btn-C-1').click(function() {

            if(!icon.globalVariable.bothHomo) {

                box.transition('C-1', 'C-2', 1, 0, 1, 500);

                $('.g1UnevenInfoBox2').css({'transition':'0.5s', 'filter':'opacity(0)'});

                if(tool.activateG2UnevenLater) {
                    setTimeout(()=>{
                        $('.g2Uneven').css({'transition':'0.5s', 'transform':'scale(1)'})
                    }, 750)
                }

                if(tool.activateG1UnevenLater) {
                    setTimeout(()=>{
                        $('.g1Uneven').css({'transition':'0.5s', 'transform':'scale(1)'})
                    }, 750)
                }

                setTimeout(()=>{
                    box.button.show('C-2');
                }, 3000);

            } else {

                box.transition('C-1', 'C-3', 1, 0, 1, 500);

                setTimeout(()=>{
                    box.button.show2('C-3');
                }, 750);

            }

        })


        // ---- COUNT DOWN FOR TUTORIAL IS HERE -------- //
        $('#btn-C-2').click(function() {

            // node.emit('countDown', 10000);
            console.log('node.emit(countDown) -> 10seconds');

            box.transition('C-2', 'C-3', 1, 0, 1, 0);

            $('.g2UnevenInfoBox, .g1UnevenInfoBox').css({'transition':'0.5s', 'filter':'opacity(0)'});

            setTimeout(()=>{
                box.button.show2('C-3');
            }, 750);

        })

        // FINAL BUTTON TO PROCEED TO THE NEXT SECTION
        $('#btn-C-3').click(function() {

            $('#boxbox-C').css({'opacity':'0', 'transform':'scale(0)'});

            var msg = {
                stage:1,
            }

            // node.emit('HTML-decision', msg);
            console.log('node.emit(html-decision): ' + msg);

            setTimeout(()=>{

                // debug this will be called by the listener
                tool.set.NORP(1)

                $('.norp').appendTo('.pleaseWait');

                $('.norp').css({'position':'static'});

                $('.pleaseWait').css({'display':'block', 'position':'static'});

                setTimeout(()=>{

                    $('.pleaseWait').css({'transition':'0.5s', 'opacity':'1'});

                    $('.norp').css({'transition':'0.5s', 'filter':'opacity(1)',
                    'opacity':'1'});

                    flowLoad(1);

                }, 100)

            }, 500)


        });

        // when hovered over the FINAL BUTTON slowly fight icon appears
        $('.buttonPump').hover(
            function() {
                $('.bigFightIconWrap').css({'transition':'5s', 'opacity':'1'});
            },
            function() {
                // $('.bigFightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
            }
        )


        // -------------------------------------------------------------------------- //
        // -------------------------------------------------------------------------- //
        // --------------------------------- ACTION --------------------------------- //
        // -------------------------------------------------------------------------- //
        // -------------------------------------------------------------------------- //


        tool.set.roundNumber(mainData);

        tool.set.YAHPosition(mainData);

        box.button.hide('B-1');
        setTimeout(()=>{
            $('.initialBox').css({'transform':'scale(1)'});
            setTimeout(()=>{
                $('.initialTextInside').css({'opacity':'1'});
                setTimeout(()=>{
                    box.button.show('B-1', 2);
                }, 1250)
            }, 100)
        }, 500)

        // debugger

        tool.rearrangeGroupOrder(mainData);

        generateIcons(mainData);

        icon.set.stage1();
        icon.display.stage1(true);

        box.set.treatment(mainData);

        tool.skipInfoBox(mainData);

        tool.set.balanceGraphics(mainData);

        tool.set.fLSize();


    }


    // ------ debug data ------ //
    mainData = {
        myRound: 4,
        sortedArray: [0,2,5,4,3,1],
        treatment: [1,0],
        myCount: 1
    }


    activateStage1();

}
