!function(a,t,l){var i;l(t).ready(function(){var r=l("header .inner .right h1, header .inner .right p, header .inner .right h2"),c=l("#top-logo");i=function(){var t=l("header"),e=t.css("background-image"),i=l("html, body"),n=l("section.section2").offset().top,s=l("section.section11").offset().top,o=l(a).scrollTop();o<20?(r.fadeIn(800),c.removeClass("disl").addClass("gifl")):(r.fadeOut(400),c.removeClass("gifl").addClass("disl")),n<=o?t.css("background-image","none"):t.css("background-image",e),s<=o?i.css("background-color","#69981a"):i.css("background-color","#ffffff"),l(a).scroll(function(){(o=l(a).scrollTop())<20?(r.fadeIn(800),c.removeClass("disl").addClass("gifl")):(r.fadeOut(400),c.removeClass("gifl").addClass("disl")),n<=o?t.css("background-image","none"):t.css("background-image",e),s<=o?i.css("background-color","#69981a"):i.css("background-color","#ffffff")})},r.fadeOut(0),window.slider={$entities:[],$leftBtn:l(".leftbtn"),$rightBtn:l(".rightbtn"),$slider:l(".slider"),currentMatrix:[5,0,1,2,3,4],height:200,createVDOM:function(){var n=this;l(".entity").each(function(t,e){var i=l(e);n.$entities.push(i)})},init:function(t){var e=this;switch(this.offBtns(),this.deleteExisting(),this.populateAll(),t){case 3:e.$slider.css({width:5/3*100+"%",left:5/3*-.2*100+"%"}),e.$entities.forEach(function(t){t.css("width","20%")}),e.setHighestEl(),e.deleteExisting(),e.create_3el_slider();break;case 2:e.$slider.css({width:"250%",left:"-50%"}),e.$entities.forEach(function(t){t.css("width","20%")}),e.setHighestEl(),e.deleteExisting(),e.create_2el_slider();break;case 1:e.$slider.css({width:"500%",left:"-100%"}),e.$entities.forEach(function(t){t.css("width","20%")}),e.setHighestEl(),e.deleteExisting(),e.create_1el_slider()}},create_3el_slider:function(){var e=this;this.offBtns(),e.$entities[e.currentMatrix[0]].addClass("pastel"),e.$slider.append(e.$entities[e.currentMatrix[0]]),e.$slider.append(e.$entities[e.currentMatrix[1]]),e.$slider.append(e.$entities[e.currentMatrix[2]]),e.$slider.append(e.$entities[e.currentMatrix[3]]),e.$entities[e.currentMatrix[4]].addClass("tobeel"),e.$slider.append(e.$entities[e.currentMatrix[4]]),e.showBtns(),e.$leftBtn.css("left","20%"),e.$rightBtn.css("right","20%"),this.$leftBtn.click(function(){e.offBtns(),e.$slider.animate({left:"0%"},500,function(){var t=e.currentMatrix[e.currentMatrix.length-1];e.currentMatrix.pop(),e.currentMatrix.unshift(t),e.init(3)})}),this.$rightBtn.click(function(){e.offBtns(),e.$slider.animate({left:5/3*-.4*100+"%"},500,function(){var t=e.currentMatrix[0];e.currentMatrix.shift(),e.currentMatrix.push(t),e.init(3)})})},create_2el_slider:function(){var e=this;this.offBtns(),e.$entities[e.currentMatrix[0]].addClass("pastel"),e.$slider.append(e.$entities[e.currentMatrix[0]]),e.$slider.append(e.$entities[e.currentMatrix[1]]),e.$slider.append(e.$entities[e.currentMatrix[2]]),e.$slider.append(e.$entities[e.currentMatrix[3]]),e.$entities[e.currentMatrix[4]].addClass("tobeel"),e.$slider.append(e.$entities[e.currentMatrix[4]]),e.showBtns(),e.$leftBtn.css("left","20%"),e.$rightBtn.css("right","40%"),this.$leftBtn.click(function(){e.offBtns(),e.$slider.animate({left:"0%"},500,function(){var t=e.currentMatrix[e.currentMatrix.length-1];e.currentMatrix.pop(),e.currentMatrix.unshift(t),e.init(2)})}),this.$rightBtn.click(function(){e.offBtns(),e.$slider.animate({left:"-100%"},500,function(){var t=e.currentMatrix[0];e.currentMatrix.shift(),e.currentMatrix.push(t),e.init(2)})})},create_1el_slider:function(){var e=this;this.offBtns(),e.$entities[e.currentMatrix[0]].addClass("pastel"),e.$slider.append(e.$entities[e.currentMatrix[0]]),e.$slider.append(e.$entities[e.currentMatrix[1]]),e.$slider.append(e.$entities[e.currentMatrix[2]]),e.$slider.append(e.$entities[e.currentMatrix[3]]),e.$entities[e.currentMatrix[4]].addClass("tobeel"),e.$slider.append(e.$entities[e.currentMatrix[4]]),e.showBtns(),e.$leftBtn.css("left","20%"),e.$rightBtn.css("right","60%"),this.$leftBtn.click(function(){e.offBtns(),e.$slider.animate({left:"0%"},500,function(){var t=e.currentMatrix[e.currentMatrix.length-1];e.currentMatrix.pop(),e.currentMatrix.unshift(t),e.init(1)})}),this.$rightBtn.click(function(){e.offBtns(),e.$slider.animate({left:"-200%"},500,function(){var t=e.currentMatrix[0];e.currentMatrix.shift(),e.currentMatrix.push(t),e.init(1)})})},offBtns:function(){this.$leftBtn.off("click"),this.$rightBtn.off("click"),this.hideBtns()},hideBtns:function(){this.$leftBtn.css("visibility","hidden"),this.$rightBtn.css("visibility","hidden")},showBtns:function(){this.$leftBtn.css("visibility","visible"),this.$rightBtn.css("visibility","visible")},setHighestEl:function(){var i=this,n=0;this.$entities.forEach(function(t){var e=parseInt(t.css("height"))+40;n<e&&(n=e),i.height=n,i.$slider.css("height",i.height)})},deleteExisting:function(){this.$slider.find(".entity").remove()},populateAll:function(){var e=this;this.$entities.forEach(function(t){e.$slider.append(t)})}},slider.createVDOM(),{$btn1:l(".offer1"),$btn3:l(".offer3"),$btn5:l(".offer5"),init:function(){var t=this;function e(t){t.removeClass("bouncein").animate({opacity:1,"box-shadow":"none"},300)}function i(t){t.removeClass("bouncein").animate({opacity:.5,"box-shadow":"2.5px 4.33px 21px 0px rgba(0, 0, 0, 0.4)"},300)}function n(t){l(".oldprice .price").html(2*t),l(".newprice .price").html(t)}this.$btn1.click(function(){e(t.$btn1),i(t.$btn3),i(t.$btn5),n(offers[1])}),this.$btn3.click(function(){i(t.$btn1),e(t.$btn3),i(t.$btn5),n(offers[3])}),this.$btn5.click(function(){i(t.$btn1),i(t.$btn3),e(t.$btn5),n(offers[5])})}}.init()}),l(a).load(function(){var t={picsToAdd:{all:["top/logo_top.png","top/stomack.jpg","leafs/leaf1.png","leafs/leaf2.png","leafs/leaf3.png","order/bottle1.jpg","order/bottle3.jpg","order/bottle5.jpg","order/free.png","section2/leaves.png","section4/slide_1.jpg","section4/slide_2.jpg","section4/slide_3.jpg","section4/slide_4.jpg","section4/slide_5.jpg","section4/slide_6.jpg","section6/checkmark.png","section10/img1.jpg","section10/img2.jpg","section10/img3.jpg"],1:["top/daske.jpg","top/top_big_bottle.png","top/top.png","bottle/bottle.png","bottle/bottles.png","bottle/top_bottles.png","section3/bgd.jpg","section5/bgd.jpg","section7/medic.png","section8/bgd.png","section8/bottle.png","section9/bgd.jpg","section11/bgd.jpg","section12/bgd.png","bottom/bgd.png","bottom/bottombgd.jpg"],2:["top/daske.jpg","top/top_big_bottle.png","top/top.png","bottle/bottle.png","bottle/bottles.png","bottle/top_bottles.png","section3/bgd.jpg","section5/bgd.jpg","section7/medic.png","section8/bgd.png","section8/bottle.png","section9/bgd.jpg","section11/bgd.jpg","section12/bgd.png","bottom/bgd.png","bottom/bottombgd.jpg"],3:[""]},addPicsToPreload:function(t){l(".loader").show();var e=this.picsToAdd[t],i=["desk","tablet","mob"];if(0<e.length&&""!==e[0])for(var n=0;n<e.length;n++){var s=l("<img>",{attr:{src:"./img/"+i[t-1]+"/"+e[n],alt:""}}).load(function(){l(this).attr("data-loaded","y")});l("#pics-preload").append(s)}for(var o=this.picsToAdd.all,r=0;r<o.length;r++){var c=l("<img>",{attr:{src:"./img/all/"+o[r],alt:""}}).load(function(){l(this).attr("data-loaded","y")});l("#pics-preload").append(c)}this.setImages(t),this.checkLoad()},checkLoad:function(){for(var t=this,e=l("#pics-preload img"),i=!0,n=0;n<e.length;n++){var s=l(e[n]);s.attr("data-loaded")&&"y"==s.attr("data-loaded")||(i=!1)}i?this.successLoad():setTimeout(function(){t.checkLoad()},50)},successLoad:function(){l(".loader").fadeOut(500,function(){initAnims(),i(),l(".takemetooffer").click(function(){var t=l("#final-form").offset().top;l("html, body").animate({scrollTop:t},1e3)})})},setImages:function(t){var i;switch(t){case 1:case"1":i="desk";break;case 2:case"2":i="tablet";break;case 3:case"3":i="mob"}function e(t,e){l(t).css("background-image","url(./img/"+i+"/"+e+")")}e("header","top/daske.jpg"),e("section.section1","top/top.png"),e("section.section1 .topbottles","bottle/top_bottles.png"),e("section.section1 .topbottle","top/top_big_bottle.png"),e("section.section2 .right .bottle","bottle/bottle.png"),e("section.section3","section3/bgd.jpg"),e("section.section5","section5/bgd.jpg"),e("section.section5 .right .bottles","bottle/bottles.png"),e("section.section7 .right .doca","section7/medic.png"),e("section.section8","section8/bgd.png"),e("section.section8 .bottle","section8/bottle.png"),e("section.section9","section9/bgd.jpg"),e("section.section11","section11/bgd.jpg"),e("section.section11 .bottle","bottle/bottle.png"),e("section.section11 .stak .bottle","bottle/bottle.png"),e("section.section11 .vremeje .bottle","bottle/bottles.png"),e("footer .under","bottom/bgd.png"),e("footer","bottom/bottombgd.jpg")}},e=csstojsID("css-connector");e.size(1,function(){t.addPicsToPreload(1),slider.init(3)}),e.size(2,function(){t.addPicsToPreload(2),slider.init(2)}),e.size(3,function(){t.addPicsToPreload(2),slider.init(1)}),e.init()})}(window,document,jQuery);