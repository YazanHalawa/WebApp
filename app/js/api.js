// API object
var api = {
    // get the list of items, call the callback when complete
    getItems: function(username, path, cb) {
        var url = path + username;
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
            headers: {'Authorization': localStorage.token},
            success: function(res) {
                if (cb)
                    cb(true, res);
            },
            error: function(xhr, status, err) {
                // if there is an error, remove the login token
                //delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });
    },
    // get the list of items, call the callback when complete
    getFriendItems: function(username, friendUsername, path, cb) {
        console.log("i am %s and she is %s", username, friendUsername);
        var url = path + username;
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',
            data:{
                friendUsername: friendUsername
            },
            headers: {'Authorization': localStorage.token},
            success: function(res) {
                if (cb)
                    cb(true, res);
            },
            error: function(xhr, status, err) {
                // if there is an error, remove the login token
                //delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });
    },
    // add an item, call the callback when complete
    addItem: function(username, friendUsername, cb) {
        var url = "/friend/add/" + username;
        console.log(localStorage.token);
        $.ajax({
            url: url,
            contentType: 'application/json',
            data: JSON.stringify({
                item: {
                    friendUsername: friendUsername
                }
            }),
            type: 'POST',
            headers: {'Authorization': localStorage.token},
            success: function(res) {
                if (cb)
                    cb(true, res);
            },
            error: function(xhr, status, err) {
                // if there is an error, remove the login token
                //delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });

    },
    // update an item, call the callback when complete
    updateItem: function(username, itemID, itemDescr, cb) {
        console.log("in function update username is %s", username);
        var url = "/item/update/" + username;
        $.ajax({
            url: url,
            contentType: 'application/json',
            data: JSON.stringify({
                item: {
                    _id: itemID,
                    description: itemDescr
                }
            }),
            type: 'PUT',
            headers: {'Authorization': localStorage.token},
            success: function(res) {
                if (cb)
                    cb(true, res);
            },
            error: function(xhr, status, err) {
                // if there is any error, remove any login token
                // delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });
    },
    // reserve an item by a user, call the callback when complete
    reserveItem: function(itemID, username, cb){
        console.log("in reserve item id is %s and username is %s", itemID, username);
        console.log(localStorage.token);
        var url = "/item/reserve/" + username;
        $.ajax({
            url: url,
            dataType: 'json',
            data: {
                itemID: itemID
            },
            type: 'PUT',
            headers: {'Authorization': localStorage.token},
            success: function(res) {
                if (cb)
                    cb(true, res);
            },
            error: function(xhr, status, err) {
                // if there is any error, remove any login token
                // delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });
    },

    // delete an item, call the callback when complete
    deleteItem: function(route, username, friendUsername, cb) {
        var url = route + username;
        $.ajax({
            url: url,
            type: 'DELETE',
            data: {
                friendUsername: friendUsername
            },
            headers: {'Authorization': localStorage.token},
            success: function(res) {
                if (cb)
                    cb(true, res);
            },
            error: function(xhr, status, err) {
                if (cb)
                    cb(false, status);
            }
        });
    },

    // changes the color scheme of the navbar
    changeColor: function(username, color, cb){
        var url = '/profile/updateColor/' + username;
        $.ajax({
            url: url,
            type: 'PUT',
            data: {
                colorScheme: color
            },
            headers: {'Authorization': localStorage.token},
            success: function(res) {
                if (cb)
                    cb(true);
            },
            error: function(xhr, status, err) {
                if (cb)
                    cb(false);
            }
        });
    },

    // handles sending email in the contact us form
    sendEmail: function(username, senderEmail, subjectLine, message, cb){
        var url = '/contactUs/sendEmail/' + username;
        $.ajax({
            url: url,
            type: 'POST',
            data:{
                senderEmail: senderEmail,
                subjectLine: subjectLine,
                message: message
            },
            headers: {'Authorization': localStorage.token},
            success: function(res) {
                if (cb)
                    cb(true);
            },
            error: function(xhr, status, err) {
                if (cb)
                    cb(false);
            }
        })
    },

    getwish1ID: function(){
        return localStorage.wish1ID;
    },

    setwish1ID: function(newID){
        localStorage.wish1ID = newID;
    },

    getwish2ID: function(){
        return localStorage.wish2ID;
    },

    setwish2ID: function(newID){
        localStorage.wish2ID = newID;
    },

    getwish3ID: function(){
        return localStorage.wish3ID;
    },

    setwish3ID: function(newID){
        localStorage.wish3ID = newID;
    },

    setFriendUsername: function(newUserName){
        localStorage.friendUsername = newUserName;
    },

    getFriendUsername: function(){
        return localStorage.friendUsername
    }

};

module.exports = api;
