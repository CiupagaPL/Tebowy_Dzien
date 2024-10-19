/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

scene1=function(){
  sceneTimer++;

  animatemenu();
  animateclipboard();

  _context.fillStyle=_background.color6;
  _context.fillRect(_background.x,_background.y,_background.width,_background.height);

  _context.drawImage(_menuTitle.img,_menuTitle.x,_menuTitle.y,_menuTitle.width,_menuTitle.height);

  if(!_menuStart.hover){ _context.drawImage(_menuStart.img,_menuStart.x,_menuStart.y,_menuStart.width,_menuStart.height); }
  else if(_menuStart.hover){ _context.drawImage(_menuStart.imgOn,_menuStart.x,_menuStart.y,_menuStart.width,_menuStart.height); } 

  _context.fillStyle=_menuStartText.color;
  _context.font=_menuStartText.debug;
  _context.fillText(_menuStartText.value,_menuStartText.x,_menuStartText.y);

  if(!_menuLevel.hover){ _context.drawImage(_menuLevel.img,_menuLevel.x,_menuLevel.y,_menuLevel.width,_menuLevel.height); }
  else if(_menuLevel.hover){ _context.drawImage(_menuLevel.imgOn,_menuLevel.x,_menuLevel.y,_menuLevel.width,_menuLevel.height); } 

  _context.fillStyle=_menuLevelText.color;
  _context.font=_menuLevelText.debug;
  _context.fillText(_menuLevelText.value,_menuLevelText.x,_menuLevelText.y);

  if(!_menuSetting.hover){ _context.drawImage(_menuSetting.img,_menuSetting.x,_menuSetting.y,_menuSetting.width,_menuSetting.height); }
  else if(_menuSetting.hover){ _context.drawImage(_menuSetting.imgOn,_menuSetting.x,_menuSetting.y,_menuSetting.width,_menuSetting.height); } 

  _context.fillStyle=_menuSettingText.color;
  _context.font=_menuSettingText.debug;
  _context.fillText(_menuSettingText.value,_menuSettingText.x,_menuSettingText.y);

  if(!_menuAbout.hover){ _context.drawImage(_menuAbout.img,_menuAbout.x,_menuAbout.y,_menuAbout.width,_menuAbout.height); }
  else if(_menuAbout.hover){ _context.drawImage(_menuAbout.imgOn,_menuAbout.x,_menuAbout.y,_menuAbout.width,_menuAbout.height); } 

  _context.fillStyle=_menuAboutText.color;
  _context.font=_menuAboutText.debug;
  _context.fillText(_menuAboutText.value,_menuAboutText.x,_menuAboutText.y);

  _context.drawImage(_menuClipboard.img,_menuClipboard.x,_menuClipboard.y,_menuClipboard.width,_menuClipboard.height);
}
