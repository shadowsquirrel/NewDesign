window.onload = function() {

    var s1,h1;
    var node = parent.node;
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    //////////////////////////////   tipbox   //////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    var showTip = function() {
        setTimeout(()=>showButton(), 2000);
        $('.mytip1').css({'display':'flex'});
        $('.tip').css({'display':'flex'});
        $('.rest').css({'display':'none'});
    }
    var showButton = function() {
        $('#bb1').css({'z-index':'1'});
    }

    var b1 = document.getElementById('bb1');
    b1.onclick = function() {
        var myheight = $('.box1').height();
        var myString = -myheight + 'px';
        $('.box1').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
        setTimeout(()=>showRest(),10);
    };

    var showRest = function() {
        $('.tip').css({'display':'none'});
        $('.rest').css({'display':'flex'});
        node.emit('setHeight', 1870);
        node.emit('countdown');
        node.emit('goup');
        setTimeout(()=>showDoneButton(), 10000);
    }

    var showDoneButton = function() {
        node.emit('showdonebutton');
    }

    node.on('notip', function() {
        setTimeout(()=>showRest(),50);
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

    var goDown = function(val) {
        node.emit('godown', val);
    }

    node.on('askdecision', function(){
        node.emit('getdecision',s1, h1)
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

    var somef = function(myData) {

        var info = {};

        var data2Info = function(d) {

            // For ease of notation
            var ourGroup = d.s1[0];
            var theirGroup = 1 - ourGroup;
            var help = 0;
            var sabo = 1;
            var efforts = 0;
            var efficiency = 1;
            var s3Results = 1;
            var s4Results = 2;

            // STAGE 1
            info.me = d.s1[1];
            info.role  = (d.s1[1] === -1) ? 0 : 1;


            // STAGE 2
            info.s1 = d.s2[ourGroup][sabo][0];
            info.s2 = d.s2[ourGroup][sabo][1];
            info.h1 = d.s2[ourGroup][help][0];
            info.h2 = d.s2[ourGroup][help][1];

            info.sarray = [info.s1, info.s2];
            info.harray = [info.h1, info.h2];

            info.os1 = d.s2[theirGroup][sabo][0];
            info.os2 = d.s2[theirGroup][sabo][1];
            info.oh1 = d.s2[theirGroup][help][0];
            info.oh2 = d.s2[theirGroup][help][1];

            info.osarray = [info.os1, info.os2];
            info.oharray = [info.oh1, info.oh2];


            // STAGE 3
            info.efo = d.s3[efforts][ourGroup];
            info.oefo = d.s3[efforts][theirGroup];
            info.s3won = d.s3[s3Results][ourGroup];


            // STAGE 4
            info.e1 = d.s4[ourGroup][efforts][0];
            info.e2 = d.s4[ourGroup][efforts][1];
            info.efi1 = d.s4[ourGroup][efficiency][0];
            info.efi2 = d.s4[ourGroup][efficiency][1];
            info.earray = [info.e1, info.e2];
            info.s4winner = d.s4[ourGroup][s4Results].indexOf(true);

            info.oe1 =  d.s4[theirGroup][efforts][0];
            info.oe2 = d.s4[theirGroup][efforts][1];
            info.oearray = [info.oe1, info.oe2];
            info.os4winner = d.s4[theirGroup][s4Results].indexOf(true);
        }

        data2Info(myData);

        info.ts = function() {
            return (info.s1 + info.s2);
        }
        info.th = function() {
            return (info.h1 + info.h2);
        }
        info.ots = function() {
            return (info.os1 + info.os2);
        }
        info.oth = function() {
            return (info.oh1 + info.oh2);
        }
        info.efi = function() {
            return (1 + info.th()) / (1 + info.ts());
        }
        info.oefi = function() {
            return (1 + info.oth()) / (1 + info.ots());
        }
        info.pwin = function() {
            return (info.efo * info.efi()) / ((info.efo * info.efi()) + (info.oefo * info.oefi()) );
        }

        var maxSabo = function() {
            return -(Math.max(info.s1, info.s2, info.os1, info.os2));
        }
        var maxHelp = function() {
            return (Math.max(info.h1, info.h2, info.oh1, info.oh2));
        }
        var max = function() {
            return Math.max(-maxSabo(), maxHelp());
        }
        var maxTotalHelp = function() {
            return (Math.max(info.th(), info.oth()));
        }
        var maxTotalSabo = function() {
            return -(Math.max(info.ts(), info.ots()));
        }
        var maxTotal = function() {
            return Math.max(-maxTotalSabo(), maxTotalHelp());
        }

        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////   Info Graphics Methods ///////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

        var nzt = function(val) {
            return (val != 0) ? val : '';
        }

        // S2
        var updateBarHelpInfo = function(a, b, barId, ourGroup, me, myFirstRole, s3won, s4winner, os4winner) {

            var x = a;
            var y = b;

            // var myData = [x,y];
            var lightblue = 'rgb(200,200,255)';
            var blue = 'rgb(140, 140, 255)';
            var ourColor = ourGroup ? blue : lightblue;

            var colorArray = ['', '',];
            var colorWidth = [0, 0];

            if(ourGroup) {
                colorArray[me] = 'black';
                colorWidth[me] = 5;
                if(!s3won) {
                    if(myFirstRole === 0) {
                        colorWidth[me] = 0;
                    }
                    colorArray[s4winner] = '#6dc174';
                    colorWidth[s4winner] = 5;
                }
            } else if(!ourGroup && s3won) {
                colorArray[os4winner] = '#6dc174';
                colorWidth[os4winner] = 5;
            }

            var data = [
                {
                    y: [x, y],
                    x: [1, 2],
                    type: 'bar',
                    sort: false,
                    hoverinfo: 'none',
                    automargin: true,
                    showlegend: false,
                    marker:{
                        color: ourColor,
                        line: {
                            color: colorArray,
                            width: colorWidth,
                        }
                    },
                    text: [nzt(x), nzt(y)],
                    textposition: 'outside',
                    textfont: {
                        size: '14',
                        color: colorArray,
                    },
                    cliponaxis: false,
                    opacity: 1,
                }
            ];

            var layout = {
                barmode: 'group',
                height: 175,
                width: 60,
                margin: {"t": 20, "b": 0, "l": 0, "r": 0},
                yaxis: {
                    showgrid: false,
                    fixedrange: true,
                    autorange: false,
                    range: [0,max()]
                },
                xaxis: {
                    fixedrange: true,
                    showline: false,
                    showgrid: false,
                    ticks: '',
                    showticklabels: false,
                    // tickangle: -90,
                },
                bargap: 0.25,
            };

            Plotly.react(barId, data, layout, {displayModeBar: false});
        }

        var updateBarSaboInfo = function(a, b, barId, ourGroup, me, myFirstRole, s3won, s4winner, os4winner) {
            var x = -a;
            var y = -b;


            var lightred = 'rgb(255,200,200)';
            var red = 'rgb(255 140, 140)';
            var ourColor = ourGroup ? red : lightred;

            var colorArray = ['', ''];
            var colorWidth = [0, 0];

            if(ourGroup) {
                colorArray[me] = 'black';
                colorWidth[me] = 5;
                if(!s3won) {
                    if(myFirstRole === 0) {
                        colorWidth[me] = 0;
                    }
                    colorArray[s4winner] = '#6dc174';
                    colorWidth[s4winner] = 5;
                }
            } else if(!ourGroup && s3won) {
                colorArray[os4winner] = '#6dc174';
                colorWidth[os4winner] = 5;
            }


            var data = [{
                y: [x, y],
                name: ['Follower 1', 'Follower 2'],
                type: 'bar',
                sort: false,
                hoverinfo: 'none',
                automargin: true,
                showlegend: false,
                marker:{
                    color: ourColor,
                    line: {
                        color: colorArray,
                        width: colorWidth,
                    }
                },
                text: [a, b],
                textfont: {
                    size: '14',
                    color: colorArray,
                },
                textposition: 'outside',
                cliponaxis: false,
            }];

            var layout = {
                barmode: 'group',
                height: 175,
                width: 60,
                margin: {"t": 0, "b": 20, "l": 0, "r": 0},
                yaxis: {
                    showgrid: false,
                    fixedrange: true,
                    autorange: false,
                    range: [-max(),0]
                },
                xaxis: {
                    fixedrange: true,
                    showline: false,
                    showgrid: false,
                    ticks: '',
                    showticklabels: false,
                },
                bargap: 0.25,
            };

            Plotly.react(barId, data, layout, {displayModeBar: false});
        }

        var updateBarTotalHelpInfo = function(a, b, barId) {
            var x = a;
            var y = b;

            var lightblue = 'rgb(200,200,255)';
            var blue = 'rgb(140, 140, 255)';

            var data = [
                {
                    y: [x, y],
                    name: ['Group 1', 'Group 2'],
                    type: 'bar',
                    sort: false,
                    hoverinfo: 'none',
                    automargin: true,
                    showlegend: false,
                    marker:{
                        color: [blue, lightblue],
                    },
                    text: [nzt(x), nzt(y)],
                    textposition: 'outside',
                    textfont: {
                        size: '14'
                    },
                    cliponaxis: false,
                    opacity: 1,
                }
            ];

            var layout = {
                barmode: 'group',
                height: 175,
                width: 120,
                margin: {"t": 20, "b": 0, "l": 0, "r": 0},
                yaxis: {
                    showgrid: false,
                    fixedrange: true,
                    autorange: false,
                    range: [0,maxTotal()]
                },
                xaxis: {
                    fixedrange: true,
                    showline: false,
                    showgrid: false,
                    ticks: '',
                    showticklabels: false,
                },
                bargap: 0.25,
            };

            Plotly.react(barId, data, layout, {displayModeBar: false});
        }

        var updateBarTotalSaboInfo = function(a, b, barId) {
            var x = -a;
            var y = -b;

            var lightred = 'rgb(255,200,200)';
            var red = 'rgb(255 140, 140)';



            var data = [{
                y: [x, y],
                name: ['Group 1', 'Group 2'],
                type: 'bar',
                sort: false,
                hoverinfo: 'none',
                automargin: true,
                showlegend: false,
                marker:{
                    color: [red, lightred],
                },
                text: [a, b],
                textfont: {
                    size: '14',
                },
                textposition: 'outside',
                cliponaxis: false,
            }];

            var layout = {
                barmode: 'group',
                height: 175,
                width: 120,
                margin: {"t": 0, "b": 20, "l": 0, "r": 0},
                yaxis: {
                    showgrid: false,
                    fixedrange: true,
                    autorange: false,
                    range: [-maxTotal(),0]
                },
                xaxis: {
                    fixedrange: true,
                    showline: false,
                    showgrid: false,
                    ticks: '',
                    showticklabels: false,
                },
                bargap: 0.25,
            };

            Plotly.react(barId, data, layout, {displayModeBar: false});
        }

        // S3
        var updatePieInfo = function(a, barId, myFirstRole, s3won) {

            var x = a;
            var y = 1-a;

            if((x + y) === 0) {
                x = 1;
                y = 1;
            }

            var ourText = s3won ? ['Lost', 'Won'] : ['Won', 'Lost'];


            var colorArray = ['', ''];
            var colorWidth = [0, 0];


            colorWidth[1] = 0;
            colorArray[1] = '';


            var data = [{
                values: [y, x],
                labels: ['Opposing Leader', 'Your Leader'],
                textposition: "outside",
                text: ourText,
                type: 'pie',
                sort: false,
                hoverinfo: 'percent+label',
                automargin: true,
                marker:{
                    colors: ['rgb(225, 225, 225)', 'black'],
                    line: {
                        color: colorArray,
                        width: colorWidth,
                    }
                }
            }];

            var layout = {
                autosize: false,
                height: 200,
                width: 200,
                font:{
                    size: 14
                },
                margin: {"t": 40, "b": 40, "l": 60, "r": 60},
                showlegend: false,
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

        var updateEfficiencyBarInfo = function(efi1, efi2, barId) {

            //regardless of whether the old leader or lost follower is looking
            // at this graph they should see the same thing
            // black guy with lime countour is our leader or me
            // so no need to further identify the function


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

            var valgap = 0.08;
            val2 = val2 - 0.04;
            val1 = val1 - 0.04;

            var leader1 = {
                y: ['group 1'],
                x: [val1],
                type: 'bar',
                orientation: 'h',
                sort: false,
                hoverinfo: 'none',
                automargin: true,
                showlegend: false,
                fixedrange: true,
                cliponaxis: false,
                marker: {
                    color: 'black',
                    line: {
                        color: '',
                        width: 0,
                    }
                },
                text: myText,
                textposition: 'inside',
                insidetextanchor: 'middle',
                textfont: {
                    color: 'white',
                    size: '14'
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
                fixedrange: true,
                cliponaxis: false,
                marker: {
                    color: 'rgb(225, 225, 225)',
                },
                text: myText2,
                textposition: 'inside',
                insidetextanchor: 'middle',
                textfont: {
                    size: '14'
                },
            };

            var gap = {
                y: ['group 1'],
                x: [valgap],
                type: 'bar',
                orientation: 'h',
                sort: false,
                hoverinfo: 'none',
                automargin: true,
                showlegend: false,
                fixedrange: true,
                cliponaxis: false,
                marker: {
                    color: 'white',
                    line: {
                        color: 'white',
                        width: 4,
                    }
                },
                text: ':',
                textposition: 'inside',
                insidetextanchor: 'middle',
                textfont: {
                    color: 'black',
                    size: '14'
                },
            };

            var data = [leader1, gap, leader2];

            var layout = {
                barmode: 'stack',
                height: 60,
                width: 200,
                margin: {"t": 0, "b": 20, "l": 0, "r": 0},
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

            Plotly.react(barId, data, layout, {displayModeBar: false});
        }

        var updateBarEffortInfo = function(a, b, barId, myFirstRole) {
            var x = a;
            var y = b;


            var colorArray = ['', ''];
            var colorWidth = [0, 0];

            // if you are the leader and seeing this screen that means you lost
            // so you will see what happened in stage 3
            // lime countour should always be there regardless of whether the
            // subject is the old leader or the lost follower

            // if(myFirstRole===0) {
                colorWidth[0] = 4;
                colorArray[0] = '';
                // $('.yourleaderbox').css({'border':'3px solid lime'});
            // }


            // just to get rid of the error message above
            if(myFirstRole === 0) {
                console.log('we are setting it up for a leader');
            }

            var data = [
                {
                    y: [x, y],
                    name: ['Your Leader', 'Opposing Leader'],
                    type: 'bar',
                    sort: false,
                    hoverinfo: 'none',
                    automargin: true,
                    showlegend: false,
                    marker:{
                        color: ['black', 'rgb(225, 225, 225)'],
                        line: {
                            color: colorArray,
                            width: colorWidth,
                        }
                    },
                    text: [x, y],
                    textposition: 'outside',
                    textfont: {
                        size: '14'
                    },
                    cliponaxis: false,
                    opacity: 1,
                }
            ];

            var layout = {
                barmode: 'group',
                height: 120,
                width: 250,
                margin: {"t": 40, "b": 0, "l": 30, "r": 30},
                yaxis: {
                    fixedrange: true,
                    autorange: false,
                    range: [0,800],
                    showline: false,
                    showgrid: false,
                    ticks: '',
                    showticklabels: false,
                },
                xaxis: {
                    fixedrange: true,
                    showline: false,
                    showgrid: false,
                    ticks: '',
                    showticklabels: false,
                },
                bargap: 0.35,
            };

            Plotly.react(barId, data, layout, {displayModeBar: false});
        }


        var reverse = function(val) {
            var temp = [val[1],val[0]];
            return temp;
        }
        // S4
        var updateS4Info = function(a, aefi, b, befi, barId, me, myFirstRole, s4winner) {

            var x = a * aefi;
            var y = b * befi;

            if((x + y) === 0) {
                x = 1;
                y = 1;
            }

            //MAKE SURE THAT WINNER IS ALWAYS THE GUY ON THE RIGHT!!!
            var myData = [x, y];
            var labelArray = ['Follower 1', 'Follower 2'];
            var textArray = ['', ''];



            // if a follower is looking at this graph then
            // convert the data so that the first data point is the
            // follower who is looking.
            // since he is looking he lost
            // so by definition he will be black with no countour
            // and the second guy will be gray with red counter (winner follower)
            if(myFirstRole === 1) {
                // if I am the second follower then change the data ordering.
                if(me !== 0) {
                    myData = [y, x];
                    labelArray = ['Follower 2', 'Follower 1'];
                }

                textArray[0] = 'You';
                textArray[1] = 'Won';
            }



            // if leader is looking then let's make sure that
            // we still have the same coloring for winner follower and loser
            // since from follower's point of view winner follower is gray
            // her it should be the same thing
            // since we are only manipulating the data let's manipulate it
            // so that the loser is the first data point and the winner is the second
            // data point
            if(myFirstRole===0) {
                if(s4winner===0) {
                    myData = [y,x];
                }
            }





            var data = [{
                values: reverse(myData),
                labels: reverse(labelArray),
                text: reverse(textArray),
                textposition: 'outside',
                type: 'pie',
                sort: false,
                hoverinfo: 'percent+label',
                automargin: true,
                marker:{
                    // second guy is always the winner
                    // Winner is always the gray.
                    colors: reverse(['black', 'rgb(225, 225, 225)']),
                    line: {
                        // winner has always red contor
                        color: reverse(['black', '#6dc174']),
                        width: reverse([0,4]),
                    }
                }
            }];

            var layout = {
                height: 200,
                width: 200,
                autosize:false,
                font:{
                    size: 14
                },
                margin: {"t": 40, "b": 40, "l": 60, "r": 60},
                showlegend: false,
            };

            Plotly.react(barId, data, layout, {displayModeBar: false});
        }

        var updateEfficiencyBarInfo2 = function(efi1, efi2, barId, me, myFirstRole, s4winner) {


            // make sure that the left bar is black this is also the bar that
            // represents our player.

            //black is always the loser and gray with red countour is always the winner
            // this must be true for both leader and follower

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

            var valgap = 0.1;
            val2 = val2 - 0.05;
            val1 = val1 - 0.05;


            // first element represents the efficiency of follower 1 and the second
            // represents the efficiency of follower 2
            var valArray = [val1, val2];
            var textArray = [myText, myText2];




            //me can be either 0 or 1 so the other will be 1 or 0 accordingly
            var other = (me === 0) ? 1 : 0;




            // if the subject was the leader then the me and other index is irrelevant
            // let's fixed those values for any potential weird results
            // myFirstRole=0 means leader myFirstRole=1 means follower
            // we fix me to 0 and me must represent the loser
            // so let's switch the data points to match this.
            // if the winner is the follower with index 0 move him to index 1
            // this way the winner will again be gray with red countor.
            if(myFirstRole===0) {
                if(s4winner === 0) {
                    valArray = [val2, val1];
                    textArray = [myText2, myText];
                }
                me = 0;
                other = 1;
            }



            // first data point will always represent me
            // me is always black with no countour
            // me for follower always the loser so we are good
            var leader1 = {
                y: ['group 1'],
                x: [valArray[me]],
                type: 'bar',
                orientation: 'h',
                sort: false,
                hoverinfo: 'none',
                automargin: true,
                showlegend: false,
                fixedrange: true,
                cliponaxis: false,
                marker: {
                    color: 'black',
                    line: {
                        color: 'black',
                        width: 4,
                    }
                },
                text: textArray[me],
                textposition: 'inside',
                insidetextanchor: 'middle',
                textfont: {
                    color: 'white',
                    size: '14'
                },
            };

            // second data point will always represent the other
            // other is always lightgray with red countour
            var leader2 = {
                y: ['group 1'],
                x: [valArray[other]],
                type: 'bar',
                orientation: 'h',
                sort: false,
                hoverinfo: 'none',
                automargin: true,
                showlegend: false,
                fixedrange: true,
                cliponaxis: false,
                marker: {
                    color: 'rgb(225, 225, 225)',
                    line: {
                        color: '#6dc174',
                        width: 4,
                    }
                },
                text: textArray[other],
                textposition: 'inside',
                insidetextanchor: 'middle',
                textfont: {
                    size: '14'
                },
            };

            var gap = {
                y: ['group 1'],
                x: [valgap],
                type: 'bar',
                orientation: 'h',
                sort: false,
                hoverinfo: 'none',
                automargin: true,
                showlegend: false,
                fixedrange: true,
                cliponaxis: false,
                marker: {
                    color: 'white',
                    line: {
                        color: 'white',
                        width: 4,
                    }
                },
                text: ': ',
                textposition: 'inside',
                insidetextanchor: 'middle',
                textfont: {
                    color: 'black',
                    size: '14'
                },
            };

            var data = [leader1, gap, leader2];

            var layout = {
                barmode: 'stack',
                height: 60,
                width: 200,
                margin: {"t": 0, "b": 20, "l": 0, "r": 0},
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

            Plotly.react(barId, data, layout, {displayModeBar: false});
        }

        var updateBarEffortInfo2 = function(a, b, barId, me, myFirstRole, s4winner) {
            var x = a;
            var y = b;

            // same logic second guy should represent the winner gray with red countor

            var colorArray = ['', ''];
            var colorWidth = [0, 0];
            var nameArray = ['Follower 1', 'Follower 2'];

            colorWidth[1] = 4;
            colorArray[1] = '#6dc174';

            // [follower 1 effort, follower 2 effort]
            // this is the initial setup for the data
            // if the lost follower is the first follower then no change
            // else reverse the order
            // this requires different indexes to identify for
            // lost leader and lost follower point of views
            var myData = [x, y];


            // LOST FOLLOWER POINT OF VIEW
            // I should always be represented by black and as the first guy
            // so if I am follower 2 then change the data order while keeping
            // the coloring for the data the same: first player is black no countour
            // second player is gray with red countour ->the winner of followers' contest
            if(myFirstRole===1) { //if I am the follower
                if(me!==0) {//if i am the second follower since I lost and
                    // since the first data point must represent the lost follower
                    // change the data point and nametags
                    myData = [y,x];
                    nameArray = ['Follower 2', 'Follower 1'];
                }
            }

            // LOST LEADER POINT OF VIEW
            if(myFirstRole===0) { //if I am the lost leader
                if(s4winner===0) { // if follower 1 is the winnner
                    // then again change the data points so that follower 2 is the first
                    myData = [y,x];
                    nameArray = ['Follower 2', 'Follower 1'];
                }
            }


            var data = [
                {
                    y: myData,
                    name: ['Your Leader', 'Opposing Leader'],
                    type: 'bar',
                    sort: false,
                    hoverinfo: 'none',
                    automargin: true,
                    showlegend: false,
                    marker:{
                        color: ['black', 'rgb(225, 225, 225)'],
                        line: {
                            color: colorArray,
                            width: colorWidth,
                        }
                    },
                    text: myData,
                    textposition: 'outside',
                    textfont: {
                        size: '14'
                    },
                    cliponaxis: false,
                    opacity: 1,
                }
            ];

            var layout = {
                barmode: 'group',
                height: 120,
                width: 160,
                margin: {"t": 40, "b": 0, "l": 30, "r": 30},
                yaxis: {
                    fixedrange: true,
                    autorange: false,
                    range: [0,400],
                    showline: false,
                    showgrid: false,
                    ticks: '',
                    showticklabels: false,
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

            Plotly.react(barId, data, layout, {displayModeBar: false});
        }





        // debug


        // info.me = 0; //only for followers: 0->follower 1
        // info.role = 1; //1 for follower 0 for leader
        // info.s3won = 0;
        // info.s4winner = 1; //for lost leader only (only matters if leader lost in s3 and role is leader)





        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////     Info Section     //////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

        updateBarHelpInfo(info.h1, info.h2, 's2helpbarg1', true, info.me, info.role, info.s3won, info.s4winner, info.os4winner);
        updateBarSaboInfo(info.s1, info.s2, 's2sabobarg1', true, info.me, info.role, info.s3won, info.s4winner, info.os4winner);

        updateBarTotalHelpInfo(info.th(), info.oth(), 's2totalhelpbar');
        updateBarTotalSaboInfo(info.ts(), info.ots(), 's2totalsabobar');

        updatePieInfo(info.pwin(), 's3pie', info.role, info.s3won);
        updateBarEffortInfo(info.efo, info.oefo, 's3efobar', info.role);
        updateEfficiencyBarInfo(info.efi(), info.oefi(), 's3efibar');

        updateS4Info(info.e1, info.efi1, info.e2, info.efi2, 's4pie', info.me, info.role, info.s4winner);
        updateBarEffortInfo2(info.e1, info.e2, 's4efobar', info.me, info.role, info.s4winner);
        updateEfficiencyBarInfo2(info.efi1, info.efi2, 's4efibar', info.me, info.role, info.s4winner);



        var initialize = function() {

            $('.cursor-pointer').css({'cursor':'default'});

            var wholostDisplay = document.getElementById('wholost');

            // s3 legend text
            // this becaomes you if lost leader is looking
            // becomes your leader if lost follower is looking
            var roledependenttextDisplay = document.getElementById('roledependenttext');



            var wlString = info.s3won ? 'Your leader won' : 'Your leader lost';
            wholostDisplay.innerHTML = wlString;

            // For additional new adjective in the instructions section
            // var newleadertagDisplay = document.getElementById('newleadertag');
            // newleadertagDisplay.innerHTML = info.s3won ? '' : 'new';


            if(info.s3won) {

                roledependenttextDisplay.innerHTML = 'Your Leader';

                $('.ournewleader').css({'display':'none'});
                $('.s4infographics, .weakwrap3, .s4arrow, .leaderlost').css({'display':'none'});
                    $('.specialshow1').css({'display':'inherit'});

            }

            if(!info.s3won) {
                $('.s3infographics, .weakwrap2, .leaderwon').css({'display':'none'});
                $('.specialshow2').css({'display':'inherit'});
                $('.b5').css({'border':'5px solid #6dc174'});
            }


            // graphic manipulation for follower who lost and continues a follower
            if(!info.s3won && info.role===1) {

                // s2 graphics
                // hide the new leader legend for the opposing group's help sabo
                // since they do not have a new leader
                $('.theirnewleader').css({'display':'none'});

                // s3 graphic
                roledependenttextDisplay.innerHTML = 'Your Leader';

            }

            // graphic manipulation for leader who lost
            if(!info.s3won && info.role===0) {

                // s2 graphics
                // hide the new leader legend for the opposing group's help sabo
                // since they do not have a new leader
                $('.theirnewleader').css({'display':'none'});
                $('.probwin2').css({'margin-bottom':'-50px'});
                // S3
                roledependenttextDisplay.innerHTML = 'You';
                wholostDisplay.innerHTML = 'You lost'


                // s4
                // this hides in s4 you lost tag underneat
                // Also hide the you legend on top
                // since this is the leader's perspective we should not see these
                $('.rolehide').css({'display':'none'});
                $('.s4pie').css({'padding-top':'30px'});

            }

            if(info.role === 1) {
                var whoamIDisplay = document.getElementById('whoamI');
                whoamIDisplay.innerHTML = (info.me + 1);
            }


            if(info.role === 0) {
                whoamIDisplay = document.getElementById('whoamI');
                whoamIDisplay.innerHTML = (info.s4winner + 1);
            }



            // Further manipulation of the legend boxes
            // If the related legend is showing 0 values then make the box legend into a line
            // these legen boxes are all about help sabotage graphics of stage 2

            // about other group's new leader legend if their leader did neither sabo or help
            if(info.osarray[info.os4winner]===0 && info.oharray[info.os4winner]===0) {
                $('.newleaderbox2').css({'border':'2px solid red', 'height':'4px', 'margin-top':'9px'})
            }

            // if our new leader neither helped or sabotage
            if(info.sarray[info.s4winner]===0 && info.harray[info.s4winner]===0) {
                $('.newleaderbox1').css({'border':'2px solid red', 'height':'4px', 'margin-top':'9px'})
            }

            // if you are a follower looking at the graph and neither helped or sabotaged.
            if(info.sarray[info.me]===0 && info.harray[info.me]===0) {
                $('.youbox1').css({'border':'2px solid black', 'height':'4px', 'margin-top':'9px'})
            }


        }


        initialize();

        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        /////////////////////////     CALCULATOR      //////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

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


            var mytextpos= myLabel > 82 ? 'inside':'outside';


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
                textposition: mytextpos,
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


            var mColor = ourSide ? 'black' : 'rgb(225, 225, 225)';


            var somecolor = 'black';

            if(barId==='barl'){
                somecolor = y > 737 ? 'white' : 'black';
            }

            var mytextpos= y > 737 ? 'inside':'outside';


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
                textposition: mytextpos,
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

        var updateBarDecision = function(a, barId, axisOn) {
            var y = a;
            if(typeof(y) === 'undefined') y = 0;

            var colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];

            var myLabel = y > 0 ? y : -y;
            var myColor = y > 0 ? colors[0] : colors[1];


            var mytextpos= myLabel > 94 ? 'inside':'outside';


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
                    color:'black',
                },
                // textanchor: 'right',
                textposition: mytextpos,
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
        var s2, h2, ts, th;
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
            updateBar(myVal, 'obar1', 1, false);
            updateBar(myVal, 'obar2', 1, false);

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


        showCalc.onclick = function() {
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
                syncAllBars();

                goDown(2470);
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

                goDown(1870);
            }

            calcOn = 1 - calcOn;
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
        dslider.oninput = function() {
            dvalue = parseFloat(dslider.value);
            s1 = dvalue >= 0 ? 0 : -dvalue;
            h1 = dvalue >= 0 ? dvalue : 0;

            //synching values
            syncBars(dvalue, 'decision', syncOurGroup, syncOtherGroup);
            syncValues(h1, s1, 'decision', syncOurGroup, syncOtherGroup);

            updateAll();
            updateBarXAxis('bard', true);

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




        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        //////////////////////// VARIOUS HOVER MECHANICS ///////////////////////
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////

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

        $('.bottomsection').hover(
            function() {
                // $('.s2side').css({'transition':'0.5s', 'color':'red'});
            },
            function(){
                // $('.s2side').css({'color':'black'});
                }
        )

        $('.topsection, .middlesection').hover(
            function() {
                // $('.s3side').css({'transition':'0.5s','color':'red'});
            },
            function(){
                // $('.s3side').css({'color':'black'});
            }
        )

        $('.input').hover(
            function() {
                $('.input').css({'box-shadow':'0px 3px 9px 0px orange'});


            },
            function() {
                $('.input').css({'box-shadow':'0px 3px 9px 0px lime'});
                }
        );


        ///// SLIDER HOVER MECHANICS /////
        ///// SLIDER HOVER MECHANICS /////
        ///// SLIDER HOVER MECHANICS /////
        ///// SLIDER HOVER MECHANICS /////

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
                $('.pwintext, .powertext').css({'color':'red'});
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


                stageshortTextDisplay.innerHTML = '<br>Players are <strong>randomly</strong> assigned to a role, group and an opposing group';

            }
            if(mystageIndex===2) {

                $('.b2').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
                $('.1a2, .b1, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1'});
                stageshortTextDisplay.innerHTML = '<strong><strong><u>Help/Sabotage Decision I</u></strong></strong> <br><br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader.';

            }
            if(mystageIndex===3) {

                $('.b3').css({'border':'5px solid black', 'background-color':'yellow',  'opacity':'1'});
                $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1'});
                stageshortTextDisplay.innerHTML = '<strong><strong><u>Leaders\' Contest I</u></strong></strong> <br><br>' +
                ' Winner <strong>continues as leader</strong>, receives <strong>1000</strong> tokens and proceeds to Leaders\' Contest <strong>II</strong> (stage 6).' +
                ' <br>Loser <strong>becomes a follower</strong> and proceeds to Followers\' Help/Sabotage Decision <strong>II</strong> (stage 5).';

            }
            if(mystageIndex===4) {

                $('.b4').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
                $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b3, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1'});
                stageshortTextDisplay.innerHTML = '<strong><strong><u>Followers\' Contest</u></strong></strong> <br><br> <strong>Defeated</strong> leaders\' <strong>followers</strong> compete for the <strong>new</strong> leader role.';

            }
            if(mystageIndex===5) {

                $('.b5').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
                $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b3, .4a5, .b4, .5a6, .b6')
                .css({'opacity':'0.1'});
                $('.5a6, .b6, .w34').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
                $('.w34').css({'border':'4px double'});
                stageshortTextDisplay.innerHTML = '<strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> their <strong>new</strong> leader. ' +
                '<br><span style=\'line-height:41px;\'></span> <span style=\'line-height:30px;\'> <u>Followers in <strong>your</strong> group</u> </span> <br> <span style=\'margin-left:-16px;\'> &#x25cf; Defeated leader of stage 3 <br> &#x25cf; Defeated follower of stage 4 <br> </span>';

            }
            if(mystageIndex===6) {
                $('.b6').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
                $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b3, .4a5, .b4, .5a6, .b5')
                .css({'opacity':'0.1'});
                stageshortTextDisplay.innerHTML = '<strong><strong><u>Leaders\' Contest II</u></strong></strong> <br><br> Winner receives <strong>1000</strong> tokens. <br><br> <strong>The game ends</strong>.';

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
                // stagenumberDisplay.innerHTML = mystageIndex;
            }
            if(mystageIndex===2) {
                $('.b1').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b2').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2').css({'opacity':'1'});
                $('.2a3, .b3').css({'opacity':'0.1'});
                $('.b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.w34, .l34').css({'border':'double 4px rgb(160, 160, 160)'});

                stageshortTextDisplay.innerHTML = '<strong><strong><u>Help/Sabotage Decision I</u></strong></strong> <br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader.';
                // stagenumberDisplay.innerHTML = mystageIndex;
            }
            if(mystageIndex===3) {
                $('.b1, .b2').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b3').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2, .2a3').css({'opacity':'1'});
                $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
                .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.w34, .l34').css({'border':'double 4px rgb(160, 160, 160)'});

                stageshortTextDisplay.innerHTML = '<strong><strong><u>Leaders\' Contest I</u></strong></strong> <br> Winner <strong>continues as leader</strong> and receives <strong>1000</strong> tokens.';
                // stagenumberDisplay.innerHTML = mystageIndex;
            }
            if(mystageIndex===4) {
                $('.b1, .b2, .b3, .l34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b4').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2, .2a3, .3al, .la4').css({'opacity':'1'});
                $('.3aw, .w34, .wa5, .5a6, .b5, .b6, .4a5, .5a6')
                .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.w34').css({'border':'double 4px rgb(160, 160, 160)'});
                $('.l34').css({'border':'double 4px rosybrown'});

                stageshortTextDisplay.innerHTML = '<strong><strong><u>Followers\' Contest</u></strong></strong> <br> Since the <strong>leader lost</strong> her leader role in Stage <strong>3</strong>, <br>her <strong>followers</strong> compete for the <strong>new</strong> leader role.';
                // stagenumberDisplay.innerHTML = mystageIndex;
            }
            if(mystageIndex===5) {
                $('.b1, .b2, .b3, .l34, .b4').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b5').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'0.1'});
                $('.1a2, .2a3, .3al, .la4, .4a5').css({'opacity':'1'});
                $('.5a6, .b6, .w34').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.w34').css({'border':'double 4px rgb(160, 160, 160)'});
                $('.l34').css({'border':'double 4px rosybrown'});

                stageshortTextDisplay.innerHTML = '<strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> their <strong>new</strong> leader. ' +
                '<br><span style=\'line-height:41px;\'></span> <span style=\'line-height:30px;\'> <u>Followers in <strong>your</strong> group</u> </span> <br> <span style=\'margin-left:-16px;\'> &#x25cf; Defeated leader of stage 3 <br> &#x25cf; Defeated follower of stage 4 <br> </span>';
                // stagenumberDisplay.innerHTML = 5;
            }
            if(mystageIndex===6) {
                $('.b1, .b2, .b3, .w34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
                $('.b5').css({'border':'5px solid lime', 'opacity':'1'});
                $('.1a2, .2a3, .3al, .la4, .4a5').css({'opacity':'0.1'});
                $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'1'});
                $('.5a6, .b6, .l34, .b4').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});

                $('.l34').css({'border':'double 4px rgb(160, 160, 160)'});
                $('.w34').css({'border':'double 4px rosybrown'});

                stageshortTextDisplay.innerHTML = '<br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader. <br><br> Your group\'s followers are the <strong>same followers</strong> from stage <strong>2</strong>.';
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

        stageIndex = info.s3won ? 6 : 5;
        changeMap(stageIndex);
        // changeMap2(4);



        $('.b1, .b2, .b3, .b4, .b5, .b6').css({'transition-delay':'0s', 'transition':'1s'});
        // $('.3aw, .w34').css({'opacity':'0.2'});
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
                changeMap2(4);
            },
            function() {
                changeMap(stageIndex);
            }
        );

        $('.x5').hover(
            function() {
                if(info.s3won) {
                    changeMap(6);
                }
                if(!info.s3won) {
                    changeMap2(5);
                }
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
