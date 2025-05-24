$(document).ready(function(){
    $(function(){
        $('.nav__item').click(function(){
             var target = $(this).attr('href');
             $('html, body').animate({scrollTop: $(target).offset().top}, 800);
             return false; 
        }); 
    });
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100) {
            $('.header').addClass('fixed')
        } else {
            $('.header').removeClass('fixed');
        }
    });
    
    var time = 2,
    cc = 1;
    
    if (cc < 2) {
        $(".num").addClass("viz");
        $('div').each(function() {
            var
            i = 1,
            num = $(this).data('num'),
            step = 3000 * time / num,
            that = $(this),
            int = setInterval(function() {
                if (i <= num) {
                that.html(i);
                } else {
                cc = cc + 2;
                clearInterval(int);
                }
                i++;
            }, step);
        });
    };
});

const accordeon = document.querySelectorAll(".answers");
for(let i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}

document.querySelector('.borgir').addEventListener('click', function () {
    this.classList.toggle('active')
    document.querySelector('.header').classList.toggle('left');
});