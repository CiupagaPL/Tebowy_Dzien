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

