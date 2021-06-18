
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
            set: {},
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

/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////
/////////////////////// CALCULATOR GLOBAL VARIABLES ////////////////////////////


var efo1, efo2, efi1, efi2, efefo1, efefo2, IG_pwin;

// unused
calculator.globalVariable.gameStage = undefined;



calculator.globalVariable.IG_isIGA = undefined;
calculator.globalVariable.IG_isIGB = undefined;

calculator.globalVariable.IG_ourFollowersAreHetero = true;
calculator.globalVariable.IG_theirFollowersAreHetero = true;

calculator.globalVariable.IG_playerView = false;
calculator.globalVariable.IG_playerIndex = undefined; //-1,0,1 (l,f1,f2)

calculator.globalVariable.tutorial.IG_IGSameColor = undefined;
calculator.globalVariable.tutorial.IG_IGDifferentColor = undefined;
calculator.globalVariable.tutorial.IG_weAreInTutorial = undefined;

calculator.globalVariable.IG_weAreInFeedbackStage = undefined;


// RESULT DISPLAY ON/OFF VARIABLES (AFTER SPIN)

calculator.globalVariable.display.IG_hsIcons = undefined;

calculator.globalVariable.display.IG_cResults = undefined;
calculator.globalVariable.display.IG_cTitle = undefined;
calculator.globalVariable.display.IG_cButton = undefined;



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


calculator.wheel.IG_spinDuration = 1;
calculator.wheel.IG_spinNumber = 3;
calculator.wheel.IG_isSpinning = false;

calculator.wheel.IG_create = function(probability, id) {

    var a = 100*probability;
    var b = 100-a;


    var followerAColorArray = Array(2);
    var followerBColorArray = Array(2);
    var colors;

    var lineColor = 'white';
    var lineWidth = 1;



    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        // In-group contest A
        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                followerAColorArray = ['rgb(60,60,60)', 'rgb(210,210,0)'];

            } else {

                followerAColorArray = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];

            }

        }

        // In-group contest B
        if(calculator.globalVariable.IG_isIGB) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,0)'];

            } else {

                followerAColorArray = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];

            }

        }

    }

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IG_IGSameColor) {

            if(calculator.globalVariable.IG_isIGA) {
                followerAColorArray = ['rgb(60,60,60)', 'rgb(60,60,60)'];
            }

            if(calculator.globalVariable.IG_isIGB) {
                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,210)'];
            }

        }

        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IG_IGDifferentColor) {

            if(calculator.globalVariable.IG_isIGA) {
                followerAColorArray = ['rgb(60,60,60)', 'rgb(210,210,0)'];
            }

            if(calculator.globalVariable.IG_isIGB) {
                followerBColorArray = ['rgb(210,210,210)', 'rgb(210,210,0)'];
            }

        }

    }

    //---------------------------//


    if(calculator.globalVariable.IG_isIGA) {
        colors = followerAColorArray;
    }

    if(calculator.globalVariable.IG_isIGB) {
        colors = followerBColorArray;
    }

    calculator.wheel.IG_myWheelObj = new Winwheel({
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
            'duration' : calculator.wheel.IG_spinDuration,
            'spins'    : calculator.wheel.IG_spinNumber,
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


var IG_logistic2 = function(val , k) {
    var L = 1;
    var m = 0.5;
    var result;
    result= L / (1 + Math.exp(-k * (val - m)));
    return result;
}


//-------------- PIE ----------------//123456789
// these can be changed to ig specific variables!!!
calculator.globalVariable.IG_pieBorderRight = false;
calculator.globalVariable.IG_pieBorderLeft = false;
calculator.graphics.update.IG_pie = function() {

    var x = IG_pwin;
    var y = 1 - IG_pwin;

    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var pieColors;
    var fcolors;
    var ofcolors;

    //---------------------------//

    //---- only for tutorial ----//
    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IG_IGSameColor) {

            if(calculator.globalVariable.IG_isIGA) {

                fcolors = ['rgb(60,60,60)', 'rgb(60,60,60)'];

            }

            if(calculator.globalVariable.IG_isIGB) {

                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,210)'];

            }

        }

        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IG_IGDifferentColor) {

            if(calculator.globalVariable.IG_isIGA) {

                fcolors = ['rgb(210,210,0)', 'rgb(60,60,60)'];

            }
            if(calculator.globalVariable.IG_isIGB) {

                ofcolors = ['rgb(210,210,0)', 'rgb(210,210,210)'];

            }

        }

    }

    //---------------------------//

    //---- in-group contest follower's competition color setup for leader's view----//

    // In-group contest A, leader's point of view
    if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                fcolors = ['rgb(210,210,0)', 'rgb(60,60,60)'];

            } else {

                fcolors = ['rgb(60, 60, 60)', 'rgb(35, 79, 30)'];

            }

        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.IG_isIGB) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                ofcolors = ['rgb(210,210,0)', 'rgb(210,210,210)'];

            } else {

                ofcolors = ['rgb(210, 210, 210)', 'rgb(35, 79, 30)'];

            }

        }

    }

    //---------------------------//



    var p1, p2;


    if(calculator.globalVariable.IG_isIGA) {

        pieColors = fcolors;

        p1 = 'FOLLOWER 1A';
        p2 = 'FOLLOWER 2A';

        if(calculator.globalVariable.IG_ourFollowersAreHetero) {

            p1 = 'STRONG F.';
            p2 = 'WEAK F.';

            if(calculator.globalVariable.IG_playerIndex === 1) {
                p1 = 'WEAK F.';
                p2 = 'STRONG F.';
            }

        }

    }

    // RELEVANT ONLY FOR TUTORIAL
    if(calculator.globalVariable.IG_isIGB) {

        pieColors = ofcolors;

        p1 = 'FOLLOWER 1B';
        p2 = 'FOLLOWER 2B';

        if(calculator.globalVariable.IG_theirFollowersAreHetero) {

            p1 = 'STRONG F.';
            p2 = 'WEAK F.';

            if(calculator.globalVariable.IG_playerIndex === 1) {

                p1 = 'WEAK F.';
                p2 = 'STRONG F.';

            }

        }

    }


    var pieBorderArray = Array(2);
    pieBorderArray = [1,1];
    var pieBorderColor = 'white';

    if(calculator.globalVariable.IG_pieBorderLeft) {
        pieBorderArray = [0,3];
        pieBorderColor = 'lime';
    }
    if(calculator.globalVariable.IG_pieBorderRight) {
        pieBorderArray = [4,0];
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

    Plotly.react('IG_pie', data, layout, {displayModeBar: false});
}


//-------------- LEADER EFFORT ----------------//123456789
calculator.graphics.update.IG_effortBar = function(e, barId, ourSide, axisOn) {

    var y = e;

    var upperBound, myTickVal, myTickText, myRange;

    var colorArrays = Array(2);
    var insideTextColor = Array(2);

    var ticktextcolors = ['black', 'white'];
    var tindex = 1;

    var papercolors = ['rgb(60, 60, 60)', 'rgb(210, 210, 210)', 'rgb(35, 79, 30)'];
    var pindex = 1;


    if(calculator.globalVariable.IG_isIGA || calculator.globalVariable.IG_isIGB) {

        upperBound = 128;
        myTickVal = [0, 5, 10, 20, 30, 50, 75, 100, 140];
        myTickText = [0, 5, 10, 20, 30, 50, 75, 100, 140];
        myRange = [0, 140];

    }

    if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerIndex != -1) {

                colorArrays = ['rgb(35, 79, 30)', 'rgb(60, 60, 60)'];
                insideTextColor = ['white', 'white'];

                if(barId === 'IG_barl1'){
                    //darkgreen white
                    pindex=2;
                    tindex=1;
                }

                if(barId === 'IG_barl2'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

            } else {

                $('.rightFollowerIconMainWrap').css({'filter':'drop-shadow(5px 5px 3px #d2d201)'});

                colorArrays = ['rgb(60, 60, 60)', 'rgb(210, 210, 0)'];
                insideTextColor = ['white', 'black'];

                if(barId === 'IG_barl1'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

                if(barId === 'IG_barl2'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

            }

        }

        if(calculator.globalVariable.IG_isIGB) {

            if(calculator.globalVariable.IG_playerIndex != -1) {

                colorArrays = ['rgb(35, 79, 30)', 'rgb(210, 210, 210)'];
                insideTextColor = ['white', 'black'];

                if(barId === 'IG_barl1'){
                    //darkgreen white
                    pindex=2;
                    tindex=1;
                }

                if(barId === 'IG_barl2'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

            } else {

                $('.rightFollowerIconMainWrap').css({'filter':'drop-shadow(5px 5px 3px #d2d201)'});

                colorArrays = ['rgb(210, 210, 210)', 'rgb(210, 210, 0)'];
                insideTextColor = ['black', 'black'];

                if(barId === 'IG_barl1'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

                if(barId === 'IG_barl2'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

            }

        }

    }

    //---------------------------//
    //---- only for tutorial ----//
    //---------------------------//

    // tutorial showing two followers as the same color to argue that we will use a different color
    if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IG_IGSameColor) {

            if(calculator.globalVariable.IG_isIGA) {

                colorArrays = ['rgb(60,60,60)', 'rgb(60,60,60)'];
                insideTextColor = ['white', 'white'];

                if(barId === 'IG_barl1'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

                if(barId === 'IG_barl2'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

            }

            if(calculator.globalVariable.IG_isIGB) {

                colorArrays = ['rgb(210,210,210)', 'rgb(210,210,210)'];
                insideTextColor = ['black', 'black'];

                if(barId === 'IG_barl1'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

                if(barId === 'IG_barl2'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

            }

        }

        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IG_IGDifferentColor) {

            $('.rightFollowerIconMainWrap').css({'filter':'drop-shadow(5px 5px 3px #d2d201)'});

            if(calculator.globalVariable.IG_isIGA) {

                colorArrays = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                insideTextColor = ['white', 'black'];

                if(barId === 'IG_barl1'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

                if(barId === 'IG_barl2'){
                    //darkgray white
                    pindex=0;
                    tindex=1;
                }

            }

            if(calculator.globalVariable.IG_isIGB) {

                colorArrays = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                insideTextColor = ['black', 'black'];

                if(barId === 'IG_barl1'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

                if(barId === 'IG_barl2'){
                    //gray black
                    pindex=1;
                    tindex=0;
                }

            }
        }

    }


    //---------------------------//


    var mColor = ourSide ? colorArrays[0] : colorArrays[1];

    var mytextpos = 'outside';

    var somecolor = 'black';

    if(y > upperBound) {

        mytextpos = 'inside';


        if(barId === 'IG_barl1') {
            somecolor = insideTextColor[0];
        }

        if(barId === 'IG_barl2') {
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


// USES calculator.globalVariable.typeOfContest TO DETErmine leader slider colors
// it is not concerned with the me coloring but leader vs leader or
// follower vs follower for either group ig slider top coloring
// it also updates the slider range for type of contest
// it also determines the resulting text's tag as this is dependent on leader or follower
calculator.graphics.update.IG_contestSliderBackgroundColor = function() {

    if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IG_IGSameColor) {

            if(calculator.globalVariable.IG_isIGA) {

                $('.IG_bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.IG_bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

            }

            if(calculator.globalVariable.IG_isIGB) {

                $('.IG_bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.IG_bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

            }

        }

        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IG_IGDifferentColor) {

            if(calculator.globalVariable.IG_isIGA) {

                $('.IG_bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.IG_bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

            }

            if(calculator.globalVariable.IG_isIGB) {

                $('.IG_bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.IG_bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

            }

        }

    }

    if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                $('.IG_bswLeft').css({'background-color':'rgb(60,60,60)', 'color':'white'});
                $('.IG_bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

            } else {

                $('.IG_bswLeft').css({'background-color':'rgb(35, 79, 30)', 'color':'white'});
                $('.IG_bswRight').css({'background-color':'rgb(60,60,60)', 'color':'white'});

            }
        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.IG_isIGB) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                $('.IG_bswLeft').css({'background-color':'rgb(210,210,210)', 'color':'black'});
                $('.IG_bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

            } else {

                // we will never visit this case but let's have it for completness
                $('.IG_bswLeft').css({'background-color':'rgb(35, 79, 30)', 'color':'white'});
                $('.IG_bswRight').css({'background-color':'rgb(210,210,210)', 'color':'black'});

            }
        }

    }

}


//-------------- DECISION SLIDER LEADER ----------------//123456789
calculator.decisionSlider.leader.IG_effortBar = function(a, axisOn) {


        var y = a;

        var upperBound, myTickVal, myTickText, myRange;

        var colorArrays = Array(1);
        var insideTextColor = Array(1);

        colorArrays = ['rgb(35, 79, 30)'];
        insideTextColor = ['white'];


        if(calculator.globalVariable.IG_isIGA || calculator.globalVariable.IG_isIGB) {

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


        Plotly.react('IG_bardl', data, layout, {displayModeBar: false});

}

calculator.decisionSlider.leader.IG_enable = function() {
    $('.IG_decisionWrapL').css({'display':'flex'});
}

calculator.decisionSlider.leader.IG_disable = function() {
    $('.IG_decisionWrapL').css({'display':'none'});
}


//-------------- POWER RATIO BAR ----------------//123456789
calculator.graphics.activate.IG_dynamicPowerBarText = function(place) {

    $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'opacity':'0'});
    $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'0'});
    $('.IG_pTitleDynamicRight').css({'transition':'0s', 'opacity':'0'});

    if(place === 'middle') {

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'353px', 'margin-right':'5px'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'103px', 'margin-right':'-21px'});
        $('.IG_pTitleDynamicRight').css({'transition':'0s', 'marign-left':'5px'});

    }

    if(place === 'left') {

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'15px', 'margin-right':'5px'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'29px', 'margin-right':'-21px'});

    }

    if(place === 'right') {

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'1'});
        $('.IG_pTitleDynamicRight').css({'transition':'0s', 'opacity':'1'});

        $('.IG_pTitleDynamicLeft').css({'transition':'0s', 'margin-left':'758px', 'margin-right':'41px'});
        $('.IG_pTitleDynamicMiddle').css({'transition':'0s', 'margin-left':'0px', 'margin-right':'-21px'});

    }


}

