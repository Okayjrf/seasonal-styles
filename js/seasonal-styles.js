$("document").ready(function(){
   $('.seasons a').click(function(e){//find all a tags inside class of seasons
       e.preventDefault();//stop default submission
       var season = $(this).attr("href");//contents of href attribute of this element
       //alert(season);
       season = season.toLowerCase();
       switch(season){
         case"spring":
            $("#logo").attr("src", "images/spring.gif");
            $("#wear").attr("src", "images/spring-wear.jpg");
            $("html").css("backgroundColor","#2B7129");
            $("header#seasonHeader h3").text("This is Spring!");
            $("p#seasonText").html("Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer. There are various technical definitions of spring, but local usage of the term varies according to local climate, cultures and customs. When it is spring in the Northern Hemisphere, it is autumn in the Southern Hemisphere and vice versa. At the spring (or vernal) equinox, days and nights are approximately twelve hours long, with daytime length increasing and nighttime length decreasing as the season progresses until the Summer Solstice in June (Northern Hemisphere) and December (Southern Hemisphere).<br>Spring and springtime refer to the season, and also to ideas of rebirth, rejuvenation, renewal, resurrection and regrowth. Subtropical and tropical areas have climates better described in terms of other seasons, e.g. dry or wet, monsoonal or cyclonic. Cultures may have local names for seasons which have little equivalence to the terms originating in Europe.");
            $("p#seasonColor").html("The color of the images are as follows: <br/><small>Spring: <b>#2B7129</b></small>");

         break;
         case"summer":
         $("#logo").attr("src", "images/summer.gif");
         $("#wear").attr("src", "images/summer-wear.jpg");
         $("html").css("backgroundColor","#EBA52B");
         $("header#seasonHeader h3").text("This is Summer!");
         $("p#seasonText").html("Summer is the hottest of the four temperate seasons, occurring after spring and before autumn. At or centred on the summer solstice, daylight hours are longest and darkness hours are shortest, with day length decreasing as the season progresses after the solstice. The earliest sunrises and latest sunsets also occur near the date of the solstice. The date of the beginning of summer varies according to climate, tradition, and culture. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, and vice versa.");
         $("p#seasonColor").html("The color of the images are as follows: <br/><small>Summer: <b>#EBA52B</b></small>");

         break;
         case"autumn":
         $("#logo").attr("src", "images/fall.gif");
         $("#wear").attr("src", "images/fall-wear.jpg");
         $("html").css("backgroundColor","#A81124");
         $("header#seasonHeader h3").text("This is Autumn!");
         $("p#seasonText").html("Autumn, also known as fall in American English and Canadian English, is one of the four temperate seasons on Earth. Outside the tropics, autumn marks the transition from summer to winter, in September (Northern Hemisphere) or March (Southern Hemisphere). Autumn is the season when the duration of daylight becomes noticeably shorter and the temperature cools considerably. Day length decreases and night length increases as the season progresses until the Winter Solstice in December (Northern Hemisphere) and June (Southern Hemisphere). One of its main features in temperate climates is the striking change in colour for the leaves of deciduous trees as they prepare to shed.");
         $("p#seasonColor").html("The color of the images are as follows: <br/><small>Fall: <b>#A81124</b></small>");

         break;
         case"winter":
         $("#logo").attr("src", "images/winter.gif");
         $("#wear").attr("src", "images/winter-wear.jpg");
         $("html").css("backgroundColor","#005393");
         $("header#seasonHeader h3").text("This is Winter!");
         $("p#seasonText").html("Winter is the coldest season of the year in polar and temperate climates. It occurs after autumn and before spring. The tilt of Earth's axis causes seasons; winter occurs when a hemisphere is oriented away from the Sun. Different cultures define different dates as the start of winter, and some use a definition based on weather.<br>When it is winter in the Northern Hemisphere, it is summer in the Southern Hemisphere, and vice versa. In many regions, winter brings snow and freezing temperatures. The moment of winter solstice is when the Sun's elevation with respect to the North or South Pole is at its most negative value; that is, the Sun is at its farthest below the horizon as measured from the pole. The day on which this occurs has the shortest day and the longest night, with day length increasing and night length decreasing as the season progresses after the solstice.<br>The earliest sunset and latest sunrise dates outside the polar regions differ from the date of the winter solstice and depend on latitude. They differ due to the variation in the solar day throughout the year caused by the Earth's elliptical orbit (see: earliest and latest sunrise and sunset).");
         $("p#seasonColor").html("The color of the images are as follows: <br/><small>Winter: <b>#005393</b></small>");

         break;
         case"default":
         $("#logo").attr("src", "images/four-seasons.gif");
         $("#wear").attr("src", "images/sleep.png");
         $("html").css("backgroundColor","#382c52");
         $("header#seasonHeader h3").text("This is Default!");
         $("p#seasonText").html("This webpage was created using HTML, CSS, JS, and jQuery. It changes to the desired season page by clicking on the links above. This is the default webpage. Here you'll see the default style, which is sleep wear. Sleep wear could be anything, but the most basic sleep wear will be the pajamas which is shown here. Hope you enjoy exploring my webpage!")
         $("p#seasonColor").html("The color of the images are as follows: <br/><small>Default: <b>#382c52</b></small>");

         break;
         }
      });
         $("#dateForm").submit(function(event) {
           event.preventDefault();
           var date = new Date($("#dateField").val());
           var month = date.getMonth();
           var season;
           switch(month) {
            case 2:
            case 3:
            case 4:
              season = "spring";
              break;
            case 5:
            case 6:
            case 7:
              season = "summer";
              break;
            case 8:
            case 9:
            case 10:
              season = "autumn";
              break;
            default:
              season = "winter";
          }
      
       season = season.toLowerCase();
       
       switch(season){
         case"spring":
            $("#logo").attr("src", "images/spring.gif");
            $("#wear").attr("src", "images/spring-wear.jpg");
            $("html").css("backgroundColor","#2B7129");
            $("header#seasonHeader h3").text("This is Spring!");
            $("p#seasonText").html("Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer. There are various technical definitions of spring, but local usage of the term varies according to local climate, cultures and customs. When it is spring in the Northern Hemisphere, it is autumn in the Southern Hemisphere and vice versa. At the spring (or vernal) equinox, days and nights are approximately twelve hours long, with daytime length increasing and nighttime length decreasing as the season progresses until the Summer Solstice in June (Northern Hemisphere) and December (Southern Hemisphere).<br>Spring and springtime refer to the season, and also to ideas of rebirth, rejuvenation, renewal, resurrection and regrowth. Subtropical and tropical areas have climates better described in terms of other seasons, e.g. dry or wet, monsoonal or cyclonic. Cultures may have local names for seasons which have little equivalence to the terms originating in Europe.");
            $("p#seasonColor").html("The color of the images are as follows: <br/><small>Spring: <b>#2B7129</b></small>");

         break;
         case"summer":
         $("#logo").attr("src", "images/summer.gif");
         $("#wear").attr("src", "images/summer-wear.jpg");
         $("html").css("backgroundColor","#EBA52B");
         $("header#seasonHeader h3").text("This is Summer!");
         $("p#seasonText").html("Summer is the hottest of the four temperate seasons, occurring after spring and before autumn. At or centred on the summer solstice, daylight hours are longest and darkness hours are shortest, with day length decreasing as the season progresses after the solstice. The earliest sunrises and latest sunsets also occur near the date of the solstice. The date of the beginning of summer varies according to climate, tradition, and culture. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, and vice versa.");
         $("p#seasonColor").html("The color of the images are as follows: <br/><small>Summer: <b>#EBA52B</b></small>");

         break;
         case"autumn":
         $("#logo").attr("src", "images/fall.gif");
         $("#wear").attr("src", "images/fall-wear.jpg");
         $("html").css("backgroundColor","#A81124");
         $("header#seasonHeader h3").text("This is Autumn!");
         $("p#seasonText").html("Autumn, also known as fall in American English and Canadian English, is one of the four temperate seasons on Earth. Outside the tropics, autumn marks the transition from summer to winter, in September (Northern Hemisphere) or March (Southern Hemisphere). Autumn is the season when the duration of daylight becomes noticeably shorter and the temperature cools considerably. Day length decreases and night length increases as the season progresses until the Winter Solstice in December (Northern Hemisphere) and June (Southern Hemisphere). One of its main features in temperate climates is the striking change in colour for the leaves of deciduous trees as they prepare to shed.");
         $("p#seasonColor").html("The color of the images are as follows: <br/><small>Fall: <b>#A81124</b></small>");

         break;
         case"winter":
         $("#logo").attr("src", "images/winter.gif");
         $("#wear").attr("src", "images/winter-wear.jpg");
         $("html").css("backgroundColor","#005393");
         $("header#seasonHeader h3").text("This is Winter!");
         $("p#seasonText").html("Winter is the coldest season of the year in polar and temperate climates. It occurs after autumn and before spring. The tilt of Earth's axis causes seasons; winter occurs when a hemisphere is oriented away from the Sun. Different cultures define different dates as the start of winter, and some use a definition based on weather.<br>When it is winter in the Northern Hemisphere, it is summer in the Southern Hemisphere, and vice versa. In many regions, winter brings snow and freezing temperatures. The moment of winter solstice is when the Sun's elevation with respect to the North or South Pole is at its most negative value; that is, the Sun is at its farthest below the horizon as measured from the pole. The day on which this occurs has the shortest day and the longest night, with day length increasing and night length decreasing as the season progresses after the solstice.<br>The earliest sunset and latest sunrise dates outside the polar regions differ from the date of the winter solstice and depend on latitude. They differ due to the variation in the solar day throughout the year caused by the Earth's elliptical orbit (see: earliest and latest sunrise and sunset).");
         $("p#seasonColor").html("The color of the images are as follows: <br/><small>Winter: <b>#005393</b></small>");

         break;
         case"default":
         $("#logo").attr("src", "images/four-seasons.gif");
         $("#wear").attr("src", "images/sleep.png");
         $("html").css("backgroundColor","#382c52");
         $("header#seasonHeader h3").text("This is Default!");
         $("p#seasonText").html("This webpage was created using HTML, CSS, JS, and jQuery. It changes to the desired season page by clicking on the links above or by inputting a date above. This is the default webpage. Here you'll see the default style, which is sleep wear. Sleep wear could be anything, but the most basic sleep wear will be the pajamas which is shown here. Hope you enjoy exploring my webpage!")
         $("p#seasonColor").html("The color of the images are as follows: <br/><small>Default: <b>#382c52</b></small>");

         break;
         }
   });
});


    
 