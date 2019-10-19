$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((data) => {
    for(user of data.users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});
