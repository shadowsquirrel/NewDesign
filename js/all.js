
var calculator = {

    wheel: {},
    update: {},
    slider : {},
    display: {},
    set: {}

};

var icon = {

    tool:
    {
        set:{}
    },
    set: {},
    display: {},
    values: {},
    stage1: {}

};

var wiggle = {};

var vibrate = {};

//------wheel object-----//


calculator.wheel.spinDuration = 1;
calculator.wheel.spinNumber = 10;

calculator.wheel.create = function(probability) {

    var a = 100*probability;
    var b = 100-a;

    calculator.wheel.myWheelObj = new Winwheel({
        'canvasId': 'mywheel',
        'numSegments': 2,
        'lineWidth' : 0,
        'outerRadius': 58, // controls the size of the theWheel
        'textOrientation' : 'vertical',    // Set orientation. horizontal, vertical, curved.
        'textFontFamily'  : 'Courier',     // Monospace font best for vertical and curved.
        'rotationAngle':Math.random()*360,

        'segments':
        [
            {
                'fillStyle' : 'rgb(60, 60, 60)',
                'strokeStyle':'transparent',
                'textFillStyle': 'white',
                'text'      : '',
                'size'      : winwheelPercentToDegrees(a),
            },
            {
                'fillStyle' : 'rgb(210, 210, 210)',
                'strokeStyle':'transparent',
                'textFillStyle': 'rgb(60, 60, 60)',
                'text'      : '',
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


//-----calculator global variables initiation-----//

var efo, oefo, efi, oefi, pwin, efefo, oefefo, myTag;
var s1, h1, s2, h2, ts, th, os1, oh1, os2, oh2, tos, toh;


//------calculator graphical methods-----//


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

var playerLabels;
calculator.update.pie = function() {

    var x = pwin;
    var y = 1-pwin;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

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
            colors: ['rgb(210, 210, 210)', 'rgb(60, 60, 60)']
        }
    }];

    var layout = {
        height: 115,
        width: 115,
        font:{
            size: 10
        },
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: false,
    };

    Plotly.react('pie', data, layout, {displayModeBar: false});
}

calculator.update.effortBar = function(e, barId, ourSide, axisOn) {
    // var val1 = efi / (efi + oefi);
    // var val2 = oefi / (efi + oefi);
    var y = e;
    if(typeof(x) === 'undefined') x = 0;

    var mColor = ourSide ? 'rgb(60, 60, 60)' : 'rgb(210, 210, 210)';

    var mytextpos = 'outside';

    var somecolor = 'black';

    if(y>742) {
        mytextpos = 'inside';

        if(barId==='bar1') {
            somecolor = 'white';
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

    // var papercolors = ['white', 'rgb(35,79,30)', 'black', 'rgb(41, 0, 87)', 'rgb(210, 210, 210)'];
    var papercolors = ['white', 'rgb(60, 60, 60)', 'black', 'rgb(41, 0, 87)', 'rgb(210, 210, 210)'];
    var pindex = 1;


    if(barId==='barl1'){//darkgreen white
        tindex=1;
        pindex=1;
    }
    if(barId==='barl2'){
        //lightgray black
        tindex=0;
        pindex=4;
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
            range: [0,800],
            layer: 'below traces',
            tickfont: {
                size: 10,
                color:ticktextcolors[tindex],
            },
            tickmode: 'array',
            tickvals: [0, 50, 100, 150, 250, 350, 500, 650, 800],
            ticktext: [0, 50, 100, 150, 250, 350, 500, 650, 800],
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

calculator.update.helpSaboBar = function(a, barId, lighter, axisOn) {

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
    }
    if(barId === 'barf1'){//darkgray or darkgreen and  white
        tindex = 1;
        pindex = 1;
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

calculator.update.totalHelpBar = function(a,b) {
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

calculator.update.totalSaboBar = function(a, b) {
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

calculator.update.powerBarDynamicText = function(place) {

    if(place === 'middle') {

        $('.pTitleDynamicLeft').css({'transition':'3s', 'margin-left':'353px', 'margin-right':'5px'});
        $('.pTitleDynamicMiddle').css({'transition':'3s', 'margin-left':'103px', 'margin-right':'-21px'});
        $('.pTitleDynamicRight').css({'transition':'3s', 'marign-left':'5px'});

    }

    if(place === 'left') {

        $('.pTitleDynamicLeft').css({'transition':'3s', 'margin-left':'15px', 'margin-right':'5px'});
        $('.pTitleDynamicMiddle').css({'transition':'3s', 'margin-left':'29px', 'margin-right':'-21px'});

    }

    if(place === 'right') {

        $('.pTitleDynamicLeft').css({'transition':'3s', 'margin-left':'758px', 'margin-right':'41px'});
        $('.pTitleDynamicMiddle').css({'transition':'3s', 'margin-left':'0px', 'margin-right':'-21px'});

    }

    if(place === 'none') {

        $('.pTitleDynamicLeft').css({'transition':'0s', 'opacity':'0'});
        $('.pTitleDynamicMiddle').css({'transition':'0s', 'opacity':'0'});
        $('.pTitleDynamicRight').css({'transition':'0s', 'opacity':'0'});

    }

}

calculator.update.efficiencyBar = function(showText) {

    var efi1, efi2;
    efi1 = efi;
    efi2 = oefi;

    var val1 = efi1 / (efi1 + efi2);
    var val2 = efi2 / (efi1 + efi2);

    if(!showText) {

        calculator.update.powerBarDynamicText('none');

    }

    if(efi1 === efi2 && showText) {

        calculator.update.powerBarDynamicText('middle');

    }

    if((efi1 / efi2) > 1){
        var myText = (val1 >= 0.99) ? '100+' : (efi1 / efi2).toFixed(2);
        if(showText) {
            calculator.update.powerBarDynamicText('left');
        }
    } else {
        myText = 1;
    }

    if((efi1 / efi2) < 1){
        var myText2 = (val2 >= 0.99) ? '100+' : (efi2 / efi1).toFixed(2);
        if(showText) {
            calculator.update.powerBarDynamicText('right');
        }
    } else {
        myText2 = 1;
    }


    val1 = logistic2(val1, 5);
    val2 = 1 - val1;

    var gapSize = 0.06;
    val1 = val1 - gapSize/2;
    val2 = val2 - gapSize/2;

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
            // color: 'rgb(35,79,30)',
            color: 'rgb(60, 60, 60)',
            line: {
                color: 'black',
                width: 0,
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
            color: 'rgb(210, 210, 210)',
            line: {
                color: 'black',
                width: 0,
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

calculator.update.barLabelX = function(barId, show) {
    var update = {
        'xaxis.showticklabels': show
    };
    Plotly.relayout(barId, update);
}

calculator.update.barGridX = function(barId, show) {
    var update = {
        'xaxis.showgrid': show
        };
    Plotly.relayout(barId, update);
}

calculator.update.barLabelY = function(barId, show) {
    var update = {
        'yaxis.showticklabels': show
    };
    Plotly.relayout(barId, update);
}

calculator.update.barGridY = function(barId, show) {
    var update = {
        'yaxis.showgrid': show
        };
    Plotly.relayout(barId, update);
}



//------calculator methods------//


calculator.update.totalHelpSabo = function() {

    th = h1 + h2;
    ts = s1 + s2;
    toh = oh1 + oh2;
    tos = os1 + os2;

    // update total help sabo graphics
    calculator.update.totalHelpBar(th, toh);
    calculator.update.totalSaboBar(ts, tos);

    // leader aura color
    var leaderIconBorderColor = icon.tool.logisticColor(ts, th, 255, 132);
    var libcRGB = icon.tool.set.RGBforLeaders(leaderIconBorderColor);
    $('.imgwrapwrapwrap31').css({'background-color':libcRGB, 'border-color':libcRGB});

    leaderIconBorderColor = icon.tool.logisticColor(tos, toh, 255, 132);
    libcRGB = icon.tool.set.RGBforLeaders(leaderIconBorderColor);
    $('.imgwrapwrapwrap32').css({'background-color':libcRGB, 'border-color':libcRGB});

    // follower arrow color
    var followerArrowColor = icon.tool.arrowColor(h1, s1);
    var facRGB = icon.tool.set.RGBforFollowers(followerArrowColor);
    $('.iaf1').css({'stroke':facRGB});
    $('.arrowTip11').css({'fill':facRGB});

    followerArrowColor = icon.tool.arrowColor(h2, s2);
    facRGB = icon.tool.set.RGBforFollowers(followerArrowColor);
    $('.iaf2').css({'stroke':facRGB});
    $('.arrowTip12').css({'fill':facRGB});

    followerArrowColor = icon.tool.arrowColor(oh1, os1);
    facRGB = icon.tool.set.RGBforFollowers(followerArrowColor);
    $('.iaof1').css({'stroke':facRGB});
    $('.arrowTip21').css({'fill':facRGB});

    followerArrowColor = icon.tool.arrowColor(oh2, os2);
    facRGB = icon.tool.set.RGBforFollowers(followerArrowColor);
    $('.iaof2').css({'stroke':facRGB});
    $('.arrowTip22').css({'fill':facRGB});

    // leader size
    var m1 = icon.tool.updateSize(th, ts);
    icon.set.iconSize('splc1', 85 * m1, 65 * m1);

    var m2 = icon.tool.updateSize(toh, tos)
    icon.set.iconSize('splc2', 85 * m2, 65 * m2)

}

calculator.update.efficiencies = function() {

    calculator.update.totalHelpSabo();

    efi = (1 + th) / (1 + ts);
    oefi = (1 + toh) / (1 + tos);

    calculator.update.efficiencyBar(false);

}

calculator.update.probability = function() {

    efefo = efo * efi;
    oefefo = oefo * oefi;
    pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));

    calculator.update.pie();

}

var lastWinner, winnerRole, loserRole, winnerPrize, showTokenTag, resultTextsTag;
var fwinnerRole, floserRole, fwinnerPrize, floserPrize;
showTokenTag = true;
calculator.update.resultTexts = function(w) {

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

    w = w === undefined ? lastWinner : w;
    lastWinner = w;

    if(resultTextsTag === 'leader') {
        winnerRole = 'Continue as Leader';
        loserRole = 'Became a Follower';
        winnerPrize = 1200;
    }
    if(resultTextsTag === 'follower' || resultTextsTag === 'generic') {
        winnerRole = 'Became the Leader';
        loserRole = 'Continue as Follower';
        winnerPrize = 0;
    }

    var tokenTag1, tokenTag2;
    if(showTokenTag) {
        tokenTag1 = efo === 0 ? ' token' : ' tokens';
        tokenTag2 = oefo === 0 ? ' token' : ' tokens';
        $('.tokenTag').css({'padding-left':'10px', 'font-weight':'400'});
    } else {
        tokenTag1 = tokenTag2 = '';
        $('.tokenTag').css({'display':'none'});
    }

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

    if(resultTextsTag === 'generic') {

        winnerPrize = 'PRIZE';


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
    floserPrize = 'Each receives 0 tokens'

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

    calculator.update.resultTextColors(w);

}

calculator.update.resultTextColors = function(w) {

    if(w === 1) {
        $('.p1, .np1, .f1NetPayoff, .f2NetPayoff').css({'color':'indigo'});
        $('.p2').css({'color':'black'});
        $('.np2, .of1NetPayoff, .of2NetPayoff').css({'color':'darkorange'});
    }

    if(w === 2) {
        $('.p2, .np2, .of1NetPayoff, .of2NetPayoff').css({'color':'indigo'});
        $('.p1').css({'color':'black'});
        $('.np1, .f1NetPayoff, .f2NetPayoff').css({'color':'darkorange'});
    }

    if(oefo > 0 && w === 1) {
        $('.np2').css({'color':'darkorange'});
    }

    if(efo > 0 && w === 2) {
        $('.np1').css({'color':'darkorange'});
    }

    $('.c1, .c2').css({'color':'darkorange'});

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

    if(resultTextsTag === 'follower') {

        $('.p1, .p2').css({'color':'black'});

        if(efo === 0) {
            $('.np1').css({'color':'black'});
        }
        if(efo > 0) {
            $('.np1').css({'color':'darkorange'});
        }
        if(oefo === 0) {
            $('.np2').css({'color':'black'});
        }
        if(oefo > 0) {
            $('.np2').css({'color':'darkorange'});
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


}

calculator.update.playerTitles = function(tag) {

    var p1Text = document.getElementById('player1');
    var p2Text = document.getElementById('player2');

    if(tag === 'LEADER') {

        p1Text.innerHTML = tag + ' A';
        p2Text.innerHTML = tag + ' B';

        playerLabels = [(tag + ' B'), (tag + ' A')];

    } else if(tag === 'FOLLOWER') {

        p1Text.innerHTML = tag + ' A1';
        p2Text.innerHTML = tag + ' A2';

        playerLabels = [(tag + ' A2'), (tag + ' A1')];

    } else {

        p1Text.innerHTML = tag + ' 1';
        p2Text.innerHTML = tag + ' 2';

        playerLabels = [(tag + ' 2'), (tag + ' 1')];

    }

}

calculator.update.contestName = function(name) {

    var contestName = document.getElementById('contestName');
    contestName.innerHTML = name;

}

calculator.update.contestNameOG = function(name, show) {

    if(show) {
        var contestName = document.getElementById('contestNameOG');
        contestName.innerHTML = name;
    }


}


//-----sliders-----//

// Effort Section

//Player 1
calculator.slider.l1= document.getElementById('lSlider1');
calculator.slider.l1.oninput = function() {

    calculator.wheel.hide();

    efo = parseFloat(calculator.slider.l1.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.update.effortBar(efo, 'barl1', ourSide, !showAxis);
    calculator.update.resultTexts();

    calculator.update.barLabelX('barl1', true);

    calculator.update.probability();

    wiggle.activeWiggles[0] = false;

}

//Player 2
calculator.slider.l2 = document.getElementById('olSlider1');
calculator.slider.l2.oninput = function() {

    calculator.wheel.hide();

    oefo = parseFloat(calculator.slider.l2.value);

    var ourSide, showAxis;
    ourSide = true;
    showAxis = true;

    calculator.update.effortBar(oefo, 'barl2', !ourSide, !showAxis);
    calculator.update.resultTexts();

    calculator.update.probability();

    calculator.update.barLabelX('barl2', true);

    wiggle.activeWiggles[1] = false;

}


// Help Sabotage Section

// LEFT SIDE

// Follower 1
calculator.slider.f1= document.getElementById('vSlider1');
calculator.slider.f1.oninput = function() {

    calculator.update.barLabelY('barf1', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.f1.value);

    s1 = hsValue > 0 ? 0 : -hsValue;
    h1 = hsValue > 0 ? hsValue : 0;

    calculator.update.efficiencies();
    calculator.update.probability();

    calculator.update.helpSaboBar(hsValue, 'barf1', !theirSide, showAxis);
    calculator.update.resultTexts();

    wiggle.activeWiggles[2] = false;

}

// Follower 2
calculator.slider.f2= document.getElementById('vSlider2');
calculator.slider.f2.oninput = function() {

    calculator.update.barLabelY('barf2', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.f2.value);

    s2 = hsValue > 0 ? 0 : -hsValue;
    h2 = hsValue > 0 ? hsValue : 0;

    calculator.update.efficiencies();
    calculator.update.probability();

    calculator.update.helpSaboBar(hsValue, 'barf2', !theirSide, showAxis);
    calculator.update.resultTexts();

    wiggle.activeWiggles[3] = false;

}

// RIGHT SIDE

// Follower 1
calculator.slider.of1= document.getElementById('ovSlider1');
calculator.slider.of1.oninput = function() {

    calculator.update.barLabelY('obarf1', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.of1.value);

    os1 = hsValue > 0 ? 0 : -hsValue;
    oh1 = hsValue > 0 ? hsValue : 0;

    calculator.update.efficiencies();
    calculator.update.probability();

    calculator.update.helpSaboBar(hsValue, 'obarf1', theirSide, showAxis);
    calculator.update.resultTexts();

    wiggle.activeWiggles[4] = false;

}

// Follower 2
calculator.slider.of2= document.getElementById('ovSlider2');
calculator.slider.of2.oninput = function() {

    calculator.update.barLabelY('obarf2', true);
    calculator.wheel.hide();

    var hsValue, theirSide, showAxis;
    theirSide = true;
    showAxis = true;

    hsValue = parseFloat(calculator.slider.of2.value);

    os2 = hsValue > 0 ? 0 : -hsValue;
    oh2 = hsValue > 0 ? hsValue : 0;

    calculator.update.efficiencies();
    calculator.update.probability();

    calculator.update.helpSaboBar(hsValue, 'obarf2', theirSide, showAxis);
    calculator.update.resultTexts();

    wiggle.activeWiggles[5] = false;

}

//-------------vibrating locks-----------//

vibrate.sliderLocked = Array(6);

calculator.display.lockedSliders = function(array) {

    vibrate.sliderLocked = array;

    var l1, l2, f1, f2, of1, of2;
    l1 = array[0] ? '2' : '-1';
    l2 = array[1] ? '2' : '-1';
    f1 = array[2] ? '2' : '-1';
    f2 = array[3] ? '2' : '-1';
    of1 = array[4] ? '2' : '-1';
    of2 = array[5] ? '2' : '-1';

    $('.lockedCover_l1').css({'z-index' : l1});
    $('.lockedCover_l2').css({'z-index' : l2});
    $('.lockedCover_f1').css({'z-index' : f1});
    $('.lockedCover_f2').css({'z-index' : f2});
    $('.lockedCover_of1').css({'z-index' : of1});
    $('.lockedCover_of2').css({'z-index' : of2});

}



vibrate.l1Switch = true;
vibrate.l1 = function(state) {

    if(vibrate.l1Switch) {

        $('.l1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


        if(state === 1) {

            $('.l1vibrate').css({'margin-left':'10px'});
            setTimeout(()=>vibrate.l1(2),100);

        }

        if(state === 2) {

            $('.l1vibrate').css({'margin-left':'0px'});
            setTimeout(()=>vibrate.l1(1),100);

        }

    } else {

        vibrate.l1Switch = false;
        $('.l1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

    }

}

vibrate.l2Switch = true;
vibrate.l2 = function(state) {

    if(vibrate.l2Switch) {

        $('.l2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'4px'})


        if(state === 1) {

            $('.l2vibrate').css({'margin-left':'10px'});
            setTimeout(()=>vibrate.l2(2),100);

        }

        if(state === 2) {

            $('.l2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>vibrate.l2(1),100);

        }

    } else {

        vibrate.l2Switch = false;
        $('.l2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'341px'})

    }

}

vibrate.f1Switch = true;
vibrate.f1 = function(state) {

    if(vibrate.f1Switch) {

        $('.f1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


        if(state === 1) {

            $('.f1vibrate').css({'margin-left':'10px'});
            setTimeout(()=>vibrate.f1(2),100);

        }

        if(state === 2) {

            $('.f1vibrate').css({'margin-left':'0px'});
            setTimeout(()=>vibrate.f1(1),100);

        }

    } else {

        vibrate.f1Switch = false;
        $('.f1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

    }

}

vibrate.f2Switch = true;
vibrate.f2 = function(state) {

    if(vibrate.f2Switch) {

        $('.f2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


        if(state === 1) {

            $('.f2vibrate').css({'margin-left':'10px'});
            setTimeout(()=>vibrate.f2(2),100);

        }

        if(state === 2) {

            $('.f2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>vibrate.f2(1),100);

        }

    } else {

        vibrate.f2Switch = false;
        $('.f2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

    }

}

vibrate.of1Switch = true;
vibrate.of1 = function(state) {

    if(vibrate.of1Switch) {

        $('.of1vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


        if(state === 1) {

            $('.of1vibrate').css({'margin-left':'10px'});
            setTimeout(()=>vibrate.of1(2),100);

        }

        if(state === 2) {

            $('.of1vibrate').css({'margin-left':'0px'});
            setTimeout(()=>vibrate.of1(1),100);

        }

    } else {

        vibrate.of1Switch = false;
        $('.of1vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

    }

}

vibrate.of2Switch = true;
vibrate.of2 = function(state) {

    if(vibrate.of2Switch) {

        $('.of2vibrate').css({'height':'80px', 'width':'80px', 'opacity':'0.7', 'margin-right':'-19px', 'margin-top':'78px'})


        if(state === 1) {

            $('.of2vibrate').css({'margin-left':'10px'});
            setTimeout(()=>vibrate.of2(2),100);

        }

        if(state === 2) {

            $('.of2vibrate').css({'margin-left':'0px'});
            setTimeout(()=>vibrate.of2(1),100);

        }

    } else {

        vibrate.of2Switch = false;
        $('.of2vibrate').css({'height':'20px', 'width':'20px', 'margin-left':'0px', 'opacity':'1', 'margin-right':'61px', 'margin-top':'38px'})

    }

}

//------wiggling arrows------//

wiggle.activeWiggles = Array(6);

wiggle.activeWiggles[0] = true;
wiggle.l1= function(state) {

    if(wiggle.activeWiggles[0]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_l1').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>wiggle.l1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_l1').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>wiggle.l1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_l1').css({'opacity':'0'});

    }

}

wiggle.activeWiggles[1] = true;
wiggle.l2= function(state) {

    if(wiggle.activeWiggles[1]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_l2').css({'margin-left':'28px', 'margin-top':'-28px', 'opacity':'1'});
            setTimeout(()=>wiggle.l2(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_l2').css({'margin-left':'48px', 'margin-top':'-8px'});
            setTimeout(()=>wiggle.l2(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_l2').css({'opacity':'0'});

    }

}

wiggle.activeWiggles[2] = true;
wiggle.f1= function(state) {

    if(wiggle.activeWiggles[2]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_f1').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>wiggle.f1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_f1').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>wiggle.f1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_f1').css({'opacity':'0'});

    }

}

wiggle.activeWiggles[3] = true;
wiggle.f2 = function(state) {

    if(wiggle.activeWiggles[3]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_f2').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>wiggle.f2(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_f2').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>wiggle.f2(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_f2').css({'opacity':'0'});

    }

}

wiggle.activeWiggles[4] = true;
wiggle.of1 = function(state) {

    if(wiggle.activeWiggles[4]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_of1').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>wiggle.of1(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_of1').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>wiggle.of1(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_of1').css({'opacity':'0'});

    }

}

wiggle.activeWiggles[5] = true;
wiggle.of2 = function(state) {

    if(wiggle.activeWiggles[5]) {

        if(state === 1) {

            $('.sliderArrowImageWrap_of2').css({'margin-left':'-20px', 'margin-top':'-140px', 'opacity':'1'});
            setTimeout(()=>wiggle.of2(0), 750);

        }

        if(state === 0) {

            $('.sliderArrowImageWrap_of2').css({'margin-left':'-1px', 'margin-top':'-107px'});
            setTimeout(()=>wiggle.of2(1), 750);

        }

    } else {

        $('.sliderArrowImageWrap_of2').css({'opacity':'0'});

    }

}

// slider minor hover effects

$('#lSlider1').hover(
    function() {
        setTimeout(()=>calculator.update.barLabelX('barl1', true), 150);
        $('.sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
        },
    function() {
        setTimeout(()=>calculator.update.barLabelX('barl1', false), 400);
        calculator.update.barGridX('barl1', false);
        $('.sliderQuestion_l1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(-90deg)'});
    }
);

$('.bswLeft').hover(
    function() {
        if(vibrate.sliderLocked[0]) {
            vibrate.l1Switch = true;
            vibrate.l1(1);
        }
    },
    function() {
        vibrate.l1Switch = false;
    }
);

$('#olSlider1').hover(
    function() {
        setTimeout(()=>calculator.update.barLabelX('barl2', true), 150);
        $('.sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(1530deg)'});
    },
    function() {
        setTimeout(()=>calculator.update.barLabelX('barl2', false), 400);
        calculator.update.barGridX('barl2', false);
        $('.sliderQuestion_l2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(-90deg)'});
    }
);

$('.bswRight').hover(
    function() {
        if(vibrate.sliderLocked[1]) {
            vibrate.l2Switch = true;
            vibrate.l2(1);
        }
    },
    function() {
        vibrate.l2Switch = false;
    }
);

$('#vSlider1').hover(
    function() {
        setTimeout(()=>calculator.update.barLabelY('barf1', true), 150);
        calculator.display.activeFollowerIcon('spf1L11', true)
        // $('.sliderQuestion_f1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
        },
    function() {
        setTimeout(()=>calculator.update.barLabelY('barf1', false), 400);
        calculator.display.activeFollowerIcon('spf1L11', false)
        calculator.update.barGridY('barf1', false);
        // $('.sliderQuestion_f1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(-90deg)'});
    }
);

$('.lbf1').hover(
    function() {
        if(vibrate.sliderLocked[2]) {
            vibrate.f1Switch = true;
            vibrate.f1(1);
        }
    },
    function() {
        vibrate.f1Switch = false;
    }
);

$('#vSlider2').hover(
    function() {
        setTimeout(()=>calculator.update.barLabelY('barf2', true), 150);
        calculator.display.activeFollowerIcon('spf1L12', true);
        $('.sliderQuestion_f2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
    },
    function() {
        setTimeout(()=>calculator.update.barLabelY('barf2', false), 400);
        calculator.update.barGridY('barf2', false);
        calculator.display.activeFollowerIcon('spf1L12', false);
        $('.sliderQuestion_f2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(-90deg)'});
    }
);

$('.lbf2').hover(
    function() {
        if(vibrate.sliderLocked[3]) {
            vibrate.f2Switch = true;
            vibrate.f2(1);
        }
    },
    function() {
        vibrate.f2Switch = false;
    }
);

$('#ovSlider1').hover(
    function() {
        setTimeout(()=>calculator.update.barLabelY('obarf1', true), 150);
        calculator.display.activeFollowerIcon('spf1L21', true);
        $('.sliderQuestion_of1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
        vibrate.of1Switch = true;
        vibrate.of1(1);
        },
    function() {
        setTimeout(()=>calculator.update.barLabelY('obarf1', false), 400);
        calculator.update.barGridY('obarf1', false);
        calculator.display.activeFollowerIcon('spf1L21', false)
        $('.sliderQuestion_of1').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(-90deg)'});
        vibrate.of1Switch = false;
    }
);

$('.rbf1').hover(
    function() {
        if(vibrate.sliderLocked[4]) {
            vibrate.of1Switch = true;
            vibrate.of1(1);
        }
    },
    function() {
        vibrate.of1Switch = false;
    }
);

$('#ovSlider2').hover(
    function() {
        setTimeout(()=>calculator.update.barLabelY('obarf2', true), 150);
        calculator.display.activeFollowerIcon('spf1L22', true);
        $('.sliderQuestion_of2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)', 'transform':'rotateY(1530deg)'});
    },
    function() {
        setTimeout(()=>calculator.update.barLabelY('obarf2', false), 400);
        calculator.update.barGridY('obarf2', false);
        calculator.display.activeFollowerIcon('spf1L22', false);
        $('.sliderQuestion_of2').css({'transition':'all 5s cubic-bezier(0.02, 0.96, 0.63, 0.88)',  'transform':'rotateY(-90deg)'});
    }
);

$('.rbf2').hover(
    function() {
        if(vibrate.sliderLocked[5]) {
            vibrate.of2Switch = true;
            vibrate.of2(1);
        }
    },
    function() {
        vibrate.of2Switch = false;
    }
);

//-----wheel methods------//


calculator.wheel.hide = function() {

    $('.pw').css({'opacity':'1', 'zIndex':'1'});
    $('.mywheel').css({'opacity':'0', 'zIndex':'0'});

}

calculator.wheel.spin = function() {

    $('.payoffWrap, .fResults').css({'opacity':'0'});
    $('.payoffWrap').css({'margin-top':'-152px'});
    $('.pw').css({'opacity':'0', 'zIndex':'-1'});
    $('.mywheel').css({'opacity':'1', 'zIndex':'0'});
    $('.fNetPayoffText').css({'opacity':'0'});
    $('.pWrap').css({'margin-top':'-75px'});


    calculator.wheel.create(pwin);
    calculator.wheel.myWheelObj.stopAnimation(false);
    calculator.wheel.myWheelObj.rotationAngle = 0;
    var winner = (pwin > Math.random()) ? 1 : 2;
    var stopAt = calculator.wheel.myWheelObj.getRandomForSegment(winner);
    calculator.wheel.myWheelObj.animation.stopAngle = stopAt;
    calculator.wheel.myWheelObj.startAnimation();

    setTimeout(()=>calculator.update.resultTexts(winner), 1000);
    setTimeout(()=>calculator.wheel.showResults(winner), calculator.wheel.spinDuration*1000);

}

calculator.wheel.showResults = function(w) {

        $('.payoffWrap, .fResults').css({'opacity':'1'});
        $('.pWrap').css({'margin-top':'2px'});
        $('.fNetPayoffText').css({'opacity':'1'});

        calculator.update.payoffHeights(calculator.display.displayed)

        if(w === 1) {
            $('.resultLeft, .leftSideResult').css({'background-color':'indigo'});
            $('.resultRight, .rightSideResult').css({'background-color':'darkorange'});
        } else {
            $('.resultLeft,.lefttSideResult').css({'background-color':'darkorange'});
            $('.resultRight, .rightSideResult').css({'background-color':'indigo'});
        }

}


//------display methods-----//


calculator.display.displayed = Array(4);
calculator.display.displayed = [false, false, false];

calculator.update.payoffHeights = function(array) {

    var sum = array.reduce((a,b) => a + b, 0)

    if(sum === 0) {

        $('.payoffWrap').css({'margin-top':'-109px'});
        $('.c1, .c2').css({'opacity':'1'});
        $('.bottomText').css({'display':'none'});

    }

    if(sum === 1 || sum === 2) {

        $('.payoffWrap').css({'margin-top':'-38px'});
        $('.c1, .c2').css({'opacity':'1'});
        $('.bottomText').css({'display':'none'});

    }

    if(sum === 3) {

        $('.payoffWrap').css({'margin-top':'-38px'});
        $('.c1, .c2').css({'opacity':'1'});
        $('.bottomText').css({'display':'flex', 'margin-bottom':'-25px'});

    }

    if(sum === 4) {

        $('.payoffWrap').css({'margin-top':'-38px'});
        $('.c1, .c2').css({'opacity':'1'});
        $('.bottomText').css({'display':'flex', 'margin-bottom':'0px'});

    }


}

calculator.display.spinButton = function(show) {

    var opacity = show ? '1' : '0';
    var cursor = show ? 'pointer' : 'default';
    $('.spinImage').css({'opacity': opacity, 'cursor' : cursor});
    spinButtonEnabled = show;

}


calculator.display.investment = function(show) {

    var opacity = show ? '1' : '0';
    $('.cLeft, .cRight').css({'opacity': opacity});
    $('.pRight, .pLeft').css({'display':'none'});
    $('.topText').css({'justify-content':'center'});


    calculator.display.displayed[0] = show;
    calculator.update.payoffHeights(calculator.display.displayed);

    showTokenTag = true;

}

calculator.display.prize = function(show) {

    var opacity = show ? '1' : '0';
    $('.pLeft, .pRight').css({'opacity': opacity});

    calculator.display.displayed[1] = show;
    calculator.update.payoffHeights(calculator.display.displayed);

    if(show) {

        $('.pRight, .pLeft').css({'display':'flex'});
        $('.topText').css({'justify-content':'space-between'});
        showTokenTag = false;

    }

}

calculator.display.netPayoff = function(show) {

    var opacity = show ? '1' : '0';
    $('.npLeft, .npRight').css({'opacity': opacity});
    calculator.display.displayed[2] = show;
    calculator.update.payoffHeights(calculator.display.displayed);

}

calculator.display.role = function(show) {

    var opacity = show ? '1' : '0';
    $('.rLeft, .rRight').css({'opacity': opacity});
    calculator.display.displayed[3] = show;
        calculator.update.payoffHeights(calculator.display.displayed);

}


calculator.display.helpSaboSection = function(show) {

    var opacity = show ? '1' : '0';
    var height = show ? '375px' : '0px';
    var zindex = show ? '0' : '-1';

    $('.hsWrap').css({'opacity': opacity, 'height' : height, 'z-index' : zindex});

}

calculator.display.helpSaboBars = function(show) {

    var zindex = show ? '0' : '-1';
    var opacity = show ? '1' : '0';
    $('.sliderBarWrap').css({'opacity':opacity, 'z-index':zindex});


}

calculator.display.contestSection = function(show) {

    var opacity = show ? '1' : '0';
    var height = show ? '188px' : '0px';
    var zindex = show ? '0' : '-1';
    var display = show ? 'flex' : 'none';

    $('.contestSection').css({'opacity': opacity, 'height' : height, 'z-index' : zindex});
    $('.payoffWrap').css({'display': display});

}

calculator.display.powerBar = function(show) {

    var opacity = show ? '1' : '0';
    $('.pWrap').css({'opacity' : opacity});


}

calculator.display.powerBarText = function(tag) {

    if(tag === 'top') {
        $('.pTitleTop').css({'opacity' : '1'});
        $('.pTitleBottom').css({'opacity' : '0'});
        $('.powerRatio').css({'margin-top':'0px', 'margin-bottom':'-10px'});
        calculator.display.powerBarLegend(false);
    }

    if(tag === 'bottom') {
        $('.pTitleTop').css({'opacity' : '0'});
        $('.pTitleBottom').css({'opacity' : '1'});
        calculator.display.powerBarLegend(true);
    }

    if(tag === 'none') {
        $('.pTitleTop').css({'opacity' : '0'});
        $('.pTitleBottom').css({'opacity' : '0'});
        $('.powerRatio').css({'margin-top':'0px', 'margin-bottom':'-4px'});
        calculator.display.powerBarLegend(false);
    }

}

calculator.display.powerBarLegend = function(show) {

    var opacity = show ? '1' : '0';

    $('.legendwrapwrap').css({'opacity' : opacity});

}

calculator.display.totalHelpSabo = function(show) {

    if(!show) {

        $('.OGCIcon').css({'transition':'0.7s', 'margin-top' : '-42px'});
        $('.followersTotalHS').css({'opacity':'0'});

    } else {

        $('.OGCIcon').css({'margin-top' : '0px'});
        $('.followersTotalHS').css({'opacity':'1'});

    }

}

calculator.display.fightIcon = function(show) {

    var display1 = show ? 'flex' : 'none';
    var display2 = !show ? 'flex' : 'none';

    $('.imgwrapfight').css({'display' : display1});
    $('.verticalSeparator').css({'display' : display2});

}

calculator.display.helpSaboIcons = function(show) {

    var opacity = show ? '1' : '0';
    $('.wrapLeft, .wrapRight, .arrowIconBoxLeft, .arrowIconBoxRight').css({'opacity':opacity});

}

calculator.display.activeFollowerIcon = function(tag, show) {

    var opacity = show ? '1' : '0';
    var myString = '.' + tag;
    $(myString).css({'opacity' : opacity});

}

calculator.display.grayOGC = function() {

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

calculator.display.questionMarks = function(show) {

    var opt = show ? '1' : '0';

    $('.sliderQuestion_l1, .sliderQuestion_l2, .sliderQuestion_f2, .sliderQuestion_of1, .sliderQuestion_of2').css({'opacity':opt});

}

calculator.display.wiggleArrow = function(array) {

    wiggle.activeWiggles = array;

    wiggle.l1(1);
    wiggle.l2(1);
    wiggle.f1(1);
    wiggle.f2(1);
    wiggle.of1(1);
    wiggle.of2(1);

}


//----------set methods for initiation------------//


calculator.set.helpSabo = function(valueArray) {

    s1 = valueArray[0];
    s2 = valueArray[1];
    h1 = valueArray[2];
    h2 = valueArray[3];
    os1 = valueArray[4];
    os2 = valueArray[5];
    oh1 = valueArray[6];
    oh2 = valueArray[7];

    calculator.update.efficiencies();
    calculator.update.probability();

}

calculator.set.efforts = function(valueArray) {

    efo = valueArray[0];
    oefo = valueArray[1];

    calculator.update.probability();

}

calculator.set.sliders = function() {

    var ourSide, theirSide, showAxis;
    ourSide = true;
    showAxis = true;
    theirSide = true;


    var f1, f2, of1, of2;

    $('#lSlider1').prop('value', efo);
    $('#lSlider1').change();

    $('#olSlider1').prop('value', oefo);
    $('#olSlider1').change();

    calculator.update.effortBar(oefo, 'barl1', ourSide, !showAxis);
    calculator.update.effortBar(oefo, 'barl2', !ourSide, !showAxis);


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

    calculator.update.helpSaboBar(f1, 'barf1', !theirSide, !showAxis);
    calculator.update.helpSaboBar(f2, 'barf2', !theirSide, !showAxis);
    calculator.update.helpSaboBar(of1, 'obarf1', theirSide, !showAxis);
    calculator.update.helpSaboBar(of2, 'obarf2', theirSide, !showAxis);

}

calculator.set.Xaxis = function() {

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

}


//-----Icon methods------//

//---- STAGE 1 RELATED ICON METHODS ----//

icon.tool.shuffle = function(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;

};

icon.tool.matchIcon = function(array) {
    for(var i = 0; i < array.length; i++) {
        var myID = 'a' + (i + 1);
        var temp = document.getElementById(myID);
        temp.innerHTML = array[i];
    }
}

icon.tool.set.myRole = function(array) {

    $('.p0, .a10, .a11, .a20, .a21, .a30, .a31, .a40, .a41, .a50, .a51, .a60, .a61').css({'z-index':'0'});

    for(var i = 0; i < array.length; i++) {

        var myRole = array[i] ? 0 : 1;
        var myClass = '.a' + (i + 1) + myRole;
        var myRoleClass = '.c' + (i + 1);
        $(myClass).css({'z-index':'1'});

        var myRole2 = array[i] ? '1' : '0';
        $(myRoleClass).css({'opacity': myRole2});

    }
}

icon.stage1.generateSortedArray = function() {

    icon.stage1.sortedArray = icon.tool.shuffle([1,2,3,4,5,6]);

}

icon.set.stage1 = function() {

    var mySort, myRole1, myRole2, roles;

    icon.stage1.generateSortedArray();

    mySort = icon.stage1.sortedArray;
    myRole1 = icon.tool.shuffle([true, false, false]);
    myRole2 = icon.tool.shuffle([false, true, false]);
    roles = myRole1.concat(myRole2);

    icon.tool.matchIcon(mySort);
    icon.tool.set.myRole(roles);

    $('.imgwrap2').css({'opacity':'0'});
    $('.playerBracketImage, .playerRandomSortImage, .wrap1, .imgwrap1').css({'opacity':'1'});
    $('.replayButton').css({'opacity':'0', 'z-index':'-1'});
    $('.hidder').css({'z-index':'2'});

}

icon.stage1.animateSort = function() {

    icon.stage1.showHide(0);
    setTimeout(()=>icon.stage1.showHide(1), 500);
    setTimeout(()=>icon.stage1.showHide(2), 1000);
    setTimeout(()=>icon.stage1.showHide(3), 1500);
    setTimeout(()=>icon.stage1.showHide(4), 2000);
    setTimeout(()=>icon.stage1.showHide(5), 2500);
    setTimeout(()=>icon.stage1.hideShowButtons(), 2500);


}

icon.stage1.showHide = function(index) {

    var myString1, myString2, myNewIndex;

    var newArray = icon.stage1.sortedArray;

    myString1 = '.initialIwIndex' + (index + 1);
    $(myString1).css({'opacity':'0'});

    myNewIndex = newArray.indexOf(index + 1);
    myString2 = '.iwIndex' + (myNewIndex + 1);
    $(myString2).css({'opacity':'1'})

}

icon.stage1.hideShowButtons = function() {
    $('.playerBracketImage, .playerRandomSortImage, .wrap1').css({'opacity':'0'});
    $('.replayButton').css({'opacity':'1', 'z-index':'2'});
    $('.hidder').css({'z-index':'-1'});
}

icon.stage1.button1 = document.getElementById('stage1RandomButton');
icon.stage1.button1.onclick = function() {

    icon.stage1.animateSort();
}
icon.stage1.button2 = document.getElementById('replayButton');
icon.stage1.button2.onclick = function() {

    icon.set.stage1();

}

icon.display.stage1 = function(show) {

    var display = show ? 'flex' : 'none';

    $('.s1Icon').css({'display' : display});

}


//----- HELP SABOTAGE DEPENDENT LEADER SIZE AND COLOR METHODS -------//

icon.set.iconSize = function(Id, h, w) {

    var myClass, myHeight, myWidth;

    myClass = '.' + Id;
    myHeight = h + 'px';
    myWidth = w + 'px';

    $(myClass).css({'height' : myHeight, 'width' : myWidth});

}

icon.tool.updateSize = function(h, s) {

    var hRatio = h / 80;
    var sRatio = s / 80;
    var k = 0.1//0.2

    var m = (1 + Math.pow(hRatio, k)) / (1 + Math.pow(sRatio, k));

    return m;

}

icon.tool.logisticColor = function(help, sabo, max, avg) {

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

icon.tool.arrowColor = function(help, sabo) {

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

icon.tool.set.RGBforLeaders = function(val){

    return ('rgb(' + val[0] +',' + val[1] + ', ' + val[2] +', 0.2)');

}

icon.tool.set.RGBforFollowers = function(val){

    return ('rgb(' + val[0] +',' + val[1] +', ' + val[2] + ',' + val[3] + ')');

}

//-------- MAP SECTION ------ MAP SECTION ------ MAP SECTION ---------//

var map = {

    update: {},
    icon: {},

};

map.icon.full = function() {

    $('.mapsexplain').css({'opacity':'1'});
    $('.mapx3aw2, .mapx3al2, .mapboldarrow').css({'opacity':'1'});
    $('.og1leaderlime1, .og1leaderlime2').css({'border-color':'gray'});
    $('.mapOG1, .mapOG2, .IG').css({'border-color': 'black', 'opacity':'1'});
    $('.mapw34').css({'border-color':'black'});

    $('.x1a2, .unknownresult, .modifications3, .mapwa5, .winnerleadertalk').css({'opacity':'0'});
    // $('.mapl34, .la4, .wa4').css({'opacity':'0'});

    // recovery
    $('.mapx3wl, .mapxwl, .IG, .x456, .mapOG2').css({'opacity':'1'});
    $('.mapl34, .la4, .mapacceptedBox, .mapigtitle, .x4da5').css({'opacity':'1'});
    $('.mapw34').css({'opacity':'1'});
    $('.mapfightIconLime2, .mapdiscardedX').css({'opacity':'0'});
    $('.followersbusyA, .followersbusyB, .leaderbusyA, .leaderbusyB, .leaderbusyF').css({'opacity':'1'});

}

map.icon.none = function() {

    $('.mapsexplain').css({'opacity':'1'});
    $('.x1a2, .la4, .wa5').css({'opacity':'0'});
    $('.unknownresult, .modifications3').css({'opacity':'0'});
    $('.mapspf1L1, .mapspf1L2, .arrowdashedlime1, .arrowdashedlime2').css({'opacity':'0'})
    $('.mapfightIconLime1,.mapfightIconLime2').css({'opacity':'0'});
    $('.mapl34, .mapw34, .mapx44, .x3aw2, .x3al2').css({'opacity':'0'});
    $('.mapOG2, .mapOG1, .x456').css({'opacity':'0'});

}

map.icon.state = function(state) {

    map.icon.full();

    if(state === 'og1') {

        $('.mapx3wl, .IG, .x456, .mapOG2').css({'opacity':'0'});
        $('.mapOG1').css({'border-color':'lime'});

    }

    if(state === 's2') {

        $('.mapx3wl, .IG, .x456, .mapOG2').css({'opacity':'0'});
        $('.mapspf1L1, .arrowdashedlime1').css({'opacity':'1'});

    }

    if(state === 's3') {

        $('.mapspf1L1, .arrowdashedlime1').css({'opacity':'0'});
        $('.mapx3wl, .IG, .x456, .mapOG2').css({'opacity':'0'});
        $('.og1leaderlime1').css({'border-color':'lime'});
        $('.mapfightIconLime1').css({'opacity':'1'});

    }

    if(state === 's3ands4') {

        $('.mapspf1L1, .arrowdashedlime1').css({'opacity':'0'});
        $('.mapx3wl, .x456, .mapOG2, .mapl34, .mapw34, .la4, .wa4, .mapwa5').css({'opacity':'0'});
        $('.og1leaderlime1').css({'border-color':'lime'});
        $('.mapfightIconLime1, .mapfightIconLimeFollowers').css({'opacity':'1'});
        $('.mapacceptedBox').css({'border-color':'lime'});
        $('.followersbusyA, .followersbusyB').css({'opacity':'0.4'});


    }

    if(state === 'leaderwon') {

        $('.mapfightIconLime1, .mapfightIconLimeFollowers, .wa4, .mapdiscarded').css({'opacity':'0'});
        $('.mapx3al2, .mapl34, .la4, .mapwa5, .mapacceptedBox, .mapigtitle, .x456, .mapOG2').css({'opacity':'0'});
        $('.mapw34').css({'border-color':'lime'});
        $('.followersbusyB, .leaderbusyB, .leaderbusyF').css({'opacity':'0.4'});
        $('.discardedIGcontest, .mapdiscarded, .mapdiscardedB, .mapdiscardedX').css({'opacity':'1'});
        $('.mapacceptedBox').css({'border-color':'black'});

    }

    if(state === 'leaderwontoog2') {

        $('.mapfightIconLime1, .mapfightIconLimeFollowers, .wa4, .mapdiscarded').css({'opacity':'0'});
        $('.mapx3al2, .mapl34, .la4, .mapwa5, .mapacceptedBox, .mapigtitle, .x456, .mapOG2').css({'opacity':'0'});
        $('.mapw34').css({'border-color':'black'});
        $('.followersbusyB, .leaderbusyB, .leaderbusyF').css({'opacity':'0.4'});
        $('.discardedIGcontest, .mapdiscarded, .mapdiscardedB, .mapdiscardedX, .x4da5').css({'opacity':'1'});
        $('.mapacceptedBox').css({'border-color':'black'});
        $('.mapOG2, .wa4, .x4da5, .x456, .winnerleadertalk').css({'opacity':'1'});
        $('.groupA, .x4a5, .mapfightIcon2').css({'opacity':'0'});
        $('.mapOG2').css({'border-color':'lime'});


    }

    if(state === 'leaderlost') {

        $('.mapx3aw2, .mapw34, .wa4, .mapwa5, .mapacceptedBox, .mapigtitle, .x456, .mapOG2, .discardedIGcontest').css({'opacity':'0'});
        $('.mapl34, .mapacceptedBox').css({'border-color':'lime'});
        $('.la4, .mapacceptedBox').css({'opacity':'1'});
        $('.followersbusyA, .leaderbusyA,.followersbusyB, .leaderbusyB, .leaderbusyF').css({'opacity':'0.4'});

    }

    if(state === 'llog2') {

        $('.mapx3aw2, .mapw34, .wa4, .mapwa5, .mapacceptedBox, .mapigtitle, .x456, .mapOG2, .discardedIGcontest').css({'opacity':'0'});
        $('.mapl34, .mapacceptedBox').css({'border-color':'black'});
        $('.la4, .mapacceptedBox').css({'opacity':'1'});
        $('.followersbusyA, .leaderbusyA,.followersbusyB, .leaderbusyB, .leaderbusyF').css({'opacity':'0.4'});
        $('.mapOG2, .x4da5, .x456, .mapigtitle, .x4a5, .groupA, .lostleadertalk').css({'opacity':'1'});
        $('.mapx3aw2, .w34, .mapw34, .wa4, .mapwa5, .x4da5, .groupB, .winnerleadertalk').css({'opacity':'0'});
        $('.mapOG2').css({'border-color':'lime'});

    }

    if(state === 'og2') {

        $('.discardedIGcontest, .mapdiscarded, .mapdiscardedB, .mapdiscardedX, .x4da5, .groupB, .mapfightIcon2').css({'opacity':'1'});
        $('.mapx3aw2, .mapx3al2, .followersbusyA, .leaderbusyA,.followersbusyB, .leaderbusyB, .leaderbusyF, .mapxwl, .la4, .wa4, .mapacceptedBox, .mapdiscardedB, .x4a5, .x4da5').css({'opacity':'0.4'});
        $('.mapOG2').css({'border-color':'lime'});
        $('.lostleadertalk').css({'opacity':'0'});

    }

    if(state === 's5') {

        $('.discardedIGcontest, .mapdiscarded, .mapdiscardedB, .mapdiscardedX, .x4da5, .groupB, .mapfightIcon2').css({'opacity':'1'});
        $('.mapx3aw2, .mapx3al2, .followersbusyA, .leaderbusyA,.followersbusyB, .leaderbusyB, .leaderbusyF, .mapxwl, .la4, .wa4, .mapacceptedBox, .mapdiscardedB, .x4a5, .x4da5').css({'opacity':'0.4'});
        $('.mapOG2').css({'border-color':'lime'});
        $('.lostleadertalk').css({'opacity':'0'});

        $('.mapspf1L2, .arrowdashedlime2').css({'opacity':'1'});
        $('.lostleadertalk').css({'opacity':'0'});


    }

    if(state === 's6') {

        $('.discardedIGcontest, .mapdiscarded, .mapdiscardedB, .mapdiscardedX, .x4da5, .groupB, .mapfightIcon2').css({'opacity':'1'});
        $('.mapx3aw2, .mapx3al2, .followersbusyA, .leaderbusyA,.followersbusyB, .leaderbusyB, .leaderbusyF, .mapxwl, .la4, .wa4, .mapacceptedBox, .mapdiscardedB, .x4a5, .x4da5').css({'opacity':'0.4'});
        $('.mapOG2').css({'border-color':'lime'});
        $('.lostleadertalk').css({'opacity':'0'});

        $('.mapspf1L2, .arrowdashedlime2').css({'opacity':'0'});
        $('.og1leaderlime2').css({'border-color':'lime'});
        $('.mapfightIconLime2').css({'opacity':'1'});

    }

}

map.icon.full();
// map.icon.none();
// map.icon.state('og1');
// map.icon.state('s2');
// map.icon.state('s3');
// map.icon.state('leaderwon');
// map.icon.state('leaderlost');
// map.icon.state('s4');
// map.icon.state('s4toog2');
// map.icon.state('s3toog2');
// map.icon.state('og2');
// map.icon.state('s5');
// map.icon.state('s6');

map.dashedBox = function(section, show) {

    var color = show ? '#8a8a77' : 'transparent';

    if(section === 'og1') {

        $('.OG1').css({'border-color': color});

    }

    if(section === 'og2') {

        $('.OG2').css({'border-color': color});

    }

    if(section === 'ig') {

        $('.IG').css({'border-color':color});

    }

}

map.clearAll = function() {

    $('.sexplain').css({'opacity':'1'});
    $('.b1, .b2, .b3, .l34, .w34, .x44, .b41, .b42, .b5, .b6, .acceptedBox').css({'opacity':'0', 'border-color':'rgb(68,68,60)'});
    $('.x1a2, .x2a3, .o2a3, .x3al, .x3al2, .x3aw, .x3aw2, .la4, .la42, .la43, .wa5, .wa53, .cwa5, .cwa52, .la5, .la52, .wa6,  .x4a5, .x4a52, .x4a53, .c4a6, .x5a6').css({'opacity':'0'});
    $('.la52text, .cwa5text, .wa6text').css({'opacity':'0'});
    $('.discardx, .unknownresult').css({'opacity':'0'});
    $('.igtext, .acceptedBox, .modifications3').css({'opacity':'1'});
    $('.stageboxtext, .stageboxtextlong').css({'color':'rgb(60, 60, 60)'});
    $('.s3topl, .s6topl, .s2topf, .s5topf').css({'opacity':'0', 'color':'rgb(60, 60, 60)'});

    map.dashedBox('og1', false);
    map.dashedBox('og2', false);
    map.dashedBox('ig', false);

}

map.update = function(state) {

    map.clearAll();

    if(state === 'full') {

        $('.b1, .b2, .b3, .l34, .w34, .x44, .b41, .acceptedBox, .b5, .b6, .OG1, .OG2').css({'opacity':'1'});
        $('.x1a2, .x2a3, .x3al, .x3aw, .la4, .cwa52, .x4a5, .x5a6').css({'opacity':'1'});
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);


        $('.b1').css({'border':'4px inset gray'});
        $('.b3, .b6').css({'border-style':'dashed'});
        $('.s2topf, .s3topl, .s5topf, .s6topl').css({'color':'rgb(60, 60, 60)'});

        $('.s3topl, .s6topl').css({'opacity':'1'});
        $('.s2topf, .s5topf').css({'opacity':'1'});

    }

    if(state === 's1') {

        $('.b1, .b2, .b3, .l34, .w34, .x44, .b41, .acceptedBox, .b5, .b6, .OG1, .OG2').css({'opacity':'0.3'});
        $('.x1a2, .x2a3, .x3al, .x3aw, .la4, .cwa52, .x4a5, .x5a6').css({'opacity':'0.3'});
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);

        $('.b1').css({'border':'4px inset lime', 'opacity':'1'});
        $('.b3, .b6').css({'border-style':'dashed'});
        // $('.s2topf, .s3topl, .s5topf, .s6topl').css({'color':'rgb(60, 60, 60)'});

    }

    if(state === 'og1') {

        $('.b1, .b2, .b3, .l34, .w34, .x44, .b41, .acceptedBox, .b5, .b6, .OG1, .OG2').css({'opacity':'0.3'});
        $('.x1a2, .x2a3, .x3al, .x3aw, .la4, .cwa52, .x4a5, .x5a6').css({'opacity':'0.3'});
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);

        $('.b3, .b6').css({'border-style':'dashed'});
        $('.s2topf, .s3topl').css({'opacity':'1'});

        $('.OG1, .b2, .b3, .x2a3').css({'opacity':'1'});
        $('.OG1').css({'border-color':'lime'});

    }

    if(state === 's2') {

        $('.b1, .b2, .b3, .l34, .w34, .x44, .b41, .acceptedBox, .b5, .b6, .OG1, .OG2').css({'opacity':'0.3'});
        $('.x1a2, .x2a3, .x3al, .x3aw, .la4, .cwa52, .x4a5, .x5a6').css({'opacity':'0.3'});
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);

        $('.b3, .b6').css({'border-style':'dashed'});
        $('.s2topf').css({'opacity':'1'});

        $('.OG1, .b2, .b3, .x2a3').css({'opacity':'1'});
        $('.b2').css({'border-color':'lime'});

    }

    if(state === 's5') {

        $('.b1, .b2, .b3, .l34, .w34, .x44, .b5, .b6, .OG1, .OG2').css({'opacity':'0.3'});
        $('.b1').css({'opacity':'0.1'});
        $('.x1a2, .x2a3, .x3al, .x3aw, .la4, .cwa52, .x4a5, .x5a6').css({'opacity':'0.3'});
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);

        $('.b3, .b6').css({'border-style':'dashed'});

        $('.OG2, .b5, .b6, .x5a6').css({'opacity':'1'});
        $('.b5').css({'border-color':'lime'});

        $('.s5topf').css({'opacity':'1'});

    }

    if(state === 's3') {

        $('.b1, .b2, .b3, .l34, .w34, .x44, .b41, .acceptedBox, .b5, .b6, .OG1, .OG2').css({'opacity':'0.3'});
        $('.x1a2, .x2a3, .x3al, .x3aw, .la4, .cwa52, .x4a5, .x5a6').css({'opacity':'0.3'});
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);

        $('.b3, .b6').css({'border-style':'dashed'});
        // $('.s2topf, .s3topl, .s5topf, .s6topl').css({'color':'rgb(60, 60, 60)'});

        $('.OG1, .b2, .b3, .x2a3').css({'opacity':'1'});
        $('.b3').css({'border-color':'lime'});

        $('.s3topl').css({'opacity':'1'});

    }

    if(state === 's6') {

        $('.b1, .b2, .b3, .l34, .w34, .x44, .b5, .b6, .OG1, .OG2').css({'opacity':'0.3'});
        $('.b1').css({'opacity':'0.1'});
        $('.x1a2, .x2a3, .x3al, .x3aw, .la4, .cwa52, .x4a5, .x5a6').css({'opacity':'0.3'});
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);

        $('.b3, .b6').css({'border-style':'dashed'});
        // $('.s2topf, .s3topl, .s5topf, .s6topl').css({'color':'rgb(60, 60, 60)'});

        $('.OG2, .b5, .b6, .x5a6').css({'opacity':'1'});
        $('.b6').css({'border-color':'lime'});

        $('.s3topl, .s6topl').css({'opacity':'1'});
        // $('.s2topf, .s5topf').css({'opacity':'0'});

    }

    if(state === 'og2') {

        $('.b1, .b2, .b3, .l34, .w34, .x44, .b41, .acceptedBox, .b5, .b6, .OG1, .OG2').css({'opacity':'0.3'});
        $('.x1a2, .x2a3, .x3al, .x3aw, .la4, .cwa52, .x4a5, .x5a6').css({'opacity':'0.3'});
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);

        $('.b3, .b6').css({'border-style':'dashed'});
        $('.s5topf, .s6topl').css({'opacity':'1'});

        $('.OG2, .b5, .b6, .x5a6').css({'opacity':'1'});
        $('.OG2').css({'border-color':'lime'});

    }

    if(state === 's4') {

        $('.l34, .w34').css({'opacity':'0.7'});

        $('.b1, .b2, .b5, .b6, .OG2').css({'opacity':'0.3'});
        $('.x1a2, .x2a3, .cwa52, .x4a5, .x5a6, .cwa52').css({'opacity':'0.2'});
        $('.x3al, .x3aw, .la4').css({'opacity':'0.7'});
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $(' .x4a5').css({'opacity':'0'});

        $('.b3, .b6').css({'border-style':'dashed'});
        $('.s3topl').css({'opacity':'1'});

        $('.b3, .x44, .acceptedBox').css({'opacity':'1', 'border-color':'lime'});
        $('.b1').css({'opacity':'0.1'});

    }

    if(state === 's4?') {

        $('.unknownresult, .l34, .w34').css({'opacity':'0.7'});

        $('.b1, .b2, .b5, .b6, .OG2').css({'opacity':'0.3'});
        $('.x1a2, .x2a3, .cwa52, .x4a5, .x5a6, .cwa52').css({'opacity':'0.3'});
        $('.x3al, .x3aw, .la4').css({'opacity':'0.7'});
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $(' .x4a5').css({'opacity':'0'});

        $('.b3, .b6').css({'border-style':'dashed'});
        $('.s3topl').css({'opacity':'1'});

        $('.b3, .x44, .acceptedBox').css({'opacity':'1', 'border-color':'lime'});
        $('.b1').css({'opacity':'0.1'});

    }

    if(state === 'leaderwon') {

        // opacity of boxes before and after
        $('.b1, .x1a2').css({'opacity':'0.2'});
        $(' .b5, .x5a6, .b6').css({'opacity':'0.7'});

        // og contest 1 coloring arrow and box
        $('.b2').css({'border':'orange 3px solid', 'opacity':'0.7'});
        $('.x2a3').css({'opacity':'0'});
        $('.o2a3').css({'opacity':'1'});
        $('.b3').css({'border':'purple 3px dashed', 'opacity':'0.7'});
        $('.s2topf').css({'opacity':'1', 'color':'orange'});
        $('.s3topl').css({'opacity':'1', 'color':'purple'});

        // circling og1 and og2
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $('.OG2').css({'opacity':'1'});

        // arrow from the circle to the outcome
        $('.x3aw').css({'opacity':'0'});
        $('.x3aw2').css({'opacity':'1'});

        // highlight the outcome
        $('.w34').css({'background-color':'transparent', 'opacity':'1'});

        // show arrows from the outcome stages
        $('.wa6, .cwa5').css({'opacity':'1'});
        $('.s5topf, .s6topl').css({'opacity':'1'});

    }

    if(state === 'leaderwonleader') {

        // opacity of boxes before and after
        $('.b1, .x1a2').css({'opacity':'0.2'});
        $(' .b5, .x5a6, .b6').css({'opacity':'0.7'});

        // og contest 1 coloring arrow and box
        $('.b2').css({'border':'rgb(60, 60, 60) 3px solid', 'opacity':'0.7'});
        $('.s2topf').css({'opacity':'0'});
        $('.x2a3').css({'opacity':'0.7'});
        $('.b3, .b6').css({'border':'purple 3px dashed', 'opacity':'1'});
        $('.s3topl').css({'opacity':'1', 'color':'purple'});

        // circling og1 and og2
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $('.OG2').css({'opacity':'1'});

        // arrow from the circle to the outcome
        $('.x3aw').css({'opacity':'0'});
        $('.x3aw2').css({'opacity':'1'});

        // highlight the outcome
        $('.w34').css({'background-color':'transparent', 'opacity':'1'});

        // show arrows from the outcome stages
        $('.wa6, .wa6text').css({'opacity':'1'});

        $('.s6topl').css({'opacity':'1', 'color' : 'purple'});

    }

    if(state === 'discardFC') {

        // opacity of boxes before and after
        $('.b1, .x1a2').css({'opacity':'0.2'});
        $(' .b5, .x5a6, .b6').css({'opacity':'0.7'});
        $('.s5topf').css({'opacity':'1'});

        // og contest 1 coloring arrow and box
        $('.b2').css({'border':'rgb(60, 60, 60) 3px solid', 'opacity':'0.7'});
        $('.x2a3').css({'opacity':'0.7'});
        $('.b3').css({'border':'rgb(60, 60, 60) 3px dashed', 'opacity':'0.7'});
        $('.s2topf, .s3topl').css({'opacity':'1'});

        // circling og1 and og2
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $('.OG2').css({'opacity':'0'});

        // arrow from the circle to the outcome
        $('.x3al2').css({'opacity':'0.1'});
        $('.x3aw2').css({'opacity':'1'});

        // highlight the outcome
        $('.w34').css({'background-color':'white', 'opacity':'1'});

        // discarded outcome
        $('.b41').css({'border-color':'rgb(60, 60, 60)', 'opacity':'1'});
        $('.modifications3').css({'opacity':'0.2'});
        $('.l34').css({'background-color':'white', 'opacity':'0.2'});
        $('.acceptedBox, .discardx').css({'opacity':'0.8'});
        $('.igtext').css({'opacity':'0.3'});
        $('.x44').css({'opacity':'1'});

        // show arrows from the outcome stages
        $('.la4').css({'opacity':'0.2'});

    }

    if(state === 'leaderwonfollower') {

        // opacity of boxes before and after
        $('.b1, .x1a2').css({'opacity':'0.2'});
        $(' .b5, .x5a6, .b6').css({'opacity':'0.7'});

        // og contest 1 coloring arrow and box
        $('.b2, .b5').css({'border':'orange 3px solid', 'opacity':'1'});
        $('.x2a3').css({'opacity':'0.7'});
        $('.b3').css({'border':'rgb(60, 60, 60) 3px dashed', 'opacity':'0.7'});
        // $('.s3topl').css({'opacity':'0'});
        $('.s2topf').css({'opacity':'1', 'color':'orange'});

        // circling og1 and og2
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $('.OG2').css({'opacity':'1'});

        // arrow from the circle to the outcome
        $('.x3aw').css({'opacity':'0'});
        $('.x3aw2').css({'opacity':'1'});

        // highlight the outcome
        $('.w34').css({'background-color':'transparent', 'opacity':'1'});

        // show arrows from the outcome stages
        $('.cwa5, .cwa5text').css({'opacity':'1'});
        $('.s5topf').css({'opacity':'1', 'color':'orange'});
        // $('.s6topl').css({'opacity':'0'});

    }

    if(state === 'leaderlost') {

        // opacity of boxes before and after
        $('.b1, .x1a2').css({'opacity':'0.2'});
        $(' .b5, .x5a6, .b6').css({'opacity':'0.7'});
        $('.s5topf').css({'opacity':'1'});

        // og contest 1 coloring arrow and box
        $('.b2').css({'border':'orange 3px solid', 'opacity':'0.7'});
        $('.o2a3').css({'opacity':'1'});
        $('.b3').css({'border':'purple 3px dashed', 'opacity':'0.7'});
        $('.s2topf, .s5topf').css({'opacity':'1', 'color':'orange'});
        $('.s3topl, .s6topl').css({'opacity':'1', 'color':'purple'});

        // circling og1 and og2
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $('.OG2').css({'opacity':'1'});

        // arrow from the circle to the outcome
        $('.x3al2').css({'opacity':'1'});
        $('.x44').css({'opacity':'1'});

        // highlight the outcome
        $('.l34').css({'background-color':'transparent', 'opacity':'1'});
        $('.b41').css({'border-color':'orange', 'opacity':'1'});

        // show arrows from the outcome stages
        $('.la52, .la43').css({'opacity':'1'});

    }

    if(state === 'leaderlostleader') {

        // opacity of boxes before and after
        $('.b1, .x1a2').css({'opacity':'0.2'});
        $('.x5a6, .b6').css({'opacity':'0.7'});

        // og contest 1 coloring arrow and box
        $('.b2').css({'border':'rgb(60, 60, 60) 3px solid', 'opacity':'0.7'});
        $('.x2a3').css({'opacity':'0.7'});
        $('.b3').css({'border':'purple 3px dashed', 'opacity':'1'});
        $('.b5').css({'border':'orange 3px solid', 'opacity':'1'});
        $('.stageboxtextTopL').css({'color':'purple'});

        // circling og1 and og2
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $('.OG2').css({'opacity':'1'});

        // arrow from the circle to the outcome
        $('.x3al2').css({'opacity':'1'});

        // highlight the outcome
        $('.l34').css({'background-color':'transparent', 'opacity':'1'});

        // show arrows from the outcome stages
        $('.la52, .la52text').css({'opacity':'1'});
        $('.s5topf').css({'opacity':'1', 'color':'orange'});
        $('.s3topl').css({'opacity':'1', 'color':'purple'});

    }

    if(state === 'leaderlostfollower') {

        // opacity of boxes before and after
        $('.b1, .x1a2').css({'opacity':'0.2'});
        $(' .b5, .x5a6, .b6').css({'opacity':'0.7'});
        $('.s5topf, .s2topf').css({'opacity':'1', 'color':'orange'});

        // og contest 1 coloring arrow and box
        $('.b2').css({'border':'orange 3px solid', 'opacity':'1'});
        $('.o2a3').css({'opacity':'1'});
        $('.b3').css({'border':'black 3px dashed', 'opacity':'0.7'});

        // circling og1 and og2
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $('.OG2').css({'opacity':'0'});

        // arrow from the circle to the outcome
        $('.x3al2').css({'opacity':'1'});

        // highlight the outcome
        $('.l34').css({'background-color':'white', 'opacity':'1'});
        $('.b41').css({'border-color':'orange', 'opacity':'1'});
        $('.x44').css({'opacity':'1'});

        // show arrows from the outcome stages
        $('.la43').css({'opacity':'1'});

    }

    if(state === 'followercontest') {

        $('.x44').css({'opacity':'1'});

        // opacity of boxes before and after
        $('.b1, .x1a2').css({'opacity':'0.2'});
        $(' .b5, .x5a6, .b6').css({'opacity':'0.7'});

        // og contest 1 coloring arrow and box
        $('.b2').css({'border':'orange 3px solid', 'opacity':'0.7'});
        $('.o2a3').css({'opacity':'1'});
        $('.b3').css({'border':'rgb(60, 60, 60) 3px dashed', 'opacity':'0.7'});
        $('.s3topl').css({'opacity':'0'});

        // circling og1 and og2
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $('.OG2').css({'opacity':'1'});

        // arrow from the circle to the outcome
        $('.x3al2').css({'opacity':'1'});

        // highlight the outcome
        $('.l34').css({'background-color':'transparent', 'opacity':'1'});
        $('.b41').css({'border-color':'orange', 'opacity':'1'});

        // show arrows from the outcome stages
        $('.c4a6, .x4a53, .la43').css({'opacity':'1'});
        $('.s5topf, .s5topl').css({'opacity':'0'});

    }

    if(state === 'followercontestlost') {

        $('.x44').css({'opacity':'1'});

        // opacity of boxes before and after
        $('.b1, .x1a2').css({'opacity':'0.2'});
        $('.x5a6, .b6').css({'opacity':'0.7'});

        // og contest 1 coloring arrow and box
        $('.b2, .b5').css({'border':'orange 3px solid', 'opacity':'1'});
        $('.o2a3').css({'opacity':'1'});
        $('.b3').css({'border':'rgb(60, 60, 60) 3px dashed', 'opacity':'0.7'});


        // circling og1 and og2
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $('.OG2').css({'opacity':'1'});

        // arrow from the circle to the outcome
        $('.x3al2').css({'opacity':'1'});

        // highlight the outcome
        $('.l34').css({'background-color':'transparent', 'opacity':'1'});
        $('.b41').css({'border-color':'orange', 'opacity':'1'});

        // show arrows from the outcome stages
        $('.x4a53, .la43').css({'opacity':'1'});
        $('.s2topf, .s5topf').css({'opacity':'1', 'color':'orange'});

    }

    if(state === 'followercontestwon') {

        $('.x44').css({'opacity':'1'});

        // opacity of boxes before and after
        $('.b1, .x1a2').css({'opacity':'0.2'});
        $(' .b5, .x5a6').css({'opacity':'0.7'});

        // og contest 1 coloring arrow and box
        $('.b2').css({'border':'orange 3px solid', 'opacity':'1'});
        $('.o2a3').css({'opacity':'1'});
        $('.b3').css({'border':'rgb(60, 60, 60) 3px dashed', 'opacity':'0.7'});
        $('.b6').css({'border':'purple 3px dashed', 'opacity':'1'});

        // circling og1 and og2
        map.dashedBox('og1', true);
        map.dashedBox('og2', true);
        $('.OG2').css({'opacity':'1'});

        // arrow from the circle to the outcome
        $('.x3al2').css({'opacity':'1'});

        // highlight the outcome
        $('.l34').css({'background-color':'transparent', 'opacity':'1'});
        $('.b41').css({'border-color':'orange', 'opacity':'1'});

        // show arrows from the outcome stages
        $('.c4a6, .la43').css({'opacity':'1'});
        $('.s2topf').css({'opacity':'1', 'color':'orange'});
        $('.s6topl').css({'opacity':'1', 'color':'purple'});

    }

}

map.initiate = function() {

    //f1
    $('.b1').css({'border':'5px solid black','transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});

    //f2
    $('.x1a2').css({'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});
    $('.b2').css({'border':'5px solid orange', 'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});

    //f3
    $('.x2a3').css({'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});
    $('.b3').css({'border':'5px solid blue', 'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});


    //f4
    $('.x3al').css({'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});
    $('.l34').css({'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1', 'border':'double 4px black',});

    $('.la4').css({'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});
    $('.b4').css({'border':'5px solid lime', 'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});

    //f5
    $('.x3aw').css({'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});
    $('.w34').css({'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1', 'border':'double 4px black',});

    $('.x4a5').css({'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});
    $('.wa5').css({'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});
    $('.b5').css({'border':'5px solid orange', 'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});

    //f6
    $('.x5a6').css({'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});
    $('.b6').css({'border':'5px solid blue', 'transition':'0.51s', 'transition-delay':'0s', 'opacity':'1'});

}


map.update('full');

//---------------------------------------------------//


var initiate  = function() {

    calculator.display.wiggleArrow([0, 0, 0, 0, 0, 0]);
    calculator.display.questionMarks(false);


    // calculator.update.contestName('WHEEL OF FORTUNE');
    calculator.update.contestNameOG('OUT-GROUP CONTEST I', true);
    // calculator.update.contestNameOG('OUT-GROUP CONTEST II', true);
    // calculator.update.contestName('IN-GROUP CONTEST');
    calculator.update.playerTitles('LEADER');

    calculator.set.helpSabo([0,0,0,0,0,0,0,0]);
    calculator.set.efforts([200,200]);
    calculator.set.sliders();
    calculator.update.pie();

    resultTextsTag = 'leader';
    // resultTextsTag = 'generic';
    calculator.update.resultTexts(1);

    calculator.wheel.create(0.99);

}


initiate();
calculator.display.spinButton(true);
calculator.display.investment(true);
calculator.display.prize(true);
calculator.display.netPayoff(false);
calculator.display.role(false);

// // calculator.display.contestSection(false);
// calculator.display.contestSection(true);
// calculator.display.helpSaboSection(true);
// // calculator.display.powerBar(false);
// calculator.display.powerBar(true);
// calculator.display.powerBarText('none');
// calculator.display.powerBarLegend(false);
//
// // calculator.display.totalHelpSabo(false);
// calculator.display.totalHelpSabo(true);
//
// calculator.display.fightIcon(false);
//
// calculator.display.helpSaboIcons(true);
// // calculator.display.grayOGC();
//
// // calculator.display.helpSaboBars(false);
// calculator.display.helpSaboBars(true);

icon.set.stage1();
icon.display.stage1(true);

calculator.display.contestSection(true);
calculator.display.helpSaboSection(true);
calculator.display.powerBar(true);
calculator.display.powerBarText('top');
calculator.display.powerBarLegend(true);
calculator.display.totalHelpSabo(true);
calculator.display.fightIcon(false);
calculator.display.helpSaboIcons(true);
calculator.display.powerBarText('none');



var spin = document.getElementById('spinImage');
var spinButtonEnabled = true;
spin.onclick = function() {
    if(spinButtonEnabled) {
        calculator.wheel.spin();
        calculator.display.contestSection(true);
        // calculator.display.helpSaboSection(false);
    }
}


var rotateCounter = 0;
var rotateCounter2 = 0;
var rotate = function() {
    var array = ['full', 's1', 'og1', 's2', 's3', 's4', 's4?', 'discardFC',
    'leaderwonleader', 'leaderwonfollower', 'leaderwon',
    'leaderlostleader', 'leaderlostfollower', 'leaderlost',
    'followercontest', 'followercontestlost', 'followercontestwon', 'og2', 's5', 's6'];

    var array2 = ['og1', 's2', 's3', 's3ands4', 'leaderwon', 'leaderwontoog2',
    'leaderlost', 'llog2',
    'og2', 's5', 's6']
    // console.log(array[rotateCounter]);
    console.log(array2[rotateCounter2]);

    // map.update(array[rotateCounter]);
    map.icon.state(array2[rotateCounter2]);

    rotateCounter++;
    rotateCounter2++;

    if(rotateCounter === array.length) rotateCounter = 0;
    if(rotateCounter2 === array2.length) rotateCounter2 = 0;

}

var yoyo = document.getElementById('mybutton1');
yoyo.onclick = function() {
    rotate();
}


var ok1 = document.getElementById('ok1');

ok1.onclick = function() {

    // var box2Height = $('.box2').height() + 'px';
    // console.log(box2Height);

    // $('.box1').css({'position':'absolute', 'opacity':'0', 'z-index':'-1', 'height':'0'});
    // $('.box2').css({'position':'static', 'opacity':'1', 'z-index':'0', 'height':box2Height});

    $('.box1').css({'display':'none'});
    $('.box2').css({'display':'flex'});

}