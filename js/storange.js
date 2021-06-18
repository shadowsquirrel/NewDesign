

// if the other group lost og1 then give this setup for ig feedback
calculator.globalVariable.isIGB = 1;
calculator.globalVariable.tutorial.weAreInTutorial = 1;
calculator.globalVariable.tutorial.IGSameColor = 0;
calculator.globalVariable.tutorial.IGDifferentColor = 1;

//if your group lost and you are the leader setup for ig feedback
calculator.globalVariable.isIGA = 1;
calculator.globalVariable.playerIndex === -1



var h1,s1,h2,s2;


var help = 0;
var sabo = 1;

if(calculator.globalVariable.isIGA) {

    var ourGroup = 0;

    if(calculator.globalVariable.playerIndex != -1) {

        var myList = myData.sortedArray;
        var myIndex = (myList.indexOf(myData.myCount) - 1);

    } else {

        var myIndex = 0;

    }
} else {

    var ourGroup = 1;
    var myIndex = 0;
}


var homo;

if(calculator.globalVariable.isIGA) {

    homo = myData.treatment[0];

} else {
    homo = myData.treatment[1];
}












OG2FollowerArrowsRight

OG2FollowersWrapRight

OG2LeaderRight


map.set.OG2ResultingIcons2();

map.opacity.shadowOG2(false, 0.75);
map.opacity.shadowOG2Right(true, 0.75);
map.opacity.section([0.1,0.7,0.1], 0.75);
map.opacity.OG2Right(0.4, 0.75);


map.opacity.main([1,1,1], 0.75);



    map.opacity.inside([0.3,1,1], 0.75);
    map.opacity.shadowOG2(false, 0.75);
    map.opacity.shadowOG2Right(true, 0.75);
    map.opacity.section([0.1,0.7,0.1], 0.75);
    map.opacity.OG2Right(0.4, 0.75);

$('.IGFI_Bottom, .IGRightFightIcon').css({'transition':'0.5s', 'opacity':'1', 'filter':'opacity(1)'})





map.show.topTransition(false, 0.5)
map.opacity.main([0,1,0], 0.5);
$('.bottomBoxLeaderResult, .arrowToBottomIconResults, .arrowBottomIconToIG').css({'transition':'0.5','opacity':'0'});




$('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-340px'});
if(calculator.globalVariable.isIGB) {

    var efforts = myData.s4[1][2];


}







<img class='risingCrown' src="images/fcrownLime.png" alt="V" />






setTimeout(()=>{
            $('.lfpd, .rfpd').css({'transition':'1s', 'opacity':'0.1'});
        }, 1250)




calculator.globalVariable.IG_hsWrapActive = true


$('.risingCrown').css({'margin-top':'-106px', 'opacity':'1'});




map.opacity.bottomTransition(0.5)
map.opacity.OG2Right(1);
map.opacity.OG2Left(1)
map.opacity.main([1,1,0.5], 0.5);




map.show.bottomTransition(false, 0.5)
map.opacity.main([0,1,0], 0.5);

$('.topBoxLeaderResult, .arrowToTopIconResults, .arrowTopIconToIG').css({'transition':'0.5','opacity':'0'});
$('.IGTopContestWrap').css({'transition':'0.75s', 'margin-top':'-75px', 'margin-left':'-50px', 'transform':'scale(1.5) scaleX(1.5)'});





// after spin graphics
$('.wpWrap').css({'transition':'1s', 'margin-top':'0px', 'transform':'scale(1)'})




if(map.globalVariable.playerIndex != -1 && calculator.globalVariable.isIGA === 1) {
    if(map.globalVariable.ourSideIsHetero === 1) {

        if(map.globalVariable.playerIndex === 0) {

            $('.YAH-arrow-IG-big, .YAH-text-IG-big').css({'transition':'0.75s', 'opacity':'1'});

        }

        if(map.globalVariable.playerIndex === 1) {

            $('.YAH-arrow-IG-small, .YAH-text-IG-small').css({'transition':'0.75s', 'opacity':'1'});

        }

    } else {

        $(' .YAH-arrow-IG-normal, .YAH-text-IG-normal').css({'transition':'0.75s', 'opacity':'1'});

    }
}






