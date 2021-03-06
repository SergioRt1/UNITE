var Login = (function () {

    function getAuthotization() {
        var username = document.getElementById("user-name").value;
        var password = document.getElementById("user-password").value;

        getToken(username, password);
    }

    function getToken(username, password) {
        axios({
            method:'post',
            url:'/login',
            headers: {'Content-Type': 'application/json'},
            data:{
                "username": username,
                "password": password
            }
        })
            .then(function (response) {
                if(response.data==="") {
                    console.log(response);
                    localStorage['AUTH_TOKEN'] = response.headers.authorization;
                    localStorage['UserLoggedIn'] = username;
                    axios.defaults.headers.common['Authorization'] = response.headers.authorization;
                    window.location.href = "/index.html";
                }else alert("Wrong credentials");
            })
            .catch(function (reason) {
                console.log(reason);
            });

    }

    function registerUser() {
        var password = document.getElementById("user-password").value;
        var confirm = document.getElementById("user-confirm").value;
        if (confirm === password) {
            var user = {
                "username": document.getElementById("user-name").value,
                "name" : document.getElementById("namesOfUser").value,
                "mail" : document.getElementById("user-email").value,
                "password" : password
            };
            register(user);
        } else alert("The password and confirmation are not equal");
    }

    function register(user) {
        axios.post('/users/sign-up', user)
            .then(function (response) {
                console.log(response);
                window.location.href = "/login.html"
            })
            .catch(function (reason) {
                console.log(reason);
                alert(reason.response.data)
            })
    }

    function getTokenSaved() {
        return localStorage["AUTH_TOKEN"] || "";
    }

    function logout() {
        localStorage['AUTH_TOKEN'] = '';
        localStorage['UserLoggedIn'] = '';
    }

    function isLogin() {
        if(localStorage['AUTH_TOKEN'].startsWith("Bearer")) {
            document.getElementById("user-name-header").innerHTML = localStorage['UserLoggedIn'];
            axios.defaults.headers.common['Authorization'] = localStorage['AUTH_TOKEN'];
        }else {
            window.location.href = "/login.html";
        }


    }

    return {
        getAuthotization: getAuthotization,
        registerUser: registerUser,
        logoutUser:logout,
        isLogin:isLogin
    };
})();