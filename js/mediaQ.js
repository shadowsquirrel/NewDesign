var windowHeight = window.innerHeight

var adjustWindowSize = function() {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    console.log('width: ' + w);

    console.log('height: ' + h);

    var topMargin = (h - 612) * 0.42 + 'px';

    console.log('difference: ' + (h - 629));
    console.log(topMargin);

    $('.wrap').css({'transition':'0.2s', 'margin-top':topMargin});

}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", adjustWindowSize);
