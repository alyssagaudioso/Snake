class SnakeBody {
  constructor($el) {
    this.node = $('<img id="snakebody"></img>');
    this.node.attr('src', 'src/assets/snakebody.png');
    $el.append(this.node);
  }
}