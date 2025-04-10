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

scene.decorationGenerator=function(){
if(scene.type0==1){
    _currentDecoration={
      base:{
        x:context.scale(42),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(66),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:0,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=3; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=10&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type1==1){
    _currentDecoration={
      base:{
        x:context.scale(42+160),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(66+160),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:1,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=2; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=10&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type2==1){
    _currentDecoration={
      base:{
        x:context.scale(42+320),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(66+320),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:2,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=1; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=10&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type3==1){
    _currentDecoration={
      base:{
        x:context.scale(42+480),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(66+480),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:3,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=0; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=10&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type4==1){
    _currentDecoration={
      base:{
        x:context.scale(42+640),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(66+640),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:0,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=3; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=10&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type5==1){
    _currentDecoration={
      base:{
        x:context.scale(42+800),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(66+800),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:1,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=2; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=10&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type6==1){
    _currentDecoration={
      base:{
        x:context.scale(42+960),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(66+960),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:2,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=1; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=10&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type7==1){
    _currentDecoration={
      base:{
        x:context.scale(42+1120),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(66+1120),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:3,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=0; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=10&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  }

  _decoration.current=1;

  if(scene.type0==3){
    _currentDecoration={
      x:context.scale(16),
      y:_currentPlatform.y+context.scale(28),

      width:context.scale(128),
      height:context.scale(88),

      current:1,
      type:0,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=3; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type1==3){
    _currentDecoration={
      x:context.scale(16+160),
      y:_currentPlatform.y+context.scale(28),

      width:context.scale(128),
      height:context.scale(88),

      current:1,
      type:1,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=2; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type2==3){
    _currentDecoration={
      x:context.scale(16+320),
      y:_currentPlatform.y+context.scale(28),

      width:context.scale(128),
      height:context.scale(88),

      current:1,
      type:2,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=1; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type3==3){
    _currentDecoration={
      x:context.scale(16+480),
      y:_currentPlatform.y+context.scale(28),

      width:context.scale(128),
      height:context.scale(88),

      current:1,
      type:3,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=0; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type4==3){
    _currentDecoration={
      x:context.scale(16+640),
      y:_currentPlatform.y+context.scale(28),

      width:context.scale(128),
      height:context.scale(88),

      current:1,
      type:0,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=3; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type5==3){
    _currentDecoration={
      x:context.scale(16+800),
      y:_currentPlatform.y+context.scale(28),

      width:context.scale(128),
      height:context.scale(88),

      current:1,
      type:1,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=2; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type6==3){
    _currentDecoration={
      x:context.scale(16+960),
      y:_currentPlatform.y+context.scale(28),

      width:context.scale(128),
      height:context.scale(88),

      current:1,
      type:2,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=1; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type7==3){
    _currentDecoration={
      x:context.scale(16+1120),
      y:_currentPlatform.y+context.scale(28),

      width:context.scale(128),
      height:context.scale(88),

      current:1,
      type:3,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=0; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  }
}
