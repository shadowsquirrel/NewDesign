window.onload = function() {

    // var node = parent.node;

    // -------------------------------------------------------------------------- //
    // -------------------------------------------------------------------------- //
    // -----------------------   EXECUTING THE SETUPS   ------------------------- //
    // -------------------------------------------------------------------------- //
    // -------------------------------------------------------------------------- //

    // THIS IS CAUSING AN ERROR ON NOT HAVING A MAIN DATA i DONT UNDERSTAND WHY
    // let mainData = {};

    // node.on('htmlData', function(msg) {
    //
    //     console.log('message received');
    //     console.log(msg);
    //
    //     mainData = msg;
    //
    // })

    // some node commands to use later
    // node.emit('setHeight', 1165);
    // node.emit('countdown', 45);
    // node.emit('goup');

    // node.emit('submitDecision')


    // ------------------------ //
    // ------ debug data ------ //
    // ------------------------ //
    mainData = {
        myRound: 1,
        myTutorial: {
            s1Done: 1,
            s2Done: 1,
            s3Done: 1,
            s4Done: 0,
            s5Done: 0,
            s6Done: 0,
            fB1: 0,
            fB2: 0,
            fB3: 0,
            miniGame: 0,
        },
        sortedArray: [0,2,5,4,1,3],
        treatment: [0,1],
        myCount: 1
    }
    // ------------------------ //
    // ------------------------ //
    // ------------------------ //


    // console.log('sorted array: ' + mainData.sortedArray);
    // console.log('treatment: ' + mainData.treatment);

    // rearranges the sortedArray so that the left group is the subject's group
    tool.rearrangeGroupOrder(mainData);

    // console.log('sorted array: ' + mainData.sortedArray);
    // console.log('treatment: ' + mainData.treatment);

    // setup.value does nothing with the mainData so far we can pass on
    // previous graphical calculator values to here
    // also for og1-lc we will pass on h/s data etc..
    initialize.values();


    // matches player's node data with the graphics
    setup.fundamentals(mainData);


    // calls all the different setup function using the parameters
    // defined/assigned by setup.fundamentals
    setup.og();


    // uses map.setup() to pass calculator.globalVariables to map.globalVariables
    // map.setup() -> adjust which icon sets to show given the treatment and group
    //
    // given the setup show the desired stage
    //
    // shows the map with focus action etc...
    map.show.stage('og1_hs');

    // setup the info text displays based on the treatment
    setup.basicInfoText();

    // setup the info text displays based on tutorial experience
    tool.tutorialSetup(mainData, 's2');



    //-------------------------------------------------------------------------//
    //-------------------------------------------------------------------------//
    //----------------------- INFO BOX BUTTON ACTION --------------------------//
    //-------------------------------------------------------------------------//
    //-------------------------------------------------------------------------//


    // --------------- NODE ACTION -------------- //
    // move to the top of the div



    // show the first info box -> info box A-1
    setTimeout(()=>{

        box.transition('', 'A-1', 1, 0, 1, 0);

        setTimeout(()=>{
            box.button.show('A-1');
        }, 1500)

    }, 1500)


    listener = {};
    activator = {};






}
