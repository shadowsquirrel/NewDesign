
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////
////////////////////////////// CALCULATOR /////////////////////////////////////

var calculator = {

    globalVariable: {
        frame: {},
        tutorial: {},
        display: {},
        hover: {},
    },
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
        enable: {},
        disable: {},
        display: {},
    },
    pointers: {
        wiggle: {},
        activate: {},
    },
    section: {
        example:{
            vertical:{},
            horizontal: {},
        },
        all:{
            adjust: {},
        },
        hs: {
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
    refresh: {},
    wheel: {},
    setup: {},
    roll: {
        manual:{},
    },
    show: {},
    hide: {},
    introduce: {},
    animate: {
        global: {},
        change: {},
    },
    change: {},
    tutorial: {}

};

/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////



var efo, oefo, efi, oefi, pwin, efefo, oefefo;
var s1, h1, s2, h2, ts, th, os1, oh1, os2, oh2, tos, toh;

// unused
calculator.globalVariable.gameStage = undefined;


calculator.globalVariable.isOG1 = undefined;
calculator.globalVariable.isOG2 = undefined;
calculator.globalVariable.isIGA = undefined;
calculator.globalVariable.isIGB = undefined;

calculator.globalVariable.ourFollowersAreHetero = true;
calculator.globalVariable.theirFollowersAreHetero = true;

calculator.globalVariable.winnerLeaderIndex = 2;
calculator.globalVariable.winnerFollowerIndex = 1;

calculator.globalVariable.playerView = false;
calculator.globalVariable.playerIndex = undefined; //-1,0,1 (l,f1,f2)

calculator.globalVariable.tutorial.IGSameColor = undefined;
calculator.globalVariable.tutorial.IGDifferentColor = undefined;
calculator.globalVariable.tutorial.weAreInTutorial = undefined;


// RESULT DISPLAY ON/OFF VARIABLES (AFTER SPIN)
calculator.globalVariable.display.hsIcons = undefined;
calculator.globalVariable.display.hsResults = undefined;
calculator.globalVariable.display.hsMainTitle = undefined;
calculator.globalVariable.display.hsGhostTitle = undefined;
calculator.globalVariable.display.hsButton = undefined;
calculator.globalVariable.display.hsMinimize = undefined;

calculator.globalVariable.display.cResults = undefined;
calculator.globalVariable.display.cTitle = undefined;
calculator.globalVariable.display.cButton = undefined;
calculator.globalVariable.display.cMinimize = undefined;

calculator.globalVariable.contestResultsExist = false;

// HOVER ON/OFF VARIABLES
calculator.globalVariable.hover.hsMinimize = undefined;
calculator.globalVariable.hover.hsIcons = undefined;
calculator.globalVariable.hover.hsResults = undefined;
calculator.globalVariable.hover.hsMainTitle = undefined;
calculator.globalVariable.hover.hsGhostTitle = undefined;
calculator.globalVariable.hover.hsButton = undefined;

calculator.globalVariable.hover.cMinimize = undefined;
calculator.globalVariable.hover.cResults = undefined;
calculator.globalVariable.hover.cTitle = undefined;
calculator.globalVariable.hover.cButton = undefined;

calculator.decisionSlider.leader.isFlashing;


calculator.graphics.dynamicPowerBarText;



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


calculator.wheel.spinDuration = 1;
calculator.wheel.spinNumber = 3;
calculator.wheel.isSpinning = false;

calculator.wheel.create = function(probability, id) {

    var a = 100*probability;
    var b = 100-a;

    var leaderColorArray = ['rgb(60,60,60)', 'rgb(210,210,210)'];

    var followerAColorArray = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];
    var followerBColorArray = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];
    var colors;

    var lineColor = 'white';
    var lineWidth = 1;

    if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
        leaderColorArray = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
    }

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                followerAColorArray = ['rgb(60,60,60)', 'rgb(210,210,0)'];
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,0)'];
            }
        }

    }


    // no need to account for subjective view setup as the default setup is for the subjective view

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                followerAColorArray = ['rgb(60,60,60)', 'rgb(60,60,60)'];
            }
            if(calculator.globalVariable.isIGB) {
                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,210)'];
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                followerAColorArray = ['rgb(60,60,60)', 'rgb(210,210,0)'];
            }
            if(calculator.globalVariable.isIGB) {
                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,0)'];
            }
        }

    }

    //---- only for tutorial ----//

    //---------------------------//


    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {
        colors = leaderColorArray;
    }

    if(calculator.globalVariable.isIGA) {
        colors = followerAColorArray;
    }

    if(calculator.globalVariable.isIGB) {
        colors = followerBColorArray;
    }

    calculator.wheel.myWheelObj = new Winwheel({
        'canvasId': id,
        'numSegments': 2,
        'lineWidth' : lineWidth,
        'outerRadius': 58, // controls the size of the theWheel
        'textOrientation' : 'curved',    // Set orientation. horizontal, vertical, curved.
        'textFontFamily'  : 'Courier',     // Monospace font best for vertical and curved.
        'rotationAngle':Math.random()*360,
        'textFontSize':20,

        'segments':
        [
            {
                'fillStyle' : colors[0],
                'strokeStyle':lineColor,
                // 'textFillStyle': 'white',
                // 'text'      : 'A wins',
                'size'      : winwheelPercentToDegrees(a),
            },
            {
                'fillStyle' : colors[1],
                'strokeStyle':lineColor,
                // 'textFillStyle': 'rgb(60, 60, 60)',
                // 'text'      : 'B wins',
                'size'      : winwheelPercentToDegrees(b),
            },
        ],
        'animation' :
        {
            'type'     : 'spinToStop',
            'duration' : calculator.wheel.spinDuration,
            'spins'    : calculator.wheel.spinNumber,
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
calculator.globalVariable.pieBorderRight = false;
calculator.globalVariable.pieBorderLeft = false;
calculator.graphics.update.pie = function() {

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
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                fcolors = ['rgb(60,60,60)', 'rgb(60,60,60)'];
            }
            if(calculator.globalVariable.isIGB) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,210)'];
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                fcolors = ['rgb(210,210,0)', 'rgb(60,60,60)'];
            }
            if(calculator.globalVariable.isIGB) {
                ofcolors = ['rgb(210,210,0)', 'rgb(210,210,210)'];
            }
        }

    }
    //---- only for tutorial ----//

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                fcolors = ['rgb(60,60,60)', 'rgb(210,210,0)'];
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,0)'];
            }
        }

    }

    //---------------------------//


    if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
        lcolors = ['rgb(210, 210, 210)', 'rgb(35, 79, 30)'];
    }


    var p1, p2;

    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

        pieColors = lcolors;

        p1 = 'LEADER A';
        p2 = 'LEADER B';

    }

    if(calculator.globalVariable.isIGA) {

        pieColors = fcolors;

        p1 = 'FOLLOWER 1A';
        p2 = 'FOLLOWER 2A';

        if(calculator.globalVariable.ourFollowersAreHetero) {

            p1 = 'STRONG F.';
            p2 = 'WEAK F.';

            if(calculator.globalVariable.playerIndex === 1) {
                p1 = 'WEAK F.';
                p2 = 'STRONG F.';
            }

        }

    }

    // RELEVANT ONLY FOR TUTORIAL
    if(calculator.globalVariable.isIGB) {

        pieColors = ofcolors;

        p1 = 'FOLLOWER 1B';
        p2 = 'FOLLOWER 2B';

        if(calculator.globalVariable.theirFollowersAreHetero) {

            p1 = 'STRONG F.';
            p2 = 'WEAK F.';

            if(calculator.globalVariable.playerIndex === 1) {

                p1 = 'WEAK F.';
                p2 = 'STRONG F.';

            }

        }

    }


    var pieBorderArray = Array(2);
    pieBorderArray = [1,1];
    var pieBorderColor = 'white';

    if(calculator.globalVariable.pieBorderLeft) {
        pieBorderArray = [0,3];
        pieBorderColor = 'lime';
    }
    if(calculator.globalVariable.pieBorderRight) {
        pieBorderArray = [3,0];
        pieBorderColor = 'lime';
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
                color: pieBorderColor,
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
calculator.graphics.update.effortBar = function(e, barId, ourSide, axisOn) {

    var y = e;
    if(typeof(x) === 'undefined') x = 0;

    var upperBound, myTickVal, myTickText, myRange;

    var colorArrays = Array(2);
    var insideTextColor = Array(2);

    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

        colorArrays = ['rgb(60, 60, 60)', 'rgb(210, 210, 210)'];
        upperBound = 742;
        myTickVal = [0, 50, 100, 150, 250, 350, 500, 650, 800];
        myTickText = [0, 50, 100, 150, 250, 350, 500, 650, 800];
        myRange = [0, 800];
        insideTextColor = ['white', 'black'];

        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
            colorArrays[0] = 'rgb(35, 79, 30)';
        }

    }

    if(calculator.globalVariable.isIGA || calculator.globalVariable.isIGB) {

        upperBound = 128;
        myTickVal = [0, 5, 10, 20, 30, 50, 75, 100, 140];
        myTickText = [0, 5, 10, 20, 30, 50, 75, 100, 140];
        myRange = [0, 140];

    }

    if(calculator.globalVariable.isIGA) {

        colorArrays = ['rgb(35, 79, 30)', 'rgb(60, 60, 60)'];
        insideTextColor = ['white', 'white'];

    }

    if(calculator.globalVariable.isIGB) {

        colorArrays = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
        insideTextColor = ['white', 'black'];

    }

    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                colorArrays = ['rgb(60,60,60)', 'rgb(60,60,60)'];
                insideTextColor = ['white', 'white'];
            }
            if(calculator.globalVariable.isIGB) {
                colorArrays = ['rgb(210,210,210)', 'rgb(210,210,210)'];
                insideTextColor = ['black', 'black'];
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                colorArrays = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                insideTextColor = ['white', 'black'];
            }
            if(calculator.globalVariable.isIGB) {
                colorArrays = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                insideTextColor = ['black', 'black'];
            }
        }

    }
    //---- only for tutorial ----//

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                colorArrays = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                insideTextColor = ['white', 'black'];
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
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

    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

        if(barId === 'barl1'){//darkgray white //NEED TO DO FOR 4 OTHER IDS
            pindex=0;
            tindex=1;

            if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
                pindex = 3;
            }
        }

        if(barId === 'barl2'){
            //lightgray black
            pindex=1;
            tindex=0;
        }

    }



    if(calculator.globalVariable.isIGA) {

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

    if(calculator.globalVariable.isIGB) {

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

calculator.graphics.update.effortSliderRange = function() {

    var myMax;

    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {
        myMax = 800;
    }
    if(calculator.globalVariable.isIGA || calculator.globalVariable.isIGB) {
        myMax = 140;
    }

    $("#lSlider1, #olSlider1, #dSliderL").attr({
        "max" : myMax,
        "min" : 0
    });

}


// USES calculator.globalVariable.typeOfContest TO DETErmine leader slider colors
// it is not concerned with the me coloring but leader vs leader or
// follower vs follower for either group ig slider top coloring
// it also updates the slider range for type of contest
// it also determines the resulting text's tag as this is dependent on leader or follower
calculator.graphics.update.contestSliderBackgroundColor = function() {


    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

        $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
        $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
            $('.bswLeft').css({'background-color': 'rgb(35, 79, 30)'});
        }

    }

    if(calculator.globalVariable.isIGA) {

        $('.bswLeft').css({'background-color':'rgb(18,103,48)', 'color':'white'});
        $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

    }

    if(calculator.globalVariable.isIGB) {

        $('.bswLeft').css({'background-color':'rgb(18,103,48)', 'color':'white'});
        $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

    }

    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});
            }
            if(calculator.globalVariable.isIGB) {
                $('.bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});
            }
            if(calculator.globalVariable.isIGB) {
                $('.bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});
            }
        }

    }
    //---- only for tutorial ----//

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                $('.bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                $('.bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});
            }
        }

    }

    //---------------------------//


}


//-------------- HELP SABO BARS ----------------//
calculator.graphics.update.helpSaboBar = function(a, barId, lighter, axisOn) {

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
        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === 1) {
            pindex = 0;
        }
    }
    if(barId === 'barf1' ){//darkgray or darkgreen and  white
        tindex = 1;
        pindex = 1;
        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === 0) {
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

calculator.graphics.update.totalHelpBar = function(a,b) {
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

calculator.graphics.update.totalSaboBar = function(a, b) {
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

calculator.decisionSlider.follower.isFlashing = true;
calculator.decisionSlider.follower.flash = function(state) {

    if(calculator.decisionSlider.follower.isFlashing) {

        if(state === 0) {
            $('.inputF').css({'transition':'0.7s', 'box-shadow':'0px 0px 10px 5px orange'});
            if(calculator.globalVariable.playerIndex === 0) {
                $('.bf1').css({'transition':'0.7s', 'box-shadow':'0px 0px 10px 5px orange'});
            }
            if(calculator.globalVariable.playerIndex === 1) {
                $('.bf2').css({'transition':'0.7s', 'box-shadow':'0px 0px 10px 5px orange'});
            }
            setTimeout(()=>calculator.decisionSlider.follower.flash(1), 700);
        }
        if(state === 1) {
            $('.inputF').css({'transition':'0.7s', 'box-shadow':'0px 0px 0px 0px orange'});
            if(calculator.globalVariable.playerIndex === 0) {
                $('.bf1').css({'transition':'0.7s', 'box-shadow':'0px 0px 0px 0px orange'});
            }
            if(calculator.globalVariable.playerIndex === 1) {
                $('.bf2').css({'transition':'0.7s', 'box-shadow':'0px 0px 0px 0px orange'});
            }
            setTimeout(()=>calculator.decisionSlider.follower.flash(0), 700);
        }

    } else {
        $('.inputF').css({'transition':'0.7s', 'box-shadow':'0px 0px 4px 2px lime'});

        if(calculator.globalVariable.playerIndex === 0) {
            $('.bf1').css({'transition':'0.7s', 'box-shadow':'0px 0px 4px 2px lime'});
        }
        if(calculator.globalVariable.playerIndex === 1) {
            $('.bf2').css({'transition':'0.7s', 'box-shadow':'0px 0px 4px 2px lime'});
        }

    }

}

calculator.decisionSlider.follower.helpSaboBar = function(a, axisOn) {

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

calculator.decisionSlider.follower.enable = function() {
    $('.decisionWrapF').css({'display':'flex'});
}

calculator.decisionSlider.follower.disable = function() {
    $('.decisionWrapF').css({'display':'none'});
}


//-------------- DECISION SLIDER LEADER ----------------//
calculator.decisionSlider.leader.effortBar = function(a, axisOn) {


        var y = a;

        var upperBound, myTickVal, myTickText, myRange;

        var colorArrays = Array(1);
        var insideTextColor = Array(1);

        colorArrays = ['rgb(35, 79, 30)'];
        insideTextColor = ['white'];

        if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

            upperBound = 742;
            myTickVal = [0, 50, 100, 150, 250, 350, 500, 650, 800];
            myTickText = [0, 50, 100, 150, 250, 350, 500, 650, 800];
            myRange = [0, 800];

        }

        if(calculator.globalVariable.isIGA || calculator.globalVariable.isIGB) {

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

calculator.decisionSlider.leader.enable = function() {
    $('.decisionWrapL').css({'display':'flex'});
}

calculator.decisionSlider.leader.disable = function() {
    $('.decisionWrapL').css({'display':'none'});
}


//-------------- POWER RATIO BAR ----------------//
calculator.graphics.activate.dynamicPowerBarText = function(place) {

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

calculator.globalVariable.powerBarRight = false;
calculator.globalVariable.powerBarLeft = false;

calculator.graphics.update.efficiencyBar = function(efficiency1, efficiency2) {

    var efi1, efi2;
    efi1 = efficiency1 != undefined ? efficiency1 : efi;
    efi2 = efficiency2 != undefined ? efficiency2 : oefi;

    var val1 = efi1 / (efi1 + efi2);
    var val2 = efi2 / (efi1 + efi2);

    if(!calculator.graphics.dynamicPowerBarText) {

        calculator.graphics.activate.dynamicPowerBarText();

    }

    if(efi1 === efi2 && calculator.graphics.dynamicPowerBarText) {

        calculator.graphics.activate.dynamicPowerBarText('middle');

    }

    if((efi1 / efi2) > 1){
        var myText = (val1 >= 0.99) ? '100+' : (efi1 / efi2).toFixed(2);
        if(calculator.graphics.dynamicPowerBarText) {
            calculator.graphics.activate.dynamicPowerBarText('left');
        }
    } else {
        myText = 1;
    }

    if((efi1 / efi2) < 1){
        var myText2 = (val2 >= 0.99) ? '100+' : (efi2 / efi1).toFixed(2);
        if(calculator.graphics.dynamicPowerBarText) {
            calculator.graphics.activate.dynamicPowerBarText('right');
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

    if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {
        lcolors = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
    }

    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                fcolors = ['rgb(60,60,60)', 'rgb(60,60,60)'];
            }
            if(calculator.globalVariable.isIGB) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,210)'];
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                fcolors = ['rgb(210,210,0)', 'rgb(60,60,60)'];
            }
            if(calculator.globalVariable.isIGB) {
                ofcolors = ['rgb(210,210,0)', 'rgb(210,210,210)'];
            }
        }

    }
    //---- only for tutorial ----//

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                fcolors = ['rgb(60,60,60)', 'rgb(210,210,0)'];
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,0)'];
            }
        }

    }

    //---------------------------//


    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {
        cA = lcolors;
    }
    if(calculator.globalVariable.isIGA) {
        cA = fcolors;
    }
    if(calculator.globalVariable.isIGB) {
        cA = ofcolors;
    }

    var myLineWith1 = 0;
    var myLineWith2 = 0;

    if(calculator.globalVariable.powerBarLeft) {
        myLineWith1 = 4
    }
    if(calculator.globalVariable.powerBarRight) {
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
calculator.graphics.update.barLabelX = function(barId, show) {
    var update = {
        'xaxis.showticklabels': show
    };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.barGridX = function(barId, show) {
    var update = {
        'xaxis.showgrid': show
        };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.barLabelY = function(barId, show) {
    var update = {
        'yaxis.showticklabels': show
    };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.barGridY = function(barId, show) {
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
calculator.values.update.totalHelpSabo = function() {

    th = h1 + h2;
    ts = s1 + s2;
    toh = oh1 + oh2;
    tos = os1 + os2;

    // update total help sabo graphics
    calculator.graphics.update.totalHelpBar(th, toh);
    calculator.graphics.update.totalSaboBar(ts, tos);

    calculator.icons.update.leaderAuraColor();
    calculator.icons.update.followerArrows();
    calculator.icons.update.leaderSize();


}


//----- CALCULATE LEADER EFFICINCIES -----//
// VALUES: values.update.totalHelpSabo()
// GRAPHICS: graphics.update.efficiencyBar()
calculator.values.update.efficiencies = function() {

    calculator.values.update.totalHelpSabo();

    efi = (1 + th) / (1 + ts);
    oefi = (1 + toh) / (1 + tos);

    calculator.graphics.update.efficiencyBar();

}


//----- CALCULATE PROBABILITIES GIVEN EFFICIENCIES -----//
// Does not call values.efficiencies takes it as given
// GRAPHICS: graphics.update.pie()
calculator.values.update.probability = function() {

    efefo = efo * efi;
    oefefo = oefo * oefi;
    pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));

    calculator.graphics.update.pie();

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


// Decision Sliders

//FOLLOWER HELP AND SABOTAGE
calculator.slider.followerDecision.helpSabo = document.getElementById('dSliderF');
calculator.slider.followerDecision.helpSabo.oninput = function() {

    calculator.wheel.hide();

    // get the value from the slider
    var dValue = parseFloat(calculator.slider.followerDecision.helpSabo.value);

    // update bar plot
    calculator.decisionSlider.follower.helpSaboBar(dValue, true);

    // SYNC HELP SABO VALUES AND HELP SABO BARS GIVEN FOLLOWER INDEX

    // if you are the first follower (strong)
    if(calculator.globalVariable.playerIndex === 0) {

        //convert it to sabotage or help of follower 1
        s1 = dValue >= 0 ? 0 : -dValue;
        h1 = dValue >= 0 ? dValue : 0;

        //synching sliders with follower 1 slider
        $('#vSlider1').prop('value', dValue);
        $('#vSlider1').change();

        // call update.bar for hs for follower 1
        calculator.graphics.update.helpSaboBar(dValue, 'barf1', false, false);

    }

    //if you are the second follower (weak)
    if(calculator.globalVariable.playerIndex === 1) {

        //convert it to sabotage or help of follower 2
        s2 = dValue >= 0 ? 0 : -dValue;
        h2 = dValue >= 0 ? dValue : 0;

        //synching sliders with follower 2 slider
        $('#vSlider2').prop('value', dValue);
        $('#vSlider2').change();

        // call update.bar for hs for follower 2
        calculator.graphics.update.helpSaboBar(dValue, 'barf2', false, false);

    }

    calculator.values.update.efficiencies();
    calculator.values.update.probability();
    calculator.results.update.allTextAndColors();


    //WILL ADD AN ACTIVE WIGGLE SWITCH OFF HERE

}

// Decision Sliders

// EFFORT

calculator.slider.playerDecision.effort = document.getElementById('dSliderL');
calculator.slider.playerDecision.effort.oninput = function() {


    calculator.wheel.hide();


    // get the value from the slider
    efo = parseFloat(calculator.slider.playerDecision.effort.value);


    // update bar plot
    calculator.decisionSlider.leader.effortBar(efo, true);


    // slider sync
    $('#lSlider1').prop('value', efo);
    $('#lSlider1').change();


    // bar plot sync
    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.effortBar(efo, 'barl1', ourSide, !showAxis)


    calculator.values.update.efficiencies();
    calculator.values.update.probability();
    calculator.results.update.allTextAndColors();


    //WILL ADD AN ACTIVE WIGGLE SWITCH OFF HERE


}

//--------------------------------------//

calculator.tutorial.sliderResultHideInteractionIsOn = false;


//Player 1
calculator.slider.l1= document.getElementById('lSlider1');
calculator.slider.l1.oninput = function() {

    if(calculator.tutorial.sliderResultHideInteractionIsOn) {
        if(!calculator.lc2_6_listener) {
            calculator.results.hide.leaderOutcomes()
        } else {
            $('.payoffWrap').css({'opacity':'1'});

            calculator.results.leader.display.investment(1);
            calculator.results.leader.display.netPayoff(0);
            calculator.results.leader.display.role(0);
            calculator.results.leader.display.prize(0);
            $('.resultLeft, .resultRight').css({'opacity':'0'})
            $('.tokenTag').css({'opacity':'1', 'display':'inline'})
            minResult();
        }

    }



    calculator.globalVariable.enervateIsActive = false;
    // calculator.roll.displayTime = 10000;
    calculator.globalVariable.mouseWasAlreadyUpOnce = false;

    calculator.wheel.hide();

    efo = parseFloat(calculator.slider.l1.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.effortBar(efo, 'barl1', ourSide, showAxis);

    calculator.results.update.allTextAndColors();

    calculator.graphics.update.barLabelX('barl1', true);

    calculator.values.update.probability();

    calculator.pointers.switches[0] = false;

    // slider sync
    $('#dSliderL').prop('value', efo);
    $('#dSliderL').change();

    calculator.decisionSlider.leader.effortBar(efo, true);

}

//Player 2
calculator.slider.l2 = document.getElementById('olSlider1');
calculator.slider.l2.oninput = function() {

    if(calculator.tutorial.sliderResultHideInteractionIsOn) {
        if(!calculator.lc2_6_listener) {
            calculator.results.hide.leaderOutcomes()
        } else {
            $('.payoffWrap').css({'opacity':'1'});

            calculator.results.leader.display.investment(1);
            calculator.results.leader.display.netPayoff(0);
            calculator.results.leader.display.role(0);
            calculator.results.leader.display.prize(0);
            $('.resultLeft, .resultRight').css({'opacity':'0'})
            $('.tokenTag').css({'opacity':'1', 'display':'inline'})
            minResult();
        }
    }

    calculator.globalVariable.enervateIsActive = false;
    // calculator.roll.displayTime = 10000;
    calculator.globalVariable.mouseWasAlreadyUpOnce = false;

    calculator.wheel.hide();

    oefo = parseFloat(calculator.slider.l2.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.effortBar(oefo, 'barl2', !ourSide, showAxis);

    calculator.results.update.allTextAndColors();

    calculator.values.update.probability();

    calculator.graphics.update.barLabelX('barl2', true);

    calculator.pointers.switches[1] = false;

}


// Help Sabotage Section

// LEFT SIDE

calculator.helpSaboHideResults = false;

// Follower 1
calculator.slider.f1= document.getElementById('vSlider1');
calculator.slider.f1.oninput = function() {

    if(calculator.helpSaboHideResults) {
        calculator.results.hide.leaderOutcomes();
    }


    calculator.globalVariable.enervateIsActive = false;
    // calculator.roll.displayTime = 10000;
    calculator.globalVariable.mouseWasAlreadyUpOnce = false;

    calculator.graphics.update.barLabelY('barf1', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.f1.value);

    s1 = hsValue > 0 ? 0 : -hsValue;
    h1 = hsValue > 0 ? hsValue : 0;

    calculator.values.update.efficiencies();

    calculator.values.update.probability();

    calculator.graphics.update.helpSaboBar(hsValue, 'barf1', !theirSide, showAxis);

    calculator.results.update.allTextAndColors();

    // tutorial specific method only active if calculator.introduce.costsAreDisplayed
    if(!calculator.tutorial.showNetpayoff){
        calculator.introduce.costs();
    }

    calculator.pointers.switches[2] = false;

    // SYNC WITH THE DECISION SLIDER IF IT IS A MATCH
    // if you are the first follower (strong)
    if(calculator.globalVariable.playerIndex === 0) {

        //update decision slider
        calculator.decisionSlider.follower.helpSaboBar(hsValue, false);

        //synching sliders with d slider
        $('#dSliderF').prop('value', hsValue);
        $('#dSliderF').change();

    }

}

// Follower 2
calculator.slider.f2= document.getElementById('vSlider2');
calculator.slider.f2.oninput = function() {

    calculator.globalVariable.enervateIsActive = false;
    // calculator.roll.displayTime = 10000;
    calculator.globalVariable.mouseWasAlreadyUpOnce = false;

    calculator.graphics.update.barLabelY('barf2', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.f2.value);

    s2 = hsValue > 0 ? 0 : -hsValue;
    h2 = hsValue > 0 ? hsValue : 0;

    calculator.values.update.efficiencies();
    calculator.values.update.probability();

    calculator.graphics.update.helpSaboBar(hsValue, 'barf2', !theirSide, showAxis);
    calculator.results.update.allTextAndColors();
    // tutorial specific method only active if calculator.introduce.costsAreDisplayed
    if(!calculator.tutorial.showNetpayoff){
        calculator.introduce.costs();
    }

    calculator.pointers.switches[3] = false;

    // SYNC WITH THE DECISION SLIDER IF IT IS A MATCH
    // if you are the second follower (weak)
    if(calculator.globalVariable.playerIndex === 1) {

        //update decision slider
        calculator.decisionSlider.follower.helpSaboBar(hsValue, false);

        //synching sliders with d slider
        $('#dSliderF').prop('value', hsValue);
        $('#dSliderF').change();

    }

}

// RIGHT SIDE

// Follower 1
calculator.slider.of1= document.getElementById('ovSlider1');
calculator.slider.of1.oninput = function() {

    calculator.globalVariable.enervateIsActive = false;
    // calculator.roll.displayTime = 10000;
    calculator.globalVariable.mouseWasAlreadyUpOnce = false;

    calculator.graphics.update.barLabelY('obarf1', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.of1.value);

    os1 = hsValue > 0 ? 0 : -hsValue;
    oh1 = hsValue > 0 ? hsValue : 0;

    calculator.values.update.efficiencies();

    calculator.values.update.probability();

    calculator.graphics.update.helpSaboBar(hsValue, 'obarf1', theirSide, showAxis);

    calculator.results.update.allTextAndColors();
    // tutorial specific method only active if calculator.introduce.costsAreDisplayed
    if(!calculator.tutorial.showNetpayoff){
        calculator.introduce.costs();
    }

    calculator.pointers.switches[4] = false;

}

// Follower 2
calculator.slider.of2= document.getElementById('ovSlider2');
calculator.slider.of2.oninput = function() {

    calculator.globalVariable.enervateIsActive = false;
    // calculator.roll.displayTime = 10000;
    calculator.globalVariable.mouseWasAlreadyUpOnce = false;

    calculator.graphics.update.barLabelY('obarf2', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.of2.value);

    os2 = hsValue > 0 ? 0 : -hsValue;
    oh2 = hsValue > 0 ? hsValue : 0;

    calculator.values.update.efficiencies();

    calculator.values.update.probability();

    calculator.graphics.update.helpSaboBar(hsValue, 'obarf2', theirSide, showAxis);

    calculator.results.update.allTextAndColors();
    // tutorial specific method only active if calculator.introduce.costsAreDisplayed
    if(!calculator.tutorial.showNetpayoff){
        calculator.introduce.costs();
    }

    calculator.pointers.switches[5] = false;

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

//----- LEADER DECISION SLIDER ------//

$('#dSliderL').hover(
    function() {

        setTimeout(()=>calculator.graphics.update.barLabelX('bardl', true), 150);


        calculator.globalVariable.pieBorderLeft = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderLeft = true;
        calculator.icons.enervate.leaderLeft(0);
        calculator.globalVariable.enervate2LeaderLeft = false;

        $('.activeLeaderLeft').css({'opacity':'1'});
        $('.passiveLeaderLeft').css({'opacity':'0'});

        $('.bswLeft').css({'box-shadow':'0px 0px 1px 4px lime'});


    },
    function() {

        setTimeout(()=>calculator.graphics.update.barLabelX('bardl', false), 150);
        calculator.graphics.update.barGridX('bardl', false);

        calculator.globalVariable.pieBorderLeft = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderLeft = false;
        calculator.globalVariable.enervate2LeaderLeft = true;
        calculator.icons.enervate2.leaderLeft(0);

        $('.activeLeaderLeft').css({'opacity':'0'});
        $('.passiveLeaderLeft').css({'opacity':'1'});

        $('.bswLeft').css({'box-shadow':'0px 1px 1px 0px black'});

    }
)

$('.inputL').hover(

    function() {

        // even the follower results are not shown make sure to display the ghost title for contest on top of leader icons
        if(!calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen) {

            if(calculator.globalVariable.hover.hsGhostTitle){
                calculator.titles.hs.ghost.text();
                calculator.titles.hs.ghost.show();
            }

        }

        if(calculator.globalVariable.dynamicDisplay && !calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen && calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

            if(calculator.globalVariable.hover.hsGhostTitle){
                calculator.titles.hs.ghost.text();
                calculator.titles.hs.ghost.show();
            }

        }

        // hs title
        if(calculator.globalVariable.hover.hsMainTitle){
            calculator.titles.hs.hide();
        }

        // contest maximize
        if(calculator.globalVariable.hover.cMinimize && !calculator.globalVariable.closedDecisionCalculator) {
            calculator.section.contest.minimize(false);
        }



        // hs minimize
        if(calculator.globalVariable.hover.hsMinimize) {
            calculator.section.hs.minimize(true);
        }

        // hs icon
        if(calculator.globalVariable.hover.hsIcons){
            calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
            calculator.section.hs.opacity.SFiALiFiS([0,0,1,1,1,0]);
            calculator.section.hs.set.iconPosition('bottom');
        }

        // hs button
        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(false);
        }

        calculator.globalVariable.enervate2LeaderLeft = true;
        calculator.icons.enervate2.leaderLeft(0);

        $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1.1)'});


        // hs results
        if(calculator.globalVariable.hover.hsResults){
            calculator.results.hide.followerOutcomesAll();
        }

        if(!calculator.globalVariable.closedDecisionCalculator) {

            // hide contest title and results drag the top to decision slider
            $('.payoffWrap, .imageWrap23').css({'transition' : '0.15s', 'opacity':'0'});
            calculator.space.contestResultsIsOpen = false;
            calculator.space.update.heights();
            $('.generalMarginBox').css({'margin-top':'73px'});

        }

        calculator.button.display.spinBottom(false);

        calculator.decisionSlider.leader.isFlashing = false;



    },
    function() {

        calculator.globalVariable.enervate2LeaderLeft = false;

        $('.decisionWrapL').css({'transition':'0.3s', 'transform':'scale(1)'});
        $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1)'});

        if(calculator.globalVariable.hover.cTitle && !calculator.globalVariable.closedDecisionCalculator) {


            $('.payoffWrap, .imageWrap23').css({'transition' : '0.15s', 'opacity':'1'});
            calculator.space.contestResultsIsOpen = true;

            if(!calculator.globalVariable.contestResultsExist) {
                $('.payoffWrap').css({'transition' : '0s', 'opacity':'0'});
            }

            $('.generalMarginBox').css({'margin-top':'-77px'});

            calculator.space.update.heights();


            if(calculator.globalVariable.hover.cButton) {
                calculator.button.display.spinBottom(true);
            }

        }

    }

)

//----- FOLLOWER DECISION SLIDER ------//

$('#dSliderF').hover(
    function() {

        setTimeout(()=>calculator.graphics.update.barLabelX('bardf', true), 150);

        calculator.globalVariable.pieBorderLeft = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = true;
        calculator.graphics.update.efficiencyBar();

        if(calculator.globalVariable.playerIndex === 0) {
            calculator.section.hs.opacity.activeFollowerIcon('spf1L11', true)
            calculator.globalVariable.enervateFollowerF1 = true;
        }

        if(calculator.globalVariable.playerIndex === 1) {
            calculator.section.hs.opacity.activeFollowerIcon('spf1L12', true);
            calculator.globalVariable.enervateFollowerF2 = true;
        }

    },
    function() {

        calculator.globalVariable.pieBorderLeft = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = false;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelX('bardf', false), 150);
        calculator.graphics.update.barGridX('bardf', false);

        if(calculator.globalVariable.playerIndex === 0){
            calculator.section.hs.opacity.activeFollowerIcon('spf1L11', false)
            calculator.globalVariable.enervateFollowerF1 = false;
        }

        if(calculator.globalVariable.playerIndex === 1) {
            calculator.section.hs.opacity.activeFollowerIcon('spf1L12', false);
            calculator.globalVariable.enervateFollowerF2 = false;
        }


    }
)

$('.inputF').hover(

    function() {

        $('.decisionWrapF').css({'transition':'0.3s', 'transform':'scale(1.1)'});

        if(calculator.globalVariable.playerIndex === 0) {
            $('.bf1').css({'transition':'0.3s', 'box-shadow':'0px 0px 3px 3px lime', 'transform':'scale(1.04)'});
        }

        if(calculator.globalVariable.playerIndex === 1) {
            $('.bf2').css({'transition':'0.3s', 'box-shadow':'0px 0px 3px 3px lime', 'transform':'scale(1.04)'});
        }

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            calculator.results.hide.followerOutcomesBottom();
            calculator.results.hide.followerOutcomesTop();
            calculator.results.hide.leaderOutcomes();
            calculator.titles.hs.ghost.hide();
            calculator.titles.update.position();

        }

        if(calculator.globalVariable.aBitOfWaitingIsDone) {

            calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.5,0,1]);
            calculator.section.hs.set.iconPosition('center');
            calculator.titles.hs.ghost.hide();
            calculator.titles.hs.show();
            calculator.titles.update.position();

        }


        calculator.button.display.spinTop(false);
        // calculator.button.display.minTop(false);
        // calculator.button.disable.minTop();

        calculator.decisionSlider.leader.isFlashing = false;

    },
    function() {

        $('.decisionWrapF').css({'transition':'0.3s', 'transform':'scale(1)'});

        if(calculator.globalVariable.playerIndex === 0) {
            $('.bf1').css({'transition':'0.3s', 'box-shadow':'0px 0px 0px 0px black', 'transform':'scale(1)'});
        }

        if(calculator.globalVariable.playerIndex === 1) {
            $('.bf2').css({'transition':'0.3s', 'box-shadow':'0px 0px 0px 0px black', 'transform':'scale(1)'});
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

        calculator.globalVariable.pieBorderLeft = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderLeft = true;
        calculator.icons.enervate.leaderLeft(0);
        calculator.globalVariable.enervate2LeaderLeft = false;

        $('.activeLeaderLeft').css({'opacity':'1'});
        $('.passiveLeaderLeft').css({'opacity':'0'});

        $('.activeFollowerLeft').css({'opacity':'1'});
        $('.passiveFollowerLeft').css({'opacity':'0'});

        setTimeout(()=>calculator.graphics.update.barLabelX('barl1', true), 150);
        // calculator.questions.spin2.l1();

        },
    function() {

        calculator.globalVariable.pieBorderLeft = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderLeft = false;
        calculator.globalVariable.enervate2LeaderLeft = true;
        calculator.icons.enervate2.leaderLeft(0);

        $('.activeLeaderLeft').css({'opacity':'0'});
        $('.passiveLeaderLeft').css({'opacity':'1'});

        $('.activeFollowerLeft').css({'opacity':'0'});
        $('.passiveFollowerLeft').css({'opacity':'1'});

        setTimeout(()=>calculator.graphics.update.barLabelX('barl1', false), 400);
        calculator.graphics.update.barGridX('barl1', false);

    }
);

$('.bswLeft').hover(
    function() {

        calculator.globalVariable.enervate2LeaderLeft = true;
        calculator.icons.enervate2.leaderLeft(0);

        $('.l1vibrate').css({'transition':'0s', 'opacity':'0'});
        $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.bswLeft').css({'transition':'0.7s', 'box-shadow':'0px 6px 6px 2px black'});

        if(calculator.globalVariable.hover.cButton) {
            calculator.button.display.spinBottom(false);
        }

        calculator.questions.spin1.l1();

        if(calculator.lock.switch.all[0]) {
            $('.l1vibrate').css({'transition':'0.3s', 'opacity':'1'});
            calculator.lock.switch.l1 = true;
            calculator.lock.vibrate.l1(1);
        }

    },
    function() {

        calculator.globalVariable.enervate2LeaderLeft = false;

        $('.decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.bswLeft').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.bswLeft').css({'transition':'0.7s', 'box-shadow':'0px 1px 1px 0px black'});

        if(calculator.globalVariable.hover.cButton) {
            calculator.button.display.spinBottom(true);
        }

        calculator.questions.spin2.l1();
        calculator.lock.switch.l1 = false;
        calculator.lock.switch.example_l1 = false;

    }
);


//----- RIGHT HORIZONTAL SLIDER -----//

$('#olSlider1').hover(
    function() {

        calculator.globalVariable.pieBorderRight = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderRight = true;
        calculator.icons.enervate.leaderRight(0);

        calculator.globalVariable.enervate2LeaderRight = false;

        $('.activeLeaderRight').css({'opacity':'1'});
        $('.passiveLeaderRight').css({'opacity':'0'});

        $('.activeFollowerRight').css({'opacity':'1'});
        $('.passiveFollowerRight').css({'opacity':'0'});

        setTimeout(()=>calculator.graphics.update.barLabelX('barl2', true), 150);
        // calculator.questions.spin2.l2();

    },
    function() {

        calculator.globalVariable.pieBorderRight = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.enervateLeaderRight = false;
        calculator.globalVariable.enervate2LeaderRight = true;
        calculator.icons.enervate2.leaderRight(0);

        $('.activeLeaderRight').css({'opacity':'0'});
        $('.passiveLeaderRight').css({'opacity':'1'});

        $('.activeFollowerRight').css({'opacity':'0'});
        $('.passiveFollowerRight').css({'opacity':'1'});

        setTimeout(()=>calculator.graphics.update.barLabelX('barl2', false), 400);
        calculator.graphics.update.barGridX('barl2', false);

    }
);

$('.bswRight').hover(

    function() {

        calculator.globalVariable.enervate2LeaderRight = true;
        calculator.icons.enervate2.leaderRight(0);

        $('.l2vibrate').css({'transition':'0s', 'opacity':'0'});
        $('.bswRight').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.bswRight').css({'transition':'0.7s', 'box-shadow':'0px 6px 6px 2px black'});

        if(calculator.globalVariable.hover.cButton) {
            calculator.button.display.spinBottom(false);
        }

        calculator.questions.spin1.l2();

        if(calculator.lock.switch.all[1]) {
            $('.l2vibrate').css({'transition':'0.3s', 'opacity':'1'});
            calculator.lock.switch.l2 = true;
            calculator.lock.vibrate.l2(1);
        }

    },
    function() {

        calculator.globalVariable.enervate2LeaderRight = false

        $('.bswRight').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.bswRight').css({'transition':'0.7s', 'box-shadow':'0px 1px 1px 0px black'});

        if(calculator.globalVariable.hover.cButton) {
            calculator.button.display.spinBottom(true);
        }

        calculator.questions.spin2.l2();
        calculator.lock.switch.l2 = false;

    }

);



//------------------------------------------------//
//------------------------------------------------//
//------------- HELP SABOTAGE SECTION ------------//
//------------------------------------------------//
//------------------------------------------------//

//------ FOLLOWER 1 SLIDER ------//

$('#vSlider1').hover(
    function() {

        calculator.globalVariable.pieBorderLeft = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = true;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('barf1', true), 150);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L11', true);
        // calculator.questions.spin2.f1();
        calculator.globalVariable.enervateFollowerF1 = true;
        calculator.icons.enervate.followerF1(0);
        calculator.globalVariable.enervate2FollowerF1 = false;

        },

    function() {

        calculator.globalVariable.pieBorderLeft = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = false;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('barf1', false), 400);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L11', false);
        calculator.graphics.update.barGridY('barf1', false);

        calculator.globalVariable.enervateFollowerF1 = false;
        calculator.globalVariable.enervate2FollowerF1 = true;
        calculator.icons.enervate2.followerF1(0);

    }
);

