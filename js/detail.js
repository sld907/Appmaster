$("#box .list ul li").eq(0).click(function(){window.location.href="../index.html"}),$("#box .list ul li").eq(1).click(function(){window.location.href="classify.html"}),$("#box .list ul li").eq(2).click(function(){window.location.href="shopcar.html"}),$("#box .list ul li").eq(3).click(function(){window.location.href="login.html"});var off=!0;$("#box .head .chose").click(function(){off?($("#box .list").show(),off=!1):($("#box .list").hide(),off=!0)}),$("#box .ad .dispear").click(function(){$("#box .ad").fadeOut()});var mySwiper=new Swiper(".swiper-container",{loop:!0,pagination:".swiper-pagination"}),dataid=localStorage.getItem("dataid");$.ajax({url:"../json/dataz.json",dataType:"json",success:function(e){var t=e.data,o="",i="",l="";for(var n in t)dataid==t[n].id&&(o+='<img src="'+t[n].img+'"/>',i+=t[n].name,l+="￥"+t[n].price);$(".swiper-container .swiper-wrapper .swiper-slide").append(o),$("#box .massage .name").html(i),$("#box .massage .price").html(l)}}),$("#box .delivery .count .cut").click(function(){var e=$("#box .delivery .count").children().eq(2).text();e<=1?(e=1,$("#box .delivery .count").children().eq(2).text(e)):(e--,$("#box .delivery .count").children().eq(2).text(e))}),$("#box .delivery .count .add").click(function(){var e=$("#box .delivery .count").children().eq(2).text();e++,$("#box .delivery .count").children().eq(2).text(e)}),$("#box .shop ul li").eq(2).click(function(){var e=$("#box .shop .num").text(),t=$("#box .delivery .count").children().eq(2).text();$("#box .shop .num").text(parseInt(t)+parseInt(e));var o=localStorage.getItem("dataid");if(localStorage.getItem("n"+o)){var i=localStorage.getItem("n"+o),l=parseInt(t)+parseInt(i);localStorage.setItem("n"+o,l)}else localStorage.setItem("n"+o,t);localStorage.setItem("dataid",o),localStorage.setItem(o,o)}),$("#box .shop ul li").eq(1).click(function(){window.location.href="shopcar.html"}),$(".grzx").click(function(){var e=$(".price").text().substring(1,$(".price").text().length),t=$("#box .delivery .count").children().eq(2).text();localStorage.setItem("allprice",e*t);var o=localStorage.getItem("login");o?window.location.href="clearinghouse.html":window.location.href="login.html"});