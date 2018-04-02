$(function() {
    var slider = $('.slider'),
        sliderContent = slider.html(),
        slideWidth = $('.slider-box').outerWidth(),
        slideCount = $('.slider img').length,
        prev = $('.slider-box .prev'),
        next = $('.slider-box .next'),
        sliderInterval = 3300, 
        animateTime = 2000,
        course = 1,
        margin = -slideWidth;

    $('.slider img:last').clone().prependTo('.slider');
    $('.slider img').eq(1).clone().appendTo('.slider');
    $('.slider').css('margin-left', -slideWidth);

    function nextSlide() { // Запускается функция animation(),
        interval = window.setInterval(animate, sliderInterval);
    }

    function animate() {
        if (margin == -slideCount * slideWidth - slideWidth) { // Если слайдер дошел до конца
            slider.css({ 'marginLeft': -slideWidth }); // то блок .slider возвращается в начальное положение
            margin = -slideWidth * 2;
        } else if (margin == 0 && course == -1) { // Если слайдер находится в начале и нажата кнопка "назад"
            slider.css({ 'marginLeft': -slideWidth * slideCount }); // то блок .slider перемещается в конечное положение
            margin = -slideWidth * slideCount + slideWidth;
        } else { // Если условия выше не сработали,
            margin = margin - slideWidth * (course); // значение margin устанавливается для показа следующего слайда
        }
        slider.animate({ 'marginLeft': margin }, animateTime); // Блок .slider смещается влево на 1 слайд.
    }

    function sliderStop() { 
        window.clearInterval(interval);
    }

    prev.click(function() {
        if (slider.is(':animated')) { return false; }
        var course2 = course;
        course = -1;
        animate();
        course = course2;
    });
    next.click(function() {
        if (slider.is(':animated')) { return false; }
        var course2 = course;
        course = 1;
        animate();
        course = course2;
    });

    slider.add(next).add(prev).hover(function() {
        sliderStop();
    }, nextSlide);

    nextSlide();
});