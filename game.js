var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
function nextSequence()
{
  var randomNumber= Math.floor(Math.random() * 3 + 1);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);//to animate flash
  playSound(randomChosenColour);

}
$(".btn").click(
function()
{
  var userChosenColour= $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);


}
);
function playSound(name)
{
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColour)
{

}
