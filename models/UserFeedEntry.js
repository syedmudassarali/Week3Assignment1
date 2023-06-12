const mongoose = require('mongoose');

const UserFeedEntrySchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId },
    feedEntryID: { type: mongoose.Schema.Types.ObjectId },
    feedID: { type: mongoose.Schema.Types.ObjectId },
    read : { type: Boolean, default: false }
});
{ collection: 'UserFeedEntry' }
UserFeedEntrySchema.index({userID : 1, feedID : 1, feedEntryID : 1, read : 1});
module.exports = mongoose.model('UserFeedEntry', UserFeedEntrySchema);
