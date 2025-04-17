/*   ,-----,
 *   |     |    ,--------------------------------------,
 *   |     |   ( */"use strict"/* pastebin.com/zdg35gef )
 *  (|-----|) < The project is licensed under MIT -^    |
 *  |\_____/|  "---------------------------------------"
 *  |       |    __---.
 *  ( o   o )   /      )
 *  \ = . = \__/    --"
 *  /              /
 * |              |
 *  \ \    \ \   |
 *   | |    | | /
 *  (_(_)--(_(_) */

_corner.update=function(){
  if(_currentCorner.base.x>canvas.width){ _currentCorner.base.x-=context.scale(1280); }
  else if(_currentCorner.base.x+_currentCorner.base.width<0){ _currentCorner.base.x+=context.scale(1280); }

  if(_currentCorner.laser!=undefined){
    if(_currentCorner.laser.x>canvas.width){ _currentCorner.laser.x-=context.scale(1280); }
    else if(_currentCorner.laser.x+_currentCorner.laser.width<0){ _currentCorner.laser.x+=context.scale(1280); }

    if(context.collision(_currentCorner.laser,_player.base)&&_player.invisible==0&&
       _corner.timer>=context.time(60)&&!_player.touched){
      _player.hp-=1;
      _player.text.value0="-25 punktów\nz zachowania";

      if(_player.hp>0){
        if(global.sfx){
          audio.damage1_sfx.load();
          audio.damage1_sfx.play();
        } _player.invisible=1;
      } _player.touched=true;
    }

    if(_corner.timer>=context.time(40)&&_corner.timer<context.time(50)){ _currentCorner.laser.alpha+=context.frame(4); }
    else if(_corner.timer==context.time(50)){ _currentCorner.laser.alpha=50; }
    else if(_corner.timer>=context.time(60)&&_corner.timer<context.time(70)){ _currentCorner.laser.alpha+=context.frame(6); }
    else if(_corner.timer==context.time(70)){
      if(!global.pause&&_player.hp>0){ audio.laser_sfx.play(); }
      _currentCorner.laser.alpha=100;
    } else if(_corner.timer>context.time(70)){
      _currentCorner.laser.alpha-=context.frame(8);
      if(_currentCorner.laser.alpha<=0){ _corner.timer=0; }
    }
  }

  if(_currentCorner.lock!=undefined&&_currentCorner.lock.alpha>0){
    if(_currentCorner.lock.x>canvas.width){ _currentCorner.lock.x-=context.scale(1280); }
    else if(_currentCorner.lock.x+_currentCorner.lock.width<0){ _currentCorner.lock.x+=context.scale(1280); }

    if(context.collision(_currentCorner.lock,_player.collisionTop)&&!_player.touched&&_currentCorner.lock.alpha>50){
      _player.fly=true;
      _player.touched=true;

      if(_player.upTimer<12){
        _player.base.y=_currentCorner.lock.y+context.scale(14);
        _player.text.y=_player.base.y-context.scale(12);

        _player.collisionLeft.y=_player.base.y+context.scale(12);
        _player.collisionRight.y=_player.base.y+context.scale(12);
        _player.collisionTop.y=_player.base.y-context.scale(4);
        _player.collisionBottom.y=_player.base.y+context.scale(90);

        _player.cloud.y=_player.base.y+_player.cloud.height;
        _player.gun.y=_player.base.y+context.scale(32);
      }

      if(scene.key&&_currentCorner.lock.alpha==100){
        _currentCorner.lock.alpha=99;
        scene.key=false;
      }
    } if(_currentCorner.lock.alpha<100){ _currentCorner.lock.alpha-=context.frame(7); }
  }

    if(_currentCorner.laser!=undefined){ _currentCorner.laser.x-=context.scale(1280); }
    else if(_currentCorner.lock!=undefined){ _currentCorner.lock.x-=context.scale(1280); }

    if(_currentCorner.laser!=undefined){ _currentCorner.laser.x+=context.scale(1280); }
    else if(_currentCorner.lock!=undefined){ _currentCorner.lock.x+=context.scale(1280); }

  if(context.collision(_currentCorner.base,_player.collisionLeft)&&!_player.touched&&_currentCorner.base.rotate!=2){
    _player.base.x+=context.move(4);
    _player.text.x+=context.move(4);
    _player.collisionTop.x+=context.move(4);
    _player.collisionBottom.x+=context.move(4);
    _player.collisionLeft.x+=context.move(4);
    _player.collisionRight.x+=context.move(4);
    _player.cloud.x+=context.move(4);
    _player.gun.x+=context.move(4);

    _player.touched=true;
  } if(context.collision(_currentCorner.base,_player.collisionRight)&&!_player.touched&&_currentCorner.base.rotate==2){
    _player.base.x-=context.move(4);
    _player.text.x-=context.move(4);
    _player.collisionTop.x-=context.move(4);
    _player.collisionBottom.x-=context.move(4);
    _player.collisionLeft.x-=context.move(4);
    _player.collisionRight.x-=context.move(4);
    _player.cloud.x-=context.move(4);
    _player.gun.x-=context.move(4);

    _player.touched=true;
  }
}

