window.onload = function() {

    var e1;
    var node = parent.node;

    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    //////////////////////////////   tipbox   //////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    var myVal;

    node.on('case', function(myCase) {
        if(myCase === 'hetero') {
            myVal = 1520;
        } else {
            myVal = 1495;
        }
    })

    var b1 = document.getElementById('bb1');
    b1.onclick = function() {
        var myheight = $('.box1').height();
        var myString = -myheight + 'px';
        $('.box1').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
        setTimeout(()=>showRest(),10);
    };

    var showTip = function() {
        setTimeout(()=>showButton(), 2000);
        $('.mytip1').css({'display':'flex'});
        $('.tip').css({'display':'flex'});
        $('.rest').css({'display':'none'});
    }

    var showButton = function() {
        $('#bb1').css({'z-index':'1'});
    }

    var showRest = function() {
        $('.tip').css({'display':'none'});
        $('.rest').css({'display':'flex'});
        node.emit('setHeight', myVal);
        node.emit('countdown');
        node.emit('goup');
        setTimeout(()=>showDoneButton(), 10000);
    }

    var showDoneButton = function() {
        node.emit('showdonebutton');
    }

    node.on('notip', function() {
        setTimeout(()=>showRest(),500);
    })

    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    /////////////////////////  TIP  MESSAGE CREATION  //////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    var displayTip = document.getElementById('mytip1');
    var tipText;
    node.on('tip1', function(text) {
        showTip();
        tipText = text;
        displayTip.innerHTML = tipText;
    })

    var displayTip2 = document.getElementById('mytip2');
    var tipText2;
    node.on('tip2', function(text) {
        $('.mytip2').css({'display':'flex'});
        tipText2 = text;
        displayTip2.innerHTML = tipText2;
    })

    var displayTip3 = document.getElementById('mytip3');
    var tipText3;
    node.on('tip3', function(text) {
        $('.mytip3').css({'display':'flex'});
        tipText3 = text;
        displayTip3.innerHTML = tipText3;
    })

    var displayTip4 = document.getElementById('mytip4');
    var tipText4;
    node.on('tip4', function(text) {
        $('.mytip4').css({'display':'flex'});
        tipText4 = text;
        displayTip4.innerHTML = tipText4;
    })

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////   DATA GENERATION  ///////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////

    node.on('mydata', function(msg) {
        somef(msg);
    })

    node.on('askdecision', function(){
        node.emit('getdecision',e1)
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////  THE MAIN FUNCTION  ///////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////  THE MAIN FUNCTION  ///////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////  THE MAIN FUNCTION  ///////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    var goDown = function(val) {
        node.emit('godown', val);
    }

    var somef = function(myData) {

        var info = {};

        var data2Info = function(d) {
            info.me = d.s1[1];
            info.other = 1 - info.me
            // For easier read of the array
            var myGroup = d.s1[0]
            // efficiency is always index as 1
            var efficiency = 1;

            // s4 efficiency data
            // efi1 is always the active player's efi
            info.efi1 = d.s4[myGroup][efficiency][info.me];
            info.efi2 = d.s4[myGroup][efficiency][info.other];
        }

        data2Info(myData);


        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        /////////////////////////     CALCULATOR      //////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

        // first argument is always the observant subject
        var updatePie = function(a, b, me) {

            var x = a * info.efi1;
            var y = b * info.efi2;
            var actualData = [y, x];
            var actualOpacity = 1;
            var actualColors = [ 'rgb(225, 225, 225)', 'black'];



            if((x + y) === 0) {
                x = 1;
                y = 1;
            }

            var textArray = ['', '']
            var colorArray = ['black', 'black'];
            var colorWidth = [1, 1];
            var labelArray = [ 'Follower 2', 'Follower 1'];
            // rearrange the label array so that observent subject is the first one

            var myLabel = labelArray[me];
            labelArray.splice(me ,1);


            labelArray.splice(0, 0, myLabel);


            var actual = {
                values: [y, x],
                labels: labelArray,
                text: textArray,
                // textposition: 'outside',
                type: 'pie',
                sort: false,
                hoverinfo: 'percent+label',
                automargin: true,
                marker:{
                    colors: actualColors,
                },
                opacity: actualOpacity,
            };


            var layout = {
                autosize: false,
                height: 140,//200,
                width: 140,//200,
                font:{
                    size: 10
                },
                margin: {"t": 0, "b": 0, "l": 0, "r": 0},
                showlegend: false,
            };

            var data = [actual];

            Plotly.react('pie', data, layout, {displayModeBar: false});
        }

        // followerId 0 for the subject and other numbers of opponent followers
        var updateBarFollower = function(e, barId, followerIndex, axisOn) {
            var y = e;
            if(typeof(x) === 'undefined') x = 0;

            var myColors = ['black', 'rgb(225, 225, 225)'];

            var mColor = myColors[followerIndex];

            var mytextpos = 'outside';

            var somecolor = 'black';


            if(y>342) {
                mytextpos = 'inside';

                if(barId==='mybar') {
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
                // textanchor: 'right',
                textposition: mytextpos,
            }];


            var ticktextcolors = ['black', 'white'];
            var tindex = 1;

            var papercolors = ['white', 'rgb(35,79,30)', 'black', 'rgb(41, 0, 87)', 'rgb(225, 225, 225)'];
            var pindex = 1;


            if(barId==='mybar'){//darkgreen white
                tindex=1;
                pindex=1;
            }
            if(barId==='barf1'){
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
                    range: [0,400],
                    layer: 'below traces',
                    tickfont: {
                        size: 10,
                        color:ticktextcolors[tindex],
                    },
                    tickmode: 'array',
                    tickvals: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400],
                    ticktext: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400],
                    tickangle: -25,
                    ticks:'',
                    showline: false,
                    showgrid: axisOn,
                    showticklabels: axisOn,
                    gridcolor: "rgb(202, 202, 202)",
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


            var mytextpos = 'outside';

            var somecolor = 'black';



            if(y>384) {
                mytextpos = 'inside';

                if(barId==='bard') {
                    somecolor = 'white';
                }

            }

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
                    color: 'black',
                    line: {
                        color: 'none',
                        width: 0
                    }
                },
                text: [y],
                textfont: {
                    size: '35',
                    color: somecolor
                },
                // textanchor: 'right',
                textposition: mytextpos,
                cliponaxis: false,
            }];


            var ticktextcolors = ['black', 'white'];
            var tindex = 1;

            var papercolors = ['white', 'rgb(35,79,30)', 'black', 'rgb(41, 0, 87)', 'rgb(225, 225, 225)'];
            var pindex = 1;

            var layout = {
                barmode: 'group',
                paper_bgcolor: papercolors[pindex],
                // Setup Large
                height: 75,

                width: 1100,
                margin: {"t": 20, "b": 20, "l": 32, "r": 34},
                xaxis: {
                    side: 'top',
                    fixedrange: true,
                    autorange: false,
                    range: [0,400],
                    layer: 'below traces',


                    tickfont: {
                        size: 10,
                        color:ticktextcolors[tindex],
                    },
                    tickmode: 'array',
                    tickvals: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400],
                    ticktext: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400],
                    tickangle: -25,
                    ticks:'',
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

        var logistic2 = function(val , k) {
            var L = 1;
            var m = 0.5;
            var result;
            result= L / (1 + Math.exp(-k * (val - m)));
            return result;
        }

        var setEfficiencyBar2 = function(efi1, efi2) {

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


            var gapSize = 0.06;
            val1 = val1 - gapSize/2;
            val2 = val2 - gapSize/2;

            var f1 = {
                y: ['group 1'],
                x: [val1],
                type: 'bar',
                orientation: 'h',
                sort: false,
                hoverinfo: 'none',
                automargin: true,
                showlegend: false,
                marker: {
                    color: 'rgb(35,79,30)',
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



            var f2 = {
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
                    color: 'rgb(225, 225, 225)',
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


            var data = [f1, gap, f2];


            var layout = {
                barmode: 'stack',
                height: 40,
                width: 700,
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

            Plotly.react('efficiencyBar2', data, layout, {displayModeBar: false});
        }

        // leader global variables
        var e2;
        e1 = e2 = 0;

        var syncValues = function(eValue) {
            e1 = eValue;
        }

        var syncBars = function(value) {
            updateBarFollower(value, 'mybar', 0, false);
            updateBarDecision(value, 'bard', true);
        }

        var updateBarXAxis = function(barId, axisSwitch) {
            var update = {
                'xaxis.showgrid': axisSwitch,
                'xaxis.showticklabels': axisSwitch
            };
            Plotly.relayout(barId, update);
        }

        var losenetpayoff2 = document.getElementById('losenetpayoff2');
        var losenetpayoff1 = document.getElementById('losenetpayoff1');
        var heteroCase = false;

        var initialize = function() {

            var maintagdisplay = document.getElementById('whoAmI');
            maintagdisplay.innerHTML =  (info.me + 1);

            var maintagdisplay2 = document.getElementById('whoAmI2');
            var efiArray = [info.efi1, info.efi2];
            // first efi is the active player's efi
            var myEfi = efiArray[0];

            if(info.efi1 != info.efi2) {
                heteroCase = true;
                $('.hetero').css({'display':'block'});

                if(myEfi === 1) {
                    maintagdisplay2.innerHTML = '(Weak Follower)';
                } else {
                    maintagdisplay2.innerHTML = '(Strong Follower)';
                }

            }

            setEfficiencyBar2(info.efi1, info.efi2);

            updateBarFollower(0, 'mybar', 0, true);
            updateBarDecision(0, 'bard', true);

            updateBarFollower(0, 'barf1', 1, false);

            losenetpayoff2.innerHTML = '<strong>' +  -e1  + '</strong>' + ((e1> 1) ? ' tokens' : ' token');
            losenetpayoff1.innerHTML = '<strong>' +  -e1  + '</strong>' + ((e1> 1) ? ' tokens' : ' token');

            //first element always the actual subject
            updatePie(1, 0, info.me);
            updatePie(0, 0, info.me);


        }

        var updateAll = function() {
            updatePie(e1, e2, info.me);

            updateBarFollower(e1, 'mybar', 0, true)
            updateBarDecision(e1, 'dSlider', false);

            updateBarFollower(e2, 'barf1', 1, false)

        }

        initialize();


        var mySyncAll = function() {
            e2 = e1;
        }

        var syncAllBars = function() {
            mySyncAll();
            updateAll();
            // var updateBarFollower = function(e, barId, followerIndex, axisOn)
            updateBarFollower(e1, 'mybar', 0, true);
            updateBarFollower(e1, 'barf1', 1, false);
            updateBarDecision(e1, 'bard', true);

            $('#fSlider1').prop('value', e1);
            $('#fSlider1').change();
            $('#ofSlider1').prop('value', e1);
            $('#ofSlider1').change();
        }

        var calctext = document.getElementById('calctitle');
        calctext.innerHTML = 'Show <br> Calculator';
        var showCalc = document.getElementById('calculatortitle');
        var calcOn = 0

        showCalc.onclick = function() {
            if(!calcOn) {

                $('.arrows1').css({'opacity':'0'});
                $('.arrows2').css({'opacity':'1'});

                $('.mainpayoffwrap').css({'margin-bottom':'-24px', 'margin-top':'16px'});

                $('.centerwrap').css({'margin-bottom':'0px'});

                $('.bottomsection').css({'display':'flex'});

                $('.calculatortitle').css({
                    'border-bottom-left-radius':'0px',
                    'border-bottom-right-radius':'0px',
                    'box-shadow':'0px 1px 3px purple',
                    'margin-bottom':'-2px',
                    'margin-top':'-27px',
                    'width':'200px',
                    'height':'35px'});

                    // $('.calculator').css({'box-shadow':'0px 2px 3px 0px purple'});

                calctext.innerHTML = 'Close Calculator';
                syncAllBars();


                // $('.centerwrap').css({'transition':'0.35s','margin-bottom':'-20px'});

                if(heteroCase) {
                    goDown(1520);
                } else {
                    goDown(1495);
                }
            }
            if(calcOn) {

                $('.arrows1').css({'opacity':'1'});
                $('.arrows2').css({'opacity':'0'});

                $('.mainpayoffwrap').css({'margin-bottom':'-4px', 'margin-top':'50px'});

                $('.centerwrap').css({'margin-bottom':'50px'});

                $('.bottomsection').css({'display':'none'});

                $('.calculatortitle').css({
                    'border-bottom-left-radius':'90px',
                    'border-bottom-right-radius':'90px',
                    'box-shadow':'0px 3px 9px purple',
                    'margin-bottom':'-2px',
                    'margin-top':'-13px',
                    'width':'175px',
                    'height':'83px'});

                    // $('.calculator').css({'box-shadow':'0px 0px 0px 0px'});

                    calctext.innerHTML = 'Show <br/> Calculator';

                // $('.centerwrap').css({'margin-left':'0px','margin-bottom':'0px'});

                if(heteroCase) {
                    goDown(1520);
                } else {
                    goDown(1495);
                }

            }

            calcOn = 1 - calcOn;
        }

        //////// Slider-bar initiations ///////

        // DECISION SLIDER - BAR
        var dslider = document.getElementById('dSlider');
        var dvalue = 0;
        updateBarDecision(0, 'bard', false);


        // YOUR GROUP INITIATION
        var fslider1 = document.getElementById('fSlider1');
        var fvalue = 0;
        updateBarFollower(fvalue, 'mybar', 0, false);


        // OTHER FOLLOWERS INITIATION
        var ofslider1 = document.getElementById('ofSlider1');
        var ofvalue1 = 0;
        updateBarFollower(ofvalue1, 'barf1', 1, false);


        //DECISION
        dslider.oninput = function() {
            dvalue = parseFloat(dslider.value);
            e1 = dvalue
            syncBars(dvalue);
            syncValues(dvalue);
            updateAll();
            updateBarXAxis('bard', true);
            losenetpayoff2.innerHTML = '<strong>' + -e1  + '</strong>' + ((e1 > 1) ? ' tokens' : ' token');
            losenetpayoff1.innerHTML = '<strong>' + -e1  + '</strong>' + ((e1 > 1) ? ' tokens' : ' token');
            //synching sliders
            $('#fSlider1').prop('value', dvalue);
            $('#fSlider1').change();
        }


        // CALCULATOR

        //me (follower)
        fslider1.oninput = function() {
            fvalue = parseFloat(fslider1.value);
            e1 = fvalue;
            syncBars(fvalue);
            syncValues(fvalue);
            updateAll();
            updateBarXAxis('mybar', true);
            losenetpayoff2.innerHTML = '<strong>' + -e1  + '</strong>' + ((e1 > 1) ? ' tokens' : ' token');
            losenetpayoff1.innerHTML = '<strong>' + -e1  + '</strong>' + ((e1 > 1) ? ' tokens' : ' token');
            //synching sliders
            $('#dSlider').prop('value', fvalue);
            $('#dSlider').change();
        }

        //other follower 1
        ofslider1.oninput = function() {
            ofvalue1 = parseFloat(ofslider1.value);
            e2 = ofvalue1;
            updateAll();
            updateBarXAxis('barf1', true);
        }

        // HOVER AND FOCUSOUT EFFECT FOR XAXIS SHOWING UP

        $('.leadergroupleft').hover(
            function() {
                $('.left_title').css({'box-shadow':'0px 8px 8px 0px black'});
                // $('.leftmaintitle').css({'box-shadow':'0px 8px 8px 0px black'});
            },
            function(){
                $('.left_title').css({'box-shadow':'0px 1px 2px 0px black'});
                // $('.leftmaintitle').css({'box-shadow':'0px 2px 2px 0px black'});
            }
        )

        $('.leadergroupright').hover(
            function() {
                $('.right_title').css({'box-shadow':'0px 8px 8px 0px black'});
                // $('.rightmaintitle').css({'box-shadow':'0px 8px 8px 0px black'});
            },
            function(){
                $('.right_title').css({'box-shadow':'0px 1px 3px 0px black'});
                // $('.rightmaintitle').css({'box-shadow':'0px 2px 2px 0px black'});
            }
        )

        $('.input').hover(
            function() {
                $('.input').css({'box-shadow':'0px 7px 7px 0px orange'});
                $('.columnwrap').css({'box-shadow':'0px 7px 7px 0px orange'});
                // $('.bw, .bw2').css({'box-shadow':'0px 1px 4px 1px orange'});

            },
            function() {
                $('.input').css({'box-shadow':'0px 7px 7px 0px lime'});
                $('.columnwrap').css({'box-shadow':'0px 7px 7px 0px lime'})
                // $('.bw, .bw2').css({'box-shadow':'0px 1px 4px 1px lime'});
            }
        );



        updateBarXAxis('bard', true)
        $('#dSlider').hover(
            function() {
                setTimeout(()=>updateBarXAxis('bard', true), 250);
                // $('.yourdecisiontext2').css({'color':'red'});
                // $('.yourdecisiontext').css({'color':'red'});
                $('#fSlider1, #dSlider').css({'background':'red', 'opacity':'1', 'margin-top': '51px'});
                $('#fSlider1').addClass('newdSlider');
            },
            function() {
                // setTimeout("updateBarXAxis('bard', false)", 1000);
                // $('.yourdecisiontext2').css({'color':'white'});
                // $('.yourdecisiontext').css({'color':'white'});
                $('#fSlider1, #dSlider').css({'background':'gray', 'opacity':'0', 'margin-top': '35px'});
                $('#fSlider1').removeClass('newdSlider');

            }
        );

        $('#fSlider1').hover(
            function() {
                setTimeout(()=>updateBarXAxis('mybar', true), 250);
                $('.columnwrap').css({'box-shadow':'0px 7px 7px 0px orange'});
                // $('.yourdecisiontext2').css({'color':'red'});
                // $('.yourdecisiontext').css({'color':'red'});
                $('#dSlider, #fSlider1').css({'background':'red', 'opacity':'1', 'margin-top': '51px'});
                $('#dSlider').addClass('newdSlider');
            },
            function() {
                $('.columnwrap').css({'box-shadow':'0px 7px 7px 0px lime'})
                // setTimeout(()=>updateBarXAxis('mybar', false), 500);
                $('.yourdecisiontext2').css({'color':'white'});
                // $('.yourdecisiontext').css({'color':'white'});
                $('#dSlider, #fSlider1').css({'background':'gray', 'opacity':'0', 'margin-top': '35px'});
                $('#dSlider').removeClass('newdSlider');
            }
        );


        $('#ofSlider1').hover(
            function() {
                setTimeout(()=>updateBarXAxis('barf1', true), 250);
                $('.rightsubtitletext').css({'color':'red'});
                $('#ofSlider1')
                .css({'background':'red', 'opacity':'1', 'margin-top': '51px'});
            },
            function() {
                setTimeout(()=>updateBarXAxis('barf1', false), 500);
                $('.rightsubtitletext').css({'color':'black'});
                $('#ofSlider1')
                .css({'background':'gray', 'opacity':'0', 'margin-top': '35px'});
            }
        );



        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////   SEXPLAIN   ////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////


        var stageshortTextDisplay = document.getElementById('stageshortexplanation');


        var changeMap2 = function(mystageIndex) {
            $('.b1, .1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
            .css({'background-color':'white'});

            if(mystageIndex===1) {

                $('.b1').css({'border':'5px solid black', 'background-color':'yellow',  'opacity':'1'});
                $('.1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1'});


                stageshortTextDisplay.innerHTML = '<br><br>You are <strong>randomly</strong> assigned to a role, group and an opposing group';

            }
            if(mystageIndex===2) {

                $('.b2').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
                $('.1a2, .b1, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1'});
                stageshortTextDisplay.innerHTML = '<strong><u>Help/Sabotage Decision I</u></strong> <br><br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader.';

            }
            if(mystageIndex===3) {

                $('.b3').css({'border':'5px solid black', 'background-color':'yellow',  'opacity':'1'});
                $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1'});
                stageshortTextDisplay.innerHTML = '<strong><u>Leaders\' Contest I</u></strong><br><br>Winner <strong>continues as leader</strong>, receives <strong>1000</strong> tokens and proceeds to Leaders\' Contest <strong>II</strong>.' +
                '<br>Loser <strong>becomes a follower</strong> and proceeds to Followers\' Help/Sabotage Decision <strong>II</strong>.';
            }
            if(mystageIndex===4) {

                $('.b4').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
                $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b3, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1'});
                stageshortTextDisplay.innerHTML = '<br><strong><u>Followers\' Contest</u></strong> <br><br><strong>Defeated leaders\' followers</strong> compete for the <strong>new</strong> leader role of their group.';

            }
            if(mystageIndex===5) {

                $('.b5').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
                $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b3, .4a5, .b4, .5a6, .b6')
                .css({'opacity':'0.1'});
                $('.5a6, .b6, .w34').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
                $('.w34').css({'border':'4px double'});
                stageshortTextDisplay.innerHTML = '<strong><u>Help/Sabotage Decision II</u></strong> <br><br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader.';

            }
            if(mystageIndex===6) {
                $('.b6').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
                $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b3, .4a5, .b4, .5a6, .b5')
                .css({'opacity':'0.1'});
                stageshortTextDisplay.innerHTML = '<strong><u>Leaders\' Contest I</u></strong><br><br> Winner receives <strong>1000</strong> tokens.' +
                '<br><br><strong>The round ends.</strong>';
            }

        }

        var changeMap = function(mystageIndex) {
            $('.b1, .1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
            .css({'background-color':'white'});

            if(mystageIndex===1) {
                $('.b1').css({'border':'5px solid lime', 'opacity':'1', 'background-color':'white'});
                $('.1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)', 'background-color':'white'});

                $('.w34, .l34').css({'border':'double 4px rgb(160, 160, 160)'});

                stageshortTextDisplay.innerHTML = 'You are <strong>randomly</strong> assigned to a role, group and an opposing group';
                    }
            if(mystageIndex===2) {
                $('.b1').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b2').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2').css({'opacity':'1'});
                $('.2a3, .b3').css({'opacity':'0.1'});
                $('.b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.w34, .l34').css({'border':'double 4px rgb(160, 160, 160)'});

                stageshortTextDisplay.innerHTML = '<strong><u>Help/Sabotage Decision I</u></strong> <br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader.';
            }
            if(mystageIndex===3) {
                $('.b1, .b2').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b3').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2, .2a3').css({'opacity':'1'});
                $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.w34, .l34').css({'border':'double 4px rgb(160, 160, 160)'});

                stageshortTextDisplay.innerHTML = '<strong><u>Leaders\' Contest I</u></strong> <br> Winner <strong>continues as leader</strong> and receives <strong>1000</strong> tokens.';
            }
            if(mystageIndex===4) {
                $('.b1, .b2, .b3, .l34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b4').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2, .2a3, .3al, .la4').css({'opacity':'1'});
                $('.3aw, .w34, .wa5, .5a6, .b5, .b6, .4a5, .5a6')
                .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.w34').css({'border':'double 4px rgb(160, 160, 160)'});
                $('.l34').css({'border':'double 4px rosybrown'});

                stageshortTextDisplay.innerHTML = '<br><br><strong>Defeated leaders\' followers</strong> compete for the <strong>new</strong> leader role of their group.';
            }
            if(mystageIndex===5) {
                $('.b1, .b2, .b3, .l34, .b4').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b5').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'0.1'});
                $('.1a2, .2a3, .3al, .la4, .4a5').css({'opacity':'1'});
                $('.5a6, .b6, .w34').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.w34').css({'border':'double 4px rgb(160, 160, 160)'});
                $('.l34').css({'border':'double 4px rosybrown'});

                stageshortTextDisplay.innerHTML = '<br><strong><strong><u>Help/Sabotage Decision II</u></strong></strong> <br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader. <br> <strong>Defeated leader of stage 3</strong> is now one of the followers.';
            }
            if(mystageIndex===6) {
                $('.b1, .b2, .b3, .w34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b5').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2, .2a3, .3al, .la4, .4a5').css({'opacity':'0.1'});
                $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'1'});
                $('.5a6, .b6, .l34, .b4').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.l34').css({'border':'double 4px rgb(160, 160, 160)'});
                $('.w34').css({'border':'double 4px rosybrown'});

                stageshortTextDisplay.innerHTML = '<strong><strong><u>Help/Sabotage Decision II</u></strong></strong> <br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader. <br> Your group\'s followers are the <strong>same followers</strong> from stage <strong>2</strong>.';
                // stagenumberDisplay.innerHTML = 5;
            }
            if(mystageIndex===7) {
                $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.w34').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
                $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'0.1'});
                $('.1a2, .2a3, .3al, .la4, .4a5, .5a6').css({'opacity':'1'});
                $('.b6').css({'border':'5px solid lime', 'opacity':'1'});

                $('.w34').css({'border':'double 4px rgb(160, 160, 160)'});
                $('.l34').css({'border':'double 4px rosybrown'});

                stageshortTextDisplay.innerHTML = '<strong><strong><u>Leaders\' Contest II</u></strong></strong> <br> Winner receives <strong>1000</strong> tokens. <br> Your group\'s leader is the <strong>winner</strong> of Followers\' Contest (stage 4).';
                // stagenumberDisplay.innerHTML = 6;
            }
            if(mystageIndex===8) {
                $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b6').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2, .2a3, .3al, .la4, .4a5, .5a6').css({'opacity':'0.1'});
                $('.1a2, .2a3, .3aw, .wa5, .5a6').css({'opacity':'1'});
                $('.l34, .b4').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.l34').css({'border':'double 4px rgb(160, 160, 160)'});
                $('.w34').css({'border':'double 4px rosybrown'});

                stageshortTextDisplay.innerHTML = '<strong><strong><u>Leaders\' Contest II</u></strong></strong> <br> Winner receives <strong>1000</strong> tokens. <br> Your group\'s leader is the <strong>same leader</strong> from stage <strong>3</strong>, Leaders\' Contest I.';
                // stagenumberDisplay.innerHTML = 6;
            }
        }

        var stageIndex;
        stageIndex=4;
        changeMap(4);


        $('.b1, .b2, .b3, .b4, .b5, .b6').css({'transition-delay':'0s', 'transition':'1s'});
        $('.x1, .x2, .x3, .x4, .x5, .x6').css({'cursor':'pointer'});


        $('.x1').hover(
            function() {
                changeMap2(1);
            },
            function() {
                changeMap(stageIndex);
            }
        );

        $('.x2').hover(
            function() {
                changeMap2(2);
            },
            function() {
                changeMap(stageIndex);
            }
        );

        $('.x3').hover(
            function() {
                changeMap2(3);
            },
            function() {
                changeMap(stageIndex);
            }
        );

        $('.x4').hover(
            function() {
                changeMap(4);
            },
            function() {
                changeMap(stageIndex);
            }
        );

        $('.x5').hover(
            function() {
                changeMap2(5);
            },
            function() {
                changeMap(stageIndex);
            }
        );

        $('.x6').hover(
            function() {
                changeMap2(6);
            },
            function() {
                changeMap(stageIndex);
            }
        );
    }
}
