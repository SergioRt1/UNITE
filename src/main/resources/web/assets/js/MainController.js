var controller = (function () {
    var user = "SergioRt1";
    var events;


    var getEvents = function (callback) {
        axios.get("http://localhost:8080/unite/events/invited/" + user)
            .then(function (response) {
                events = response.data;
            })
            .catch(function (error) {
            })
            .then(function () {
                callback(events);
            });
    };
    var getUser = function () {
        return user;
    };
    var getIdCurrentEvent = function () {
        return localStorage.getItem("id");
    };
    var setIdCurrentEvent = function (ev) {
        localStorage.setItem("id", ev);
    };

    var saveEditedEvent = function (pos) {
        axios.put("http://localhost:8080/unite/" + createdEvts[pos].id + "/rename/" + createdEvts[pos].name)
            .then(function (response) {
                location.reload(true);
                alert("Event name changed");
            })
            .catch(function (error) {

            })
            .then(function () {
            });
    }
    return {
        getUser: getUser,
        getIdCurrentEvent: getIdCurrentEvent,
        setIdCurrentEvent: setIdCurrentEvent,
        getEvents: getEvents

    };
})();

function showEvents(evts) {
    var body = document.getElementById("events");
    for (var i = 0; i < evts.length; i++) {
        var tab = document.createElement("div");
        tab.setAttribute("class", "card");
        body.appendChild(tab);
        tab.innerHTML =

            '<div class="card-content">'
            + '<div class="card-body">'
            + '<h4 class="card-title info">' + evts[i]["name"] + '</h4>'
            + '<p class="card-text">Description: ' + evts[i]["description"] + '</p>'
            + '<p class="card-text">Date: ' + evts[i]["date"] + '</p>'
            + '<a href="event-dashboard.html" onclick="controller.setIdCurrentEvent(' + evts[i]["id"] + ')" class="btn btn-outline-info">Go to event dashboard</a>'
            + '</div>'
            + '</div>';

    }
}

var theWall = (function () {
    

    var getEvents = function (callback) {
        axios.get("http://localhost:8080/unite/events/invited/" + user)
            .then(function (response) {
                events = response.data;
            })
            .catch(function (error) {
            })
            .then(function () {
                callback(events);
            });
    };
    var getUser = function () {
        return user;
    };
    var getIdCurrentEvent = function () {
        return localStorage.getItem("id");
    };
    var setIdCurrentEvent = function (ev) {
        localStorage.setItem("id", ev);
    };

    var saveEditedEvent = function (pos) {
        axios.put("http://localhost:8080/unite/" + createdEvts[pos].id + "/rename/" + createdEvts[pos].name)
            .then(function (response) {
                location.reload(true);
                alert("Event name changed");
            })
            .catch(function (error) {

            })
            .then(function () {
            });
    }
    return {
        getUser: getUser,
        getIdCurrentEvent: getIdCurrentEvent,
        setIdCurrentEvent: setIdCurrentEvent,
        getEvents: getEvents

    };
})();


