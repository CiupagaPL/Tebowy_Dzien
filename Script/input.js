/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

document.addEventListener("keyup",function(_event){
  switch(scene){
    case 0:
      if(_event.key=="Enter"&&!canStart){ canStart=true; sceneTimer=0; }
      break;
    case 1:
      break;
  }
});

document.addEventListener("mousemove",function(_event){
  _mouse.x=_event.clientX-((_window.width-_currentResolution.width)/2)-12;
  _mouse.y=_event.clientY-((_window.height-_currentResolution.height)/2)-12;

  if(window.detectcollision(_menuStart,_mouse)){ _menuStart.hover=true; }
  else if(!window.detectcollision(_menuStart,_mouse)){ _menuStart.hover=false; }
  if(window.detectcollision(_menuLevel,_mouse)){ _menuLevel.hover=true; }
  else if(!window.detectcollision(_menuLevel,_mouse)){ _menuLevel.hover=false; }
  if(window.detectcollision(_menuSetting,_mouse)){ _menuSetting.hover=true; }
  else if(!window.detectcollision(_menuSetting,_mouse)){ _menuSetting.hover=false; }
  if(window.detectcollision(_menuAbout,_mouse)){ _menuAbout.hover=true; }
  else if(!window.detectcollision(_menuAbout,_mouse)){ _menuAbout.hover=false; }

  if(window.detectcollision(_clipboardBack,_mouse)){ _clipboardBack.hover=true; }
  else if(!window.detectcollision(_clipboardBack,_mouse)){ _clipboardBack.hover=false; }
});

window.addEventListener("click",function(_event){
  if(window.detectcollision(_menuLevel,_mouse)&&_menuLevel.on&&canClick){
    _clipboard.close=true;
    _menuLevel.animation=true;
    canClick=false;
  } if(window.detectcollision(_menuSetting,_mouse)&&_menuSetting.on&&canClick){
    _clipboard.close=true;
    _menuSetting.animation=true;
    canClick=false;
  } if(window.detectcollision(_menuAbout,_mouse)&&_menuAbout.on&&canClick){
    _clipboard.close=true;
    _menuAbout.animation=true;
    canClick=false;
  }

  if(window.detectcollision(_menuStart,_mouse)&&canClick){
    canClick=false;
  } if(window.detectcollision(_menuLevel,_mouse)&&canClick){
    if(!_menuSetting.on&&!_menuAbout.on){ _menuLevel.animation=true; }
    else if(_menuSetting.on||_menuAbout.on){
      _menuLevel.lateanimation=true;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      else if(_menuAbout.on){ _menuAbout.animation=true; }
    }
    canClick=false;
  } if(window.detectcollision(_menuSetting,_mouse)&&canClick){
    if(!_menuLevel.on&&!_menuAbout.on){ _menuSetting.animation=true; }
    else if(_menuLevel.on||_menuAbout.on){
      _menuSetting.lateanimation=true;
      if(_menuLevel.on){ _menuLevel.animation=true; }
      else if(_menuAbout.on){ _menuAbout.animation=true; }
    }
    canClick=false;
  } if(window.detectcollision(_menuAbout,_mouse)&&canClick){
    if(!_menuLevel.on&&!_menuSetting.on){ _menuAbout.animation=true; }
    else if(_menuLevel.on||_menuSetting.on){
      _menuAbout.lateanimation=true;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      else if(_menuLevel.on){ _menuLevel.animation=true; }
    }
    canClick=false;
  }

  if(window.detectcollision(_clipboardBack,_mouse)){
    _clipboard.close=true;
    if(_menuLevel.on){ _menuLevel.animation=true; }
    if(_menuSetting.on){ _menuSetting.animation=true; }
    if(_menuAbout.on){ _menuAbout.animation=true; }
    canClick=false;
  }

  if(window.detectcollision(_clipboardSetting1,_mouse)&&_menuSetting.on){
    if(sfxOn){ sfxOn=false; }
    else if(!sfxOn){ sfxOn=true; }
  } if(window.detectcollision(_clipboardSetting2,_mouse)&&_menuSetting.on){
    if(musicOn){ musicOn=false; }
    else if(!musicOn){ musicOn=true; }
  } if(window.detectcollision(_clipboardSetting3,_mouse)&&_menuSetting.on){
    if(fullscreenOn){ fullscreenOn=false; document.exitFullscreen(); }
    else if(!fullscreenOn){ fullscreenOn=true; document.documentElement.requestFullscreen(); }
  }
});
