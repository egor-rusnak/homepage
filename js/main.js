const srcStatic='./assets/images/avatar.png';
const srcAnimated='./assets/images/avatar.gif';
const dynAvatarClass='.avatar.avatar-dynamic';
const avatarMoveTimeout=200;

function playAudio(id){
    let element = document.getElementById(id);
    element.play();
}

$(document).ready(function(){
    let avatarElem=$(dynAvatarClass);
    $(avatarElem).hover(
        function(){
            setTimeout(function(){$(avatarElem).attr('src',srcAnimated);},avatarMoveTimeout);
        },
        function(){
            setTimeout(function(){$(avatarElem).attr('src',srcStatic);},avatarMoveTimeout);
        }
    );

    $('#hadokenPlay').click(()=>{playAudio('hadoken')});
    $('#shoryukenPlay').click(()=>{playAudio('shoryuken')});

});
