var resizeTimer,innovWindowWidth=$(window).width(),ImageShape=function(){var w={"shape-4":"M544,469.6L217.9,0c-49.5,58.7-86.6,100.7-111.1,125.9C82.3,151.2,46.7,184.7,0,226.6  c5.4,76.3,8.4,133.6,8.9,172C9.5,437,8,486.8,4.5,548L544,469.6z","shape-3":"M544,469.6L217.9,0c-49.5,58.7-86.6,100.7-111.1,125.9C82.3,151.2,46.7,184.7,0,226.6  c5.4,76.3,8.4,133.6,8.9,172C9.5,437,8,486.8,4.5,548L544,469.6z","shape-2":"M64.8,67L0,318.2L97.6,477c0,0,50.4-43.3,96.6-74s124.6-62.6,124.6-62.6s37.7-85.9,78.7-145.7 C438.4,134.9,524,62.9,524,62.9L437.9,0c0,0-124.2,19.6-186.6,30.8C188.8,42,64.8,67,64.8,67z","shape-1":"M0 165.686L731.422 0L561.721 694.27C488.935 659.978 429.073 633.739 382.135 615.551C335.197 597.362 264.015 572.824 168.589 541.936C140.537 464.639 117.202 404.869 98.5848 362.627C79.9678 320.384 47.1062 254.737 0 165.686Z"};function b(t){var e=document.createElement("div");e.setAttribute("style","position:absolute; visibility:hidden; width:0; height:0"),document.body.appendChild(e);var i=document.createElementNS("http://www.w3.org/2000/svg","svg");e.appendChild(i);var n=t.cloneNode(!0);i.appendChild(n);var a=n.getBBox();return document.body.removeChild(e),a}function i(t,e){var i,n,a,s,o,c,l,r,d,h,p,m,g,v,f,u;(i=t.parent()).find("svg").remove(),t.show(),n=t[0].getElementsByTagName("img")[0].currentSrc,a=t.width(),s=t.outerHeight(!0),c=a,l=s,r=w[e],d=n,h=$.now(),o=$('<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="image-shape-image" width="'+c+'" height="'+l+'" viewBox="0 0 '+c+" "+l+'"><defs><clipPath class="clippathc" id="maskID'+h+'"><path class="clippath" transform="" d="'+r+'"/></clipPath>  </defs><image clip-path="url(#maskID'+h+')" width="'+c+'" height="'+l+'" xlink:href="'+d+'" /></svg><svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" class="image-shape-shape" width="'+c+'" height="'+l+'" viewBox="0 0 '+c+" "+l+'"><defs><clipPath class="clippathc" id="maskID'+h+'"><path class="clippath" transform="" d="'+r+'"/></clipPath><linearGradient id="gradient_0" gradientUnits="userSpaceOnUse" x1="15%" y1="15%" x2="0" y2="100%"><stop offset="0" class="stopcolor1" /><stop offset="1" class="stopcolor2" /></linearGradient></defs> <g clip-path="url(#maskID'+h+')"><rect class="shape" fill="url(#gradient_0)" width="'+c+'" height="'+l+'" clip-rule="evenodd"/></g></svg>'),i.prepend(o),t.hide(),m=a,g=s,v=(p=i).find("path.clippath")[0],f=m/b(v).width,u=g/b(v).height,p.find("path.clippath").attr("transform","scale("+f+", "+u+")")}function e(t,e){i(e,t.closest(".section-image-shape").attr("class").match(/shape-\d/i)[0])}var t=function(){$(".section-image-shape").each(function(){var t=$(this).find("picture")[0];t.complete?e($(this),t):t.addEventListener("load",e($(this),$(t)))})};return{init:t,resize:t}}();$(window).on("load",function(){ImageShape.init()});var GlobalMaps=function(){var a={countries:{cn:{continent:"as",cities:[{name:"Dongguan",lat:23.0205,long:113.751,position:[20]}]},us:{continent:"na",cities:[{name:"Salt Lake City",lat:42.7587,long:-111.876,position:[-40]},{name:"Montvale",lat:41.0467,long:-74.022,position:[20]},{name:"Evansville",lat:34.9747,long:-87.5558,position:[-20]}]},in:{continent:"as",cities:[{name:"Gurgaon",lat:28.4812,long:77.0191,position:[20]}]},de:{continent:"eu",cities:[{name:"Heidelberg",lat:49.40768,long:8.69079,position:[20]}]},it:{continent:"eu",cities:[{name:"Mira",lat:45.4338,long:12.1331,position:[-30]}]},th:{continent:"as",cities:[{name:"Bang Pakong",lat:13.5,long:101,position:[20]}]},gb:{continent:"eu",cities:[{name:"Hull",lat:53.74737,long:-.3386,position:[-20]}]}},continents:{eu:["ad","al","at","ax","ba","be","bg","by","ch","cs","cy","cz","de","dk","ee","es","fi","fo","fr","gb","gg","gi","gr","hr","hu","ie","im","is","it","je","li","lt","lu","lv","mc","md","me","mk","mt","nl","no","pl","pt","ro","rs","ru","se","si","sj","sk","sm","ua","va","xk"],as:["ae","af","am","az","bd","bh","bn","bt","cc","cn","cx","ge","hk","id","il","in","io","iq","ir","jo","jp","kg","kh","kp","kr","kw","kz","la","lb","lk","mm","mn","mo","mv","my","np","om","ph","pk","ps","qa","sa","sg","sy","th","tj","tm","tr","tw","uz","vn","ye"],na:["ag","ai","an","aw","bb","bl","bm","bq","bs","bz","ca","cr","cu","cw","dm","do","gd","gl","gp","gt","hn","ht","jm","kn","ky","lc","mf","mq","ms","mx","ni","pa","pm","pr","sv","sx","tc","tt","us","vc","vg","vi"],af:["ao","bf","bi","bj","bw","cd","cf","cg","ci","cm","cv","dj","dz","eg","eh","er","et","ga","gh","gm","gn","gq","gw","ke","km","lr","ls","ly","ma","mg","ml","mr","mu","mw","mz","na","ne","ng","re","rw","sc","sd","sh","sl","sn","so","ss","st","sz","td","tg","tn","tz","ug","yt","za","zm","zw"],an:["aq","bv","gs","hm","tf"],sa:["ar","bo","br","cl","co","ec","fk","gf","gy","pe","py","sr","uy","ve"],oc:["as","au","ck","fj","fm","gu","ki","mh","mp","nc","nf","nr","nu","nz","pf","pg","pn","pw","sb","tk","tl","to","tv","um","vu","wf","ws"]}},t=function(){return $(".global-map").each(function(){var s=$(".map",this),o=$(".city-modal",this),t=a.countries,e=s.find(".worldMap"),i=d3.select(e.find("svg")[0]),g=i.select("g").node().getBBox(),v={leftLong:-169.522279,topLat:83.646363,rightLong:190.122401,bottomLat:-55.621433},f={},n=i.select("g").append("g").classed("cities",!0);v.width=v.rightLong-v.leftLong,v.height=v.topLat-v.bottomLat,f.scaleX=g.width/v.width,f.scaleY=g.height/v.height,$.each(t,function(t,e){!function(h,p,m){if(p.cities){var t=p.cities;$.each(t,function(t,e){var i,n,a,s,o,c,l,r=(i=e.lat,n=e.long,a=(n-v.leftLong)*f.scaleX,s=i*Math.PI/180,o=Math.sin(s),c=Math.log((1+o)/(1-o))/2*35,l=g.height*v.topLat/v.height-c*f.scaleY+75,{x:a,y:l}),d=m.append("g").classed("city",!0).attr("data-target",e.name+", "+h.toUpperCase());!function(t,e,i,n,a,s){var o,c,l,r,d,h={x:a.x,y:a.y};o=t,l=s,r=[{x:(c=a).x,y:c.y}],c.x,c.y,d=d3.svg.line().x(function(t){return t.x}).y(function(t){return t.y}).interpolate("linear"),$.each(l,function(t,e){1<l.length&&0==t?c.y+=e:c.x+=e,r.push({x:c.x,y:c.y})}),o.append("path").attr({d:d(r),class:"line"}),a=c,t.append("circle").attr("cx",h.x).attr("cy",h.y).attr("r",10);var p=t.append("g").classed("label",!0),m=p.append("rect"),g=p.append("text").attr("x",a.x+5).attr("y",a.y+4).text(n),v=g.node().getBBox();s[s.length-1]<0&&(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)||(v.x=a.x-v.width-5),g.attr("x",v.x)),m.attr("x",v.x-5).attr("y",v.y-2).attr("width",v.width+10).attr("height",v.height+4)}(d,p.continent,0,e.name,r,e.position)})}}(t,e,n)}),function(){if(!s.hasClass("hasButton")){s.addClass("hasButton");var t=$(".city",this);t.eq(Math.floor(Math.random()*(t.length-1))).trigger("click");var e="Show all location information";$(".section-global-map-data > .row").prepend('<div class="button-wrapper"><a class="button toggle-list">'+e+"</a></div>"),$("body").on("click",".button.toggle-list",function(t){$(this).parent().next().slideToggle("normal",function(){$(this).is(":visible")?$("a.button.toggle-list").html("Hide all location information"):$("a.button.toggle-list").html(e)})})}}(),s.on("click",".city",function(t){s.find(".city.active").attr("class","city"),$(this).attr("class","city active");var e=$(this).data("target"),i=$(".section-global-map-data .teaser h2.teaser__title:contains('"+e+"')"),n=i.parent().next().next().find("p:first-child").html(),a=i.parent().next().find("img").attr("srcset");o.fadeOut("fast",function(){o.find("h2").html(e),o.find("p").html(n),o.find("img").attr("src",a),o.fadeIn()})})}),!1};return{init:t,resize:function(){if(0<!$(".worldMap g.cities").length)return t()}}}(),timeLineInnov=function(){var t=$(".section-innov .js-media-carousel"),e=$(".section-innov .js-media-carousel div.media"),i=$(".section-innov .js-media-carousel div.media .media__title"),n="1 - 3 Months",a="3 - 6 Months",s="6 - 18 Months",o="18 Months +",c=!1;function l(){if($(window).width()<400&0==c){var e=0;t.find(" > .media .media__content.copy__content").each(function(){var t;t=0==e?"Day 1":1==e?n:2==e?a:3==e?s:4==e?o:"",$(this).append("<p class=title-when><strong>When</p></strong><p class=text-when>"+t+"</p>"),e++}),c=!0}else $("p.title-when, p.text-when").remove(),c=!1}function r(){t.slick({centerMode:!0,dots:!0,slidesToShow:1,variableWidth:!0,customPaging:function(t,e){return $(t.$slides[e]).data(),'<a class="dot item'+e+'"><i><span></span></i><span>'+(0==e?"Day 1":1==e?n:2==e?a:3==e?s:4==e?o:"")+"</span></a>"},responsive:[{breakpoint:800,settings:{variableWidth:!1,centerMode:!1}},{breakpoint:400,settings:"unslick"}]})}return{init:function(){t.slick("unslick"),i.each(function(){$(this).parent().parent().parent().prepend(this)}),e.each(function(){$(this).wrapInner("<div class='slide-wrapper'></div>")}),t.on("afterChange",function(t,e){e.$slides.removeClass("slick-slide-prev").removeClass("slick-slide-prev-prev").removeClass("slick-slide-next").removeClass("slick-slide-next-next");for(var i=0;i<e.$slides.length;i++){var n=$(e.$slides[i]);if(n.hasClass("slick-current")){n.prev().addClass("slick-slide-prev").prev().addClass("slick-slide-prev-prev"),n.next().addClass("slick-slide-next").next().addClass("slick-slide-next-next");break}}}).on("beforeChange",function(t,e,i,n){e.$slides.removeClass("slick-slide-prev").removeClass("slick-slide-next"),0==i&n==e.$slides.length-1&&($(".slick-track").css("opacity","0"),setTimeout(function(){$(".slick-track").css("opacity","1")},500)),i==e.$slides.length-1&0==n&&($(".slick-track").css("opacity","0"),setTimeout(function(){$(".slick-track").css("opacity","1")},500))}),r(),l()},resize:function(){r(),l()}}}();function addBreaks(){var t=$(".section-innov.section-quote p.blockquote__copy").html();t&&(t=t.replace(/(?:\r\n|\r|\n)/g,"<br>"),$(".section-innov.section-quote p.blockquote__copy").html(t))}$(document).ready(function(){$(".section-innov a[href^='#']").on("click",function(){var t=0,e=$(this).attr("href");return null!=e&&"#"!=e&&(e=$(e).offset(),$(".main-nav.main-nav--fixed")?t=e.top-$(".main-nav.main-nav--fixed").height():$(window).width()<800&&(t=e.top),"#top"!=$(this).attr("href")?$("html, body").animate({scrollTop:t},500):$("html, body").animate({scrollTop:0},500)),!1}),$(".footer__back-link-container a[href^='#']").on("click",function(){return $("html, body").animate({scrollTop:0},500),!1}),$(".section-innov.section-bg-line").prepend("<span class=bg-line><span></span></span>"),$.fn.moveIt=function(){var t=$(window),i=[];$(this).each(function(){i.push(new e($(this)))}),window.addEventListener("scroll",function(){var e=t.scrollTop();i.forEach(function(t){t.update(e)})},{passive:!0})};var e=function(t){this.el=$(t),this.speed=6};e.prototype.update=function(t){this.el.css("transform","translateY("+-t/this.speed+"px)")},$(".section-innov.section-bg-line .bg-line").moveIt(),$(".copy__content p a.button").each(function(){$(this).parent().addClass("has-button")});var i=$(".section-innov .modals");function n(){var t=$(".section-innov .modals article.active iframe");t.attr("src",$(t).attr("src")),600<$(window).width()&&($(".section-innov .modals article.active").removeClass("active"),$("body").removeClass("innov-fixed"),i.find(".modals-bg").remove())}i.on("click","button.modals-button",function(t){if($(this).parent().hasClass("active"))n();else if((e=$(".section-innov .modals article.active iframe")).attr("src",$(e).attr("src")),600<$(window).width()&&$(".section-innov .modals article.active").removeClass("active"),$("body").addClass("innov-fixed"),$(this).parent().append("<div class=modals-bg></div>"),i.find(".modals-bg").fadeIn(300),$(this).parent().addClass("active"),$(this).parent().find(".modals-content-inner").scrollTop(0),$(window).width()<600){$(this).parent().offset();$("html, body").delay(100).animate({scrollTop:$(this).parent().offset().top-50},500)}var e}),i.on("click",".modals-bg",function(t){n()}),i.on("click",".modal-close",function(t){n()}),timeLineInnov.init(),addBreaks(),600<$(window).width()&&GlobalMaps.init(),ImageShape.init()}),$(window).on("resize",function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(function(){ImageShape.resize(),timeLineInnov.resize(),600<$(window).width()&&GlobalMaps.resize(),innovWindowWidth<601&600<$(window).width()&&($(".section-innov .modals article.active").removeClass("active"),$("body").removeClass("innov-fixed")),innovWindowWidth=$(window).width()},250)});