_foreground.update=function(){
  if(_currentForeground.x>canvas.width){ _currentForeground.x-=context.scale(1280); }
  else if(_currentForeground.x+_currentForeground.width<0){ _currentForeground.x+=context.scale(1280); }

  if(_currentForeground.score==scene.score&&!_currentForeground.on){
    _currentForeground.on=true;
    _currentForeground.change=true;
  } else if(_currentForeground.score!=scene.score&&_currentForeground.on){
    _currentForeground.on=false;
    _currentForeground.change=true;
  }

  if(_currentForeground.change&&!_currentForeground.on){
    if(_currentForeground.alpha<50){ _currentForeground.alpha+=context.time(2); }
    else{
      _currentForeground.alpha=50;
      _currentForeground.change=false;
    }
  } else if(_currentForeground.change&&_currentForeground.on){
    if(_currentForeground.alpha>0){ _currentForeground.alpha-=context.time(2); }
    else{ _currentForeground.change=false; }
  }
}

_decoration.update=function(){
  if(_currentDecoration.current==0){
    if(_currentDecoration.base.x>canvas.width){
      _currentDecoration.base.x-=context.scale(1280);
      _currentDecoration.text.x-=context.scale(1280);
    } else if(_currentDecoration.base.x+_currentDecoration.base.width<0){
      _currentDecoration.base.x+=context.scale(1280);
      _currentDecoration.text.x+=context.scale(1280);
    }

    if(context.collision(_currentDecoration.base,_player.base)&&_currentDecoration.text.value0=="Finał"){  }
  } else if(_currentDecoration.current==1){
    if(_currentDecoration.base.x>canvas.width){
      _currentDecoration.base.x-=context.scale(1280);
      _currentDecoration.bottom.x-=context.scale(1280);
    } else if(_currentDecoration.base.x+_currentDecoration.base.width<0){
      _currentDecoration.base.x+=context.scale(1280);
      _currentDecoration.bottom.x+=context.scale(1280);
    } if(_currentDecoration.left.x>canvas.width){
      _currentDecoration.left.x-=context.scale(1280);
      _currentDecoration.bottomLeft.x-=context.scale(1280);
    } else if(_currentDecoration.left.x+_currentDecoration.left.width<0){
      _currentDecoration.left.x+=context.scale(1280);
      _currentDecoration.bottomLeft.x+=context.scale(1280);
    }
  } else if(_currentDecoration.current==2){
    if(_currentDecoration.x>canvas.width){ _currentDecoration.x-=context.scale(1280); }
    else if(_currentDecoration.x+_currentDecoration.width<0){ _currentDecoration.x+=context.scale(1280); }
  } else if(_currentDecoration.current==3){
    if(_currentDecoration.light.x>canvas.width){
      _currentDecoration.base.x-=context.scale(1280);
      _currentDecoration.light.x-=context.scale(1280);
    } else if(_currentDecoration.light.x+_currentDecoration.light.width<0){
      _currentDecoration.base.x+=context.scale(1280);
      _currentDecoration.light.x+=context.scale(1280);
    }
  }
}

