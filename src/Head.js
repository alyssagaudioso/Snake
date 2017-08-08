// creates a constructor function - research ES6 classes
class Head {

  constructor($el) {
    this.node = $('<img id="head"></img>');
    this.node.attr('src', 'src/assets/snakeheadRight.png');
    this.currentDirection = 'right';
    this.bodyArr = []; 
    this.SPEED = 200;
    this.score = 0;
    $el.append(this.node);
    this.node.css({ top: 9, left: 9 });
    setTimeout(this.move.bind(this), this.SPEED);
  }

  bodyExistsHere(top, left){
    if(parseInt(head.style.top) === top && parseInt(head.style.left) === left){
      return true;
    }
    for(let i=0; i<this.bodyArr.length; i++){
      if(parseInt(this.bodyArr[i].style.top) === top && parseInt(this.bodyArr[i].style.left) === left)
        return true;
    }
    return false;
  }

  moveApple(){
   do{
      var newLeft = 50 * Math.floor(Math.random()*14) + 9;
      var newTop = 50 * Math.floor(Math.random()*14) + 9;
    } while( this.bodyExistsHere(newTop, newLeft) )
    apple.style.top = newTop;
    apple.style.left = newLeft;
    this.score++;
  }

  moveBody(movedApple){
    const snakebody = new SnakeBody($('#board')).node[0];
    let position = this.node.position(); 
    snakebody.style.top = position.top; 
    snakebody.style.left = position.left;
    this.bodyArr.unshift(snakebody);
    //meaning we didnt move apple
    if(!movedApple){
      let popped = this.bodyArr.pop();
      $(popped).remove();
    }
  }

  // same as Head.prototype.move = function() {...}
  move() {
    let direction = this.currentDirection;
    let position = this.node.position();
    let appleTop = parseInt(apple.style.top); 
    let appleLeft = parseInt(apple.style.left); 
    let movedApple = false;

   //right
    if (direction === 'right') {
      if(position.left === 659 || this.bodyExistsHere(position.top, position.left+50)){
        console.log('you lose');
        const score = new Score($('#board'),this.score).node[0];
        return; 
      }
      if(appleLeft - position.left === 50 && appleTop === position.top) movedApple = true;
      position.left += 50;
    }
    //left
     if (direction === 'left') {
       if(position.left === 9 || this.bodyExistsHere(position.top, position.left-50)){
         console.log('you lose');
         const score = new Score($('#board'),this.score).node[0];
         return;
       } 
       if(position.left - appleLeft === 50 && appleTop === position.top) movedApple = true;
       position.left -= 50;
    }
    //up
     if (direction === 'up') {
       if(position.top === 9 || this.bodyExistsHere(position.top-50, position.left)){
         console.log('you lose');
         const score = new Score($('#board'),this.score).node[0];
         return; 
       }
       if( position.top - appleTop  === 50 && position.left === appleLeft) movedApple = true;
       position.top -= 50;
    }
    //down
     if (direction === 'down') {
       if(position.top === 659 || this.bodyExistsHere(position.top+50, position.left)){
         console.log('you lose');
         const score = new Score($('#board'),this.score).node[0];
         return;
       }
       if(appleTop - position.top  === 50 && appleLeft ===  position.left) movedApple = true;
       position.top += 50;
    }

    this.moveBody(movedApple);
    if(movedApple) this.moveApple()
    this.node.offset(position);
    setTimeout(this.move.bind(this), this.SPEED);
  }

}
