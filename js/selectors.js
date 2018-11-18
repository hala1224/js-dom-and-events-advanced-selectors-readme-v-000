// declare your functions here...
function paragraphSelector() {
  return $("p");
}
function lastImageSelector() {
  return $('img:last');
}
function ninjaBabySelector() {
  // $('.pics img');
 return  $('#baby-ninja');
}
function divSelector(){
  return $(".pic:nth-child(1)")+$(".pic:nth-child(2)");
  // return $(".pics div");
}
function firstListItem() {
  return $("#pic-list ul:firstChild");
}