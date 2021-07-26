s1 = s2 = h1 = h2 = os1 = os2 = oh1 = oh2 = 0;
efo = oefo = 200;

box.transition('OG2Intro-5', '', 0, 0, 1, 0);

setTimeout(()=>{

    title.update.size(false);
    $('.sexplain').css({'margin-top':'73px', 'margin-left':'-282px'});
    map.opacity.main([0,0,1], 0.75);
    map.opacity.mainArrowSections([0,0,0], 0.75);

    calculator.section.hs.minimize(0);
    $('.generalMarginBox').css({'transition':'0s', 'margin-top':'-245px', 'display':'block'});
    $('.generalMarginBox').css({'transition':'0s', 'transform':'scale(1)', 'filter':'opacity(0)'});
    $('.generalMarginBox').css({'transition':'0s', 'margin-top':'-8px'});
    $('.generalMarginBox').css({'transition':'0s', 'padding-top':'35px'});
    $('.contestSection, .payoffWrap, .imageWrap23').css({'display':'none'});

    // $('.winnerLeaderArrowLeft, .winnerLeaderTextLeft, .OG2CircleArrowLeft_f1, .OG2CircleArrowTextLeft_f1').css({'transition':'1s',  'opacity':'0'});


    setTimeout(()=>{
        $('#boxbox-OG2Intro').css({'display':'none'});
        $('#boxbox-OG2').css({'display':'block'});

        $('.OG2').css({'transition':'1s', 'transform':'scale(2)', 'margin-top':'209px', 'margin-left':'-675px'});
    }, 750)

    setTimeout(()=>{
        map.opacity.section([0,0,0.15])
        $('.OG2FollowersWrapLeft, .OG2FollowersWrapRight').css({'transition':'1s', 'opacity': '1'});
        $('.OG2FollowerArrowsLeft, .OG2FollowerArrowsRight').css({'transition':'1s', 'opacity': '1'});
        $('.arrowDashedLime2').css({'transition':'1s', 'opacity':'0'});
        $('.og2BlackArrow').css({'transition':'1s','opacity':'1'});
        $('.s5PassiveFollower').css({'transition':'1s','opacity':'1'});
        $('.s5ActiveFollower').css({'transition':'1s','opacity':'0'});
        $('.OG2GroupSeparator').css({'transition':'2s', 'opacity':'1', 'height':'119px'});
        $('.OG2FightIcon, .OG2FightIconLime').css({'transition':'1s', 'opacity':'0'});
        $('.OG2LeaderRight, .OG2LeaderLeft').css({'transition':'1s', 'opacity':'0.8'});
        calculator.setup.hsAndPowerRatioTutorialOG2();
    }, 1500)



    setTimeout(()=>{

        $('.OG2').css({'transition':'1s', 'transform':'scale(1.5)'});
        setTimeout(()=>{
            // calculator.setup.hsAndPowerRatioTutorialOG2();
            $('.OG2').css({'transition':'0.75s', 'filter':'opacity(0)'});
            $('.hsWrap').css({'transition':'0.75s', 'filter':'opacity(1)'});
            $('.generalMarginBox').css({'transition':'0.75s', 'opacity':'1', 'filter':'opacity(1)'});
            setTimeout(()=>{
                $('.sexplain').css({'transition':'0.75s', 'margin-top':'-10px'});
                setTimeout(()=>{
                    $('.sexplain').css({'display':'none'});
                }, 750)
            }, 750)
        }, 500)


    }, 2000)

    setTimeout(()=>{

        box.transition('', 'OG2-1', 0, 0, 1, 0);

        setTimeout(()=>{
            box.button.show('OG2-1');
        }, 3000)

    }, 4000)

}, 750)



