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

      _context.drawShortImage(_startTEB.img0,_startTEB);

      _context.fillSingleText(_startText);
    } if(sceneTimer>15&&sceneTimer<=30){
      _context.fillStyle=_background.color0;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color0;

      _context.drawShortImage(_startTEB.img0,_startTEB);
    } if(sceneTimer>30){
      sceneTimer=0;

      _context.fillStyle=_background.color0;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color0;

      _context.drawShortImage(_startTEB.img0,_startTEB);
    }
  } else if(canStart){
    if(sceneTimer>0&&sceneTimer<=10){
      _context.fillStyle=_background.color1;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color1;

      _context.drawShortImage(_startTEB.img1,_startTEB);

      _audio.load2.play();
    } if(sceneTimer>10&&sceneTimer<=20){
      _context.fillStyle=_background.color2;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color2;

      _context.drawShortImage(_startTEB.img2,_startTEB);

      _audio.load1.play();
    } if(sceneTimer>20&&sceneTimer<=30){
      _context.fillStyle=_background.color3;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color3;

      _context.drawShortImage(_startTEB.img3,_startTEB);

      _audio.load2.play();
    } if(sceneTimer>30&&sceneTimer<=40){
      _context.fillStyle=_background.color4;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color4;

      _context.drawShortImage(_startTEB.img4,_startTEB);

      _audio.load1.play();
    }
    if(sceneTimer>40&&sceneTimer<=50){
      _context.fillStyle=_background.color5;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color5;

      _context.drawShortImage(_startTEB.img5,_startTEB);

      _audio.load2.play();
    } if(sceneTimer>50&&sceneTimer<=60){
      _context.fillStyle=_background.color6;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color6;

      _context.drawShortImage(_startTEB.img6,_startTEB);

      _audio.load1.play();
    } if(sceneTimer>60&&sceneTimer<=70){
      _context.fillStyle=_background.color7;
      _context.fillRect(_background.x,_background.y,_background.width,_background.height);

      _html.style.backgroundColor=_background.color7;

      _context.drawShortImage(_startTEB.img7,_startTEB);

      _audio.load2.play();
    } if(sceneTimer>70){ nextScene=1; sceneTimer=0; _audio.load3.play(); }
  }
}
