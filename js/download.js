var li = document.querySelector('.download-li');
var div = document.querySelector('.download');

li.onmouseover = function(){
  
  div.style.display = 'block';
}
div.onmouseleave = function(){
  
  div.style.display = 'none';
}