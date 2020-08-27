$.ajax({
        url: "https://fixpaybahis.com/oldstreaming/old0.json",
        success: function(json) {
            for(var i = 0; i < json.length; i++) {
                var obj = json[i];

                if (obj.location=='ust_1') {
                    $("#reklam1").css('display', obj.display);
                    $("#reklam1 img").attr("src", obj.image);
                    $("#reklam1 img").attr("alt", obj.alt);
                    $("#reklam1 a").attr("href", obj.url);
                }
                if (obj.location=='ust_2') {
                    $("#reklam2").css('display', obj.display);
                    $("#reklam2 img").attr("src", obj.image);
                    $("#reklam2 img").attr("alt", obj.alt);
                    $("#reklam2 a").attr("href", obj.url);
                }
                if (obj.location=='alt_1') {
                    $("#reklam3").css('display', obj.display);
                    $("#reklam3 img").attr("src", obj.image);
                    $("#reklam3 img").attr("alt", obj.alt);
                    $("#reklam3 a").attr("href", obj.url);
                }
                if (obj.location=='alt_2') {
                    $("#reklam4").css('display', obj.display);
                    $("#reklam4 img").attr("src", obj.image);
                    $("#reklam4 img").attr("alt", obj.alt);
                    $("#reklam4 a").attr("href", obj.url);
                }
            }

        }
    });
   var currentURL = window.location.href;
   var channels = currentURL.match(/kanal\-(\d+)\.\html/);
   var channel = channels[1];
   $.ajax({
        url: "https://fixpaybahis.com/oldstreaming/iframe0.json",
        success: function(json) {

          $("#iframe0ld").attr("src", json.url + channel + ".html?type=sportboss");

            }

    });
