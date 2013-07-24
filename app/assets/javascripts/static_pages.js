$(document).ready(function(){

      var add_color = function(){
        var box = $('<div>');
        box.addClass('box');

        var color = $('#color').val();
        box.css('background-color', color); // setter method
        $('#colors').prepend(box);

        $('#color').val('').focus();

      };

      var set_color = function(){
          var box = $(this);
          var color = box.css('background-color'); // getter method
          $('#selected_color').css('background-color', color);
      };

      var add_picture = function(){
        var box = $('<div>');
        box.addClass('box');
        var image = $('#picture').val();
        box.css('background-image', ('url('+image+')'));
        box.css('background-size', 'cover');
        $('#pictures').prepend(box);
        $('#picture').val('');
      };

      var set_background = function(){
        var box = $(this);
        var image = box.css('background-image');
        $('#canvas').css('background-image', image);
        $('#canvas').css('background-size', cover);
      };


      var paint = function(){
        var paint_box = $(this);
        var color = $('#selected_color').css('background-color');
        paint_box.css('background-color', color);
      };


      $('#add_color').on('click', add_color);
      // delegated the event handled to an element that
      // aready existed on the page #colors div
      $('#colors').on('click', '.box', set_color);
      $('.paint_box').on('mouseover ', paint);
      $('#add_picture').on('click', add_picture);
      $('#pictures').on('click', '.box', set_background);

});

// need to add images to painter & add