// -------- A1 TRIGGER --------- //

setTimeout(()=>{

    $('.IGContests').css({'transition':'0.5s', 'opacity':'1'});
    $('.prizeCrownBlackBottom').css({'transition':'0.5s','opacity':'0'});

    $('.IGFI_Bottom, .IGFightIconLimeBottom, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'1', 'filter':'opacity(1)'})

    $('.prizeCrownLimeBottom').css({'transition':'2s', 'margin-top':'-37px'});
    map.opacity.section([0.1,0.1,0.1], 0.5);

}, 250)

if(calculator.globalVariable.isIGA) {

    map.animate.YAH_ig();

    map.show.topTransition(true, 0.5);
    map.opacity.bottomTransition(0.5)
    map.opacity.OG2Right(1);
    map.opacity.OG2Left(1)
    map.opacity.main([1,1,0.5], 0.5);

    $('.IGFightIconLimeTop').css({'transition':'0.5s',
    'opacity':'1'});

    $('.prizeCrownLimeTop').css({'transition':'2s',
    'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

}



// -------- A2 TRIGGER --------- //

$('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-325px'});

if(calculator.globalVariable.isIGB) {

    map.show.topTransition(false, 0.5)
    map.opacity.main([0,1,0], 0.5);

    $('.bottomBoxLeaderResult, .arrowToBottomIconResults, .arrowBottomIconToIG').css({'transition':'0.5','opacity':'0'});
    $('.IGBottomContestWrap').css({'transition':'0.75s', 'margin-top':'-75px', 'margin-left':'-50px', 'transform':'scale(1.5) scaleX(1.5)'});

    setTimeout(()=>{
        $('.IGBottomContestWrap').css({'transition':'1.5s', 'opacity':'0'});
    }, 500)


} else {

    map.show.bottomTransition(false, 0.5)
    map.opacity.main([0,1,0], 0.5);

    $('.topBoxLeaderResult, .arrowToTopIconResults, .arrowTopIconToIG').css({'transition':'0.5','opacity':'0'});
    $('.IGTopContestWrap').css({'transition':'0.75s', 'margin-top':'135px', 'margin-left':'-50px', 'transform':'scale(1.5) scaleX(1.5)'});

    setTimeout(()=>{
        $('.IGTopContestWrap').css({'transition':'1.5s', 'opacity':'0'});
    }, 500)

}

setTimeout(()=>{

    calculator.section.all.IG_opacity(1,1.5);
    calculator.lock.IG_activate([1, 1]);
    calculator.questions.activate.IG_all([0, 0]);
    setTimeout(()=>{
        calculator.globalVariable.IG_hsWrapActive = true
        $('.lfpd, .rfpd').css({'transition':'1s', 'opacity':'0.1'});
    }, 1250)

    setTimeout(()=>{
        $('.risingCrown').css({'margin-top':'-106px', 'opacity':'1'});
    }, 500)

}, 500)

setTimeout(()=>{
    box.transition('', 'B-3', 0, 0, 1, 0);
    setTimeout(()=>{
        box.transition('', 'B-4', 0, 0, 1, 0);
        box.button.show2('B-4');
    }, 500)
}, 2000)



var fastFeedback = function() {

    // -------- A1 TRIGGER --------- //

    setTimeout(()=>{

        setTimeout(()=>{

            $('.IGContests').css({'transition':'0.5s', 'opacity':'1'});
            $('.prizeCrownBlackBottom').css({'transition':'0.5s','opacity':'0'});

            $('.IGFI_Bottom, .IGFightIconLimeBottom, .prizeCrownLimeBottom').css({'transition':'0.5s', 'opacity':'1', 'filter':'opacity(1)'})

            $('.prizeCrownLimeBottom').css({'transition':'2s', 'margin-top':'-37px'});
            map.opacity.section([0.1,0.1,0.1], 0.5);

        }, 250)

        if(calculator.globalVariable.isIGA) {

            map.animate.YAH_ig();

            map.show.topTransition(true, 0.5);
            map.opacity.bottomTransition(0.5)
            map.opacity.OG2Right(1);
            map.opacity.OG2Left(1)
            map.opacity.main([1,1,0.5], 0.5);

            $('.IGFightIconLimeTop').css({'transition':'0.5s',
            'opacity':'1'});

            $('.prizeCrownLimeTop').css({'transition':'2s',
            'margin-top':'-44px', 'opacity':'1', 'filter':'opacity(1)'})

        }

    }, 2000)

    // -------- A2 TRIGGER --------- //

    setTimeout(()=>{

        $('.IG_generalMarginBox').css({'transition':'0s', 'margin-top':'-325px'});

        if(calculator.globalVariable.isIGB) {

            map.show.topTransition(false, 0.5)
            map.opacity.main([0,1,0], 0.5);

            $('.bottomBoxLeaderResult, .arrowToBottomIconResults, .arrowBottomIconToIG').css({'transition':'0.5','opacity':'0'});
            $('.IGBottomContestWrap').css({'transition':'0.75s', 'margin-top':'-75px', 'margin-left':'-50px', 'transform':'scale(1.5) scaleX(1.5)'});

            setTimeout(()=>{
                $('.IGBottomContestWrap').css({'transition':'1.5s', 'opacity':'0'});
            }, 500)


        } else {

            map.show.bottomTransition(false, 0.5)
            map.opacity.main([0,1,0], 0.5);

            $('.topBoxLeaderResult, .arrowToTopIconResults, .arrowTopIconToIG').css({'transition':'0.5','opacity':'0'});
            $('.IGTopContestWrap').css({'transition':'0.75s', 'margin-top':'135px', 'margin-left':'-50px', 'transform':'scale(1.5) scaleX(1.5)'});

            setTimeout(()=>{
                $('.IGTopContestWrap').css({'transition':'1.5s', 'opacity':'0'});
            }, 500)

        }

        setTimeout(()=>{

            calculator.section.all.IG_opacity(1,1.5);
            calculator.lock.IG_activate([1, 1]);
            calculator.questions.activate.IG_all([0, 0]);
            setTimeout(()=>{
                calculator.globalVariable.IG_hsWrapActive = true
                $('.lfpd, .rfpd').css({'transition':'1s', 'opacity':'0.1'});
            }, 1250)

            setTimeout(()=>{
                $('.risingCrown').css({'margin-top':'-106px', 'opacity':'1'});
            }, 500)

        }, 500)

        setTimeout(()=>{

            $('#boxwrap-B-4').css({'margin-top':'-20px'});

            box.transition('', 'B-4', 0, 0, 1, 0);
            box.button.show2('B-4');

        }, 2000)

    }, 4000)

}

$('.sexplain').appendTo('.bottomMapWrap');
map.show.bottomTransition(true, 0.5)
map.opacity.main([0.5,1,0.5], 0.5)

if(calculator.globalVariable.isIGB) {

    map.show.topTransition(true, 0.5)
    map.opacity.main([0.7,1,0.7], 0.5);

    $('.bottomBoxLeaderResult, .arrowToBottomIconResults, .arrowBottomIconToIG').css({'transition':'0.5','opacity':'1'});
    $('.IGBottomContestWrap').css({'transition':'0.5s', 'margin-top':'0px', 'margin-left':'0px', 'transform':'scale(1)'});
    $('.IGBottomContestWrap').css({'transition':'0.5s', 'opacity':'1'});

} else {

    map.show.bottomTransition(true, 0.5)
    map.opacity.main([0.7,1,0.7], 0.5)

    $('.IGTopContestWrap').css({'transition':'0.5s', 'opacity':'1'});
    $('.topBoxLeaderResult, .arrowToTopIconResults, .arrowTopIconToIG').css({'transition':'0.5','opacity':'1'});
    $('.IGTopContestWrap').css({'transition':'0.5s', 'margin-top':'0px', 'margin-left':'0px', 'transform':'scale(1)'});

}
