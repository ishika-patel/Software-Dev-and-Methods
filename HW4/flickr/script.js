const event = new Event('scroll');
document.addEventListener('scroll', function (e)
{
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()){
      console.log("bottom");
      makeApiCallAgain();
      return true;
    }

  });
}, false);

document.dispatchEvent(event);


//run when the document object model is ready for javascript code to execute
function makeApiCall() {
  console.log("make call");
  var photoTag= $('#photoTag').val();
  var numberPhoto= $('#numberPhoto').val();
  console.log(photoTag);
  console.log(numberPhoto);

  $(document).ready(function(){
    var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2dd91eb55f9576c1d7a2ba9c9a872948&tags='+photoTag+'&privacy_filter=1&safe_search=1&extras=url_sq&per_page='+numberPhoto + '&page=1&format=json&nojsoncallback=1';

    $.ajax({url:url, dataType:"json"}).then(function(data) {
  console.log(data);

    var image = '';
    var nextImage = '';
    console.log(document.getElementById("images"));

    for(var i = 0; i < numberPhoto; i++) {
        nextImage = '<div style="width: 10%;"><div class="card"><div class="card-body"><h5 class="card-title"></h5>';
        nextImage += '<img class="card-img-top" src="' + data.photos.photo[i].url_sq + '"alt="PhotoTemp"></img><br>';
        nextImage +=  data.photos.photo[i].title + '</div></div></div>';
        //document.getElementById("images").innerHTML += nextImage;
        image = image + nextImage;
    }

   $('#images').html(image);
  })
  });
}

//run when the document object model is ready for javascript code to execute
function makeApiCallAgain() {
  console.log("make call");
  var photoTag= $('#photoTag').val();
  var numberPhoto= $('#numberPhoto').val();
  console.log(photoTag);
  console.log(numberPhoto);

  $(document).ready(function(){
    var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2dd91eb55f9576c1d7a2ba9c9a872948&tags='+photoTag+'&privacy_filter=1&safe_search=1&extras=url_sq&per_page='+numberPhoto + '&page=1&format=json&nojsoncallback=1';

    $.ajax({url:url, dataType:"json"}).then(function(data) {
  console.log(data);

    var image = '';
    var nextImage = '';
    console.log(document.getElementById("images"));

    for(var i = 0; i < numberPhoto; i++) {
        nextImage = '<div style="width: 10%;"><div class="card"><div class="card-body"><h5 class="card-title"></h5>';
        nextImage += '<img class="card-img-top" src="' + data.photos.photo[i].url_sq + '"alt="PhotoTemp"></img><br>';
        nextImage +=  data.photos.photo[i].title + '</div></div></div>';
        document.getElementById("images").innerHTML += nextImage;
        image = image + nextImage;
    }

   //$('#images').html(image);
  })
  });
}
