/*
Version: 1.2.0
Author: Katarzyna Barnaś
Website: http://kacha.com.pl/
Docs: https://github.com/neuropeptidula/EasiestSlider
Repo: https://github.com/neuropeptidula/EasiestSlider/tree/master/download
 */
(function($) {
    $.fn.makeSlider = function(options) {

        var settings = $.extend({
            time: 500,
            dots: true,
            control: true,
            autoplay: true
        }, options);

        var mySlider = this;
        var slideTimer;
        var listOfSlides = mySlider.find(".carousel .item").toArray();
        var nowSlide = listOfSlides[0];
        var listaInd = mySlider.find(".carousel-tab li").toArray();
        var currentInd = listaInd[0];
        var nextSlide;
        var index = 0;

        function checkIndex() {
            if (index < 2) {
                index++;
                nextSlide = listOfSlides[index];
                nextInd = listaInd[index];
            } else {
                index = 0;
                nextSlide = listOfSlides[0];
                nextInd = listaInd[0];
            }
        }

        function doTransition() {
            mySlider.find(".carousel .item").each(function() {
                if ($(this).hasClass("active")) {
                    $(this).fadeIn();
                } else {
                    $(this).fadeOut();
                }
            });
        }

        function pushSlide() {
            $(nowSlide).removeClass("active");
            $(nextSlide).addClass("active");
            currentInd.removeClass('active');
            $(nextInd).addClass("active");
            doTransition();
        }

        function slide() {
            nowSlide = mySlider.find(".carousel .item.active");
            currentInd = mySlider.find(".carousel-tab li.active");
            checkIndex();
            pushSlide();
        }

        if (settings.control == true) {

            mySlider.find('.control_next').click(function() {
                clearInterval(slideTimer);
                slideTimer = window.setInterval(slide, settings.time);
                currentInd = mySlider.find(".carousel-tab li.active");
                checkIndex();
                mySlider.find(".carousel .item").removeClass('active');
                pushSlide();
            });

            mySlider.find('.control_prev').click(function() {
                clearInterval(slideTimer);
                slideTimer = window.setInterval(slide, settings.time);
                currentInd = mySlider.find(".carousel-tab li.active");
                if (index > 0) {
                    index--;
                    nextSlide = listOfSlides[index];
                    nextInd = listaInd[index];
                } else {
                    index = 2;
                    nextSlide = listOfSlides[2];
                    nextInd = listaInd[2];
                }
                mySlider.find(".carousel .item").removeClass('active');
                pushSlide();
            });
        } else {
            mySlider.find(".control").hide();
        }

        mySlider.find('.carousel-tab').each(function() {
            var $a = $(this).find('li');
            $a.on('click', function(e) {

                if (settings.dots == true) {

                    mySlider.find('.carousel .item.active').hide();
                    clearInterval(slideTimer);
                    slideTimer = window.setInterval(slide, settings.time);
                    var $this = $(this);

                    var href = $this.attr('data-slide-to');

                    var $target = mySlider.find(".carousel").find('[nr-slide="' + href + '"]');

                    if ($target.length) {
                        e.preventDefault();

                        $this.siblings('li').removeClass('active');

                        $this.addClass('active');

                        $target.siblings('.item').removeClass('active');
                        $target.addClass('active').fadeIn('slow');
                    }
                }
            });
        });



        $(document).ready(function() {
            index = 0;

            if (settings.autoplay == true) {
                slideTimer = window.setInterval(slide, settings.time);
                doTransition();
            } else {
                mySlider.find(".item").hide();
                mySlider.find(".item.active").show();
            }

            if (settings.dots != true) {
                mySlider.find(".carousel-tab").hide();
            }

        });
    }
}(jQuery));
