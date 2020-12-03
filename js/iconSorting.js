var icon = {

    tool: {
        set:{}
    },
    set: {},
    display: {},
    values: {},
    stage1: {}

};

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

icon.tool.set.myRole = function(array) {

    $('.p0, .a10, .a11, .a20, .a21, .a30, .a31, .a40, .a41, .a50, .a51, .a60, .a61').css({'z-index':'0'});

    for(var i = 0; i < array.length; i++) {

        var myRole = array[i] ? 0 : 1;
        var myClass = '.a' + (i + 1) + myRole;
        var myRoleClass = '.cr' + (i + 1);
        $(myClass).css({'z-index':'1'});

        var myRole2 = array[i] ? '1' : '0';
        $(myRoleClass).css({'opacity': myRole2});

    }
}

icon.stage1.generateSortedArray = function() {

    icon.stage1.sortedArray = icon.tool.shuffle([1,2,3,4,5,6]);

}

icon.set.stage1 = function() {

    var mySort, myRole1, myRole2, roles;

    icon.stage1.generateSortedArray();

    mySort = icon.stage1.sortedArray;
    myRole1 = icon.tool.shuffle([true, false, false]);
    myRole2 = icon.tool.shuffle([false, true, false]);
    roles = myRole1.concat(myRole2);

    icon.tool.matchIcon(mySort);
    icon.tool.set.myRole(roles);

    $('.imgwrap2').css({'opacity':'0'});
    $('.playerBracketImage, .playerRandomSortImage, .wrap1, .imgwrap1').css({'opacity':'1'});
    $('.replayButton').css({'opacity':'0', 'z-index':'-1'});
    $('.hidder').css({'z-index':'2'});

}

icon.stage1.animateSort = function() {

    icon.stage1.showHide(0);
    setTimeout(()=>icon.stage1.showHide(1), 500);
    setTimeout(()=>icon.stage1.showHide(2), 1000);
    setTimeout(()=>icon.stage1.showHide(3), 1500);
    setTimeout(()=>icon.stage1.showHide(4), 2000);
    setTimeout(()=>icon.stage1.showHide(5), 2500);
    setTimeout(()=>icon.stage1.hideShowButtons(), 2500);


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

    $('.s1Icon').css({'display' : display});

}
