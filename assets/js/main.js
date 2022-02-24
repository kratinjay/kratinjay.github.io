"use strict";

// Open & Close Aside & Full Width Navigation

$(".open-nav").on("click", function(e){
 e.preventDefault();
 $(".mobile-navigation-overlay").addClass("active");
 $(".mobile-navigation").addClass("active");
 $(".full-width-navigation").addClass("active");
})

$(".close-nav").on("click", function(e){
 e.preventDefault();
 $(".mobile-navigation-overlay").removeClass("active");
 $(".mobile-navigation").removeClass("active");
 $(".full-width-navigation").removeClass("active");
})

// Open & Close Search Overlay

$(".open-search").on("click", function(){
 $(".search-overlay").addClass("active");
})

$(".close-search").on("click", function(){
 $(".search-overlay").removeClass("active");
})
