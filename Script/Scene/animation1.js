/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

animatemenu=function(){
  if(sceneTimer<=20||sceneTimer<=60&&sceneTimer>40){
  _menuTitle.y=-32*scale;

  _menuStart.y=_render.height-168*scale;

  _menuLevel.y=_render.height-128*scale;

  _menuSetting.y=_render.height-88*scale;

  _menuAbout.y=_render.height-48*scale;
  } if(sceneTimer<=40&&sceneTimer>20){
  _menuTitle.y=-32*scale-8*scale/2;

  _menuStart.y=_render.height-168*scale-scale*2;

  _menuLevel.y=_render.height-128*scale-scale*2;

  _menuSetting.y=_render.height-88*scale-scale*2;

  _menuAbout.y=_render.height-48*scale-scale*2;
  } if(sceneTimer<=80&&sceneTimer>60){
  _menuTitle.y=-32*scale+8*scale/2;

  _menuStart.y=_render.height-168*scale+scale*2;

  _menuLevel.y=_render.height-128*scale+scale*2;

  _menuSetting.y=_render.height-88*scale+scale*2;

  _menuAbout.y=_render.height-48*scale+scale*2;
  } if(sceneTimer>80){ sceneTimer=0; }
}

animateclipboard=function(){
  if(_menuLevel.animation||_menuSetting.animation||_menuAbout.animation){
    _menuLevel.on=false; _menuSetting.on=false; _menuAbout.on=false;
    if(_menuClipboard.on&&!shouldClose){
      if(_menuClipboard.x>-_menuClipboard.width*1.5&&_menuClipboard.on){
          _menuClipboard.x-=_menuClipboard.width/8;
          if(_menuLevel.animation){

          } if(_menuSetting.animation){

          } if(_menuAbout.animation){

          }
        } if(_menuClipboard.x<=-_menuClipboard.width*1.5){
          _menuClipboard.on=false;
        } if(!_menuClipboard.on){
          if(_menuClipboard.x<_menuClipboard.width/8){
          _menuClipboard.x+=_menuClipboard.width/8;
          if(_menuLevel.animation){

          } if(_menuSetting.animation){

          } if(_menuAbout.animation){
  
          } else if(_menuClipboard.x>=_menuClipboard.width/8){
            if(_menuLevel.animation){ _menuLevel.animation=false; _menuLevel.on=true; _menuClipboard.on=true; }
            if(_menuSetting.animation){ _menuSetting.animation=false; _menuSetting.on=true; _menuClipboard.on=true; }
            if(_menuAbout.animation){ _menuAbout.animation=false; _menuAbout.on=true; _menuClipboard.on=true; }
          }
        }
      }
    } if(!_menuClipboard.on&&!shouldClose){
      if(_menuClipboard.x<_menuClipboard.width/8){
        _menuClipboard.x+=_menuClipboard.width/8;
        if(_menuLevel.animation){

        } if(_menuSetting.animation){

        } if(_menuAbout.animation){

        }
      } else if(_menuClipboard.x>=_menuClipboard.width/8){
        if(_menuLevel.animation){ _menuLevel.animation=false; _menuLevel.on=true; _menuClipboard.on=true; }
        if(_menuSetting.animation){ _menuSetting.animation=false; _menuSetting.on=true; _menuClipboard.on=true; }
        if(_menuAbout.animation){ _menuAbout.animation=false; _menuAbout.on=true; _menuClipboard.on=true; }
      }
    } else if(_menuClipboard.on&&shouldClose){
      if(_menuClipboard.x>-_menuClipboard.width*1.5){
        _menuClipboard.x-=_menuClipboard.width/8;
        if(_menuLevel.animation){

        } if(_menuSetting.animation){

        } if(_menuAbout.animation){

        }
      } else if(_menuClipboard.x<=-_menuClipboard.width*1.5){
        if(_menuLevel.animation){ _menuLevel.animation=false; _menuLevel.on=false; _menuClipboard.on=false; shouldClose=false; }
        if(_menuSetting.animation){ _menuSetting.animation=false; _menuSetting.on=false; _menuClipboard.on=false; shouldClose=false; }
        if(_menuAbout.animation){ _menuAbout.animation=false; _menuAbout.on=false; _menuClipboard.on=false; shouldClose=false; }
      }
    }
  }
}