// SETUP FOR WHEN THE CALCULATOR IS CLOSED THEN WE SHOW THE POWER LEGENDS
// AND TEXT AND SET THE LEGEND COLORS ACCORDINGLY
calculator.section.power.display.IG_barText = function(show) {

    if(show) {

        $('.IG_pTitleBottom').css({'display' : 'grid'});

        calculator.section.power.display.IG_barLegend(true);

    } else {

        $('.IG_pTitleBottom').css({'display' : 'none'});

        calculator.section.power.display.IG_barLegend(false);

    }

}

calculator.section.power.display.IG_barLegend = function(show) {

    var opacity = show ? 'flex' : 'none';

    $('.IG_legendwrapwrap').css({'display' : opacity});

    calculator.section.power.set.IG_barLegendText(show);

}

calculator.section.power.set.IG_barLegendText = function(show) {

    if(show) {

        var textLeft = document.getElementById('IG_leader1Boxtext');
        var textRight = document.getElementById('IG_leader2Boxtext');

        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerView) {

                if(calculator.globalVariable.IG_ourFollowersAreHetero) {

                    if(calculator.globalVariable.IG_playerIndex === -1) {

                        textLeft.innerHTML = 'Strong Follower\'s Relative Power';
                        textRight.innerHTML = 'Weak Follower\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 0) {

                        textLeft.innerHTML = 'Your Relative Power';
                        textRight.innerHTML = 'Weak Follower\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 1) {

                        textLeft.innerHTML = 'Your Relative Power';
                        textRight.innerHTML = 'Strong Follower\'s Relative Power';

                    }

                } else {

                    if(calculator.globalVariable.IG_playerIndex === -1) {

                        textLeft.innerHTML = 'Follower A1\'s Relative Power';
                        textRight.innerHTML = 'Follower A2\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 0) {

                        textLeft.innerHTML = 'Your Relative Power';
                        textRight.innerHTML = 'Opposing Follower\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 1) {

                        textLeft.innerHTML = 'Your Relative Power';
                        textRight.innerHTML = 'Opposing Follower\'s Relative Power';

                    }

                }

            }

            if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

                if(calculator.globalVariable.IG_ourFollowersAreHetero) {

                    textLeft.innerHTML = 'Strong Follower\'s Relative Power';
                    textRight.innerHTML = 'Weak Follower\'s Relative Power';

                } else {

                    textLeft.innerHTML = 'Follower A1\'s Relative Power';
                    textRight.innerHTML = 'Follower A2\'s Relative Power';

                }

            }

        }

        if(calculator.globalVariable.IG_isIGB) {

            if(calculator.globalVariable.IG_playerView) {

                if(calculator.globalVariable.IG_theirFollowersAreHetero) {

                    if(calculator.globalVariable.IG_playerIndex === -1) {

                        textLeft.innerHTML = 'Strong Follower\'s Relative Power';
                        textRight.innerHTML = 'Weak Follower\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 0) {

                        textLeft.innerHTML = 'Strong Follower\'s Relative Power';
                        textRight.innerHTML = 'Weak Follower\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 1) {

                        textLeft.innerHTML = 'Weak Follower\'s Relative Power';
                        textRight.innerHTML = 'Strong Follower\'s Relative Power';

                    }

                } else {

                    if(calculator.globalVariable.IG_playerIndex === -1) {

                        textLeft.innerHTML = 'Follower B1\'s Relative Power';
                        textRight.innerHTML = 'Follower B2\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 0) {

                        textLeft.innerHTML = 'Follower B1\'s Relative Power';
                        textRight.innerHTML = 'Follower B2\'s Relative Power';

                    }

                    if(calculator.globalVariable.IG_playerIndex === 1) {

                        textLeft.innerHTML = 'Follower B1\'s Relative Power';
                        textRight.innerHTML = 'Follower B2\'s Relative Power';

                    }

                }

                if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

                    if(calculator.globalVariable.IG_theirFollowersAreHetero) {

                        textLeft.innerHTML = 'Strong Follower\'s Relative Power';
                        textRight.innerHTML = 'Weak Follower\'s Relative Power';

                    } else {

                        textLeft.innerHTML = 'Follower B1\'s Relative Power';
                        textRight.innerHTML = 'Follower B2\'s Relative Power';

                    }

                }

            }

        }

    }

}

calculator.section.power.set.IG_barLegendColor = function(colorArray) {

    $('.IG_leader1Box').css({'background-color' : colorArray[0]});
    $('.IG_leader2Box').css({'background-color' : colorArray[1]});

}


calculator.globalVariable.IG_powerBarRight = false;
calculator.globalVariable.IG_powerBarLeft = false;

calculator.graphics.update.IG_efficiencyBar = function(efficiency1, efficiency2) {

    var effi1, effi2;
    effi1 = efficiency1 != undefined ? efficiency1 : efi1;
    effi2 = efficiency2 != undefined ? efficiency2 : efi2;

    var val1 = effi1 / (effi1 + effi2);
    var val2 = effi2 / (effi1 + effi2);


    if(effi1 === effi2) {

        calculator.graphics.activate.IG_dynamicPowerBarText('middle');

    }

    if((effi1 / effi2) > 1) {

        var myText = (val1 >= 0.99) ? '100+' : (effi1 / effi2).toFixed(0);
        calculator.graphics.activate.IG_dynamicPowerBarText('left');

    } else {

        myText = 1;

    }

    if((effi1 / effi2) < 1) {

        var myText2 = (val2 >= 0.99) ? '100+' : (effi2 / effi1).toFixed(0);
        calculator.graphics.activate.IG_dynamicPowerBarText('right');

    } else {

        myText2 = 1;

    }


    val1 = IG_logistic2(val1, 5);
    val2 = 1 - val1;

    var gapSize = 0.06;
    val1 = val1 - gapSize/2;
    val2 = val2 - gapSize/2;


    var fcolors = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];
    var ofcolors = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];
    var cA = Array(2);

    var textColor = ['white', 'white'];



    if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.tutorial.IG_IGSameColor) {

            if(calculator.globalVariable.IG_isIGA) {
                fcolors = ['rgb(60,60,60)', 'rgb(60,60,60)'];
                textColor = ['white', 'white'];

            }

            if(calculator.globalVariable.IG_isIGB) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,210)'];
                textColor = ['black', 'black'];
            }

        }
        // tutorial showing two followers with different colors
        if(calculator.globalVariable.tutorial.IG_IGDifferentColor) {

            if(calculator.globalVariable.IG_isIGA) {
                fcolors = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                textColor = ['white', 'black'];
            }

            if(calculator.globalVariable.IG_isIGB) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                textColor = ['black', 'black'];
            }
        }

    }

    if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

        if(calculator.globalVariable.IG_isIGA) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                fcolors = ['rgb(60,60,60)', 'rgb(210,210,0)'];
                textColor = ['white', 'black'];

            } else {

                fcolors = ['rgb(35, 79, 30)', 'rgb(60,60,60)'];
                textColor = ['white', 'white'];

            }

        }

        // In-group contest A, leader's point of view
        if(calculator.globalVariable.IG_isIGB) {
            if(calculator.globalVariable.IG_playerIndex === -1) {
                ofcolors = ['rgb(210,210,210)', 'rgb(210,210,0)'];
                textColor = ['black', 'black'];
            } else {
                // never visited but have it for completness
                fcolors = ['rgb(35, 79, 30)', 'rgb(210,210,210)'];
                textColor = ['white', 'black'];
            }
        }

    }

    if(calculator.globalVariable.IG_isIGA) {
        calculator.section.power.set.IG_barLegendColor(fcolors);
        cA = fcolors;
    }

    if(calculator.globalVariable.IG_isIGB) {
        calculator.section.power.set.IG_barLegendColor(fcolors);
        cA = ofcolors;
    }

    var myLineWith1 = 0;
    var myLineWith2 = 0;

    if(calculator.globalVariable.IG_powerBarLeft) {
        myLineWith1 = 4
    }

    if(calculator.globalVariable.IG_powerBarRight) {
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
            color: textColor[0],
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
            color: textColor[0],
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

    Plotly.react('IG_powerRatio', data, layout, {displayModeBar: false});

}


