// API object
var api = {
    // get the list of items, call the callback when complete
    getItems: function(username, cb) {
        var url = "/profile/get/" + username;
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
    // delete an item, call the callback when complete
    deleteItem: function(username, friendUsername, cb) {
        var url = "/friend/remove/" + username;
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
                // if there is an error, remove any login token
                //delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });
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

};

module.exports = api;
