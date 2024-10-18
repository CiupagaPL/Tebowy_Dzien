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
  if(_window.width<640||_window.height<360){
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
  _scale.width=_render.width/640;
  _scale.height=_render.height/360;

  _background.width=_currentResolution.width;
  _background.height=_currentResolution.height;

  _startText.y=_background.height-128;

  _startTEB.width=64*_scale.width;
  _startTEB.height=64*_scale.height;
  _startTEB.x=_render.width-_startTEB.width-(32*_scale.width);
  _startTEB.y=_render.height-_startTEB.height-(32*_scale.height);
}

// window.defaultValue=function(){
//   _startTEB.width=64;
//   _startTEB.height=64;
//   _startTEB.x=_render.width-64-32;
//   _startTEB.y=_render.height-64-32;
// }
