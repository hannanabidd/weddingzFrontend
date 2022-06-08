import $ from "jquery";
export default function startAnimation(props){
    console.log(typeof props)
    var $animation_element = $(`.${props}`);
    var $window2 = $(window);
    
    function check_in_view() {
    var win_height = $window2.height();
    var win_top_position = $window2.scrollTop();
    var win_bottom_position = (win_top_position + win_height);
    
    $.each($animation_element, function() {
        var $element2 = $(this);
        var element2_height = $element2.outerHeight();
        var element2_top_position = $element2.offset().top;
        var element2_bottom_position = (element2_top_position + element2_height);
    
        //check to see if this current container is within viewport
        if ((element2_bottom_position >= win_top_position) &&
            (element2_top_position <= win_bottom_position)) {
        $element2.addClass('fade-in-bottom')
        }
    //   else {
    //     $element2.removeClass('fade-in-bottom')
    //   }
    });
    }
    
    $window2.on('scroll resize', check_in_view);
    $window2.trigger('scroll');
}