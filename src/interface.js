$(document).ready(function() {
  var bowling = new Bowling();
$('#score').text(bowling.score());

$('form').submit(function(event){
  event.preventDefault();
  var one = parseInt($('#one').val());
  var two= parseInt($('#two').val());
  var three= parseInt($('#three').val());
  var four= parseInt($('#four').val());
  var five= parseInt($('#five').val());
  var six= parseInt($('#six').val());
  var seven= parseInt($('#seven').val());
  var eight= parseInt($('#eight').val());
  var nine= parseInt($('#nine').val());
  var ten= parseInt($('#ten').val());
  var eleven= parseInt($('#eleven').val());
  var twelve= parseInt($('#twelve').val());
  var thirteen= parseInt($('#thirteen').val());
  var fourteen= parseInt($('#fourteen').val());
  var fifteen= parseInt($('#fifteen').val());
  var sixteen= parseInt($('#sixteen').val());
  var seventeen= parseInt($('#seventeen').val());
  var eighteen= parseInt($('#eighteen').val());
  var nineteen= parseInt($('#nineteen').val());
  var twenty= parseInt($('#twenty').val());
  bowling.roll(one);
  bowling.roll(two);
  bowling.roll(three);
  bowling.roll(four);
  bowling.roll(five);
  bowling.roll(six);
  bowling.roll(seven);
  bowling.roll(eight);
  bowling.roll(nine);
  bowling.roll(ten);
  bowling.roll(eleven);
  bowling.roll(twelve);
  bowling.roll(thirteen);
  bowling.roll(fourteen);
  bowling.roll(fifteen);
  bowling.roll(sixteen);
  bowling.roll(seventeen);
  bowling.roll(eighteen);
  bowling.roll(nineteen);
  bowling.roll(twenty);
  console.log(bowling.total);
  console.log(bowling.score());
  $('#score').text(bowling.score());
  });
});
