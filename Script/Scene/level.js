/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

level=function(){
  animateclipboard();

  _clipboardSettingText.x=_clipboard.x+42*scale;
  _clipboardAboutText.x=_clipboard.x+38*scale;

  _clipboardSetting1.x=_clipboard.x+24*scale;
  _clipboardSetting2.x=_clipboard.x+88*scale;
  _clipboardSetting3.x=_clipboard.x+24*scale;
  _clipboardSetting4.x=_clipboard.x+42*scale;
  _clipboardSetting5.x=_clipboard.x+46*scale;
  _clipboardSetting6.x=_clipboard.x+42*scale;

  _clipboardAbout1.x=_clipboard.x+18*scale;

  _context.fillStyle=_background.color6;
  _context.fillRect(_background.x,_background.y,_background.width,_background.height);
  _html.style.backgroundColor=_background.color6;

  _context.drawShortImage(_player.img,_player);

  if(!_gamePause.hover){ _context.drawShortImage(_gamePause.img,_gamePause); }
  else if(_gamePause.hover){ _context.drawShortImage(_gamePause.imgOn,_gamePause); }

  if(nextScene!=scene){
    transitionShortOn();
  }

  if(pauseChange){
    if(!pauseAnimation){
      transitionPauseOn();
    } else if(pauseAnimation){
      transitionPauseOff();
    }
  }

  if(pauseAnimation&&nextScene!=0){
    if(!pauseChange){ _context.drawShortImage(_change.img3,_change); }

    _context.drawShortImage(_menuTitle.img,_menuTitle);

    _context.drawShortImage(_clipboard.img,_clipboard);
    if(!_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.img,_clipboardBack); }
    else if(_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.imgOn,_clipboardBack); }

    if(!_menuStart.hover){ _context.drawShortImage(_menuStart.img,_menuStart); }
    else if(_menuStart.hover){ _context.drawShortImage(_menuStart.imgOn,_menuStart); } 
    _context.fillSingleText(_menuStartText);
    if(!_menuMenu.hover){ _context.drawShortImage(_menuMenu.img,_menuMenu); }
    else if(_menuMenu.hover){ _context.drawShortImage(_menuMenu.imgOn,_menuMenu); } 
    _context.fillSingleText(_menuMenuText);
    if(!_menuSetting.hover){ _context.drawShortImage(_menuSetting.img,_menuSetting); }
    else if(_menuSetting.hover){ _context.drawShortImage(_menuSetting.imgOn,_menuSetting); } 
    _context.fillSingleText(_menuSettingText);
    if(!_menuAbout.hover){ _context.drawShortImage(_menuAbout.img,_menuAbout); }
    else if(_menuAbout.hover){ _context.drawShortImage(_menuAbout.imgOn,_menuAbout); } 
    _context.fillSingleText(_menuAboutText);
  }

  if(_menuSetting.animation||_menuSetting.on){
    _context.fillSingleText(_clipboardSettingText);

    if(!sfxOn){
      _context.drawShortImage(_clipboardSetting1.img,_clipboardSetting1);
    } else if(sfxOn){
      _context.drawShortImage(_clipboardSetting1.imgOn,_clipboardSetting1);
    } if(!musicOn){
      _context.drawShortImage(_clipboardSetting2.img,_clipboardSetting2);
    } else if(musicOn){
      _context.drawShortImage(_clipboardSetting2.imgOn,_clipboardSetting2);
    } if(!fullscreenOn){
      _context.drawShortImage(_clipboardSetting3.img,_clipboardSetting3);
    } else if(fullscreenOn){
      _context.drawShortImage(_clipboardSetting3.imgOn,_clipboardSetting3);
    }
    _context.fillSingleText(_clipboardSetting4);
    _context.fillSingleText(_clipboardSetting5);
    _context.fillSingleText(_clipboardSetting6);
  } if(_menuAbout.animation||_menuAbout.on){
    _context.fillSingleText(_clipboardAboutText);

    _context.fillMultiText(_clipboardAbout1);
  }

  if(changeScene&&nextScene!=0){
    transitionOff();
  }
}
