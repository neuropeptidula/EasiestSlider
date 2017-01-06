# EasiestSlider
Very simply and light plugin for create slideshow. You could choose time change and turn on and off dots, next/prev navigation and autoplay. Also, of course is possible styling your slider by CSS. It`s enought for almost all classic websites.

See DEMO at Codepen: http://codepen.io/neuropeptidula/pen/qRdEqX

How to add slider to your page?

1. First, add jQuery library to your page nad next, also insert files style.css and EasiestSlider.js from here, from folder download.
2. Make correct HTML structure (I attach example file called Example of HTML structure.html and you could see it below. You could add your content inside divs with class="item". Of course, 3 is not required number of slides - it could be one, four or milion, etc. Only, what you have to do, is add more or less <div class="item"></div> to your HTML code.
  ```
  <div id="your-slider" class="slider">
  <div class="carousel">
    <div class="item active" id="item-1" nr-slide="0">
      <!--Your content-->
    </div>
    <div class="item" id="item-2" nr-slide="1">
      <!--Your content-->
    </div>
    <div class="item" id="item-3" nr-slide="2">
      <!--Your content-->
    </div>
  </div>
  <ol class="carousel-tab">
    <li data-slide-to="0" class="active"></li>
    <li data-slide-to="1"></li>
    <li data-slide-to="2"></li>
  </ol>
  <a class="control_prev control"><img src="/download/prev.png" alt="see previous slide" /></a>
  <a class="control_next control"><img src="/download/next.png" alt="see next slide" /></a>
</div>
```

3. Also, you could customise your slider in style.css, ex. height of slider, color and family of font and background of every slides.
   I`ve added comments in CSS file to inform what could you customize safely.

4. Finally, you could strat your slider function in your JavaScript file or just adding this lines to EasiestSlider.js
   Don`t forget insert it inside $(document).ready(function(...)}; and you have to write time necessary to make slide show. Here is example:
   ```
      $(document).ready(function() {
        $("#your-slider").makeSlider({
           time: 6000
        });
      });
      ```
      
5. Now you have simply slider with autoplay, time 6000 ms, dots and prev/next navigation, but you could customize some options adding true or false to code like here:
```
      $(document).ready(function() {
        $("#your-slider").makeSlider({
            time: 4000,
            dots: true,
            control: true,
            autoplay: true
          });
        });
```

If you have any questions or suggestions, contact me! 
E-mail: easiest.slider@gmail.com
You could see other tips from me at my Codepen account: http://codepen.io/neuropeptidula/

