/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

animateloading=function(){
  if(!canStart){
    if(sceneTimer<=15){
      _context.fillStyle=_background.color0;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color0;

      _context.drawImage(_startTEB.img0,_startTEB.x,_startTEB.y,_startTEB.width,_startTEB.height);

      _context.fillStyle=_startText.color;
      _context.font=_startText.debug;
      _context.fillText(_startText.value,_startText.x,_startText.y);
    } if(sceneTimer>15&&sceneTimer<=30){
      _context.fillStyle=_background.color0;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color0;

      _context.drawImage(_startTEB.img0,_startTEB.x,_startTEB.y,_startTEB.width,_startTEB.height);
    } if(sceneTimer>30){
      sceneTimer=0;

      _context.fillStyle=_background.color0;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color0;

      _context.drawImage(_startTEB.img0,_startTEB.x,_startTEB.y,_startTEB.width,_startTEB.height);
    }
  } else if(canStart){
    if(sceneTimer>0&&sceneTimer<=10){
      _context.fillStyle=_background.color1;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color1;

      _context.drawImage(_startTEB.img1,_startTEB.x,_startTEB.y,_startTEB.width,_startTEB.height);

      _audio.load2.play();
    } if(sceneTimer>10&&sceneTimer<=20){
      _context.fillStyle=_background.color2;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color2;

      _context.drawImage(_startTEB.img2,_startTEB.x,_startTEB.y,_startTEB.width,_startTEB.height);

      _audio.load1.play();
    } if(sceneTimer>20&&sceneTimer<=30){
      _context.fillStyle=_background.color3;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color3;

      _context.drawImage(_startTEB.img3,_startTEB.x,_startTEB.y,_startTEB.width,_startTEB.height);

      _audio.load2.play();
    } if(sceneTimer>30&&sceneTimer<=40){
      _context.fillStyle=_background.color4;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color4;

      _context.drawImage(_startTEB.img4,_startTEB.x,_startTEB.y,_startTEB.width,_startTEB.height);

      _audio.load1.play();
    }
    if(sceneTimer>40&&sceneTimer<=50){
      _context.fillStyle=_background.color5;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color5;

      _context.drawImage(_startTEB.img5,_startTEB.x,_startTEB.y,_startTEB.width,_startTEB.height);

      _audio.load2.play();
    } if(sceneTimer>50&&sceneTimer<=60){
      _context.fillStyle=_background.color6;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color6;

      _context.drawImage(_startTEB.img6,_startTEB.x,_startTEB.y,_startTEB.width,_startTEB.height);

      _audio.load1.play();
    } if(sceneTimer>60&&sceneTimer<=70){
      _context.fillStyle=_background.color7;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color7;

      _context.drawImage(_startTEB.img7,_startTEB.x,_startTEB.y,_startTEB.width,_startTEB.height);

      _audio.load2.play();
    } if(sceneTimer>70){ nextScene=1; sceneTimer=0; _audio.load3.play(); }
  }
}
