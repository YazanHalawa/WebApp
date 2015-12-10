// authentication object
var auth = {
    register: function(firstName, lastName, username, password, wish1, wish2, wish3, bdMonth, bdDay, bdYear, gender, profilePic, cb) {
        // submit request to server, call the callback when complete
        var url = "/register";
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',
            data: {
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
                wish1: wish1,
                wish2: wish2,
                wish3: wish3,
                bdMonth: bdMonth,
                bdDay: bdDay,
                bdYear: bdYear,
                gender: gender,
                profilePic: profilePic
            },
            // on success, store a login token
            success: function(res) {
                console.log("found");
                localStorage.token = res.token;
                localStorage.username = username;
                localStorage.name = res.name;
                if (cb)
                    cb(true);
                this.onChange(true);
            }.bind(this),
            error: function(status, err) {
                console.log("not found");
                // if there is an error, remove any login token
                delete localStorage.token;
                if (cb)
                    cb(false);
                this.onChange(false);
            }.bind(this)
        });
    },
    // login the user
    login: function(username, password, cb) {
        // submit login request to server, call callback when complete
        cb = arguments[arguments.length - 1];
        // check if token in local storage
        if (localStorage.token) {
            console.log("in token");
            if (cb){
                console.log("in cb");
                cb(true);
            }
            console.log("before on change");
            this.onChange(true);
            return;
        }
        console.log("Sending request to server");
        // submit request to server
        var url = "/login";
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(res) {
                console.log("it worked");
                // on success, store a login token
                localStorage.token = res.token;
                console.log("saving %s",username);
                localStorage.username = username;
                localStorage.name = res.name;
                console.log("name is %s", localStorage.name)
                if (cb)
                    cb(true);
                this.onChange(true);
            }.bind(this),
            error: function(xhr, status, err) {
                console.log("did not work");
                // if there is an error, remove any login token
                delete localStorage.token;
                if (cb)
                    cb(false);
                this.onChange(false);
            }.bind(this)
        });
    },
    // get the token from local storage
    getToken: function() {
        return localStorage.token;
    },
    // get the name from local storage
    getName: function() {
        return localStorage.name;
    },
    // get the username from local storage
    getUsername: function(){
        return localStorage.username;
    },
    // logout the user, call the callback when complete
    logout: function(cb) {
        delete localStorage.token;
        if (cb) cb();
        this.onChange(false);
    },
    // check if user is logged in
    loggedIn: function() {
        return !!localStorage.token;
    },
    // default onChange function
    onChange: function() {}
};

module.exports = auth