$('.lbf1').hover(

    function() {

        if(box.button.btn_d13a_listenerOn){
            calculator.pointers.activate([0,0,0,0,0,0]);
            box.button.btn_d13a_listenerOn = false;
        }

        calculator.globalVariable.enervate2FollowerF1 = true;
        calculator.icons.enervate2.followerF1(0);

        $('#barf1').css({'transition':'0.7s', 'transform':'scale(1.04)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            if(calculator.globalVariable.hover.hsResults){
                calculator.results.hide.followerOutcomesBottom();
            }

        }

        calculator.questions.spin1.f1();

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(false);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(false);
            calculator.button.disable.minTop();
        }

        calculator.questions.spin1.f1();

        if(calculator.lock.switch.all[2]) {

            calculator.lock.switch.f1 = true;
            calculator.lock.vibrate.f1(1);

        }

    },
    function() {

        calculator.globalVariable.enervate2FollowerF1 = false;

        $('#barf1').css({'transition':'0.7s', 'transform':'scale(1)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            if(calculator.globalVariable.hover.hsResults){
                calculator.results.show.followerOutcomesBottom();
            }

        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(true);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(true);
            calculator.button.enable.minTop();
        }

        calculator.questions.spin2.f1();

        calculator.lock.switch.f1 = false;

    }

);


//-------- FOLLOWER 2 SLIDER ------//

$('#vSlider2').hover(
    function() {

        calculator.globalVariable.pieBorderLeft = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = true;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('barf2', true), 150);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L12', true);
        // calculator.questions.spin2.f2();
        calculator.globalVariable.enervateFollowerF2 = true;
        calculator.icons.enervate.followerF2(0);
        calculator.globalVariable.enervate2FollowerF2 = false;


    },
    function() {

        calculator.globalVariable.pieBorderLeft = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarLeft = false;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('barf2', false), 400);
        calculator.graphics.update.barGridY('barf2', false);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L12', false);

        calculator.globalVariable.enervateFollowerF2 = false;
        calculator.globalVariable.enervate2FollowerF2 = true;
        calculator.icons.enervate2.followerF2(0);

    }
);

$('.lbf2').hover(

    function() {

        calculator.globalVariable.enervate2FollowerF2 = true;
        calculator.icons.enervate2.followerF2(0);

        $('#barf2').css({'transition':'0.7s', 'transform':'scale(1.04)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            if(calculator.globalVariable.hover.hsResults){
                calculator.results.hide.followerOutcomesBottom();
            }

        }

        if(calculator.globalVariable.hover.hsTop){
            calculator.button.display.spinTop(false);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(false);
            calculator.button.disable.minTop();
        }

        calculator.questions.spin1.f2();

        if(calculator.lock.switch.all[3]) {

            calculator.lock.switch.f2 = true;
            calculator.lock.vibrate.f2(1);

        }

    },
    function() {

        calculator.globalVariable.enervate2FollowerF2 = false;

        $('#barf2').css({'transition':'0.7s', 'transform':'scale(1)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {
            if(calculator.globalVariable.hover.hsResults){
                calculator.results.show.followerOutcomesBottom();
            }
        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(true);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(true);
            calculator.button.enable.minTop();
        }

        calculator.questions.spin2.f2();

        calculator.lock.switch.f2 = false;

    }

);


//-------- O FOLLOWER 1 SLIDER -----//

$('#ovSlider1').hover(
    function() {

        calculator.globalVariable.pieBorderRight = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarRight = true;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('obarf1', true), 150);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L21', true);
        // calculator.questions.spin2.of2();
        calculator.globalVariable.enervateFollowerOF1 = true;
        calculator.icons.enervate.followerOF1(0);
        calculator.globalVariable.enervate2FollowerOF1 = false;

    },
    function() {

        calculator.globalVariable.pieBorderRight = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarRight = false;
        calculator.graphics.update.efficiencyBar();

        calculator.graphics.update.barGridY('obarf1', false);
        setTimeout(()=>calculator.graphics.update.barLabelY('obarf1', false), 400);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L21', false);

        calculator.globalVariable.enervateFollowerOF1 = false;
        calculator.globalVariable.enervate2FollowerOF1 = true;
        calculator.icons.enervate2.followerOF1(0);

    }
);

$('.rbf1').hover(

    function() {

        calculator.globalVariable.enervate2FollowerOF1 = true;
        calculator.icons.enervate2.followerOF1(0);

        $('#obarf1').css({'transition':'0.7s', 'transform':'scale(1.04)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            if(calculator.globalVariable.hover.hsResults){
                calculator.results.hide.followerOutcomesBottom();
            }

        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(false);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(false);
            calculator.button.disable.minTop();
        }

        calculator.questions.spin1.of1();

        if(calculator.lock.switch.all[4]) {

            calculator.lock.switch.of1 = true;
            calculator.lock.vibrate.of1(1);

        }

    },
    function() {

        calculator.globalVariable.enervate2FollowerOF1 = false;

        $('#obarf1').css({'transition':'0.7s', 'transform':'scale(1)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {

            if(calculator.globalVariable.hover.hsResults){
                calculator.results.show.followerOutcomesBottom();
            }

        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(true);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(true);
            calculator.button.enable.minTop();
        }

        calculator.questions.spin2.of1();

        calculator.lock.switch.of1 = false;

    }

);


//-------- O FOLLOWER 2 SLIDER -----//

$('#ovSlider2').hover(
    function() {

        calculator.globalVariable.pieBorderRight = true;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarRight = true;
        calculator.graphics.update.efficiencyBar();

        setTimeout(()=>calculator.graphics.update.barLabelY('obarf2', true), 150);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L22', true);
        // calculator.questions.spin2.of2();

        calculator.globalVariable.enervateFollowerOF2 = true;
        calculator.icons.enervate.followerOF2(0);
        calculator.globalVariable.enervate2FollowerOF2 = false;

    },
    function() {

        calculator.globalVariable.pieBorderRight = false;
        calculator.graphics.update.pie();

        calculator.globalVariable.powerBarRight = false;
        calculator.graphics.update.efficiencyBar();

        calculator.graphics.update.barGridY('obarf2', false);
        setTimeout(()=>calculator.graphics.update.barLabelY('obarf2', false), 400);
        calculator.section.hs.opacity.activeFollowerIcon('spf1L22', false);

        calculator.globalVariable.enervateFollowerOF2 = false;
        calculator.globalVariable.enervate2FollowerOF2 = true;
        calculator.icons.enervate2.followerOF2(0);

    }
);

$('.rbf2').hover(

    function() {

        calculator.globalVariable.enervate2FollowerOF2 = true;
        calculator.icons.enervate2.followerOF2(0);

        $('#obarf2').css({'transition':'0.7s', 'transform':'scale(1.04)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {
            if(calculator.globalVariable.hover.hsResults){
                calculator.results.hide.followerOutcomesBottom();
            }
        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(false);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(false);
            calculator.button.disable.minTop();
        }

        calculator.questions.spin1.of2();

        if(calculator.lock.switch.all[5]) {

            calculator.lock.switch.of2 = true;
            calculator.lock.vibrate.of2(1);

        }

    },
    function() {

        calculator.globalVariable.enervate2FollowerOF2 = false;

        $('#obarf2').css({'transition':'0.7s', 'transform':'scale(1)'});

        if(calculator.globalVariable.dynamicDisplay && calculator.globalVariable.aBitOfWaitingIsDone) {
            if(calculator.globalVariable.hover.hsResults){
                calculator.results.show.followerOutcomesBottom();
            }
        }

        if(calculator.globalVariable.hover.hsButton){
            calculator.button.display.spinTop(true);
        }

        if(calculator.space.hsResultsTopIsOpen){
            calculator.button.display.minTop(true);
            calculator.button.enable.minTop();
        }

        calculator.questions.spin2.of2();

        calculator.lock.switch.of2 = false;

    }

);



//------------------------------------------------//
//------------------------------------------------//
//------------------ MAIN BODIES -----------------//
//------------------------------------------------//
//------------------------------------------------//


//------ HELP SABOTAGE SECTION -----//

calculator.tutorial.specialHoverSetupActive = false;

$('.hsWrap').hover(

    function() {

        if(calculator.tutorial.specialHoverSetupActive) {

            $('.generalMarginBox').css({'margin-top':'-77px'});
            calculator.section.hs.minimize(false);
            calculator.titles.hs.ghost.hide();
            calculator.titles.hs.show();
            calculator.section.hs.set.iconPosition('center');
            // reverse vertical section position
            $('.verticalSection1').css({'margin-left':'201px'});
            $('.verticalSeparator').css({'height':'166px', 'margin-top':'0px'});

        } else {

            if(calculator.globalVariable.aBitOfWaitingIsDone) {

            // contes hide title
            if(calculator.globalVariable.hover.cTitle) {
                calculator.titles.contest.hide();
            }

            // contest hide botton
            if(calculator.globalVariable.hover.cButton) {
                calculator.button.display.spinBottom(false);
            }

            // hs icon setup
            if(calculator.globalVariable.hover.hsIcons) {
                calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]);
                calculator.section.hs.set.iconPosition('center');
            }

            // hs show main title
            if(calculator.globalVariable.hover.hsMainTitle) {
                calculator.titles.hs.show();
            }

            // hs show button
            if(calculator.globalVariable.hover.hsButton) {
                calculator.button.display.spinTop(true);
            }


            // hs maximize
            if(calculator.globalVariable.hover.hsMinimize) {
                calculator.section.hs.minimize(false);
            }

            // contest minimize
            if(calculator.globalVariable.hover.cMinimize) {
                calculator.section.contest.minimize(true);

            }

            // turn of the hovering ability on showing the results
            if(calculator.globalVariable.dynamicDisplay) {

                calculator.button.display.minTop(true);
                calculator.button.enable.minTop();

                calculator.button.display.minBottom(false);
                calculator.button.disable.minBottom();

                calculator.titles.update.position();

                // contest hide results
                if(calculator.globalVariable.hover.cResults) {
                    calculator.results.hide.leaderOutcomes();
                }

                // hs show results
                if(calculator.globalVariable.hover.hsResults) {
                    calculator.results.show.followerOutcomesAll();
                }

            }

            // hs ghost title chaos (so far it works)

            if(!calculator.globalVariable.dynamicDisplay && !calculator.space.hsResultsTopIsOpen && !calculator.space.open.hsResultsBottomIsOpen) {

                if(calculator.globalVariable.hover.hsGhostTitle){

                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.hide();

                }

            }

            if(calculator.globalVariable.dynamicDisplay && calculator.space.hsResultsTopIsOpen && calculator.space.hsResultsBottomIsOpen && calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

                if(calculator.globalVariable.hover.hsGhostTitle){

                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.hide();

                }

            }

            if(calculator.globalVariable.dynamicDisplay) {

                if(calculator.globalVariable.hover.hsGhostTitle){

                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.hide();

                }

            }



        }

        }


    },

    function() {
        if(calculator.globalVariable.tutorialHoverSwitch) {

            calculator.section.hs.minimize(true);
            calculator.titles.hs.hide();
            calculator.titles.hs.ghost.text();
            calculator.titles.hs.ghost.show();
            calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
            calculator.section.hs.set.iconPosition('bottom');

        }
    }

)

//------ POWER BAR SECTION ------//
/*
$('.pWrap').hover(
    function() {
        setTimeout(()=>{

            if(calculator.globalVariable.closedDecisionCalculator) {

            if(calculator.globalVariable.display.hsGhostTitle) {
                calculator.titles.hs.ghost.text();
                calculator.titles.hs.ghost.show();
            }

            // hs results
            if(calculator.globalVariable.hover.hsResults) {
                calculator.results.hide.followerOutcomesAll();
            }

            // hs setup icon
            if(calculator.globalVariable.hover.hsIcons){
                calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                calculator.section.hs.set.iconPosition('bottom');
            }
            // hs title
            if(calculator.globalVariable.hover.hsMainTitle){
                calculator.titles.hs.hide();
            }

            // hs minimize
            if(calculator.globalVariable.hover.hsMinimize) {
                calculator.section.hs.minimize(true);
            }

            // hs button
            if(calculator.globalVariable.hover.hsButton){
                calculator.button.display.spinTop(false);
            }

            // hs ghost title
            // even the follower results are not shown make sure to display the ghost title for contest on top of leader icons
            if(!calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen) {

                if(calculator.globalVariable.hover.hsGhostTitle){
                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.show();
                }

            }

            if(calculator.globalVariable.dynamicDisplay && !calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen && calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

                if(calculator.globalVariable.hover.hsGhostTitle){
                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.show();
                }

            }

        }

        }, 0);
    },
    function() {}
)
*/

//------ CONTEST SECTION ------//

$('.contestSection').hover(

    function() {

        if(calculator.globalVariable.aBitOfWaitingIsDone) {

            // contest show button
            if(calculator.globalVariable.hover.cButton){
                calculator.button.enable.spinBottom();
                calculator.button.display.spinBottom(true);
            }

            // hs setup icon
            if(calculator.globalVariable.hover.hsIcons){
                calculator.section.hs.opacity.SFiALiFiS([0.6,0.2,1,1,1,0]);
                calculator.section.hs.set.iconPosition('bottom');
            }

            // hs title
            if(calculator.globalVariable.hover.hsMainTitle){
                calculator.titles.hs.hide();
            }

            // hs button
            if(calculator.globalVariable.hover.hsButton){
                calculator.button.display.spinTop(false);
            }

            // c title
            if(calculator.globalVariable.hover.cTitle){
                calculator.titles.contest.show();
            }

            if(calculator.globalVariable.dynamicDisplay) {

                // hs minimize button on the decision slider of hs
                calculator.button.display.minTop(false);
                calculator.button.disable.minTop();

                //----//

                // contest minimize button on the decision slider of contest
                calculator.button.display.minBottom(true);
                calculator.button.enable.minBottom();

                if(calculator.globalVariable.hover.cResults){
                    calculator.results.show.leaderOutcomes();
                }
                //----//

                // hs results
                if(calculator.globalVariable.hover.hsResults){
                    calculator.results.hide.followerOutcomesAll();
                }

            }

            // hs minimize
            if(calculator.globalVariable.hover.hsMinimize) {
                calculator.section.hs.minimize(true);
            }

            // contest maximize
            if(calculator.globalVariable.hover.cMinimize) {
                calculator.section.contest.minimize(false);
            }

            // even the follower results are not shown make sure to display the ghost title for contest on top of leader icons
            if(!calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen) {

                if(calculator.globalVariable.hover.hsGhostTitle){
                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.show();
                }

            }

            if(calculator.globalVariable.dynamicDisplay && !calculator.space.hsResultsTopIsOpen && !calculator.space.hsResultsBottomIsOpen && calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

                if(calculator.globalVariable.hover.hsGhostTitle){
                    calculator.titles.hs.ghost.text();
                    calculator.titles.hs.ghost.show();
                }

            }

        }

    },

    function() {}

)


//------------------------------------------------//
//------------------------------------------------//
//----------------- SPIN BUTTONS -----------------//
//------------------------------------------------//
//------------------------------------------------//

var sp23C = 0;
$('#spinImage23').hover(
    function() {

        calculator.pointers.spinButtonBottomSwitch = 0;


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

        calculator.pointers.spinButtonTopSwitch = 0;

        spC = spC + 1;
        var str = 'rotate('+spC+'turn)';
        $('#spinImage').css({'transition':'0.5s', 'transform':str});

        // calculator.wheel.cruise();
        // calculator.wheel.show();
    },
    function() {
    }
)


$('#submitButtonBottom').hover(
    function() {
        $('.submitButtonBottomImage').css({'opacity':'1'});
        $('.submitButtonBottomImage2').css({'transition-delay':'1s', 'transition':'3s', 'right':'-100px'});
    },
    function() {
        $('.submitButtonBottomImage').css({'opacity':'1'});
        $('.submitButtonBottomImage2').css({'transition-delay':'0s', 'transition':'0s', 'right':'55px'});
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
calculator.titles.update.position = function() {

    if(!calculator.space.hsResultsTopIsOpen) {
        calculator.titles.update.topTitleMargins(0, -75);
    }

    if(calculator.space.hsResultsTopIsOpen) {
        calculator.titles.update.topTitleMargins(35, -110);
    }

}

calculator.titles.update.topTitleMargins = function(mt, mb) {

    mt = mt === undefined ? 0 : mt;
    mb = mb === undefined ? 0 : mb;

    mt = mt + 'px';
    mb = mb + 'px';

    $('.ctTop').css({'margin-bottom': mb , 'margin-top': mt});

}

calculator.titles.update.bottomTitleMargins = function(mt, mb) {

    mt = mt === undefined ? 0 : mt;
    mb = mb === undefined ? 0 : mb;

    mt = mt + 'px';
    mb = mb + 'px';

    $('.ctBottom').css({'margin-bottom': mb , 'margin-top': mt});

}


//------- HS TITLE SHOW / HIDE -------//

calculator.titles.hs.show = function() {

    $('.ctTop').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0turn)'});
    $('.ctTop').css({'opacity':'1'});

}

calculator.titles.hs.hide = function() {

    $('.ctTop').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
    $('.ctTop').css({ 'opacity':'0'});

}

calculator.titles.hs.ghost.show = function() {

    $('.ctGhost').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0turn)'});
    $('.ctGhost').css({'opacity':'1'});
    calculator.titles.hs.ghost.adjustHeight();

}

calculator.titles.hs.ghost.hide = function() {

    $('.ctGhost').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 1turn)'});
    $('.ctGhost').css({ 'opacity':'0'});

}

