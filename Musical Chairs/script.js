/**
 * Created by nataliaizaguirre on 7/21/14.
 */
SC.initialize({
    client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function)); {
    SC.get("/tracks/293", function(tracks){
        SC.oEmbed(track.permalink_url, document.getElementById("player"));
    };;
});
