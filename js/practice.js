
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// ----------------------    OUT-GROUP CALCULATOR    ------------------------ //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //


// -------------------------------------------------------------------------- //
// -----------------------------  GLOBALS  ---------------------------------- //
// -------------------------------------------------------------------------- //


let practice_calculator = {

    globalVariable: {
        frame: {},
        tutorial: {},
        display: {},
        hover: {},
    },
    refresh: {},
    space: {
        update:{},
        open: {},
        close:{},
    },
    icons: {
        calculate: {},
        update: {},
        set: {},
        rescale: {},
        show: {},
        hide: {},
        enervate:{},
        enervate2:{},
    },
    values: {
        update: {},
        set: {},
    },
    graphics: {
        hide: {},
        update: {},
        activate: {},
    },
    decisionSlider: {
        leader:{},
        follower:{},
    },
    results: {
        opacity:{},
        softHide:{},
        display:{},
        update:{},
        show:{},
        hide:{},
        disable:{},
        leader:{
            update:{},
            display:{},
        },
    },
    titles: {
        hs: {
            ghost:{},
        },
        contest: {},
        set:{},
        update:{},
        opacity:{},
    },
    slider : {
        followerDecision: {},
        playerDecision: {},
    },
    questions: {
        activate:{},
        spin1:{},
        spin2:{},
    },
    lock: {
        switch: {},
        vibrate: {},
        activate:{},
    },
    button: {
        animate:{},
        enable: {},
        disable: {},
        display: {},
    },
    pointers: {
        wiggle: {},
        activate: {},
    },
    section: {
        all:{
            adjust: {},
        },
        hs: {
            transition:{},
            opacity:{},
            display:{},
            set:{},
            show:{},
            hide:{}
        },
        contest: {
            show:{},
            hide:{},
            display:{},
            opacity:{},
        },
        power: {
            set:{},
            opacity:{},
            display:{},
            adjust:{},
        },
        decision: {
            leader: {},
            follower: {},
            player: {},
        },
    },
    opacity: {},
    initiate: {},
    hide: {},
    show: {},
    wheel: {},
    update: {},
    display: {},
    set: {},
    setup: {},
    disable: {},
    enable: {},
    roll: {},
    currentBalance: {},
    netBalance: {},
    sync: {},
    flash: {},
    open:{},
    close: {},

};

let efo, oefo, efi, oefi, pwin, efefo, oefefo;
let s1, h1, s2, h2, ts, th, os1, oh1, os2, oh2, tos, toh;


// -------------------------------------------------------------------------- //
// ---------------------------  OG GENERATOR  ------------------------------- //
// -------------------------------------------------------------------------- //