calculator.titles.opacity.all = function(array) {
    var topt, bopt;

    topt = array[0] ? '1' : '0';
    bopt = array[1] ? '1' : '0';

    $('.ctTop').css({'opacity':topt});
    $('.ctBottom').css({'opacity':bopt});

}

calculator.titles.hs.ghost.adjustHeight = function() {

    var s1 = calculator.icons.calculate.size(th, ts);
    var s2 = calculator.icons.calculate.size(toh,tos);
    var maxSize = Math.max(s1, s2);

    // console.log(maxSize);

    var e = 0.01;

    if(maxSize <= (1+e)) {
        marginTop = '135px';
    } else if(maxSize >= (1+e) && maxSize < 1.75 ){
        marginTop = '110px';
    } else {
        marginTop = '100px';
    }

    $('.ctGhost').css({'transition':'1.023456s', 'margin-top' : marginTop});

}


//------- CONTEST TITLE SHOW / HIDE -------//

calculator.titles.contest.show = function() {

    $('.ctBottom').css({'transition':'1.023456s', 'transition-delay':'0.3s', 'transform' : 'rotate3d(1, 0, 0, 1turn)', 'opacity':'1'});
    $('.imageWrap23').css({'transition':'1.023456s', 'opacity':'1'});

    calculator.space.open.cResults();

}

