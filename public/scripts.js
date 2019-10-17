$(document).ready(function() {
  $("nav")
    .find("a")
    .click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top
      });
      console.log("scroll successful");
    });
});
