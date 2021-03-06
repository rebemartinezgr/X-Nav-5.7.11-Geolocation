
window.onload = function(){


$("#botontry").click(function(){
	getLocation();
});

function getLocation() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        $("#demo").html("Geolocation is not supported by this browser.");
    }
}


function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon)
    mapholder = document.getElementById('mapholder')
    mapholder.style.height = '250px';
    mapholder.style.width = '500px';

    var myOptions = {
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }
    
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
    $("#demo").html("Your Geolocation:");
    $("#botontry").remove();
}

function showError(error) {
	console.log("error");
    switch(error.code) {
        case error.PERMISSION_DENIED:
             $("#demo").html("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            $("#demo").html("Location information is unavailable.");
            break;
        case error.TIMEOUT:
             $("#demo").html("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            $("#demo").html("An unknown error occurred.");
            break;
    }
}
};