calculator.titles.contest.hide = function() {

    $('.ctBottom').css({'transition':'1.023456s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
    $('.ctBottom').css({ 'opacity':'0'});

    calculator.space.close.cResults();

    // this is a stupid line negating the method by calling its counterpart
    if(calculator.globalVariable.playerIndex === -1 && calculator.globalVariable.playerView) {
        calculator.titles.contest.show();
    }

}


//---------- TEXT AND COLOR ---------//

calculator.titles.hs.ghost.text = function() {

    var contestName1, contestName2;

    contestName1 = document.getElementById('contestNameG1');
    contestName2 = document.getElementById('contestNameG2');

    if(calculator.globalVariable.isOG1) {

        contestName1.innerHTML = 'OUT-GROUP CONTEST I';
        contestName2.innerHTML = 'LEADERS\' COMPETITION';

    }

    if(calculator.globalVariable.isOG2) {

        contestName1.innerHTML = 'OUT-GROUP CONTEST II';
        contestName2.innerHTML = 'LEADERS\' COMPETITION';

    }

    if(calculator.globalVariable.isIGA) {
        contestName1.innerHTML = 'OUT-GROUP CONTEST A';
        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
    }

    if(calculator.globalVariable.isIGB) {
        contestName1.innerHTML = 'OUT-GROUP CONTEST B';
        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
    }
    //
    // if(name === undefined) {
    //
    //     contestName1.innerHTML = 'OUT-GROUP CONTEST X';
    //     contestName2.innerHTML = 'LEADERS\' COMPETITION';
    //
    // }

}

calculator.titles.hs.ghost.modifyText = function(a) {

    var contestName1, contestName2;

    contestName1 = document.getElementById('contestNameG1');
    contestName2 = document.getElementById('contestNameG2');

    contestName2.innerHTML = a;

    if(calculator.globalVariable.isOG1) {

        contestName1.innerHTML = 'OUT-GROUP CONTEST I';
        // contestName2.innerHTML = 'LEADERS\' COMPETITION';

    }

    if(calculator.globalVariable.isOG2) {

        contestName1.innerHTML = 'OUT-GROUP CONTEST II';
        // contestName2.innerHTML = 'LEADERS\' COMPETITION';

    }

    if(calculator.globalVariable.isIGA) {
        contestName1.innerHTML = 'OUT-GROUP CONTEST A';
        // contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
    }

    if(calculator.globalVariable.isIGB) {
        contestName1.innerHTML = 'OUT-GROUP CONTEST B';
        // contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
    }
    //
    // if(name === undefined) {
    //
    //     contestName1.innerHTML = 'OUT-GROUP CONTEST X';
    //     contestName2.innerHTML = 'LEADERS\' COMPETITION';
    //
    // }

}

calculator.titles.update.textAndColor = function() {

    var contestName1, contestName2, contestName21, contestName22;

    contestName1 = document.getElementById('contestName1');
    contestName2 = document.getElementById('contestName2');
    contestName21 = document.getElementById('contestName21');
    contestName22 = document.getElementById('contestName22');

    if(calculator.globalVariable.isOG1) {

        $('.contestTitle1').css({'color':'white', 'font-size':'25px',
        'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))',
        'width':'308px', 'margin-left':'90px', 'margin-top':'-4px',
        'border-radius':'40px'});

        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex != -1) {

            $('.contestTitle1').css({'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

        }

        $('.contestTitle2').css({'font-size':'22px'});
        contestName1.innerHTML = 'OUT-GROUP CONTEST I';
        contestName2.innerHTML = 'FOLLOWERS\' HELP & SABOTAGE';


        $('.contestTitle22').css({'color':'white',
        'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))'});
        contestName21.innerHTML = 'LEADERS\' COMPETITION';
        contestName22.innerHTML = 'OUT-GROUP CONTEST I';

        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

            $('.contestTitle22, .ghostTitleColor').css({'color':'white',
            'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

        }

    }

    if(calculator.globalVariable.isOG2) {

        $('.contestTitle1').css({'color':'white', 'font-size':'25px',
        'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))',
        'width':'308px', 'margin-left':'90px', 'margin-top':'-4px',
        'border-radius':'40px'});

        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex != -1) {

            $('.contestTitle1').css({'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

        }

        $('.contestTitle2').css({'font-size':'22px'});
        contestName1.innerHTML = 'OUT-GROUP CONTEST II';
        contestName2.innerHTML = 'FOLLOWERS\' HELP & SABOTAGE';


        $('.contestTitle22').css({'color':'white',
        'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,210))'});
        contestName21.innerHTML = 'LEADERS\' COMPETITION';
        contestName22.innerHTML = 'OUT-GROUP CONTEST II';

        if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1) {

            $('.contestTitle22, .ghostTitleColor').css({'color':'white',
            'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

        }

    }

    if(calculator.globalVariable.isIGA) {

        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
        contestName1.innerHTML = 'IN-GROUP CONTEST A';
        $('.ctWrap').css({'margin-bottom':'-97px', 'margin-top':'0px'});

        $('.contestTitle22, .ghostTitleColor').css({'color':'white',
        'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(60,60,60))'});

    }

    if(calculator.globalVariable.isIGB) {

        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
        contestName1.innerHTML = 'IN-GROUP CONTEST A';
        $('.ctWrap').css({'margin-bottom':'-97px', 'margin-top':'0px'});

        $('.contestTitle22, .ghostTitleColor').css({'color':'white',
        'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

    }


    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IGSameColor) {
            if(calculator.globalVariable.isIGA) {
                $('.contestTitle22').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60, 60, 60), rgb(60,60,60))'});
            }
            if(calculator.globalVariable.isIGB) {
                $('.contestTitle22').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(210, 210, 210), rgb(210,210,210))'});
            }
        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IGDifferentColor) {
            if(calculator.globalVariable.isIGA) {
                $('.contestTitle22').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60, 60, 60), rgb(210,210,0))'});
            }
            if(calculator.globalVariable.isIGB) {
                $('.contestTitle22').css({'color':'black',
                'background':'linear-gradient(90deg, rgb(210, 210, 210), rgb(210,210,0))'});
            }
        }

    }
    //---- only for tutorial ----//

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.weAreInTutorial) {

        if(calculator.globalVariable.isIGA) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
                $('.contestTitle22').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60, 60, 60), rgb(210,210,0))'});
            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.isIGB) {
            if(calculator.globalVariable.playerIndex === -1 || !calculator.globalVariable.playerView) {
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

calculator.icons.setMe = function() {

    $('.objectivef1').css({'display':'flex'});
    $('.objectivef2').css({'display':'flex'});
    $('.objectivel').css({'display':'flex'});
    $('.objectivef').css({'display':'flex'});

    $('.subjectivef1').css({'display':'none'});
    $('.subjectivef2').css({'display':'none'});
    $('.subjectivel').css({'display':'none'});
    $('.subjectivef').css({'display':'none'})

    if(calculator.globalVariable.playerView) {

        if(calculator.globalVariable.playerIndex === 0) {
            // OG
            $('.subjectivef1').css({'display':'flex'});
            $('.objectivef1').css({'display':'none'});

            //IGA
            $('.subjectivef').css({'display':'flex'});
            $('.objectivef').css({'display':'none'});


        }

        if(calculator.globalVariable.playerIndex === 1) {

            // OG
            $('.subjectivef2').css({'display':'flex'});
            $('.objectivef2').css({'display':'none'});

            //IGA
            $('.subjectivef').css({'display':'flex'});
            $('.objectivef').css({'display':'none'});

        }

        if(calculator.globalVariable.playerIndex === -1) {
            // OG
            $('.subjectivel').css({'display':'flex'});
            $('.objectivel').css({'display':'none'});

        }


    }

}

calculator.icons.setOG1 = function() {

    // right side og1 setup initial roles
    $('.sameOLeaderIcon, .oldFollowerIconOfNewLeaderOf1, .oldFollowerIconOfNewLeaderOf2').css({'display':'flex'});
    $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf1, .newLeaderIconOfOldOf2, .newFollowerIconOfOldLeaderOf1, .newFollowerIconOfOldLeaderOf2').css({'display':'none'});

    // left side og1 setup intial roles
    $('.sameLeaderIcon, .oldFollowerIconOfNewLeaderf2, .oldFollowerIconOfNewLeaderf1').css({'display':'flex'});
    $('.newLeaderIconOfOldf, .newLeaderIconOfOldf1, .newLeaderIconOfOldf2, .newFollowerIconOfOldLeaderf1, .newFollowerIconOfOldLeaderf2').css({'display':'none'});


}

calculator.icons.adjustForTreatment = function() {

        $('.homoLeftFollowers, .homoRightFollowers, .homoLeftLeaders, .homoRightLeaders').css({'display':'flex'});
        $('.heteroLeftFollowers, .heteroRightFollowers, .heteroLeftLeaders, .heteroRightLeaders').css({'display':'none'});

        if(calculator.globalVariable.ourFollowersAreHetero) {

            // OG and IGA and IGB
            $('.homoLeftFollowers, .homoLeftLeaders').css({'display':'none'});
            $('.heteroLeftFollowers, .heteroLeftLeaders').css({'display':'flex'});

        }
        if(calculator.globalVariable.theirFollowersAreHetero) {

            // OG and IGA and IGB
            $('.homoRightFollowers, .homoRightLeaders').css({'display':'none'});
            $('.heteroRightFollowers, .heteroRightLeaders').css({'display':'flex'});

        }

}

calculator.icons.setOG2 = function() {

    if(calculator.globalVariable.winnerLeaderIndex === 1) {

        // left side the same
        // same followers
        $('.oldFollowerIconOfNewLeaderf2, .oldFollowerIconOfNewLeaderf1').css({'display':'flex'});
        $('.newFollowerIconOfOldLeaderf1, .newFollowerIconOfOldLeaderf2').css({'display':'none'});
        //same leader
        $('.sameLeaderIcon').css({'display':'flex'});
        $('.newLeaderIconOfOldf, .newLeaderIconOfOldf1, .newLeaderIconOfOldf2').css({'display':'none'});

        if(calculator.globalVariable.winnerFollowerIndex === 1) {
            // right side changes
            // top follower or strong follower is now the new leader
            // defeated leader takes the top follower's place the other follower is the same
            $('.newFollowerIconOfOldLeaderOf1, .oldFollowerIconOfNewLeaderOf2').css({'display':'flex'});
            $('.oldFollowerIconOfNewLeaderOf1, .newFollowerIconOfOldLeaderOf2').css({'display':'none'});
            // leader icon is now the old follower's new leader icon
            $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf1').css({'display':'flex'});
            $('.sameOLeaderIcon, .newLeaderIconOfOldOf2').css({'display':'none'});
        }

        if(calculator.globalVariable.winnerFollowerIndex === 2) {
            // top follower or strong follower is now the new leader
            // defeated leader takes the top follower's place the other follower is the same
            $('.newFollowerIconOfOldLeaderOf2, .oldFollowerIconOfNewLeaderOf1').css({'display':'flex'});
            $('.oldFollowerIconOfNewLeaderOf2, .newFollowerIconOfOldLeaderOf1').css({'display':'none'});
            // leader icon is now the old follower's new leader icon
            $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf2').css({'display':'flex'});
            $('.sameOLeaderIcon, .newLeaderIconOfOldOf1').css({'display':'none'});
        }

    }

    if(calculator.globalVariable.winnerLeaderIndex === 2) {

        // left side the same
        // same followers
        $('.oldFollowerIconOfNewLeaderOf2, .oldFollowerIconOfNewLeaderOf1').css({'display':'flex'});
        $('.newFollowerIconOfOldLeaderOf1, .newFollowerIconOfOldLeaderOf2').css({'display':'none'});
        //same leader
        $('.sameOLeaderIcon').css({'display':'flex'});
        $('.newLeaderIconOfOldOf, .newLeaderIconOfOldOf1, .newLeaderIconOfOldOf2').css({'display':'none'});

        if(calculator.globalVariable.winnerFollowerIndex === 1) {
            // right side changes
            // top follower or strong follower is now the new leader
            // defeated leader takes the top follower's place the other follower is the same
            $('.newFollowerIconOfOldLeaderf1, .oldFollowerIconOfNewLeaderf2').css({'display':'flex'});
            $('.oldFollowerIconOfNewLeaderf1, .newFollowerIconOfOldLeaderf2').css({'display':'none'});
            // leader icon is now the old follower's new leader icon
            $('.newLeaderIconOfOldf, .newLeaderIconOfOldf1').css({'display':'flex'});
            $('.sameLeaderIcon, .newLeaderIconOfOldf2').css({'display':'none'});
        }

        if(calculator.globalVariable.winnerFollowerIndex === 2) {

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

calculator.icons.setIGA = function() {


        if(calculator.globalVariable.playerIndex === 0) {

            // first follower is strong
            $('.strongFollower1').css({'display':'flex'});
            $('.weakFollower1').css({'display':'none'})

            // second follower is weak
            $('.weakFollower2').css({'display':'flex'});
            $('.strongFollower2').css({'display':'none'});

        }

        if(calculator.globalVariable.playerIndex === 1) {

            // first follower is weak
            $('.weakFollower1').css({'display':'flex'});
            $('.strongFollower1').css({'display':'none'});

            // second follower is strong
            $('.strongFollower2').css({'display':'flex'});
            $('.weakFollower2').css({'display':'none'});

        }


}

calculator.icons.setAll = function() {

    $('.wrapMidOGSetup, .wrapMidIGASetup, .wrapMidIGBSetup').css({'display':'none'})

    if(calculator.globalVariable.isOG1) {

        $('.wrapMidOGSetup').css({'display':'flex'})

        calculator.icons.setOG1();

        calculator.icons.setMe();
        calculator.icons.adjustForTreatment();

    }

    if(calculator.globalVariable.isOG2) {

        $('.wrapMidOGSetup').css({'display':'flex'})

        calculator.icons.setOG2();

        calculator.icons.setMe();
        calculator.icons.adjustForTreatment();

    }

    if(calculator.globalVariable.isIGA) {

        $('.wrapMidIGASetup').css({'display':'flex'})

        calculator.icons.setIGA();

        calculator.icons.setMe();
        calculator.icons.adjustForTreatment();

    }

    if(calculator.globalVariable.isIGB) {

        $('.wrapMidIGBSetup').css({'display':'flex'})

    }


}


//-------- SET SIZE OF ICONS IN HS SECTION -------//

calculator.icons.set.size = function(Id, h, w) {

    var myClass, myHeight, myWidth;

    myClass = '.' + Id;
    myHeight = h + 'px';
    myWidth = w + 'px';

    $(myClass).css({'height' : myHeight, 'width' : myWidth});

}


// SUPER NRE VERSION THIS NEEDS TO COPY PASTE TO OTHER SECTIONS OF THE GAME
calculator.icons.calculate.size = function(h, s) {

    var r = (1 + h) / (1 + s);

    //  bigger than 3 slowly increase upto the size of 2.3 as it goes to 80
    var L3 = 2.2;
    var x03 = -20.8;
    var k3 = 0.03;
    var i3 = 0.22;

    var m3 = (L3 / (1 + Math.exp(-k3 * (r - x03)))) + i3;


    // between 2 and 5 it is linear
    var a = 0.157;
    var b = 0.94;
    var m4 = (a * r) + b

    // between 1 and 2 it is initially fast then decrease (concave)
    var L1 = 1;
    var x01 = 4.8;
    var k1 = 0.67;
    var i1 = 0.934;

    var m1 = (L1 / (1 + Math.exp(-k1 * (r - x01)))) + i1;

    // var L2 = 0.54;
    // var x02 = 0.43;
    // var k2 = 8.7;
    // var i2 = 0.465;

    var L2 = 0.71;
    var x02 = 0.43;
    var k2 = 7.16;
    var i2 = 0.3;

    var m2 = (L2 / (1 + Math.exp(-k2 * (r - x02)))) + i2;

    var m;

    if(r > 5) {
        m = m3;
    }

    if(r >= 2 && r <= 5) {
        m = m4;
    }

    if(r >= 1 && r < 2) {
        m = m1;
    }
    if(r < 1) {
        m = m2;
    }

    // console.log('ratio: ' + r);
    // console.log('help3 - ratio to size: ' + m3);
    // console.log('help2 - ratio to size: ' + m4);
    // console.log('help1 - ratio to size: ' + m1);
    // console.log('sabo - ratio to size: ' + m2);


    return m;



}


calculator.icons.update.logisticColor = function(help, sabo, max, avg) {

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

calculator.icons.update.arrowColor = function(help, sabo) {

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

calculator.icons.set.RGB4Leaders = function(val){

    return ('rgb(' + val[0] +',' + val[1] + ', ' + val[2] +', 0.2)');

}

calculator.icons.set.RGB4Followers = function(val){

    return ('rgb(' + val[0] +',' + val[1] +', ' + val[2] + ',' + val[3] + ')');

}


//------- LEADER ICON RESIZING METHOD DEPENDENT ON HELP AND SABOTAGE VALUES ----//

calculator.icons.update.leaderAuraColor = function() {

    // leader aura color
    var leaderIconBorderColor = calculator.icons.update.logisticColor(ts, th, 255, 132);
    var libcRGB = calculator.icons.set.RGB4Leaders(leaderIconBorderColor);
    $('.imgwrapwrapwrap31').css({'background-color':libcRGB, 'border-color':libcRGB});

    leaderIconBorderColor = calculator.icons.update.logisticColor(tos, toh, 255, 132);
    libcRGB = calculator.icons.set.RGB4Leaders(leaderIconBorderColor);
    $('.imgwrapwrapwrap32').css({'background-color':libcRGB, 'border-color':libcRGB});

}

calculator.icons.update.followerArrows = function() {

    // follower arrow color
    var followerArrowColor = calculator.icons.update.arrowColor(h1, s1);
    var facRGB = calculator.icons.set.RGB4Followers(followerArrowColor);
    $('.iaf1').css({'stroke':facRGB});
    $('.arrowTip11').css({'fill':facRGB});

    followerArrowColor = calculator.icons.update.arrowColor(h2, s2);
    facRGB = calculator.icons.set.RGB4Followers(followerArrowColor);
    $('.iaf2').css({'stroke':facRGB});
    $('.arrowTip12').css({'fill':facRGB});

    followerArrowColor = calculator.icons.update.arrowColor(oh1, os1);
    facRGB = calculator.icons.set.RGB4Followers(followerArrowColor);
    $('.iaof1').css({'stroke':facRGB});
    $('.arrowTip21').css({'fill':facRGB});

    followerArrowColor = calculator.icons.update.arrowColor(oh2, os2);
    facRGB = calculator.icons.set.RGB4Followers(followerArrowColor);
    $('.iaof2').css({'stroke':facRGB});
    $('.arrowTip22').css({'fill':facRGB});

}

calculator.icons.update.leaderSize = function() {

    var m1 = calculator.icons.calculate.size(th, ts);
    calculator.icons.set.size('splc1', 85 * m1, 65 * m1);

    var m2 = calculator.icons.calculate.size(toh, tos)
    calculator.icons.set.size('splc2', 85 * m2, 65 * m2)

}

//---- LEADER ICON PLACEMENT DEPENDING ON SIZE ----//

calculator.icons.update.leaderMargins = function(active) {

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

calculator.icons.rescale.leaderIconSize = function(scale) {

    var m1 = calculator.icons.calculate.size(th, ts) * scale;
    calculator.icons.set.size('rescaleL1', 85 * m1, 65 * m1);

    var m2 = calculator.icons.calculate.size(toh, tos) * scale;
    calculator.icons.set.size('rescaleL2', 85 * m2, 65 * m2)

}

calculator.icons.show.hiddenContest = function() {
    $('.OGCIcon2').css({'opacity':'1'});
}

calculator.icons.hide.hiddenContest = function() {
    $('.OGCIcon2').css({'opacity':'0'});
}

//------------- ENERVATE ICONS -----------------//

calculator.icons.enervate.delayTime = 200;

//-- ENERVATE ACTIVE ICONS --//
calculator.globalVariable.enervateLeaderLeft = false;
calculator.icons.enervate.leaderLeft = function(state) {

    if(calculator.globalVariable.enervateLeaderLeft && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.splc1').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.leaderLeft(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.splc1').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.leaderLeft(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.splc1').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervateLeaderRight = false;
calculator.icons.enervate.leaderRight = function(state) {

    if(calculator.globalVariable.enervateLeaderRight && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.splc2').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.leaderRight(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.splc2').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.leaderRight(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.splc2').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervateFollowerF1 = false;
calculator.icons.enervate.followerF1 = function(state) {

    if(calculator.globalVariable.enervateFollowerF1 && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.spf1L11').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.followerF1(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.spf1L11').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.followerF1(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.spf1L11').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervateFollowerF2 = false;
calculator.icons.enervate.followerF2 = function(state) {

    if(calculator.globalVariable.enervateFollowerF2 && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.spf1L12').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.followerF2(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.spf1L12').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.followerF2(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.spf1L12').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervateFollowerOF1 = false;
calculator.icons.enervate.followerOF1 = function(state) {

    if(calculator.globalVariable.enervateFollowerOF1 && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.spf1L21').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.followerOF1(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.spf1L21').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.followerOF1(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.spf1L21').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervateFollowerOF2 = false;
calculator.icons.enervate.followerOF2 = function(state) {

    if(calculator.globalVariable.enervateFollowerOF2 && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.spf1L22').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.followerOF2(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.spf1L22').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.followerOF2(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.spf1L22').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}


//-- ENERVATE PASIVE ICONS --//
calculator.globalVariable.enervate2LeaderLeft = false;
calculator.icons.enervate2.leaderLeft = function(state) {

    if(calculator.globalVariable.enervate2LeaderLeft && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.lener1').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.leaderLeft(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.lener1').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.leaderLeft(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.lener1').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervate2LeaderRight = false;
calculator.icons.enervate2.leaderRight = function(state) {

    if(calculator.globalVariable.enervate2LeaderRight && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.lener2').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.leaderRight(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.lener2').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.leaderRight(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.lener2').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervate2FollowerF1 = false;
calculator.icons.enervate2.followerF1 = function(state) {

    if(calculator.globalVariable.enervate2FollowerF1 && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.fener11').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.followerF1(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.fener11').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.followerF1(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.fener11').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervate2FollowerF2 = false;
calculator.icons.enervate2.followerF2 = function(state) {

    if(calculator.globalVariable.enervate2FollowerF2 && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.fener12').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.followerF2(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.fener12').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.followerF2(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.fener12').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervate2FollowerOF1 = false;
calculator.icons.enervate2.followerOF1 = function(state) {

    if(calculator.globalVariable.enervate2FollowerOF1 && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.fener21').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.followerOF1(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.fener21').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.followerOF1(0), calculator.icons.enervate.delayTime);
        }

    } else {
        $('.fener21').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.enervate2FollowerOF2 = false;
calculator.icons.enervate2.followerOF2 = function(state) {

    if(calculator.globalVariable.enervate2FollowerOF2 && calculator.globalVariable.enervateIsActive) {

        if(state === 0) {
            $('.fener22').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.followerOF2(1), calculator.icons.enervate.delayTime);
        }
        if(state === 1) {
            $('.fener22').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.followerOF2(0), calculator.icons.enervate.delayTime);
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


calculator.lock.switch.all = Array(6);

calculator.lock.switch.l1 = true;
calculator.lock.vibrate.l1 = function(state) {

    if(calculator.lock.switch.l1) {

        $('.l1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


        if(state === 1) {

            $('.l1vibrate').css({'margin-left':'30px'});
            setTimeout(()=>calculator.lock.vibrate.l1(2),100);

        }

        if(state === 2) {

            $('.l1vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.l1(1),100);

        }

    } else {

        calculator.lock.switch.l1 = false;
        $('.l1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

    }

}

calculator.lock.switch.l2 = true;
calculator.lock.vibrate.l2 = function(state) {

    if(calculator.lock.switch.l2) {

        $('.l2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


        if(state === 1) {

            $('.l2vibrate').css({'margin-left':'30px'});
            setTimeout(()=>calculator.lock.vibrate.l2(2),100);

        }

        if(state === 2) {

            $('.l2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.l2(1),100);

        }

    } else {

        calculator.lock.switch.l2 = false;
        $('.l2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

    }

}

calculator.lock.switch.f1 = true;
calculator.lock.vibrate.f1 = function(state) {

    if(calculator.lock.switch.f1) {

        $('.f1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})
        $('.f1vex').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-top':'78px'})

        if(state === 1) {

            $('.f1vibrate').css({'margin-left':'20px'});
            $('.f1vex').css({'margin-left':'-30px'});
            setTimeout(()=>calculator.lock.vibrate.f1(2),100);

        }

        if(state === 2) {

            $('.f1vibrate').css({'margin-left':'0px'});
            $('.f1vex').css({'margin-left':'-20px'});
            setTimeout(()=>calculator.lock.vibrate.f1(1),100);

        }

    } else {

        calculator.lock.switch.f1 = false;
        $('.f1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})
        $('.f1vex').css({'height':'20px', 'width':'20px', 'margin-left':'-44px', 'opacity':'1', 'margin-top':'12px'})
    }

}

calculator.lock.switch.f2 = true;
calculator.lock.vibrate.f2 = function(state) {

    if(calculator.lock.switch.f2) {

        $('.f2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


        if(state === 1) {

            $('.f2vibrate').css({'margin-left':'20px'});
            setTimeout(()=>calculator.lock.vibrate.f2(2),100);

        }

        if(state === 2) {

            $('.f2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.f2(1),100);

        }

    } else {

        calculator.lock.switch.f2 = false;
        $('.f2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

    }

}

calculator.lock.switch.of1 = true;
calculator.lock.vibrate.of1 = function(state) {

    if(calculator.lock.switch.of1) {

        $('.of1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


        if(state === 1) {

            $('.of1vibrate').css({'margin-left':'20px'});
            setTimeout(()=>calculator.lock.vibrate.of1(2),100);

        }

        if(state === 2) {

            $('.of1vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.of1(1),100);

        }

    } else {

        calculator.lock.switch.of1 = false;
        $('.of1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

    }

}

calculator.lock.switch.of2 = true;
calculator.lock.vibrate.of2 = function(state) {

    if(calculator.lock.switch.of2) {

        $('.of2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


        if(state === 1) {

            $('.of2vibrate').css({'margin-left':'20px'});
            setTimeout(()=>calculator.lock.vibrate.of2(2),100);

        }

        if(state === 2) {

            $('.of2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.of2(1),100);

        }

    } else {

        calculator.lock.switch.of2 = false;
        $('.of2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

    }

}

calculator.lock.activate = function(array) {

    calculator.lock.switch.all = array;

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


calculator.pointers.switches = Array(6);

calculator.pointers.switches[0] = true;
calculator.pointers.wiggle.l1= function(state) {

    if(calculator.pointers.switches[0]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_l1').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.l1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_l1').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>calculator.pointers.wiggle.l1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_l1').css({'opacity':'0'});

    }

}

calculator.pointers.switches[1] = true;
calculator.pointers.wiggle.l2= function(state) {

    if(calculator.pointers.switches[1]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_l2').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.l2(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_l2').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>calculator.pointers.wiggle.l2(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_l2').css({'opacity':'0'});

    }

}

calculator.pointers.switches[2] = true;
calculator.pointers.wiggle.f1= function(state) {

    if(calculator.pointers.switches[2]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_f1').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.f1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_f1').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>calculator.pointers.wiggle.f1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_f1').css({'opacity':'0'});

    }

}

calculator.pointers.switches[3] = true;
calculator.pointers.wiggle.f2 = function(state) {

    if(calculator.pointers.switches[3]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_f2').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.f2(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_f2').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>calculator.pointers.wiggle.f2(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_f2').css({'opacity':'0'});

    }

}

calculator.pointers.switches[4] = true;
calculator.pointers.wiggle.of1 = function(state) {

    if(calculator.pointers.switches[4]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_of1').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.of1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_of1').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>calculator.pointers.wiggle.of1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_of1').css({'opacity':'0'});

    }

}

calculator.pointers.switches[5] = true;
calculator.pointers.wiggle.of2 = function(state) {

    if(calculator.pointers.switches[5]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_of2').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.of2(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_of2').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>calculator.pointers.wiggle.of2(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_of2').css({'opacity':'0'});

    }

}

calculator.pointers.activate = function(array) {

    calculator.pointers.switches = array;

    calculator.pointers.wiggle.l1(1);
    calculator.pointers.wiggle.l2(1);
    calculator.pointers.wiggle.f1(1);
    calculator.pointers.wiggle.f2(1);
    calculator.pointers.wiggle.of1(1);
    calculator.pointers.wiggle.of2(1);

}

//-------- ADDITIONAL POINTERS --------//

//--- spin button Top ---//

calculator.pointers.spinButtonTopSwitch = false;

// calculator.pointers.spinButtonTopSwitch = 1;
// calculator.pointers.wiggle.spinButtonTop(1);

calculator.pointers.wiggle.spinButtonTop = function(state) {

    if(calculator.pointers.spinButtonTopSwitch) {

        if(state === 1) {

            $('.spinButtonTop_arrowLeft').css({'margin-left':'131px', 'opacity':'1'});
            $('.spinButtonTop_arrowRight').css({'margin-left':'238px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.spinButtonTop(0), 750);

        }

        if(state === 0) {

            $('.spinButtonTop_arrowLeft').css({'margin-left':'100px', 'opacity':'1'});
            $('.spinButtonTop_arrowRight').css({'margin-left':'270px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.spinButtonTop(1), 750);

        }

    } else {

        $('.spinButtonTop_arrowLeft').css({'opacity':'0'});
        $('.spinButtonTop_arrowRight').css({'opacity':'0'});

    }

}


//--- spin button Bottom ---//

calculator.pointers.spinButtonBottomSwitch = false;

// calculator.pointers.spinButtonBottomSwitch = 1;
// calculator.pointers.wiggle.spinButtonBottom(1);

calculator.pointers.wiggle.spinButtonBottom = function(state) {

    if(calculator.pointers.spinButtonBottomSwitch) {

        if(state === 1) {

            $('.spinButtonBottom_arrowLeft').css({'margin-left':'407px', 'opacity':'1'});
            $('.spinButtonBottom_arrowRight').css({'margin-left':'515px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.spinButtonBottom(0), 750);

        }

        if(state === 0) {

            $('.spinButtonBottom_arrowLeft').css({'margin-left':'376px', 'opacity':'1'});
            $('.spinButtonBottom_arrowRight').css({'margin-left':'546px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.spinButtonBottom(1), 750);

        }

    } else {

        $('.spinButtonBottom_arrowLeft').css({'opacity':'0'});
        $('.spinButtonBottom_arrowRight').css({'opacity':'0'});

    }

}


//--- example leader slider ---//

calculator.pointers.example_switch1 = false;

// calculator.pointers.example_switch1 = 1;
// calculator.pointers.wiggle.example_l1(1);

calculator.pointers.wiggle.example_l1 = function(state) {

    if(calculator.pointers.example_switch1) {

        if(state === 1) {

            $('.sliderArrowImageWrap_l1').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.example_l1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_l1').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>calculator.pointers.wiggle.example_l1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_l1').css({'opacity':'0'});

    }

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
calculator.stopRolling = false;
// calculator.roll.displayTime = 2250;
calculator.roll.displayTime = 8000;
calculator.roll.delayTime = 4000
calculator.roll.transitionTime = '2s';
// slow time for opacity transition
// calculator.roll.displayTime = 3000;
calculator.roll.counter = 0;
calculator.roll.steadyState = false;
calculator.roll.kill = true;

calculator.roll.slowTime = function(counter) {

    console.log('inside slowtime');
    // console.log('current delay: ' + calculator.roll.displayTime);
    // console.log('current counter: ' + calculator.roll.counter);

    if(counter === 1) {
        calculator.roll.displayTime = 4000;
        calculator.roll.delayTime = 2000
        calculator.roll.transitionTime = '1.25s';
    }

    if(counter > 2) {
        calculator.roll.displayTime = 8000;
        calculator.roll.delayTime = 4000
        calculator.roll.transitionTime = '2s';
    }

    // console.log('new delay: ' + calculator.roll.displayTime);

}

calculator.roll.transformRotate = function(string1, string2) {

    $(string1).css({'transition':'1.5s', 'transform':'rotate(270deg)'});
    $(string2).css({'transition':'1.5s', 'transform':'rotate(300deg)'});
    setTimeout(()=>{
        $(string1).css({'transition':'1.5s', 'opacity':'1'});
    }, 1600)
    setTimeout(()=>{
        $(string2).css({'transition':'0s', 'transform':'rotate(200deg)', 'opacity':'0'});
    }, 1600);

}

// not used need to change html code to make this work also the role code
// inactive case should be changed
calculator.roll.transformFade = function(string1, string2) {

    $(string2).css({'transition':calculator.roll.transitionTime,'opacity':'0'});
    setTimeout(()=>{
        $(string1).css({'transition':calculator.roll.transitionTime, 'opacity':'1'});
    },calculator.roll.delayTime)

}

calculator.roll.f1 = function(index, prevIndex, textArray, newRoll) {

    newRoll === undefined ? false : newRoll;

    var fSideText10 = document.getElementById('fSideText10');
    var fSideText11 = document.getElementById('fSideText11');
    var fSideText12 = document.getElementById('fSideText12');
    var fSideText13 = document.getElementById('fSideText13');
    var fSideText14 = document.getElementById('fSideText14');
    var fSideText15 = document.getElementById('fSideText15');

    if(!calculator.stopRolling) {


        fSideText10.innerHTML = textArray[0];
        fSideText11.innerHTML = textArray[1];
        fSideText12.innerHTML = textArray[2];
        fSideText13.innerHTML = textArray[3];
        fSideText14.innerHTML = textArray[4];
        fSideText15.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.fSideText1' + index;
        var str2 = '.fSideText1' + prevIndex;

        // calculator.roll.transformRotate(str1, str2);

        calculator.roll.transformFade(str1, str2);

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

            if(!calculator.roll.kill || newRoll) {
                calculator.roll.f1(nextIndex, prevIndex, calculator.roll.f1Array)
            }

        }, calculator.roll.displayTime);

    } else {

        if(calculator.roll.steadyState) {

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

calculator.roll.f2 = function(index, prevIndex, textArray, newRoll) {

    newRoll === undefined ? false : newRoll;

    var fSideText20 = document.getElementById('fSideText20');
    var fSideText21 = document.getElementById('fSideText21');
    var fSideText22 = document.getElementById('fSideText22');
    var fSideText23 = document.getElementById('fSideText23');
    var fSideText24 = document.getElementById('fSideText24');
    var fSideText25 = document.getElementById('fSideText25');

    if(!calculator.stopRolling) {


        fSideText20.innerHTML = textArray[0];
        fSideText21.innerHTML = textArray[1];
        fSideText22.innerHTML = textArray[2];
        fSideText23.innerHTML = textArray[3];
        fSideText24.innerHTML = textArray[4];
        fSideText25.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.fSideText2' + index;
        var str2 = '.fSideText2' + prevIndex;

        // calculator.roll.transformRotate(str1, str2);

        calculator.roll.transformFade(str1, str2);

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

            if(!calculator.roll.kill || newRoll) {
                calculator.roll.f2(nextIndex, prevIndex, calculator.roll.f2Array)
            }

        }, calculator.roll.displayTime);

    } else {
        if(calculator.roll.steadyState) {
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

calculator.roll.f3 = function(index, prevIndex, textArray, newRoll) {

    newRoll === undefined ? false : newRoll;

    var fSideText30 = document.getElementById('fSideText30');
    var fSideText31 = document.getElementById('fSideText31');
    var fSideText32 = document.getElementById('fSideText32');
    var fSideText33 = document.getElementById('fSideText33');
    var fSideText34 = document.getElementById('fSideText34');
    var fSideText35 = document.getElementById('fSideText35');

    if(!calculator.stopRolling) {


        fSideText30.innerHTML = textArray[0];
        fSideText31.innerHTML = textArray[1];
        fSideText32.innerHTML = textArray[2];
        fSideText33.innerHTML = textArray[3];
        fSideText34.innerHTML = textArray[4];
        fSideText35.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.fSideText3' + index;
        var str2 = '.fSideText3' + prevIndex;

        // calculator.roll.transformRotate(str1, str2);

        calculator.roll.transformFade(str1, str2);

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

            if(!calculator.roll.kill || newRoll) {
                calculator.roll.f3(nextIndex, prevIndex, calculator.roll.of1Array)
            }

        }, calculator.roll.displayTime);

    } else {
if(calculator.roll.steadyState) {
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

calculator.roll.f4 = function(index, prevIndex, textArray, newRoll) {

    newRoll === undefined ? false : newRoll;

    var fSideText40 = document.getElementById('fSideText40');
    var fSideText41 = document.getElementById('fSideText41');
    var fSideText42 = document.getElementById('fSideText42');
    var fSideText43 = document.getElementById('fSideText43');
    var fSideText44 = document.getElementById('fSideText44');
    var fSideText45 = document.getElementById('fSideText45');

    if(!calculator.stopRolling) {


        fSideText40.innerHTML = textArray[0];
        fSideText41.innerHTML = textArray[1];
        fSideText42.innerHTML = textArray[2];
        fSideText43.innerHTML = textArray[3];
        fSideText44.innerHTML = textArray[4];
        fSideText45.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.fSideText4' + index;
        var str2 = '.fSideText4' + prevIndex;

        // calculator.roll.transformRotate(str1, str2);

        calculator.roll.transformFade(str1, str2);

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

            if(!calculator.roll.kill || newRoll) {
                calculator.roll.f4(nextIndex, prevIndex, calculator.roll.of2Array)
            }

        }, calculator.roll.displayTime);

    } else {

        if(calculator.roll.steadyState) {
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


calculator.roll.l1 = function(index, prevIndex, textArray, newRoll) {

    newRoll === undefined ? false : newRoll;

    var lSideText10 = document.getElementById('lSideText10');
    var lSideText11 = document.getElementById('lSideText11');
    var lSideText12 = document.getElementById('lSideText12');
    var lSideText13 = document.getElementById('lSideText13');
    var lSideText14 = document.getElementById('lSideText14');
    var lSideText15 = document.getElementById('lSideText15');

    if(!calculator.stopRolling) {


        lSideText10.innerHTML = textArray[0];
        lSideText11.innerHTML = textArray[1];
        lSideText12.innerHTML = textArray[2];
        lSideText13.innerHTML = textArray[3];
        // lSideText13.innerHTML = calculator.roll.l1PowerText;
        lSideText14.innerHTML = textArray[4];
        lSideText15.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.lSideText1' + index;
        var str2 = '.lSideText1' + prevIndex;

        calculator.roll.transformFade(str1, str2);

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

            if(!calculator.roll.kill || newRoll) {
                calculator.roll.l1(nextIndex, prevIndex, calculator.roll.lArray)
            }

        }, calculator.roll.displayTime);


    } else {

        if(calculator.roll.steadyState) {
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

calculator.roll.l2 = function(index, prevIndex, textArray, newRoll) {

    newRoll === undefined ? false : newRoll;

    var lSideText20 = document.getElementById('lSideText20');
    var lSideText21 = document.getElementById('lSideText21');
    var lSideText22 = document.getElementById('lSideText22');
    var lSideText23 = document.getElementById('lSideText23');
    var lSideText24 = document.getElementById('lSideText24');
    var lSideText25 = document.getElementById('lSideText25');

    if(!calculator.stopRolling) {


        lSideText20.innerHTML = textArray[0];
        lSideText21.innerHTML = textArray[1];
        lSideText22.innerHTML = textArray[2];
        lSideText23.innerHTML = textArray[3];
        // lSideText23.innerHTML = calculator.roll.l2PowerText;
        lSideText24.innerHTML = textArray[4];
        lSideText25.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.lSideText2' + index;
        var str2 = '.lSideText2' + prevIndex;

        calculator.roll.transformFade(str1, str2);

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

            if(!calculator.roll.kill || newRoll) {
                calculator.roll.l2(nextIndex, prevIndex, calculator.roll.olArray)
            }

        }, calculator.roll.displayTime);

        // setTimeout(()=>calculator.roll.l2(nextIndex, prevIndex, calculator.roll.olArray), calculator.roll.displayTime);

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


calculator.roll.dsL = function(index, prevIndex, textArray) {

    var dLSideText0 = document.getElementById('dLSideText0');
    var dLSideText1 = document.getElementById('dLSideText1');
    var dLSideText2 = document.getElementById('dLSideText2');
    var dLSideText3 = document.getElementById('dLSideText3');
    var dLSideText4 = document.getElementById('dLSideText4');
    var dLSideText5 = document.getElementById('dLSideText5');

    if(!calculator.stopRolling) {


        dLSideText0.innerHTML = textArray[0];
        dLSideText1.innerHTML = textArray[1];
        dLSideText2.innerHTML = textArray[2];
        dLSideText3.innerHTML = textArray[3];
        dLSideText4.innerHTML = textArray[4];
        dLSideText5.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.dLSideText' + index;
        var str2 = '.dLSideText' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.dsL(nextIndex, prevIndex, calculator.roll.dsLeader), calculator.roll.displayTime);

    } else {

        dLSideText0.innerHTML = 'GROUP A';
        dLSideText1.innerHTML = '';
        dLSideText2.innerHTML = '';
        dLSideText3.innerHTML = '';
        dLSideText4.innerHTML = '';
        dLSideText5.innerHTML = '';

        $('.dLSideText0').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.dLSideText1, .dLSideText2, .dLSideText3, .dLSideText4, .dLSideText5').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}


calculator.roll.dsF = function(index, prevIndex, textArray) {

    var dFSideText0 = document.getElementById('dFSideText0');
    var dFSideText1 = document.getElementById('dFSideText1');
    var dFSideText2 = document.getElementById('dFSideText2');
    var dFSideText3 = document.getElementById('dFSideText3');
    var dFSideText4 = document.getElementById('dFSideText4');
    var dFSideText5 = document.getElementById('dFSideText5');

    if(!calculator.stopRolling) {


        dFSideText0.innerHTML = textArray[0];
        dFSideText1.innerHTML = textArray[1];
        dFSideText2.innerHTML = textArray[2];
        dFSideText3.innerHTML = textArray[3];
        dFSideText4.innerHTML = textArray[4];
        dFSideText5.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.dFSideText' + index;
        var str2 = '.dFSideText' + prevIndex;

        $(str1).css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $(str2).css({'transition':'1.5s', 'transform':'rotate(-60deg)'});
        setTimeout(()=>{$(str2).css({'transition':'0s', 'transform':'rotate(90deg)'});}, 1600);

        var m = textArray.length;
        var nextIndex = index + 1;
        nextIndex = nextIndex % m;
        prevIndex = index;

        while(textArray[nextIndex] === -1) {
            nextIndex = nextIndex + 1;
            nextIndex = nextIndex % m;
        }

        setTimeout(()=>calculator.roll.dsF(nextIndex, prevIndex, calculator.roll.dsFollower), calculator.roll.displayTime);

    } else {

        dFSideText0.innerHTML = 'GROUP A';
        dFSideText1.innerHTML = '';
        dFSideText2.innerHTML = '';
        dFSideText3.innerHTML = '';
        dFSideText4.innerHTML = '';
        dFSideText5.innerHTML = '';

        $('.dFSideText0').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.dFSideText1, .dFSideText2, .dFSideText3, .dFSideText4, .dFSideText5').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}


calculator.roll.setCurrentBalance = function(larray, farray) {

    calculator.currentBalance.f1 = farray[0];
    calculator.currentBalance.f2 = farray[1];
    calculator.currentBalance.f3 = farray[2];
    calculator.currentBalance.f4 = farray[3];

    calculator.currentBalance.l1 = larray[0];
    calculator.currentBalance.l2 = larray[1];

}

calculator.roll.calculateNetBalance = function(nplArray, npfArray) {

    calculator.netBalance.f1 = calculator.currentBalance.f1 + npfArray[0];
    calculator.netBalance.f2 = calculator.currentBalance.f2 + npfArray[1];
    calculator.netBalance.f3 = calculator.currentBalance.f3 + npfArray[2];
    calculator.netBalance.f4 = calculator.currentBalance.f4 + npfArray[3];

    calculator.netBalance.l1 = calculator.currentBalance.l1 + nplArray[0];
    calculator.netBalance.l2 = calculator.currentBalance.l2 + nplArray[1];

}


// MICRO TO MACRO CONNECTION ARRAYS

calculator.roll.lArray = Array(6);
calculator.roll.f1Array = Array(6);
calculator.roll.f2Array = Array(6);

calculator.roll.olArray = Array(6);
calculator.roll.of1Array = Array(6);
calculator.roll.of2Array = Array(6);

calculator.roll.dsFollower = Array(6);
calculator.roll.dsLeader = Array(6);

//*-*-*-*//
// this is the old roll method it is not used but it still has usefull code
// that can later be used
calculator.roll.all = function(on, state) {

    var fa1, fa2, fa3, fa4, la1, la2;

    calculator.stopRolling = !on;

    if(state === 'tuto_ashe') {

        fa1 = ['GROUP A', 'FOLLOWER', 'YOU', 'STRONG', -1,  calculator.netBalance.f1];
        fa2 = ['GROUP A', 'FOLLOWER', '', 'WEAK', -1,  calculator.netBalance.f2];
        fa3 = ['GROUP B', 'FOLLOWER', '', 'EQUAL POWER', -1,  calculator.netBalance.f3];
        fa4 = ['GROUP B', 'FOLLOWER', '', 'EQUAL POWER', -1,  calculator.netBalance.f4];

        la1 = ['GROUP A', 'LEADER', '', '', -1,  calculator.netBalance.l1];
        la2 = ['GROUP B', 'LEADER', '', '', -1,  calculator.netBalance.l2];

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


    calculator.roll.f1(0, 6, fa1);
    calculator.roll.f2(0, 6, fa2);
    calculator.roll.f3(0, 6, fa3);
    calculator.roll.f4(0, 6, fa4);

    calculator.roll.l1(0, 6, la1);
    calculator.roll.l2(0, 6, la2);

}
//*-*-*-*//

// MACRO ARRAY CONTROLLING METHODS


calculator.roll.hideAll = function() {

    $('.fSideText10, .fSideText11, .fSideText12, .fSideText13, .fSideText14, .fSideText15').css({'transition':'0s', 'opacity':'0'});
    $('.fSideText20, .fSideText21, .fSideText22, .fSideText23, .fSideText24, .fSideText25').css({'transition':'0s',  'opacity':'0'});
    $('.fSideText30, .fSideText31, .fSideText32, .fSideText33, .fSideText34, .fSideText35').css({'transition':'0s', 'opacity':'0'});
    $('.fSideText40, .fSideText41, .fSideText42, .fSideText43, .fSideText44, .fSideText45').css({'transition':'0s', 'opacity':'0'});

    $('.lSideText10, .lSideText11, .lSideText12, .lSideText13, .lSideText14, .lSideText15').css({'transition':'0s', 'opacity':'0'});
    $('.lSideText20, .lSideText21, .lSideText22, .lSideText23, .lSideText24, .lSideText25').css({'transition':'0s', 'opacity':'0'});

    $('.fSideText10, .fSideText11, .fSideText12, .fSideText13, .fSideText14, .fSideText15').css({'transition':'0s', 'filter':'opacity(0)'});
    $('.fSideText20, .fSideText21, .fSideText22, .fSideText23, .fSideText24, .fSideText25').css({'transition':'0s',  'filter':'opacity(0)'});
    $('.fSideText30, .fSideText31, .fSideText32, .fSideText33, .fSideText34, .fSideText35').css({'transition':'0s', 'filter':'opacity(0)'});
    $('.fSideText40, .fSideText41, .fSideText42, .fSideText43, .fSideText44, .fSideText45').css({'transition':'0s', 'filter':'opacity(0)'});

    $('.lSideText10, .lSideText11, .lSideText12, .lSideText13, .lSideText14, .lSideText15').css({'transition':'0s', 'filter':'opacity(0)'});
    $('.lSideText20, .lSideText21, .lSideText22, .lSideText23, .lSideText24, .lSideText25').css({'transition':'0s', 'filter':'opacity(0)'});

}

calculator.roll.showAll = function() {

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

}

calculator.roll.emptyAll = function() {

    calculator.roll.f1Array = [-1, -1, -1, -1, -1, -1];
    calculator.roll.f2Array = [-1, -1, -1, -1, -1, -1];
    calculator.roll.of1Array = [-1, -1, -1, -1, -1, -1];
    calculator.roll.of2Array = [-1, -1, -1, -1, -1, -1];
    calculator.roll.lArray = [-1, -1, -1, -1, -1, -1];
    calculator.roll.olArray = [-1, -1, -1, -1, -1, -1];

    calculator.roll.dsFollower = [-1, -1, -1, -1, -1, -1];
    calculator.roll.dsLeader = [-1, -1, -1, -1, -1, -1];

}

// typeOfContest is about which type of contest is being played
// in the experiment only 'l', 'f' and 'fhetero will be relevant'
calculator.roll.setRolesAndGroups = function() {

    // contest section related
    // Also help sabo is available for leader contest so the standart role rolls
    // for followers are also assigned
    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

        calculator.roll.dsFollower[0] = 'GROUP A';
        calculator.roll.dsFollower[1] = 'FOLLOWER';

        calculator.roll.dsLeader[0] = 'GROUP A';
        calculator.roll.dsLeader[1] = 'LEADER';


        calculator.roll.lArray[0] = 'GROUP A';
        calculator.roll.lArray[1] = 'LEADER';

        calculator.roll.f1Array[0] = 'GROUP A';
        calculator.roll.f1Array[1] = 'FOLLOWER';
        calculator.roll.f2Array[1] = 'FOLLOWER';
        calculator.roll.f2Array[0] = 'GROUP A';

        calculator.roll.olArray[0] = 'GROUP B';
        calculator.roll.olArray[1] = 'LEADER';

        calculator.roll.of1Array[0] = 'GROUP B';
        calculator.roll.of1Array[1] = 'FOLLOWER';
        calculator.roll.of2Array[0] = 'GROUP B';
        calculator.roll.of2Array[1] = 'FOLLOWER';

    }

    // contest section related
    if(calculator.globalVariable.isIGA) {

        calculator.roll.dsFollower[0] = '';
        calculator.roll.dsFollower[1] = '';

        calculator.roll.dsLeader[0] = 'GROUP A';
        calculator.roll.dsLeader[1] = 'FOLLOWER';

        calculator.roll.lArray[0] = 'GROUP A';
        calculator.roll.lArray[1] = 'FOLLOWER';
        calculator.roll.olArray[0] = 'GROUP A';
        calculator.roll.olArray[1] = 'FOLLOWER';


        calculator.roll.lArray[3] = 'EQUAL POWER';
        calculator.roll.olArray[3] = 'EQUAL POWER';

        calculator.roll.dsLeader[3] = 'EQUAL POWER';

        // we are always represented by left side so left hetero implies our
        // group is hetero
        if(calculator.globalVariable.ourFollowersAreHetero) {

            if(calculator.globalVariable.playerIndex === 0) {

                calculator.roll.lArray[3] = 'STRONG';
                calculator.roll.olArray[3] = 'WEAK';

                calculator.roll.dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.playerIndex === 1) {

                calculator.roll.lArray[3] = 'WEAK';
                calculator.roll.olArray[3] = 'STRONG';

                calculator.roll.dsLeader[3] = 'WEAK';

            }

        }

    }

    // contest section related
    // this section is only relevant for the tutorial
    // otherwise we reconstruct the data to make the subject's group group A
    if(calculator.globalVariable.isIGB) {

        calculator.roll.dsFollower[0] = '';
        calculator.roll.dsFollower[1] = '';

        calculator.roll.dsLeader[0] = 'GROUP B';
        calculator.roll.dsLeader[1] = 'FOLLOWER';

        calculator.roll.lArray[0] = 'GROUP B';
        calculator.roll.lArray[1] = 'FOLLOWER';
        calculator.roll.olArray[0] = 'GROUP B';
        calculator.roll.olArray[1] = 'FOLLOWER';


        calculator.roll.lArray[3] = 'EQUAL POWER';
        calculator.roll.olArray[3] = 'EQUAL POWER';

        calculator.roll.dsLeader[3] = 'EQUAL POWER';

        // we are always represented by left side so left hetero implies our
        // group is hetero
        if(calculator.globalVariable.theirFollowersAreHetero) {

            if(calculator.globalVariable.playerIndex === 0) {

                calculator.roll.lArray[3] = 'STRONG';
                calculator.roll.olArray[3] = 'WEAK';

                calculator.roll.dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.playerIndex === 1) {

                calculator.roll.lArray[3] = 'WEAK';
                calculator.roll.olArray[3] = 'STRONG';

                calculator.roll.dsLeader[3] = 'WEAK';

            }

        }

    }


}

calculator.roll.setYouTag = function() {

    if(calculator.globalVariable.playerView) {

        if(calculator.globalVariable.playerIndex === -1) {

            calculator.roll.lArray[2] = 'YOU';
            calculator.roll.dsLeader[2] = 'YOU';

            calculator.roll.f1Array[2] = '';
            calculator.roll.f2Array[2] = '';
            calculator.roll.of1Array[2] = '';
            calculator.roll.of2Array[2] = '';
            // calculator.roll.lArray[2] = '';
            calculator.roll.olArray[2] = '';

        }

        if(calculator.globalVariable.playerIndex === 0) {

            calculator.roll.f1Array[2] = 'YOU';
            calculator.roll.dsFollower[2] = 'YOU';

            calculator.roll.lArray[2] = '';
            // calculator.roll.f1Array[2] = '';
            calculator.roll.f2Array[2] = '';
            calculator.roll.olArray[2] = '';
            calculator.roll.of1Array[2] = '';
            calculator.roll.of2Array[2] = '';

        }

        if(calculator.globalVariable.playerIndex === 1) {

            calculator.roll.f2Array[2] = 'YOU';
            calculator.roll.dsFollower[2] = 'YOU';

            calculator.roll.lArray[2] = '';
            calculator.roll.f1Array[2] = '';
            // calculator.roll.f2Array[2] = '';
            calculator.roll.olArray[2] = '';
            calculator.roll.of1Array[2] = '';
            calculator.roll.of2Array[2] = '';

        }
    }

}

calculator.roll.adjustForTreatment = function() {

    if(!calculator.globalVariable.theirFollowersAreHetero && !calculator.globalVariable.ourFollowersAreHetero) {

        calculator.roll.f1Array[3] = -1;
        calculator.roll.f2Array[3] = -1;
        calculator.roll.of1Array[3] = -1;
        calculator.roll.of2Array[3] = -1;

        calculator.roll.lArray[3] = -1;
        calculator.roll.olArray[3] = -1;

        calculator.roll.dsFollower[3] = -1;
        calculator.roll.dsLeader[3] = -1;

    }


    // we are always represented by left side so left hetero implies our
    // group is hetero
    if(calculator.globalVariable.ourFollowersAreHetero) {

        if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

            calculator.roll.f1Array[3] = 'STRONG';
            calculator.roll.f2Array[3] = 'WEAK';
            calculator.roll.of1Array[3] = 'EQUAL POWER';
            calculator.roll.of2Array[3] = 'EQUAL POWER';

            calculator.roll.lArray[3] = '';
            calculator.roll.olArray[3] = '';

            calculator.roll.dsLeader[3] = '';
            calculator.roll.dsFollower[3] = '';

            if(calculator.globalVariable.playerView) {

                if(calculator.globalVariable.playerIndex === 0) {
                    calculator.roll.dsFollower[3] = 'STRONG';
                }

                if(calculator.globalVariable.playerIndex === 1) {
                    calculator.roll.dsFollower[3] = 'WEAK';
                }

            }
        }

        if(calculator.globalVariable.isIGA) {

            calculator.roll.f1Array[3] = '';
            calculator.roll.f2Array[3] = '';
            calculator.roll.of1Array[3] = '';
            calculator.roll.of2Array[3] = '';

            // here we use subjectiveIndex as a way to determine left and right player rolls
            // we do not require subjectiveview that way we can also use this method during the tutorial
            if(calculator.globalVariable.playerIndex === 0) {

                calculator.roll.lArray[3] = 'STRONG';
                calculator.roll.olArray[3] = 'WEAK';

                calculator.roll.dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.playerIndex === 1) {

                calculator.roll.lArray[3] = 'WEAK';
                calculator.roll.olArray[3] = 'STRONG';

                calculator.roll.dsLeader[3] = 'WEAK';

            }

        }

        if(calculator.globalVariable.isIGB) {

            calculator.roll.f1Array[3] = '';
            calculator.roll.f2Array[3] = '';
            calculator.roll.of1Array[3] = '';
            calculator.roll.of2Array[3] = '';

            calculator.roll.lArray[3] = 'EQUAL POWER';
            calculator.roll.olArray[3] = 'EQUAL POWER';

            calculator.roll.dsLeader[3] = 'EQUAL POWER';

        }

    }

    if(calculator.globalVariable.theirFollowersAreHetero) {

        if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {

            calculator.roll.f1Array[3] = 'EQUAL POWER';
            calculator.roll.f2Array[3] = 'EQUAL POWER';
            calculator.roll.of1Array[3] = 'STRONG';
            calculator.roll.of2Array[3] = 'WEAK';

            calculator.roll.lArray[3] = '';
            calculator.roll.olArray[3] = '';

            calculator.roll.dsLeader[3] = '';
            calculator.roll.dsFollower[3] = '';

            if(calculator.globalVariable.playerView) {

                if(calculator.globalVariable.playerIndex === 0) {
                    calculator.roll.dsFollower[3] = 'EQUAL POWER';
                }

                if(calculator.globalVariable.playerIndex === 1) {
                    calculator.roll.dsFollower[3] = 'EQUAL POWER';
                }

            }

        }

        if(calculator.globalVariable.isIGA) {

            calculator.roll.f1Array[3] = '';
            calculator.roll.f2Array[3] = '';
            calculator.roll.of1Array[3] = '';
            calculator.roll.of2Array[3] = '';

            calculator.roll.lArray[3] = 'EQUAL POWER';
            calculator.roll.olArray[3] = 'EQUAL POWER';

            calculator.roll.dsLeader[3] = 'EQUAL POWER';

        }

        if(calculator.globalVariable.isIGB) {

            calculator.roll.f1Array[3] = '';
            calculator.roll.f2Array[3] = '';
            calculator.roll.of1Array[3] = '';
            calculator.roll.of2Array[3] = '';

            // here we use subjectiveIndex as a way to determine left and right player rolls
            // we do not require subjectiveview that way we can also use this method during the tutorial
            if(calculator.globalVariable.playerIndex === 0) {

                calculator.roll.lArray[3] = 'STRONG';
                calculator.roll.olArray[3] = 'WEAK';

                calculator.roll.dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.playerIndex === 1) {

                calculator.roll.lArray[3] = 'WEAK';
                calculator.roll.olArray[3] = 'STRONG';

                calculator.roll.dsLeader[3] = 'WEAK';

            }

        }

    }

    if(calculator.globalVariable.theirFollowersAreHetero && calculator.globalVariable.ourFollowersAreHetero) {

        calculator.roll.f1Array[3] = 'STRONG';
        calculator.roll.f2Array[3] = 'WEAK';
        calculator.roll.of1Array[3] = 'STRONG';
        calculator.roll.of2Array[3] = 'WEAK';

        calculator.roll.lArray[3] = '';
        calculator.roll.olArray[3] = '';

        calculator.roll.dsLeader[3] = '';
        calculator.roll.dsFollower[3] = '';

        if(calculator.globalVariable.playerView) {

            if(calculator.globalVariable.playerIndex === 0) {
                calculator.roll.dsFollower[3] = 'STRONG';
            }

            if(calculator.globalVariable.playerIndex === 1) {
                calculator.roll.dsFollower[3] = 'WEAK';
            }

        }


        if(calculator.globalVariable.isIGA && calculator.globalVariable.isIGB) {

            if(calculator.globalVariable.playerIndex === 0) {

                calculator.roll.lArray[3] = 'STRONG';
                calculator.roll.olArray[3] = 'WEAK';

                calculator.roll.dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.playerIndex === 1) {

                calculator.roll.lArray[3] = 'WEAK';
                calculator.roll.olArray[3] = 'STRONG';

                calculator.roll.dsLeader[3] = 'WEAK';

            }

        }

    }

}

calculator.roll.adjustForOG2 = function() {

    // In og2 one of the follower of one of the group is the old leader so being weak and strong does not work
    // in addition, being the weak or strong follower does not matter
    // so we take out that section from the roll
    if(calculator.globalVariable.isOG2) {

        calculator.roll.f1Array[3] = -1;
        calculator.roll.f2Array[3] = -1;
        calculator.roll.of1Array[3] = -1;
        calculator.roll.of2Array[3] = -1;

        calculator.roll.lArray[3] = -1;
        calculator.roll.olArray[3] = -1;

        calculator.roll.dsFollower[3] = -1;
        calculator.roll.dsLeader[3] = -1;

    }

}

// ACTION AND EXECUTION
calculator.roll.animate = function() {

    calculator.roll.f1(0, 6, calculator.roll.f1Array);
    calculator.roll.f2(0, 6, calculator.roll.f2Array);
    calculator.roll.f3(0, 6, calculator.roll.of1Array);
    calculator.roll.f4(0, 6, calculator.roll.of2Array);

    calculator.roll.l1(0, 6, calculator.roll.lArray);
    calculator.roll.l2(0, 6, calculator.roll.olArray);

    if(calculator.globalVariable.playerView) {
        if(calculator.globalVariable.playerIndex === -1) {
            calculator.roll.dsL(0, 6, calculator.roll.dsLeader);
        } else {
            calculator.roll.dsF(0, 6, calculator.roll.dsFollower);
        }
    }

}

calculator.roll.updateRollArrays = function() {
    calculator.roll.hideAll();
    calculator.roll.emptyAll();
    calculator.roll.setRolesAndGroups();
    calculator.roll.setYouTag();
    calculator.roll.adjustForTreatment();
    calculator.roll.adjustForOG2();
    calculator.roll.counter = 0;
    setTimeout(()=>{
        calculator.roll.hideAll();
    }, 5000)
    setTimeout(()=>{
        calculator.roll.showAll();
    }, 10100)
}

calculator.roll.initiate = function() {

    calculator.roll.emptyAll();
    calculator.roll.setRolesAndGroups();
    calculator.roll.setYouTag();
    calculator.roll.adjustForTreatment();
    calculator.roll.adjustForOG2();
    calculator.stopRolling = false;
    calculator.roll.animate();

}

calculator.roll.reset = function() {

    calculator.stopRolling = true;
    setTimeout(()=>{
        calculator.roll.counter = 0;
        calculator.roll.initiate()
    }, calculator.roll.displayTime + 500);

}

// change the setup conditions then call this
calculator.roll.resetRoll = function() {

    calculator.stopRolling = true;
    calculator.roll.kill = true;
    // calculator.roll.updateRollArrays();

    setTimeout(()=>{
        calculator.roll.updateRollArrays();

        calculator.stopRolling = false;


        calculator.roll.f1(0, 6, calculator.roll.f1Array, true);
        calculator.roll.f2(0, 6, calculator.roll.f2Array, true);
        calculator.roll.f3(0, 6, calculator.roll.of1Array, true);
        calculator.roll.f4(0, 6, calculator.roll.of2Array, true);

        calculator.roll.l1(0, 6, calculator.roll.lArray, true);
        calculator.roll.l2(0, 6, calculator.roll.olArray, true);

        if(calculator.globalVariable.playerView) {
            if(calculator.globalVariable.playerIndex === -1) {
                calculator.roll.dsL(0, 6, calculator.roll.dsLeader);
            } else {
                calculator.roll.dsF(0, 6, calculator.roll.dsFollower);
            }
        }

    }, 1000)

    setTimeout(()=>{
        calculator.roll.kill = false;
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


calculator.questions.spin1.l1 = function() {
    $('.sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.l1 = function() {
    $('.sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.l2 = function() {
    $('.sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.l2 = function() {
    $('.sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.f1 = function() {
    $('.sliderQuestion_f1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.f1 = function() {
    $('.sliderQuestion_f1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.f2 = function() {
    $('.sliderQuestion_f2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.f2 = function() {
    $('.sliderQuestion_f2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.of1 = function() {
    $('.sliderQuestion_of1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.of1 = function() {
    $('.sliderQuestion_of1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.of2 = function() {
    $('.sliderQuestion_of2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.of2 = function() {
    $('.sliderQuestion_of2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.activate.all = function(array) {

    $('.sliderQuestion_l1').css({'opacity': array[0].toString()});
    $('.sliderQuestion_f1').css({'opacity': array[1].toString()});
    $('.sliderQuestion_f2').css({'opacity': array[2].toString()});
    $('.sliderQuestion_l2').css({'opacity': array[3].toString()});
    $('.sliderQuestion_of1').css({'opacity': array[4].toString()});
    $('.sliderQuestion_of2').css({'opacity': array[5].toString()});

    if(calculator.globalVariable.playerView) {
        if(calculator.globalVariable.playerIndex === -1) {
            $('.sliderQuestion_l1').css({'opacity': '0'});
        }
        if(calculator.globalVariable.playerIndex === 0) {
            $('.sliderQuestion_f1').css({'opacity': '0'});
        }
        if(calculator.globalVariable.playerIndex === 1) {
            $('.sliderQuestion_f2').css({'opacity': '0'});
        }
    }

}
calculator.questions.animateFollowerSpin = false;
calculator.questions.spinAllFollowers = function(state) {

    if(calculator.questions.animateFollowerSpin) {

        if(state === 0) {
            // calculator.questions.spin1.l1();
            // calculator.questions.spin1.l2();
            calculator.questions.spin1.f1();
            calculator.questions.spin1.f2();
            calculator.questions.spin1.of1();
            calculator.questions.spin1.of2();

            setTimeout(()=>{
                calculator.questions.spinAllFollowers(1);
            }, 5500)
        }

        if(state === 1) {
            // calculator.questions.spin1.l1();
            // calculator.questions.spin1.l2();
            calculator.questions.spin2.f1();
            calculator.questions.spin2.f2();
            calculator.questions.spin2.of1();
            calculator.questions.spin2.of2();

            setTimeout(()=>{
                calculator.questions.spinAllFollowers(0);
            }, 5500)
        }

    } else {
        // for now lets leave it at nothing
    }

}


calculator.questions.animateLeaderSpin = false;
calculator.questions.spinLeaders = function(state) {

    if(calculator.questions.animateLeaderSpin) {

        if(state === 0) {

            calculator.questions.spin1.l1();
            calculator.questions.spin1.l2();

            setTimeout(()=>{
                calculator.questions.spinLeaders(1);
            }, 5500)
        }

        if(state === 1) {

            calculator.questions.spin2.l1();
            calculator.questions.spin2.l2();

            setTimeout(()=>{
                calculator.questions.spinLeaders(0);
            }, 5500)
        }

    } else {
        // for now lets leave it at nothing
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


calculator.wheel.hide = function() {

    $('.pw').css({'opacity':'1', 'zIndex':'1'});
    $('.mywheel').css({'opacity':'0', 'zIndex':'0'});

}

calculator.wheel.show = function() {

    $('.pw').css({'opacity':'0', 'zIndex':'-1'});
    $('.mywheel').css({'opacity':'1', 'zIndex':'0'});

}

calculator.tutorial.forceLeader1Winner = false;
calculator.tutorial.forceLeader2Winner = false;

calculator.wheel.currentRotationAngle = 0;

calculator.wheel.spin = function(duration, turn) {

    duration = duration === undefined ? 1 : duration;
    turn = turn === undefined ? 3 : turn;

    calculator.globalVariable.topSpinButtonIsEnabled = false;
    calculator.globalVariable.bottomSpinButtonIsEnabled = false;

    //---//

    calculator.results.softHide.allResults();
    calculator.button.display.spinTop(false);
    setTimeout(()=>calculator.button.disable.spinTop(), 300);


    //---//

    calculator.wheel.spinDuration = duration;
    calculator.wheel.spinNumber = turn;

    calculator.wheel.create(pwin, 'myWheel');
    calculator.wheel.myWheelObj.stopAnimation(false);
    calculator.wheel.myWheelObj.rotationAngle = 0;

    calculator.wheel.show();

    // console.log(calculator.wheel.spinDuration);

    //---//

    var winner = (pwin > Math.random()) ? 1 : 2;

    if(calculator.tutorial.forceLeader1Winner) {
        winner = 1;
    }

    if(calculator.tutorial.forceLeader2Winner) {
        winner = 2;
    }




    var stopAt = calculator.wheel.myWheelObj.getRandomForSegment(winner);
    calculator.wheel.myWheelObj.animation.stopAngle = stopAt;
    calculator.wheel.myWheelObj.startAnimation();

    //---//

    setTimeout(()=>
    {
        calculator.results.update.allTextAndColors(winner);
    },
    calculator.wheel.spinDuration * 0.75 * 1000);

    setTimeout(()=>
    {
        calculator.results.show.outcomes();
    },
    calculator.wheel.spinDuration * 1000);

}

calculator.wheel.cruise = function() {

    if(!calculator.wheel.isSpinning) {

        calculator.wheel.show();

        calculator.wheel.spinDuration = 60;
        calculator.wheel.spinNumber = 6;

        calculator.wheel.create(pwin, 'myWheel');
        calculator.wheel.myWheelObj.stopAnimation(false);
        calculator.wheel.myWheelObj.rotationAngle = 0;
        calculator.wheel.myWheelObj.startAnimation();

    }

}


// UNUSED EXPERIMENTAL CODE
calculator.wheel.dynamicDisplayOn = false;
calculator.wheel.update = function(localSwitch) {


    var mySwitch = localSwitch === undefined ? calculator.wheel.dynamicDisplayOn : localSwitch;
    // calculator.wheel.spinDuration = 60;
    // calculator.wheel.spinNumber = 6;

    var currentAngle = calculator.wheel.myWheelObj.rotationAngle % 360;
    calculator.wheel.create(pwin, 'myWheel');
    calculator.wheel.myWheelObj.rotationAngle = currentAngle;

    if(mySwitch) {


        calculator.wheel.spinDuration = 60;
        calculator.wheel.spinNumber = 6;

        calculator.wheel.myWheelObj.stopAnimation(false);
        // calculator.wheel.myWheelObj.rotationAngle = 0;
        // calculator.wheel.myWheelObj.rotationAngle = currentAngle;
        calculator.wheel.myWheelObj.startAnimation();

    } else {

        calculator.wheel.myWheelObj.stopAnimation(true);
        calculator.wheel.myWheelObj.draw();

    }

}

calculator.wheel.dynamicUpdate = function() {

    calculator.wheel.spinDuration = 60;
    calculator.wheel.spinNumber = 6;

    var currentAngle = calculator.wheel.myWheelObj.rotationAngle % 360;
    calculator.wheel.create(pwin, 'myWheel');
    calculator.wheel.myWheelObj.stopAnimation(false);
    // calculator.wheel.myWheelObj.rotationAngle = 0;
    calculator.wheel.myWheelObj.rotationAngle = currentAngle;
    calculator.wheel.myWheelObj.startAnimation();


}


// segment 1 for left player 2 for right player
calculator.wheel.highlight = function(segment) {

    calculator.wheel.myWheelObj.lineWidth = 3;
    calculator.wheel.myWheelObj.segments[segment].strokeStyle = 'lime';

    calculator.wheel.update(1);

}

calculator.wheel.unhighlight = function() {

    calculator.wheel.myWheelObj.lineWidth = 1;
    calculator.wheel.myWheelObj.segments[1].strokeStyle = 'white';
    calculator.wheel.myWheelObj.segments[2].strokeStyle = 'white';

    calculator.wheel.update();

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


calculator.space.hsIsOpen = undefined;

calculator.space.hsResultsTopIsOpen = undefined;

calculator.space.hsResultsBottomIsOpen = undefined;

calculator.space.powerBarIsOpen = undefined;

// Used only in a specific circumstance otherwise always closed as it messes up the height
calculator.space.powerBarLegendIsOpen = false;

calculator.space.contestIsOpen = undefined;

calculator.space.contestResultsIsOpen = undefined;


// CONTEST SECTION SPACE MANAGEMENT

calculator.space.open.cResults = function() {

    calculator.space.contestResultsIsOpen = true;
    calculator.space.update.heights();

}

calculator.space.close.cResults = function() {

    calculator.space.contestResultsIsOpen = false;
    calculator.space.update.heights();

}


// TOP RESULTS OF HELP / SABOTAGE

calculator.space.open.hsResultsTop = function() {

    $('.hsWrap').css({'transition-delay':'1.2s', 'transition':'0.3521s', 'margin-top':'0px'});
    calculator.space.hsResultsTopIsOpen = true;
    calculator.space.update.heights();

}

calculator.space.close.hsResultsTop = function() {

    $('.hsWrap').css({'transition-delay':'0s', 'transition':'0.3521s', 'margin-top':'-57px'});
    calculator.space.hsResultsTopIsOpen = false;
    calculator.space.update.heights();

}


// BOTTOM RESULTS OF HELP / SABOTAGE

calculator.space.open.hsResultsBottom = function() {

    $('.pWrap').css({'transition':'0.3s', 'margin-top':'40px'});
    calculator.space.hsResultsBottomIsOpen = true;
    calculator.space.update.heights();

}

calculator.space.close.hsResultsBottom = function() {

    $('.pWrap').css({'transition':'0.3s', 'margin-top':'-54px'});
    calculator.space.hsResultsBottomIsOpen = false;
    calculator.space.update.heights();

}


// CLOSE BOTH HELP SABOTAGE SECTION AND 'CLOSE' LEADER RESULT SECTION

calculator.space.close.all = function() {

    calculator.space.close.hsResultsTop();
    calculator.space.close.hsResultsBottom();
    calculator.space.close.cResults();

    // if(calculator.globalVariable.playerIndex === -1 && calculator.globalVariable.playerView) {
    //     calculator.space.contestResultsIsOpen = true;
    // }
    //
    // calculator.space.update.heights();

}


// ADJUST HEIGHT DEPENDING ON WHAT IS DISPLAYED AND OPEN

calculator.space.update.heights = function() {

    var pb = calculator.space.powerBarIsOpen ? 30 : 0;
    var pblegend = calculator.space.powerBarLegendIsOpen ? 60 : 0;
    var c = calculator.space.contestIsOpen ? 170 : 0;
    var hs = calculator.space.hsIsOpen ? 295 : 0;
    var cr = calculator.space.contestResultsIsOpen ? 150 : 0;//145 OLD VALUE
    var hsT = calculator.space.hsResultsTopIsOpen ? 65 : 0;
    var hsB = calculator.space.hsResultsBottomIsOpen ? 90 : 0;


    var total = pb + pblegend +  c + cr + hs + hsT + hsB;

    total = total + 'px';

    console.log('********************');
    console.log('power bar: ' + pb);
    console.log('power bar legend: ' + pblegend);
    console.log('contest: ' + c);
    console.log('contestResult: ' + cr);
    console.log('hs: ' + hs);
    console.log('hs Top: ' + hsT);
    console.log('hs Bottom: ' + hsB);
    console.log('total: ' + total);
    console.log('********************');

    $('.generalMarginBox').css({'transition':'1.023456s', 'height' : total});

    calculator.section.power.adjust.space();

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

calculator.results.show.outcomes = function() {

    calculator.globalVariable.contestResultsExist = true;
    calculator.globalVariable.topSpinButtonIsEnabled = true;
    calculator.globalVariable.bottomSpinButtonIsEnabled = true;

    // enlarge to their original size both section when you display the results

    if(calculator.globalVariable.display.cMinimize) {
        calculator.section.contest.minimize(false);
    }

    if(calculator.globalVariable.display.hsMinimize) {
        calculator.section.hs.minimize(false);
    }

    //---------- CONTEST SECTION -----------//

    // I do not want the spinButton Bottom to have power to control the space
    // results and titles are the primary determinantes we can be clever and use this switch accordingly
    if(calculator.globalVariable.display.cButton) {
        calculator.button.display.spinBottom(true);
        setTimeout(()=>calculator.button.enable.spinBottom(), 300);
    } else {
        calculator.button.display.spinBottom(false);
        // calculator.button.disable.spinBottom();
    }

    if(calculator.globalVariable.display.cResults) {
        calculator.results.show.leaderOutcomes();
    } else {
        calculator.results.hide.leaderOutcomes()
    }

    if(calculator.globalVariable.display.cTitle) {
        calculator.titles.contest.show();
    } else {
        calculator.titles.contest.hide();
    }


    //-------------- HELP / SABOTAGE SECTION ------------//

    if(calculator.globalVariable.display.hsButton) {
        calculator.button.display.spinTop(true);
        setTimeout(()=>calculator.button.enable.spinTop(), 300);
    }

    if(calculator.globalVariable.display.hsResults) {
        calculator.results.show.followerOutcomesAll();
    } else {
        calculator.results.hide.followerOutcomesAll();
    }

    if(calculator.globalVariable.display.hsIcons) {
        calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);
        calculator.section.hs.set.iconPosition('center');
    } else {
        // Not sure how can I benefit this state to be considered when needed
    }

    if(calculator.globalVariable.display.hsMainTitle) {
        calculator.titles.hs.show();
        calculator.titles.update.position();
    }

    if(calculator.globalVariable.display.hsGhostTitle) {
        calculator.titles.hs.ghost.text();
        calculator.titles.hs.ghost.show();
    }

    //------------------------------------------------------------//
    //------- NEWLY ADDED COMMANDS BE WARY !!!! -----------------//
    //------------------------------------------------------------//
    if(calculator.globalVariable.isOG2 && calculator.globalVariable.display.hsResults) {
        $('.roleToHide').css({'display':'none'});
        $('.pWrap').css({'margin-top':'18px'})
    }

    if(!calculator.globalVariable.isOG2 && calculator.globalVariable.display.hsResults) {
        $('.roleToHide').css({'display':'block'});
        $('.pWrap').css({'margin-top':'40px'})
    }

    if(!calculator.globalVariable.isOG2) {
        $('.roleToHide').css({'display':'block'});
    }

    if(calculator.globalVariable.isOG2 && calculator.globalVariable.display.cResults) {
        calculator.results.leader.display.role(false)

    }

    if(!calculator.globalVariable.isOG2 && calculator.globalVariable.display.cResults) {
        calculator.results.leader.display.role(true)

    }

    //------------------------------------------------------------//
    //------------------------------------------------------------//
    //------------------------------------------------------------//


    //------ DELAYED ACTIVATIONS -------//

    setTimeout(()=>{

        calculator.globalVariable.aBitOfWaitingIsDone = true;

        // MODIFIED FOR THE TUTOTIAL LC2 EARLY STEPS NOT SURE IF
        // WE WILL EVER NEED TO CHANGE IT BACK TO HAVING A DYNAMIC DISPLAY
        // IF SO WE MAY DO THIS BY HAND FROM THE INFOBOX SECTION WHENEVER IT IS NEEDED
        // I WILL HAVE IT SET TO FALSE STARTING FROM LC2 INFO BOXES
        // calculator.globalVariable.dynamicDisplay = true;

        calculator.button.enable.minTop();
        calculator.button.display.minTop(true);

        calculator.button.enable.minBottom();
        calculator.button.display.minBottom(true);

    }, 5000);

}


//------------------ CONTEST -----------------//

calculator.results.leader.switches = Array(4);
calculator.results.leader.switches = [false, false, false, false];


calculator.results.leader.update.payoffHeights = function(array) {

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

calculator.results.leader.display.investment = function(show) {

    var opacity = show ? '1' : '0';
    $('.cLeft, .cRight').css({'opacity': opacity});
    $('.pRight, .pLeft').css({'display':'none'});
    $('.topText').css({'justify-content':'center', 'border-bottom':'0px black'});


    calculator.results.leader.switches[0] = show;
    calculator.results.leader.update.payoffHeights(calculator.results.leader.switches);

    calculator.results.tokenTextIsShown = true;

}

calculator.results.leader.display.prize = function(show) {

    var opacity = show ? '1' : '0';
    $('.pLeft, .pRight').css({'opacity': opacity});
    $('.tokenTag').css({'display':'none'});

    calculator.results.leader.switches[1] = show;
    calculator.results.leader.update.payoffHeights(calculator.results.leader.switches);

    if(show) {

        $('.pRight, .pLeft').css({'display':'flex'});
        $('.topText').css({'justify-content':'space-between'});
        calculator.results.tokenTextIsShown = false;

    }

}

calculator.results.leader.display.netPayoff = function(show) {

    var opacity = show ? '1' : '0';
    $('.npLeft, .npRight').css({'opacity': opacity});
    $('.topText').css({'border-bottom':'1px black dashed'});
    calculator.results.leader.switches[2] = show;
    calculator.results.leader.update.payoffHeights(calculator.results.leader.switches);

}

calculator.results.leader.display.role = function(show) {

    var opacity = show ? '1' : '0';
    $('.rLeft, .rRight').css({'opacity': opacity});
    calculator.results.leader.switches[3] = show;
    calculator.results.leader.update.payoffHeights(calculator.results.leader.switches);

}



calculator.results.show.leaderOutcomes = function() {

    $('.payoffWrap, .imageWrap23').css({'transition' : '1.023456s',  'opacity':'1'});
    calculator.space.contestResultsIsOpen = true;

    if(!calculator.globalVariable.contestResultsExist) {
        $('.payoffWrap').css({'transition' : '0s', 'opacity':'0'});
    }

    calculator.space.update.heights();

}

calculator.results.hide.leaderOutcomes = function() {

    $('.payoffWrap, .imageWrap23').css({'transition' : '1.023456s', 'transition-delay':'0s', 'opacity':'0'});
    calculator.space.contestResultsIsOpen = false;

    // Do not hide the contest titles when the subjective view is the leader
    if(calculator.globalVariable.playerIndex === -1 && calculator.globalVariable.playerView) {
        calculator.space.contestResultsIsOpen = true;
        $('.imageWrap23').css({'transition' : '0.15s', 'transition-delay':'0s','opacity':'1'});
    }

    // do not hide the contest title when contest title hover is close.
    // If the title is hidden then it will never be opened by the hover since it is closed
    if(!calculator.globalVariable.hover.cTitle) {
        calculator.space.contestResultsIsOpen = true;
        $('.imageWrap23').css({'transition' : '0.5s', 'transition-delay':'0s', 'opacity':'1'});
    }

    calculator.space.update.heights();

}


//----------- HELP SABOTAGE ----------//

calculator.results.hide.followerOutcomesBottom = function() {

    calculator.space.close.hsResultsBottom();
    $('.leftSideResult, .rightSideResult, .leftSidePrize, .rightSidePrize, .leftSideRole, .rightSideRole').css({'transition':'0.3521s', 'transition-delay':'0s', 'opacity':'0'});

}

calculator.results.hide.followerOutcomesTop = function() {

    calculator.space.close.hsResultsTop();
    $('.fNetPayoffText, .fResults').css({'transition-delay':'0s', 'transition':'0.3521s', 'opacity':'0'});

}

calculator.results.hide.followerOutcomesAll = function() {

    calculator.results.hide.followerOutcomesTop();
    calculator.results.hide.followerOutcomesBottom();

}


calculator.results.show.followerOutcomesBottom = function() {

    if(calculator.globalVariable.playerView && calculator.globalVariable.playerIndex === -1)

    $('.fResults').css({'transition' : '0.15s', 'opacity':'1'});

    calculator.space.open.hsResultsBottom();

    $('.leftSideResult, .rightSideResult').css({'transition':'0.521s', 'transition-delay':'0.5s', 'opacity':'1'});
    $('.leftSidePrize, .rightSidePrize').css({'transition':'0.521s', 'transition-delay':'0.5s', 'opacity':'1'});
    $('.leftSideRole, .rightSideRole').css({'transition':'0.521s', 'transition-delay':'0.5s', 'opacity':'1'});

}

calculator.results.show.followerOutcomesTop = function() {

    calculator.space.open.hsResultsTop();
    $('.fNetPayoffText, .fResults').css({'transition-delay':'1.2s','transition':'0.3521s', 'opacity':'1'});

}

calculator.results.show.followerOutcomesAll = function() {

    calculator.results.show.followerOutcomesTop();
    calculator.results.show.followerOutcomesBottom();

}


//---------- ALL ----------//

calculator.results.softHide.allResults = function() {

    $('.payoffWrap, .fNetPayoffText, .fResults, .leftSideResult, .rightSideResult, .leftSidePrize, .rightSidePrize, .leftSideRole, .rightSideRole').css({'transition-delay':'0s', 'transition' : '0.15s', 'opacity':'0'});

}

calculator.results.hide.all = function() {

    calculator.results.hide.followerOutcomesAll();
    calculator.results.hide.leaderOutcomes();
    calculator.globalVariable.dynamicDisplay = false;
    calculator.titles.update.position();

}

calculator.results.show.all = function() {

    calculator.results.show.followerOutcomesBottom();
    calculator.results.show.followerOutcomeTop();
    calculator.results.show.leaderOutcomes();

}


//-------------- TEXT AND COLOR UPDATING ------------//

calculator.results.tokenTextIsShown = undefined;
calculator.results.resultTextsType = undefined;
calculator.results.lastWinner = undefined;


calculator.results.update.contestText = function(w) {

    w = w === undefined ? calculator.results.lastWinner : w;
    calculator.results.lastWinner = w;

    var winnerPrize,winnerRole, loserRole;

    // can be replaced with typeofcontest
    if(calculator.globalVariable.isOG1 || calculator.globalVariable.isOG2) {
        winnerRole = 'Continue as Leader';
        loserRole = 'Became a Follower';
        winnerPrize = 1000;
    }
    if(calculator.globalVariable.isIGA || calculator.globalVariable.isIGB) {
        winnerRole = 'Became the Leader';
        loserRole = 'Continue as Follower';
        winnerPrize = 0;
    }
    if(calculator.globalVariable.isGeneric) {
        winnerRole = 'Upgrade in role';
        loserRole = 'Downgrade in role';

        winnerPrize = 'PRIZE';
    }


    //---//


    var resultLeft = document.getElementById('resultLeft');
    var prizeLeft = document.getElementById('prizeLeft');
    var costLeft = document.getElementById('costLeft');
    var netPayoffLeft = document.getElementById('netPayoffLeft');
    var roleLeft = document.getElementById('roleLeft');
    var resultRight = document.getElementById('resultRight');
    var prizeRight = document.getElementById('prizeRight');
    var costRight = document.getElementById('costRight');
    var netPayoffRight = document.getElementById('netPayoffRight');
    var roleRight = document.getElementById('roleRight');
    var myTokenTag1 = document.getElementById('tokenTag1');
    var myTokenTag2 = document.getElementById('tokenTag2');

    var tokenTag1, tokenTag2;
    if(calculator.results.tokenTextIsShown) {
        tokenTag1 = efo === 0 ? ' token' : ' tokens';
        tokenTag2 = oefo === 0 ? ' token' : ' tokens';
        $('.tokenTag').css({'padding-left':'10px', 'font-weight':'400', 'display':'inline'});
    } else {
        tokenTag1 = tokenTag2 = '';
        $('.tokenTag').css({'display':'none'});
    }


    //---//


    resultLeft.innerHTML = w === 1 ? 'WON' : 'LOST';
    prizeLeft.innerHTML = w === 1 ? winnerPrize : 0;
    costLeft.innerHTML = efo;
    myTokenTag1.innerHTML = tokenTag1;
    netPayoffLeft.innerHTML = -efo + ( w === 1 ? winnerPrize : 0);
    roleLeft.innerHTML = w === 1 ? winnerRole : loserRole;

    resultRight.innerHTML = w === 2 ? 'WON' : 'LOST';
    prizeRight.innerHTML = w === 2 ? winnerPrize : 0;
    costRight.innerHTML = oefo;
    myTokenTag2.innerHTML = tokenTag2;
    netPayoffRight.innerHTML = -oefo + ( w === 2 ? winnerPrize : 0);
    roleRight.innerHTML = w === 2 ? winnerRole : loserRole;


    //---//


    if(calculator.globalVariable.isGeneric) {

        prizeLeft.innerHTML = w === 1 ? winnerPrize : 0;
        prizeRight.innerHTML = w === 2 ? winnerPrize : 0;

        var str1, str2, str3;
        str1 = '<span style=\'color:red;\'>';
        str2 = '</span>';
        str3 = str1 + ' - ' + efo + str2;

        if(efo === 0) {
            netPayoffLeft.innerHTML =  w === 1 ? winnerPrize : -efo;
        } else if(efo > 0) {
            netPayoffLeft.innerHTML = w === 1 ? (winnerPrize + str3) : -efo;
        }

        var ostr1, ostr2, ostr3;
        ostr1 = '<span style=\'color:red;\'>';
        ostr2 = '</span>';
        ostr3 = ostr1 + ' - ' + oefo + ostr2;

        if(oefo === 0) {
            netPayoffRight.innerHTML =  w === 2 ? winnerPrize : -oefo;
        } else if(oefo > 0) {
            netPayoffRight.innerHTML = w === 2 ? (winnerPrize + ostr3) : -oefo;
        }

    }

}


calculator.introduce.costs = function() {

    if(calculator.introduce.costsAreDisplayed) {
        $('.of1NetPayoff, .of2NetPayoff').css({'color':'red'});
        $('.f1NetPayoff, .f2NetPayoff').css({'color':'red'});

        if((oh1 + os1) === 0) {
            $('.of1NetPayoff').css({'transition':'0s', 'color':'#00000070'});
        }
        if((oh2 + os2) === 0) {
            $('.of2NetPayoff').css({'transition':'0s', 'color':'#00000070'});
        }
        if((h1 + s1) === 0) {
            $('.f1NetPayoff').css({'transition':'0s', 'color':'#00000070'});
        }
        if((h2 + s2) === 0) {
            $('.f2NetPayoff').css({'transition':'0s', 'color':'#00000070'});
        }


        $('#f1netPayoff').css({'transition':'0.1s', 'opacity':'1'});
        var f1Cost = h1 + s1;
        $('#f1netPayoff').html(f1Cost);

        $('#f2netPayoff').css({'transition':'0.1s', 'opacity':'1'});
        var f2Cost = h2 + s2;
        $('#f2netPayoff').html(f2Cost);

        $('#of1netPayoff').css({'transition':'0.1s', 'opacity':'1'});
        var of1Cost = oh1 + os1;
        $('#of1netPayoff').html(of1Cost);

        $('#of2netPayoff').css({'transition':'0.1s', 'opacity':'1'});
        var of2Cost = oh2 + os2;
        $('#of2netPayoff').html(of2Cost);
    } else {
        $('#of2netPayoff, #of1netPayoff, #f2netPayoff, #f1netPayoff').css({'transition':'0.1s', 'opacity':'0'});
    }

}

calculator.results.update.followerHSText = function(w) {

    w = w === undefined ? calculator.results.lastWinner : w;
    calculator.results.lastWinner = w;

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
    leftSideResult.innerHTML = w === 1 ? 'GROUP WON' : 'GROUP LOST';
    f1NetPayoff.innerHTML = -(h1 + s1) + ((w === 1) ? 100 : 0);
    f2NetPayoff.innerHTML = -(h2 + s2) + ((w === 1) ? 100 : 0);

    rightSidePrize.innerHTML = w === 2 ? fwinnerPrize : floserPrize;
    rightSideRole.innerHTML = w === 2 ? fwinnerRole : floserRole;
    rightSideResult.innerHTML = w === 2 ? 'GROUP WON' : 'GROUP LOST';
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

calculator.results.update.outcomeColors = function(w) {

    w = w === undefined ? calculator.results.lastWinner : w;
    calculator.results.lastWinner = w;

    if(w === 1) {
        $('.resultLeft, .leftSideResult').css({'transition':'1s', 'background-color':'darkblue'});
        $('.resultRight, .rightSideResult').css({'transition':'1s', 'background-color':'darkred', 'color':'white'});
    }
    if(w === 2) {
        $('.resultLeft, .leftSideResult').css({'transition':'1s', 'background-color':'darkred'});
        $('.resultRight, .rightSideResult').css({'transition':'1s', 'background-color':'darkblue', 'color':'white'});
    }

}



calculator.results.update.allColors = function(w) {

    // w = w === undefined ? calculator.results.lastWinner : w;
    // calculator.results.lastWinner = w;

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

    // if((oh1 + os1) === 0) {
    //     $('.of1NetPayoff').css({'color':'black'});
    // }
    // if((oh2 + os2) === 0) {
    //     $('.of2NetPayoff').css({'color':'black'});
    // }
    // if((h1 + s1) === 0) {
    //     $('.f1NetPayoff').css({'color':'black'});
    // }
    // if((h2 + s2) === 0) {
    //     $('.f2NetPayoff').css({'color':'black'});
    // }

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

    if(calculator.globalVariable.isIGA || calculator.globalVariable.isIGB) {

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

    calculator.results.update.outcomeColors(w)

}

calculator.results.update.allTextAndColors = function(w) {

    if(w === undefined) {
        console.log('WARNING WINNER INDEX FOR CALCULATOR.RESULTS.UPDATE.* IS UNDEFINED');
    }

    calculator.results.update.contestText(w);
    calculator.results.update.followerHSText(w);
    calculator.results.update.allColors(w);

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


//-------SPIN BUTTON COMMAND-------//

calculator.button.spin = function() {

    if(calculator.globalVariable.bottomSpinButtonIsEnabled) {

        calculator.globalVariable.aBitOfWaitingIsDone = false;

        calculator.wheel.spin();

        calculator.globalVariable.dynamicDisplay = false;

    }

}


//----- SPIN TOP -----//

calculator.button.enable.spinTop= function() {

    $('.spinImage').css({'display':'inline'});

}

calculator.button.disable.spinTop = function() {

    $('.spinImage').css({'display':'none'});

}

calculator.button.display.spinTop = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.spinImage').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

}


//------ MINIMIZE TOP ------//

calculator.button.display.minTop = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.minImageTopSetup').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

}

calculator.button.disable.minTop = function() {

    $('.minImageTopSetup').css({'display':'none'});

}

calculator.button.enable.minTop = function() {

    $('.minImageTopSetup').css({'display':'flex'});

}


//--------- SPIN BOTTOM --------//

calculator.button.display.spinBottom = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.spinImage23').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

}

calculator.button.disable.spinBottom = function() {

    $('.spinImage23').css({'display':'none'});

}

calculator.button.enable.spinBottom = function() {

    $('.spinImage23').css({'display':'inline'});

}


//--------- MINIMIZE BOTTOM ---------//

calculator.button.display.minBottom = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.minImageBottomSetup').css({'transition':'1s', 'opacity': opacity, 'cursor' : cursor});

}

calculator.button.disable.minBottom = function() {

    $('.minImageBottomSetup').css({'display':'none'});

}

calculator.button.enable.minBottom = function() {

    $('.minImageBottomSetup').css({'display':'flex'});

}


//---------- SPIN BOTTOM MINI -------//

calculator.button.display.spinBottomMini = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.spinImageMini').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

}

calculator.button.disable.spinBottomMini = function() {

    $('.spinImageMini').css({'display':'none'});

}

calculator.button.enable.spinBottomMini = function() {

    $('.spinImageMini').css({'display':'flex'});

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

//------------- EXAMPLE SLIDER SECTION -------//

calculator.section.example.horizontal.show = function() {


    $('.horizontalSliderExample').css({'transition':'0.3s', 'transform':'scale(1)', 'display':'flex', 'opacity':'1'});

}

calculator.section.example.horizontal.hide = function() {

    $('.horizontalSliderExample').css({'transition':'0.3s', 'opacity':'0'});
    setTimeout(()=>{
        $('.horizontalSliderExample').css({'transition':'0.3s', 'transform':'scale(0)', 'display':'none'});
    },300)


}


calculator.section.example.vertical.show = function() {

    $('.verticalSliderExample').css({'transition':'0.3s', 'transform':'scale(1)', 'margin-top':'20px', 'display':'flex', 'opacity':'1'});
    setTimeout(()=>{$('.verticalSliderExample').css({'transition':'0.6s', 'opacity':'1'});}, 300)
}

calculator.section.example.vertical.hide = function() {

    $('.verticalSliderExample').css({'transition':'0.5s', 'transform':'scale(0)', 'opacity':'0'});
    setTimeout(()=>{$('.verticalSliderExample').css({'display':'none'});}, 500);

}


//------------------- DISPLAY CALCULATOR -----------------//

calculator.show = function() {

    calculator.section.hs.minimize(false);
    calculator.section.contest.minimize(true);

    $('.decisionWrapF').css({'transition':'1.023456s', 'margin-bottom':'10px'});
    $('.generalMarginBox').css({'transition':'1.023456s', 'transform-origin':'top', 'transform':'scaleY(1)'});
    calculator.space.update.heights();

}

calculator.hide = function() {

    $('.generalMarginBox').css({'transition':'0.5s', 'transform-origin':'top', 'transform':'scaleY(0)'});

    setTimeout(()=> {

        $('.generalMarginBox').css({'transition':'0.5s', 'height':'0px'});
        $('.decisionWrapF').css({'transition':'0.5s', 'margin-bottom':'115px'});

    }, 200)

}


//------------- MINIMIZE HELP/SABOTAGE SECTION -----------//

calculator.section.hs.minimize = function(show) {

    var mt = show ? '-77px' : '-33px';
    var pt = show ? '91px' : '0px';
    var sc = show ? 'scale(0.6)' : 'scale(1)';

    $('.sliderBarWrap').css({'transition':'1.023456s', 'padding-top' : pt, 'transform' : sc});
    $('.generalMarginBox').css({'transition':'1.023456s', 'margin-top' : mt});


}


//------------ MINIMIZE CONTEST SECTION ---------------//

calculator.section.contest.minimize = function(show) {

    var mb;

    var mt = show ? '-89px' : '-29px';
    var sc = show ? 'scale(0.6)' : 'scale(1)';

    if(calculator.space.contestResultsIsOpen && !calculator.globalVariable.closedDecisionCalculator) {
        mb = show ? '-115px' : '0px';
    } else {
        mb = show ? '-66px' : '0px';
    }


    $('.contestSectionMinimize').css({'transition':'1.023456s', 'transform-origin':'top',  'transform' : sc});
    $('.generalMarginBox').css({'transition':'1.023456s', 'margin-bottom' : mb});

    $('.imageWrap23').css({'transition':'1.023456s', 'margin-top':mt});


}


//------------- DISPLAY CALCULATOR ------------------//

calculator.section.all.opacity = function(opt) {

    $('.generalMarginBox').css({'opacity' : opt.toString()});

}

calculator.doNotShowDecisionSlider = false;

calculator.section.all.adjust.decisionSliders = function() {

    if(calculator.globalVariable.playerView) {

        if(calculator.globalVariable.playerIndex === -1) {

            calculator.section.decision.leader.opacity(1)
            calculator.decisionSlider.leader.enable();
            calculator.decisionSlider.follower.disable();

        }

        if(calculator.globalVariable.playerIndex === 0 || calculator.globalVariable.playerIndex === 1) {

            if(!calculator.doNotShowDecisionSlider) {
                calculator.section.decision.follower.opacity(1)
                calculator.decisionSlider.follower.enable();
                calculator.decisionSlider.leader.disable();
            } else {
                calculator.decisionSlider.follower.disable();
                calculator.decisionSlider.leader.disable();
            }

        }

    } else {
        calculator.decisionSlider.follower.disable();
        calculator.decisionSlider.leader.disable();
    }

}


//------------- DISPLAY FOLLOWER DECISION SLIDER -----------------//

calculator.section.decision.follower.opacity = function(opt) {

    $('.decisionWrapF').css({'opacity' : opt.toString()});

}


//------------- DISPLAY PLAYER DECISION SLIDER -----------------//

calculator.section.decision.leader.opacity = function(opt) {

    $('.decisionWrapL').css({'opacity' : opt.toString()});

}


//--------------- HELP SABOTAGE SECTION  ----------//

calculator.section.hs.display.all = function(show) {

    var d = show ? 'flex' : 'none';

    $('.hsWrap, .ctTop, .ctGhost').css({'display': d});
    calculator.space.hsIsOpen = show;

}

calculator.section.hs.display.totalHSBars = function(show) {

    if(!show) {


        $('.followersTotalHS').css({'opacity':'0'});


    } else {

        $('.OGCIcon').css({'margin-top' : '0px'});
        $('.followersTotalHS').css({'opacity':'1'});
        $('.ctWrap').css({'margin-bottom':'-50px'});

    }

}

calculator.section.hs.display.totalHSBars(false);

//----//
// Slider - Follower icon - Arrows - Leader icon - Fight icon - Separator
calculator.section.hs.opacity.SFiALiFiS = function(array) {

    calculator.section.hs.opacity.followerSliders(array[0]);
    calculator.section.hs.opacity.followerIcons(array[1]);
    calculator.section.hs.opacity.followerArrows(array[2]);
    calculator.section.hs.opacity.leaderIconsMain(array[3]);
    calculator.section.hs.opacity.fightIcon(array[4]);
    calculator.section.hs.opacity.separator(array[5]);

}

// Methods used in SFIALIFIS
calculator.section.hs.opacity.followerSliders = function(o) {

    if(o != -1) {

        $('.followersRight, .followersLeft').css({'transition':'1.023456s', 'opacity': o.toString()});

    }

}

calculator.section.hs.opacity.followerArrows = function(o) {

    if(o != -1) {

        $('.arrowIconBoxLeft, .arrowIconBoxRight').css({'opacity':o.toString()});

    }

}

calculator.section.hs.opacity.followerIcons = function(o) {

    if(o != -1) {

        $('.wrapLeft,  .wrapRight').css({'transition':'1.023456s', 'opacity': o.toString()});

    }

    if(o === 1) {
        $('.spf1, .spf1L11, .spf1L12, .spf1L21, .spf1L22').css({'filter':'drop-shadow(0px 7px 3px black)'});
    } else {
        $('.spf1, .spf1L11, .spf1L12, .spf1L21, .spf1L22').css({'filter':'drop-shadow(0px 0px 0px transparent)'});
    }

}

calculator.globalVariable.tutorialLeaderIconOpacityBlockisOn = false;

calculator.section.hs.opacity.leaderIconsMain = function(o) {

    if(o != -1) {
        if(!calculator.globalVariable.tutorialLeaderIconOpacityBlockisOn){
            $('.imgwrap3').css({'transition':'1.023456s', 'opacity': o.toString()});
        } else {
            $('.imgwrap3').css({'transition':'1.023456s', 'opacity': '1'});
        }
    }

    if(o === 1) {
        $('.splc1, .splc2').css({'filter':'drop-shadow(0px 7px 3px black)'});
    } else {
        $('.splc1, .splc2').css({'filter':'drop-shadow(0px 0px 0px transparent)'});
    }

}

calculator.section.hs.opacity.fightIcon = function(o) {

    if(o != -1) {

        $('.imgwrapfight').css({'transition':'0.5s', 'opacity' : o.toString()});

    }

}

calculator.section.hs.opacity.separator = function(o) {

    if(o === 1) {

        $('.verticalSeparator').css({'transition':'1.023456s', 'transition-delay':'0.5s', 'height':'166px', 'opacity' : '1'});

    }

    if(o === 0) {

        $('.verticalSeparator').css({'transition-delay':'0s', 'transition':'1.023456s', 'height':'0px', 'opacity' : '0'});

    }

}
//----//

calculator.section.hs.set.iconPosition = function(position) {

    if(position === 'center') {

        $('.OGCIcon').css({'transition':'1.023456s', 'margin-top':'-29px'});
        $('.imgwrapfight').css({'transition':'1.023456s','margin-left':'0px', 'margin-right':'0px', 'margin-top':'0px'});
        $('.leftLeaderIconMainWrap').css({'transition':'0s','transform':'rotate(0deg)'});
        $('.rightLeaderIconMainWrap').css({'transition':'0s','transform':'rotate(0deg)'});
        $('.fightIcon').css({'transition':'0.5s', 'transform':'rotate(0turn)'});

        calculator.icons.update.leaderMargins(false);

    }

    if(position == 'bottom') {

        $('.OGCIcon').css({'margin-top':'39px'});
        $('.imgwrapfight').css({'transition':'1.023456s','margin-left':'35px', 'margin-right':'35px', 'margin-top':'10px'});
        $('.leftLeaderIconMainWrap').css({'transition':'1.023456s','transform':'rotate(10deg)'});
        $('.rightLeaderIconMainWrap').css({'transition':'1.023456s','transform':'rotate(-10deg)'});
        $('.fightIcon').css({'transition':'0.5s', 'transform':'rotate(1turn)'});

        calculator.icons.update.leaderMargins(true);

    }

}

calculator.section.hs.opacity.activeFollowerIcon = function(tag, show) {

    var opacity = show ? '1' : '0';
    var myString = '.' + tag;
    $(myString).css({'opacity' : opacity});

}

calculator.section.hs.set.grayToAll = function() {

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

calculator.section.power.opacity.bar = function(opt) {

    $('.pWrap').css({'opacity' : opt.toString()});

}

calculator.section.power.display.barText = function(tag) {

    if(tag === 'top') {
        $('.pTitleTop').css({'opacity' : '1'});
        $('.pTitleBottom').css({'opacity' : '0'});
        $('.powerRatio').css({'margin-top':'0px', 'margin-bottom':'-10px'});
        calculator.section.power.display.barLegend(false);
    }

    if(tag === 'bottom') {
        $('.pTitleTop').css({'opacity' : '0'});
        $('.pTitleBottom').css({'opacity' : '1'});
        calculator.section.power.display.barLegend(true);
    }

    if(tag === 'none') {
        $('.pTitleTop').css({'opacity' : '0'});
        $('.pTitleBottom').css({'opacity' : '0'});
        $('.powerRatio').css({'margin-top':'0px', 'margin-bottom':'-4px'});
        calculator.section.power.display.barLegend(false);
    }

}

calculator.section.power.display.barLegend = function(show) {

    var opacity = show ? 'flex' : 'none';

    $('.legendwrapwrap').css({'display' : opacity});

}

calculator.section.power.adjust.space = function() {

    if(calculator.space.hsResultsBottomIsOpen) {
        $('.pWrap').css({'transition':'1.023456s', 'margin-top':'40px'});
    } else {
        $('.pWrap').css({'transition':'1.023456s', 'margin-top':'-54px'});
    }

}


//-------------- CONTEST SECTION ----------------//
//-------------- CONTEST SECTION ----------------//

calculator.section.contest.display.all = function(show) {

    calculator.section.contest.display.sliders(show);
    calculator.section.contest.display.title(show);
    calculator.section.contest.display.results(show);

}

calculator.section.contest.display.sliders = function(show) {

    var display = show ? 'flex' : 'none';

    $('.contestSection').css({'display': display});

    calculator.space.contestIsOpen = show;

    calculator.space.update.heights();

}

calculator.section.contest.display.title = function(show) {

    var display = show ? 'block' : 'none';

    $('.imageWrap23').css({'display': display});

    calculator.space.contestResultsIsOpen = show;

    calculator.space.update.heights();

}

calculator.section.contest.display.results = function(show) {

    var display = show ? 'flex' : 'none';

    $('.payoffWrap').css({'display': display});

    calculator.space.contestResultsIsOpen = show;

    calculator.space.update.heights();

}

// unused second set of leader icons
calculator.section.contest.display.icons = function(show) {

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


// s1,s2,h1,h2,os1,os2,oh1,oh2
calculator.values.set.helpSabo = function(valueArray) {

    s1 = valueArray[0];
    s2 = valueArray[1];
    h1 = valueArray[2];
    h2 = valueArray[3];
    os1 = valueArray[4];
    os2 = valueArray[5];
    oh1 = valueArray[6];
    oh2 = valueArray[7];

    calculator.values.update.efficiencies();
    calculator.values.update.probability();

}

calculator.values.set.efforts = function(valueArray) {

    efo = valueArray[0];
    oefo = valueArray[1];

    calculator.values.update.probability();

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


calculator.refresh.sliders = function() {

    var ourSide, theirSide, showAxis;
    ourSide = true;
    showAxis = true;
    theirSide = true;


    var f1, f2, of1, of2;

    $('#lSlider1').prop('value', efo);
    $('#lSlider1').change();

    $('#olSlider1').prop('value', oefo);
    $('#olSlider1').change();

    calculator.graphics.update.effortBar(efo, 'barl1', ourSide, !showAxis);
    calculator.graphics.update.effortBar(oefo, 'barl2', !ourSide, !showAxis);

    // // Example vertical Slider initiation
    // calculator.graphics.update.effortBar(efo, 'example_barl1', ourSide, !showAxis);
    // $('#example_lSlider1').prop('value', efo);
    // $('#example_lSlider1').change();

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

    calculator.graphics.update.helpSaboBar(f1, 'barf1', !theirSide, !showAxis);
    calculator.graphics.update.helpSaboBar(f2, 'barf2', !theirSide, !showAxis);
    calculator.graphics.update.helpSaboBar(of1, 'obarf1', theirSide, !showAxis);
    calculator.graphics.update.helpSaboBar(of2, 'obarf2', theirSide, !showAxis);

    // Example horizontal Slider intiation
    // $('#example_vSlider1').prop('value', f1);
    // $('#example_vSlider1').change();
    // calculator.graphics.update.helpSaboBar(f1, 'example_barf1', !theirSide, !showAxis);

    //if you are the leader
    if(calculator.globalVariable.playerIndex === -1) {
        //update dfslider according to efo
        calculator.decisionSlider.leader.effortBar(efo, !showAxis);
        $('#dSliderL').prop('value', efo);
        $('#dSliderL').change();
        calculator.graphics.update.barLabelX('bardl', true);

    }

    // if you are the first follower (strong)
    if(calculator.globalVariable.playerIndex === 0) {
        //update dfslider according to h1 s1
        calculator.decisionSlider.follower.helpSaboBar(f1, !showAxis);
        $('#dSliderF').prop('value', f1);
        $('#dSliderF').change();
        calculator.graphics.update.barLabelX('bardf', true);

    }

    //if you are the second follower (weak)
    if(calculator.globalVariable.playerIndex === 1) {
        //update dfslider according to h2 s2
        calculator.decisionSlider.follower.helpSaboBar(f2, !showAxis);
        $('#dSliderF').prop('value', f2);
        $('#dSliderF').change();
        calculator.graphics.update.barLabelX('bardf', true);

    }


}

calculator.refresh.values = function() {

    calculator.values.update.probability();
    calculator.values.update.efficiencies();

    calculator.refresh.sliders();

}

calculator.refresh.barXAxis = function() {

    calculator.update.barLabel('barl1', false);
    calculator.update.barLabel('barl2', false);
    calculator.update.barGrid('barl1', false);
    calculator.update.barGrid('barl2', false);

    calculator.update.barLabel('barf1', false);
    calculator.update.barLabel('barf2', false);
    calculator.update.barGrid('barf1', false);
    calculator.update.barGrid('barf2', false);

    calculator.update.barLabel('obarf1', false);
    calculator.update.barLabel('obarf2', false);
    calculator.update.barGrid('obarf1', false);
    calculator.update.barGrid('obarf2', false);

    // calculator.update.barLabel('example_barl1', false);
    // calculator.update.barGrid('example_barl1', false);

    // calculator.update.barLabel('example_barf1', false);
    // calculator.update.barGrid('example_barf1', false);

}


//////////////////////// OG SETUP METHODS //////////////////////////////////
//////////////////////// OG SETUP METHODS //////////////////////////////////
//////////////////////// OG SETUP METHODS //////////////////////////////////
//////////////////////// OG SETUP METHODS //////////////////////////////////
//////////////////////// OG SETUP METHODS //////////////////////////////////
//////////////////////// OG SETUP METHODS //////////////////////////////////


calculator.initialize = function() {

    calculator.pointers.activate([0, 0, 0, 0, 0, 0]);
    calculator.questions.activate.all([0, 0, 0, 0, 0, 0]);
    calculator.lock.activate([0, 0, 0, 0, 0, 0]);


    calculator.values.set.helpSabo([0,0,0,0,0,0,0,0]);
    calculator.values.set.efforts([200,200]);
    calculator.refresh.sliders();
    calculator.graphics.update.pie();

    // always hide the decision sliders during the tutorial
    calculator.section.all.adjust.decisionSliders();

}

calculator.null = function() {

    // begin with no calculator i.e. no height no space
    calculator.space.powerBarIsOpen = 0;
    calculator.space.powerBarLegendIsOpen = 0;
    calculator.space.contestIsOpen = 0;
    calculator.space.hsIsOpen = 0;
    calculator.space.contestResultsIsOpen = 0;
    calculator.space.hsResultsTopIsOpen = 0;
    calculator.space.hsResultsBottomIsOpen = 0;

    calculator.space.update.heights();

    // Make sure nothing is touchable to do that minimize everything to null
    $('.generalMarginBox').css({'transform':'scale(0)'});

    // turn off all possible hover mechanics
    calculator.globalVariable.hover.hsMinimize = 0;
    calculator.globalVariable.hover.hsIcons = 0;
    calculator.globalVariable.hover.hsResults = 0;
    calculator.globalVariable.hover.hsMainTitle = 0;
    calculator.globalVariable.hover.hsGhostTitle = 0;
    calculator.globalVariable.hover.hsButton = 0;

    calculator.globalVariable.hover.cMinimize = 0;
    calculator.globalVariable.hover.cResults = 0;
    calculator.globalVariable.hover.cTitle = 0;
    calculator.globalVariable.hover.cButton = 0;

    // turn off all the buttons
    calculator.globalVariable.topSpinButtonIsEnabled = false;
    calculator.button.display.spinTop(false);
    calculator.button.disable.spinTop();

    calculator.globalVariable.bottomSpinButtonIsEnabled = false;
    calculator.button.display.spinBottom(false);
    calculator.button.disable.spinBottom();

    // reset rolls
    calculator.stopRolling = true;

}

calculator.setup.hsOnly = function() {

    calculator.null();

    $('.generalMarginBox').css({'transform':'scale(1)'});

    calculator.space.hsIsOpen = 1;
    calculator.space.powerBarIsOpen = 0;
    calculator.space.powerBarLegendIsOpen = 0;
    calculator.space.contestIsOpen = 0;
    calculator.globalVariable.aBitOfWaitingIsDone = 1;

    calculator.globalVariable.isOG1 = 1;
    calculator.globalVariable.isOG2 = 0;
    calculator.globalVariable.isIGA = 0;
    calculator.globalVariable.isIGB = 0;

    // calculator.globalVariable.ourFollowersAreHetero = 1;
    // calculator.globalVariable.theirFollowersAreHetero = 1;

    calculator.globalVariable.winnerLeaderIndex = 1;
    calculator.globalVariable.winnerFollowerIndex = 1;

    calculator.globalVariable.playerView = 0;
    calculator.globalVariable.playerIndex = 0;

    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//
    calculator.globalVariable.tutorial.weAreInTutorial = 0;
    calculator.globalVariable.tutorial.IGSameColor = 0;
    calculator.globalVariable.tutorial.IGDifferentColor = 0;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([0,0,0,0,0,0]);

    //------ LOCKS -------//
    calculator.lock.activate([0,0,0,0,0,0]);

    //----- ROLL ------//
    // calculator.roll.reset();

    //----- ICONS -----//
    calculator.icons.setAll();
    calculator.section.hs.set.iconPosition('center');


    //-- SETUP TEXT --//
    calculator.titles.update.textAndColor();
    calculator.titles.hs.ghost.text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    calculator.section.all.adjust.decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.allResults();
    calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.hsIcons = 1;
    calculator.globalVariable.display.hsResults = 1;
    calculator.globalVariable.display.hsMainTitle = 1;
    calculator.globalVariable.display.hsGhostTitle = 1;
    calculator.globalVariable.display.hsButton = 1;
    calculator.globalVariable.display.hsMinimize = 1;

    calculator.globalVariable.hover.hsMinimize = 0;
    calculator.globalVariable.hover.hsIcons = 1;
    calculator.globalVariable.hover.hsResults = 1;
    calculator.globalVariable.hover.hsMainTitle = 1;
    calculator.globalVariable.hover.hsGhostTitle = 0;
    calculator.globalVariable.hover.hsButton = 1;

    //------- BUTTONS ------//
    calculator.button.display.spinTop(false);
    calculator.button.disable.spinTop();

    calculator.globalVariable.topSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    calculator.titles.hs.show();
    calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);
    setTimeout(()=>calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]), 2000);


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    calculator.section.power.opacity.bar(0);
    calculator.section.power.display.barText('none');
    calculator.graphics.dynamicPowerBarText = true;


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.cResults = 0;
    calculator.globalVariable.display.cTitle = 0;
    calculator.globalVariable.display.cButton = 0;
    calculator.globalVariable.display.cMinimize = 0;

    calculator.globalVariable.hover.cMinimize = 0;
    calculator.globalVariable.hover.cResults = 0;
    calculator.globalVariable.hover.cTitle = 0;
    calculator.globalVariable.hover.cButton = 0;

    calculator.section.contest.display.all(false);


    setTimeout(()=> {
        calculator.section.all.opacity(1);
        calculator.section.hs.minimize(0);// added for tutorial not sure if necessary in future
    }
    , 1000);

}



calculator.setup.hsAndPowerRatio = function() {

    calculator.null();

    $('.generalMarginBox').css({'transform':'scale(1)'});

    calculator.space.hsIsOpen = 1;
    calculator.space.powerBarIsOpen = 1;
    calculator.space.contestIsOpen = 0;
    calculator.globalVariable.aBitOfWaitingIsDone = 1;

    calculator.globalVariable.isOG1 = 1;
    calculator.globalVariable.isOG2 = 0;
    calculator.globalVariable.isIGA = 0;
    calculator.globalVariable.isIGB = 0;

    calculator.globalVariable.ourFollowersAreHetero = 1;
    calculator.globalVariable.theirFollowersAreHetero = 1;

    calculator.globalVariable.winnerLeaderIndex = 1;
    calculator.globalVariable.winnerFollowerIndex = 1;

    calculator.globalVariable.playerView = 0;
    calculator.globalVariable.playerIndex = 0;

    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//
    calculator.globalVariable.tutorial.weAreInTutorial = 0;
    calculator.globalVariable.tutorial.IGSameColor = 0;
    calculator.globalVariable.tutorial.IGDifferentColor = 0;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([0,0,0,0,0,0])

    //------ LOCKS -------//
    calculator.lock.activate([0,0,0,0,0,0]);

    //----- ROLL ------//
    // calculator.roll.reset();

    //----- ICONS -----//
    calculator.icons.setAll();
    calculator.section.hs.set.iconPosition('center');


    //-- SETUP TEXT --//
    calculator.titles.update.textAndColor();
    calculator.titles.hs.ghost.text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    calculator.section.all.adjust.decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.allResults();
    calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.hsIcons = 1;
    calculator.globalVariable.display.hsResults = 1;
    calculator.globalVariable.display.hsMainTitle = 1;
    calculator.globalVariable.display.hsGhostTitle = 1;
    calculator.globalVariable.display.hsButton = 1;
    calculator.globalVariable.display.hsMinimize = 1;

    calculator.globalVariable.hover.hsMinimize = 1;
    calculator.globalVariable.hover.hsIcons = 1;
    calculator.globalVariable.hover.hsResults = 1;
    calculator.globalVariable.hover.hsMainTitle = 1;
    calculator.globalVariable.hover.hsGhostTitle = 0;
    calculator.globalVariable.hover.hsButton = 1;

    //------- BUTTONS ------//
    calculator.button.display.spinTop(false);
    calculator.button.disable.spinTop();

    calculator.globalVariable.topSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    calculator.titles.hs.show();
    calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1])


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    calculator.section.power.opacity.bar(1);
    calculator.section.power.display.barText('none');
    calculator.section.power.display.barLegend(true);
    calculator.space.powerBarLegendIsOpen = true;
    calculator.graphics.dynamicPowerBarText = true;


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.cResults = 0;
    calculator.globalVariable.display.cTitle = 0;
    calculator.globalVariable.display.cButton = 0;
    calculator.globalVariable.display.cMinimize = 0;

    calculator.globalVariable.hover.cMinimize = 0;
    calculator.globalVariable.hover.cResults = 0;
    calculator.globalVariable.hover.cTitle = 0;
    calculator.globalVariable.hover.cButton = 0;

    calculator.section.contest.display.all(false);

    //------- INITIALIZE ------//
    calculator.refresh.values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    // calculator.refresh.sliders();


    setTimeout(()=> {
        calculator.section.all.opacity(1);
    }
    , 1000);

}

calculator.setup.hsAndPowerRatioPlayerView = function() {

    calculator.null();

    $('.generalMarginBox').css({'transform':'scale(1)'});

    calculator.space.hsIsOpen = 1;
    calculator.space.powerBarIsOpen = 1;
    calculator.space.contestIsOpen = 0;
    calculator.globalVariable.aBitOfWaitingIsDone = 0;

    calculator.globalVariable.isOG1 = 1;
    calculator.globalVariable.isOG2 = 0;
    calculator.globalVariable.isIGA = 0;
    calculator.globalVariable.isIGB = 0;

    // calculator.globalVariable.ourFollowersAreHetero = 1;
    // calculator.globalVariable.theirFollowersAreHetero = 1;
    //
    // calculator.globalVariable.winnerLeaderIndex = 1;
    // calculator.globalVariable.winnerFollowerIndex = 1;

    calculator.globalVariable.playerView = 1;
    calculator.globalVariable.playerIndex = 0;

    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//
    calculator.globalVariable.tutorial.weAreInTutorial = 0;
    calculator.globalVariable.tutorial.IGSameColor = 0;
    calculator.globalVariable.tutorial.IGDifferentColor = 0;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([0,0,0,0,0,0])

    //------ LOCKS -------//
    calculator.lock.activate([0,0,0,0,0,0]);

    //----- ROLL ------//
    // calculator.roll.reset();

    //----- ICONS -----//
    calculator.icons.setAll();
    // calculator.section.hs.set.iconPosition('center');


    //-- SETUP TEXT --//
    // calculator.titles.update.textAndColor();
    // calculator.titles.hs.ghost.text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    calculator.doNotShowDecisionSlider = true;
    calculator.section.all.adjust.decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.allResults();
    calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.hsIcons = 1;
    calculator.globalVariable.display.hsResults = 1;
    calculator.globalVariable.display.hsMainTitle = 1;
    calculator.globalVariable.display.hsGhostTitle = 1;
    calculator.globalVariable.display.hsButton = 1;
    calculator.globalVariable.display.hsMinimize = 1;

    calculator.globalVariable.hover.hsMinimize = 1;
    calculator.globalVariable.hover.hsIcons = 1;
    calculator.globalVariable.hover.hsResults = 1;
    calculator.globalVariable.hover.hsMainTitle = 1;
    calculator.globalVariable.hover.hsGhostTitle = 0;
    calculator.globalVariable.hover.hsButton = 1;

    //------- BUTTONS ------//
    // calculator.button.display.spinTop(false);
    // calculator.button.disable.spinTop();
    //
    // calculator.globalVariable.topSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    // calculator.titles.hs.show();
    // calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    // calculator.globalVariable.dynamicDisplay = false;
    // calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1])


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    // calculator.section.power.opacity.bar(1);
    // calculator.section.power.display.barText('none');
    // calculator.section.power.display.barLegend(true);
    // calculator.space.powerBarLegendIsOpen = true;
    // calculator.graphics.dynamicPowerBarText = true;


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    // calculator.globalVariable.display.cResults = 0;
    // calculator.globalVariable.display.cTitle = 0;
    // calculator.globalVariable.display.cButton = 0;
    // calculator.globalVariable.display.cMinimize = 0;
    //
    // calculator.globalVariable.hover.cMinimize = 0;
    // calculator.globalVariable.hover.cResults = 0;
    // calculator.globalVariable.hover.cTitle = 0;
    // calculator.globalVariable.hover.cButton = 0;
    //
    // calculator.section.contest.display.all(false);

    //------- INITIALIZE ------//
    // calculator.refresh.values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    // calculator.refresh.sliders();


    // setTimeout(()=> {
    //     calculator.section.all.opacity(1);
    // }
    // , 1000);

}

calculator.setup.hsAndPowerRatioTutorialOG2 = function() {

    calculator.null();

    $('.generalMarginBox').css({'transform':'scale(1)'});

    calculator.space.hsIsOpen = 1;
    calculator.space.powerBarIsOpen = 1;
    calculator.space.contestIsOpen = 0;
    calculator.globalVariable.aBitOfWaitingIsDone = 1;

    calculator.space.update.heights();

    calculator.globalVariable.isOG1 = 0;
    calculator.globalVariable.isOG2 = 1;
    calculator.globalVariable.isIGA = 0;
    calculator.globalVariable.isIGB = 0;

    calculator.globalVariable.winnerLeaderIndex = 2;
    calculator.globalVariable.winnerFollowerIndex = 1;

    calculator.globalVariable.playerView = 0;
    calculator.globalVariable.playerIndex = 0;

    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//
    calculator.globalVariable.tutorial.weAreInTutorial = 0;
    calculator.globalVariable.tutorial.IGSameColor = 0;
    calculator.globalVariable.tutorial.IGDifferentColor = 0;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([0,0,0,0,0,0])

    //------ LOCKS -------//
    calculator.lock.activate([0,0,0,0,0,0]);

    //----- ROLL ------//
    // calculator.roll.reset();

    //----- ICONS -----//
    calculator.icons.setAll();
    calculator.section.hs.set.iconPosition('center');


    //-- SETUP TEXT --//
    calculator.titles.update.textAndColor();
    calculator.titles.hs.ghost.text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    calculator.section.all.adjust.decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.allResults();
    calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.hsIcons = 1;
    calculator.globalVariable.display.hsResults = 0;
    calculator.globalVariable.display.hsMainTitle = 1;
    calculator.globalVariable.display.hsGhostTitle = 1;
    calculator.globalVariable.display.hsButton = 0;
    calculator.globalVariable.display.hsMinimize = 0;

    calculator.globalVariable.hover.hsMinimize = 0;
    calculator.globalVariable.hover.hsIcons = 0;
    calculator.globalVariable.hover.hsResults = 0;
    calculator.globalVariable.hover.hsMainTitle = 0;
    calculator.globalVariable.hover.hsGhostTitle = 0;
    calculator.globalVariable.hover.hsButton = 0;

    //------- BUTTONS ------//
    calculator.button.display.spinTop(false);
    calculator.globalVariable.topSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    calculator.titles.hs.show();
    calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    // calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);
    // setTimeout(()=>calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]), 2000);
    calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1])

    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    calculator.section.power.opacity.bar(1);
    calculator.section.power.display.barText('none');
    calculator.section.power.display.barLegend(true);
    calculator.space.powerBarLegendIsOpen = true;
    calculator.graphics.dynamicPowerBarText = true;


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    calculator.globalVariable.display.cResults = 0;
    calculator.globalVariable.display.cTitle = 0;
    calculator.globalVariable.display.cButton = 0;
    calculator.globalVariable.display.cMinimize = 0;

    calculator.globalVariable.hover.cMinimize = 0;
    calculator.globalVariable.hover.cResults = 0;
    calculator.globalVariable.hover.cTitle = 0;
    calculator.globalVariable.hover.cButton = 0;

    calculator.section.contest.display.all(false);

    //------- INITIALIZE ------//
    calculator.refresh.values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    // calculator.refresh.sliders();

}

calculator.setup.og = function() {

    calculator.null();

    $('.generalMarginBox').css({'transform':'scale(1)'});

    calculator.space.hsIsOpen = true;
    calculator.space.powerBarIsOpen = true;
    calculator.space.powerBarLegendIsOpen = false;
    calculator.space.contestIsOpen = true;
    calculator.globalVariable.aBitOfWaitingIsDone = true;

    calculator.globalVariable.isOG1 = 1;
    calculator.globalVariable.isOG2 = 0;
    calculator.globalVariable.isIGA = 0;
    calculator.globalVariable.isIGB = 0;

    calculator.globalVariable.ourFollowersAreHetero = 1;
    calculator.globalVariable.theirFollowersAreHetero = 1;

    calculator.globalVariable.winnerLeaderIndex = 1;
    calculator.globalVariable.winnerFollowerIndex = 1;

    calculator.globalVariable.playerView = 0;
    calculator.globalVariable.playerIndex = 0;

    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//
    calculator.globalVariable.tutorial.weAreInTutorial = 0;
    calculator.globalVariable.tutorial.IGSameColor = 0;
    calculator.globalVariable.tutorial.IGDifferentColor = 0;


    //----- AFTER SPIN ACTION SWITCHES ----//

    calculator.globalVariable.display.hsIcons = 1;
    calculator.globalVariable.display.hsResults = 1;
    calculator.globalVariable.display.hsMainTitle = 1;
    calculator.globalVariable.display.hsGhostTitle = 1;
    calculator.globalVariable.display.hsButton = 1;
    calculator.globalVariable.display.hsMinimize = 1;

    calculator.globalVariable.display.cResults = 1;
    calculator.globalVariable.display.cTitle = 1;
    calculator.globalVariable.display.cButton = 1;
    calculator.globalVariable.display.cMinimize = 1;


    //----- HOVER SWITCHES ------//

    calculator.globalVariable.hover.hsMinimize = 1;
    calculator.globalVariable.hover.hsIcons = 1;
    calculator.globalVariable.hover.hsResults = 1;
    calculator.globalVariable.hover.hsMainTitle = 1;
    calculator.globalVariable.hover.hsGhostTitle = 1;
    calculator.globalVariable.hover.hsButton = 1;

    calculator.globalVariable.hover.cMinimize = 1;
    calculator.globalVariable.hover.cResults = 1;
    calculator.globalVariable.hover.cTitle = 1;
    calculator.globalVariable.hover.cButton = 1;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([0,0,0,0,0,0])

    //------ LOCKS -------//
    calculator.lock.activate([0,0,0,0,0,0]);

    //----- ROLL ------//
    // calculator.roll.reset();

    //----- ICONS -----//
    calculator.icons.setAll();
    calculator.section.hs.set.iconPosition('center');

    //-- SETUP TEXT --//
    calculator.titles.update.textAndColor();
    calculator.titles.hs.ghost.text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    calculator.section.all.adjust.decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.allResults();
    calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    //------- BUTTONS ------//
    calculator.button.display.spinTop(false);
    calculator.button.disable.spinTop();

    calculator.globalVariable.topSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    calculator.titles.hs.show();
    calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);
    setTimeout(()=>calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]), 2000);


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    calculator.section.power.opacity.bar(true);
    calculator.section.power.display.barText('none');
    calculator.graphics.dynamicPowerBarText = true;


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    //----- GENERAL SETTINGS -----//

    // these display settins simply display none the specific section
    // calculator.section.contest.display.all(true);
    calculator.section.contest.display.sliders(true);
    calculator.section.contest.display.title(true);
    calculator.section.contest.display.results(true);
    calculator.section.contest.display.icons(false);

    //------- RESULTS DISPLAY SETTINGS ------//

    calculator.results.leader.display.investment(true);
    calculator.results.leader.display.prize(true);
    calculator.results.leader.display.netPayoff(true);
    calculator.results.leader.display.role(true);

    //------- BUTTONS ------//

    calculator.button.display.spinBottom(true);
    calculator.button.enable.spinBottom();
    calculator.globalVariable.bottomSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    // if the subjective index is leader then hiding the contest title will not work by construction
    calculator.titles.contest.show();
    // calculator.titles.contest.hide();

    //------ SLIDERS -------//

    // changes the slider range based on globalVariable.is***
    calculator.graphics.update.effortSliderRange();
    // changes the leader slider text background color based on globalVariable.is***
    calculator.graphics.update.contestSliderBackgroundColor();

    //------ REFRESH ------// -> NOT SURE WHEN IT IS NECESSARY TO USE THESE

    calculator.refresh.values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    calculator.refresh.sliders();




    setTimeout(()=> {
        calculator.section.all.opacity(1);
    }
    , 1000);


}

calculator.setup.ogTutorialOG2 = function() {

    calculator.space.hsIsOpen = true;
    calculator.space.powerBarIsOpen = true;
    calculator.space.powerBarLegendIsOpen = false;
    calculator.space.contestIsOpen = true;
    calculator.globalVariable.aBitOfWaitingIsDone = true;

    calculator.space.update.heights();


    //----- AFTER SPIN ACTION SWITCHES ----//

    calculator.globalVariable.display.hsIcons = 1;
    calculator.globalVariable.display.hsResults = 0;
    calculator.globalVariable.display.hsMainTitle = 0;
    calculator.globalVariable.display.hsGhostTitle = 1;
    calculator.globalVariable.display.hsButton = 0;
    calculator.globalVariable.display.hsMinimize = 1;

    calculator.globalVariable.display.cResults = 1;
    calculator.globalVariable.display.cTitle = 1;
    calculator.globalVariable.display.cButton = 0;
    calculator.globalVariable.display.cMinimize = 0;


    //----- HOVER SWITCHES ------//

    calculator.globalVariable.hover.hsMinimize = 0;
    calculator.globalVariable.hover.hsIcons = 0;
    calculator.globalVariable.hover.hsResults = 0;
    calculator.globalVariable.hover.hsMainTitle = 0;
    calculator.globalVariable.hover.hsGhostTitle = 0;
    calculator.globalVariable.hover.hsButton = 0;

    calculator.globalVariable.hover.cMinimize = 0;
    calculator.globalVariable.hover.cResults = 0;
    calculator.globalVariable.hover.cTitle = 0;
    calculator.globalVariable.hover.cButton = 0;


    //------ QUESTIONS -----//
    calculator.questions.activate.all([0,0,0,0,0,0])

    //------ LOCKS -------//
    calculator.lock.activate([0,0,0,0,0,0]);

    //----- ROLL ------//
    // calculator.roll.reset();

    //----- ICONS -----//
    calculator.icons.setAll();
    // calculator.section.hs.set.iconPosition('center');

    //-- SETUP TEXT --//
    calculator.titles.update.textAndColor();
    calculator.titles.hs.ghost.text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    // calculator.section.all.adjust.decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.allResults();
    // calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//

    //------- BUTTONS ------//
    calculator.button.display.spinTop(false);
    // calculator.button.disable.spinTop();

    calculator.globalVariable.topSpinButtonIsEnabled = false;

    //-------- TITLES -------//

    // calculator.titles.hs.show();
    // calculator.titles.hs.ghost.hide();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.dynamicDisplay = false;
    // calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,0]);
    // setTimeout(()=>calculator.section.hs.opacity.SFiALiFiS([1,1,1,0.4,0,1]), 2000);


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    calculator.section.power.opacity.bar(true);
    calculator.section.power.display.barText('none');
    calculator.graphics.dynamicPowerBarText = true;


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    //----- GENERAL SETTINGS -----//

    // these display settins simply display none the specific section
    // calculator.section.contest.display.all(true);
    calculator.section.contest.display.sliders(true);
    calculator.section.contest.display.title(true);
    calculator.section.contest.display.results(true);
    calculator.section.contest.display.icons(false);

    //------- RESULTS DISPLAY SETTINGS ------//

    calculator.results.leader.display.investment(true);
    calculator.results.leader.display.prize(true);
    calculator.results.leader.display.netPayoff(true);
    calculator.results.leader.display.role(true);

    //------- BUTTONS ------//

    calculator.button.display.spinBottom(false);
    // calculator.button.enable.spinBottom();
    calculator.globalVariable.bottomSpinButtonIsEnabled = false;

    //-------- TITLES -------//

    // if the subjective index is leader then hiding the contest title will not work by construction
    calculator.titles.contest.show();
    // calculator.titles.contest.hide();

    //------ SLIDERS -------//

    // changes the slider range based on globalVariable.is***
    calculator.graphics.update.effortSliderRange();
    // changes the leader slider text background color based on globalVariable.is***
    calculator.graphics.update.contestSliderBackgroundColor();

    //------ REFRESH ------// -> NOT SURE WHEN IT IS NECESSARY TO USE THESE

    calculator.refresh.values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    calculator.refresh.sliders();

    //
    //
    //
    // setTimeout(()=> {
    //     calculator.section.all.opacity(1);
    // }
    // , 1000);


}

//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//


calculator.initialize();
calculator.null();

// roll animations are disabled be wary!!!
calculator.setup.og();
// calculator.setup.hsOnly();
// calculator.setup.hsAndPowerRatio();


//------//

var spin = document.getElementById('spinImage');
calculator.globalVariable.topSpinButtonIsEnabled = true;
spin.onclick = function() {
    if(calculator.globalVariable.topSpinButtonIsEnabled) {

        calculator.globalVariable.aBitOfWaitingIsDone = false;

        calculator.wheel.spin();
        calculator.globalVariable.dynamicDisplay = false;

    }
}

//------//

var spin2 = document.getElementById('spinImage23');
calculator.globalVariable.bottomSpinButtonIsEnabled = true;
spin2.onclick = function() {
    if(calculator.globalVariable.bottomSpinButtonIsEnabled) {

        calculator.globalVariable.aBitOfWaitingIsDone = false;


        calculator.wheel.spin();
        calculator.globalVariable.dynamicDisplay = false;

        // calculator.titles.hs.ghost.hide();

    }
}

//------//

var minButton = document.getElementById('minImage');
calculator.globalVariable.minButtonIsEnabled = true;
minButton.onclick = function() {
    calculator.results.hide.all();
    calculator.button.display.minTop(false);
    calculator.button.disable.minTop();

    setTimeout(()=>{
        calculator.button.display.spinBottom(false);
    },200)

    setTimeout(()=>{
        calculator.button.disable.spinBottom();
    }, 500)

}

//------//

$(document).keydown(function() {
  console.log( "Handler for .keypress() called." );

  if(event.which === 32) {

      calculator.button.spin();

  }

});

//------//

calculator.globalVariable.open;
var calcTop = document.getElementById('calcButtonTop');
calculator.globalVariable.open = 1;

calcTop.onclick = function() {

    if(calculator.globalVariable.open) {


        $('.generalMarginBox').css({'transition':'0.3s', 'transform-origin':'top', 'transform':'scaleY(0)', 'height':'0'});
        setTimeout(()=>{$('.generalMarginBox').css({'display':'none'});}, 400);

    }

    if(!calculator.globalVariable.open) {
        $('.generalMarginBox').css({'display':'grid'})
        setTimeout(()=>{
            $('.generalMarginBox').css({'transition':'0.3s', 'transform-origin':'top', 'transform':'scaleY(1)'});
            calculator.space.update.heights();
        }, 100);


    }

    calculator.globalVariable.open = 1 - calculator.globalVariable.open;

}

//------//

var calcBottom = document.getElementById('calcButtonBottom');
calculator.globalVariable.bottomOpen = 1;
calculator.globalVariable.closedDecisionCalculator = 0;

calcBottom.onclick = function() {

    if(calculator.globalVariable.bottomOpen) {

        calculator.section.power.display.barText(true);

        $('.imageWrap23, .contestSection, .payoffWrap').css({'transition':'0.3s', 'transform-origin':'bottom', 'transform':'scaleY(0)'});

        calculator.space.contestIsOpen = false;
        calculator.space.update.heights();

        // $('.generalMarginBox').css({'margin-bottom':'-200px'});

        setTimeout(()=>{
            $('.generalMarginBox').css({'margin-bottom':'-20px'});
            $('.contestSection').css({'display':'none'});
        }, 400);


        calculator.globalVariable.closedDecisionCalculator = 1;

        calculator.globalVariable.hover.cMinimize = 0;

    }



    if(!calculator.globalVariable.bottomOpen) {

        calculator.section.power.display.barText(false);

        calculator.globalVariable.closedDecisionCalculator = 0;

        $('.contestSection').css({'display':'inherit'});

        setTimeout(()=>{

            $('.imageWrap23, .contestSection, .payoffWrap').css({'transition':'0.3s', 'transform-origin':'bottom', 'transform':'scaleY(1)'});
            $('.generalMarginBox').css({'margin-bottom':'0px'});
            calculator.space.contestIsOpen = true;
            calculator.space.contestResultsIsOpen = true;
            calculator.space.update.heights();


        }, 100);

        calculator.globalVariable.hover.cMinimize = 1;

    }

    calculator.globalVariable.bottomOpen = 1 - calculator.globalVariable.bottomOpen;

}


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//---------------------------- STARTING SETUP --------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


calculator.section.example.horizontal.hide();

calculator.section.example.vertical.hide();

calculator.hide();


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//-------------------------- TUTORIAL EXTENSTIONS ----------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

calculator.animate.recallDelay = 1;
calculator.animate.increment = 1;
calculator.varyHelpAnimationDelay = 500;
calculator.varyHelpAnimationActive = true;

var varyHelp = function(state, currentValue) {

    if(calculator.varyHelpAnimationActive) {

        if(state === 0) {

            calculator.change.f2(0, (currentValue + 1));

            setTimeout(()=>{
                varyHelp(1, currentValue)
            }, calculator.varyHelpAnimationDelay)

        }

        if(state === 1) {

            calculator.change.f2(0, currentValue);

            setTimeout(()=>{
                varyHelp(0, currentValue)
            }, calculator.varyHelpAnimationDelay)

        }

    } else {
        calculator.change.f2(0, currentValue);
    }

}

calculator.varySaboAnimationDelay = 500;
calculator.varySaboAnimationActive = true;

var varySabo = function(state, currentValue) {

    if(calculator.varySaboAnimationActive) {

        if(state === 0) {

            calculator.change.f1((currentValue + 1), 0);

            setTimeout(()=>{
                varySabo(1, currentValue)
            }, calculator.varySaboAnimationDelay)

        }

        if(state === 1) {

            calculator.change.f1(currentValue, 0);

            setTimeout(()=>{
                varySabo(0, currentValue)
            }, calculator.varyHelpAnimationDelay)

        }

    } else {
        calculator.change.f1(currentValue, 0);
    }

}

calculator.globalVariable.tutorialHoverSwitch = false;

calculator.introduce.Vslider1 = function() {

    calculator.globalVariable.tutorialLeaderIconOpacityBlockisOn = true;
    calculator.setup.hsOnly();

    // hide all but vslider 1 and the related icons
    // $('.sliderBarWrap').css('transform':'scale(1)');
    $('.ctTop, .followersRight, .rightLeaderIconMainWrap, .verticalSeparator, .arrowIconBoxRight, .objectivef2, .subjectivef2').css({'filter':'opacity(0)'});
    $('.wrapRight, .iaf2, .lbf2').css({'display':'none'});
    $('.lbf2, .iaf2').css({'opacity':'0'});

    // adjust the space
    $('.lbf1').css({'margin-right':'-313px'});//2px
    $('.hsWrap').css({'margin-left':'-200px', 'margin-top':'-30px'});//marginleft: 0px; margintop -57px;

    setTimeout(()=>{
        $('.calculator').css({'display':'none'})
        setTimeout(()=>{
            $('.calculator').css({'display':'flex'})
        }, 20)
    }, 10)

}

calculator.introduce.costsAreDisplayed = false;

calculator.introduce.onlyCosts = function() {

    calculator.introduce.costsAreDisplayed = true;
    $('#of2netPayoff, #of1netPayoff, #f2netPayoff, #f1netPayoff').css({'transition':'0.1s', 'opacity':'1'});
    calculator.introduce.costs()

}

calculator.introduce.Vslider2 = function() {


    $('.lbf1').css({'transition':'0.5s', 'margin-right':'100px'});

    $('.hsWrap').css({'transition':'0.5s', 'margin-left':'0px'});

    $('.wrapLeft').css({'trnsition':'0.5s', 'margin-left':'-45px'});


    setTimeout(()=>{
        $('.lbf1').css({'transition':'0s', 'margin-right':'2px'});
        $('.lbf2, .iaf2').css({'display':'flex'});
        setTimeout(()=>{
            $('.lbf2, .iaf2').css({'transition':'0.5s', 'opacity':'1'});
            $('.objectivef2, .subjectivef2').css({'transition':'0.5s', 'filter':'opacity(1)'})
        }, 300)
    }, 500)

}

calculator.introduce.Vslider34 = function() {


    // hide all but vslider 1 and the related icons
    $('.followersRight, .rightLeaderIconMainWrap, .verticalSeparator, .arrowIconBoxRight').css({'transition':'0s', 'filter':'opacity(1)', 'opacity':'0'});
    $('.wrapRight').css({'transition':'0s', 'display':'flex', 'opacity':'0'});
    $('.wrapLeft').css({'transition':'0s', 'margin-left':'0px'});
    calculator.icons.adjustForTreatment();


    setTimeout(()=>{
        $('.wrapRight').css({'transition':'1s', 'opacity':'1'});
        $('.followersRight, .rightLeaderIconMainWrap, .verticalSeparator, .arrowIconBoxRight').css({'transition':'1s',  'opacity':'1'});
    }, 350);


}

calculator.introduce.title = function() {

    $('.ctTop').css({'filter':'opacity(1)'});
    $('.ctTop').css({'transition':'0s', 'opacity':'0'});
    setTimeout(()=>{
        $('.ctTop').css({'transition':'1s', 'opacity':'1'});
    }, 200)

}

calculator.introduce.pointerCostActive = false;

calculator.introduce.pointerCost = function(state) {

    if(calculator.introduce.pointerCostActive) {

        $('.tutorialCostArrowWrap31').css({'transition':'0.5s', 'opacity':'1'});

        if(state === 0) {
            $('.tutorialCostArrowWrap31').css({'transition':'1s', 'margin-left':'-45px'});
            setTimeout(()=>{
                calculator.introduce.pointerCost(1);
            }, 750)

        }

        if(state === 1) {
            $('.tutorialCostArrowWrap31').css({'transition':'1s', 'margin-left':'-24px'});
            setTimeout(()=>{
                calculator.introduce.pointerCost(0);
            }, 750)

        }

    } else {

        $('.tutorialCostArrowWrap31').css({'opacity':'0'});

    }


}

calculator.introduce.pointerCostActive2 = false;

calculator.introduce.pointerCost2 = function(state) {

    if(calculator.introduce.pointerCostActive2) {

        $('.tutorialCostArrowWrap31, .tutorialCostArrowWrap32').css({'transition':'0.5s', 'opacity':'1'});

        if(state === 0) {
            $('.tutorialCostArrowWrap31, .tutorialCostArrowWrap32').css({'transition':'1s', 'margin-left':'-45px'});
            setTimeout(()=>{
                calculator.introduce.pointerCost2(1);
            }, 750)

        }

        if(state === 1) {
            $('.tutorialCostArrowWrap31, .tutorialCostArrowWrap32').css({'transition':'1s', 'margin-left':'-24px'});
            setTimeout(()=>{
                calculator.introduce.pointerCost2(0);
            }, 750)

        }

    } else {

        $('.tutorialCostArrowWrap31, .tutorialCostArrowWrap32').css({'opacity':'0'});

    }


}

calculator.introduce.pointerCostActive3 = false;

calculator.introduce.pointerCost3 = function(state) {

    if(calculator.introduce.pointerCostActive3) {

        $('.tutorialCostArrowWrap31, .tutorialCostArrowWrap32, .tutorialCostArrowWrap33, .tutorialCostArrowWrap34').css({'transition':'0.5s', 'opacity':'1'});

        if(state === 0) {
            $('.tutorialCostArrowWrap31, .tutorialCostArrowWrap32, .tutorialCostArrowWrap33, .tutorialCostArrowWrap34').css({'transition':'1s', 'margin-left':'-45px'});
            setTimeout(()=>{
                calculator.introduce.pointerCost3(1);
            }, 750)

        }

        if(state === 1) {
            $('.tutorialCostArrowWrap31, .tutorialCostArrowWrap32, .tutorialCostArrowWrap33, .tutorialCostArrowWrap34').css({'transition':'1s', 'margin-left':'-24px'});
            setTimeout(()=>{
                calculator.introduce.pointerCost3(0);
            }, 750)

        }

    } else {

        $('.tutorialCostArrowWrap31, .tutorialCostArrowWrap32, .tutorialCostArrowWrap33, .tutorialCostArrowWrap34').css({'opacity':'0'});

    }


}

calculator.introduce.animateLeaderSizeVariation = false;
calculator.introduce.leaderSizeVariation = function(state) {

    if(calculator.introduce.animateLeaderSizeVariation) {

        if(state === 0) {

            $('.infoBox93LeaderLeftSize').css({'transition':'1.5s', 'height':'130px', 'width':'98px'});
            $('.infoBox93LeaderRightSize').css({'transition':'1.5s', 'height':'50px', 'width':'38px'});

            setTimeout(()=>{
                calculator.introduce.leaderSizeVariation(1);
            }, 1750)

        }

        if(state === 1) {

            $('.infoBox93LeaderRightSize').css({'transition':'1.5s', 'height':'130px', 'width':'98px'});
            $('.infoBox93LeaderLeftSize').css({'transition':'1.5s', 'height':'50px', 'width':'38px'});

            setTimeout(()=>{
                calculator.introduce.leaderSizeVariation(0);
            }, 1750)

        }

    } else {

        $('.infoBox93LeaderLeftSize, .infoBox93LeaderRightSize').css({'transition':'1s', 'height':'80px', 'width':'60px'});

    }

}

calculator.introduce.animateLeaderSizeVariation2 = false;
calculator.introduce.leaderSizeVariation2 = function(state) {

    if(calculator.introduce.animateLeaderSizeVariation2) {

        if(state === 0) {

            $('.infoBox93LeaderLeftSize').css({'transition':'1.5s', 'height':'100px', 'width':'75px'});
            $('.infoBox93LeaderRightSize').css({'transition':'1.5s', 'height':'50px', 'width':'38px'});
            $('.leaderLeftBarInfoBox').css({'transition':'1.5s', 'width':'170px'});
            $('.leaderRightBarInfoBox').css({'transition':'1.5s', 'width':'30px'});

            setTimeout(()=>{
                calculator.introduce.leaderSizeVariation2(1);
            }, 1750)

        }

        if(state === 1) {

            $('.infoBox93LeaderRightSize').css({'transition':'1.5s', 'height':'100px', 'width':'75px'});
            $('.infoBox93LeaderLeftSize').css({'transition':'1.5s', 'height':'50px', 'width':'38px'});
            $('.leaderLeftBarInfoBox').css({'transition':'1.5s', 'width':'30px'});
            $('.leaderRightBarInfoBox').css({'transition':'1.5s', 'width':'170px'});

            setTimeout(()=>{
                calculator.introduce.leaderSizeVariation2(0);
            }, 1750)

        }

    } else {

        $('.infoBox93LeaderLeftSize, .infoBox93LeaderRightSize').css({'transition':'1s', 'height':'80px', 'width':'60px'});
        $('.leaderLeftBarInfoBox, .leaderRightBarInfoBox').css({'transition':'1.5s', 'width':'100px'});

    }

}

//----------------------------------------------------------------------------//
//------------------------- CHECK MARK ANIMATIONS ----------------------------//
//----------------------------------------------------------------------------//

calculator.show.checkMark = function() {

    $('.success-checkmark').css({'opacity':'1'})
    $('.check-icon').show();
    $('.verticalSection1').css({'transition':'0.5s', 'box-shadow':'0px 0px 4px 2px lime'});

}

calculator.hide.checkMark = function() {

    $('.success-checkmark').css({'transition':'0.5s', 'opacity':'0'})
    $('.verticalSection1').css({'transition':'0.5s', 'box-shadow':'0px 0px 4px 2px black'});

    $('#perfectText, #goodEnoughText').css({'transition':'0.5s', 'opacity':'0'});

    setTimeout(()=>{
        $('.check-icon').hide();
    }, 500)


}

//----------------------------------------------------------------------------//
//--------------------------- SLIDER ANIMATIONS ------------------------------//
//----------------------------------------------------------------------------//

// take argument for instance s1 and h1 global variables
// we do it this way so that we can use the same method for multiple sliders

calculator.animate.global.originSabo = undefined;
calculator.animate.global.originHelp = undefined;
calculator.animate.global.pathSabo = undefined;
calculator.animate.global.pathHelp = undefined;

calculator.animate.setOrigin = function(originS, originH) {

    calculator.animate.global.originSabo = originS;
    calculator.animate.global.originHelp = originH;

}

calculator.animate.setPath = function(pathS, pathH) {

    calculator.animate.global.pathSabo = pathS;
    calculator.animate.global.pathHelp = pathH;

}

// some global variables to use for this method
calculator.animate.global.originSaboIsPositive = undefined;
calculator.animate.global.originSaboIsZero = undefined;
calculator.animate.global.originHelpIsPositive = undefined;
calculator.animate.global.originHelpIsZero = undefined;

// this argument takes global origin values
calculator.animate.identifyOriginSign = function() {

    calculator.animate.global.originSaboIsPositive = false;
    calculator.animate.global.originHelpIsPositive = false;
    calculator.animate.global.originSaboIsZero = false;
    calculator.animate.global.originHelpIsZero = false;

    if(calculator.animate.global.originSabo > 0) {
        calculator.animate.global.originSaboIsPositive = true;
    }

    if(calculator.animate.global.originSabo === 0) {
        calculator.animate.global.originSaboIsZero = true;
    }

    if(calculator.animate.global.originHelp > 0) {
        calculator.animate.global.originHelpIsPositive = true;
    }

    if(calculator.animate.global.originHelp === 0) {
        calculator.animate.global.originHelpIsZero = true;
    }

}

// some global variables to use for this method
calculator.animate.global.pathSaboIsPositive = undefined;
calculator.animate.global.pathHelpIsPositive = undefined;

// this argument take the path value
calculator.animate.identifyPathSign = function(pathS, pathH) {

    // console.log('identifyPathSign');
    //
    // console.log('sabo path: ' + pathS);
    // console.log('help path: ' + pathH);

    calculator.animate.global.pathSaboIsPositive = false;
    calculator.animate.global.pathHelpIsPositive = false;
    calculator.animate.global.pathSaboIsZero = false;
    calculator.animate.global.pathHelpIsZero = false;

    if(calculator.animate.global.pathSabo > 0) {
        // console.log('path sabo positive');
        calculator.animate.global.pathSaboIsPositive = true;
    }

    if(calculator.animate.global.pathSabo === 0) {
        // console.log('path sabo zero');
        calculator.animate.global.pathSaboIsZero = true;
    }

    if(calculator.animate.global.pathHelp > 0) {
        calculator.animate.global.pathHelpIsPositive = true;
    }

    if(calculator.animate.global.pathHelp === 0) {
        calculator.animate.global.pathHelpIsZero = true;
    }

}


calculator.animate.global.changeSaboFirst = undefined;
calculator.animate.global.changeHelpFirst = undefined;

calculator.animate.determinePriority = function() {

    calculator.animate.global.changeSaboFirst = false;
    calculator.animate.global.changeHelpFirst = false;

    if(calculator.animate.global.originSaboIsPositive) {
        calculator.animate.global.changeSaboFirst = true;
    }

    if(calculator.animate.global.originHelpIsPositive) {
        calculator.animate.global.changeHelpFirst = true;
    }

    if(!calculator.animate.global.originSaboIsPositive && !calculator.animate.global.originHelpIsPositive) {
        if(calculator.animate.global.pathSaboIsPositive) {
            calculator.animate.global.changeSaboFirst = true;
        }
        if(calculator.animate.global.pathHelpIsPositive) {
            calculator.animate.global.changeHelpFirst = true;
        }
    }

}

// some global variables to use for this method
calculator.animate.global.changeHelp = undefined;
calculator.animate.global.changeSabo = undefined;

// call this function to check after every iteration

calculator.animate.determineValueToChangeSaboFirst = function() {

    calculator.animate.global.changeHelp = false;
    calculator.animate.global.changeSabo = false;


    if(calculator.animate.global.pathSaboIsPositive || calculator.animate.global.pathSaboIsZero || calculator.animate.global.originSaboIsZero) {
    // if(calculator.animate.global.pathSaboIsPositive || calculator.animate.global.pathSaboIsZero) {
        // origin is sabo and path is sabo
        if(calculator.animate.global.originSabo > calculator.animate.global.pathSabo) {
            calculator.animate.global.changeSabo = true;
            // calculator.animate.global.changeSaboFirst = true;
            // DECREASE SABO VALUE METHOD GOES HERE

        }
        if(calculator.animate.global.originSabo < calculator.animate.global.pathSabo) {
            calculator.animate.global.changeSabo = true;
            // calculator.animate.global.changeSaboFirst = true;
            // INCREASE SABO VALUE METHOD GOES HERE

        }
        if(calculator.animate.global.originSabo === calculator.animate.global.pathSabo) {
            calculator.animate.global.changeSabo = false;
            // DONE WITH SABO CHANGE CHECK IF HELP NEEDS TO BE CHANGED

        }

    }

    if(!calculator.animate.global.changeSabo) {

        if(calculator.animate.global.pathHelpIsPositive || calculator.animate.global.pathHelpIsZero || calculator.animate.global.originHelpIsZero) {

            // origin is help and path is help
            if(calculator.animate.global.originHelp > calculator.animate.global.pathHelp) {
                calculator.animate.global.changeHelp = true;
                // DECREASE HELP VALUE METHOD GOES HERE

            }
            if(calculator.animate.global.originHelp < calculator.animate.global.pathHelp) {
                calculator.animate.global.changeHelp = true;
                // INCREASE HELP VALUE METHOD GOES HERE

            }
            if(calculator.animate.global.originHelp === calculator.animate.global.pathHelp) {
                calculator.animate.global.changeHelp = false;
                // DONE WITH HELP CHANGE CHECK IF HELP NEEDS TO BE CHANGED

            }

        }

    }

}

calculator.animate.determineValueToChangeHelpFirst = function() {

    calculator.animate.global.changeHelp = false;
    calculator.animate.global.changeSabo = false;

    if(calculator.animate.global.pathHelpIsPositive || calculator.animate.global.pathHelpIsZero || calculator.animate.global.originHelpIsZero) {

        // origin is help and path is help
        if(calculator.animate.global.originHelp > calculator.animate.global.pathHelp) {
            calculator.animate.global.changeHelp = true;
            // DECREASE HELP VALUE METHOD GOES HERE

        }
        if(calculator.animate.global.originHelp < calculator.animate.global.pathHelp) {
            calculator.animate.global.changeHelp = true;
            // INCREASE HELP VALUE METHOD GOES HERE

        }
        if(calculator.animate.global.originHelp === calculator.animate.global.pathHelp) {
            calculator.animate.global.changeHelp = false;
            // DONE WITH HELP CHANGE CHECK IF HELP NEEDS TO BE CHANGED

        }

    }



    if(!calculator.animate.global.changeHelp) {

        if(calculator.animate.global.pathSaboIsPositive || calculator.animate.global.pathSaboIsZero || calculator.animate.global.originSaboIsZero) {
        // if(calculator.animate.global.pathSaboIsPositive || calculator.animate.global.pathSaboIsZero) {
            // origin is sabo and path is sabo
            if(calculator.animate.global.originSabo > calculator.animate.global.pathSabo) {
                calculator.animate.global.changeSabo = true;
                // calculator.animate.global.changeSaboFirst = true;
                // DECREASE SABO VALUE METHOD GOES HERE

            }
            if(calculator.animate.global.originSabo < calculator.animate.global.pathSabo) {
                calculator.animate.global.changeSabo = true;
                // calculator.animate.global.changeSaboFirst = true;
                // INCREASE SABO VALUE METHOD GOES HERE

            }
            if(calculator.animate.global.originSabo === calculator.animate.global.pathSabo) {
                calculator.animate.global.changeSabo = false;
                // DONE WITH SABO CHANGE CHECK IF HELP NEEDS TO BE CHANGED

            }

        }

    }

}

calculator.animate.determineValueToChange = function() {

    if(calculator.animate.global.changeSaboFirst) {
        calculator.animate.determineValueToChangeSaboFirst();
    }

    if(calculator.animate.global.changeHelpFirst) {
        calculator.animate.determineValueToChangeHelpFirst();
    }

}

calculator.animate.increaseSabo = undefined;
calculator.animate.decreaseSabo = undefined;
calculator.animate.increaseHelp = undefined;
calculator.animate.decreaseHelp = undefined;

// need to first update globalorigin.sabo and globalorigin.help
// thus first call calculator.animate.setOriginAndPathToGlobal
calculator.animate.determineDirection = function() {

    calculator.animate.increaseSabo = false;
    calculator.animate.decreaseSabo = false;
    calculator.animate.increaseHelp = false;
    calculator.animate.decreaseHelp = false;

    if(calculator.animate.global.changeSabo) {

        if(calculator.animate.global.originSabo < calculator.animate.global.pathSabo) {
            calculator.animate.increaseSabo = true;
        }

        if(calculator.animate.global.originSabo > calculator.animate.global.pathSabo) {
            calculator.animate.decreaseSabo = true;
        }

    }

    if(calculator.animate.global.changeHelp) {

        if(calculator.animate.global.originHelp < calculator.animate.global.pathHelp) {
            calculator.animate.increaseHelp = true;
        }

        if(calculator.animate.global.originHelp > calculator.animate.global.pathHelp) {
            calculator.animate.decreaseHelp = true;
        }

    }

}

calculator.animate.increment = 1;
// calculator.animate.recallDelay = 4;
calculator.animate.recallDelay = 250;
calculator.animate.iterate = undefined;

calculator.animate.change.f1 = function(showCost) {

    showCost = showCost === undefined ? 1 : showCost;

    // console.log('*************************************************************');
    // console.log('sabotage: ' + s1);
    // console.log('sabotage origin: ' + calculator.animate.global.originSabo);
    // console.log('sabo origin is positive: ' + calculator.animate.global.originSaboIsPositive);
    // console.log('sabo origin is zero: ' + calculator.animate.global.originSaboIsZero);
    // console.log('');
    // console.log('sabotage path: ' + calculator.animate.global.pathSabo);
    // console.log('sabo path is positive: ' + calculator.animate.global.pathSaboIsPositive);
    // console.log('sabo path is zero: ' + calculator.animate.global.pathSaboIsZero);
    // console.log('');
    // console.log('');
    // console.log('change sabo: ' + calculator.animate.global.changeSabo);
    // console.log('increase sabo: ' + calculator.animate.increaseSabo);
    // console.log('decrease sabo: ' + calculator.animate.decreaseSabo);
    // console.log('');
    // console.log('------------------------------------------------------');
    // console.log('');
    // console.log('change sabo first: ' + calculator.animate.global.changeSaboFirst);
    // console.log('change help first: ' + calculator.animate.global.changeHelpFirst);
    // console.log('');
    // console.log('------------------------------------------------------');
    // console.log('');
    // console.log('help: ' + h1);
    // console.log('help origin: ' + calculator.animate.global.originHelp);
    // console.log('help origin is positive: ' + calculator.animate.global.originHelpIsPositive);
    // console.log('help origin is zero: ' + calculator.animate.global.originHelpIsZero);
    // console.log('');
    // console.log('help path: ' + calculator.animate.global.pathHelp);
    // console.log('help path is positive: ' + calculator.animate.global.pathHelpIsPositive);
    // console.log('help path is zero: ' + calculator.animate.global.pathHelpIsZero);
    // console.log('');
    // console.log('');
    // console.log('change help: ' + calculator.animate.global.changeHelp);
    // console.log('increase help: ' + calculator.animate.increaseHelp);
    // console.log('decrease help: ' + calculator.animate.decreaseHelp);
    // console.log('*************************************************************');

    // console.log('sabotage: ' + s1);
    // console.log('help: ' + h1);

    calculator.animate.iterate = false;

    if(calculator.animate.increaseSabo) {
        s1 = s1  + calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.decreaseSabo) {
        s1 = s1 - calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.increaseHelp) {
        h1 = h1  + calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.decreaseHelp) {
        h1 = h1 - calculator.animate.increment;
        calculator.animate.iterate = true;
    }

    // s1,s2,h1,h2,os1,os2,oh1,oh2
    calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
    calculator.refresh.sliders();
    if(showCost) {
        calculator.introduce.costs();
    }


    if(calculator.animate.iterate) {

        calculator.animate.setOrigin(s1, h1);
        calculator.animate.identifyOriginSign();
        calculator.animate.determineValueToChange();
        calculator.animate.determineDirection();

        setTimeout(()=>{
            calculator.animate.change.f1();
        }, 4)

    }

}

calculator.animate.change.f2 = function() {

    calculator.animate.iterate = false;

    if(calculator.animate.increaseSabo) {
        s2 = s2  + calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.decreaseSabo) {
        s2 = s2 - calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.increaseHelp) {
        h2 = h2  + calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.decreaseHelp) {
        h2 = h2 - calculator.animate.increment;
        calculator.animate.iterate = true;
    }

    // s1,s2,h1,h2,os1,os2,oh1,oh2
    calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
    calculator.refresh.sliders();
    calculator.introduce.costs();

    if(calculator.animate.iterate) {

        calculator.animate.setOrigin(s2, h2);
        calculator.animate.identifyOriginSign();
        calculator.animate.determineValueToChange();
        calculator.animate.determineDirection();

        setTimeout(()=>{
            calculator.animate.change.f2();
        }, calculator.animate.recallDelay)

    }

}

calculator.animate.change.of1 = function() {

    // console.log('sabotage: ' + os1);
    // console.log('help: ' + oh1);

    calculator.animate.iterate = false;

    if(calculator.animate.increaseSabo) {
        os1 = os1  + calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.decreaseSabo) {
        os1 = os1 - calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.increaseHelp) {
        oh1 = oh1  + calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.decreaseHelp) {
        oh1 = oh1 - calculator.animate.increment;
        calculator.animate.iterate = true;
    }

    // s1,s2,h1,h2,os1,os2,oh1,oh2
    calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
    calculator.refresh.sliders();
    calculator.introduce.costs();

    if(calculator.animate.iterate) {

        calculator.animate.setOrigin(os1, oh1);
        calculator.animate.identifyOriginSign();
        calculator.animate.determineValueToChange();
        calculator.animate.determineDirection();

        setTimeout(()=>{
            calculator.animate.change.of1();
        }, calculator.animate.recallDelay)

    }

}

calculator.animate.change.of2 = function() {

    calculator.animate.iterate = false;

    if(calculator.animate.increaseSabo) {
        os2 = os2  + calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.decreaseSabo) {
        os2 = os2 - calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.increaseHelp) {
        oh2 = oh2  + calculator.animate.increment;
        calculator.animate.iterate = true;
    }
    if(calculator.animate.decreaseHelp) {
        oh2 = oh2 - calculator.animate.increment;
        calculator.animate.iterate = true;
    }

    // s1,s2,h1,h2,os1,os2,oh1,oh2
    calculator.values.set.helpSabo([s1,s2,h1,h2,os1,os2,oh1,oh2]);
    calculator.refresh.sliders();
    calculator.introduce.costs();

    if(calculator.animate.iterate) {

        calculator.animate.setOrigin(os2, oh2);
        calculator.animate.identifyOriginSign();
        calculator.animate.determineValueToChange();
        calculator.animate.determineDirection();

        setTimeout(()=>{
            calculator.animate.change.of2();
        }, calculator.animate.recallDelay)

    }

}

calculator.change.f1 = function(newS, newH, showCost) {

    // setup
    calculator.animate.setOrigin(s1, h1);
    calculator.animate.setPath(newS, newH);
    calculator.animate.identifyOriginSign();
    calculator.animate.identifyPathSign();//NEED TO CALL IT ONCE
    calculator.animate.determinePriority();//NEED TO CALL IT ONCE
    calculator.animate.determineValueToChange();
    calculator.animate.determineDirection();

    // animate
    calculator.animate.change.f1(showCost);

}

calculator.change.f2 = function(newS, newH) {

    // setup
    calculator.animate.setOrigin(s2, h2);
    calculator.animate.setPath(newS, newH);
    calculator.animate.identifyOriginSign();
    calculator.animate.identifyPathSign();//NEED TO CALL IT ONCE
    calculator.animate.determinePriority();//NEED TO CALL IT ONCE
    calculator.animate.determineValueToChange();
    calculator.animate.determineDirection();

    // animate
    calculator.animate.change.f2();

}

calculator.change.of1 = function(newS, newH) {

    // setup
    calculator.animate.setOrigin(os1, oh1);
    calculator.animate.setPath(newS, newH);
    calculator.animate.identifyOriginSign();
    calculator.animate.identifyPathSign();//NEED TO CALL IT ONCE
    calculator.animate.determinePriority();//NEED TO CALL IT ONCE
    calculator.animate.determineValueToChange();
    calculator.animate.determineDirection();

    // animate
    calculator.animate.change.of1();

}

calculator.change.of2 = function(newS, newH) {

    // setup
    calculator.animate.setOrigin(os2, oh2);
    calculator.animate.setPath(newS, newH);
    calculator.animate.identifyOriginSign();
    calculator.animate.identifyPathSign();//NEED TO CALL IT ONCE
    calculator.animate.determinePriority();//NEED TO CALL IT ONCE
    calculator.animate.determineValueToChange();
    calculator.animate.determineDirection();

    // animate
    calculator.animate.change.of2();

}

//----------------------------------------------------------------------------//
//--------------------------- OG2 TUTORIAL METHODS ---------------------------//
//----------------------------------------------------------------------------//

calculator.tutorial.rotateSectionCoverIsOn = true;
calculator.tutorial.rotateSectionCoverDelay = 3000;

calculator.tutorial.rotateSectionCover = function(state) {

    if(calculator.tutorial.rotateSectionCoverIsOn) {


        if(state === 0) {
            map.opacity.cover([0,0,0], 3);
            map.opacity.section([1,1,1], 3);
            setTimeout(()=>{
                calculator.tutorial.rotateSectionCover(1);
            }, calculator.tutorial.rotateSectionCoverDelay)
        }

        if(state === 1) {
            map.opacity.cover([1,1,1], 3);
            map.opacity.section([0,0,0], 3);
            setTimeout(()=>{
                calculator.tutorial.rotateSectionCover(2);
            }, calculator.tutorial.rotateSectionCoverDelay)
        }

        if(state === 2) {
            map.opacity.section([0.2,0.2,0.2], 3);
            setTimeout(()=>{
                calculator.tutorial.animateOG2sectionNumber = true;
            }, 2000)
        }

    } else {
        map.opacity.cover([1,1,1], 1);
        map.opacity.section([0.1,0.1,0.1], 1);
        setTimeout(()=>{
            map.opacity.cover([1,1,1], 1);
            map.opacity.section([0.1,0.1,0.1], 1);
        }, 100)
    }

}


calculator.tutorial.animateOG2sectionNumber = false;
calculator.tutorial.animateOG2mapActive = true;

calculator.tutorial.animateOG2map = function(state) {

    if(calculator.tutorial.animateOG2mapActive) {

        if(state === 0) {
            $('.OG2').css({'transition':'0.5s', 'transform':'rotate(1deg) scale(1.02)', 'box-shadow':'0px 0px 8px 3px black'})
            map.opacity.section([0.2,0.2,0.2], 0.5);
            setTimeout(()=>{
                $('.OG2').css({'transition':'0.5s', 'transform':'rotate(1deg) scale(1)', 'box-shadow':'0px 0px 4px 1px black'})
                map.opacity.section([0.2,0.2,0.3], 0.5);
            }, 350)

            setTimeout(()=>{
                calculator.tutorial.animateOG2map(1);
            }, 650)
        }

        if(state === 1) {
            $('.OG2').css({'transition':'0.5s', 'transform':'rotate(-1deg) scale(1.02)', 'box-shadow':'0px 0px 8px 3px black'})
            map.opacity.section([0.2,0.2,0.2], 0.5);
            setTimeout(()=>{
                $('.OG2').css({'transition':'0.5s', 'transform':'rotate(-1deg) scale(1)', 'box-shadow':'0px 0px 4px 1px black'})
                map.opacity.section([0.2,0.2,0.3], 0.5);
            }, 350)

            setTimeout(()=>{
                calculator.tutorial.animateOG2map(0);
            }, 650)
        }

    } else {
        $('.OG2').css({'transition':'0.5s', 'transform':'rotate(0deg) scale(1)', 'box-shadow':'0px 0px 8px 3px black'})
    }

}

//----------------------------------------------------------------------------//
//---------------------------- MOUSE LISTENER UP -----------------------------//
//----------------------------------------------------------------------------//

calculator.globalVariable.enervateIsActive = true;
calculator.globalVariable.mouseWasAlreadyUpOnce = false;


// there was a slowdown roll speed option at mmouse up that I canceled
// this is used to reactivate the enervate animation when mouse is up
// when the slider is active the enervate is deactiated for smoother graphics
$(document).mouseup(function() {

    if(!calculator.globalVariable.mouseWasAlreadyUpOnce) {

        // console.log('mouse is up');

        calculator.globalVariable.mouseWasAlreadyUpOnce = true;

        calculator.globalVariable.enervateIsActive = true;

        // calculator.roll.displayTime = 3250;

    }

})

//----------------------------------------------------------------------------//
//---------------------------- tiny animation for infbox ---------------------//
//----------------------------------------------------------------------------//

calculator.tutorial.startFlashAnimation = true;
calculator.tutorial.flash = function(state) {

    if(calculator.tutorial.startFlashAnimation) {
        if(state === 0) {
            $('.IGPrizeIconWrap').css({'transition':'2s', 'opacity':'1'})
            map.opacity.section([0.1,0.2,0.1], 2)
            setTimeout(()=>{
                calculator.tutorial.flash(1);
            }, 2000)
        }

        if(state === 1) {
            $('.IGPrizeIconWrap').css({'transition':'2s', 'opacity':'0.2'})
            map.opacity.section([0.1,1,0.1], 2)
            setTimeout(()=>{
                calculator.tutorial.flash(0);
            }, 2000)
        }
    }

}

//----------------------------------------------------------------------------//
//----------------------- WHEEL ENERVATION ANIMATION -------------------------//
//----------------------------------------------------------------------------//

calculator.wheel.enervateActivated = true;
calculator.wheel.enervate = function(state) {
    if(calculator.wheel.enervateActivated) {
        if(state === 0) {
            $('.wpWrap').css({'transform':'scale(1.15)'});
            setTimeout(()=>{
                calculator.wheel.enervate(1);
            }, 750)
        }
        if(state === 1) {
            $('.wpWrap').css({'transform':'scale(0.95)'});
            setTimeout(()=>{
                calculator.wheel.enervate(0);
            }, 750)
        }
    } else {
        $('.wpWrap').css({'transform':'scale(1)'});
    }
}

//----------------------------------------------------------------------------//
//------------------ MINIMIZE MAXIMIZE HELP SABO SECTION ---------------------//
//----------------------------------------------------------------------------//

var minimizeFunction = function() {

    calculator.globalVariable.aBitOfWaitingIsDone = false;
    calculator.tutorial.specialHoverSetupActive = true;
    calculator.section.hs.opacity.SFiALiFiS([1,1,1,1,0,1]);
    $('.verticalSection1').css({'margin-left':'273px'});
    $('.verticalSeparator').css({'height':'133px', 'margin-top':'31px'});
    calculator.section.hs.set.iconPosition('bottom');
    calculator.titles.hs.hide();
    calculator.section.hs.minimize(true);
    calculator.titles.hs.ghost.text();
    calculator.titles.hs.ghost.modifyText('FOLLOWERS\' HELP & SABOTAGE');
    calculator.titles.hs.ghost.show();
    $('.generalMarginBox').css({'margin-top':'-111px'});
    $('.rightLeaderIconMainWrap').css({'transition':'0.5s', 'margin-top':'8px'});

}

var maximizeFunction = function() {

    calculator.tutorial.specialHoverSetupActive = false;
    $('.generalMarginBox').css({'margin-top':'-77px'});
    calculator.section.hs.minimize(false);
    calculator.titles.hs.ghost.hide();
    calculator.titles.hs.show();
    calculator.section.hs.set.iconPosition('center');
    // reverse vertical section position
    $('.verticalSection1').css({'margin-left':'201px'});
    $('.verticalSeparator').css({'height':'166px', 'margin-top':'0px'});
    $('.rightLeaderIconMainWrap').css({'transition':'0.5s', 'margin-top':'0px'});

}