let generateOG = function(myData) {

    /////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
    /////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
    /////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
    /////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////

    practice_calculator.globalVariable.isOG1 = undefined;
    practice_calculator.globalVariable.isOG2 = undefined;
    practice_calculator.globalVariable.isIGA = undefined;
    practice_calculator.globalVariable.isIGB = undefined;

    practice_calculator.globalVariable.ourFollowersAreHetero = true;
    practice_calculator.globalVariable.theirFollowersAreHetero = true;

    practice_calculator.globalVariable.winnerLeaderIndex = 2;
    practice_calculator.globalVariable.winnerFollowerIndex = 1;

    // --------- ALWAYS TRUE FOR OG SETUP ---------- //
    practice_calculator.globalVariable.playerView = undefined;

    // --------- TO BE DEFINED BY MYDATA -> NODE DATA -------- //
    // these are defined on an other function
    practice_calculator.globalVariable.playerIndex = undefined; //-1,0,1 (l,f1,f2)

    practice_calculator.globalVariable.tutorial.IGSameColor = undefined;
    practice_calculator.globalVariable.tutorial.IGDifferentColor = undefined;
    practice_calculator.globalVariable.tutorial.weAreInTutorial = undefined;

    // RESULT DISPLAY ON/OFF VARIABLES (AFTER SPIN)
    practice_calculator.globalVariable.display.hsIcons = undefined;
    practice_calculator.globalVariable.display.hsResults = undefined;
    practice_calculator.globalVariable.display.hsMainTitle = undefined;
    practice_calculator.globalVariable.display.hsGhostTitle = undefined;
    practice_calculator.globalVariable.display.hsButton = undefined;
    practice_calculator.globalVariable.display.hsMinimize = undefined;

    practice_calculator.globalVariable.display.cResults = undefined;
    practice_calculator.globalVariable.display.cTitle = undefined;
    practice_calculator.globalVariable.display.cButton = undefined;
    practice_calculator.globalVariable.display.cMinimize = undefined;

    practice_calculator.globalVariable.contestResultsExist = false;

    // HOVER ON/OFF VARIABLES
    practice_calculator.globalVariable.hover.hsMinimize = undefined;
    practice_calculator.globalVariable.hover.hsIcons = undefined;
    practice_calculator.globalVariable.hover.hsResults = undefined;
    practice_calculator.globalVariable.hover.hsMainTitle = undefined;
    practice_calculator.globalVariable.hover.hsGhostTitle = undefined;
    practice_calculator.globalVariable.hover.hsButton = undefined;

    practice_calculator.globalVariable.hover.cMinimize = undefined;
    practice_calculator.globalVariable.hover.cResults = undefined;
    practice_calculator.globalVariable.hover.cTitle = undefined;
    practice_calculator.globalVariable.hover.cButton = undefined;

    practice_calculator.decisionSlider.leader.isFlashing;


    practice_calculator.graphics.dynamicPowerBarText;


    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////
    //////////////////////// WHEEL ///////////////////////


    practice_calculator.wheel.spinDuration = 5;
    practice_calculator.wheel.spinNumber = 25;
    practice_calculator.wheel.isSpinning = false;

    practice_calculator.wheel.create = function(probability, id) {

        var a = 100*probability;
        var b = 100-a;

        var leaderColorArray = ['rgb(60,60,60)', 'rgb(210,210,210)'];

        var followerAColorArray = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];
        var followerBColorArray = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];
        var colors;

        if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {
            leaderColorArray = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
        }

        //---------------------------//

        //---- in-group contest follower's competition color setup for leader's view----//

        if(!practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            // In-group contest A, leader's point of view
            if(practice_calculator.globalVariable.isIGA) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    followerAColorArray = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                }
            }

            // In-group contest A, leader's point of view
            if(practice_calculator.globalVariable.isIGB) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                }
            }

        }


        // no need to account for subjective view setup as the default setup is for the subjective view

        //---- only for tutorial ----//
        // tutorial showing two followers as the same color to argue that we will use a different color
        if(practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.tutorial.IGSameColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    followerAColorArray = ['rgb(60,60,60)', 'rgb(60,60,60)'];
                }
                if(practice_calculator.globalVariable.isIGB) {
                    followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,210)'];
                }
            }
            // tutorial showing two followers with different colors
            if(practice_calculator.globalVariable.tutorial.IGDifferentColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    followerAColorArray = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                }
                if(practice_calculator.globalVariable.isIGB) {
                    followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                }
            }

        }

        //---- only for tutorial ----//

        //---------------------------//


        if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {
            colors = leaderColorArray;
        }

        if(practice_calculator.globalVariable.isIGA) {
            colors = followerAColorArray;
        }

        if(practice_calculator.globalVariable.isIGB) {
            colors = followerBColorArray;
        }

        practice_calculator.wheel.myWheelObj = new Winwheel({
            'canvasId': id,
            'numSegments': 2,
            'lineWidth' : 0,
            'outerRadius': 58, // controls the size of the theWheel
            'textOrientation' : 'curved',    // Set orientation. horizontal, vertical, curved.
            'textFontFamily'  : 'Courier',     // Monospace font best for vertical and curved.
            'rotationAngle':Math.random()*360,
            'textFontSize':20,

            'segments':
            [
                {
                    'fillStyle' : colors[0],
                    'strokeStyle':'transparent',
                    // 'textFillStyle': 'white',
                    // 'text'      : 'A wins',
                    'size'      : winwheelPercentToDegrees(a),
                },
                {
                    'fillStyle' : colors[1],
                    'strokeStyle':'transparent',
                    // 'textFillStyle': 'rgb(60, 60, 60)',
                    // 'text'      : 'B wins',
                    'size'      : winwheelPercentToDegrees(b),
                },
            ],
            'animation' :
            {
                'type'     : 'spinToStop',
                'duration' : practice_calculator.wheel.spinDuration,
                'spins'    : practice_calculator.wheel.spinNumber,
                'callbackFinished' : '',
            }
        });

    }


    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////
    /////////////////// GRAPHICS ////////////////////


    var logistic2 = function(val , k) {
        var L = 1;
        var m = 0.5;
        var result;
        result= L / (1 + Math.exp(-k * (val - m)));
        return result;
    }

    var nzt = function(val) {
        return (val != 0) ? val : '';
    }

    //-------------- PIE ----------------//
    practice_calculator.globalVariable.pieBorderRight = false;
    practice_calculator.globalVariable.pieBorderLeft = false;
    practice_calculator.graphics.update.pie = function() {

        var x = pwin;
        var y = 1-pwin;
        if(typeof(x) === 'undefined') x = 0;
        if(typeof(y) === 'undefined') y = 0;
        if((x + y) === 0) {
            x = 1;
            y = 1;
        }

        var pieColors;
        var lcolors = ['rgb(210, 210, 210)', 'rgb(60, 60, 60)'];
        var fcolors = ['rgb(60, 60, 60)', 'rgb(35, 79, 30)'];
        var ofcolors = ['rgb(210, 210, 210)', 'rgb(35, 79, 30)'];

        //---------------------------//

        //---- only for tutorial ----//
        // tutorial showing two followers as the same color to argue that we will use a different color
        if(practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.tutorial.IGSameColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    fcolors = ['rgb(60,60,60)', 'rgb(60,60,60)'];
                }
                if(practice_calculator.globalVariable.isIGB) {
                    ofcolors = ['rgb(210,210,210)', 'rgb(210,210,210)'];
                }
            }
            // tutorial showing two followers with different colors
            if(practice_calculator.globalVariable.tutorial.IGDifferentColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    fcolors = ['rgb(210,210,0)', 'rgb(60,60,60)'];
                }
                if(practice_calculator.globalVariable.isIGB) {
                    ofcolors = ['rgb(210,210,0)', 'rgb(210,210,210)'];
                }
            }

        }
        //---- only for tutorial ----//

        //---------------------------//

        //---- in-group contest follower's competition color setup for leader's view----//

        // In-group contest A, leader's point of view
        if(!practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.isIGA) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    fcolors = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                }
            }

            // In-group contest A, leader's point of view
            if(practice_calculator.globalVariable.isIGB) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    ofcolors = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                }
            }

        }

        //---------------------------//


        if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {
            lcolors = ['rgb(210, 210, 210)', 'rgb(35, 79, 30)'];
        }


        var p1, p2;

        if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {

            pieColors = lcolors;

            p1 = 'LEADER A';
            p2 = 'LEADER B';

        }

        if(practice_calculator.globalVariable.isIGA) {

            pieColors = fcolors;

            p1 = 'FOLLOWER 1A';
            p2 = 'FOLLOWER 2A';

            if(practice_calculator.globalVariable.ourFollowersAreHetero) {

                p1 = 'STRONG F.';
                p2 = 'WEAK F.';

                if(practice_calculator.globalVariable.playerIndex === 1) {
                    p1 = 'WEAK F.';
                    p2 = 'STRONG F.';
                }

            }

        }

        // RELEVANT ONLY FOR TUTORIAL
        if(practice_calculator.globalVariable.isIGB) {

            pieColors = ofcolors;

            p1 = 'FOLLOWER 1B';
            p2 = 'FOLLOWER 2B';

            if(practice_calculator.globalVariable.theirFollowersAreHetero) {

                p1 = 'STRONG F.';
                p2 = 'WEAK F.';

                if(practice_calculator.globalVariable.playerIndex === 1) {

                    p1 = 'WEAK F.';
                    p2 = 'STRONG F.';

                }

            }

        }


        var pieBorderArray = Array(2);
        pieBorderArray = [0,0];
        if(practice_calculator.globalVariable.pieBorderLeft) {
            pieBorderArray = [0,3];
        }
        if(practice_calculator.globalVariable.pieBorderRight) {
            pieBorderArray = [3,0];
        }


        var playerLabels = [p2, p1];

        var data = [{
            values: [y, x],
            labels: playerLabels,
            textinfo:'none',
            textfont: {
                // color: ['black', 'white'],
                color: ['transparent', 'transparent']
            },
            type: 'pie',
            sort: false,
            hoverinfo: 'percent+label',
            automargin: true,
            marker:{
                colors: pieColors,
                line: {
                    color: 'lime',
                    width: pieBorderArray,
                },
            }
        }];

        var layout = {
            height: 115,
            width: 115,
            font:{
                size: 10
            },
            margin: {"t": 2, "b": 2, "l":2, "r": 2},
            showlegend: false,
        };

        Plotly.react('pie', data, layout, {displayModeBar: false});
    }


    //-------------- LEADER EFFORT ----------------//
    practice_calculator.graphics.update.effortBar = function(e, barId, ourSide, axisOn) {

        var y = e;
        if(typeof(x) === 'undefined') x = 0;

        var upperBound, myTickVal, myTickText, myRange;

        var colorArrays = Array(2);
        var insideTextColor = Array(2);

        if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {

            colorArrays = ['rgb(60, 60, 60)', 'rgb(210, 210, 210)'];
            upperBound = 742;
            myTickVal = [0, 50, 100, 150, 250, 350, 500, 650, 800];
            myTickText = [0, 50, 100, 150, 250, 350, 500, 650, 800];
            myRange = [0, 800];
            insideTextColor = ['white', 'black'];

            if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {
                colorArrays[0] = 'rgb(35, 79, 30)';
            }

        }

        if(practice_calculator.globalVariable.isIGA || practice_calculator.globalVariable.isIGB) {

            upperBound = 128;
            myTickVal = [0, 5, 10, 20, 30, 50, 75, 100, 140];
            myTickText = [0, 5, 10, 20, 30, 50, 75, 100, 140];
            myRange = [0, 140];

        }

        if(practice_calculator.globalVariable.isIGA) {

            colorArrays = ['rgb(35, 79, 30)', 'rgb(60, 60, 60)'];
            insideTextColor = ['white', 'white'];

        }

        if(practice_calculator.globalVariable.isIGB) {

            colorArrays = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
            insideTextColor = ['white', 'black'];

        }

        //---------------------------//

        //---- only for tutorial ----//
        // tutorial showing two followers as the same color to argue that we will use a different color
        if(practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.tutorial.IGSameColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    colorArrays = ['rgb(60,60,60)', 'rgb(60,60,60)'];
                    insideTextColor = ['white', 'white'];
                }
                if(practice_calculator.globalVariable.isIGB) {
                    colorArrays = ['rgb(210,210,210)', 'rgb(210,210,210)'];
                    insideTextColor = ['black', 'black'];
                }
            }
            // tutorial showing two followers with different colors
            if(practice_calculator.globalVariable.tutorial.IGDifferentColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    colorArrays = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                    insideTextColor = ['white', 'black'];
                }
                if(practice_calculator.globalVariable.isIGB) {
                    colorArrays = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                    insideTextColor = ['black', 'black'];
                }
            }

        }
        //---- only for tutorial ----//

        //---------------------------//

        //---- in-group contest follower's competition color setup for leader's view----//

        // In-group contest A, leader's point of view
        if(!practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.isIGA) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    colorArrays = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                    insideTextColor = ['white', 'black'];
                }
            }

            // In-group contest A, leader's point of view
            if(practice_calculator.globalVariable.isIGB) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    colorArrays = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                    insideTextColor = ['black', 'black'];
                }
            }

        }

        //---------------------------//

        var mColor = ourSide ? colorArrays[0] : colorArrays[1];

        var mytextpos = 'outside';

        var somecolor = 'black';

        if(y > upperBound) {

            mytextpos = 'inside';


            if(barId === 'barl1') {
                somecolor = insideTextColor[0];
            }

            if(barId === 'barl2') {
                somecolor = insideTextColor[1];
            }

        }


        var data = [{
            x: [y],
            name: [''],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            cliponaxis: false,
            marker:{
                color: mColor,
            },
            text: [y],
            textfont: {
                size: '14',
                color:somecolor,
            },
            orientation: 'h',
            // textanchor: 'right',
            textposition: mytextpos,
        }];

        var ticktextcolors = ['black', 'white'];
        var tindex = 1;

        var papercolors = ['rgb(60, 60, 60)', 'rgb(210, 210, 210)', 'rgb(18,103,48)', 'rgb(35, 79, 30)'];
        var pindex = 1;

        if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {

            if(barId === 'barl1'){//darkgray white //NEED TO DO FOR 4 OTHER IDS
                pindex=0;
                tindex=1;

                if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {
                    pindex = 3;
                }
            }

            if(barId === 'barl2'){
                //lightgray black
                pindex=1;
                tindex=0;
            }

        }



        if(practice_calculator.globalVariable.isIGA) {

            if(barId === 'barl1'){//darkgreen white
                pindex=2;
                tindex=1;
            }

            if(barId === 'barl2'){
                //darkgray white
                pindex=0;
                tindex=1;
            }

        }

        if(practice_calculator.globalVariable.isIGB) {

            if(barId === 'barl1'){//darkgreen white
                pindex=2;
                tindex=1;
            }

            if(barId === 'barl2'){
                //lighgray black
                pindex=1;
                tindex=0;
            }

        }



        var layout = {
            paper_bgcolor: papercolors[pindex],
            barmode: 'group',
            height: 75,
            width: 405,
            margin: {"t": 20, "b": 20, "l": 25, "r": 27},
            xaxis: {
                side: 'top',
                fixedrange: true,
                autorange: false,
                range: myRange,
                layer: 'below traces',
                tickfont: {
                    size: 10,
                    color:ticktextcolors[tindex],
                },
                tickmode: 'array',
                tickvals: myTickVal,
                ticktext: myTickText,
                tickangle: -30,
                ticks:'',
                showline: false,
                showgrid: axisOn,
                showticklabels: axisOn,
                gridcolor: "rgb(207, 202, 202)",
            },
            yaxis: {
                ticks: '',
                layer: 'below traces',
                fixedrange: true,
                showline: false,
                showgrid: false,
                showticklabels: false,
            },
        }




        Plotly.react(barId, data, layout, {displayModeBar: false});
    }

    practice_calculator.graphics.update.effortSliderRange = function() {

        var myMax;

        if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {
            myMax = 800;
        }
        if(practice_calculator.globalVariable.isIGA || practice_calculator.globalVariable.isIGB) {
            myMax = 140;
        }

        $("#lSlider1, #olSlider1, #dSliderL").attr({
            "max" : myMax,
            "min" : 0
        });

    }


    // USES practice_calculator.globalVariable.typeOfContest TO DETErmine leader slider colors
    // it is not concerned with the me coloring but leader vs leader or
    // follower vs follower for either group ig slider top coloring
    // it also updates the slider range for type of contest
    // it also determines the resulting text's tag as this is dependent on leader or follower
    practice_calculator.graphics.update.contestSliderBackgroundColor = function() {


        if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {

            $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
            $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

            if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {
                $('.bswLeft').css({'background-color': 'rgb(35, 79, 30)'});
            }

        }

        if(practice_calculator.globalVariable.isIGA) {

            $('.bswLeft').css({'background-color':'rgb(18,103,48)', 'color':'white'});
            $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

        }

        if(practice_calculator.globalVariable.isIGB) {

            $('.bswLeft').css({'background-color':'rgb(18,103,48)', 'color':'white'});
            $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

        }

        //---------------------------//

        //---- only for tutorial ----//
        // tutorial showing two followers as the same color to argue that we will use a different color
        if(practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.tutorial.IGSameColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                    $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                }
                if(practice_calculator.globalVariable.isIGB) {
                    $('.bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                    $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                }
            }
            // tutorial showing two followers with different colors
            if(practice_calculator.globalVariable.tutorial.IGDifferentColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                    $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                }
                if(practice_calculator.globalVariable.isIGB) {
                    $('.bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                    $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                }
            }

        }
        //---- only for tutorial ----//

        //---------------------------//

        //---- in-group contest follower's competition color setup for leader's view----//

        // In-group contest A, leader's point of view
        if(!practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.isIGA) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                    $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                }
            }

            // In-group contest A, leader's point of view
            if(practice_calculator.globalVariable.isIGB) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    $('.bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                    $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                }
            }

        }

        //---------------------------//


    }


    //-------------- HELP SABO BARS ----------------//
    practice_calculator.graphics.update.helpSaboBar = function(a, barId, lighter, axisOn) {

        var x, colors, myLabel, myColor, position;

        x = a;

        if(typeof(x) === 'undefined') x = 0;

        if(lighter){
            colors = ['rgb(200,200,255)',  'rgb(255,200,200)'];
        } else {
            colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];
        }

        myColor = x > 0 ? colors[0] : colors[1];
        myLabel = Math.abs(x);
        position = myLabel > 34 ? 'inside' : 'outside';

        var data = [{
            y: [x],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: [myColor],
                line: {
                    color: 'none',
                    width: 0
                }
            },
            text: [myLabel],
            textfont: {
                size: '16',
                color: 'black',
            },
            textanchor: 'right',
            textposition: position,
            cliponaxis: false,
        }];



        var ticktextcolors = ['black', 'white'];
        var tindex = 1;

        var papercolors = ['rgb(35,79,30)', 'rgb(60, 60, 60)' , 'rgb(210, 210, 210)'];
        var pindex = 1;

        if(barId === 'barf2'){//darkgray white
            tindex = 1;
            pindex = 1;
            if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === 1) {
                pindex = 0;
            }
        }
        if(barId === 'barf1'){//darkgray or darkgreen and  white
            tindex = 1;
            pindex = 1;
            if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === 0) {
                pindex = 0;
            }
        }
        if(barId === 'obarf1' || barId === 'obarf2'){//lightgray black
            tindex = 0;
            pindex = 2;
        }


        var layout = {
            paper_bgcolor: papercolors[pindex],
            barmode: 'group',
            height: 300,
            width: 110,
            margin: {"t": 5, "b": 5, "l": 55, "r": 25},
            yaxis: {
                fixedrange: true,
                autorange: false,
                range: [-40,40],
                layer: 'below traces',
                ticks:'',
                tickfont: {
                    size: 9,
                    color:ticktextcolors[tindex],
                },
                tickmode: 'array',
                tickvals: [-40,  -20, -10, -5, 0, 5, 10,  20, 40],
                ticktext: [40, 20, 10, 5, 0, 5, 10, 20, 40],
                showline: false,
                showgrid: axisOn,
                showticklabels: axisOn,
                gridcolor: "rgb(207, 202, 202)",

            },
            xaxis: {
                layer: 'below traces',
                fixedrange: true,
                showline: false,
                showgrid: false,
                ticks: '',
                showticklabels: false,
            },

        };

        Plotly.react(barId, data, layout, {displayModeBar: false});
    }

    practice_calculator.graphics.hide.sliderBackground = function() {
        var update = {
            'paper_bgcolor': 'transparent'
        };
        Plotly.relayout('barf1', update);
        Plotly.relayout('barf2', update);
        Plotly.relayout('obarf1', update);
        Plotly.relayout('obarf2', update);

        $('.fSideTextWrap').css({'opacity':'0'});
        $('.lockedCover_f1, .lockedCover_f2, .lockedCover_of1, .lockedCover_of2').css({'opacity':'0'});

    }


    practice_calculator.graphics.update.totalHelpBar = function(a,b) {
        var x = a;
        var y = b;
        if(typeof(x) === 'undefined') x = 0;
        if(typeof(y) === 'undefined') y = 0;

        var data = [{
            y: [x, y],
            name: ['Opposing Group', 'Your Group'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ['rgb(140, 140, 255)', 'rgb(200,200,255)'],
            },
            text: [nzt(x), nzt(y)],
            textposition: 'auto',
            cliponaxis: false,
        }];

        var layout = {
            barmode: 'group',
            height: 100,//60
            width: 250,//150
            // title: 'Total Help',
            margin: {"t": 20, "b": 0, "l": 0, "r": 0},
            yaxis: {
                fixedrange: true,
                autorange: false,
                showgrid: false,
                range: [0,80]
            },
            xaxis: {
                fixedrange: true,
                showline: false,
                showgrid: false,
                ticks: '',
                showticklabels: false,
            },
            bargap: 0.3,//0.1
        };

        Plotly.react('helpBar', data, layout, {displayModeBar: false});
    }

    practice_calculator.graphics.update.totalSaboBar = function(a, b) {
        var x = -a;
        var y = -b;
        if(typeof(x) === 'undefined') x = 0;
        if(typeof(y) === 'undefined') y = 0;

        var data = [{
            y: [x, y], //[y, x],
            x: ['Opposing Group', 'Your Group'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ['rgb(255,140,140)', 'rgb(255,200,200)'],
            },
            text: [nzt(-x), nzt(-y)],
            textposition: 'auto',
            cliponaxis: false,
        }];

        var layout = {
            barmode: 'group',
            height: 100,//60
            width: 250,//150
            margin: {"t": 0, "b": 20, "l": 0, "r": 0},
            yaxis: {
                fixedrange: true,
                autorange: false,
                showgrid: false,
                range: [-80,0]
            },
            xaxis: {
                fixedrange: true,
                showline: false,
                showgrid: false,
                ticks: '',
                showticklabels: false,
            },
            bargap: 0.3,//0.1
        };

        Plotly.react('saboBar', data, layout, {displayModeBar: false});
    }


    //-------------- DECISION SLIDER FOLLOWER ----------------//

    practice_calculator.decisionSlider.follower.isFlashing = true;
    practice_calculator.decisionSlider.follower.flash = function(state) {

        if(practice_calculator.decisionSlider.follower.isFlashing) {

            if(state === 0) {
                $('.inputF').css({'transition':'0.7s', 'box-shadow':'0px 0px 10px 5px orange'});
                if(practice_calculator.globalVariable.playerIndex === 0) {
                    $('.bf1').css({'transition':'0.7s', 'box-shadow':'0px 0px 10px 5px orange'});
                }
                if(practice_calculator.globalVariable.playerIndex === 1) {
                    $('.bf2').css({'transition':'0.7s', 'box-shadow':'0px 0px 10px 5px orange'});
                }
                setTimeout(()=>practice_calculator.decisionSlider.follower.flash(1), 700);
            }
            if(state === 1) {
                $('.inputF').css({'transition':'0.7s', 'box-shadow':'0px 0px 0px 0px orange'});
                if(practice_calculator.globalVariable.playerIndex === 0) {
                    $('.bf1').css({'transition':'0.7s', 'box-shadow':'0px 0px 0px 0px orange'});
                }
                if(practice_calculator.globalVariable.playerIndex === 1) {
                    $('.bf2').css({'transition':'0.7s', 'box-shadow':'0px 0px 0px 0px orange'});
                }
                setTimeout(()=>practice_calculator.decisionSlider.follower.flash(0), 700);
            }

        } else {
            $('.inputF').css({'transition':'0.7s', 'box-shadow':'0px 0px 4px 2px lime'});

            if(practice_calculator.globalVariable.playerIndex === 0) {
                $('.bf1').css({'transition':'0.7s', 'box-shadow':'0px 0px 4px 2px lime'});
            }
            if(practice_calculator.globalVariable.playerIndex === 1) {
                $('.bf2').css({'transition':'0.7s', 'box-shadow':'0px 0px 4px 2px lime'});
            }

        }

    }

    practice_calculator.decisionSlider.follower.helpSaboBar = function(a, axisOn) {

        var y = a;
        if(typeof(y) === 'undefined') y = 0;

        var colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];

        var myLabel = y > 0 ? y : -y;
        var myColor = y > 0 ? colors[0] : colors[1];


        var mytextpos= myLabel > 38 ? 'inside':'outside';


        var ticktextcolors = ['black', 'white'];
        var tindex = 1;

        var papercolors = ['white', 'rgb(35,79,30)'];
        var pindex = 1;


        var data = [{
            x: [y],
            orientation: 'h',
            name: [''],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: [myColor],
                line: {
                    color: 'none',
                    width: 0
                }
            },
            text: [myLabel],
            textfont: {
                size: '50',
                color:'black',
            },
            textposition: mytextpos,
            cliponaxis: false,
        }];

        var layout = {
            paper_bgcolor: papercolors[pindex],
            barmode: 'group',
            height: 75,
            width: 975,
            margin: {"t": 20, "b": 20, "l": 5, "r": 20},
            xaxis: {
                side: 'top',
                fixedrange: true,
                autorange: false,
                range: [-40,40],
                layer: 'below traces',
                ticks:'',
                tickfont: {
                    size: 10,
                    color:ticktextcolors[tindex],
                },
                tickmode: 'array',
                tickvals: [-40, -30, -20, -12, -8, -4, -2, 0, 2, 4, 8, 12, 20, 30, 40],
                ticktext: [40, 30, 20, 12, 8, 4, 2, 0, 2, 4, 8, 12, 20, 30, 40],
                showline: false,
                showgrid: axisOn,
                showticklabels: axisOn,
                gridcolor: "rgb(207, 202, 202)",

            },
            yaxis: {
                layer: 'below traces',
                fixedrange: true,
                showline: false,
                showgrid: false,
                ticks: '',
                showticklabels: false,
            },

        };

        Plotly.react('bardf', data, layout, {displayModeBar: false});

    }

    practice_calculator.decisionSlider.follower.enable = function() {
        $('.decisionWrapF').css({'display':'flex'});
    }

    practice_calculator.decisionSlider.follower.disable = function() {
        $('.decisionWrapF').css({'display':'none'});
    }


    //-------------- DECISION SLIDER LEADER ----------------//
    practice_calculator.decisionSlider.leader.effortBar = function(a, axisOn) {


        var y = a;

        var upperBound, myTickVal, myTickText, myRange;

        var colorArrays = Array(1);
        var insideTextColor = Array(1);

        colorArrays = ['rgb(35, 79, 30)'];
        insideTextColor = ['white'];

        if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {

            upperBound = 742;
            myTickVal = [0, 50, 100, 150, 250, 350, 500, 650, 800];
            myTickText = [0, 50, 100, 150, 250, 350, 500, 650, 800];
            myRange = [0, 800];

        }

        if(practice_calculator.globalVariable.isIGA || practice_calculator.globalVariable.isIGB) {

            upperBound = 128;
            myTickVal = [0, 5, 10, 20, 30, 50, 75, 100, 140];
            myTickText = [0, 5, 10, 20, 30, 50, 75, 100, 140];
            myRange = [0, 140];

        }

        var mColor = colorArrays[0];

        var mytextpos = 'outside';

        var somecolor = 'black';

        if(y > upperBound) {

            mytextpos = 'inside';
            somecolor = insideTextColor[0];

        }


        var data = [{
            x: [y],
            name: [''],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            cliponaxis: false,
            marker:{
                color: mColor,
            },
            text: [y],
            textfont: {
                size: '50',
                color:somecolor,
            },
            orientation: 'h',
            // textanchor: 'right',
            textposition: mytextpos,
        }];


        var ticktextcolors = ['white'];
        var tindex = 0;

        var papercolors = ['rgb(35, 79, 30)'];
        var pindex = 0;


        var layout = {
            paper_bgcolor: papercolors[pindex],
            barmode: 'group',
            height: 75,
            width: 975,
            margin: {"t": 20, "b": 20, "l": 5, "r": 20},
            xaxis: {
                side: 'top',
                fixedrange: true,
                autorange: false,
                range: myRange,
                layer: 'below traces',
                tickfont: {
                    size: 10,
                    color:ticktextcolors[tindex],
                },
                tickmode: 'array',
                tickvals: myTickVal,
                ticktext: myTickText,
                tickangle: -30,
                ticks:'',
                showline: false,
                showgrid: axisOn,
                showticklabels: axisOn,
                gridcolor: "rgb(207, 202, 202)",
            },
            yaxis: {
                ticks: '',
                layer: 'below traces',
                fixedrange: true,
                showline: false,
                showgrid: false,
                showticklabels: false,
            },
        }




        Plotly.react('bardl', data, layout, {displayModeBar: false});

    }

    practice_calculator.decisionSlider.leader.enable = function() {
        $('.decisionWrapL').css({'display':'flex'});
    }

    practice_calculator.decisionSlider.leader.disable = function() {
        $('.decisionWrapL').css({'display':'none'});
    }


    //-------------- POWER RATIO BAR ----------------//
    practice_calculator.graphics.activate.dynamicPowerBarText = function(place) {

        $('.pTitleDynamicLeft').css({'transition':'0s', 'opacity':'0'});
        $('.pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'0'});
        $('.pTitleDynamicRight').css({'transition':'0s', 'opacity':'0'});

        if(place === 'middle') {

            $('.pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
            $('.pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
            $('.pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

            $('.pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'353px', 'margin-right':'5px'});
            $('.pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'103px', 'margin-right':'-21px'});
            $('.pTitleDynamicRight').css({'transition':'0s', 'marign-left':'5px'});

        }

        if(place === 'left') {

            $('.pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
            $('.pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
            $('.pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

            $('.pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'15px', 'margin-right':'5px'});
            $('.pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'29px', 'margin-right':'-21px'});

        }

        if(place === 'right') {

            $('.pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
            $('.pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
            $('.pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

            $('.pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'758px', 'margin-right':'41px'});
            $('.pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'0px', 'margin-right':'-21px'});

        }


    }

    practice_calculator.globalVariable.powerBarRight = false;
    practice_calculator.globalVariable.powerBarLeft = false;

    practice_calculator.graphics.update.efficiencyBar = function(efficiency1, efficiency2) {

        var efi1, efi2;
        efi1 = efficiency1 != undefined ? efficiency1 : efi;
        efi2 = efficiency2 != undefined ? efficiency2 : oefi;

        var val1 = efi1 / (efi1 + efi2);
        var val2 = efi2 / (efi1 + efi2);

        if(!practice_calculator.graphics.dynamicPowerBarText) {

            practice_calculator.graphics.activate.dynamicPowerBarText();

        }

        if(efi1 === efi2 && practice_calculator.graphics.dynamicPowerBarText) {

            practice_calculator.graphics.activate.dynamicPowerBarText('middle');

        }

        if((efi1 / efi2) > 1){
            var myText = (val1 >= 0.99) ? '100+' : (efi1 / efi2).toFixed(2);
            if(practice_calculator.graphics.dynamicPowerBarText) {
                practice_calculator.graphics.activate.dynamicPowerBarText('left');
            }
        } else {
            myText = 1;
        }

        if((efi1 / efi2) < 1){
            var myText2 = (val2 >= 0.99) ? '100+' : (efi2 / efi1).toFixed(2);
            if(practice_calculator.graphics.dynamicPowerBarText) {
                practice_calculator.graphics.activate.dynamicPowerBarText('right');
            }
        } else {
            myText2 = 1;
        }


        val1 = logistic2(val1, 5);
        val2 = 1 - val1;

        var gapSize = 0.06;
        val1 = val1 - gapSize/2;
        val2 = val2 - gapSize/2;

        var lcolors = ['rgb(60,60,60)', 'rgb(210,210,210)'];
        var fcolors = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];
        var ofcolors = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];
        var cA = Array(2);

        if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {
            lcolors = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
        }

        //---------------------------//

        //---- only for tutorial ----//
        // tutorial showing two followers as the same color to argue that we will use a different color
        if(practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.tutorial.IGSameColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    fcolors = ['rgb(60,60,60)', 'rgb(60,60,60)'];
                }
                if(practice_calculator.globalVariable.isIGB) {
                    ofcolors = ['rgb(210,210,210)', 'rgb(210,210,210)'];
                }
            }
            // tutorial showing two followers with different colors
            if(practice_calculator.globalVariable.tutorial.IGDifferentColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    fcolors = ['rgb(210,210,0)', 'rgb(60,60,60)'];
                }
                if(practice_calculator.globalVariable.isIGB) {
                    ofcolors = ['rgb(210,210,0)', 'rgb(210,210,210)'];
                }
            }

        }
        //---- only for tutorial ----//

        //---------------------------//

        //---- in-group contest follower's competition color setup for leader's view----//

        // In-group contest A, leader's point of view
        if(!practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.isIGA) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    fcolors = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                }
            }

            // In-group contest A, leader's point of view
            if(practice_calculator.globalVariable.isIGB) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    ofcolors = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                }
            }

        }

        //---------------------------//


        if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {
            cA = lcolors;
        }
        if(practice_calculator.globalVariable.isIGA) {
            cA = fcolors;
        }
        if(practice_calculator.globalVariable.isIGB) {
            cA = ofcolors;
        }

        var myLineWith1 = 0;
        var myLineWith2 = 0;

        if(practice_calculator.globalVariable.powerBarLeft) {
            myLineWith1 = 4
        }
        if(practice_calculator.globalVariable.powerBarRight) {
            myLineWith2 = 4
        }



        var player1 = {
            y: ['group 1'],
            x: [val1],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker: {
                color: cA[0],
                line: {
                    color: 'lime',
                    width: myLineWith1,
                }
            },
            text: myText,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                color: 'white',
                size: '18'
            },
        };

        var gap = {
            y: ['group 1'],
            x: [gapSize],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker: {
                color: 'white',
                line: {
                    color: 'white',
                    width: 0,
                }
            },
            text: ':',
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                color: 'black',
                size: '18'
            },
        };

        var player2 = {
            y: ['group 1'],
            x: [val2],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            fixedrange: true,
            marker: {
                color: cA[1],
                line: {
                    color: 'lime',
                    width: myLineWith2,
                }
            },
            text: myText2,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                size: '18'
            },
        };

        var data = [player1, gap, player2];

        var layout = {
            barmode: 'stack',
            height: 40,
            width: 975,
            margin: {"t": 0, "b": 0, "l": 0, "r": 0},
            xaxis: {
                fixedrange: true,
                autorange: false,
                range: [0,1],
                showline: false,
                showgrid: false,
                showticklabels: false,
            },
            yaxis: {
                fixedrange: true,
                showline: false,
                showgrid: false,
                showticklabels: false,
            }

        };

        Plotly.react('powerRatio', data, layout, {displayModeBar: false});

    }


    //-------------- GRID GRAPHICS ----------------//
    practice_calculator.graphics.update.barLabelX = function(barId, show) {
        var update = {
            'xaxis.showticklabels': show
        };
        Plotly.relayout(barId, update);
    }

    practice_calculator.graphics.update.barGridX = function(barId, show) {
        var update = {
            'xaxis.showgrid': show
        };
        Plotly.relayout(barId, update);
    }

    practice_calculator.graphics.update.barLabelY = function(barId, show) {
        var update = {
            'yaxis.showticklabels': show
        };
        Plotly.relayout(barId, update);
    }

    practice_calculator.graphics.update.barGridY = function(barId, show) {
        var update = {
            'yaxis.showgrid': show
        };
        Plotly.relayout(barId, update);
    }


    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////
    //////////////////// VALUES ////////////////////


    //---- CALCULATE TOTAL HELP AND SABOTAGE -----//
    practice_calculator.values.update.totalHelpSabo = function() {

        th = h1 + h2;
        ts = s1 + s2;
        toh = oh1 + oh2;
        tos = os1 + os2;

        // update total help sabo graphics
        practice_calculator.graphics.update.totalHelpBar(th, toh);
        practice_calculator.graphics.update.totalSaboBar(ts, tos);

        practice_calculator.icons.update.leaderAuraColor();
        practice_calculator.icons.update.followerArrows();
        practice_calculator.icons.update.leaderSize();


    }


    //----- CALCULATE LEADER EFFICINCIES -----//
    // VALUES: values.update.totalHelpSabo()
    // GRAPHICS: graphics.update.efficiencyBar()
    practice_calculator.values.update.efficiencies = function() {

        practice_calculator.values.update.totalHelpSabo();

        efi = (1 + th) / (1 + ts);
        oefi = (1 + toh) / (1 + tos);

        practice_calculator.graphics.update.efficiencyBar();

    }


    //----- CALCULATE PROBABILITIES GIVEN EFFICIENCIES -----//
    // Does not call values.efficiencies takes it as given
    // GRAPHICS: graphics.update.pie()
    practice_calculator.values.update.probability = function() {

        efefo = efo * efi;
        oefefo = oefo * oefi;
        pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));

        practice_calculator.graphics.update.pie();

    }


    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////
    //////////////////// SLIDER /////////////////////


    practice_calculator.setPayoffTextLeader = function(effort) {

        var prize, cost, netWon, netLost, netWonColor, netLostColor;

        cost = effort;


        netWonColor = netLostColor = 'black';

        netLost = -cost;

        if(netLost < 0) {
            // netLostColor = '#ec3c3c';
        }


        prize = 1000;
        netWon = prize - cost;

        if(netWon > 0) {
            // netWonColor = '#2222ff';
        }


        $('#netPayoffValueLostDl').html(netLost);
        $('#netPayoffValueLostDl').css({'transition':'0.15s', 'color':netLostColor});

        $('#netPayoffValueWonDl').html(netWon);
        $('#netPayoffValueWonDl').css({'transition':'0.15s', 'color':netWonColor});

    }


    practice_calculator.setPayoffTextFollower = function(sabo, help) {

        var prize, cost, netWon, netLost, netWonColor, netLostColor;

        cost = sabo + help;


        netWonColor = netLostColor = 'black';

        netLost = -cost;

        if(netLost < 0) {
            // netLostColor = '#ec3c3c';
        }


        prize = 100;
        netWon = prize - cost;

        if(netWon > 0) {
            // netWonColor = '#2222ff';
        }


        $('#netPayoffValueLostDf').html(netLost);
        $('#netPayoffValueLostDf').css({'transition':'0.15s', 'color':netLostColor});

        $('#netPayoffValueWonDf').html(netWon);
        $('#netPayoffValueWonDf').css({'transition':'0.15s', 'color':netWonColor});

    }


    // FOLLOWER HELP AND SABOTAGE
    practice_calculator.slider.followerDecision.helpSabo = document.getElementById('dSliderF');
    practice_calculator.slider.followerDecision.helpSabo.oninput = function() {

        practice_calculator.wheel.hide();

        // get the value from the slider
        var dValue = parseFloat(practice_calculator.slider.followerDecision.helpSabo.value);

        // update bar plot
        practice_calculator.decisionSlider.follower.helpSaboBar(dValue, true);

        // SYNC HELP SABO VALUES AND HELP SABO BARS GIVEN FOLLOWER INDEX

        // if you are the first follower (strong)
        if(practice_calculator.globalVariable.playerIndex === 0) {

            //convert it to sabotage or help of follower 1
            s1 = dValue >= 0 ? 0 : -dValue;
            h1 = dValue >= 0 ? dValue : 0;

            //synching sliders with follower 1 slider
            $('#vSlider1').prop('value', dValue);
            $('#vSlider1').change();

            // call update.bar for hs for follower 1
            practice_calculator.graphics.update.helpSaboBar(dValue, 'barf1', false, false);

            practice_calculator.setPayoffTextFollower(s1,h1)

            practice_calculator.globalVariable.enervateFollowerF1 = false;
            practice_calculator.globalVariable.enervate2FollowerF1 = false;

        }

        //if you are the second follower (weak)
        if(practice_calculator.globalVariable.playerIndex === 1) {

            //convert it to sabotage or help of follower 2
            s2 = dValue >= 0 ? 0 : -dValue;
            h2 = dValue >= 0 ? dValue : 0;

            //synching sliders with follower 2 slider
            $('#vSlider2').prop('value', dValue);
            $('#vSlider2').change();

            // call update.bar for hs for follower 2
            practice_calculator.graphics.update.helpSaboBar(dValue, 'barf2', false, false);

            practice_calculator.setPayoffTextFollower(s2,h2)

            practice_calculator.globalVariable.enervateFollowerF2 = false;
            practice_calculator.globalVariable.enervate2FollowerF2 = false;

        }

        practice_calculator.values.update.efficiencies();
        practice_calculator.values.update.probability();
        practice_calculator.results.update.allTextAndColors();


        //WILL ADD AN ACTIVE WIGGLE SWITCH OFF HERE
        practice_calculator.pointers.activeDf = false;

        // bb.listen.followerHelpSabo();

    }

    // Decision Sliders

    // EFFORT
    practice_calculator.slider.playerDecision.effort = document.getElementById('dSliderL');
    practice_calculator.slider.playerDecision.effort.oninput = function() {

        practice_calculator.wheel.hide();

        practice_calculator.pointers.dSwitch = false;

        // get the value from the slider
        efo = parseFloat(practice_calculator.slider.playerDecision.effort.value);

        // update bar plot
        practice_calculator.decisionSlider.leader.effortBar(efo, true);

        // update netpayoff possible results (outcome)
        practice_calculator.setPayoffTextLeader(efo);

        // slider sync
        $('#lSlider1').prop('value', efo);
        $('#lSlider1').change();

        // bar plot sync
        var ourSide, showAxis;
        ourSide = true;
        showAxis = true;

        practice_calculator.graphics.update.effortBar(efo, 'barl1', ourSide, !showAxis)

        practice_calculator.values.update.efficiencies();
        practice_calculator.values.update.probability();
        practice_calculator.results.update.allTextAndColors();

        //WILL ADD AN ACTIVE WIGGLE SWITCH OFF HERE
        practice_calculator.globalVariable.enervateLeaderLeft = false;
        practice_calculator.globalVariable.enervate2LeaderLeft = false;

        // bb.listen.leaderContest();

    }

    // Effort Section

    // Player 1
    practice_calculator.slider.l1= document.getElementById('lSlider1');
    practice_calculator.slider.l1.oninput = function() {

        practice_calculator.wheel.hide();

        efo = parseFloat(practice_calculator.slider.l1.value);

        var ourSide, showAxis;
        ourSide = true;
        showAxis = true;

        practice_calculator.graphics.update.effortBar(efo, 'barl1', ourSide, showAxis);

        practice_calculator.results.update.allTextAndColors();

        practice_calculator.graphics.update.barLabelX('barl1', true);

        practice_calculator.values.update.probability();

        practice_calculator.pointers.switches[0] = false;

        // update netpayoff possible results (outcome)
        practice_calculator.setPayoffTextLeader(efo);

        // slider sync
        $('#dSliderL').prop('value', efo);
        $('#dSliderL').change();

        practice_calculator.decisionSlider.leader.effortBar(efo, true);

        practice_calculator.globalVariable.enervateLeaderLeft = false;
        practice_calculator.globalVariable.enervate2LeaderLeft = false;


        // bb.listen.leaderContest();
        // bb.listen.followerHelpSabo();

    }

    // Player 2
    practice_calculator.slider.l2 = document.getElementById('olSlider1');
    practice_calculator.slider.l2.oninput = function() {

        practice_calculator.wheel.hide();

        oefo = parseFloat(practice_calculator.slider.l2.value);

        var ourSide, showAxis;
        ourSide = true;
        showAxis = true;

        practice_calculator.graphics.update.effortBar(oefo, 'barl2', !ourSide, showAxis);

        practice_calculator.results.update.allTextAndColors();

        practice_calculator.values.update.probability();

        practice_calculator.graphics.update.barLabelX('barl2', true);

        practice_calculator.pointers.switches[1] = false;

        practice_calculator.globalVariable.enervateLeaderRight = false;
        practice_calculator.globalVariable.enervate2LeaderRight = false;

        // bb.listen.leaderContest();
        // bb.listen.followerHelpSabo();

    }


    // Help Sabotage Section

    // LEFT SIDE

    // Follower 1
    practice_calculator.slider.f1= document.getElementById('vSlider1');
    practice_calculator.slider.f1.oninput = function() {

        $('.follower1Circle').css({'transition':'1s', 'opacity':'0'});
        setTimeout(()=>{
            $('.follower1Circle').css({'transition':'1s', 'transform':'scale(0)'});
        }, 1000)

        practice_calculator.graphics.update.barLabelY('barf1', true);
        practice_calculator.wheel.hide();

        var hsValue, theirSide, showAxis;
        theirSide = true;
        showAxis = true;

        hsValue = parseFloat(practice_calculator.slider.f1.value);

        s1 = hsValue > 0 ? 0 : -hsValue;
        h1 = hsValue > 0 ? hsValue : 0;

        practice_calculator.values.update.efficiencies();

        practice_calculator.values.update.probability();

        practice_calculator.graphics.update.helpSaboBar(hsValue, 'barf1', !theirSide, showAxis);

        practice_calculator.results.update.allTextAndColors();

        practice_calculator.pointers.switches[2] = false;

        // SYNC WITH THE DECISION SLIDER IF IT IS A MATCH
        // if you are the first follower (strong)
        if(practice_calculator.globalVariable.playerIndex === 0) {

            //update decision slider
            practice_calculator.decisionSlider.follower.helpSaboBar(hsValue, false);

            //synching sliders with d slider
            $('#dSliderF').prop('value', hsValue);
            $('#dSliderF').change();

            practice_calculator.setPayoffTextFollower(s1,h1);

        }

        practice_calculator.globalVariable.enervateFollowerF1 = false;
        practice_calculator.globalVariable.enervate2FollowerF1 = false;

        // bb.listen.followerHelpSabo();

    }

    // Follower 2
    practice_calculator.slider.f2= document.getElementById('vSlider2');
    practice_calculator.slider.f2.oninput = function() {

        $('.follower2Circle').css({'transition':'1s', 'opacity':'0'});
        setTimeout(()=>{
            $('.follower2Circle').css({'transition':'1s', 'transform':'scale(0)'});
        }, 1000)

        practice_calculator.graphics.update.barLabelY('barf2', true);
        practice_calculator.wheel.hide();

        var hsValue, theirSide, showAxis;
        theirSide = true;
        showAxis = true;

        hsValue = parseFloat(practice_calculator.slider.f2.value);

        s2 = hsValue > 0 ? 0 : -hsValue;
        h2 = hsValue > 0 ? hsValue : 0;

        practice_calculator.values.update.efficiencies();
        practice_calculator.values.update.probability();

        practice_calculator.graphics.update.helpSaboBar(hsValue, 'barf2', !theirSide, showAxis);
        practice_calculator.results.update.allTextAndColors();

        practice_calculator.pointers.switches[3] = false;

        // SYNC WITH THE DECISION SLIDER IF IT IS A MATCH
        // if you are the second follower (weak)
        if(practice_calculator.globalVariable.playerIndex === 1) {

            //update decision slider
            practice_calculator.decisionSlider.follower.helpSaboBar(hsValue, false);

            //synching sliders with d slider
            $('#dSliderF').prop('value', hsValue);
            $('#dSliderF').change();

            practice_calculator.setPayoffTextFollower(s2,h2)

        }

        practice_calculator.globalVariable.enervateFollowerF2 = false;
        practice_calculator.globalVariable.enervate2FollowerF2 = false;

        // bb.listen.followerHelpSabo();

    }

    // RIGHT SIDE

    // Follower 1
    practice_calculator.slider.of1= document.getElementById('ovSlider1');
    practice_calculator.slider.of1.oninput = function() {

        practice_calculator.graphics.update.barLabelY('obarf1', true);
        practice_calculator.wheel.hide();

        var hsValue, theirSide, showAxis;
        theirSide = true;
        showAxis = true;

        hsValue = parseFloat(practice_calculator.slider.of1.value);

        os1 = hsValue > 0 ? 0 : -hsValue;
        oh1 = hsValue > 0 ? hsValue : 0;

        practice_calculator.values.update.efficiencies();

        practice_calculator.values.update.probability();

        practice_calculator.graphics.update.helpSaboBar(hsValue, 'obarf1', theirSide, showAxis);

        practice_calculator.results.update.allTextAndColors();

        practice_calculator.pointers.switches[4] = false;

        practice_calculator.globalVariable.enervateFollowerOF1 = false;
        practice_calculator.globalVariable.enervate2FollowerOF1 = false;

        // bb.listen.followerHelpSabo();

    }

    // Follower 2
    practice_calculator.slider.of2= document.getElementById('ovSlider2');
    practice_calculator.slider.of2.oninput = function() {

        practice_calculator.graphics.update.barLabelY('obarf2', true);
        practice_calculator.wheel.hide();

        var hsValue, theirSide, showAxis;
        theirSide = true;
        showAxis = true;

        hsValue = parseFloat(practice_calculator.slider.of2.value);

        os2 = hsValue > 0 ? 0 : -hsValue;
        oh2 = hsValue > 0 ? hsValue : 0;

        practice_calculator.values.update.efficiencies();

        practice_calculator.values.update.probability();

        practice_calculator.graphics.update.helpSaboBar(hsValue, 'obarf2', theirSide, showAxis);

        practice_calculator.results.update.allTextAndColors();

        practice_calculator.pointers.switches[5] = false;

        practice_calculator.globalVariable.enervateFollowerOF2 = false;
        practice_calculator.globalVariable.enervate2FollowerOF2 = false;

        // bb.listen.followerHelpSabo();

    }


    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////
    ////////////////////////// HOVER ///////////////////////////

    //------------------------------------------------//
    //------------------------------------------------//
    //------------ DECISION SLIDER SECTIONS ----------//
    //------------------------------------------------//
    //------------------------------------------------//

    practice_calculator.globalVariable.leaderHoverBlock = false;

    //----- LEADER DECISION SLIDER ------//

    $('#dSliderL').hover(
        function() {

            setTimeout(()=>practice_calculator.graphics.update.barLabelX('bardl', true), 150);


            practice_calculator.globalVariable.pieBorderLeft = true;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.enervateLeaderLeft = true;
            practice_calculator.icons.enervate.leaderLeft(0);
            practice_calculator.globalVariable.enervate2LeaderLeft = false;

            $('.activeLeaderLeft').css({'opacity':'1'});
            $('.passiveLeaderLeft').css({'opacity':'0'});

            $('.bswLeft').css({'box-shadow':'0px 0px 1px 4px lime'});


        },
        function() {

            setTimeout(()=>practice_calculator.graphics.update.barLabelX('bardl', false), 150);
            practice_calculator.graphics.update.barGridX('bardl', false);

            practice_calculator.globalVariable.pieBorderLeft = false;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.enervateLeaderLeft = false;
            practice_calculator.globalVariable.enervate2LeaderLeft = true;
            practice_calculator.icons.enervate2.leaderLeft(0);

            $('.activeLeaderLeft').css({'opacity':'0'});
            $('.passiveLeaderLeft').css({'opacity':'1'});

            $('.bswLeft').css({'box-shadow':'0px 1px 1px 0px black'});

        }
    )

    $('.inputL').hover(

        function() {

            if(!practice_calculator.globalVariable.leaderHoverBlock) {

                // even the follower results are not shown make sure to display the ghost title for contest on top of leader icons
                if(!practice_calculator.space.hsResultsTopIsOpen && !practice_calculator.space.hsResultsBottomIsOpen) {

                    if(practice_calculator.globalVariable.hover.hsGhostTitle){
                        practice_calculator.titles.hs.ghost.text();
                        practice_calculator.titles.hs.ghost.show();
                    }

                }

                if(practice_calculator.globalVariable.dynamicDisplay && !practice_calculator.space.hsResultsTopIsOpen && !practice_calculator.space.hsResultsBottomIsOpen && practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {

                    if(practice_calculator.globalVariable.hover.hsGhostTitle){
                        practice_calculator.titles.hs.ghost.text();
                        practice_calculator.titles.hs.ghost.show();
                    }

                }

                // hs title
                if(practice_calculator.globalVariable.hover.hsMainTitle){
                    practice_calculator.titles.hs.hide();
                }

                // contest maximize
                if(practice_calculator.globalVariable.hover.cMinimize && !practice_calculator.globalVariable.closedDecisionCalculator) {
                    practice_calculator.section.contest.minimize(false);
                }



                // hs minimize
                // if(practice_calculator.globalVariable.hover.hsMinimize) {
                //     practice_calculator.section.hs.minimize(true);
                // }

                // hs icon
                if(practice_calculator.globalVariable.hover.hsIcons || practice_calculator.globalVariable.hover.leaderHidesFicons){
                    practice_calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                    practice_calculator.section.hs.opacity.SFiALiFiS([0,0,1,1,1,0]);
                    practice_calculator.section.hs.set.iconPosition('bottom');
                }

                // hs button
                if(practice_calculator.globalVariable.hover.hsButton){
                    practice_calculator.button.display.spinTop(false);
                }

                practice_calculator.globalVariable.enervate2LeaderLeft = true;
                practice_calculator.icons.enervate2.leaderLeft(0);

                // $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
                $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1.1)'});
                // if(practice_calculator.globalVariable.infoIsOpen) {
                //     $('.generalInfoWrap').css({'transition':'0.7s',
                //     'transform':'scale(0.74) rotateX(1turn)', 'margin-top':'-396px'})
                // }

                // hs results
                if(practice_calculator.globalVariable.hover.hsResults){
                    practice_calculator.results.hide.followerOutcomesAll();
                }

                if(!practice_calculator.globalVariable.closedDecisionCalculator) {

                    // hide contest title and results drag the top to decision slider
                    $('.payoffWrap, .imageWrap23').css({'transition' : '0.15s', 'opacity':'0'});
                    practice_calculator.space.contestResultsIsOpen = false;
                    practice_calculator.space.update.heights();
                    // $('.generalMarginBox').css({'margin-top':'73px'});

                }

                practice_calculator.button.display.spinBottom(false);

                practice_calculator.decisionSlider.leader.isFlashing = false;

                if(practice_calculator.globalVariable.hover.leaderContestAdjustments) {
                    $('.ctTop').css({'margin-top':'0px'})
                    practice_calculator.section.hs.minimize(true);
                }

            }


        },
        function() {

            if(!practice_calculator.globalVariable.leaderHoverBlock) {

                if(practice_calculator.globalVariable.infoIsOpen) {
                    $('.generalInfoWrap').css({'transition':'0.7s',
                    'transform':'scale(0.813) rotateX(1turn)', 'margin-top':'-418px'})
                }

                // hs icon
                if(practice_calculator.globalVariable.hover.leaderHidesFicons){
                    practice_calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                    practice_calculator.section.hs.opacity.SFiALiFiS([0.6,0.4,1,1,1,0]);
                    practice_calculator.section.hs.set.iconPosition('bottom');
                }

                practice_calculator.globalVariable.enervate2LeaderLeft = false;

                $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1)'});
                $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1)'});

                if(practice_calculator.globalVariable.hover.cTitle && !practice_calculator.globalVariable.closedDecisionCalculator) {


                    $('.payoffWrap, .imageWrap23').css({'transition' : '0.15s', 'opacity':'1'});
                    practice_calculator.space.contestResultsIsOpen = true;

                    if(!practice_calculator.globalVariable.contestResultsExist) {
                        $('.payoffWrap').css({'transition' : '0s', 'opacity':'0'});
                    }

                    $('.generalMarginBox').css({'margin-top':'-77px'});

                    practice_calculator.space.update.heights();


                    if(practice_calculator.globalVariable.hover.cButton) {
                        practice_calculator.button.display.spinBottom(true);
                    }

                }

            }
        }

    )


    //----- FOLLOWER DECISION SLIDER ------//

    $('#dSliderF').hover(
        function() {

            setTimeout(()=>practice_calculator.graphics.update.barLabelX('bardf', true), 150);

            practice_calculator.globalVariable.pieBorderLeft = true;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.powerBarLeft = true;
            practice_calculator.graphics.update.efficiencyBar();

            if(practice_calculator.globalVariable.playerIndex === 0) {

                practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L11', true)
                practice_calculator.globalVariable.enervateFollowerF1 = true;
                practice_calculator.icons.enervate.followerF1(0);
                practice_calculator.globalVariable.enervate2FollowerF1 = false;

            }

            if(practice_calculator.globalVariable.playerIndex === 1) {

                practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L12', true);
                practice_calculator.globalVariable.enervateFollowerF2 = true;
                practice_calculator.icons.enervate.followerF2(0);
                practice_calculator.globalVariable.enervate2FollowerF2 = false;

            }

            // ---  listener for tuto --- //

            if(listener.A_1_df) {

                setTimeout(()=>{
                    box.transition('A-2', 'A-3', 0, 0, 1, 750);
                    listener.A_1_df = false;
                    listener.A_2_df = true;
                }, 1500)

            }

        },
        function() {

            practice_calculator.globalVariable.pieBorderLeft = false;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.powerBarLeft = false;
            practice_calculator.graphics.update.efficiencyBar();

            setTimeout(()=>practice_calculator.graphics.update.barLabelX('bardf', false), 150);
            practice_calculator.graphics.update.barGridX('bardf', false);

            if(practice_calculator.globalVariable.playerIndex === 0){
                practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L11', false)
                practice_calculator.globalVariable.enervateFollowerF1 = false;
                practice_calculator.globalVariable.enervate2FollowerF1 = true;
                practice_calculator.icons.enervate2.followerF1(0);
            }

            if(practice_calculator.globalVariable.playerIndex === 1) {
                practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L12', false);
                practice_calculator.globalVariable.enervateFollowerF2 = false;
                practice_calculator.globalVariable.enervate2FollowerF2 = true;
                practice_calculator.icons.enervate2.followerF2(0);
            }


        }
    )

    $('.inputF').hover(

        function() {

            $('.outcomeWrap').css({'opacity':'1'});

            if(practice_calculator.globalVariable.aBitOfWaitingIsDone) {

                // $('.decisionWrapF').css({'transition':'1.023456s', 'transform':'scale(1.1)'});

                if(practice_calculator.globalVariable.playerIndex === 0) {

                    practice_calculator.globalVariable.enervate2FollowerF1 = true;
                    practice_calculator.icons.enervate2.followerF1(0);

                    $('.bf1').css({'transition':'1.023456s', 'box-shadow':'0px 0px 3px 3px lime', 'transform':'scale(1.04)'});
                }

                if(practice_calculator.globalVariable.playerIndex === 1) {

                    practice_calculator.globalVariable.enervate2FollowerF2 = true;
                    practice_calculator.icons.enervate2.followerF2(0);

                    $('.bf2').css({'transition':'1.023456s', 'box-shadow':'0px 0px 3px 3px lime', 'transform':'scale(1.04)'});
                }

            }

            if(practice_calculator.globalVariable.dynamicDisplay && practice_calculator.globalVariable.aBitOfWaitingIsDone) {

                practice_calculator.results.hide.followerOutcomesBottom();
                practice_calculator.results.hide.followerOutcomesTop();
                practice_calculator.results.hide.leaderOutcomes();
                practice_calculator.titles.hs.ghost.hide();
                practice_calculator.titles.update.position();

            }

            if(practice_calculator.globalVariable.aBitOfWaitingIsDone) {

                practice_calculator.section.hs.minimize(false);
                practice_calculator.section.contest.minimize(true);

                practice_calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.5,0,1]);
                practice_calculator.section.hs.set.iconPosition('center');
                practice_calculator.titles.hs.ghost.hide();
                practice_calculator.titles.hs.show();
                practice_calculator.titles.update.position();

                if(practice_calculator.space.hsResultsTopIsOpen){
                    practice_calculator.button.display.minTop(false);
                    practice_calculator.button.disable.minTop();
                }

            }




            practice_calculator.button.display.spinTop(false);
            // practice_calculator.button.display.minTop(false);
            // practice_calculator.button.disable.minTop();

            practice_calculator.decisionSlider.leader.isFlashing = false;

        },
        function() {

            // $('.outcomeWrap').css({'opacity':'0.7'});

            practice_calculator.globalVariable.enervate2FollowerF1 = false;
            practice_calculator.globalVariable.enervate2FollowerF2 = false;

            $('.decisionWrapF').css({'transition':'1.023456s', 'transform':'scale(1)'});


            if(practice_calculator.space.hsResultsTopIsOpen){
                practice_calculator.button.display.minTop(true);
                practice_calculator.button.enable.minTop();
            }

            if(practice_calculator.globalVariable.playerIndex === 0) {
                $('.bf1').css({'transition':'1.023456s', 'box-shadow':'0px 0px 0px 0px black', 'transform':'scale(1)'});
            }

            if(practice_calculator.globalVariable.playerIndex === 1) {
                $('.bf2').css({'transition':'1.023456s', 'box-shadow':'0px 0px 0px 0px black', 'transform':'scale(1)'});
            }
        }

    )



    //------------------------------------------------//
    //------------------------------------------------//
    //-------------- CONTEST SECTION -----------------//
    //------------------------------------------------//
    //------------------------------------------------//


    //----- LEFT HORIZONTAL SLIDER -----//

    $('#lSlider1').hover(
        function() {

            practice_calculator.globalVariable.pieBorderLeft = true;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.enervateLeaderLeft = true;
            practice_calculator.icons.enervate.leaderLeft(0);
            practice_calculator.globalVariable.enervate2LeaderLeft = false;

            $('.activeLeaderLeft').css({'opacity':'1'});
            $('.passiveLeaderLeft').css({'opacity':'0'});

            $('.activeFollowerLeft').css({'opacity':'1'});
            $('.passiveFollowerLeft').css({'opacity':'0'});

            setTimeout(()=>practice_calculator.graphics.update.barLabelX('barl1', true), 150);
            // practice_calculator.questions.spin2.l1();

            if(practice_calculator.globalVariable.hover.leaderContestAdjustments) {
                // practice_calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                practice_calculator.section.hs.opacity.SFiALiFiS([0,0,1,1,1,0]);
            }

        },
        function() {

            practice_calculator.globalVariable.pieBorderLeft = false;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.enervateLeaderLeft = false;
            practice_calculator.globalVariable.enervate2LeaderLeft = true;
            practice_calculator.icons.enervate2.leaderLeft(0);

            $('.activeLeaderLeft').css({'opacity':'0'});
            $('.passiveLeaderLeft').css({'opacity':'1'});

            $('.activeFollowerLeft').css({'opacity':'0'});
            $('.passiveFollowerLeft').css({'opacity':'1'});

            setTimeout(()=>practice_calculator.graphics.update.barLabelX('barl1', false), 400);
            practice_calculator.graphics.update.barGridX('barl1', false);

            if(practice_calculator.globalVariable.hover.leaderContestAdjustments) {
                practice_calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                // practice_calculator.section.hs.opacity.SFiALiFiS([0,0,1,1,1,0]);
            }

        }
    );

    $('.bswLeft').hover(
        function() {

            if(!practice_calculator.globalVariable.leaderHoverBlock) {

                practice_calculator.globalVariable.enervate2LeaderLeft = true;
                practice_calculator.icons.enervate2.leaderLeft(0);

                $('.l1vibrate').css({'transition':'0s', 'opacity':'0'});
                // $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
                $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1.1)'});
                $('.bswLeft').css({'transition':'0.7s', 'box-shadow':'0px 6px 6px 2px black'});

                if(practice_calculator.globalVariable.hover.cButton) {
                    practice_calculator.button.display.spinBottom(false);
                }

                practice_calculator.questions.spin1.l1();

                if(practice_calculator.lock.switch.all[0]) {
                    $('.l1vibrate').css({'transition':'0.3s', 'opacity':'1'});
                    practice_calculator.lock.switch.l1 = true;
                    practice_calculator.lock.vibrate.l1(1);
                }

            }

        },
        function() {

            practice_calculator.globalVariable.enervate2LeaderLeft = false;

            $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1)'});
            $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1)'});
            $('.bswLeft').css({'transition':'0.7s', 'box-shadow':'0px 1px 1px 0px black'});

            if(practice_calculator.globalVariable.hover.cButton) {
                practice_calculator.button.display.spinBottom(true);
            }

            practice_calculator.questions.spin2.l1();
            practice_calculator.lock.switch.l1 = false;

        }
    );


    //----- RIGHT HORIZONTAL SLIDER -----//

    $('#olSlider1').hover(
        function() {

            practice_calculator.globalVariable.pieBorderRight = true;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.enervateLeaderRight = true;
            practice_calculator.icons.enervate.leaderRight(0);

            practice_calculator.globalVariable.enervate2LeaderRight = false;

            $('.activeLeaderRight').css({'opacity':'1'});
            $('.passiveLeaderRight').css({'opacity':'0'});

            $('.activeFollowerRight').css({'opacity':'1'});
            $('.passiveFollowerRight').css({'opacity':'0'});

            setTimeout(()=>practice_calculator.graphics.update.barLabelX('barl2', true), 150);
            // practice_calculator.questions.spin2.l2();

            if(practice_calculator.globalVariable.hover.leaderContestAdjustments) {
                // practice_calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                practice_calculator.section.hs.opacity.SFiALiFiS([0,0,1,1,1,0]);
            }

        },
        function() {

            practice_calculator.globalVariable.pieBorderRight = false;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.enervateLeaderRight = false;
            practice_calculator.globalVariable.enervate2LeaderRight = true;
            practice_calculator.icons.enervate2.leaderRight(0);

            $('.activeLeaderRight').css({'opacity':'0'});
            $('.passiveLeaderRight').css({'opacity':'1'});

            $('.activeFollowerRight').css({'opacity':'0'});
            $('.passiveFollowerRight').css({'opacity':'1'});

            setTimeout(()=>practice_calculator.graphics.update.barLabelX('barl2', false), 400);
            practice_calculator.graphics.update.barGridX('barl2', false);

            if(practice_calculator.globalVariable.hover.leaderContestAdjustments) {
                practice_calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                // practice_calculator.section.hs.opacity.SFiALiFiS([0,0,1,1,1,0]);
            }

        }
    );

    $('.bswRight').hover(

        function() {

            practice_calculator.globalVariable.enervate2LeaderRight = true;
            practice_calculator.icons.enervate2.leaderRight(0);

            $('.l2vibrate').css({'transition':'0s', 'opacity':'0'});
            $('.bswRight').css({'transition':'0.7s', 'transform':'scale(1.1)'});
            $('.bswRight').css({'transition':'0.7s', 'box-shadow':'0px 6px 6px 2px black'});

            if(practice_calculator.globalVariable.hover.cButton) {
                practice_calculator.button.display.spinBottom(false);
            }

            practice_calculator.questions.spin1.l2();

            if(practice_calculator.lock.switch.all[1]) {
                $('.l2vibrate').css({'transition':'0.3s', 'opacity':'1'});
                practice_calculator.lock.switch.l2 = true;
                practice_calculator.lock.vibrate.l2(1);
            }

        },
        function() {

            practice_calculator.globalVariable.enervate2LeaderRight = false

            $('.bswRight').css({'transition':'0.7s', 'transform':'scale(1)'});
            $('.bswRight').css({'transition':'0.7s', 'box-shadow':'0px 1px 1px 0px black'});

            if(practice_calculator.globalVariable.hover.cButton) {
                practice_calculator.button.display.spinBottom(true);
            }

            practice_calculator.questions.spin2.l2();
            practice_calculator.lock.switch.l2 = false;

        }

    );



    //------------------------------------------------//
    //------------------------------------------------//
    //------------- HELP SABOTAGE SECTION ------------//
    //------------------------------------------------//
    //------------------------------------------------//


    practice_calculator.globalVariable.hover.fMadeInfo = false;


    //------ FOLLOWER 1 SLIDER ------//

    $('#vSlider1').hover(

        function() {

            practice_calculator.globalVariable.pieBorderLeft = true;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.powerBarLeft = true;
            practice_calculator.graphics.update.efficiencyBar();

            setTimeout(()=>practice_calculator.graphics.update.barLabelY('barf1', true), 150);
            practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L11', true);
            // practice_calculator.questions.spin2.f1();
            practice_calculator.globalVariable.enervateFollowerF1 = true;
            practice_calculator.icons.enervate.followerF1(0);
            practice_calculator.globalVariable.enervate2FollowerF1 = false;

        },

        function() {

            practice_calculator.globalVariable.pieBorderLeft = false;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.powerBarLeft = false;
            practice_calculator.graphics.update.efficiencyBar();

            setTimeout(()=>practice_calculator.graphics.update.barLabelY('barf1', false), 400);
            practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L11', false);
            practice_calculator.graphics.update.barGridY('barf1', false);

            practice_calculator.globalVariable.enervateFollowerF1 = false;
            practice_calculator.globalVariable.enervate2FollowerF1 = true;
            practice_calculator.icons.enervate2.followerF1(0);

        }

    );

    $('.lbf1').hover(

        function() {

            practice_calculator.globalVariable.enervate2FollowerF1 = true;
            practice_calculator.icons.enervate2.followerF1(0);

            $('#barf1').css({'transition':'0.7s', 'transform':'scale(1.04)'});

            if(practice_calculator.globalVariable.dynamicDisplay && practice_calculator.globalVariable.aBitOfWaitingIsDone) {

                if(practice_calculator.globalVariable.hover.hsResults){
                    practice_calculator.results.hide.followerOutcomesBottom();
                }

            }

            practice_calculator.questions.spin1.f1();

            if(practice_calculator.globalVariable.hover.hsButton){
                practice_calculator.button.display.spinTop(false);
            }

            practice_calculator.questions.spin1.f1();

            if(practice_calculator.lock.switch.all[2]) {

                practice_calculator.lock.switch.f1 = true;
                practice_calculator.lock.vibrate.f1(1);

            }

            if(practice_calculator.globalVariable.hover.fMadeInfo) {
                $('.decisionMadeExplanationWrap').css({'transition':'0.5s', 'opacity':'1'})
            }

        },
        function() {

            practice_calculator.globalVariable.enervate2FollowerF1 = false;

            $('#barf1').css({'transition':'0.7s', 'transform':'scale(1)'});

            if(practice_calculator.globalVariable.dynamicDisplay && practice_calculator.globalVariable.aBitOfWaitingIsDone) {

                if(practice_calculator.globalVariable.hover.hsResults){
                    practice_calculator.results.show.followerOutcomesBottom();
                }

            }

            if(practice_calculator.globalVariable.hover.hsButton){
                practice_calculator.button.display.spinTop(true);
            }

            // if(practice_calculator.space.hsResultsTopIsOpen){
            //     practice_calculator.button.display.minTop(true);
            //     practice_calculator.button.enable.minTop();
            // }

            practice_calculator.questions.spin2.f1();

            practice_calculator.lock.switch.f1 = false;

            if(practice_calculator.globalVariable.hover.fMadeInfo) {
                $('.decisionMadeExplanationWrap').css({'transition':'0.5s', 'opacity':'0'})
            }

        }

    );


    //-------- FOLLOWER 2 SLIDER ------//

    $('#vSlider2').hover(
        function() {

            practice_calculator.globalVariable.pieBorderLeft = true;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.powerBarLeft = true;
            practice_calculator.graphics.update.efficiencyBar();

            setTimeout(()=>practice_calculator.graphics.update.barLabelY('barf2', true), 150);
            practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L12', true);
            // practice_calculator.questions.spin2.f2();
            practice_calculator.globalVariable.enervateFollowerF2 = true;
            practice_calculator.icons.enervate.followerF2(0);
            practice_calculator.globalVariable.enervate2FollowerF2 = false;


        },
        function() {

            practice_calculator.globalVariable.pieBorderLeft = false;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.powerBarLeft = false;
            practice_calculator.graphics.update.efficiencyBar();

            setTimeout(()=>practice_calculator.graphics.update.barLabelY('barf2', false), 400);
            practice_calculator.graphics.update.barGridY('barf2', false);
            practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L12', false);

            practice_calculator.globalVariable.enervateFollowerF2 = false;
            practice_calculator.globalVariable.enervate2FollowerF2 = true;
            practice_calculator.icons.enervate2.followerF2(0);

        }
    );

    $('.lbf2').hover(

        function() {

            practice_calculator.globalVariable.enervate2FollowerF2 = true;
            practice_calculator.icons.enervate2.followerF2(0);

            $('#barf2').css({'transition':'0.7s', 'transform':'scale(1.04)'});

            if(practice_calculator.globalVariable.dynamicDisplay && practice_calculator.globalVariable.aBitOfWaitingIsDone) {

                if(practice_calculator.globalVariable.hover.hsResults){
                    practice_calculator.results.hide.followerOutcomesBottom();
                }

            }

            if(practice_calculator.globalVariable.hover.hsTop){
                practice_calculator.button.display.spinTop(false);
            }

            // if(practice_calculator.space.hsResultsTopIsOpen){
            //     practice_calculator.button.display.minTop(false);
            //     practice_calculator.button.disable.minTop();
            // }

            practice_calculator.questions.spin1.f2();

            if(practice_calculator.lock.switch.all[3]) {

                practice_calculator.lock.switch.f2 = true;
                practice_calculator.lock.vibrate.f2(1);

            }

            if(practice_calculator.globalVariable.hover.fMadeInfo) {
                $('.decisionMadeExplanationWrap').css({'transition':'0.5s', 'opacity':'1'})
            }

        },
        function() {

            practice_calculator.globalVariable.enervate2FollowerF2 = false;

            $('#barf2').css({'transition':'0.7s', 'transform':'scale(1)'});

            if(practice_calculator.globalVariable.dynamicDisplay && practice_calculator.globalVariable.aBitOfWaitingIsDone) {
                if(practice_calculator.globalVariable.hover.hsResults){
                    practice_calculator.results.show.followerOutcomesBottom();
                }
            }

            if(practice_calculator.globalVariable.hover.hsButton){
                practice_calculator.button.display.spinTop(true);
            }

            // if(practice_calculator.space.hsResultsTopIsOpen){
            //     practice_calculator.button.display.minTop(true);
            //     practice_calculator.button.enable.minTop();
            // }

            practice_calculator.questions.spin2.f2();

            practice_calculator.lock.switch.f2 = false;

            if(practice_calculator.globalVariable.hover.fMadeInfo) {
                $('.decisionMadeExplanationWrap').css({'transition':'0.5s', 'opacity':'0'})
            }

        }

    );


    //-------- O FOLLOWER 1 SLIDER -----//

    $('#ovSlider1').hover(
        function() {

            practice_calculator.globalVariable.pieBorderRight = true;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.powerBarRight = true;
            practice_calculator.graphics.update.efficiencyBar();

            setTimeout(()=>practice_calculator.graphics.update.barLabelY('obarf1', true), 150);
            practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L21', true);
            // practice_calculator.questions.spin2.of2();
            practice_calculator.globalVariable.enervateFollowerOF1 = true;
            practice_calculator.icons.enervate.followerOF1(0);
            practice_calculator.globalVariable.enervate2FollowerOF1 = false;

        },
        function() {

            practice_calculator.globalVariable.pieBorderRight = false;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.powerBarRight = false;
            practice_calculator.graphics.update.efficiencyBar();

            practice_calculator.graphics.update.barGridY('obarf1', false);
            setTimeout(()=>practice_calculator.graphics.update.barLabelY('obarf1', false), 400);
            practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L21', false);

            practice_calculator.globalVariable.enervateFollowerOF1 = false;
            practice_calculator.globalVariable.enervate2FollowerOF1 = true;
            practice_calculator.icons.enervate2.followerOF1(0);

        }
    );

    $('.rbf1').hover(

        function() {

            practice_calculator.globalVariable.enervate2FollowerOF1 = true;
            practice_calculator.icons.enervate2.followerOF1(0);

            $('#obarf1').css({'transition':'0.7s', 'transform':'scale(1.04)'});

            if(practice_calculator.globalVariable.dynamicDisplay && practice_calculator.globalVariable.aBitOfWaitingIsDone) {

                if(practice_calculator.globalVariable.hover.hsResults){
                    practice_calculator.results.hide.followerOutcomesBottom();
                }

            }

            if(practice_calculator.globalVariable.hover.hsButton){
                practice_calculator.button.display.spinTop(false);
            }

            // if(practice_calculator.space.hsResultsTopIsOpen){
            //     practice_calculator.button.display.minTop(false);
            //     practice_calculator.button.disable.minTop();
            // }

            practice_calculator.questions.spin1.of1();

            if(practice_calculator.lock.switch.all[4]) {

                practice_calculator.lock.switch.of1 = true;
                practice_calculator.lock.vibrate.of1(1);

            }

            if(practice_calculator.globalVariable.hover.fMadeInfo) {
                $('.decisionMadeExplanationWrap').css({'transition':'0.5s', 'opacity':'1'})
            }

        },
        function() {

            practice_calculator.globalVariable.enervate2FollowerOF1 = false;

            $('#obarf1').css({'transition':'0.7s', 'transform':'scale(1)'});

            if(practice_calculator.globalVariable.dynamicDisplay && practice_calculator.globalVariable.aBitOfWaitingIsDone) {

                if(practice_calculator.globalVariable.hover.hsResults){
                    practice_calculator.results.show.followerOutcomesBottom();
                }

            }

            if(practice_calculator.globalVariable.hover.hsButton){
                practice_calculator.button.display.spinTop(true);
            }

            // if(practice_calculator.space.hsResultsTopIsOpen){
            //     practice_calculator.button.display.minTop(true);
            //     practice_calculator.button.enable.minTop();
            // }

            practice_calculator.questions.spin2.of1();

            practice_calculator.lock.switch.of1 = false;

            if(practice_calculator.globalVariable.hover.fMadeInfo) {
                $('.decisionMadeExplanationWrap').css({'transition':'0.5s', 'opacity':'0'})
            }

        }

    );


    //-------- O FOLLOWER 2 SLIDER -----//

    $('#ovSlider2').hover(
        function() {

            practice_calculator.globalVariable.pieBorderRight = true;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.powerBarRight = true;
            practice_calculator.graphics.update.efficiencyBar();

            setTimeout(()=>practice_calculator.graphics.update.barLabelY('obarf2', true), 150);
            practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L22', true);
            // practice_calculator.questions.spin2.of2();

            practice_calculator.globalVariable.enervateFollowerOF2 = true;
            practice_calculator.icons.enervate.followerOF2(0);
            practice_calculator.globalVariable.enervate2FollowerOF2 = false;

        },
        function() {

            practice_calculator.globalVariable.pieBorderRight = false;
            practice_calculator.graphics.update.pie();

            practice_calculator.globalVariable.powerBarRight = false;
            practice_calculator.graphics.update.efficiencyBar();

            practice_calculator.graphics.update.barGridY('obarf2', false);
            setTimeout(()=>practice_calculator.graphics.update.barLabelY('obarf2', false), 400);
            practice_calculator.section.hs.opacity.activeFollowerIcon('spf1L22', false);

            practice_calculator.globalVariable.enervateFollowerOF2 = false;
            practice_calculator.globalVariable.enervate2FollowerOF2 = true;
            practice_calculator.icons.enervate2.followerOF2(0);

        }
    );

    $('.rbf2').hover(

        function() {

            practice_calculator.globalVariable.enervate2FollowerOF2 = true;
            practice_calculator.icons.enervate2.followerOF2(0);

            $('#obarf2').css({'transition':'0.7s', 'transform':'scale(1.04)'});

            if(practice_calculator.globalVariable.dynamicDisplay && practice_calculator.globalVariable.aBitOfWaitingIsDone) {
                if(practice_calculator.globalVariable.hover.hsResults){
                    practice_calculator.results.hide.followerOutcomesBottom();
                }
            }

            if(practice_calculator.globalVariable.hover.hsButton){
                practice_calculator.button.display.spinTop(false);
            }

            // if(practice_calculator.space.hsResultsTopIsOpen){
            //     practice_calculator.button.display.minTop(false);
            //     practice_calculator.button.disable.minTop();
            // }

            practice_calculator.questions.spin1.of2();

            if(practice_calculator.lock.switch.all[5]) {

                practice_calculator.lock.switch.of2 = true;
                practice_calculator.lock.vibrate.of2(1);

            }

            if(practice_calculator.globalVariable.hover.fMadeInfo) {
                $('.decisionMadeExplanationWrap').css({'transition':'0.5s', 'opacity':'1'})
            }

        },
        function() {

            practice_calculator.globalVariable.enervate2FollowerOF2 = false;

            $('#obarf2').css({'transition':'0.7s', 'transform':'scale(1)'});

            if(practice_calculator.globalVariable.dynamicDisplay && practice_calculator.globalVariable.aBitOfWaitingIsDone) {
                if(practice_calculator.globalVariable.hover.hsResults){
                    practice_calculator.results.show.followerOutcomesBottom();
                }
            }

            if(practice_calculator.globalVariable.hover.hsButton){
                practice_calculator.button.display.spinTop(true);
            }

            // if(practice_calculator.space.hsResultsTopIsOpen){
            //     practice_calculator.button.display.minTop(true);
            //     practice_calculator.button.enable.minTop();
            // }

            practice_calculator.questions.spin2.of2();

            practice_calculator.lock.switch.of2 = false;

            if(practice_calculator.globalVariable.hover.fMadeInfo) {
                $('.decisionMadeExplanationWrap').css({'transition':'0.5s', 'opacity':'0'})
            }

        }

    );



    //------------------------------------------------//
    //------------------------------------------------//
    //------------------ MAIN BODIES -----------------//
    //------------------------------------------------//
    //------------------------------------------------//

    practice_calculator.globalVariable.hover.leaderContestAdjustments = false;
    practice_calculator.globalVariable.hover.followerHsAdjustments = false;

    //------ HELP SABOTAGE SECTION -----//

    $('.hsWrap').hover(

        function() {

            if(practice_calculator.globalVariable.aBitOfWaitingIsDone) {

                if(practice_calculator.globalVariable.playerIndex === -1) {
                    practice_calculator.globalVariable.playerIndex = 10;
                }


                if(practice_calculator.noResults) {
                    $('.generalMarginBox').css({'transform':'scale(1)', 'margin-top':'80px'});
                } else {
                    $('.generalMarginBox').css({'transform':'scale(1)', 'margin-top':'15px'});
                }

                $('.follower1Circle, .follower2Circle').css({'transition':'1s', 'margin-left':'-395px'});

                // contes hide title
                if(practice_calculator.globalVariable.hover.cTitle) {
                    practice_calculator.titles.contest.hide();
                }

                // contest hide botton
                if(practice_calculator.globalVariable.hover.cButton) {
                    practice_calculator.button.display.spinBottom(false);
                }

                // hs icon setup
                if(practice_calculator.globalVariable.hover.hsIcons) {
                    // practice_calculator.refresh.sliders();
                    practice_calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.7,0,1]);
                    practice_calculator.section.hs.set.iconPosition('center');
                }

                // hs show main title
                if(practice_calculator.globalVariable.hover.hsMainTitle) {
                    practice_calculator.titles.hs.show();
                }

                // hs show button
                if(practice_calculator.globalVariable.hover.hsButton) {
                    practice_calculator.button.display.spinTop(true);
                }

                // turn of the hovering ability on showing the results
                if(practice_calculator.globalVariable.dynamicDisplay) {

                    // contest hide results
                    if(practice_calculator.globalVariable.hover.cResults) {
                        practice_calculator.results.hide.leaderOutcomes();
                    }

                    // hs show results
                    if(practice_calculator.globalVariable.hover.hsResults) {
                        practice_calculator.results.show.followerOutcomesAll();
                    }

                    practice_calculator.button.display.minTop(true);
                    practice_calculator.button.enable.minTop();

                    practice_calculator.button.display.minBottom(false);
                    practice_calculator.button.disable.minBottom();

                    practice_calculator.titles.update.position();

                }

                // hs maximize
                if(practice_calculator.globalVariable.hover.hsMinimize) {
                    practice_calculator.section.hs.minimize(false);
                }

                // contest minimize
                if(practice_calculator.globalVariable.hover.cMinimize) {
                    practice_calculator.section.contest.minimize(true);

                }

                // hs ghost title chaos (so far it works)

                if(!practice_calculator.globalVariable.dynamicDisplay && !practice_calculator.space.hsResultsTopIsOpen && !practice_calculator.space.open.hsResultsBottomIsOpen) {

                    if(practice_calculator.globalVariable.hover.hsGhostTitle){

                        practice_calculator.titles.hs.ghost.text();
                        practice_calculator.titles.hs.ghost.hide();

                    }

                }

                if(practice_calculator.globalVariable.dynamicDisplay && practice_calculator.space.hsResultsTopIsOpen && practice_calculator.space.hsResultsBottomIsOpen && practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {

                    if(practice_calculator.globalVariable.hover.hsGhostTitle){

                        practice_calculator.titles.hs.ghost.text();
                        practice_calculator.titles.hs.ghost.hide();

                    }

                }

                if(practice_calculator.globalVariable.dynamicDisplay) {

                    if(practice_calculator.globalVariable.hover.hsGhostTitle){

                        practice_calculator.titles.hs.ghost.text();
                        practice_calculator.titles.hs.ghost.hide();

                    }

                }

                if(practice_calculator.globalVariable.hover.leaderContestAdjustments) {
                    $('.ctTop').css({'margin-top':'82px'})
                }

                if(practice_calculator.globalVariable.hover.followerHsAdjustments) {
                    $('.calculator').css({'transition':'1s', 'margin-top':'0px'})
                }


                if(practice_calculator.noResults) {
                    practice_calculator.titles.contest.hide();
                    practice_calculator.titles.hs.show();
                    $('.generalMarginBox').css({'transform':'scale(1)', 'margin-top':'80px'});
                } else {
                    $('.generalMarginBox').css({'transform':'scale(1)', 'margin-top':'15px'});
                }

                practice_calculator.button.display.spinTop(false);

                practice_calculator.focusOnContest = false;

                if(practice_calculator.globalVariable.playerIndex === 10) {
                    practice_calculator.globalVariable.playerIndex = -1;
                }

            }

        },

        function() {
            if(practice_calculator.globalVariable.hover.leaderContestAdjustments) {
                $('.ctTop').css({'margin-top':'0px'})
                practice_calculator.section.hs.minimize(true);
                practice_calculator.titles.hs.ghost.text();
                practice_calculator.titles.hs.ghost.show();
                practice_calculator.titles.hs.hide();
                practice_calculator.section.contest.minimize(false);
                practice_calculator.section.hs.set.iconPosition('bottom');
                practice_calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
            }
        }

    )


    //------ CONTEST SECTION ------//

    $('.contestSection').hover(

        function() {

            if(practice_calculator.globalVariable.aBitOfWaitingIsDone) {



                $('.follower1Circle, .follower2Circle').css({'transition':'1s', 'margin-left':'-461px'});

                // contest show button
                if(practice_calculator.globalVariable.hover.cButton){
                    practice_calculator.button.enable.spinBottom();
                    practice_calculator.button.display.spinBottom(true);
                }

                // hs setup icon
                if(practice_calculator.globalVariable.hover.hsIcons){
                    // practice_calculator.section.hs.opacity.SFiALiFiS([0,0,1,1,1,0]);
                    practice_calculator.section.hs.opacity.SFiALiFiS([0.6,0.4,1,1,1,0]);
                    practice_calculator.section.hs.set.iconPosition('bottom');
                    // setTimeout(()=>{
                    //     practice_calculator.graphics.hide.sliderBackground();
                    //     practice_calculator.section.hs.opacity.SFiALiFiS([1,0,1,1,1,0]);
                    // }, 100)
                }

                // hs title
                if(practice_calculator.globalVariable.hover.hsMainTitle){
                    practice_calculator.titles.hs.hide();
                }

                // hs button
                if(practice_calculator.globalVariable.hover.hsButton){
                    practice_calculator.button.display.spinTop(false);
                }

                // c title
                if(practice_calculator.globalVariable.hover.cTitle){
                    practice_calculator.titles.contest.show();
                }

                if(practice_calculator.globalVariable.dynamicDisplay) {

                    // // c title
                    // if(practice_calculator.globalVariable.hover.cTitle){
                    //     practice_calculator.titles.contest.show();
                    // }
                    // c results
                    if(practice_calculator.globalVariable.hover.cResults){
                        practice_calculator.results.show.leaderOutcomes();
                    }
                    //----//

                    // hs results
                    if(practice_calculator.globalVariable.hover.hsResults){
                        practice_calculator.results.hide.followerOutcomesAll();
                    }
                    // hs minimize button on the decision slider of hs
                    practice_calculator.button.display.minTop(false);
                    practice_calculator.button.disable.minTop();

                    //----//

                    // contest minimize button on the decision slider of contest
                    practice_calculator.button.display.minBottom(true);
                    practice_calculator.button.enable.minBottom();

                }

                // hs minimize
                if(practice_calculator.globalVariable.hover.hsMinimize) {
                    practice_calculator.section.hs.minimize(true);
                }

                // contest maximize
                if(practice_calculator.globalVariable.hover.cMinimize) {
                    practice_calculator.section.contest.minimize(false);
                }

                // even the follower results are not shown make sure to display the ghost title for contest on top of leader icons
                if(!practice_calculator.space.hsResultsTopIsOpen && !practice_calculator.space.hsResultsBottomIsOpen) {

                    if(practice_calculator.globalVariable.hover.hsGhostTitle){
                        practice_calculator.titles.hs.ghost.text();
                        practice_calculator.titles.hs.ghost.show();
                    }

                }

                if(practice_calculator.globalVariable.dynamicDisplay && !practice_calculator.space.hsResultsTopIsOpen && !practice_calculator.space.hsResultsBottomIsOpen && practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {

                    if(practice_calculator.globalVariable.hover.hsGhostTitle){
                        practice_calculator.titles.hs.ghost.text();
                        practice_calculator.titles.hs.ghost.show();
                    }

                }

                if(practice_calculator.globalVariable.hover.followerHsAdjustments) {
                    $('.calculator').css({'transition':'1s', 'margin-top':'-68px'})
                }


                if(practice_calculator.noResults) {
                    practice_calculator.titles.contest.show();
                    practice_calculator.titles.hs.hide();
                    $('.generalMarginBox').css({'transform':'scale(1)', 'margin-top':'0px'});
                } else {
                    $('.generalMarginBox').css({'transform':'scale(1)', 'margin-top':'-3px'});
                }

                practice_calculator.focusOnContest = true;



            }

        },

        function() {

            if(practice_calculator.globalVariable.hover.leaderContestAdjustments) {
                practice_calculator.section.hs.opacity.SFiALiFiS([0.6,0.4,1,1,1,0]);
            }

        }

    )


    //------------------------------------------------//
    //------------------------------------------------//
    //----------------- SPIN BUTTONS -----------------//
    //------------------------------------------------//
    //------------------------------------------------//

    var sp23C = 0;
    $('#spinImage23').hover(
        function() {
            sp23C = sp23C + 1;
            var str = 'rotate('+sp23C+'turn)';
            $('#spinImage23').css({'transition':'0.5s', 'transform':str});
        },
        function() {

        }
    )

    var spC = 0;
    $('#spinImage').hover(
        function() {
            spC = spC + 1;
            var str = 'rotate('+spC+'turn)';
            $('#spinImage').css({'transition':'0.5s', 'transform':str});

            // practice_calculator.wheel.cruise();
            // practice_calculator.wheel.show();
        },
        function() {
        }
    )


    $('#submitButtonTop').hover(
        function() {
            // $('.decisionWrapF').css({'transition':'1.023456s', 'transform':'scale(1.1)'});
            // console.log('asdasdaiojrowqieqljwnq');
            practice_calculator.button.activeSubmitButtonAnimation = true;
            practice_calculator.button.animate(0);
        },
        function() {
            $('.decisionWrapF').css({'transition':'1.023456s', 'transform':'scale(1)'});
            practice_calculator.button.activeSubmitButtonAnimation = false;
        }
    )

    $('#submitButtonBottom').hover(
        function() {
            // $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
            practice_calculator.button.activeSubmitButtonAnimation2 = true;
            practice_calculator.button.animate2(0);
        },
        function() {
            $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1)'});
            practice_calculator.button.activeSubmitButtonAnimation2 = false;
        }
    )


    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////
    /////////////////// TITLE /////////////////////


    //------- POSITION -----//
    practice_calculator.titles.update.position = function() {

        if(!practice_calculator.space.hsResultsTopIsOpen) {
            practice_calculator.titles.update.topTitleMargins(0, -75);
        }

        if(practice_calculator.space.hsResultsTopIsOpen) {
            practice_calculator.titles.update.topTitleMargins(35, -110);
        }

    }

    practice_calculator.titles.update.topTitleMargins = function(mt, mb) {

        mt = mt === undefined ? 0 : mt;
        mb = mb === undefined ? 0 : mb;

        mt = mt + 'px';
        mb = mb + 'px';

        $('.ctTop').css({'margin-bottom': mb , 'margin-top': mt});

    }

    practice_calculator.titles.update.bottomTitleMargins = function(mt, mb) {

        mt = mt === undefined ? 0 : mt;
        mb = mb === undefined ? 0 : mb;

        mt = mt + 'px';
        mb = mb + 'px';

        $('.ctBottom').css({'margin-bottom': mb , 'margin-top': mt});

    }


    //------- HS TITLE SHOW / HIDE -------//

    practice_calculator.titles.hs.show = function() {

        $('.ctTop').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0turn)'});
        $('.ctTop').css({'opacity':'1'});

    }

    practice_calculator.titles.hs.hide = function() {

        $('.ctTop').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
        $('.ctTop').css({ 'opacity':'0'});

    }

    practice_calculator.titles.hs.ghost.show = function() {

        $('.ctGhost').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0turn)'});
        $('.ctGhost').css({'opacity':'1'});
        practice_calculator.titles.hs.ghost.adjustHeight();

    }

    practice_calculator.titles.hs.ghost.hide = function() {

        $('.ctGhost').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 1turn)'});
        $('.ctGhost').css({ 'opacity':'0'});

    }

    practice_calculator.titles.opacity.all = function(array) {
        var topt, bopt;

        topt = array[0] ? '1' : '0';
        bopt = array[1] ? '1' : '0';

        $('.ctTop').css({'opacity':topt});
        $('.ctBottom').css({'opacity':bopt});

    }

    practice_calculator.titles.hs.ghost.adjustHeight = function() {
        var myEfi = Math.max(efi, oefi);
        var marginTop;

        if(myEfi === 1) {
            marginTop = '112px';
        } else if(myEfi === 2) {
            marginTop = '94px';
        } else if(myEfi < 6) {
            marginTop = '86px';
        } else if(myEfi < 16) {
            marginTop = '81px';
        } else {
            marginTop = '75px';
        }

        var myHeight = Math.max($('.splc1').height(), $('.splc2').height());

        if(myHeight <= 85) {

            var yo = 170 - myHeight;
            yo = yo +'px';
            marginTop = yo;

        }



        $('.ctGhost').css({'transition':'1.023456s', 'margin-top' : marginTop});

    }


    //------- CONTEST TITLE SHOW / HIDE -------//

    practice_calculator.titles.contest.show = function() {

        $('.ctBottom').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 1turn)', 'opacity':'1'});
        $('.imageWrap23').css({'transition':'1.023456s', 'opacity':'1'});

        practice_calculator.space.open.cResults();

    }

    practice_calculator.titles.contest.hide = function() {

        $('.ctBottom').css({'transition':'1.023456ss', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
        $('.ctBottom').css({ 'opacity':'0'});

        practice_calculator.space.close.cResults();

        // this is a stupid line negating the method by calling its counterpart
        if(practice_calculator.globalVariable.playerIndex === -1 && practice_calculator.globalVariable.playerView) {
            practice_calculator.titles.contest.show();
        }

    }


    //---------- TEXT AND COLOR ---------//

    practice_calculator.titles.hs.ghost.text = function() {

        var contestName1, contestName2;

        contestName1 = document.getElementById('contestNameG1');
        contestName2 = document.getElementById('contestNameG2');

        if(practice_calculator.globalVariable.isOG1) {

            contestName1.innerHTML = 'OUT-GROUP CONTEST I';
            contestName2.innerHTML = 'LEADERS\' COMPETITION';

        }

        if(practice_calculator.globalVariable.isOG2) {

            contestName1.innerHTML = 'OUT-GROUP CONTEST II';
            contestName2.innerHTML = 'LEADERS\' COMPETITION';

        }

        if(practice_calculator.globalVariable.isIGA) {
            contestName1.innerHTML = 'OUT-GROUP CONTEST A';
            contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
        }

        if(practice_calculator.globalVariable.isIGB) {
            contestName1.innerHTML = 'OUT-GROUP CONTEST B';
            contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
        }

    }

    practice_calculator.titles.update.textAndColor = function() {

        var contestName1, contestName2, contestName21, contestName22;

        contestName1 = document.getElementById('contestName1');
        contestName2 = document.getElementById('contestName2');
        contestName21 = document.getElementById('contestName21');
        contestName22 = document.getElementById('contestName22');

        if(practice_calculator.globalVariable.isOG1) {

            $('.contestTitle1').css({'color':'white', 'font-size':'25px',
            'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))',
            'width':'308px', 'margin-left':'90px', 'margin-top':'-4px',
            'border-radius':'40px'});

            if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex != -1) {
                $('.contestTopColor').css({'color':'white', 'font-size':'25px',
                'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});
            }

            $('.contestTitle2').css({'font-size':'22px'});
            contestName1.innerHTML = 'OUT-GROUP CONTEST I';
            contestName2.innerHTML = 'FOLLOWERS\' HELP & SABOTAGE';


            $('.contestTitle22').css({'color':'white',
            'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))'});
            contestName21.innerHTML = 'LEADERS\' COMPETITION';
            contestName22.innerHTML = 'OUT-GROUP CONTEST I';

            if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {

                $('.contestTitle22, .ghostTitleColor').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

            }

        }

        if(practice_calculator.globalVariable.isOG2) {

            $('.contestTitle1').css({'color':'white', 'font-size':'25px',
            'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))',
            'width':'308px', 'margin-left':'90px', 'margin-top':'-4px',
            'border-radius':'40px'});

            if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex != -1) {
                $('.contestTopColor').css({'color':'white', 'font-size':'25px',
                'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});
            }

            $('.contestTitle2').css({'font-size':'22px'});
            contestName1.innerHTML = 'OUT-GROUP CONTEST II';
            contestName2.innerHTML = 'FOLLOWERS\' HELP & SABOTAGE';

            $('.contestTitle22').css({'color':'white',
            'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))'});
            contestName21.innerHTML = 'LEADERS\' COMPETITION';
            contestName22.innerHTML = 'OUT-GROUP CONTEST II';

            if(practice_calculator.globalVariable.playerView && practice_calculator.globalVariable.playerIndex === -1) {

                $('.contestTitle22, .ghostTitleColor').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

            }

        }

        if(practice_calculator.globalVariable.isIGA) {

            contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
            contestName1.innerHTML = 'IN-GROUP CONTEST A';
            $('.ctWrap').css({'margin-bottom':'-97px', 'margin-top':'0px'});

            $('.contestTitle22, .ghostTitleColor').css({'color':'white',
            'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(60,60,60))'});

        }

        if(practice_calculator.globalVariable.isIGB) {

            contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
            contestName1.innerHTML = 'IN-GROUP CONTEST A';
            $('.ctWrap').css({'margin-bottom':'-97px', 'margin-top':'0px'});

            $('.contestTitle22, .ghostTitleColor').css({'color':'white',
            'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

        }


        //---------------------------//

        //---- only for tutorial ----//
        // tutorial showing two followers as the same color to argue that we will use a different color
        if(practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.tutorial.IGSameColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    $('.contestTitle22').css({'color':'white',
                    'background':'linear-gradient(90deg, rgb(60, 60, 60), rgb(60,60,60))'});
                }
                if(practice_calculator.globalVariable.isIGB) {
                    $('.contestTitle22').css({'color':'white',
                    'background':'linear-gradient(90deg, rgb(210, 210, 210), rgb(210,210,210))'});
                }
            }
            // tutorial showing two followers with different colors
            if(practice_calculator.globalVariable.tutorial.IGDifferentColor) {
                if(practice_calculator.globalVariable.isIGA) {
                    $('.contestTitle22').css({'color':'white',
                    'background':'linear-gradient(90deg, rgb(60, 60, 60), rgb(210,210,0))'});
                }
                if(practice_calculator.globalVariable.isIGB) {
                    $('.contestTitle22').css({'color':'black',
                    'background':'linear-gradient(90deg, rgb(210, 210, 210), rgb(210,210,0))'});
                }
            }

        }
        //---- only for tutorial ----//

        //---------------------------//

        //---- in-group contest follower's competition color setup for leader's view----//

        // In-group contest A, leader's point of view
        if(!practice_calculator.globalVariable.tutorial.weAreInTutorial) {

            if(practice_calculator.globalVariable.isIGA) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    $('.contestTitle22').css({'color':'white',
                    'background':'linear-gradient(90deg, rgb(60, 60, 60), rgb(210,210,0))'});
                }
            }

            // In-group contest A, leader's point of view
            if(practice_calculator.globalVariable.isIGB) {
                if(practice_calculator.globalVariable.playerIndex === -1 || !practice_calculator.globalVariable.playerView) {
                    $('.contestTitle22').css({'color':'black',
                    'background':'linear-gradient(90deg, rgb(210, 210, 210), rgb(210,210,0))'});
                }
            }

        }

        //---------------------------//

    }


    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////
    //////////// ICON /////////////


    //----- DISPLAY ICON DEPENDING ON INDEX AND ROLE ------//

    practice_calculator.icons.setMe = function() {

        $('.objectivef1').css({'display':'flex'});
        $('.objectivef2').css({'display':'flex'});
        $('.objectivel').css({'display':'flex'});
        $('.objectivef').css({'display':'flex'});

        $('.subjectivef1').css({'display':'none'});
        $('.subjectivef2').css({'display':'none'});
        $('.subjectivel').css({'display':'none'});
        $('.subjectivef').css({'display':'none'})

        if(practice_calculator.globalVariable.playerView) {

            if(practice_calculator.globalVariable.playerIndex === 0) {
                // OG
                $('.subjectivef1').css({'display':'flex'});
                $('.objectivef1').css({'display':'none'});

                //IGA
                $('.subjectivef').css({'display':'flex'});
                $('.objectivef').css({'display':'none'});


            }

            if(practice_calculator.globalVariable.playerIndex === 1) {

                // OG
                $('.subjectivef2').css({'display':'flex'});
                $('.objectivef2').css({'display':'none'});

                //IGA
                $('.subjectivef').css({'display':'flex'});
                $('.objectivef').css({'display':'none'});

            }

            if(practice_calculator.globalVariable.playerIndex === -1) {
                // OG
                $('.subjectivel').css({'display':'flex'});
                $('.objectivel').css({'display':'none'});

            }


        }

    }

    practice_calculator.icons.setOG1 = function() {

        // right side og1 setup initial roles
        $('.sameOLeaderIcon, .oldFollowerIconOfNewLeaderOf1, .oldFollowerIconOfNewLeaderOf2').css({'display':'flex'});
        $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf1, .newLeaderIconOfOldOf2, .newFollowerIconOfOldLeaderOf1, .newFollowerIconOfOldLeaderOf2').css({'display':'none'});

        // left side og1 setup intial roles
        $('.sameLeaderIcon, .oldFollowerIconOfNewLeaderf2, .oldFollowerIconOfNewLeaderf1').css({'display':'flex'});
        $('.newLeaderIconOfOldf, .newLeaderIconOfOldf1, .newLeaderIconOfOldf2, .newFollowerIconOfOldLeaderf1, .newFollowerIconOfOldLeaderf2').css({'display':'none'});


    }

    practice_calculator.icons.adjustForTreatment = function() {

        $('.homoLeftFollowers, .homoRightFollowers, .homoLeftLeaders, .homoRightLeaders').css({'display':'flex'});
        $('.heteroLeftFollowers, .heteroRightFollowers, .heteroLeftLeaders, .heteroRightLeaders').css({'display':'none'});

        if(practice_calculator.globalVariable.ourFollowersAreHetero) {

            // OG and IGA and IGB
            $('.homoLeftFollowers, .homoLeftLeaders').css({'display':'none'});
            $('.heteroLeftFollowers, .heteroLeftLeaders').css({'display':'flex'});

        }
        if(practice_calculator.globalVariable.theirFollowersAreHetero) {

            // OG and IGA and IGB
            $('.homoRightFollowers, .homoRightLeaders').css({'display':'none'});
            $('.heteroRightFollowers, .heteroRightLeaders').css({'display':'flex'});

        }

    }

    practice_calculator.icons.setOG2 = function() {

        if(practice_calculator.globalVariable.winnerLeaderIndex === 1) {

            // left side the same
            // same followers
            $('.oldFollowerIconOfNewLeaderf2, .oldFollowerIconOfNewLeaderf1').css({'display':'flex'});
            $('.newFollowerIconOfOldLeaderf1, .newFollowerIconOfOldLeaderf2').css({'display':'none'});
            //same leader
            $('.sameLeaderIcon').css({'display':'flex'});
            $('.newLeaderIconOfOldf, .newLeaderIconOfOldf1, .newLeaderIconOfOldf2').css({'display':'none'});

            if(practice_calculator.globalVariable.winnerFollowerIndex === 1) {
                // right side changes
                // top follower or strong follower is now the new leader
                // defeated leader takes the top follower's place the other follower is the same
                $('.newFollowerIconOfOldLeaderOf1, .oldFollowerIconOfNewLeaderOf2').css({'display':'flex'});
                $('.oldFollowerIconOfNewLeaderOf1, .newFollowerIconOfOldLeaderOf2').css({'display':'none'});
                // leader icon is now the old follower's new leader icon
                $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf1').css({'display':'flex'});
                $('.sameOLeaderIcon, .newLeaderIconOfOldOf2').css({'display':'none'});
            }

            if(practice_calculator.globalVariable.winnerFollowerIndex === 2) {
                // top follower or strong follower is now the new leader
                // defeated leader takes the top follower's place the other follower is the same
                $('.newFollowerIconOfOldLeaderOf2, .oldFollowerIconOfNewLeaderOf1').css({'display':'flex'});
                $('.oldFollowerIconOfNewLeaderOf2, .newFollowerIconOfOldLeaderOf1').css({'display':'none'});
                // leader icon is now the old follower's new leader icon
                $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf2').css({'display':'flex'});
                $('.sameOLeaderIcon, .newLeaderIconOfOldOf1').css({'display':'none'});
            }

        }

        if(practice_calculator.globalVariable.winnerLeaderIndex === 2) {

            // left side the same
            // same followers
            $('.oldFollowerIconOfNewLeaderOf2, .oldFollowerIconOfNewLeaderOf1').css({'display':'flex'});
            $('.newFollowerIconOfOldLeaderOf1, .newFollowerIconOfOldLeaderOf2').css({'display':'none'});
            //same leader
            $('.sameOLeaderIcon').css({'display':'flex'});
            $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf1, .newLeaderIconOfOldOf2').css({'display':'none'});

            if(practice_calculator.globalVariable.winnerFollowerIndex === 1) {
                // right side changes
                // top follower or strong follower is now the new leader
                // defeated leader takes the top follower's place the other follower is the same
                $('.newFollowerIconOfOldLeaderf1, .oldFollowerIconOfNewLeaderf2').css({'display':'flex'});
                $('.oldFollowerIconOfNewLeaderf1, .newFollowerIconOfOldLeaderf2').css({'display':'none'});
                // leader icon is now the old follower's new leader icon
                $('.newLeaderIconOfOldf, .newLeaderIconOfOldf1').css({'display':'flex'});
                $('.sameLeaderIcon, .newLeaderIconOfOldf2').css({'display':'none'});
            }

            if(practice_calculator.globalVariable.winnerFollowerIndex === 2) {

                // top follower or strong follower is now the new leader
                // defeated leader takes the top follower's place the other follower is the same
                $('.newFollowerIconOfOldLeaderf2, .oldFollowerIconOfNewLeaderf1').css({'display':'flex'});
                $('.oldFollowerIconOfNewLeaderf2, .newFollowerIconOfOldLeaderf1').css({'display':'none'});
                // leader icon is now the old follower's new leader icon
                $('.newLeaderIconOfOldf, .newLeaderIconOfOldf2').css({'display':'flex'});
                $('.sameLeaderIcon, .newLeaderIconOfOldf1').css({'display':'none'});

            }
        }

    }

    practice_calculator.icons.setIGA = function() {


        if(practice_calculator.globalVariable.playerIndex === 0) {

            // first follower is strong
            $('.strongFollower1').css({'display':'flex'});
            $('.weakFollower1').css({'display':'none'})

            // second follower is weak
            $('.weakFollower2').css({'display':'flex'});
            $('.strongFollower2').css({'display':'none'});

        }

        if(practice_calculator.globalVariable.playerIndex === 1) {

            // first follower is weak
            $('.weakFollower1').css({'display':'flex'});
            $('.strongFollower1').css({'display':'none'});

            // second follower is strong
            $('.strongFollower2').css({'display':'flex'});
            $('.weakFollower2').css({'display':'none'});

        }


    }

    practice_calculator.icons.setAll = function() {

        $('.wrapMidOGSetup, .wrapMidIGASetup, .wrapMidIGBSetup').css({'display':'none'})

        if(practice_calculator.globalVariable.isOG1) {

            $('.wrapMidOGSetup').css({'display':'flex'})

            practice_calculator.icons.setOG1();

            practice_calculator.icons.setMe();
            practice_calculator.icons.adjustForTreatment();

        }

        if(practice_calculator.globalVariable.isOG2) {

            $('.wrapMidOGSetup').css({'display':'flex'})

            practice_calculator.icons.setOG2();

            practice_calculator.icons.setMe();
            practice_calculator.icons.adjustForTreatment();

        }

        if(practice_calculator.globalVariable.isIGA) {

            $('.wrapMidIGASetup').css({'display':'flex'})

            practice_calculator.icons.setIGA();

            practice_calculator.icons.setMe();
            practice_calculator.icons.adjustForTreatment();

        }

        if(practice_calculator.globalVariable.isIGB) {

            $('.wrapMidIGBSetup').css({'display':'flex'})

        }



    }


    //-------- SET SIZE OF ICONS IN HS SECTION -------//

    practice_calculator.icons.set.size = function(Id, h, w) {

        var myClass, myHeight, myWidth;

        myClass = '.' + Id;
        myHeight = h + 'px';
        myWidth = w + 'px';

        $(myClass).css({'height' : myHeight, 'width' : myWidth});

    }

    practice_calculator.icons.calculate.size = function(h, s) {

        var hRatio = h / 80;
        var sRatio = s / 80;
        var k = 0.2//0.2

        var m = (1 + Math.pow(hRatio, k)) / (1 + Math.pow(sRatio, k));

        return m;

    }

    practice_calculator.icons.update.logisticColor = function(help, sabo, max, avg) {

        var k1, val, val1, val2, result;
        val = help / (help + sabo);
        val = max * val;

        // set color
        k1 = 0.05;
        val1 = max / (1 + Math.exp(-k1 * (val - avg)));
        // blue
        val1 = Math.floor(val1);
        // red
        val2 = max - val1;


        result = [val1, 0, val2];

        if(help === 0 && sabo === 0) {
            result = [235, 235, 235];
        }

        return result;

    }

    practice_calculator.icons.update.arrowColor = function(help, sabo) {

        var hW, sW, myArray;

        myArray = Array(3);
        hW = (help + 30) / 60;
        sW = (sabo + 30) / 60;

        if(help === 0) {

            myArray = [255,0, 0, sW];

        }

        if(sabo === 0) {

            myArray = [0, 0, 255, hW];

        }

        if(help === 0 && sabo === 0) {
            myArray = [60, 60, 60, 0];
        }

        return myArray

    }

    practice_calculator.icons.set.RGB4Leaders = function(val){

        return ('rgb(' + val[0] +',' + val[1] + ', ' + val[2] +', 0.2)');

    }

    practice_calculator.icons.set.RGB4Followers = function(val){

        return ('rgb(' + val[0] +',' + val[1] +', ' + val[2] + ',' + val[3] + ')');

    }


    //------- LEADER ICON RESIZING METHOD DEPENDENT ON HELP AND SABOTAGE VALUES ----//

    practice_calculator.icons.update.leaderAuraColor = function() {

        // leader aura color
        var leaderIconBorderColor = practice_calculator.icons.update.logisticColor(ts, th, 255, 132);
        var libcRGB = practice_calculator.icons.set.RGB4Leaders(leaderIconBorderColor);
        $('.imgwrapwrapwrap31').css({'background-color':libcRGB, 'border-color':libcRGB});

        leaderIconBorderColor = practice_calculator.icons.update.logisticColor(tos, toh, 255, 132);
        libcRGB = practice_calculator.icons.set.RGB4Leaders(leaderIconBorderColor);
        $('.imgwrapwrapwrap32').css({'background-color':libcRGB, 'border-color':libcRGB});

    }

    practice_calculator.icons.update.followerArrows = function() {

        // follower arrow color
        var followerArrowColor = practice_calculator.icons.update.arrowColor(h1, s1);
        var facRGB = practice_calculator.icons.set.RGB4Followers(followerArrowColor);
        $('.iaf1').css({'stroke':facRGB});
        $('.arrowTip11').css({'fill':facRGB});

        followerArrowColor = practice_calculator.icons.update.arrowColor(h2, s2);
        facRGB = practice_calculator.icons.set.RGB4Followers(followerArrowColor);
        $('.iaf2').css({'stroke':facRGB});
        $('.arrowTip12').css({'fill':facRGB});

        followerArrowColor = practice_calculator.icons.update.arrowColor(oh1, os1);
        facRGB = practice_calculator.icons.set.RGB4Followers(followerArrowColor);
        $('.iaof1').css({'stroke':facRGB});
        $('.arrowTip21').css({'fill':facRGB});

        followerArrowColor = practice_calculator.icons.update.arrowColor(oh2, os2);
        facRGB = practice_calculator.icons.set.RGB4Followers(followerArrowColor);
        $('.iaof2').css({'stroke':facRGB});
        $('.arrowTip22').css({'fill':facRGB});

    }

    practice_calculator.icons.update.leaderSize = function() {

        var m1 = practice_calculator.icons.calculate.size(th, ts);
        practice_calculator.icons.set.size('splc1', 85 * m1, 65 * m1);

        var m2 = practice_calculator.icons.calculate.size(toh, tos)
        practice_calculator.icons.set.size('splc2', 85 * m2, 65 * m2)

    }

    //---- LEADER ICON PLACEMENT DEPENDING ON SIZE ----//

    practice_calculator.icons.update.leaderMargins = function(active) {

        if(active) {
            if($('.splc2').height() < 85) {
                $('.rightLeaderIconMainWrap').css({'transition':'0.2s', 'margin-top':'10px'});
                $('.arrowIconBoxRight').css({'transition':'0.2s', 'margin-top':'20px'});
            } else {
                $('.rightLeaderIconMainWrap').css({'transition':'0.2s', 'margin-top':'0px'});
                $('.arrowIconBoxRight').css({'transition':'0.2s', 'margin-top':'10px'});
            }

            if($('.splc1').height() < 85) {
                $('.leftLeaderIconMainWrap').css({'transition':'0.2s', 'margin-top':'10px'});
                $('.arrowIconBoxLeft').css({'transition':'0.2s', 'margin-top':'20px'});
            } else {
                $('.leftLeaderIconMainWrap').css({'transition':'0.2s', 'margin-top':'0px'});
                $('.arrowIconBoxLeft').css({'transition':'0.2s', 'margin-top':'10px'});
            }
        } else {
            $('.rightLeaderIconMainWrap, .leftLeaderIconMainWrap').css({'transition':'0.2s', 'margin-top':'0px'});
            $('.arrowIconBoxRight, .arrowIconBoxLeft').css({'transition':'0.2s', 'margin-top':'10px'});
        }


    }


    //-------- HIDDEN ICON METHODS --------//

    practice_calculator.icons.rescale.leaderIconSize = function(scale) {

        var m1 = practice_calculator.icons.calculate.size(th, ts) * scale;
        practice_calculator.icons.set.size('rescaleL1', 85 * m1, 65 * m1);

        var m2 = practice_calculator.icons.calculate.size(toh, tos) * scale;
        practice_calculator.icons.set.size('rescaleL2', 85 * m2, 65 * m2)

    }

    practice_calculator.icons.show.hiddenContest = function() {
        $('.OGCIcon2').css({'opacity':'1'});
    }

    practice_calculator.icons.hide.hiddenContest = function() {
        $('.OGCIcon2').css({'opacity':'0'});
    }

    //------------- ENERVATE ICONS -----------------//

    practice_calculator.icons.enervate.delayTime = 200;

    //-- ENERVATE ACTIVE ICONS --//
    practice_calculator.globalVariable.enervateLeaderLeft = false;
    practice_calculator.icons.enervate.leaderLeft = function(state) {

        if(practice_calculator.globalVariable.enervateLeaderLeft) {

            if(state === 0) {
                $('.splc1').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate.leaderLeft(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.splc1').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate.leaderLeft(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.splc1').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }

    practice_calculator.globalVariable.enervateLeaderRight = false;
    practice_calculator.icons.enervate.leaderRight = function(state) {

        if(practice_calculator.globalVariable.enervateLeaderRight) {

            if(state === 0) {
                $('.splc2').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate.leaderRight(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.splc2').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate.leaderRight(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.splc2').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }

    practice_calculator.globalVariable.enervateFollowerF1 = false;
    practice_calculator.icons.enervate.followerF1 = function(state) {

        if(practice_calculator.globalVariable.enervateFollowerF1) {

            if(state === 0) {
                $('.spf1L11').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate.followerF1(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.spf1L11').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate.followerF1(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.spf1L11').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }

    practice_calculator.globalVariable.enervateFollowerF2 = false;
    practice_calculator.icons.enervate.followerF2 = function(state) {

        if(practice_calculator.globalVariable.enervateFollowerF2) {

            if(state === 0) {
                $('.spf1L12').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate.followerF2(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.spf1L12').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate.followerF2(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.spf1L12').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }

    practice_calculator.globalVariable.enervateFollowerOF1 = false;
    practice_calculator.icons.enervate.followerOF1 = function(state) {

        if(practice_calculator.globalVariable.enervateFollowerOF1) {

            if(state === 0) {
                $('.spf1L21').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate.followerOF1(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.spf1L21').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate.followerOF1(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.spf1L21').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }

    practice_calculator.globalVariable.enervateFollowerOF2 = false;
    practice_calculator.icons.enervate.followerOF2 = function(state) {

        if(practice_calculator.globalVariable.enervateFollowerOF2) {

            if(state === 0) {
                $('.spf1L22').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate.followerOF2(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.spf1L22').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate.followerOF2(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.spf1L22').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }


    //-- ENERVATE PASIVE ICONS --//
    practice_calculator.globalVariable.enervate2LeaderLeft = false;
    practice_calculator.icons.enervate2.leaderLeft = function(state) {

        if(practice_calculator.globalVariable.enervate2LeaderLeft) {

            if(state === 0) {
                $('.lener1').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.leaderLeft(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.lener1').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.leaderLeft(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.lener1').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }

    practice_calculator.globalVariable.enervate2LeaderRight = false;
    practice_calculator.icons.enervate2.leaderRight = function(state) {

        if(practice_calculator.globalVariable.enervate2LeaderRight) {

            if(state === 0) {
                $('.lener2').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.leaderRight(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.lener2').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.leaderRight(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.lener2').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }

    practice_calculator.globalVariable.enervate2FollowerF1 = false;
    practice_calculator.icons.enervate2.followerF1 = function(state) {

        if(practice_calculator.globalVariable.enervate2FollowerF1) {

            if(state === 0) {
                $('.fener11').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.followerF1(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.fener11').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.followerF1(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.fener11').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }

    practice_calculator.globalVariable.enervate2FollowerF2 = false;
    practice_calculator.icons.enervate2.followerF2 = function(state) {

        if(practice_calculator.globalVariable.enervate2FollowerF2) {

            if(state === 0) {
                $('.fener12').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.followerF2(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.fener12').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.followerF2(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.fener12').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }

    practice_calculator.globalVariable.enervate2FollowerOF1 = false;
    practice_calculator.icons.enervate2.followerOF1 = function(state) {

        if(practice_calculator.globalVariable.enervate2FollowerOF1) {

            if(state === 0) {
                $('.fener21').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.followerOF1(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.fener21').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.followerOF1(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.fener21').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }

    practice_calculator.globalVariable.enervate2FollowerOF2 = false;
    practice_calculator.icons.enervate2.followerOF2 = function(state) {

        if(practice_calculator.globalVariable.enervate2FollowerOF2) {

            if(state === 0) {
                $('.fener22').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.followerOF2(1), practice_calculator.icons.enervate.delayTime);
            }
            if(state === 1) {
                $('.fener22').css({'transition':'0.3521s', 'transform':'scale(1)'});
                setTimeout(()=>practice_calculator.icons.enervate2.followerOF2(0), practice_calculator.icons.enervate.delayTime);
            }

        } else {
            $('.fener22').css({'transition':'0.3521s', 'transform':'scale(1)'});
        }

    }


    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////
    ////////////////////////// LOCK ///////////////////////////


    practice_calculator.lock.switch.all = Array(6);

    practice_calculator.lock.switch.l1 = true;
    practice_calculator.lock.vibrate.l1 = function(state) {

        if(practice_calculator.lock.switch.l1) {

            $('.l1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


            if(state === 1) {

                $('.l1vibrate').css({'margin-left':'10px'});
                setTimeout(()=>practice_calculator.lock.vibrate.l1(2),100);

            }

            if(state === 2) {

                $('.l1vibrate').css({'margin-left':'0px'});
                setTimeout(()=>practice_calculator.lock.vibrate.l1(1),100);

            }

        } else {

            practice_calculator.lock.switch.l1 = false;
            $('.l1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

        }

    }

    practice_calculator.lock.switch.l2 = true;
    practice_calculator.lock.vibrate.l2 = function(state) {

        if(practice_calculator.lock.switch.l2) {

            $('.l2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


            if(state === 1) {

                $('.l2vibrate').css({'margin-left':'10px'});
                setTimeout(()=>practice_calculator.lock.vibrate.l2(2),100);

            }

            if(state === 2) {

                $('.l2vibrate').css({'margin-left':'0px'});
                setTimeout(()=>practice_calculator.lock.vibrate.l2(1),100);

            }

        } else {

            practice_calculator.lock.switch.l2 = false;
            $('.l2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

        }

    }

    practice_calculator.lock.switch.f1 = true;
    practice_calculator.lock.vibrate.f1 = function(state) {

        if(practice_calculator.lock.switch.f1) {

            $('.f1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


            if(state === 1) {

                $('.f1vibrate').css({'margin-left':'10px'});
                setTimeout(()=>practice_calculator.lock.vibrate.f1(2),100);

            }

            if(state === 2) {

                $('.f1vibrate').css({'margin-left':'0px'});
                setTimeout(()=>practice_calculator.lock.vibrate.f1(1),100);

            }

        } else {

            practice_calculator.lock.switch.f1 = false;
            $('.f1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

        }

    }

    practice_calculator.lock.switch.f2 = true;
    practice_calculator.lock.vibrate.f2 = function(state) {

        if(practice_calculator.lock.switch.f2) {

            $('.f2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


            if(state === 1) {

                $('.f2vibrate').css({'margin-left':'10px'});
                setTimeout(()=>practice_calculator.lock.vibrate.f2(2),100);

            }

            if(state === 2) {

                $('.f2vibrate').css({'margin-left':'0px'});
                setTimeout(()=>practice_calculator.lock.vibrate.f2(1),100);

            }

        } else {

            practice_calculator.lock.switch.f2 = false;
            $('.f2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

        }

    }

    practice_calculator.lock.switch.of1 = true;
    practice_calculator.lock.vibrate.of1 = function(state) {

        if(practice_calculator.lock.switch.of1) {

            $('.of1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


            if(state === 1) {

                $('.of1vibrate').css({'margin-left':'10px'});
                setTimeout(()=>practice_calculator.lock.vibrate.of1(2),100);

            }

            if(state === 2) {

                $('.of1vibrate').css({'margin-left':'0px'});
                setTimeout(()=>practice_calculator.lock.vibrate.of1(1),100);

            }

        } else {

            practice_calculator.lock.switch.of1 = false;
            $('.of1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

        }

    }

    practice_calculator.lock.switch.of2 = true;
    practice_calculator.lock.vibrate.of2 = function(state) {

        if(practice_calculator.lock.switch.of2) {

            $('.of2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


            if(state === 1) {

                $('.of2vibrate').css({'margin-left':'10px'});
                setTimeout(()=>practice_calculator.lock.vibrate.of2(2),100);

            }

            if(state === 2) {

                $('.of2vibrate').css({'margin-left':'0px'});
                setTimeout(()=>practice_calculator.lock.vibrate.of2(1),100);

            }

        } else {

            practice_calculator.lock.switch.of2 = false;
            $('.of2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

        }

    }

    practice_calculator.lock.activate = function(array) {

        practice_calculator.lock.switch.all = array;

        var l1, l2, f1, f2, of1, of2;
        var o1, o2;
        l1 = array[0] ? '2' : '-1';
        l2 = array[1] ? '2' : '-1';
        o1 = array[0] ? '1' : '0';
        o2 = array[1] ? '1' : '0';

        f1 = array[2] ? '2' : '-1';
        f2 = array[3] ? '2' : '-1';
        of1 = array[4] ? '2' : '-1';
        of2 = array[5] ? '2' : '-1';

        $('.lockedCover_l1').css({'z-index' : l1, 'opacity' : o1});
        $('.lockedCover_l2').css({'z-index' : l2, 'opacity' : o2});
        $('.lockedCover_f1').css({'z-index' : f1});
        $('.lockedCover_f2').css({'z-index' : f2});
        $('.lockedCover_of1').css({'z-index' : of1});
        $('.lockedCover_of2').css({'z-index' : of2});


        // readjust the question marks to not be displayed if it is locked
        $('.sliderQuestion_l1').css({'opacity': (1 - array[0]).toString()});
        $('.sliderQuestion_f1').css({'opacity': (1 - array[1]).toString()});
        $('.sliderQuestion_f2').css({'opacity': (1 - array[2]).toString()});
        $('.sliderQuestion_l2').css({'opacity': (1 - array[3]).toString()});
        $('.sliderQuestion_of1').css({'opacity': (1 - array[4]).toString()});
        $('.sliderQuestion_of2').css({'opacity': (1 - array[5]).toString()});

        // account for the subjective view as that one will not be locked but
        // shouldn't have a question mark. This way we do not need to call these 2 methods
        // in a specific order
        if(practice_calculator.globalVariable.playerView) {
            if(practice_calculator.globalVariable.playerIndex === -1) {
                $('.sliderQuestion_l1').css({'opacity': '0'});

            }
            if(practice_calculator.globalVariable.playerIndex === 0) {
                $('.sliderQuestion_f1').css({'opacity': '0'});

            }
            if(practice_calculator.globalVariable.playerIndex === 1) {
                $('.sliderQuestion_f2').css({'opacity': '0'});

            }
        }

    }


    practice_calculator.lock.activate2 = function(array) {

        practice_calculator.lock.switch.all = array;

        var l1, l2, f1, f2, of1, of2;
        var o1, o2;
        l1 = array[0] ? '2' : '-1';
        l2 = array[1] ? '2' : '-1';
        o1 = array[0] ? '1' : '0';
        o2 = array[1] ? '1' : '0';

        f1 = array[2] ? '2' : '-1';
        f2 = array[3] ? '2' : '-1';
        of1 = array[4] ? '2' : '-1';
        of2 = array[5] ? '2' : '-1';

        $('.lockedCover_l1').css({'z-index' : l1, 'opacity' : o1});
        $('.lockedCover_l2').css({'z-index' : l2, 'opacity' : o2});
        $('.lockedCover_f1').css({'z-index' : f1});
        $('.lockedCover_f2').css({'z-index' : f2});
        $('.lockedCover_of1').css({'z-index' : of1});
        $('.lockedCover_of2').css({'z-index' : of2});


        // readjust the question marks to not be displayed if it is locked
        $('.sliderQuestion_l1').css({'opacity': (1 - array[0]).toString()});
        $('.sliderQuestion_f1').css({'opacity': (1 - array[1]).toString()});
        $('.sliderQuestion_f2').css({'opacity': (1 - array[2]).toString()});
        $('.sliderQuestion_l2').css({'opacity': (1 - array[3]).toString()});
        $('.sliderQuestion_of1').css({'opacity': (1 - array[4]).toString()});
        $('.sliderQuestion_of2').css({'opacity': (1 - array[5]).toString()});

    }


    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////
    ////////////////////// POINTER ///////////////////////////


    practice_calculator.pointers.dSwitch = true;
    practice_calculator.pointers.wiggle.d= function(state) {

        if(practice_calculator.pointers.dSwitch) {

            if(state === 1) {

                $('.redArrowImage3').css({'transition':'0.85s',
                'margin-left':'-10px', 'margin-top':'-5px', 'opacity':'1', 'transform':'scale(1) rotate(-60deg)'});
                setTimeout(()=>practice_calculator.pointers.wiggle.d(0), 750);

            }

            if(state === 0) {

                $('.redArrowImage3').css({'transition':'0.85s',
                'margin-left':'0px', 'margin-top':'0px'});
                setTimeout(()=>practice_calculator.pointers.wiggle.d(1), 750);

            }

        } else {

            $('.redArrowImage3').css({'margin-left':'0px', 'margin-top':'0px',
            'opacity':'0', 'transform':'scale(0) rotate(-60deg)'});

        }

    }

    practice_calculator.pointers.wiggleD = function() {

        practice_calculator.pointers.dSwitch = true;
        practice_calculator.pointers.wiggle.d(0);

    }


    practice_calculator.pointers.switches = Array(6);

    practice_calculator.pointers.switches[0] = true;
    practice_calculator.pointers.wiggle.l1= function(state) {

        if(practice_calculator.pointers.switches[0]) {

            if(state === 1) {

                $('.sliderArrowImageWrap_l1').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
                setTimeout(()=>practice_calculator.pointers.wiggle.l1(0), 750);

            }

            if(state === 0) {

                $('.sliderArrowImageWrap_l1').css({'margin-left':'48px', 'margin-top':'-8px'});
                setTimeout(()=>practice_calculator.pointers.wiggle.l1(1), 750);

            }

        } else {

            $('.sliderArrowImageWrap_l1').css({'opacity':'0'});

        }

    }

    practice_calculator.pointers.switches[1] = true;
    practice_calculator.pointers.wiggle.l2= function(state) {

        if(practice_calculator.pointers.switches[1]) {

            if(state === 1) {

                $('.sliderArrowImageWrap_l2').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
                setTimeout(()=>practice_calculator.pointers.wiggle.l2(0), 750);

            }

            if(state === 0) {

                $('.sliderArrowImageWrap_l2').css({'margin-left':'48px', 'margin-top':'-8px'});
                setTimeout(()=>practice_calculator.pointers.wiggle.l2(1), 750);

            }

        } else {

            $('.sliderArrowImageWrap_l2').css({'opacity':'0'});

        }

    }

    practice_calculator.pointers.switches[2] = true;
    practice_calculator.pointers.wiggle.f1= function(state) {

        if(practice_calculator.pointers.switches[2]) {

            if(state === 1) {

                $('.sliderArrowImageWrap_f1').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
                setTimeout(()=>practice_calculator.pointers.wiggle.f1(0), 750);

            }

            if(state === 0) {

                $('.sliderArrowImageWrap_f1').css({'margin-left':'-1px', 'margin-top':'-107px'});
                setTimeout(()=>practice_calculator.pointers.wiggle.f1(1), 750);

            }

        } else {

            $('.sliderArrowImageWrap_f1').css({'opacity':'0'});

        }

    }

    practice_calculator.pointers.switches[3] = true;
    practice_calculator.pointers.wiggle.f2 = function(state) {

        if(practice_calculator.pointers.switches[3]) {

            if(state === 1) {

                $('.sliderArrowImageWrap_f2').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
                setTimeout(()=>practice_calculator.pointers.wiggle.f2(0), 750);

            }

            if(state === 0) {

                $('.sliderArrowImageWrap_f2').css({'margin-left':'-1px', 'margin-top':'-107px'});
                setTimeout(()=>practice_calculator.pointers.wiggle.f2(1), 750);

            }

        } else {

            $('.sliderArrowImageWrap_f2').css({'opacity':'0'});

        }

    }

    practice_calculator.pointers.switches[4] = true;
    practice_calculator.pointers.wiggle.of1 = function(state) {

        if(practice_calculator.pointers.switches[4]) {

            if(state === 1) {

                $('.sliderArrowImageWrap_of1').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
                setTimeout(()=>practice_calculator.pointers.wiggle.of1(0), 750);

            }

            if(state === 0) {

                $('.sliderArrowImageWrap_of1').css({'margin-left':'-1px', 'margin-top':'-107px'});
                setTimeout(()=>practice_calculator.pointers.wiggle.of1(1), 750);

            }

        } else {

            $('.sliderArrowImageWrap_of1').css({'opacity':'0'});

        }

    }

    practice_calculator.pointers.switches[5] = true;
    practice_calculator.pointers.wiggle.of2 = function(state) {

        if(practice_calculator.pointers.switches[5]) {

            if(state === 1) {

                $('.sliderArrowImageWrap_of2').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
                setTimeout(()=>practice_calculator.pointers.wiggle.of2(0), 750);

            }

            if(state === 0) {

                $('.sliderArrowImageWrap_of2').css({'margin-left':'-1px', 'margin-top':'-107px'});
                setTimeout(()=>practice_calculator.pointers.wiggle.of2(1), 750);

            }

        } else {

            $('.sliderArrowImageWrap_of2').css({'opacity':'0'});

        }

    }

    practice_calculator.pointers.activate = function(array) {

        practice_calculator.pointers.switches = array;

        practice_calculator.pointers.wiggle.l1(1);
        practice_calculator.pointers.wiggle.l2(1);
        practice_calculator.pointers.wiggle.f1(1);
        practice_calculator.pointers.wiggle.f2(1);
        practice_calculator.pointers.wiggle.of1(1);
        practice_calculator.pointers.wiggle.of2(1);

    }


    practice_calculator.pointers.activeDf = true;
    practice_calculator.pointers.wiggle.dF = function(state) {

        if(practice_calculator.pointers.activeDf) {

            if(state === 1) {

                $('.sliderArrowImageWrap_dF').css({'margin-left':'415px',
                'margin-top':'-108px', 'opacity':'1'});
                setTimeout(()=>practice_calculator.pointers.wiggle.dF(0), 750);

            }

            if(state === 0) {

                $('.sliderArrowImageWrap_dF').css({'margin-left':'405px',
                'margin-top':'-118px'});
                setTimeout(()=>practice_calculator.pointers.wiggle.dF(1), 750);

            }

        } else {

            $('.sliderArrowImageWrap_dF').css({'opacity':'0'});

        }

    }

    practice_calculator.pointers.activateDf = function(state) {

        practice_calculator.pointers.activeDf = state;

        practice_calculator.pointers.wiggle.dF(1);

    }


    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    /////////////////////// ROLL ////////////////////////
    // MICRO ROLLING METHDODS

    // the order of context for the array text is as below
    // need to stick to this order as the x coordinates are predefined accordingly
    // var textArray = ['GROUP A', 'YOU', 'FOLLOWER', 'STRONG', 'WEAK', 1000]
    practice_calculator.stopRolling = false;
    // practice_calculator.roll.displayTime = 2250;
    practice_calculator.roll.displayTime = 8000;
    practice_calculator.roll.delayTime = 4000
    practice_calculator.roll.transitionTime = '2s';
    // slow time for opacity transition
    // practice_calculator.roll.displayTime = 3000;
    practice_calculator.roll.counter = 0;
    practice_calculator.roll.steadyState = false;
    practice_calculator.roll.kill = true;

    practice_calculator.roll.slowTime = function(counter) {

        console.log('inside slowtime');
        // console.log('current delay: ' + practice_calculator.roll.displayTime);
        // console.log('current counter: ' + practice_calculator.roll.counter);

        if(counter === 1) {
            practice_calculator.roll.displayTime = 4000;
            practice_calculator.roll.delayTime = 2000
            practice_calculator.roll.transitionTime = '1.25s';
        }

        if(counter > 2) {
            practice_calculator.roll.displayTime = 8000;
            practice_calculator.roll.delayTime = 4000
            practice_calculator.roll.transitionTime = '2s';
        }

        // console.log('new delay: ' + practice_calculator.roll.displayTime);

    }

    // old changing method
    practice_calculator.roll.transformRotate = function(string1, string2) {

        $(string1).css({'transition':'1.5s', 'transform':'rotate(270deg)'});
        $(string2).css({'transition':'1.5s', 'transform':'rotate(300deg)'});
        setTimeout(()=>{
            $(string1).css({'transition':'1.5s', 'opacity':'1'});
        }, 1600)
        setTimeout(()=>{
            $(string2).css({'transition':'0s', 'transform':'rotate(200deg)', 'opacity':'0'});
        }, 1600);

    }

    practice_calculator.roll.transformFade = function(string1, string2) {

        $(string2).css({'transition':practice_calculator.roll.transitionTime,'opacity':'0'});

        setTimeout(()=>{
            $(string1).css({'transition':practice_calculator.roll.transitionTime, 'opacity':'1'});
        },practice_calculator.roll.delayTime)

    }

    practice_calculator.roll.f1 = function(index, prevIndex, textArray, newRoll) {

        newRoll === undefined ? false : newRoll;

        var fSideText10 = document.getElementById('fSideText10');
        var fSideText11 = document.getElementById('fSideText11');
        var fSideText12 = document.getElementById('fSideText12');
        var fSideText13 = document.getElementById('fSideText13');
        var fSideText14 = document.getElementById('fSideText14');
        var fSideText15 = document.getElementById('fSideText15');

        if(!practice_calculator.stopRolling) {


            fSideText10.innerHTML = textArray[0];
            fSideText11.innerHTML = textArray[1];
            fSideText12.innerHTML = textArray[2];
            fSideText13.innerHTML = textArray[3];
            fSideText14.innerHTML = textArray[4];
            fSideText15.innerHTML = 'Current Balance: ' + textArray[5];

            var str1 = '.fSideText1' + index;
            var str2 = '.fSideText1' + prevIndex;

            // practice_calculator.roll.transformRotate(str1, str2);

            practice_calculator.roll.transformFade(str1, str2);

            // $(str1).css({'transition':'1.5s', 'transform':'rotate(270deg)', 'opacity':'1'});
            // $(str2).css({'transition':'1.5s', 'transform':'rotate(300deg)'});
            // setTimeout(()=>{
            //     $(str2).css({'transition':'0s', 'transform':'rotate(200deg)', 'opacity':'0'});
            // }, 2000);

            var m = textArray.length;
            var nextIndex = index + 1;
            nextIndex = nextIndex % m;
            prevIndex = index;

            while(textArray[nextIndex] === -1) {
                nextIndex = nextIndex + 1;
                nextIndex = nextIndex % m;
            }


            setTimeout(()=>{

                if(!practice_calculator.roll.kill || newRoll) {
                    practice_calculator.roll.f1(nextIndex, prevIndex, practice_calculator.roll.f1Array)
                }

            }, practice_calculator.roll.displayTime);

        } else {

            if(practice_calculator.roll.steadyState) {

                fSideText10.innerHTML = 'GROUP A';
                fSideText11.innerHTML = '';
                fSideText12.innerHTML = '';
                fSideText13.innerHTML = '';
                fSideText14.innerHTML = '';
                fSideText15.innerHTML = '';

                // $('.fSideText10').css({'transition':'1.5s', 'transform':'rotate(270deg)', 'opacity':'1'});
                // $('.fSideText11, .fSideText12, .fSideText13, .fSideText14, .fSideText15').css({'transition':'0s', 'transform':'rotate(200deg)'});

                $('.fSideText10').css({'transition':'1.5s', 'opacity':'1'});
                $('.fSideText11, .fSideText12, .fSideText13, .fSideText14, .fSideText15').css({'transition':'0s', 'opacity':'0'});

            }

        }


    }

    practice_calculator.roll.f2 = function(index, prevIndex, textArray, newRoll) {

        newRoll === undefined ? false : newRoll;

        var fSideText20 = document.getElementById('fSideText20');
        var fSideText21 = document.getElementById('fSideText21');
        var fSideText22 = document.getElementById('fSideText22');
        var fSideText23 = document.getElementById('fSideText23');
        var fSideText24 = document.getElementById('fSideText24');
        var fSideText25 = document.getElementById('fSideText25');

        if(!practice_calculator.stopRolling) {


            fSideText20.innerHTML = textArray[0];
            fSideText21.innerHTML = textArray[1];
            fSideText22.innerHTML = textArray[2];
            fSideText23.innerHTML = textArray[3];
            fSideText24.innerHTML = textArray[4];
            fSideText25.innerHTML = 'Current Balance: ' + textArray[5];

            var str1 = '.fSideText2' + index;
            var str2 = '.fSideText2' + prevIndex;

            // practice_calculator.roll.transformRotate(str1, str2);

            practice_calculator.roll.transformFade(str1, str2);

            // $(str1).css({'transition':'1.5s', 'transform':'rotate(270deg)'});
            // $(str2).css({'transition':'1.5s', 'transform':'rotate(300deg)'});
            // setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(200deg)'});}, 1600);

            var m = textArray.length;
            var nextIndex = index + 1;
            nextIndex = nextIndex % m;
            prevIndex = index;

            while(textArray[nextIndex] === -1) {
                nextIndex = nextIndex + 1;
                nextIndex = nextIndex % m;
            }

            setTimeout(()=> {

                if(!practice_calculator.roll.kill || newRoll) {
                    practice_calculator.roll.f2(nextIndex, prevIndex, practice_calculator.roll.f2Array)
                }

            }, practice_calculator.roll.displayTime);

        } else {
            if(practice_calculator.roll.steadyState) {
                fSideText20.innerHTML = 'GROUP A';
                fSideText21.innerHTML = '';
                fSideText22.innerHTML = '';
                fSideText23.innerHTML = '';
                fSideText24.innerHTML = '';
                fSideText25.innerHTML = '';

                $('.fSideText20').css({'transition':'1.5s', 'opacity':'1'});
                $('.fSideText21, .fSideText22, .fSideText23, .fSideText24, .fSideText25').css({'transition':'0s',  'opacity':'0'});

            }
        }

    }

    practice_calculator.roll.f3 = function(index, prevIndex, textArray, newRoll) {

        newRoll === undefined ? false : newRoll;

        var fSideText30 = document.getElementById('fSideText30');
        var fSideText31 = document.getElementById('fSideText31');
        var fSideText32 = document.getElementById('fSideText32');
        var fSideText33 = document.getElementById('fSideText33');
        var fSideText34 = document.getElementById('fSideText34');
        var fSideText35 = document.getElementById('fSideText35');

        if(!practice_calculator.stopRolling) {


            fSideText30.innerHTML = textArray[0];
            fSideText31.innerHTML = textArray[1];
            fSideText32.innerHTML = textArray[2];
            fSideText33.innerHTML = textArray[3];
            fSideText34.innerHTML = textArray[4];
            fSideText35.innerHTML = 'Current Balance: ' + textArray[5];

            var str1 = '.fSideText3' + index;
            var str2 = '.fSideText3' + prevIndex;

            // practice_calculator.roll.transformRotate(str1, str2);

            practice_calculator.roll.transformFade(str1, str2);

            // $(str1).css({'transition':'1.5s', 'transform':'rotate(270deg)'});
            // $(str2).css({'transition':'1.5s', 'transform':'rotate(300deg)'});
            // setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(200deg)'});}, 1600);

            var m = textArray.length;
            var nextIndex = index + 1;
            nextIndex = nextIndex % m;
            prevIndex = index;

            while(textArray[nextIndex] === -1) {
                nextIndex = nextIndex + 1;
                nextIndex = nextIndex % m;
            }

            setTimeout(()=> {

                if(!practice_calculator.roll.kill || newRoll) {
                    practice_calculator.roll.f3(nextIndex, prevIndex, practice_calculator.roll.of1Array)
                }

            }, practice_calculator.roll.displayTime);

        } else {
    if(practice_calculator.roll.steadyState) {
            fSideText30.innerHTML = 'GROUP B';
            fSideText31.innerHTML = '';
            fSideText32.innerHTML = '';
            fSideText33.innerHTML = '';
            fSideText34.innerHTML = '';
            fSideText35.innerHTML = '';

            // $('.fSideText30').css({'transition':'1.5s', 'transform':'rotate(270deg)', 'opacity':'1'});
            // $('.fSideText31, .fSideText32, .fSideText33, .fSideText34, .fSideText35').css({'transition':'0s', 'transform':'rotate(200deg)'});

            $('.fSideText30').css({'transition':'1.5s', 'opacity':'1'});
            $('.fSideText31, .fSideText32, .fSideText33, .fSideText34, .fSideText35').css({'transition':'0s', 'opacity':'0'});

        }
    }

    }

    practice_calculator.roll.f4 = function(index, prevIndex, textArray, newRoll) {

        newRoll === undefined ? false : newRoll;

        var fSideText40 = document.getElementById('fSideText40');
        var fSideText41 = document.getElementById('fSideText41');
        var fSideText42 = document.getElementById('fSideText42');
        var fSideText43 = document.getElementById('fSideText43');
        var fSideText44 = document.getElementById('fSideText44');
        var fSideText45 = document.getElementById('fSideText45');

        if(!practice_calculator.stopRolling) {


            fSideText40.innerHTML = textArray[0];
            fSideText41.innerHTML = textArray[1];
            fSideText42.innerHTML = textArray[2];
            fSideText43.innerHTML = textArray[3];
            fSideText44.innerHTML = textArray[4];
            fSideText45.innerHTML = 'Current Balance: ' + textArray[5];

            var str1 = '.fSideText4' + index;
            var str2 = '.fSideText4' + prevIndex;

            // practice_calculator.roll.transformRotate(str1, str2);

            practice_calculator.roll.transformFade(str1, str2);

            // $(str1).css({'transition':'1.5s', 'transform':'rotate(270deg)'});
            // $(str2).css({'transition':'1.5s', 'transform':'rotate(300deg)'});
            // setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(200deg)'});}, 1600);

            var m = textArray.length;
            var nextIndex = index + 1;
            nextIndex = nextIndex % m;
            prevIndex = index;

            while(textArray[nextIndex] === -1) {
                nextIndex = nextIndex + 1;
                nextIndex = nextIndex % m;
            }

            setTimeout(()=> {

                if(!practice_calculator.roll.kill || newRoll) {
                    practice_calculator.roll.f4(nextIndex, prevIndex, practice_calculator.roll.of2Array)
                }

            }, practice_calculator.roll.displayTime);

        } else {

            if(practice_calculator.roll.steadyState) {
                fSideText40.innerHTML = 'GROUP B';
                fSideText41.innerHTML = '';
                fSideText42.innerHTML = '';
                fSideText43.innerHTML = '';
                fSideText44.innerHTML = '';
                fSideText45.innerHTML = '';

                // $('.fSideText40').css({'transition':'1.5s', 'transform':'rotate(270deg)', 'opacity':'1'});
                // $('.fSideText41, .fSideText42, .fSideText43, .fSideText44, .fSideText45').css({'transition':'0s', 'transform':'rotate(200deg)'});

                $('.fSideText40').css({'transition':'1.5s', 'opacity':'1'});
                $('.fSideText41, .fSideText42, .fSideText43, .fSideText44, .fSideText45').css({'transition':'0s', 'opacity':'0'});

            }

    }
    }


    practice_calculator.roll.l1 = function(index, prevIndex, textArray, newRoll) {

        newRoll === undefined ? false : newRoll;

        var lSideText10 = document.getElementById('lSideText10');
        var lSideText11 = document.getElementById('lSideText11');
        var lSideText12 = document.getElementById('lSideText12');
        var lSideText13 = document.getElementById('lSideText13');
        var lSideText14 = document.getElementById('lSideText14');
        var lSideText15 = document.getElementById('lSideText15');

        if(!practice_calculator.stopRolling) {


            lSideText10.innerHTML = textArray[0];
            lSideText11.innerHTML = textArray[1];
            lSideText12.innerHTML = textArray[2];
            lSideText13.innerHTML = textArray[3];
            // lSideText13.innerHTML = practice_calculator.roll.l1PowerText;
            lSideText14.innerHTML = textArray[4];
            lSideText15.innerHTML = 'Current Balance: ' + textArray[5];

            var str1 = '.lSideText1' + index;
            var str2 = '.lSideText1' + prevIndex;

            practice_calculator.roll.transformFade(str1, str2);

            // $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
            // $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
            // setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

            var m = textArray.length;
            var nextIndex = index + 1;
            nextIndex = nextIndex % m;
            prevIndex = index;

            while(textArray[nextIndex] === -1) {
                nextIndex = nextIndex + 1;
                nextIndex = nextIndex % m;
            }

            setTimeout(()=> {

                if(!practice_calculator.roll.kill || newRoll) {
                    practice_calculator.roll.l1(nextIndex, prevIndex, practice_calculator.roll.lArray)
                }

            }, practice_calculator.roll.displayTime);


        } else {

            if(practice_calculator.roll.steadyState) {
                lSideText10.innerHTML = 'GROUP A';
                lSideText11.innerHTML = '';
                lSideText12.innerHTML = '';
                lSideText13.innerHTML = '';
                lSideText14.innerHTML = '';
                lSideText15.innerHTML = '';

                $('.lSideText10').css({'transition':'1.5s', 'opacity':'1'});
                $('.lSideText11, .lSideText12, .lSideText13, .lSideText14, .lSideText15').css({'transition':'1s', 'opacity':'0'});
            }

        }


    }

    practice_calculator.roll.l2 = function(index, prevIndex, textArray, newRoll) {

        newRoll === undefined ? false : newRoll;

        var lSideText20 = document.getElementById('lSideText20');
        var lSideText21 = document.getElementById('lSideText21');
        var lSideText22 = document.getElementById('lSideText22');
        var lSideText23 = document.getElementById('lSideText23');
        var lSideText24 = document.getElementById('lSideText24');
        var lSideText25 = document.getElementById('lSideText25');

        if(!practice_calculator.stopRolling) {


            lSideText20.innerHTML = textArray[0];
            lSideText21.innerHTML = textArray[1];
            lSideText22.innerHTML = textArray[2];
            lSideText23.innerHTML = textArray[3];
            // lSideText23.innerHTML = practice_calculator.roll.l2PowerText;
            lSideText24.innerHTML = textArray[4];
            lSideText25.innerHTML = 'Current Balance: ' + textArray[5];

            var str1 = '.lSideText2' + index;
            var str2 = '.lSideText2' + prevIndex;

            practice_calculator.roll.transformFade(str1, str2);

            // $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
            // $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
            // setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

            var m = textArray.length;
            var nextIndex = index + 1;
            nextIndex = nextIndex % m;
            prevIndex = index;

            while(textArray[nextIndex] === -1) {
                nextIndex = nextIndex + 1;
                nextIndex = nextIndex % m;
            }

            setTimeout(()=> {

                if(!practice_calculator.roll.kill || newRoll) {
                    practice_calculator.roll.l2(nextIndex, prevIndex, practice_calculator.roll.olArray)
                }

            }, practice_calculator.roll.displayTime);

            // setTimeout(()=>practice_calculator.roll.l2(nextIndex, prevIndex, practice_calculator.roll.olArray), practice_calculator.roll.displayTime);

        } else {

            lSideText20.innerHTML = 'GROUP B';
            lSideText21.innerHTML = '';
            lSideText22.innerHTML = '';
            lSideText23.innerHTML = '';
            lSideText24.innerHTML = '';
            lSideText25.innerHTML = '';

            $('.lSideText20').css({'transition':'1.5s', 'opacity':'1'});
            $('.lSideText21, .lSideText22, .lSideText23, .lSideText24, .lSideText25').css({'transition':'1s', 'opacity':'0'});

        }


    }

    // this needs to be changed too
    practice_calculator.roll.dsL = function(index, prevIndex, textArray, newRoll) {

        newRoll === undefined ? false : newRoll;

        var dLSideText0 = document.getElementById('dLSideText0');
        var dLSideText1 = document.getElementById('dLSideText1');
        var dLSideText2 = document.getElementById('dLSideText2');
        var dLSideText3 = document.getElementById('dLSideText3');
        var dLSideText4 = document.getElementById('dLSideText4');
        var dLSideText5 = document.getElementById('dLSideText5');

        if(!practice_calculator.stopRolling) {


            dLSideText0.innerHTML = textArray[0];
            dLSideText1.innerHTML = textArray[1];
            dLSideText2.innerHTML = textArray[2];
            dLSideText3.innerHTML = textArray[3];
            dLSideText4.innerHTML = textArray[4];
            dLSideText5.innerHTML = 'Current Balance: ' + textArray[5];

            var str1 = '.dLSideText' + index;
            var str2 = '.dLSideText' + prevIndex;

            practice_calculator.roll.transformFade(str1, str2);

            // $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
            // $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
            // setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

            var m = textArray.length;
            var nextIndex = index + 1;
            nextIndex = nextIndex % m;
            prevIndex = index;

            while(textArray[nextIndex] === -1) {
                nextIndex = nextIndex + 1;
                nextIndex = nextIndex % m;
            }

            setTimeout(()=> {

                if(!practice_calculator.roll.kill || newRoll) {
                    practice_calculator.roll.dsL(nextIndex, prevIndex, practice_calculator.roll.dsLeader)
                }

            }, practice_calculator.roll.displayTime);

        } else {

            dLSideText0.innerHTML = 'GROUP A';
            dLSideText1.innerHTML = '';
            dLSideText2.innerHTML = '';
            dLSideText3.innerHTML = '';
            dLSideText4.innerHTML = '';
            dLSideText5.innerHTML = '';

            $('.dLSideText0').css({'transition':'1.5s', 'opacity':'1'});
            $('.dLSideText1, .dLSideText2, .dLSideText3, .dLSideText4, .dLSideText5').css({'transition':'1s', 'opacity':'0'});

        }


    }

    // this needs to be changed too
    practice_calculator.roll.dsF = function(index, prevIndex, textArray, newRoll) {

        newRoll === undefined ? false : newRoll;

        var dFSideText0 = document.getElementById('dFSideText0');
        var dFSideText1 = document.getElementById('dFSideText1');
        var dFSideText2 = document.getElementById('dFSideText2');
        var dFSideText3 = document.getElementById('dFSideText3');
        var dFSideText4 = document.getElementById('dFSideText4');
        var dFSideText5 = document.getElementById('dFSideText5');

        if(!practice_calculator.stopRolling) {


            dFSideText0.innerHTML = textArray[0];
            dFSideText1.innerHTML = textArray[1];
            dFSideText2.innerHTML = textArray[2];
            dFSideText3.innerHTML = textArray[3];
            dFSideText4.innerHTML = textArray[4];
            dFSideText5.innerHTML = 'Current Balance: ' + textArray[5];

            var str1 = '.dFSideText' + index;
            var str2 = '.dFSideText' + prevIndex;

            practice_calculator.roll.transformFade(str1, str2);

            // $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
            // $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
            // setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

            var m = textArray.length;
            var nextIndex = index + 1;
            nextIndex = nextIndex % m;
            prevIndex = index;

            while(textArray[nextIndex] === -1) {
                nextIndex = nextIndex + 1;
                nextIndex = nextIndex % m;
            }

            setTimeout(()=> {

                if(!practice_calculator.roll.kill || newRoll) {
                    practice_calculator.roll.dsF(nextIndex, prevIndex, practice_calculator.roll.dsFollower);
                }

            }, practice_calculator.roll.displayTime);


        } else {

            dFSideText0.innerHTML = 'GROUP A';
            dFSideText1.innerHTML = '';
            dFSideText2.innerHTML = '';
            dFSideText3.innerHTML = '';
            dFSideText4.innerHTML = '';
            dFSideText5.innerHTML = '';

            $('.dFSideText0').css({'transition':'1.5s', 'opacity':'1'});
            $('.dFSideText1, .dFSideText2, .dFSideText3, .dFSideText4, .dFSideText5').css({'transition':'1s', 'opacity':'0'});

        }


    }


    practice_calculator.roll.setCurrentBalance = function(larray, farray) {

        practice_calculator.currentBalance.f1 = farray[0];
        practice_calculator.currentBalance.f2 = farray[1];
        practice_calculator.currentBalance.f3 = farray[2];
        practice_calculator.currentBalance.f4 = farray[3];

        practice_calculator.currentBalance.l1 = larray[0];
        practice_calculator.currentBalance.l2 = larray[1];

    }

    practice_calculator.roll.calculateNetBalance = function(nplArray, npfArray) {

        practice_calculator.netBalance.f1 = practice_calculator.currentBalance.f1 + npfArray[0];
        practice_calculator.netBalance.f2 = practice_calculator.currentBalance.f2 + npfArray[1];
        practice_calculator.netBalance.f3 = practice_calculator.currentBalance.f3 + npfArray[2];
        practice_calculator.netBalance.f4 = practice_calculator.currentBalance.f4 + npfArray[3];

        practice_calculator.netBalance.l1 = practice_calculator.currentBalance.l1 + nplArray[0];
        practice_calculator.netBalance.l2 = practice_calculator.currentBalance.l2 + nplArray[1];

    }


    // MICRO TO MACRO CONNECTION ARRAYS

    practice_calculator.roll.lArray = Array(6);
    practice_calculator.roll.f1Array = Array(6);
    practice_calculator.roll.f2Array = Array(6);

    practice_calculator.roll.olArray = Array(6);
    practice_calculator.roll.of1Array = Array(6);
    practice_calculator.roll.of2Array = Array(6);

    practice_calculator.roll.dsFollower = Array(6);
    practice_calculator.roll.dsLeader = Array(6);

    //*-*-*-*//
    // this is the old roll method it is not used but it still has usefull code
    // that can later be used
    practice_calculator.roll.all = function(on, state) {

        var fa1, fa2, fa3, fa4, la1, la2;

        practice_calculator.stopRolling = !on;

        if(state === 'tuto_ashe') {

            fa1 = ['GROUP A', 'FOLLOWER', 'YOU', 'STRONG', -1,  practice_calculator.netBalance.f1];
            fa2 = ['GROUP A', 'FOLLOWER', '', 'WEAK', -1,  practice_calculator.netBalance.f2];
            fa3 = ['GROUP B', 'FOLLOWER', '', 'EQUAL POWER', -1,  practice_calculator.netBalance.f3];
            fa4 = ['GROUP B', 'FOLLOWER', '', 'EQUAL POWER', -1,  practice_calculator.netBalance.f4];

            la1 = ['GROUP A', 'LEADER', '', '', -1,  practice_calculator.netBalance.l1];
            la2 = ['GROUP B', 'LEADER', '', '', -1,  practice_calculator.netBalance.l2];

        }

        if(state === 'tuto_sho_hs1') {

            fa1 = ['GROUP A', 'FOLLOWER', -1, -1, -1, -1];
            fa2 = ['GROUP A', 'FOLLOWER', -1, -1, -1, -1];
            fa3 = ['GROUP B', 'FOLLOWER', -1, -1, -1, -1];
            fa4 = ['GROUP B', 'FOLLOWER', -1, -1, -1, -1];

            la1 = [-1, -1, -1, -1, -1, -1];
            la2 = [-1, -1, -1, -1, -1, -1];

        }

        if(state === 'tuto_sho_lc1') {

            fa1 = [-1, -1, -1, -1, -1, -1];
            fa2 = [-1, -1, -1, -1, -1, -1];
            fa3 = [-1, -1, -1, -1, -1, -1];
            fa4 = [-1, -1, -1, -1, -1, -1];

            la1 = ['GROUP A', 'LEADER', -1, -1, -1, -1];
            la2 = ['GROUP B', 'LEADER', -1, -1, -1, -1];

        }

        if(state === 'tuto_sho_og1') {

            fa1 = ['GROUP A', 'FOLLOWER', -1, -1, -1, -1];
            fa2 = ['GROUP A', 'FOLLOWER', -1, -1, -1, -1];
            fa3 = ['GROUP B', 'FOLLOWER', -1, -1, -1, -1];
            fa4 = ['GROUP B', 'FOLLOWER', -1, -1, -1, -1];

                la1 = ['GROUP A', 'LEADER', -1, -1, -1, -1];
            la2 = ['GROUP B', 'LEADER', -1, -1, -1, -1];

        }


        practice_calculator.roll.f1(0, 6, fa1);
        practice_calculator.roll.f2(0, 6, fa2);
        practice_calculator.roll.f3(0, 6, fa3);
        practice_calculator.roll.f4(0, 6, fa4);

        practice_calculator.roll.l1(0, 6, la1);
        practice_calculator.roll.l2(0, 6, la2);

    }
    //*-*-*-*//

    // MACRO ARRAY CONTROLLING METHODS


    practice_calculator.roll.hideAll = function() {

        $('.fSideText10, .fSideText11, .fSideText12, .fSideText13, .fSideText14, .fSideText15').css({'transition':'0s', 'opacity':'0'});
        $('.fSideText20, .fSideText21, .fSideText22, .fSideText23, .fSideText24, .fSideText25').css({'transition':'0s',  'opacity':'0'});
        $('.fSideText30, .fSideText31, .fSideText32, .fSideText33, .fSideText34, .fSideText35').css({'transition':'0s', 'opacity':'0'});
        $('.fSideText40, .fSideText41, .fSideText42, .fSideText43, .fSideText44, .fSideText45').css({'transition':'0s', 'opacity':'0'});

        $('.lSideText10, .lSideText11, .lSideText12, .lSideText13, .lSideText14, .lSideText15').css({'transition':'0s', 'opacity':'0'});
        $('.lSideText20, .lSideText21, .lSideText22, .lSideText23, .lSideText24, .lSideText25').css({'transition':'0s', 'opacity':'0'});

        $('.dFSideText0, .dFSideText1, .dFSideText2, .dFSideText3, .dFSideText4, .dFSideText5').css({'transition':'0s', 'opacity':'0'});
        $('.dLSideText0, .dLSideText1, .dLSideText2, .dLSideText3, .dLSideText4, .dLSideText5').css({'transition':'0s', 'opacity':'0'});


        $('.fSideText10, .fSideText11, .fSideText12, .fSideText13, .fSideText14, .fSideText15').css({'transition':'0s', 'filter':'opacity(0)'});
        $('.fSideText20, .fSideText21, .fSideText22, .fSideText23, .fSideText24, .fSideText25').css({'transition':'0s',  'filter':'opacity(0)'});
        $('.fSideText30, .fSideText31, .fSideText32, .fSideText33, .fSideText34, .fSideText35').css({'transition':'0s', 'filter':'opacity(0)'});
        $('.fSideText40, .fSideText41, .fSideText42, .fSideText43, .fSideText44, .fSideText45').css({'transition':'0s', 'filter':'opacity(0)'});

        $('.lSideText10, .lSideText11, .lSideText12, .lSideText13, .lSideText14, .lSideText15').css({'transition':'0s', 'filter':'opacity(0)'});
        $('.lSideText20, .lSideText21, .lSideText22, .lSideText23, .lSideText24, .lSideText25').css({'transition':'0s', 'filter':'opacity(0)'});

        $('.dFSideText0, .dFSideText1, .dFSideText2, .dFSideText3, .dFSideText4, .dFSideText5').css({'transition':'0s', 'filter':'opacity(0)'});
        $('.dLSideText0, .dLSideText1, .dLSideText2, .dLSideText3, .dLSideText4, .dLSideText5').css({'transition':'0s', 'filter':'opacity(0)'});


    }

    practice_calculator.roll.showAll = function() {

        // $('.fSideText10, .fSideText11, .fSideText12, .fSideText13, .fSideText14, .fSideText15').css({'transition':'0s', 'opacity':'0'});
        // $('.fSideText20, .fSideText21, .fSideText22, .fSideText23, .fSideText24, .fSideText25').css({'transition':'0s',  'opacity':'0'});
        // $('.fSideText30, .fSideText31, .fSideText32, .fSideText33, .fSideText34, .fSideText35').css({'transition':'0s', 'opacity':'0'});
        // $('.fSideText40, .fSideText41, .fSideText42, .fSideText43, .fSideText44, .fSideText45').css({'transition':'0s', 'opacity':'0'});

        $('.fSideText10, .fSideText11, .fSideText12, .fSideText13, .fSideText14, .fSideText15').css({'transition':'1s', 'filter':'opacity(1)'});
        $('.fSideText20, .fSideText21, .fSideText22, .fSideText23, .fSideText24, .fSideText25').css({'transition':'1s',  'filter':'opacity(1)'});
        $('.fSideText30, .fSideText31, .fSideText32, .fSideText33, .fSideText34, .fSideText35').css({'transition':'1s', 'filter':'opacity(1)'});
        $('.fSideText40, .fSideText41, .fSideText42, .fSideText43, .fSideText44, .fSideText45').css({'transition':'1s', 'filter':'opacity(1)'});

        $('.lSideText10, .lSideText11, .lSideText12, .lSideText13, .lSideText14, .lSideText15').css({'transition':'0s', 'filter':'opacity(1)'});
        $('.lSideText20, .lSideText21, .lSideText22, .lSideText23, .lSideText24, .lSideText25').css({'transition':'0s', 'filter':'opacity(1)'});


        $('.dFSideText0, .dFSideText1, .dFSideText2, .dFSideText3, .dFSideText4, .dFSideText5').css({'transition':'0s', 'filter':'opacity(1)'});
        $('.dLSideText0, .dLSideText1, .dLSideText2, .dLSideText3, .dLSideText4, .dLSideText5').css({'transition':'0s', 'filter':'opacity(1)'});

    }

    practice_calculator.roll.emptyAll = function() {

        practice_calculator.roll.f1Array = [-1, -1, -1, -1, -1, -1];
        practice_calculator.roll.f2Array = [-1, -1, -1, -1, -1, -1];
        practice_calculator.roll.of1Array = [-1, -1, -1, -1, -1, -1];
        practice_calculator.roll.of2Array = [-1, -1, -1, -1, -1, -1];
        practice_calculator.roll.lArray = [-1, -1, -1, -1, -1, -1];
        practice_calculator.roll.olArray = [-1, -1, -1, -1, -1, -1];

        practice_calculator.roll.dsFollower = [-1, -1, -1, -1, -1, -1];
        practice_calculator.roll.dsLeader = [-1, -1, -1, -1, -1, -1];

    }

    // typeOfContest is about which type of contest is being played
    // in the experiment only 'l', 'f' and 'fhetero will be relevant'
    practice_calculator.roll.setRolesAndGroups = function() {

        // contest section related
        // Also help sabo is available for leader contest so the standart role rolls
        // for followers are also assigned
        if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {

            practice_calculator.roll.dsFollower[0] = 'GROUP A';
            practice_calculator.roll.dsFollower[1] = 'FOLLOWER';

            practice_calculator.roll.dsLeader[0] = 'GROUP A';
            practice_calculator.roll.dsLeader[1] = 'LEADER';


            practice_calculator.roll.lArray[0] = 'GROUP A';
            practice_calculator.roll.lArray[1] = 'LEADER';

            practice_calculator.roll.f1Array[0] = 'GROUP A';
            practice_calculator.roll.f1Array[1] = 'FOLLOWER';
            practice_calculator.roll.f2Array[1] = 'FOLLOWER';
            practice_calculator.roll.f2Array[0] = 'GROUP A';

            practice_calculator.roll.olArray[0] = 'GROUP B';
            practice_calculator.roll.olArray[1] = 'LEADER';

            practice_calculator.roll.of1Array[0] = 'GROUP B';
            practice_calculator.roll.of1Array[1] = 'FOLLOWER';
            practice_calculator.roll.of2Array[0] = 'GROUP B';
            practice_calculator.roll.of2Array[1] = 'FOLLOWER';

        }

        // contest section related
        if(practice_calculator.globalVariable.isIGA) {

            practice_calculator.roll.dsFollower[0] = '';
            practice_calculator.roll.dsFollower[1] = '';

            practice_calculator.roll.dsLeader[0] = 'GROUP A';
            practice_calculator.roll.dsLeader[1] = 'FOLLOWER';

            practice_calculator.roll.lArray[0] = 'GROUP A';
            practice_calculator.roll.lArray[1] = 'FOLLOWER';
            practice_calculator.roll.olArray[0] = 'GROUP A';
            practice_calculator.roll.olArray[1] = 'FOLLOWER';


            practice_calculator.roll.lArray[3] = 'EQUAL POWER';
            practice_calculator.roll.olArray[3] = 'EQUAL POWER';

            practice_calculator.roll.dsLeader[3] = 'EQUAL POWER';

            // we are always represented by left side so left hetero implies our
            // group is hetero
            if(practice_calculator.globalVariable.ourFollowersAreHetero) {

                if(practice_calculator.globalVariable.playerIndex === 0) {

                    practice_calculator.roll.lArray[3] = 'STRONG';
                    practice_calculator.roll.olArray[3] = 'WEAK';

                    practice_calculator.roll.dsLeader[3] = 'STRONG';

                }

                if(practice_calculator.globalVariable.playerIndex === 1) {

                    practice_calculator.roll.lArray[3] = 'WEAK';
                    practice_calculator.roll.olArray[3] = 'STRONG';

                    practice_calculator.roll.dsLeader[3] = 'WEAK';

                }

            }

        }

        // contest section related
        // this section is only relevant for the tutorial
        // otherwise we reconstruct the data to make the subject's group group A
        if(practice_calculator.globalVariable.isIGB) {

            practice_calculator.roll.dsFollower[0] = '';
            practice_calculator.roll.dsFollower[1] = '';

            practice_calculator.roll.dsLeader[0] = 'GROUP B';
            practice_calculator.roll.dsLeader[1] = 'FOLLOWER';

            practice_calculator.roll.lArray[0] = 'GROUP B';
            practice_calculator.roll.lArray[1] = 'FOLLOWER';
            practice_calculator.roll.olArray[0] = 'GROUP B';
            practice_calculator.roll.olArray[1] = 'FOLLOWER';


            practice_calculator.roll.lArray[3] = 'EQUAL POWER';
            practice_calculator.roll.olArray[3] = 'EQUAL POWER';

            practice_calculator.roll.dsLeader[3] = 'EQUAL POWER';

            // we are always represented by left side so left hetero implies our
            // group is hetero
            if(practice_calculator.globalVariable.theirFollowersAreHetero) {

                if(practice_calculator.globalVariable.playerIndex === 0) {

                    practice_calculator.roll.lArray[3] = 'STRONG';
                    practice_calculator.roll.olArray[3] = 'WEAK';

                    practice_calculator.roll.dsLeader[3] = 'STRONG';

                }

                if(practice_calculator.globalVariable.playerIndex === 1) {

                    practice_calculator.roll.lArray[3] = 'WEAK';
                    practice_calculator.roll.olArray[3] = 'STRONG';

                    practice_calculator.roll.dsLeader[3] = 'WEAK';

                }

            }

        }


    }

    practice_calculator.roll.setYouTag = function() {

        if(practice_calculator.globalVariable.playerView) {

            if(practice_calculator.globalVariable.playerIndex === -1) {

                practice_calculator.roll.lArray[2] = 'YOU';
                practice_calculator.roll.dsLeader[2] = 'YOU';

                practice_calculator.roll.f1Array[2] = '';
                practice_calculator.roll.f2Array[2] = '';
                practice_calculator.roll.of1Array[2] = '';
                practice_calculator.roll.of2Array[2] = '';
                // practice_calculator.roll.lArray[2] = '';
                practice_calculator.roll.olArray[2] = '';

            }

            if(practice_calculator.globalVariable.playerIndex === 0) {

                practice_calculator.roll.f1Array[2] = 'YOU';
                practice_calculator.roll.dsFollower[2] = 'YOU';

                practice_calculator.roll.lArray[2] = '';
                // practice_calculator.roll.f1Array[2] = '';
                practice_calculator.roll.f2Array[2] = '';
                practice_calculator.roll.olArray[2] = '';
                practice_calculator.roll.of1Array[2] = '';
                practice_calculator.roll.of2Array[2] = '';

            }

            if(practice_calculator.globalVariable.playerIndex === 1) {

                practice_calculator.roll.f2Array[2] = 'YOU';
                practice_calculator.roll.dsFollower[2] = 'YOU';

                practice_calculator.roll.lArray[2] = '';
                practice_calculator.roll.f1Array[2] = '';
                // practice_calculator.roll.f2Array[2] = '';
                practice_calculator.roll.olArray[2] = '';
                practice_calculator.roll.of1Array[2] = '';
                practice_calculator.roll.of2Array[2] = '';

            }
        }

    }

    practice_calculator.roll.adjustForTreatment = function() {

        if(!practice_calculator.globalVariable.theirFollowersAreHetero && !practice_calculator.globalVariable.ourFollowersAreHetero) {

            practice_calculator.roll.f1Array[3] = -1;
            practice_calculator.roll.f2Array[3] = -1;
            practice_calculator.roll.of1Array[3] = -1;
            practice_calculator.roll.of2Array[3] = -1;

            practice_calculator.roll.lArray[3] = -1;
            practice_calculator.roll.olArray[3] = -1;

            practice_calculator.roll.dsFollower[3] = -1;
            practice_calculator.roll.dsLeader[3] = -1;

        }


        // we are always represented by left side so left hetero implies our
        // group is hetero
        if(practice_calculator.globalVariable.ourFollowersAreHetero) {

            if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {

                practice_calculator.roll.f1Array[3] = 'STRONG';
                practice_calculator.roll.f2Array[3] = 'WEAK';
                practice_calculator.roll.of1Array[3] = 'EQUAL POWER';
                practice_calculator.roll.of2Array[3] = 'EQUAL POWER';

                practice_calculator.roll.lArray[3] = '';
                practice_calculator.roll.olArray[3] = '';

                practice_calculator.roll.dsLeader[3] = '';
                practice_calculator.roll.dsFollower[3] = '';

                if(practice_calculator.globalVariable.playerView) {

                    if(practice_calculator.globalVariable.playerIndex === 0) {
                        practice_calculator.roll.dsFollower[3] = 'STRONG';
                    }

                    if(practice_calculator.globalVariable.playerIndex === 1) {
                        practice_calculator.roll.dsFollower[3] = 'WEAK';
                    }

                }
            }

            if(practice_calculator.globalVariable.isIGA) {

                practice_calculator.roll.f1Array[3] = '';
                practice_calculator.roll.f2Array[3] = '';
                practice_calculator.roll.of1Array[3] = '';
                practice_calculator.roll.of2Array[3] = '';

                // here we use subjectiveIndex as a way to determine left and right player rolls
                // we do not require subjectiveview that way we can also use this method during the tutorial
                if(practice_calculator.globalVariable.playerIndex === 0) {

                    practice_calculator.roll.lArray[3] = 'STRONG';
                    practice_calculator.roll.olArray[3] = 'WEAK';

                    practice_calculator.roll.dsLeader[3] = 'STRONG';

                }

                if(practice_calculator.globalVariable.playerIndex === 1) {

                    practice_calculator.roll.lArray[3] = 'WEAK';
                    practice_calculator.roll.olArray[3] = 'STRONG';

                    practice_calculator.roll.dsLeader[3] = 'WEAK';

                }

            }

            if(practice_calculator.globalVariable.isIGB) {

                practice_calculator.roll.f1Array[3] = '';
                practice_calculator.roll.f2Array[3] = '';
                practice_calculator.roll.of1Array[3] = '';
                practice_calculator.roll.of2Array[3] = '';

                practice_calculator.roll.lArray[3] = 'EQUAL POWER';
                practice_calculator.roll.olArray[3] = 'EQUAL POWER';

                practice_calculator.roll.dsLeader[3] = 'EQUAL POWER';

            }

        }

        if(practice_calculator.globalVariable.theirFollowersAreHetero) {

            if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {

                practice_calculator.roll.f1Array[3] = 'EQUAL POWER';
                practice_calculator.roll.f2Array[3] = 'EQUAL POWER';
                practice_calculator.roll.of1Array[3] = 'STRONG';
                practice_calculator.roll.of2Array[3] = 'WEAK';

                practice_calculator.roll.lArray[3] = '';
                practice_calculator.roll.olArray[3] = '';

                practice_calculator.roll.dsLeader[3] = '';
                practice_calculator.roll.dsFollower[3] = '';

                if(practice_calculator.globalVariable.playerView) {

                    if(practice_calculator.globalVariable.playerIndex === 0) {
                        practice_calculator.roll.dsFollower[3] = 'EQUAL POWER';
                    }

                    if(practice_calculator.globalVariable.playerIndex === 1) {
                        practice_calculator.roll.dsFollower[3] = 'EQUAL POWER';
                    }

                }

            }

            if(practice_calculator.globalVariable.isIGA) {

                practice_calculator.roll.f1Array[3] = '';
                practice_calculator.roll.f2Array[3] = '';
                practice_calculator.roll.of1Array[3] = '';
                practice_calculator.roll.of2Array[3] = '';

                practice_calculator.roll.lArray[3] = 'EQUAL POWER';
                practice_calculator.roll.olArray[3] = 'EQUAL POWER';

                practice_calculator.roll.dsLeader[3] = 'EQUAL POWER';

            }

            if(practice_calculator.globalVariable.isIGB) {

                practice_calculator.roll.f1Array[3] = '';
                practice_calculator.roll.f2Array[3] = '';
                practice_calculator.roll.of1Array[3] = '';
                practice_calculator.roll.of2Array[3] = '';

                // here we use subjectiveIndex as a way to determine left and right player rolls
                // we do not require subjectiveview that way we can also use this method during the tutorial
                if(practice_calculator.globalVariable.playerIndex === 0) {

                    practice_calculator.roll.lArray[3] = 'STRONG';
                    practice_calculator.roll.olArray[3] = 'WEAK';

                    practice_calculator.roll.dsLeader[3] = 'STRONG';

                }

                if(practice_calculator.globalVariable.playerIndex === 1) {

                    practice_calculator.roll.lArray[3] = 'WEAK';
                    practice_calculator.roll.olArray[3] = 'STRONG';

                    practice_calculator.roll.dsLeader[3] = 'WEAK';

                }

            }

        }

        if(practice_calculator.globalVariable.theirFollowersAreHetero && practice_calculator.globalVariable.ourFollowersAreHetero) {

            practice_calculator.roll.f1Array[3] = 'STRONG';
            practice_calculator.roll.f2Array[3] = 'WEAK';
            practice_calculator.roll.of1Array[3] = 'STRONG';
            practice_calculator.roll.of2Array[3] = 'WEAK';

            practice_calculator.roll.lArray[3] = '';
            practice_calculator.roll.olArray[3] = '';

            practice_calculator.roll.dsLeader[3] = '';
            practice_calculator.roll.dsFollower[3] = '';

            if(practice_calculator.globalVariable.playerView) {

                if(practice_calculator.globalVariable.playerIndex === 0) {
                    practice_calculator.roll.dsFollower[3] = 'STRONG';
                }

                if(practice_calculator.globalVariable.playerIndex === 1) {
                    practice_calculator.roll.dsFollower[3] = 'WEAK';
                }

            }


            if(practice_calculator.globalVariable.isIGA && practice_calculator.globalVariable.isIGB) {

                if(practice_calculator.globalVariable.playerIndex === 0) {

                    practice_calculator.roll.lArray[3] = 'STRONG';
                    practice_calculator.roll.olArray[3] = 'WEAK';

                    practice_calculator.roll.dsLeader[3] = 'STRONG';

                }

                if(practice_calculator.globalVariable.playerIndex === 1) {

                    practice_calculator.roll.lArray[3] = 'WEAK';
                    practice_calculator.roll.olArray[3] = 'STRONG';

                    practice_calculator.roll.dsLeader[3] = 'WEAK';

                }

            }

        }

    }

    practice_calculator.roll.adjustForOG2 = function() {

        // In og2 one of the follower of one of the group is the old leader so being weak and strong does not work
        // in addition, being the weak or strong follower does not matter
        // so we take out that section from the roll
        if(practice_calculator.globalVariable.isOG2) {

            practice_calculator.roll.f1Array[3] = -1;
            practice_calculator.roll.f2Array[3] = -1;
            practice_calculator.roll.of1Array[3] = -1;
            practice_calculator.roll.of2Array[3] = -1;

            practice_calculator.roll.lArray[3] = -1;
            practice_calculator.roll.olArray[3] = -1;

            practice_calculator.roll.dsFollower[3] = -1;
            practice_calculator.roll.dsLeader[3] = -1;

        }

    }

    // ACTION AND EXECUTION
    practice_calculator.roll.animate = function() {

        practice_calculator.roll.f1(0, 6, practice_calculator.roll.f1Array);
        practice_calculator.roll.f2(0, 6, practice_calculator.roll.f2Array);
        practice_calculator.roll.f3(0, 6, practice_calculator.roll.of1Array);
        practice_calculator.roll.f4(0, 6, practice_calculator.roll.of2Array);

        practice_calculator.roll.l1(0, 6, practice_calculator.roll.lArray);
        practice_calculator.roll.l2(0, 6, practice_calculator.roll.olArray);

        if(practice_calculator.globalVariable.playerView) {
            if(practice_calculator.globalVariable.playerIndex === -1) {
                practice_calculator.roll.dsL(0, 6, practice_calculator.roll.dsLeader);
                console.log('leader decision slider is activated');
            } else {
                practice_calculator.roll.dsF(0, 6, practice_calculator.roll.dsFollower);
                console.log('follower decision slider is activated');
            }
        }

    }

    practice_calculator.roll.updateRollArrays = function() {
        practice_calculator.roll.hideAll();
        practice_calculator.roll.emptyAll();
        practice_calculator.roll.setRolesAndGroups();
        practice_calculator.roll.setYouTag();
        practice_calculator.roll.adjustForTreatment();
        practice_calculator.roll.adjustForOG2();
        practice_calculator.roll.counter = 0;
        setTimeout(()=>{
            practice_calculator.roll.hideAll();
        }, 5000)
        setTimeout(()=>{
            practice_calculator.roll.showAll();
        }, 10100)
    }

    practice_calculator.roll.initiate = function() {

        practice_calculator.roll.emptyAll();
        practice_calculator.roll.setRolesAndGroups();
        practice_calculator.roll.setYouTag();
        practice_calculator.roll.adjustForTreatment();
        practice_calculator.roll.adjustForOG2();
        practice_calculator.stopRolling = false;
        practice_calculator.roll.animate();

    }

    practice_calculator.roll.reset = function() {

        practice_calculator.stopRolling = true;
        setTimeout(()=>{
            practice_calculator.roll.counter = 0;
            practice_calculator.roll.initiate()
        }, practice_calculator.roll.displayTime + 500);

    }

    // change the setup conditions then call this
    practice_calculator.roll.resetRoll = function() {

        practice_calculator.stopRolling = true;
        practice_calculator.roll.kill = true;
        // practice_calculator.roll.updateRollArrays();

        setTimeout(()=>{
            practice_calculator.roll.updateRollArrays();

            practice_calculator.stopRolling = false;


            practice_calculator.roll.f1(0, 6, practice_calculator.roll.f1Array, true);
            practice_calculator.roll.f2(0, 6, practice_calculator.roll.f2Array, true);
            practice_calculator.roll.f3(0, 6, practice_calculator.roll.of1Array, true);
            practice_calculator.roll.f4(0, 6, practice_calculator.roll.of2Array, true);

            practice_calculator.roll.l1(0, 6, practice_calculator.roll.lArray, true);
            practice_calculator.roll.l2(0, 6, practice_calculator.roll.olArray, true);

            if(practice_calculator.globalVariable.playerView) {
                if(practice_calculator.globalVariable.playerIndex === -1) {
                    practice_calculator.roll.dsL(0, 6, practice_calculator.roll.dsLeader, true);
                } else {
                    practice_calculator.roll.dsF(0, 6, practice_calculator.roll.dsFollower, true);
                }
            }

        }, 1000)

        setTimeout(()=>{
            practice_calculator.roll.kill = false;
        }, 10000)

    }

    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////
    /////////////////////// QUESTIONS ////////////////////////


    practice_calculator.questions.spin1.l1 = function() {
        $('.sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
    }

    practice_calculator.questions.spin2.l1 = function() {
        $('.sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
    }

    practice_calculator.questions.spin1.l2 = function() {
        $('.sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(1530deg)'});
    }

    practice_calculator.questions.spin2.l2 = function() {
        $('.sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(-90deg)'});
    }

    practice_calculator.questions.spin1.f1 = function() {
        $('.sliderQuestion_f1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
    }

    practice_calculator.questions.spin2.f1 = function() {
        $('.sliderQuestion_f1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
    }

    practice_calculator.questions.spin1.f2 = function() {
        $('.sliderQuestion_f2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
    }

    practice_calculator.questions.spin2.f2 = function() {
        $('.sliderQuestion_f2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
    }

    practice_calculator.questions.spin1.of1 = function() {
        $('.sliderQuestion_of1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
    }

    practice_calculator.questions.spin2.of1 = function() {
        $('.sliderQuestion_of1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
    }

    practice_calculator.questions.spin1.of2 = function() {
        $('.sliderQuestion_of2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
    }

    practice_calculator.questions.spin2.of2 = function() {
        $('.sliderQuestion_of2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
    }

    practice_calculator.questions.activate.all = function(array) {

        $('.sliderQuestion_l1').css({'opacity': array[0].toString()});
        $('.sliderQuestion_f1').css({'opacity': array[1].toString()});
        $('.sliderQuestion_f2').css({'opacity': array[2].toString()});
        $('.sliderQuestion_l2').css({'opacity': array[3].toString()});
        $('.sliderQuestion_of1').css({'opacity': array[4].toString()});
        $('.sliderQuestion_of2').css({'opacity': array[5].toString()});

        if(practice_calculator.globalVariable.playerView) {
            if(practice_calculator.globalVariable.playerIndex === -1) {
                $('.sliderQuestion_l1').css({'opacity': '0'});
            }
            if(practice_calculator.globalVariable.playerIndex === 0) {
                $('.sliderQuestion_f1').css({'opacity': '0'});
            }
            if(practice_calculator.globalVariable.playerIndex === 1) {
                $('.sliderQuestion_f2').css({'opacity': '0'});
            }
        }

    }


    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////
    /////////////////////// WHEEL ////////////////////////


    practice_calculator.wheel.hide = function() {

        $('.pw').css({'opacity':'1', 'zIndex':'1'});
        $('.mywheel').css({'opacity':'0', 'zIndex':'0'});

    }

    practice_calculator.wheel.show = function() {

        $('.pw').css({'opacity':'0', 'zIndex':'-1'});
        $('.mywheel').css({'opacity':'1', 'zIndex':'0'});

    }

    practice_calculator.wheel.spin = function() {

        practice_calculator.globalVariable.topSpinButtonIsEnabled = false;
        practice_calculator.globalVariable.bottomSpinButtonIsEnabled = false;

        //---//

        practice_calculator.results.softHide.allResults();
        practice_calculator.button.display.spinTop(false);
        setTimeout(()=>practice_calculator.button.disable.spinTop(), 300);


        //---//

        practice_calculator.wheel.spinDuration = 1;
        practice_calculator.wheel.spinNumber = 3;

        practice_calculator.wheel.create(pwin, 'myWheel');
        practice_calculator.wheel.myWheelObj.stopAnimation(false);
        practice_calculator.wheel.myWheelObj.rotationAngle = 0;

        practice_calculator.wheel.show();

        //---//

        var winner = (pwin > Math.random()) ? 1 : 2;

        var stopAt = practice_calculator.wheel.myWheelObj.getRandomForSegment(winner);
        practice_calculator.wheel.myWheelObj.animation.stopAngle = stopAt;
        practice_calculator.wheel.myWheelObj.startAnimation();

        //---//

        setTimeout(()=>
        {
            practice_calculator.results.update.allTextAndColors(winner);
        },
        practice_calculator.wheel.spinDuration * 0.75 * 1000);

        setTimeout(()=>
        {
            practice_calculator.results.show.outcomes();
        },
        practice_calculator.wheel.spinDuration * 1000);

    }

    practice_calculator.wheel.cruise = function() {

        if(!practice_calculator.wheel.isSpinning) {

            practice_calculator.wheel.show();

            practice_calculator.wheel.spinDuration = 600;
            practice_calculator.wheel.spinNumber = 60;

            practice_calculator.wheel.create(pwin, 'myWheel');
            practice_calculator.wheel.myWheelObj.stopAnimation(false);
            practice_calculator.wheel.myWheelObj.rotationAngle = 0;
            practice_calculator.wheel.myWheelObj.startAnimation();

        }

    }


    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////
    //////////////////////// SPACE ///////////////////////////


    practice_calculator.space.hsIsOpen = undefined;

    practice_calculator.space.hsResultsTopIsOpen = undefined;

    practice_calculator.space.hsResultsBottomIsOpen = undefined;

    practice_calculator.space.powerBarIsOpen = undefined;

    practice_calculator.space.contestIsOpen = undefined;

    practice_calculator.space.contestResultsIsOpen = undefined;

    // CONTEST SECTION SPACE MANAGEMENT

    practice_calculator.space.open.cResults = function() {

        practice_calculator.space.contestResultsIsOpen = true;
        practice_calculator.space.update.heights();

    }

    practice_calculator.space.close.cResults = function() {

        practice_calculator.space.contestResultsIsOpen = false;
        practice_calculator.space.update.heights();

    }

    // TOP RESULTS OF HELP / SABOTAGE

    practice_calculator.space.open.hsResultsTop = function() {

        $('.hsWrap').css({'transition':'1.023456s', 'margin-top':'0px'});
        practice_calculator.space.hsResultsTopIsOpen = true;
        practice_calculator.space.update.heights();

    }

    practice_calculator.space.close.hsResultsTop = function() {

        $('.hsWrap').css({'transition':'1.023456s', 'margin-top':'-57px'});
        practice_calculator.space.hsResultsTopIsOpen = false;
        practice_calculator.space.update.heights();

    }


    // BOTTOM RESULTS OF HELP / SABOTAGE

    practice_calculator.space.open.hsResultsBottom = function() {

        $('.pWrap').css({'transition':'1.023456s', 'margin-top':'40px'});
        practice_calculator.space.hsResultsBottomIsOpen = true;
        practice_calculator.space.update.heights();

    }

    practice_calculator.space.close.hsResultsBottom = function() {

        $('.pWrap').css({'transition':'1.023456s', 'margin-top':'-54px'});
        practice_calculator.space.hsResultsBottomIsOpen = false;
        practice_calculator.space.update.heights();

    }


    // CLOSE BOTH HELP SABOTAGE SECTION AND 'CLOSE' LEADER RESULT SECTION

    practice_calculator.space.close.all = function() {

        practice_calculator.space.close.hsResultsTop();
        practice_calculator.space.close.hsResultsBottom();
        practice_calculator.space.close.cResults();

        // if(practice_calculator.globalVariable.playerIndex === -1 && practice_calculator.globalVariable.playerView) {
        //     practice_calculator.space.contestResultsIsOpen = true;
        // }
        //
        // practice_calculator.space.update.heights();

    }


    // ADJUST HEIGHT DEPENDING ON WHAT IS DISPLAYED AND OPEN

    practice_calculator.space.update.heights = function() {

        // var pb = practice_calculator.space.powerBarIsOpen ? 35 : 0;
        // var c = practice_calculator.space.contestIsOpen ? 175 : 0;
        // var cr = practice_calculator.space.contestResultsIsOpen ? 150 : 0;
        // var hs = practice_calculator.space.hsIsOpen ? 300 : 0;
        // var hsT = practice_calculator.space.hsResultsTopIsOpen ? 75 : 0;
        // var hsB = practice_calculator.space.hsResultsBottomIsOpen ? 100 : 0;

        var pb = practice_calculator.space.powerBarIsOpen ? 30 : 0;
        var c = practice_calculator.space.contestIsOpen ? 170 : 0;
        var hs = practice_calculator.space.hsIsOpen ? 295 : 0;
        var cr = practice_calculator.space.contestResultsIsOpen ? 150 : 0;//145 OLD VALUE
        var hsT = practice_calculator.space.hsResultsTopIsOpen ? 65 : 0;
        var hsB = practice_calculator.space.hsResultsBottomIsOpen ? 90 : 0;

        var total = pb + c + cr + hs + hsT + hsB;

        // if(total === 835) {
        //     total = 795;
        // }

        total = total + 'px';

        // console.log('********************');
        // console.log('power bar: ' + pb);
        // console.log('contest: ' + c);
        // console.log('contestResult: ' + cr);
        // console.log('hs: ' + hs);
        // console.log('hs Top: ' + hsT);
        // console.log('hs Bottom: ' + hsB);
        // console.log('total: ' + total);
        // console.log('********************');



        $('.generalMarginBox').css({'transition':'1.023456s', 'height' : total});

        practice_calculator.section.power.adjust.space();

    }


    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////
    ////////////////////////// RESULTS ////////////////////////////


    //-------------- AFTER WHEEL STOPS ------------//

    practice_calculator.results.show.outcomes = function() {

        practice_calculator.focusOnContest = false;

        $('.practiceMainWrap').css({'transition':'1s', 'margin-top':'0px'})

        practice_calculator.button.display.spinBottom(false);
        practice_calculator.button.display.spinTop(false);

        practice_calculator.globalVariable.contestResultsExist = true;
        practice_calculator.globalVariable.topSpinButtonIsEnabled = true;
        practice_calculator.globalVariable.bottomSpinButtonIsEnabled = false;


        practice_calculator.globalVariable.hover.hsResults = 1;

        // enlarge to their original size both section when you display the results

        if(practice_calculator.globalVariable.display.cMinimize) {
            practice_calculator.section.contest.minimize(true);
        } else {
            practice_calculator.section.contest.minimize(false);
        }

        if(practice_calculator.globalVariable.display.hsMinimize) {
            practice_calculator.section.hs.minimize(true);
        } else {
            practice_calculator.section.hs.minimize(false);
        }

        //---------- CONTEST SECTION -----------//

        if(practice_calculator.globalVariable.display.cResults) {
            practice_calculator.results.show.leaderOutcomes();
        } else {
            practice_calculator.results.hide.leaderOutcomes()
        }

        practice_calculator.globalVariable.hover.cResults = 1;

        if(practice_calculator.globalVariable.display.cTitle) {
            practice_calculator.titles.contest.show();
        } else {
            practice_calculator.titles.contest.hide();
        }

        practice_calculator.globalVariable.hover.cTitle = 1;


        //-------------- HELP / SABOTAGE SECTION ------------//


        if(practice_calculator.globalVariable.display.hsResults) {
            practice_calculator.results.show.followerOutcomesAll();
        } else {
            practice_calculator.results.hide.followerOutcomesAll();
        }

        if(practice_calculator.globalVariable.display.hsIcons) {
            practice_calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);
            practice_calculator.section.hs.set.iconPosition('center');
        } else {
            // Not sure how can I benefit this state to be considered when needed
        }

        if(practice_calculator.globalVariable.display.hsMainTitle) {
            practice_calculator.titles.hs.show();
            practice_calculator.titles.update.position();
        }


        practice_calculator.button.display.spinBottom(false);
        practice_calculator.button.display.spinTop(false);


        $('.generalMarginBox').css({'transform':'scale(0.75)', 'margin-top':'-63px'});

        //------ DELAYED ACTIVATIONS -------//

        // setTimeout(()=>{
        //     $('#spinImage23').css({'filter':'opacity(1)', 'transform':'scale(1)'});
        //     practice_calculator.button.display.spinBottom(true);
        //     practice_calculator.spinButtonActivated = true;
        // }, 1000)


        setTimeout(()=>{
            $('.clearImageButtonSubWrap').css({'transition':'0s', 'transform':'scale(0.8)', 'opacity':'0'});
            $('.clearImageButtonSubWrap').css({'display':'flex'});
            setTimeout(()=>{
                $('.clearImageButtonSubWrap').css({'transition':'1s', 'transform':'scale(1)', 'opacity':'1'});
            }, 1200)
        }, 1000)





        setTimeout(()=>{

            practice_calculator.button.display.spinBottom(true);
            practice_calculator.button.display.spinTop(false);

            practice_calculator.globalVariable.aBitOfWaitingIsDone = true;
            practice_calculator.globalVariable.dynamicDisplay = true;
            practice_calculator.noResults = false;

            $('.clearImageButtonSubWrap').css({'transition':'1s', 'transform':'scale(1)', 'opacity':'1'});

        }, 3000);

    }


    //------------------ CONTEST -----------------//

    practice_calculator.results.leader.switches = Array(4);
    practice_calculator.results.leader.switches = [false, false, false, false];


    practice_calculator.results.leader.update.payoffHeights = function(array) {

        var sum = array.reduce((a,b) => a + b, 0)

        if(sum === 0) {

            $('.payoffWrap').css({'margin-top':'-109px'});
            $('.c1, .c2').css({'opacity':'1'});
            $('.bottomText').css({'display':'none'});

        }

        if(sum === 1 || sum === 2) {

            $('.payoffWrap').css({'margin-top':'-145px'});
            $('.c1, .c2').css({'opacity':'1'});
            $('.bottomText').css({'display':'none'});

        }

        if(sum === 3) {

            $('.payoffWrap').css({'margin-top':'-145px'});
            $('.c1, .c2').css({'opacity':'1'});
            $('.bottomText').css({'display':'flex', 'margin-bottom':'-25px'});

        }

        if(sum === 4) {

            $('.payoffWrap').css({'margin-top':'-145px'});
            $('.c1, .c2').css({'opacity':'1'});
            $('.bottomText').css({'display':'flex', 'margin-bottom':'0px'});

        }


    }

    practice_calculator.results.leader.display.investment = function(show) {

        var opacity = show ? '1' : '0';
        $('.cLeft, .cRight').css({'opacity': opacity});
        $('.pRight, .pLeft').css({'display':'none'});
        $('.topText').css({'justify-content':'center', 'border-bottom':'0px black'});


        practice_calculator.results.leader.switches[0] = show;
        practice_calculator.results.leader.update.payoffHeights(practice_calculator.results.leader.switches);

        practice_calculator.results.tokenTextIsShown = true;

    }

    practice_calculator.results.leader.display.prize = function(show) {

        var opacity = show ? '1' : '0';
        $('.pLeft, .pRight').css({'opacity': opacity});
        $('.tokenTag').css({'display':'none'});

        practice_calculator.results.leader.switches[1] = show;
        practice_calculator.results.leader.update.payoffHeights(practice_calculator.results.leader.switches);

        if(show) {

            $('.pRight, .pLeft').css({'display':'flex'});
            $('.topText').css({'justify-content':'space-between'});
            practice_calculator.results.tokenTextIsShown = false;

        }

    }

    practice_calculator.results.leader.display.netPayoff = function(show) {

        var opacity = show ? '1' : '0';
        $('.npLeft, .npRight').css({'opacity': opacity});
        $('.topText').css({'border-bottom':'1px black dashed'});
        practice_calculator.results.leader.switches[2] = show;
        practice_calculator.results.leader.update.payoffHeights(practice_calculator.results.leader.switches);

    }

    practice_calculator.results.leader.display.role = function(show) {

        var opacity = show ? '1' : '0';
        $('.rLeft, .rRight').css({'opacity': opacity});
        practice_calculator.results.leader.switches[3] = show;
        practice_calculator.results.leader.update.payoffHeights(practice_calculator.results.leader.switches);

    }



    practice_calculator.results.show.leaderOutcomes = function() {


        $('.payoffWrap, .imageWrap23').css({'transition' : '1.023456s', 'opacity':'1'});
        practice_calculator.space.contestResultsIsOpen = true;

        if(!practice_calculator.globalVariable.contestResultsExist) {
            $('.payoffWrap').css({'transition' : '0s', 'opacity':'0'});
        }


        practice_calculator.space.update.heights();

    }

    practice_calculator.results.hide.leaderOutcomes = function() {

        $('.payoffWrap, .imageWrap23').css({'transition' : '1.023456s', 'opacity':'0'});
        practice_calculator.space.contestResultsIsOpen = false;

        // Do not hide the contest titles when the subjective view is the leader
        if(practice_calculator.globalVariable.playerIndex === -1 && practice_calculator.globalVariable.playerView) {
            practice_calculator.space.contestResultsIsOpen = true;
            $('.imageWrap23').css({'transition' : '0.15s', 'opacity':'1'});
        }

        // // do not hide the contest title when contest title hover is close.
        // // If the title is hidden then it will never be opened by the hover since it is closed
        // if(!practice_calculator.globalVariable.hover.cTitle) {
        //     practice_calculator.space.contestResultsIsOpen = true;
        //     $('.imageWrap23').css({'transition' : '1.023456s', 'opacity':'1'});
        // }

        practice_calculator.space.update.heights();

    }


    //----------- HELP SABOTAGE ----------//

    practice_calculator.results.hide.followerOutcomesBottom = function() {

        practice_calculator.space.close.hsResultsBottom();
        $('.leftSideResult, .rightSideResult, .leftSidePrize, .rightSidePrize, .leftSideRole, .rightSideRole').css({'transition-delay':'0s', 'transition':'0.3s', 'opacity':'0'});

    }

    practice_calculator.results.hide.followerOutcomesTop = function() {

        practice_calculator.space.close.hsResultsTop();
        $('.fNetPayoffText, .fResults').css({'transition-delay':'0s', 'transition':'0.3521s', 'opacity':'0'});

    }

    practice_calculator.results.hide.followerOutcomesAll = function() {

        practice_calculator.results.hide.followerOutcomesTop();
        practice_calculator.results.hide.followerOutcomesBottom();

    }


    practice_calculator.results.show.followerOutcomesBottom = function() {

        $('.fResults').css({'transition' : '1.023456s', 'opacity':'1'});

        practice_calculator.space.open.hsResultsBottom();

        $('.leftSideResult, .rightSideResult').css({'transition' : '0.423456s', 'transition-delay':'0.4s', 'opacity':'1'});
        $('.leftSideRole, .rightSideRole').css({'transition' :  '0.423456s', 'transition-delay':'0.4s', 'opacity':'1'});
        $('.leftSidePrize, .rightSidePrize').css({'transition' :  '0.423456s', 'transition-delay':'0.4s', 'opacity':'1'});

    }

    practice_calculator.results.show.followerOutcomesTop = function() {

        practice_calculator.space.open.hsResultsTop();
        $('.fNetPayoffText, .fResults').css({'transition':'0.3521s', 'transition-delay':'0.3s', 'opacity':'1'});

    }

    practice_calculator.results.show.followerOutcomesAll = function() {

        practice_calculator.results.show.followerOutcomesTop();
        practice_calculator.results.show.followerOutcomesBottom();

    }


    //---------- ALL ----------//

    practice_calculator.results.softHide.allResults = function() {

        $('.payoffWrap, .fNetPayoffText, .fResults, .leftSideResult, .rightSideResult, .leftSidePrize, .rightSidePrize, .leftSideRole, .rightSideRole').css({'transition-delay':'0s', 'transition' : '0.15s', 'opacity':'0'});

    }

    practice_calculator.results.hide.all = function() {

        practice_calculator.results.hide.followerOutcomesAll();
        practice_calculator.results.hide.leaderOutcomes();
        practice_calculator.globalVariable.dynamicDisplay = false;
        practice_calculator.titles.update.position();

    }

    practice_calculator.results.show.all = function() {

        practice_calculator.results.show.followerOutcomesBottom();
        practice_calculator.results.show.followerOutcomeTop();
        practice_calculator.results.show.leaderOutcomes();

    }


    //-------------- TEXT AND COLOR UPDATING ------------//

    practice_calculator.results.tokenTextIsShown = undefined;
    practice_calculator.results.resultTextsType = undefined;
    practice_calculator.results.lastWinner = undefined;


    // practice_calculator.results.update.contestText = function(w) {
    //
    //     w = w === undefined ? practice_calculator.results.lastWinner : w;
    //     practice_calculator.results.lastWinner = w;
    //
    //     var winnerPrize,winnerRole, loserRole;
    //
    //     // can be replaced with typeofcontest
    //     if(practice_calculator.globalVariable.isOG1 || practice_calculator.globalVariable.isOG2) {
    //         winnerRole = 'Continue as Leader';
    //         loserRole = 'Became a Follower';
    //         winnerPrize = 1000;
    //     }
    //     if(practice_calculator.globalVariable.isIGA || practice_calculator.globalVariable.isIGB) {
    //         winnerRole = 'Became the Leader';
    //         loserRole = 'Continue as Follower';
    //         winnerPrize = 0;
    //     }
    //     if(practice_calculator.globalVariable.isGeneric) {
    //         winnerRole = 'Upgrade in role';
    //         loserRole = 'Downgrade in role';
    //
    //         winnerPrize = 'PRIZE';
    //     }
    //
    //
    //     //---//
    //
    //
    //     var resultLeft = document.getElementById('resultLeft');
    //     var prizeLeft = document.getElementById('prizeLeft');
    //     var costLeft = document.getElementById('costLeft');
    //     var netPayoffLeft = document.getElementById('netPayoffLeft');
    //     var roleLeft = document.getElementById('roleLeft');
    //     var resultRight = document.getElementById('resultRight');
    //     var prizeRight = document.getElementById('prizeRight');
    //     var costRight = document.getElementById('costRight');
    //     var netPayoffRight = document.getElementById('netPayoffRight');
    //     var roleRight = document.getElementById('roleRight');
    //     var myTokenTag1 = document.getElementById('tokenTag1');
    //     var myTokenTag2 = document.getElementById('tokenTag2');
    //
    //     var tokenTag1, tokenTag2;
    //     if(practice_calculator.results.tokenTextIsShown) {
    //         tokenTag1 = efo === 0 ? ' token' : ' tokens';
    //         tokenTag2 = oefo === 0 ? ' token' : ' tokens';
    //         $('.tokenTag').css({'padding-left':'10px', 'font-weight':'400', 'display':'inline'});
    //     } else {
    //         tokenTag1 = tokenTag2 = '';
    //         $('.tokenTag').css({'display':'none'});
    //     }
    //
    //
    //     //---//
    //
    //
    //     resultLeft.innerHTML = w === 1 ? 'WON' : 'LOST';
    //     prizeLeft.innerHTML = w === 1 ? winnerPrize : 0;
    //     costLeft.innerHTML = efo;
    //     myTokenTag1.innerHTML = tokenTag1;
    //     netPayoffLeft.innerHTML = -efo + ( w === 1 ? winnerPrize : 0);
    //     roleLeft.innerHTML = w === 1 ? winnerRole : loserRole;
    //
    //     resultRight.innerHTML = w === 2 ? 'WON' : 'LOST';
    //     prizeRight.innerHTML = w === 2 ? winnerPrize : 0;
    //     costRight.innerHTML = oefo;
    //     myTokenTag2.innerHTML = tokenTag2;
    //     netPayoffRight.innerHTML = -oefo + ( w === 2 ? winnerPrize : 0);
    //     roleRight.innerHTML = w === 2 ? winnerRole : loserRole;
    //
    //
    //     //---//
    //
    //
    //     if(practice_calculator.globalVariable.isGeneric) {
    //
    //         prizeLeft.innerHTML = w === 1 ? winnerPrize : 0;
    //         prizeRight.innerHTML = w === 2 ? winnerPrize : 0;
    //
    //         var str1, str2, str3;
    //         str1 = '<span style=\'color:red;\'>';
    //         str2 = '</span>';
    //         str3 = str1 + ' - ' + efo + str2;
    //
    //         if(efo === 0) {
    //             netPayoffLeft.innerHTML =  w === 1 ? winnerPrize : -efo;
    //         } else if(efo > 0) {
    //             netPayoffLeft.innerHTML = w === 1 ? (winnerPrize + str3) : -efo;
    //         }
    //
    //         var ostr1, ostr2, ostr3;
    //         ostr1 = '<span style=\'color:red;\'>';
    //         ostr2 = '</span>';
    //         ostr3 = ostr1 + ' - ' + oefo + ostr2;
    //
    //         if(oefo === 0) {
    //             netPayoffRight.innerHTML =  w === 2 ? winnerPrize : -oefo;
    //         } else if(oefo > 0) {
    //             netPayoffRight.innerHTML = w === 2 ? (winnerPrize + ostr3) : -oefo;
    //         }
    //
    //     }
    //
    // }

    practice_calculator.results.update.followerHSText = function(w) {

        w = w === undefined ? practice_calculator.results.lastWinner : w;
        practice_calculator.results.lastWinner = w;

        var fwinnerRole, floserRole, fwinnerPrize, floserPrize;


        var f1NetPayoff = document.getElementById('f1netPayoff');
        var f2NetPayoff = document.getElementById('f2netPayoff');
        var leftSidePrize = document.getElementById('leftSidePrize')
        var leftSideRole = document.getElementById('leftSideRole');
        var leftSideResult = document.getElementById('leftSideResult');
        var of1NetPayoff = document.getElementById('of1netPayoff');
        var of2NetPayoff = document.getElementById('of2netPayoff');
        var rightSidePrize = document.getElementById('rightSidePrize')
        var rightSideRole = document.getElementById('rightSideRole');
        var rightSideResult = document.getElementById('rightSideResult');


        fwinnerRole = 'Each continues as Follower';
        fwinnerPrize = 'Each receives 100 tokens'
        floserRole = 'Chance to be the new Leader';
        floserPrize = 'Each receives 0 token'

        leftSidePrize.innerHTML = w === 1 ? fwinnerPrize : floserPrize;
        leftSideRole.innerHTML = w === 1 ? fwinnerRole : floserRole;
        leftSideResult.innerHTML = w === 1 ? 'LEADER WON' : 'LEADER LOST';
        f1NetPayoff.innerHTML = -(h1 + s1) + ((w === 1) ? 100 : 0);
        f2NetPayoff.innerHTML = -(h2 + s2) + ((w === 1) ? 100 : 0);

        rightSidePrize.innerHTML = w === 2 ? fwinnerPrize : floserPrize;
        rightSideRole.innerHTML = w === 2 ? fwinnerRole : floserRole;
        rightSideResult.innerHTML = w === 2 ? 'LEADER WON' : 'LEADER LOST';
        of1NetPayoff.innerHTML = -(oh1 + os1) + ((w === 2) ? 100 : 0);
        of2NetPayoff.innerHTML = -(oh2 + os2) + ((w === 2) ? 100 : 0);

        //
        // var f1np, f2np, of1np, of2np, l1np, l2np;
        //
        // f1np =  -(h1 + s1) + ((w === 1) ? 100 : 0);
        // f2np =  -(h2 + s2) + ((w === 1) ? 100 : 0);
        // of1np =  -(oh1 + os1) + ((w === 2) ? 100 : 0);
        // of2np =  -(oh2 + os2) + ((w === 2) ? 100 : 0);
        //
        // l1np = -efo + ( w === 1 ? winnerPrize : 0);
        // l2np = -oefo + ( w === 2 ? winnerPrize : 0);

    }

    practice_calculator.results.update.outcomeColors = function(w) {

        w = w === undefined ? practice_calculator.results.lastWinner : w;
        practice_calculator.results.lastWinner = w;

        if(w === 1) {
            $('.resultLeft, .leftSideResult').css({'transition':'1s', 'background-color':'darkblue'});
            $('.resultRight, .rightSideResult').css({'transition':'1s', 'background-color':'darkred', 'color':'white'});
        }
        if(w === 2) {
            $('.resultLeft, .leftSideResult').css({'transition':'1s', 'background-color':'darkred'});
            $('.resultRight, .rightSideResult').css({'transition':'1s', 'background-color':'darkblue', 'color':'white'});
        }

    }

    practice_calculator.results.update.allColors = function(w) {

        if(w === 1) {
            $('.p1, .np1, .f1NetPayoff, .f2NetPayoff').css({'color':'blue'});
            $('.p2').css({'color':'black'});
            $('.np2, .of1NetPayoff, .of2NetPayoff').css({'color':'red'});
        }

        if(w === 2) {
            $('.p2, .np2, .of1NetPayoff, .of2NetPayoff').css({'color':'blue'});
            $('.p1').css({'color':'black'});
            $('.np1, .f1NetPayoff, .f2NetPayoff').css({'color':'red'});
        }

        if(oefo > 0 && w === 1) {
            $('.np2').css({'color':'red'});
        }

        if(efo > 0 && w === 2) {
            $('.np1').css({'color':'red'});
        }

        $('.c1, .c2').css({'color':'red'});

        if(efo === 0 && w === 2) {
            $('.np1').css({'color':'black'});
        }

        if(oefo === 0 && w === 1) {
            $('.np2').css({'color':'black'});
        }

        if(efo === 0) {
            $('.c1').css({'color':'black'});
        }

        if(oefo === 0) {
            $('.c2').css({'color':'black'});
        }

        if(practice_calculator.globalVariable.isIGA || practice_calculator.globalVariable.isIGB) {

            $('.p1, .p2').css({'color':'black'});

            if(efo === 0) {
                $('.np1').css({'color':'black'});
            }
            if(efo > 0) {
                $('.np1').css({'color':'red'});
            }
            if(oefo === 0) {
                $('.np2').css({'color':'black'});
            }
            if(oefo > 0) {
                $('.np2').css({'color':'red'});
            }

        }

        $('.p1, .c1, .np1, .p2, .c2, .np2').css({'font-weight':'500'});

        if(w === 2) {
            if(s1 + h1 === 0) {
                $('.f1NetPayoff').css({'color':'black'});
            }
            if(s2 + h2 === 0) {
                $('.f2NetPayoff').css({'color':'black'});
            }
        }

        if(w === 1) {
            if(os1 + oh1 === 0) {
                $('.of1NetPayoff').css({'color':'black'});
            }
            if(os2 + oh2 === 0) {
                $('.of2NetPayoff').css({'color':'black'});
            }
        }

        practice_calculator.results.update.outcomeColors(w)

    }

    practice_calculator.results.update.allTextAndColors = function(w) {

        if(w === 'undefined') {
            console.log('WARNING WINNER INDEX FOR practice_calculator.RESULTS.UPDATE.* IS UNDEFINED');
        }

        // practice_calculator.results.update.contestText(w);
        practice_calculator.results.update.followerHSText(w);
        practice_calculator.results.update.allColors(w);

    }


    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////
    /////////////// BUTTONS /////////////////

    //------ CALCULATOPR OPEN / CLOSE ------//

    practice_calculator.open = function() {

        practice_calculator.section.hs.minimize(false);
        practice_calculator.section.contest.minimize(true);

        $('.decisionWrapF').css({'transition':'1.023456s', 'margin-bottom':'10px'});
        $('.generalMarginBox').css({'transition':'1.023456s', 'transform-origin':'top', 'transform':'scaleY(1)'});
        practice_calculator.space.update.heights();

    }

    practice_calculator.close = function() {

        $('.generalMarginBox').css({'transition':'0.5s', 'transform-origin':'top', 'transform':'scaleY(0)'});

        setTimeout(()=> {

            $('.generalMarginBox').css({'transition':'0.5s', 'height':'0px'});
            $('.decisionWrapF').css({'transition':'0.5s', 'margin-bottom':'115px'});

        }, 200)


    }

    //-------SPIN BUTTON COMMAND-------//

    practice_calculator.button.spin = function() {

        if(practice_calculator.globalVariable.bottomSpinButtonIsEnabled) {

            practice_calculator.globalVariable.aBitOfWaitingIsDone = false;

            practice_calculator.wheel.spin();

            practice_calculator.globalVariable.dynamicDisplay = false;

        }

    }


    //----- SPIN TOP -----//

    practice_calculator.button.enable.spinTop= function() {

        $('.spinImage').css({'display':'inline'});

    }

    practice_calculator.button.disable.spinTop = function() {

        $('.spinImage').css({'display':'none'});

    }

    practice_calculator.button.display.spinTop = function(show) {

        var opacity = show ? '1' : '0';
        var cursor = show ? 'pointer' : 'default';
        $('.spinImage').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

    }


    //------ SUBMIT TOP -----//

    practice_calculator.button.activeSubmitButtonAnimation = false;
    practice_calculator.button.animate = function(state) {

        if(practice_calculator.button.activeSubmitButtonAnimation) {
            if(state === 0) {
                $('.submitButtonTopImage2').css({'transition-delay':'1s', 'transition':'3s', 'right':'-100px'});
                setTimeout(()=>practice_calculator.button.animate(1), 1000);
            }
            if(state === 1) {
                $('.submitButtonTopImage2').css({'transition-delay':'0s', 'transition':'0s', 'right':'58px'});
                // setTimeout(()=>practice_calculator.button.animate(0), 100);
            }
        } else {
            $('.submitButtonTopImage2').css({'transition-delay':'0s', 'transition':'0s', 'right':'58px'});
        }
    }


    //------ MINIMIZE TOP ------//

    practice_calculator.button.display.minTop = function(show) {

        var opacity = show ? '1' : '0';
        var cursor = show ? 'pointer' : 'default';
        $('.minImageTopSetup').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

    }

    practice_calculator.button.disable.minTop = function() {

        $('.minImageTopSetup').css({'display':'none'});

    }

    practice_calculator.button.enable.minTop = function() {

        $('.minImageTopSetup').css({'display':'flex'});

    }


    //--------- SPIN BOTTOM --------//

    practice_calculator.button.display.spinBottom = function(show) {

        var opacity = show ? '1' : '0';
        var cursor = show ? 'pointer' : 'default';
        $('.spinImage23').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

    }

    practice_calculator.button.disable.spinBottom = function() {

        $('.spinImage23').css({'display':'none'});

    }

    practice_calculator.button.enable.spinBottom = function() {

        $('.spinImage23').css({'display':'inline'});

    }


    //--------- MINIMIZE BOTTOM ---------//

    practice_calculator.button.display.minBottom = function(show) {

        var opacity = show ? '1' : '0';
        var cursor = show ? 'pointer' : 'default';
        $('.minImageBottomSetup').css({'transition':'1s', 'opacity': opacity, 'cursor' : cursor});

    }

    practice_calculator.button.disable.minBottom = function() {

        $('.minImageBottomSetup').css({'display':'none'});

    }

    practice_calculator.button.enable.minBottom = function() {

        $('.minImageBottomSetup').css({'display':'flex'});

    }


    //---------- SPIN BOTTOM MINI -------//

    practice_calculator.button.display.spinBottomMini = function(show) {

        var opacity = show ? '1' : '0';
        var cursor = show ? 'pointer' : 'default';
        $('.spinImageMini').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

    }

    practice_calculator.button.disable.spinBottomMini = function() {

        $('.spinImageMini').css({'display':'none'});

    }

    practice_calculator.button.enable.spinBottomMini = function() {

        $('.spinImageMini').css({'display':'flex'});

    }

    //------ SUBMIT BOTTOM -----//

    practice_calculator.button.activeSubmitButtonAnimation2 = false;
    practice_calculator.button.animate2 = function(state) {

        if(practice_calculator.button.activeSubmitButtonAnimation2) {
            if(state === 0) {
                $('.submitButtonBottomImage2').css({'transition-delay':'1s', 'transition':'3s', 'right':'-100px'});
                setTimeout(()=>practice_calculator.button.animate2(1), 1000);
            }
            if(state === 1) {
                $('.submitButtonBottomImage2').css({'transition-delay':'0s', 'transition':'0s', 'right':'58px'});
                // setTimeout(()=>practice_calculator.button.animate(0), 100);
            }
        } else {
            $('.submitButtonBottomImage2').css({'transition-delay':'0s', 'transition':'0s', 'right':'58px'});
        }

    }


    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////
    ////////////////////// SECTIONS /////////////////////////


    //------------- MINIMIZE HELP/SABOTAGE SECTION -----------//

    practice_calculator.section.hs.minimize = function(show) {

        var mt = show ? '-77px' : '0px';
        var pt = show ? '91px' : '0px';
        var sc = show ? 'scale(0.6)' : 'scale(1)';

        $('.sliderBarWrap').css({'transition':'1.023456s', 'padding-top' : pt, 'transform' : sc});
        // $('.generalMarginBox').css({'transition':'1.023456s', 'margin-top' : mt});

        var minimized = show;

        if(minimized) {
            $('.decisionMadeExplanationWrap').css({'transform':'scale(0.7)',
            'margin-top':'-75px','margin-left':'69px'})
        } else {
            $('.decisionMadeExplanationWrap').css({'transform':'scale(1)',
            'margin-top':'-23px','margin-left':'47px'})
        }


    }


    //------------ MINIMIZE CONTEST SECTION ---------------//

    practice_calculator.section.contest.minimize = function(show) {

        var mb;

        var mt = show ? '-89px' : '-29px';
        var sc = show ? 'scale(0.6)' : 'scale(1)';

        if(practice_calculator.space.contestResultsIsOpen && !practice_calculator.globalVariable.closedDecisionCalculator) {
            mb = show ? '-115px' : '0px';
        } else {
            mb = show ? '-66px' : '0px';
        }


        $('.contestSectionMinimize').css({'transition':'1.023456s', 'transform-origin':'top',  'transform' : sc});
        // $('.generalMarginBox').css({'transition':'1.023456s', 'margin-bottom' : mb});

        // $('.imageWrap23').css({'margin-top':mt});


    }


    //------------- DISPLAY CALCULATOR ------------------//

    practice_calculator.section.all.opacity = function(opt, delay) {

        delay = delay === undefined ? 1 : delay;

        delay = delay + 's';

        $('.generalMarginBox').css({'transition': delay, 'opacity' : opt.toString()});

    }


    practice_calculator.section.all.adjust.decisionSliders = function() {

        if(practice_calculator.globalVariable.playerView) {

            if(practice_calculator.globalVariable.playerIndex === -1) {

                practice_calculator.section.decision.leader.opacity(1)
                practice_calculator.decisionSlider.leader.enable();
                practice_calculator.decisionSlider.follower.disable();

            }

            if(practice_calculator.globalVariable.playerIndex === 0 || practice_calculator.globalVariable.playerIndex === 1) {

                practice_calculator.section.decision.follower.opacity(1)
                practice_calculator.decisionSlider.follower.enable();
                practice_calculator.decisionSlider.leader.disable();

            }

        } else {
            practice_calculator.decisionSlider.follower.disable();
            practice_calculator.decisionSlider.leader.disable();
        }

    }


    //------------- DISPLAY FOLLOWER DECISION SLIDER -----------------//

    practice_calculator.section.decision.follower.opacity = function(opt) {

        $('.decisionWrapF').css({'opacity' : opt.toString()});

    }


    //------------- DISPLAY PLAYER DECISION SLIDER -----------------//

    practice_calculator.section.decision.leader.opacity = function(opt, delay) {

        delay = delay === undefined ? 0.5 : delay;

        delay = delay + 's';

        $('.decisionWrapL').css({'transition':delay, 'opacity' : opt.toString()});

    }


    //--------------- HELP SABOTAGE SECTION  ----------//

    practice_calculator.section.hs.display.all = function(show) {

        var d = show ? 'flex' : 'none';

        $('.hsWrap, .ctTop, .ctGhost').css({'display': d});
        practice_calculator.space.hsIsOpen = show;

    }


    practice_calculator.section.hs.display.totalHSBars = function(show) {

        if(!show) {


            $('.followersTotalHS').css({'opacity':'0'});


        } else {

            $('.OGCIcon').css({'margin-top' : '0px'});
            $('.followersTotalHS').css({'opacity':'1'});
            $('.ctWrap').css({'margin-bottom':'-50px'});

        }

    }


    practice_calculator.section.hs.display.totalHSBars(false);


    //----//
    // Slider - Follower icon - Arrows - Leader icon - Fight icon - Separator
    practice_calculator.section.hs.opacity.SFiALiFiS = function(array, delay) {

        practice_calculator.section.hs.opacity.followerSliders(array[0], delay);
        practice_calculator.section.hs.opacity.followerIcons(array[1], delay);
        practice_calculator.section.hs.opacity.followerArrows(array[2], delay);
        practice_calculator.section.hs.opacity.leaderIconsMain(array[3], delay);
        practice_calculator.section.hs.opacity.fightIcon(array[4], delay);
        practice_calculator.section.hs.opacity.separator(array[5], delay);

    }

    // Methods used in SFIALIFIS
    practice_calculator.section.hs.opacity.followerSliders = function(o, delay) {

        delay = delay === undefined ? 1 : delay;
        delay = delay + 's';

        if(o != -1) {

            $('.followersRight, .followersLeft').css({'transition': delay, 'opacity': o.toString()});

        }

    }

    practice_calculator.section.hs.opacity.followerArrows = function(o, delay) {

        delay = delay === undefined ? 1 : delay;
        delay = delay + 's';

        if(o != -1) {

            $('.arrowIconBoxLeft, .arrowIconBoxRight').css({'transition': delay, 'opacity':o.toString()});

        }

    }

    practice_calculator.section.hs.opacity.followerIcons = function(o, delay) {

        delay = delay === undefined ? 1 : delay;
        delay = delay + 's';

        if(o != -1) {

            $('.wrapLeft,  .wrapRight').css({'transition': delay, 'opacity': o.toString()});

        }

        if(o === 1) {
            $('.spf1, .spf1L11, .spf1L12, .spf1L21, .spf1L22').css({'transition': delay,
            'filter':'drop-shadow(0px 7px 3px black)'});
        } else {
            $('.spf1, .spf1L11, .spf1L12, .spf1L21, .spf1L22').css({'transition': delay,
            'filter':'drop-shadow(0px 0px 0px transparent)'});
        }

    }

    practice_calculator.section.hs.transition.leaderIconsMain = function(delay) {

        delay = delay + 's';

        $('.wrapMid, .splc1, .splc2').css({'transition': delay});

    }

    practice_calculator.section.hs.opacity.leaderIconsMain = function(o, delay) {

        delay = delay === undefined ? 1 : delay;
        delay = delay + 's';

        if(o != -1) {

            $('.wrapMid').css({'transition': delay, 'opacity': o.toString()});

        }

        if(o === 1) {
            $('.splc1, .splc2').css({'transition': delay, 'filter':'drop-shadow(0px 7px 3px black)'});
        } else {
            $('.splc1, .splc2').css({'transition': delay, 'filter':'drop-shadow(0px 0px 0px transparent)'});
        }

    }

    practice_calculator.section.hs.opacity.fightIcon = function(o, delay) {

        delay = delay === undefined ? 1 : delay;
        delay = delay + 's';

        if(o != -1) {

            $('.imgwrapfight').css({'transition': delay, 'opacity' : o.toString()});

        }

    }

    practice_calculator.section.hs.opacity.separator = function(o, delay) {

        delay = delay === undefined ? 1 : delay;
        delay = (delay/2) + 's';

        if(o === 1) {

            $('.verticalSeparator').css({'transition': delay, 'transition-delay':'0.1s', 'height':'166px', 'opacity' : '1'});

        }

        if(o === 0) {

            $('.verticalSeparator').css({'transition': delay, 'transition-delay':'0s', 'height':'0px', 'opacity' : '0'});

        }

    }
    //----//

    practice_calculator.section.hs.set.iconPosition = function(position) {

        if(position === 'center') {

            $('.OGCIcon').css({'transition':'1.023456s', 'margin-top':'-29px'});
            $('.imgwrapfight').css({'transition':'1.023456s','margin-left':'0px', 'margin-right':'0px', 'margin-top':'0px'});
            $('.leftLeaderIconMainWrap').css({'transition':'0s','transform':'rotate(0deg)'});
            $('.rightLeaderIconMainWrap').css({'transition':'0s','transform':'rotate(0deg)'});
            $('.fightIcon').css({'transition':'1.023456s', 'transform':'rotate(0turn)'});

            practice_calculator.icons.update.leaderMargins(false);

        }

        if(position == 'bottom') {

            $('.OGCIcon').css({'margin-top':'39px'});
            $('.imgwrapfight').css({'transition':'1.023456s','margin-left':'35px', 'margin-right':'35px', 'margin-top':'10px'});
            $('.leftLeaderIconMainWrap').css({'transition':'1.023456s','transform':'rotate(10deg)'});
            $('.rightLeaderIconMainWrap').css({'transition':'1.023456s','transform':'rotate(-10deg)'});
            $('.fightIcon').css({'transition':'1.023456s', 'transform':'rotate(1turn)'});

            practice_calculator.icons.update.leaderMargins(false);

        }

    }


    practice_calculator.section.hs.opacity.activeFollowerIcon = function(tag, show) {

        var opacity = show ? '1' : '0';
        var myString = '.' + tag;
        $(myString).css({'opacity' : opacity});

    }

    practice_calculator.section.hs.set.grayToAll = function() {

        var gray = 'rgb(140, 140, 140, 0.2)'
        var black = 'rgb(50, 50, 50, 1)'
        $('.imgwrapwrapwrap31').css({'background-color':gray, 'border-color':'black'});
        $('.imgwrapwrapwrap32').css({'background-color':gray, 'border-color':'black'});
        $('.iaf1').css({'stroke':black});
        $('.arrowTip11').css({'fill':black});
        $('.iaf2').css({'stroke':black});
        $('.arrowTip12').css({'fill':black});
        $('.iaof1').css({'stroke':black});
        $('.arrowTip21').css({'fill':black});
        $('.iaof2').css({'stroke':black});
        $('.arrowTip22').css({'fill':black});

    }


    //-------------- POWER RATIO ----------------//
    //-------------- POWER RATIO ----------------//

    practice_calculator.section.power.opacity.bar = function(opt, delay) {

        delay = delay === undefined ? 0.5 : delay;
        delay = delay  + 's';

        $('.pWrap').css({'transition':delay, 'opacity' : opt.toString()});

    }

    practice_calculator.section.power.display.barText = function(tag) {

        if(tag === 'top') {
            $('.pTitleTop').css({'opacity' : '1'});
            $('.pTitleBottom').css({'opacity' : '0'});
            $('.powerRatio').css({'margin-top':'0px', 'margin-bottom':'-10px'});
            practice_calculator.section.power.display.barLegend(false);
        }

        if(tag === 'bottom') {
            $('.pTitleTop').css({'opacity' : '0'});
            $('.pTitleBottom').css({'opacity' : '1'});
            practice_calculator.section.power.display.barLegend(true);
        }

        if(tag === 'none') {
            $('.pTitleTop').css({'opacity' : '0'});
            $('.pTitleBottom').css({'opacity' : '0'});
            $('.powerRatio').css({'margin-top':'0px', 'margin-bottom':'-4px'});
            practice_calculator.section.power.display.barLegend(false);
        }

    }

    practice_calculator.section.power.display.barLegend = function(show) {

        var opacity = show ? 'flex' : 'none';

        $('.legendwrapwrap').css({'display' : opacity});

    }

    practice_calculator.section.power.opacity.barLegend = function(opt, delay) {

        delay = delay === undefined ? 0.5 : delay;
        delay = delay  + 's';

        $('.legendwrapwrap').css({'transition':delay, 'opacity' : opt.toString()});

    }

    practice_calculator.section.power.adjust.space = function() {

        if(practice_calculator.space.hsResultsBottomIsOpen) {
            $('.pWrap').css({'transition':'1.023456s', 'margin-top':'40px'});
        } else {
            $('.pWrap').css({'transition':'1.023456s', 'margin-top':'-54px'});
        }

    }


    //-------------- CONTEST SECTION ----------------//
    //-------------- CONTEST SECTION ----------------//


    practice_calculator.section.contest.opacity.sliders = function(opt, delay) {

        delay = delay === undefined ? 0.5 : delay;
        delay = delay  + 's';

        $('.contestSection').css({'transition':delay, 'opacity' : opt.toString()});

    }

    practice_calculator.section.contest.display.all = function(show) {

        practice_calculator.section.contest.display.sliders(show);
        practice_calculator.section.contest.display.title(show);
        practice_calculator.section.contest.display.results(show);

    }

    practice_calculator.section.contest.display.sliders = function(show) {

        var display = show ? 'flex' : 'none';

        $('.contestSection').css({'display': display});

        practice_calculator.space.contestIsOpen = show;

        practice_calculator.space.update.heights();

    }

    practice_calculator.section.contest.display.title = function(show) {

        var display = show ? 'block' : 'none';

        $('.imageWrap23').css({'display': display});

        practice_calculator.space.contestResultsIsOpen = show;

        practice_calculator.space.update.heights();

    }

    practice_calculator.section.contest.display.results = function(show) {

        var display = show ? 'flex' : 'none';

        $('.payoffWrap').css({'display': display});

        practice_calculator.space.contestResultsIsOpen = show;

        practice_calculator.space.update.heights();

    }

    // unused second set of leader icons
    practice_calculator.section.contest.display.icons = function(show) {

        var opt = show ? '1' : '0';
        var display = show ? 'flex' : 'none'
        $('.OGCIcon2').css({'opacity':opt, 'display':display});

    }



    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////
    ///////////// SET VALUES //////////


    practice_calculator.values.set.helpSabo = function(valueArray) {

        s1 = valueArray[0];
        s2 = valueArray[1];
        h1 = valueArray[2];
        h2 = valueArray[3];
        os1 = valueArray[4];
        os2 = valueArray[5];
        oh1 = valueArray[6];
        oh2 = valueArray[7];

        practice_calculator.values.update.efficiencies();
        practice_calculator.values.update.probability();

    }

    practice_calculator.values.set.efforts = function(valueArray) {

        efo = valueArray[0];
        oefo = valueArray[1];

        practice_calculator.values.update.probability();

    }


    ///////////// REFRESH ////////////
    ///////////// REFRESH ////////////
    ///////////// REFRESH ////////////
    ///////////// REFRESH ////////////
    ///////////// REFRESH ////////////
    ///////////// REFRESH ////////////
    ///////////// REFRESH ////////////
    ///////////// REFRESH ////////////
    ///////////// REFRESH ////////////


    practice_calculator.refresh.sliders = function() {

        var ourSide, theirSide, showAxis;
        ourSide = true;
        showAxis = true;
        theirSide = true;


        var f1, f2, of1, of2;

        $('#lSlider1').prop('value', efo);
        $('#lSlider1').change();

        $('#olSlider1').prop('value', oefo);
        $('#olSlider1').change();

        practice_calculator.graphics.update.effortBar(efo, 'barl1', ourSide, !showAxis);
        practice_calculator.graphics.update.effortBar(oefo, 'barl2', !ourSide, !showAxis);


        f1 = s1 > 0 ? -s1 : h1;
        f2 = s2 > 0 ? -s2 : h2;
        of1 = os1 > 0 ? -os1 : oh1;
        of2 = os2 > 0 ? -os2 : oh2;

        $('#vSlider1').prop('value', f1);
        $('#vSlider1').change();

        $('#vSlider2').prop('value', f2);
        $('#vSlider2').change();

        $('#ovSlider1').prop('value', of1);
        $('#ovSlider1').change();

        $('#ovSlider2').prop('value', of2);
        $('#ovSlider2').change();

        practice_calculator.graphics.update.helpSaboBar(f1, 'barf1', !theirSide, !showAxis);
        practice_calculator.graphics.update.helpSaboBar(f2, 'barf2', !theirSide, !showAxis);
        practice_calculator.graphics.update.helpSaboBar(of1, 'obarf1', theirSide, !showAxis);
        practice_calculator.graphics.update.helpSaboBar(of2, 'obarf2', theirSide, !showAxis);

        //if you are the leader
        if(practice_calculator.globalVariable.playerIndex === -1) {
            //update dfslider according to efo
            practice_calculator.decisionSlider.leader.effortBar(efo, !showAxis);
            $('#dSliderL').prop('value', efo);
            $('#dSliderL').change();
            practice_calculator.graphics.update.barLabelX('bardl', true);

        }

        // if you are the first follower (strong)
        if(practice_calculator.globalVariable.playerIndex === 0) {
            //update dfslider according to h1 s1
            practice_calculator.decisionSlider.follower.helpSaboBar(f1, !showAxis);
            $('#dSliderF').prop('value', f1);
            $('#dSliderF').change();
            practice_calculator.graphics.update.barLabelX('bardf', true);

        }

        //if you are the second follower (weak)
        if(practice_calculator.globalVariable.playerIndex === 1) {
            //update dfslider according to h2 s2
            practice_calculator.decisionSlider.follower.helpSaboBar(f2, !showAxis);
            $('#dSliderF').prop('value', f2);
            $('#dSliderF').change();
            practice_calculator.graphics.update.barLabelX('bardf', true);

        }


        $('.fSideTextWrap').css({'opacity':'1'});
        $('.lockedCover_f1, .lockedCover_f2, .lockedCover_of1, .lockedCover_of2').css({'opacity':'1'});


    }

    practice_calculator.refresh.values = function() {

        practice_calculator.values.update.probability();
        practice_calculator.values.update.efficiencies();

        practice_calculator.refresh.sliders();

    }

    practice_calculator.refresh.barXAxis = function() {

        practice_calculator.update.barLabel('barl1', false);
        practice_calculator.update.barLabel('barl2', false);
        practice_calculator.update.barGrid('barl1', false);
        practice_calculator.update.barGrid('barl2', false);

        practice_calculator.update.barLabel('barf1', false);
        practice_calculator.update.barLabel('barf2', false);
        practice_calculator.update.barGrid('barf1', false);
        practice_calculator.update.barGrid('barf2', false);

        practice_calculator.update.barLabel('obarf1', false);
        practice_calculator.update.barLabel('obarf2', false);
        practice_calculator.update.barGrid('obarf1', false);
        practice_calculator.update.barGrid('obarf2', false);

    }


    // ---------------  SOME ADDITIONAL STUFF ----------- //

    practice_calculator.warn15 = function() {

        var delay = 500;

        $('.all').css({'transition':'1s',
        'background-color':'orange'});

        setTimeout(()=>{
            $('.all').css({'transition':'1s',
            'background-color':'transparent'});
        }, delay)

        setTimeout(()=>{
            $('.all').css({'transition':'1s',
            'background-color':'orange'});
        }, 2 * delay)

        setTimeout(()=>{
            $('.all').css({'transition':'1s',
            'background-color':'transparent'});
        }, 3 * delay)

        setTimeout(()=>{
            $('.all').css({'transition':'1s',
            'background-color':'orange'});
        }, 4 * delay)

        setTimeout(()=>{
            $('.all').css({'transition':'1s',
            'background-color':'transparent'});
        }, 5 * delay)

    }


    practice_calculator.warn5 = function() {

        var delay = 500;

        $('.all').css({'transition':'1s',
        'background-color':'red'});

        setTimeout(()=>{
            $('.all').css({'transition':'1s',
            'background-color':'transparent'});
        }, delay)

        setTimeout(()=>{
            $('.all').css({'transition':'1s',
            'background-color':'red'});
        }, 2 * delay)

        setTimeout(()=>{
            $('.all').css({'transition':'1s',
            'background-color':'transparent'});
        }, 3 * delay)

        setTimeout(()=>{
            $('.all').css({'transition':'1s',
            'background-color':'red'});
        }, 4 * delay)

        setTimeout(()=>{
            $('.all').css({'transition':'1s',
            'background-color':'transparent'});
        }, 5 * delay)

    }

    // -------------- MORE ADDITIONAL METHODS ------------------ //

    practice_calculator.minimize = function(scale, delay) {

        scale = 'scale(' + ( scale === undefined ? 0.85 : scale ) + ')';
        delay = delay === undefined ? 0.5 : delay;
        delay = delay + 's';

        $('.calculator').css({'transform-origin':'center top',
        'transition':delay, 'transform':scale});

    }

    // Not defined yet !!!
    practice_calculator.enable.payoffDisplays = function() {



    }

    practice_calculator.disable.payoffDisplays = function() {

        $('.imageWrap23, .payoffWrap').css({'display':'none'})

    }

    practice_calculator.set.height = function(h) {

        // h = h === undefined ? 375 : h;
        // h = h + 'px';
        //
        // $('.generalMarginBox, .calculator').css({'height':h});

        console.log('practice_calculator.set.height is disabled!');

    }


    practice_calculator.values.set.f1 = function(groupIndex) {

        // for notational ease
        var help = 0;
        var sabo = 1;
        var playerIndex = 0;

        s1 = mainData.s2[groupIndex][sabo][playerIndex];
        h1 = mainData.s2[groupIndex][help][playerIndex];

        practice_calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
        practice_calculator.refresh.sliders();

    }


    practice_calculator.values.set.f2 = function(groupIndex) {

        // for notational ease
        var help = 0;
        var sabo = 1;
        var playerIndex = 1;

        s2 = mainData.s2[groupIndex][sabo][playerIndex];
        h2 = mainData.s2[groupIndex][help][playerIndex];

        practice_calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
        practice_calculator.refresh.sliders();

    }


    practice_calculator.values.set.of1 = function(groupIndex) {

        // for notational ease
        var help = 0;
        var sabo = 1;
        var playerIndex = 0;

        os1 = mainData.s2[groupIndex][sabo][playerIndex];
        oh1 = mainData.s2[groupIndex][help][playerIndex];

        practice_calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
        practice_calculator.refresh.sliders();

    }


    practice_calculator.values.set.of2 = function(groupIndex) {

        // for notational ease
        var help = 0;
        var sabo = 1;
        var playerIndex = 1;

        os2 = mainData.s2[groupIndex][sabo][playerIndex];
        oh2 = mainData.s2[groupIndex][help][playerIndex];

        practice_calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
        practice_calculator.refresh.sliders();

    }


    practice_calculator.AAHS = function(delay) {

        // node action here
        // MYDATA TO HELP SABOTAGE VALUE TRANSFORMATION
        // WARNING: THERE MAY BE GROUP REARRANGEMENT
        // USE MYGROUP INDEX FOR CORRECT IDENTIFICATION
        // SUBJECT'S GROUP IS ALWAYS THE LEFT GROUP (A)
        // need data to be used for help sabo values
        var myGroup, otherGroup, delay, tTime;

        myGroup = mainData.myOriginalGroup;

        otherGroup = myGroup === 0 ? 1 : 0;
        delay = delay === undefined ? 500 : delay;
        tTime = (delay * 0.7) / 1000;

        practice_calculator.section.hs.transition.leaderIconsMain(tTime)

        setTimeout(()=>{
            practice_calculator.values.set.f1(myGroup);
        }, delay * 0)
        setTimeout(()=>{
            practice_calculator.values.set.f2(myGroup);
        }, delay * 1)
        setTimeout(()=>{
            practice_calculator.values.set.of1(otherGroup);
        }, delay * 2)
        setTimeout(()=>{
            practice_calculator.values.set.of2(otherGroup);
        }, delay * 3)

        setTimeout(()=>{

            // default initial values for the calculator
            practice_calculator.values.set.efforts([100,100]);

            practice_calculator.refresh.sliders();
            practice_calculator.graphics.update.pie();

        }, delay * 4)

    }




    practice_calculator.values.set.f1_og2 = function(groupIndex) {

        // for notational ease
        var help = 0;
        var sabo = 1;
        var playerIndex = 0;

        s1 = mainData.s5[groupIndex][sabo][playerIndex];
        h1 = mainData.s5[groupIndex][help][playerIndex];

        practice_calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
        practice_calculator.refresh.sliders();

    }


    practice_calculator.values.set.f2_og2 = function(groupIndex) {

        // for notational ease
        var help = 0;
        var sabo = 1;
        var playerIndex = 1;

        s2 = mainData.s5[groupIndex][sabo][playerIndex];
        h2 = mainData.s5[groupIndex][help][playerIndex];

        practice_calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
        practice_calculator.refresh.sliders();

    }


    practice_calculator.values.set.of1_og2 = function(groupIndex) {

        // for notational ease
        var help = 0;
        var sabo = 1;
        var playerIndex = 0;

        os1 = mainData.s5[groupIndex][sabo][playerIndex];
        oh1 = mainData.s5[groupIndex][help][playerIndex];

        practice_calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
        practice_calculator.refresh.sliders();

    }


    practice_calculator.values.set.of2_og2 = function(groupIndex) {

        // for notational ease
        var help = 0;
        var sabo = 1;
        var playerIndex = 1;

        os2 = mainData.s5[groupIndex][sabo][playerIndex];
        oh2 = mainData.s5[groupIndex][help][playerIndex];

        practice_calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
        practice_calculator.refresh.sliders();

    }


    practice_calculator.AAHS_og2 = function(delay) {

        // node action here
        // MYDATA TO HELP SABOTAGE VALUE TRANSFORMATION
        // WARNING: THERE MAY BE GROUP REARRANGEMENT
        // USE MYGROUP INDEX FOR CORRECT IDENTIFICATION
        // SUBJECT'S GROUP IS ALWAYS THE LEFT GROUP (A)
        // need data to be used for help sabo values
        var myGroup, otherGroup, delay, tTime;

        // myGroup = mainData.myOriginalGroup;
        // unlike stage 2 here we are using rearranged data thus our group is
        // always 0 when we were building stage 2 data arrangements we haven't
        // written rearrangemaindata function yet that was why we were using that method
        myGroup = 0;

        // otherGroup = myGroup === 0 ? 1 : 0;
        otherGroup = 1;

        delay = delay === undefined ? 500 : delay;
        tTime = (delay * 0.7) / 1000;

        practice_calculator.section.hs.transition.leaderIconsMain(tTime)

        setTimeout(()=>{
            practice_calculator.values.set.f1_og2(myGroup);
        }, delay * 0)
        setTimeout(()=>{
            practice_calculator.values.set.f2_og2(myGroup);
        }, delay * 1)
        setTimeout(()=>{
            practice_calculator.values.set.of1_og2(otherGroup);
        }, delay * 2)
        setTimeout(()=>{
            practice_calculator.values.set.of2_og2(otherGroup);
        }, delay * 3)

        setTimeout(()=>{

            // default initial values for the calculator
            practice_calculator.values.set.efforts([100,100]);

            practice_calculator.refresh.sliders();
            practice_calculator.graphics.update.pie();

        }, delay * 4)

    }


}


generateOG();


//----------------------------------------------------------------------------//
//-----------------------   DECISION SLIDER BUTTONS   ------------------------//
//----------------------------------------------------------------------------//


practice_calculator.globalVariable.mapIsOpen = 0;
$('#mapButtonTop').click(function() {

    $('.generalInfoWrap').css({'transform':'scale(0) rotateX(0turn)', 'z-index':'-100'});

    if(practice_calculator.globalVariable.mapIsOpen === 0) {

        $('.decisionWrapF').css({'z-index':'200'});
        $('.mapInfoWrap').css({'transform':'scale(1) rotateX(1turn)', 'z-index':'200'});


        practice_calculator.globalVariable.mapIsOpen = 1;
        practice_calculator.globalVariable.infoIsOpen = 0;
        practice_calculator.globalVariable.aBitOfWaitingIsDone = 0;

    } else {

        $('.decisionWrapF').css({'z-index':'5'});
        $('.mapInfoWrap').css({'transform':'scale(0) rotateX(0turn)', 'z-index':'-100'});


        practice_calculator.globalVariable.mapIsOpen = 0;
        practice_calculator.globalVariable.aBitOfWaitingIsDone = 1;

    }

})

$('#mapButtonBottom').click(function() {

    $('.generalInfoWrap').css({'transform':'scale(0) rotateX(0turn)', 'z-index':'-100'});

    if(practice_calculator.globalVariable.mapIsOpen === 0) {
        $('.decisionWrapL').css({'z-index':'200'});
        $('.mapInfoWrap2').css({'transform':'scale(1) rotateX(1turn)', 'z-index':'200'});


        practice_calculator.globalVariable.mapIsOpen = 1;
        practice_calculator.globalVariable.infoIsOpen = 0;
        practice_calculator.globalVariable.aBitOfWaitingIsDone = 0;

    } else {

        $('.decisionWrapL').css({'z-index':'200'});
        $('.mapInfoWrap2').css({'transform':'scale(0) rotateX(0turn)', 'z-index':'-100'});


        practice_calculator.globalVariable.mapIsOpen = 0;
        practice_calculator.globalVariable.aBitOfWaitingIsDone = 1;
    }

})


practice_calculator.globalVariable.infoIsOpen = 0;
$('#infoButtonTop').click(function() {

    $('.mapInfoWrap').css({'transform':'scale(0) rotateX(0turn)', 'z-index':'-100'});

    if(practice_calculator.globalVariable.infoIsOpen === 0) {

        $('.decisionWrapF').css({'z-index':'200'});
        $('.generalInfoWrap').css({'transform':'scale(1) rotateX(1turn)', 'z-index':'200'});

        practice_calculator.globalVariable.infoIsOpen = 1;
        practice_calculator.globalVariable.mapIsOpen = 0;
        practice_calculator.globalVariable.aBitOfWaitingIsDone = 0;

    } else {

        $('.decisionWrapF').css({'z-index':'5'});
        $('.generalInfoWrap').css({'transform':'scale(0) rotateX(0turn)', 'z-index':'-100'});

        practice_calculator.globalVariable.infoIsOpen = 0;
        practice_calculator.globalVariable.aBitOfWaitingIsDone = 1;

    }

})

$('#infoButtonBottom').click(function() {

    console.log('inside button bottom');

    $('.mapInfoWrap2').css({'transform':'scale(0) rotateX(0turn)', 'z-index':'-100'});

    if(practice_calculator.globalVariable.infoIsOpen === 0) {

        console.log('inside openining info box section');

        $('.decisionWrapL').css({'z-index':'200'});
        $('.generalInfoWrap').css({'transform':'scale(0.813) rotateX(1turn)', 'z-index':'200'});

        practice_calculator.globalVariable.infoIsOpen = 1;
        practice_calculator.globalVariable.mapIsOpen = 0;
        practice_calculator.globalVariable.aBitOfWaitingIsDone = 0;

    } else {

        console.log('inside closing info box section');

        $('.decisionWrapL').css({'z-index':'200'});
        $('.generalInfoWrap').css({'transform':'scale(0) rotateX(0turn)', 'z-index':'-100'});

        practice_calculator.globalVariable.infoIsOpen = 0;
        practice_calculator.globalVariable.aBitOfWaitingIsDone = 1;

    }

})


//----------------------------------------------------------------------------//
//-------------------   DECISION SLIDER INFO BOX BUTTONS   -------------------//
//----------------------------------------------------------------------------//


practice_calculator.globalVariable.basicInfoOn = 0;
practice_calculator.globalVariable.payoffInfoOn = 0;
practice_calculator.globalVariable.strategyInfoOn = 0;
practice_calculator.globalVariable.tipsInfoOn = 0;


practice_calculator.closeAllInfo = function() {

    $('.generalInstructionTextWrap, .basicInfoText, .payoffInfoText, .strategyInfoText, .tipsInfoText').css({'transform':'scale(0)'});

}

$('#basicInfoButton').click(function() {



    practice_calculator.closeAllInfo()

    if(practice_calculator.globalVariable.basicInfoOn === 0) {

        practice_calculator.globalVariable.basicInfoOn = 1;

        practice_calculator.globalVariable.payoffInfoOn = 0;
        practice_calculator.globalVariable.strategyInfoOn = 0;
        practice_calculator.globalVariable.tipsInfoOn = 0;

        practice_calculator.setupInfoButtonColors();

        setTimeout(()=>{
            $('.basicInfoText').css({'transform':'scale(1)'});
        }, 200)

    } else {

        practice_calculator.globalVariable.basicInfoOn = 0;

        practice_calculator.setupInfoButtonColors();

        $('.generalInstructionTextWrap').css({'transform':'scale(1)'});
    }


})

$('#payoffInfoButton').click(function() {

    practice_calculator.closeAllInfo()

    if(practice_calculator.globalVariable.payoffInfoOn === 0) {

        practice_calculator.globalVariable.payoffInfoOn = 1;

        practice_calculator.globalVariable.basicInfoOn = 0;
        practice_calculator.globalVariable.strategyInfoOn = 0;
        practice_calculator.globalVariable.tipsInfoOn = 0;

        practice_calculator.setupInfoButtonColors();

        setTimeout(()=>{
            $('.payoffInfoText').css({'transform':'scale(1)'});
        }, 200)

    } else {

        practice_calculator.globalVariable.payoffInfoOn = 0;

        practice_calculator.setupInfoButtonColors();

        $('.generalInstructionTextWrap').css({'transform':'scale(1)'});

    }


})

$('#strategyInfoButton').click(function() {

    practice_calculator.closeAllInfo()

    if(practice_calculator.globalVariable.strategyInfoOn === 0) {

        practice_calculator.globalVariable.strategyInfoOn = 1;

        practice_calculator.globalVariable.payoffInfoOn = 0;
        practice_calculator.globalVariable.basicInfoOn = 0;
        practice_calculator.globalVariable.tipsInfoOn = 0;

        practice_calculator.setupInfoButtonColors();

        setTimeout(()=>{
            $('.strategyInfoText').css({'transform':'scale(1)'});
        }, 200)

    } else {

        practice_calculator.globalVariable.strategyInfoOn = 0;

        practice_calculator.setupInfoButtonColors();

        $('.generalInstructionTextWrap').css({'transform':'scale(1)'});

    }

})

$('#tipsInfoButton').click(function() {

    practice_calculator.closeAllInfo()

    if(practice_calculator.globalVariable.tipsInfoOn === 0) {

        practice_calculator.globalVariable.tipsInfoOn = 1;

        practice_calculator.globalVariable.strategyInfoOn = 0;
        practice_calculator.globalVariable.payoffInfoOn = 0;
        practice_calculator.globalVariable.basicInfoOn = 0;

        practice_calculator.setupInfoButtonColors();

        setTimeout(()=>{
            $('.tipsInfoText').css({'transform':'scale(1)'});
        }, 200)

    } else {

        practice_calculator.globalVariable.tipsInfoOn = 0;

        practice_calculator.setupInfoButtonColors();

        $('.generalInstructionTextWrap').css({'transform':'scale(1)'});

    }

})


practice_calculator.setupInfoButtonColors = function() {

    $('#basicInfoButton, #payoffInfoButton, #strategyInfoButton, #tipsInfoButton').css({'transition':'0.2s',
    'background-color':'darkgreen',
    'box-shadow': '0px 3px 4px 2px black', 'transform':'scale(1)', 'filter':'grayscale(1)'});

    if(practice_calculator.globalVariable.basicInfoOn) {

        $('#basicInfoButton').css({'background-color':'darkgreen',
        'box-shadow': '0px 1px 0px 0px black', 'filter':'grayscale(0)'})

    }

    if(practice_calculator.globalVariable.payoffInfoOn) {

        $('#payoffInfoButton').css({'background-color':'darkgreen',
        'box-shadow': '0px 1px 0px 0px black', 'filter':'grayscale(0)'})

    }

    if(practice_calculator.globalVariable.strategyInfoOn) {

        $('#strategyInfoButton').css({'background-color':'darkgreen',
        'box-shadow': '0px 1px 0px 0px black', 'filter':'grayscale(0)'})

    }

    if(practice_calculator.globalVariable.tipsInfoOn) {

        $('#tipsInfoButton').css({'background-color':'darkgreen',
        'box-shadow': '0px 1px 0px 0px black', 'filter':'grayscale(0)'})

    }


}


$('#basicInfoButton').hover(
    function() {
        $(this).css({'transition':'0.1', 'background-color':'darkred'});
    },
    function() {
        if(!practice_calculator.globalVariable.basicInfoOn) {
            $(this).css({'transition':'0.1', 'background-color':'darkgreen'});
        }
    }
);

$('#payoffInfoButton').hover(
    function() {
        $(this).css({'transition':'0.1', 'background-color':'darkred'});
    },
    function() {
        if(!practice_calculator.globalVariable.payoffInfoOn) {
            $(this).css({'transition':'0.1', 'background-color':'darkgreen'});
        }
    }
);

$('#strategyInfoButton').hover(
    function() {
        $(this).css({'transition':'0.1', 'background-color':'darkred'});
    },
    function() {
        if(!practice_calculator.globalVariable.strategyInfoOn) {
            $(this).css({'transition':'0.1', 'background-color':'darkgreen'});
        }
    }
);

$('#tipsInfoButton').hover(
    function() {
        $(this).css({'transition':'0.1', 'background-color':'darkred'});
    },
    function() {
        if(!practice_calculator.globalVariable.tipsInfoOn) {
            $(this).css({'transition':'0.1', 'background-color':'darkgreen'});
        }
    }
);




practice_calculator.spinButtonActivated = true;

$('#spinImage23').click(function() {

    if(practice_calculator.spinButtonActivated) {

        practice_calculator.spinButtonActivated = false;

        practice_calculator.globalVariable.aBitOfWaitingIsDone = false;
        practice_calculator.globalVariable.dynamicDisplay = false;

        practice_calculator.button.display.spinTop(false);
        practice_calculator.button.display.spinBottom(false);

        $('#spinImage23').css({'filter':'opacity(0)', 'transform':'scale(0)'});



        practice_calculator.wheel.spin();

    }


})


$('.clearImageButton').click(function() {


    if(practice_calculator.focusOnContest) {

        $('.practiceMainWrap').css({'transition':'1s', 'margin-top':'0px'})

        practice_calculator.results.hide.followerOutcomesBottom();
        practice_calculator.globalVariable.hover.hsResults = 0;
        $('.payoffWrap, .fNetPayoffText, .fResults, .leftSideResult, .rightSideResult, .leftSidePrize, .rightSidePrize, .leftSideRole, .rightSideRole').css({'transition-delay':'0s', 'transition' : '1s', 'opacity':'0'});
        practice_calculator.globalVariable.hover.cResults = 0;
        practice_calculator.noResults = true;

        $('.clearImageButtonSubWrap').css({'opacity':'0'});
        setTimeout(()=>{
            $('.clearImageButtonSubWrap').css({'display':'none'});
        }, 1100)


    } else {

        $('.practiceMainWrap').css({'transition':'1s', 'margin-top':'-50px'})

        practice_calculator.results.hide.followerOutcomesBottom();
        practice_calculator.globalVariable.hover.hsResults = 0;
        $('.payoffWrap, .fNetPayoffText, .fResults, .leftSideResult, .rightSideResult, .leftSidePrize, .rightSidePrize, .leftSideRole, .rightSideRole').css({'transition-delay':'0s', 'transition' : '1s', 'opacity':'0'});
        practice_calculator.globalVariable.hover.cResults = 0;
        practice_calculator.noResults = true;


        $('.clearImageButtonSubWrap').css({'opacity':'0'});
        setTimeout(()=>{
            $('.clearImageButtonSubWrap').css({'display':'none'});
        }, 1100)

    }


})
