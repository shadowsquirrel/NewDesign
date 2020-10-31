
map.animate = {};
map.update = {};
map.show = {};
map.setOpacityforAll = function(myOpacity) {

    $('.b1, .x1a2, .b2, .x2a3, .b3, .x3al, .x3aw, .w34, .l34, .la4, .wa5, .b41, .x4a5, .b5, .x5a6, .b6')
    .css({'opacity':myOpacity});

}

//-------- MAP SECTION ------ MAP SECTION ------ MAP SECTION ---------//

var map = {

    update: {},
    icon: {},

};

map.icon.full = function() {

    $('.mapsexplain').css({'opacity':'1'});
    $('.x3aw2, .x3al2, .boldarrow').css({'opacity':'1'});
    $('.og1leaderlime1, .og1leaderlime2').css({'border-color':'gray'});
    $('.mapOG1, .mapOG2, .IG').css({'border-color': 'black', 'opacity':'1'});
    $('.mapw34').css({'border-color':'black'});

    $('.x1a2, .unknownresult, .modifications3').css({'opacity':'0'});
    $('.x3aw2, .x3al2, .mapl34, .la4, .wa4').css({'opacity':'0'});

    // recovery
    $('.mapx3wl, .IG, .x456, .mapOG2').css({'opacity':'1'});
    $('.x3aw2, .x3al2, .mapl34, .la4, .wa5, .mapacceptedBox, .mapigtitle').css({'opacity':'1'});
    $('.mapw34').css({'opacity':'1'});

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

    map.mapIconFull();

    if(state === 'og1') {

        $('.mapx3wl, .IG, .x456, .mapOG2').css({'opacity':'0'});
        $('.mapOG1').css({'border-color':'lime'});

    }

    if(state === 's2') {

        $('.mapx3wl, .IG, .x456, .mapOG2').css({'opacity':'0'});
        $('.mapspf1L1, .arrowdashedlime1').css({'opacity':'1'});

    }

    if(state === 's3') {

        $('.mapx3wl, .IG, .x456, .mapOG2').css({'opacity':'0'});
        $('.og1leaderlime1').css({'border-color':'lime'});
        $('.mapfightIconLime1').css({'opacity':'1'});

    }

    if(state === 'leaderwon') {

        $('.x3al2, .mapl34, .la4, .wa5, .mapacceptedBox, .mapigtitle, .x456, .mapOG2').css({'opacity':'0'});
        $('.mapw34').css({'border-color':'lime'});

    }

    if(state === 'leaderlost') {

        $('.x3aw2, .mapw34, .la4, .wa5, .mapacceptedBox, .mapigtitle, .x456, .mapOG2').css({'opacity':'0'});
        $('.mapl34').css({'border-color':'lime'});

    }

    if(state === 's4') {

        $('.x3aw2, .mapw34, .wa5, .mapigtitle, .x456, .mapOG2').css({'opacity':'0'});
        $('.mapacceptedBox').css({'border-color':'lime'});

    }

    if(state === 's4toog2') {

        $('.x3aw2, .mapw34, .wa5, .mapigtitle').css({'opacity':'0'});
        $('.mapOG2').css({'border-color':'lime'});

    }

    if(state === 's3toog2') {

        $('.x3al2, .mapl34, .la4, .mapacceptedBox, .mapigtitle, .x456').css({'opacity':'0'});
        $('.mapOG2').css({'border-color':'lime'});

    }

    if(state === 'og2') {

        $('.mapOG2').css({'border-color':'lime'});

    }

    if(state === 's5') {

        $('.mapspf1L2, .arrowdashedlime2').css({'opacity':'1'});

    }

    if(state === 's6') {

        $('.og1leaderlime2').css({'border-color':'lime'});
        $('.mapfightIconLime2').css({'opacity':'1'});

    }

}


map.mapIconFull();
// map.mapIconNone();
// map.mapIcon('og1');
// map.mapIcon('s2');
// map.mapIcon('s3');
// map.mapIcon('leaderwon');
// map.mapIcon('leaderlost');
// map.mapIcon('s4');
// map.mapIcon('s4toog2');
// map.mapIcon('s3toog2');
// map.mapIcon('og2');
// map.mapIcon('s5');
// map.mapIcon('s6');

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

// map.update();


//-------- ICON SECTION ------ ICON SECTION ------ ICON SECTION ---------//

var icon = {};
icon.tool = {};
icon.initiate = {};
icon.set = {};
//----- HELP SABOTAGE DEPENDENT LEADER SIZE AND COLOR METHODS -------//

