window.onload = function(){
  var loadButton = document.getElementById('load-more');
  var feed = new Instafeed({
  clientId: 'f5215be3cd164eb781911abfdeac8256',
  get: 'user',
  userId: '2992165686',
  limit: 20,
  resolution: 'low_resolution',
  after: function () {
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
      // disable button if no more results to load
      if (!this.hasNext()) {
          loadButton.setAttribute('disabled', 'disabled');
      }
    });
  },
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
});

// bind the load more button
loadButton.addEventListener('click', function() {
    feed.next();
});

feed.run();
}