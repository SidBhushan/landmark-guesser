let map

function initMap() {
    let location = getLocation()
    console.log(location)

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {lat: location.lat, lng: 0}
    })

    let lineCoordinates = [
        {lat: location.lat, lng: 0},
        {lat: location.lat, lng: 180},
    ]

    let line = new google.maps.Polyline({
        path: lineCoordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })

    let lineCoordinates2 = [
        {lat: location.lat, lng: 0},
        {lat: location.lat, lng: -180}
    ]

    let line2 = new google.maps.Polyline({
        path: lineCoordinates2,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })

    line.setMap(map)
    line2.setMap(map)
}

function getLocation() {
    let url = new URL(window.location.href)
    return {
        lat: Number(url.searchParams.get('lat'))
    }
}

function guess() {
    let url = new URL(window.location.href)
    let id = url.searchParams.get('id')
    location.assign(`submit.html?id=${id}`)
}