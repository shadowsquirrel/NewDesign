var icon = {

    tool:
    {
        set:{}
    },
    set: {},
    display: {},
    values: {},
    stage1: {},
    globalVariable: {},

};


icon.globalVariable.ourFollowersAreHetero = undefined;
icon.globalVariable.theirFollowersAreHetero  = undefined;

icon.globalVariable.bothHomo = undefined;
icon.globalVariable.bothHetero = undefined;

icon.globalVariable.genericIcons = undefined;
icon.globalVariable.showUnevenSign = undefined;
icon.globalVariable.showUnevenIcon = false;

icon.display.genericIcons = function() {

    $('.genericGroupIcon').css({'display':'none'});
    $('.roleSpecificIcons').css({'display':'flex'});

    if(icon.globalVariable.genericIcons) {
        $('.genericGroupIcon').css({'display':'flex'});
        $('.roleSpecificIcons').css({'display':'none'});
    }

}

icon.tool.shuffle = function(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;

};

// Need to set the treatment
// homo treatment: bothHomo = 1; bothHetero = 0
// both hetero treatment: bothHomo = 0; bothHetero = 1
// Asymmetric treatment: bothHomo = 0; bothHetero = 0 and
// the below function will randomly decide which side is hetero.
icon.set.treatment = function() {

    icon.globalVariable.ourFollowersAreHetero = 0;
    icon.globalVariable.theirFollowersAreHetero = 0;

    if(Math.random() > 0.5) {
        icon.globalVariable.ourFollowersAreHetero = 1;
    } else {
        icon.globalVariable.theirFollowersAreHetero = 1;
    }

    if(icon.globalVariable.bothHomo) {
        icon.globalVariable.ourFollowersAreHetero = 0;
        icon.globalVariable.theirFollowersAreHetero = 0;
    }

    if(icon.globalVariable.bothHetero) {
        icon.globalVariable.ourFollowersAreHetero = 1;
        icon.globalVariable.theirFollowersAreHetero = 1;
    }

}

