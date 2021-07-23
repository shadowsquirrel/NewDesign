// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ----------------           MAINDATA             ---------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //


let mainData = {};



window.onload = function() {




    // ------------------------ //
    // ------ debug data ------ //
    // ------------------------ //
    // mainData = {
    //
    //     myTutorial: {
    //         s2Done: 0,
    //         s3Done: 0,
    //         s4Done: 1,
    //         s5Done: 0,
    //         s6Done: 0,
    //     },
    //
    //     myRound: 1,
    //
    //     myCount: 3,
    //     sortedArray: [0,2,5,4,1,3],
    //
    //     treatment: [0,1],
    //
    //     s2: [ [ [0,11], [31,0]], [ [0,20], [40,0] ] ],
    //     // s2: [ [[0,20], [10,0]], [[0,5], [10,0]] ],
    //
    //     s3: [ [200, 100], [true, false] ],
    //     // s3: [ [799, 800], [false, true] ],
    //
    //     s4: [ [ [5, 1], [true, false], [50, 100] ], [ [5, 1], [false, true], [31, 131] ] ],
    //
    //     s5: [ [ [0,5], [7,0]], [ [0,3], [8,0] ] ],
    //     // s2: [ [[0,20], [10,0]], [[0,5], [10,0]] ],
    //
    //     s6: [ [200, 100], [true, false] ],
    //     // s3: [ [799, 800], [false, true] ],
    //
    // }
    mainData = {

        myRound: 1,

        myTutorial: {
            s1Done: 1,
            s2Done: 0,
            s3Done: 0,
            s4Done: 1,
            s5Done: 0,
            s6Done: 0,
            // no tuto variable for minigame
            // first time it is done is in round one and every one experience itn in og 1
        },

        myCount: 3,

        sortedArray: [0,2,5,4,1,3],

        myMiniGame: {
            totalScore: 1200,
            previousScore: 500,
            showMiniGame:true,
        },

        treatment: [0,1],

        s2: [ [Array(6), Array(6)], [Array(6), Array(6)] ],

        s3: [ Array(2), [true, false] ],
        // s3: [ [200, 100], [false, true] ],
        s4: [ [ Array(2), [true, false], Array(2) ], [ Array(2), [false, true], Array(2) ] ],
        // s4: [ [ Array(2), [false, true], Array(2) ], [ Array(2), [true, false], Array(2) ] ],

        s5: [ [ [0,5], [7,0]], [ [0,3], [8,0] ] ],

        s6: [ Array(2), Array(2) ],

    }
    // ------------------------ //
    // ------------------------ //
    // ------------------------ //



    var generatePracticeStage = function() {

        // console.log('sorted array: ' + mainData.sortedArray);
        // console.log('treatment: ' + mainData.treatment);

        // rearranges the sortedArray so that the left group is the subject's group
        tool.rearrangeGroupOrder(mainData);

        // rearrange all the data if the sortedArray is rearranged
        tool.rearrangeMainData(mainData);

        // console.log('sorted array: ' + mainData.sortedArray);
        // console.log('treatment: ' + mainData.treatment);


        // matches player's node data with the graphics
        practice_setup.fundamentals_og2(mainData);
        // practice_setup.fundamentals_og1(mainData);
        // practice_setup.fundamentals_ig(mainData);


        // calls all the different setup function using the parameters
        // defined/assigned by setup.fundamentals
        practice_setup.practice_og();


        // setup.value does nothing with the mainData so far we can pass on
        // previous graphical calculator values to here
        // also for og1-lc we will pass on h/s data etc..
        practice_initialize.values_og2(mainData);
        // practice_initialize.values_og1(mainData);
        // practice_initialize.values_ig(mainData);


        if(practice_calculator.globalVariable.playerIndex === -1) {
            practice_calculator.lock.activate([0,0,0,0,0,0]);
        }
        if(practice_calculator.globalVariable.playerIndex === 0) {
            practice_calculator.lock.activate([0,0,1,0,0,0]);

        }
        if(practice_calculator.globalVariable.playerIndex === 1) {
            practice_calculator.lock.activate([0,0,0,1,0,0]);
        }

        $('.sliderQuestion_l2').css({'opacity':'1'})

    }


    generatePracticeStage();


}
