/*global document,jQuery*/

(function ($) {
    "use strict";
    /*
     * make the png transparent under IE6
     * Author: Cris.Dai
     * mail: moonreplace@gmail.com
     * */
    var defaults = {
            reSrc : '/img/blank.gif' //if we set the image src of the png, it will show red "X", so we need one transparent gif
        },
    /*
        * options: supply the replace image
        * function: use the filter to make the png transparent
        * */
        fixPngs = function (options) {
            var index,
                images = document.images,
                imageSrc,
                image;
            for (index = 0; images.length; index = index + 1) {
                image = images[index];
                imageSrc = image.src;
                if (imageSrc.indexOf('.png') > 0) {
                    image.src = options.reSrc; //Use the transparent gif to replace the original png image
                    image.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + imageSrc + '", sizingMethod="scale");';
                }
            }
        },
        transPng = function (options) {
            var browserInfo =  $.browser;
            if (typeof options === 'string') {
                options = { reSrc: options};
            }
            options = $.extend(options, defaults);
            if (browserInfo.msie && parseInt(browserInfo.version, 10) < 7) {
                fixPngs(options);
            }
        };

    $.transPNG = transPng;
}(jQuery));


