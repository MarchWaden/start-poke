
const game = {
  squares_clicked: 0,
  squares_to_click: 0,
  score: 0,
  timer: 30,
  is_playing: false,
  difficulty_level: 0,
  round: 1,
  reinitialize_variables(){
    game.squares_clicked = 0;
    game.squares_to_click = 0;
    game.score = 0;
    game.timer = 30;
  },
  do_timer_tick(){
    game.timer--;
    if(game.timer == 0){
      game.is_playing = false;
      game.difficulty_level = 0;
      game.round = 1;
      console.log('you lose!')
      clearInterval(game.tick_timer);
    }if(game.squares_clicked == game.squares_to_click){
      game.is_playing = false;
      game.difficulty_level++;
      game.round++;
      console.log('you win!')
      clearInterval(game.tick_timer);
    }
    $('#timer').html(`<span id="timer">timer: ${game.timer}</span>`);
  },
  create_squares(number){
    for(i=0;i<number;i++){
       if (Math.random() < .2){
         let color = ("blue_square");
      $('.squares').append(`<div class="${color}"></div>`);
      game.squares_to_click++;
    }else{
      if(Math.random() > .5){
          $('.squares').append(`<div class="red_squares"></div>`);
      }
      else{
          $('.squares').append(`<div class="green_squares"></div>`);
      }
    }
    }
  },
  clear_squares(){
    $('.squares div').remove();
  },
  play(){
      game.reinitialize_variables();
      game.clear_squares();
      $('#round').html(`<span id="round">round: ${game.round}</round>`)
      if(game.round == 1){
        $('body').append(`<div class="scoreboard">score: ${game.score}</div>`);
      }
      game.is_playing = true;
      game.create_squares(30+game.difficulty_level*15);
      $('.squares .red_squares').on('click', (e) =>{
        $(e.currentTarget).css("background-color", "orange");
        game.score--;
        console.log(game.score);
        $('div.scoreboard').css("background-color", "red");
        $('div.scoreboard').html(`<div class="scoreboard">score: ${game.score}</div>`);
        setTimeout(()=>{$('div.scoreboard').css("background-color","white")} ,500);
      });
      $('.squares .green_squares').on('click', (e) =>{
        $(e.currentTarget).css("background-color", "orange");
        game.score--;
        $('div.scoreboard').html(`<div class="scoreboard">score: ${game.score}</div>`);
      });
      $('.squares .blue_square').on('click', (e) =>{
        if($(e.currentTarget).css("opacity")){
          game.score++;
          $(e.currentTarget).css('opacity', 0);
          game.squares_clicked++;
        }
        $('div.scoreboard').html(`<div class="scoreboard">score: ${game.score}</div>`);
      });
      game.tick_timer = setInterval(game.do_timer_tick,1000);
      }

}
$('button').on('click', () => {
  if (game.is_playing === false){
    game.play();
  }
});