// after setting the treatment display the according icons constelation
icon.display.treatment = function() {

    $('.homoA, .heteroA, .homoB, .heteroB').css({'transform':'scale(0)'});
    $('.unevenRight, .unevenLeft').css({'transition':'0s', 'opacity':'0'});

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

icon.display.unevenSign = function() {

    if(icon.globalVariable.ourFollowersAreHetero) {
        if(icon.globalVariable.showUnevenSign && icon.globalVariable.showUnevenIcon){
            $('.unevenLeft').css({'transition':'0.5s', 'opacity':'1'});
        }
    }

    if(icon.globalVariable.theirFollowersAreHetero) {
        if(icon.globalVariable.showUnevenSign && icon.globalVariable.showUnevenIcon){
            $('.unevenRight').css({'transition':'0.5s', 'opacity':'1'});
        }
    }

}
// array is defined inside icon.set.stage1 by the role array internally defined
// this array is something like [0,1,0, 0,0,1] where 1 is leader and 0's are followers
icon.tool.set.strongWeak = function(array) {

    var s, w, l;

    // create two true false array of length two
    var a1 = [1,0];
    var a2 = [1,0];

    // randomize their order
    a1 = icon.tool.shuffle(a1);
    a2 = icon.tool.shuffle(a2);

    // combine them
    var a3 = a1.concat(a2);

    // console.log('weakstrong sorted array: ' + a3);
    // console.log('myrole array: ' + array);

    for(var i = 0; i < array.length; i++) {

        // there was an issue with the follower icon hidden behind the leader
        // icon slightly being seen as the follower icons are a bit fat.
        // To overcome that this below fix is applied in here
        if(array[i]) {
            l = '.a' + (i + 1) + '1';
            $(l).css({'transform':'scale(0)'});
        }

        // console.log('inside for loop checking myrole array element: ' + array[i]);
        // then whenever we see in myrole array a zero bring this array
        // as whenever we see in myrole array a zero it means we are dealing with
        // a follower
        if(!array[i]) {

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

icon.tool.matchIcon = function(array) {

    for(var i = 0; i < array.length; i++) {
        var myID = 'a' + (i + 1);
        var temp = document.getElementById(myID);
        temp.innerHTML = array[i];
    }

}

icon.tool.set.myRole = function(array) {

    // set everything to invisible
    $('.p0, .a10, .a11, .a20, .a21, .a30, .a31, .a40, .a41, .a50, .a51, .a60, .a61').css({'z-index':'0'});

    for(var i = 0; i < array.length; i++) {

        var myRole = array[i] ? 0 : 1;
        // array is true or false match that to the class tag a1x a2x a3x etc...
        var myClass = '.a' + (i + 1) + myRole;
        // we also have the crown icon for every icon cr1, cr2, cr3, etc...
        var myRoleClass = '.cr' + (i + 1);
        // all icons are initially at index 0
        $(myClass).css({'z-index':'1'});

        var myRole2 = array[i] ? '1' : '0';
        $(myRoleClass).css({'opacity': myRole2});

    }
}

icon.stage1.generateSortedArray = function() {

    icon.stage1.sortedArray = icon.tool.shuffle([1,2,3,4,5,6]);

}

icon.set.forcedUnevenGroup = false;
icon.set.stage1 = function() {

    var mySort, myRole1, myRole2, roles;

    icon.display.genericIcons();

    // generate the shuffled array
    icon.stage1.generateSortedArray();

    // my sort is the shuffled array
    mySort = icon.stage1.sortedArray;
    // generate shuffled true false where true is for leader...
    // myrole1 is for the first group myrole2...
    myRole1 = icon.tool.shuffle([true, false, false]);
    myRole2 = icon.tool.shuffle([false, true, false]);
    // combine them into a single role array preserving the order
    roles = myRole1.concat(myRole2);

    // match icon matches the sorted number array with the numbers underneat the icons
    icon.tool.matchIcon(mySort);

    icon.tool.set.myRole(roles);

    if(!icon.set.forcedUnevenGroup) {
        icon.set.treatment();
    }

    icon.display.treatment();
    icon.tool.set.strongWeak(roles);

    // hide  all the images of the sorted icons
    $('.imgwrap2').css({'opacity':'0'});
    // initially show the 6 yellow icons and replay button etc.
    $('.playerBracketImage, .playerRandomSortImage, .wrap1, .imgwrap1').css({'transition':'0.3s', 'opacity':'1'});
    $('.replayButton').css({'opacity':'0', 'z-index':'-1'});
    $('.hidder').css({'z-index':'2'});

    $('.unevenRight, .unevenLeft').css({'transition':'0s', 'opacity':'0'});

}

icon.stage1.animateSort = function(delay) {

    var d = delay === undefined ? 500 : delay;

    icon.stage1.showHide(0);
    setTimeout(()=>icon.stage1.showHide(1), d);
    setTimeout(()=>icon.stage1.showHide(2), 2*d);
    setTimeout(()=>icon.stage1.showHide(3), 3*d);
    setTimeout(()=>icon.stage1.showHide(4), 4*d);
    setTimeout(()=>icon.stage1.showHide(5), 5*d);
    setTimeout(()=>icon.stage1.hideShowButtons(), 5*d);
    setTimeout(()=>icon.display.unevenSign(), 7*d);


}

icon.stage1.showHide = function(index) {

    var myString1, myString2, myNewIndex;

    var newArray = icon.stage1.sortedArray;

    myString1 = '.initialIwIndex' + (index + 1);
    $(myString1).css({'opacity':'0'});

    myNewIndex = newArray.indexOf(index + 1);
    myString2 = '.iwIndex' + (myNewIndex + 1);
    $(myString2).css({'opacity':'1'})

}

icon.stage1.hideShowButtons = function() {
    $('.playerBracketImage, .playerRandomSortImage, .wrap1').css({'opacity':'0'});
    $('.replayButton').css({'opacity':'1', 'z-index':'2'});
    $('.hidder').css({'z-index':'-1'});
}

icon.stage1.button1 = document.getElementById('stage1RandomButton');
icon.stage1.button1.onclick = function() {

    icon.stage1.animateSort();
}

icon.stage1.button2 = document.getElementById('replayButton');
icon.stage1.button2.onclick = function() {

    icon.set.stage1();

}

icon.display.stage1 = function(show) {

    var display = show ? 'flex' : 'none';
    var o = show ? '1' : '0';

    $('.s1Icon').css({'display' : display});
    setTimeout(()=>{
        $('.s1Icon').css({'transition':'0.5s', 'opacity': o});
    }, 100)

}
