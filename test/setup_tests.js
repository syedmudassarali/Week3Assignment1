var async = require('async');
function connectDB(callback) {
    mongoClient.connect(dbConfig.testDBURL, function(err, db) {
        assert.equal(null, err);
        reader_test_db = db;
        console.log("Connected correctly to server");
        callback(0);
    });
}

function dropUserCollection(callback) {
        console.log("dropUserCollection");
        user = reader_test_db.collection('user');
        if (undefined != user) {
            user.drop(function(err, reply) {
                console.log('user collection dropped');
                callback(0);
            });
        } else {
            callback(0);
        }
    }

function dropUserFeedEntryCollection(callback) {
        console.log("dropUserFeedEntryCollection");
        user_feed_entry = reader_test_db.collection('user_feed_entry');
        if (undefined != user_feed_entry) {
            user_feed_entry.drop(function(err, reply) {
                console.log('user_feed_entry collection dropped');
                callback(0);
            });
        } else {
            callback(0);
        }
    }

function closeDB(callback) {
    reader_test_db.close();
}

async.series([connectDB, dropUserCollection, dropUserFeedEntryCollection, dropUserFeedEntryCollection, closeDB]);
