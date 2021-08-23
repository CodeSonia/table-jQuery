/**
 * Created the below and put it into a function as it is bad practice to run jQuery before the pg is fully loaded, as you might want to manipulate something that has not yet been rendered on the webpage.
 */
/*
$(document).ready(function() {
  $("h2").css("text-decoration", "underline"); //underlines all <h2> elements
  $("ul").css("border", "solid 1px #ccc"); // adds a border to all lists
})
*/

// Using .CSS function is not a good idea, as it changes the HTML using inline 
// styles. The below uses the class instead of adding inline styling rules.

$(document).ready(function() {
  $("h2").addClass("underline");
  $("ul").addClass("border");
}) 

/**
 * Changes the CSS in reality by removing the class
 */
/*
$(document).ready(function() {
  $("h2").removeClass("underline");
  $("ul").removeClass("border");
}) */
