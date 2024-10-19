/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

window.resolution=function(){
  if(_window.width<960||_window.height<540){
    error.innerHTML = "Twoja rozdzielczość jest za mała!<br>Spróbuj użyć ctrl +/-<br>w celu dopasowania rozdzielczości<br>O.o";
    _render.base.style.visibility="hidden";
    resolutionError=true;
  }

  if(!resolutionError){
    while(_window.width*0.95>_currentResolution.width){ _currentResolution.width+=16; _currentResolution.height+=9; }
    while(_window.width*0.95<_currentResolution.width||_window.height*0.95<_currentResolution.height){ _currentResolution.width-=16; _currentResolution.height-=9; }

    _render.base.style.width=_currentResolution.width+"px";
    _render.base.style.height=_currentResolution.height+"px";

    _render.base.style.left=(_window.width-_currentResolution.width)/2-2+"px";
    _render.base.style.top=(_window.height-_currentResolution.height)/2-2+"px";

    _render.width=_currentResolution.width;
    _render.height=_currentResolution.height;
  } window.updateValue();
}

window.updateValue=function(){
  scale=_render.width/640;

  _background.width=_currentResolution.width;
  _background.height=_currentResolution.height;

  _versionText.x=32*scale;
  _versionText.y=48*scale;
  _versionText.size=Math.ceil(36*scale);
  _versionText.debug=_versionText.size+"px "+_versionText.font;

  _startText.x=_render.width/2-116*scale;
  _startText.y=_background.height-32*scale;
  _startText.size=Math.ceil(24*scale);
  _startText.debug=_startText.size+"px "+_startText.font;

  _startTEB.width=128*scale;
  _startTEB.height=128*scale;
  _startTEB.x=_render.width/2-_startTEB.width/2;
  _startTEB.y=_render.height/2-_startTEB.height/2;

  _menuTitle.width=480*scale;
  _menuTitle.height=270*scale;
  _menuTitle.x=_render.width/2-_menuTitle.width/2;
  _menuTitle.y=-32*scale;

  _menuStart.width=32*scale;
  _menuStart.height=32*scale;
  _menuStart.x=_render.width/2-_menuStart.width/2+32*scale;
  _menuStart.y=_render.height-168*scale;

  _menuStartText.x=_menuStart.x-48*scale;
  _menuStartText.y=_menuStart.y+24*scale;
  _menuStartText.size=Math.ceil(24*scale);
  _menuStartText.debug=_menuStartText.size+"px "+_menuStartText.font;

  _menuLevel.width=32*scale;
  _menuLevel.height=32*scale;
  _menuLevel.x=_render.width/2-_menuStart.width/2-32*scale;
  _menuLevel.y=_render.height-128*scale;

  _menuLevelText.x=_menuLevel.x+38*scale;
  _menuLevelText.y=_menuLevel.y+24*scale;
  _menuLevelText.size=Math.ceil(24*scale);
  _menuLevelText.debug=_menuLevelText.size+"px "+_menuLevelText.font;

  _menuSetting.width=32*scale;
  _menuSetting.height=32*scale;
  _menuSetting.x=_render.width/2-_menuStart.width/2+32*scale;
  _menuSetting.y=_render.height-88*scale;

  _menuSettingText.x=_menuSetting.x-48*scale;
  _menuSettingText.y=_menuSetting.y+24*scale;
  _menuSettingText.size=Math.ceil(24*scale);
  _menuSettingText.debug=_menuSettingText.size+"px "+_menuSettingText.font;

  _menuAbout.width=32*scale;
  _menuAbout.height=32*scale;
  _menuAbout.x=_render.width/2-_menuStart.width/2-32*scale;
  _menuAbout.y=_render.height-48*scale;

  _menuAboutText.x=_menuAbout.x+38*scale;
  _menuAboutText.y=_menuAbout.y+24*scale;
  _menuAboutText.size=Math.ceil(24*scale);
  _menuAboutText.debug=_menuAboutText.size+"px "+_menuAboutText.font;

  _menuClipboard.width=128*scale;
  _menuClipboard.height=184*scale;
  _menuClipboard.x=-_menuClipboard.width;
  _menuClipboard.y=_render.height/2-_menuClipboard.height/2;
}

// window.defaultValue=function(){
//   _startTEB.width=64;
//   _startTEB.height=64;
//   _startTEB.x=_render.width-64-32;
//   _startTEB.y=_render.height-64-32;
// }
