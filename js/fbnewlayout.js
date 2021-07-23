// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ----------------           MAINDATA             ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //


let mainData = {};

var payoffs;
var final;

window.onload = function() {




    final = {
        set:{},
        globalVariable:{},
    };

    // ------ debug data ------ //
    mainData = {

        myRound: 2,
        treatment: [1,0],

        myCount: 2,
        sortedArray: [0,2,5,4,3,1],

        myTutorial: {
            s1Done: 1,
            s2Done: 1,
            s3Done: 0,
            s4Done: 0,
            s5Done: 0,
            s6Done: 0,
            miniGame: 0,
        },

        s2: [ [[0,21], [11,0]], [[0,5], [10,0]] ],

        s3: [ [200, 100], [true, false] ],
        // s3: [ [200, 100], [false, true] ],

        s4: [ [ [5, 1], [true, false], [50, 100] ], [ [5, 1], [false, true], [51, 101] ] ],

        s5: [ [[0,5], [10,0]], [[0,20], [10,0]] ],

        s6: [ [100, 200], [false, true] ],

        payoffs: [
            // group A/1
            [
                // leader
                // [s2payoff, s3payoff, s4payoff, s5payoff, s6payoff,
                //  final payoff, final balance]
                [-10,-500,0,-20,-600,-800,100],
                // follower 1/s
                [-11,501,-151,-21,601,801,1010],
                // follower 2/w
                [-12,-502,-152,-22,-602,-802,202],
            ],
            // group B/2
            [
                // leader
                [0,503,0,-5,-483,20,1020],
                // follower 1/s
                [80,0,-120,90,604,170,1170],
                // follower 2/w
                [-15,0,-155,-25,-605,-805,505],
            ]
        ],

    }



    var generateFinalPayoff = function() {

        // ------------------------------------------------------------------- //
        // ---------------------- Global Initiations ------------------------- //
        // ------------------------------------------------------------------- //


        icon.globalVariable.isPracticeRound = undefined;

        icon.globalVariable.ourFollowersAreHetero = undefined;
        icon.globalVariable.theirFollowersAreHetero  = undefined;
        icon.globalVariable.bothHomo = undefined;
        icon.globalVariable.bothHetero = undefined;


        tool.rearrangeGroupOrder(mainData);
        tool.rearrangeMainData(mainData);

        // WE DONT NEED THIS FOR FB23 AND FB56 -> TO BE DELETED
        tool.rearrangePayoffData(mainData.payoffs);


        // -------------------------------------------------------- //
        // -------------------------------------------------------- //
        // ------------------ ICON FUNDAMENTALS ------------------- //
        // -------------------------------------------------------- //
        // -------------------------------------------------------- //
        //
        //
        generateIcons(mainData);

        // -------------------------------------------------------- //
        // -------------------------------------------------------- //
        // ----- INDEX IDENTIFIER FOR FURTHER ICON ADJUSTMENTS ---- //
        // -------------------------------------------------------- //
        // -------------------------------------------------------- //
        //
        //
        icon.set.index();

        // -------------------------------------------------------- //
        // -------------------------------------------------------- //
        // ----  ADJUST ICONS BASED ON TREATMENT AND ME INDEX  ---- //
        // -------------------------------------------------------- //
        // -------------------------------------------------------- //
        //
        //
        icon.set.stage1();

        // -------------------------------------------------------- //
        // -------------------------------------------------------- //
        // ---------------------- DISPLAY ICONS ------------------- //
        // -------------------------------------------------------- //
        // -------------------------------------------------------- //
        //
        //
        icon.ff.showMe(mainData);
        icon.ff.showAllIcons();



        icon.adjustYouIcon(1);

        icon.adjustForStage('og1');


        // --------------------------------------------- //
        // --------------------------------------------- //
        // -----------------  HOVERS  ------------------ //
        // --------------------------------------------- //
        // --------------------------------------------- //


        $('.holderWrap-l1-a').hover(
            function() {

                icon.assignDetailedResults('l-a');

                $(this).css({'transition':'0.15s', 'transform':'scale(1.15)'});
                $('.outcomeAwrap-icon').css({'transition':'0.15s', 'opacity':'1'});
                $('.outcomeAwrap-icon').removeClass('o6 o5 o4 o3 o2 o1').addClass('o1');
            },
            function() {
                $(this).css({'transition':'0.15s', 'transform':'scale(1)'});
                $('.outcomeAwrap-icon').css({'transition':'0.15s', 'opacity':'0'});
            }
        )

        $('.holderWrap-f1-a').hover(
            function() {

                icon.assignDetailedResults('f1-a');

                $(this).css({'transition':'0.15s', 'transform':'scale(1.15)'});
                $('.outcomeAwrap-icon').css({'transition':'0.15s', 'opacity':'1'});
                $('.outcomeAwrap-icon').removeClass('o6 o5 o4 o3 o2 o1').addClass('o2');
            },
            function() {
                $(this).css({'transition':'0.15s', 'transform':'scale(1)'});
                $('.outcomeAwrap-icon').css({'transition':'0.15s', 'opacity':'0'});
            }
        )

        $('.holderWrap-f2-a').hover(
            function() {

                icon.assignDetailedResults('f2-a');

                $(this).css({'transition':'0.15s', 'transform':'scale(1.15)'});
                $('.outcomeAwrap-icon').css({'transition':'0.15s', 'opacity':'1'});
                $('.outcomeAwrap-icon').removeClass('o6 o5 o4 o3 o2 o1').addClass('o3');
            },
            function() {
                $(this).css({'transition':'0.15s', 'transform':'scale(1)'});
                $('.outcomeAwrap-icon').css({'transition':'0.15s', 'opacity':'0'});
            }
        )

        $('.holderWrap-l1-b').hover(
            function() {

                icon.assignDetailedResults('l-b');
                $('.outcomeBwrap-icon').css({'transition':'0.15s', 'opacity':'1'});
                $(this).css({'transition':'0.15s', 'transform':'scale(1.15)'});
                $('.outcomeBwrap-icon').removeClass('o6 o5 o4 o3 o2 o1').addClass('o4');
            },
            function() {
                $(this).css({'transition':'0.15s', 'transform':'scale(1)'});
                $('.outcomeBwrap-icon').css({'transition':'0.15s', 'opacity':'0'});
            }
        )

        $('.holderWrap-f1-b').hover(
            function() {

                icon.assignDetailedResults('f1-b');
                $('.outcomeBwrap-icon').css({'transition':'0.15s', 'opacity':'1'});
                $(this).css({'transition':'0.15s', 'transform':'scale(1.15)'});
                $('.outcomeBwrap-icon').removeClass('o6 o5 o4 o3 o2 o1').addClass('o5');
            },
            function() {
                $(this).css({'transition':'0.15s', 'transform':'scale(1)'});
                $('.outcomeBwrap-icon').css({'transition':'0.15s', 'opacity':'0'});
            }
        )

        $('.holderWrap-f2-b').hover(
            function() {

                icon.assignDetailedResults('f2-b');
                $('.outcomeBwrap-icon').css({'transition':'0.15s', 'opacity':'1'});
                $(this).css({'transition':'0.15s', 'transform':'scale(1.15)'});
                $('.outcomeBwrap-icon').removeClass('o6 o5 o4 o3 o2 o1').addClass('o6');
            },
            function() {
                $(this).css({'transition':'0.15s', 'transform':'scale(1)'});
                $('.outcomeBwrap-icon').css({'transition':'0.15s', 'opacity':'0'});
            }
        )

        $('.holderWrap-f1-ig').hover(
            function() {
                $('.outcomeLeftwrapWrap-icon').css({'transition':'0.15s', 'opacity':'1'});
                $(this).css({'transition':'0.65s', 'transform-origin':'bottom',
                'transform':'scale(1.1)'});
            },
            function() {
                $(this).css({'transition':'0.65s', 'transform-origin':'bottom',
                'transform':'scale(1)'});
            }
        )

        $('.holderWrap-f2-ig').hover(
            function() {
                $('.outcomeRightwrapWrap-icon').css({'transition':'0.15s', 'opacity':'1'});
                $(this).css({'transition':'0.65s', 'transform-origin':'bottom',
                'transform':'scale(1.1)'});
            },
            function() {
                $(this).css({'transition':'0.65s', 'transform-origin':'bottom',
                'transform':'scale(1)'});
            }
        )




    }


    generateFinalPayoff();


}
