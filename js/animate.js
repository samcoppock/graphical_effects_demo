/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var rotateEnabled;

$(document).ready(function(){
    console.log("ready");
    rotateEnabled = false;
    introAnimation();
    
    $( ".icon" ).hover(
        function() {
            $( this ).addClass('iconHovered');
            $( this ).prev().addClass('iconSiblingHovered');
            $( this ).next().addClass('iconSiblingHovered');
        }, 
        function() {
            $( this ).removeClass('iconHovered');
            $( this ).prev().removeClass('iconSiblingHovered');
            $( this ).next().removeClass('iconSiblingHovered');
        }
    );
});

function introAnimation(){
//    var light = new Photon.Light();
//    var face = new Photon.Face($('.front')[0]);
//    face.render(light, true);
    
    var introTimeLine = new TimelineMax({onComplete:mainAnimations});
    
    $('#cube').css('transform','rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(-5000px)');
    
    introTimeLine.add(
        TweenMax.from($('#cube'),1.5,{
            ease: Bounce.easeOut, 
            top:-10000,transform:"rotatateX(90)"}
        )   
    );
    
    introTimeLine.add(
        TweenMax.to($('#cube'),0.5,{
            ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.658,0.852 0.816,1 1.008,1.18 0.818,1 1,1"),
            transform:"translateZ(100px)",
            clearProps:"transform"
            }
        )
    );
    
}

function mainAnimations(){
    enableRotate();
    console.log("end");
}

function enableRotate(){
    
    console.log(rotateEnabled);
    rotateEnabled = true;
    console.log(rotateEnabled);
    
}

function rotateToFace(side){
    
    if(rotateEnabled == false){
        console.log("block");
        return;
    }    
    
//    var rotateCubeTween = new TweenMax();
    
    var rotateCubeTimeline = new TimelineMax();

    switch(side){
        case 1:
            console.log("one");
            TweenMax.to($('#cube'), 1, {transform:"rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px)"});
            break;

        case 2:
            console.log("two");
            TweenMax.to($('#cube'), 1, {transform:"rotateX(-180deg) rotateY(0deg) rotateZ(0deg) translateZ(0px)"});
            break;

        case 3:
            console.log("three");
            TweenMax.to($('#cube'), 1, {transform:"rotateX(0deg) rotateY(-90deg) rotateZ(0deg) translateZ(0px)"});
            break;

        case 4:
            console.log("for");
            TweenMax.to($('#cube'), 1, {transform:"rotateX(0deg) rotateY(90deg) rotateZ(0deg) translateZ(0px)"});
            break;

        case 5:
            console.log("five");
            TweenMax.to($('#cube'), 1, {transform:"rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translateZ(0px)"});
            break;

        case 6:
            console.log("six");
            TweenMax.to($('#cube'), 1, {transform:"rotateX(90deg) rotateY(0deg) rotateZ(0deg) translateZ(0px)"});
            break;
    }

}

//#cube.show-front  { transform: translateZ( -100px ) rotateY(    0deg ); }
//#cube.show-back   { transform: translateZ( -100px ) rotateX( -180deg ); }
//#cube.show-right  { transform: translateZ( -100px ) rotateY(  -90deg ); }
//#cube.show-left   { transform: translateZ( -100px ) rotateY(   90deg ); }
//#cube.show-top    { transform: translateZ( -100px ) rotateX(  -90deg ); }
//#cube.show-bottom { transform: translateZ( -100px ) rotateX(   90deg ); }