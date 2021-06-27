// ----------------  GLOBAL VARIABLE ------------- //

let bb = {

    data : {

        leaderContest: {
            // [ [efo1, efo2, pWin], ...]
            dynamic: [],
            // [powerRatio]
            static: Array(1)
        },

        followerHelpSabo: {
            // [ [h1, s1, h2, s2, oh1, os1, oh2, os2, efo, oefo], ...]
            dynamic: [],
            // [pWin, powerRatio, playerIndex, followerPower -> -1: weak, 0: even, 1:strong]
            static: Array(4)
        },

        followerContest: {
            // [ [efo1, efo2, pWin], ...]
            dynamic: [],
            // [powerRatio]
            static: Array(1)
        }

    },

    listen: {},

    activators:{},

}

var generateBB = function() {


    bb.activators.followerHelpSabotage = false;
    bb.activators.leaderContest = false;
    bb.activators.followerContest = false;

    bb.activateListeners = function(stage) {

        bb.activators.followerHelpSabotage = false;
        bb.activators.leaderContest = false;
        bb.activators.followerContest = false;

        if(stage === 2 || stage === 5) {
            bb.activators.followerHelpSabotage = true;
        }

        if(stage === 3 || stage === 6) {
            bb.activators.leaderContest = true;
        }

        if(stage === 4) {
            bb.activators.followerContest = true;
        }

    }

    bb.activators.static = true;

    bb.listen.leaderContest = function() {

        if(bb.activators.leaderContest) {

            bb.data.leaderContest.dynamic.push([efo,oefo,pwin]);

            console.log('leader contest dynamic bb');
            console.log(bb.data.leaderContest.dynamic);

            if(bb.activators.static) {

                var efi1 = efi / (efi + oefi);
                var efi2 = oefi / (efi + oefi);

                if(efi1 > efi2) {
                    efi1 = efi1 / efi2;
                    efi2 = 1;
                } else {
                    efi2 = efi2 / efi1;
                    efi1 = 1;
                }

                bb.data.leaderContest.static = [efi1, efi2];

                console.log('leader contest static bb');
                console.log(bb.data.leaderContest.static);

                bb.activators.static = false;

            }

        }

    }

    bb.listen.followerHelpSabo = function() {

        if(bb.activators.followerHelpSabo) {

            bb.data.followerHelpSabo.dynamic.push([h1, s1, h2, s2, oh1, os1, oh2, os2, efo, oefo]);

            console.log('follower help sabo dynamic bb');
            console.log(bb.data.followerHelpSabo.dynamic);

            if(bb.activators.static) {

                var efi1 = efi / (efi + oefi);
                var efi2 = oefi / (efi + oefi);

                if(efi1 > efi2) {
                    efi1 = efi1 / efi2;
                    efi2 = 1;
                } else {
                    efi2 = efi2 / efi1;
                    efi1 = 1;
                }

                // 0 for even followers
                var strenght = 0;

                if(map.globalVariable.ourSideIsHetero) {

                    if(calculator.globalVariable.playerIndex === 0) {
                        // 1 for strong follower
                        strength = 1;
                    } else {
                        // -1 for weak follower
                        strength = -1;
                    }

                }

                // [pWin, powerRatio, playerIndex -> 0 for f1 1 for f2, followerPower]
                bb.data.followerHelpSabo.static = [pwin, [efi1, efi2], calculator.globalVariable.playerIndex, strength];

                console.log('follower help sabo static bb');
                console.log(bb.data.followerHelpSabo.static);

                bb.activators.static = false;

            }

        }

    }

    bb.listen.followerContest = function() {

        if(bb.activators.followerContest) {

            bb.data.followerContest.dynamic.push([efo1,efo2,IG_pwin]);

            console.log('follower contest dynamic bb');
            console.log(bb.data.followerContest.dynamic);

            if(bb.activators.static) {

                bb.data.followerContest.static = [[efi1, efi2]];

                console.log('follower contest static bb');
                console.log(bb.data.followerContest.static);

                bb.activators.static = false;

            }

        }

    }


}

generateBB();
