const swiperEl=document.querySelector(".swiper");$(document).ready((function(){$(".accordion-param__header_item").on("click",(function(o){o.preventDefault();let e=$(this);$(".accordion-param").hasClass("accordion-param__show")||$(".accordion-param").removeClass("accordion-param__show"),e.closest(".accordion-param").find(".accordion-param__body").slideToggle(),e.closest(".accordion-param").toggleClass("accordion-param__show")})),$(".accordion-param__body_link").on("click",(function(o){o.preventDefault();let e=$(this).text();$(this).closest(".accordion-param").find(".accordion-param__header_item p").html(e),$(".accordion-param").hasClass("accordion-param__show")||$(".accordion-param").removeClass("accordion-param__show"),$(this).closest(".accordion-param__body").slideToggle(),$(this).closest(".accordion-param").toggleClass("accordion-param__show")})),$(".accordion__header").on("click",(function(o){o.preventDefault();var e=$(this);$(this).toggleClass("accordion__header-active"),$(".accordion__item").hasClass("accordion__item_show")||(e.closest(".accordion__body").slideUp(),$(".accordion__item").removeClass("accordion__item_show")),e.closest(".accordion__item").toggleClass("accordion__item_show"),e.next().slideToggle()})),new Swiper(".sectionSwiper__swiper > .swiper",{loop:!0,slidesPerView:1,spaceBetween:20,autoHeight:!0,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}}),new Swiper(".reviewSwiper__swiper > .swiper",{loop:!0,slidesPerView:1,spaceBetween:20,autoHeight:!0,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".sectionReviews__swiper > .swiper",{autoHeight:!0,allowTouchMove:!1,pagination:{el:".swiper-pagination",renderBullet:function(o,e){return'<span class="'+e+'">'+(o+1)+"</span>"},clickable:!0}}),$(".chooseCard a").on("click",(function(o){o.preventDefault(),$(".chooseCard a").removeClass("hide"),$(this).toggleClass("hide")})),$(".footer__info_btn").on("click",(function(o){o.preventDefault(),$(".footer__info_text").hasClass("show")?($(".footer__info_btn").html("Lese weniger"),$(this).closest(".footer__info").find(".footer__info_text").removeClass("show")):($(".footer__info_btn").html("Lese weniger"),$(this).closest(".footer__info").find(".footer__info_text").addClass("show"))})),$("#color").on("change",(function(){let o=$("#color");"white"==o.val()?(o.closest(".footer__bottomMenu_colors").css("background","#FFF"),o.closest(".footer__bottomMenu_colors").find("span").css("color","#272727"),o.css("color","#272727"),swiperEl.swiper.slideTo(2,1e3)):"black"==o.val()&&(o.closest(".footer__bottomMenu_colors").css("background","#000"),o.closest(".footer__bottomMenu_colors").find("span").css("color","#fff"),o.css("color","#fff"),swiperEl.swiper.slideTo(1,1e3))}))}));