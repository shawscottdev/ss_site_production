
        jQuery(document).ready(function ($) {
            var options = {
                $AutoPlay: true,
                $AutoPlaySteps: 1,
                $AutoPlayInterval: 0,
                $PauseOnHover: 4,
                $ArrowKeyNavigation: true,
                $SlideEasing: $JssorEasing$.$EaseLinear,
                $SlideDuration: 2600,
                $MinDragOffsetToSlide: 20,
                $SlideWidth: 150,
                $SlideHeight: 60,
                $SlideSpacing: 0,
                $DisplayPieces: 7,
                $ParkingPosition: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 1
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var bodyWidth = document.body.clientWidth;
                if (bodyWidth)
                    jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
                else
                    window.setTimeout(ScaleSlider, 30);
            }
            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });
