node.game.updateRole = function() {

    // console.log();
    // console.log();
    // console.log();
    // console.log('######      inside node.game.updateRole()      ######');

    // related Indexes
    var winnerGroupIndex, loserGroupIndex, winnerFollowerIndex;

    // related player objects
     var lostLeader, winnerFollower;

     // for ease of notation
     var results = 1;
     var loserLeaderIndex = -1;  // leader always has index -1

     var myData = node.game.myData;

     // console.log('myData.s3: ' + myData.s3);
     // console.log('myData.s3[1]: ' + myData.s3[results]);


     // group index is either 0 or 1 (group A/1 or group B/2)
     loserGroupIndex = myData.s3[results].indexOf(false);

     // console.log();
     // console.log('loserGroupIndex: ' + loserGroupIndex);
     // console.log('myData.s4[loserGroupIndex]: ' + myData.s4[loserGroupIndex]);
     // console.log('myData.s4[loserGroupIndex][results]: ' + myData.s4[loserGroupIndex][results]);

     // follower index is either 0 or 1 (strong/1st or weak/2nd follower)
     winnerFollowerIndex = myData.s4[loserGroupIndex][results].indexOf(true);

     // console.log();
     // console.log('winnerFollowerIndex: ' + winnerFollowerIndex);

     lostLeader = node.game.getPlayerByGroupAndRole(loserGroupIndex, loserLeaderIndex);
     winnerFollower = node.game.getPlayerByGroupAndRole(loserGroupIndex, winnerFollowerIndex);


     console.log();
     console.log(' ---------- Lost Leader ----------- ');
     node.game.showPlayer(lostLeader)
     console.log();
     console.log(' --------- Winner Follower ----------- ');
     node.game.showPlayer(winnerFollower);
     console.log();

     // swap the indexes of the lost leader and winner follower
     var tempIndex = winnerFollower.myIndex;
     winnerFollower.myIndex = -1; // follower becomes the new leader
     lostLeader.myIndex = tempIndex;// leader replaces follower's role

     console.log();
     console.log(' --- UPDATING CLIENT node.game.myRole = LEADER/FOLLOWER --- ');
     console.log();

     // informing the lost leader of becoming a follower
     node.say('updateRole', lostLeader.id, 'FOLLOWER');
     // informing the winner follower of becoming a leader
     node.say('updateRole', winnerFollower.id, 'LEADER');

}

node.game.remindRole = function(player) {



}

node.game.requestRole = function() {

    // open a listener on the reported roles
    node.on.data('roleReport', function(msg) {
        var somePlayer = node.game.pl.get(msg.from);
        var myRole = msg.data;

        // given the report print player and the role
        node.game.showPlayer(somePlayer);
        console.log();
        console.log('--- current Role tag: ' + myRole + ' ---');
        console.log();

    })

    // trigger role report in each client by a role request
    node.game.pl.each(function(player) {
        node.say('roleRequest', player.id)
    })

}

// listens to a role request from LOGIC
// reports the current role to LOGIC
node.on.data('roleRequest', function() {

    node.say('roleReport', 'SERVER', node.game.myRole);

})



node.game.listenForDecision = function(stage) {

    var listenerTag = 's' + stage + 'Decision'

    node.on.data(listenerTag, function(msg) {

        node.game.updateData(msg, stage);

        // For debugging, eventually will be taken out
        // Simply logs in the console the related player's
        // just received message recorded into the main data
        var player = node.game.pl.get(msg.from);
        node.game.showPlayer(player);
        node.game.showData(player, stage);

    });


}
