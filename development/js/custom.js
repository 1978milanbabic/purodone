/**************** CUSTOM IIFE *****************/

(function (win, doc, $) {
    /****************************
     * LOADS IN HEADER
     ****************************/


    /****************************
     * LOADS ON DOCUMENT READY
     ****************************/

    $(doc).ready(function () {



    }); //document ready end

    /****************************
     * LOADS ON WINDOW LOAD
     ****************************/

    $(win).load(function () {

        //pics preload handler
        var picPreloadHandler = {
            picsToAdd: {
                1: [""],
                2: [""],
                3: [""]
            },
            addPicsToPreload: function (size) {
                $(".loader").show();
                var pics = this.picsToAdd[size];
                if (pics.length > 0 && pics[0] !== "") {
                    for (var i = 0; i < pics.length; i++) {
                        var pic = $("<img>", {
                            attr: {
                                src: pics[i],
                                alt: ""
                            }
                        }).load(function () {
                            $(this).attr("data-loaded", "y");
                        });
                        $("#pics-preload").append(pic);
                    }
                }
                this.checkLoad();
            },
            checkLoad: function () {
                var t = this;
                var allPics = $("#pics-preload img");
                var loaded = true;
                for (var i = 0; i < allPics.length; i++) {
                    var $pic = $(allPics[i]);
                    if (!$pic.attr("data-loaded") || $pic.attr("data-loaded") != "y") {
                        loaded = false;
                    }
                }
                if (loaded) {
                    this.successLoad();
                } else {
                    setTimeout(function () {
                        t.checkLoad();
                    }, 50);
                }
            },
            successLoad: function () {
                $(".loader").fadeOut(500);
            }
        };

        //css connector
        var media = csstojsID("css-connector");

        media.size(1, function () {
            //custom function for size 1
            picPreloadHandler.addPicsToPreload(1);
        });

        media.size(2, function () {
            //custom function for size 2
            picPreloadHandler.addPicsToPreload(2);
        });

        media.size(3, function () {
            //custom function for size 3
            picPreloadHandler.addPicsToPreload(3);
        });

        media.init();

    }); //window load end

}(window, document, jQuery));