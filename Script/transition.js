/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

sceneoff=function(){
  canClick=false;
  changeScene=true;
  changeTimer++;

  if(changeTimer<=10){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
  } if(changeTimer>10){ 
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
  }

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); } 
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=15){ _context.drawShortImage(_change.img4,_change); }

  if(changeTimer>=20){
    musicTimer=0;
    changeTimer=0;
    sceneTimer=0;
    defeat=false;

    if(hp==0){
      nextScene=scene;
      hp=6;
    } scene=nextScene;
  }
}

sceneon=function(){
  changeTimer++;

  if(changeTimer>=1&&changeTimer<2&&scene!=1){
    resetlevel();
    window.defaultgame();
    generatelevel();
  }

  if(changeTimer<=10){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
  } if(changeTimer>10){ 
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
  }

  if(changeTimer<5){ _context.drawShortImage(_change.img4,_change); } 
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=15){ _context.drawShortImage(_change.img1,_change); }

  if(changeTimer>=20){
    changeTimer=0;

    changeScene=false;
    canClick=true;

    pauseChange=false;
    pause=false;
    autoUnpause=false;

    if(scene==1){ menuLoad=false; }
    if(scene!=1&&tutorialOn){
      pauseAnimation=true;
      pause=true;
      pauseChange=true;
      tutorial=true;
    } else if(scene!=1&&!tutorialOn){ tutorial=false; }
  }
}

pauseon=function(){
  canClick=false;
  pause=true;
  changeTimer++;

  if(changeTimer<=10){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
  } if(changeTimer>10){ 
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
  }

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); } 
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10){ _context.drawShortImage(_change.img3,_change); }

  if(changeTimer>=15){
    changeTimer=0;
    musicTimer=0;

    canClick=true;
    pauseChange=false;

    _keyState.up=false;
    _keyState.down=false;
    _keyState.left=false;
    _keyState.right=false;

    _player.vx=0;
    if(_player.cloud){ _player.vy=0; }
  }
}

pauseoff=function(){
  canClick=false;
  changeTimer++;

  if(changeTimer<=5){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
  } if(changeTimer>5){ 
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
  }

  if(changeTimer<5){ _context.drawShortImage(_change.img3,_change); } 
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10){ _context.drawShortImage(_change.img1,_change); }

  if(changeTimer>15){
    changeTimer=0;

    canClick=true;
    pauseChange=false;
    pause=false;
    autoUnpause=false;
    if(tutorial){
      tutorialOn=false;
      tutorial=false;
    }
    teacher=false;
  }
}

pauseend=function(){
  canClick=false;
  changeTimer++;
  
  _html.style.backgroundColor=_background.color4a;
  _about.style.backgroundColor=_background.color4b;

  _context.drawShortImage(_change.img4,_change);

  if(changeTimer>=5){
    musicTimer=0;
    changeTimer=0;
    sceneTimer=0;

    pause=false;
    pauseChange=false;
    changeScene=true;
    autoScene=false;
    if(nextScene==1){ menuLoad=true; }
    restart=false;
    autoRestart=false;

    scene=nextScene;
  }
}
