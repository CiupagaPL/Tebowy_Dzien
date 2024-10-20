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
    if(_clipboard.on&&_clipboard.close){
      if(_clipboard.x>-280*scale){
        _clipboard.x-=20*scale;
        _clipboardBack.x-=20*scale;
      } else if(_clipboard.x<=-280*scale){
        if(_menuLevel.animation){ _menuLevel.animation=false; _menuLevel.on=false; _clipboard.on=false; _clipboard.close=false; canClick=true; }
        if(_menuSetting.animation){ _menuSetting.animation=false; _menuSetting.on=false; _clipboard.on=false; _clipboard.close=false; canClick=true; }
        if(_menuAbout.animation){ _menuAbout.animation=false; _menuAbout.on=false; _clipboard.on=false; _clipboard.close=false; canClick=true; }
      }
    } if(_clipboard.on&&!_clipboard.close){
      _menuLevel.on=false;
      _menuSetting.on=false;
      _menuAbout.on=false;
      if(_clipboard.x>-280*scale&&_clipboard.on){
          _clipboard.x-=20*scale;
          _clipboardBack.x-=20*scale;
        } if(_clipboard.x<=-280*scale){
          _clipboard.on=false;
          _menuLevel.animation=false;
          _menuSetting.animation=false;
          _menuAbout.animation=false;

          if(_menuLevel.lateanimation){ _menuLevel.animation=true; _menuLevel.lateanimation=false; }
          if(_menuSetting.lateanimation){ _menuSetting.animation=true; _menuSetting.lateanimation=false; }
          if(_menuAbout.lateanimation){ _menuAbout.animation=true; _menuAbout.lateanimation=false; }
        } if(!_clipboard.on){
          if(_clipboard.x<25*scale){
          _clipboard.x+=20*scale;
          _clipboardBack.x+=20*scale;
          } else if(_clipboard.x>=25*scale){
            if(_menuLevel.animation){ _menuLevel.animation=false; _clipboard.on=true; canClick=true; _menuLevel.on=true; }
            if(_menuSetting.animation){ _menuSetting.animation=false; _clipboard.on=true; canClick=true; _menuSetting.on=true; }
            if(_menuAbout.animation){ _menuAbout.animation=false; _clipboard.on=true; canClick=true; _menuAbout.on=true; }
          }
        }
      } if(!_clipboard.on&&!_clipboard.close){
      if(_clipboard.x<25*scale){
        _clipboard.x+=20*scale;
        _clipboardBack.x+=20*scale;
      } else if(_clipboard.x>=25*scale){
        if(_menuLevel.animation){ _menuLevel.animation=false; _menuLevel.on=true; _clipboard.on=true; canClick=true; }
        if(_menuSetting.animation){ _menuSetting.animation=false; _menuSetting.on=true; _clipboard.on=true; canClick=true; }
        if(_menuAbout.animation){ _menuAbout.animation=false; _menuAbout.on=true; _clipboard.on=true; canClick=true; }
      }
    }
  }
}
