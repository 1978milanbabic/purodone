/**************** CUSTOM IIFE *****************/

(function (win, doc, $) {
    /****************************
     * LOADS IN HEADER
     ****************************/
    var initTopFadingAndBGChange;

    /****************************
     * LOADS ON DOCUMENT READY
     ****************************/

    $(doc).ready(function () {
        var $topTxt = $("header .inner .right h1, header .inner .right p, header .inner .right h2");
        var $toplogo = $("#top-logo");

        initTopFadingAndBGChange = function () {
            var $header = $("header");
            var topBG = $header.css("background-image");
            var triggerWhite = $("section.section2").offset().top;
            var sctop = $(win).scrollTop();
            if (sctop < 20) {
                $topTxt.fadeIn(800);
                $toplogo.removeClass("disl").addClass("gifl");
            } else {
                $topTxt.fadeOut(400);
                $toplogo.removeClass("gifl").addClass("disl");
            }
            if (sctop >= triggerWhite) {
                $header.css("background-image", "none");
            } else {
                $header.css("background-image", topBG);
            }

            $(win).scroll(function () {
                sctop = $(win).scrollTop();
                if (sctop < 20) {
                    $topTxt.fadeIn(800);
                    $toplogo.removeClass("disl").addClass("gifl");
                } else {
                    $topTxt.fadeOut(400);
                    $toplogo.removeClass("gifl").addClass("disl");
                }
                if (sctop >= triggerWhite) {
                    $header.css("background-image", "none");
                } else {
                    $header.css("background-image", topBG);
                }
            });
        }

        // initial hide
        $topTxt.fadeOut(0);

        // slider
        window.slider = {
            $entities: [],
            $leftBtn: $(".leftbtn"),
            $rightBtn: $(".rightbtn"),
            $slider: $(".slider"),
            currentMatrix: [5, 0, 1, 2, 3, 4],
            height: 200,
            createVDOM: function () {
                var self = this;
                var $entites = $(".entity");
                $entites.each(function (i, el) {
                    var $el = $(el);
                    // populate VDOM
                    self.$entities.push($el);
                });
            },
            init: function (visibleSize) {
                var self = this;
                //  ** anull previous
                this.offBtns();
                // recreate DOM
                this.deleteExisting();
                this.populateAll();
                // ** create DOM
                switch (visibleSize) {
                    case 3:
                        // set width for slider
                        self.$slider.css({
                            "width": (5 / 3) * 100 + "%",
                            "left": - (1 / 5) * (5 / 3) * 100 + "%"
                        });
                        // set width for elems
                        self.$entities.forEach(function ($el) {
                            $el.css("width", (1 / 5) * 100 + "%");
                        });
                        // get/set max height
                        self.setHighestEl();
                        //      format elems
                        // clear table
                        self.deleteExisting();
                        // create new ones
                        self.create_3el_slider();
                        break;
                    case 2:
                        break;
                    case 1:
                        break;
                }

            },
            create_3el_slider: function () {
                var self = this;
                // stop events
                this.offBtns();
                // populate elems
                self.$entities[self.currentMatrix[0]].addClass("pastel");
                self.$slider.append(self.$entities[self.currentMatrix[0]]);

                self.$slider.append(self.$entities[self.currentMatrix[1]]);
                self.$slider.append(self.$entities[self.currentMatrix[2]]);
                self.$slider.append(self.$entities[self.currentMatrix[3]]);

                self.$entities[self.currentMatrix[4]].addClass("tobeel");
                self.$slider.append(self.$entities[self.currentMatrix[4]]);
                // place arrows
                self.showBtns();
                self.$leftBtn.css("left", (1 / 5) * 100 + "%");
                self.$rightBtn.css("right", (1 / 5) * 100 + "%");
                // ** add events
                // go left
                this.$leftBtn.click(function () {
                    self.offBtns();
                    self.$slider.animate({
                        "left": 0 + "%"
                    }, 500, function () {
                        // set current / change matrix
                        var preEl = self.currentMatrix[self.currentMatrix.length - 1];
                        self.currentMatrix.pop();
                        self.currentMatrix.unshift(preEl);

                        // reload
                        self.init(3);
                    })
                });
                // go right
                this.$rightBtn.click(function () {
                    self.offBtns();
                    self.$slider.animate({
                        "left": - (2 / 5) * (5 / 3) * 100 + "%"
                    }, 500, function () {
                        // set current / change matrix
                        var preEl = self.currentMatrix[0];
                        self.currentMatrix.shift();
                        self.currentMatrix.push(preEl);

                        // reload
                        self.init(3);
                    })
                });
            },
            offBtns: function () {
                this.$leftBtn.off("click");
                this.$rightBtn.off("click");
                this.hideBtns();
            },
            hideBtns: function () {
                this.$leftBtn.css("visibility", "hidden");
                this.$rightBtn.css("visibility", "hidden");
            },
            showBtns: function () {
                this.$leftBtn.css("visibility", "visible");
                this.$rightBtn.css("visibility", "visible");
            },
            setHighestEl: function () {
                var self = this;
                var maxHight = 0;
                this.$entities.forEach(function ($el) {
                    var curHight = parseInt($el.css("height")) + 40;
                    if (curHight > maxHight) {
                        maxHight = curHight;
                    }
                    // set height
                    self.height = maxHight;
                    self.$slider.css("height", self.height);
                });
            },
            deleteExisting: function () {
                this.$slider.find(".entity").remove();
            },
            populateAll: function () {
                var self = this;
                this.$entities.forEach(function ($el) {
                    self.$slider.append($el);
                });
            }
        };

        // create virtual DOM
        slider.createVDOM();

        // ** offers change on click **
        var offersControler = {
            $btn1: $(".offer1"),
            $btn3: $(".offer3"),
            $btn5: $(".offer5"),
            init: function () {
                var self = this;
                function makeActive($el) {
                    $el.removeClass("bouncein").animate({
                        "opacity": 1,
                        "box-shadow": "none"
                    }, 300);
                }
                function makeInnactive($el) {
                    $el.removeClass("bouncein").animate({
                        "opacity": 0.5,
                        "box-shadow": "2.5px 4.33px 21px 0px rgba(0, 0, 0, 0.4)"
                    }, 300);
                }
                function changePrice(price) {
                    $(".oldprice .price").html(price * 2);
                    $(".newprice .price").html(price);
                }
                // add events
                this.$btn1.click(function () {
                    makeActive(self.$btn1);
                    makeInnactive(self.$btn3);
                    makeInnactive(self.$btn5);
                    changePrice(offers["1"]);
                });
                this.$btn3.click(function () {
                    makeInnactive(self.$btn1);
                    makeActive(self.$btn3);
                    makeInnactive(self.$btn5);
                    changePrice(offers["3"]);
                });
                this.$btn5.click(function () {
                    makeInnactive(self.$btn1);
                    makeInnactive(self.$btn3);
                    makeActive(self.$btn5);
                    changePrice(offers["5"]);
                });
            }
        };

        offersControler.init();

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
                    // section 6
                    "section6/checkmark.png",
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
                this.setImages(size);
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
                $(".loader").fadeOut(500, function () {
                    // init anims
                    initAnims();
                    // init top
                    initTopFadingAndBGChange();
                    // take me to offer btn
                    $(".takemetooffer").click(function () {
                        var fform = $("#final-form").offset().top;
                        $("html, body").animate({
                            scrollTop: fform
                        }, 1000);
                    });
                });
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

                function setBgd(el, route) {
                    $(el).css("background-image", "url(./img/" + mode + "/" + route + ")");
                }

                setBgd("header", "top/daske.jpg");
                setBgd("section.section1", "top/top.png");


                setBgd("section.section3", "section3/bgd.jpg");
                setBgd("section.section5", "section5/bgd.jpg");
                setBgd("section.section5 .right .bottles", "bottle/bottles.png");
                setBgd("section.section7 .right .doca", "section7/medic.png");
                setBgd("section.section8", "section8/bgd.png");
                setBgd("section.section8 .bottle", "section8/bottle.png");
            }
        };

        //css connector
        var media = csstojsID("css-connector");

        media.size(1, function () {
            //custom function for size 1
            picPreloadHandler.addPicsToPreload(1);
            // create slider
            slider.init(3)
        });

        media.size(2, function () {
            //custom function for size 2
            picPreloadHandler.addPicsToPreload(2);
            // create slider
            slider.init(2)
        });

        media.size(3, function () {
            //custom function for size 3
            picPreloadHandler.addPicsToPreload(3);
            // create slider
            slider.init(1)
        });

        media.init();

    }); //window load end

}(window, document, jQuery));