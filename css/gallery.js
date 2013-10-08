var get_height = window.innerHeight; 
var get_height1 =  get_height - 25;
var get_container = document.getElementById('container');
get_container.style.height =  get_height1 + 'px';

//Image Hover
jQuery(document).ready(function(){
jQuery(function() {
  jQuery('ul.da-thumbs > li').hoverdir();
});
});