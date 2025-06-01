// // Lenis
const lenis = new Lenis({
    wrapper: document.querySelector('.scroll-container'),
    lerp: 0.1,
    duration: 2.2,
    smoothTouch: true
});
lenis.on('scroll', e => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
});
animatedElements.forEach(el => observer.observe(el));

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