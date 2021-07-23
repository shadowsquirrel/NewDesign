
        var crown = {
            set: {},
            var: {},
        }

        crown.show = function() {

            $('.crownSwitchAnimationWrap').css({'display':'flex'});
            setTimeout(()=>$('.crownSwitchAnimationWrap').css({'transition':'0.5s', 'opacity':'1'}), 50);

        }

        crown.hide = function() {

            $('.crownSwitchAnimationWrap').css({'transition':'0.7s', 'margin-bottom':'-190px', 'opacity':'0'});
            setTimeout(()=>$('.crownSwitchAnimationWrap').css({'display':'none'}),350);

        }

        crown.stopAnimate = false;

        crown.infoBox13IsClose = true;
        crown.infoBox14IsClose = true;
        crown.blackFollower = true;

        crown.strongFollower = false;
        crown.weakFollower = false;
        crown.normalFollower = false;
        crown.asymmetricHetero = false;

        crown.determineFollowerPower = function() {

            $('.normalFollowers, .strongFollowers, .weakFollowers').css({'display':'none'});

            if(crown.strongFollower) {
                $('.normalFollowers, .strongFollowers, .weakFollowers').css({'display':'none'});
                $('.strongFollowers').css({'display':'block'});
            }

            if(crown.weakFollower) {
                $('.normalFollowers, .strongFollowers').css({'display':'none'});
                $('.weakFollowers').css({'display':'block'});
            }

            if(crown.normalFollower) {
                $('.strongFollowers, .weakFollowers').css({'display':'none'});
                $('.normalFollowers').css({'display':'block'});
            }

        }

        crown.tutoTreatment = 1;
        crown.counter = 0;
        crown.treatment = function() {

            if(crown.tutoTreatment === 0) {

                crown.strongFollower = false;
                crown.weakFollower = false;
                crown.normalFollower = true;

                crown.determineFollowerPower();

            } else {

                if(crown.counter % 2 === 0) {
                    crown.strongFollower = true;
                    crown.weakFollower = false;
                    crown.normalFollower = false;
                } else {
                    crown.strongFollower = false;
                    crown.weakFollower = true;
                    crown.normalFollower = false;

                    if(crown.asymmetricHetero) {
                        crown.strongFollower = false;
                        crown.weakFollower = false;
                        crown.normalFollower = true;
                    }
                }

                crown.determineFollowerPower();

            }

            crown.counter++;

        }



        crown.animateDeny = function() {

            if(!crown.stopAnimate) {

                if(crown.blackFollower) {

                        map.globalVariable.winnerLeaderIndex = 1;
                        map.globalVariable.winnerFollowerIndex = 0;
                        map.set.OG2ResultingIcons2();


                        $('.IGBottomContestWrap').css({'transition':'1.5s', 'opacity':'0'});
                        $('.IGTopContestWrap').css({'transition':'0.5s', 'opacity':'1'});

                } else {

                    setTimeout(()=>{

                        map.globalVariable.winnerLeaderIndex = 0;
                        map.globalVariable.winnerFollowerIndex = 1;
                        map.set.OG2ResultingIcons2();

                    }, 1500)

                    $('.IGBottomContestWrap').css({'transition':'1.5s', 'opacity':'1'});
                    $('.IGTopContestWrap').css({'transition':'0.5s', 'opacity':'0'});

                    // $('.followerWinning2').css({'transition':'1s', 'opacity':'0'});
                    // $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'1'});
                    // $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});
                }

                setTimeout(()=>{
                    crown.treatment();
                }, 1100)

                $('.followerCrown').css({'transition':'1.5s'});
                $('.leaderCrown').css({'transition':'0.8s', 'margin-left':'-76px'});
                setTimeout(()=>{
                    $('.leaderCrown').css({'transition':'0.8s', 'margin-top':'84px'});
                }, 100)

                setTimeout(()=>{
                    $('.leaderCrown').css({'transition':'0.7s', 'opacity':'0'});
                    $('.myLeaderDenied').css({'transition':'0.39s', 'opacity':'1'});
                }, 900)

                setTimeout(()=>{
                    if(crown.infoBox13IsClose) {
                        setTimeout(()=>{
                            crown.reset();
                        }, 1)
                    } else {
                        crown.newLeader();
                    }
                }, 1750)

            } else {
                $('.crownSwitchAnimationWrap').css({'transition':'0.5s', 'opacity':'0'});
                $('.OG1LeadersIcon').css({'transition':'1s', 'margin-right':'-4px', 'margin-top':'4px',
                'transform-origin':'bottom', 'transform':'scale(1)'});
                $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'1s', 'opacity': '1'});
                $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'1s', 'opacity': '1'});
                $('.IGTopContestWrap').css({'transition':'1s', 'opacity':'1'});
                $('.IGBottomContestWrap').css({'transition':'1s', 'opacity':'1'});
                map.opacity.cover([0,0,1], 1);
                map.opacity.inside([1,0,0], 1)
                map.opacity.section([0.05,0.3,0.05], 1);

            }

        }

        crown.newLeader = function() {

            $('.leaderCrown').css({'transition':'0.5s', 'opacity':'1'});
            $('.myLeaderDenied').css({'transition':'0.5s', 'opacity':'0'});

            setTimeout(()=>{
                $('.followerCrown').css({'transition':'0.5s', 'opacity':'0'});
                $('.leaderCrown').css({'transition':'0.5s', 'opacity':'1'});
            }, 50)

            setTimeout(()=>{
                $('.leaderCrown').css({'transition':'1.5s', 'opacity':'0', 'margin-left':'181px', 'margin-top':'-33px'});
                $('.followerCrown').css({'transition':'1.5s', 'opacity':'1', 'margin-left':'181px', 'margin-top':'-33px'});

                if(crown.infoBox14IsClose) {
                    setTimeout(()=>{
                        if(crown.blackFollower) {
                            $('.followerWinning').css({'transition':'0.6s', 'opacity':'1'});
                        } else {
                            $('.followerWinning2').css({'transition':'0.6s', 'opacity':'1'});
                        }
                    },0)
                }

                $('.leaderLosing2').css({'transition':'1.5s', 'opacity':'0'});
                $('.leaderLosing').css({'transition':'1.5s', 'opacity':'0'});


                map.opacity.section([0.05,1,0.05], 1);
                map.opacity.cover([0,0,0], 1);
                map.opacity.inside([1,0,1], 1)
                $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0s', 'opacity': '0'});
                $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'0s', 'opacity': '0'});
                $('.OG1LeadersIcon').css({'transition':'1.5s', 'margin-right':'-4px', 'margin-top':'4px',
                'transform-origin':'bottom', 'transform':'scale(1.5)'})
                $('.OG2FollowersWrapLeft, .OG2FollowersWrapRight').css({'transition':'0s', 'opacity': '0'});
                $('.OG2FollowerArrowsLeft, .OG2FollowerArrowsRight, .arrowDashed').css({'transition':'0s', 'opacity': '0'});
                $('.OG2LeadersIcon').css({'transition':'1.5s', 'margin-right':'-4px', 'margin-top':'4px',
                'transform-origin':'bottom', 'transform':'scale(1.5)'})

            }, 500)

            if(crown.infoBox14IsClose) {

                setTimeout(()=>{
                    $('.followerWinning, .followerCrown').css({'transition':'1s', 'opacity':'0'});
                    $('.followerWinning2').css({'transition':'1s', 'opacity':'0'});
                }, 2000)

                setTimeout(()=>{
                    crown.reset();
                }, 2750)
            } else {

                setTimeout(()=>{
                    if(crown.blackFollower) {
                        $('.followerWinning').css({'transition':'1.2s', 'opacity':'1'});
                    } else {
                        $('.followerWinning2').css({'transition':'1.2s', 'opacity':'1'});
                    }
                }, 1000)

                setTimeout(()=>{
                    if(!crown.infoBox14IsClose) {
                        if(crown.blackFollower) {
                            $('.leaderLosing').css({'transition':'1.5s', 'opacity':'0'});
                        } else {
                            $('.leaderLosing2').css({'transition':'1.5s', 'opacity':'0'});
                        }
                    }
                }, 2500)

                setTimeout(()=>{
                    crown.reset();
                }, 6000)

            }

        }

        crown.reset = function() {

            if(crown.infoBox13IsClose && crown.infoBox14IsClose) {
                $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});
                $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});
            }

            $('.leaderCrown').css({'transition':'0s', 'margin-left':'-182px', 'margin-top':'-33px'});

            setTimeout(()=>{

                $('.myLeaderDenied, .followerCrown').css({'transition':'0.3s', 'opacity':'0'});

                if(crown.blackFollower) {
                    $('.followerWinning').css({'transition':'1s', 'opacity':'0'})
                } else {
                    $('.followerWinning2').css({'transition':'1s', 'opacity':'0'})
                }

                crown.pause();

            }, 100)


        }

        crown.pause = function() {

            if(crown.infoBox13IsClose && crown.infoBox14IsClose) {

                $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});
                $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});


                setTimeout(()=>{
                    crown.first();
                }, 1000)

            } else if(!crown.infoBox13IsClose && crown.infoBox14IsClose) {

                $('.leaderLosing, .followerWinning').css({'transition':'0.7s', 'opacity':'0'});
                $('.leaderLosing2, .followerWinning2').css({'transition':'0.7s', 'opacity':'0'});

                setTimeout(()=>{
                    map.opacity.cover([0,0,1], 1);
                    map.opacity.inside([1,0,0], 1)
                    $('.OG1FollowersWrapLeft, .OG1FollowersWrapRight').css({'transition':'0s', 'opacity': '0'});
                    $('.OG1FollowerArrowsLeft, .OG1FollowerArrowsRight, .arrowDashed').css({'transition':'0s', 'opacity': '0'});
                    $('.OG1LeadersIcon').css({'transition':'1.5s', 'margin-right':'-4px', 'margin-top':'4px',
                    'transform-origin':'bottom', 'transform':'scale(1.5)'})
                }, 1000)

                setTimeout(()=>{
                    crown.first();
                }, 1000)

            } else {

                $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});
                $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});

                setTimeout(()=>{
                    crown.first();
                }, 1000)
            }

        }

        crown.first = function() {

            if(crown.blackFollower) {

                $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'1'});
                $('.leaderLosing').css({'transition':'0.3s', 'opacity':'0'});


            } else {

                $('.leaderLosing').css({'transition':'0.3s', 'opacity':'1'});
                $('.leaderLosing2').css({'transition':'0.3s', 'opacity':'0'});


            }

            setTimeout(()=>{
                $('.leaderCrown').css({'transition':'0.6s', 'opacity':'1'});
            }, 0)


            setTimeout(()=>{
                $('.followerCrown').css({'transition':'0s', 'margin-left':'-76px', 'margin-top':'84px'})
            }, 250)


            if(crown.infoBox13IsClose || crown.infoBox14IsClose) {
                setTimeout(()=>{
                    crown.blackFollower = 1 - crown.blackFollower;
                    // crown.blackFollower = true;
                    crown.animateDeny()
                }, 900)
            } else {
                setTimeout(()=>{
                    crown.blackFollower = 1 - crown.blackFollower;
                    // crown.blackFollower = true;


                    crown.animateDeny()
                }, 1900)
            }

        }




        //---- UNSUED CODE FOR EXPERIMENTAL STUFF -----//

        crown.stopAnimateLeaderLost = false;
        crown.animateLeaderLost = function() {

            if(!crown.stopAnimateLeaderLost) {

                $('.leaderCrown').css({'transition':'0.8s', 'margin-left':'-368px', 'margin-top':'-33px', 'opacity':'1'});

                setTimeout(()=>{
                    $('.leaderCrown').css({'transition':'0.8s', 'margin-left':'-76px'});
                }, 900)

                setTimeout(()=>{
                    $('.leaderCrown').css({'transition':'0.8s', 'margin-top':'84px'});
                }, 1000)

                setTimeout(()=>{
                    $('.leaderCrown').css({'transition':'0.7s', 'opacity':'0'});
                    $('.myLeaderDenied').css({'transition':'0.4s', 'opacity':'1'});
                }, 2000)

                setTimeout(()=>{
                    $('.leaderCrown').css({'transition':'0s', 'margin-left':'-368px', 'margin-top':'-33px'});
                    $('.myLeaderDenied').css({'transition':'0.5s', 'opacity':'0'});
                }, 3000)

                setTimeout(()=>{
                    crown.animateLeaderLost();
                }, 3100)

            }

        }

        crown.show2 = function() {

            $('.crownSwitchAnimationWrap').css({'display':'flex'});
            setTimeout(()=>$('.crownSwitchAnimationWrap').css({'transition':'0.7s',  'opacity':'1'}), 50);

        }

        crown.stopAnimate2 = false;
        crown.animateDeny2 = function() {

            if(!crown.stopAnimate2) {

                $('.followerCrown').css({'transition':'0.75s'});
                $('.leaderCrown').css({'transition':'0.4s', 'margin-left':'-180px'});
                setTimeout(()=>{
                    $('.leaderCrown').css({'transition':'0.4s', 'margin-top':'84px'});
                    $('.myLeaderDenied').css({'transition':'0s', 'margin-left':'-180px'});
                }, 50)

                setTimeout(()=>{
                    $('.leaderCrown').css({'transition':'0.35s', 'opacity':'0'});
                    $('.myLeaderDenied').css({'transition':'0.2s', 'opacity':'1'});
                }, 450)

                setTimeout(()=>{
                    crown.newLeader2()
                }, 1500)

            }

        }

        crown.newLeader2 = function() {

            $('.leaderCrown').css({'transition':'0.25s', 'opacity':'1'});
            $('.myLeaderDenied').css({'transition':'0.25s', 'opacity':'0'});

            setTimeout(()=>{
                $('.leaderCrown').css({'transition':'0.75s', 'opacity':'0', 'margin-left':'106px', 'margin-top':'-33px'});
                $('.followerCrown').css({'transition':'0.75s', 'opacity':'1', 'margin-left':'106px', 'margin-top':'-33px'});
            }, 250)

            setTimeout(()=>{
                crown.reset2()
            }, 2000)

        }

        crown.reset2 = function() {

            $('.myLeaderDenied, .followerCrown').css({'transition':'0.15s', 'opacity':'0'});
            $('.leaderCrown').css({'transition':'0s', 'margin-left':'-360px', 'margin-top':'-33px'});

            setTimeout(()=>{
                $('.leaderCrown').css({'transition':'0.15s', 'opacity':'1'});
                $('.followerCrown').css({'transition':'0s', 'margin-left':'-180px', 'margin-top':'84px'})
            }, 175)

            setTimeout(()=>{
                crown.animateDeny2()
            }, 500)

        }

        crown.stopAnimate3 = false;
        crown.animateDeny3 = function() {

            if(!crown.stopAnimate3) {

                $('.followerCrown').css({'transition':'0.75s'});
                $('.leaderCrown').css({'transition':'0.4s', 'margin-left':'-180px'});

                setTimeout(()=>{
                    $('.leaderCrown').css({'transition':'0.4s', 'margin-top':'84px'});
                    $('.myLeaderDenied').css({'transition':'0s', 'margin-left':'-180px'});
                }, 50)

                setTimeout(()=>{
                    $('.leaderCrown').css({'transition':'0.35s', 'opacity':'0'});
                    $('.myLeaderDenied').css({'transition':'0.2s', 'opacity':'1'});
                }, 450)

                setTimeout(()=>{
                    crown.newLeader3()
                }, 1500)

            }

        }

        crown.newLeader3 = function() {

            $('.leaderCrown').css({'transition':'0.25s', 'opacity':'1'});
            $('.myLeaderDenied').css({'transition':'0.25s', 'opacity':'0'});

            setTimeout(()=>{
                $('.leaderCrown').css({'transition':'0.75s', 'opacity':'0', 'margin-left':'365px', 'margin-top':'-33px'});
                $('.followerCrown').css({'transition':'0.75s', 'opacity':'1', 'margin-left':'365px', 'margin-top':'-33px'});
            }, 250)

            setTimeout(()=>{
                crown.reset3()
            }, 2000)

        }

        crown.reset3 = function() {

            $('.myLeaderDenied, .followerCrown').css({'transition':'0.15s', 'opacity':'0'});
            $('.leaderCrown').css({'transition':'0s', 'margin-left':'-366px', 'margin-top':'-33px'});

            setTimeout(()=>{
                $('.leaderCrown').css({'transition':'0.15s', 'opacity':'1'});
                $('.followerCrown').css({'transition':'0s', 'margin-left':'-180px', 'margin-top':'84px'})
            }, 175)

            setTimeout(()=>{
                crown.animateDeny3()
            }, 500)

        }
        //----------------------------------------------//
