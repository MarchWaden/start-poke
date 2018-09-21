
$('button').on('click', () => {
  console.log('click works');
});

create_squares = (number) => {
  for(i=0;i<number;i++){
    const color = ("blue_square");
    $('.squares').append(`<div class="${color}">  hiuhi   </div>`);
  }
}
create_squares(30);
