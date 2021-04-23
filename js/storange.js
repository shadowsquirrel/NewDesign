

// s1,s2,h1,h2,os1,os2,oh1,oh2
calculator.values.set.helpSabo([0,0,0,0,0,0,0,0]);
calculator.values.set.efforts([200,200]);
calculator.refresh.sliders();





// s1,s2,h1,h2,os1,os2,oh1,oh2
calculator.values.set.helpSabo([0,0,10,0,0,0,0,0]);
calculator.refresh.sliders();






$('#debugInfoBoxText').html(id2);

<div class='debugInfoBoxText'>
    <p>
        <span id=debugInfoBoxText></span>
    </p>
</div>


calculator.varyHelpAnimationActive = false;
calculator.varySaboAnimationActive = false;


calculator.animate.recallDelay = 1;
calculator.animate.increment = 1;
calculator.varyHelpAnimationDelay = 500;
calculator.varyHelpAnimationActive = true;

var varyHelp = function(state, currentValue) {

    if(calculator.varyHelpAnimationActive) {

        if(state === 0) {

            calculator.change.f2(0, (currentValue + 1));

            setTimeout(()=>{
                varyHelp(1, currentValue)
            }, calculator.varyHelpAnimationDelay)

        }

        if(state === 1) {

            calculator.change.f2(0, currentValue);

            setTimeout(()=>{
                varyHelp(0, currentValue)
            }, calculator.varyHelpAnimationDelay)

        }

    } else {
        calculator.change.f2(0, currentValue);
    }

}

calculator.varySaboAnimationDelay = 500;
calculator.varySaboAnimationActive = true;

var varySabo = function(state, currentValue) {

    if(calculator.varySaboAnimationActive) {

        if(state === 0) {

            calculator.change.f1((currentValue + 1), 0);

            setTimeout(()=>{
                varySabo(1, currentValue)
            }, calculator.varySaboAnimationDelay)

        }

        if(state === 1) {

            calculator.change.f1(currentValue, 0);

            setTimeout(()=>{
                varySabo(0, currentValue)
            }, calculator.varyHelpAnimationDelay)

        }

    } else {
        calculator.change.f1(currentValue, 0);
    }

}


// s1,s2,h1,h2,os1,os2,oh1,oh2
calculator.values.set.helpSabo([0,0,0,29,0,0,0,0]);
calculator.refresh.sliders();

calculator.varySaboAnimationActive = true;
calculator.varyHelpAnimationActive = true;
calculator.animate.recallDelay = 1;
calculator.animate.increment = 1;
setTimeout(()=>{
    varyHelp(0, 29);
}, 750)

calculator.lock.activate([0,0,0,0,0,0]);

calculator.varySaboAnimationActive = false;
calculator.varyHelpAnimationActive = false;





box.transition('HS2-10102', 'HS2-10103', 0, 0, 1, 750);

calculator.questions.animateFollowerSpin = 0;
calculator.questions.activate.all([0,0,1,1,1,1]);

setTimeout(()=>{
    box.button.show('HS2-10103');
}, 3500)


minimizeFunction();
calculator.section.hs.opacity.SFiALiFiS([0.4,0.3,1,1,1,0]);
calculator.tutorial.specialHoverSetupActive = false;
calculator.titles.hs.hide();
calculator.titles.hs.ghost.adjustHeight();
calculator.titles.hs.ghost.show();
calculator.titles.hs.ghost.text();




calculator.lock.activate([0,0,1,0,0,0]);
calculator.values.set.helpSabo([0,0,0,0,0,0,0,0]);
calculator.refresh.sliders();


map.tutorial.result.introBoth()

map.tutorial.result.introBottom()

$('.IGBottomContestWrap').css({'transition':'scale(1)', 'filter':'opacity(1)'});
$('.IGTopContestWrap').css({'transform':'scale(1)', 'margin-top':'3px', 'filter':'opacity(1)'});


$('.IGTopContestWrap').css({'filter':'opacity(0)'});
