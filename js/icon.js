// ----------------------------------------------------------------- //
// ----------------------------------------------------------------- //
// ------------------------ STAGE 1 GENERATOR ---------------------- //
// ----------------------------------------------------------------- //
// ----------------------------------------------------------------- //

// --------------------------------------------------- //
// ----------------- GLOBAL VARIABLES ---------------- //
// --------------------------------------------------- //


let icon = {

    tool: {},
    set: {},
    display: {},
    values: {},
    stage1: {},
    reset: {},
    globalVariable: {},
    ff:{},

};


// defines functions under the icon object and assign values to global icon
// variables
//
let generateIcons = function(logicData) {


    icon.stage1.sortedArray = logicData.sortedArray;
    icon.globalVariable.playerIndex = logicData.myCount;



    // assigns the global treatment variables
    icon.set.treatment = function() {

        // for notational ease
        var ourGroup = 0;
        var theirGroup = 1;

        icon.globalVariable.ourFollowersAreHetero = logicData.treatment[ourGroup];
        icon.globalVariable.theirFollowersAreHetero = logicData.treatment[theirGroup];

        var sum = logicData.treatment.reduce((a,b) => a + b, 0);

        icon.globalVariable.bothHomo = 0;
        icon.globalVariable.bothHetero = 0;

        if(sum === 2) {
            icon.globalVariable.bothHomo = 0;
            icon.globalVariable.bothHetero = 1;
        }

        if(sum === 0) {
            icon.globalVariable.bothHomo = 1;
            icon.globalVariable.bothHetero = 0;
        }

    }

    // after setting the treatment display the according icons constelation
    icon.display.treatment = function() {

        $('.homoA, .heteroA, .homoB, .heteroB').css({'transform':'scale(0)'});

        if(icon.globalVariable.ourFollowersAreHetero) {
            $('.heteroA').css({'transform':'scale(1)'});
        } else {
            $('.homoA').css({'transform':'scale(1)'});
        }

        if(icon.globalVariable.theirFollowersAreHetero) {
            $('.heteroB').css({'transform':'scale(1)'});
        } else {
            $('.homoB').css({'transform':'scale(1)'});
        }

    }


    // for all leader icons hides the followers icons by scale(0)
    // then uses roleList predfined array [T, F, F, T, F, F] (always this order)
    // to always set first and 3rd elements are leaders the rest followers
    // given leader/follower identification, when it is a follower
    // we use another predefined list [T,F, T,F] which represent Strong and Weak
    // Again the order is always the same first follower in a group is strong
    // second follower in a group is weak thus the T, F pattern this list with
    // 4 elements represents 4 followers of two groups.
    // Every time a follower is identified the first element of this list is looked
    // to determine whether it is weak or strong then it is thrown away by shift
    //
    // Note: we perform this task regardless of the treatment
    // treatment classes are the ones to determine whether this below
    // modification we have done to set player to strong or weak
    // will be observed or not. Below classes are controled by heteroA/B classes
    //
    icon.set.strongWeak = function() {

        var s, w, l;

        var roleList = [true, false, false, true, false, false];

        // create two true false array of length two
        var a1 = [1,0];
        var a2 = [1,0];

        // combine them
        var a3 = a1.concat(a2);

        // console.log('weakstrong sorted array: ' + a3);
        // console.log('myrole array: ' + array);

        for(var i = 0; i < roleList.length; i++) {

            // there was an issue with the follower icon hidden behind the leader
            // icon slightly being seen as the follower icons are a bit fat.
            // To overcome that this below fix is applied in here
            // we initially hide all follower related icons
            if(roleList[i]) {
                l = '.a' + (i + 1) + '1';
                $(l).css({'transform':'scale(0)'});
            }

            // console.log('inside for loop checking myrole array element: ' + array[i]);
            // then whenever we see in myrole array a zero, bring this array
            // as whenever we see in myrole array a zero, it means we are dealing with
            // a follower
            if(!roleList[i]) {

                // console.log('the role is follower');

                s = '.strong' + (i + 1);
                w = '.weak' + (i + 1);

                // console.log('strong string of this follower: ' + s);
                // console.log('weak string of this follower: ' + w);

                $(s).css({'display':'none'});
                $(w).css({'display':'none'});

                // console.log('displaying the weakstrong array inside the for loop: ' + a3);
                // console.log('weakstrong array specific to this follower: ' + a3[0]);

                // if true make the follower strong
                if(a3[0]) {
                    // console.log('this follower is strong');
                    $(s).css({'display':'flex'});
                } else {
                    // console.log('this follower is weak');
                    // if false make the follower weak
                    $(w).css({'display':'flex'});
                }

                // console.log('finishing the procedure for one step of the loop');

                // shift the array
                a3.shift();

                // console.log('strongweak array after the shift: ' + a3);

            }

        }

    }


    // QUASI-REDUNDANT CODE BUT STILL BEING USED TO AVOID ADDITIONAL CSS ACTION
    //
    // This function assigns numbers under the icons. We do not have the numbers
    // anymore but they are still assigned (we just do not see them)
    // the reason we are keeping it is because everything else graphically is
    // arranged according to the space created by these numbers under the icons
    //
    icon.tool.matchIcon = function() {

        var myArray = icon.stage1.sortedArray;

        for(var i = 0; i < myArray.length; i++) {
            var myID = 'a' + (i + 1);
            var temp = document.getElementById(myID);
            temp.innerHTML = myArray[i];
        }

    }


    // We start with a shuffled array that needs to be assigned to leader and follower
    // roles based on their position in this array
    // index 0 and 3 are leaders the rest are followers
    // to do this a predefined roleList is defined [T, F, F, T, F, F]
    // Then the first icon of each group is always leader and the others
    // are always followers
    // in a way we have lots of redundant code in html redundant classes
    // mainly the ones about leader and followers as
    // for instance for the first icon it is always leader so follower icon
    // related classes are never used and therefore icons defined under them
    // are never used
    //
    icon.set.myRole = function() {

        // roles will always be determined by the order in the shuffled array
        // thus first element of each group is always the leader and the rest are follower
        let roleList =  [true,false,false, true,false,false];

        // set everything to invisible
        $('.p0, .a10, .a11, .a20, .a21, .a30, .a31, .a40, .a41, .a50, .a51, .a60, .a61').css({'z-index':'0'});

        for(var i = 0; i < roleList.length; i++) {

            // if roleList[i] false then myRole gets 1 -> .ax1 represents
            // follower related icons class
            var myRole = roleList[i] ? 0 : 1;
            // array is true or false match that to the class tag a1x a2x a3x etc...
            var myClass = '.a' + (i + 1) + myRole;
            // all icons are initially at z-index 0
            $(myClass).css({'z-index':'1'});

            //--- crown setup ----//
            // we also have the crown icon for every icon cr1, cr2, cr3, etc...
            var myRoleClass = '.cr' + (i + 1);
            // if leader i.e. if array[i] true then show crown
            var myRole2 = roleList[i] ? '1' : '0';
            $(myRoleClass).css({'opacity': myRole2});

        }
    }


    icon.set.me = function() {

        var pI = icon.globalVariable.playerIndex;
        var me = tool.displayedShuffledList.indexOf(pI);

        var s = '.mememe' + (me + 1);
        var k = '.sub' + (me + 1);

        tool.sparkleMe = s;

        $(k).css({'opacity':'0'});
        $(s).css({'opacity':'1'});


        var me2 = icon.stage1.sortedArray.indexOf(pI);

        var l = '.objective' + (me2 + 1);
        var m = '.subjective' + (me2 + 1);

        $(l).css({'display':'none'});
        $(m).css({'display':'flex'});

    }


    icon.reset.stage1 = function() {

        $('.objective1,  .objective2, .objective3').css({'display':'flex'});
        $('.subjective1,  .subjective2, .subjective3').css({'display':'none'});

    }


    // ------- MAIN STAGE GENERATOR FUNCTION ---------- //


    icon.set.stage1 = function() {

        icon.globalVariable.isPracticeRound = true;

        icon.reset.stage1();

        // quasi-necessary. Do not erase in future!
        icon.tool.matchIcon();

        icon.set.myRole();

        icon.set.treatment();

        icon.set.strongWeak();

        icon.set.me();

        icon.display.treatment();


        // hide  all the images of the sorted icons
        $('.imgwrap2').css({'opacity':'0'});
        // initially show the 6 yellow icons and replay button etc.
        $('.playerBracketImage, .playerRandomSortImage, .wrap1, .imgwrap1').css({'opacity':'1'});
        $('.replayButton').css({'opacity':'0', 'z-index':'-1'});
        $('.hidder').css({'z-index':'2'});


        console.log('player index: ' + icon.globalVariable.playerIndex);
        console.log('rearrangement of groups: ' + icon.stage1.sortedArray);
        console.log('our group is hetero: ' + icon.globalVariable.ourFollowersAreHetero);
        console.log('their group is hetero: ' + icon.globalVariable.theirFollowersAreHetero);

    }

    icon.display.stage1 = function(show) {

        var display = show ? 'flex' : 'none';

        $('.s1Icon').css({'display' : display});

    }


    // --------------- SORTING ANIMATION ----------------//


    icon.stage1.showHide = function(index) {

        // this is for the other players
        // they receive the random animation index

        var myString1, myString2, myNewIndex;



        // var pI = icon.globalVariable.playerIndex;

        // ---------- hide the icon in wrap 1 -------------- //

        // Here the index used should be based on the index based on the
        // mainShuffledList
        var displayedIndex = tool.displayedShuffledList.indexOf(index);
        myString1 = '.initialIwIndex' + (displayedIndex + 1);
        // myString1 = '.initialIwIndex' + (index + 1);
        $(myString1).css({'opacity':'0'});



        // ---- show the icon in wrap 2 (show the type) ---- //


        var newArray = icon.stage1.sortedArray;
        var roleIndex = newArray.indexOf(index);
        myString2 = '.iwIndex' + (roleIndex + 1);
        $(myString2).css({'opacity':'1'})

    }

    icon.stage1.showHide2 = function(indexMe, indexPi) {

        // here the index is the index based on the MAIN shuffled index

        var myString1, myString2, myNewIndex;



        // var pI = icon.globalVariable.playerIndex;

        // ---------- hide the icon in wrap 1 -------------- //

        // Here the index used should be based on the index based on the
        // mainShuffledList

        myString1 = '.initialIwIndex' + (indexMe + 1);
        // myString1 = '.initialIwIndex' + (index + 1);
        $(myString1).css({'opacity':'0'});



        // ---- show the icon in wrap 2 (show the type) ---- //

        // here the place to be shown should be based on the actual
        //  shuffled sorting of the player

        var newArray = icon.stage1.sortedArray;
        var roleIndex = newArray.indexOf(indexPi);
        myString2 = '.iwIndex' + (roleIndex + 1);
        $(myString2).css({'opacity':'1'})

    }

    icon.stage1.animateSort = function(delay) {

        sparkleActive = false;

        var delay = delay === undefined ? 750 : delay;

        var a = tool.shuffle([0,1,2,3,4,5]);

        // var a = tool.shuffledInitialGroup;

        console.log('shuffled order: ' + a);



        // var me = icon.globalVariable.playerIndex;

        var pI = icon.globalVariable.playerIndex;
        var me = tool.displayedShuffledList.indexOf(pI);



        console.log('player index: ' + pI);

        var myIndex = a.indexOf(pI);

        a.splice(myIndex, 1);

        console.log('subject taken out of the list: ' +  a);

        icon.stage1.showHide(a[0]);
        setTimeout(()=>icon.stage1.showHide(a[1]), delay * 1);
        setTimeout(()=>icon.stage1.showHide(a[2]), delay * 2);
        setTimeout(()=>icon.stage1.showHide(a[3]), delay * 3);
        setTimeout(()=>icon.stage1.showHide(a[4]), delay * 4);

        setTimeout(()=>{
            // me indicates the place to make hide
            // pI indicates the place to make show
            icon.stage1.showHide2(me, pI);
            $('.dynamicYouAreWrap').css({'opacity':'0'});
            setTimeout(()=>{
                tool.set.youGraphics(mainData);
            }, 500)
        }, delay * 5);

        setTimeout(()=>{
            $('.playerBracketImage, .playerRandomSortImage, .wrap1').css({'opacity':'0'});
            $('.wrap2').css({
                'transition':'1s',
                'transition-delay':'0.5s',
                'margin-top':'-597px',
                'margin-bottom':'26px'
            });
        }, delay * 6);

        setTimeout(()=>{
            // shows the first info box and sets the text for all the info boxes
            icon.stage1.text();
        }, delay * 7)

        setTimeout(()=>{
            unbalanceScale(0);
        }, delay * 8)



    }




    // -------- FINAL FEEDBACK ACTION -------- //


    icon.ff.showAllIcons = function() {

        for(var i = 1; i < 7; i++) {
            myString2 = '.iwIndex' + i;
            $(myString2).css({'transition':'3s', 'opacity':'1'})
        }

    }

    icon.ff.showMe = function(myData) {

        var newArray = myData.sortedArray;
        var roleIndex = newArray.indexOf(myData.myCount);
        myString2 = '.iwIndex' + (roleIndex + 1);
        $(myString2).css({'transition':'3s', 'opacity':'1'})

        setTimeout

    }




    //-------------------------------------------//


    // icon.set.stage1();
    // icon.display.stage1(true);


}
