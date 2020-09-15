function initMap() {
    var map = new google.maps.Map(document.getElementById("corralejo-map"), {
    zoom: 15,
    center: {
      lat: 28.730549,
      lng: -13.868915
    }
  });
    var map2 = new google.maps.Map(document.getElementById("castillo-caleta-de-fuste-map"), {
    zoom: 15,
    center: {
      lat: 28.394239,
      lng: -13.869486
    }
  });
  var map3 = new google.maps.Map(document.getElementById("costa-de-antigua-map"), {
    zoom: 15,
    center: {
      lat: 28.416212,
      lng: -13.860944
    }
  });
  var map4 = new google.maps.Map(document.getElementById("morro-jable-map"), {
    zoom: 15,
    center: {
      lat: 28.050830,
      lng: -14.357028
    }
  });
  var map5 = new google.maps.Map(document.getElementById("el-cotillo-map"), {
    zoom: 15,
    center: {
      lat: 28.686300,
      lng: -14.010794
    }
  });
  var map6 = new google.maps.Map(document.getElementById("puerto-del-rosario-map"), {
    zoom: 15,
    center: {
      lat: 28.502924,
      lng: -13.860808
    }
  });
  var map7 = new google.maps.Map(document.getElementById("playa-jandia-map"), {
    zoom: 15,
    center: {
      lat: 28.115960,
      lng: -14.262332
    }
  });
};