var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
    blockimg=Img;

    blockimg.scaleToWidth(900);
    blockimg.scaleToHeight(600);
    blockimg.set({
    top:0,
    left:0
})
canvas.add(blockimg)
})
	
}

function play(){
	x.play()
}
