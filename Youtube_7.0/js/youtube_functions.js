/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

    var params = {allowScriptAccess: "always"};
    var atts = {id: "myytplayer"};
    swfobject.embedSWF("http://www.youtube.com/apiplayer?enablejsapi=1",
            "tubePlayer", "425", "356", "8", null, null, params, atts);

    var player;
    function onYouTubePlayerReady(id) {
        console.log("runs");
        player = $("#myytplayer").get(0);
    }

    $(document).ready(function(e) {
        var url = "http://gdata.youtube.com/feeds/api/videos?max-results=20&alt=json&q=cats";


        var loadedData;

        $.getJSON(url, function(data) {

            loadedData = data;

            $.each(data.feed.entry, function(key, value) {

                var nodeUrl = value.id.$t.replace("http://gdata.youtube.com/feeds/api/videos/", "");

                $("#res").append("<p data-url='" + nodeUrl + "' >" + value.title.$t + "</p>");

                $("p").on("click", function() {
                    player.loadVideoById($(this).data("url"), 0, "default");
                    //console.log( $(this).data("url") );
                });

            });

        });

    });