map.tutorial.result.BWonALost = function(delay, fWI) {

    map.tutorial.result.reset();

    delay = delay === undefined ? 1000 : delay;
    fWI = fWI === undefined ? 1 : fWI;

    $('.resultsUnknown').css({'transition':'0.5s', 'opacity': '0'});
    $('.wonLostBoxes').css({'opacity':'1'});

    setTimeout(()=>{
        $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0.5s', 'opacity': '1'});
        $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '1'});
        $('.arrowToTopIconResults, .arrowToBottomIconResults').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeaderLeft, .OG1LeaderRight, .OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0'});
        $('.topBoxLeaderResult, .bottomBoxLeaderResult').css({'transition':'0.5s', 'opacity':'1'});
        map.winnerLeaderIndex = 2;
        map.set.OG1ResultIcons();
        map.opacity.main([1,1,1], 0.5);
        $('.IGBottomContestWrap').css({'transition':'0.5s', 'opacity':'0'});
    }, 1 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1, 0], [0, -1])
    }, 2 * delay)

    setTimeout(()=>{
        map.opacity.section([0.05,0.05,0.05], 1);
        $('.prizeCrownLimeTop').css({'transition':'0.5s', 'opacity':'1', 'margin-top':'-40px'});
        $('.IGFI_Top').css({'transition':'0.5s', 'opacity':'1'});
        $('.prizeCrownBlackTop, .IGFightIconLimeTop').css({'transition':'0.5s', 'opacity':'0'});
        $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s', 'opacity':'0'});
        $('.igalltop').css({'transition':'0.5s', 'opacity':'1'})
    }, 3 * delay)

    setTimeout(()=>{

        if(fWI === 1) {
            $('.prizeCrownLimeTop').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '-40px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        }

        if(fWI === 2) {
            $('.prizeCrownLimeTop').css({'transition':'0.5s', 'margin-top':'-51px', 'margin-left': '35px', 'height':'27px', 'width':'29px', 'z-index':'0'});
        }

        $('.IGFI_Top').css({'transition':'0.5s', 'opacity':'0'});

    }, 4 * delay)

    setTimeout(()=>{
        map.opacity.arrowsFromResultIcons([1,0], [0, 1]);



        map.opacity.arrowsFromIG([1,0]);
        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '1'});
        setTimeout(()=>{
            $('.groupADescription, .groupBDescription, .fightDescription').css({'transition':'0.5s','opacity':'0'})
            map.winnerLeaderIndex = 2;
            map.winnerFollowerIndex = fWI;
            map.set.OG2ResultingIcons();
        }, 500)
    }, 5 * delay);

    setTimeout(()=>{

        $('.OG2LeaderRight, .OG2LeaderLeft, .OG2LeadersIcon').css({'transition':'0.5s',  'opacity':'1'});
        $('.OG2FightIconWrap').css({'transition':'0s',  'opacity':'0'});

        if(fWI === 1) {
            $('.IGLeftFollower1, .prizeCrownLimeTop').css({'transition':'0.5s', 'opacity':'0.3'})
        }

        if(fWI === 2) {
            $('.IGLeftFollower2, .prizeCrownLimeTop').css({'transition':'0.5s', 'opacity':'0.3'})
        }

        $('.arrowToBottomIconResults, .bottomBoxLeaderResult').css({'opacity':'0.4'});

    }, 6.5 * delay)

    setTimeout(()=>{

        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'0.3'});

        $('.arrowsToOG2').css({'transition':'0.5s', 'opacity' : '0.3'});
        $('.topBoxLeaderResult').css({'transition':'0.5s', 'opacity':'0.3'});
        $('.arrowToTopIconResults').css({'transition':'0.5s', 'opacity':'0.3'});

        if(fWI === 1) {
            $('.IGLeftFollower2').css({'transition':'0.5s', 'opacity':'0.3'})
        }

        if(fWI === 2) {
            $('.IGLeftFollower1').css({'transition':'0.5s', 'opacity':'0.3'})
        }

        map.opacity.arrowsFromResultIcons([0.3, 0], [0, 0.3])
        $('.og2BlackArrow, .OG2FollowerArrowsLeft, .OG2FollowersWrapLeft').css({'transition':'0.5s', 'opacity':'1'});

        $('.OG2FollowerArrowsRight, .OG2FollowersWrapRight').css({'transition':'1s', 'opacity':'1'});
        $('.OG2FightIconWrap').css({'opacity':'1'});
    }, 8 * delay)

    setTimeout(()=>{
        // show the initial setup for comparison
        $('.OG1FollowersWrapRight, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '0.5'});
        $('.OG1LeaderLeft').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1LeftFollower1, .OG1LeftFollower2').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.subsubOG1L').css({'border-color':'gray'});

        // show the initial setup for comparison
        $('.OG1FollowersWrapRight, .OG1FollowerArrowsRight').css({'transition':'0.5s', 'opacity': '0.5'});
        $('.OG1LeaderRight').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.s2PassiveFollower').css({'transition':'0.5s', 'opacity':'1'});
        $('.subsubOG1L').css({'border-color':'gray'});

        $('.OG1FightIconWrap').css({'transition':'0.5s', 'opacity':'0.4'});
        $('.OG1FightIcon').css({'transition':'0.5s', 'opacity':'1'});
        $('.OG1FightIconLime').css({'transition':'0s', 'opacity':'0'});

        map.opacity.main([0.5,1,1], 0.5);
        map.opacity.inside([0,1,1], 0.5)
    }, 9 * delay)

}
