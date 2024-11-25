/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

handleboss=function(){
  if(!pauseOn&&hp!=0){
    sceneTimer++;

    if(sceneTimer<60){ _playerCloud.y=_render.height+_playerCloud.height; }
    if(sceneTimer>=60&&sceneTimer<61&&sfxOn){
      _audio.bossStart.load();
      _audio.bossStart.play();
      _player.move=false;
    } if(sceneTimer>=60&&sceneTimer<99){
      _boss.x-=5*scale;
      _bossCloud.x-=5*scale;
      _playerCloud.y-=2*scale;
    } if(sceneTimer>=99&&sceneTimer<100&&teacherOn){
      pauseChange=true;
      pauseOn=true;
      teacher=true;
      _player.move=true;
      _player.cloud=true;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=100&&sceneTimer<126){
      _boss.y-=4*scale;
      _bossCloud.y-=4*scale;
      _boss.load=false;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=126&&sceneTimer<140){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=140&&sceneTimer<166){
      _boss.y+=4*scale;
      _bossCloud.y+=4*scale;
      _boss.load=false;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=166&&sceneTimer<180){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=180&&sceneTimer<206){
      _boss.y+=4*scale;
      _bossCloud.y+=4*scale;
      _boss.load=false;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=206&&sceneTimer<220){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=220&&sceneTimer<246){
      _boss.y-=4*scale;
      _bossCloud.y-=4*scale;
      _boss.load=false;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=246&&sceneTimer<260){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=260&&sceneTimer<261){ _boss.y-=4*scale; _bossCloud.y-=4*scale; sceneTimer=100; }
    if(sceneTimer>=440&&sceneTimer<470){
      _boss.x+=6*scale;
      _bossCloud.x+=6*scale;
    } if(sceneTimer>=470){ boss=false; defeat=true; }

    if(_tebulinek.unused){ _tebulinek.x=-_tebulinek.width; }
    if(!_tebulinek.unused){ _tebulinek.x-=8*scale; }
    if(_tebulinek.x<=-_tebulinek.width){ _tebulinek.unused=true; }

    if(_computer.unused){ _computer.x=-_computer.width; }
    if(!_computer.unused){ _computer.x-=8*scale; }
    if(_computer.x<=-_computer.width){ _computer.unused=true; }

    if(_keyboard.unused){ _keyboard.x=-_keyboard.width; }
    if(!_keyboard.unused){ _keyboard.x-=8*scale; }
    if(_keyboard.x<=-_keyboard.width){ _keyboard.unused=true; }

    if(_coffe.unused){ _coffe.x=-_coffe.width; }
    if(!_coffe.unused){ _coffe.x-=8*scale; }
    if(_coffe.x<=-_coffe.width){ _coffe.unused=true; }

    if(_dove.unused){ _dove.x=-_dove.width; }
    if(!_dove.unused){ _dove.x-=8*scale; }
    if(_dove.x<=-_dove.width){ _dove.unused=true; }
  }

  drawattack(_computer);
  drawattack(_keyboard);
  drawattack(_coffe);
  drawattack(_dove);
  drawattack(_tebulinek);
  drawboss();
  if(addonOn){ drawbosstext(); }
  _context.drawShortImage(_bossCloud.img,_bossCloud);
  if(_player.left){ _context.drawShortImage(_playerCloud.img0,_playerCloud); }
  else if(!_player.left){ _context.drawShortImage(_playerCloud.img1,_playerCloud); }

  _playerCloud.x=_player.x-(8*scale);

  if(window.detectcollision(_player,_tebulinek)&&_boss.invisible==0){
    bossHp-=2;
    if(addonOn){ _bossText.value="-50 punktów\nz zachowania"; }
    if(sfxOn&&bossHp!=0){ _audio.bossHit.load(); _audio.bossHit.play(); }
    if(sfxOn&&bossHp==0){ _audio.bossDie.load(); _audio.bossDie.play(); }
    if(bossHp>0){ _boss.invisible=1; }
    if(bossHp<=0){ sceneTimer=440; }
  }

  if(window.detectcollision(_player,_computer)&&_player.invisible==0){
    hp--;
    if(addonOn){ _playerText.value="-25 punktów\nz zachowania"; }
    _player.invisible=1;
    if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
  } if(window.detectcollision(_player,_keyboard)&&_player.invisible==0){
    hp--;
    if(addonOn){ _playerText.value="-25 punktów\nz zachowania"; }
    _player.invisible=1;
    if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
  } if(window.detectcollision(_player,_coffe)&&_player.invisible==0){
    hp--;
    if(addonOn){ _playerText.value="-25 punktów\nz zachowania"; }
    _player.invisible=1;
    if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
  } if(window.detectcollision(_player,_dove)&&_player.invisible==0){
    hp--;
    if(addonOn){ _playerText.value="-25 punktów\nz zachowania"; }
    _player.invisible=1;
    if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
  }
}

handleattacks=function(){
  while(!_boss.attack){
    _boss.random=Math.floor(Math.random()*5);

    if(_boss.random==0&&_tebulinek.unused){
      _tebulinek.x=_bossCloud.x+_bossCloud.width/2-_tebulinek.width/2;
      _tebulinek.y=_bossCloud.y+4*scale;
      _tebulinek.timer=0;
      _tebulinek.unused=false;
      _boss.attack=true;
    } if(_boss.random==1&&_computer.unused){
      _computer.x=_bossCloud.x+_bossCloud.width/2-_computer.width/2;
      _computer.y=_bossCloud.y+4*scale;
      _computer.timer=0;
      _computer.unused=false;
      _boss.attack=true;
    } if(_boss.random==2&&_keyboard.unused){
      _keyboard.x=_bossCloud.x+_bossCloud.width/2-_keyboard.width/2;
      _keyboard.y=_bossCloud.y+4*scale;
      _keyboard.timer=0;
      _keyboard.unused=false;
      _boss.attack=true;
    } if(_boss.random==3&&_coffe.unused){
      _coffe.x=_bossCloud.x+_bossCloud.width/2-_coffe.width/2;
      _coffe.y=_bossCloud.y+4*scale;
      _coffe.timer=0;
      _coffe.unused=false;
      _boss.attack=true;
    } if(_boss.random==4&&_dove.unused){
      _dove.x=_bossCloud.x+_bossCloud.width/2-_dove.width/2;
      _dove.y=_bossCloud.y+4*scale;
      _dove.timer=0;
      _dove.unused=false;
      _boss.attack=true;
    }
  } _boss.attack=false;
}