//-------------- GRID GRAPHICS ----------------//
calculator.graphics.update.IG_barLabelX = function(barId, show) {
    var update = {
        'xaxis.showticklabels': show
    };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.IG_barGridX = function(barId, show) {
    var update = {
        'xaxis.showgrid': show
        };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.IG_barLabelY = function(barId, show) {
    var update = {
        'yaxis.showticklabels': show
    };
    Plotly.relayout(barId, update);
}

calculator.graphics.update.IG_barGridY = function(barId, show) {
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



//----- CALCULATE LEADER EFFICINCIES -----//123456789
// VALUES: values.update.totalHelpSabo()
// GRAPHICS: graphics.update.efficiencyBar()
//
calculator.values.update.IG_efficiencies = function() {

    if(calculator.globalVariable.IG_isIGA) {

        if(calculator.globalVariable.IG_ourFollowersAreHetero) {

            if(calculator.globalVariable.IG_playerIndex === -1) {
                efi1 = 5;
                efi2 = 1;
            }

            if(calculator.globalVariable.IG_playerIndex === 0) {
                efi1 = 5;
                efi2 = 1;
            }

            if(calculator.globalVariable.IG_playerIndex === 1) {
                efi1 = 1;
                efi2 = 5;
            }

        }

        if(!calculator.globalVariable.IG_ourFollowersAreHetero) {

            efi1 = 1;
            efi2 = 1;

        }

    }

    if(calculator.globalVariable.IG_isIGB) {

        if(calculator.globalVariable.IG_theirFollowersAreHetero) {

            if(calculator.globalVariable.IG_playerIndex === -1) {
                efi1 = 5;
                efi2 = 1;
            }

            if(calculator.globalVariable.IG_playerIndex === 0) {
                efi1 = 5;
                efi2 = 1;
            }

            if(calculator.globalVariable.IG_playerIndex === 1) {
                efi1 = 1;
                efi2 = 5;
            }

        }

        if(!calculator.globalVariable.IG_theirFollowersAreHetero) {

            efi1 = 1;
            efi2 = 1;

        }

    }

    calculator.graphics.update.IG_efficiencyBar(efi1, efi2);
    calculator.icons.update.IG_leaderSize();
    calculator.icons.IG_adjustPlacement();

}


//----- CALCULATE PROBABILITIES GIVEN EFFICIENCIES -----//123456789
// Does not call values.efficiencies takes it as given
// GRAPHICS: graphics.update.IG_pie()
calculator.values.update.IG_probability = function() {

    efefo1 = efo1 * efi1;
    efefo2 = efo2 * efi2;

    IG_pwin = ((efo1 + efo2) === 0) ? 0.5 : (efefo1 / (efefo1 + efefo2));

    calculator.graphics.update.IG_pie();

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

// EFFORT 123456789
calculator.slider.playerDecision.IG_effort = document.getElementById('IG_dSliderL');
calculator.slider.playerDecision.IG_effort.oninput = function() {


    calculator.wheel.IG_hide();


    // get the value from the slider
    efo1 = parseFloat(calculator.slider.playerDecision.IG_effort.value);


    // update bar plot
    calculator.decisionSlider.leader.IG_effortBar(efo1, true);


    // slider sync
    $('#IG_lSlider1').prop('value', efo1);
    $('#IG_lSlider1').change();


    // bar plot sync
    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.IG_effortBar(efo1, 'IG_barl1', ourSide, !showAxis)


    calculator.values.update.IG_efficiencies();
    calculator.values.update.IG_probability();
    calculator.results.update.IG_allTextAndColors();


    //WILL ADD AN ACTIVE WIGGLE SWITCH OFF HERE


}

// Effort Section

//Player 1 123456789
calculator.slider.IG_l1= document.getElementById('IG_lSlider1');
calculator.slider.IG_l1.oninput = function() {

    calculator.wheel.IG_hide();

    efo1 = parseFloat(calculator.slider.IG_l1.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.IG_effortBar(efo1, 'IG_barl1', ourSide, showAxis);

    calculator.results.update.IG_allTextAndColors();

    calculator.graphics.update.IG_barLabelX('IG_barl1', true);

    calculator.values.update.IG_probability();

    calculator.pointers.IG_switches[0] = false;

    // slider sync
    $('#IG_dSliderL').prop('value', efo1);
    $('#IG_dSliderL').change();

    calculator.decisionSlider.leader.IG_effortBar(efo1, true);

}

//Player 2 123456789
calculator.slider.IG_l2 = document.getElementById('IG_olSlider1');
calculator.slider.IG_l2.oninput = function() {

    calculator.wheel.IG_hide();

    efo2 = parseFloat(calculator.slider.IG_l2.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.graphics.update.IG_effortBar(efo2, 'IG_barl2', !ourSide, showAxis);

    calculator.results.update.IG_allTextAndColors();

    calculator.values.update.IG_probability();

    calculator.graphics.update.IG_barLabelX('IG_barl2', true);

    calculator.pointers.IG_switches[1] = false;

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

$('#IG_dSliderL').hover(
    function() {

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_bardl', true), 150);


        calculator.globalVariable.IG_pieBorderLeft = true;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderLeft = true;
        calculator.icons.enervate.IG_leaderLeft(0);
        calculator.globalVariable.IG_enervate2LeaderLeft = false;

        $('.activeFollowerLeft').css({'opacity':'1'});
        $('.passiveFollowerLeft').css({'opacity':'0'});

        $('.IG_bswLeft').css({'box-shadow':'0px 0px 1px 4px lime'});

    },
    function() {

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_bardl', false), 150);
        calculator.graphics.update.IG_barGridX('IG_bardl', false);

        calculator.globalVariable.IG_pieBorderLeft = false;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderLeft = false;
        calculator.globalVariable.IG_enervate2LeaderLeft = true;
        calculator.icons.enervate2.IG_leaderLeft(0);

        $('.activeFollowerLeft').css({'opacity':'0'});
        $('.passiveFollowerLeft').css({'opacity':'1'});

        $('.IG_bswLeft').css({'box-shadow':'0px 1px 1px 0px black'});

    }
)

$('.IG_inputL').hover(

    function() {

        calculator.globalVariable.IG_enervate2LeaderLeft = true;
        calculator.icons.enervate2.IG_leaderLeft(0);

        $('.IG_decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.IG_bswLeft').css({'transition':'0.7s', 'transform':'scale(1.1)'});

        calculator.button.display.IG_spinBottom(false);

        calculator.decisionSlider.leader.IG_isFlashing = false;

        if(calculator.globalVariable.IG_open) {

            calculator.results.hide.IG_leaderOutcomes();
            $('.IG_generalMarginBox').css({'transition':'1.523456s', 'margin-top':'150px'});

        }

    },

    function() {

        setTimeout(()=>{

            calculator.globalVariable.IG_enervate2LeaderLeft = false;

            $('.IG_decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1)'});
            $('.IG_bswLeft').css({'transition':'0.7s', 'transform':'scale(1)'});

            calculator.button.display.IG_spinBottom(true);

            if(calculator.globalVariable.IG_open) {

                $('.IG_payoffWrap, .IG_imageWrap23').css({'transition':'1.523456s', 'transition-delay':'1s','opacity':'1'});
                calculator.space.IG_contestResultsIsOpen = true;

                calculator.space.update.IG_heights();

                $('.IG_generalMarginBox').css({'transition':'1.523456s', 'transition-delay':'1s', 'margin-top':'0px'});

            }


            if(!calculator.globalVariable.IG_contestResultsExist) {

                $('.IG_payoffWrap').css({'transition':'0s', 'opacity':'0'});

            }

        }, 200)





    }

)


//------------------------------------------------//
//------------------------------------------------//
//-------------- CONTEST SECTION -----------------//
//------------------------------------------------//
//------------------------------------------------//

//----- LEFT HORIZONTAL SLIDER -----//

$('#IG_lSlider1').hover(
    function() {

        calculator.globalVariable.IG_pieBorderLeft = true;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderLeft = true;
        calculator.icons.enervate.IG_leaderLeft(0);
        calculator.globalVariable.IG_enervate2LeaderLeft = false;

        $('.activeFollowerLeft').css({'opacity':'1'});
        $('.passiveFollowerLeft').css({'opacity':'0'});

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_barl1', true), 150);
        // calculator.questions.spin2.l1();

        },
    function() {

        calculator.globalVariable.IG_pieBorderLeft = false;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderLeft = false;
        calculator.globalVariable.IG_enervate2LeaderLeft = true;
        calculator.icons.enervate2.IG_leaderLeft(0);

        $('.activeFollowerLeft').css({'opacity':'0'});
        $('.passiveFollowerLeft').css({'opacity':'1'});

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_barl1', false), 400);
        calculator.graphics.update.IG_barGridX('IG_barl1', false);

    }
);

$('.IG_bswLeft').hover(
    function() {

        calculator.globalVariable.IG_enervate2LeaderLeft = true;
        calculator.icons.enervate2.IG_leaderLeft(0);

        $('.IG_l1vibrate').css({'transition':'0s', 'opacity':'0'});
        $('.IG_decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.IG_bswLeft').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.IG_bswLeft').css({'transition':'0.7s', 'box-shadow':'0px 6px 6px 2px black'});

        if(calculator.globalVariable.hover.IG_cButton) {
            calculator.button.display.IG_spinBottom(false);
        }

        calculator.questions.spin1.IG_l1();

        if(calculator.lock.switch.IG_all[0]) {
            $('.IG_l1vibrate').css({'transition':'0.3s', 'opacity':'1'});
            calculator.lock.switch.IG_l1 = true;
            calculator.lock.vibrate.IG_l1(1);
        }

    },
    function() {

        calculator.globalVariable.IG_enervate2LeaderLeft = false;

        $('.IG_decisionWrapL').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.IG_bswLeft').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.IG_bswLeft').css({'transition':'0.7s', 'box-shadow':'0px 1px 1px 0px black'});

        if(calculator.globalVariable.hover.IG_cButton) {
            calculator.button.display.IG_spinBottom(true);
        }

        calculator.questions.spin2.IG_l1();
        calculator.lock.switch.IG_l1 = false;

    }
);


//----- RIGHT HORIZONTAL SLIDER -----//

$('#IG_olSlider1').hover(
    function() {

        calculator.globalVariable.IG_pieBorderRight = true;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderRight = true;
        calculator.icons.enervate.IG_leaderRight(0);

        calculator.globalVariable.IG_enervate2LeaderRight = false;

        $('.activeFollowerRight').css({'opacity':'1'});
        $('.passiveFollowerRight').css({'opacity':'0'});

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_barl2', true), 150);
        // calculator.questions.spin2.l2();

    },
    function() {

        calculator.globalVariable.IG_pieBorderRight = false;
        calculator.graphics.update.IG_pie();

        calculator.globalVariable.IG_enervateLeaderRight = false;
        calculator.globalVariable.IG_enervate2LeaderRight = true;
        calculator.icons.enervate2.IG_leaderRight(0);

        $('.activeFollowerRight').css({'opacity':'0'});
        $('.passiveFollowerRight').css({'opacity':'1'});

        setTimeout(()=>calculator.graphics.update.IG_barLabelX('IG_barl2', false), 400);
        calculator.graphics.update.IG_barGridX('IG_barl2', false);

    }
);

$('.IG_bswRight').hover(

    function() {

        calculator.globalVariable.IG_enervate2LeaderRight = true;
        calculator.icons.enervate2.IG_leaderRight(0);

        $('.IG_l2vibrate').css({'transition':'0s', 'opacity':'0'});
        $('.IG_bswRight').css({'transition':'0.7s', 'transform':'scale(1.1)'});
        $('.IG_bswRight').css({'transition':'0.7s', 'box-shadow':'0px 6px 6px 2px black'});

        if(calculator.globalVariable.hover.IG_cButton) {
            calculator.button.display.IG_spinBottom(false);
        }

        calculator.questions.spin1.IG_l2();

        if(calculator.lock.switch.IG_all[1]) {
            $('.IG_l2vibrate').css({'transition':'0.3s', 'opacity':'1'});
            calculator.lock.switch.IG_l2 = true;
            calculator.lock.vibrate.IG_l2(1);
        }

    },
    function() {

        calculator.globalVariable.IG_enervate2LeaderRight = false

        $('.IG_bswRight').css({'transition':'0.7s', 'transform':'scale(1)'});
        $('.IG_bswRight').css({'transition':'0.7s', 'box-shadow':'0px 1px 1px 0px black'});

        if(calculator.globalVariable.hover.IG_cButton) {
            calculator.button.display.IG_spinBottom(true);
        }

        calculator.questions.spin2.IG_l2();
        calculator.lock.switch.IG_l2 = false;

    }

);


//------------------------------------------------//
//------------------------------------------------//
//----------------- SPIN BUTTONS -----------------//
//------------------------------------------------//
//------------------------------------------------//123456789

var IG_sp23C = 0;
$('#IG_spinImage23').hover(
    function() {
        IG_sp23C = IG_sp23C + 1;
        var str = 'rotate('+IG_sp23C+'turn)';
        $('#IG_spinImage23').css({'transition':'0.5s', 'transform':str});
    },
    function() {

    }
)

$('#IG_submitButtonBottom').hover(

    function() {
        calculator.button.IG_activeSubmitButtonAnimation = true;
        calculator.button.IG_animate(0);
    },
    function() {
        calculator.button.IG_activeSubmitButtonAnimation = false;
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



//------- HS TITLE SHOW / HIDE -------//


calculator.titles.hs.ghost.IG_show = function() {

    $('.IG_ctGhost').css({'transition':'0.3s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0turn)'});
    $('.IG_ctGhost').css({'opacity':'1'});
    calculator.titles.hs.ghost.IG_adjustHeight();

}

calculator.titles.hs.ghost.IG_hide = function() {

    $('.IG_ctGhost').css({'transition':'0.3s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 1turn)'});
    $('.IG_ctGhost').css({ 'opacity':'0'});

}

calculator.titles.opacity.IG_all = function(array) {

    var topt, bopt;

    topt = array[0] ? '1' : '0';
    bopt = array[1] ? '1' : '0';

    $('.IG_ctGhost').css({'opacity':topt});
    $('.IG_ctBottom').css({'opacity':bopt});

}

// we will readjust this one we determine the size for the icons
calculator.titles.hs.ghost.IG_adjustHeight = function() {

    var marginTop;

    if(calculator.globalVariable.IG_isIGA) {

    if(calculator.globalVariable.IG_ourFollowersAreHetero) {
        marginTop = '-8px';
    }

    if(!calculator.globalVariable.IG_ourFollowersAreHetero) {
        marginTop = '40px';
    }

}

if(calculator.globalVariable.IG_isIGB) {

    if(calculator.globalVariable.IG_theirFollowersAreHetero) {
        marginTop = '-8px';
    }

    if(!calculator.globalVariable.IG_theirFollowersAreHetero) {
        marginTop = '40px';
    }

}

    $('.IG_ctGhost').css({'transition':'0.3s', 'margin-top' : marginTop});

}


//------- CONTEST TITLE SHOW / HIDE -------//

calculator.titles.contest.IG_show = function() {

    $('.IG_ctBottom').css({'transition':'0.3s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 1turn)', 'opacity':'1'});
    $('.IG_imageWrap23').css({'transition':'0.3s', 'opacity':'1'});

    calculator.space.open.IG_cResults();

}

calculator.titles.contest.IG_hide = function() {

    $('.IG_ctBottom').css({'transition':'0.3s', 'transition-delay':'0s', 'transform' : 'rotate3d(1, 0, 0, 0.5turn)'});
    $('.IG_ctBottom').css({ 'opacity':'0'});

    calculator.space.close.IG_cResults();

}


//---------- TEXT AND COLOR ---------//

calculator.titles.hs.ghost.IG_text = function() {

    var contestName1, contestName2;

    contestName1 = document.getElementById('IG_contestNameG1');
    contestName2 = document.getElementById('IG_contestNameG2');

    if(calculator.globalVariable.IG_isIGA) {
        contestName1.innerHTML = 'IN-GROUP CONTEST A';
        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
    }

    if(calculator.globalVariable.IG_isIGB) {
        contestName1.innerHTML = 'IN-GROUP CONTEST B';
        contestName2.innerHTML = 'FOLLOWERS\' COMPETITION';
    }

}

calculator.titles.update.IG_textAndColor = function() {

    var contestName21, contestName22;

    contestName21 = document.getElementById('IG_contestName21');
    contestName22 = document.getElementById('IG_contestName22');

    if(calculator.globalVariable.IG_isIGA) {

        contestName21.innerHTML = 'FOLLOWERS\' COMPETITION';
        contestName22.innerHTML = 'IN-GROUP CONTEST A';

        if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

            if(calculator.globalVariable.tutorial.IG_IGSameColor) {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60,60,60), rgb(60,60,60))'});

            } else {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,0))'});

            }

        }

        if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(60,60,60), rgb(210,210,0))'});

            } else {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(60,60,60))'});

            }

        }

    }

    if(calculator.globalVariable.IG_isIGB) {

        contestName21.innerHTML = 'FOLLOWERS\' COMPETITION';
        contestName22.innerHTML = 'IN-GROUP CONTEST B';

        if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {

            if(calculator.globalVariable.tutorial.IG_IGSameColor) {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(210,210,210), rgb(210,210,210))'});

            } else {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(210,210,210), rgb(210,210,0))'});

            }

        }

        if(!calculator.globalVariable.tutorial.IG_weAreInTutorial) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(210,210,210), rgb(210,210,0))'});

            } else {

                $('.IG_contestTitle22, .IG_contestTitle1').css({'color':'white',
                'background':'linear-gradient(90deg, rgb(35, 79, 30), rgb(210,210,210))'});

            }

        }

    }

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

