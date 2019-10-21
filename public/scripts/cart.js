$(document).ready(function() {

  $("#cart").keyup(function() {
    while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
        $(this).height($(this).height()+1);
    };
    while($(this).outerHeight() + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth")) > (this.scrollHeight + 5)) {
      $(this).height($(this).height()-1);
  };
  });

});
