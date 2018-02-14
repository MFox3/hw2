// // Your code goes here:

let changeImage = function(event) {

let thumbnail = jQuery(this).attr("src");

  let mainImage = jQuery('#main-image')
      mainImage.attr("src", thumbnail);
}

jQuery('#thumbnails img').on('click', changeImage)