icon.setSize = function(Id, h, w) {

    var myClass, myHeight, myWidth;

    myClass = '.' + Id;
    myHeight = h + 'px';
    myWidth = w + 'px';

    $(myClass).css({'height' : myHeight, 'width' : myWidth});

}

// will take the m calculated from logistic size
icon.changeSize = function(h, w, m) {

    var myHeight1, myWidth1, myHeight2, myWidth2, m1, m2;

    if(m === undefined) {

        icon.setSize('splc1', h, w);
        icon.setSize('splc2', h, w);

    } else {

        m1 = m[0];
        m2 = m[1];

        myHeight1 = h * m1;
        myWidth1 = w * m1;
        myHeight2 = h * m2;
        myWidth2 = w * m2;

        icon.setSize('splc1', myHeight1, myWidth1);
        icon.setSize('splc2', myHeight2, myWidth2);

    }

}

// We will use 2 as max and 1 as avg for a multiplier between 0 and 2
// returns size multipliers given efficiencies weight
// val will take the weight of efficiency of the first player
// will return size multipliers for both players as an array
icon.tool.logisticSize = function(val, max, avg) {

    var k1, val1, val2;
    val = max * val;

    // set height and seize multiplier for player 1
    k1 = 0.05;
    val1 = max / (1 + Math.exp(-k1 * (val - avg)));
    // multiplier for player 2
    val2 = max - val1;

    return [val1, val2];

}

icon.tool.logisticColor = function(val, max, avg) {

    var k1, val1, val2, result;
    val = max * val;

    // set color
    k1 = 0.05;
    val1 = max / (1 + Math.exp(-k1 * (val - avg)));
    // blue
    val1 = Math.floor(val1);
    // red
    val2 = max - val1;


    result = [val1, val2];

    return result;

}

icon.tool.setRGB = function(val){

    return ('rgb(' + val[0] +',0, ' + val[1] +')');

}


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

icon.tool.setMyRole = function(array) {

    $('.p0, .a10, .a11, .a20, .a21, .a30, .a31, .a40, .a41, .a50, .a51, .a60, .a61').css({'z-index':'0'});

    for(var i = 0; i < array.length; i++) {

        var myRole = array[i] ? 0 : 1;
        var myClass = '.a' + (i + 1) + myRole;
        var myRoleClass = '.c' + (i + 1);
        $(myClass).css({'z-index':'1'});

        var myRole2 = array[i] ? 1 : 0;
        $(myRoleClass).css({'opacity': myRole2.toString()});

    }
}

icon.set.stage1 = function()
{
    var mySort, myRole1, myRole2, roles;

    mySort = icon.tool.shuffle([1,2,3,4,5,6]);
    myRole1 = icon.tool.shuffle([true, false, false]);
    myRole2 = icon.tool.shuffle([false, true, false]);
    roles = myRole1.concat(myRole2);
    icon.tool.matchIcon(mySort);
    icon.tool.setMyRole(roles);
}

//------ debug actions ------////------ debug actions ------////------ debug actions ------//
// icon.set.stage1();
// map.update('skeleton');


var rotateCounter = 0;
var rotate = function() {
    var array = ['full', 's1', 'og1', 's2', 's3', 's4', 's4?', 'discardFC',
    'leaderwonleader', 'leaderwonfollower', 'leaderwon',
    'leaderlostleader', 'leaderlostfollower', 'leaderlost',
    'followercontest', 'followercontestlost', 'followercontestwon', 'og2', 's5', 's6'];

    console.log(array[rotateCounter]);

    map.update(array[rotateCounter]);

    rotateCounter++;

    if(rotateCounter === array.length) rotateCounter = 0;



    var m1, m2;
    m1 = m2 =1;

    if(rotateCounter === 1) {
        m1 = 1.1;
        m2 = 2 - m1;
    }
    if(rotateCounter === 2) {
        m1 = 1.2;
        m2 = 2 - m1;
    }
    if(rotateCounter === 3) {
        m1 = 1.3;
        m2 = 2 - m1;
    }
    if(rotateCounter === 4) {
        m1 = 1.4;
        m2 = 2 - m1;
    }
    if(rotateCounter === 5) {
        m1 = 1.5;
        m2 = 2 - m1;
    }


    var height1, width1, height2, width2;
    height1 = 85 * m1;
    width1 = 65 * m1;
    height2 = 85 * m2;
    width2 = 65 * m2;


    icon.setSize('splc1', height1, width1);
    icon.setSize('splc2', height2, width2);

}
var yoyo = document.getElementById('mybutton1');
yoyo.onclick = function() {
    rotate();
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
