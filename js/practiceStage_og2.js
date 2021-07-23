
var generatePracticeStage = function() {

    console.log('INSIDE PRACTICE STAGE');

    console.log('sorted array: ' + mainData.sortedArray);
    console.log('treatment: ' + mainData.treatment);

    // rearranges the sortedArray so that the left group is the subject's group
    tool.rearrangeGroupOrder(mainData);

    // rearrange all the data if the sortedArray is rearranged
    tool.rearrangeMainData(mainData);

    console.log('sorted array: ' + mainData.sortedArray);
    console.log('treatment: ' + mainData.treatment);


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
