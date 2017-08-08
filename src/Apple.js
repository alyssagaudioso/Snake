class Apple {
  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/mouse.png');
    $el.append(this.node);
    this.node.css({ top: 9, left: 9 });
  }
}
