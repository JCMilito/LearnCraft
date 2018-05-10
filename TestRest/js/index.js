
jQuery.ajax({
  type: "GET",
  url: "http://localhost:3000/map/list",
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  success: function(data, status, jqXHR) {
    document.getElementById("demo").innerHTML = data[0].name;
  },

  error: function(jqXHR, status) {
    console.log(status);
  }
});