//------- ADJUSTMENT FOR HETERO ICONS ------//

calculator.icons.IG_adjustPlacement = function() {

    if(calculator.globalVariable.IG_ourFollowersAreHetero && calculator.globalVariable.IG_isIGA) {

        if(calculator.globalVariable.IG_playerView) {

            if(calculator.globalVariable.IG_playerIndex === 0 || calculator.globalVariable.IG_playerIndex === -1) {
                $('.IG_wrapMid').css({'margin-left':'-12px'});
                $('.IG_imgwrapfight').css({'margin-left':'47px'});
                $('.rightFollowerIconMainWrap').css({'margin-top':'6px'});
            }

            if(calculator.globalVariable.IG_playerIndex === 1) {
                $('.IG_wrapMid').css({'margin-right':'-12px'});
                $('.IG_imgwrapfight').css({'margin-right':'47px'});
                $('.leftFollowerIconMainWrap').css({'margin-top':'6px'});
            }

        }

        if(calculator.globalVariable.tutorial.IG_weAreInTutorial) {
            $('.IG_wrapMid').css({'margin-left':'-12px'});
            $('.IG_imgwrapfight').css({'margin-left':'47px'});
            $('.rightFollowerIconMainWrap').css({'margin-top':'6px'});
        }

    }

    if(calculator.globalVariable.IG_theirFollowersAreHetero && calculator.globalVariable.IG_isIGB) {

        $('.IG_wrapMid').css({'margin-left':'-12px'});
        $('.IG_imgwrapfight').css({'margin-left':'47px'});
        $('.rightFollowerIconMainWrap').css({'margin-top':'6px'});

    }

}


//----- DISPLAY ICON DEPENDING ON INDEX AND ROLE ------//

calculator.icons.IG_setMe = function() {

    $('.objectivef1').css({'display':'flex'});
    $('.objectivef2').css({'display':'flex'});
    $('.objectivel').css({'display':'flex'});
    $('.objectivef').css({'display':'flex'});

    $('.subjectivef1').css({'display':'none'});
    $('.subjectivef2').css({'display':'none'});
    $('.subjectivel').css({'display':'none'});
    $('.subjectivef').css({'display':'none'})

    if(calculator.globalVariable.IG_playerView) {

        if(calculator.globalVariable.IG_playerIndex === 0) {
            // OG
            $('.subjectivef1').css({'display':'flex'});
            $('.objectivef1').css({'display':'none'});

            //IGA
            $('.subjectivef').css({'display':'flex'});
            $('.objectivef').css({'display':'none'});


        }

        if(calculator.globalVariable.IG_playerIndex === 1) {

            // OG
            $('.subjectivef2').css({'display':'flex'});
            $('.objectivef2').css({'display':'none'});

            //IGA
            $('.subjectivef').css({'display':'flex'});
            $('.objectivef').css({'display':'none'});

        }

        if(calculator.globalVariable.IG_playerIndex === -1) {
            // OG
            $('.subjectivel').css({'display':'flex'});
            $('.objectivel').css({'display':'none'});

        }

    }

}

calculator.icons.IG_adjustForTreatment = function() {

    $('.IG_homoLeftFollowers, .IG_homoRightFollowers, .IG_homoLeftFollowers, .IG_homoRightFollowers').css({'display':'flex'});
    $('.IG_heteroLeftFollowers, .heteroRightFollowers, .IG_heteroLeftFollowers, .heteroRightFollowers').css({'display':'none'});

    if(calculator.globalVariable.IG_ourFollowersAreHetero) {

        // OG and IGA and IGB
        $('.IG_homoLeftFollowers').css({'display':'none'});
        $('.IG_heteroLeftFollowers').css({'display':'flex'});

    }

    if(calculator.globalVariable.IG_theirFollowersAreHetero) {

        // OG and IGA and IGB
        $('.IG_homoRightFollowers, .homoRightLeaders').css({'display':'none'});
        $('.heteroRightFollowers, .heteroRightLeaders').css({'display':'flex'});

    }

}

calculator.icons.IG_setIGA = function() {

    if(calculator.globalVariable.IG_playerIndex === -1) {

        // first follower is strong
        $('.strongFollower1').css({'display':'flex'});
        $('.weakFollower1').css({'display':'none'})

        // second follower is weak
        $('.weakFollower2').css({'display':'flex'});
        $('.strongFollower2').css({'display':'none'});

    }

        if(calculator.globalVariable.IG_playerIndex === 0) {

            // first follower is strong
            $('.strongFollower1').css({'display':'flex'});
            $('.weakFollower1').css({'display':'none'})

            // second follower is weak
            $('.weakFollower2').css({'display':'flex'});
            $('.strongFollower2').css({'display':'none'});

        }

        if(calculator.globalVariable.IG_playerIndex === 1) {

            // first follower is weak
            $('.weakFollower1').css({'display':'flex'});
            $('.strongFollower1').css({'display':'none'});

            // second follower is strong
            $('.strongFollower2').css({'display':'flex'});
            $('.weakFollower2').css({'display':'none'});

        }

    }

calculator.icons.IG_setAll = function() {

    $('.wrapMidOGSetup, .wrapMidIGASetup, .wrapMidIGBSetup').css({'display':'none'})

    if(calculator.globalVariable.IG_isOG1) {

        $('.wrapMidOGSetup').css({'display':'flex'})

        calculator.icons.setOG1();

        calculator.icons.IG_setMe();
        calculator.icons.IG_adjustForTreatment();

    }

    if(calculator.globalVariable.IG_isOG2) {

        $('.wrapMidOGSetup').css({'display':'flex'})

        calculator.icons.setOG2();

        calculator.icons.IG_setMe();
        calculator.icons.IG_adjustForTreatment();

    }

    if(calculator.globalVariable.IG_isIGA) {

        $('.wrapMidIGASetup').css({'display':'flex'})

        calculator.icons.IG_setIGA();

        calculator.icons.IG_setMe();
        calculator.icons.IG_adjustForTreatment();

    }

    if(calculator.globalVariable.IG_isIGB) {

        // no subjective view for displaying the other team

        calculator.icons.IG_adjustForTreatment();

        $('.wrapMidIGBSetup').css({'display':'flex'})

    }

}


//-------- SET SIZE OF ICONS IN HS SECTION -------//

calculator.icons.set.IG_size = function(Id, h, w) {

    var myClass, myHeight, myWidth;

    myClass = '.' + Id;
    myHeight = h + 'px';
    myWidth = w + 'px';

    $(myClass).css({'height' : myHeight, 'width' : myWidth});

}


//------- LEADER ICON RESIZING METHOD DEPENDENT ON HELP AND SABOTAGE VALUES ----//

calculator.icons.update.IG_followerAuraColor = function() {

    // Followers do not have any aura color
    $('.IG_imgwrapwrapwrap31').css({'background-color':'transparent', 'border-color':'transparent'});

    $('.IG_imgwrapwrapwrap32').css({'background-color':'transparent', 'border-color':'transparent'});

}

calculator.icons.update.IG_leaderSize = function() {

    var m1, m2;

    if(calculator.globalVariable.IG_isIGA) {

        if(calculator.globalVariable.IG_ourFollowersAreHetero) {

            if(calculator.globalVariable.IG_playerIndex === -1) {

                m1 = 1.8;
                m2 = 0.7;

            }

            if(calculator.globalVariable.IG_playerIndex === 0) {

                m1 = 1.8;
                m2 = 0.7;

            }

            if(calculator.globalVariable.IG_playerIndex === 1) {

                m1 = 0.7;
                m2 = 1.8;

            }

        } else {
            // from the leader's point of view

            m1 = 1;
            m2 = 1;

        }

    }

    if(calculator.globalVariable.IG_isIGB) {

        if(calculator.globalVariable.IG_theirFollowersAreHetero) {

            m1 = 1.8;
            m2 = 0.7;

        } else {

            m1 = 1;
            m2 = 1;

        }

    }


    calculator.icons.set.IG_size('IG_splc1', 85 * m1, 55 * m1);
    calculator.icons.set.IG_size('IG_splc2', 85 * m2, 55 * m2)

}


//-------- HIDDEN ICON METHODS --------//

calculator.icons.rescale.IG_leaderIconSize = function(scale) {

    var m1 = calculator.icons.calculate.size(th, ts) * scale;
    calculator.icons.set.IG_size('IG_rescaleL1', 85 * m1, 65 * m1);

    var m2 = calculator.icons.calculate.size(toh, tos) * scale;
    calculator.icons.set.IG_size('IG_rescaleL2', 85 * m2, 65 * m2)

}

calculator.icons.show.IG_hiddenContest = function() {
    $('.IG_OGCIcon2').css({'opacity':'1'});
}

calculator.icons.hide.IG_hiddenContest = function() {
    $('.IG_OGCIcon2').css({'opacity':'0'});
}


//------------- ENERVATE ICONS -----------------//

calculator.icons.enervate.IG_delayTime = 200;

//-- ENERVATE ACTIVE ICONS --//
calculator.globalVariable.IG_enervateLeaderLeft = false;
calculator.icons.enervate.IG_leaderLeft = function(state) {

    if(calculator.globalVariable.IG_enervateLeaderLeft) {

        if(state === 0) {
            $('.IG_splc1').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.IG_leaderLeft(1), calculator.icons.enervate.IG_delayTime);
        }
        if(state === 1) {
            $('.IG_splc1').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.IG_leaderLeft(0), calculator.icons.enervate.IG_delayTime);
        }

    } else {
        $('.IG_splc1').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.IG_enervateLeaderRight = false;
calculator.icons.enervate.IG_leaderRight = function(state) {

    if(calculator.globalVariable.IG_enervateLeaderRight) {

        if(state === 0) {
            $('.IG_splc2').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate.IG_leaderRight(1), calculator.icons.enervate.IG_delayTime);
        }
        if(state === 1) {
            $('.IG_splc2').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate.IG_leaderRight(0), calculator.icons.enervate.IG_delayTime);
        }

    } else {
        $('.IG_splc2').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}


//-- ENERVATE PASIVE ICONS --//
calculator.globalVariable.IG_enervate2LeaderLeft = false;
calculator.icons.enervate2.IG_leaderLeft = function(state) {

    if(calculator.globalVariable.IG_enervate2LeaderLeft) {

        if(state === 0) {
            $('.IG_lener1').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.IG_leaderLeft(1), calculator.icons.enervate.IG_delayTime);
        }
        if(state === 1) {
            $('.IG_lener1').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.IG_leaderLeft(0), calculator.icons.enervate.IG_delayTime);
        }

    } else {
        $('.IG_lener1').css({'transition':'0.3521s', 'transform':'scale(1)'});
    }

}

