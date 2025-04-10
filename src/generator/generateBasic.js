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

scene.generateLevel=function(){
  while(_platform.currentLoad<=_platform.load){
    scene.sectionGenerator();
    if(_platform.currentLoad>=1){
      scene.platformGenerator();
      scene.cornerGenerator();
      scene.spikeGenerator();
      scene.wallGenerator();
      scene.decorationGenerator();
    }

    _platform.currentLoad+=1;
  } if(_platform.currentLoad>_platform.load){ scene.generated=true; }
}

scene.resetLevel=function(){
  _platform.array=[];
  _platform.lenght=-1;
  _corner.array=[];
  _corner.lenght=-1;
  _spike.array=[];
  _spike.lenght=-1;
  _wall.array=[];
  _wall.lenght=-1;
  _decoration.array=[];
  _decoration.lenght=-1;

  _platform.currentLoad=0;
}

scene.wallGenerator=function(){
  if(_wall.round==0){
    _currentWall={
      x:context.scale(-34),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:0,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;

    _currentWall={
      x:context.scale(126),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:1,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;
    
    _currentWall={
      x:context.scale(286),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:2,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;

    _currentWall={
      x:context.scale(446),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:3,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;

    _currentWall={
      x:context.scale(606),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:0,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;

    _currentWall={
      x:context.scale(766),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:1,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;
    
    _currentWall={
      x:context.scale(926),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:2,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;

    _currentWall={
      x:context.scale(1086),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:3,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;
  } else{
    _currentWall={
      x:context.scale(-34),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:4,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;

    _currentWall={
      x:context.scale(126),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:5,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;
    
    _currentWall={
      x:context.scale(286),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:6,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;

    _currentWall={
      x:context.scale(446),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:7,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;

    _currentWall={
      x:context.scale(606),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:4,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;

    _currentWall={
      x:context.scale(766),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:5,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;
    
    _currentWall={
      x:context.scale(926),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:6,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;

    _currentWall={
      x:context.scale(1086),
      y:_currentPlatform.y+context.scale(180)-context.scale(58),

      width:_wall.width,
      height:_wall.height,

      type:7,
    };
    _wall.array.push(_currentWall);
    _wall.lenght++;
  }

  _wall.round++;
  if(_wall.round==2){ _wall.round=0; }
}

scene.cornerGenerator=function(){
  if(_platform.currentLoad!=_platform.load){
    _currentCorner={
      base:{
        x:_platform.random-context.scale(0.5),
        y:_currentPlatform.y,

        width:context.scale(8),
        height:context.scale(14),
      }, laser:{
        x:_platform.random+context.scale(4.5),
        y:_currentPlatform.y+context.scale(4),

        width:context.scale(145),
        height:context.scale(6),

        alpha:0,
      },
    };

    _corner.array.push(_currentCorner);
    _corner.lenght++;

    _currentCorner={
      base:{
        x:(_platform.random+context.scale(156))-context.scale(7.5),
        y:_currentPlatform.y,

        width:context.scale(8),
        height:context.scale(14),
        rotation:180,
      }, 
    };

    _corner.array.push(_currentCorner);
    _corner.lenght++;
  }
}
