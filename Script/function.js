/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

window.detectcollision=function(_object1,_object2){
  return _object1.x<_object2.x+_object2.width&&
         _object1.x+_object1.width>_object2.x&&
         _object1.y<_object2.y+_object2.height&&
         _object1.y+_object1.height>_object2.y;
}

_context.fillMultiText=function(_text){
  let lines=_text.value.split("\n");

  _context.fillStyle=_text.color;
  _context.font=_text.debug;

  lines.forEach((line,c)=>{
    _context.fillText(line,_text.x,_text.y+(c*_text.size),_currentResolution.width);
  });
}

_context.fillSingleText=function(_text){
  _context.fillStyle=_text.color;
  _context.font=_text.debug;
  _context.fillText(_text.value,_text.x,_text.y);
}

_context.drawShortImage=function(_img,_object){
  _context.drawImage(_img,_object.x,_object.y,_object.width,_object.height);
}

transitionOn=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=20){
    _context.drawShortImage(_change.img4,_change);

    canClick=true;
    changeTimer=0;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }
  }
}

transitionOff=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=20){
    changeTimer=0;
    changeScene=false;
  }
}

transitionPauseOn=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=15){
    _context.drawShortImage(_change.img3,_change);

    changeTimer=0;
    pauseChange=false;
    pauseAnimation=true;
  }
}

transitionPauseOff=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=15){
    pauseOn=false;
    pauseAnimation=false;
    changeTimer=0;
    canClick=true;
    pauseChange=false;
  }
}

transitionShortOn=function(){
  changeTimer++;

  if(changeTimer<10){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=10){
    _context.drawShortImage(_change.img4,_change);

    canClick=true;
    changeTimer=0;
    pauseOn=false;
    pauseChange=false;
    pauseAnimation=false;
    canStart=false;
    changeScene=false;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }
  }
}
