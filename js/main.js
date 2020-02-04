var window_size = window.matchMedia('(min-width: 1020px)');
var window_size2 = window.matchMedia('(min-width: 726px)'); // проверка для аккордиона
var check, check2;

if(window_size.matches){
    //if the page is wider than ...px
    check = true;
}else{
    //if the page is narrower than ...px
    check = false;
}

if(window_size2.matches){     // проверка для аккордиона
    //if the page is wider than ...px
    check2 = 0;
}else{
    //if the page is narrower than ...px
    check2 = false;
}

$('#fullpage').fullpage({
    //options here
    anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7',],
    menu: '#mainMenu',
    autoScrolling: true,
    scrollHorizontally: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    controlArrows: check
});

//methods
$.fn.fullpage.setAllowScrolling(true);

//adding the action to the button
$(document).on('click', '#moveRight, #moveRight__bonus', function(){
    fullpage_api.moveSlideRight();
});

(function () {
    var removeSuccess;

    removeSuccess = function () {
        return $('.button').removeClass('success');
    };

    $(document).ready(function () {
        return $('.button').click(function () {
            $(this).addClass('success');
            return setTimeout(removeSuccess, 3000);
        });
    });

}).call(this);

    $( "#accordion" ).accordion({
        active: check2,
        collapsible: true
    });

    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1000);