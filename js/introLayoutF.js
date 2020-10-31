window.onload = function() {
    var node = parent.node;

    var goDown = function(val) {
        node.emit('godown', val);
    }

    var setHeight = function(val) {
        node.emit('setHeight', val);
    }

    var goUp = function(val) {
        node.emit('goup', val);
    }

    var somef = function(myData) {

        var info = {};
        info.me = myData[0];


        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        /////////////////////////     CALCULATOR      //////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

        var nzt = function(val) {
            return (val != 0) ? val : '';
        }

        var logistic2 = function(val , k) {
            var L = 1;
            var m = 0.5;
            var result;
            result= L / (1 + Math.exp(-k * (val - m)));
            return result;
        }

        var updatePie = function(a) {
            var x = a;
            var y = 1-a;
            if(typeof(x) === 'undefined') x = 0;
            if(typeof(y) === 'undefined') y = 0;
            if((x + y) === 0) {
                x = 1;
                y = 1;
            }
            var data = [{
                values: [y, x],
                labels: ['Opposing Leader', 'Your Leader'],
                textfont: {
                    color: ['black', 'white'],
                },
                type: 'pie',
                sort: false,
                hoverinfo: 'percent+label',
                automargin: true,
                marker:{
                    colors: ['rgb(225, 225, 225)', 'black']
                }
            }];

            var layout = {
                height: 120,
                width: 150,
                font:{
                    size: 10
                },
                margin: {"t": 0, "b": 0, "l": 0, "r": 0},
                showlegend: false,
            };

            Plotly.react('pie', data, layout, {displayModeBar: false});
        }

        var updateBarHelp = function(a,b) {
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
                textposition: 'outside',
                cliponaxis: false,
            }];

            var layout = {
                barmode: 'group',
                height: 120,
                width: 150,
                // title: 'Total Help',
                margin: {"t": 20, "b": 0, "l": 0, "r": 0},
                yaxis: {
                    fixedrange: true,
                    autorange: false,
                    showgrid: false,
                    range: [0,200]
                },
                xaxis: {
                    fixedrange: true,
                    showline: false,
                    showgrid: false,
                    ticks: '',
                    showticklabels: false,
                },
                bargap: 0.1,
            };

            Plotly.react('helpBar', data, layout, {displayModeBar: false});
        }

        var updateBarSabo = function(a, b) {
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
                textposition: 'outside',
                cliponaxis: false,
            }];

            var layout = {
                barmode: 'group',
                height: 120,
                width: 150,
                margin: {"t": 0, "b": 20, "l": 0, "r": 0},
                yaxis: {
                    fixedrange: true,
                    autorange: false,
                    showgrid: false,
                    range: [-200,0]
                },
                xaxis: {
                    fixedrange: true,
                    showline: false,
                    showgrid: false,
                    ticks: '',
                    showticklabels: false,
                },
                bargap: 0.1,
            };

            Plotly.react('saboBar', data, layout, {displayModeBar: false});
        }

        var updateBar = function(a, barId, lighter, axisOn) {
            var x = a;
            if(typeof(x) === 'undefined') x = 0;

            if(lighter){
                var colors = ['rgb(200,200,255)',  'rgb(255,200,200)'];
            } else { colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];}

            var myLabel = x > 0 ? x : -x;
            var myColor = x > 0 ? colors[0] : colors[1];

            var somecolor = 'black';

            if(barId==='bar2' || barId==='bar1'){
                somecolor = myLabel > 87 ? 'white' :'black';
            }


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
                    color: somecolor,
                },
                textanchor: 'right',
                textposition: 'outside',
                cliponaxis: false,
            }];




            var ticktextcolors = ['black', 'white'];
            var tindex = 1;

            var papercolors = ['white', 'rgb(35,79,30)', 'black','black' , 'rgb(225, 225, 225)'];//'rgb(41, 0, 87)'
            var pindex = 1;

            if(barId==='bar2'){//darkblue white
                tindex=1;
                pindex=3;
            }
            if(barId==='bar1'){//darkgreen white
                tindex=1;
                pindex=1;
            }
            if(barId==='obar1' || barId==='obar2'){
                //lightgray black
                tindex=0;
                pindex=4;
            }


            var layout = {
                paper_bgcolor: papercolors[pindex],
                barmode: 'group',
                height: 300,
                width: 80,
                margin: {"t": 20, "b": 25, "l": 25, "r": 25},
                yaxis: {
                    fixedrange: true,
                    autorange: false,
                    range: [-100,100],
                    layer: 'below traces',
                    ticks:'',
                    tickfont: {
                        size: 9,
                        color:ticktextcolors[tindex],
                    },
                    tickmode: 'array',
                    tickvals: [-100, -75, -50, -40, -30, -20, -10, 0, 10,  20, 30, 40, 50, 75, 100],
                    ticktext: [100, 75, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 75, 100],
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

        var updateBarLeader = function(e, barId, ourSide, axisOn) {
            var y = e;
            if(typeof(x) === 'undefined') x = 0;

            var mColor = ourSide ? 'black' : 'rgb(225, 225, 225)';


            var somecolor = 'black';

            if(barId==='barl'){
                if(y > 741 ) {
                    somecolor = 'gray';
                }

                if(y > 782 ) {
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
                    color: somecolor,
                },
                orientation: 'h',
                textposition: 'outside',
            }];




            var ticktextcolors = ['black', 'white'];
            var tindex = 1;

            var papercolors = ['white', 'rgb(35,79,30)', 'black', 'darkblue', 'rgb(225, 225, 225)'];
            var pindex = 1;



            if(barId==='barl'){//black white
                tindex=1;
                pindex=2;
            }
            if(barId==='obarl'){//lighgray black
                tindex=0;
                pindex=4;
            }



            var layout = {
                paper_bgcolor: papercolors[pindex],
                barmode: 'group',
                height: 75,
                width: 405,
                margin: {"t": 23, "b": 20, "l": 25, "r": 27},
                xaxis: {
                    side: 'top',
                    fixedrange: true,
                    autorange: false,
                    range: [0,800],
                    layer: 'below traces',
                    fixedrange: true,

                    tickfont: {
                        size: 10,
                        color:ticktextcolors[tindex],
                    },
                    tickmode: 'array',
                    tickvals: [0, 50, 100, 150, 250, 350, 500, 650, 800],
                    ticktext: [0, 50, 100, 150, 250, 350, 500, 650, 800],
                    tickangle: -45,
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

        var updateBarDecision = function(a, barId, axisOn) {
            var y = a;
            if(typeof(y) === 'undefined') y = 0;

            var colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];

            var myLabel = y > 0 ? y : -y;
            var myColor = y > 0 ? colors[0] : colors[1];


            var somecolor = myLabel > 97 ? 'white' :'black';


            var ticktextcolors = ['black', 'white'];
            var tindex = 1;

            var papercolors = ['white', 'rgb(35,79,30)', 'black', 'darkblue', 'darkgreen'];
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
                    size: '35',
                    color:somecolor,
                },
                textanchor: 'right',
                textposition: 'outside',
                cliponaxis: false,
            }];

            var layout = {
                paper_bgcolor: papercolors[pindex],
                barmode: 'group',
                height: 75,
                width: 1050,
                margin: {"t": 20, "b": 20, "l": 40, "r": 40},
                xaxis: {
                    side: 'top',
                    fixedrange: true,
                    autorange: false,
                    range: [-100,100],
                    layer: 'below traces',
                    fixedrange: true,
                    ticks:'',
                    tickfont: {
                        size: 10,
                        color:ticktextcolors[tindex],
                    },
                    tickmode: 'array',
                    tickvals: [-100, -75, -50, -40, -30, -20, -15, -10, -5, 0, 5,10, 15, 20, 30, 40, 50, 75, 100],
                    ticktext: [100, 75, 50, 40, 30, 20, 15, 10, 5, 0, 5, 10, 15, 20, 30, 40, 50, 75, 100],
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

            Plotly.react(barId, data, layout, {displayModeBar: false});
        }

        var updateEfficiencyBar = function(efi1, efi2) {

            var val1 = efi1 / (efi1 + efi2);
            var val2 = efi2 / (efi1 + efi2);

            if((efi1 / efi2) > 1){
                var myText = (val1 >= 0.99) ? '100+' : (efi1 / efi2).toFixed(2);
            } else {
                myText = 1;
            }

            if((efi1 / efi2) < 1){
                var myText2 = (val2 >= 0.99) ? '100+' : (efi2 / efi1).toFixed(2);
            } else {
                myText2 = 1;
            }

            val1 = logistic2(val1, 5);
            val2 = 1 - val1;

            var gapSize = 0.01;
            val1 = val1 - gapSize/2;
            val2 = val2 - gapSize/2;

            var leader1 = {
                y: ['group 1'],
                x: [val1],
                type: 'bar',
                orientation: 'h',
                sort: false,
                hoverinfo: 'none',
                automargin: true,
                showlegend: false,
                marker: {
                    // color: 'rgb(160, 160, 160)',
                    color: 'black',
                },
                text: myText,
                textposition: 'inside',
                insidetextanchor: 'middle',
                textfont: {
                    color: 'white',
                    size: '10'
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
                },
                text: myText,
                textposition: 'inside',
                insidetextanchor: 'middle',
                textfont: {
                    color: 'white',
                    size: '10'
                },
            };

            var leader2 = {
                y: ['group 1'],
                x: [val2],
                type: 'bar',
                orientation: 'h',
                sort: false,
                hoverinfo: 'none',
                automargin: true,
                showlegend: false,
                marker: {
                    color: 'rgb(225, 225, 225)',
                },
                text: myText2,
                textposition: 'inside',
                insidetextanchor: 'middle',
                textfont: {
                    size: '10'
                },
            };

            var data = [leader1, gap, leader2];

            var layout = {
                barmode: 'stack',
                height: 30,
                width: 1000,
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
                }

            };

            Plotly.react('efficiencyBar', data, layout, {displayModeBar: false});
        }


        //VARIABLES AND GRAPHICS INITIATIONS


        // Follower global variables for both groups
        // your group
        var s1, s2, h1, h2, ts, th;
        s1 = s2 = h1 = h2 = ts = th = 0;
        // opposing group
        var os1, os2, oh1, oh2, ots, oth;
        os1 = os2 = oh1 = oh2 = ots = oth = 0;

        // leader global variables
        var efo, efi, efefo, oefo, oefi, oefefo, pwin;
        efo = oefo = 1;
        efi = oefi = 1;

        var syncOurGroup = true;
        var syncOtherGroup  = document.getElementById('mycheck2').checked;


        var syncValues = function(hValue, sValue, group, isSync, isSync2){
            if(group === 'opponent' && isSync2) {
                oh1 = oh2 = hValue;
                os1 = os2 = sValue;
            }
            if(group === 'our' && isSync) {
                // notice s1 and h1 are independent!
                h2 = hValue;
                s2 = sValue;
            }
            if(group === 'decision') {
                h1 = hValue;
                s1 = sValue;
            }

        }

        var syncBars = function(value, group, isSync, isSync2) {
            if(group === 'opponent' && isSync2) {
                updateBar(value, 'obar1', 1, false);
                updateBar(value, 'obar2', 1, false);
            }
            if(group === 'our') {
                updateBar(value, 'bar2', 0, false);
            }
            if(group === 'decision') {
                updateBar(value, 'bar1', 0, true);
                updateBarDecision(value, 'bard', true);
            }
        }

        var updateBarYAxis = function(barId, axisSwitch) {
            var update = {
                'yaxis.showgrid': axisSwitch,
                'yaxis.showticklabels': axisSwitch
            };
            Plotly.relayout(barId, update);
        }

        var updateBarXAxis = function(barId, axisSwitch) {
            var update = {
                'xaxis.showgrid': axisSwitch,
                'xaxis.showticklabels': axisSwitch
            };
            Plotly.relayout(barId, update);
        }

        var updateTotal = function() {
            ts = s1 + s2;
            th = h1 + h2;
            ots = os1 + os2;
            oth = oh1 + oh2;
        }

        var updatePwin = function() {
            efi = (1 + th)/(1 + ts);
            oefi = (1 + oth)/(1 + ots);
            efefo = efi * efo;
            oefefo = oefi * oefo;
            pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));
        }

        var updateAll = function() {
            updateTotal();
            updateBarHelp(th, oth);
            updateBarSabo(ts, ots);
            updatePwin();
            updatePie(1);
            updatePie(pwin);

            updateEfficiencyBar(efi, oefi);

            var loseNetPayoff = document.getElementById('losenetpayoff');
            loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

            var winNetPayoff = document.getElementById('winnetpayoff');
            winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

        }


        updateAll();

        var mySyncAll = function() {
            s2 = s1;
            os1 = s1;
            os2 = s1;
            h2 = h1;
            oh1 = h1;
            oh2 = h1;
            efo = 200;
            oefo = 200;

        }

        var syncAllBars = function() {
            mySyncAll();
            updateAll();


            var myVal = s1 + h1;
            myVal = (s1 > 0) ? -s1 : h1;


            updateBar(myVal, 'bar1', 0, true);
            updateBar(myVal, 'bar2', 0, false);
            updateBar(myVal, 'obar1', 0, false);
            updateBar(myVal, 'obar2', 0, false);

            $('#vSlider1').prop('value', myVal);
            $('#vSlider1').change();
            $('#vSlider2').prop('value', myVal);
            $('#vSlider2').change();
            $('#ovSlider1').prop('value', myVal);
            $('#ovSlider1').change();
            $('#ovSlider2').prop('value', myVal);
            $('#ovSlider2').change();


            updateBarLeader(efo, 'barl', true, false);
            updateBarLeader(efo, 'obarl', false, false);

            $('#lSlider1').prop('value', efo);
            $('#lSlider1').change();
            $('#olSlider1').prop('value', efo);
            $('#olSlider1').change();
        }

        var calctext = document.getElementById('calctitle');
        calctext.innerHTML = 'Show <br> Calculator';
        var showCalc = document.getElementById('calculatortitle');

        var calcOn = 0

        var instruction1 = true;
        var instruction2 = false;

        var instructionlast = false;
        var instruction3 = true;

        var noinstructions = false;

        var calcOn2 = 0;

        showCalc.onclick = function() {

            if(instruction1) {

                var myheight = $('.b5').height();
                var myString = -myheight + 'px';

                $('.b5').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
                setTimeout(()=>destroy('.b5'), 100);

                $('.b61').css({'position':'static', 'opacity':'1', 'background-color':'lavender', 'z-index':'101'});
                $('.bb61').css({'z-index':'1', 'opacity':'1'});
                $('.dinfo, .sinfo').css({'display':'none'});



                $('.calcwrap').css({'display':'flex'});
                $('.bottomsection').css({'display':'flex'});
                $('.calculator').css({'margin-top':'0px'});
                $('.calculatortitle').css({
                    'border-bottom-left-radius':'0px',
                    'border-bottom-right-radius':'0px',
                    'padding-bottom':'40px',
                    'margin-top':'16px',
                    'margin-bottom':'-36px',
                    'width':'200px',
                    'height':'38px'});

                calctext.innerHTML = 'Close Calculator';
                syncAllBars();
                setHeight(915);


                instruction1 = false;

            }

            if(instruction2) {

                myheight = $('.b81').height();
                myString = -myheight + 'px';

                $('.b81').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
                setTimeout(()=>destroy('.b81'), 100);
                $('.b82').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush', 'z-index':'101'});

                $('.calcwrap').css({'display':'none'});

                $('.calculatortitle').css({
                    'border-bottom-left-radius':'90px',
                    'border-bottom-right-radius':'90px',
                    'padding-bottom':'0px',
                    'box-shadow':'0px 3px 9px purple',
                    'margin-bottom':'0px',
                    'margin-top':'-5px',
                    'width':'175px',
                    'height':'83px'});
                calctext.innerHTML = 'Show <br> Calculator';
                $('.calculator').css({'margin-top':'11px'});

                instruction2 = false;
                instruction4 = true;

                calcOn = 0;
            }

            if(instructionlast) {

                if(instruction3) {
                    $('.b83').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
                    setTimeout(()=>destroy('.b83'), 100);

                    $('.b84').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush', 'z-index':'101'});
                    $('.bb84').css({'z-index':'1', 'opacity':'1'});

                    instruction3 = false;
                }

                if(!calcOn) {
                    $('.calcwrap').css({'display':'flex'});
                    $('.bottomsection').css({'display':'flex'});
                    // $('.calculator').css({'box-shadow':'0px 2px 8px 0px purple'});
                    $('.calculatortitle').css({
                        'border-bottom-left-radius':'0px',
                        'border-bottom-right-radius':'0px',
                        'padding-bottom':'40px',
                        'margin-top':'16px',
                        'margin-bottom':'-36px',
                        'width':'200px',
                        'height':'38px'});

                    calctext.innerHTML = 'Close Calculator';
                    $('.calculator').css({'margin-top':'0px'});
                    syncAllBars();

                    setHeight(1250);
                }
                if(calcOn) {
                    $('.calcwrap').css({'display':'none'});
                    // $('.calculator').css({'box-shadow':'0px 0px 0px 0px black'});
                    $('.calculatortitle').css({
                        'border-bottom-left-radius':'90px',
                        'border-bottom-right-radius':'90px',
                        'padding-bottom':'0px',
                        'box-shadow':'0px 3px 9px purple',
                        'margin-bottom':'0px',
                        'margin-top':'-5px',
                        'width':'175px',
                        'height':'83px'});
                    calctext.innerHTML = 'Show <br> Calculator';
                    $('.calculator').css({'margin-top':'11px'});

                    setHeight(650);
                }

                calcOn = 1 - calcOn;
            }

            if(noinstructions) {

                if(!calcOn2) {
                    $('.calcwrap').css({'display':'flex'});
                    $('.bottomsection').css({'display':'flex'});
                    // $('.calculator').css({'box-shadow':'0px 2px 8px 0px purple'});
                    $('.calculatortitle').css({
                        'border-bottom-left-radius':'0px',
                        'border-bottom-right-radius':'0px',
                        'padding-bottom':'40px',
                        'margin-top':'16px',
                        'margin-bottom':'-36px',
                        'width':'200px',
                        'height':'38px'});

                    calctext.innerHTML = 'Close Calculator';
                    $('.calculator').css({'margin-top':'0px'});
                    syncAllBars();

                    goDown(925);
                }
                if(calcOn2) {
                    $('.calcwrap').css({'display':'none'});
                    // $('.calculator').css({'box-shadow':'0px 0px 0px 0px black'});
                    $('.calculatortitle').css({
                        'border-bottom-left-radius':'90px',
                        'border-bottom-right-radius':'90px',
                        'padding-bottom':'0px',
                        'box-shadow':'0px 3px 9px purple',
                        'margin-bottom':'0px',
                        'margin-top':'-5px',
                        'width':'175px',
                        'height':'83px'});
                    calctext.innerHTML = 'Show <br> Calculator';
                    $('.calculator').css({'margin-top':'0px'});

                    goUp(615);
                }

                calcOn2 = 1 - calcOn2;
            }

        }



        // Slider-bar initiations
        // DECISION SLIDER - BAR
        var dslider = document.getElementById('dSlider');
        var dvalue = 0;
        updateBarDecision(0, 'bard', false);


        // YOUR GROUP INITIATION
        // leader
        var lslider1 = document.getElementById('lSlider1');
        var lvalue = 1;
        updateBarLeader(lvalue, 'barl', 1, false);
        // followers
        var slider1 = document.getElementById('vSlider1');
        var slider2 = document.getElementById('vSlider2');

        var value1 = 0;
        var value2 = 0;

        updateBar(value1, 'bar1', 0, false);
        updateBar(value2, 'bar2', 0, false);


        // OPPOSING GROUP INITIATION
        // leader
        var olslider1 = document.getElementById('olSlider1');
        var olvalue = 1;
        updateBarLeader(olvalue, 'obarl', 0, false);
        // followers
        var oslider1 = document.getElementById('ovSlider1');
        var oslider2 = document.getElementById('ovSlider2');

        var ovalue1 = 0;
        var ovalue2 = 0;

        updateBar(ovalue1, 'obar1', 1, false);
        updateBar(ovalue2, 'obar2', 1, false);



        //DECISION
        var instruction4 = false;
        var firstTime = true;
        dslider.oninput = function() {

            if(firstTime) {
                $('.bb1').css({'z-index':'1', 'opacity':'1'});
                firstTime = false;
            }



            dvalue = parseFloat(dslider.value);
            s1 = dvalue >= 0 ? 0 : -dvalue;
            h1 = dvalue >= 0 ? dvalue : 0;

            //synching values
            syncBars(dvalue, 'decision', syncOurGroup, syncOtherGroup);
            syncValues(h1, s1, 'decision', syncOurGroup, syncOtherGroup);

            updateAll();
            updateBarXAxis('bard', true);

            if(instruction4) {
                if(s1===100) {
                    var myheight = $('.b82').height();
                    var myString = -myheight + 'px';

                    $('.b82').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
                    setTimeout(()=>destroy('.b82'), 100);

                    $('.b83').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush', 'z-index':'101'});

                    $('.calculatortitle').css({'display':'inline'});
                    $('.calculator').css({'margin-top':'11px'});

                    instructionlast = true;
                }
            }

            var loseNetPayoff = document.getElementById('losenetpayoff');
            loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' tokens');

            var winNetPayoff = document.getElementById('winnetpayoff');
            winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' tokens');

            //synching sliders
            $('#vSlider1').prop('value', dvalue);
            $('#vSlider1').change();
        }

        // YOUR GROUP
        //Leader
        lslider1.oninput = function() {
            lvalue = parseFloat(lslider1.value);
            efo = lvalue;
            updateBarLeader(lvalue, 'barl', 1, true);
            updateAll();
        }

        //Followers
        // your decision
        slider1.oninput = function() {
            value1 = parseFloat(slider1.value);
            s1 = value1 >= 0 ? 0 : -value1;
            h1 = value1 >= 0 ? value1 : 0;

            //synching values
            syncBars(value1, 'decision', syncOurGroup, syncOtherGroup);
            syncValues(h1, s1, 'decision', syncOurGroup, syncOtherGroup);

            updateAll();
            updateBarYAxis('bar1', true);

            var loseNetPayoff = document.getElementById('losenetpayoff');
            loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' tokens');

            var winNetPayoff = document.getElementById('winnetpayoff');
            winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' tokens');

            //synching sliders
            $('#dSlider').prop('value', value1);
            $('#dSlider').change();
        }

        // Other Followers in your Group
        slider2.oninput = function() {
            value2 = parseFloat(slider2.value);
            s2 = value2 >= 0 ? 0 : -value2;
            h2 = value2 >= 0 ? value2 : 0;
            updateBar(value2, 'bar2', 0, false);

            //synching values
            syncBars(value2, 'our', true, syncOtherGroup);
            syncValues(h2, s2, 'our', true, syncOtherGroup);

            updateAll();
            updateBarYAxis('bar2', true);

            //synching sliders

        }


        // OPPOSING GROUP
        //Leader
        olslider1.oninput = function() {
            olvalue = parseFloat(olslider1.value);
            oefo = olvalue;
            updateBarLeader(olvalue, 'obarl', 0, true);
            updateAll();
        }

        //Followers
        oslider1.oninput = function() {
            syncOtherGroup = document.getElementById('mycheck2').checked;
            ovalue1 = parseFloat(oslider1.value);
            os1 = ovalue1 >= 0 ? 0 : -ovalue1;
            oh1 = ovalue1 >= 0 ? ovalue1 : 0;
            updateBar(ovalue1, 'obar1', 1, false);

            //synching values
            syncBars(ovalue1, 'opponent', syncOurGroup, syncOtherGroup);
            syncValues(oh1, os1, 'opponent', syncOurGroup, syncOtherGroup);

            updateAll();
            updateBarYAxis('obar1', true);

            //synching sliders
            if(syncOtherGroup) {
                // console.log('are we inside?');
                $('#ovSlider2').prop('value', ovalue1);
                $('#ovSlider2').change();
            }
        }
        oslider2.oninput = function() {
            syncOtherGroup = document.getElementById('mycheck2').checked;
            ovalue2 = parseFloat(oslider2.value);
            os2 = ovalue2 >= 0 ? 0 : -ovalue2;
            oh2 = ovalue2 >= 0 ? ovalue2 : 0;
            updateBar(ovalue2, 'obar2', 1, false);

            //synching values
            syncBars(ovalue2, 'opponent', syncOurGroup, syncOtherGroup);
            syncValues(oh2, os2, 'opponent', syncOurGroup, syncOtherGroup);

            updateAll();
            updateBarYAxis('obar2', true);

            //synching sliders
            if(syncOtherGroup) {
                $('#ovSlider1').prop('value', ovalue2);
                $('#ovSlider1').change();
            }
        }


        // HOVER AND FOCUSOUT EFFECT FOR XAXIS SHOWING UP

        $('.followergroupleft').hover(
            function() {
                $('.left_title').css({'box-shadow':'0px 8px 8px 0px black'});
                $('.leftmaintitle').css({'box-shadow':'0px 8px 8px 0px black'});
            },
            function(){
                $('.left_title').css({'box-shadow':'0px 1px 3px 0px black'});
                $('.leftmaintitle').css({'box-shadow':'0px 2px 2px 0px black'});
            }
        )

        $('.followergroupright').hover(
            function() {
                $('.right_title').css({'box-shadow':'0px 8px 8px 0px black'});
                $('.rightmaintitle').css({'box-shadow':'0px 8px 8px 0px black'});
            },
            function(){
                $('.right_title').css({'box-shadow':'0px 1px 3px 0px black'});
                $('.rightmaintitle').css({'box-shadow':'0px 2px 2px 0px black'});
            }
        )

        $('.leadergroupleft').hover(
            function() {
                $('.left_ltitle').css({'box-shadow':'0px 8px 8px 0px black'});
                $('.leftmaintitle').css({'box-shadow':'0px 8px 8px 0px black'});
            },
            function(){
                $('.left_ltitle').css({'box-shadow':'0px 1px 2px 0px black'});
                $('.leftmaintitle').css({'box-shadow':'0px 2px 2px 0px black'});
            }
        )

        $('.leadergroupright').hover(
            function() {
                $('.right_ltitle').css({'box-shadow':'0px 8px 8px 0px black'});
                $('.rightmaintitle').css({'box-shadow':'0px 8px 8px 0px black'});
            },
            function(){
                $('.right_ltitle').css({'box-shadow':'0px 1px 3px 0px black'});
                $('.rightmaintitle').css({'box-shadow':'0px 2px 2px 0px black'});
            }
        )

        $('.input').hover(
            function() {
                $('.input').css({'transition':'0.5s','box-shadow':'0px 3px 9px 0px orange'});


            },
            function() {
                $('.input').css({'box-shadow':'0px 3px 9px 0px lime'});
                }
        );

        $('#lSlider1').hover(
            function() {
                // $('.pwintext').css({'color':'red'});
                setTimeout(()=>updateBarXAxis('barl', true), 250);
                $('.ldecisiontext1').css({'opacity':'1', 'color':'red'});
                $('.barl').css({'box-shadow':'0px 8px 8px 0px black'});
            },
            function() {
                // $('.pwintext').css({'color':'black'});
                setTimeout(()=>updateBarXAxis('barl', false), 500);
                $('.ldecisiontext1').css({'opacity':'0.5', 'color':'black'});
                $('.barl').css({'box-shadow':'0px 1px 2px 0px black'});
            }
        );
        $('#olSlider1').hover(
            function() {
                // $('.pwintext').css({'transition-delay':'0.5s', 'transition':'0.35s','color':'red'});
                setTimeout(()=>updateBarXAxis('obarl', true), 250);
                $('.ldecisiontext2').css({'opacity':'1', 'color':'red'});
                $('.obarl').css({'box-shadow':'0px 8px 8px 0px black'});
            },
            function() {
                // $('.pwintext').css({'color':'black'});
                setTimeout(()=>updateBarXAxis('obarl', false), 500);
                $('.ldecisiontext2').css({'opacity':'0.5', 'color':'black'});
                $('.obarl').css({'box-shadow':'0px 1px 2px 0px black'});
            }
        );

        updateBarXAxis('bard', true)
        $('#dSlider').hover(
            function() {
                // $('.pwintext, .powertext').css({'color':'red'});
                setTimeout(()=>updateBarXAxis('bard', true), 250);
                // $('.yourdecisiontext').css({'color':'red'});
                $('.yourdecisiontext21').css({'color':'red'});
                $('#dSlider').css({'background':'red', 'opacity':'1', 'margin-top': '51px'});
                $('#vSlider1')
                .css({'background':'red', 'opacity':'1', 'margin-left': '-78px'});
                $('#vSlider1').addClass('newnewSlider');
            },
            function() {
                $('.pwintext, .powertext').css({'color':'black'});
                // setTimeout("updateBarXAxis('bard', false)", 1000);
                // $('.yourdecisiontext').css({'color':'white'});
                $('.yourdecisiontext21').css({'color':'black'});
                $('#dSlider').css({'background':'gray', 'opacity':'0', 'margin-top': '35px'});
                $('#vSlider1')
                .css({'background':'gray', 'opacity':'0', 'margin-left': '-90px'});
                $('#vSlider1').removeClass('newnewSlider');
            }
        );

        updateBarYAxis('bar1', true);
        $('#vSlider1').hover(
            function() {
                $('.f1').css({'box-shadow':'0px 8px 8px 0px black'});
                // $('.pwintext, .powertext').css({'color':'red'});
                setTimeout(()=>updateBarYAxis('bar1', true), 250);
                // $('.yourdecisiontext').css({'color':'red'});
                $('.yourdecisiontext21').css({'color':'red'});
                $('#vSlider1').css({'background':'red', 'opacity':'1', 'margin-left': '-75px'});
                $('#dSlider').css({'background':'red', 'opacity':'1', 'margin-top': '51px'});
                $('#dSlider').addClass('newdSlider');

            },
            function() {
                $('.f1').css({'box-shadow':'0px 1px 2px 0px black'});
                // $('.pwintext, .powertext').css({'color':'black'});
                // setTimeout(()=>updateBarYAxis('bar1', false), 500);
                // $('.yourdecisiontext').css({'color':'white'});
                $('.yourdecisiontext21').css({'color':'black'});
                $('#vSlider1').css({'background':'gray', 'opacity':'0', 'margin-left': '-90px'});
                $('#dSlider').css({'background':'gray', 'opacity':'0', 'margin-top': '35px'});
                $('#dSlider').removeClass('newdSlider');
            }
        );

        $('#vSlider2').hover(
            function() {
                $('.f2').css({'box-shadow':'0px 8px 8px 0px black'});
                // $('.pwintext, .powertext').css({'color':'red'});
                var myString;
                myString = '#vSlider2';
                $(myString).addClass('newnewSlider');
                $(myString).addClass('newnewSlider');
                setTimeout(()=>updateBarYAxis('bar2', true), 250);
                $('.yourdecisiontext22').css({'font-weight':'500','opacity':'1', 'color':'red'});
                $(myString)
                .css({'background':'red', 'opacity':'1', 'margin-left': '-75px'});

            },
            function() {
                $('.f2').css({'box-shadow':'0px 1px 2px 0px black'});
                // $('.pwintext, .powertext').css({'color':'black'});
                var myString;
                myString = '#vSlider2';
                $(myString).removeClass('newnewSlider');
                setTimeout(()=>updateBarYAxis('bar2', false), 500);
                $('.yourdecisiontext22').css({'font-weight':'500','opacity':'0.5', 'color':'black'});
                $(myString)
                .css({'background':'gray', 'opacity':'0', 'margin-left': '-90px'});
            }
        );

        $('#ovSlider1').hover(
            function() {
                // $('.pwintext, .powertext').css({'color':'red'});
                syncOtherGroup = document.getElementById('mycheck2').checked;
                var myString, myString2;
                if(syncOtherGroup) {
                    $('.of1, .of2').css({'box-shadow':'0px 8px 8px 0px black'});
                    myString = '#ovSlider1, #ovSlider2';
                    myString2 = '.yourdecisiontext41, .yourdecisiontext42';
                } else {
                    $('.of1').css({'box-shadow':'0px 8px 8px 0px black'});
                    myString = '#ovSlider1';
                    myString2 = '.yourdecisiontext41';
                }

                setTimeout(()=>updateBarYAxis('obar1', true), 250);
                $(myString2).css({'font-weight':'500','opacity':'1', 'color':'red'});
                $(myString)
                .css({'background':'red', 'opacity':'1', 'margin-left': '-75px'});


                if(syncOtherGroup) {
                    $(myString).addClass('newnewSlider');
                }
            },
            function() {
                // $('.pwintext, .powertext').css({'color':'black'});
                syncOtherGroup = document.getElementById('mycheck2').checked;
                var myString, myString2;
                if(syncOtherGroup) {
                    $('.of1, .of2').css({'box-shadow':'0px 1px 2px 0px black'});
                    myString = '#ovSlider1, #ovSlider2';
                    myString2 = '.yourdecisiontext41, .yourdecisiontext42';
                } else {
                    $('.of1').css({'box-shadow':'0px 1px 2px 0px black'});
                    myString = '#ovSlider1';
                    myString2 = '.yourdecisiontext41';
                }

                setTimeout(()=>updateBarYAxis('obar1', false), 500);
                $(myString2).css({'font-weight':'500','opacity':'0.5', 'color':'black'});
                $(myString)
                .css({'background':'gray', 'opacity':'0', 'margin-left': '-90px'});
                if(syncOtherGroup) {
                    $(myString).removeClass('newnewSlider');
                }
            }
        );
        $('#ovSlider2').hover(
            function() {
                // $('.pwintext, .powertext').css({'color':'red'});
                syncOtherGroup = document.getElementById('mycheck2').checked;
                var myString, myString2;
                if(syncOtherGroup) {
                    $('.of1, .of2').css({'box-shadow':'0px 8px 8px 0px black'});
                    myString = '#ovSlider1, #ovSlider2';
                    myString2 = '.yourdecisiontext41, .yourdecisiontext42';
                } else {
                    $('.of2').css({'box-shadow':'0px 8px 8px 0px black'});
                    myString = '#ovSlider2';
                    myString2 = '.yourdecisiontext42';
                }

                setTimeout(()=>updateBarYAxis('obar2', true), 250);
                $(myString2).css({'font-weight':'500','opacity':'1', 'color':'red'});
                $(myString)
                .css({'background':'red', 'opacity':'1', 'margin-left': '-75px'});
                if(syncOtherGroup) {
                    $(myString).addClass('newnewSlider');
                }
            },
            function() {
                // $('.pwintext, .powertext').css({'color':'black'});
                syncOtherGroup = document.getElementById('mycheck2').checked;
                var myString, myString2;
                if(syncOtherGroup) {
                    $('.of1, .of2').css({'box-shadow':'0px 1px 2px 0px black'});
                    myString = '#ovSlider1, #ovSlider2';
                    myString2 = '.yourdecisiontext41, .yourdecisiontext42';
                } else {
                    $('.of2').css({'box-shadow':'0px 1px 2px 0px black'});
                    myString = '#ovSlider2';
                    myString2 = '.yourdecisiontext42';
                }

                setTimeout(()=>updateBarYAxis('obar2', false), 500);
                $(myString2).css({'font-weight':'500','opacity':'0.5', 'color':'black'});
                $(myString)
                .css({'background':'gray', 'opacity':'0', 'margin-left': '-90px'});
                if(syncOtherGroup) {
                    $(myString).removeClass('newnewSlider');
                }
            }
        );

        $('.cb').hover(
            function() {
                $('.cb').css({
                    'transition-delay':'0s',
                    'transition':'0.35s',
                    'color':'black',
                    'background-color':'white',
                    'box-shadow':'0px 6px 6px 6px black'
                });
            },
            function() {
                $('.cb').css({
                    'color':'white',
                    'background-color':'black',
                    'box-shadow':'0px 2px 2px 2px black'
                });
            }
        )



        var initialize = function() {
            $('html, body').animate({scrollTop: 0}, 0);
            $('.cursor-pointer').css({'cursor':'default'});
        }

        initialize();


        var checkButton = document.getElementById('mycheck2');
        checkButton.onclick = function() {
            if(document.getElementById('mycheck2').checked) {
                $('.locked').css({'opacity':'1'});
                $('.unlocked').css({'opacity':'0'});
            }
            if(!document.getElementById('mycheck2').checked) {
                $('.locked').css({'opacity':'0'});
                $('.unlocked').css({'opacity':'1'});
            }
        }



        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        /////////////////////////// BOX MANIPULATIONS /////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////

        var destroy = function(val) {
            $(val).css({'display':'none'});
        }


        var b1 = document.getElementById('bb1');
        b1.onclick = function() {

            var myheight = $('.b1').height();
            var myString = -myheight + 'px';

            $('.b1').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
            setTimeout(()=>destroy('.b1'), 100);

            $('.b2').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush'});
            $('.bb2').css({'z-index':'1', 'opacity':'1'});

            node.emit('countdown');
        };


        var b2 = document.getElementById('bb2');
        b2.onclick = function() {

            var myheight = $('.b2').height();
            var myString = -myheight + 'px';

            $('.b2').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
            setTimeout(()=>destroy('.b2'), 100);

            $('.b4').css({ 'position':'static', 'opacity':'1', 'background-color':'lavender'});
            $('.bb4').css({'z-index':'1', 'opacity':'1'});


        };


        // var b3 = document.getElementById('bb3');
        // b3.onclick = function() {
        //
        //     var myheight = $('.b3').height();
        //     var myString = -myheight + 'px';
        //
        //     $('.b3').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
        //     setTimeout(()=>destroy('.b3'), 100);
        //
        //     $('.b4').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush', 'z-index':'101'});
        //     $('.bb4').css({'z-index':'1', 'opacity':'1'});
        //
        //
        //
        // };

        var b4 = document.getElementById('bb4');
        b4.onclick = function() {

            var myheight = $('.b4').height();
            var myString = -myheight + 'px';

            $('.b4').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
            setTimeout(()=>destroy('.b4'), 100);

            $('.b5').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush', 'z-index':'101'});
            $('.bb5').css({'z-index':'1', 'opacity':'1'});
            setTimeout(()=>showCalculatorButton(), 5000)

        };


        var showCalculatorButton = function() {
            $('.calculator').css({'display':'inline', 'margin-top':'11px'});
            $('.calculatortitle').css({'display':'inline'});
        }
        // box and button 5 action occurs inside calc show button


        var b61 = document.getElementById('bb61');
        b61.onclick = function() {

            var myheight = $('.b61').height();
            var myString = -myheight + 'px';

            $('.b61').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
            setTimeout(()=>destroy('.b61'), 100);

            $('.b62').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush', 'z-index':'101'});
            $('.bb62').css({'z-index':'1', 'opacity':'1'});


        };

        var b62 = document.getElementById('bb62');
        b62.onclick = function() {

            var myheight = $('.b62').height();
            var myString = -myheight + 'px';

            $('.b62').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
            setTimeout(()=>destroy('.b62'), 100);

            $('.b63').css({'position':'static', 'opacity':'1', 'background-color':'white', 'z-index':'101'});
            $('.bb63').css({'z-index':'1', 'opacity':'1'});

        };

        var b63 = document.getElementById('bb63');
        b63.onclick = function() {

            var myheight = $('.b63').height();
            var myString = -myheight + 'px';

            $('.b63').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
            setTimeout(()=>destroy('.b63'), 100);

            $('.b7').css({'position':'static', 'opacity':'1', 'background-color':'white', 'margin-top':'-10px', 'z-index':'101'});
            $('.bb7').css({'z-index':'1', 'opacity':'1'});

            goDown(985);

        };


        var b7 = document.getElementById('bb7');
        b7.onclick = function() {

            var myheight = $('.b7').height();
            var myString = -myheight + 'px';

            $('.b7').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
            setTimeout(()=>destroy('.b7'), 100);

            $('.b81').css({'position':'static', 'opacity':'1', 'background-color':'lavender', 'z-index':'101'});
            $('.bb81').css({'z-index':'1', 'opacity':'1'});

            instruction2 = true;

            goUp(850);

            $('.calculatortitle').css({'cursor':'pointer'});

        };

        var b84 = document.getElementById('bb84');
        b84.onclick = function() {

            var myheight = $('.b84').height();
            var myString = -myheight + 'px';

            $('.b84').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
            setTimeout(()=>destroy('.b84'), 100);

            $('.b85').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush', 'z-index':'101'});
            $('.bb85').css({'z-index':'1', 'opacity':'1'});

        };

        var b85 = document.getElementById('bb85');
        b85.onclick = function() {

            var myheight = $('.b85').height();
            var myString = -myheight + 'px';

            $('.b85').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
            setTimeout(()=>destroy('.b85'), 100);

            $('.b9').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush', 'z-index':'101'});
            $('.bb9').css({'z-index':'1', 'opacity':'1'});

            noinstructions = true;
            instruction1 = false;
            instruction2 = false;
            instruction3 = false;
            instructionlast = false;

            $('.dinfo, sinfo').css({'display':'inline'});
            setTimeout(()=>close(), 10000);
            $('.calctitlewrap').css({'margin-top':'-6px'});
            $('.input').css({'z-index':'101'});
            node.emit('showdonebutton');



            calcOn2 = 0;
            $('.calcwrap').css({'display':'none'});
            // $('.calculator').css({'box-shadow':'0px 0px 0px 0px black'});
            $('.calculatortitle').css({
                'border-bottom-left-radius':'90px',
                'border-bottom-right-radius':'90px',
                'padding-bottom':'0px',
                'box-shadow':'0px 3px 9px purple',
                'margin-bottom':'0px',
                'margin-top':'-5px',
                'width':'175px',
                'height':'83px'});
            calctext.innerHTML = 'Show <br> Calculator';

            goUp(615);


        };

        var b9 = document.getElementById('bb9');
        b9.onclick = function() {

            var myheight = $('.b9').height();
            var myString = -myheight + 'px';
            $('.calctitlewrap').css({'margin-top':'-20px'});

            $('.b9').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
            setTimeout(()=>destroy('.b9'), 100);

            close9 = false;
        };




        var close9 = true;
        var close = function(val) {
            if(close9) {
                $('.b9').css({'padding':'0px','opacity':'0','margin-top':val, 'z-index':'-10'});
                setTimeout(()=>destroy('.b9'), 100);
                $('.calctitlewrap').css({'margin-top':'-20px'});
            }

        }



    }

$('.calculatortitle').hover(
    function() {
        $('.calculatortitle').css({'box-shadow':'orange 0px 3px 9px 0px'});
    },
    function() {
        $('.calculatortitle').css({'box-shadow':'purple 0px 3px 9px 0px'});
    }
)

    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    ////////////////////////// NDOEGAME STUFF /////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////


    var generateMe = function() {
        return Math.ceil(Math.random() * 2) - 1;
    }

    var data = [];
    data = [generateMe()];

    somef(data);
}