calculator.globalVariable.IG_enervate2LeaderRight = false;
calculator.icons.enervate2.IG_leaderRight = function(state) {

    if(calculator.globalVariable.IG_enervate2LeaderRight) {

        if(state === 0) {
            $('.IG_lener2').css({'transition':'0.3521s', 'transform':'scale(1.1)'});
            setTimeout(()=>calculator.icons.enervate2.IG_leaderRight(1), calculator.icons.enervate.IG_delayTime);
        }
        if(state === 1) {
            $('.IG_lener2').css({'transition':'0.3521s', 'transform':'scale(1)'});
            setTimeout(()=>calculator.icons.enervate2.IG_leaderRight(0), calculator.icons.enervate.IG_delayTime);
        }

    } else {
        $('.IG_lener2').css({'transition':'0.3521s', 'transform':'scale(1)'});
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


calculator.lock.switch.IG_all = Array(2);

calculator.lock.switch.IG_l1 = true;
calculator.lock.vibrate.IG_l1 = function(state) {

    if(calculator.lock.switch.IG_l1) {

        $('.IG_l1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


        if(state === 1) {

            $('.IG_l1vibrate').css({'margin-left':'10px'});
            setTimeout(()=>calculator.lock.vibrate.IG_l1(2),100);

        }

        if(state === 2) {

            $('.IG_l1vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.IG_l1(1),100);

        }

    } else {

        calculator.lock.switch.IG_l1 = false;
        $('.IG_l1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

    }

}

calculator.lock.switch.IG_l2 = true;
calculator.lock.vibrate.IG_l2 = function(state) {

    if(calculator.lock.switch.IG_l2) {

        $('.IG_l2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


        if(state === 1) {

            $('.IG_l2vibrate').css({'margin-left':'10px'});
            setTimeout(()=>calculator.lock.vibrate.IG_l2(2),100);

        }

        if(state === 2) {

            $('.IG_l2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>calculator.lock.vibrate.IG_l2(1),100);

        }

    } else {

        calculator.lock.switch.IG_l2 = false;
        $('.IG_l2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

    }

}


calculator.lock.IG_activate = function(array) {

    calculator.lock.switch.IG_all = array;

    var l1, l2, o1, o2;
    l1 = array[0] ? '2' : '-1';
    l2 = array[1] ? '2' : '-1';
    o1 = array[0] ? '1' : '0';
    o2 = array[1] ? '1' : '0';

    $('.IG_lockedCover_l1').css({'z-index' : l1, 'opacity' : o1});
    $('.IG_lockedCover_l2').css({'z-index' : l2, 'opacity' : o2});

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


calculator.pointers.IG_switches = Array(2);

calculator.pointers.IG_switches[0] = true;
calculator.pointers.wiggle.IG_l1= function(state) {

    if(calculator.pointers.IG_switches[0]) {

        if(state === 1) {

            $('.IG_sliderArrowImageWrap_l1').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.IG_l1(0), 750);

        }

        if(state === 0) {

            $('.IG_sliderArrowImageWrap_l1').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>calculator.pointers.wiggle.IG_l1(1), 750);

        }

    } else {

        $('.IG_sliderArrowImageWrap_l1').css({'opacity':'0'});

    }

}

calculator.pointers.IG_switches[1] = true;
calculator.pointers.wiggle.IG_l2= function(state) {

    if(calculator.pointers.IG_switches[1]) {

        if(state === 1) {

            $('.IG_sliderArrowImageWrap_l2').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>calculator.pointers.wiggle.IG_l2(0), 750);

        }

        if(state === 0) {

            $('.IG_sliderArrowImageWrap_l2').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>calculator.pointers.wiggle.IG_l2(1), 750);

        }

    } else {

        $('.IG_sliderArrowImageWrap_l2').css({'opacity':'0'});

    }

}


calculator.pointers.IG_activate = function(array) {

    calculator.pointers.IG_switches = array;

    calculator.pointers.wiggle.IG_l1(1);
    calculator.pointers.wiggle.IG_l2(1);

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
calculator.IG_stopRolling = false;
calculator.roll.IG_displayTime = 4500;


calculator.roll.IG_l1 = function(index, prevIndex, textArray) {

    var lSideText10 = document.getElementById('IG_lSideText10');
    var lSideText11 = document.getElementById('IG_lSideText11');
    var lSideText12 = document.getElementById('IG_lSideText12');
    var lSideText13 = document.getElementById('IG_lSideText13');
    var lSideText14 = document.getElementById('IG_lSideText14');
    var lSideText15 = document.getElementById('IG_lSideText15');

    if(!calculator.IG_stopRolling) {


        lSideText10.innerHTML = textArray[0];
        lSideText11.innerHTML = textArray[1];
        lSideText12.innerHTML = textArray[2];
        lSideText13.innerHTML = textArray[3];
        // lSideText13.innerHTML = calculator.roll.l1PowerText;
        lSideText14.innerHTML = textArray[4];
        lSideText15.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.IG_lSideText1' + index;
        var str2 = '.IG_lSideText1' + prevIndex;

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

        setTimeout(()=>calculator.roll.IG_l1(nextIndex, prevIndex, textArray), calculator.roll.IG_displayTime);

    } else {

        lSideText10.innerHTML = 'GROUP A';
        lSideText11.innerHTML = '';
        lSideText12.innerHTML = '';
        lSideText13.innerHTML = '';
        lSideText14.innerHTML = '';
        lSideText15.innerHTML = '';

        $('.IG_lSideText10').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.IG_lSideText11, .IG_lSideText12, .IG_lSideText13, .IG_lSideText14, .IG_lSideText15').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}

calculator.roll.IG_l2 = function(index, prevIndex, textArray) {

    var lSideText20 = document.getElementById('IG_lSideText20');
    var lSideText21 = document.getElementById('IG_lSideText21');
    var lSideText22 = document.getElementById('IG_lSideText22');
    var lSideText23 = document.getElementById('IG_lSideText23');
    var lSideText24 = document.getElementById('IG_lSideText24');
    var lSideText25 = document.getElementById('IG_lSideText25');

    if(!calculator.IG_stopRolling) {


        lSideText20.innerHTML = textArray[0];
        lSideText21.innerHTML = textArray[1];
        lSideText22.innerHTML = textArray[2];
        lSideText23.innerHTML = textArray[3];
        // lSideText23.innerHTML = calculator.roll.l2PowerText;
        lSideText24.innerHTML = textArray[4];
        lSideText25.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.IG_lSideText2' + index;
        var str2 = '.IG_lSideText2' + prevIndex;

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

        setTimeout(()=>calculator.roll.IG_l2(nextIndex, prevIndex, textArray), calculator.roll.IG_displayTime);

    } else {

        lSideText20.innerHTML = 'GROUP A';
        lSideText21.innerHTML = '';
        lSideText22.innerHTML = '';
        lSideText23.innerHTML = '';
        lSideText24.innerHTML = '';
        lSideText25.innerHTML = '';

        $('.IG_lSideText20').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.IG_lSideText21, .IG_lSideText22, .IG_lSideText23, .IG_lSideText24, .IG_lSideText25').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}


calculator.roll.IG_dsL = function(index, prevIndex, textArray) {

    var dLSideText0 = document.getElementById('IG_dLSideText0');
    var dLSideText1 = document.getElementById('IG_dLSideText1');
    var dLSideText2 = document.getElementById('IG_dLSideText2');
    var dLSideText3 = document.getElementById('IG_dLSideText3');
    var dLSideText4 = document.getElementById('IG_dLSideText4');
    var dLSideText5 = document.getElementById('IG_dLSideText5');

    if(!calculator.IG_stopRolling) {


        dLSideText0.innerHTML = textArray[0];
        dLSideText1.innerHTML = textArray[1];
        dLSideText2.innerHTML = textArray[2];
        dLSideText3.innerHTML = textArray[3];
        dLSideText4.innerHTML = textArray[4];
        dLSideText5.innerHTML = 'Current Balance: ' + textArray[5];

        var str1 = '.IG_dLSideText' + index;
        var str2 = '.IG_dLSideText' + prevIndex;

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

        setTimeout(()=>calculator.roll.IG_dsL(nextIndex, prevIndex, textArray), calculator.roll.IG_displayTime);

    } else {

        dLSideText0.innerHTML = 'GROUP A';
        dLSideText1.innerHTML = '';
        dLSideText2.innerHTML = '';
        dLSideText3.innerHTML = '';
        dLSideText4.innerHTML = '';
        dLSideText5.innerHTML = '';

        $('.IG_dLSideText0').css({'transition':'1.5s', 'transform':'rotate(0deg)'});
        $('.IG_dLSideText1, .IG_dLSideText2, .IG_dLSideText3, .IG_dLSideText4, .IG_dLSideText5').css({'transition':'0s', 'transform':'rotate(90deg)'});

    }


}


// MICRO TO MACRO CONNECTION ARRAYS

calculator.roll.IG_lArray = Array(6);


calculator.roll.IG_olArray = Array(6);


calculator.roll.IG_dsLeader = Array(6);


// MACRO ARRAY CONTROLLING METHODS
calculator.roll.IG_emptyAll = function() {

    calculator.roll.IG_lArray = [-1, -1, -1, -1, -1, -1];
    calculator.roll.IG_olArray = [-1, -1, -1, -1, -1, -1];

    calculator.roll.IG_dsLeader = [-1, -1, -1, -1, -1, -1];

}

// typeOfContest is about which type of contest is being played
// in the experiment only 'l', 'f' and 'fhetero will be relevant'
calculator.roll.IG_setRolesAndGroups = function() {

        // contest section related
    if(calculator.globalVariable.IG_isIGA) {

        calculator.roll.IG_dsLeader[0] = 'GROUP A';
        calculator.roll.IG_dsLeader[1] = 'FOLLOWER';

        calculator.roll.IG_lArray[0] = 'GROUP A';
        calculator.roll.IG_lArray[1] = 'FOLLOWER';
        calculator.roll.IG_olArray[0] = 'GROUP A';
        calculator.roll.IG_olArray[1] = 'FOLLOWER';


        calculator.roll.IG_lArray[3] = 'EQUAL POWER';
        calculator.roll.IG_olArray[3] = 'EQUAL POWER';

        calculator.roll.IG_dsLeader[3] = 'EQUAL POWER';

        // we are always represented by left side so left hetero implies our
        // group is hetero
        if(calculator.globalVariable.IG_ourFollowersAreHetero) {

            if(calculator.globalVariable.IG_playerIndex === 0) {

                calculator.roll.IG_lArray[3] = 'STRONG';
                calculator.roll.IG_olArray[3] = 'WEAK';

                calculator.roll.IG_dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.IG_playerIndex === 1) {

                calculator.roll.IG_lArray[3] = 'WEAK';
                calculator.roll.IG_olArray[3] = 'STRONG';

                calculator.roll.IG_dsLeader[3] = 'WEAK';

            }

        }

    }

    // contest section related
    // this section is only relevant for the tutorial
    // otherwise we reconstruct the data to make the subject's group group A
    if(calculator.globalVariable.IG_isIGB) {

        calculator.roll.IG_dsLeader[0] = 'GROUP B';
        calculator.roll.IG_dsLeader[1] = 'FOLLOWER';

        calculator.roll.IG_lArray[0] = 'GROUP B';
        calculator.roll.IG_lArray[1] = 'FOLLOWER';
        calculator.roll.IG_olArray[0] = 'GROUP B';
        calculator.roll.IG_olArray[1] = 'FOLLOWER';


        calculator.roll.IG_lArray[3] = 'EQUAL POWER';
        calculator.roll.IG_olArray[3] = 'EQUAL POWER';

        calculator.roll.IG_dsLeader[3] = 'EQUAL POWER';

        // we are always represented by left side so left hetero implies our
        // group is hetero
        if(calculator.globalVariable.IG_theirFollowersAreHetero) {

            if(calculator.globalVariable.IG_playerIndex === 0) {

                calculator.roll.IG_lArray[3] = 'STRONG';
                calculator.roll.IG_olArray[3] = 'WEAK';

                calculator.roll.IG_dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.IG_playerIndex === 1) {

                calculator.roll.IG_lArray[3] = 'WEAK';
                calculator.roll.IG_olArray[3] = 'STRONG';

                calculator.roll.IG_dsLeader[3] = 'WEAK';

            }

        }

    }

}

calculator.roll.IG_setYouTag = function() {

    if(calculator.globalVariable.IG_playerView) {

        if(calculator.globalVariable.IG_playerIndex === 0) {

            calculator.roll.IG_lArray[2] = 'YOU';

            calculator.roll.IG_dsLeader[2] = 'YOU';

            calculator.roll.IG_olArray[2] = '';


        }

        if(calculator.globalVariable.IG_playerIndex === 1) {

            calculator.roll.IG_lArray[2] = 'YOU';

            calculator.roll.IG_dsLeader[2] = 'YOU';

            calculator.roll.IG_olArray[2] = '';

        }

    }

}

calculator.roll.IG_adjustForTreatment = function() {

    calculator.roll.IG_lArray[3] = 'EQUAL POWER';
    calculator.roll.IG_olArray[3] = 'EQUAL POWER';

    calculator.roll.IG_dsLeader[3] = 'EQUAL POWER';

    // we are always represented by left side so left hetero implies our
    // group is hetero
    if(calculator.globalVariable.IG_ourFollowersAreHetero) {

        if(calculator.globalVariable.IG_isIGA) {

            calculator.roll.IG_lArray[3] = 'STRONG';
            calculator.roll.IG_olArray[3] = 'WEAK';

            calculator.roll.IG_dsLeader[3] = 'STRONG';

            // here we use subjectiveIndex as a way to determine left and right player rolls
            // we do not require subjectiveview that way we can also use this method during the tutorial
            if(calculator.globalVariable.IG_playerIndex === 0) {

                calculator.roll.IG_lArray[3] = 'STRONG';
                calculator.roll.IG_olArray[3] = 'WEAK';

                calculator.roll.IG_dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.IG_playerIndex === 1) {

                calculator.roll.IG_lArray[3] = 'WEAK';
                calculator.roll.IG_olArray[3] = 'STRONG';

                calculator.roll.IG_dsLeader[3] = 'WEAK';

            }

        }

    }

    if(calculator.globalVariable.IG_theirFollowersAreHetero) {

        if(calculator.globalVariable.IG_isIGB) {

            calculator.roll.IG_lArray[3] = 'STRONG';
            calculator.roll.IG_olArray[3] = 'WEAK';

            calculator.roll.IG_dsLeader[3] = 'STRONG';

            // here we use subjectiveIndex as a way to determine left and right player rolls
            // we do not require subjectiveview that way we can also use this method during the tutorial
            if(calculator.globalVariable.IG_playerIndex === 0) {

                calculator.roll.IG_lArray[3] = 'STRONG';
                calculator.roll.IG_olArray[3] = 'WEAK';

                calculator.roll.IG_dsLeader[3] = 'STRONG';

            }

            if(calculator.globalVariable.IG_playerIndex === 1) {

                calculator.roll.IG_lArray[3] = 'WEAK';
                calculator.roll.IG_olArray[3] = 'STRONG';

                calculator.roll.IG_dsLeader[3] = 'WEAK';

            }

        }

    }

}

// ACTION AND EXECUTION
calculator.roll.IG_animate = function() {

    calculator.roll.IG_l1(0, 6, calculator.roll.IG_lArray);
    calculator.roll.IG_l2(0, 6, calculator.roll.IG_olArray);

    if(calculator.globalVariable.IG_playerView) {

        calculator.roll.IG_dsL(0, 6, calculator.roll.IG_dsLeader);

    }

}

calculator.roll.IG_initiate = function() {

    calculator.roll.IG_adjustRollTextColor();
    calculator.roll.IG_emptyAll();
    calculator.roll.IG_setRolesAndGroups();
    calculator.roll.IG_setYouTag();
    calculator.roll.IG_adjustForTreatment();
    calculator.IG_stopRolling = false;
    calculator.roll.IG_animate();

}

calculator.roll.IG_reset = function() {

    calculator.IG_stopRolling = true;
    setTimeout(()=>calculator.roll.IG_initiate(), calculator.roll.IG_displayTime);

}


calculator.roll.IG_adjustRollTextColor = function() {
    if(calculator.globalVariable.IG_isIGA) {

        $('.IG_lSideText10, .IG_lSideText11, .IG_lSideText12, .IG_lSideText13, .IG_lSideText14, .IG_lSideText15').css({'fill':'white'});
        $('.IG_lSideText12').css({'fill':'lime'});

        $('.IG_lSideText20, .IG_lSideText21, .IG_lSideText22, .IG_lSideText23, .IG_lSideText24, .IG_lSideText25').css({'fill':'white'});

    }

    if(calculator.globalVariable.IG_isIGB) {

        $('.IG_lSideText10, .IG_lSideText11, .IG_lSideText12, .IG_lSideText13, .IG_lSideText14, .IG_lSideText15').css({'fill':'black'});
        $('.IG_lSideText12').css({'fill':'lime'});

        $('.IG_lSideText20, .IG_lSideText21, .IG_lSideText22, .IG_lSideText23, .IG_lSideText24, .IG_lSideText25').css({'fill':'black'});

    }
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


calculator.questions.spin1.IG_l1 = function() {
    $('.IG_sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.IG_l1 = function() {
    $('.IG_sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}

calculator.questions.spin1.IG_l2 = function() {
    $('.IG_sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
}

calculator.questions.spin2.IG_l2 = function() {
    $('.IG_sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(-90deg)'});
}


calculator.questions.activate.IG_all = function(array) {

    $('.IG_sliderQuestion_l1').css({'opacity': array[0].toString()});
    $('.IG_sliderQuestion_l2').css({'opacity': array[1].toString()});

    if(calculator.globalVariable.IG_playerView) {

        $('.IG_sliderQuestion_l1').css({'opacity': '0'});

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


calculator.wheel.IG_hide = function() {

    $('.IG_pw').css({'opacity':'1', 'zIndex':'1'});
    $('.IG_mywheel').css({'opacity':'0', 'zIndex':'0'});

}

calculator.wheel.IG_show = function() {

    $('.IG_pw').css({'opacity':'0', 'zIndex':'-1'});
    $('.IG_mywheel').css({'opacity':'1', 'zIndex':'0'});

}

calculator.wheel.IG_spin = function() {

    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = false;

    //---//

    calculator.results.softHide.IG_allResults();

    //---//

    calculator.wheel.IG_spinDuration = 1;
    calculator.wheel.IG_spinNumber = 3;

    calculator.wheel.IG_create(IG_pwin, 'IG_myWheel');
    calculator.wheel.IG_myWheelObj.stopAnimation(false);
    calculator.wheel.IG_myWheelObj.rotationAngle = 0;

    calculator.wheel.IG_show();

    //---//

    var winner = (IG_pwin > Math.random()) ? 1 : 2;

    var stopAt = calculator.wheel.IG_myWheelObj.getRandomForSegment(winner);
    calculator.wheel.IG_myWheelObj.animation.stopAngle = stopAt;
    calculator.wheel.IG_myWheelObj.startAnimation();

    //---//

    setTimeout(()=>
    {
        calculator.results.update.IG_allTextAndColors(winner);
    },
    calculator.wheel.IG_spinDuration * 0.75 * 1000);

    setTimeout(()=>
    {
        calculator.results.show.IG_outcomes();
    },
    calculator.wheel.IG_spinDuration * 1000);

}

calculator.wheel.IG_cruise = function() {

    if(!calculator.wheel.IG_isSpinning) {

        calculator.wheel.IG_show();

        calculator.wheel.IG_spinDuration = 60;
        calculator.wheel.IG_spinNumber = 6;

        calculator.wheel.IG_create(IG_pwin, 'IG_myWheel');
        calculator.wheel.IG_myWheelObj.stopAnimation(false);
        calculator.wheel.IG_myWheelObj.rotationAngle = 0;
        calculator.wheel.IG_myWheelObj.startAnimation();

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


calculator.space.IG_hsIsOpen = undefined;

calculator.space.IG_powerBarIsOpen = undefined;

calculator.space.IG_contestIsOpen = undefined;

calculator.space.IG_contestResultsIsOpen = undefined;

// CONTEST SECTION SPACE MANAGEMENT

calculator.space.open.IG_cResults = function() {

    calculator.space.IG_contestResultsIsOpen = true;
    calculator.space.update.IG_heights();

}

calculator.space.close.IG_cResults = function() {

    calculator.space.IG_contestResultsIsOpen = false;
    calculator.space.update.IG_heights();

}


// CLOSE BOTH HELP SABOTAGE SECTION AND 'CLOSE' LEADER RESULT SECTION

calculator.space.close.IG_all = function() {

    calculator.space.close.IG_cResults();

}


// ADJUST HEIGHT DEPENDING ON WHAT IS DISPLAYED AND OPEN

calculator.space.update.IG_heights = function() {



    var pb = calculator.space.IG_powerBarIsOpen ? 30 : 0;
    var c = calculator.space.IG_contestIsOpen ? 180 : 0;
    var hs = calculator.space.IG_hsIsOpen ? 195 : 0; // this may be smaller depending on the size of the icons
    var cr = calculator.space.IG_contestResultsIsOpen ? 140 : 0;//145 OLD VALUE

    var total = pb + c + cr + hs;

    total = total + 'px';

    console.log('********************');
    console.log('power bar: ' + pb);
    console.log('contest: ' + c);
    console.log('contestResult: ' + cr);
    console.log('hs: ' + hs);
    console.log('total: ' + total);
    console.log('********************');



    $('.IG_generalMarginBox').css({'transition':'1.023456s', 'height' : total});

    calculator.section.power.adjust.IG_space();

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

calculator.results.show.IG_outcomes = function() {

    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;



    //---------- CONTEST SECTION -----------//

    // I do not want the spinButton Bottom to have power to control the space
    // results and titles are the primary determinantes we can be clever and use this switch accordingly
    if(calculator.globalVariable.display.IG_cButton) {
        calculator.button.display.IG_spinBottom(true);
        setTimeout(()=>calculator.button.enable.IG_spinBottom(), 300);
    } else {
        calculator.button.display.IG_spinBottom(false);
        calculator.button.disable.IG_spinBottom();
    }

    if(calculator.globalVariable.display.IG_cResults) {
        calculator.results.show.IG_leaderOutcomes();
        calculator.globalVariable.IG_contestResultsExist = true;
    } else {
        calculator.results.hide.IG_leaderOutcomes()
        calculator.globalVariable.IG_contestResultsExist = false;
    }

    if(calculator.globalVariable.display.IG_cTitle) {
        calculator.titles.contest.IG_show();
    } else {
        calculator.titles.contest.IG_hide();
    }


    //-------------- HELP / SABOTAGE SECTION ------------//


    if(calculator.globalVariable.display.IG_hsIcons) {
        // need to redefined the parameters that the below method takes and
        // not sure if we have a hover switch for this or a results switch or
        // even if we need it
        calculator.section.hs.opacity.IG_LiFi([1,1])
        calculator.section.hs.set.IG_iconPosition('bottom');
    } else {
        // Not sure how can I benefit this state to be considered when needed
        // this section can be used to disappear hs section during the feedback
        // section to save some space and simplify the view and make sure
        // to always have only one leader icons set in the page
    }

    if(calculator.globalVariable.IG_weAreInFeedbackStage) {
        $('.IG_pWrap').css({'transition':'0s', 'margin-top':'-22px'});
        $('.IG_generalMarginBox').css({'height':'345px'});
    }


    //------ DELAYED ACTIVATIONS -------//

    setTimeout(()=>{

        calculator.globalVariable.IG_aBitOfWaitingIsDone = true;
        calculator.globalVariable.IG_dynamicDisplay = true;

    }, 5000);

}


//------------------ CONTEST -----------------//

calculator.results.leader.IG_switches = Array(4);
calculator.results.leader.IG_switches = [false, false, false, false];


calculator.results.leader.update.IG_payoffHeights = function(array) {

    var sum = array.reduce((a,b) => a + b, 0)

    if(sum === 0) {

        $('.IG_payoffWrap').css({'margin-top':'-109px'});
        $('.IG_c1, .IG_c2').css({'opacity':'1'});
        $('.IG_bottomText').css({'display':'none'});

    }

    if(sum === 1 || sum === 2) {

        $('.IG_payoffWrap').css({'margin-top':'-145px'});
        $('.IG_c1, .IG_c2').css({'opacity':'1'});
        $('.IG_bottomText').css({'display':'none'});

    }

    if(sum === 3) {

        $('.IG_payoffWrap').css({'margin-top':'-145px'});
        $('.IG_c1, .IG_c2').css({'opacity':'1'});
        $('.IG_bottomText').css({'display':'flex', 'margin-bottom':'-25px'});

    }

    if(sum === 4) {

        $('.IG_payoffWrap').css({'margin-top':'-145px'});
        $('.IG_c1, .IG_c2').css({'opacity':'1'});
        $('.IG_bottomText').css({'display':'flex', 'margin-bottom':'0px'});

    }


}

calculator.results.leader.display.IG_investment = function(show) {

    var opacity = show ? '1' : '0';
    $('.IG_cLeft, .IG_cRight').css({'opacity': opacity});
    $('.IG_pRight, .IG_pLeft').css({'display':'none'});
    $('.IG_topText').css({'justify-content':'center', 'border-bottom':'0px black'});


    calculator.results.leader.IG_switches[0] = show;
    calculator.results.leader.update.IG_payoffHeights(calculator.results.leader.IG_switches);

    calculator.results.IG_tokenTextIsShown = true;

}

calculator.results.leader.display.IG_prize = function(show) {

    var opacity = show ? '1' : '0';
    $('.IG_pLeft, .IG_pRight').css({'opacity': opacity});
    $('.IG_tokenTag').css({'display':'none'});

    calculator.results.leader.IG_switches[1] = show;
    calculator.results.leader.update.IG_payoffHeights(calculator.results.leader.IG_switches);

    if(show) {

        $('.IG_pRight, .IG_pLeft').css({'display':'flex'});
        $('.IG_topText').css({'justify-content':'space-between'});
        calculator.results.IG_tokenTextIsShown = false;

    }

}

calculator.results.leader.display.IG_netPayoff = function(show) {

    var opacity = show ? '1' : '0';
    $('.IG_npLeft, .IG_npRight').css({'opacity': opacity});
    $('.IG_topText').css({'border-bottom':'1px black dashed'});
    calculator.results.leader.IG_switches[2] = show;
    calculator.results.leader.update.IG_payoffHeights(calculator.results.leader.IG_switches);

}

calculator.results.leader.display.IG_role = function(show) {

    var opacity = show ? '1' : '0';
    $('.IG_rLeft, .IG_rRight').css({'opacity': opacity});
    calculator.results.leader.IG_switches[3] = show;
    calculator.results.leader.update.IG_payoffHeights(calculator.results.leader.IG_switches);

}


calculator.results.show.IG_leaderOutcomes = function() {


    $('.IG_payoffWrap, .IG_imageWrap23').css({'transition-delay':'0s','transition' : '0.7s', 'opacity':'1'});
    calculator.space.IG_contestResultsIsOpen = true;


    calculator.space.update.IG_heights();

}

calculator.results.hide.IG_leaderOutcomes = function() {

    $('.IG_payoffWrap, .IG_imageWrap23').css({'transition' : '0.15s', 'opacity':'0'});
    calculator.space.IG_contestResultsIsOpen = false;

    // Do not hide the contest titles when the subjective view is the leader
    if(calculator.globalVariable.IG_playerIndex === -1 && calculator.globalVariable.IG_playerView) {
        calculator.space.IG_contestResultsIsOpen = true;
        $('.IG_imageWrap23').css({'transition' : '0.15s', 'opacity':'1'});
    }

    // do not hide the contest title when contest title hover is close.
    // If the title is hidden then it will never be opened by the hover since it is closed
    if(!calculator.globalVariable.hover.IG_cTitle) {
        calculator.space.IG_contestResultsIsOpen = true;
        $('.IG_imageWrap23').css({'transition' : '0.15s', 'opacity':'1'});
    }

    calculator.space.update.IG_heights();

}


//---------- ALL ----------//

calculator.results.softHide.IG_allResults = function() {

    $('.IG_payoffWrap').css({'transition-delay':'0s', 'transition' : '0.15s', 'opacity':'0'});

}

calculator.results.hide.IG_all = function() {

    calculator.results.hide.IG_leaderOutcomes();
    calculator.globalVariable.IG_dynamicDisplay = false;

}

calculator.results.show.IG_all = function() {

    calculator.results.show.IG_leaderOutcomes();

}


//-------------- TEXT AND COLOR UPDATING ------------//

calculator.results.IG_tokenTextIsShown = undefined;
calculator.results.IG_resultTextsType = undefined;
calculator.results.IG_lastWinner = undefined;


calculator.results.update.IG_contestText = function(w) {

    w = w === undefined ? calculator.results.IG_lastWinner : w;
    calculator.results.IG_lastWinner = w;

    var winnerPrize, winnerRole, loserRole;


    winnerRole = 'Become the Leader';
    loserRole = 'Continue as Follower';
    winnerPrize = 0;

    //---//

    var resultLeft = document.getElementById('IG_resultLeft');
    var prizeLeft = document.getElementById('IG_prizeLeft');
    var costLeft = document.getElementById('IG_costLeft');
    var netPayoffLeft = document.getElementById('IG_netPayoffLeft');
    var roleLeft = document.getElementById('IG_roleLeft');
    var resultRight = document.getElementById('IG_resultRight');
    var prizeRight = document.getElementById('IG_prizeRight');
    var costRight = document.getElementById('IG_costRight');
    var netPayoffRight = document.getElementById('IG_netPayoffRight');
    var roleRight = document.getElementById('IG_roleRight');
    var myTokenTag1 = document.getElementById('IG_tokenTag1');
    var myTokenTag2 = document.getElementById('IG_tokenTag2');

    var tokenTag1, tokenTag2;
    if(calculator.results.IG_tokenTextIsShown) {
        tokenTag1 = efo1 === 0 ? ' token' : ' tokens';
        tokenTag2 = efo2 === 0 ? ' token' : ' tokens';
        $('.IG_tokenTag').css({'padding-left':'10px', 'font-weight':'400', 'display':'inline'});
    } else {
        tokenTag1 = tokenTag2 = '';
        $('.IG_tokenTag').css({'display':'none'});
    }

    //---//

    resultLeft.innerHTML = w === 1 ? 'WON' : 'LOST';
    prizeLeft.innerHTML = w === 1 ? winnerPrize : 0;
    costLeft.innerHTML = efo1;
    myTokenTag1.innerHTML = tokenTag1;
    netPayoffLeft.innerHTML = -efo1 + ( w === 1 ? winnerPrize : 0);
    roleLeft.innerHTML = w === 1 ? winnerRole : loserRole;

    resultRight.innerHTML = w === 2 ? 'WON' : 'LOST';
    prizeRight.innerHTML = w === 2 ? winnerPrize : 0;
    costRight.innerHTML = efo2;
    myTokenTag2.innerHTML = tokenTag2;
    netPayoffRight.innerHTML = -efo2 + ( w === 2 ? winnerPrize : 0);
    roleRight.innerHTML = w === 2 ? winnerRole : loserRole;

}

calculator.results.update.IG_outcomeColors = function(w) {

    w = w === undefined ? calculator.results.IG_lastWinner : w;
    calculator.results.IG_lastWinner = w;

    if(w === 1) {
        $('.IG_resultLeft, .IG_leftSideResult').css({'transition':'1s', 'background-color':'darkblue'});
        $('.IG_resultRight, .IG_rightSideResult').css({'transition':'1s', 'background-color':'darkred', 'color':'white'});
    }
    if(w === 2) {
        $('.IG_resultLeft, .IG_leftSideResult').css({'transition':'1s', 'background-color':'darkred'});
        $('.IG_resultRight, .IG_rightSideResult').css({'transition':'1s', 'background-color':'darkblue', 'color':'white'});
    }

}

calculator.results.update.IG_allColors = function(w) {

    if(w === 1) {
        $('.IG_p1, .IG_np1').css({'color':'blue'});
        $('.IG_p2').css({'color':'black'});
        $('.IG_np2').css({'color':'red'});
    }

    if(w === 2) {
        $('.IG_p2, .IG_np2').css({'color':'blue'});
        $('.IG_p1').css({'color':'black'});
        $('.IG_np1').css({'color':'red'});
    }

    if(efo2 > 0 && w === 1) {
        $('.IG_np2').css({'color':'red'});
    }

    if(efo1 > 0 && w === 2) {
        $('.IG_np1').css({'color':'red'});
    }

    $('.IG_c1, .IG_c2').css({'color':'red'});

    if(efo1 === 0 && w === 2) {
        $('.IG_np1').css({'color':'black'});
    }

    if(efo2 === 0 && w === 1) {
        $('.IG_np2').css({'color':'black'});
    }

    if(efo1 === 0) {
        $('.IG_c1').css({'color':'black'});
    }

    if(efo2 === 0) {
        $('.IG_c2').css({'color':'black'});
    }

    if(calculator.globalVariable.IG_isIGA || calculator.globalVariable.IG_isIGB) {

        $('.IG_p1, .IG_p2').css({'color':'black'});

        if(efo1 === 0) {
            $('.IG_np1').css({'color':'black'});
        }
        if(efo1 > 0) {
            $('.IG_np1').css({'color':'red'});
        }
        if(efo2 === 0) {
            $('.IG_np2').css({'color':'black'});
        }
        if(efo2 > 0) {
            $('.IG_np2').css({'color':'red'});
        }

    }

    $('.IG_p1, .IG_c1, .IG_np1, .IG_p2, .IG_c2, .IG_np2').css({'font-weight':'500'});

    calculator.results.update.IG_outcomeColors(w)

}

calculator.results.update.IG_allTextAndColors = function(w) {

    if(w === 'undefined') {
        console.log('WARNING WINNER INDEX FOR CALCULATOR.RESULTS.UPDATE.* IS UNDEFINED');
    }

    calculator.results.update.IG_contestText(w);
    calculator.results.update.IG_allColors(w);

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

//----- CALCULATOR BUTTON ------//

calculator.IG_open = function() {

    calculator.section.power.display.IG_barText(false);
    $('.IG_contestSectionMinimize, .IG_contestSectionMinimize2').css({'transition':'0.3s', 'transform-origin':'bottom', 'transform':'scaleY(1)'});
    $('.IG_generalMarginBox').css({'margin-bottom':'0px'});
    calculator.space.IG_contestIsOpen = true;
    calculator.space.IG_contestResultsIsOpen = true;
    calculator.space.update.IG_heights();

}

calculator.IG_close = function() {

    calculator.section.power.display.IG_barText(true);

    $('.IG_contestSectionMinimize, .IG_contestSectionMinimize2').css({'transition':'0.3s', 'transform-origin':'bottom', 'transform':'scaleY(0)'});

    calculator.space.IG_contestIsOpen = false;
    calculator.space.update.IG_heights();

    $('.IG_generalMarginBox').css({'margin-bottom':'-20px'});

}

//------ SUBMIT TOP -----//

calculator.button.IG_activeSubmitButtonAnimation = false;
calculator.button.IG_animate = function(state) {

    if(calculator.button.IG_activeSubmitButtonAnimation) {

        if(state === 0) {
            $('.IG_submitButtonBottomImage2').css({'transition-delay':'1s', 'transition':'3s', 'right':'-100px'});
            setTimeout(()=>calculator.button.IG_animate(1), 1000);
        }

        if(state === 1) {
            $('.IG_submitButtonBottomImage2').css({'transition-delay':'0s', 'transition':'0s', 'right':'58px'});
        }

    } else {
        $('.IG_submitButtonBottomImage2').css({'transition-delay':'0s', 'transition':'0s', 'right':'58px'});
    }

}


//--------- SPIN BOTTOM --------//

calculator.button.display.IG_spinBottom = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.IG_spinImage23').css({'transition':'0.3521s', 'opacity': opacity, 'cursor' : cursor});

}

calculator.button.disable.IG_spinBottom = function() {

    $('.IG_spinImage23').css({'display':'none'});

}

calculator.button.enable.IG_spinBottom = function() {

    $('.IG_spinImage23').css({'display':'inline'});

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



//------------- DISPLAY CALCULATOR ------------------//

calculator.section.all.IG_opacity = function(opt) {

    $('.IG_generalMarginBox').css({'transition':'0.35s', 'opacity' : opt.toString()});

}


calculator.section.all.adjust.IG_decisionSliders = function() {

    if(calculator.globalVariable.IG_playerView) {

        if(calculator.globalVariable.IG_playerIndex === -1) {

            calculator.decisionSlider.leader.IG_disable();

        }

        if(calculator.globalVariable.IG_playerIndex === 0 || calculator.globalVariable.IG_playerIndex === 1) {

            calculator.section.decision.leader.IG_opacity(1)
            calculator.decisionSlider.leader.IG_enable();

        }

    } else {

        calculator.decisionSlider.leader.IG_disable();

    }

    if(calculator.globalVariable.IG_weAreInFeedbackStage) {

        calculator.decisionSlider.leader.IG_disable();

    }

}


//------------- DISPLAY PLAYER DECISION SLIDER -----------------//

calculator.section.decision.leader.IG_opacity = function(opt) {

    $('.IG_decisionWrapL').css({'opacity' : opt.toString()});

}


//--------------- HELP SABOTAGE SECTION  ----------//

calculator.section.hs.display.IG_all = function(show) {

    var d = show ? 'flex' : 'none';

    $('.IG_hsWrap, .IG_ctGhost').css({'display': d});
    calculator.space.IG_hsIsOpen = show;

}


//----//
// Leader icon - Fight icon
calculator.section.hs.opacity.IG_LiFi = function(array) {

    calculator.section.hs.opacity.IG_leaderIconsMain(array[0]);
    calculator.section.hs.opacity.IG_fightIcon(array[1]);

}

// Methods used in IG_LIFI


calculator.section.hs.opacity.IG_leaderIconsMain = function(o) {

    if(o != -1) {

        $('.IG_wrapMid').css({'transition':'0.3s', 'opacity': o.toString()});

    }

}

calculator.section.hs.opacity.IG_fightIcon = function(o) {

    if(o != -1) {

        $('.IG_imgwrapfight').css({'transition':'0.5s', 'opacity' : o.toString()});

    }

}


//----//

calculator.section.hs.set.IG_iconPosition = function(position) {

    if(position === 'center') {

        $('.IG_OGCIcon').css({'transition':'0.3s', 'margin-top':'-29px'});
        $('.IG_imgwrapfight').css({'transition':'0.3s','margin-left':'0px', 'margin-right':'0px', 'margin-top':'0px'});
        $('.leftFollowerIconMainWrap').css({'transition':'0s','transform':'rotate(0deg)'});
        $('.rightFollowerIconMainWrap').css({'transition':'0s','transform':'rotate(0deg)'});
        $('.IG_fightIcon').css({'transition':'0.5s', 'transform':'rotate(0turn)'});

    }

    if(position == 'bottom') {

        $('.IG_OGCIcon').css({'margin-top':'39px'});
        $('.IG_imgwrapfight').css({'transition':'0.7s','margin-left':'35px', 'margin-right':'35px', 'margin-top':'10px'});
        $('.leftFollowerIconMainWrap').css({'transition':'0.7s','transform':'rotate(10deg)'});
        $('.rightFollowerIconMainWrap').css({'transition':'0.7s','transform':'rotate(-10deg)'});
        $('.IG_fightIcon').css({'transition':'0.5s', 'transform':'rotate(1turn)'});

        if(calculator.globalVariable.IG_isIGA) {
            if(!calculator.globalVariable.IG_ourFollowersAreHetero) {
                $('.IG_OGCIcon').css({'margin-top':'69px'});
            }
        }

        if(calculator.globalVariable.IG_isIGB) {
            if(!calculator.globalVariable.IG_theirFollowersAreHetero) {
                $('.IG_OGCIcon').css({'margin-top':'69px'});
            }
        }


    }

}


//-------------- POWER RATIO ----------------//
//-------------- POWER RATIO ----------------//

calculator.section.power.opacity.IG_bar = function(opt) {

    $('.IG_pWrap').css({'opacity' : opt.toString()});

}


// !! NOT SURE IF THIS SHOULD BE USED OR NOT
calculator.section.power.adjust.IG_space = function() {

    $('.IG_pWrap').css({'transition':'0.3s', 'margin-top':'-54px'});

}


//-------------- CONTEST SECTION ----------------//
//-------------- CONTEST SECTION ----------------//

calculator.section.contest.display.IG_all = function(show) {

    calculator.section.contest.display.IG_sliders(show);
    calculator.section.contest.display.IG_title(show);
    calculator.section.contest.display.IG_results(show);

}

calculator.section.contest.display.IG_sliders = function(show) {

    var display = show ? 'flex' : 'none';

    $('.IG_contestSection').css({'display': display});

    calculator.space.IG_contestIsOpen = show;

    calculator.space.update.IG_heights();

}

calculator.section.contest.display.IG_title = function(show) {

    var display = show ? 'block' : 'none';

    $('.IG_imageWrap23').css({'display': display});

    calculator.space.IG_contestResultsIsOpen = show;

    calculator.space.update.IG_heights();

}

calculator.section.contest.display.IG_results = function(show) {

    var display = show ? 'flex' : 'none';

    $('.IG_payoffWrap').css({'display': display});

    calculator.space.IG_contestResultsIsOpen = show;

    calculator.space.update.IG_heights();

}

// unused second set of leader icons
calculator.section.contest.display.IG_icons = function(show) {

    var opt = show ? '1' : '0';
    var display = show ? 'flex' : 'none'
    $('.IG_OGCIcon2').css({'opacity':opt, 'display':display});

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


calculator.values.set.IG_efforts = function(valueArray) {

    efo1 = valueArray[0];
    efo2 = valueArray[1];

    calculator.values.update.IG_efficiencies();
    calculator.values.update.IG_probability();

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


calculator.refresh.IG_sliders = function() {

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    $('#IG_lSlider1').prop('value', efo1);
    $('#IG_lSlider1').change();

    $('#IG_olSlider1').prop('value', efo2);
    $('#IG_olSlider1').change();

    calculator.graphics.update.IG_effortBar(efo1, 'IG_barl1', ourSide, !showAxis);
    calculator.graphics.update.IG_effortBar(efo2, 'IG_barl2', !ourSide, !showAxis);


    if(calculator.globalVariable.IG_playerView) {

        calculator.decisionSlider.leader.IG_effortBar(efo1, !showAxis);
        $('#IG_dSliderL').prop('value', efo1);
        $('#IG_dSliderL').change();
        calculator.graphics.update.IG_barLabelX('IG_bardl', true);

    }


}

calculator.refresh.IG_values = function() {

    calculator.values.update.IG_efficiencies();
    calculator.values.update.IG_probability();

    calculator.refresh.IG_sliders();

}

calculator.refresh.IG_barXAxis = function() {

    calculator.update.barLabel('IG_barl1', false);
    calculator.update.barLabel('IG_barl2', false);
    calculator.update.barGrid('IG_barl1', false);
    calculator.update.barGrid('IG_barl2', false);

}


//////////////////////// SETUP METHODS //////////////////////////////////
//////////////////////// SETUP METHODS //////////////////////////////////
//////////////////////// SETUP METHODS //////////////////////////////////
//////////////////////// SETUP METHODS //////////////////////////////////
//////////////////////// SETUP METHODS //////////////////////////////////
//////////////////////// SETUP METHODS //////////////////////////////////

calculator.setup.IG_feedbackAdjustment = function() {

    if(calculator.globalVariable.IG_weAreInFeedbackStage) {

        $('.IG_pWrap').css({'margin-top':'-22px'});
        $('.IG_ctGhost, .IG_hsWrap, .IG_decisionWrapL').css({'display':'none'});
        $('.IG_generalMarginBox').css({'transition':'0s', 'height':'345px'})

        //------ QUESTIONS -----//
        calculator.questions.activate.IG_all([0,0])

        //------ LOCKS -------//
        calculator.lock.IG_activate([1,1]);

    }

}

calculator.setup.ig = function() {

    // HOVERS ACTIVE
    calculator.globalVariable.IG_aBitOfWaitingIsDone = true;

    //------- SPACING OF CALCULATOR -----//
    calculator.space.IG_hsIsOpen = true;
    calculator.space.IG_powerBarIsOpen = true;
    calculator.space.IG_contestIsOpen = true;
    calculator.space.IG_contestResultsIsOpen = true;
    calculator.globalVariable.IG_contestResultsExist = false;


    //------- CALCULATOR SETUP -------//

    calculator.globalVariable.IG_showDecisionSlider = 0;

    calculator.globalVariable.IG_isOG1 = 0;
    calculator.globalVariable.IG_isOG2 = 0;
    calculator.globalVariable.IG_isIGA = 1;
    calculator.globalVariable.IG_isIGB = 0;

    //------- PLAYER SPECIFIC INFORMATION -------//

    calculator.globalVariable.IG_ourFollowersAreHetero = 1;
    calculator.globalVariable.IG_theirFollowersAreHetero = 1;

    calculator.globalVariable.IG_playerView = 0;
    calculator.globalVariable.IG_playerIndex = 0;

    // leader view setup - gray/yellow
    // calculator.globalVariable.IG_playerView = 1;
    // calculator.globalVariable.IG_playerIndex = -1;
    // calculator.globalVariable.playerGroup = 1;


    //------- TUTORIAL SWITCHES FOR IN-GROUP CONTEST ------//

    calculator.globalVariable.tutorial.IG_weAreInTutorial = 1;
    calculator.globalVariable.tutorial.IG_IGSameColor = 0;
    calculator.globalVariable.tutorial.IG_IGDifferentColor = 1 - calculator.globalVariable.tutorial.IG_IGSameColor;


    //----- AFTER SPIN ACTION SWITCHES ----//

    calculator.globalVariable.display.IG_hsIcons = 1;

    calculator.globalVariable.display.IG_cResults = 1;
    calculator.globalVariable.display.IG_cTitle = 1;
    calculator.globalVariable.display.IG_cButton = 1;


    //----- HOVER SWITCHES ------//

    calculator.globalVariable.hover.IG_cTitle = 1;
    calculator.globalVariable.hover.IG_cButton = 1;


    //------ QUESTIONS -----//
    calculator.questions.activate.IG_all([0,0])

    //------ LOCKS -------//
    calculator.lock.IG_activate([0,0]);

    //----- ROLL ------//
    calculator.roll.IG_initiate();

    //----- ICONS -----//
    calculator.icons.IG_setAll();
    calculator.section.hs.set.IG_iconPosition('bottom');

    //-- SETUP TEXT --//
    calculator.titles.update.IG_textAndColor();
    calculator.titles.hs.ghost.IG_text();

    //----- DECISION SLIDERS -----//
    // auto show hide the relevant slider based on globalVariable.subjective**
    calculator.section.all.adjust.IG_decisionSliders();

    //------ HIDE ALL / CLOSE ALL RESULTS------//
    calculator.results.softHide.IG_allResults();
    // calculator.space.close.all();


    //----------------------------------------------------------//
    //--------------- HELP AND SABOTAGE SETTINGS ---------------//
    //----------------------------------------------------------//


    //-------- TITLES -------//

    calculator.titles.hs.ghost.IG_show();

    //----- GENERAL DISPLAY SETTINGS ----//

    calculator.globalVariable.IG_dynamicDisplay = false;
    calculator.section.hs.opacity.IG_LiFi([1,1]);


    //----------------------------------------------------------//
    //------------------- POWER BAR SETTINGS -------------------//
    //----------------------------------------------------------//

    calculator.section.power.opacity.IG_bar(true);
    calculator.section.power.display.IG_barText();


    //----------------------------------------------------------//
    //--------------------- CONTEST SECTION --------------------//
    //----------------------------------------------------------//

    //----- GENERAL SETTINGS -----//

    // these display settins simply display none the specific section
    // calculator.section.contest.display.all(true);
    calculator.section.contest.display.IG_sliders(true);
    calculator.section.contest.display.IG_title(true);
    calculator.section.contest.display.IG_results(true);
    calculator.section.contest.display.IG_icons(false);

    //------- RESULTS DISPLAY SETTINGS ------//

    calculator.results.leader.display.IG_investment(true);
    calculator.results.leader.display.IG_prize(true);
    calculator.results.leader.display.IG_netPayoff(true);
    calculator.results.leader.display.IG_role(true);

    //------- BUTTONS ------//

    calculator.button.display.IG_spinBottom(true);
    calculator.button.enable.IG_spinBottom();
    calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;

    //-------- TITLES -------//

    // if the subjective index is leader then hiding the contest title will not work by construction
    calculator.titles.contest.IG_show();
    // calculator.titles.contest.hide();

    //------ SLIDERS -------//

    // changes the slider range based on globalVariable.is***
    // calculator.graphics.update.IG_effortSliderRange();
    // changes the leader slider text background color based on globalVariable.is***
    calculator.graphics.update.IG_contestSliderBackgroundColor();


    //------ REFRESH ------// -> NOT SURE WHEN IT IS NECESSARY TO USE THESE

    calculator.refresh.IG_values();
    // VALUES HAS REFRESH.SLIDER INSIDE IT
    calculator.refresh.IG_sliders();


    //------- FEEDBACK ARRANGEMENT -------//
    calculator.globalVariable.IG_weAreInFeedbackStage = 0;
    calculator.setup.IG_feedbackAdjustment();

    //------ DISPLAY ------//
    $('.IG_generalMarginBox').css({'transition':'0.7s', 'transform':'scale(1)', 'display':'grid'});

    setTimeout(()=> {
        calculator.section.all.IG_opacity(1);
    }
    , 1000);


}

calculator.IG_null = function() {

    $('.IG_generalMarginBox').css({'transition':'0.3s', 'transform':'scale(0)', 'height':'0'})
    setTimeout(()=>{$('.IG_generalMarginBox').css({'display':'none'})}, 300);

}


//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//


calculator.IG_initialize = function() {

    calculator.pointers.IG_activate([0, 0]);
    calculator.questions.activate.IG_all([0, 0]);
    calculator.lock.IG_activate([0, 0])


    calculator.values.set.IG_efforts([20,20]);
    calculator.refresh.IG_sliders();
    calculator.graphics.update.IG_pie();

}

calculator.IG_initialize();
calculator.IG_null();
calculator.setup.ig();



var IG_calcButton = document.getElementById('IG_calcButtonBottom');
calculator.globalVariable.IG_open = 1;

IG_calcButton.onclick = function() {

    // close calculator
    if(calculator.globalVariable.IG_open) {

        calculator.IG_close();

    }

    // open calculator
    if(!calculator.globalVariable.IG_open) {

        calculator.IG_open();

    }

    calculator.globalVariable.IG_open = 1 - calculator.globalVariable.IG_open;

}





var IG_spin2 = document.getElementById('IG_spinImage23');
calculator.globalVariable.IG_bottomSpinButtonIsEnabled = true;
IG_spin2.onclick = function() {
    if(calculator.globalVariable.IG_bottomSpinButtonIsEnabled) {

        calculator.globalVariable.IG_aBitOfWaitingIsDone = false;

        calculator.wheel.IG_spin();
        calculator.globalVariable.IG_dynamicDisplay = false;


    }
}
