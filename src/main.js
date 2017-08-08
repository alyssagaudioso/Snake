$(document).ready(function() {
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));
  const audio = new Audio('src/assets/ahhhhhhSnake.mp3');

  audio.play();

  $('body').on('keydown', function(e) {
    if (e.keyCode === 37 && head.currentDirection !== 'right') {
      console.log('pressed left');
      head.currentDirection = 'left';
      head.node.attr('src', 'src/assets/snakeheadLeft.png');
    }
    if (e.keyCode === 39 && head.currentDirection !== 'left') {
      console.log('pressed right');
      head.currentDirection = 'right';
      head.node.attr('src', 'src/assets/snakeheadRight.png');
    }
    if (e.keyCode === 38 && head.currentDirection !== 'down') {
      console.log('pressed up');
      head.currentDirection = 'up';
      head.node.attr('src', 'src/assets/snakeheadUp.png');
    }
    if (e.keyCode === 40 && head.currentDirection !== 'up') {
      console.log('pressed down');
      head.currentDirection = 'down';
      head.node.attr('src', 'src/assets/snakeheadDown.png');
    }

  });

});
