// declare your functions here...
function paragraphSelector() {
  par = $('p');
  for (let i=0; i < par.length; i++) {
    return (par[i]);
  }
}
function lastImageSelector() {
  $('img:last');
}
function ninjaBabySelector() {
  // $('.pics img');
  $('#baby-ninja');
}