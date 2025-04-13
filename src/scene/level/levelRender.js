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

scene.levelRender=function(){
  context.render(_background.base,_background.img0Level);
  context.render(_background.bottom,_background.img1Level);
  context.render(_background.left,_background.img0Level);
  context.render(_background.bottomLeft,_background.img1Level);

  if(_teacher.on){
    _teacher.render();

    context.render(_attack.tebulinek,_attack.tebulinek.img0);
    
    if(_attack.object1.current==0){ context.render(_attack.object1,_attack.object1.img0Computer); }
    else{ context.render(_attack.object1,_attack.object1.img0Keyboard); }
    if(_attack.object2.current==0){ context.render(_attack.object2,_attack.object2.img0Coffe); }
    else{ context.render(_attack.object2,_attack.object2.img0Pigeon); }

    context.render(_teacher.cloud,_teacher.cloud.img0);

    if(_player.left){ context.render(_player.cloud,_player.cloud.img0); }
    else{ context.render(_player.cloud,_player.cloud.img1); }
  }

  if(scene.generated){
    while(_decoration.lenght>=_decoration.currentLenght){
      _currentDecoration=_decoration.array[_decoration.currentLenght];

      if(_currentDecoration.current==0&&_currentDecoration.base.y<canvas.height*1.5&&_currentDecoration.base.y>=-canvas.height*0.5&&
         (_currentDecoration.base.x<context.scale(640+16)||_currentDecoration.base.x+_currentDecoration.base.width>-context.scale(16))){
        if(_currentDecoration.type==0){ context.render(_currentDecoration.base,_decoration.img0Door); }
        else if(_currentDecoration.type==1){ context.render(_currentDecoration.base,_decoration.img1Door); }
        else if(_currentDecoration.type==2){ context.render(_currentDecoration.base,_decoration.img2Door); }
        else if(_currentDecoration.type==3){ context.render(_currentDecoration.base,_decoration.img3Door); }
        else{ context.render(_currentDecoration.base,_decoration.img4Door); }
        context.text(_currentDecoration.text,_decoration.color0,_currentDecoration.text.value0);

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
      } else if(_currentDecoration.current==1&&_currentDecoration.y<canvas.height*1.5&&_currentDecoration.y>=-canvas.height*0.5&&
         (_currentDecoration.x<context.scale(640+16)||_currentDecoration.x+_currentDecoration.width>-context.scale(16))){
        if(_currentDecoration.type==0){ context.render(_currentDecoration,_decoration.img0Board); }
        else if(_currentDecoration.type==1){ context.render(_currentDecoration,_decoration.img1Board); }
        else if(_currentDecoration.type==2){ context.render(_currentDecoration,_decoration.img2Board); }
        else{ context.render(_currentDecoration,_decoration.img3Board); }

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
      } else if(_currentDecoration.current==2&&_currentDecoration.light.y<canvas.height*1.5&&_currentDecoration.light.y>=-canvas.height*0.5&&
         (_currentDecoration.light.x<context.scale(640+16)||_currentDecoration.light.x+_currentDecoration.light.width>-context.scale(16))){
        context.render(_currentDecoration.base,"rgb(255,255,255)");
        context.render(_currentDecoration.light,_decoration.img0Light);

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
      }

      if(_currentDecoration.current==0){
        _currentDecoration.base.y+=scene.vy;
        _currentDecoration.text.y+=scene.vy;
        _currentDecoration.base.x+=scene.vx;
        _currentDecoration.text.x+=scene.vx;
      } else if(_currentDecoration.current==1){
        _currentDecoration.y+=scene.vy;
        _currentDecoration.x+=scene.vx;
      } else if(_currentDecoration.current==2){
        _currentDecoration.base.y+=scene.vy;
        _currentDecoration.light.y+=scene.vy;
        _currentDecoration.base.x+=scene.vx;
        _currentDecoration.light.x+=scene.vx;
      } _decoration.currentLenght+=1;
    }

    while(_locker.lenght>=_locker.currentLenght){
      _currentLocker=_locker.array[_locker.currentLenght];

      if(_currentLocker.base.y<canvas.height*1.5&&_currentLocker.base.y>=-canvas.height*0.5&&
         (_currentLocker.base.x<context.scale(640+16)||_currentLocker.base.x+_currentLocker.base.width>-context.scale(16))){
        if(_currentLocker.base.type==0){ context.render(_currentLocker.base,_locker.img1); }
        else if(_currentLocker.base.type==1){ context.render(_currentLocker.base,_locker.img2); }
        else if(_currentLocker.base.type==2){ context.render(_currentLocker.base,_locker.img3); }
        else if(_currentLocker.base.type==3){ context.render(_currentLocker.base,_locker.img4); }
        else{ context.render(_currentLocker.base,_locker.img0); }

        if(_currentLocker.bottom.type==0){ context.render(_currentLocker.bottom,_locker.img1); }
        else if(_currentLocker.bottom.type==1){ context.render(_currentLocker.bottom,_locker.img2); }
        else if(_currentLocker.bottom.type==2){ context.render(_currentLocker.bottom,_locker.img3); }
        else if(_currentLocker.bottom.type==3){ context.render(_currentLocker.bottom,_locker.img4); }
        else{ context.render(_currentLocker.bottom,_locker.img0); }

        if(_currentLocker.left.type==0){ context.render(_currentLocker.left,_locker.img1); }
        else if(_currentLocker.left.type==1){ context.render(_currentLocker.left,_locker.img2); }
        else if(_currentLocker.left.type==2){ context.render(_currentLocker.left,_locker.img3); }
        else if(_currentLocker.left.type==3){ context.render(_currentLocker.left,_locker.img4); }
        else{ context.render(_currentLocker.left,_locker.img0); }

        if(_currentLocker.bottomLeft.type==0){ context.render(_currentLocker.bottomLeft,_locker.img1); }
        else if(_currentLocker.bottomLeft.type==1){ context.render(_currentLocker.bottomLeft,_locker.img2); }
        else if(_currentLocker.bottomLeft.type==2){ context.render(_currentLocker.bottomLeft,_locker.img3); }
        else if(_currentLocker.bottomLeft.type==3){ context.render(_currentLocker.bottomLeft,_locker.img4); }
        else{ context.render(_currentLocker.bottomLeft,_locker.img0); }

        if(!global.pause&&_player.hp>0){ _locker.update(); }
      }

      _currentLocker.base.y+=scene.vy;
      _currentLocker.bottom.y+=scene.vy;
      _currentLocker.left.y+=scene.vy;
      _currentLocker.bottomLeft.y+=scene.vy;
      _currentLocker.base.x+=scene.vx;
      _currentLocker.bottom.x+=scene.vx;
      _currentLocker.left.x+=scene.vx;
      _currentLocker.bottomLeft.x+=scene.vx;
      _locker.currentLenght+=1;
    }

    _player.update();
    _player.render();

    while(_platform.lenght>=_platform.currentLenght){
      _currentPlatform=_platform.array[_platform.currentLenght];

      if(_currentPlatform.y<canvas.height*1.5&&_currentPlatform.y>=-canvas.height*0.5){
        context.render(_currentPlatform,_platform.img0);
        if(!global.pause&&_player.hp>0){ _platform.update(); }
      }

      _currentPlatform.y+=scene.vy;
      _currentPlatform.x+=scene.vx;
      _platform.currentLenght+=1;
    }

    // while(_wall.lenght>=_wall.currentLenght){
    //   _currentWall=_wall.array[_wall.currentLenght];

    //   if(_currentWall.y<canvas.height*1.5&&_currentWall.y>=-canvas.height*0.5&&
    //      (_currentWall.x<context.scale(640+16)||_currentWall.x+_currentWall.width>-context.scale(16))){
    //     if(_currentWall.type==0){ context.render(_currentWall,_wall.img0); }
    //     else if(_currentWall.type==1){ context.render(_currentWall,_wall.img1); }
    //     else if(_currentWall.type==2){ context.render(_currentWall,_wall.img2); }
    //     else if(_currentWall.type==3){ context.render(_currentWall,_wall.img3); }
    //     else if(_currentWall.type==4){ context.render(_currentWall,_wall.img0Alt); }
    //     else if(_currentWall.type==5){ context.render(_currentWall,_wall.img1Alt); }
    //     else if(_currentWall.type==6){ context.render(_currentWall,_wall.img2Alt); }
    //     else{ context.render(_currentWall,_wall.img3Alt); }

    //     if(!global.pause&&_player.hp>0){ _wall.update(); }
    //   }

    //   _currentWall.y+=scene.vy;
    //   _currentWall.x+=scene.vx;
    //   _wall.currentLenght+=1;
    // }

    while(_spike.lenght>=_spike.currentLenght){
      _currentSpike=_spike.array[_spike.currentLenght];

      if(_currentSpike.y<canvas.height+context.scale(32)&&_currentSpike.y>=-context.scale(32)){
        context.render(_currentSpike,_spike.img0);
        if(!global.pause&&_player.hp>0){ _spike.update(); }
      }

      _currentSpike.y+=scene.vy;
      _currentSpike.x+=scene.vx;
      _spike.currentLenght+=1;
    }

    while(_corner.lenght>=_corner.currentLenght){
      _currentCorner=_corner.array[_corner.currentLenght];

      if(_currentCorner.base.y<canvas.height+context.scale(180)&&_currentCorner.base.y>=-context.scale(180)){
        context.render(_currentCorner.base,_corner.img0);

        if(_currentCorner.laser!=undefined){
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

          context.render(_currentCorner.laser,_corner.color0);
        } if(!global.pause&&_player.hp>0){ _corner.update(); }
      }

      if(_currentCorner.laser!=undefined){
        _currentCorner.laser.y+=scene.vy;
        _currentCorner.laser.x+=scene.vx;
      }
      _currentCorner.base.y+=scene.vy;
      _currentCorner.base.x+=scene.vx;
      _corner.currentLenght+=1;
    } if(!global.pause&&_player.hp>0){ _corner.timer++; }

    while(_foreground.lenght>=_foreground.currentLenght){
      _currentForeground=_foreground.array[_foreground.currentLenght];

      context.render(_currentForeground,"rgb(0,0,55)");
      if(!global.pause&&_player.hp>0){ _foreground.update(); }

      _currentForeground.y+=scene.vy;
      _currentForeground.x+=scene.vx;
      _foreground.currentLenght+=1;
    }

    _player.midUpdate();
    _player.lateUpdate();
  }

  _player.textRender();
  if(_teacher.on){ _teacher.textRender(); }

  context.render(_ui.game.hp.background,_ui.color1);
  context.render(_ui.game.hp.main,_ui.color0);
  if(_player.hp==0){ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img0); }
  else if(_player.hp==1){ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img1); }
  else if(_player.hp==2){ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img2); }
  else if(_player.hp==3){ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img3); }
  else if(_player.hp==4){ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img4); }
  else{ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img5); }
  context.text(_ui.game.hp.text,_ui.color1,_ui.game.hp.text.value0);

  context.render(_ui.game.ammo.background,_ui.color1);
  context.render(_ui.game.ammo.main,_ui.color0);
  if(_player.gun.type==0){
    if(_player.gun.timer<context.time(30)){ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img0); }
    else if(_player.gun.timer>=context.time(30)&&_player.gun.timer<context.time(60)){ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img1Normal); }
    else if(_player.gun.timer>=context.time(60)&&_player.gun.timer<context.time(90)){ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img2Normal); }
    else{ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img3Normal); }

    context.render(_ui.game.ammo.iconLeft,_ui.game.ammo.iconLeft.img2);
    context.render(_ui.game.ammo.iconRight,_ui.game.ammo.iconRight.img1);
  } else if(_player.gun.type==1){
    if(_player.gun.timer<context.time(40)){ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img0); }
    else if(_player.gun.timer>=context.time(40)&&_player.gun.timer<context.time(80)){ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img1Strong); }
    else if(_player.gun.timer>=context.time(80)&&_player.gun.timer<context.time(120)){ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img2Strong); }
    else{ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img3Strong); }

    context.render(_ui.game.ammo.iconLeft,_ui.game.ammo.iconLeft.img0);
    context.render(_ui.game.ammo.iconRight,_ui.game.ammo.iconRight.img2);
  } else{
    if(_player.gun.timer<context.time(20)){ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img0); }
    else if(_player.gun.timer>=context.time(20)&&_player.gun.timer<context.time(40)){ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img1Fast); }
    else if(_player.gun.timer>=context.time(40)&&_player.gun.timer<context.time(60)){ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img2Fast); }
    else{ context.render(_ui.game.ammo.iconMain,_ui.game.ammo.iconMain.img3Fast); }

    context.render(_ui.game.ammo.iconLeft,_ui.game.ammo.iconLeft.img1);
    context.render(_ui.game.ammo.iconRight,_ui.game.ammo.iconRight.img0);
  } context.text(_ui.game.ammo.text,_ui.color1,_ui.game.ammo.text.value0);

  context.render(_ui.game.pause.background,_ui.color1);
  context.render(_ui.game.pause.main,_ui.color0);
  context.text(_ui.game.pause.icon,_ui.color1,_ui.game.pause.icon.value0);
  context.text(_ui.game.pause.text,_ui.color1,_ui.game.pause.text.value0);

  context.render(_ui.game.info.background,_ui.color1);
  context.render(_ui.game.info.main,_ui.color0);
  context.render(_ui.game.info.icon,_ui.game.info.icon.img0);
  context.text(_ui.game.info.text,_ui.color1,_ui.game.info.text.value0);
  context.text(_ui.game.info.score,_ui.color1,_ui.game.info.score.value0);
  context.text(_ui.game.info.level,_ui.color1,_ui.game.info.level.value0);

  if(_teacher.on){
    context.render(_ui.game.teacher.background,_ui.color1);
    context.render(_ui.game.teacher.main,_ui.color0);
    if(_teacher.hp==0){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img0); }
    else if(_teacher.hp==1){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img1); }
    else if(_teacher.hp==2){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img2); }
    else if(_teacher.hp==3){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img3); }
    else if(_teacher.hp==4){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img4); }
    else if(_teacher.hp==5){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img5); }
    else if(_teacher.hp==6){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img6); }
    else if(_teacher.hp==7){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img7); }
    else if(_teacher.hp==8){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img8); }
    else if(_teacher.hp==9){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img9); }
    else{ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img10); }
    context.text(_ui.game.teacher.text,_ui.color1,_ui.game.teacher.text.value0);
  }

  if(global.pauseAnimation&&!global.pauseChange&&global.pause&&_transition.timer==0&&scene.next!=1&&_player.hp>0&&_teacher.hp>0){
    if(!global.pauseChange){ context.render(_transition.base,_transition.base.color0); }

    context.render(_ui.menu.main,_ui.color0);
    context.render(_ui.menu.left,_ui.color1);
    context.render(_ui.menu.right,_ui.color1);

    if(_title.base.alpha==100){ context.render(_title.teb,_title.teb.img0); }
    else{ context.render(_title.teb,_title.teb.img1); }
    context.render(_title.base,_title.base.img0);

    context.text(_account.name,_account.color0,_account.name.value0);
    context.render(_account.background,_account.color0);
    context.render(_account.profile,_account.profile.img0);

    context.text(_footer.version,_footer.color0,_footer.version.value0);
    context.render(_footer.github,_footer.github.img0);
    context.render(_footer.pastebin,_footer.pastebin.img0);

    if(!global.currentTutorial&&!global.currentTeacher&&!global.currentReward){
      if(_button.start.text.alpha==100){ context.render(_button.start.base,_button.start.base.img0); }
      else{ context.render(_button.start.base,_button.start.base.img1); }
      context.text(_button.start.text,_button.color0,_button.start.text.value0);
      if(_button.menu.text.alpha==100){ context.render(_button.menu.base,_button.menu.base.img0); }
      else{ context.render(_button.menu.base,_button.menu.base.img1); }
      context.text(_button.menu.text,_button.color0,_button.menu.text.value0);
      if(_button.restart.text.alpha==100){ context.render(_button.restart.base,_button.restart.base.img0); }
      else{ context.render(_button.restart.base,_button.restart.base.img1); }
      context.text(_button.restart.text,_button.color0,_button.restart.text.value0);
      if(_button.setting.text.alpha==100){ context.render(_button.setting.base,_button.setting.base.img0); }
      else{ context.render(_button.setting.base,_button.setting.base.img1); }
      context.text(_button.setting.text,_button.color0,_button.setting.text.value0);
      if(_button.about.text.alpha==100){ context.render(_button.about.base,_button.about.base.img0); }
      else{ context.render(_button.about.base,_button.about.base.img1); }
      context.text(_button.about.text,_button.color0,_button.about.text.value0);
      if(_button.version.text.alpha==100){ context.render(_button.version.base,_button.version.base.img0); }
      else{ context.render(_button.version.base,_button.version.base.img1); }
      context.text(_button.version.text,_button.color0,_button.version.text.value0);

      if(_button.setting.animation||_button.setting.on||_button.about.animation||_button.about.on||_button.version.animation||_button.version.on){
        context.render(_clipboard.base,_clipboard.base.img0);
        if(!_clipboard.back.hover){ context.render(_clipboard.back,_clipboard.back.img0); }
        else{ context.render(_clipboard.back,_clipboard.back.img1); }

        if(_button.setting.animation||_button.setting.on){
          context.text(_clipboard.setting.title,_clipboard.color0,_clipboard.setting.title.value0);

          if(!global.sfx){ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.sfx.text,_clipboard.color0,_clipboard.setting.sfx.text.value0);
          if(!global.music){ context.render(_clipboard.setting.music.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.music.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.music.text,_clipboard.color0,_clipboard.setting.music.text.value0);
          if(!global.tutorial){ context.render(_clipboard.setting.tutorial.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.tutorial.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.tutorial.text,_clipboard.color0,_clipboard.setting.tutorial.text.value0);
          if(!global.teacher){ context.render(_clipboard.setting.teacher.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.teacher.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.teacher.text,_clipboard.color0,_clipboard.setting.teacher.text.value0);
          if(!global.addon){ context.render(_clipboard.setting.addon.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.addon.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.addon.text,_clipboard.color0,_clipboard.setting.addon.text.value0);
        }
  
        if(_button.about.animation||_button.about.on){
          context.text(_clipboard.about.title,_clipboard.color0,_clipboard.about.title.value0);
          context.text(_clipboard.about.text,_clipboard.color0,_clipboard.about.text.value0);
        } else if(_button.version.animation||_button.version.on){
          context.text(_clipboard.version.title,_clipboard.color0,_clipboard.version.title.value0);
          context.text(_clipboard.version.text,_clipboard.color0,_clipboard.version.text.value0);
        }
      }
    }

    if(global.currentTutorial||global.currentReward){
      context.render(_clipboard.wide,_clipboard.wide.img0);
      if(!_clipboard.wideBack.hover){ context.render(_clipboard.wideBack,_clipboard.wideBack.img0); }
      else{ context.render(_clipboard.wideBack,_clipboard.wideBack.img1); }

      if(global.currentTutorial){
        context.text(_clipboard.tutorial.title,_clipboard.color0,_clipboard.tutorial.title.value0);
        context.text(_clipboard.tutorial.text,_clipboard.color0,_clipboard.tutorial.text.value0);
      } else if(global.currentReward){
        context.text(_clipboard.reward.title,_clipboard.color0,_clipboard.reward.title.value0);
        context.text(_clipboard.reward.text,_clipboard.color0,_clipboard.reward.text.value0);
        context.render(_clipboard.reward.icon,_clipboard.reward.icon.img0);
      }
    } else if(global.currentTeacher){
      context.render(_blueprint.wide,_blueprint.wide.img0);
      if(!_blueprint.wideBack.hover){ context.render(_blueprint.wideBack,_blueprint.wideBack.img0); }
      else{ context.render(_blueprint.wideBack,_blueprint.wideBack.img1); }

      if(scene.value==2){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value0);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value0);
      } else if(scene.value==3){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value1);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value1);
      } else if(scene.value==4){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value2);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value2);
      } else if(scene.value==5){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value3);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value3);
      } else if(scene.value==6){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value4);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value4);
      } else if(scene.value==7){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value5);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value5);
      } else if(scene.value==8){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value6);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value6);
      } else if(scene.value==9){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value7);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value7);
      } else if(scene.value==10){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value1);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value1);
      } else if(scene.value==11){
        if(_teacher.round==0){
          context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.valueAdd0);
          context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.valueAdd0);
        } else if(_teacher.round==1){
          context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.valueAdd1);
          context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.valueAdd1);
        } else{
          context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.valueAdd2);
          context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.valueAdd2);
        }
      }
    }
  }

  if(scene.change&&!global.restart&&scene.next!=1){
    if(_player.hp==0){
      if(_teacher.on){
        html.classList.remove("black-red");
        html.classList.add("red-black");
      } else{
        html.classList.remove("black-cyan");
        html.classList.add("cyan-black");
      }

      _transition.base.alpha+=context.time(8);
      context.render(_transition.base,_transition.base.color0);
    } else if(_teacher.hp>0){
      if(_transition.timer>=context.time(65)){
        html.classList.remove("blue-black");
        html.classList.add("black-cyan");
      }

      if(_transition.timer>=context.time(65)){ _transition.base.alpha-=context.frame(8); }
      context.render(_transition.base,_transition.base.color0);

      if(_transition.timer<context.time(65)){ context.render(_start.arrow,_start.arrow.img0); }

      if(_transition.timer<context.time(10)){ _transition.text.alpha+=context.frame(8); }
      else if(_transition.timer>=context.time(55)){ _transition.text.alpha-=context.frame(8); }
      context.text(_transition.text,_transition.text.color0,_transition.text.value0);
    }
  }

  if(scene.next!=scene.value&&global.pauseChange||global.restart){
    _transition.base.alpha+=context.frame(4);
    context.render(_transition.base,_transition.base.color0);
  } else if(global.pauseChange&&!global.restart){
    if(!global.pauseAnimation){
      if(_teacher.on){
        html.classList.remove("red-black");
        html.classList.add("black-red");
      } else{
        html.classList.remove("cyan-black");
        html.classList.add("black-cyan");
      }

      _transition.base.alpha-=context.frame(4);
      context.render(_transition.base,_transition.base.color0);
    } else{
      if(_teacher.on){
        html.classList.remove("cyan-red");
        html.classList.remove("black-red");
        html.classList.add("red-black");
      } else{
        html.classList.remove("red-black");
        html.classList.remove("black-cyan");
        html.classList.add("cyan-black");
      }

      _transition.base.alpha+=context.frame(4);
      context.render(_transition.base,_transition.base.color0);
    }
  }
}
