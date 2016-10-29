$(function(){

  // accordion script
    function close_accordion()
    {
      $('.accordion-toggle').removeClass('active');
      $('.panel-collapse').slideUp(300).removeClass('open');
    }

      $('.panel-default:nth-child(1) .panel-collapse').slideDown(300);


    $('.accordion-toggle').on('click',function(e){

        var current_node = $(this).data('parent');
        var img_url = $(this).attr('title');

        //image fade effect
        $('.ac-img img').fadeOut(200, function() {
          $('.ac-img img').attr('src', img_url+'.jpg');
        }).fadeIn(200);


        if($(this).hasClass('active'))
        {
          close_accordion();
        }
        else {
          close_accordion();
          $(this).addClass('active');
          $('.panel-collapse' + current_node).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});
