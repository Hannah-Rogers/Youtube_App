//api request once DOM has been loaded
  $(document).ready(function(){
  var thumb;
  var ID;
  var videos;
  var url = 'https://www.googleapis.com/youtube/v3/search';
  var params = {
    key: 'AIzaSyA2CCS0YoOMeia7Gb8H8PvUcBbGNB_ogg4',
    part: 'snippet',
    type: 'video',
    q: '',
    maxResults: 20
  };   

//retrieves info form the search and displays it
  function getData() {
    $.getJSON(url, params, function(data){
      videos = data.items.length;
    for (var i = 0; i <= videos; i++) {
      thumb = data.items[i].snippet.thumbnails.medium.url;
      ID = data.items[i].id.videoId;
      $('#search-results').append("<a href='https://www.youtube.com/watch?v=" + ID + "'>" + "<img src='" + thumb + "'>" + "</a>");
    }
  });
  }

//submit button is clicked, q object equal to json data
  $('#button').on('click', function(event) {
    event.preventDefault();
    params.q = $('#query').val();
    $('#search-results').empty();
    getData();
  });
});