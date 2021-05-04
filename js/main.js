const lessons = [
    'YOU MUST DEFEAT SHENG LONG TO STAND A CHANCE.',
    'THE FIRST THING TO KNOW, IS TO KNOW ONESELF.',
    'YOU SHOULD BE STRONGER!',
    'EVERY MOMENT GIVES US A CHANCE TO BECOME MORE THAN WHAT WE ARE.',
    'NO FORGIVENESS FOR LIES!'
];
const srcStatic='./assets/images/avatar.png';
const srcAnimated='./assets/images/avatar.gif';
const dynAvatarClass='.avatar.avatar-dynamic';
const avatarMoveTimeout=200;

function getRandomLesson(){
    let value = Math.round(Math.random()*(lessons.length-1));
    return lessons[value];
}

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

    $('#lifeLesson').click(function(){
        let str;
        do {
            str=getRandomLesson();
        } while(str===$(this).text());
        
        $(this).text(str);
    });

    $('#hadokenPlay').click(()=>{playAudio('hadoken')});
    $('#shoryukenPlay').click(()=>{playAudio('shoryuken')});
});
