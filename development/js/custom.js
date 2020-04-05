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
                "all": [
                    // top
                    "top/logo_top.png",
                    "top/stomack.jpg",
                    // leafs
                    "leafs/leaf1.png",
                    "leafs/leaf2.png",
                    "leafs/leaf3.png",
                    // order
                    "order/bottle1.jpg",
                    "order/bottle3.jpg",
                    "order/bottle5.jpg",
                    "order/free.png",
                    // section 2
                    "section2/leaves.png",
                    // section 4
                    "section4/slide_1.jpg",
                    "section4/slide_2.jpg",
                    "section4/slide_3.jpg",
                    "section4/slide_4.jpg",
                    "section4/slide_5.jpg",
                    "section4/slide_6.jpg",
                    // section10
                    "section10/img1.jpg",
                    "section10/img2.jpg",
                    "section10/img3.jpg"
                ],
                1: [
                    // top
                    "top/daske.jpg",
                    "top/top_big_bottle.png",
                    "top/top.png",
                    // bottle
                    "bottle/bottle.png",
                    "bottle/bottles.png",
                    "bottle/top_bottles.png",
                    // section 3
                    "section3/bgd.jpg",
                    // section 5
                    "section5/bgd.jpg",
                    // section 6
                    "section6/checkmark.png",
                    // section 7
                    "section7/medic.png",
                    // section 8
                    "section8/bgd.png",
                    "section8/bottle.png",
                    // section 9
                    "section9/bgd.jpg",
                    "section9/bottle.png",
                    // section 11
                    "section11/girl.jpg",
                    // section 12
                    "section12/bgd.png",
                    // bottom
                    "bottom/bgd.png"
                ],
                2: [""],
                3: [""]
            },
            addPicsToPreload: function (size) {
                $(".loader").show();
                var pics = this.picsToAdd[size];
                var mode = ["desk", "tablet", "mob"];
                // add for current size
                if (pics.length > 0 && pics[0] !== "") {
                    for (var i = 0; i < pics.length; i++) {
                        var pic = $("<img>", {
                            attr: {
                                src: "./img/" + mode[size - 1] + "/" + pics[i],
                                alt: ""
                            }
                        }).load(function () {
                            $(this).attr("data-loaded", "y");
                        });
                        $("#pics-preload").append(pic);
                    }
                }
                // all for all sizes
                var allPics = this.picsToAdd["all"];
                for (var j = 0; j < allPics.length; j++) {
                    var aPic = $("<img>", {
                        attr: {
                            src: "./img/all/" + allPics[j],
                            alt: ""
                        }
                    }).load(function () {
                        $(this).attr("data-loaded", "y");
                    });
                    $("#pics-preload").append(aPic);
                }
                this.checkLoad();
                this.setImages(size);
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
            },
            setImages: function (size) {
                var mode;
                switch (size) {
                    case 1:
                    case "1":
                        mode = "desk";
                        break;
                    case 2:
                    case "2":
                        mode = "tablet";
                        break;
                    case 3:
                    case "3":
                        mode = "mob";
                        break;
                }
                function setBgdAll(el, route) {
                    $(el).css("background-image", "url(./img/all" + route + ")");
                }
                function setBgd(el, route) {
                    $(el).css("background-image", "url(./img/" + mode + "/" + route + ")");
                }



                setBgd("header", "top/daske.jpg");
                setBgd("section.section1", "top/top.png")
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