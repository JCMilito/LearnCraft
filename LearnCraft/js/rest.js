function addPlayerToGame(idPlayer, idMap) {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/map/addPlayer",
    data: jQuery.param({
      idPlayer: idPlayer,
      idMap: idMap
    }),
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log(status);
    },
    error: function(jqXHR, status) {
      console.log(status);
    }
  });
}
