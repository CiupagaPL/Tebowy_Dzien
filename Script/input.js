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
});

window.addEventListener("click",function(_event){
  if(window.detectcollision(_menuStart,_mouse)&&!_menuLevel.animation&&!_menuSetting.animation&&!_menuAbout.animation){
    console.log("c"); 
  } if(window.detectcollision(_menuLevel,_mouse)&&!_menuLevel.animation&&!_menuSetting.animation&&!_menuAbout.animation){
    _menuLevel.animation=true;
  } if(window.detectcollision(_menuSetting,_mouse)&&!_menuLevel.animation&&!_menuSetting.animation&&!_menuAbout.animation){
    _menuSetting.animation=true;
  } if(window.detectcollision(_menuAbout,_mouse)&&!_menuLevel.animation&&!_menuSetting.animation&&!_menuAbout.animation){
    _menuAbout.animation=true;
  }

  if(window.detectcollision(_menuLevel,_mouse)&&_menuLevel.on){
    shouldClose=true;
  } if(window.detectcollision(_menuSetting,_mouse)&&_menuSetting.on){
    shouldClose=true;
  } if(window.detectcollision(_menuAbout,_mouse)&&_menuAbout.on){
    shouldClose=true;
  }
});

window.detectcollision=function(_object1,_object2){
  return _object1.x<_object2.x+_object2.width&&
         _object1.x+_object1.width>_object2.x&&
         _object1.y<_object2.y+_object2.height&&
         _object1.y+_object1.height>_object2.y;
}