_tebox.update=function(){
  if(_currentTebox.x>canvas.width){ _currentTebox.x-=context.scale(1280); }
  else if(_currentTebox.x+_currentTebox.width<0){ _currentTebox.x+=context.scale(1280); }

  if(context.collision(_currentTebox,_player.base)&&!_player.touchTebox){
    _player.touchTebox=true;
    _tebox.first=_currentTebox.first;
    _tebox.second=_currentTebox.second;
    _tebox.third=_currentTebox.third;
    _currentTebox.first=-1;
    _currentTebox.second=-1;
    _currentTebox.third=-1;
    _tebox.useLenght=_tebox.currentLenght;
    _loot.x=_currentTebox.x+context.scale(15);
    _loot.y=_currentTebox.y+_loot.height;
    _loot.iy=_currentTebox.y+_loot.height;
  } else if(!context.collision(_currentTebox,_player.base)&&_tebox.currentLenght==_tebox.useLenght){
    _player.touchTebox=false;
    _currentTebox.first=_tebox.first;
    _currentTebox.second=_tebox.second;
    _currentTebox.third=_tebox.third;
    _tebox.useLenght=-1;
  }
}

_platform.update=function(){
  if(_currentPlatform.x>canvas.width){ _currentPlatform.x-=context.scale(1280); }
  else if(_currentPlatform.x+_currentPlatform.width<0){ _currentPlatform.x+=context.scale(1280); }

  if(scene.score==_currentPlatform.level+1&&scene.score>0&&scene.score<_platform.load-1){
    if(_currentPlatform.y<context.scale(254)||_currentPlatform.y>context.scale(274)){ _platform.move=true; }
    else if(_currentPlatform.y>=context.scale(254)&&_currentPlatform.y<=context.scale(274)){ _platform.move=false; }
    if(_currentPlatform.y<context.scale(254)){ _platform.up=true; }
    else if(_currentPlatform.y>context.scale(274)){ _platform.up=false; }
  } else if(scene.score==0){
    if(_platform.array[0].y>context.scale(352)){ _platform.move=true; }
    else{ _platform.move=false; }
    _platform.up=false;
  } else if(scene.score==_platform.load-1){
    if(_platform.array[_platform.load*3].y<context.scale(-4)){ _platform.move=true; }
    else{ _platform.move=false; }
    _platform.up=true;
  }

  if(context.collision(_currentPlatform,_player.collisionTop)&&!_player.touched){
    _player.fly=true;
    _player.touched=true;

    if(_player.upTimer<12){
      _player.base.y=_currentPlatform.y+context.scale(12);
      _player.text.y=_player.base.y-context.scale(12);

      _player.collisionLeft.y=_player.base.y+context.scale(12);
      _player.collisionRight.y=_player.base.y+context.scale(12);
      _player.collisionTop.y=_player.base.y-context.scale(4);
      _player.collisionBottom.y=_player.base.y+context.scale(90);

      _player.cloud.y=_player.base.y+_player.cloud.height;
      _player.gun.y=_player.base.y+context.scale(32);
    }
  } if(context.collision(_currentPlatform,_player.collisionBottom)&&!_player.touched){
    if(_player.base.y<=_currentPlatform.y){ scene.score=_currentPlatform.level+1; }

    if(!_player.cloudFly){
      _player.base.y=_currentPlatform.y-_player.base.height;
      _player.text.y=_player.base.y-context.scale(12);

      _player.collisionLeft.y=_player.base.y+context.scale(12);
      _player.collisionRight.y=_player.base.y+context.scale(12);
      _player.collisionTop.y=_player.base.y-context.scale(4);
      _player.collisionBottom.y=_player.base.y+context.scale(90);

      _player.cloud.y=_player.base.y+_player.cloud.height;
      _player.gun.y=_player.base.y+context.scale(32);
    }

    _player.vy=scene.vy;
    _player.touched=true;
  } if(context.collision(_currentPlatform,_player.collisionBottom)){ _player.active=true; }
}

_spike.update=function(){
  if(context.collision(_currentSpike,_player.base)&&_player.invisible==0){
    _player.hp-=1;
    _player.text.value0="-25 punktów\nz zachowania";

    if(_player.hp!=0){
      if(global.sfx){ audio.damage1_sfx.play(); }
      _player.invisible=1;
    }
  }
}
