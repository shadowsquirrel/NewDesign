
var metaMoveBottom = function(top, left, scale) {

    top = top === undefined ? 636 : top;
    left = left === undefined ? 310 : left;
    scale = scale === undefined ? 1 : scale;

    top = top + 'px';
    left = left + 'px';
    scale = 'scale(' + scale + ')';

    $('.metaNorp').css({'transition':'0.2s', 'opacity':'0'})
    setTimeout(()=>{
        $('.metaNorp').css({'transition':'0s',
        'top':top, 'left':left , 'transform':scale});
    }, 210)
    setTimeout(()=>{
        $('.metaNorp').css({'transition':'0.5s',
        'opacity':'1'});
    }, 250)



    flowLoad(1);

}

var setMetaNorp = function(top, left, scale) {

    top = top + 'px';
    left = left + 'px';
    scale = 'scale(' + scale + ')';

    $('.metaNorp').css({'transition':'0s',
    'top':top, 'left':left , 'transform':scale});

}

var updateLoad = function(norp, np) {

    np = np === undefined ? 6 : np;

    // if(norp > np) {
        var ap = 6 - norp;
        var nnorp = np - ap;
    // } else {
    //     var nnorp = norp;
    // }


    $('.load').css({'filter':'grayscale(1) opacity(0.7) contrast(0.5)'});

    for(var i = 1; i <= nnorp; i++) {

        var icon = '.r-' + i;

        $(icon).css({'transition':'0.5s',
        'filter':'grayscale(0) contrast(1) drop-shadow(0px 7px 3px black) opacity(1)'});

    }

    console.log('norp: ' + norp);
    console.log('ap: ' + ap);
    console.log('np: ' + np);
    console.log('nnorp: ' + nnorp );

    updateLoadText(nnorp, np);

    showLoad(np);

}

var updateLoadText = function(norp, np) {

    $('.norpTextWrap').css({'transition':'1s', 'opacity':'1'});

    // if(norp >= np) {
        var noap = np - norp;
    // } else {
    //
    // }

    console.log('np: ' + np);
    console.log('nnorp: ' + norp);
    console.log('noap: ' + noap);

    var p = ' players';

    if(noap === 1) {
        p = ' player';
    }

    p = noap + p;

    $('#noap').html(p);

}

var hideLoadText = function() {

    $('.norpTextWrap').css({'transition':'0.2s', 'opacity':'0'});

}

var showLoad = function(np, scale) {

    $('.imgWrapLoad').css({'display':'none'});

    for(var i = 1; i <= np; i++) {
        var icon = '.l-' + i;
        $(icon).css({'display':'flex'});
    }

    scale = scale === undefined ? 0.7 : scale;

    scale = 'scale(' + scale + ')';

    setTimeout(()=>{
        $('.norp').css({'transition':'0.5s', 'opacity':'1', 'z-index':'100', 'transform': scale});
    }, 250)

}

var hideLoad = function() {

    $('.norp').css({'transition':'0.5s', 'opacity':'0', 'z-index':'-1000', 'transform':'scale(0)'});

}

var continueFlowing = true;

var flowLoad = function(index, np) {

    if(continueFlowing) {

        np = np === undefined ? 6 : np;

        index = index === 0 ? 1 : index;

        var prevIndex = index === 1 ? 6 : (index - 1);


        var previousIcon = '.l-' + prevIndex;
        var currentIcon = '.l-' + index;

        // console.log();
        // console.log('prev');
        // console.log(previousIcon);
        // console.log('curr');
        // console.log(currentIcon);
        // console.log();

        $(currentIcon).css({'transition':'0.75s', 'filter':'hue-rotate(40deg) brightness(1.5)'});
        setTimeout(()=>{
            $(previousIcon).css({'transition':'1.25s', 'filter':'hue-rotate(0deg) brightness(1)'});
        }, 0)

        var nextIndex = (index + 1) % (np+1);

        setTimeout(()=>{
            flowLoad(nextIndex);
        }, 250)

    } else {

        $('.l-1, .l-2, .l-3, .l-4, .l-5, .l-6').css({'transition':'1s', 'filter':'hue-rotate(0deg) brightness(1)'});

    }

}
