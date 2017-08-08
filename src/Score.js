class Score {
  constructor($el, score) {
    this.node = $('<div id="score"><center><h1>YOU LOSE!</h1><center>'+
                  '<h2>Score: '+score+'</h2>'+
                  '<button onclick=location.reload() id="btn">NEW GAME</button></div>');
    $el.append(this.node);

  }
}